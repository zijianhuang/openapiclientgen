import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccessTokenCredentials {
		client_id?: string | null;
		client_secret?: string | null;
		code?: string | null;
		grant_type?: AccessTokenCredentialsGrant_type | null;
		redirect_uri?: string | null;
		refresh_token?: string | null;
		scope?: string | null;
		state?: string | null;
	}
	export interface AccessTokenCredentialsFormProperties {
		client_id: FormControl<string | null | undefined>,
		client_secret: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		grant_type: FormControl<AccessTokenCredentialsGrant_type | null | undefined>,
		redirect_uri: FormControl<string | null | undefined>,
		refresh_token: FormControl<string | null | undefined>,
		scope: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateAccessTokenCredentialsFormGroup() {
		return new FormGroup<AccessTokenCredentialsFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined),
			client_secret: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			grant_type: new FormControl<AccessTokenCredentialsGrant_type | null | undefined>(undefined),
			redirect_uri: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccessTokenCredentialsGrant_type { client_credentials = 0, authorization_code = 1, refresh_token = 2 }

	export interface ActivityActivityType {
		category?: ActivityActivityTypeCategory | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
	}
	export interface ActivityActivityTypeFormProperties {
		category: FormControl<ActivityActivityTypeCategory | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateActivityActivityTypeFormGroup() {
		return new FormGroup<ActivityActivityTypeFormProperties>({
			category: new FormControl<ActivityActivityTypeCategory | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivityActivityTypeCategory { Personal = 0, Absences = 1, CalendarEntry = 2, SalesEvent = 3, Task = 4 }

	export enum ActivityCategory { Personal = 0, Absences = 1, CalendarEntry = 2, SalesEvent = 3, Task = 4 }

	export interface ActivityCustomer {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface ActivityCustomerFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateActivityCustomerFormGroup() {
		return new FormGroup<ActivityCustomerFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ActivityModel {

		/** Required */
		activityType: ActivityActivityType;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: ActivityCustomer;
		endDateTime?: Date | null;
		guid?: string | null;
		hasDuration?: boolean | null;
		hasHours?: boolean | null;
		isAllDay?: boolean | null;
		isClosed?: boolean | null;
		isUnassigned?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		location?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		notes?: string | null;

		/** Required */
		ownerUser: ActivityOwnerModel;
		phase?: ActivityPhase;
		projectTaskStatus?: ModelWithName;
		recurrence?: ActivityRecurrenceModel;
		recurrenceParentActivityGuid?: string | null;
		recurrenceRule?: string | null;
		recurrenceType?: ActivityModelRecurrenceType | null;

		/** Required */
		startDateTime: Date;
	}
	export interface ActivityModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		endDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		hasDuration: FormControl<boolean | null | undefined>,
		hasHours: FormControl<boolean | null | undefined>,
		isAllDay: FormControl<boolean | null | undefined>,
		isClosed: FormControl<boolean | null | undefined>,
		isUnassigned: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		recurrenceParentActivityGuid: FormControl<string | null | undefined>,
		recurrenceRule: FormControl<string | null | undefined>,
		recurrenceType: FormControl<ActivityModelRecurrenceType | null | undefined>,

		/** Required */
		startDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateActivityModelFormGroup() {
		return new FormGroup<ActivityModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			hasDuration: new FormControl<boolean | null | undefined>(undefined),
			hasHours: new FormControl<boolean | null | undefined>(undefined),
			isAllDay: new FormControl<boolean | null | undefined>(undefined),
			isClosed: new FormControl<boolean | null | undefined>(undefined),
			isUnassigned: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			notes: new FormControl<string | null | undefined>(undefined),
			recurrenceParentActivityGuid: new FormControl<string | null | undefined>(undefined),
			recurrenceRule: new FormControl<string | null | undefined>(undefined),
			recurrenceType: new FormControl<ActivityModelRecurrenceType | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserWithFirstNameLastNameAndPhotoFileModel {
		code?: string | null;
		firstName?: string | null;
		guid?: string | null;
		lastName?: string | null;
		name?: string | null;
	}
	export interface UserWithFirstNameLastNameAndPhotoFileModelFormProperties {
		code: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserWithFirstNameLastNameAndPhotoFileModelFormGroup() {
		return new FormGroup<UserWithFirstNameLastNameAndPhotoFileModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityOwnerModel {
		code?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		keywords?: Array<ActivityOwnerKeyword>;
		name?: string | null;
	}
	export interface ActivityOwnerModelFormProperties {
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateActivityOwnerModelFormGroup() {
		return new FormGroup<ActivityOwnerModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityOwnerKeyword {
		guid?: string | null;
		value?: string | null;
	}
	export interface ActivityOwnerKeywordFormProperties {
		guid: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateActivityOwnerKeywordFormGroup() {
		return new FormGroup<ActivityOwnerKeywordFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityPhase {
		guid?: string | null;
		isLocked?: boolean | null;
		name?: string | null;
		projectGuid?: string | null;
		projectName?: string | null;
		projectNumber?: number | null;
		projectOwnerGuid?: string | null;
	}
	export interface ActivityPhaseFormProperties {
		guid: FormControl<string | null | undefined>,
		isLocked: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		projectGuid: FormControl<string | null | undefined>,
		projectName: FormControl<string | null | undefined>,
		projectNumber: FormControl<number | null | undefined>,
		projectOwnerGuid: FormControl<string | null | undefined>,
	}
	export function CreateActivityPhaseFormGroup() {
		return new FormGroup<ActivityPhaseFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectGuid: new FormControl<string | null | undefined>(undefined),
			projectName: new FormControl<string | null | undefined>(undefined),
			projectNumber: new FormControl<number | null | undefined>(undefined),
			projectOwnerGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModelWithName {
		guid?: string | null;
		name?: string | null;
	}
	export interface ModelWithNameFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateModelWithNameFormGroup() {
		return new FormGroup<ModelWithNameFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityRecurrenceModel {
		exceptions?: Array<string>;

		/** Required */
		frequency: ActivityRecurrenceModelFrequency;
		lastOccurrenceDateTime?: Date | null;
		pattern?: RecurrencePattern;
		range?: RecurrenceRange;
	}
	export interface ActivityRecurrenceModelFormProperties {

		/** Required */
		frequency: FormControl<ActivityRecurrenceModelFrequency | null | undefined>,
		lastOccurrenceDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateActivityRecurrenceModelFormGroup() {
		return new FormGroup<ActivityRecurrenceModelFormProperties>({
			frequency: new FormControl<ActivityRecurrenceModelFrequency | null | undefined>(undefined, [Validators.required]),
			lastOccurrenceDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ActivityRecurrenceModelFrequency { Daily = 0, Weekly = 1, Monthly = 2, Yearly = 3 }

	export interface RecurrencePattern {
		daily?: DailyModel;
		monthly?: MonthlyModel;
		weekly?: WeeklyModel;
		yearly?: YearlyModel;
	}
	export interface RecurrencePatternFormProperties {
	}
	export function CreateRecurrencePatternFormGroup() {
		return new FormGroup<RecurrencePatternFormProperties>({
		});

	}

	export interface DailyModel {
		everyWeekday?: boolean | null;
		interval?: number | null;
	}
	export interface DailyModelFormProperties {
		everyWeekday: FormControl<boolean | null | undefined>,
		interval: FormControl<number | null | undefined>,
	}
	export function CreateDailyModelFormGroup() {
		return new FormGroup<DailyModelFormProperties>({
			everyWeekday: new FormControl<boolean | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MonthlyModel {
		dayOfMonth?: number | null;
		dayOrdinal?: MonthlyModelDayOrdinal | null;
		dayOrdinalOption?: MonthlyModelDayOrdinalOption | null;
		interval?: number | null;
	}
	export interface MonthlyModelFormProperties {
		dayOfMonth: FormControl<number | null | undefined>,
		dayOrdinal: FormControl<MonthlyModelDayOrdinal | null | undefined>,
		dayOrdinalOption: FormControl<MonthlyModelDayOrdinalOption | null | undefined>,
		interval: FormControl<number | null | undefined>,
	}
	export function CreateMonthlyModelFormGroup() {
		return new FormGroup<MonthlyModelFormProperties>({
			dayOfMonth: new FormControl<number | null | undefined>(undefined),
			dayOrdinal: new FormControl<MonthlyModelDayOrdinal | null | undefined>(undefined),
			dayOrdinalOption: new FormControl<MonthlyModelDayOrdinalOption | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MonthlyModelDayOrdinal { First = 0, Second = 1, Third = 2, Fourth = 3, Last = 4 }

	export enum MonthlyModelDayOrdinalOption { Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, WeekDay = 6, Saturday = 7, WeekendDay = 8, Day = 9 }

	export interface WeeklyModel {
		friday?: boolean | null;
		interval?: number | null;
		monday?: boolean | null;
		saturday?: boolean | null;
		sunday?: boolean | null;
		thursday?: boolean | null;
		tuesday?: boolean | null;
		wednesday?: boolean | null;
	}
	export interface WeeklyModelFormProperties {
		friday: FormControl<boolean | null | undefined>,
		interval: FormControl<number | null | undefined>,
		monday: FormControl<boolean | null | undefined>,
		saturday: FormControl<boolean | null | undefined>,
		sunday: FormControl<boolean | null | undefined>,
		thursday: FormControl<boolean | null | undefined>,
		tuesday: FormControl<boolean | null | undefined>,
		wednesday: FormControl<boolean | null | undefined>,
	}
	export function CreateWeeklyModelFormGroup() {
		return new FormGroup<WeeklyModelFormProperties>({
			friday: new FormControl<boolean | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			monday: new FormControl<boolean | null | undefined>(undefined),
			saturday: new FormControl<boolean | null | undefined>(undefined),
			sunday: new FormControl<boolean | null | undefined>(undefined),
			thursday: new FormControl<boolean | null | undefined>(undefined),
			tuesday: new FormControl<boolean | null | undefined>(undefined),
			wednesday: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface YearlyModel {
		dayOfMonth?: number | null;
		dayOrdinal?: MonthlyModelDayOrdinal | null;
		dayOrdinalOption?: MonthlyModelDayOrdinalOption | null;
		month?: YearlyModelMonth | null;
	}
	export interface YearlyModelFormProperties {
		dayOfMonth: FormControl<number | null | undefined>,
		dayOrdinal: FormControl<MonthlyModelDayOrdinal | null | undefined>,
		dayOrdinalOption: FormControl<MonthlyModelDayOrdinalOption | null | undefined>,
		month: FormControl<YearlyModelMonth | null | undefined>,
	}
	export function CreateYearlyModelFormGroup() {
		return new FormGroup<YearlyModelFormProperties>({
			dayOfMonth: new FormControl<number | null | undefined>(undefined),
			dayOrdinal: new FormControl<MonthlyModelDayOrdinal | null | undefined>(undefined),
			dayOrdinalOption: new FormControl<MonthlyModelDayOrdinalOption | null | undefined>(undefined),
			month: new FormControl<YearlyModelMonth | null | undefined>(undefined),
		});

	}

	export enum YearlyModelMonth { January = 0, February = 1, March = 2, April = 3, May = 4, June = 5, July = 6, August = 7, September = 8, October = 9, November = 10, December = 11 }

	export interface RecurrenceRange {
		maxOccurrences?: number | null;
		recursUntilDate?: Date | null;
	}
	export interface RecurrenceRangeFormProperties {
		maxOccurrences: FormControl<number | null | undefined>,
		recursUntilDate: FormControl<Date | null | undefined>,
	}
	export function CreateRecurrenceRangeFormGroup() {
		return new FormGroup<RecurrenceRangeFormProperties>({
			maxOccurrences: new FormControl<number | null | undefined>(undefined),
			recursUntilDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ActivityModelRecurrenceType { None = 0, Occurrence = 1, Exception = 2, Series = 3 }

	export interface ActivityParticipantModel {

		/**
		 * Required
		 * Min length: 1
		 */
		activityGuid: string;
		email?: string | null;
		guid?: string | null;
		isActive?: boolean | null;
		mobilePhone?: string | null;
		name?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		participantGuid: string;
		phone?: string | null;
		status?: ActivityParticipantModelStatus | null;
		type?: ActivityParticipantModelType | null;
	}
	export interface ActivityParticipantModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		activityGuid: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		mobilePhone: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		participantGuid: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		status: FormControl<ActivityParticipantModelStatus | null | undefined>,
		type: FormControl<ActivityParticipantModelType | null | undefined>,
	}
	export function CreateActivityParticipantModelFormGroup() {
		return new FormGroup<ActivityParticipantModelFormProperties>({
			activityGuid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			email: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			mobilePhone: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			participantGuid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			phone: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ActivityParticipantModelStatus | null | undefined>(undefined),
			type: new FormControl<ActivityParticipantModelType | null | undefined>(undefined),
		});

	}

	export enum ActivityParticipantModelStatus { Unknown = 0, Invited = 1, Accepted = 2, Tentative = 3, Declined = 4 }

	export enum ActivityParticipantModelType { User = 0, Contact = 1, Resource = 2, Other = 3 }

	export interface ActivityTypeModel {

		/** Required */
		category: ActivityActivityTypeCategory;
		code?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		isDefault?: boolean | null;
		isPaidLeave?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface ActivityTypeModelFormProperties {

		/** Required */
		category: FormControl<ActivityActivityTypeCategory | null | undefined>,
		code: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isPaidLeave: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateActivityTypeModelFormGroup() {
		return new FormGroup<ActivityTypeModelFormProperties>({
			category: new FormControl<ActivityActivityTypeCategory | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isPaidLeave: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface AddressCountry {
		englishName?: string | null;
		guid?: string | null;
		hasRegions?: AddressCountryHasRegions | null;
		name?: string | null;
	}
	export interface AddressCountryFormProperties {
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		hasRegions: FormControl<AddressCountryHasRegions | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddressCountryFormGroup() {
		return new FormGroup<AddressCountryFormProperties>({
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			hasRegions: new FormControl<AddressCountryHasRegions | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AddressCountryHasRegions { NoRegion = 0, Unknown = 1, HasRegions = 2 }

	export interface AddressCustomer {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface AddressCustomerFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateAddressCustomerFormGroup() {
		return new FormGroup<AddressCustomerFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AddressModel {
		addressline?: string | null;
		city?: string | null;
		contacts?: Array<ModelWithName>;
		country?: AddressCountry;
		countryRegion?: ModelWithName;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: AddressCustomer;
		fax?: string | null;
		guid?: string | null;
		isBillingAddress?: boolean | null;
		isPostalAddress?: boolean | null;
		isVisitAddress?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		phone?: string | null;
		postalCode?: string | null;
	}
	export interface AddressModelFormProperties {
		addressline: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		fax: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isBillingAddress: FormControl<boolean | null | undefined>,
		isPostalAddress: FormControl<boolean | null | undefined>,
		isVisitAddress: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		phone: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreateAddressModelFormGroup() {
		return new FormGroup<AddressModelFormProperties>({
			addressline: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isBillingAddress: new FormControl<boolean | null | undefined>(undefined),
			isPostalAddress: new FormControl<boolean | null | undefined>(undefined),
			isVisitAddress: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BankAccountFormat { Iban = 0, Bankgiro = 1 }

	export interface BankAccountOutputModel {

		/**
		 * Required
		 * Min length: 1
		 */
		accountNumber: string;
		accountNumberFormat?: BankAccountFormat | null;

		/**
		 * Required
		 * Min length: 1
		 */
		bankName: string;
		bic?: string | null;
		businessUnit?: ModelWithName;
		company?: ModelWithName;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
	}
	export interface BankAccountOutputModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		accountNumber: FormControl<string | null | undefined>,
		accountNumberFormat: FormControl<BankAccountFormat | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		bankName: FormControl<string | null | undefined>,
		bic: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateBankAccountOutputModelFormGroup() {
		return new FormGroup<BankAccountOutputModelFormProperties>({
			accountNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			accountNumberFormat: new FormControl<BankAccountFormat | null | undefined>(undefined),
			bankName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			bic: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BillablePeriod { Any = 0, Past = 1, Future = 2, NowAndPast = 3, NowAndFuture = 4 }

	export enum BillableStatusType { Billable = 0, NotBillable = 1, RemovedFromInvoice = 2 }

	export interface BillingAddressModel {
		addressline?: string | null;
		city?: string | null;
		country?: string | null;
		guid?: string | null;
		postalCode?: string | null;
	}
	export interface BillingAddressModelFormProperties {
		addressline: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreateBillingAddressModelFormGroup() {
		return new FormGroup<BillingAddressModelFormProperties>({
			addressline: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillingCustomerModel {
		eInvoiceAddress?: string | null;
		eInvoiceOperator?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
	}
	export interface BillingCustomerModelFormProperties {
		eInvoiceAddress: FormControl<string | null | undefined>,
		eInvoiceOperator: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateBillingCustomerModelFormGroup() {
		return new FormGroup<BillingCustomerModelFormProperties>({
			eInvoiceAddress: new FormControl<string | null | undefined>(undefined),
			eInvoiceOperator: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BillingScheduleType { Immediately = 0, WhenPhaseCompleted = 1, OnDate = 2 }

	export interface BusinessUnitCostCenterModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		identifier?: string | null;
		name?: string | null;
	}
	export interface BusinessUnitCostCenterModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateBusinessUnitCostCenterModelFormGroup() {
		return new FormGroup<BusinessUnitCostCenterModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			identifier: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessUnitModel {
		code?: string | null;
		companyBusinessUnitGuid?: string | null;
		companyCountryGuid?: string | null;
		companyCurrencyGuid?: string | null;
		companyGuid?: string | null;
		companyName?: string | null;
		costCenter?: BusinessUnitCostCenterModel;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;

		/**
		 * Max length: 25
		 * Min length: 0
		 */
		kvkNumber?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		parentGuid?: string | null;
		vatNumber?: string | null;
	}
	export interface BusinessUnitModelFormProperties {
		code: FormControl<string | null | undefined>,
		companyBusinessUnitGuid: FormControl<string | null | undefined>,
		companyCountryGuid: FormControl<string | null | undefined>,
		companyCurrencyGuid: FormControl<string | null | undefined>,
		companyGuid: FormControl<string | null | undefined>,
		companyName: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 25
		 * Min length: 0
		 */
		kvkNumber: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		parentGuid: FormControl<string | null | undefined>,
		vatNumber: FormControl<string | null | undefined>,
	}
	export function CreateBusinessUnitModelFormGroup() {
		return new FormGroup<BusinessUnitModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			companyBusinessUnitGuid: new FormControl<string | null | undefined>(undefined),
			companyCountryGuid: new FormControl<string | null | undefined>(undefined),
			companyCurrencyGuid: new FormControl<string | null | undefined>(undefined),
			companyGuid: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			kvkNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(25)]),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			parentGuid: new FormControl<string | null | undefined>(undefined),
			vatNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessUnitSubModel {
		code?: string | null;
		companyBusinessUnitGuid?: string | null;
		companyCountryGuid?: string | null;
		companyCurrencyGuid?: string | null;
		companyGuid?: string | null;
		companyName?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
	}
	export interface BusinessUnitSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		companyBusinessUnitGuid: FormControl<string | null | undefined>,
		companyCountryGuid: FormControl<string | null | undefined>,
		companyCurrencyGuid: FormControl<string | null | undefined>,
		companyGuid: FormControl<string | null | undefined>,
		companyName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateBusinessUnitSubModelFormGroup() {
		return new FormGroup<BusinessUnitSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			companyBusinessUnitGuid: new FormControl<string | null | undefined>(undefined),
			companyCountryGuid: new FormControl<string | null | undefined>(undefined),
			companyCurrencyGuid: new FormControl<string | null | undefined>(undefined),
			companyGuid: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientCredentials {

		/**
		 * Required
		 * Min length: 1
		 */
		client_id: string;

		/**
		 * Required
		 * Min length: 1
		 */
		client_secret: string;
		scope?: string | null;
	}
	export interface ClientCredentialsFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		client_id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		client_secret: FormControl<string | null | undefined>,
		scope: FormControl<string | null | undefined>,
	}
	export function CreateClientCredentialsFormGroup() {
		return new FormGroup<ClientCredentialsFormProperties>({
			client_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			client_secret: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommunicationMethodType { Phone = 0, Fax = 1, MobilePhone = 2, IPPhone = 3, InstantMessenger = 4, EmailAddress = 5 }

	export interface CommunicationTypeModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		type?: CommunicationMethodType | null;
	}
	export interface CommunicationTypeModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		type: FormControl<CommunicationMethodType | null | undefined>,
	}
	export function CreateCommunicationTypeModelFormGroup() {
		return new FormGroup<CommunicationTypeModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			type: new FormControl<CommunicationMethodType | null | undefined>(undefined),
		});

	}

	export interface CommunicationTypeSubModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		isActive?: boolean | null;
		name?: string | null;
		type?: CommunicationMethodType | null;
	}
	export interface CommunicationTypeSubModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<CommunicationMethodType | null | undefined>,
	}
	export function CreateCommunicationTypeSubModelFormGroup() {
		return new FormGroup<CommunicationTypeSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CommunicationMethodType | null | undefined>(undefined),
		});

	}

	export interface CompanyCountry {
		code3?: string | null;
		englishName?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface CompanyCountryFormProperties {
		code3: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCompanyCountryFormGroup() {
		return new FormGroup<CompanyCountryFormProperties>({
			code3: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompanyModel {
		country?: CompanyCountry;
		currencyCode?: string | null;
		currencyGuid?: string | null;
		currencyRate?: number | null;
		currencySymbol?: string | null;
		guid?: string | null;
		name?: string | null;
		rootBusinessUnitGuid?: string | null;
	}
	export interface CompanyModelFormProperties {
		currencyCode: FormControl<string | null | undefined>,
		currencyGuid: FormControl<string | null | undefined>,
		currencyRate: FormControl<number | null | undefined>,
		currencySymbol: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		rootBusinessUnitGuid: FormControl<string | null | undefined>,
	}
	export function CreateCompanyModelFormGroup() {
		return new FormGroup<CompanyModelFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			currencyGuid: new FormControl<string | null | undefined>(undefined),
			currencyRate: new FormControl<number | null | undefined>(undefined),
			currencySymbol: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rootBusinessUnitGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactCommunicationModel {

		/** Required */
		communicationType: CommunicationTypeSubModel;

		/** Required */
		contact: ModelBaseWithRequiredGuid;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isForbiddenToUse?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		value: string;
	}
	export interface ContactCommunicationModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isForbiddenToUse: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateContactCommunicationModelFormGroup() {
		return new FormGroup<ContactCommunicationModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isForbiddenToUse: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ModelBaseWithRequiredGuid {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
	}
	export interface ModelBaseWithRequiredGuidFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateModelBaseWithRequiredGuidFormGroup() {
		return new FormGroup<ModelBaseWithRequiredGuidFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactCustomer {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
		number?: number | null;
	}
	export interface ContactCustomerFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateContactCustomerFormGroup() {
		return new FormGroup<ContactCustomerFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContactKeywordModel {
		category?: ContactKeywordModelCategory | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		keyword: string;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
	}
	export interface ContactKeywordModelFormProperties {
		category: FormControl<ContactKeywordModelCategory | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		keyword: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateContactKeywordModelFormGroup() {
		return new FormGroup<ContactKeywordModelFormProperties>({
			category: new FormControl<ContactKeywordModelCategory | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ContactKeywordModelCategory { Project = 0, Contact = 1, User = 2, File = 3 }

	export interface ContactModel {
		addressGuid?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;

		/** Required */
		customer: ContactCustomer;
		dateOfBirth?: Date | null;
		description?: string | null;
		emails?: Array<string>;

		/**
		 * Required
		 * Min length: 1
		 */
		firstName: string;
		guid?: string | null;
		isActive?: boolean | null;
		isDeleted?: boolean | null;
		isEmailAllowed?: boolean | null;
		jobTitle?: string | null;
		language?: ModelWithName;

		/**
		 * Required
		 * Min length: 1
		 */
		lastName: string;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		name?: string | null;
		phoneNumbers?: Array<string>;
		role?: ModelWithName;
		salutation?: ContactModelSalutation | null;
		satisfactionLevel?: ContactModelSatisfactionLevel | null;
		timeZone?: ModelWithName;
	}
	export interface ContactModelFormProperties {
		addressGuid: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		dateOfBirth: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		firstName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDeleted: FormControl<boolean | null | undefined>,
		isEmailAllowed: FormControl<boolean | null | undefined>,
		jobTitle: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		lastName: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		salutation: FormControl<ContactModelSalutation | null | undefined>,
		satisfactionLevel: FormControl<ContactModelSatisfactionLevel | null | undefined>,
	}
	export function CreateContactModelFormGroup() {
		return new FormGroup<ContactModelFormProperties>({
			addressGuid: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			dateOfBirth: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			isEmailAllowed: new FormControl<boolean | null | undefined>(undefined),
			jobTitle: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			salutation: new FormControl<ContactModelSalutation | null | undefined>(undefined),
			satisfactionLevel: new FormControl<ContactModelSatisfactionLevel | null | undefined>(undefined),
		});

	}

	export enum ContactModelSalutation { 'Mr.' = 0, 'Mrs.' = 1, 'Ms.' = 2 }

	export enum ContactModelSatisfactionLevel { Unsatisfied = 0, Neutral = 1, Satisfied = 2, Unknown = 3 }

	export interface ContactRoleModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface ContactRoleModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContactRoleModelFormGroup() {
		return new FormGroup<ContactRoleModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface CostAccountModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		isTravelTypeDefault?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Min length: 1
		 */
		number: string;
	}
	export interface CostAccountModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isTravelTypeDefault: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		number: FormControl<string | null | undefined>,
	}
	export function CreateCostAccountModelFormGroup() {
		return new FormGroup<CostAccountModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isTravelTypeDefault: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface CostCenterModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		identifier: string;
		isActive?: boolean | null;
		isDefault?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface CostCenterModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		identifier: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCostCenterModelFormGroup() {
		return new FormGroup<CostCenterModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface CountryLanguage {
		guid?: string | null;
		name?: string | null;
	}
	export interface CountryLanguageFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryLanguageFormGroup() {
		return new FormGroup<CountryLanguageFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CountryModel {
		code2?: string | null;
		code3?: string | null;
		companyRegisterUrl?: string | null;
		currency?: CurrencyBaseModel;
		defaultCulture?: string | null;
		defaultLanguage?: CountryLanguage;
		englishName?: string | null;
		guid?: string | null;
		hasRegions?: AddressCountryHasRegions | null;
		isInEU?: boolean | null;
		isRegistrationCountry?: boolean | null;
		name?: string | null;
		timezone?: CountryTimezone;
	}
	export interface CountryModelFormProperties {
		code2: FormControl<string | null | undefined>,
		code3: FormControl<string | null | undefined>,
		companyRegisterUrl: FormControl<string | null | undefined>,
		defaultCulture: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		hasRegions: FormControl<AddressCountryHasRegions | null | undefined>,
		isInEU: FormControl<boolean | null | undefined>,
		isRegistrationCountry: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryModelFormGroup() {
		return new FormGroup<CountryModelFormProperties>({
			code2: new FormControl<string | null | undefined>(undefined),
			code3: new FormControl<string | null | undefined>(undefined),
			companyRegisterUrl: new FormControl<string | null | undefined>(undefined),
			defaultCulture: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			hasRegions: new FormControl<AddressCountryHasRegions | null | undefined>(undefined),
			isInEU: new FormControl<boolean | null | undefined>(undefined),
			isRegistrationCountry: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CurrencyBaseModel {
		code?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
		symbol?: string | null;
	}
	export interface CurrencyBaseModelFormProperties {
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateCurrencyBaseModelFormGroup() {
		return new FormGroup<CurrencyBaseModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CountryTimezone {
		guid?: string | null;
		name?: string | null;
	}
	export interface CountryTimezoneFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryTimezoneFormGroup() {
		return new FormGroup<CountryTimezoneFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CountryRegionModel {
		code?: string | null;
		guid?: string | null;
		name?: string | null;
		timezone?: CountryRegionTimezoneModel;
	}
	export interface CountryRegionModelFormProperties {
		code: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryRegionModelFormGroup() {
		return new FormGroup<CountryRegionModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CountryRegionTimezoneModel {
		guid?: string | null;
		name?: string | null;
	}
	export interface CountryRegionTimezoneModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryRegionTimezoneModelFormGroup() {
		return new FormGroup<CountryRegionTimezoneModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CountryRegionsStatus { NoRegion = 0, Unknown = 1, HasRegions = 2 }

	export interface CreateInvoiceModel {
		billingCustomerGuid?: string | null;
		date?: Date | null;
		groupProjects?: boolean | null;
		invoiceStatusGuid?: string | null;

		/** Required */
		projects: Array<CreateInvoiceProjectModel>;
	}
	export interface CreateInvoiceModelFormProperties {
		billingCustomerGuid: FormControl<string | null | undefined>,
		date: FormControl<Date | null | undefined>,
		groupProjects: FormControl<boolean | null | undefined>,
		invoiceStatusGuid: FormControl<string | null | undefined>,
	}
	export function CreateCreateInvoiceModelFormGroup() {
		return new FormGroup<CreateInvoiceModelFormProperties>({
			billingCustomerGuid: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			groupProjects: new FormControl<boolean | null | undefined>(undefined),
			invoiceStatusGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateInvoiceProjectModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
	}
	export interface CreateInvoiceProjectModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
	}
	export function CreateCreateInvoiceProjectModelFormGroup() {
		return new FormGroup<CreateInvoiceProjectModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface CurrencyOutputModel {
		code?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		isOrganizationCurrency?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		name?: string | null;
		rate?: number | null;
		symbol?: string | null;
	}
	export interface CurrencyOutputModelFormProperties {
		code: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isOrganizationCurrency: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		rate: FormControl<number | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateCurrencyOutputModelFormGroup() {
		return new FormGroup<CurrencyOutputModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isOrganizationCurrency: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CurrencyPurpose { ProjectPrice = 0, ProjectCost = 1, UserCost = 2, ExpenseCost = 3 }

	export interface CurrencySubModel {
		code?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
		symbol?: string | null;
	}
	export interface CurrencySubModelFormProperties {
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateCurrencySubModelFormGroup() {
		return new FormGroup<CurrencySubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CurrencySubModel2 {
		code?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
		symbol?: string | null;
	}
	export interface CurrencySubModel2FormProperties {
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateCurrencySubModel2FormGroup() {
		return new FormGroup<CurrencySubModel2FormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomPriceListOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;

		/** Required */
		currency: PriceListCurrency3;
		guid?: string | null;
		isActive?: boolean | null;
		isCustom?: boolean | null;
		isDefault?: boolean | null;
		isVolumePricing?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface CustomPriceListOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isCustom: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isVolumePricing: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomPriceListOutputModelFormGroup() {
		return new FormGroup<CustomPriceListOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isCustom: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isVolumePricing: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PriceListCurrency3 {
		code?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
		symbol?: string | null;
	}
	export interface PriceListCurrency3FormProperties {
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreatePriceListCurrency3FormGroup() {
		return new FormGroup<PriceListCurrency3FormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomPropertyModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		parameters?: string | null;

		/** Required */
		type: CustomPropertyModelType;
		usageCount?: number | null;
	}
	export interface CustomPropertyModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		parameters: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CustomPropertyModelType | null | undefined>,
		usageCount: FormControl<number | null | undefined>,
	}
	export function CreateCustomPropertyModelFormGroup() {
		return new FormGroup<CustomPropertyModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			parameters: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CustomPropertyModelType | null | undefined>(undefined, [Validators.required]),
			usageCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CustomPropertyModelType { Numeric = 0, Money = 1, String = 2, Date = 3, Selection = 4 }

	export interface CustomPropertyShortModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
		parameters?: string | null;
		type?: CustomPropertyModelType | null;
	}
	export interface CustomPropertyShortModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		parameters: FormControl<string | null | undefined>,
		type: FormControl<CustomPropertyModelType | null | undefined>,
	}
	export function CreateCustomPropertyShortModelFormGroup() {
		return new FormGroup<CustomPropertyShortModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CustomPropertyModelType | null | undefined>(undefined),
		});

	}

	export enum CustomPropertyType { Numeric = 0, Money = 1, String = 2, Date = 3, Selection = 4 }

	export interface CustomerContactPersonSubModel {
		guid?: string | null;
		name?: string | null;
	}
	export interface CustomerContactPersonSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomerContactPersonSubModelFormGroup() {
		return new FormGroup<CustomerContactPersonSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerContactSubModel {
		firstName?: string | null;
		guid?: string | null;
		isDeleted?: boolean | null;
		lastName?: string | null;
		name?: string | null;
	}
	export interface CustomerContactSubModelFormProperties {
		firstName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isDeleted: FormControl<boolean | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomerContactSubModelFormGroup() {
		return new FormGroup<CustomerContactSubModelFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerCountry {
		englishName?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface CustomerCountryFormProperties {
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomerCountryFormGroup() {
		return new FormGroup<CustomerCountryFormProperties>({
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerCountrySettingsInputModel {

		/** Required */
		country: SimpleInputRequiredModel;

		/** Required */
		customer: SimpleInputRequiredModel;
		isTaxFree?: boolean | null;
		taxFreeDescription?: string | null;
		valueAddedTax?: SimpleInputModel;
		zeroVatCategoryCodeEn16931?: string | null;
	}
	export interface CustomerCountrySettingsInputModelFormProperties {
		isTaxFree: FormControl<boolean | null | undefined>,
		taxFreeDescription: FormControl<string | null | undefined>,
		zeroVatCategoryCodeEn16931: FormControl<string | null | undefined>,
	}
	export function CreateCustomerCountrySettingsInputModelFormGroup() {
		return new FormGroup<CustomerCountrySettingsInputModelFormProperties>({
			isTaxFree: new FormControl<boolean | null | undefined>(undefined),
			taxFreeDescription: new FormControl<string | null | undefined>(undefined),
			zeroVatCategoryCodeEn16931: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimpleInputRequiredModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
	}
	export interface SimpleInputRequiredModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
	}
	export function CreateSimpleInputRequiredModelFormGroup() {
		return new FormGroup<SimpleInputRequiredModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface SimpleInputModel {
		guid?: string | null;
	}
	export interface SimpleInputModelFormProperties {
		guid: FormControl<string | null | undefined>,
	}
	export function CreateSimpleInputModelFormGroup() {
		return new FormGroup<SimpleInputModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerCountrySettingsOutputModel {
		country?: CustomerCountry;
		customer?: ModelBase;
		guid?: string | null;
		isTaxFree?: boolean | null;
		taxFreeDescription?: string | null;
		valueAddedTax?: ValueAddedTaxSubModel;
		zeroVatCategoryCodeEn16931?: string | null;
	}
	export interface CustomerCountrySettingsOutputModelFormProperties {
		guid: FormControl<string | null | undefined>,
		isTaxFree: FormControl<boolean | null | undefined>,
		taxFreeDescription: FormControl<string | null | undefined>,
		zeroVatCategoryCodeEn16931: FormControl<string | null | undefined>,
	}
	export function CreateCustomerCountrySettingsOutputModelFormGroup() {
		return new FormGroup<CustomerCountrySettingsOutputModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isTaxFree: new FormControl<boolean | null | undefined>(undefined),
			taxFreeDescription: new FormControl<string | null | undefined>(undefined),
			zeroVatCategoryCodeEn16931: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModelBase {
		guid?: string | null;
	}
	export interface ModelBaseFormProperties {
		guid: FormControl<string | null | undefined>,
	}
	export function CreateModelBaseFormGroup() {
		return new FormGroup<ModelBaseFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValueAddedTaxSubModel {
		guid?: string | null;
		percentage?: number | null;
	}
	export interface ValueAddedTaxSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateValueAddedTaxSubModelFormGroup() {
		return new FormGroup<ValueAddedTaxSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomerCurrency {
		code?: string | null;
		guid?: string | null;
		name?: string | null;
		symbol?: string | null;
	}
	export interface CustomerCurrencyFormProperties {
		code: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateCustomerCurrencyFormGroup() {
		return new FormGroup<CustomerCurrencyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerCustomPropertySelectionItemInputModel {

		/** Required */
		customerCustomProperty: SimpleInputModel;
		isActive?: boolean | null;
		name?: string | null;
		sortOrder?: number | null;
	}
	export interface CustomerCustomPropertySelectionItemInputModelFormProperties {
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateCustomerCustomPropertySelectionItemInputModelFormGroup() {
		return new FormGroup<CustomerCustomPropertySelectionItemInputModelFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomerCustomPropertySelectionItemOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customerCustomProperty?: CustomPropertyShortModel;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		sortOrder?: number | null;
	}
	export interface CustomerCustomPropertySelectionItemOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateCustomerCustomPropertySelectionItemOutputModelFormGroup() {
		return new FormGroup<CustomerCustomPropertySelectionItemOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomerCustomValueModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;

		/** Required */
		customProperty: CustomPropertyShortModel;
		customerGuid?: string | null;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		value?: string | null;
	}
	export interface CustomerCustomValueModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		customerGuid: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomerCustomValueModelFormGroup() {
		return new FormGroup<CustomerCustomValueModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			customerGuid: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerHeadquarterAddress {
		addressline?: string | null;
		city?: string | null;
		country?: string | null;
		guid?: string | null;
		postalCode?: string | null;
	}
	export interface CustomerHeadquarterAddressFormProperties {
		addressline: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreateCustomerHeadquarterAddressFormGroup() {
		return new FormGroup<CustomerHeadquarterAddressFormProperties>({
			addressline: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerInvoicingVat {
		code?: string | null;
		guid?: string | null;
		percentage?: number | null;
	}
	export interface CustomerInvoicingVatFormProperties {
		code: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateCustomerInvoicingVatFormGroup() {
		return new FormGroup<CustomerInvoicingVatFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomerLanguage {
		code?: string | null;
		englishName?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface CustomerLanguageFormProperties {
		code: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomerLanguageFormGroup() {
		return new FormGroup<CustomerLanguageFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerMarketSegmentModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: ModelWithName;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		marketSegment?: MarketSegmentSubModel;
		parentMarketSegment?: MarketSegmentSubModel;
	}
	export interface CustomerMarketSegmentModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCustomerMarketSegmentModelFormGroup() {
		return new FormGroup<CustomerMarketSegmentModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MarketSegmentSubModel {
		guid?: string | null;
		isActive?: boolean | null;
		name?: string | null;
	}
	export interface MarketSegmentSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateMarketSegmentSubModelFormGroup() {
		return new FormGroup<MarketSegmentSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerModel {
		annualRevenue?: number | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		currency?: CustomerCurrency;
		eInvoiceAddress?: string | null;
		eInvoiceOperator?: string | null;
		email?: string | null;
		guid?: string | null;
		headquarterAddress?: CustomerHeadquarterAddress;
		industry?: ModelWithName;
		invoiceTemplate?: ModelWithName;
		invoicingVat?: CustomerInvoicingVat;
		isActive?: boolean | null;
		isInternal?: boolean | null;

		/**
		 * Max length: 25
		 * Min length: 0
		 */
		kvkNumber?: string | null;
		language?: CustomerLanguage;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		notes?: string | null;
		number?: number | null;
		numberOfEmployees?: number | null;
		overdueInterest?: number | null;
		owner?: UserWithFirstNameLastNameAndPhotoFileModel;
		paymentTerm?: number | null;
		pricelist?: ModelWithName;
		timezone?: ModelWithName;
		vatNumber?: string | null;
		website?: string | null;
	}
	export interface CustomerModelFormProperties {
		annualRevenue: FormControl<number | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		eInvoiceAddress: FormControl<string | null | undefined>,
		eInvoiceOperator: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 25
		 * Min length: 0
		 */
		kvkNumber: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
		numberOfEmployees: FormControl<number | null | undefined>,
		overdueInterest: FormControl<number | null | undefined>,
		paymentTerm: FormControl<number | null | undefined>,
		vatNumber: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateCustomerModelFormGroup() {
		return new FormGroup<CustomerModelFormProperties>({
			annualRevenue: new FormControl<number | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			eInvoiceAddress: new FormControl<string | null | undefined>(undefined),
			eInvoiceOperator: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			kvkNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(25)]),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			notes: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			numberOfEmployees: new FormControl<number | null | undefined>(undefined),
			overdueInterest: new FormControl<number | null | undefined>(undefined),
			paymentTerm: new FormControl<number | null | undefined>(undefined),
			vatNumber: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerSalesNoteInputModel {

		/** Required */
		customer: SimpleInputRequiredModel;
		note?: string | null;

		/** Required */
		user: SimpleInputRequiredModel;
	}
	export interface CustomerSalesNoteInputModelFormProperties {
		note: FormControl<string | null | undefined>,
	}
	export function CreateCustomerSalesNoteInputModelFormGroup() {
		return new FormGroup<CustomerSalesNoteInputModelFormProperties>({
			note: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerSalesNoteOutputModel {
		createdBy?: ModelBase;
		createdDateTime?: Date | null;
		customer?: ModelBase;
		guid?: string | null;
		isDeleted?: boolean | null;
		lastUpdatedBy?: ModelBase;
		lastUpdatedDateTime?: Date | null;
		note?: string | null;
		user?: ModelBase;
	}
	export interface CustomerSalesNoteOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isDeleted: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		note: FormControl<string | null | undefined>,
	}
	export function CreateCustomerSalesNoteOutputModelFormGroup() {
		return new FormGroup<CustomerSalesNoteOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DayOrdinal { First = 0, Second = 1, Third = 2, Fourth = 3, Last = 4 }

	export enum DayOrdinalOption { Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, WeekDay = 6, Saturday = 7, WeekendDay = 8, Day = 9 }

	export interface DeletedPhaseMemberOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		currentWorkContractTitle?: string | null;
		deletedDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		phase?: ModelBase;
		user?: UserWithFirstNameLastNameAndPhotoFileModel;
	}
	export interface DeletedPhaseMemberOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		currentWorkContractTitle: FormControl<string | null | undefined>,
		deletedDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeletedPhaseMemberOutputModelFormGroup() {
		return new FormGroup<DeletedPhaseMemberOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			currentWorkContractTitle: new FormControl<string | null | undefined>(undefined),
			deletedDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeletedProjectFeeModel {
		createdBy?: ModelBaseReadOnly;
		createdDateTime?: Date | null;
		customer?: ModelBaseReadOnly;
		deletedDateTime?: Date | null;
		eventDate?: Date | null;
		guid?: string | null;
		lastUpdatedBy?: ModelBaseReadOnly;
		lastUpdatedDateTime?: Date | null;
		measurementUnit?: string | null;
		name?: string | null;
		phase?: ModelBaseReadOnly;
		product?: ModelBaseReadOnly;
		project?: ModelBaseReadOnly;
		quantity?: number | null;
		user?: ModelBaseReadOnly;
	}
	export interface DeletedProjectFeeModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		deletedDateTime: FormControl<Date | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateDeletedProjectFeeModelFormGroup() {
		return new FormGroup<DeletedProjectFeeModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			deletedDateTime: new FormControl<Date | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ModelBaseReadOnly {
		guid?: string | null;
	}
	export interface ModelBaseReadOnlyFormProperties {
		guid: FormControl<string | null | undefined>,
	}
	export function CreateModelBaseReadOnlyFormGroup() {
		return new FormGroup<ModelBaseReadOnlyFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletedProjectTravelExpenseModel {
		createdBy?: ModelBaseReadOnly;
		createdDateTime?: Date | null;
		customer?: ModelBaseReadOnly;
		deletedDateTime?: Date | null;
		description?: string | null;
		eventDate?: Date | null;
		guid?: string | null;
		lastUpdatedBy?: ModelBaseReadOnly;
		lastUpdatedDateTime?: Date | null;
		measurementUnit?: string | null;
		phase?: ModelBaseReadOnly;
		project?: ModelBaseReadOnly;
		quantity?: number | null;
		travelEndTime?: Date | null;
		travelExpense?: ModelBaseReadOnly;
		travelStartTime?: Date | null;
		user?: ModelBaseReadOnly;
	}
	export interface DeletedProjectTravelExpenseModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		deletedDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		travelEndTime: FormControl<Date | null | undefined>,
		travelStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeletedProjectTravelExpenseModelFormGroup() {
		return new FormGroup<DeletedProjectTravelExpenseModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			deletedDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			travelEndTime: new FormControl<Date | null | undefined>(undefined),
			travelStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeletedWorkHourModel {
		createdBy?: ModelBaseReadOnly;
		createdDateTime?: Date | null;
		customer?: ModelBaseReadOnly;
		deletedDateTime?: Date | null;
		endTime?: Date | null;
		eventDate?: Date | null;
		guid?: string | null;
		lastUpdatedBy?: ModelBaseReadOnly;
		lastUpdatedDateTime?: Date | null;
		phase?: ModelBaseReadOnly;
		plannedInvoiceQuantity?: number | null;
		project?: ModelBaseReadOnly;
		quantity?: number | null;
		startTime?: Date | null;
		user?: ModelBaseReadOnly;
		workType?: ModelBaseReadOnly;
	}
	export interface DeletedWorkHourModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		deletedDateTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		plannedInvoiceQuantity: FormControl<number | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeletedWorkHourModelFormGroup() {
		return new FormGroup<DeletedWorkHourModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			deletedDateTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			plannedInvoiceQuantity: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EntryFormat { StartTimeEndTime = 0, Quantity = 1 }

	export interface ErrorModel {
		details?: Array<ExceptionDetailModel>;
		httpStatusCode?: number | null;
		stack?: string | null;
		type?: ErrorModelType | null;
	}
	export interface ErrorModelFormProperties {
		httpStatusCode: FormControl<number | null | undefined>,
		stack: FormControl<string | null | undefined>,
		type: FormControl<ErrorModelType | null | undefined>,
	}
	export function CreateErrorModelFormGroup() {
		return new FormGroup<ErrorModelFormProperties>({
			httpStatusCode: new FormControl<number | null | undefined>(undefined),
			stack: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ErrorModelType | null | undefined>(undefined),
		});

	}

	export interface ExceptionDetailModel {
		location?: ExceptionLocationModel;
		message?: string | null;
		url?: string | null;
	}
	export interface ExceptionDetailModelFormProperties {
		message: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateExceptionDetailModelFormGroup() {
		return new FormGroup<ExceptionDetailModelFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExceptionLocationModel {
		identifier?: string | null;
		name?: string | null;
		type?: ExceptionLocationModelType | null;
	}
	export interface ExceptionLocationModelFormProperties {
		identifier: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<ExceptionLocationModelType | null | undefined>,
	}
	export function CreateExceptionLocationModelFormGroup() {
		return new FormGroup<ExceptionLocationModelFormProperties>({
			identifier: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ExceptionLocationModelType | null | undefined>(undefined),
		});

	}

	export enum ExceptionLocationModelType { PathParameter = 0, RequestBody = 1, RequestHeader = 2, UriParameter = 3 }

	export enum ErrorModelType { InternalSystemError = 0, AuthenticationRequired = 1, AddonMissing = 2, FeatureIsNotEnabled = 3, InvalidParameter = 4, InvalidOperation = 5, InvalidRequest = 6, InsufficientApiScope = 7, InvalidApiVersion = 8, ConfigurationError = 9, UserLicenseType = 10, TermsOfServiceNotApproved = 11, HttpsRequired = 12, OrganizationNotActive = 13, PermissionDenied = 14, TrialExpired = 15, NotAvailableInTrial = 16, InvalidRecaptcha = 17, AddonMissingTermsOfServiceApproval = 18 }

	export enum ExceptionLocationTypeEnum { PathParameter = 0, RequestBody = 1, RequestHeader = 2, UriParameter = 3 }

	export interface ExceptionModel {
		error?: ErrorModel;
	}
	export interface ExceptionModelFormProperties {
	}
	export function CreateExceptionModelFormGroup() {
		return new FormGroup<ExceptionModelFormProperties>({
		});

	}

	export enum ExceptionTypeEnum { InternalSystemError = 0, AuthenticationRequired = 1, AddonMissing = 2, FeatureIsNotEnabled = 3, InvalidParameter = 4, InvalidOperation = 5, InvalidRequest = 6, InsufficientApiScope = 7, InvalidApiVersion = 8, ConfigurationError = 9, UserLicenseType = 10, TermsOfServiceNotApproved = 11, HttpsRequired = 12, OrganizationNotActive = 13, PermissionDenied = 14, TrialExpired = 15, NotAvailableInTrial = 16, InvalidRecaptcha = 17, AddonMissingTermsOfServiceApproval = 18 }

	export enum ExpensesClass { Mileage = 0, DailyAllowance = 1, OtherTravelExpense = 2 }

	export enum FileCategory { Misc = 0, Application = 1, Projects = 2, Proposal = 3, ProjectFees = 4, Invoice = 5, Users = 6, ProjectTravelExpense = 7, Customer = 8 }

	export interface FileKeywordModel {
		category?: ContactKeywordModelCategory | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		keyword: string;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
	}
	export interface FileKeywordModelFormProperties {
		category: FormControl<ContactKeywordModelCategory | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		keyword: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateFileKeywordModelFormGroup() {
		return new FormGroup<FileKeywordModelFormProperties>({
			category: new FormControl<ContactKeywordModelCategory | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FileModel {
		category?: FileCategory | null;
		contentType?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		description?: string | null;
		guid?: string | null;
		isInternal?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		size?: number | null;
	}
	export interface FileModelFormProperties {
		category: FormControl<FileCategory | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
	}
	export function CreateFileModelFormGroup() {
		return new FormGroup<FileModelFormProperties>({
			category: new FormControl<FileCategory | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FlatRateInputModel {
		billAdditionalHours?: boolean | null;

		/** Required */
		billingSchedule: BillingScheduleType;
		includesHours?: number | null;

		/** Required */
		phase: SimpleInputRequiredModel;
		plannedBillingDate?: Date | null;
		price?: MoneyInputModelWithNullableAmount;
		pricePerAdditionalHour?: MoneyInputModelWithNullableAmount;
	}
	export interface FlatRateInputModelFormProperties {
		billAdditionalHours: FormControl<boolean | null | undefined>,

		/** Required */
		billingSchedule: FormControl<BillingScheduleType | null | undefined>,
		includesHours: FormControl<number | null | undefined>,
		plannedBillingDate: FormControl<Date | null | undefined>,
	}
	export function CreateFlatRateInputModelFormGroup() {
		return new FormGroup<FlatRateInputModelFormProperties>({
			billAdditionalHours: new FormControl<boolean | null | undefined>(undefined),
			billingSchedule: new FormControl<BillingScheduleType | null | undefined>(undefined, [Validators.required]),
			includesHours: new FormControl<number | null | undefined>(undefined),
			plannedBillingDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MoneyInputModelWithNullableAmount {
		amount?: number | null;

		/**
		 * Required
		 * Min length: 1
		 */
		currencyCode: string;
	}
	export interface MoneyInputModelWithNullableAmountFormProperties {
		amount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateMoneyInputModelWithNullableAmountFormGroup() {
		return new FormGroup<MoneyInputModelWithNullableAmountFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface FlatRateOutputModel {
		billAdditionalHours?: boolean | null;
		billingSchedule?: BillingScheduleType | null;
		guid?: string | null;
		includesHours?: number | null;
		invoiceGuid?: string | null;
		phase?: ModelBaseWithRequiredGuid;
		plannedBillingDate?: Date | null;
		price?: MoneyOutputModel;
		pricePerAdditionalHour?: MoneyOutputModel;
		project?: FlatrateProjectSubModel;
	}
	export interface FlatRateOutputModelFormProperties {
		billAdditionalHours: FormControl<boolean | null | undefined>,
		billingSchedule: FormControl<BillingScheduleType | null | undefined>,
		guid: FormControl<string | null | undefined>,
		includesHours: FormControl<number | null | undefined>,
		invoiceGuid: FormControl<string | null | undefined>,
		plannedBillingDate: FormControl<Date | null | undefined>,
	}
	export function CreateFlatRateOutputModelFormGroup() {
		return new FormGroup<FlatRateOutputModelFormProperties>({
			billAdditionalHours: new FormControl<boolean | null | undefined>(undefined),
			billingSchedule: new FormControl<BillingScheduleType | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			includesHours: new FormControl<number | null | undefined>(undefined),
			invoiceGuid: new FormControl<string | null | undefined>(undefined),
			plannedBillingDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MoneyOutputModel {
		amount?: number | null;
		currencyCode?: string | null;
		multiCurrencyInfo?: Array<MultiCurrencyInfoModel>;
	}
	export interface MoneyOutputModelFormProperties {
		amount: FormControl<number | null | undefined>,
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateMoneyOutputModelFormGroup() {
		return new FormGroup<MoneyOutputModelFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MultiCurrencyInfoModel {
		amount?: number | null;
		currencyCode?: string | null;
		purpose?: Array<CurrencyPurpose>;
	}
	export interface MultiCurrencyInfoModelFormProperties {
		amount: FormControl<number | null | undefined>,
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateMultiCurrencyInfoModelFormGroup() {
		return new FormGroup<MultiCurrencyInfoModelFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FlatrateProjectSubModel {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface FlatrateProjectSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateFlatrateProjectSubModelFormGroup() {
		return new FormGroup<FlatrateProjectSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FlextimeAdjustmentInputModel {

		/** Required */
		adjustmentDate: Date;

		/** Required */
		amount: number;
		notes?: string | null;

		/** Required */
		user: SimpleInputRequiredModel;
	}
	export interface FlextimeAdjustmentInputModelFormProperties {

		/** Required */
		adjustmentDate: FormControl<Date | null | undefined>,

		/** Required */
		amount: FormControl<number | null | undefined>,
		notes: FormControl<string | null | undefined>,
	}
	export function CreateFlextimeAdjustmentInputModelFormGroup() {
		return new FormGroup<FlextimeAdjustmentInputModelFormProperties>({
			adjustmentDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FlextimeAdjustmentOutputModel {
		adjustmentDate?: Date | null;
		amount?: number | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		notes?: string | null;
		user?: UserWithFirstNameLastNamePhotoFileModelAndRequiredGuid;
	}
	export interface FlextimeAdjustmentOutputModelFormProperties {
		adjustmentDate: FormControl<Date | null | undefined>,
		amount: FormControl<number | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		notes: FormControl<string | null | undefined>,
	}
	export function CreateFlextimeAdjustmentOutputModelFormGroup() {
		return new FormGroup<FlextimeAdjustmentOutputModelFormProperties>({
			adjustmentDate: new FormControl<Date | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserWithFirstNameLastNamePhotoFileModelAndRequiredGuid {
		code?: string | null;
		firstName?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		lastName?: string | null;
		name?: string | null;
	}
	export interface UserWithFirstNameLastNamePhotoFileModelAndRequiredGuidFormProperties {
		code: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserWithFirstNameLastNamePhotoFileModelAndRequiredGuidFormGroup() {
		return new FormGroup<UserWithFirstNameLastNamePhotoFileModelAndRequiredGuidFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lastName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FlextimeModel {
		monthFlextimeBalance?: number | null;
		totalFlextimeBalance?: number | null;
	}
	export interface FlextimeModelFormProperties {
		monthFlextimeBalance: FormControl<number | null | undefined>,
		totalFlextimeBalance: FormControl<number | null | undefined>,
	}
	export function CreateFlextimeModelFormGroup() {
		return new FormGroup<FlextimeModelFormProperties>({
			monthFlextimeBalance: new FormControl<number | null | undefined>(undefined),
			totalFlextimeBalance: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FormattingCultureModel {
		code?: string | null;
		englishName?: string | null;
		guid?: string | null;
		isActive?: boolean | null;
		name?: string | null;
	}
	export interface FormattingCultureModelFormProperties {
		code: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateFormattingCultureModelFormGroup() {
		return new FormGroup<FormattingCultureModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FormattingCultureSubModel {
		code?: string | null;
		englishName?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface FormattingCultureSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateFormattingCultureSubModelFormGroup() {
		return new FormGroup<FormattingCultureSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FormattingCultureSubModel2 {
		code?: string | null;
		englishName?: string | null;
		name?: string | null;
	}
	export interface FormattingCultureSubModel2FormProperties {
		code: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateFormattingCultureSubModel2FormGroup() {
		return new FormGroup<FormattingCultureSubModel2FormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FreeTextInputModel {
		value?: string | null;
	}
	export interface FreeTextInputModelFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateFreeTextInputModelFormGroup() {
		return new FormGroup<FreeTextInputModelFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FreeTextModel {
		allowTags?: boolean | null;
		tagContext?: string | null;
		text?: string | null;
		value?: string | null;
	}
	export interface FreeTextModelFormProperties {
		allowTags: FormControl<boolean | null | undefined>,
		tagContext: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateFreeTextModelFormGroup() {
		return new FormGroup<FreeTextModelFormProperties>({
			allowTags: new FormControl<boolean | null | undefined>(undefined),
			tagContext: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FreeTextModel2 {
		allowTags?: boolean | null;
		plainText?: string | null;
		tagContext?: string | null;
		text?: string | null;
		value?: string | null;
	}
	export interface FreeTextModel2FormProperties {
		allowTags: FormControl<boolean | null | undefined>,
		plainText: FormControl<string | null | undefined>,
		tagContext: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateFreeTextModel2FormGroup() {
		return new FormGroup<FreeTextModel2FormProperties>({
			allowTags: new FormControl<boolean | null | undefined>(undefined),
			plainText: new FormControl<string | null | undefined>(undefined),
			tagContext: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Purpose used for getting the users. */
	export enum GetUsersPurpose { AbsenceOwner = 0, AccountOwner = 1, ActivityOwner = 2, ActivityParticipant = 3, BillingContact = 4, ProjectManager = 5, SalesPerson = 6, SuperiorUser = 7, TermsOfServiceApprover = 8 }

	export enum GrantType { client_credentials = 0, authorization_code = 1, refresh_token = 2 }

	export enum GroupByType { None = 0, Date = 1, Category = 2, Project = 3 }

	export interface HolidayModel {

		/**
		 * Required
		 * Min length: 1
		 */
		countryGuid: string;

		/** Required */
		date: Date;
		guid?: string | null;
		isActive?: boolean | null;
		isPublicHoliday?: boolean | null;
		isRecurringYearly?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Minimum: 1900
		 * Maximum: 2075
		 */
		recurringEndYear?: number | null;
	}
	export interface HolidayModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		countryGuid: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isPublicHoliday: FormControl<boolean | null | undefined>,
		isRecurringYearly: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1900
		 * Maximum: 2075
		 */
		recurringEndYear: FormControl<number | null | undefined>,
	}
	export function CreateHolidayModelFormGroup() {
		return new FormGroup<HolidayModelFormProperties>({
			countryGuid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isPublicHoliday: new FormControl<boolean | null | undefined>(undefined),
			isRecurringYearly: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			recurringEndYear: new FormControl<number | null | undefined>(undefined, [Validators.min(1900), Validators.max(2075)]),
		});

	}

	export interface IndustryModel {
		code?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface IndustryModelFormProperties {
		code: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIndustryModelFormGroup() {
		return new FormGroup<IndustryModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface InvoiceCustomerSubModel {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface InvoiceCustomerSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceCustomerSubModelFormGroup() {
		return new FormGroup<InvoiceCustomerSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceFileModel {
		category?: FileCategory | null;
		contentType?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		description?: string | null;
		fileGuid?: string | null;
		guid?: string | null;
		invoiceGuid?: string | null;
		isInternal?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		size?: number | null;
		sortOrder?: number | null;
	}
	export interface InvoiceFileModelFormProperties {
		category: FormControl<FileCategory | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		fileGuid: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		invoiceGuid: FormControl<string | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceFileModelFormGroup() {
		return new FormGroup<InvoiceFileModelFormProperties>({
			category: new FormControl<FileCategory | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fileGuid: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			invoiceGuid: new FormControl<string | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			size: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InvoiceGrouping { OneByOne = 0, Group = 1, 'Group+Attachment' = 2 }

	export interface InvoiceLanguageSubModel {
		code?: string | null;
		englishName?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface InvoiceLanguageSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceLanguageSubModelFormGroup() {
		return new FormGroup<InvoiceLanguageSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceOutputModel {
		billingCustomer?: InvoiceCustomerSubModel;
		canBeDeleted?: boolean | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		creditNoteInvoice?: RelatedInvoiceSubModel;
		culture?: FormattingCultureSubModel2;
		currency?: CurrencySubModel;
		currencyRate?: number | null;
		customer?: InvoiceCustomerSubModel;
		date?: Date | null;
		dueDate?: Date | null;
		entryDate?: Date | null;
		flatRatesTotalExcludingTax?: MoneyOutputModel;
		freeText1?: FreeTextModel2;
		freeText2?: FreeTextModel2;
		guid?: string | null;
		invoiceNumberBusinessUnitGuid?: string | null;
		invoiceTemplate?: ModelWithName;
		isCreditNote?: boolean | null;
		language?: InvoiceLanguageSubModel;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		notes?: string | null;
		number?: number | null;
		orderNumber?: string | null;
		ourReference?: string | null;
		overdueInterest?: number | null;
		paymentDate?: Date | null;
		paymentTerm?: number | null;
		projectFeesTotalExcludingTax?: MoneyOutputModel;
		projectTravelExpensesTotalExcludingTax?: MoneyOutputModel;
		projects?: Array<InvoiceProjectSubModel>;
		receiverAddress?: InvoiceReceiverAddressSubModel;
		receiverContactEmail?: string | null;
		receiverContactGuid?: string | null;
		receiverContactName?: string | null;
		receiverCustomerName?: string | null;
		receiverKvkNumber?: string | null;
		receiverVatNumber?: string | null;
		referenceNumber?: string | null;
		reimburseInvoice?: RelatedInvoiceSubModel;
		senderAddress?: InvoiceSenderAddressSubModel;
		senderContactGuid?: string | null;
		senderContactName?: string | null;
		senderKvkNumber?: string | null;
		senderName?: string | null;
		senderVatNumber?: string | null;
		status?: InvoiceStatusSubModel;
		totalExcludingTax?: MoneyOutputModel;
		totalIncludingTax?: MoneyOutputModel;
		totalTax?: MoneyOutputModel;
		workHourValueAddedTax?: number | null;
		workHoursQuantity?: number | null;
		workHoursTotalExcludingTax?: MoneyOutputModel;
		yourReference?: string | null;
	}
	export interface InvoiceOutputModelFormProperties {
		canBeDeleted: FormControl<boolean | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		currencyRate: FormControl<number | null | undefined>,
		date: FormControl<Date | null | undefined>,
		dueDate: FormControl<Date | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		invoiceNumberBusinessUnitGuid: FormControl<string | null | undefined>,
		isCreditNote: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		notes: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
		orderNumber: FormControl<string | null | undefined>,
		ourReference: FormControl<string | null | undefined>,
		overdueInterest: FormControl<number | null | undefined>,
		paymentDate: FormControl<Date | null | undefined>,
		paymentTerm: FormControl<number | null | undefined>,
		receiverContactEmail: FormControl<string | null | undefined>,
		receiverContactGuid: FormControl<string | null | undefined>,
		receiverContactName: FormControl<string | null | undefined>,
		receiverCustomerName: FormControl<string | null | undefined>,
		receiverKvkNumber: FormControl<string | null | undefined>,
		receiverVatNumber: FormControl<string | null | undefined>,
		referenceNumber: FormControl<string | null | undefined>,
		senderContactGuid: FormControl<string | null | undefined>,
		senderContactName: FormControl<string | null | undefined>,
		senderKvkNumber: FormControl<string | null | undefined>,
		senderName: FormControl<string | null | undefined>,
		senderVatNumber: FormControl<string | null | undefined>,
		workHourValueAddedTax: FormControl<number | null | undefined>,
		workHoursQuantity: FormControl<number | null | undefined>,
		yourReference: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceOutputModelFormGroup() {
		return new FormGroup<InvoiceOutputModelFormProperties>({
			canBeDeleted: new FormControl<boolean | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			currencyRate: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			dueDate: new FormControl<Date | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			invoiceNumberBusinessUnitGuid: new FormControl<string | null | undefined>(undefined),
			isCreditNote: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			orderNumber: new FormControl<string | null | undefined>(undefined),
			ourReference: new FormControl<string | null | undefined>(undefined),
			overdueInterest: new FormControl<number | null | undefined>(undefined),
			paymentDate: new FormControl<Date | null | undefined>(undefined),
			paymentTerm: new FormControl<number | null | undefined>(undefined),
			receiverContactEmail: new FormControl<string | null | undefined>(undefined),
			receiverContactGuid: new FormControl<string | null | undefined>(undefined),
			receiverContactName: new FormControl<string | null | undefined>(undefined),
			receiverCustomerName: new FormControl<string | null | undefined>(undefined),
			receiverKvkNumber: new FormControl<string | null | undefined>(undefined),
			receiverVatNumber: new FormControl<string | null | undefined>(undefined),
			referenceNumber: new FormControl<string | null | undefined>(undefined),
			senderContactGuid: new FormControl<string | null | undefined>(undefined),
			senderContactName: new FormControl<string | null | undefined>(undefined),
			senderKvkNumber: new FormControl<string | null | undefined>(undefined),
			senderName: new FormControl<string | null | undefined>(undefined),
			senderVatNumber: new FormControl<string | null | undefined>(undefined),
			workHourValueAddedTax: new FormControl<number | null | undefined>(undefined),
			workHoursQuantity: new FormControl<number | null | undefined>(undefined),
			yourReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RelatedInvoiceSubModel {
		guid?: string | null;
		number?: number | null;
	}
	export interface RelatedInvoiceSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateRelatedInvoiceSubModelFormGroup() {
		return new FormGroup<RelatedInvoiceSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceProjectSubModel {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface InvoiceProjectSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceProjectSubModelFormGroup() {
		return new FormGroup<InvoiceProjectSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceReceiverAddressSubModel {
		addressline?: string | null;
		city?: string | null;
		country?: string | null;
		postalCode?: string | null;
		state?: string | null;
	}
	export interface InvoiceReceiverAddressSubModelFormProperties {
		addressline: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceReceiverAddressSubModelFormGroup() {
		return new FormGroup<InvoiceReceiverAddressSubModelFormProperties>({
			addressline: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceSenderAddressSubModel {
		addressline?: string | null;
		city?: string | null;
		country?: string | null;
		postalCode?: string | null;
		state?: string | null;
	}
	export interface InvoiceSenderAddressSubModelFormProperties {
		addressline: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceSenderAddressSubModelFormGroup() {
		return new FormGroup<InvoiceSenderAddressSubModelFormProperties>({
			addressline: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceStatusSubModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		isPaid?: boolean | null;
		isSent?: boolean | null;
		isWaitingPayment?: boolean | null;
		name?: string | null;
	}
	export interface InvoiceStatusSubModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		isPaid: FormControl<boolean | null | undefined>,
		isSent: FormControl<boolean | null | undefined>,
		isWaitingPayment: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceStatusSubModelFormGroup() {
		return new FormGroup<InvoiceStatusSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			isPaid: new FormControl<boolean | null | undefined>(undefined),
			isSent: new FormControl<boolean | null | undefined>(undefined),
			isWaitingPayment: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoicePdfGetOptions { All = 0, InvoiceOnly = 1, AttachmentAndBreakdown = 2 }

	export interface InvoiceRowAccountingSubModel {
		name?: string | null;
		number?: string | null;
	}
	export interface InvoiceRowAccountingSubModelFormProperties {
		name: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceRowAccountingSubModelFormGroup() {
		return new FormGroup<InvoiceRowAccountingSubModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoiceRowCategory { Hours = 0, ProjectFees = 1, Travels = 2 }

	export interface InvoiceRowOutputModel {
		category?: InvoiceRowCategory | null;
		code?: Array<string>;
		costCenter?: InvoiceRowAccountingSubModel;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		description?: string | null;
		flatRateGuid?: string | null;
		guid?: string | null;
		hasInvoiceComment?: boolean | null;
		invoiceGuid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		measurementUnit?: string | null;
		quantity?: number | null;
		recurringSalesAccount?: InvoiceRowAccountingSubModel;
		rowType?: InvoiceRowOutputModelRowType | null;
		salesAccount?: InvoiceRowAccountingSubModel;
		salesReceivableAccount?: InvoiceRowAccountingSubModel;
		sortOrder?: number | null;
		unitPrice?: MoneyOutputModel;
		vatAccount?: InvoiceRowAccountingSubModel;
		vatRate?: number | null;
	}
	export interface InvoiceRowOutputModelFormProperties {
		category: FormControl<InvoiceRowCategory | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		flatRateGuid: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		hasInvoiceComment: FormControl<boolean | null | undefined>,
		invoiceGuid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		rowType: FormControl<InvoiceRowOutputModelRowType | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceRowOutputModelFormGroup() {
		return new FormGroup<InvoiceRowOutputModelFormProperties>({
			category: new FormControl<InvoiceRowCategory | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			flatRateGuid: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			hasInvoiceComment: new FormControl<boolean | null | undefined>(undefined),
			invoiceGuid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			rowType: new FormControl<InvoiceRowOutputModelRowType | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InvoiceRowOutputModelRowType { FlatRate = 0, Hours = 1, ProjectFees = 2, TravelExpenses = 3 }

	export enum InvoiceRowType { FlatRate = 0, Hours = 1, ProjectFees = 2, TravelExpenses = 3 }

	export interface InvoiceSettingsOutputModel {
		categorySortOrder?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		entryDate?: Date | null;
		guid?: string | null;
		isReverseCharged?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		paymentDate?: Date | null;
		projectFeeDescriptionFormat?: string | null;
		projectFeeGrouping?: InvoiceGrouping | null;
		projectFeePrimaryGroupBy?: string | null;
		projectFeeSecondaryGroupBy?: string | null;
		projectTravelExpenseDescriptionFormat?: string | null;
		projectTravelExpenseGrouping?: InvoiceGrouping | null;
		projectTravelExpensePrimaryGroupBy?: string | null;
		projectTravelExpenseSecondaryGroupBy?: string | null;
		reverseChargeDescription?: string | null;
		showAttachmentPriceExcludingValueAddedTax?: boolean | null;
		showAttachmentQuantity?: boolean | null;
		showAttachmentUnit?: boolean | null;
		showAttachmentUnitPrice?: boolean | null;
		showAttachmentValueAddedTax?: boolean | null;
		showCategories?: boolean | null;
		showFooter?: boolean | null;
		showLogoAndTitle?: boolean | null;
		showPriceExcludingValueAddedTax?: boolean | null;
		showQuantity?: boolean | null;
		showReferenceNumber?: boolean | null;
		showUnit?: boolean | null;
		showUnitPrice?: boolean | null;
		showValueAddedTax?: boolean | null;
		style?: InvoiceSettingsOutputModelStyle | null;
		workHourDescriptionFormat?: string | null;
		workHourGrouping?: InvoiceGrouping | null;
		workHourPrimaryGroupBy?: string | null;
		workHourSecondaryGroupBy?: string | null;
	}
	export interface InvoiceSettingsOutputModelFormProperties {
		categorySortOrder: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		entryDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isReverseCharged: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		paymentDate: FormControl<Date | null | undefined>,
		projectFeeDescriptionFormat: FormControl<string | null | undefined>,
		projectFeeGrouping: FormControl<InvoiceGrouping | null | undefined>,
		projectFeePrimaryGroupBy: FormControl<string | null | undefined>,
		projectFeeSecondaryGroupBy: FormControl<string | null | undefined>,
		projectTravelExpenseDescriptionFormat: FormControl<string | null | undefined>,
		projectTravelExpenseGrouping: FormControl<InvoiceGrouping | null | undefined>,
		projectTravelExpensePrimaryGroupBy: FormControl<string | null | undefined>,
		projectTravelExpenseSecondaryGroupBy: FormControl<string | null | undefined>,
		reverseChargeDescription: FormControl<string | null | undefined>,
		showAttachmentPriceExcludingValueAddedTax: FormControl<boolean | null | undefined>,
		showAttachmentQuantity: FormControl<boolean | null | undefined>,
		showAttachmentUnit: FormControl<boolean | null | undefined>,
		showAttachmentUnitPrice: FormControl<boolean | null | undefined>,
		showAttachmentValueAddedTax: FormControl<boolean | null | undefined>,
		showCategories: FormControl<boolean | null | undefined>,
		showFooter: FormControl<boolean | null | undefined>,
		showLogoAndTitle: FormControl<boolean | null | undefined>,
		showPriceExcludingValueAddedTax: FormControl<boolean | null | undefined>,
		showQuantity: FormControl<boolean | null | undefined>,
		showReferenceNumber: FormControl<boolean | null | undefined>,
		showUnit: FormControl<boolean | null | undefined>,
		showUnitPrice: FormControl<boolean | null | undefined>,
		showValueAddedTax: FormControl<boolean | null | undefined>,
		style: FormControl<InvoiceSettingsOutputModelStyle | null | undefined>,
		workHourDescriptionFormat: FormControl<string | null | undefined>,
		workHourGrouping: FormControl<InvoiceGrouping | null | undefined>,
		workHourPrimaryGroupBy: FormControl<string | null | undefined>,
		workHourSecondaryGroupBy: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceSettingsOutputModelFormGroup() {
		return new FormGroup<InvoiceSettingsOutputModelFormProperties>({
			categorySortOrder: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			entryDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isReverseCharged: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			paymentDate: new FormControl<Date | null | undefined>(undefined),
			projectFeeDescriptionFormat: new FormControl<string | null | undefined>(undefined),
			projectFeeGrouping: new FormControl<InvoiceGrouping | null | undefined>(undefined),
			projectFeePrimaryGroupBy: new FormControl<string | null | undefined>(undefined),
			projectFeeSecondaryGroupBy: new FormControl<string | null | undefined>(undefined),
			projectTravelExpenseDescriptionFormat: new FormControl<string | null | undefined>(undefined),
			projectTravelExpenseGrouping: new FormControl<InvoiceGrouping | null | undefined>(undefined),
			projectTravelExpensePrimaryGroupBy: new FormControl<string | null | undefined>(undefined),
			projectTravelExpenseSecondaryGroupBy: new FormControl<string | null | undefined>(undefined),
			reverseChargeDescription: new FormControl<string | null | undefined>(undefined),
			showAttachmentPriceExcludingValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			showAttachmentQuantity: new FormControl<boolean | null | undefined>(undefined),
			showAttachmentUnit: new FormControl<boolean | null | undefined>(undefined),
			showAttachmentUnitPrice: new FormControl<boolean | null | undefined>(undefined),
			showAttachmentValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			showCategories: new FormControl<boolean | null | undefined>(undefined),
			showFooter: new FormControl<boolean | null | undefined>(undefined),
			showLogoAndTitle: new FormControl<boolean | null | undefined>(undefined),
			showPriceExcludingValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			showQuantity: new FormControl<boolean | null | undefined>(undefined),
			showReferenceNumber: new FormControl<boolean | null | undefined>(undefined),
			showUnit: new FormControl<boolean | null | undefined>(undefined),
			showUnitPrice: new FormControl<boolean | null | undefined>(undefined),
			showValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			style: new FormControl<InvoiceSettingsOutputModelStyle | null | undefined>(undefined),
			workHourDescriptionFormat: new FormControl<string | null | undefined>(undefined),
			workHourGrouping: new FormControl<InvoiceGrouping | null | undefined>(undefined),
			workHourPrimaryGroupBy: new FormControl<string | null | undefined>(undefined),
			workHourSecondaryGroupBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoiceSettingsOutputModelStyle { BlackAndWhite = 0, Blue = 1, Cyan = 2, Green = 3, Lilac = 4, Orange = 5, Plain = 6, Red = 7, Yellow = 8 }

	export enum InvoiceSkin { BlackAndWhite = 0, Blue = 1, Cyan = 2, Green = 3, Lilac = 4, Orange = 5, Plain = 6, Red = 7, Yellow = 8 }

	export interface InvoiceStatusModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		hasInvoiceNumber?: boolean | null;
		isActive?: boolean | null;
		isDefault?: boolean | null;
		isDefaultForCreditNote?: boolean | null;
		isPaid?: boolean | null;
		isReadOnly?: boolean | null;
		isSent?: boolean | null;
		isWaitingPayment?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		sortOrder?: number | null;
	}
	export interface InvoiceStatusModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		hasInvoiceNumber: FormControl<boolean | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isDefaultForCreditNote: FormControl<boolean | null | undefined>,
		isPaid: FormControl<boolean | null | undefined>,
		isReadOnly: FormControl<boolean | null | undefined>,
		isSent: FormControl<boolean | null | undefined>,
		isWaitingPayment: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceStatusModelFormGroup() {
		return new FormGroup<InvoiceStatusModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			hasInvoiceNumber: new FormControl<boolean | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isDefaultForCreditNote: new FormControl<boolean | null | undefined>(undefined),
			isPaid: new FormControl<boolean | null | undefined>(undefined),
			isReadOnly: new FormControl<boolean | null | undefined>(undefined),
			isSent: new FormControl<boolean | null | undefined>(undefined),
			isWaitingPayment: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceSubModel {
		date?: Date | null;
		guid?: string | null;
		number?: number | null;
	}
	export interface InvoiceSubModelFormProperties {
		date: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceSubModelFormGroup() {
		return new FormGroup<InvoiceSubModelFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceTemplateModel {
		canDelete?: boolean | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		isDefault?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		title: string;
	}
	export interface InvoiceTemplateModelFormProperties {
		canDelete: FormControl<boolean | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceTemplateModelFormGroup() {
		return new FormGroup<InvoiceTemplateModelFormProperties>({
			canDelete: new FormControl<boolean | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface InvoiceTemplateSubModel {
		guid?: string | null;
		templateInvoiceGuid?: string | null;
	}
	export interface InvoiceTemplateSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		templateInvoiceGuid: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceTemplateSubModelFormGroup() {
		return new FormGroup<InvoiceTemplateSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			templateInvoiceGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvoiceType { Invoice = 0, Reminder = 1 }

	export interface KeyValuePairOfStringAndObject {
		key?: string | null;
		value?: string | null;
	}
	export interface KeyValuePairOfStringAndObjectFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValuePairOfStringAndObjectFormGroup() {
		return new FormGroup<KeyValuePairOfStringAndObjectFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KeyValuePairOfStringAndSortDirection {
		key?: string | null;
		value?: KeyValuePairOfStringAndSortDirectionValue | null;
	}
	export interface KeyValuePairOfStringAndSortDirectionFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<KeyValuePairOfStringAndSortDirectionValue | null | undefined>,
	}
	export function CreateKeyValuePairOfStringAndSortDirectionFormGroup() {
		return new FormGroup<KeyValuePairOfStringAndSortDirectionFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<KeyValuePairOfStringAndSortDirectionValue | null | undefined>(undefined),
		});

	}

	export enum KeyValuePairOfStringAndSortDirectionValue { Asc = 0, Desc = 1, AscNullsFirst = 2, AscNullsLast = 3, DescNullsFirst = 4, DescNullsLast = 5 }

	export enum KeywordCategory { Project = 0, Contact = 1, User = 2, File = 3 }

	export interface KeywordModel {

		/** Required */
		category: ContactKeywordModelCategory;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		keyword: string;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
	}
	export interface KeywordModelFormProperties {

		/** Required */
		category: FormControl<ContactKeywordModelCategory | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		keyword: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateKeywordModelFormGroup() {
		return new FormGroup<KeywordModelFormProperties>({
			category: new FormControl<ContactKeywordModelCategory | null | undefined>(undefined, [Validators.required]),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum KpiFormulaCategory { Unknown = 0, Functions = 1, Project = 2, User = 3, Invoice = 4 }

	export interface KpiFormulaModelBase {
		category?: KpiFormulaCategory | null;
		dataType?: KpiFormulaModelBaseDataType | null;
		guid?: string | null;
		isActive?: boolean | null;
		name?: string | null;
		unit?: string | null;
	}
	export interface KpiFormulaModelBaseFormProperties {
		category: FormControl<KpiFormulaCategory | null | undefined>,
		dataType: FormControl<KpiFormulaModelBaseDataType | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateKpiFormulaModelBaseFormGroup() {
		return new FormGroup<KpiFormulaModelBaseFormProperties>({
			category: new FormControl<KpiFormulaCategory | null | undefined>(undefined),
			dataType: new FormControl<KpiFormulaModelBaseDataType | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum KpiFormulaModelBaseDataType { String = 0, Boolean = 1, Integer = 2, Percentage = 3, Numeric = 4, Money = 5, Date = 6, DateTime = 7, Time = 8, Object = 9, ObjectCollection = 10, IpAddress = 11 }

	export interface LanguageModel {
		code?: string | null;
		englishName?: string | null;
		guid?: string | null;
		isInvoiceLanguage?: boolean | null;
		name?: string | null;
	}
	export interface LanguageModelFormProperties {
		code: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isInvoiceLanguage: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateLanguageModelFormGroup() {
		return new FormGroup<LanguageModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isInvoiceLanguage: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LeadSourceModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface LeadSourceModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLeadSourceModelFormGroup() {
		return new FormGroup<LeadSourceModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum LicenseUserType { FullUser = 0, Employee = 1, RestrictedEmployee = 2, Subcontractor = 3 }

	export interface MarketSegmentModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		parentMarketSegment?: ModelWithName;
	}
	export interface MarketSegmentModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMarketSegmentModelFormGroup() {
		return new FormGroup<MarketSegmentModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum MemberStatus { Unknown = 0, Invited = 1, Accepted = 2, Tentative = 3, Declined = 4 }

	export interface MoneyInputModel {

		/** Required */
		amount: number;

		/**
		 * Required
		 * Min length: 1
		 */
		currencyCode: string;
	}
	export interface MoneyInputModelFormProperties {

		/** Required */
		amount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateMoneyInputModelFormGroup() {
		return new FormGroup<MoneyInputModelFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface MoneyInputModelWithNotNegativeAmount {
		amount?: number | null;

		/**
		 * Required
		 * Min length: 1
		 */
		currencyCode: string;
	}
	export interface MoneyInputModelWithNotNegativeAmountFormProperties {
		amount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		currencyCode: FormControl<string | null | undefined>,
	}
	export function CreateMoneyInputModelWithNotNegativeAmountFormGroup() {
		return new FormGroup<MoneyInputModelWithNotNegativeAmountFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum Months { January = 0, February = 1, March = 2, April = 3, May = 4, June = 5, July = 6, August = 7, September = 8, October = 9, November = 10, December = 11 }

	export interface OrganizationDetailsCountrySubModel {
		code?: string | null;
		englishName?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface OrganizationDetailsCountrySubModelFormProperties {
		code: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationDetailsCountrySubModelFormGroup() {
		return new FormGroup<OrganizationDetailsCountrySubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrganizationDetailsFormattingSubModel {
		code?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface OrganizationDetailsFormattingSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationDetailsFormattingSubModelFormGroup() {
		return new FormGroup<OrganizationDetailsFormattingSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrganizationDetailsLanguageSubModel {
		code?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface OrganizationDetailsLanguageSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationDetailsLanguageSubModelFormGroup() {
		return new FormGroup<OrganizationDetailsLanguageSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrganizationDetailsOutputModel {
		activeAddons?: Array<string>;
		activeCompanies?: Array<CompanyModel>;
		address?: string | null;
		city?: string | null;
		country?: OrganizationDetailsCountrySubModel;
		currency?: CurrencyBaseModel;
		eInvoiceAddress?: string | null;
		eInvoiceOperatorCode?: string | null;
		fax?: string | null;
		formatting?: OrganizationDetailsFormattingSubModel;
		guid?: string | null;
		isVatRegistered?: boolean | null;

		/**
		 * Max length: 25
		 * Min length: 0
		 */
		kvkNumber?: string | null;
		language?: OrganizationDetailsLanguageSubModel;
		name?: string | null;
		odpCompany?: string | null;
		phone?: string | null;
		postalCode?: string | null;
		registeredOffice?: string | null;
		termsOfServiceApprover?: UserWithNameAndPhotoFileModel;
		timezone?: ModelWithName;
		vatNumber?: string | null;
	}
	export interface OrganizationDetailsOutputModelFormProperties {
		address: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		eInvoiceAddress: FormControl<string | null | undefined>,
		eInvoiceOperatorCode: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isVatRegistered: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 25
		 * Min length: 0
		 */
		kvkNumber: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		odpCompany: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		registeredOffice: FormControl<string | null | undefined>,
		vatNumber: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationDetailsOutputModelFormGroup() {
		return new FormGroup<OrganizationDetailsOutputModelFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			eInvoiceAddress: new FormControl<string | null | undefined>(undefined),
			eInvoiceOperatorCode: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isVatRegistered: new FormControl<boolean | null | undefined>(undefined),
			kvkNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(25)]),
			name: new FormControl<string | null | undefined>(undefined),
			odpCompany: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			registeredOffice: new FormControl<string | null | undefined>(undefined),
			vatNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserWithNameAndPhotoFileModel {
		code?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface UserWithNameAndPhotoFileModelFormProperties {
		code: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserWithNameAndPhotoFileModelFormGroup() {
		return new FormGroup<UserWithNameAndPhotoFileModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrganizationSettingsModel {
		currencyRoundingType?: OrganizationSettingsModelCurrencyRoundingType | null;
		defaultFooterColumn1?: FreeTextModel;
		defaultFooterColumn2?: FreeTextModel;
		defaultFooterColumn3?: FreeTextModel;
		displayProjectNumber?: boolean | null;
		flextimeCalculationStartDate?: Date | null;
		isAddingNewKeywordsFromProjectAllowed?: boolean | null;
		isCustomerSearchAllowed?: boolean | null;
		isEnteringHourPlannedInvoiceQuantityAllowed?: boolean | null;
		isIdenticalPhaseCodesAllowed?: boolean | null;
		isTravelExpenseImmediatelyInvoiceable?: boolean | null;
		isWorkHourDescriptionMandatory?: boolean | null;
		lastCustomerNumber?: number | null;
		lastFlextimeCalculationEndTime?: Date | null;
		lastFlextimeCalculationUser?: UserWithFirstNameLastNameModel;
		lastInvoiceNumber?: number | null;
		lastProjectNumber?: number | null;
		lastPurchaseOrderNumber?: number | null;
		lastTravelReimbursementNumber?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxFlextimeBalanceLimit?: number | null;

		/**
		 * Minimum: -1000
		 * Maximum: 0
		 */
		minFlextimeBalanceLimit?: number | null;
		nextCustomerNumber?: number | null;
		nextInvoiceNumber?: number | null;
		nextProjectNumber?: number | null;
		nextPurchaseOrderNumber?: number | null;
		nextTravelReimbursementNumber?: number | null;
		overdueInterest?: number | null;
		paymentReferenceNumberDisplaySetting?: OrganizationSettingsModelPaymentReferenceNumberDisplaySetting | null;
		paymentTerm?: number | null;
		projectNameDisplayFormatSetting?: OrganizationSettingsModelProjectNameDisplayFormatSetting | null;
		projectNameDisplaySetting?: OrganizationSettingsModelProjectNameDisplaySetting | null;

		/**
		 * Max length: 20
		 * Min length: 0
		 */
		purchaseOrderNumberPrefix?: string | null;
		quickSearchSetting?: OrganizationSettingsModelQuickSearchSetting | null;
		setCreditNoteInvoiceNumber?: boolean | null;
		travelEntryClosingDate?: Date | null;
		travelExpenseReimbursementStartDate?: Date | null;
		travelReimbursementInstructions?: string | null;
		uniqueIdentifierForProductsAndWorktypes?: boolean | null;
		workHourApprovalMode?: OrganizationSettingsModelWorkHourApprovalMode | null;
		workHourEntryFormat?: EntryFormat | null;

		/** Required */
		workWeek: Array<Workweek>;
		worktimeEntryClosingDate?: Date | null;
	}
	export interface OrganizationSettingsModelFormProperties {
		currencyRoundingType: FormControl<OrganizationSettingsModelCurrencyRoundingType | null | undefined>,
		displayProjectNumber: FormControl<boolean | null | undefined>,
		flextimeCalculationStartDate: FormControl<Date | null | undefined>,
		isAddingNewKeywordsFromProjectAllowed: FormControl<boolean | null | undefined>,
		isCustomerSearchAllowed: FormControl<boolean | null | undefined>,
		isEnteringHourPlannedInvoiceQuantityAllowed: FormControl<boolean | null | undefined>,
		isIdenticalPhaseCodesAllowed: FormControl<boolean | null | undefined>,
		isTravelExpenseImmediatelyInvoiceable: FormControl<boolean | null | undefined>,
		isWorkHourDescriptionMandatory: FormControl<boolean | null | undefined>,
		lastCustomerNumber: FormControl<number | null | undefined>,
		lastFlextimeCalculationEndTime: FormControl<Date | null | undefined>,
		lastInvoiceNumber: FormControl<number | null | undefined>,
		lastProjectNumber: FormControl<number | null | undefined>,
		lastPurchaseOrderNumber: FormControl<number | null | undefined>,
		lastTravelReimbursementNumber: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxFlextimeBalanceLimit: FormControl<number | null | undefined>,

		/**
		 * Minimum: -1000
		 * Maximum: 0
		 */
		minFlextimeBalanceLimit: FormControl<number | null | undefined>,
		nextCustomerNumber: FormControl<number | null | undefined>,
		nextInvoiceNumber: FormControl<number | null | undefined>,
		nextProjectNumber: FormControl<number | null | undefined>,
		nextPurchaseOrderNumber: FormControl<number | null | undefined>,
		nextTravelReimbursementNumber: FormControl<number | null | undefined>,
		overdueInterest: FormControl<number | null | undefined>,
		paymentReferenceNumberDisplaySetting: FormControl<OrganizationSettingsModelPaymentReferenceNumberDisplaySetting | null | undefined>,
		paymentTerm: FormControl<number | null | undefined>,
		projectNameDisplayFormatSetting: FormControl<OrganizationSettingsModelProjectNameDisplayFormatSetting | null | undefined>,
		projectNameDisplaySetting: FormControl<OrganizationSettingsModelProjectNameDisplaySetting | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 0
		 */
		purchaseOrderNumberPrefix: FormControl<string | null | undefined>,
		quickSearchSetting: FormControl<OrganizationSettingsModelQuickSearchSetting | null | undefined>,
		setCreditNoteInvoiceNumber: FormControl<boolean | null | undefined>,
		travelEntryClosingDate: FormControl<Date | null | undefined>,
		travelExpenseReimbursementStartDate: FormControl<Date | null | undefined>,
		travelReimbursementInstructions: FormControl<string | null | undefined>,
		uniqueIdentifierForProductsAndWorktypes: FormControl<boolean | null | undefined>,
		workHourApprovalMode: FormControl<OrganizationSettingsModelWorkHourApprovalMode | null | undefined>,
		workHourEntryFormat: FormControl<EntryFormat | null | undefined>,
		worktimeEntryClosingDate: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationSettingsModelFormGroup() {
		return new FormGroup<OrganizationSettingsModelFormProperties>({
			currencyRoundingType: new FormControl<OrganizationSettingsModelCurrencyRoundingType | null | undefined>(undefined),
			displayProjectNumber: new FormControl<boolean | null | undefined>(undefined),
			flextimeCalculationStartDate: new FormControl<Date | null | undefined>(undefined),
			isAddingNewKeywordsFromProjectAllowed: new FormControl<boolean | null | undefined>(undefined),
			isCustomerSearchAllowed: new FormControl<boolean | null | undefined>(undefined),
			isEnteringHourPlannedInvoiceQuantityAllowed: new FormControl<boolean | null | undefined>(undefined),
			isIdenticalPhaseCodesAllowed: new FormControl<boolean | null | undefined>(undefined),
			isTravelExpenseImmediatelyInvoiceable: new FormControl<boolean | null | undefined>(undefined),
			isWorkHourDescriptionMandatory: new FormControl<boolean | null | undefined>(undefined),
			lastCustomerNumber: new FormControl<number | null | undefined>(undefined),
			lastFlextimeCalculationEndTime: new FormControl<Date | null | undefined>(undefined),
			lastInvoiceNumber: new FormControl<number | null | undefined>(undefined),
			lastProjectNumber: new FormControl<number | null | undefined>(undefined),
			lastPurchaseOrderNumber: new FormControl<number | null | undefined>(undefined),
			lastTravelReimbursementNumber: new FormControl<number | null | undefined>(undefined),
			maxFlextimeBalanceLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			minFlextimeBalanceLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(-1000), Validators.max(0)]),
			nextCustomerNumber: new FormControl<number | null | undefined>(undefined),
			nextInvoiceNumber: new FormControl<number | null | undefined>(undefined),
			nextProjectNumber: new FormControl<number | null | undefined>(undefined),
			nextPurchaseOrderNumber: new FormControl<number | null | undefined>(undefined),
			nextTravelReimbursementNumber: new FormControl<number | null | undefined>(undefined),
			overdueInterest: new FormControl<number | null | undefined>(undefined),
			paymentReferenceNumberDisplaySetting: new FormControl<OrganizationSettingsModelPaymentReferenceNumberDisplaySetting | null | undefined>(undefined),
			paymentTerm: new FormControl<number | null | undefined>(undefined),
			projectNameDisplayFormatSetting: new FormControl<OrganizationSettingsModelProjectNameDisplayFormatSetting | null | undefined>(undefined),
			projectNameDisplaySetting: new FormControl<OrganizationSettingsModelProjectNameDisplaySetting | null | undefined>(undefined),
			purchaseOrderNumberPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(20)]),
			quickSearchSetting: new FormControl<OrganizationSettingsModelQuickSearchSetting | null | undefined>(undefined),
			setCreditNoteInvoiceNumber: new FormControl<boolean | null | undefined>(undefined),
			travelEntryClosingDate: new FormControl<Date | null | undefined>(undefined),
			travelExpenseReimbursementStartDate: new FormControl<Date | null | undefined>(undefined),
			travelReimbursementInstructions: new FormControl<string | null | undefined>(undefined),
			uniqueIdentifierForProductsAndWorktypes: new FormControl<boolean | null | undefined>(undefined),
			workHourApprovalMode: new FormControl<OrganizationSettingsModelWorkHourApprovalMode | null | undefined>(undefined),
			workHourEntryFormat: new FormControl<EntryFormat | null | undefined>(undefined),
			worktimeEntryClosingDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum OrganizationSettingsModelCurrencyRoundingType { AwayFromZero = 0, NearestInteger = 1 }

	export interface UserWithFirstNameLastNameModel {
		firstName?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		lastName?: string | null;
	}
	export interface UserWithFirstNameLastNameModelFormProperties {
		firstName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateUserWithFirstNameLastNameModelFormGroup() {
		return new FormGroup<UserWithFirstNameLastNameModelFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrganizationSettingsModelPaymentReferenceNumberDisplaySetting { ReferenceNumber = 0, Kid = 1 }

	export enum OrganizationSettingsModelProjectNameDisplayFormatSetting { ProjectNamePhaseName = 0, CustomerNameProjectNamePhaseName = 1 }

	export enum OrganizationSettingsModelProjectNameDisplaySetting { ShowProjectLongName = 0, ShowProjectShortName = 1 }

	export enum OrganizationSettingsModelQuickSearchSetting { ShowOpenProjectsSalesCasesAndCustomers = 0, ShowOpenAndClosedProjectsSalesCasesAndCustomers = 1 }

	export enum OrganizationSettingsModelWorkHourApprovalMode { None = 0, RequiredForInvoicing = 1, InvoicableAlways = 2 }

	export enum Workweek { Monday = 0, Tuesday = 1, Wednesday = 2, Thursday = 3, Friday = 4, Saturday = 5, Sunday = 6 }

	export interface OvertimeModel {

		/**
		 * Required
		 * Min length: 1
		 */
		code: string;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		includeInFlextime?: boolean | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		multipliesUnitCost?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		percentage?: number | null;
	}
	export interface OvertimeModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		code: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		includeInFlextime: FormControl<boolean | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		multipliesUnitCost: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateOvertimeModelFormGroup() {
		return new FormGroup<OvertimeModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			includeInFlextime: new FormControl<boolean | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			multipliesUnitCost: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OvertimePriceModel {
		guid?: string | null;

		/** Required */
		overtime: ModelBaseWithRequiredGuid;
		priceSource?: OvertimePriceModelPriceSource | null;
		pricelistVersionGuid?: string | null;
		pricingMultiplier?: number | null;
		projectGuid?: string | null;
	}
	export interface OvertimePriceModelFormProperties {
		guid: FormControl<string | null | undefined>,
		priceSource: FormControl<OvertimePriceModelPriceSource | null | undefined>,
		pricelistVersionGuid: FormControl<string | null | undefined>,
		pricingMultiplier: FormControl<number | null | undefined>,
		projectGuid: FormControl<string | null | undefined>,
	}
	export function CreateOvertimePriceModelFormGroup() {
		return new FormGroup<OvertimePriceModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			priceSource: new FormControl<OvertimePriceModelPriceSource | null | undefined>(undefined),
			pricelistVersionGuid: new FormControl<string | null | undefined>(undefined),
			pricingMultiplier: new FormControl<number | null | undefined>(undefined),
			projectGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OvertimePriceModelPriceSource { ProductRegistry = 0, Pricelist = 1, Project = 2 }

	export enum ParticipantType { User = 0, Contact = 1, Resource = 2, Other = 3 }

	export interface PatchOperation {
		from?: string | null;

		/** Required */
		op: PatchOperationOp;
		path?: string | null;
		value?: string | null;
	}
	export interface PatchOperationFormProperties {
		from: FormControl<string | null | undefined>,

		/** Required */
		op: FormControl<PatchOperationOp | null | undefined>,
		path: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreatePatchOperationFormGroup() {
		return new FormGroup<PatchOperationFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			op: new FormControl<PatchOperationOp | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PatchOperationOp { Add = 0, Copy = 1, Move = 2, Remove = 3, Replace = 4 }

	export enum PatchOperationType { Add = 0, Copy = 1, Move = 2, Remove = 3, Replace = 4 }

	export enum PermissionLevel { View = 0, Edit = 1 }

	export interface PermissionProfileModel {
		guid?: string | null;
		isAccessible?: boolean | null;
		isActive?: boolean | null;
		isDefault?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface PermissionProfileModelFormProperties {
		guid: FormControl<string | null | undefined>,
		isAccessible: FormControl<boolean | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePermissionProfileModelFormGroup() {
		return new FormGroup<PermissionProfileModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isAccessible: new FormControl<boolean | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PhaseCustomerSubModel {
		guid?: string | null;
		isInternal?: boolean | null;
		name?: string | null;
		number?: number | null;
	}
	export interface PhaseCustomerSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreatePhaseCustomerSubModelFormGroup() {
		return new FormGroup<PhaseCustomerSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PhaseInputModel {
		code?: string | null;
		deadline?: Date | null;
		defaultWorkType?: ModelWithName;
		isClosed?: boolean | null;
		isCompleted?: boolean | null;
		isLocked?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		originalDeadline?: Date | null;
		originalStartDate?: Date | null;
		originalWorkHoursEstimate?: number | null;

		/** Required */
		parentPhase: ModelBaseWithRequiredGuid;
		phaseStatus?: PhaseStatusInputModel;
		project?: ModelBaseWithRequiredGuid;
		sortOrder?: number | null;
		startDate?: Date | null;
		workHoursEstimate?: number | null;
	}
	export interface PhaseInputModelFormProperties {
		code: FormControl<string | null | undefined>,
		deadline: FormControl<Date | null | undefined>,
		isClosed: FormControl<boolean | null | undefined>,
		isCompleted: FormControl<boolean | null | undefined>,
		isLocked: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		originalDeadline: FormControl<Date | null | undefined>,
		originalStartDate: FormControl<Date | null | undefined>,
		originalWorkHoursEstimate: FormControl<number | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		workHoursEstimate: FormControl<number | null | undefined>,
	}
	export function CreatePhaseInputModelFormGroup() {
		return new FormGroup<PhaseInputModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			deadline: new FormControl<Date | null | undefined>(undefined),
			isClosed: new FormControl<boolean | null | undefined>(undefined),
			isCompleted: new FormControl<boolean | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			originalDeadline: new FormControl<Date | null | undefined>(undefined),
			originalStartDate: new FormControl<Date | null | undefined>(undefined),
			originalWorkHoursEstimate: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			workHoursEstimate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PhaseStatusInputModel {
		description?: string | null;
		phaseStatusTypeGuid?: string | null;
	}
	export interface PhaseStatusInputModelFormProperties {
		description: FormControl<string | null | undefined>,
		phaseStatusTypeGuid: FormControl<string | null | undefined>,
	}
	export function CreatePhaseStatusInputModelFormGroup() {
		return new FormGroup<PhaseStatusInputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			phaseStatusTypeGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhaseMemberModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		currentWorkcontractTitle?: string | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		phaseGuid: string;
		user?: UserWithFirstNameLastNameAndPhotoFileModel;
		workHours?: number | null;
		workHoursIncludingChildPhases?: number | null;
	}
	export interface PhaseMemberModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		currentWorkcontractTitle: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		phaseGuid: FormControl<string | null | undefined>,
		workHours: FormControl<number | null | undefined>,
		workHoursIncludingChildPhases: FormControl<number | null | undefined>,
	}
	export function CreatePhaseMemberModelFormGroup() {
		return new FormGroup<PhaseMemberModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			currentWorkcontractTitle: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			phaseGuid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			workHours: new FormControl<number | null | undefined>(undefined),
			workHoursIncludingChildPhases: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PhaseMemberOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		currentWorkContractTitle?: string | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		phase?: ModelWithName;
		user?: UserWithFirstNameLastNameAndPhotoFileModel;
	}
	export interface PhaseMemberOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		currentWorkContractTitle: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreatePhaseMemberOutputModelFormGroup() {
		return new FormGroup<PhaseMemberOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			currentWorkContractTitle: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PhaseMembersFromBusinessUnitUsersModel {

		/**
		 * Required
		 * Min length: 1
		 */
		businessUnitGuid: string;

		/**
		 * Required
		 * Min length: 1
		 */
		phaseGuid: string;
	}
	export interface PhaseMembersFromBusinessUnitUsersModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		businessUnitGuid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		phaseGuid: FormControl<string | null | undefined>,
	}
	export function CreatePhaseMembersFromBusinessUnitUsersModelFormGroup() {
		return new FormGroup<PhaseMembersFromBusinessUnitUsersModelFormProperties>({
			businessUnitGuid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			phaseGuid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PhaseModelWithHierarchyInfo {
		code?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		currencyCode?: CurrencyBaseModel;
		customer?: PhaseCustomerSubModel;
		deadline?: Date | null;
		defaultWorkType?: ModelWithName;
		guid?: string | null;
		hasChildren?: boolean | null;
		isCompleted?: boolean | null;
		isLocked?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		level?: number | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		originalDeadline?: Date | null;
		originalStartDate?: Date | null;
		originalWorkHoursEstimate?: number | null;
		parentPhase?: ModelBaseWithRequiredGuid;
		phaseStatus?: PhaseStatusOutputModel;
		project?: PhaseProjectSubModel;
		sortOrder?: number | null;
		startDate?: Date | null;
		workHoursEstimate?: number | null;
	}
	export interface PhaseModelWithHierarchyInfoFormProperties {
		code: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		deadline: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		hasChildren: FormControl<boolean | null | undefined>,
		isCompleted: FormControl<boolean | null | undefined>,
		isLocked: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		level: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		originalDeadline: FormControl<Date | null | undefined>,
		originalStartDate: FormControl<Date | null | undefined>,
		originalWorkHoursEstimate: FormControl<number | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		workHoursEstimate: FormControl<number | null | undefined>,
	}
	export function CreatePhaseModelWithHierarchyInfoFormGroup() {
		return new FormGroup<PhaseModelWithHierarchyInfoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			deadline: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			hasChildren: new FormControl<boolean | null | undefined>(undefined),
			isCompleted: new FormControl<boolean | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			level: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			originalDeadline: new FormControl<Date | null | undefined>(undefined),
			originalStartDate: new FormControl<Date | null | undefined>(undefined),
			originalWorkHoursEstimate: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			workHoursEstimate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PhaseStatusOutputModel {
		description?: string | null;
		name?: string | null;
		phaseStatusTypeGuid?: string | null;
	}
	export interface PhaseStatusOutputModelFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		phaseStatusTypeGuid: FormControl<string | null | undefined>,
	}
	export function CreatePhaseStatusOutputModelFormGroup() {
		return new FormGroup<PhaseStatusOutputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phaseStatusTypeGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhaseProjectSubModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		isClosed?: boolean | null;
		isInternal?: boolean | null;
		name?: string | null;
		number?: number | null;
	}
	export interface PhaseProjectSubModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		isClosed: FormControl<boolean | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreatePhaseProjectSubModelFormGroup() {
		return new FormGroup<PhaseProjectSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			isClosed: new FormControl<boolean | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PhaseOutputModel {
		code?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		currencyCode?: CurrencyBaseModel;
		deadline?: Date | null;
		defaultWorkType?: ModelWithName;
		guid?: string | null;
		isCompleted?: boolean | null;
		isLocked?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		originalDeadline?: Date | null;
		originalStartDate?: Date | null;
		originalWorkHoursEstimate?: number | null;
		parentPhase?: ModelBaseWithRequiredGuid;
		phaseStatus?: PhaseStatusOutputModel;
		project?: PhaseProjectSubModel;
		sortOrder?: number | null;
		startDate?: Date | null;
		workHoursEstimate?: number | null;
	}
	export interface PhaseOutputModelFormProperties {
		code: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		deadline: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isCompleted: FormControl<boolean | null | undefined>,
		isLocked: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		originalDeadline: FormControl<Date | null | undefined>,
		originalStartDate: FormControl<Date | null | undefined>,
		originalWorkHoursEstimate: FormControl<number | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		workHoursEstimate: FormControl<number | null | undefined>,
	}
	export function CreatePhaseOutputModelFormGroup() {
		return new FormGroup<PhaseOutputModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			deadline: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isCompleted: new FormControl<boolean | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			originalDeadline: new FormControl<Date | null | undefined>(undefined),
			originalStartDate: new FormControl<Date | null | undefined>(undefined),
			originalWorkHoursEstimate: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			workHoursEstimate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PhaseStatusTypeModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		sortOrder?: number | null;
	}
	export interface PhaseStatusTypeModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreatePhaseStatusTypeModelFormGroup() {
		return new FormGroup<PhaseStatusTypeModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PhaseSubModel {
		endDate?: Date | null;
		guid?: string | null;
		name?: string | null;
		startDate?: Date | null;
	}
	export interface PhaseSubModelFormProperties {
		endDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreatePhaseSubModelFormGroup() {
		return new FormGroup<PhaseSubModelFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PriceListCurrency {
		code?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
		symbol?: string | null;
	}
	export interface PriceListCurrencyFormProperties {
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreatePriceListCurrencyFormGroup() {
		return new FormGroup<PriceListCurrencyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PriceListCurrency2 {
		code?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
		symbol?: string | null;
	}
	export interface PriceListCurrency2FormProperties {
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreatePriceListCurrency2FormGroup() {
		return new FormGroup<PriceListCurrency2FormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PriceListModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;

		/** Required */
		currency: PriceListCurrency;
		guid?: string | null;
		isActive?: boolean | null;
		isCustom?: boolean | null;
		isDefault?: boolean | null;
		isVolumePricing?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface PriceListModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isCustom: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isVolumePricing: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePriceListModelFormGroup() {
		return new FormGroup<PriceListModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isCustom: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isVolumePricing: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PriceListOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;

		/** Required */
		currency: PriceListCurrency2;
		guid?: string | null;
		isActive?: boolean | null;
		isCustom?: boolean | null;
		isDefault?: boolean | null;
		isVolumePricing?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface PriceListOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isCustom: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isVolumePricing: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePriceListOutputModelFormGroup() {
		return new FormGroup<PriceListOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isCustom: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isVolumePricing: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PriceModelBase {
		guid?: string | null;
		price?: MoneyOutputModel;
		priceSource?: OvertimePriceModelPriceSource | null;
		pricelistVersionGuid?: string | null;
		projectGuid?: string | null;
	}
	export interface PriceModelBaseFormProperties {
		guid: FormControl<string | null | undefined>,
		priceSource: FormControl<OvertimePriceModelPriceSource | null | undefined>,
		pricelistVersionGuid: FormControl<string | null | undefined>,
		projectGuid: FormControl<string | null | undefined>,
	}
	export function CreatePriceModelBaseFormGroup() {
		return new FormGroup<PriceModelBaseFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			priceSource: new FormControl<OvertimePriceModelPriceSource | null | undefined>(undefined),
			pricelistVersionGuid: new FormControl<string | null | undefined>(undefined),
			projectGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PriceSource { ProductRegistry = 0, Pricelist = 1, Project = 2 }

	export interface PricelistVersionOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		pricelistGuid?: string | null;
		startDate?: Date | null;
	}
	export interface PricelistVersionOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		pricelistGuid: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreatePricelistVersionOutputModelFormGroup() {
		return new FormGroup<PricelistVersionOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			pricelistGuid: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PrintToPdf { DoNotPrintToProposal = 0, PrintToProposalBottom = 1, PrintToProposalBoth = 2 }

	export interface ProductCategoryModel {
		code?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		isDefault?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface ProductCategoryModelFormProperties {
		code: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateProductCategoryModelFormGroup() {
		return new FormGroup<ProductCategoryModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ProductCountrySettingsModel {

		/** Required */
		country: ModelBaseWithRequiredGuid;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/** Required */
		product: ModelBaseWithRequiredGuid;
		vatRate?: number | null;
	}
	export interface ProductCountrySettingsModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateProductCountrySettingsModelFormGroup() {
		return new FormGroup<ProductCountrySettingsModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductForProjectOutputModel {
		isVolumePriced?: boolean | null;
		product?: ProductOutputModel;
	}
	export interface ProductForProjectOutputModelFormProperties {
		isVolumePriced: FormControl<boolean | null | undefined>,
	}
	export function CreateProductForProjectOutputModelFormGroup() {
		return new FormGroup<ProductForProjectOutputModelFormProperties>({
			isVolumePriced: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProductOutputModel {
		code?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		measurementUnit?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		productCategory?: ModelWithName;
		proposalDescription?: string | null;
		salesAccount?: ProductSalesAccountSubModel;
		type?: ProductOutputModelType | null;
		unitCost?: MoneyOutputModel;
		unitPrice?: MoneyOutputModel;
		vatRate?: number | null;
	}
	export interface ProductOutputModelFormProperties {
		code: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		proposalDescription: FormControl<string | null | undefined>,
		type: FormControl<ProductOutputModelType | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateProductOutputModelFormGroup() {
		return new FormGroup<ProductOutputModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			proposalDescription: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ProductOutputModelType | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductSalesAccountSubModel {
		guid?: string | null;
		name?: string | null;
		number?: string | null;
	}
	export interface ProductSalesAccountSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
	}
	export function CreateProductSalesAccountSubModelFormGroup() {
		return new FormGroup<ProductSalesAccountSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProductOutputModelType { FixedFees = 0, Materials = 1, Subcontracting = 2 }

	export interface ProductInputModel {
		code?: string | null;
		isActive?: boolean | null;
		measurementUnit?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		productCategory?: SimpleInputModel;
		proposalDescription?: string | null;
		salesAccount?: SimpleInputModel;
		type?: ProductOutputModelType | null;
		unitCost?: MoneyInputModelWithNullableAmount;
		unitPrice?: MoneyInputModelWithNullableAmount;
		vatRate?: number | null;
	}
	export interface ProductInputModelFormProperties {
		code: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		proposalDescription: FormControl<string | null | undefined>,
		type: FormControl<ProductOutputModelType | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateProductInputModelFormGroup() {
		return new FormGroup<ProductInputModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			proposalDescription: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ProductOutputModelType | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductPriceModel {
		guid?: string | null;
		price?: MoneyOutputModel;
		priceSource?: OvertimePriceModelPriceSource | null;
		pricelistVersionGuid?: string | null;
		projectGuid?: string | null;
		quantity?: number | null;
	}
	export interface ProductPriceModelFormProperties {
		guid: FormControl<string | null | undefined>,
		priceSource: FormControl<OvertimePriceModelPriceSource | null | undefined>,
		pricelistVersionGuid: FormControl<string | null | undefined>,
		projectGuid: FormControl<string | null | undefined>,
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateProductPriceModelFormGroup() {
		return new FormGroup<ProductPriceModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			priceSource: new FormControl<OvertimePriceModelPriceSource | null | undefined>(undefined),
			pricelistVersionGuid: new FormControl<string | null | undefined>(undefined),
			projectGuid: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductPriceOutputModel {
		isAvailable?: boolean | null;
		isVolumePriced?: boolean | null;
		prices?: Array<ProductPriceModel>;
		product?: ProductPriceProductOutputSubModel;
	}
	export interface ProductPriceOutputModelFormProperties {
		isAvailable: FormControl<boolean | null | undefined>,
		isVolumePriced: FormControl<boolean | null | undefined>,
	}
	export function CreateProductPriceOutputModelFormGroup() {
		return new FormGroup<ProductPriceOutputModelFormProperties>({
			isAvailable: new FormControl<boolean | null | undefined>(undefined),
			isVolumePriced: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProductPriceProductOutputSubModel {
		guid?: string | null;
		name?: string | null;
		productCategory?: ModelWithName;
		productCode?: string | null;
		productType?: ProductOutputModelType | null;
	}
	export interface ProductPriceProductOutputSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		productCode: FormControl<string | null | undefined>,
		productType: FormControl<ProductOutputModelType | null | undefined>,
	}
	export function CreateProductPriceProductOutputSubModelFormGroup() {
		return new FormGroup<ProductPriceProductOutputSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			productType: new FormControl<ProductOutputModelType | null | undefined>(undefined),
		});

	}

	export interface ProductSalesAccountSubModel2 {
		guid?: string | null;
		name?: string | null;
		number?: string | null;
	}
	export interface ProductSalesAccountSubModel2FormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
	}
	export function CreateProductSalesAccountSubModel2FormGroup() {
		return new FormGroup<ProductSalesAccountSubModel2FormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProductType { FixedFees = 0, Materials = 1, Subcontracting = 2 }

	export interface ProjectBillingCustomerModel {

		/** Required */
		billingCustomer: BillingCustomerModel;
		canBeDeleted?: boolean | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isDefault?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/** Required */
		project: ModelBaseWithRequiredGuid;
	}
	export interface ProjectBillingCustomerModelFormProperties {
		canBeDeleted: FormControl<boolean | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateProjectBillingCustomerModelFormGroup() {
		return new FormGroup<ProjectBillingCustomerModelFormProperties>({
			canBeDeleted: new FormControl<boolean | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ProjectBillingCustomerModel2 {
		billingAddress?: BillingAddressModel;
		billingContact?: ModelWithName;

		/** Required */
		billingCustomer: BillingCustomerModel;
		canBeDeleted?: boolean | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isDefault?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/** Required */
		project: ModelBaseWithRequiredGuid;
	}
	export interface ProjectBillingCustomerModel2FormProperties {
		canBeDeleted: FormControl<boolean | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateProjectBillingCustomerModel2FormGroup() {
		return new FormGroup<ProjectBillingCustomerModel2FormProperties>({
			canBeDeleted: new FormControl<boolean | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ProjectCostCenterSubModel {
		guid?: string | null;
		identifier?: string | null;
		name?: string | null;
	}
	export interface ProjectCostCenterSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateProjectCostCenterSubModelFormGroup() {
		return new FormGroup<ProjectCostCenterSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectCustomPropertySelectionItemInputModel {
		isActive?: boolean | null;
		name?: string | null;

		/** Required */
		projectCustomProperty: SimpleInputModel;
		sortOrder?: number | null;
	}
	export interface ProjectCustomPropertySelectionItemInputModelFormProperties {
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateProjectCustomPropertySelectionItemInputModelFormGroup() {
		return new FormGroup<ProjectCustomPropertySelectionItemInputModelFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectCustomPropertySelectionItemOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		projectCustomProperty?: CustomPropertyShortModel;
		sortOrder?: number | null;
	}
	export interface ProjectCustomPropertySelectionItemOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateProjectCustomPropertySelectionItemOutputModelFormGroup() {
		return new FormGroup<ProjectCustomPropertySelectionItemOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectCustomValueModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;

		/** Required */
		customProperty: CustomPropertyShortModel;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		projectGuid?: string | null;
		value?: string | null;
	}
	export interface ProjectCustomValueModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		projectGuid: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateProjectCustomValueModelFormGroup() {
		return new FormGroup<ProjectCustomValueModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			projectGuid: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectCustomerSubModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
		number?: number | null;
	}
	export interface ProjectCustomerSubModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateProjectCustomerSubModelFormGroup() {
		return new FormGroup<ProjectCustomerSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProjectFeeBillingScheduleType { Immediately = 0, OnDate = 1, WhenPhaseCompleted = 2, Recurring = 3 }

	export interface ProjectFeeCustomerSubModel {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface ProjectFeeCustomerSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateProjectFeeCustomerSubModelFormGroup() {
		return new FormGroup<ProjectFeeCustomerSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectFeeInputModel {
		billingDependencyPhase?: SimpleInputModel;
		billingSchedule?: ProjectFeeBillingScheduleType | null;
		costCenter?: SimpleInputModel;
		description?: string | null;
		displayPeriodStartDate?: Date | null;
		eventDate?: Date | null;
		hasVolumePricing?: boolean | null;
		invoice?: SimpleInputModel;
		invoiceQuantity?: number | null;
		invoiceRowComment?: string | null;
		invoiceRowDescription?: string | null;
		isBillable?: boolean | null;
		measurementUnit?: string | null;
		name?: string | null;
		phase?: SimpleInputModel;
		plannedBillingDate?: Date | null;
		product?: SimpleInputModel;
		productType?: ProductOutputModelType | null;

		/** Required */
		project: SimpleInputRequiredModel;
		quantity?: number | null;
		salesAccount?: SimpleInputModel;
		unitCost?: MoneyInputModelWithNullableAmount;
		unitPrice?: MoneyInputModelWithNullableAmount;
		user?: SimpleInputModel;
		vatRate?: number | null;
	}
	export interface ProjectFeeInputModelFormProperties {
		billingSchedule: FormControl<ProjectFeeBillingScheduleType | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayPeriodStartDate: FormControl<Date | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		hasVolumePricing: FormControl<boolean | null | undefined>,
		invoiceQuantity: FormControl<number | null | undefined>,
		invoiceRowComment: FormControl<string | null | undefined>,
		invoiceRowDescription: FormControl<string | null | undefined>,
		isBillable: FormControl<boolean | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		plannedBillingDate: FormControl<Date | null | undefined>,
		productType: FormControl<ProductOutputModelType | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateProjectFeeInputModelFormGroup() {
		return new FormGroup<ProjectFeeInputModelFormProperties>({
			billingSchedule: new FormControl<ProjectFeeBillingScheduleType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayPeriodStartDate: new FormControl<Date | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			hasVolumePricing: new FormControl<boolean | null | undefined>(undefined),
			invoiceQuantity: new FormControl<number | null | undefined>(undefined),
			invoiceRowComment: new FormControl<string | null | undefined>(undefined),
			invoiceRowDescription: new FormControl<string | null | undefined>(undefined),
			isBillable: new FormControl<boolean | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			plannedBillingDate: new FormControl<Date | null | undefined>(undefined),
			productType: new FormControl<ProductOutputModelType | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectFeeInvoiceSubModel {
		date?: Date | null;
		guid?: string | null;
		number?: number | null;
	}
	export interface ProjectFeeInvoiceSubModelFormProperties {
		date: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateProjectFeeInvoiceSubModelFormGroup() {
		return new FormGroup<ProjectFeeInvoiceSubModelFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectFeeOutputModel {
		billingDependencyPhase?: ProjectFeePhaseSubModel;
		billingSchedule?: ProjectFeeBillingScheduleType | null;
		costCenter?: ProjectCostCenterSubModel;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: ProjectFeeCustomerSubModel;
		description?: string | null;
		displayPeriodStartDate?: Date | null;
		eventDate?: Date | null;
		guid?: string | null;
		hasVolumePricing?: boolean | null;
		invoice?: ProjectFeeInvoiceSubModel;
		invoiceQuantity?: number | null;
		invoiceRowComment?: string | null;
		invoiceRowDescription?: string | null;
		invoiceRowGuid?: string | null;
		isBillable?: boolean | null;
		isRecurrenceRule?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		measurementUnit?: string | null;
		name?: string | null;
		phase?: ModelWithName;
		plannedBillingDate?: Date | null;
		product?: ProjectFeeProductSubModel;
		productType?: ProductOutputModelType | null;
		project?: ProjectFeeProjectSubModel;
		quantity?: number | null;
		recurrenceRuleGuid?: string | null;
		salesAccount?: ProjectSalesAccountSubModel;
		unitCost?: MoneyOutputModel;
		unitPrice?: MoneyOutputModel;
		user?: UserSubModel;
		vatRate?: number | null;
	}
	export interface ProjectFeeOutputModelFormProperties {
		billingSchedule: FormControl<ProjectFeeBillingScheduleType | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayPeriodStartDate: FormControl<Date | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		hasVolumePricing: FormControl<boolean | null | undefined>,
		invoiceQuantity: FormControl<number | null | undefined>,
		invoiceRowComment: FormControl<string | null | undefined>,
		invoiceRowDescription: FormControl<string | null | undefined>,
		invoiceRowGuid: FormControl<string | null | undefined>,
		isBillable: FormControl<boolean | null | undefined>,
		isRecurrenceRule: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		plannedBillingDate: FormControl<Date | null | undefined>,
		productType: FormControl<ProductOutputModelType | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		recurrenceRuleGuid: FormControl<string | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateProjectFeeOutputModelFormGroup() {
		return new FormGroup<ProjectFeeOutputModelFormProperties>({
			billingSchedule: new FormControl<ProjectFeeBillingScheduleType | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayPeriodStartDate: new FormControl<Date | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			hasVolumePricing: new FormControl<boolean | null | undefined>(undefined),
			invoiceQuantity: new FormControl<number | null | undefined>(undefined),
			invoiceRowComment: new FormControl<string | null | undefined>(undefined),
			invoiceRowDescription: new FormControl<string | null | undefined>(undefined),
			invoiceRowGuid: new FormControl<string | null | undefined>(undefined),
			isBillable: new FormControl<boolean | null | undefined>(undefined),
			isRecurrenceRule: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			plannedBillingDate: new FormControl<Date | null | undefined>(undefined),
			productType: new FormControl<ProductOutputModelType | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			recurrenceRuleGuid: new FormControl<string | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectFeePhaseSubModel {
		guid?: string | null;
		isCompleted?: boolean | null;
		name?: string | null;
	}
	export interface ProjectFeePhaseSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		isCompleted: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateProjectFeePhaseSubModelFormGroup() {
		return new FormGroup<ProjectFeePhaseSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isCompleted: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectFeeProductSubModel {
		code?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface ProjectFeeProductSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateProjectFeeProductSubModelFormGroup() {
		return new FormGroup<ProjectFeeProductSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectFeeProjectSubModel {
		companyGuid?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
	}
	export interface ProjectFeeProjectSubModelFormProperties {
		companyGuid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateProjectFeeProjectSubModelFormGroup() {
		return new FormGroup<ProjectFeeProjectSubModelFormProperties>({
			companyGuid: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectSalesAccountSubModel {
		guid?: string | null;
		name?: string | null;
		number?: string | null;
	}
	export interface ProjectSalesAccountSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
	}
	export function CreateProjectSalesAccountSubModelFormGroup() {
		return new FormGroup<ProjectSalesAccountSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserSubModel {
		code?: string | null;
		companyGuid?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface UserSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		companyGuid: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserSubModelFormGroup() {
		return new FormGroup<UserSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			companyGuid: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectFileModel {
		category?: FileCategory | null;
		contentType?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		description?: string | null;
		fileGuid?: string | null;
		guid?: string | null;
		isInternal?: boolean | null;
		isReadOnly?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Min length: 1
		 */
		projectGuid: string;
		size?: number | null;
		usages?: Array<UsageModel>;
	}
	export interface ProjectFileModelFormProperties {
		category: FormControl<FileCategory | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		fileGuid: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		isReadOnly: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		projectGuid: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
	}
	export function CreateProjectFileModelFormGroup() {
		return new FormGroup<ProjectFileModelFormProperties>({
			category: new FormControl<FileCategory | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fileGuid: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			isReadOnly: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			projectGuid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UsageModel {
		guid?: string | null;
		isReadOnly?: boolean | null;
		name?: string | null;
		type?: UsageModelType | null;
	}
	export interface UsageModelFormProperties {
		guid: FormControl<string | null | undefined>,
		isReadOnly: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<UsageModelType | null | undefined>,
	}
	export function CreateUsageModelFormGroup() {
		return new FormGroup<UsageModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isReadOnly: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UsageModelType | null | undefined>(undefined),
		});

	}

	export enum UsageModelType { Invoice = 0, Proposal = 1, InvoiceTemplate = 2, Other = 3 }

	export interface ProjectForecastInputModel {
		billingForecast?: MoneyInputModelWithNullableAmount;
		billingForecastNotes?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		expenseForecast?: MoneyInputModelWithNullableAmount;
		expenseForecastNotes?: string | null;
		guid?: string | null;
		laborExpenseForecast?: MoneyInputModelWithNullableAmount;
		laborExpenseForecastNotes?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 12
		 */
		month: number;

		/** Required */
		project: SimpleInputRequiredModel;
		revenueForecast?: MoneyInputModelWithNullableAmount;
		revenueForecastNotes?: string | null;

		/**
		 * Required
		 * Minimum: 1900
		 * Maximum: 2075
		 */
		year: number;
	}
	export interface ProjectForecastInputModelFormProperties {
		billingForecastNotes: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		expenseForecastNotes: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		laborExpenseForecastNotes: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 12
		 */
		month: FormControl<number | null | undefined>,
		revenueForecastNotes: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1900
		 * Maximum: 2075
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateProjectForecastInputModelFormGroup() {
		return new FormGroup<ProjectForecastInputModelFormProperties>({
			billingForecastNotes: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			expenseForecastNotes: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			laborExpenseForecastNotes: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(12)]),
			revenueForecastNotes: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1900), Validators.max(2075)]),
		});

	}

	export interface ProjectForecastOutputModel {
		billingForecast?: MoneyOutputModel;
		billingForecastNotes?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		expenseForecast?: MoneyOutputModel;
		expenseForecastNotes?: string | null;
		guid?: string | null;
		laborExpenseForecast?: MoneyOutputModel;
		laborExpenseForecastNotes?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		month?: number | null;
		project?: ModelBaseWithRequiredGuid;
		revenueForecast?: MoneyOutputModel;
		revenueForecastNotes?: string | null;
		year?: number | null;
	}
	export interface ProjectForecastOutputModelFormProperties {
		billingForecastNotes: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		expenseForecastNotes: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		laborExpenseForecastNotes: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		month: FormControl<number | null | undefined>,
		revenueForecastNotes: FormControl<string | null | undefined>,
		year: FormControl<number | null | undefined>,
	}
	export function CreateProjectForecastOutputModelFormGroup() {
		return new FormGroup<ProjectForecastOutputModelFormProperties>({
			billingForecastNotes: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			expenseForecastNotes: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			laborExpenseForecastNotes: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			revenueForecastNotes: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectInputModelBase {
		billingContact?: SimpleInputModel;
		businessUnit?: SimpleInputRequiredModel;
		completionEstimatePercentage?: number | null;
		costCenter?: SimpleInputModel;
		currency?: SimpleInputRequiredModel;

		/** Required */
		customer: SimpleInputRequiredModel;
		customerContact?: SimpleInputModel;
		deadline?: Date | null;
		description?: string | null;
		expectedOrderDate?: Date | null;
		expectedValue?: MoneyInputModelWithNullableAmount;
		internalName?: string | null;
		invoiceNotes?: string | null;
		invoiceTemplate?: InvoiceTemplateSubModel;
		isClosed?: boolean | null;
		isInternal?: boolean | null;
		isJoiningAllowed?: boolean | null;
		leadSource?: SimpleInputModel;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		number?: number | null;
		orderNumber?: string | null;
		ourReference?: string | null;
		paymentTerm?: number | null;
		probability?: number | null;

		/** Required */
		projectOwner: SimpleInputModel;
		projectStatus?: SimpleProjectStatusInputModel;
		salesPerson?: SimpleInputModel;
		salesStatus?: SimpleSalesStatusInputModel;
		startDate?: Date | null;
		useOvertimeMultipliers?: boolean | null;
		useProductsFromSetting?: boolean | null;
		useWorktypesFromSetting?: boolean | null;
		yourReference?: string | null;
	}
	export interface ProjectInputModelBaseFormProperties {
		completionEstimatePercentage: FormControl<number | null | undefined>,
		deadline: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		expectedOrderDate: FormControl<Date | null | undefined>,
		internalName: FormControl<string | null | undefined>,
		invoiceNotes: FormControl<string | null | undefined>,
		isClosed: FormControl<boolean | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		isJoiningAllowed: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
		orderNumber: FormControl<string | null | undefined>,
		ourReference: FormControl<string | null | undefined>,
		paymentTerm: FormControl<number | null | undefined>,
		probability: FormControl<number | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		useOvertimeMultipliers: FormControl<boolean | null | undefined>,
		useProductsFromSetting: FormControl<boolean | null | undefined>,
		useWorktypesFromSetting: FormControl<boolean | null | undefined>,
		yourReference: FormControl<string | null | undefined>,
	}
	export function CreateProjectInputModelBaseFormGroup() {
		return new FormGroup<ProjectInputModelBaseFormProperties>({
			completionEstimatePercentage: new FormControl<number | null | undefined>(undefined),
			deadline: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expectedOrderDate: new FormControl<Date | null | undefined>(undefined),
			internalName: new FormControl<string | null | undefined>(undefined),
			invoiceNotes: new FormControl<string | null | undefined>(undefined),
			isClosed: new FormControl<boolean | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			isJoiningAllowed: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			number: new FormControl<number | null | undefined>(undefined),
			orderNumber: new FormControl<string | null | undefined>(undefined),
			ourReference: new FormControl<string | null | undefined>(undefined),
			paymentTerm: new FormControl<number | null | undefined>(undefined),
			probability: new FormControl<number | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			useOvertimeMultipliers: new FormControl<boolean | null | undefined>(undefined),
			useProductsFromSetting: new FormControl<boolean | null | undefined>(undefined),
			useWorktypesFromSetting: new FormControl<boolean | null | undefined>(undefined),
			yourReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimpleProjectStatusInputModel {
		description?: string | null;
		projectStatusTypeGuid?: string | null;
	}
	export interface SimpleProjectStatusInputModelFormProperties {
		description: FormControl<string | null | undefined>,
		projectStatusTypeGuid: FormControl<string | null | undefined>,
	}
	export function CreateSimpleProjectStatusInputModelFormGroup() {
		return new FormGroup<SimpleProjectStatusInputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			projectStatusTypeGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimpleSalesStatusInputModel {
		salesStatusTypeGuid?: string | null;
	}
	export interface SimpleSalesStatusInputModelFormProperties {
		salesStatusTypeGuid: FormControl<string | null | undefined>,
	}
	export function CreateSimpleSalesStatusInputModelFormGroup() {
		return new FormGroup<SimpleSalesStatusInputModelFormProperties>({
			salesStatusTypeGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectInvoiceSettingsInputModel {
		freeText1?: TemplateFreeTextModel;
		freeText2?: TemplateFreeTextModel;
		htmlText1?: TemplateFreeTextModel;
		htmlText2?: TemplateFreeTextModel;

		/** Required */
		project: SimpleInputRequiredModel;
		projectFeeDescriptionFormat?: string | null;
		projectFeeGrouping?: InvoiceGrouping | null;
		projectFeePrimaryGroupBy?: string | null;
		projectFeeSecondaryGroupBy?: string | null;
		projectTravelExpenseDescriptionFormat?: string | null;
		projectTravelExpenseGrouping?: InvoiceGrouping | null;
		projectTravelExpensePrimaryGroupBy?: string | null;
		projectTravelExpenseSecondaryGroupBy?: string | null;
		showAttachmentPriceExcludingValueAddedTax?: boolean | null;
		showAttachmentUnit?: boolean | null;
		showAttachmentUnitPrice?: boolean | null;
		showAttachmentValueAddedTax?: boolean | null;
		showCategories?: boolean | null;
		showFooter?: boolean | null;
		showLogoAndTitle?: boolean | null;
		showPriceExcludingValueAddedTax?: boolean | null;
		showQuantity?: boolean | null;
		showReferenceNumber?: boolean | null;
		showUnit?: boolean | null;
		showUnitPrice?: boolean | null;
		showValueAddedTax?: boolean | null;
		style?: InvoiceSettingsOutputModelStyle | null;
		workHourDescriptionFormat?: string | null;
		workHourGrouping?: InvoiceGrouping | null;
		workHourPrimaryGroupBy?: string | null;
		workHourSecondaryGroupBy?: string | null;
	}
	export interface ProjectInvoiceSettingsInputModelFormProperties {
		projectFeeDescriptionFormat: FormControl<string | null | undefined>,
		projectFeeGrouping: FormControl<InvoiceGrouping | null | undefined>,
		projectFeePrimaryGroupBy: FormControl<string | null | undefined>,
		projectFeeSecondaryGroupBy: FormControl<string | null | undefined>,
		projectTravelExpenseDescriptionFormat: FormControl<string | null | undefined>,
		projectTravelExpenseGrouping: FormControl<InvoiceGrouping | null | undefined>,
		projectTravelExpensePrimaryGroupBy: FormControl<string | null | undefined>,
		projectTravelExpenseSecondaryGroupBy: FormControl<string | null | undefined>,
		showAttachmentPriceExcludingValueAddedTax: FormControl<boolean | null | undefined>,
		showAttachmentUnit: FormControl<boolean | null | undefined>,
		showAttachmentUnitPrice: FormControl<boolean | null | undefined>,
		showAttachmentValueAddedTax: FormControl<boolean | null | undefined>,
		showCategories: FormControl<boolean | null | undefined>,
		showFooter: FormControl<boolean | null | undefined>,
		showLogoAndTitle: FormControl<boolean | null | undefined>,
		showPriceExcludingValueAddedTax: FormControl<boolean | null | undefined>,
		showQuantity: FormControl<boolean | null | undefined>,
		showReferenceNumber: FormControl<boolean | null | undefined>,
		showUnit: FormControl<boolean | null | undefined>,
		showUnitPrice: FormControl<boolean | null | undefined>,
		showValueAddedTax: FormControl<boolean | null | undefined>,
		style: FormControl<InvoiceSettingsOutputModelStyle | null | undefined>,
		workHourDescriptionFormat: FormControl<string | null | undefined>,
		workHourGrouping: FormControl<InvoiceGrouping | null | undefined>,
		workHourPrimaryGroupBy: FormControl<string | null | undefined>,
		workHourSecondaryGroupBy: FormControl<string | null | undefined>,
	}
	export function CreateProjectInvoiceSettingsInputModelFormGroup() {
		return new FormGroup<ProjectInvoiceSettingsInputModelFormProperties>({
			projectFeeDescriptionFormat: new FormControl<string | null | undefined>(undefined),
			projectFeeGrouping: new FormControl<InvoiceGrouping | null | undefined>(undefined),
			projectFeePrimaryGroupBy: new FormControl<string | null | undefined>(undefined),
			projectFeeSecondaryGroupBy: new FormControl<string | null | undefined>(undefined),
			projectTravelExpenseDescriptionFormat: new FormControl<string | null | undefined>(undefined),
			projectTravelExpenseGrouping: new FormControl<InvoiceGrouping | null | undefined>(undefined),
			projectTravelExpensePrimaryGroupBy: new FormControl<string | null | undefined>(undefined),
			projectTravelExpenseSecondaryGroupBy: new FormControl<string | null | undefined>(undefined),
			showAttachmentPriceExcludingValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			showAttachmentUnit: new FormControl<boolean | null | undefined>(undefined),
			showAttachmentUnitPrice: new FormControl<boolean | null | undefined>(undefined),
			showAttachmentValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			showCategories: new FormControl<boolean | null | undefined>(undefined),
			showFooter: new FormControl<boolean | null | undefined>(undefined),
			showLogoAndTitle: new FormControl<boolean | null | undefined>(undefined),
			showPriceExcludingValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			showQuantity: new FormControl<boolean | null | undefined>(undefined),
			showReferenceNumber: new FormControl<boolean | null | undefined>(undefined),
			showUnit: new FormControl<boolean | null | undefined>(undefined),
			showUnitPrice: new FormControl<boolean | null | undefined>(undefined),
			showValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			style: new FormControl<InvoiceSettingsOutputModelStyle | null | undefined>(undefined),
			workHourDescriptionFormat: new FormControl<string | null | undefined>(undefined),
			workHourGrouping: new FormControl<InvoiceGrouping | null | undefined>(undefined),
			workHourPrimaryGroupBy: new FormControl<string | null | undefined>(undefined),
			workHourSecondaryGroupBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateFreeTextModel {
		allowTags?: boolean | null;
		tagContext?: string | null;
		value?: string | null;
	}
	export interface TemplateFreeTextModelFormProperties {
		allowTags: FormControl<boolean | null | undefined>,
		tagContext: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTemplateFreeTextModelFormGroup() {
		return new FormGroup<TemplateFreeTextModelFormProperties>({
			allowTags: new FormControl<boolean | null | undefined>(undefined),
			tagContext: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectInvoiceSettingsOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		freeText1?: TemplateFreeTextModel;
		freeText2?: TemplateFreeTextModel;
		guid?: string | null;
		htmlText1?: TemplateFreeTextModel;
		htmlText2?: TemplateFreeTextModel;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		project?: ModelBase;
		projectFeeDescriptionFormat?: string | null;
		projectFeeGrouping?: InvoiceGrouping | null;
		projectFeePrimaryGroupBy?: string | null;
		projectFeeSecondaryGroupBy?: string | null;
		projectTravelExpenseDescriptionFormat?: string | null;
		projectTravelExpenseGrouping?: InvoiceGrouping | null;
		projectTravelExpensePrimaryGroupBy?: string | null;
		projectTravelExpenseSecondaryGroupBy?: string | null;
		showAttachmentPriceExcludingValueAddedTax?: boolean | null;
		showAttachmentUnit?: boolean | null;
		showAttachmentUnitPrice?: boolean | null;
		showAttachmentValueAddedTax?: boolean | null;
		showCategories?: boolean | null;
		showFooter?: boolean | null;
		showLogoAndTitle?: boolean | null;
		showPriceExcludingValueAddedTax?: boolean | null;
		showQuantity?: boolean | null;
		showReferenceNumber?: boolean | null;
		showUnit?: boolean | null;
		showUnitPrice?: boolean | null;
		showValueAddedTax?: boolean | null;
		style?: InvoiceSettingsOutputModelStyle | null;
		workHourDescriptionFormat?: string | null;
		workHourGrouping?: InvoiceGrouping | null;
		workHourPrimaryGroupBy?: string | null;
		workHourSecondaryGroupBy?: string | null;
	}
	export interface ProjectInvoiceSettingsOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		projectFeeDescriptionFormat: FormControl<string | null | undefined>,
		projectFeeGrouping: FormControl<InvoiceGrouping | null | undefined>,
		projectFeePrimaryGroupBy: FormControl<string | null | undefined>,
		projectFeeSecondaryGroupBy: FormControl<string | null | undefined>,
		projectTravelExpenseDescriptionFormat: FormControl<string | null | undefined>,
		projectTravelExpenseGrouping: FormControl<InvoiceGrouping | null | undefined>,
		projectTravelExpensePrimaryGroupBy: FormControl<string | null | undefined>,
		projectTravelExpenseSecondaryGroupBy: FormControl<string | null | undefined>,
		showAttachmentPriceExcludingValueAddedTax: FormControl<boolean | null | undefined>,
		showAttachmentUnit: FormControl<boolean | null | undefined>,
		showAttachmentUnitPrice: FormControl<boolean | null | undefined>,
		showAttachmentValueAddedTax: FormControl<boolean | null | undefined>,
		showCategories: FormControl<boolean | null | undefined>,
		showFooter: FormControl<boolean | null | undefined>,
		showLogoAndTitle: FormControl<boolean | null | undefined>,
		showPriceExcludingValueAddedTax: FormControl<boolean | null | undefined>,
		showQuantity: FormControl<boolean | null | undefined>,
		showReferenceNumber: FormControl<boolean | null | undefined>,
		showUnit: FormControl<boolean | null | undefined>,
		showUnitPrice: FormControl<boolean | null | undefined>,
		showValueAddedTax: FormControl<boolean | null | undefined>,
		style: FormControl<InvoiceSettingsOutputModelStyle | null | undefined>,
		workHourDescriptionFormat: FormControl<string | null | undefined>,
		workHourGrouping: FormControl<InvoiceGrouping | null | undefined>,
		workHourPrimaryGroupBy: FormControl<string | null | undefined>,
		workHourSecondaryGroupBy: FormControl<string | null | undefined>,
	}
	export function CreateProjectInvoiceSettingsOutputModelFormGroup() {
		return new FormGroup<ProjectInvoiceSettingsOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			projectFeeDescriptionFormat: new FormControl<string | null | undefined>(undefined),
			projectFeeGrouping: new FormControl<InvoiceGrouping | null | undefined>(undefined),
			projectFeePrimaryGroupBy: new FormControl<string | null | undefined>(undefined),
			projectFeeSecondaryGroupBy: new FormControl<string | null | undefined>(undefined),
			projectTravelExpenseDescriptionFormat: new FormControl<string | null | undefined>(undefined),
			projectTravelExpenseGrouping: new FormControl<InvoiceGrouping | null | undefined>(undefined),
			projectTravelExpensePrimaryGroupBy: new FormControl<string | null | undefined>(undefined),
			projectTravelExpenseSecondaryGroupBy: new FormControl<string | null | undefined>(undefined),
			showAttachmentPriceExcludingValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			showAttachmentUnit: new FormControl<boolean | null | undefined>(undefined),
			showAttachmentUnitPrice: new FormControl<boolean | null | undefined>(undefined),
			showAttachmentValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			showCategories: new FormControl<boolean | null | undefined>(undefined),
			showFooter: new FormControl<boolean | null | undefined>(undefined),
			showLogoAndTitle: new FormControl<boolean | null | undefined>(undefined),
			showPriceExcludingValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			showQuantity: new FormControl<boolean | null | undefined>(undefined),
			showReferenceNumber: new FormControl<boolean | null | undefined>(undefined),
			showUnit: new FormControl<boolean | null | undefined>(undefined),
			showUnitPrice: new FormControl<boolean | null | undefined>(undefined),
			showValueAddedTax: new FormControl<boolean | null | undefined>(undefined),
			style: new FormControl<InvoiceSettingsOutputModelStyle | null | undefined>(undefined),
			workHourDescriptionFormat: new FormControl<string | null | undefined>(undefined),
			workHourGrouping: new FormControl<InvoiceGrouping | null | undefined>(undefined),
			workHourPrimaryGroupBy: new FormControl<string | null | undefined>(undefined),
			workHourSecondaryGroupBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectInvoiceTemplateSubModel {
		guid?: string | null;
		name?: string | null;
		templateInvoiceGuid?: string | null;
	}
	export interface ProjectInvoiceTemplateSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		templateInvoiceGuid: FormControl<string | null | undefined>,
	}
	export function CreateProjectInvoiceTemplateSubModelFormGroup() {
		return new FormGroup<ProjectInvoiceTemplateSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			templateInvoiceGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectKeywordModel {
		category?: ContactKeywordModelCategory | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		keyword: string;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
	}
	export interface ProjectKeywordModelFormProperties {
		category: FormControl<ContactKeywordModelCategory | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		keyword: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateProjectKeywordModelFormGroup() {
		return new FormGroup<ProjectKeywordModelFormProperties>({
			category: new FormControl<ContactKeywordModelCategory | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ProjectMemberCostExceptionInputModel {
		cost?: MoneyInputModelWithNullableAmount;

		/** Required */
		project: SimpleInputRequiredModel;

		/** Required */
		user: SimpleInputRequiredModel;
	}
	export interface ProjectMemberCostExceptionInputModelFormProperties {
	}
	export function CreateProjectMemberCostExceptionInputModelFormGroup() {
		return new FormGroup<ProjectMemberCostExceptionInputModelFormProperties>({
		});

	}

	export interface ProjectMemberCostExceptionOutputModel {
		cost?: MoneyOutputModel;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: ProjectMemberCostExceptionProjectCustomerSubModel;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		project?: ProjectMemberCostExceptionProjectSubModel;
		user?: UserWithFirstNameLastNamePhotoFileModelAndRequiredGuid;
	}
	export interface ProjectMemberCostExceptionOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateProjectMemberCostExceptionOutputModelFormGroup() {
		return new FormGroup<ProjectMemberCostExceptionOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ProjectMemberCostExceptionProjectCustomerSubModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
		number?: number | null;
	}
	export interface ProjectMemberCostExceptionProjectCustomerSubModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateProjectMemberCostExceptionProjectCustomerSubModelFormGroup() {
		return new FormGroup<ProjectMemberCostExceptionProjectCustomerSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectMemberCostExceptionProjectSubModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		isClosed?: boolean | null;
		name?: string | null;
		number?: number | null;
	}
	export interface ProjectMemberCostExceptionProjectSubModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		isClosed: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateProjectMemberCostExceptionProjectSubModelFormGroup() {
		return new FormGroup<ProjectMemberCostExceptionProjectSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			isClosed: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProjectNameDisplayFormatOptions { ProjectNamePhaseName = 0, CustomerNameProjectNamePhaseName = 1 }

	export enum ProjectNameDisplayOptions { ShowProjectLongName = 0, ShowProjectShortName = 1 }

	export interface ProjectOutputModel {
		billingContact?: UserWithFirstNameLastNameAndPhotoFileModel;
		businessUnit?: BusinessUnitSubModel;
		calculatedCompletionPercentage?: number | null;
		closedDate?: Date | null;
		completionEstimatePercentage?: number | null;
		costCenter?: ProjectCostCenterSubModel;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		currency?: CurrencySubModel2;
		customer?: ProjectCustomerSubModel;
		customerContact?: CustomerContactSubModel;
		deadline?: Date | null;
		defaultWorkType?: ModelWithName;
		description?: string | null;
		expectedOrderDate?: Date | null;
		expectedValue?: MoneyOutputModel;
		guid?: string | null;
		internalName?: string | null;
		invoiceNotes?: string | null;
		invoiceTemplate?: ProjectInvoiceTemplateSubModel;
		isClosed?: boolean | null;
		isDailyAllowanceBillable?: boolean | null;
		isInternal?: boolean | null;
		isJoiningAllowed?: boolean | null;
		isMileageBillable?: boolean | null;
		isOtherTravelExpensesBillable?: boolean | null;
		keywords?: Array<ModelWithName>;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		leadSource?: ModelWithName;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		number?: number | null;
		orderNumber?: string | null;
		ourReference?: string | null;
		paymentTerm?: number | null;
		pricelist?: ProjectPricelistSubModel;
		probability?: number | null;
		projectOwner?: UserWithFirstNameLastNameAndPhotoFileModel;
		projectStatus?: ProjectStatusSubModel;
		rootPhase?: ModelWithName;
		salesPerson?: UserWithFirstNameLastNameAndPhotoFileModel;
		salesStatus?: SalesStatusSubModel;
		startDate?: Date | null;
		useOvertimeMultipliers?: boolean | null;
		useProductsFromSetting?: boolean | null;
		useWorkTypesFromSetting?: boolean | null;
		yourReference?: string | null;
	}
	export interface ProjectOutputModelFormProperties {
		calculatedCompletionPercentage: FormControl<number | null | undefined>,
		closedDate: FormControl<Date | null | undefined>,
		completionEstimatePercentage: FormControl<number | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		deadline: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		expectedOrderDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		internalName: FormControl<string | null | undefined>,
		invoiceNotes: FormControl<string | null | undefined>,
		isClosed: FormControl<boolean | null | undefined>,
		isDailyAllowanceBillable: FormControl<boolean | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		isJoiningAllowed: FormControl<boolean | null | undefined>,
		isMileageBillable: FormControl<boolean | null | undefined>,
		isOtherTravelExpensesBillable: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
		orderNumber: FormControl<string | null | undefined>,
		ourReference: FormControl<string | null | undefined>,
		paymentTerm: FormControl<number | null | undefined>,
		probability: FormControl<number | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		useOvertimeMultipliers: FormControl<boolean | null | undefined>,
		useProductsFromSetting: FormControl<boolean | null | undefined>,
		useWorkTypesFromSetting: FormControl<boolean | null | undefined>,
		yourReference: FormControl<string | null | undefined>,
	}
	export function CreateProjectOutputModelFormGroup() {
		return new FormGroup<ProjectOutputModelFormProperties>({
			calculatedCompletionPercentage: new FormControl<number | null | undefined>(undefined),
			closedDate: new FormControl<Date | null | undefined>(undefined),
			completionEstimatePercentage: new FormControl<number | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			deadline: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expectedOrderDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			internalName: new FormControl<string | null | undefined>(undefined),
			invoiceNotes: new FormControl<string | null | undefined>(undefined),
			isClosed: new FormControl<boolean | null | undefined>(undefined),
			isDailyAllowanceBillable: new FormControl<boolean | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			isJoiningAllowed: new FormControl<boolean | null | undefined>(undefined),
			isMileageBillable: new FormControl<boolean | null | undefined>(undefined),
			isOtherTravelExpensesBillable: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			number: new FormControl<number | null | undefined>(undefined),
			orderNumber: new FormControl<string | null | undefined>(undefined),
			ourReference: new FormControl<string | null | undefined>(undefined),
			paymentTerm: new FormControl<number | null | undefined>(undefined),
			probability: new FormControl<number | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			useOvertimeMultipliers: new FormControl<boolean | null | undefined>(undefined),
			useProductsFromSetting: new FormControl<boolean | null | undefined>(undefined),
			useWorkTypesFromSetting: new FormControl<boolean | null | undefined>(undefined),
			yourReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectPricelistSubModel {
		guid?: string | null;
		isCustom?: boolean | null;
		isVolumePricing?: boolean | null;
		name?: string | null;
	}
	export interface ProjectPricelistSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		isCustom: FormControl<boolean | null | undefined>,
		isVolumePricing: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateProjectPricelistSubModelFormGroup() {
		return new FormGroup<ProjectPricelistSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isCustom: new FormControl<boolean | null | undefined>(undefined),
			isVolumePricing: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectStatusSubModel {
		description?: string | null;
		guid?: string | null;
		name?: string | null;
		projectStatusTypeGuid?: string | null;
	}
	export interface ProjectStatusSubModelFormProperties {
		description: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		projectStatusTypeGuid: FormControl<string | null | undefined>,
	}
	export function CreateProjectStatusSubModelFormGroup() {
		return new FormGroup<ProjectStatusSubModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectStatusTypeGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesStatusSubModel {
		guid?: string | null;
		name?: string | null;
		salesStatusTypeGuid?: string | null;
	}
	export interface SalesStatusSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		salesStatusTypeGuid: FormControl<string | null | undefined>,
	}
	export function CreateSalesStatusSubModelFormGroup() {
		return new FormGroup<SalesStatusSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			salesStatusTypeGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectProductInputModel {
		guid?: string | null;

		/** Required */
		product: SimpleInputRequiredModel;

		/** Required */
		project: SimpleInputRequiredModel;
	}
	export interface ProjectProductInputModelFormProperties {
		guid: FormControl<string | null | undefined>,
	}
	export function CreateProjectProductInputModelFormGroup() {
		return new FormGroup<ProjectProductInputModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectProductOutputModel {
		guid?: string | null;

		/** Required */
		product: ProjectProductSubModel;
		project?: ProjectSubModel;
	}
	export interface ProjectProductOutputModelFormProperties {
		guid: FormControl<string | null | undefined>,
	}
	export function CreateProjectProductOutputModelFormGroup() {
		return new FormGroup<ProjectProductOutputModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectProductSubModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		isActive?: boolean | null;
		name?: string | null;
		productCategory?: string | null;
		productCode?: string | null;
		productType?: ProjectProductSubModelProductType | null;
	}
	export interface ProjectProductSubModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		productCategory: FormControl<string | null | undefined>,
		productCode: FormControl<string | null | undefined>,
		productType: FormControl<ProjectProductSubModelProductType | null | undefined>,
	}
	export function CreateProjectProductSubModelFormGroup() {
		return new FormGroup<ProjectProductSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productCategory: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			productType: new FormControl<ProjectProductSubModelProductType | null | undefined>(undefined),
		});

	}

	export enum ProjectProductSubModelProductType { OwnWork = 0, Products = 1, Subcontracting = 2, Travels = 3 }

	export interface ProjectSubModel {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface ProjectSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateProjectSubModelFormGroup() {
		return new FormGroup<ProjectSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectRecurringFeeRuleInputModel {
		costCenter?: SimpleInputModel;
		description?: string | null;
		displayPeriodStartDate?: Date | null;

		/** Required */
		frequency: number;
		hasVolumePricing?: boolean | null;
		isActive?: boolean | null;
		measurementUnit?: string | null;
		phase?: SimpleInputModel;
		product?: SimpleInputModel;
		productType?: ProductOutputModelType | null;

		/** Required */
		project: SimpleInputRequiredModel;
		quantity?: number | null;
		recurrenceEndDate?: Date | null;
		recurrenceEndType?: ProjectRecurringFeeRuleInputModelRecurrenceEndType | null;
		recurrenceStartDate?: Date | null;
		recurrenceTimes?: number | null;
		recurringSalesAccount?: SimpleInputModel;
		salesAccount?: SimpleInputModel;
		unitCost?: MoneyInputModelWithNullableAmount;
		unitPrice?: MoneyInputModelWithNullableAmount;
		user?: SimpleInputModel;
		vatRate?: number | null;
	}
	export interface ProjectRecurringFeeRuleInputModelFormProperties {
		description: FormControl<string | null | undefined>,
		displayPeriodStartDate: FormControl<Date | null | undefined>,

		/** Required */
		frequency: FormControl<number | null | undefined>,
		hasVolumePricing: FormControl<boolean | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		productType: FormControl<ProductOutputModelType | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		recurrenceEndDate: FormControl<Date | null | undefined>,
		recurrenceEndType: FormControl<ProjectRecurringFeeRuleInputModelRecurrenceEndType | null | undefined>,
		recurrenceStartDate: FormControl<Date | null | undefined>,
		recurrenceTimes: FormControl<number | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateProjectRecurringFeeRuleInputModelFormGroup() {
		return new FormGroup<ProjectRecurringFeeRuleInputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayPeriodStartDate: new FormControl<Date | null | undefined>(undefined),
			frequency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasVolumePricing: new FormControl<boolean | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			productType: new FormControl<ProductOutputModelType | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			recurrenceEndDate: new FormControl<Date | null | undefined>(undefined),
			recurrenceEndType: new FormControl<ProjectRecurringFeeRuleInputModelRecurrenceEndType | null | undefined>(undefined),
			recurrenceStartDate: new FormControl<Date | null | undefined>(undefined),
			recurrenceTimes: new FormControl<number | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProjectRecurringFeeRuleInputModelRecurrenceEndType { Never = 0, AfterNumberOfTimes = 1, OnDate = 2 }

	export interface ProjectRecurringFeeRuleOutputModel {
		costCenter?: ProjectCostCenterSubModel;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: ProjectFeeCustomerSubModel;
		description?: string | null;
		displayPeriodStartDate?: Date | null;
		frequency?: number | null;
		generatedTimes?: number | null;
		guid?: string | null;
		hasVolumePricing?: boolean | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		measurementUnit?: string | null;
		name?: string | null;
		phase?: ModelWithName;
		product?: ProjectFeeProductSubModel;
		productType?: ProductOutputModelType | null;
		project?: ProjectFeeProjectSubModel;
		quantity?: number | null;
		recurrenceEndDate?: Date | null;
		recurrenceEndType?: ProjectRecurringFeeRuleInputModelRecurrenceEndType | null;
		recurrenceStartDate?: Date | null;
		recurrenceTimes?: number | null;
		recurringSalesAccount?: ProjectSalesAccountSubModel;
		salesAccount?: ProjectSalesAccountSubModel;
		unitCost?: MoneyOutputModel;
		unitPrice?: MoneyOutputModel;
		user?: UserSubModel;
		vatRate?: number | null;
	}
	export interface ProjectRecurringFeeRuleOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayPeriodStartDate: FormControl<Date | null | undefined>,
		frequency: FormControl<number | null | undefined>,
		generatedTimes: FormControl<number | null | undefined>,
		guid: FormControl<string | null | undefined>,
		hasVolumePricing: FormControl<boolean | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		productType: FormControl<ProductOutputModelType | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		recurrenceEndDate: FormControl<Date | null | undefined>,
		recurrenceEndType: FormControl<ProjectRecurringFeeRuleInputModelRecurrenceEndType | null | undefined>,
		recurrenceStartDate: FormControl<Date | null | undefined>,
		recurrenceTimes: FormControl<number | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateProjectRecurringFeeRuleOutputModelFormGroup() {
		return new FormGroup<ProjectRecurringFeeRuleOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayPeriodStartDate: new FormControl<Date | null | undefined>(undefined),
			frequency: new FormControl<number | null | undefined>(undefined),
			generatedTimes: new FormControl<number | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			hasVolumePricing: new FormControl<boolean | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productType: new FormControl<ProductOutputModelType | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			recurrenceEndDate: new FormControl<Date | null | undefined>(undefined),
			recurrenceEndType: new FormControl<ProjectRecurringFeeRuleInputModelRecurrenceEndType | null | undefined>(undefined),
			recurrenceStartDate: new FormControl<Date | null | undefined>(undefined),
			recurrenceTimes: new FormControl<number | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectSalesNoteInputModel {
		note?: string | null;

		/** Required */
		project: SimpleInputRequiredModel;

		/** Required */
		user: SimpleInputRequiredModel;
	}
	export interface ProjectSalesNoteInputModelFormProperties {
		note: FormControl<string | null | undefined>,
	}
	export function CreateProjectSalesNoteInputModelFormGroup() {
		return new FormGroup<ProjectSalesNoteInputModelFormProperties>({
			note: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectSalesNoteOutputModel {
		createdBy?: ModelBase;
		createdDateTime?: Date | null;
		guid?: string | null;
		isDeleted?: boolean | null;
		lastUpdatedBy?: ModelBase;
		lastUpdatedDateTime?: Date | null;
		note?: string | null;
		project?: ModelBase;
		user?: ModelBase;
	}
	export interface ProjectSalesNoteOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isDeleted: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		note: FormControl<string | null | undefined>,
	}
	export function CreateProjectSalesNoteOutputModelFormGroup() {
		return new FormGroup<ProjectSalesNoteOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectStatusTypeModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		sortOrder?: number | null;
	}
	export interface ProjectStatusTypeModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateProjectStatusTypeModelFormGroup() {
		return new FormGroup<ProjectStatusTypeModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectTaskStatusModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		isDefault?: boolean | null;
		isDone?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		sortOrder?: number | null;
	}
	export interface ProjectTaskStatusModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isDone: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateProjectTaskStatusModelFormGroup() {
		return new FormGroup<ProjectTaskStatusModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isDone: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProjectTravelExpenseBillingScheduleType { Immediately = 0, WhenPhaseCompleted = 1, OnDate = 2 }

	export interface ProjectTravelExpenseFileModel {
		category?: FileCategory | null;
		contentType?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		description?: string | null;
		fileGuid?: string | null;
		guid?: string | null;
		isInternal?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		size?: number | null;
		source?: ProjectTravelExpenseFileModelSource | null;
		travelExpenseGuid?: string | null;
	}
	export interface ProjectTravelExpenseFileModelFormProperties {
		category: FormControl<FileCategory | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		fileGuid: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
		source: FormControl<ProjectTravelExpenseFileModelSource | null | undefined>,
		travelExpenseGuid: FormControl<string | null | undefined>,
	}
	export function CreateProjectTravelExpenseFileModelFormGroup() {
		return new FormGroup<ProjectTravelExpenseFileModelFormProperties>({
			category: new FormControl<FileCategory | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fileGuid: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			size: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<ProjectTravelExpenseFileModelSource | null | undefined>(undefined),
			travelExpenseGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectTravelExpenseFileModelSource { Severa = 0, VismaScanner = 1, Google = 2 }

	export interface ProjectTravelExpenseInputModel {
		billingDependencyPhase?: SimpleInputModel;
		billingSchedule?: BillingScheduleType | null;
		costAccount?: SimpleInputModel;
		costCenter?: SimpleInputModel;
		description?: string | null;
		eventDate?: Date | null;
		invoice?: SimpleInputModel;
		invoiceQuantity?: number | null;
		invoiceRowComment?: string | null;
		invoiceRowDescription?: string | null;
		isBillable?: boolean | null;
		measurementUnit?: string | null;

		/** Required */
		phase: SimpleInputRequiredModel;
		plannedBillingDate?: Date | null;

		/** Required */
		project: SimpleInputRequiredModel;
		purchaseVatRate?: number | null;

		/** Required */
		quantity: number;
		salesAccount?: SimpleInputModel;
		travelEndTime?: Date | null;

		/** Required */
		travelExpense: SimpleInputRequiredModel;
		travelReimbursement?: SimpleInputModel;
		travelReimbursementRequired?: boolean | null;
		travelStartTime?: Date | null;
		unitCost?: MoneyInputModel;
		unitPrice?: MoneyInputModel;

		/** Required */
		user: SimpleInputRequiredModel;
		vatRate?: number | null;
	}
	export interface ProjectTravelExpenseInputModelFormProperties {
		billingSchedule: FormControl<BillingScheduleType | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		invoiceQuantity: FormControl<number | null | undefined>,
		invoiceRowComment: FormControl<string | null | undefined>,
		invoiceRowDescription: FormControl<string | null | undefined>,
		isBillable: FormControl<boolean | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		plannedBillingDate: FormControl<Date | null | undefined>,
		purchaseVatRate: FormControl<number | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,
		travelEndTime: FormControl<Date | null | undefined>,
		travelReimbursementRequired: FormControl<boolean | null | undefined>,
		travelStartTime: FormControl<Date | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateProjectTravelExpenseInputModelFormGroup() {
		return new FormGroup<ProjectTravelExpenseInputModelFormProperties>({
			billingSchedule: new FormControl<BillingScheduleType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			invoiceQuantity: new FormControl<number | null | undefined>(undefined),
			invoiceRowComment: new FormControl<string | null | undefined>(undefined),
			invoiceRowDescription: new FormControl<string | null | undefined>(undefined),
			isBillable: new FormControl<boolean | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			plannedBillingDate: new FormControl<Date | null | undefined>(undefined),
			purchaseVatRate: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			travelEndTime: new FormControl<Date | null | undefined>(undefined),
			travelReimbursementRequired: new FormControl<boolean | null | undefined>(undefined),
			travelStartTime: new FormControl<Date | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectTravelExpenseOutputModel {
		attachmentCount?: number | null;
		billingDependencyPhase?: ModelWithName;
		billingSchedule?: BillingScheduleType | null;
		costAccount?: ModelWithName;
		costCenter?: ModelWithName;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: ModelWithName;
		description?: string | null;
		eventDate?: Date | null;
		guid?: string | null;
		invoice?: InvoiceSubModel;
		invoiceQuantity?: number | null;
		invoiceRowComment?: string | null;
		invoiceRowDescription?: string | null;
		invoiceRowGuid?: string | null;
		isBillable?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		measurementUnit?: string | null;
		phase?: ModelBaseWithRequiredGuid;
		plannedBillingDate?: Date | null;
		project?: ProjectTravelExpenseProjectSubModel;
		purchaseVatRate?: number | null;
		quantity?: number | null;
		salesAccount?: ModelWithName;
		travelEndTime?: Date | null;
		travelExpense?: TravelExpenseSubModel;
		travelReimbursement?: TravelReimbursementSubModel;
		travelReimbursementRequired?: boolean | null;
		travelStartTime?: Date | null;
		unitCost?: MoneyOutputModel;
		unitCostExcludingPurchaseVat?: MoneyOutputModel;
		unitPrice?: MoneyOutputModel;
		user?: UserRequiredSubModel;
		vatRate?: number | null;
	}
	export interface ProjectTravelExpenseOutputModelFormProperties {
		attachmentCount: FormControl<number | null | undefined>,
		billingSchedule: FormControl<BillingScheduleType | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		invoiceQuantity: FormControl<number | null | undefined>,
		invoiceRowComment: FormControl<string | null | undefined>,
		invoiceRowDescription: FormControl<string | null | undefined>,
		invoiceRowGuid: FormControl<string | null | undefined>,
		isBillable: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		plannedBillingDate: FormControl<Date | null | undefined>,
		purchaseVatRate: FormControl<number | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		travelEndTime: FormControl<Date | null | undefined>,
		travelReimbursementRequired: FormControl<boolean | null | undefined>,
		travelStartTime: FormControl<Date | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateProjectTravelExpenseOutputModelFormGroup() {
		return new FormGroup<ProjectTravelExpenseOutputModelFormProperties>({
			attachmentCount: new FormControl<number | null | undefined>(undefined),
			billingSchedule: new FormControl<BillingScheduleType | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			invoiceQuantity: new FormControl<number | null | undefined>(undefined),
			invoiceRowComment: new FormControl<string | null | undefined>(undefined),
			invoiceRowDescription: new FormControl<string | null | undefined>(undefined),
			invoiceRowGuid: new FormControl<string | null | undefined>(undefined),
			isBillable: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			plannedBillingDate: new FormControl<Date | null | undefined>(undefined),
			purchaseVatRate: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			travelEndTime: new FormControl<Date | null | undefined>(undefined),
			travelReimbursementRequired: new FormControl<boolean | null | undefined>(undefined),
			travelStartTime: new FormControl<Date | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectTravelExpenseProjectSubModel {
		companyGuid?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		isInternal?: boolean | null;
		name?: string | null;
		number?: number | null;
	}
	export interface ProjectTravelExpenseProjectSubModelFormProperties {
		companyGuid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateProjectTravelExpenseProjectSubModelFormGroup() {
		return new FormGroup<ProjectTravelExpenseProjectSubModelFormProperties>({
			companyGuid: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TravelExpenseSubModel {
		code?: string | null;
		expenseClass?: ExpensesClass | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		includeTime?: boolean | null;
		name?: string | null;
	}
	export interface TravelExpenseSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		expenseClass: FormControl<ExpensesClass | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		includeTime: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTravelExpenseSubModelFormGroup() {
		return new FormGroup<TravelExpenseSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			expenseClass: new FormControl<ExpensesClass | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			includeTime: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TravelReimbursementSubModel {
		guid?: string | null;
		isApproved?: boolean | null;
		isLocked?: boolean | null;
		status?: string | null;
	}
	export interface TravelReimbursementSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		isApproved: FormControl<boolean | null | undefined>,
		isLocked: FormControl<boolean | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateTravelReimbursementSubModelFormGroup() {
		return new FormGroup<TravelReimbursementSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isApproved: new FormControl<boolean | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserRequiredSubModel {
		code?: string | null;
		companyGuid?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
	}
	export interface UserRequiredSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		companyGuid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserRequiredSubModelFormGroup() {
		return new FormGroup<UserRequiredSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			companyGuid: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectWorkHourPriceInputModel {
		isBillable?: boolean | null;
		phase?: SimpleInputRequiredModel;

		/** Required */
		project: SimpleInputModel;

		/** Required */
		unitPrice: MoneyInputModel;
		user?: SimpleInputModel;
		workType?: SimpleInputModel;
	}
	export interface ProjectWorkHourPriceInputModelFormProperties {
		isBillable: FormControl<boolean | null | undefined>,
	}
	export function CreateProjectWorkHourPriceInputModelFormGroup() {
		return new FormGroup<ProjectWorkHourPriceInputModelFormProperties>({
			isBillable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProjectWorkHourPriceOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isAvailable?: boolean | null;
		isBillable?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		phase?: ModelBaseWithRequiredGuid;
		project?: ProjectSubModel;
		unitPrice?: MoneyOutputModel;
		user?: ModelWithName;
		workType?: ModelWithName;
	}
	export interface ProjectWorkHourPriceOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isAvailable: FormControl<boolean | null | undefined>,
		isBillable: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateProjectWorkHourPriceOutputModelFormGroup() {
		return new FormGroup<ProjectWorkHourPriceOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isAvailable: new FormControl<boolean | null | undefined>(undefined),
			isBillable: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ProjectWorkTypeModel {
		guid?: string | null;
		isDefault?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		projectGuid: string;

		/** Required */
		worktype: WorkTypeSubModel;
	}
	export interface ProjectWorkTypeModelFormProperties {
		guid: FormControl<string | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		projectGuid: FormControl<string | null | undefined>,
	}
	export function CreateProjectWorkTypeModelFormGroup() {
		return new FormGroup<ProjectWorkTypeModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			projectGuid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface WorkTypeSubModel {
		code?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		isActive?: boolean | null;
		isProductive?: boolean | null;
		name?: string | null;
	}
	export interface WorkTypeSubModelFormProperties {
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isProductive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateWorkTypeSubModelFormGroup() {
		return new FormGroup<WorkTypeSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isProductive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProposalBillingAddressSubModel {
		addressline?: string | null;
		city?: string | null;
		country?: string | null;
		guid?: string | null;
		postalCode?: string | null;
	}
	export interface ProposalBillingAddressSubModelFormProperties {
		addressline: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
	}
	export function CreateProposalBillingAddressSubModelFormGroup() {
		return new FormGroup<ProposalBillingAddressSubModelFormProperties>({
			addressline: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProposalCustomerSubModel {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface ProposalCustomerSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateProposalCustomerSubModelFormGroup() {
		return new FormGroup<ProposalCustomerSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProposalFeeRowInputModel {
		description?: string | null;
		isShownOnProposal?: boolean | null;
		measurementUnit?: string | null;

		/**
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		name: string;
		product?: SimpleInputModel;
		projectFee?: SimpleInputModel;

		/** Required */
		proposal: SimpleInputRequiredModel;

		/** Required */
		quantity: number;
		sortOrder?: number | null;
		subtotal?: SimpleInputModel;
		unitCost?: MoneyInputModel;
		unitPrice?: MoneyInputModel;
		vatRate?: number | null;
	}
	export interface ProposalFeeRowInputModelFormProperties {
		description: FormControl<string | null | undefined>,
		isShownOnProposal: FormControl<boolean | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateProposalFeeRowInputModelFormGroup() {
		return new FormGroup<ProposalFeeRowInputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			isShownOnProposal: new FormControl<boolean | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(200)]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProposalFeeRowOutputModel {
		description?: string | null;
		guid?: string | null;
		isShownOnProposal?: boolean | null;
		measurementUnit?: string | null;
		name?: string | null;
		product?: ModelBase;
		projectFee?: ModelBase;
		proposal?: ModelBase;
		quantity?: number | null;
		sortOrder?: number | null;
		subtotal?: ModelBase;
		unitCost?: MoneyOutputModel;
		unitPrice?: MoneyOutputModel;
		vatRate?: number | null;
	}
	export interface ProposalFeeRowOutputModelFormProperties {
		description: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isShownOnProposal: FormControl<boolean | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateProposalFeeRowOutputModelFormGroup() {
		return new FormGroup<ProposalFeeRowOutputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isShownOnProposal: new FormControl<boolean | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProposalInputModel {
		billingAddress?: SimpleInputModel;
		culture?: SimpleInputModel;
		customerContactPerson?: SimpleInputModel;
		freeText1?: FreeTextInputModel;
		freeText2?: FreeTextInputModel;
		language?: SimpleInputModel;

		/**
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		name: string;

		/** Required */
		project: SimpleInputRequiredModel;
		proposalDate?: Date | null;
		proposalStatus?: SimpleInputModel;
	}
	export interface ProposalInputModelFormProperties {

		/**
		 * Required
		 * Max length: 50
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
		proposalDate: FormControl<Date | null | undefined>,
	}
	export function CreateProposalInputModelFormGroup() {
		return new FormGroup<ProposalInputModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(50)]),
			proposalDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ProposalLanguageSubModel {
		code?: string | null;
		englishName?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface ProposalLanguageSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateProposalLanguageSubModelFormGroup() {
		return new FormGroup<ProposalLanguageSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProposalOutputModel {
		billingAddress?: ProposalBillingAddressSubModel;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		culture?: FormattingCultureSubModel;
		customer?: ProposalCustomerSubModel;
		customerContactPerson?: CustomerContactPersonSubModel;
		freeText1?: FreeTextModel2;
		freeText2?: FreeTextModel2;
		guid?: string | null;
		language?: ProposalLanguageSubModel;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		name?: string | null;
		number?: string | null;
		pricelist?: ModelWithName;
		project?: ProposalProjectSubModel;
		proposalDate?: Date | null;
		proposalStatus?: ModelWithName;
		totalExcludingVat?: MoneyOutputModel;
		totalIncludingVat?: MoneyOutputModel;
	}
	export interface ProposalOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
		proposalDate: FormControl<Date | null | undefined>,
	}
	export function CreateProposalOutputModelFormGroup() {
		return new FormGroup<ProposalOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			proposalDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ProposalProjectSubModel {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface ProposalProjectSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateProposalProjectSubModelFormGroup() {
		return new FormGroup<ProposalProjectSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProposalSettingsOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isTaxFree?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		printTotalInPdf?: PrintToPdf | null;
		showBillingContact?: boolean | null;
		showBillingDetails?: boolean | null;
		showGanttChart?: boolean | null;
		showOrderNumber?: boolean | null;
		showOurReference?: boolean | null;
		showPaymentTerms?: boolean | null;
		showProjectMembers?: boolean | null;
		showProjectPlan?: boolean | null;
		showQuantity?: boolean | null;
		showTotalPrice?: boolean | null;
		showTreeview?: boolean | null;
		showUnit?: boolean | null;
		showUnitPrice?: boolean | null;
		showYourReference?: boolean | null;
		style?: InvoiceSettingsOutputModelStyle | null;
	}
	export interface ProposalSettingsOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isTaxFree: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		printTotalInPdf: FormControl<PrintToPdf | null | undefined>,
		showBillingContact: FormControl<boolean | null | undefined>,
		showBillingDetails: FormControl<boolean | null | undefined>,
		showGanttChart: FormControl<boolean | null | undefined>,
		showOrderNumber: FormControl<boolean | null | undefined>,
		showOurReference: FormControl<boolean | null | undefined>,
		showPaymentTerms: FormControl<boolean | null | undefined>,
		showProjectMembers: FormControl<boolean | null | undefined>,
		showProjectPlan: FormControl<boolean | null | undefined>,
		showQuantity: FormControl<boolean | null | undefined>,
		showTotalPrice: FormControl<boolean | null | undefined>,
		showTreeview: FormControl<boolean | null | undefined>,
		showUnit: FormControl<boolean | null | undefined>,
		showUnitPrice: FormControl<boolean | null | undefined>,
		showYourReference: FormControl<boolean | null | undefined>,
		style: FormControl<InvoiceSettingsOutputModelStyle | null | undefined>,
	}
	export function CreateProposalSettingsOutputModelFormGroup() {
		return new FormGroup<ProposalSettingsOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isTaxFree: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			printTotalInPdf: new FormControl<PrintToPdf | null | undefined>(undefined),
			showBillingContact: new FormControl<boolean | null | undefined>(undefined),
			showBillingDetails: new FormControl<boolean | null | undefined>(undefined),
			showGanttChart: new FormControl<boolean | null | undefined>(undefined),
			showOrderNumber: new FormControl<boolean | null | undefined>(undefined),
			showOurReference: new FormControl<boolean | null | undefined>(undefined),
			showPaymentTerms: new FormControl<boolean | null | undefined>(undefined),
			showProjectMembers: new FormControl<boolean | null | undefined>(undefined),
			showProjectPlan: new FormControl<boolean | null | undefined>(undefined),
			showQuantity: new FormControl<boolean | null | undefined>(undefined),
			showTotalPrice: new FormControl<boolean | null | undefined>(undefined),
			showTreeview: new FormControl<boolean | null | undefined>(undefined),
			showUnit: new FormControl<boolean | null | undefined>(undefined),
			showUnitPrice: new FormControl<boolean | null | undefined>(undefined),
			showYourReference: new FormControl<boolean | null | undefined>(undefined),
			style: new FormControl<InvoiceSettingsOutputModelStyle | null | undefined>(undefined),
		});

	}

	export interface ProposalStatusInputModel {
		isActive?: boolean | null;
		isDefault?: boolean | null;
		isLost?: boolean | null;
		isWon?: boolean | null;

		/**
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		name: string;
		sortOrder?: number | null;
	}
	export interface ProposalStatusInputModelFormProperties {
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isLost: FormControl<boolean | null | undefined>,
		isWon: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateProposalStatusInputModelFormGroup() {
		return new FormGroup<ProposalStatusInputModelFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isLost: new FormControl<boolean | null | undefined>(undefined),
			isWon: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(200)]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProposalStatusOutputModel {
		guid?: string | null;
		isActive?: boolean | null;
		isDefault?: boolean | null;
		isLost?: boolean | null;
		isWon?: boolean | null;
		name?: string | null;
		sortOrder?: number | null;
	}
	export interface ProposalStatusOutputModelFormProperties {
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isLost: FormControl<boolean | null | undefined>,
		isWon: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateProposalStatusOutputModelFormGroup() {
		return new FormGroup<ProposalStatusOutputModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isLost: new FormControl<boolean | null | undefined>(undefined),
			isWon: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProposalSubtotalInputModel {
		description?: string | null;
		isShownOnProposal?: boolean | null;

		/**
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		name: string;
		phase?: ModelBase;

		/** Required */
		proposal: SimpleInputRequiredModel;
		sortOrder?: number | null;
	}
	export interface ProposalSubtotalInputModelFormProperties {
		description: FormControl<string | null | undefined>,
		isShownOnProposal: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateProposalSubtotalInputModelFormGroup() {
		return new FormGroup<ProposalSubtotalInputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			isShownOnProposal: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(200)]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProposalSubtotalOutputModel {
		description?: string | null;
		guid?: string | null;
		isShownOnProposal?: boolean | null;
		name?: string | null;
		phase?: ModelBase;
		projectFee?: ModelBase;
		proposal?: ModelBase;
		sortOrder?: number | null;
	}
	export interface ProposalSubtotalOutputModelFormProperties {
		description: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isShownOnProposal: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateProposalSubtotalOutputModelFormGroup() {
		return new FormGroup<ProposalSubtotalOutputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isShownOnProposal: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProposalWorkhourRowInputModel {
		description?: string | null;
		isShownOnProposal?: boolean | null;

		/**
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		name: string;
		phase?: SimpleInputModel;

		/** Required */
		proposal: SimpleInputRequiredModel;

		/** Required */
		quantity: number;
		sortOrder?: number | null;
		subtotal?: SimpleInputModel;

		/** Required */
		workType: SimpleInputRequiredModel;
	}
	export interface ProposalWorkhourRowInputModelFormProperties {
		description: FormControl<string | null | undefined>,
		isShownOnProposal: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 200
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		quantity: FormControl<number | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateProposalWorkhourRowInputModelFormGroup() {
		return new FormGroup<ProposalWorkhourRowInputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			isShownOnProposal: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(200)]),
			quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProposalWorkhourRowOutputModel {
		description?: string | null;
		guid?: string | null;
		isShownOnProposal?: boolean | null;
		name?: string | null;
		phase?: ModelBase;
		projectFee?: ModelBase;
		proposal?: ModelBase;
		quantity?: number | null;
		sortOrder?: number | null;
		subtotal?: ModelBase;
		unitCost?: MoneyOutputModel;
		unitPrice?: MoneyOutputModel;
		workType?: ModelBase;
	}
	export interface ProposalWorkhourRowOutputModelFormProperties {
		description: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isShownOnProposal: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateProposalWorkhourRowOutputModelFormGroup() {
		return new FormGroup<ProposalWorkhourRowOutputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isShownOnProposal: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PublicAuthenticationOutputModel {
		access_token?: string | null;
		access_token_expires_in?: number | null;
		access_token_expires_utc?: Date | null;
		access_token_type?: string | null;
		refresh_token?: string | null;
		refresh_token_expires_in?: number | null;
		refresh_token_expires_utc?: Date | null;
		scope?: string | null;
	}
	export interface PublicAuthenticationOutputModelFormProperties {
		access_token: FormControl<string | null | undefined>,
		access_token_expires_in: FormControl<number | null | undefined>,
		access_token_expires_utc: FormControl<Date | null | undefined>,
		access_token_type: FormControl<string | null | undefined>,
		refresh_token: FormControl<string | null | undefined>,
		refresh_token_expires_in: FormControl<number | null | undefined>,
		refresh_token_expires_utc: FormControl<Date | null | undefined>,
		scope: FormControl<string | null | undefined>,
	}
	export function CreatePublicAuthenticationOutputModelFormGroup() {
		return new FormGroup<PublicAuthenticationOutputModelFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			access_token_expires_in: new FormControl<number | null | undefined>(undefined),
			access_token_expires_utc: new FormControl<Date | null | undefined>(undefined),
			access_token_type: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			refresh_token_expires_in: new FormControl<number | null | undefined>(undefined),
			refresh_token_expires_utc: new FormControl<Date | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QuickSearchOptions { ShowOpenProjectsSalesCasesAndCustomers = 0, ShowOpenAndClosedProjectsSalesCasesAndCustomers = 1 }

	export enum RecurrenceEndTypes { Never = 0, AfterNumberOfTimes = 1, OnDate = 2 }

	export enum RecurrenceFrequency { Daily = 0, Weekly = 1, Monthly = 2, Yearly = 3 }

	export enum RecurrenceType { None = 0, Occurrence = 1, Exception = 2, Series = 3 }

	export enum ReferenceNumberDisplay { ReferenceNumber = 0, Kid = 1 }

	export enum ReferenceType { Invoice = 0, Proposal = 1, InvoiceTemplate = 2, Other = 3 }

	export interface ReimbursedProjectFeeOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		description?: string | null;
		eventDate?: Date | null;
		guid?: string | null;
		invoiceGuid?: string | null;
		invoiceQuantity?: number | null;
		invoiceRowDescription?: string | null;
		invoiceRowGuid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		measurementUnit?: string | null;
		name?: string | null;
		phase?: ModelWithName;
		product?: ModelWithName;
		productType?: ProductOutputModelType | null;
		project?: ReimbursedProjectFeeProjectSubModel;
		quantity?: number | null;
		unitCost?: MoneyOutputModel;
		unitPrice?: MoneyOutputModel;
		user?: ModelWithName;
		vatRate?: number | null;
	}
	export interface ReimbursedProjectFeeOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		invoiceGuid: FormControl<string | null | undefined>,
		invoiceQuantity: FormControl<number | null | undefined>,
		invoiceRowDescription: FormControl<string | null | undefined>,
		invoiceRowGuid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		productType: FormControl<ProductOutputModelType | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateReimbursedProjectFeeOutputModelFormGroup() {
		return new FormGroup<ReimbursedProjectFeeOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			invoiceGuid: new FormControl<string | null | undefined>(undefined),
			invoiceQuantity: new FormControl<number | null | undefined>(undefined),
			invoiceRowDescription: new FormControl<string | null | undefined>(undefined),
			invoiceRowGuid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productType: new FormControl<ProductOutputModelType | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ReimbursedProjectFeeProjectSubModel {
		guid?: string | null;
		name?: string | null;
		number?: string | null;
	}
	export interface ReimbursedProjectFeeProjectSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
	}
	export function CreateReimbursedProjectFeeProjectSubModelFormGroup() {
		return new FormGroup<ReimbursedProjectFeeProjectSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReimbursedProjectTravelExpenseOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		description?: string | null;
		eventDate?: Date | null;
		guid?: string | null;
		invoiceGuid?: string | null;
		invoiceQuantity?: number | null;
		invoiceRowDescription?: string | null;
		invoiceRowGuid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		measurementUnit?: string | null;
		name?: string | null;
		phase?: ModelWithName;
		product?: ModelWithName;
		project?: ReimbursedProjectFeeProjectSubModel;
		quantity?: number | null;
		travelEndTime?: Date | null;
		travelStartTime?: Date | null;
		unitCost?: MoneyOutputModel;
		unitPrice?: MoneyOutputModel;
		user?: ModelWithName;
		vatRate?: number | null;
	}
	export interface ReimbursedProjectTravelExpenseOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		invoiceGuid: FormControl<string | null | undefined>,
		invoiceQuantity: FormControl<number | null | undefined>,
		invoiceRowDescription: FormControl<string | null | undefined>,
		invoiceRowGuid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		travelEndTime: FormControl<Date | null | undefined>,
		travelStartTime: FormControl<Date | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateReimbursedProjectTravelExpenseOutputModelFormGroup() {
		return new FormGroup<ReimbursedProjectTravelExpenseOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			invoiceGuid: new FormControl<string | null | undefined>(undefined),
			invoiceQuantity: new FormControl<number | null | undefined>(undefined),
			invoiceRowDescription: new FormControl<string | null | undefined>(undefined),
			invoiceRowGuid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			travelEndTime: new FormControl<Date | null | undefined>(undefined),
			travelStartTime: new FormControl<Date | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ReimbursedWorkHourOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: ModelWithName;
		description?: string | null;
		endTime?: Date | null;
		eventDate?: Date | null;
		guid?: string | null;
		invoiceGuid?: string | null;
		invoiceQuantity?: number | null;
		invoiceRowComment?: string | null;
		invoiceRowDescription?: string | null;
		invoiceRowGuid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		overtime?: ModelWithName;
		phase?: ModelWithName;
		plannedInvoiceQuantity?: number | null;
		project?: ReimbursedWorkHourProjectSubModel;
		quantity?: number | null;
		startTime?: Date | null;
		unitCost?: MoneyOutputModel;
		unitPrice?: MoneyOutputModel;
		user?: ModelWithName;
		workType?: ModelWithName;
	}
	export interface ReimbursedWorkHourOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		eventDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		invoiceGuid: FormControl<string | null | undefined>,
		invoiceQuantity: FormControl<number | null | undefined>,
		invoiceRowComment: FormControl<string | null | undefined>,
		invoiceRowDescription: FormControl<string | null | undefined>,
		invoiceRowGuid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		plannedInvoiceQuantity: FormControl<number | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateReimbursedWorkHourOutputModelFormGroup() {
		return new FormGroup<ReimbursedWorkHourOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			invoiceGuid: new FormControl<string | null | undefined>(undefined),
			invoiceQuantity: new FormControl<number | null | undefined>(undefined),
			invoiceRowComment: new FormControl<string | null | undefined>(undefined),
			invoiceRowDescription: new FormControl<string | null | undefined>(undefined),
			invoiceRowGuid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			plannedInvoiceQuantity: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ReimbursedWorkHourProjectSubModel {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface ReimbursedWorkHourProjectSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateReimbursedWorkHourProjectSubModelFormGroup() {
		return new FormGroup<ReimbursedWorkHourProjectSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ResourceAllocationAction { None = 0, Delete = 1, Transfer = 2 }

	export interface ResourceAllocationCriteriaModel {
		endDate?: Date | null;
		includeAbsences?: boolean | null;
		phaseGuids?: Array<string>;
		projectBusinessUnitGuids?: Array<string>;
		projectGuids?: Array<string>;
		projectManagerUserGuids?: Array<string>;
		projectStatusTypeGuids?: Array<string>;
		projectTagGuids?: Array<string>;
		resourceAllocationGuids?: Array<string>;
		salesProgresses?: Array<SalesProgress>;
		salesStatusTypeGuids?: Array<string>;
		startDate?: Date | null;
		superiorUserGuids?: Array<string>;
		useSalesProbability?: boolean | null;
		userBusinessUnitGuids?: Array<string>;
		userGuids?: Array<string>;
		userLicenseTypes?: Array<LicenseUserType>;
		userTagGuids?: Array<string>;
	}
	export interface ResourceAllocationCriteriaModelFormProperties {
		endDate: FormControl<Date | null | undefined>,
		includeAbsences: FormControl<boolean | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		useSalesProbability: FormControl<boolean | null | undefined>,
	}
	export function CreateResourceAllocationCriteriaModelFormGroup() {
		return new FormGroup<ResourceAllocationCriteriaModelFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			includeAbsences: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			useSalesProbability: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SalesProgress { None = 0, InProgress = 1, Won = 2, Lost = 3 }

	export interface ResourceAllocationInputModel {
		allocationHours?: number | null;
		allocationPercentage?: number | null;
		endDate?: Date | null;
		phase?: SimpleInputModel;

		/** Required */
		project: SimpleInputRequiredModel;
		startDate?: Date | null;

		/** Required */
		user: SimpleInputRequiredModel;
	}
	export interface ResourceAllocationInputModelFormProperties {
		allocationHours: FormControl<number | null | undefined>,
		allocationPercentage: FormControl<number | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateResourceAllocationInputModelFormGroup() {
		return new FormGroup<ResourceAllocationInputModelFormProperties>({
			allocationHours: new FormControl<number | null | undefined>(undefined),
			allocationPercentage: new FormControl<number | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ResourceAllocationOutputModel {
		allocationHours?: number | null;
		allocationPercentage?: number | null;
		calculatedAllocationHours?: number | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: ModelWithName;
		derivedEndDate?: Date | null;
		derivedStartDate?: Date | null;
		endDate?: Date | null;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		phase?: ResourceAllocationPhaseSubModel;
		project?: ResourceAllocationProjectSubModel;
		projectMemberGuid?: string | null;
		startDate?: Date | null;
		user?: UserWithFirstNameLastNameAndPhotoFileModel;
	}
	export interface ResourceAllocationOutputModelFormProperties {
		allocationHours: FormControl<number | null | undefined>,
		allocationPercentage: FormControl<number | null | undefined>,
		calculatedAllocationHours: FormControl<number | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		derivedEndDate: FormControl<Date | null | undefined>,
		derivedStartDate: FormControl<Date | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		projectMemberGuid: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateResourceAllocationOutputModelFormGroup() {
		return new FormGroup<ResourceAllocationOutputModelFormProperties>({
			allocationHours: new FormControl<number | null | undefined>(undefined),
			allocationPercentage: new FormControl<number | null | undefined>(undefined),
			calculatedAllocationHours: new FormControl<number | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			derivedEndDate: new FormControl<Date | null | undefined>(undefined),
			derivedStartDate: new FormControl<Date | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			projectMemberGuid: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ResourceAllocationPhaseSubModel {
		endDate?: Date | null;
		guid?: string | null;
		name?: string | null;
		startDate?: Date | null;
	}
	export interface ResourceAllocationPhaseSubModelFormProperties {
		endDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateResourceAllocationPhaseSubModelFormGroup() {
		return new FormGroup<ResourceAllocationPhaseSubModelFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ResourceAllocationProjectSubModel {
		guid?: string | null;
		isInternal?: boolean | null;
		name?: string | null;
		number?: number | null;
	}
	export interface ResourceAllocationProjectSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateResourceAllocationProjectSubModelFormGroup() {
		return new FormGroup<ResourceAllocationProjectSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RoleAllocationInputModel {

		/** Required */
		allocationHours: number;
		endDate?: Date | null;
		phase?: SimpleInputModel;

		/** Required */
		project: SimpleInputRequiredModel;

		/** Required */
		role: SimpleInputRequiredModel;
		startDate?: Date | null;
	}
	export interface RoleAllocationInputModelFormProperties {

		/** Required */
		allocationHours: FormControl<number | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateRoleAllocationInputModelFormGroup() {
		return new FormGroup<RoleAllocationInputModelFormProperties>({
			allocationHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			endDate: new FormControl<Date | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface RoleAllocationOutputModel {
		allocationHours?: number | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: ModelWithName;
		endDate?: Date | null;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		phase?: PhaseSubModel;
		project?: ModelWithName;
		role?: ModelWithName;
		startDate?: Date | null;
	}
	export interface RoleAllocationOutputModelFormProperties {
		allocationHours: FormControl<number | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateRoleAllocationOutputModelFormGroup() {
		return new FormGroup<RoleAllocationOutputModelFormProperties>({
			allocationHours: new FormControl<number | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface RoleInputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface RoleInputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRoleInputModelFormGroup() {
		return new FormGroup<RoleInputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface RoleOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		name?: string | null;
	}
	export interface RoleOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRoleOutputModelFormGroup() {
		return new FormGroup<RoleOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesAccountModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		isProductDefault?: boolean | null;
		isTravelTypeDefault?: boolean | null;
		isWorkTypeDefault?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Min length: 1
		 */
		number: string;
	}
	export interface SalesAccountModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isProductDefault: FormControl<boolean | null | undefined>,
		isTravelTypeDefault: FormControl<boolean | null | undefined>,
		isWorkTypeDefault: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		number: FormControl<string | null | undefined>,
	}
	export function CreateSalesAccountModelFormGroup() {
		return new FormGroup<SalesAccountModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isProductDefault: new FormControl<boolean | null | undefined>(undefined),
			isTravelTypeDefault: new FormControl<boolean | null | undefined>(undefined),
			isWorkTypeDefault: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface SalesNoteOutputModel {
		createdBy?: ModelBase;
		createdDateTime?: Date | null;
		customer?: ModelBase;
		guid?: string | null;
		isDeleted?: boolean | null;
		lastUpdatedBy?: ModelBase;
		lastUpdatedDateTime?: Date | null;
		note?: string | null;
		project?: ModelBase;
		user?: ModelBase;
	}
	export interface SalesNoteOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isDeleted: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		note: FormControl<string | null | undefined>,
	}
	export function CreateSalesNoteOutputModelFormGroup() {
		return new FormGroup<SalesNoteOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SalesStatusHistoryOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		project?: ModelWithName;
		salesStatusType?: ModelWithName;
		timeStamp?: Date | null;
	}
	export interface SalesStatusHistoryOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		timeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateSalesStatusHistoryOutputModelFormGroup() {
		return new FormGroup<SalesStatusHistoryOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SalesStatusType { InProgress = 0, Won = 1, Lost = 2 }

	export interface SalesStatusTypeInputModel {
		defaultProbability?: number | null;
		isActive?: boolean | null;
		isProposalDefault?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/** Required */
		salesState: SalesStatusType;
	}
	export interface SalesStatusTypeInputModelFormProperties {
		defaultProbability: FormControl<number | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isProposalDefault: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		salesState: FormControl<SalesStatusType | null | undefined>,
	}
	export function CreateSalesStatusTypeInputModelFormGroup() {
		return new FormGroup<SalesStatusTypeInputModelFormProperties>({
			defaultProbability: new FormControl<number | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isProposalDefault: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			salesState: new FormControl<SalesStatusType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SalesStatusTypeOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		defaultProbability?: number | null;
		guid?: string | null;
		isActive?: boolean | null;
		isProposalDefault?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		name?: string | null;
		salesState?: SalesStatusType | null;
	}
	export interface SalesStatusTypeOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		defaultProbability: FormControl<number | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isProposalDefault: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		salesState: FormControl<SalesStatusType | null | undefined>,
	}
	export function CreateSalesStatusTypeOutputModelFormGroup() {
		return new FormGroup<SalesStatusTypeOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			defaultProbability: new FormControl<number | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isProposalDefault: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			salesState: new FormControl<SalesStatusType | null | undefined>(undefined),
		});

	}

	export enum SalutationType { 'Mr.' = 0, 'Mrs.' = 1, 'Ms.' = 2 }

	export enum SatisfactionLevelType { Unsatisfied = 0, Neutral = 1, Satisfied = 2, Unknown = 3 }

	export enum SearchFieldDataType { String = 0, Boolean = 1, Integer = 2, Percentage = 3, Numeric = 4, Money = 5, Date = 6, DateTime = 7, Time = 8, Object = 9, ObjectCollection = 10, IpAddress = 11 }

	export enum SortDirection { Asc = 0, Desc = 1, AscNullsFirst = 2, AscNullsLast = 3, DescNullsFirst = 4, DescNullsLast = 5 }

	export interface TeamProductivityOutputModel {
		adjustedShareOfBilling?: MoneyOutputModel;
		adjustedShareOfBillingPercentage?: number | null;
		billableHoursPercentage?: number | null;
		calculatedShareOfBilling?: MoneyOutputModel;
		calculatedShareOfBillingPercentage?: number | null;
		guid?: string | null;
		projectGuid?: string | null;
		user?: UserWithNameAndPhotoFileModel;
		workHours?: number | null;
		workHoursBillable?: number | null;
		workHoursCost?: MoneyOutputModel;
		workHoursValue?: MoneyOutputModel;
	}
	export interface TeamProductivityOutputModelFormProperties {
		adjustedShareOfBillingPercentage: FormControl<number | null | undefined>,
		billableHoursPercentage: FormControl<number | null | undefined>,
		calculatedShareOfBillingPercentage: FormControl<number | null | undefined>,
		guid: FormControl<string | null | undefined>,
		projectGuid: FormControl<string | null | undefined>,
		workHours: FormControl<number | null | undefined>,
		workHoursBillable: FormControl<number | null | undefined>,
	}
	export function CreateTeamProductivityOutputModelFormGroup() {
		return new FormGroup<TeamProductivityOutputModelFormProperties>({
			adjustedShareOfBillingPercentage: new FormControl<number | null | undefined>(undefined),
			billableHoursPercentage: new FormControl<number | null | undefined>(undefined),
			calculatedShareOfBillingPercentage: new FormControl<number | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			projectGuid: new FormControl<string | null | undefined>(undefined),
			workHours: new FormControl<number | null | undefined>(undefined),
			workHoursBillable: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TimeEntryModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: ModelWithName;
		description?: string | null;
		endTime?: Date | null;

		/** Required */
		eventDate: Date;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/** Required */
		phase: ModelBaseWithRequiredGuid;
		project?: TimeEntryProject;
		quantity?: number | null;
		startTime?: Date | null;

		/** Required */
		timeEntryType: ModelBaseWithRequiredGuid;

		/** Required */
		user: ModelBaseWithRequiredGuid;
	}
	export interface TimeEntryModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		eventDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateTimeEntryModelFormGroup() {
		return new FormGroup<TimeEntryModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TimeEntryProject {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface TimeEntryProjectFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateTimeEntryProjectFormGroup() {
		return new FormGroup<TimeEntryProjectFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TimeEntryTypeModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		identifier?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface TimeEntryTypeModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTimeEntryTypeModelFormGroup() {
		return new FormGroup<TimeEntryTypeModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface TimezoneModel {
		guid?: string | null;
		ianaName?: string | null;
		name?: string | null;
		systemName?: string | null;
	}
	export interface TimezoneModelFormProperties {
		guid: FormControl<string | null | undefined>,
		ianaName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		systemName: FormControl<string | null | undefined>,
	}
	export function CreateTimezoneModelFormGroup() {
		return new FormGroup<TimezoneModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			ianaName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			systemName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TotalRoundingType { AwayFromZero = 0, NearestInteger = 1 }

	export interface TravelExpenseCostAccountSubModel {
		guid?: string | null;
		name?: string | null;
		number?: string | null;
	}
	export interface TravelExpenseCostAccountSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
	}
	export function CreateTravelExpenseCostAccountSubModelFormGroup() {
		return new FormGroup<TravelExpenseCostAccountSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TravelExpenseTypeCountrySettingsModel {

		/** Required */
		country: ModelBaseWithRequiredGuid;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/** Required */
		product: ModelBaseWithRequiredGuid;
		purchaseVatRate?: number | null;
		vatRate?: number | null;
	}
	export interface TravelExpenseTypeCountrySettingsModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		purchaseVatRate: FormControl<number | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateTravelExpenseTypeCountrySettingsModelFormGroup() {
		return new FormGroup<TravelExpenseTypeCountrySettingsModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			purchaseVatRate: new FormControl<number | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TravelExpenseTypeInputModel {
		code?: string | null;
		costAccount?: SimpleInputModel;

		/** Required */
		expenseClass: ExpensesClass;
		includeTime?: boolean | null;
		isActive?: boolean | null;
		measurementUnit?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		productCategory?: SimpleInputModel;
		purchaseVatRate?: number | null;
		salesAccount?: SimpleInputModel;

		/** Required */
		unitCost: MoneyInputModelWithNullableAmount;
		vatRate?: number | null;
	}
	export interface TravelExpenseTypeInputModelFormProperties {
		code: FormControl<string | null | undefined>,

		/** Required */
		expenseClass: FormControl<ExpensesClass | null | undefined>,
		includeTime: FormControl<boolean | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		purchaseVatRate: FormControl<number | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateTravelExpenseTypeInputModelFormGroup() {
		return new FormGroup<TravelExpenseTypeInputModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			expenseClass: new FormControl<ExpensesClass | null | undefined>(undefined, [Validators.required]),
			includeTime: new FormControl<boolean | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			purchaseVatRate: new FormControl<number | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TravelExpenseTypeOutputModel {
		code?: string | null;
		costAccount?: TravelExpenseCostAccountSubModel;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		expenseClass?: ExpensesClass | null;
		guid?: string | null;
		includeTime?: boolean | null;
		isActive?: boolean | null;
		isDailyAllowance?: boolean | null;
		isMileage?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		measurementUnit?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		productCategory?: ModelWithName;
		purchaseVatRate?: number | null;
		salesAccount?: ProductSalesAccountSubModel2;
		unitCost?: MoneyOutputModel;
		vatRate?: number | null;
	}
	export interface TravelExpenseTypeOutputModelFormProperties {
		code: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		expenseClass: FormControl<ExpensesClass | null | undefined>,
		guid: FormControl<string | null | undefined>,
		includeTime: FormControl<boolean | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDailyAllowance: FormControl<boolean | null | undefined>,
		isMileage: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		purchaseVatRate: FormControl<number | null | undefined>,
		vatRate: FormControl<number | null | undefined>,
	}
	export function CreateTravelExpenseTypeOutputModelFormGroup() {
		return new FormGroup<TravelExpenseTypeOutputModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			expenseClass: new FormControl<ExpensesClass | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			includeTime: new FormControl<boolean | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDailyAllowance: new FormControl<boolean | null | undefined>(undefined),
			isMileage: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			measurementUnit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			purchaseVatRate: new FormControl<number | null | undefined>(undefined),
			vatRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TravelPriceOutputModel {
		prices?: Array<PriceModelBase>;
		product?: TravelPriceProductSubModel;
	}
	export interface TravelPriceOutputModelFormProperties {
	}
	export function CreateTravelPriceOutputModelFormGroup() {
		return new FormGroup<TravelPriceOutputModelFormProperties>({
		});

	}

	export interface TravelPriceProductSubModel {
		expenseClass?: ExpensesClass | null;
		guid?: string | null;
		name?: string | null;
		productCode?: string | null;
	}
	export interface TravelPriceProductSubModelFormProperties {
		expenseClass: FormControl<ExpensesClass | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		productCode: FormControl<string | null | undefined>,
	}
	export function CreateTravelPriceProductSubModelFormGroup() {
		return new FormGroup<TravelPriceProductSubModelFormProperties>({
			expenseClass: new FormControl<ExpensesClass | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TravelReimbursementAttachmentSource { Severa = 0, VismaScanner = 1, Google = 2 }

	export interface TravelReimbursementInputModel {
		advancePayment?: MoneyInputModelWithNullableAmount;
		groupBy?: GroupByType | null;
		title?: string | null;
		travelReimbursementStatus?: SimpleInputModel;

		/** Required */
		user: ModelBaseWithRequiredGuid;
	}
	export interface TravelReimbursementInputModelFormProperties {
		groupBy: FormControl<GroupByType | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateTravelReimbursementInputModelFormGroup() {
		return new FormGroup<TravelReimbursementInputModelFormProperties>({
			groupBy: new FormControl<GroupByType | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TravelReimbursementOutputModel {
		advancePayment?: MoneyOutputModel;
		approvalDate?: Date | null;
		approvedByUser?: ModelWithName;
		canChangeApproval?: boolean | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		date?: Date | null;
		groupBy?: GroupByType | null;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		number?: number | null;
		title?: string | null;
		total?: MoneyOutputModel;
		totalExpenses?: MoneyOutputModel;
		travelReimbursementStatus?: ModelWithName;
		user?: ModelWithName;
	}
	export interface TravelReimbursementOutputModelFormProperties {
		approvalDate: FormControl<Date | null | undefined>,
		canChangeApproval: FormControl<boolean | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		date: FormControl<Date | null | undefined>,
		groupBy: FormControl<GroupByType | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		number: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateTravelReimbursementOutputModelFormGroup() {
		return new FormGroup<TravelReimbursementOutputModelFormProperties>({
			approvalDate: new FormControl<Date | null | undefined>(undefined),
			canChangeApproval: new FormControl<boolean | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			groupBy: new FormControl<GroupByType | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TravelReimbursementStatusModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		isApproved?: boolean | null;
		isDefault?: boolean | null;
		isLocked?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		sortOrder?: number | null;
	}
	export interface TravelReimbursementStatusModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isApproved: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isLocked: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateTravelReimbursementStatusModelFormGroup() {
		return new FormGroup<TravelReimbursementStatusModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isApproved: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TypeOfProduct { OwnWork = 0, Products = 1, Subcontracting = 2, Travels = 3 }

	export interface UsageModel2 {
		context?: string | null;
		count?: number | null;
	}
	export interface UsageModel2FormProperties {
		context: FormControl<string | null | undefined>,
		count: FormControl<number | null | undefined>,
	}
	export function CreateUsageModel2FormGroup() {
		return new FormGroup<UsageModel2FormProperties>({
			context: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserCountrySubModel {
		code3?: string | null;
		englishName?: string | null;
		guid?: string | null;
		hasRegions?: AddressCountryHasRegions | null;
		name?: string | null;
	}
	export interface UserCountrySubModelFormProperties {
		code3: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		hasRegions: FormControl<AddressCountryHasRegions | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserCountrySubModelFormGroup() {
		return new FormGroup<UserCountrySubModelFormProperties>({
			code3: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			hasRegions: new FormControl<AddressCountryHasRegions | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserCultureSubModel {
		code?: string | null;
		englishName?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface UserCultureSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserCultureSubModelFormGroup() {
		return new FormGroup<UserCultureSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserCustomPropertyInputModel {
		isActive?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		parameters?: string | null;
		permission?: PermissionLevel | null;

		/** Required */
		type: CustomPropertyModelType;
	}
	export interface UserCustomPropertyInputModelFormProperties {
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		parameters: FormControl<string | null | undefined>,
		permission: FormControl<PermissionLevel | null | undefined>,

		/** Required */
		type: FormControl<CustomPropertyModelType | null | undefined>,
	}
	export function CreateUserCustomPropertyInputModelFormGroup() {
		return new FormGroup<UserCustomPropertyInputModelFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			parameters: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<PermissionLevel | null | undefined>(undefined),
			type: new FormControl<CustomPropertyModelType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserCustomPropertyOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		name?: string | null;
		parameters?: string | null;
		permission?: PermissionLevel | null;
		type?: CustomPropertyModelType | null;
		usageCount?: number | null;
	}
	export interface UserCustomPropertyOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		parameters: FormControl<string | null | undefined>,
		permission: FormControl<PermissionLevel | null | undefined>,
		type: FormControl<CustomPropertyModelType | null | undefined>,
		usageCount: FormControl<number | null | undefined>,
	}
	export function CreateUserCustomPropertyOutputModelFormGroup() {
		return new FormGroup<UserCustomPropertyOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<PermissionLevel | null | undefined>(undefined),
			type: new FormControl<CustomPropertyModelType | null | undefined>(undefined),
			usageCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserCustomPropertySelectionItemInputModel {
		isActive?: boolean | null;
		name?: string | null;
		sortOrder?: number | null;

		/** Required */
		userCustomProperty: SimpleInputModel;
	}
	export interface UserCustomPropertySelectionItemInputModelFormProperties {
		isActive: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateUserCustomPropertySelectionItemInputModelFormGroup() {
		return new FormGroup<UserCustomPropertySelectionItemInputModelFormProperties>({
			isActive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserCustomPropertySelectionItemOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		sortOrder?: number | null;
		userCustomProperty?: CustomPropertyShortModel;
	}
	export interface UserCustomPropertySelectionItemOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateUserCustomPropertySelectionItemOutputModelFormGroup() {
		return new FormGroup<UserCustomPropertySelectionItemOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserCustomValueInputModel {

		/** Required */
		customProperty: SimpleInputRequiredModel;

		/** Required */
		user: SimpleInputRequiredModel;
		value?: string | null;
	}
	export interface UserCustomValueInputModelFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserCustomValueInputModelFormGroup() {
		return new FormGroup<UserCustomValueInputModelFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserCustomValueOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customProperty?: CustomPropertyShortModel;
		guid?: string | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		user?: ModelBase;
		value?: string | null;
	}
	export interface UserCustomValueOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserCustomValueOutputModelFormGroup() {
		return new FormGroup<UserCustomValueOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserInputModel {
		address?: string | null;
		bankAccountNumber?: string | null;
		birthDate?: Date | null;
		businessUnit?: SimpleInputRequiredModel;
		city?: string | null;
		code?: string | null;
		country?: SimpleInputModel;
		countryRegion?: SimpleInputModel;
		createDefaultWorkContract?: boolean | null;
		culture?: SimpleInputModel;
		defaultActivityType?: SimpleInputModel;
		email?: string | null;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		firstName: string;
		isActive?: boolean | null;
		language?: SimpleInputModel;

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		lastName: string;
		notes?: string | null;
		permissionProfile?: SimpleInputModel;
		phone?: string | null;
		postalCode?: string | null;
		salutation?: ContactModelSalutation | null;
		satisfaction?: ContactModelSatisfactionLevel | null;
		socialSecurityNumber?: string | null;
		superiorUser?: SimpleInputRequiredModel;
		timezone?: TimezoneModel;
		userType?: LicenseUserType | null;
		workType?: SimpleInputRequiredModel;
	}
	export interface UserInputModelFormProperties {
		address: FormControl<string | null | undefined>,
		bankAccountNumber: FormControl<string | null | undefined>,
		birthDate: FormControl<Date | null | undefined>,
		city: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		createDefaultWorkContract: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		firstName: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		lastName: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		salutation: FormControl<ContactModelSalutation | null | undefined>,
		satisfaction: FormControl<ContactModelSatisfactionLevel | null | undefined>,
		socialSecurityNumber: FormControl<string | null | undefined>,
		userType: FormControl<LicenseUserType | null | undefined>,
	}
	export function CreateUserInputModelFormGroup() {
		return new FormGroup<UserInputModelFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			bankAccountNumber: new FormControl<string | null | undefined>(undefined),
			birthDate: new FormControl<Date | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			createDefaultWorkContract: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			notes: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			salutation: new FormControl<ContactModelSalutation | null | undefined>(undefined),
			satisfaction: new FormControl<ContactModelSatisfactionLevel | null | undefined>(undefined),
			socialSecurityNumber: new FormControl<string | null | undefined>(undefined),
			userType: new FormControl<LicenseUserType | null | undefined>(undefined),
		});

	}

	export interface UserKeywordModel {
		category?: ContactKeywordModelCategory | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		keyword: string;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		userGuid?: string | null;
	}
	export interface UserKeywordModelFormProperties {
		category: FormControl<ContactKeywordModelCategory | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		keyword: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		userGuid: FormControl<string | null | undefined>,
	}
	export function CreateUserKeywordModelFormGroup() {
		return new FormGroup<UserKeywordModelFormProperties>({
			category: new FormControl<ContactKeywordModelCategory | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			userGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserKeywordSubModel {
		value?: string | null;
	}
	export interface UserKeywordSubModelFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserKeywordSubModelFormGroup() {
		return new FormGroup<UserKeywordSubModelFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserLanguageSubModel {
		code?: string | null;
		englishName?: string | null;
		guid?: string | null;
		name?: string | null;
	}
	export interface UserLanguageSubModelFormProperties {
		code: FormControl<string | null | undefined>,
		englishName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserLanguageSubModelFormGroup() {
		return new FormGroup<UserLanguageSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			englishName: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserOutputModel {
		address?: string | null;
		bankAccountNumber?: string | null;
		birthDate?: Date | null;
		businessUnit?: BusinessUnitSubModel;
		city?: string | null;
		code?: string | null;
		country?: UserCountrySubModel;
		countryRegion?: ModelWithName;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		culture?: UserCultureSubModel;
		defaultActivityType?: ModelWithName;
		email?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		firstName: string;
		guid?: string | null;
		isActive?: boolean | null;
		keywords?: Array<UserKeywordSubModel>;
		language?: UserLanguageSubModel;
		lastLogin?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		lastName: string;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		notes?: string | null;
		permissionProfile?: ModelWithName;
		phone?: string | null;
		postalCode?: string | null;
		salutation?: ContactModelSalutation | null;
		satisfaction?: ContactModelSatisfactionLevel | null;
		socialSecurityNumber?: string | null;
		superiorUser?: ModelBaseWithRequiredGuid;
		timezone?: TimezoneModel;
		title?: string | null;
		userType?: LicenseUserType | null;
		workContract?: UserWorkContractSubModel;
		workType?: ModelBaseWithRequiredGuid;
	}
	export interface UserOutputModelFormProperties {
		address: FormControl<string | null | undefined>,
		bankAccountNumber: FormControl<string | null | undefined>,
		birthDate: FormControl<Date | null | undefined>,
		city: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		email: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		firstName: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		lastLogin: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		lastName: FormControl<string | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		notes: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		salutation: FormControl<ContactModelSalutation | null | undefined>,
		satisfaction: FormControl<ContactModelSatisfactionLevel | null | undefined>,
		socialSecurityNumber: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		userType: FormControl<LicenseUserType | null | undefined>,
	}
	export function CreateUserOutputModelFormGroup() {
		return new FormGroup<UserOutputModelFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			bankAccountNumber: new FormControl<string | null | undefined>(undefined),
			birthDate: new FormControl<Date | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastLogin: new FormControl<Date | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			salutation: new FormControl<ContactModelSalutation | null | undefined>(undefined),
			satisfaction: new FormControl<ContactModelSatisfactionLevel | null | undefined>(undefined),
			socialSecurityNumber: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userType: new FormControl<LicenseUserType | null | undefined>(undefined),
		});

	}

	export interface UserWorkContractSubModel {
		dailyHours?: number | null;
		endDate?: Date | null;
		flextimeLimitPerDay?: number | null;
		guid?: string | null;
		hourCost?: MoneyOutputModel;
		isFlextimeActive?: boolean | null;
		isOvertimeAllowed?: boolean | null;

		/** Required */
		startDate: Date;

		/**
		 * Required
		 * Min length: 1
		 */
		title: string;
		workWeek?: Array<Workweek>;
	}
	export interface UserWorkContractSubModelFormProperties {
		dailyHours: FormControl<number | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		flextimeLimitPerDay: FormControl<number | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isFlextimeActive: FormControl<boolean | null | undefined>,
		isOvertimeAllowed: FormControl<boolean | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateUserWorkContractSubModelFormGroup() {
		return new FormGroup<UserWorkContractSubModelFormProperties>({
			dailyHours: new FormControl<number | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			flextimeLimitPerDay: new FormControl<number | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isFlextimeActive: new FormControl<boolean | null | undefined>(undefined),
			isOvertimeAllowed: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface UserWithPhotoFileModelAndRequiredGuid {
		code?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
	}
	export interface UserWithPhotoFileModelAndRequiredGuidFormProperties {
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserWithPhotoFileModelAndRequiredGuidFormGroup() {
		return new FormGroup<UserWithPhotoFileModelAndRequiredGuidFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VatRateInputModel {

		/**
		 * Max length: 10
		 * Min length: 0
		 */
		code?: string | null;
		countryGuid?: string | null;
		isActive?: boolean | null;
		isDefault?: boolean | null;

		/** Required */
		percentage: number;
	}
	export interface VatRateInputModelFormProperties {

		/**
		 * Max length: 10
		 * Min length: 0
		 */
		code: FormControl<string | null | undefined>,
		countryGuid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,

		/** Required */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateVatRateInputModelFormGroup() {
		return new FormGroup<VatRateInputModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(10)]),
			countryGuid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VatRateOutputModel {

		/**
		 * Max length: 10
		 * Min length: 0
		 */
		code?: string | null;
		countryGuid?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isActive?: boolean | null;
		isDefault?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		percentage?: number | null;
	}
	export interface VatRateOutputModelFormProperties {

		/**
		 * Max length: 10
		 * Min length: 0
		 */
		code: FormControl<string | null | undefined>,
		countryGuid: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateVatRateOutputModelFormGroup() {
		return new FormGroup<VatRateOutputModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(10)]),
			countryGuid: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VismaFinancialsCompanyModel {
		id?: number | null;
		name?: string | null;
	}
	export interface VismaFinancialsCompanyModelFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateVismaFinancialsCompanyModelFormGroup() {
		return new FormGroup<VismaFinancialsCompanyModelFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkContractInputModel {
		dailyHours?: number | null;
		endDate?: Date | null;
		flextimeLimitPerDay?: number | null;

		/** Required */
		hourCost: MoneyInputModelWithNotNegativeAmount;
		isFlextimeActive?: boolean | null;
		isOvertimeAllowed?: boolean | null;
		role?: SimpleInputModel;

		/** Required */
		startDate: Date;

		/**
		 * Required
		 * Min length: 1
		 */
		title: string;

		/** Required */
		user: SimpleInputRequiredModel;
		workWeek?: Array<Workweek>;
	}
	export interface WorkContractInputModelFormProperties {
		dailyHours: FormControl<number | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		flextimeLimitPerDay: FormControl<number | null | undefined>,
		isFlextimeActive: FormControl<boolean | null | undefined>,
		isOvertimeAllowed: FormControl<boolean | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateWorkContractInputModelFormGroup() {
		return new FormGroup<WorkContractInputModelFormProperties>({
			dailyHours: new FormControl<number | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			flextimeLimitPerDay: new FormControl<number | null | undefined>(undefined),
			isFlextimeActive: new FormControl<boolean | null | undefined>(undefined),
			isOvertimeAllowed: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface WorkContractOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		dailyHours?: number | null;
		endDate?: Date | null;
		flextimeLimitPerDay?: number | null;
		guid?: string | null;
		hourCost?: MoneyOutputModel;
		isFlextimeActive?: boolean | null;
		isOvertimeAllowed?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		role?: ModelWithName;

		/** Required */
		startDate: Date;

		/**
		 * Required
		 * Min length: 1
		 */
		title: string;
		user?: UserWithPhotoFileModelAndRequiredGuid;
		workWeek?: Array<Workweek>;
	}
	export interface WorkContractOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		dailyHours: FormControl<number | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		flextimeLimitPerDay: FormControl<number | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isFlextimeActive: FormControl<boolean | null | undefined>,
		isOvertimeAllowed: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateWorkContractOutputModelFormGroup() {
		return new FormGroup<WorkContractOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			dailyHours: new FormControl<number | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			flextimeLimitPerDay: new FormControl<number | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isFlextimeActive: new FormControl<boolean | null | undefined>(undefined),
			isOvertimeAllowed: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum WorkHourApprovalMode { None = 0, RequiredForInvoicing = 1, InvoicableAlways = 2 }

	export interface WorkHourCustomerSubModel {
		guid?: string | null;
		name?: string | null;
		number?: number | null;
	}
	export interface WorkHourCustomerSubModelFormProperties {
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateWorkHourCustomerSubModelFormGroup() {
		return new FormGroup<WorkHourCustomerSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WorkHourInputModel {
		description?: string | null;
		endTime?: Date | null;

		/** Required */
		eventDate: Date;
		invoice?: SimpleInputModel;
		invoiceQuantity?: number | null;
		invoiceRowComment?: string | null;
		invoiceRowDescription?: string | null;
		isApproved?: boolean | null;
		isBillable?: boolean | null;
		overtime?: SimpleInputModel;

		/** Required */
		phase: SimpleInputRequiredModel;
		plannedInvoiceQuantity?: number | null;
		quantity?: number | null;
		startTime?: Date | null;
		unitPrice?: MoneyInputModel;

		/** Required */
		user: SimpleInputRequiredModel;

		/** Required */
		workType: SimpleInputRequiredModel;
	}
	export interface WorkHourInputModelFormProperties {
		description: FormControl<string | null | undefined>,
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		eventDate: FormControl<Date | null | undefined>,
		invoiceQuantity: FormControl<number | null | undefined>,
		invoiceRowComment: FormControl<string | null | undefined>,
		invoiceRowDescription: FormControl<string | null | undefined>,
		isApproved: FormControl<boolean | null | undefined>,
		isBillable: FormControl<boolean | null | undefined>,
		plannedInvoiceQuantity: FormControl<number | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateWorkHourInputModelFormGroup() {
		return new FormGroup<WorkHourInputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			invoiceQuantity: new FormControl<number | null | undefined>(undefined),
			invoiceRowComment: new FormControl<string | null | undefined>(undefined),
			invoiceRowDescription: new FormControl<string | null | undefined>(undefined),
			isApproved: new FormControl<boolean | null | undefined>(undefined),
			isBillable: new FormControl<boolean | null | undefined>(undefined),
			plannedInvoiceQuantity: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface WorkHourInvoiceSubModel {
		date?: Date | null;
		guid?: string | null;
		number?: number | null;
	}
	export interface WorkHourInvoiceSubModelFormProperties {
		date: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateWorkHourInvoiceSubModelFormGroup() {
		return new FormGroup<WorkHourInvoiceSubModelFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WorkHourOutputModel {
		billableStatus?: BillableStatusType | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		customer?: WorkHourCustomerSubModel;
		description?: string | null;
		endTime?: Date | null;

		/** Required */
		eventDate: Date;
		guid?: string | null;
		invoice?: WorkHourInvoiceSubModel;
		invoiceQuantity?: number | null;
		invoiceRowComment?: string | null;
		invoiceRowDescription?: string | null;
		invoiceRowGuid?: string | null;
		isApproved?: boolean | null;
		isBillable?: boolean | null;
		isModifiable?: boolean | null;
		isProductive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		overtime?: ModelWithName;
		phase?: WorkHourPhaseSubModel;
		plannedInvoiceQuantity?: number | null;
		project?: WorkHourProjectSubModel;
		quantity?: number | null;
		startTime?: Date | null;
		unitCost?: MoneyOutputModel;
		unitPrice?: MoneyOutputModel;
		user?: UserWithFirstNameLastNamePhotoFileModelAndRequiredGuid;
		workType?: WorkHourWorkTypeSubModel;
	}
	export interface WorkHourOutputModelFormProperties {
		billableStatus: FormControl<BillableStatusType | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		eventDate: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		invoiceQuantity: FormControl<number | null | undefined>,
		invoiceRowComment: FormControl<string | null | undefined>,
		invoiceRowDescription: FormControl<string | null | undefined>,
		invoiceRowGuid: FormControl<string | null | undefined>,
		isApproved: FormControl<boolean | null | undefined>,
		isBillable: FormControl<boolean | null | undefined>,
		isModifiable: FormControl<boolean | null | undefined>,
		isProductive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
		plannedInvoiceQuantity: FormControl<number | null | undefined>,
		quantity: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateWorkHourOutputModelFormGroup() {
		return new FormGroup<WorkHourOutputModelFormProperties>({
			billableStatus: new FormControl<BillableStatusType | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			eventDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			guid: new FormControl<string | null | undefined>(undefined),
			invoiceQuantity: new FormControl<number | null | undefined>(undefined),
			invoiceRowComment: new FormControl<string | null | undefined>(undefined),
			invoiceRowDescription: new FormControl<string | null | undefined>(undefined),
			invoiceRowGuid: new FormControl<string | null | undefined>(undefined),
			isApproved: new FormControl<boolean | null | undefined>(undefined),
			isBillable: new FormControl<boolean | null | undefined>(undefined),
			isModifiable: new FormControl<boolean | null | undefined>(undefined),
			isProductive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			plannedInvoiceQuantity: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface WorkHourPhaseSubModel {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		isCompleted?: boolean | null;
		isLocked?: boolean | null;
		name?: string | null;
	}
	export interface WorkHourPhaseSubModelFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		isCompleted: FormControl<boolean | null | undefined>,
		isLocked: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateWorkHourPhaseSubModelFormGroup() {
		return new FormGroup<WorkHourPhaseSubModelFormProperties>({
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			isCompleted: new FormControl<boolean | null | undefined>(undefined),
			isLocked: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkHourProjectSubModel {
		companyGuid?: string | null;
		guid?: string | null;
		isClosed?: boolean | null;
		name?: string | null;
		number?: number | null;
	}
	export interface WorkHourProjectSubModelFormProperties {
		companyGuid: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isClosed: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateWorkHourProjectSubModelFormGroup() {
		return new FormGroup<WorkHourProjectSubModelFormProperties>({
			companyGuid: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isClosed: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WorkHourWorkTypeSubModel {
		code?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		guid: string;
		name?: string | null;
	}
	export interface WorkHourWorkTypeSubModelFormProperties {
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateWorkHourWorkTypeSubModelFormGroup() {
		return new FormGroup<WorkHourWorkTypeSubModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkHourPriceOutputModel {
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		isBillable?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;
		pricelistVersion?: ModelBase;
		unitPrice?: MoneyOutputModel;
		user?: ModelWithName;
		workType?: ModelWithName;
	}
	export interface WorkHourPriceOutputModelFormProperties {
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isBillable: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateWorkHourPriceOutputModelFormGroup() {
		return new FormGroup<WorkHourPriceOutputModelFormProperties>({
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isBillable: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface WorkTypeInputModel {
		code?: string | null;
		hourCost?: MoneyInputModelWithNullableAmount;
		isActive?: boolean | null;
		isDefault?: boolean | null;
		isProductive?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		salesAccount?: SimpleInputModel;
	}
	export interface WorkTypeInputModelFormProperties {
		code: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isProductive: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWorkTypeInputModelFormGroup() {
		return new FormGroup<WorkTypeInputModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isProductive: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface WorkTypeOutputModel {
		code?: string | null;
		createdBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		createdDateTime?: Date | null;
		guid?: string | null;
		hourCost?: MoneyOutputModel;
		isActive?: boolean | null;
		isDefault?: boolean | null;
		isProductive?: boolean | null;
		lastUpdatedBy?: UserWithFirstNameLastNameAndPhotoFileModel;
		lastUpdatedDateTime?: Date | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
		salesAccount?: ModelWithName;
	}
	export interface WorkTypeOutputModelFormProperties {
		code: FormControl<string | null | undefined>,
		createdDateTime: FormControl<Date | null | undefined>,
		guid: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isDefault: FormControl<boolean | null | undefined>,
		isProductive: FormControl<boolean | null | undefined>,
		lastUpdatedDateTime: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWorkTypeOutputModelFormGroup() {
		return new FormGroup<WorkTypeOutputModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			createdDateTime: new FormControl<Date | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isProductive: new FormControl<boolean | null | undefined>(undefined),
			lastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface WorkdayModel {
		absenceHours?: number | null;
		date?: Date | null;
		enteredHours?: number | null;
		enteredTimeEntries?: number | null;
		expectedHours?: number | null;
		flextimeLimitPerDay?: number | null;
		holidayName?: string | null;
		incompleteTimingMinutes?: number | null;
		isCompleted?: boolean | null;
		isHoliday?: boolean | null;
		isOvertimeAllowed?: boolean | null;
		isReadOnly?: boolean | null;
		userGuid?: string | null;
	}
	export interface WorkdayModelFormProperties {
		absenceHours: FormControl<number | null | undefined>,
		date: FormControl<Date | null | undefined>,
		enteredHours: FormControl<number | null | undefined>,
		enteredTimeEntries: FormControl<number | null | undefined>,
		expectedHours: FormControl<number | null | undefined>,
		flextimeLimitPerDay: FormControl<number | null | undefined>,
		holidayName: FormControl<string | null | undefined>,
		incompleteTimingMinutes: FormControl<number | null | undefined>,
		isCompleted: FormControl<boolean | null | undefined>,
		isHoliday: FormControl<boolean | null | undefined>,
		isOvertimeAllowed: FormControl<boolean | null | undefined>,
		isReadOnly: FormControl<boolean | null | undefined>,
		userGuid: FormControl<string | null | undefined>,
	}
	export function CreateWorkdayModelFormGroup() {
		return new FormGroup<WorkdayModelFormProperties>({
			absenceHours: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			enteredHours: new FormControl<number | null | undefined>(undefined),
			enteredTimeEntries: new FormControl<number | null | undefined>(undefined),
			expectedHours: new FormControl<number | null | undefined>(undefined),
			flextimeLimitPerDay: new FormControl<number | null | undefined>(undefined),
			holidayName: new FormControl<string | null | undefined>(undefined),
			incompleteTimingMinutes: new FormControl<number | null | undefined>(undefined),
			isCompleted: new FormControl<boolean | null | undefined>(undefined),
			isHoliday: new FormControl<boolean | null | undefined>(undefined),
			isOvertimeAllowed: new FormControl<boolean | null | undefined>(undefined),
			isReadOnly: new FormControl<boolean | null | undefined>(undefined),
			userGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorktypeForProjectOutputModel {
		hourPrice?: MoneyOutputModel;
		worktype?: WorkTypeOutputModel;
	}
	export interface WorktypeForProjectOutputModelFormProperties {
	}
	export function CreateWorktypeForProjectOutputModelFormGroup() {
		return new FormGroup<WorktypeForProjectOutputModelFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns http status code 204 for successful authentication.
		 * This route requires authentication, returns 204 http status when successful.
		 * Get heartbeat/authorized
		 * @return {void} 
		 */
		HeartBeat_GetAuthorization(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'heartbeat/authorized', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Can be used to check the status of the database.
		 * This does not require authentication.
		 * Get heartbeat/database
		 * @return {string} Returns message "Database is alive."
		 */
		HeartBeat_GetDatabaseStatus(): Observable<string> {
			return this.http.get(this.baseUri + 'heartbeat/database', { responseType: 'text' });
		}

		/**
		 * Can be used to check the status of the REST Api.
		 * This does not require authentication.
		 * Get heartbeat/server
		 * @return {string} Returns message "Server is alive."
		 */
		HeartBeat_GetServerStatus(): Observable<string> {
			return this.http.get(this.baseUri + 'heartbeat/server', { responseType: 'text' });
		}

		/**
		 * Get all activities of an organization
		 * Start and end date times accept values of DateTimeOffset type, based on UTF-8 encoding.
		 * Get v1/activities
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} closed Optional: Which activities to fetch - open/closed, Default all.
		 * @param {Array<ActivityCategory>} activityCategories Optional: activity category for the activities to be fetched. Should be one of Personal/Absences/CalendarEntry/SalesEvent/Task. Default all.
		 * @param {Array<string>} customerGuids Optional: ID of customer. Default all.
		 * @param {boolean} includeTasksWithNoCustomer Optional: Include the activities that don't have customer. Default is true.
		 * @param {Array<string>} projectGuids Optional: ID of the project for the activities to be fetched. If not provided, returns for all projects. Default all.
		 * @param {boolean} includeTasksWithNoProject Optional: Include the activities that don't have project. Default is true.
		 * @param {Array<string>} projectBusinessUnitGuids Optional: ID of the business unit of the project based on which activities should be filtered. If not provided, returns for all business units. Default all.
		 * @param {Array<string>} projectOwnerGuids Optional: ID of the project manager. If not provided, returns for all project managers. Default all.
		 * @param {Array<string>} userGuids Optional: ID of the user for the activities to be fetched. If not provided, returns for all users. Default all.
		 * @param {boolean} includeAsMember Optional: Include the activities that the user is a member. Effective if userGuid is provided. Default is to not include.
		 * @param {Array<string>} userKeywordGuids Optional: User keyword Ids of activity owner to search for.
		 * @param {Date} startDateTime Optional: starting date and time from which to get the activities in user's timezone. Finds all activities that end after the date time. Format "2017-04-12T13%3A20%3A00%2b02%3A00". Default all.
		 * @param {Date} endDateTime Optional: ending date and time to which to get the activities in user's timezone. Finds all activities that start before or on the date time. Format "2017-04-12T13%3A20%3A00%2b02%3A00". Default all. If activities for one day are fetched, give start date time with time as 00:00 with the offset of the timezone and end time as 23:59:59 with the offset.
		 * @param {Array<string>} projectTaskStatusGuids Optional: ID of the project task status. Default all.
		 * @param {Array<string>} phaseGuids Optional: ID of the phase for the activities to be fetched. If not provided, returns for all phases. Default all.
		 * @param {boolean} includeSubPhases Optional: If one phase guid is given include activities also from sub phases. If multiple phase guids are given, returns activities only for those regardless of this parameter. Default false.
		 * @param {Array<string>} contactGuids Optional: ID of the contact for the activities to be fetched. If not provided, returns for all users. Default all.
		 * @param {boolean} hasDuration Optional: has duration flag for the activity. Default all.
		 * @param {boolean} hasHours Optional: has any work hour entries associated with the activity. Default all.
		 * @param {boolean} isUnassigned Optional: is the activity unassigned. Default all.
		 * @param {Date} changedSince Optional: Get activities that have been added or changed after this date time (greater or equal).
		 * @param {boolean} useStrictStartAndEndDateTime Optional: If given as true returns activities that start after start time and end before end time. If given as false returns activities that start before end time and end after start time. Limit are included in both cases. Default false.
		 * @param {Array<string>} activityTypeGuids Optional: ID of the project activity type. Default all.
		 * @param {ActivityModelRecurrenceType} recurrenceType Optional: Type of the recurrence. Default returns all not recurring activities, instances and exceptions. (None = not recurring activity)
		 * @return {Array<ActivityModel>} Activities for a project
		 */
		Activities_GetActivities(pageToken: string | null | undefined, rowCount: number | null | undefined, closed: boolean | null | undefined, activityCategories: Array<ActivityCategory> | null | undefined, customerGuids: Array<string> | null | undefined, includeTasksWithNoCustomer: boolean | null | undefined, projectGuids: Array<string> | null | undefined, includeTasksWithNoProject: boolean | null | undefined, projectBusinessUnitGuids: Array<string> | null | undefined, projectOwnerGuids: Array<string> | null | undefined, userGuids: Array<string> | null | undefined, includeAsMember: boolean | null | undefined, userKeywordGuids: Array<string> | null | undefined, startDateTime: Date | null | undefined, endDateTime: Date | null | undefined, projectTaskStatusGuids: Array<string> | null | undefined, phaseGuids: Array<string> | null | undefined, includeSubPhases: boolean | null | undefined, contactGuids: Array<string> | null | undefined, hasDuration: boolean | null | undefined, hasHours: boolean | null | undefined, isUnassigned: boolean | null | undefined, changedSince: Date | null | undefined, useStrictStartAndEndDateTime: boolean | null | undefined, activityTypeGuids: Array<string> | null | undefined, recurrenceType: ActivityModelRecurrenceType | null | undefined): Observable<Array<ActivityModel>> {
			return this.http.get<Array<ActivityModel>>(this.baseUri + 'v1/activities?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&closed=' + closed + '&' + activityCategories?.map(z => `activityCategories=${z}`).join('&') + '&' + customerGuids?.map(z => `customerGuids=${encodeURIComponent(z)}`).join('&') + '&includeTasksWithNoCustomer=' + includeTasksWithNoCustomer + '&' + projectGuids?.map(z => `projectGuids=${encodeURIComponent(z)}`).join('&') + '&includeTasksWithNoProject=' + includeTasksWithNoProject + '&' + projectBusinessUnitGuids?.map(z => `projectBusinessUnitGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectOwnerGuids?.map(z => `projectOwnerGuids=${encodeURIComponent(z)}`).join('&') + '&' + userGuids?.map(z => `userGuids=${encodeURIComponent(z)}`).join('&') + '&includeAsMember=' + includeAsMember + '&' + userKeywordGuids?.map(z => `userKeywordGuids=${encodeURIComponent(z)}`).join('&') + '&startDateTime=' + startDateTime?.toISOString() + '&endDateTime=' + endDateTime?.toISOString() + '&' + projectTaskStatusGuids?.map(z => `projectTaskStatusGuids=${encodeURIComponent(z)}`).join('&') + '&' + phaseGuids?.map(z => `phaseGuids=${encodeURIComponent(z)}`).join('&') + '&includeSubPhases=' + includeSubPhases + '&' + contactGuids?.map(z => `contactGuids=${encodeURIComponent(z)}`).join('&') + '&hasDuration=' + hasDuration + '&hasHours=' + hasHours + '&isUnassigned=' + isUnassigned + '&changedSince=' + changedSince?.toISOString() + '&useStrictStartAndEndDateTime=' + useStrictStartAndEndDateTime + '&' + activityTypeGuids?.map(z => `activityTypeGuids=${encodeURIComponent(z)}`).join('&') + '&recurrenceType=' + recurrenceType, {});
		}

		/**
		 * Insert a activity
		 * Post v1/activities
		 * @param {ActivityModel} requestBody ActivityModel
		 * @return {void} 
		 */
		Activities_PostActivity(requestBody: ActivityModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/activities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get participants for an activity
		 * Get v1/activities/{activityGuid}/activityparticipants
		 * @param {string} activityGuid ID of the activity
		 * @return {Array<ActivityParticipantModel>} ActivityParticipants for an activity
		 */
		ActivityParticipants_GetActivityParticipants(activityGuid: string): Observable<Array<ActivityParticipantModel>> {
			return this.http.get<Array<ActivityParticipantModel>>(this.baseUri + 'v1/activities/' + (activityGuid == null ? '' : encodeURIComponent(activityGuid)) + '/activityparticipants', {});
		}

		/**
		 * Delete activity participant.
		 * Returns: No Content (204) if succeeded. Not found (404) if participant can't be found.
		 * Delete v1/activities/{activityGuid}/activityparticipants/{activityParticipantGuid}
		 * @param {string} activityGuid ID of the activity from which to delete the participant. If an activity occurrence guid is given, this will create an exception to the recurring activity and delete the participant from that.
		 * @param {string} activityParticipantGuid ID of the participant
		 * @return {void} 
		 */
		ActivityParticipants_DeleteActivityParticipant(activityGuid: string, activityParticipantGuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/activities/' + (activityGuid == null ? '' : encodeURIComponent(activityGuid)) + '/activityparticipants/' + (activityParticipantGuid == null ? '' : encodeURIComponent(activityParticipantGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an activity
		 * Returns: No Content (204) if succeeded. Not found (404) if activity can't be found.
		 * Delete v1/activities/{guid}
		 * @param {string} guid ID for the activity to delete
		 * @return {void} 
		 */
		Activities_DeleteActivity(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/activities/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get activity by ID
		 * Get v1/activities/{guid}
		 * @param {string} guid GUID used to get the activity.
		 * @return {ActivityModel} 
		 */
		Activities_GetActivity(guid: string): Observable<ActivityModel> {
			return this.http.get<ActivityModel>(this.baseUri + 'v1/activities/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a activity or a part of it
		 * Patch v1/activities/{guid}
		 * @param {string} guid ID of the activity. Can also be comma separate list of IDs to patch multiple activities with one call. When multiple IDs are given, returns model which has list of succeeded activities and list of errors.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ActivityModel
		 * @return {Array<ActivityModel>} List of updated activities
		 */
		Activities_PatchActivity(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ActivityModel>> {
			return this.http.patch<Array<ActivityModel>>(this.baseUri + 'v1/activities/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets exceptions from a recurring activity.
		 * Returns: No Content (204) if succeeded. Not found (404) if activity can't be found or is not recurring.
		 * Delete v1/activities/{guid}/exceptions
		 * @param {string} guid ID of the recurring activity
		 * @return {void} 
		 */
		Activities_DeleteExceptions(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/activities/' + (guid == null ? '' : encodeURIComponent(guid)) + '/exceptions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds an activity participant
		 * Post v1/activityparticipants
		 * @param {ActivityParticipantModel} requestBody ActivityParticipantModel
		 * @return {void} 
		 */
		ActivityParticipants_PostActivityParticipant(requestBody: ActivityParticipantModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/activityparticipants', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get activity participant
		 * Get v1/activityparticipants/{guid}
		 * @param {string} guid ID of the participant
		 * @return {ActivityParticipantModel} ActivityParticipant
		 */
		ActivityParticipants_GetActivityParticipant(guid: string): Observable<ActivityParticipantModel> {
			return this.http.get<ActivityParticipantModel>(this.baseUri + 'v1/activityparticipants/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a activity participant or a part of it
		 * Only IsConfirmed property can be updated.
		 * Patch v1/activityparticipants/{guid}
		 * @param {string} guid ID of the activity participant
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ActivityParticipantModel
		 * @return {Array<ActivityParticipantModel>} list of updated activity participants
		 */
		ActivityParticipants_PatchActivityParticipants(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ActivityParticipantModel>> {
			return this.http.patch<Array<ActivityParticipantModel>>(this.baseUri + 'v1/activityparticipants/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the Activity Types
		 * Get v1/activitytypes
		 * @param {boolean} active If not given, return all Activity Types, if given as true return only active Activity Types, if given as false returns only inactive Activity Types
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get activity types that have been added or changed after this date time (greater or equal).
		 * @param {Array<ActivityCategory>} category Optional: Category or multiple categories of activity types to search for. Default all.
		 * @return {Array<ActivityTypeModel>} 
		 */
		ActivityTypes_GetActivityTypes(active: boolean | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined, category: Array<ActivityCategory> | null | undefined): Observable<Array<ActivityTypeModel>> {
			return this.http.get<Array<ActivityTypeModel>>(this.baseUri + 'v1/activitytypes?active=' + active + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString() + '&' + category?.map(z => `category=${z}`).join('&'), {});
		}

		/**
		 * Insert an Activity type.
		 * Post v1/activitytypes
		 * @param {ActivityTypeModel} requestBody Activity type
		 * @return {void} 
		 */
		ActivityTypes_PostActivityType(requestBody: ActivityTypeModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/activitytypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an activity type.
		 * Returns: No Content (204) if succeeded. Not found (404) if activity type can't be found.
		 * Delete v1/activitytypes/{guid}
		 * @param {string} guid ID for the activity type to delete
		 * @param {string} moveUsagesToGuid Optional: ID of the activity type to which to move usages of this activity type. Default null. If activity type is in use and usages aren't moved the deletion might fail.
		 * @return {void} 
		 */
		ActivityTypes_DeleteActivityType(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/activitytypes/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Activity Type by ID
		 * Get v1/activitytypes/{guid}
		 * @param {string} guid GUID used to get the Activity Type.
		 * @return {ActivityTypeModel} Activity Type
		 */
		ActivityTypes_GetActivityType(guid: string): Observable<ActivityTypeModel> {
			return this.http.get<ActivityTypeModel>(this.baseUri + 'v1/activitytypes/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an Activity Type or a part of it
		 * Patch v1/activitytypes/{guid}
		 * @param {string} guid ID of the Activity Type
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ActivityTypeModel
		 * @return {Array<ActivityTypeModel>} List of updated Activity Types
		 */
		ActivityTypes_PatchActivityType(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ActivityTypeModel>> {
			return this.http.patch<Array<ActivityTypeModel>>(this.baseUri + 'v1/activitytypes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the addresses.
		 * Get v1/addresses
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Date} changedSince Optional: Get addresses that have been added or changed after this date time (greater or equal).
		 * @return {Array<AddressModel>} 
		 */
		Addresses_GetAddresses(firstRow: number | null | undefined, rowCount: number | null | undefined, calculateRowCount: boolean | null | undefined, changedSince: Date | null | undefined): Observable<Array<AddressModel>> {
			return this.http.get<Array<AddressModel>>(this.baseUri + 'v1/addresses?firstRow=' + firstRow + '&rowCount=' + rowCount + '&calculateRowCount=' + calculateRowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Delete an address.
		 * Returns: No Content (204) if succeeded. Not found (404) if address can't be found.
		 * Delete v1/addresses/{guid}
		 * @param {string} guid ID for the address to delete.
		 * @return {void} 
		 */
		Addresses_DeleteAddress(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/addresses/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get address by ID.
		 * Get v1/addresses/{guid}
		 * @param {string} guid GUID used to get the address.
		 * @return {AddressModel} Address.
		 */
		Addresses_GetAddress(guid: string): Observable<AddressModel> {
			return this.http.get<AddressModel>(this.baseUri + 'v1/addresses/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an address or a part of it.
		 * Patch v1/addresses/{guid}
		 * @param {string} guid ID of the address.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of AddressModel.
		 * @return {Array<AddressModel>} List of updated addresses.
		 */
		Addresses_PatchAddress(guid: string, requestBody: Array<PatchOperation>): Observable<Array<AddressModel>> {
			return this.http.patch<Array<AddressModel>>(this.baseUri + 'v1/addresses/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all bank accounts for current organization.
		 * Get v1/bankaccounts
		 * @param {string} companyGuid Optional: ID of the company.
		 * @param {string} businessUnitGuid Optional: ID of the business unit.
		 * @param {boolean} active If not given, returns all bank accounts, if given as true returns only active bank accounts, if given as false returns only inactive bank accounts.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from bank account name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=BankName&sortings[0].value=Desc &sortings[1].key=BusinessUnitName&sortings[1].value=Asc".
		 * @return {Array<BankAccountOutputModel>} Bank accounts.
		 */
		BankAccounts_GetBankAccounts(companyGuid: string | null | undefined, businessUnitGuid: string | null | undefined, active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<BankAccountOutputModel>> {
			return this.http.get<Array<BankAccountOutputModel>>(this.baseUri + 'v1/bankaccounts?companyGuid=' + (companyGuid == null ? '' : encodeURIComponent(companyGuid)) + '&businessUnitGuid=' + (businessUnitGuid == null ? '' : encodeURIComponent(businessUnitGuid)) + '&active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Get bank account by ID.
		 * Get v1/bankaccounts/{guid}
		 * @param {string} guid GUID used to get the bank account.
		 * @return {BankAccountOutputModel} Bank account.
		 */
		BankAccounts_GetBankAccount(guid: string): Observable<BankAccountOutputModel> {
			return this.http.get<BankAccountOutputModel>(this.baseUri + 'v1/bankaccounts/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get all the BusinessUnits
		 * Get v1/businessunits
		 * @param {boolean} active If not given, return all BusinessUnits, if given as true return only active BusinessUnits, if given as false returns only inactive BusinessUnits
		 * @param {string} companyGuid Optional: ID of the company to which the business units belong.
		 * @param {string} companyCountryGuid Optional: ID of the country in which the company of business units is located.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from business unit name.
		 * @param {Date} changedSince Optional: Get business units that have been added or changed after this date time (greater or equal).
		 * @param {string} code Optional: Code of the business unit.
		 * @param {string} name Optional: Name of the business unit.
		 * @return {Array<BusinessUnitModel>} All the BusinessUnits
		 */
		BusinessUnits_GetBusinessUnits(active: boolean | null | undefined, companyGuid: string | null | undefined, companyCountryGuid: string | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, changedSince: Date | null | undefined, code: string | null | undefined, name: string | null | undefined): Observable<Array<BusinessUnitModel>> {
			return this.http.get<Array<BusinessUnitModel>>(this.baseUri + 'v1/businessunits?active=' + active + '&companyGuid=' + (companyGuid == null ? '' : encodeURIComponent(companyGuid)) + '&companyCountryGuid=' + (companyCountryGuid == null ? '' : encodeURIComponent(companyCountryGuid)) + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&changedSince=' + changedSince?.toISOString() + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get businessUnit by ID.
		 * Get v1/businessunits/{guid}
		 * @param {string} guid GUID used to get the businessUnit.
		 * @return {BusinessUnitModel} BusinessUnit.
		 */
		BusinessUnits_GetBusinessUnit(guid: string): Observable<BusinessUnitModel> {
			return this.http.get<BusinessUnitModel>(this.baseUri + 'v1/businessunits/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an businessUnit or a part of it.
		 * Patch v1/businessunits/{guid}
		 * @param {string} guid ID of the businessUnit.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of BusinessUnitModel.
		 * @return {Array<BusinessUnitModel>} List of updated business units.
		 */
		BusinessUnits_PatchBusinessUnit(guid: string, requestBody: Array<PatchOperation>): Observable<Array<BusinessUnitModel>> {
			return this.http.patch<Array<BusinessUnitModel>>(this.baseUri + 'v1/businessunits/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all communication types.
		 * Get v1/communicationtypes
		 * @param {boolean} active Filter the communication types. If true/false, only the active/inactive ones are returned. If null, all the communication types are returned.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from communication type name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc".
		 * @return {Array<CommunicationTypeModel>} Projects.
		 */
		CommunicationTypes_GetCommunicationTypes(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<CommunicationTypeModel>> {
			return this.http.get<Array<CommunicationTypeModel>>(this.baseUri + 'v1/communicationtypes?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a communication type.
		 * Post v1/communicationtypes
		 * @param {CommunicationTypeModel} requestBody CommunicationTypeModel.
		 * @return {void} 
		 */
		CommunicationTypes_PostCommunicationType(requestBody: CommunicationTypeModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/communicationtypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a communication type.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/communicationtypes/{guid}
		 * @param {string} guid GUID used to delete the communication type.
		 * @return {void} 
		 */
		CommunicationTypes_DeleteCommunicationType(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/communicationtypes/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get communication type by ID.
		 * Get v1/communicationtypes/{guid}
		 * @param {string} guid ID used to get the communication type.
		 * @return {CommunicationTypeModel} 
		 */
		CommunicationTypes_GetCommunicationType(guid: string): Observable<CommunicationTypeModel> {
			return this.http.get<CommunicationTypeModel>(this.baseUri + 'v1/communicationtypes/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a communication type or a part of it.
		 * Patch v1/communicationtypes/{guid}
		 * @param {string} guid ID of the communication type.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of CommunicationTypeModel.
		 * @return {Array<CommunicationTypeModel>} Updated communication model.
		 */
		CommunicationTypes_PatchCommunicationType(guid: string, requestBody: Array<PatchOperation>): Observable<Array<CommunicationTypeModel>> {
			return this.http.patch<Array<CommunicationTypeModel>>(this.baseUri + 'v1/communicationtypes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all contact communications.
		 * Get v1/contactcommunications
		 * @param {boolean} active If not given, return all contact communications, if given as true return only active contact communications, if given as false returns only inactive contact communications.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from contact communication value.
		 * @param {Date} changedSince Optional: Get contact communications that have been added or changed after this date time (greater or equal).
		 * @return {Array<ContactCommunicationModel>} All the contact communications.
		 */
		ContactCommunications_GetCommunications(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, changedSince: Date | null | undefined): Observable<Array<ContactCommunicationModel>> {
			return this.http.get<Array<ContactCommunicationModel>>(this.baseUri + 'v1/contactcommunications?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a communication for a contact.
		 * Post v1/contactcommunications
		 * @param {ContactCommunicationModel} requestBody ContactCommunicationModel.
		 * @return {void} 
		 */
		ContactCommunications_PostContactCommunication(requestBody: ContactCommunicationModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/contactcommunications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes contact's communication.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/contactcommunications/{guid}
		 * @param {string} guid GUID used to delete the contact's communication.
		 * @return {void} 
		 */
		ContactCommunications_DeleteContactCommunication(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/contactcommunications/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get contact communication by ID.
		 * Get v1/contactcommunications/{guid}
		 * @param {string} guid GUID used to get the contact communication.
		 * @return {ContactCommunicationModel} Contact communication.
		 */
		ContactCommunications_GetCommunication(guid: string): Observable<ContactCommunicationModel> {
			return this.http.get<ContactCommunicationModel>(this.baseUri + 'v1/contactcommunications/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a contact's communication or a part of it.
		 * Patch v1/contactcommunications/{guid}
		 * @param {string} guid ID of the contact's communication.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ContactCommunicationModel.
		 * @return {ContactCommunicationModel} Updated contact communication model.
		 */
		ContactCommunications_PatchContactCommunication(guid: string, requestBody: Array<PatchOperation>): Observable<ContactCommunicationModel> {
			return this.http.patch<ContactCommunicationModel>(this.baseUri + 'v1/contactcommunications/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the contact persons.
		 * Get v1/contactpersons
		 * @param {boolean} active If not given, return all Contact persons, if given as true return only active Contact persons, if given as false returns only inactive Contact persons.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from contact person's name or communication method (i.e. phone number or email address).
		 * @param {Array<KeyValuePairOfStringAndObject>} searchCriterias Optional: Search criterias.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=FirstName&sortings[0].value=Desc &sortings[1].key=LastName&sortings[1].value=Asc".
		 * @param {Date} changedSince Optional: Get contact persons that have been added or changed after this date time (greater or equal).
		 * @return {Array<ContactModel>} List of contacts for a customer.
		 */
		Contacts_GetContacts(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, searchCriterias: Array<KeyValuePairOfStringAndObject> | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined, changedSince: Date | null | undefined): Observable<Array<ContactModel>> {
			return this.http.get<Array<ContactModel>>(this.baseUri + 'v1/contactpersons?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&' + searchCriterias?.map(z => `searchCriterias=${z}`).join('&') + '&' + sortings?.map(z => `sortings=${z}`).join('&') + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a contact.
		 * Post v1/contactpersons
		 * @param {ContactModel} requestBody ContactModel.
		 * @return {void} 
		 */
		Contacts_PostContact(requestBody: ContactModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/contactpersons', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get contact person's address
		 * Get v1/contactpersons/{contactGuid}/addresses
		 * @param {string} contactGuid ID for the contact person
		 * @return {Array<AddressModel>} 
		 */
		Addresses_GetContactAddress(contactGuid: string): Observable<Array<AddressModel>> {
			return this.http.get<Array<AddressModel>>(this.baseUri + 'v1/contactpersons/' + (contactGuid == null ? '' : encodeURIComponent(contactGuid)) + '/addresses', {});
		}

		/**
		 * Deletes a contact.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/contactpersons/{guid}
		 * @param {string} guid GUID used to delete the contact.
		 * @return {void} 
		 */
		Contacts_DeleteContact(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/contactpersons/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get contact by ID.
		 * Get v1/contactpersons/{guid}
		 * @param {string} guid GUID used to get the contact.
		 * @return {ContactModel} Contact.
		 */
		Contacts_GetContact(guid: string): Observable<ContactModel> {
			return this.http.get<ContactModel>(this.baseUri + 'v1/contactpersons/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an contact or a part of it.
		 * Patch v1/contactpersons/{guid}
		 * @param {string} guid ID of the contact.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ContactModel.
		 * @return {Array<ContactModel>} List of updated contact persons.
		 */
		Contacts_PatchContact(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ContactModel>> {
			return this.http.patch<Array<ContactModel>>(this.baseUri + 'v1/contactpersons/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get contact roles.
		 * Get v1/contactroles
		 * @param {boolean} active If not given, return all contact roles, if given as true return only active contact roles, if given as false returns only inactive contact roles.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from contact role name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @return {Array<ContactRoleModel>} All the contact roles.
		 */
		ContactRoles_GetContactRoles(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined): Observable<Array<ContactRoleModel>> {
			return this.http.get<Array<ContactRoleModel>>(this.baseUri + 'v1/contactroles?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount, {});
		}

		/**
		 * Insert a contact role.
		 * Post v1/contactroles
		 * @param {ContactRoleModel} requestBody ContactRoleModel.
		 * @return {void} 
		 */
		ContactRoles_PostContactRole(requestBody: ContactRoleModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/contactroles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a contact role.
		 * Returns: No Content (204) if succeeded. Not found (404) if contact role can't be found.
		 * Delete v1/contactroles/{guid}
		 * @param {string} guid ID for the contact role to delete.
		 * @param {string} moveUsagesToGuid Optional: ID of the contact role to which to move usages of this contact role. Default null. If contact role is in use and usages aren't moved the deletion might fail.
		 * @return {void} 
		 */
		ContactRoles_DeleteContactRole(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/contactroles/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get contact role by ID.
		 * Get v1/contactroles/{guid}
		 * @param {string} guid Id used to get the contact role.
		 * @return {ContactRoleModel} ContactRoleModel.
		 */
		ContactRoles_GetContactRole(guid: string): Observable<ContactRoleModel> {
			return this.http.get<ContactRoleModel>(this.baseUri + 'v1/contactroles/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a contact role or a part of it.
		 * Patch v1/contactroles/{guid}
		 * @param {string} guid ID of the contact role.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ContactRoleModel.
		 * @return {Array<ContactRoleModel>} list of updated contact role.
		 */
		ContactRoles_PatchContactRole(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ContactRoleModel>> {
			return this.http.patch<Array<ContactRoleModel>>(this.baseUri + 'v1/contactroles/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all communications for a contact.
		 * Get v1/contacts/{contactGuid}/contactcommunications
		 * @param {string} contactGuid Whose communications are requested.
		 * @param {boolean} active If not given, return all contact communications, if given as true return only active contact communications, if given as false returns only inactive contact communications.
		 * @return {Array<ContactCommunicationModel>} All the contact communications.
		 */
		ContactCommunications_GetCommunications2(contactGuid: string, active: boolean | null | undefined): Observable<Array<ContactCommunicationModel>> {
			return this.http.get<Array<ContactCommunicationModel>>(this.baseUri + 'v1/contacts/' + (contactGuid == null ? '' : encodeURIComponent(contactGuid)) + '/contactcommunications&active=' + active, {});
		}

		/**
		 * Get all the keywords for contact.
		 * Get v1/contacts/{contactGuid}/keywords
		 * @param {string} contactGuid ID of the user whose keywords are requested.
		 * @param {boolean} active If not given, return all Keywords, if given as true return only active Keywords, if given as false returns only inactive Keywords.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Keyword&sortings[0].value=Desc".
		 * @return {Array<KeywordModel>} Keywords.
		 */
		Keywords_GetContactKeywords(contactGuid: string, active: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<KeywordModel>> {
			return this.http.get<Array<KeywordModel>>(this.baseUri + 'v1/contacts/' + (contactGuid == null ? '' : encodeURIComponent(contactGuid)) + '/keywords&active=' + active + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Delete a keyword from the contact
		 * Returns: No Content (204) if succeeded. Not found (404) if the keyword or the link can't be found.
		 * Delete v1/contacts/{contactGuid}/keywords/{guid}
		 * @return {void} 
		 */
		Keywords_DeleteContactKeyword(contactGuid: string, guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/contacts/' + (contactGuid == null ? '' : encodeURIComponent(contactGuid)) + '/keywords/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Link existing keyword to contact
		 * Post v1/contacts/{contactGuid}/keywords/{guid}
		 * @return {void} 
		 */
		Keywords_LinkKeywordToContact(contactGuid: string, guid: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/contacts/' + (contactGuid == null ? '' : encodeURIComponent(contactGuid)) + '/keywords/' + (guid == null ? '' : encodeURIComponent(guid)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get cost accounts.
		 * Get v1/costaccounts
		 * @param {boolean} active If not given, return all cost accounts, if given as true return only active cost accounts, if given as false returns only inactive cost accounts.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from cost account name or identifier.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc &sortings[1].key=Identifier&sortings[1].value=Asc".
		 * @return {Array<CostAccountModel>} All the cost accounts.
		 */
		CostAccounts_GetCostAccounts(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<CostAccountModel>> {
			return this.http.get<Array<CostAccountModel>>(this.baseUri + 'v1/costaccounts?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a cost account.
		 * Post v1/costaccounts
		 * @param {CostAccountModel} requestBody CostAccountModel.
		 * @return {void} 
		 */
		CostAccounts_PostCostAccount(requestBody: CostAccountModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/costaccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a cost account.
		 * Returns: No Content (204) if succeeded. Not found (404) if cost account can't be found.
		 * Delete v1/costaccounts/{guid}
		 * @param {string} guid ID for the cost account to delete.
		 * @return {void} 
		 */
		CostAccounts_DeleteCostAccount(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/costaccounts/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get cost account by Guid.
		 * Get v1/costaccounts/{guid}
		 * @param {string} guid Cost account's guid.
		 * @return {CostAccountModel} CostAccountModel.
		 */
		CostAccounts_GetCostAccount(guid: string): Observable<CostAccountModel> {
			return this.http.get<CostAccountModel>(this.baseUri + 'v1/costaccounts/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a cost account or a part of it.
		 * Patch v1/costaccounts/{guid}
		 * @param {string} guid ID of the cost account.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of CostAccountModel.
		 * @return {Array<CostAccountModel>} list of updated cost account.
		 */
		CostAccounts_PatchCostAccount(guid: string, requestBody: Array<PatchOperation>): Observable<Array<CostAccountModel>> {
			return this.http.patch<Array<CostAccountModel>>(this.baseUri + 'v1/costaccounts/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get cost centers.
		 * Get v1/costcenters
		 * @param {boolean} active If not given, return all cost centers, if given as true return only active cost centers, if given as false returns only inactive cost centers.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from cost center name or identifier.
		 * @param {Date} changedSince Optional: Get cost centers that have been added or changed after this date time (greater or equal).
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc".
		 * @param {string} identifier Optional: Identifier of the cost center.
		 * @param {string} name Optional: Name of the cost center.
		 * @return {Array<CostCenterModel>} All the cost centers.
		 */
		CostCenters_GetCostCenters(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, changedSince: Date | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined, identifier: string | null | undefined, name: string | null | undefined): Observable<Array<CostCenterModel>> {
			return this.http.get<Array<CostCenterModel>>(this.baseUri + 'v1/costcenters?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&changedSince=' + changedSince?.toISOString() + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&') + '&identifier=' + (identifier == null ? '' : encodeURIComponent(identifier)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Insert a cost center.
		 * Post v1/costcenters
		 * @param {CostCenterModel} requestBody CostCenterModel.
		 * @return {void} 
		 */
		CostCenters_PostCostCenter(requestBody: CostCenterModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/costcenters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a cost center.
		 * Returns: No Content (204) if succeeded. Not found (404) if cost center can't be found.
		 * Delete v1/costcenters/{guid}
		 * @param {string} guid ID for the cost center to delete.
		 * @return {void} 
		 */
		CostCenters_DeleteCostCenter(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/costcenters/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get cost center by ID.
		 * Get v1/costcenters/{guid}
		 * @param {string} guid Id used to get the cost center.
		 * @return {CostCenterModel} CostCenterModel.
		 */
		CostCenters_GetCostCenter(guid: string): Observable<CostCenterModel> {
			return this.http.get<CostCenterModel>(this.baseUri + 'v1/costcenters/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a cost center or a part of it.
		 * Patch v1/costcenters/{guid}
		 * @param {string} guid ID of the cost center.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of CostCenterModel.
		 * @return {Array<CostCenterModel>} list of updated cost center.
		 */
		CostCenters_PatchCostCenter(guid: string, requestBody: Array<PatchOperation>): Observable<Array<CostCenterModel>> {
			return this.http.patch<Array<CostCenterModel>>(this.baseUri + 'v1/costcenters/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the Currencies
		 * Get v1/currencies
		 * @param {boolean} active If not given, return all Currencies, if given as true return only active Currencies, if given as false returns only inactive Currencies.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text based search applied to the result. Matches currency name and code.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc". Using additional sorting fields "CreatedDate" and / or "LastUpdatedDate" as keys sort currencies without a timestamp provided when sorting with other date fields.
		 * @return {Array<CurrencyOutputModel>} All the Currencies
		 */
		Currencies_GetCurrencies(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<CurrencyOutputModel>> {
			return this.http.get<Array<CurrencyOutputModel>>(this.baseUri + 'v1/currencies?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Get currency by ID.
		 * Get v1/currencies/{guid}
		 * @param {string} guid GUID used to get the currency.
		 * @return {CurrencyOutputModel} CurrencyModel.
		 */
		Currencies_GetCurrency(guid: string): Observable<CurrencyOutputModel> {
			return this.http.get<CurrencyOutputModel>(this.baseUri + 'v1/currencies/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an currency or a part of it.
		 * Patch v1/currencies/{guid}
		 * @param {string} guid ID of the currency.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of CurrencyModel.
		 * @return {Array<CurrencyOutputModel>} List of updated currencies.
		 */
		Currencies_PatchCurrency(guid: string, requestBody: Array<PatchOperation>): Observable<Array<CurrencyOutputModel>> {
			return this.http.patch<Array<CurrencyOutputModel>>(this.baseUri + 'v1/currencies/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Insert a customer country setting.
		 * Post v1/customercountrysettings
		 * @param {CustomerCountrySettingsInputModel} requestBody CustomerCountrySettingsModel.
		 * @return {void} 
		 */
		CustomerCountrySettings_PostCustomerCountrySettings(requestBody: CustomerCountrySettingsInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/customercountrysettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a customer country setting.
		 * Returns: No Content (204) if succeeded. Not found (404) if customer country setting can't be found.
		 * Delete v1/customercountrysettings/{guid}
		 * @param {string} guid GUID used to delete the customer country setting.
		 * @return {void} 
		 */
		CustomerCountrySettings_DeleteCustomerCountrySetting(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/customercountrysettings/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update (Patch) a customer country setting.
		 * Patch v1/customercountrysettings/{guid}
		 * @param {string} guid ID of the customer country setting.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of CustomerCountrySettingsModel.
		 * @return {Array<CustomerCountrySettingsOutputModel>} List of updated customer country settings.
		 */
		CustomerCountrySettings_PatchCustomerCountrySettings(guid: string, requestBody: Array<PatchOperation>): Observable<Array<CustomerCountrySettingsOutputModel>> {
			return this.http.patch<Array<CustomerCountrySettingsOutputModel>>(this.baseUri + 'v1/customercountrysettings/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all Customer Market Segments.
		 * Get v1/customermarketsegments
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from customer market segment name.
		 * @param {string} parentMarketSegmentGuid Optional: Fetches all children of a parent based on parent market segment guid.
		 * @param {boolean} includeParentLevel Optional: Returns only child segments when false. Has no effect if parentMarketSegmentGuid parameter is defined. Default = true.
		 * @return {Array<CustomerMarketSegmentModel>} List of Customer Market Segments.
		 */
		CustomerMarketSegments_GetAllCustomerMarketSegments(firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, parentMarketSegmentGuid: string | null | undefined, includeParentLevel: boolean | null | undefined): Observable<Array<CustomerMarketSegmentModel>> {
			return this.http.get<Array<CustomerMarketSegmentModel>>(this.baseUri + 'v1/customermarketsegments?firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&parentMarketSegmentGuid=' + (parentMarketSegmentGuid == null ? '' : encodeURIComponent(parentMarketSegmentGuid)) + '&includeParentLevel=' + includeParentLevel, {});
		}

		/**
		 * Add a market segment for customer.
		 * Post v1/customermarketsegments
		 * @param {CustomerMarketSegmentModel} requestBody CustomerMarketSegmentModel.
		 * @return {void} 
		 */
		CustomerMarketSegments_PostCustomerMarketSegment(requestBody: CustomerMarketSegmentModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/customermarketsegments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a customer market segment.
		 * Returns: No Content (204) if succeeded. Not found (404) if customer market segment can't be found.
		 * Delete v1/customermarketsegments/{guid}
		 * @param {string} guid ID for the customer market segment to delete.
		 * @return {void} 
		 */
		CustomerMarketSegments_DeleteCustomerMarketSegment(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/customermarketsegments/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the customer market segment.
		 * Get v1/customermarketsegments/{guid}
		 * @param {string} guid Customer market segment guid.
		 * @return {CustomerMarketSegmentModel} List of Customer Market Segments.
		 */
		CustomerMarketSegments_GetCustomerMarketSegment(guid: string): Observable<CustomerMarketSegmentModel> {
			return this.http.get<CustomerMarketSegmentModel>(this.baseUri + 'v1/customermarketsegments/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get all the customers
		 * Get v1/customers
		 * @param {number} rowCount Optional: How many rows to fetch.
		 * @param {boolean} isActive If not given, return all Customers, if given as true return only active Customers, if given as false returns only inactive Customers.
		 * @param {Array<string>} customerOwnerGuids Optional: List of customer owner ids to search for. Default all.
		 * @param {boolean} isInternal Optional: When true returns only internal customer
		 * @param {Array<number>} numbers Optional: List of customer numbers.
		 * @param {Date} changedSince Optional: Get customers that have been added or changed after this date time (greater or equal).
		 * @param {Array<string>} emailAddresses Optional: Get customers where email address matches to any provided email address
		 * @param {Array<string>} customerNames Optional: Get customers where customer name matches to any provided customer name
		 * @return {Array<CustomerModel>} All the customers
		 */
		Customers_GetCustomers(pageToken: string | null | undefined, rowCount: number | null | undefined, isActive: boolean | null | undefined, customerOwnerGuids: Array<string> | null | undefined, isInternal: boolean | null | undefined, numbers: Array<number> | null | undefined, changedSince: Date | null | undefined, emailAddresses: Array<string> | null | undefined, customerNames: Array<string> | null | undefined): Observable<Array<CustomerModel>> {
			return this.http.get<Array<CustomerModel>>(this.baseUri + 'v1/customers?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&isActive=' + isActive + '&' + customerOwnerGuids?.map(z => `customerOwnerGuids=${encodeURIComponent(z)}`).join('&') + '&isInternal=' + isInternal + '&' + numbers?.map(z => `numbers=${z}`).join('&') + '&changedSince=' + changedSince?.toISOString() + '&' + emailAddresses?.map(z => `emailAddresses=${encodeURIComponent(z)}`).join('&') + '&' + customerNames?.map(z => `customerNames=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Insert a customer.
		 * Post v1/customers
		 * @param {CustomerModel} requestBody CustomerModel.
		 * @return {void} 
		 */
		Customers_PostCustomer(requestBody: CustomerModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/customers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the customer custom properties.
		 * Get v1/customers/customproperties
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} active Optional: Get only active or inactive customer properties.
		 * @param {string} textToSearch Optional: Text to search from custom property name.
		 * @param {boolean} isInUse Optional: Is the customer property used in any custom property usage.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc".
		 * @return {Array<CustomPropertyModel>} 
		 */
		CustomerCustomProperties_GetCustomerCustomProperties(firstRow: number | null | undefined, rowCount: number | null | undefined, active: boolean | null | undefined, textToSearch: string | null | undefined, isInUse: boolean | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<CustomPropertyModel>> {
			return this.http.get<Array<CustomPropertyModel>>(this.baseUri + 'v1/customers/customproperties?firstRow=' + firstRow + '&rowCount=' + rowCount + '&active=' + active + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&isInUse=' + isInUse + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a customer custom property.
		 * Post v1/customers/customproperties
		 * @param {CustomPropertyModel} requestBody CustomerCustomPropertyModel.
		 * @return {void} 
		 */
		CustomerCustomProperties_PostCustomerCustomProperty(requestBody: CustomPropertyModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/customers/customproperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert a customer custom property selection item.
		 * Post v1/customers/customproperties/customercustompropertyselectionitems
		 * @param {CustomerCustomPropertySelectionItemInputModel} requestBody CustomPropertySelectionItemInputModel.
		 * @return {void} 
		 */
		CustomerCustomPropertySelectionItems_PostCustomerCustomPropertySelectionItem(requestBody: CustomerCustomPropertySelectionItemInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/customers/customproperties/customercustompropertyselectionitems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a customer custom property selection item.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/customers/customproperties/customercustompropertyselectionitems/{guid}
		 * @param {string} guid GUID used to delete the customer custom property selection item.
		 * @return {void} 
		 */
		CustomerCustomPropertySelectionItems_DeleteCustomerCustomPropertySelectionItem(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/customers/customproperties/customercustompropertyselectionitems/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get customer custom property selection item by ID.
		 * Get v1/customers/customproperties/customercustompropertyselectionitems/{guid}
		 * @param {string} guid Id used to get the customer custom property selection item.
		 * @return {CustomerCustomPropertySelectionItemOutputModel} 
		 */
		CustomerCustomPropertySelectionItems_GetCustomerCustomPropertySelectionItem(guid: string): Observable<CustomerCustomPropertySelectionItemOutputModel> {
			return this.http.get<CustomerCustomPropertySelectionItemOutputModel>(this.baseUri + 'v1/customers/customproperties/customercustompropertyselectionitems/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a customer custom property selection item or a part of it.
		 * Patch v1/customers/customproperties/customercustompropertyselectionitems/{guid}
		 * @param {string} guid ID of the customer custom property selection item.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of CustomerCustomPropertySelectionItemInputModel.
		 * @return {Array<CustomerCustomPropertySelectionItemOutputModel>} List of updated customer custom properties.
		 */
		CustomerCustomPropertySelectionItems_PatchCustomerCustomPropertySelectionItem(guid: string, requestBody: Array<PatchOperation>): Observable<Array<CustomerCustomPropertySelectionItemOutputModel>> {
			return this.http.patch<Array<CustomerCustomPropertySelectionItemOutputModel>>(this.baseUri + 'v1/customers/customproperties/customercustompropertyselectionitems/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the customer custom properties.
		 * Get v1/customers/customproperties/{customPropertyGuid}/customercustompropertyselectionitems
		 * @param {string} customPropertyGuid Custom property id used to get the customer custom property selection items.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} isActive Optional: Get only active or inactive selection items.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {Date} changedSince Optional: Get custom property selection items that have been added or changed after this date time (greater or equal).
		 * @return {Array<CustomerCustomPropertySelectionItemOutputModel>} 
		 */
		CustomerCustomPropertySelectionItems_GetCustomerCustomPropertySelectionItems(customPropertyGuid: string, rowCount: number | null | undefined, isActive: boolean | null | undefined, pageToken: string | null | undefined, changedSince: Date | null | undefined): Observable<Array<CustomerCustomPropertySelectionItemOutputModel>> {
			return this.http.get<Array<CustomerCustomPropertySelectionItemOutputModel>>(this.baseUri + 'v1/customers/customproperties/' + (customPropertyGuid == null ? '' : encodeURIComponent(customPropertyGuid)) + '/customercustompropertyselectionitems&rowCount=' + rowCount + '&isActive=' + isActive + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Deletes a customer custom property.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/customers/customproperties/{guid}
		 * @param {string} guid GUID used to delete the customer custom property.
		 * @return {void} 
		 */
		CustomerCustomProperties_DeleteCustomerCustomProperty(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/customers/customproperties/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get customer custom property by ID.
		 * Get v1/customers/customproperties/{guid}
		 * @param {string} guid Id used to get the customer custom property.
		 * @return {CustomPropertyModel} 
		 */
		CustomerCustomProperties_GetCustomerCustomProperty(guid: string): Observable<CustomPropertyModel> {
			return this.http.get<CustomPropertyModel>(this.baseUri + 'v1/customers/customproperties/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a customer custom property or a part of it.
		 * Patch v1/customers/customproperties/{guid}
		 * @param {string} guid ID of the customer custom property Can also be comma separate list of IDs to patch multiple customer custom properties with one call. When multiple IDs are given, returns model which has list of succeeded customer custom properties and list of errors.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of CustomerCustomPropertyModel.
		 * @return {Array<CustomPropertyModel>} List of updated customer custom properties.
		 */
		CustomerCustomProperties_PatchCustomerCustomProperty(guid: string, requestBody: Array<PatchOperation>): Observable<Array<CustomPropertyModel>> {
			return this.http.patch<Array<CustomPropertyModel>>(this.baseUri + 'v1/customers/customproperties/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Insert a customer custom value.
		 * Post v1/customers/customvalues
		 * @param {CustomerCustomValueModel} requestBody CustomerCustomValueModel.
		 * @return {void} 
		 */
		CustomerCustomValues_PostCustomerCustomValue(requestBody: CustomerCustomValueModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/customers/customvalues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a customer custom value.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/customers/customvalues/{guid}
		 * @param {string} guid GUID used to delete the customer custom value.
		 * @return {void} 
		 */
		CustomerCustomValues_DeleteCustomerCustomValue(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/customers/customvalues/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get customer custom value by ID.
		 * Get v1/customers/customvalues/{guid}
		 * @param {string} guid Id used to get the customer custom value.
		 * @return {CustomerCustomValueModel} 
		 */
		CustomerCustomValues_GetCustomerCustomValue(guid: string): Observable<CustomerCustomValueModel> {
			return this.http.get<CustomerCustomValueModel>(this.baseUri + 'v1/customers/customvalues/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a customer custom value or a part of it.
		 * Patch v1/customers/customvalues/{guid}
		 * @param {string} guid ID of the customer custom value Can also be comma separate list of IDs to patch multiple customer custom values with one call. When multiple IDs are given, returns model which has list of succeeded customer custom values and list of errors.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of CustomerCustomValueModel.
		 * @return {Array<CustomerCustomValueModel>} List of updated customer custom values.
		 */
		CustomerCustomValues_PatchCustomerCustomValue(guid: string, requestBody: Array<PatchOperation>): Observable<Array<CustomerCustomValueModel>> {
			return this.http.patch<Array<CustomerCustomValueModel>>(this.baseUri + 'v1/customers/customvalues/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get customer's addresses
		 * Get v1/customers/{customerGuid}/addresses
		 * @param {string} customerGuid ID for the customer.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @return {Array<AddressModel>} Addresses for the customer
		 */
		Addresses_GetCustomerAddresses(customerGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined, calculateRowCount: boolean | null | undefined): Observable<Array<AddressModel>> {
			return this.http.get<Array<AddressModel>>(this.baseUri + 'v1/customers/' + (customerGuid == null ? '' : encodeURIComponent(customerGuid)) + '/addresses&firstRow=' + firstRow + '&rowCount=' + rowCount + '&calculateRowCount=' + calculateRowCount, {});
		}

		/**
		 * Insert an address.
		 * Post v1/customers/{customerGuid}/addresses
		 * @param {string} customerGuid ID of the customer to add the address for.
		 * @param {AddressModel} requestBody AddressModel.
		 * @return {void} 
		 */
		Addresses_PostCustomerAddress(customerGuid: string, requestBody: AddressModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/customers/' + (customerGuid == null ? '' : encodeURIComponent(customerGuid)) + '/addresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the contact persons for a customer.
		 * Get v1/customers/{customerGuid}/contactpersons
		 * @param {string} customerGuid Customer guid used to get the contact persons.
		 * @param {boolean} active If not given, return all Contact persons, if given as true return only active Contact persons, if given as false returns only inactive Contact persons.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from contact person's name or communication method (i.e. phone number or email address).
		 * @return {Array<ContactModel>} List of contacts for a customer.
		 */
		Contacts_GetCustomerContacts(customerGuid: string, active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined): Observable<Array<ContactModel>> {
			return this.http.get<Array<ContactModel>>(this.baseUri + 'v1/customers/' + (customerGuid == null ? '' : encodeURIComponent(customerGuid)) + '/contactpersons&active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)), {});
		}

		/**
		 * Get all the country settings for a customer.
		 * Get v1/customers/{customerGuid}/customercountrysettings
		 * @param {string} customerGuid GUID of the customer.
		 * @return {Array<CustomerCountrySettingsOutputModel>} All the Currencies.
		 */
		CustomerCountrySettings_GetCustomerCountrySettings(customerGuid: string): Observable<Array<CustomerCountrySettingsOutputModel>> {
			return this.http.get<Array<CustomerCountrySettingsOutputModel>>(this.baseUri + 'v1/customers/' + (customerGuid == null ? '' : encodeURIComponent(customerGuid)) + '/customercountrysettings', {});
		}

		/**
		 * Get the Market Segments for a customer.
		 * Get v1/customers/{customerGuid}/customermarketsegments
		 * @param {string} customerGuid ID of the customer.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} includeMarketSegmentsFromRegistry Optional: Return also the markets segments that are not in use for the customer.
		 * @return {Array<CustomerMarketSegmentModel>} List of Customer Market Segments.
		 */
		CustomerMarketSegments_GetCustomerMarketSegments(customerGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined, includeMarketSegmentsFromRegistry: boolean | null | undefined): Observable<Array<CustomerMarketSegmentModel>> {
			return this.http.get<Array<CustomerMarketSegmentModel>>(this.baseUri + 'v1/customers/' + (customerGuid == null ? '' : encodeURIComponent(customerGuid)) + '/customermarketsegments&firstRow=' + firstRow + '&rowCount=' + rowCount + '&includeMarketSegmentsFromRegistry=' + includeMarketSegmentsFromRegistry, {});
		}

		/**
		 * Get the customer sales notes.
		 * Get v1/customers/{customerGuid}/customersalesnotes
		 * @param {string} customerGuid Customer guid used to get the notes.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get sales notes that have been added or changed after this date time (greater or equal).
		 * @return {Array<CustomerSalesNoteOutputModel>} List of sales notes for a customer.
		 */
		SalesNotes_GetCustomerSalesNotes(customerGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<CustomerSalesNoteOutputModel>> {
			return this.http.get<Array<CustomerSalesNoteOutputModel>>(this.baseUri + 'v1/customers/' + (customerGuid == null ? '' : encodeURIComponent(customerGuid)) + '/customersalesnotes&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Get the customer custom values.
		 * Get v1/customers/{customerGuid}/customvalues
		 * @param {string} customerGuid ID of the customer.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} active Optional: Get only values of active or inactive customer custom properties.
		 * @param {Array<string>} target List of target for which to get the values.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc".
		 * @return {Array<CustomerCustomValueModel>} 
		 */
		CustomerCustomValues_GetCustomerCustomValues(customerGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined, active: boolean | null | undefined, target: Array<string> | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<CustomerCustomValueModel>> {
			return this.http.get<Array<CustomerCustomValueModel>>(this.baseUri + 'v1/customers/' + (customerGuid == null ? '' : encodeURIComponent(customerGuid)) + '/customvalues&firstRow=' + firstRow + '&rowCount=' + rowCount + '&active=' + active + '&' + target?.map(z => `target=${encodeURIComponent(z)}`).join('&') + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Get customer's projects
		 * Get v1/customers/{customerGuid}/projects
		 * @param {string} customerGuid Id of the customer.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} isBillable Optional: When true fetch projects that have something to bill, when false nothing to bill. Default nothing = all.
		 * @return {Array<ProjectOutputModel>} All the projects for the customer
		 */
		Projects_GetCustomerProjects(customerGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, isBillable: boolean | null | undefined, currencyGuids: Array<string> | null | undefined, projectGuids: Array<string> | null | undefined, projectKeywordGuids: Array<string> | null | undefined, projectStatusTypeGuids: Array<string> | null | undefined, salesPersonGuids: Array<string> | null | undefined, projectOwnerGuids: Array<string> | null | undefined, businessUnitGuids: Array<string> | null | undefined, minimumBillableAmount: number | null | undefined, customerOwnerGuids: Array<string> | null | undefined, invoiceableDate: Date | null | undefined, marketSegmentationGuids: Array<string> | null | undefined, salesStatusTypeGuids: Array<string> | null | undefined, isClosed: boolean | null | undefined, hasRecurringFees: boolean | null | undefined, companyCurrencyGuids: Array<string> | null | undefined, projectMemberUserGuids: Array<string> | null | undefined, numbers: Array<number> | null | undefined): Observable<Array<ProjectOutputModel>> {
			return this.http.get<Array<ProjectOutputModel>>(this.baseUri + 'v1/customers/' + (customerGuid == null ? '' : encodeURIComponent(customerGuid)) + '/projects&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&isBillable=' + isBillable + '&' + currencyGuids?.map(z => `currencyGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectGuids?.map(z => `projectGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectKeywordGuids?.map(z => `projectKeywordGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectStatusTypeGuids?.map(z => `projectStatusTypeGuids=${encodeURIComponent(z)}`).join('&') + '&' + salesPersonGuids?.map(z => `salesPersonGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectOwnerGuids?.map(z => `projectOwnerGuids=${encodeURIComponent(z)}`).join('&') + '&' + businessUnitGuids?.map(z => `businessUnitGuids=${encodeURIComponent(z)}`).join('&') + '&minimumBillableAmount=' + minimumBillableAmount + '&' + customerOwnerGuids?.map(z => `customerOwnerGuids=${encodeURIComponent(z)}`).join('&') + '&invoiceableDate=' + invoiceableDate?.toISOString() + '&' + marketSegmentationGuids?.map(z => `marketSegmentationGuids=${encodeURIComponent(z)}`).join('&') + '&' + salesStatusTypeGuids?.map(z => `salesStatusTypeGuids=${encodeURIComponent(z)}`).join('&') + '&isClosed=' + isClosed + '&hasRecurringFees=' + hasRecurringFees + '&' + companyCurrencyGuids?.map(z => `companyCurrencyGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectMemberUserGuids?.map(z => `projectMemberUserGuids=${encodeURIComponent(z)}`).join('&') + '&' + numbers?.map(z => `numbers=${z}`).join('&'), {});
		}

		/**
		 * Get the sales notes by customer guid.
		 * Get v1/customers/{customerGuid}/salesnotes
		 * @param {string} customerGuid Customer guid used to get the notes.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get sales notes that have been added or changed after this date time (greater or equal).
		 * @return {Array<SalesNoteOutputModel>} List of sales notes for a customer.
		 */
		SalesNotes_GetAllCustomerSalesNotes(customerGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<SalesNoteOutputModel>> {
			return this.http.get<Array<SalesNoteOutputModel>>(this.baseUri + 'v1/customers/' + (customerGuid == null ? '' : encodeURIComponent(customerGuid)) + '/salesnotes&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Deletes a customer.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/customers/{guid}
		 * @param {string} guid GUID used to delete the customer.
		 * @return {void} 
		 */
		Customers_DeleteCustomer(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/customers/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get customer by GUID.
		 * Get v1/customers/{guid}
		 * @param {string} guid ID used to get the customer.
		 * @return {CustomerModel} 
		 */
		Customers_GetCustomer(guid: string): Observable<CustomerModel> {
			return this.http.get<CustomerModel>(this.baseUri + 'v1/customers/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an customer or a part of it.
		 * Patch v1/customers/{guid}
		 * @param {string} guid ID of the customer.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of CustomerModel.
		 * @return {Array<CustomerModel>} List of updated customers.
		 */
		Customers_PatchCustomer(guid: string, requestBody: Array<PatchOperation>): Observable<Array<CustomerModel>> {
			return this.http.patch<Array<CustomerModel>>(this.baseUri + 'v1/customers/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Insert a customer sales note.
		 * Post v1/customersalesnotes
		 * @param {CustomerSalesNoteInputModel} requestBody SalesNoteOutputModel
		 * @return {void} 
		 */
		SalesNotes_PostCustomerSalesNotes(requestBody: CustomerSalesNoteInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/customersalesnotes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a customer sales note.
		 * Returns: No Content (204) if succeeded. OK (200) if note has child notes and can't be deleted. It is marked as IsDeleted = true. Not found (404) if note can't be found.
		 * Delete v1/customersalesnotes/{guid}
		 * @param {string} guid GUID used to delete the customer sales note.
		 * @return {void} 
		 */
		SalesNotes_DeleteCustomerSalesNote(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/customersalesnotes/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get customer sales note by ID.
		 * Get v1/customersalesnotes/{guid}
		 * @param {string} guid GUID used to get the customer sales note.
		 * @return {CustomerSalesNoteOutputModel} ProjectNote
		 */
		SalesNotes_GetCustomerSalesNote(guid: string): Observable<CustomerSalesNoteOutputModel> {
			return this.http.get<CustomerSalesNoteOutputModel>(this.baseUri + 'v1/customersalesnotes/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a customer sales note or a part of it.
		 * Patch v1/customersalesnotes/{guid}
		 * @param {string} guid ID of the customer sales note.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of customer sales note model.
		 * @return {Array<CustomerSalesNoteOutputModel>} list of updated sales notes.
		 */
		SalesNotes_PatchCustomerSalesNote(guid: string, requestBody: Array<PatchOperation>): Observable<Array<CustomerSalesNoteOutputModel>> {
			return this.http.patch<Array<CustomerSalesNoteOutputModel>>(this.baseUri + 'v1/customersalesnotes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all deleted phase members
		 * Use root phase to get project members.
		 * Get v1/deletedphasemembers
		 * @param {Date} deletedSince Optional: Get phase members that have been added or changed after this date time (greater or equal).
		 * @param {string} pageToken Optional: Page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch.
		 * @param {boolean} isUserActive Optional: Is the user active. Default nothing = all.
		 * @return {Array<DeletedPhaseMemberOutputModel>} All the phase members
		 */
		PhaseMembers_GetAllDeletedPhaseMembers(deletedSince: Date | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined, isUserActive: boolean | null | undefined): Observable<Array<DeletedPhaseMemberOutputModel>> {
			return this.http.get<Array<DeletedPhaseMemberOutputModel>>(this.baseUri + 'v1/deletedphasemembers?deletedSince=' + deletedSince?.toISOString() + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&isUserActive=' + isUserActive, {});
		}

		/**
		 * Get the deleted project fees.
		 * Get v1/deletedprojectfees
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Array<string>} projectGuids Optional: ID of the project for the deleted project fees to be fetched. If not provided, returns for all projects. Default all.
		 * @param {Array<string>} userGuids Optional: ID of the user. If not provided, returns for all users. Default all.
		 * @param {Date} deletedSince Optional: Get project fees that have been deleted after this date time (greater or equal).
		 * @return {Array<DeletedProjectFeeModel>} 
		 */
		ProjectFees_GetDeletedProjectFees(pageToken: string | null | undefined, rowCount: number | null | undefined, projectGuids: Array<string> | null | undefined, userGuids: Array<string> | null | undefined, deletedSince: Date | null | undefined): Observable<Array<DeletedProjectFeeModel>> {
			return this.http.get<Array<DeletedProjectFeeModel>>(this.baseUri + 'v1/deletedprojectfees?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&' + projectGuids?.map(z => `projectGuids=${encodeURIComponent(z)}`).join('&') + '&' + userGuids?.map(z => `userGuids=${encodeURIComponent(z)}`).join('&') + '&deletedSince=' + deletedSince?.toISOString(), {});
		}

		/**
		 * Get the deleted project travel expenses.
		 * Get v1/deletedprojecttravelexpenses
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Array<string>} projectGuid Optional: ID of the project for the deleted project travel expenses to be fetched. If not provided, returns for all projects. Default all.
		 * @param {Array<string>} userGuid Optional: ID of the user. If not provided, returns for all users. Default all.
		 * @param {Date} deletedSince Optional: Get project travel expenses that have been deleted after this date time (greater or equal).
		 * @return {Array<DeletedProjectTravelExpenseModel>} 
		 */
		ProjectTravelExpenses_GetDeletedProjectTravelExpenses(pageToken: string | null | undefined, rowCount: number | null | undefined, projectGuid: Array<string> | null | undefined, userGuid: Array<string> | null | undefined, deletedSince: Date | null | undefined): Observable<Array<DeletedProjectTravelExpenseModel>> {
			return this.http.get<Array<DeletedProjectTravelExpenseModel>>(this.baseUri + 'v1/deletedprojecttravelexpenses?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&' + projectGuid?.map(z => `projectGuid=${encodeURIComponent(z)}`).join('&') + '&' + userGuid?.map(z => `userGuid=${encodeURIComponent(z)}`).join('&') + '&deletedSince=' + deletedSince?.toISOString(), {});
		}

		/**
		 * Get the deleted work hours.
		 * Get v1/deletedworkhours
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Array<string>} projectGuids Optional: ID of the project for the deleted work hours to be fetched. If not provided, returns for all projects. Default all.
		 * @param {Array<string>} userGuids Optional: ID of the user. If not provided, returns for all users. Default all.
		 * @param {Date} deletedSince Optional: Get work hours that have been deleted after this date time (greater or equal).
		 * @return {Array<DeletedWorkHourModel>} 
		 */
		WorkHours_GetDeletedWorkHours(pageToken: string | null | undefined, rowCount: number | null | undefined, projectGuids: Array<string> | null | undefined, userGuids: Array<string> | null | undefined, deletedSince: Date | null | undefined): Observable<Array<DeletedWorkHourModel>> {
			return this.http.get<Array<DeletedWorkHourModel>>(this.baseUri + 'v1/deletedworkhours?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&' + projectGuids?.map(z => `projectGuids=${encodeURIComponent(z)}`).join('&') + '&' + userGuids?.map(z => `userGuids=${encodeURIComponent(z)}`).join('&') + '&deletedSince=' + deletedSince?.toISOString(), {});
		}

		/**
		 * Get all the keywords for file.
		 * Get v1/files/{fileGuid}/keywords
		 * @param {string} fileGuid ID of the file for which keywords are requested.
		 * @param {boolean} active If not given, return all Keywords, if given as true return only active Keywords, if given as false returns only inactive Keywords.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Keyword&sortings[0].value=Desc".
		 * @return {Array<FileKeywordModel>} Keywords.
		 */
		Keywords_GetFileKeywords(fileGuid: string, active: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<FileKeywordModel>> {
			return this.http.get<Array<FileKeywordModel>>(this.baseUri + 'v1/files/' + (fileGuid == null ? '' : encodeURIComponent(fileGuid)) + '/keywords&active=' + active + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Delete a keyword from the file
		 * Returns: No Content (204) if succeeded. Not found (404) if the keyword or the link can't be found.
		 * Delete v1/files/{fileGuid}/keywords/{guid}
		 * @return {void} 
		 */
		Keywords_DeleteFileKeyword(fileGuid: string, guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/files/' + (fileGuid == null ? '' : encodeURIComponent(fileGuid)) + '/keywords/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Link existing keyword to file
		 * Post v1/files/{fileGuid}/keywords/{guid}
		 * @return {void} 
		 */
		Keywords_LinkKeywordToFile(fileGuid: string, guid: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/files/' + (fileGuid == null ? '' : encodeURIComponent(fileGuid)) + '/keywords/' + (guid == null ? '' : encodeURIComponent(guid)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get file by ID.
		 * Get v1/files/{guid}
		 * @param {string} guid GUID used to get the file.
		 * @param {boolean} includeDataInResponse Is data included in response as base64 string.
		 * @return {FileModel} File.
		 */
		Files_GetFile(guid: string, includeDataInResponse: boolean | null | undefined): Observable<FileModel> {
			return this.http.get<FileModel>(this.baseUri + 'v1/files/' + (guid == null ? '' : encodeURIComponent(guid)) + '&includeDataInResponse=' + includeDataInResponse, {});
		}

		/**
		 * Get file data by ID.
		 * Returns binary data, which contains content with type given in Content-Type header.
		 * Get v1/files/{guid}/filedata
		 * @param {string} guid GUID used to get the file.
		 * @return {void} Get file data by ID
		 */
		FileData_GetDataForFile(guid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/files/' + (guid == null ? '' : encodeURIComponent(guid)) + '/filedata', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all flat rates
		 * Get v1/flatrates
		 * @param {string} pageToken Optional: Page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get flat rates that have been added or changed after this date time (greater or equal).
		 * @param {string} invoiceGuid Optional: Get flat rates by invoice guid. Default all.
		 * @return {Array<FlatRateOutputModel>} All the flat rates
		 */
		FlatRates_GetAllFlatRates(pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined, invoiceGuid: string | null | undefined): Observable<Array<FlatRateOutputModel>> {
			return this.http.get<Array<FlatRateOutputModel>>(this.baseUri + 'v1/flatrates?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString() + '&invoiceGuid=' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)), {});
		}

		/**
		 * Insert a flat rate.
		 * Post v1/flatrates
		 * @param {FlatRateInputModel} requestBody FlatRateModel.
		 * @return {void} 
		 */
		FlatRates_PostFlatRate(requestBody: FlatRateInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flatrates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a flat rate of a phase.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/flatrates/{guid}
		 * @param {string} guid ID of flat rate.
		 * @return {void} 
		 */
		FlatRates_DeleteFlatRate(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/flatrates/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get flat rate.
		 * Get v1/flatrates/{guid}
		 * @param {string} guid Id of the flat rate.
		 * @return {Array<FlatRateOutputModel>} FlatRateModel.
		 */
		FlatRates_GetFlatrate(guid: string): Observable<Array<FlatRateOutputModel>> {
			return this.http.get<Array<FlatRateOutputModel>>(this.baseUri + 'v1/flatrates/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a flat rate or a part of it.
		 * Patch v1/flatrates/{guid}
		 * @param {string} guid ID of the flat rate.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of FlatRateModel.
		 * @return {Array<FlatRateOutputModel>} list of updated flat rates.
		 */
		FlatRates_PatchFlatRate(guid: string, requestBody: Array<PatchOperation>): Observable<Array<FlatRateOutputModel>> {
			return this.http.patch<Array<FlatRateOutputModel>>(this.baseUri + 'v1/flatrates/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Insert a flextime adjustment.
		 * Post v1/flextimeadjustments
		 * @param {FlextimeAdjustmentInputModel} requestBody FlextimeAdjustmentInputModel.
		 * @return {void} 
		 */
		FlextimeAdjustments_PostFlextimeAdjustment(requestBody: FlextimeAdjustmentInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/flextimeadjustments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an flextime adjustment.
		 * Returns: No Content (204) if succeeded. Not found (404) if flextime adjustment can't be found.
		 * Delete v1/flextimeadjustments/{guid}
		 * @param {string} guid ID for the flextime adjustment to delete.
		 * @return {void} 
		 */
		FlextimeAdjustments_DeleteFlextimeAdjustment(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/flextimeadjustments/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Flextime Adjustment by ID.
		 * Get v1/flextimeadjustments/{guid}
		 * @param {string} guid GUID used to get the Flextime Adjustment.
		 * @return {FlextimeAdjustmentOutputModel} Flextime Adjustment.
		 */
		FlextimeAdjustments_GetFlextimeAdjustment(guid: string): Observable<FlextimeAdjustmentOutputModel> {
			return this.http.get<FlextimeAdjustmentOutputModel>(this.baseUri + 'v1/flextimeadjustments/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an Flextime Adjustment or a part of it.
		 * Patch v1/flextimeadjustments/{guid}
		 * @param {string} guid ID of the Flextime Adjustment.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of FlextimeAdjustmentInputModel.
		 * @return {Array<FlextimeAdjustmentOutputModel>} Updated Flextime Adjustment.
		 */
		FlextimeAdjustments_PatchFlextimeAdjustment(guid: string, requestBody: Array<PatchOperation>): Observable<Array<FlextimeAdjustmentOutputModel>> {
			return this.http.patch<Array<FlextimeAdjustmentOutputModel>>(this.baseUri + 'v1/flextimeadjustments/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get holidays.
		 * Get v1/holidays
		 * @param {number} year Optional: Holidays for this year only. Default: all years.
		 * @param {string} countryGuid Optional: Holidays for this country only. Default local.
		 * @return {Array<HolidayModel>} List of holidays. 
		 */
		Holidays_GetHolidays(year: number | null | undefined, countryGuid: string | null | undefined): Observable<Array<HolidayModel>> {
			return this.http.get<Array<HolidayModel>>(this.baseUri + 'v1/holidays?year=' + year + '&countryGuid=' + (countryGuid == null ? '' : encodeURIComponent(countryGuid)), {});
		}

		/**
		 * Get holidays with start and end date.
		 * Get v1/holidaysbytimeperiod
		 * @param {Date} startDate Start date for holidays.
		 * @param {Date} endDate End date for holidays.
		 * @param {string} countryGuid Optional: Holidays for this country only. Default local.
		 * @return {Array<HolidayModel>} List of holidays. 
		 */
		Holidays_GetHolidaysByTimePeriod(startDate: Date | null | undefined, endDate: Date | null | undefined, countryGuid: string | null | undefined): Observable<Array<HolidayModel>> {
			return this.http.get<Array<HolidayModel>>(this.baseUri + 'v1/holidaysbytimeperiod?startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&countryGuid=' + (countryGuid == null ? '' : encodeURIComponent(countryGuid)), {});
		}

		/**
		 * Get all the industries.
		 * Get v1/industries
		 * @param {boolean} active If not given, return all industries, if given as true return only active industries, if given as false returns only inactive industries.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from industry name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @return {Array<IndustryModel>} All the industries.
		 */
		Industries_GetIndustries(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined): Observable<Array<IndustryModel>> {
			return this.http.get<Array<IndustryModel>>(this.baseUri + 'v1/industries?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount, {});
		}

		/**
		 * Insert an industry.
		 * Post v1/industries
		 * @param {IndustryModel} requestBody IndustryModel.
		 * @return {void} 
		 */
		Industries_PostIndustry(requestBody: IndustryModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/industries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an industry.
		 * Returns: No Content (204) if succeeded. Not found (404) if industry can't be found.
		 * Delete v1/industries/{guid}
		 * @param {string} guid ID for the industry to delete.
		 * @param {string} moveUsagesToGuid Optional: ID of the industry to which to move usages of this industry. Default null. If industry is in use and usages aren't moved the deletion might fail.
		 * @return {void} 
		 */
		Industries_DeleteIndustry(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/industries/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get industry by ID.
		 * Get v1/industries/{guid}
		 * @param {string} guid GUID used to get the industry.
		 * @return {IndustryModel} Industry.
		 */
		Industries_GetIndustry(guid: string): Observable<IndustryModel> {
			return this.http.get<IndustryModel>(this.baseUri + 'v1/industries/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an industry or a part of it.
		 * Patch v1/industries/{guid}
		 * @param {string} guid ID of the industry.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of IndustryModel.
		 * @return {Array<IndustryModel>} list of updated industries.
		 */
		Industries_PatchIndustry(guid: string, requestBody: Array<PatchOperation>): Observable<Array<IndustryModel>> {
			return this.http.patch<Array<IndustryModel>>(this.baseUri + 'v1/industries/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Visma.net Financials integration company information.
		 * Get v1/integrations/vismafinancials/companyinformation
		 * @return {VismaFinancialsCompanyModel} VismaFinancialsCompanyModel.
		 */
		Organizations_GetVismaFinancialsCompanyInfo(): Observable<VismaFinancialsCompanyModel> {
			return this.http.get<VismaFinancialsCompanyModel>(this.baseUri + 'v1/integrations/vismafinancials/companyinformation', {});
		}

		/**
		 * Get invoice file by ID.
		 * Get v1/invoicefiles/{guid}
		 * @param {string} guid GUID used to get the invoice file.
		 * @return {InvoiceFileModel} InvoiceFile.
		 */
		Files_GetInvoiceFile(guid: string): Observable<InvoiceFileModel> {
			return this.http.get<InvoiceFileModel>(this.baseUri + 'v1/invoicefiles/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get invoice rows
		 * Get v1/invoicerows
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get invoice rows that have been added or changed after this date time (greater or equal).
		 * @return {Array<InvoiceRowOutputModel>} 
		 */
		InvoiceRows_GetInvoiceRows(pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<InvoiceRowOutputModel>> {
			return this.http.get<Array<InvoiceRowOutputModel>>(this.baseUri + 'v1/invoicerows?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Deletes an invoice row
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/invoicerows/{guid}
		 * @param {string} guid GUID used to delete the invoice row.
		 * @return {void} 
		 */
		InvoiceRows_DeleteInvoiceRow(guid: string, setAsNonBillable: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/invoicerows/' + (guid == null ? '' : encodeURIComponent(guid)) + '&setAsNonBillable=' + setAsNonBillable, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get invoice row by ID
		 * Get v1/invoicerows/{guid}
		 * @param {string} guid GUID of the invoice row.
		 * @return {InvoiceRowOutputModel} Invoice row
		 */
		InvoiceRows_GetInvoiceRow(guid: string): Observable<InvoiceRowOutputModel> {
			return this.http.get<InvoiceRowOutputModel>(this.baseUri + 'v1/invoicerows/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a invoice row or a part of it
		 * If CostCenterNumber, SalesAccountNumber or RecurringSalesAccountNumber are changed and the invoice row is related to one or many ProjectFees or ProjectTravelExpenses, the values for those will also be updated.
		 * Patch v1/invoicerows/{guid}
		 * @param {string} guid ID of the invoice row
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of InvoiceRowModel
		 * @return {Array<InvoiceRowOutputModel>} List of updated invoice rows
		 */
		InvoiceRows_PatchInvoiceRow(guid: string, requestBody: Array<PatchOperation>): Observable<Array<InvoiceRowOutputModel>> {
			return this.http.patch<Array<InvoiceRowOutputModel>>(this.baseUri + 'v1/invoicerows/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the project fees on an invoice row
		 * Get v1/invoicerows/{invoiceRowGuid}/projectfees
		 * @param {string} invoiceRowGuid ID of the invoice row.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: Number of rows to fetch.
		 * @param {ProductOutputModelType} productType Optional: ProjectFee's product type. if given, it filters the projectFees by the given type. FixedFees (Own work), Materials (Products), Subcontracting
		 * @return {Array<ProjectFeeOutputModel>} ProjectFees
		 */
		ProjectFees_GetInvoiceRowProjectFees(invoiceRowGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, productType: ProductOutputModelType | null | undefined): Observable<Array<ProjectFeeOutputModel>> {
			return this.http.get<Array<ProjectFeeOutputModel>>(this.baseUri + 'v1/invoicerows/' + (invoiceRowGuid == null ? '' : encodeURIComponent(invoiceRowGuid)) + '/projectfees&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&productType=' + productType, {});
		}

		/**
		 * Get all the project travel expenses on an invoice row
		 * Get v1/invoicerows/{invoiceRowGuid}/projecttravelexpenses
		 * @param {string} invoiceRowGuid ID of the invoice row.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {ExpensesClass} expenseClass Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense
		 * @return {Array<ProjectTravelExpenseOutputModel>} ProjectTravelExpenseOutputModel
		 */
		ProjectTravelExpenses_GetInvoiceRowProjectTravelExpenses(invoiceRowGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, expenseClass: ExpensesClass | null | undefined): Observable<Array<ProjectTravelExpenseOutputModel>> {
			return this.http.get<Array<ProjectTravelExpenseOutputModel>>(this.baseUri + 'v1/invoicerows/' + (invoiceRowGuid == null ? '' : encodeURIComponent(invoiceRowGuid)) + '/projecttravelexpenses&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&expenseClass=' + expenseClass, {});
		}

		/**
		 * Get all the project fees on an invoice row
		 * Get v1/invoicerows/{invoiceRowGuid}/reimbursedprojectfees
		 * @param {string} invoiceRowGuid ID of the invoice row.
		 * @param {number} rowCount Optional: Number of rows to fetch
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @return {Array<ReimbursedProjectFeeOutputModel>} ReimbursedProjectFee
		 */
		ReimbursedProjectFees_GetInvoiceRowReimbursedProjectFees(invoiceRowGuid: string, rowCount: number | null | undefined, pageToken: string | null | undefined): Observable<Array<ReimbursedProjectFeeOutputModel>> {
			return this.http.get<Array<ReimbursedProjectFeeOutputModel>>(this.baseUri + 'v1/invoicerows/' + (invoiceRowGuid == null ? '' : encodeURIComponent(invoiceRowGuid)) + '/reimbursedprojectfees&rowCount=' + rowCount + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get all the project travel expenses on an invoice row.
		 * Get v1/invoicerows/{invoiceRowGuid}/reimbursedprojecttravelexpenses
		 * @param {string} invoiceRowGuid ID of the invoice row.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @param {string} textToSearch Searched string: part of name or description.
		 * @param {boolean} calculateRowCount Optional. If true, calculates the total count of project fees. Default false.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc".
		 * @return {Array<ReimbursedProjectTravelExpenseOutputModel>} ReimbursedProjectTravelExpenses.
		 */
		ReimbursedProjectTravelExpenses_GetInvoiceRowProjectTravelExpenses(invoiceRowGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<ReimbursedProjectTravelExpenseOutputModel>> {
			return this.http.get<Array<ReimbursedProjectTravelExpenseOutputModel>>(this.baseUri + 'v1/invoicerows/' + (invoiceRowGuid == null ? '' : encodeURIComponent(invoiceRowGuid)) + '/reimbursedprojecttravelexpenses&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Get all reimbursed hours on an invoice row.
		 * Get v1/invoicerows/{invoiceRowGuid}/reimbursedworkhours
		 * @param {string} invoiceRowGuid ID of the invoice row.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from description or invoice description.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=DueDate&sortings[0].value=Asc&sortings[1].key=TotalIncludingTax&sortings[1].value=Desc".
		 * @return {Array<ReimbursedWorkHourOutputModel>} ReimbursedWorkHour.
		 */
		ReimbursedWorkHours_GetInvoiceRowReimbursedWorkHours(invoiceRowGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<ReimbursedWorkHourOutputModel>> {
			return this.http.get<Array<ReimbursedWorkHourOutputModel>>(this.baseUri + 'v1/invoicerows/' + (invoiceRowGuid == null ? '' : encodeURIComponent(invoiceRowGuid)) + '/reimbursedworkhours&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Get all the work hours on an invoice row
		 * Get v1/invoicerows/{invoiceRowGuid}/workhours
		 * @param {string} invoiceRowGuid ID of the invoice row.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @return {Array<WorkHourOutputModel>} WorkHours
		 */
		WorkHours_GetInvoiceRowWorkHours(invoiceRowGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined): Observable<Array<WorkHourOutputModel>> {
			return this.http.get<Array<WorkHourOutputModel>>(this.baseUri + 'v1/invoicerows/' + (invoiceRowGuid == null ? '' : encodeURIComponent(invoiceRowGuid)) + '/workhours&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount, {});
		}

		/**
		 * Get Invoices
		 * Get v1/invoices
		 * @param {number} rowCount Optional: Number of rows to fetch.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {Date} paymentDateStart Optional: Get only invoices paid at this date or later. Default: Get invoices regardless of payment date.
		 * @param {Array<string>} invoiceStatusGuids Optional: Get invoices with this status only. Default: all statuses.
		 * @param {Array<string>} projectGuids Optional: ID of the project to get the invoices. If not provided, returns for all projects. Default all.
		 * @param {Array<string>} projectOwnerGuids Optional: ID of the project manager to get the invoices for. If not provided, returns for all project managers. Default all.
		 * @param {Array<string>} projectBusinessUnitGuids Optional: ID of the business unit of the project. If not provided, returns for all business units. Default all.
		 * @param {Array<string>} customerGuids Optional: List of customer IDs. Get invoices for these customers.
		 * @param {Date} startDate Optional: starting date from which to get the invoices. Default all.
		 * @param {Date} endDate Optional: end date from which to get the invoices. Default all.
		 * @param {number} minimumTotalExcludingTax Optional: specifies minimum value for invoice total in organization currency.
		 * @param {number} maximumTotalExcludingTax Optional: specifies maximum value for invoice total in organization currency.
		 * @param {Array<string>} referenceNumbers Optional: Invoice reference number. If not provided, returns invoices with any invoice reference number.
		 * @param {Array<number>} numbers Optional: Invoice number. If not provided, returns invoices with any invoice number.
		 * @param {Date} changedSince Optional: Get invoices that have been added or changed after this date time (greater or equal).
		 * @param {Array<string>} salesPersonGuids Optional: ID of the salesperson to get the invoices for. If not provided, returns for all sales persons.
		 * @param {Array<string>} createdByUserGuids Optional: ID of the user who created the invoice. If not provided, returns for all users.
		 * @return {Array<InvoiceOutputModel>} List of Invoices 
		 */
		Invoices_GetInvoices(rowCount: number | null | undefined, pageToken: string | null | undefined, paymentDateStart: Date | null | undefined, invoiceStatusGuids: Array<string> | null | undefined, projectGuids: Array<string> | null | undefined, projectOwnerGuids: Array<string> | null | undefined, projectBusinessUnitGuids: Array<string> | null | undefined, customerGuids: Array<string> | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, minimumTotalExcludingTax: number | null | undefined, maximumTotalExcludingTax: number | null | undefined, referenceNumbers: Array<string> | null | undefined, numbers: Array<number> | null | undefined, changedSince: Date | null | undefined, salesPersonGuids: Array<string> | null | undefined, createdByUserGuids: Array<string> | null | undefined): Observable<Array<InvoiceOutputModel>> {
			return this.http.get<Array<InvoiceOutputModel>>(this.baseUri + 'v1/invoices?rowCount=' + rowCount + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&paymentDateStart=' + paymentDateStart?.toISOString() + '&' + invoiceStatusGuids?.map(z => `invoiceStatusGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectGuids?.map(z => `projectGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectOwnerGuids?.map(z => `projectOwnerGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectBusinessUnitGuids?.map(z => `projectBusinessUnitGuids=${encodeURIComponent(z)}`).join('&') + '&' + customerGuids?.map(z => `customerGuids=${encodeURIComponent(z)}`).join('&') + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&minimumTotalExcludingTax=' + minimumTotalExcludingTax + '&maximumTotalExcludingTax=' + maximumTotalExcludingTax + '&' + referenceNumbers?.map(z => `referenceNumbers=${encodeURIComponent(z)}`).join('&') + '&' + numbers?.map(z => `numbers=${z}`).join('&') + '&changedSince=' + changedSince?.toISOString() + '&' + salesPersonGuids?.map(z => `salesPersonGuids=${encodeURIComponent(z)}`).join('&') + '&' + createdByUserGuids?.map(z => `createdByUserGuids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Add an invoice to project(s)
		 * Post v1/invoices
		 * @param {CreateInvoiceModel} requestBody CreateInvoiceModel
		 * @return {void} 
		 */
		Invoices_PostInvoiceCreation(requestBody: CreateInvoiceModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/invoices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an invoice.
		 * Returns: No Content (204) if succeeded. Not found (404) if cost center can't be found.
		 * Delete v1/invoices/{guid}
		 * @param {string} guid ID for the invoice to delete.
		 * @return {void} 
		 */
		Invoices_DeleteInvoice(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/invoices/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get invoice by ID
		 * Get v1/invoices/{guid}
		 * @param {string} guid GUID of the invoice.
		 * @return {InvoiceOutputModel} 
		 */
		Invoices_GetInvoice(guid: string): Observable<InvoiceOutputModel> {
			return this.http.get<InvoiceOutputModel>(this.baseUri + 'v1/invoices/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an invoice or a part of it
		 * Patch v1/invoices/{guid}
		 * @param {string} guid GUID of the invoice
		 * @param {Array<PatchOperation>} requestBody JSON patch document of InvoiceInputModel
		 * @return {Array<InvoiceOutputModel>} list of invoices
		 */
		Invoices_PatchInvoice(guid: string, requestBody: Array<PatchOperation>): Observable<Array<InvoiceOutputModel>> {
			return this.http.patch<Array<InvoiceOutputModel>>(this.baseUri + 'v1/invoices/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get an invoice PDF.
		 * Get v1/invoices/{guid}/pdf
		 * @param {string} guid The invoice GUID.
		 * @param {InvoiceType} invoiceType Optional: type of invoice.
		 * @param {InvoicePdfGetOptions} pdfGetOptions Optional: what to include in the PDF. Defaults to InvoicePdfGetOptions.All.
		 * @return {void} Get an invoice PDF
		 */
		Pdf_GetInvoicePdf(guid: string, invoiceType: InvoiceType | null | undefined, pdfGetOptions: InvoicePdfGetOptions | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/invoices/' + (guid == null ? '' : encodeURIComponent(guid)) + '/pdf&invoiceType=' + invoiceType + '&pdfGetOptions=' + pdfGetOptions, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a project from invoice.
		 * Delete v1/invoices/{guid}/projects/{projectGuid}
		 * @param {string} guid The invoice GUID.
		 * @param {string} projectGuid The project GUID.
		 * @return {void} 
		 */
		Invoices_DeleteProjectFromInvoice(guid: string, projectGuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/invoices/' + (guid == null ? '' : encodeURIComponent(guid)) + '/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all files of a invoice by its id.
		 * Get v1/invoices/{invoiceGuid}/files
		 * @param {string} invoiceGuid GUID of the invoice used to get the files.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch.
		 * @return {Array<InvoiceFileModel>} InvoiceFile.
		 */
		Files_GetInvoiceFiles(invoiceGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined): Observable<Array<InvoiceFileModel>> {
			return this.http.get<Array<InvoiceFileModel>>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/files&firstRow=' + firstRow + '&rowCount=' + rowCount, {});
		}

		/**
		 * Get v1/invoices/{invoiceGuid}/finvoice
		 * @return {void} Exports single invoice as Finvoice
		 */
		Finvoices_GetFinvoiceByInvoiceGuid(invoiceGuid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/finvoice', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Invoice rows for an invoice.
		 * Get v1/invoices/{invoiceGuid}/invoicerows
		 * @param {string} invoiceGuid ID of the invoice.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {InvoiceRowOutputModelRowType} rowType Optional: Type of the row. Either Hours or ProjectFees, Default all.
		 * @return {Array<InvoiceRowOutputModel>} List of Invoice rows 
		 */
		InvoiceRows_GetInvoiceRowsForInvoice(invoiceGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, rowType: InvoiceRowOutputModelRowType | null | undefined): Observable<Array<InvoiceRowOutputModel>> {
			return this.http.get<Array<InvoiceRowOutputModel>>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/invoicerows&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&rowType=' + rowType, {});
		}

		/**
		 * Get invoice settings by invoice GUID
		 * Get v1/invoices/{invoiceGuid}/invoicesettings
		 * @param {string} invoiceGuid Invoice GUID used to get the invoice settings.
		 * @return {InvoiceSettingsOutputModel} InvoiceSettingsOutputModel
		 */
		InvoiceSettings_GetInvoiceSettings(invoiceGuid: string): Observable<InvoiceSettingsOutputModel> {
			return this.http.get<InvoiceSettingsOutputModel>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/invoicesettings', {});
		}

		/**
		 * Get all the project fees on an invoice
		 * Get v1/invoices/{invoiceGuid}/projectfees
		 * @param {string} invoiceGuid ID of the invoice.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: Number of rows to fetch.
		 * @param {ProductOutputModelType} productType Optional: ProjectFee's product type. if given, it filters the projectFees by the given type. FixedFees (Own work), Materials (Products), Subcontracting
		 * @return {Array<ProjectFeeOutputModel>} ProjectFees
		 */
		ProjectFees_GetInvoiceProjectFees(invoiceGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, productType: ProductOutputModelType | null | undefined): Observable<Array<ProjectFeeOutputModel>> {
			return this.http.get<Array<ProjectFeeOutputModel>>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/projectfees&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&productType=' + productType, {});
		}

		/**
		 * Get all the project travel expenses on an invoice
		 * Get v1/invoices/{invoiceGuid}/projecttravelexpenses
		 * @param {string} invoiceGuid ID of the invoice.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {ExpensesClass} expenseClass Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense
		 * @return {Array<ProjectTravelExpenseOutputModel>} ProjectTravelExpenseOutputModel
		 */
		ProjectTravelExpenses_GetInvoiceProjectTravelExpenses(invoiceGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, expenseClass: ExpensesClass | null | undefined): Observable<Array<ProjectTravelExpenseOutputModel>> {
			return this.http.get<Array<ProjectTravelExpenseOutputModel>>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/projecttravelexpenses&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&expenseClass=' + expenseClass, {});
		}

		/**
		 * Get all the project fees on an invoice
		 * Get v1/invoices/{invoiceGuid}/reimbursedprojectfees
		 * @param {string} invoiceGuid ID of the invoice.
		 * @param {number} rowCount Optional: Number of rows to fetch
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @return {Array<ReimbursedProjectFeeOutputModel>} ReimbursedProjectFee
		 */
		ReimbursedProjectFees_GetInvoiceReimbursedProjectFees(invoiceGuid: string, rowCount: number | null | undefined, pageToken: string | null | undefined): Observable<Array<ReimbursedProjectFeeOutputModel>> {
			return this.http.get<Array<ReimbursedProjectFeeOutputModel>>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/reimbursedprojectfees&rowCount=' + rowCount + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get all the project travel expenses on an invoice.
		 * Get v1/invoices/{invoiceGuid}/reimbursedprojecttravelexpenses
		 * @param {string} invoiceGuid ID of the invoice.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @param {string} textToSearch Searched string: part of name or description.
		 * @param {boolean} calculateRowCount Optional. If true, calculates the total count of project fees. Default false.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc".
		 * @return {Array<ReimbursedProjectTravelExpenseOutputModel>} ReimbursedProjectTravelExpenses.
		 */
		ReimbursedProjectTravelExpenses_GetInvoiceProjectTravelExpenses(invoiceGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<ReimbursedProjectTravelExpenseOutputModel>> {
			return this.http.get<Array<ReimbursedProjectTravelExpenseOutputModel>>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/reimbursedprojecttravelexpenses&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Get all reimbursed hours on an invoice.
		 * Get v1/invoices/{invoiceGuid}/reimbursedworkhours
		 * @param {string} invoiceGuid ID of the invoice.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from description or invoice description.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=DueDate&sortings[0].value=Asc&sortings[1].key=TotalIncludingTax&sortings[1].value=Desc".
		 * @return {Array<ReimbursedWorkHourOutputModel>} ReimbursedWorkHour.
		 */
		ReimbursedWorkHours_GetInvoiceReimbursedWorkHours(invoiceGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<ReimbursedWorkHourOutputModel>> {
			return this.http.get<Array<ReimbursedWorkHourOutputModel>>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/reimbursedworkhours&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Get uninvoiced project fees available for invoice
		 * Get v1/invoices/{invoiceGuid}/uninvoicedprojectfees
		 * @param {string} invoiceGuid ID of the invoice.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: Number of rows to fetch.
		 * @param {boolean} isBillable Optional: Filter the project fees. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null.
		 * @return {Array<ProjectFeeOutputModel>} ProjectFees
		 */
		ProjectFees_GetUninvoicedProjectFeesForInvoice(invoiceGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, isBillable: boolean | null | undefined): Observable<Array<ProjectFeeOutputModel>> {
			return this.http.get<Array<ProjectFeeOutputModel>>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/uninvoicedprojectfees&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&isBillable=' + isBillable, {});
		}

		/**
		 * Get uninvoiced project travel expenses available for invoice
		 * Get v1/invoices/{invoiceGuid}/uninvoicedprojecttravelexpenses
		 * @param {string} invoiceGuid ID of the invoice.
		 * @param {boolean} isBillable Optional: Filter the travel expenses. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {ExpensesClass} expenseClass Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense
		 * @return {Array<ProjectTravelExpenseOutputModel>} ProjectTravelExpenseOutputModel
		 */
		ProjectTravelExpenses_GetUninvoicedProjectTravelExpensesForInvoice(invoiceGuid: string, isBillable: boolean | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined, expenseClass: ExpensesClass | null | undefined): Observable<Array<ProjectTravelExpenseOutputModel>> {
			return this.http.get<Array<ProjectTravelExpenseOutputModel>>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/uninvoicedprojecttravelexpenses&isBillable=' + isBillable + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&expenseClass=' + expenseClass, {});
		}

		/**
		 * Get uninvoiced work hours available for invoice
		 * Get v1/invoices/{invoiceGuid}/uninvoicedworkhours
		 * @param {string} invoiceGuid ID of the invoice.
		 * @param {boolean} isBillable Optional: Filter the work hours. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @return {Array<WorkHourOutputModel>} WorkHours
		 */
		WorkHours_GetUninvoicedWorkHoursForInvoice(invoiceGuid: string, isBillable: boolean | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined): Observable<Array<WorkHourOutputModel>> {
			return this.http.get<Array<WorkHourOutputModel>>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/uninvoicedworkhours&isBillable=' + isBillable + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount, {});
		}

		/**
		 * Get all the work hours on an invoice
		 * Get v1/invoices/{invoiceGuid}/workhours
		 * @param {string} invoiceGuid ID of the invoice.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @return {Array<WorkHourOutputModel>} WorkHours
		 */
		WorkHours_GetInvoiceWorkHours(invoiceGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined): Observable<Array<WorkHourOutputModel>> {
			return this.http.get<Array<WorkHourOutputModel>>(this.baseUri + 'v1/invoices/' + (invoiceGuid == null ? '' : encodeURIComponent(invoiceGuid)) + '/workhours&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount, {});
		}

		/**
		 * Update (Patch) invoice setting
		 * Patch v1/invoicesettings/{guid}
		 * @param {string} guid ID of the invoice settings
		 * @param {Array<PatchOperation>} requestBody JSON patch document of InvoiceSettingsModel
		 * @return {InvoiceSettingsOutputModel} InvoiceSettingsOutputModel
		 */
		InvoiceSettings_PatchInvoiceSettings(guid: string, requestBody: Array<PatchOperation>): Observable<InvoiceSettingsOutputModel> {
			return this.http.patch<InvoiceSettingsOutputModel>(this.baseUri + 'v1/invoicesettings/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get invoice statuses.
		 * Get v1/invoicestatuses
		 * @param {boolean} active Filter the invoice statuses. If true/false, only the active/inactive ones are returned. If null, all the invoice statuses are returned.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from invoice status name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc".
		 * @return {Array<InvoiceStatusModel>} 
		 */
		InvoiceStatuses_GetInvoiceStatuses(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<InvoiceStatusModel>> {
			return this.http.get<Array<InvoiceStatusModel>>(this.baseUri + 'v1/invoicestatuses?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a invoice status.
		 * Post v1/invoicestatuses
		 * @param {InvoiceStatusModel} requestBody InvoiceStatusModel.
		 * @return {void} 
		 */
		InvoiceStatuses_PostInvoiceStatus(requestBody: InvoiceStatusModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/invoicestatuses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an invoice status.
		 * Returns: No Content (204) if succeeded. Not found (404) if invoice status can't be found.
		 * Delete v1/invoicestatuses/{guid}
		 * @param {string} guid ID for the invoice status to delete.
		 * @return {void} 
		 */
		InvoiceStatuses_DeleteInvoiceStatus(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/invoicestatuses/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Invoice status by ID.
		 * Get v1/invoicestatuses/{guid}
		 * @param {string} guid GUID used to get the Invoice status.
		 * @return {InvoiceStatusModel} Invoice status.
		 */
		InvoiceStatuses_GetInvoiceStatus(guid: string): Observable<InvoiceStatusModel> {
			return this.http.get<InvoiceStatusModel>(this.baseUri + 'v1/invoicestatuses/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an Invoice status or a part of it.
		 * Patch v1/invoicestatuses/{guid}
		 * @param {string} guid ID of the Invoice status.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of InvoiceStatusModel.
		 * @return {Array<InvoiceStatusModel>} List of updated Invoice statuses.
		 */
		InvoiceStatuses_PatchInvoiceStatus(guid: string, requestBody: Array<PatchOperation>): Observable<Array<InvoiceStatusModel>> {
			return this.http.patch<Array<InvoiceStatusModel>>(this.baseUri + 'v1/invoicestatuses/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v1/invoicestatuses/{invoiceStatusGuid}/finvoices
		 * @return {void} Exports all invoices by invoice status as stream of multiple Finvoices
		 */
		Finvoices_GetFinvoicesByInvoiceStatus(invoiceStatusGuid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/invoicestatuses/' + (invoiceStatusGuid == null ? '' : encodeURIComponent(invoiceStatusGuid)) + '/finvoices', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get invoice templates.
		 * Get v1/invoicetemplates
		 * @return {Array<InvoiceTemplateModel>} InvoiceTemplatesModel.
		 */
		InvoiceTemplates_GetInvoiceTemplates(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<InvoiceTemplateModel>> {
			return this.http.get<Array<InvoiceTemplateModel>>(this.baseUri + 'v1/invoicetemplates?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Get invoice template by ID.
		 * Get v1/invoicetemplates/{guid}
		 * @param {string} guid ID of the invoice template.
		 * @return {InvoiceTemplateModel} InvoiceTemplatesModel.
		 */
		InvoiceTemplates_GetInvoiceTemplate(guid: string): Observable<InvoiceTemplateModel> {
			return this.http.get<InvoiceTemplateModel>(this.baseUri + 'v1/invoicetemplates/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get all the keywords.
		 * Get v1/keywords
		 * @param {ContactKeywordModelCategory} category Optional: category of the keyword.
		 * @param {boolean} active If not given, return all Keywords, if given as true return only active Keywords, if given as false returns only inactive Keywords.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from keyword.
		 * @param {Date} changedSince Optional: Get keywords that have been added or changed after this date time (greater or equal).
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc".
		 * @param {string} keyword Optional: Keyword name.
		 * @return {Array<KeywordModel>} All the Keywords.
		 */
		Keywords_GetKeywords(category: ContactKeywordModelCategory | null | undefined, active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, changedSince: Date | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined, keyword: string | null | undefined): Observable<Array<KeywordModel>> {
			return this.http.get<Array<KeywordModel>>(this.baseUri + 'v1/keywords?category=' + category + '&active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&changedSince=' + changedSince?.toISOString() + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&') + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)), {});
		}

		/**
		 * Insert a keyword.
		 * Post v1/keywords
		 * @param {KeywordModel} requestBody KeywordModel.
		 * @return {void} 
		 */
		Keywords_PostKeyword(requestBody: KeywordModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/keywords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete keyword by ID. It will also be deleted from any entity it is used in (Project, etc.)
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/keywords/{guid}
		 * @param {string} guid GUID used to get the keyword.
		 * @param {string} moveUsagesToGuid Optional: ID of the keyword to which to move usages of this keyword. Default null. If keyword is in use and usages aren't moved the deletion might fail.
		 * @return {void} 
		 */
		Keywords_DeleteKeyword(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/keywords/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get keyword by ID.
		 * Get v1/keywords/{guid}
		 * @param {string} guid GUID used to get the keyword.
		 * @return {KeywordModel} Keyword.
		 */
		Keywords_GetKeyword(guid: string): Observable<KeywordModel> {
			return this.http.get<KeywordModel>(this.baseUri + 'v1/keywords/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a keyword or a part of it.
		 * Patch v1/keywords/{guid}
		 * @param {string} guid ID of the keyword.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document.
		 * @return {Array<KeywordModel>} list of updated keywords.
		 */
		Keywords_PatchKeyword(guid: string, requestBody: Array<PatchOperation>): Observable<Array<KeywordModel>> {
			return this.http.patch<Array<KeywordModel>>(this.baseUri + 'v1/keywords/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get saved KPI formulas.
		 * Get v1/kpiformulas
		 * @param {KpiFormulaCategory} category Optional: Category of KPI formula (Project, Invoice, User).
		 * @param {boolean} isActive Optional: return with given active status. Default is to return all.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc".
		 * @param {boolean} includeDefinition Optional: Include definition to response. Default false.
		 * @param {Date} changedSince Optional: Get KPI formulas that have been added or changed after this date time (greater or equal).
		 * @return {Array<KpiFormulaModelBase>} KPI formulas.
		 */
		KpiFormulas_GetKpiFormulas(category: KpiFormulaCategory | null | undefined, isActive: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined, includeDefinition: boolean | null | undefined, changedSince: Date | null | undefined): Observable<Array<KpiFormulaModelBase>> {
			return this.http.get<Array<KpiFormulaModelBase>>(this.baseUri + 'v1/kpiformulas?category=' + category + '&isActive=' + isActive + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&' + sortings?.map(z => `sortings=${z}`).join('&') + '&includeDefinition=' + includeDefinition + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Get the lead sources.
		 * Get v1/leadsources
		 * @param {boolean} active If not given, return all lead sources, if given as true return only active lead sources, if given as false returns only inactive lead sources.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from lead source name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @return {Array<LeadSourceModel>} List of lead sources.
		 */
		LeadSources_GetLeadSources(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined): Observable<Array<LeadSourceModel>> {
			return this.http.get<Array<LeadSourceModel>>(this.baseUri + 'v1/leadsources?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount, {});
		}

		/**
		 * Insert a lead source.
		 * Post v1/leadsources
		 * @param {LeadSourceModel} requestBody LeadSourceModel.
		 * @return {void} 
		 */
		LeadSources_PostLeadSource(requestBody: LeadSourceModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/leadsources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a lead source.
		 * Returns: No Content (204) if succeeded. Not found (404) if lead source can't be found.
		 * Delete v1/leadsources/{guid}
		 * @param {string} guid ID for the lead source to delete.
		 * @param {string} moveUsagesToGuid Optional: ID of the lead source to which to move usages of this lead source. Default null. If industry is in use and usages aren't moved the deletion might fail.
		 * @return {void} 
		 */
		LeadSources_DeleteLeadSource(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/leadsources/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get lead source by ID.
		 * Get v1/leadsources/{guid}
		 * @param {string} guid GUID used to get the lead source.
		 * @return {LeadSourceModel} lead source.
		 */
		LeadSources_GetLeadSource(guid: string): Observable<LeadSourceModel> {
			return this.http.get<LeadSourceModel>(this.baseUri + 'v1/leadsources/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an lead source or a part of it.
		 * Patch v1/leadsources/{guid}
		 * @param {string} guid ID of the lead source.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of LeadSourceModel.
		 * @return {Array<LeadSourceModel>} List of updated lead sources.
		 */
		LeadSources_PatchLeadSource(guid: string, requestBody: Array<PatchOperation>): Observable<Array<LeadSourceModel>> {
			return this.http.patch<Array<LeadSourceModel>>(this.baseUri + 'v1/leadsources/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the Countries.
		 * Get v1/localization/countries
		 * @return {Array<CountryModel>} All the Countries.
		 */
		Countries_GetCountries(): Observable<Array<CountryModel>> {
			return this.http.get<Array<CountryModel>>(this.baseUri + 'v1/localization/countries', {});
		}

		/**
		 * Get a country by ISO Alpha-2 code
		 * Get v1/localization/countries/{code2}
		 * @param {string} code2 Optional: ISO Alpha-2 code used to get a country.
		 * @return {Array<CountryModel>} Country
		 */
		Countries_GetCountryByCode2(code2: string): Observable<Array<CountryModel>> {
			return this.http.get<Array<CountryModel>>(this.baseUri + 'v1/localization/countries/' + (code2 == null ? '' : encodeURIComponent(code2)), {});
		}

		/**
		 * Get a country by ISO Alpha-3 code
		 * Get v1/localization/countries/{code3}
		 * @param {string} code3 Optional: ISO Alpha-3 code used to get a country.
		 * @return {Array<CountryModel>} Country
		 */
		Countries_GetCountryByCode3(code3: string): Observable<Array<CountryModel>> {
			return this.http.get<Array<CountryModel>>(this.baseUri + 'v1/localization/countries/' + (code3 == null ? '' : encodeURIComponent(code3)), {});
		}

		/**
		 * Get all the Country regions for a country.
		 * Get v1/localization/countries/{countryGuid}/countryregions
		 * @param {string} countryGuid GUID of the country.
		 * @return {Array<CountryRegionModel>} All the CountryRegions of the country.
		 */
		Countries_GetCountryRegions(countryGuid: string): Observable<Array<CountryRegionModel>> {
			return this.http.get<Array<CountryRegionModel>>(this.baseUri + 'v1/localization/countries/' + (countryGuid == null ? '' : encodeURIComponent(countryGuid)) + '/countryregions', {});
		}

		/**
		 * Get a country by name
		 * Get v1/localization/countries/{countryName}
		 * @param {string} countryName Optional: English country name.
		 * @return {Array<CountryModel>} Country
		 */
		Countries_GetCountryByName(countryName: string): Observable<Array<CountryModel>> {
			return this.http.get<Array<CountryModel>>(this.baseUri + 'v1/localization/countries/' + (countryName == null ? '' : encodeURIComponent(countryName)), {});
		}

		/**
		 * Get country by ID.
		 * Get v1/localization/countries/{guid}
		 * @param {string} guid GUID used to get the country.
		 * @return {CountryModel} Country.
		 */
		Countries_GetCountry(guid: string): Observable<CountryModel> {
			return this.http.get<CountryModel>(this.baseUri + 'v1/localization/countries/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get country region by ID.
		 * Get v1/localization/countryregions/{guid}
		 * @param {string} guid GUID used to get the country region.
		 * @return {CountryRegionModel} CountryRegion.
		 */
		Countries_GetCountryRegion(guid: string): Observable<CountryRegionModel> {
			return this.http.get<CountryRegionModel>(this.baseUri + 'v1/localization/countryregions/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get all the Formatting Cultures
		 * Get v1/localization/formattingcultures
		 * @return {Array<FormattingCultureModel>} All the Formatting Cultures
		 */
		FormattingCultures_GetFormattings(): Observable<Array<FormattingCultureModel>> {
			return this.http.get<Array<FormattingCultureModel>>(this.baseUri + 'v1/localization/formattingcultures', {});
		}

		/**
		 * Get formatting culture by ID.
		 * Get v1/localization/formattingcultures/{guid}
		 * @param {string} guid GUID used to get the formatting culture.
		 * @return {FormattingCultureModel} Formatting culture.
		 */
		FormattingCultures_GetFormattingCulture(guid: string): Observable<FormattingCultureModel> {
			return this.http.get<FormattingCultureModel>(this.baseUri + 'v1/localization/formattingcultures/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get all the languages
		 * Get v1/localization/languages
		 * @param {boolean} isInvoiceLanguage Optional: which languages to fetch. only invoice languages or non invoice languages?, default all.
		 * @return {Array<LanguageModel>} All the Languages
		 */
		Languages_GetLanguages(isInvoiceLanguage: boolean | null | undefined): Observable<Array<LanguageModel>> {
			return this.http.get<Array<LanguageModel>>(this.baseUri + 'v1/localization/languages?isInvoiceLanguage=' + isInvoiceLanguage, {});
		}

		/**
		 * Get language by ID
		 * Get v1/localization/languages/{guid}
		 * @param {string} guid GUID used to get the language.
		 * @return {LanguageModel} Language
		 */
		Languages_GetLanguage(guid: string): Observable<LanguageModel> {
			return this.http.get<LanguageModel>(this.baseUri + 'v1/localization/languages/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get all the timezones.
		 * Get v1/localization/timezones
		 * @return {Array<TimezoneModel>} All the Timezones.
		 */
		Timezones_GetTimezones(): Observable<Array<TimezoneModel>> {
			return this.http.get<Array<TimezoneModel>>(this.baseUri + 'v1/localization/timezones', {});
		}

		/**
		 * Get timezone by ID.
		 * Get v1/localization/timezones/{guid}
		 * @param {string} guid GUID used to get the timezone.
		 * @return {TimezoneModel} Timezone.
		 */
		Timezones_GetTimezone(guid: string): Observable<TimezoneModel> {
			return this.http.get<TimezoneModel>(this.baseUri + 'v1/localization/timezones/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get oAuth2 access token.
		 * Post v1/login/oauth/access_token
		 * @param {AccessTokenCredentials} requestBody AccessTokenCredentials model
		 * @return {PublicAuthenticationOutputModel} PublicAuthenticationOutputModel
		 */
		PublicBearerAuthentication_GetAccessTokenJson(requestBody: AccessTokenCredentials): Observable<PublicAuthenticationOutputModel> {
			return this.http.post<PublicAuthenticationOutputModel>(this.baseUri + 'v1/login/oauth/access_token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the oAuth2 authorization code flow code.
		 * Get v1/login/oauth/authorize
		 * @param {string} response_type code
		 * @param {string} state Unguessable random string.
		 * @param {string} client_id Client id.
		 * @param {string} redirect_uri Url where to redirect after code has been retrieved.
		 * @param {string} scope Scopes that client requests. If scopes that are not allowed for the client are requested, returns unauthorized.
		 * @return {void} 
		 */
		PublicBearerAuthentication_GetAuthorizationCode(response_type: string | null | undefined, state: string | null | undefined, client_id: string | null | undefined, redirect_uri: string | null | undefined, scope: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/login/oauth/authorize?response_type=' + (response_type == null ? '' : encodeURIComponent(response_type)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&redirect_uri=' + (redirect_uri == null ? '' : encodeURIComponent(redirect_uri)) + '&scope=' + (scope == null ? '' : encodeURIComponent(scope)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the Market Segments.
		 * Get v1/marketsegments
		 * @param {boolean} active If not given, return all Market Segments, if given as true return only active Market Segments, if given as false returns only inactive Market Segments.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from market segment name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {boolean} includeChildSegments Optional: Include also child market segments. If false returns only parent segments. Default true.
		 * @return {Array<MarketSegmentModel>} List of Market Segments.
		 */
		MarketSegments_GetMarketSegments(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, includeChildSegments: boolean | null | undefined): Observable<Array<MarketSegmentModel>> {
			return this.http.get<Array<MarketSegmentModel>>(this.baseUri + 'v1/marketsegments?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&includeChildSegments=' + includeChildSegments, {});
		}

		/**
		 * Insert a market segment.
		 * Post v1/marketsegments
		 * @param {MarketSegmentModel} requestBody MarketSegmentModel.
		 * @return {void} 
		 */
		MarketSegments_PostMarketSegment(requestBody: MarketSegmentModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/marketsegments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a market segment.
		 * Returns: No Content (204) if succeeded. Not found (404) if market segment can't be found.
		 * Delete v1/marketsegments/{guid}
		 * @param {string} guid ID for the market segment to delete.
		 * @param {string} moveUsagesToGuid Optional: ID of the lead source to which to move usages of this market segment. Default null.
		 * @return {void} 
		 */
		MarketSegments_DeleteMarketSegment(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/marketsegments/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Market Segment by ID.
		 * Get v1/marketsegments/{guid}
		 * @param {string} guid GUID used to get the Market Segment.
		 * @return {MarketSegmentModel} Market Segment.
		 */
		MarketSegments_GetMarketSegment(guid: string): Observable<MarketSegmentModel> {
			return this.http.get<MarketSegmentModel>(this.baseUri + 'v1/marketsegments/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an Market Segment or a part of it.
		 * Patch v1/marketsegments/{guid}
		 * @param {string} guid ID of the Market Segment.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of MarketSegmentModel.
		 * @return {Array<MarketSegmentModel>} List of updated Market Segments.
		 */
		MarketSegments_PatchMarketSegment(guid: string, requestBody: Array<PatchOperation>): Observable<Array<MarketSegmentModel>> {
			return this.http.patch<Array<MarketSegmentModel>>(this.baseUri + 'v1/marketsegments/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the details of organization.
		 * Get v1/organizationdetails
		 * @return {OrganizationDetailsOutputModel} Organization
		 */
		OrganizationDetails_GetOrganizationDetails(): Observable<OrganizationDetailsOutputModel> {
			return this.http.get<OrganizationDetailsOutputModel>(this.baseUri + 'v1/organizationdetails', {});
		}

		/**
		 * Update (Patch) a organization details or a part of it
		 * Patch v1/organizationdetails
		 * @return {OrganizationDetailsOutputModel} organization details
		 */
		OrganizationDetails_PatchOrganizationDetails(requestBody: Array<PatchOperation>): Observable<OrganizationDetailsOutputModel> {
			return this.http.patch<OrganizationDetailsOutputModel>(this.baseUri + 'v1/organizationdetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the settings of organization.
		 * Get v1/organizationsettings
		 * @return {OrganizationSettingsModel} Organization.
		 */
		OrganizationSettings_GetOrganizationSettings(): Observable<OrganizationSettingsModel> {
			return this.http.get<OrganizationSettingsModel>(this.baseUri + 'v1/organizationsettings', {});
		}

		/**
		 * Get overtime price by ID.
		 * Get v1/overtimeprices/{guid}
		 * @param {string} guid Id used to get the overtime price.
		 * @return {OvertimePriceModel} 
		 */
		OvertimePrices_GetOvertimePrice(guid: string): Observable<OvertimePriceModel> {
			return this.http.get<OvertimePriceModel>(this.baseUri + 'v1/overtimeprices/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get overtime definitions.
		 * Get v1/overtimes
		 * @param {boolean} active If not given, return all overtime definitions, if given as true return only active overtime definitions, if given as false returns only inactive overtime definitions.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @param {string} textToSearch Optional: Text to search from overtime name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc"".
		 * @return {Array<OvertimeModel>} Overtime definitions.
		 */
		Overtimes_GetOvertimes(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<OvertimeModel>> {
			return this.http.get<Array<OvertimeModel>>(this.baseUri + 'v1/overtimes?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert an overtime.
		 * Post v1/overtimes
		 * @param {OvertimeModel} requestBody OvertimeModel.
		 * @return {void} 
		 */
		Overtimes_PostOvertime(requestBody: OvertimeModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/overtimes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an overtime.
		 * Returns: No Content (204) if succeeded. Not found (404) if overtime can't be found.
		 * Delete v1/overtimes/{guid}
		 * @param {string} guid ID for the overtime to delete.
		 * @return {void} 
		 */
		Overtimes_DeleteOvertime(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/overtimes/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get overtime definition by ID.
		 * Get v1/overtimes/{guid}
		 * @param {string} guid Id used to get the overtime definition.
		 * @return {OvertimeModel} OvertimeModel.
		 */
		Overtimes_GetOvertime(guid: string): Observable<OvertimeModel> {
			return this.http.get<OvertimeModel>(this.baseUri + 'v1/overtimes/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an overtime or a part of it.
		 * Patch v1/overtimes/{guid}
		 * @param {string} guid ID of the overtime.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of OvertimeModel.
		 * @return {Array<OvertimeModel>} list of overtimes.
		 */
		Overtimes_PatchOvertime(guid: string, requestBody: Array<PatchOperation>): Observable<Array<OvertimeModel>> {
			return this.http.patch<Array<OvertimeModel>>(this.baseUri + 'v1/overtimes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the Permission Profiles.
		 * Get v1/permissionprofiles
		 * @param {boolean} active If not given, return all Permission Profiles, if given as true return only active Permission Profiles, if given as false returns only inactive Permission Profiles.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from permission profile name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc&sortings[1].key=isActive&sortings[1].value=Asc".
		 * @return {Array<PermissionProfileModel>} List of Permission Profiles.
		 */
		PermissionProfiles_GetPermissionProfiles(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<PermissionProfileModel>> {
			return this.http.get<Array<PermissionProfileModel>>(this.baseUri + 'v1/permissionprofiles?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Get Permission Profile by ID.
		 * Get v1/permissionprofiles/{guid}
		 * @param {string} guid GUID used to get the Permission Profile.
		 * @return {PermissionProfileModel} PermissionProfileModel.
		 */
		PermissionProfiles_GetPermissionProfile(guid: string): Observable<PermissionProfileModel> {
			return this.http.get<PermissionProfileModel>(this.baseUri + 'v1/permissionprofiles/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get all active phase members
		 * Use root phase to get project members.
		 * Get v1/phasemembers
		 * @param {Date} changedSince Optional: Get phase members that have been added or changed after this date time (greater or equal).
		 * @param {string} pageToken Optional: Page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch.
		 * @param {boolean} isUserActive Optional: Is the user active. Default nothing = all.
		 * @return {Array<PhaseMemberOutputModel>} All the phase members
		 */
		PhaseMembers_GetAllPhaseMembers(changedSince: Date | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined, isUserActive: boolean | null | undefined): Observable<Array<PhaseMemberOutputModel>> {
			return this.http.get<Array<PhaseMemberOutputModel>>(this.baseUri + 'v1/phasemembers?changedSince=' + changedSince?.toISOString() + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&isUserActive=' + isUserActive, {});
		}

		/**
		 * Adds a phase member.
		 * User is always added as a root phase (project) member also.
		 * Post v1/phasemembers
		 * @param {boolean} addToAllSubPhases Optional: Add member to all sub phases. Default true.
		 * @param {PhaseMemberModel} requestBody PhaseMemberModel.
		 * @return {void} 
		 */
		PhaseMembers_PostPhaseMember(addToAllSubPhases: boolean | null | undefined, requestBody: PhaseMemberModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/phasemembers?addToAllSubPhases=' + addToAllSubPhases, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a phase member
		 * Returns: No Content (204) if succeeded. Only one of transferToRoleGuid and transferToUserGuid can be provided. Use root phase to delete a project member.
		 * Delete v1/phasemembers/{userGuid}
		 * @param {string} userGuid GUID of the phase member to remove
		 * @param {ResourceAllocationAction} resourceAllocationAction Optional: The action to be applied to the user's resource allocations
		 * @param {string} transferToUserGuid Optional: GUID of the user to whom the resource allocations are transferred.
		 * @return {void} 
		 */
		PhaseMembers_DeletePhaseMember(userGuid: string, resourceAllocationAction: ResourceAllocationAction | null | undefined, transferToUserGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/phasemembers/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '&resourceAllocationAction=' + resourceAllocationAction + '&transferToUserGuid=' + (transferToUserGuid == null ? '' : encodeURIComponent(transferToUserGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds business unit users to phase members.
		 * Users are always added as a root phase (project) member also.
		 * Post v1/phasemembersfrombusinessunitusers
		 * @param {boolean} addToAllSubPhases Optional: Add member to all sub phases. Default true.
		 * @param {PhaseMembersFromBusinessUnitUsersModel} requestBody PhaseMemberModel.
		 * @return {Array<PhaseMemberModel>} List of added members.
		 */
		PhaseMembers_PostPhaseMembersFromBusinessUnitUsers(addToAllSubPhases: boolean | null | undefined, requestBody: PhaseMembersFromBusinessUnitUsersModel): Observable<Array<PhaseMemberModel>> {
			return this.http.post<Array<PhaseMemberModel>>(this.baseUri + 'v1/phasemembersfrombusinessunitusers?addToAllSubPhases=' + addToAllSubPhases, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the phases.
		 * Get v1/phases
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get phases that have been added or changed after this date time (greater or equal).
		 * @param {string} code Optional: Code of the phase.
		 * @param {Array<string>} projectGuids Optional: List of project ids.
		 * @return {Array<PhaseOutputModel>} 
		 */
		Phases_GetPhases(pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined, code: string | null | undefined, projectGuids: Array<string> | null | undefined): Observable<Array<PhaseOutputModel>> {
			return this.http.get<Array<PhaseOutputModel>>(this.baseUri + 'v1/phases?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString() + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&' + projectGuids?.map(z => `projectGuids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Insert a phase
		 * Post v1/phases
		 * @param {PhaseInputModel} requestBody PhaseOutputModel
		 * @return {void} 
		 */
		Phases_PostPhase(requestBody: PhaseInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/phases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a phase
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/phases/{guid}
		 * @param {string} guid GUID used to delete the phase.
		 * @return {void} 
		 */
		Phases_DeletePhase(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/phases/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get phase by ID
		 * Get v1/phases/{guid}
		 * @param {string} guid Id used to get the phase.
		 * @return {PhaseOutputModel} 
		 */
		Phases_GetPhase(guid: string): Observable<PhaseOutputModel> {
			return this.http.get<PhaseOutputModel>(this.baseUri + 'v1/phases/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a phase or a part of it
		 * Patch v1/phases/{guid}
		 * @param {string} guid ID of the phase
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of PhaseInputModel
		 * @return {Array<PhaseOutputModel>} Updated phase
		 */
		Phases_PatchPhase(guid: string, requestBody: Array<PatchOperation>): Observable<Array<PhaseOutputModel>> {
			return this.http.patch<Array<PhaseOutputModel>>(this.baseUri + 'v1/phases/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get phase members
		 * Use root phase to get project members.
		 * Get v1/phases/{phaseGuid}/phasemembers
		 * @param {string} phaseGuid GUID of the phase.
		 * @param {string} pageToken Optional: Page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch.
		 * @param {boolean} isActive Optional: Is the member active on the phase. Filters only root phase members. Default nothing = all.
		 * @param {boolean} isUserActive Optional: Is the user active. Default nothing = all.
		 * @return {Array<PhaseMemberOutputModel>} All the phase members
		 */
		PhaseMembers_GetPhaseMembers(phaseGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, isActive: boolean | null | undefined, isUserActive: boolean | null | undefined): Observable<Array<PhaseMemberOutputModel>> {
			return this.http.get<Array<PhaseMemberOutputModel>>(this.baseUri + 'v1/phases/' + (phaseGuid == null ? '' : encodeURIComponent(phaseGuid)) + '/phasemembers&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&isActive=' + isActive + '&isUserActive=' + isUserActive, {});
		}

		/**
		 * Get resource allocations for a phase with required filters (startDate and endDate or changedSince, max 30 days to be fetched at once)
		 * Get v1/phases/{phaseGuid}/resourceallocations/allocations
		 * @param {Date} startDate Get resource allocations with startDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
		 * @param {Date} endDate Get resource allocations with endDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
		 * @param {Date} changedSince Optional: Get resource allocations that have been added or changed after this date time (greater or equal).
		 * @param {number} rowCount Optional: Number of rows to fetch.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @return {ResourceAllocationOutputModel} 
		 */
		ResourceAllocations_GetResourceAllocationsByPhaseGuid(phaseGuid: string, startDate: Date | null | undefined, endDate: Date | null | undefined, changedSince: Date | null | undefined, userLicenseTypes: Array<LicenseUserType> | null | undefined, projectGuid: string | null | undefined, userGuid: string | null | undefined, projectBusinessUnitGuid: string | null | undefined, userBusinessUnitGuid: string | null | undefined, projectManagerUserGuid: string | null | undefined, userTagGuid: string | null | undefined, useSalesProbability: boolean | null | undefined, projectStatusTypeGuid: string | null | undefined, projectTagGuid: string | null | undefined, superiorUserGuid: string | null | undefined, salesStatusTypeGuid: string | null | undefined, resourceAllocationGuid: string | null | undefined, salesProgress: SalesProgress | null | undefined, rowCount: number | null | undefined, pageToken: string | null | undefined): Observable<ResourceAllocationOutputModel> {
			return this.http.get<ResourceAllocationOutputModel>(this.baseUri + 'v1/phases/' + (phaseGuid == null ? '' : encodeURIComponent(phaseGuid)) + '/resourceallocations/allocations&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&changedSince=' + changedSince?.toISOString() + '&' + userLicenseTypes?.map(z => `userLicenseTypes=${z}`).join('&') + '&projectGuid=' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '&userGuid=' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '&projectBusinessUnitGuid=' + (projectBusinessUnitGuid == null ? '' : encodeURIComponent(projectBusinessUnitGuid)) + '&userBusinessUnitGuid=' + (userBusinessUnitGuid == null ? '' : encodeURIComponent(userBusinessUnitGuid)) + '&projectManagerUserGuid=' + (projectManagerUserGuid == null ? '' : encodeURIComponent(projectManagerUserGuid)) + '&userTagGuid=' + (userTagGuid == null ? '' : encodeURIComponent(userTagGuid)) + '&useSalesProbability=' + useSalesProbability + '&projectStatusTypeGuid=' + (projectStatusTypeGuid == null ? '' : encodeURIComponent(projectStatusTypeGuid)) + '&projectTagGuid=' + (projectTagGuid == null ? '' : encodeURIComponent(projectTagGuid)) + '&superiorUserGuid=' + (superiorUserGuid == null ? '' : encodeURIComponent(superiorUserGuid)) + '&salesStatusTypeGuid=' + (salesStatusTypeGuid == null ? '' : encodeURIComponent(salesStatusTypeGuid)) + '&resourceAllocationGuid=' + (resourceAllocationGuid == null ? '' : encodeURIComponent(resourceAllocationGuid)) + '&salesProgress=' + salesProgress + '&rowCount=' + rowCount + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get all work types that are available for a phase (for work hour entry)
		 * Only the active work types are included in the list, whether they come from organization settings or project specific work types.
		 * Get v1/phases/{phaseGuid}/worktypes
		 * @param {string} phaseGuid Id of the phase.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: number of rows to fetch
		 * @param {string} userGuid Id of the user for whom the work types are retrieved. Default is current user.
		 * @return {Array<WorkTypeOutputModel>} All the work types matching search criteria
		 */
		WorkTypes_GetPhaseWorkTypes(phaseGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, userGuid: string | null | undefined): Observable<Array<WorkTypeOutputModel>> {
			return this.http.get<Array<WorkTypeOutputModel>>(this.baseUri + 'v1/phases/' + (phaseGuid == null ? '' : encodeURIComponent(phaseGuid)) + '/worktypes&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&userGuid=' + (userGuid == null ? '' : encodeURIComponent(userGuid)), {});
		}

		/**
		 * Get phase status types
		 * Get v1/phasestatustypes
		 * @param {boolean} active If not given, return all phase status types, if given as true return only active phase status types, if given as false returns only inactive phase status types
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @return {Array<PhaseStatusTypeModel>} All the phase status types
		 */
		PhaseStatusTypes_GetPhaseStatusTypes(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<PhaseStatusTypeModel>> {
			return this.http.get<Array<PhaseStatusTypeModel>>(this.baseUri + 'v1/phasestatustypes?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a phase status type
		 * Post v1/phasestatustypes
		 * @param {PhaseStatusTypeModel} requestBody PhaseStatusTypeModel
		 * @return {void} 
		 */
		PhaseStatusTypes_PostPhaseStatusType(requestBody: PhaseStatusTypeModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/phasestatustypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a phase status type
		 * Returns: No Content (204) if succeeded. Not found (404) if phase status type can't be found.
		 * Delete v1/phasestatustypes/{guid}
		 * @param {string} guid ID for the phase status type to delete
		 * @param {string} moveUsagesToGuid Optional: ID of the phase status type to which to move usages of this phase status type. Default null. If phase status type is in use and usages aren't moved the deletion might fail.
		 * @return {void} 
		 */
		PhaseStatusTypes_DeletePhaseStatusType(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/phasestatustypes/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get phase status type by GUID
		 * Get v1/phasestatustypes/{guid}
		 * @param {string} guid Id used to get the phase status type.
		 * @return {PhaseStatusTypeModel} PhaseStatusTypeModel
		 */
		PhaseStatusTypes_GetPhaseStatusType(guid: string): Observable<PhaseStatusTypeModel> {
			return this.http.get<PhaseStatusTypeModel>(this.baseUri + 'v1/phasestatustypes/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a phase status type or a part of it
		 * Patch v1/phasestatustypes/{guid}
		 * @param {string} guid ID of the phase status type
		 * @param {Array<PatchOperation>} requestBody JSON patch document of TaskStatusTypeModel
		 * @return {Array<PhaseStatusTypeModel>} list of updated phase status type
		 */
		PhaseStatusTypes_PatchPhaseStatusType(guid: string, requestBody: Array<PatchOperation>): Observable<Array<PhaseStatusTypeModel>> {
			return this.http.patch<Array<PhaseStatusTypeModel>>(this.baseUri + 'v1/phasestatustypes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all price lists.
		 * Get v1/pricelists
		 * @param {boolean} active If not given, return all price lists, if given as true return only active price lists, if given as false returns only inactive price lists.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from price list name.
		 * @param {string} currencyGuid Optional: ID of the price list currency.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc".
		 * @param {string} name Optional: Name of the price list.
		 * @return {Array<PriceListOutputModel>} All the price lists.
		 */
		PriceLists_GetPricelists(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, currencyGuid: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined, name: string | null | undefined): Observable<Array<PriceListOutputModel>> {
			return this.http.get<Array<PriceListOutputModel>>(this.baseUri + 'v1/pricelists?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&currencyGuid=' + (currencyGuid == null ? '' : encodeURIComponent(currencyGuid)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&') + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get price list by GUID.
		 * Get v1/pricelists/{guid}
		 * @param {string} guid ID used to get the price list.
		 * @return {PriceListModel} 
		 */
		PriceLists_GetPriceList(guid: string): Observable<PriceListModel> {
			return this.http.get<PriceListModel>(this.baseUri + 'v1/pricelists/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get all price list versions of a price list.
		 * Get v1/pricelists/{pricelistGuid}/pricelistversions
		 * @return {Array<PricelistVersionOutputModel>} Price list versions.
		 */
		PriceListVersions_GetPricelistVersionsByPricelist(pricelistGuid: string): Observable<Array<PricelistVersionOutputModel>> {
			return this.http.get<Array<PricelistVersionOutputModel>>(this.baseUri + 'v1/pricelists/' + (pricelistGuid == null ? '' : encodeURIComponent(pricelistGuid)) + '/pricelistversions', {});
		}

		/**
		 * Get a price list version by guid.
		 * Get v1/pricelistversions/{guid}
		 * @return {PricelistVersionOutputModel} Price list version.
		 */
		PriceListVersions_GetPricelistVersion(guid: string): Observable<PricelistVersionOutputModel> {
			return this.http.get<PricelistVersionOutputModel>(this.baseUri + 'v1/pricelistversions/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get all the overtime prices for a price list version.
		 * Get v1/pricelistversions/{pricelistVersionGuid}/overtimeprices
		 * @return {Array<OvertimePriceModel>} Projects.
		 */
		OvertimePrices_GetOvertimePrices(pricelistVersionGuid: string): Observable<Array<OvertimePriceModel>> {
			return this.http.get<Array<OvertimePriceModel>>(this.baseUri + 'v1/pricelistversions/' + (pricelistVersionGuid == null ? '' : encodeURIComponent(pricelistVersionGuid)) + '/overtimeprices', {});
		}

		/**
		 * Get all the product prices for a price list version.
		 * Get v1/pricelistversions/{pricelistVersionGuid}/productprices
		 * @param {string} pricelistVersionGuid ID of the price list version.
		 * @param {boolean} fromPricelistOnly If true return only prices from the price list, if false also returns prices from the products. Default is false.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from Product name.
		 * @param {boolean} calculateRowCount Optional: Calculate the number of total rows. Default false = total row count is returned as zero.
		 * @param {string} productCode Optional: Absolute search for products with specified product code.
		 * @param {Array<string>} productGuids Optional: Search all product price(s) by products guid(s).
		 * @param {boolean} isVolumePriced Optional: If true, return only volume priced products. If false, return all non volume priced products. Default is null, which means return all products.
		 * @param {Array<string>} productCategoryGuids Optional: Search product prices according to product category / categories by product category guid(s).
		 * @param {Array<ProductType>} productTypes Optional: Search product prices according to product type / types.
		 * @return {Array<ProductPriceOutputModel>} Projects.
		 */
		ProductPrices_GetProductPrices(pricelistVersionGuid: string, fromPricelistOnly: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, productCode: string | null | undefined, productGuids: Array<string> | null | undefined, isVolumePriced: boolean | null | undefined, productCategoryGuids: Array<string> | null | undefined, productTypes: Array<ProductType> | null | undefined): Observable<Array<ProductPriceOutputModel>> {
			return this.http.get<Array<ProductPriceOutputModel>>(this.baseUri + 'v1/pricelistversions/' + (pricelistVersionGuid == null ? '' : encodeURIComponent(pricelistVersionGuid)) + '/productprices&fromPricelistOnly=' + fromPricelistOnly + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&productCode=' + (productCode == null ? '' : encodeURIComponent(productCode)) + '&' + productGuids?.map(z => `productGuids=${encodeURIComponent(z)}`).join('&') + '&isVolumePriced=' + isVolumePriced + '&' + productCategoryGuids?.map(z => `productCategoryGuids=${encodeURIComponent(z)}`).join('&') + '&' + productTypes?.map(z => `productTypes=${z}`).join('&'), {});
		}

		/**
		 * Get all the travel prices for a price list version.
		 * Get v1/pricelistversions/{pricelistVersionGuid}/travelprices
		 * @param {string} pricelistVersionGuid ID of the price list version.
		 * @param {boolean} fromPricelistOnly If true return only prices from the price list, if false also returns prices from the products. Default is false.
		 * @param {Array<ExpensesClass>} expenseClasses Optional: List of expense classes to search by, defaults to all travel categories.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from Product name.
		 * @param {boolean} calculateRowCount Optional: Calculate the number of total rows. Default false = total row count is returned as zero.
		 * @return {Array<TravelPriceOutputModel>} TravelPriceModel.
		 */
		TravelPrices_GetTravelPrices(pricelistVersionGuid: string, fromPricelistOnly: boolean | null | undefined, expenseClasses: Array<ExpensesClass> | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined): Observable<Array<TravelPriceOutputModel>> {
			return this.http.get<Array<TravelPriceOutputModel>>(this.baseUri + 'v1/pricelistversions/' + (pricelistVersionGuid == null ? '' : encodeURIComponent(pricelistVersionGuid)) + '/travelprices&fromPricelistOnly=' + fromPricelistOnly + '&' + expenseClasses?.map(z => `expenseClasses=${z}`).join('&') + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount, {});
		}

		/**
		 * Get all the workHourPrices for a price list version.
		 * Get v1/pricelistversions/{pricelistVersionGuid}/workhourprices
		 * @param {string} pricelistVersionGuid Price list version identifier.
		 * @param {string} pageToken Optional: page token to fetch the next page..
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get prices that have been added or changed after this date time (greater or equal).
		 * @return {WorkHourPriceOutputModel} workHourPrices.
		 */
		WorkHourPrices_GetWorkHourPrices(pricelistVersionGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<WorkHourPriceOutputModel> {
			return this.http.get<WorkHourPriceOutputModel>(this.baseUri + 'v1/pricelistversions/' + (pricelistVersionGuid == null ? '' : encodeURIComponent(pricelistVersionGuid)) + '/workhourprices&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Get product categories.
		 * Get v1/productcategories
		 * @param {boolean} active If not given, return all Product categories, if given as true return only active Product categories, if given as false returns only inactive Product categories.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @param {string} textToSearch Optional: Text to search from product category name or code.
		 * @param {Date} changedSince Optional: Get product categories that have been added or changed after this date time (greater or equal).
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: ?sortings[0].key=Name&sortings[0].value=Desc &sortings[1].key=Code&sortings[1].value=Asc.
		 * @return {Array<ProductCategoryModel>} Product categories.
		 */
		ProductCategories_GetProductCategories(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, changedSince: Date | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<ProductCategoryModel>> {
			return this.http.get<Array<ProductCategoryModel>>(this.baseUri + 'v1/productcategories?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&changedSince=' + changedSince?.toISOString() + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a product category.
		 * Post v1/productcategories
		 * @param {ProductCategoryModel} requestBody ProductCategoryModel.
		 * @return {void} 
		 */
		ProductCategories_PostProductCategory(requestBody: ProductCategoryModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/productcategories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a product category.
		 * Returns: No Content (204) if succeeded. Not found (404) if product category can't be found.
		 * Delete v1/productcategories/{guid}
		 * @param {string} guid ID for the product category to delete.
		 * @return {void} 
		 */
		ProductCategories_DeleteProductCategory(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/productcategories/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get product category by ID.
		 * Get v1/productcategories/{guid}
		 * @param {string} guid Id used to get the product category.
		 * @return {ProductCategoryModel} ProductCategoryModel.
		 */
		ProductCategories_GetProductCategory(guid: string): Observable<ProductCategoryModel> {
			return this.http.get<ProductCategoryModel>(this.baseUri + 'v1/productcategories/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a product category or a part of it.
		 * Patch v1/productcategories/{guid}
		 * @param {string} guid ID of the product category.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProductCategoryModel.
		 * @return {Array<ProductCategoryModel>} list of updated product category.
		 */
		ProductCategories_PatchProductCategory(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProductCategoryModel>> {
			return this.http.patch<Array<ProductCategoryModel>>(this.baseUri + 'v1/productcategories/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Insert a product country setting
		 * Post v1/productcountrysettings
		 * @param {ProductCountrySettingsModel} requestBody ProductCountrySettingsModel
		 * @return {void} 
		 */
		ProductCountrySettings_PostProductCountrySettings(requestBody: ProductCountrySettingsModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/productcountrysettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a product country setting
		 * Returns: No Content (204) if succeeded. Not found (404) if product country setting can't be found.
		 * Delete v1/productcountrysettings/{guid}
		 * @param {string} guid GUID used to delete the product country setting.
		 * @return {void} 
		 */
		ProductCountrySettings_DeleteProductCountrySetting(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/productcountrysettings/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update (Patch) a product country setting
		 * Patch v1/productcountrysettings/{guid}
		 * @param {string} guid ID of the product country setting
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProductCountrySettingsModel
		 * @return {Array<ProductCountrySettingsModel>} List of updated product country settings
		 */
		ProductCountrySettings_PatchProductCountrySettings(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProductCountrySettingsModel>> {
			return this.http.patch<Array<ProductCountrySettingsModel>>(this.baseUri + 'v1/productcountrysettings/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get product price by ID.
		 * Get v1/productprices/{guid}
		 * @param {string} guid Id used to get the product price.
		 * @return {ProductPriceOutputModel} 
		 */
		ProductPrices_GetProductPrice(guid: string): Observable<ProductPriceOutputModel> {
			return this.http.get<ProductPriceOutputModel>(this.baseUri + 'v1/productprices/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get all the Products
		 * Get v1/products
		 * @param {number} rowCount Optional: Number of rows to fetch
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {ProductOutputModelType} type Product type. if given, it filters the products by the given type.
		 * @param {boolean} isActive If not given, return all Products, if given as true return only isActive Products, if given as false returns only inactive Products
		 * @param {string} code Optional: Code of the product.
		 * @param {Date} changedSince Optional: Get products that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProductOutputModel>} All the Products
		 */
		Products_GetProducts(rowCount: number | null | undefined, pageToken: string | null | undefined, type: ProductOutputModelType | null | undefined, isActive: boolean | null | undefined, code: string | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProductOutputModel>> {
			return this.http.get<Array<ProductOutputModel>>(this.baseUri + 'v1/products?rowCount=' + rowCount + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&type=' + type + '&isActive=' + isActive + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a product.
		 * Post v1/products
		 * @param {ProductInputModel} requestBody ProductModel.
		 * @return {void} 
		 */
		Products_PostProduct(requestBody: ProductInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/products', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a product.
		 * Returns: No Content (204) if succeeded. Not found (404) if product can't be found.
		 * Delete v1/products/{guid}
		 * @param {string} guid ID for the product to delete.
		 * @return {void} 
		 */
		Products_DeleteProduct(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/products/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get product by ID.
		 * Get v1/products/{guid}
		 * @param {string} guid GUID used to get the product.
		 * @return {ProductOutputModel} Product.
		 */
		Products_GetProduct(guid: string): Observable<ProductOutputModel> {
			return this.http.get<ProductOutputModel>(this.baseUri + 'v1/products/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an product or a part of it.
		 * Patch v1/products/{guid}
		 * @param {string} guid ID of the product.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProductModel.
		 * @return {Array<ProductOutputModel>} List of updated products.
		 */
		Products_PatchProduct(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProductOutputModel>> {
			return this.http.patch<Array<ProductOutputModel>>(this.baseUri + 'v1/products/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the country settings for a product
		 * Get v1/products/{productGuid}/productcountrysettings
		 * @param {string} productGuid GUID of the product.
		 * @return {Array<ProductCountrySettingsModel>} All the ProductCountrySettings (tax related information)
		 */
		ProductCountrySettings_GetProductCountrySettings(productGuid: string): Observable<Array<ProductCountrySettingsModel>> {
			return this.http.get<Array<ProductCountrySettingsModel>>(this.baseUri + 'v1/products/' + (productGuid == null ? '' : encodeURIComponent(productGuid)) + '/productcountrysettings', {});
		}

		/**
		 * Insert a billing customer for a project.
		 * Post v1/projectbillingcustomers
		 * @param {ProjectBillingCustomerModel2} requestBody ProjectBillingCustomerModel.
		 * @return {void} 
		 */
		ProjectBillingCustomers_PostProjectBillingCustomer(requestBody: ProjectBillingCustomerModel2): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectbillingcustomers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a project billing customer.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/projectbillingcustomers/{guid}
		 * @param {string} guid GUID of the project billing customer to remove.
		 * @return {void} 
		 */
		ProjectBillingCustomers_DeleteProjectBillingCustomer(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projectbillingcustomers/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a project billing customer.
		 * Get v1/projectbillingcustomers/{guid}
		 * @param {string} guid ID of the project billing customer.
		 * @return {ProjectBillingCustomerModel2} Project billing customer.
		 */
		ProjectBillingCustomers_GetProjectBillingCustomer(guid: string): Observable<ProjectBillingCustomerModel2> {
			return this.http.get<ProjectBillingCustomerModel2>(this.baseUri + 'v1/projectbillingcustomers/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a project billing customer.
		 * Patch v1/projectbillingcustomers/{guid}
		 * @param {string} guid ID of the project billing customer.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProjectBillingCustomerModel.
		 * @return {Array<ProjectBillingCustomerModel2>} list of updated project billing customer.
		 */
		ProjectBillingCustomers_PatchProjectBillingCustomer(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectBillingCustomerModel2>> {
			return this.http.patch<Array<ProjectBillingCustomerModel2>>(this.baseUri + 'v1/projectbillingcustomers/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the project fees.
		 * Get v1/projectfees
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: Number of rows to fetch
		 * @param {Date} changedSince Optional: Get project fees that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProjectFeeOutputModel>} ProjectFee
		 */
		ProjectFees_GetProjectFeesByToken(pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProjectFeeOutputModel>> {
			return this.http.get<Array<ProjectFeeOutputModel>>(this.baseUri + 'v1/projectfees?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a project fee.
		 * Post v1/projectfees
		 * @param {ProjectFeeInputModel} requestBody ProjectFeeInputModel.
		 * @return {void} 
		 */
		ProjectFees_PostProjectFee(requestBody: ProjectFeeInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectfees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a project fee.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/projectfees/{guid}
		 * @param {string} guid GUID used to delete the project fee.
		 * @return {void} 
		 */
		ProjectFees_DeleteProjectFree(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projectfees/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get projectFee by ID.
		 * Get v1/projectfees/{guid}
		 * @param {string} guid Id used to get the projectFee.
		 * @return {ProjectFeeOutputModel} 
		 */
		ProjectFees_GetProjectFee(guid: string): Observable<ProjectFeeOutputModel> {
			return this.http.get<ProjectFeeOutputModel>(this.baseUri + 'v1/projectfees/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a projectFee or a part of it.
		 * Patch v1/projectfees/{guid}
		 * @param {string} guid ID of the project fee Can also be comma separate list of IDs to patch multiple project fees with one call. When multiple IDs are given, returns model which has list of succeeded project fees and list of errors.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ProjectFeeInputModel.
		 * @return {Array<ProjectFeeOutputModel>} List of updated project fees.
		 */
		ProjectFees_PatchProjectFee(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectFeeOutputModel>> {
			return this.http.patch<Array<ProjectFeeOutputModel>>(this.baseUri + 'v1/projectfees/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get project file by ID.
		 * Get v1/projectfiles/{guid}
		 * @param {string} guid GUID used to get the project file.
		 * @return {ProjectFileModel} ProposalFile.
		 */
		Files_GetProjectFile(guid: string): Observable<ProjectFileModel> {
			return this.http.get<ProjectFileModel>(this.baseUri + 'v1/projectfiles/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Insert a project forecast
		 * Post v1/projectforecasts
		 * @param {ProjectForecastInputModel} requestBody ProjectForecastOutputInputModel
		 * @return {void} 
		 */
		ProjectForecasts_PostForecast(requestBody: ProjectForecastInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectforecasts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a project forecast
		 * Returns: No Content (204) if succeeded. Not found (404) if product can't be found.
		 * Delete v1/projectforecasts/{guid}
		 * @param {string} guid ID for the project forecast to delete
		 * @return {void} 
		 */
		ProjectForecasts_DeleteForecast(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projectforecasts/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project forecast by ID
		 * Get v1/projectforecasts/{guid}
		 * @param {string} guid GUID used to get the project forecast.
		 * @return {ProjectForecastOutputModel} Project forecast
		 */
		ProjectForecasts_GetForecast(guid: string): Observable<ProjectForecastOutputModel> {
			return this.http.get<ProjectForecastOutputModel>(this.baseUri + 'v1/projectforecasts/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an project forecast or a part of it
		 * Patch v1/projectforecasts/{guid}
		 * @param {string} guid ID of the project forecast
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProjectForecastInputModel
		 * @return {Array<ProjectForecastOutputModel>} List of updated Project forecast
		 */
		ProjectForecasts_PatchForecast(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectForecastOutputModel>> {
			return this.http.patch<Array<ProjectForecastOutputModel>>(this.baseUri + 'v1/projectforecasts/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new project invoice settings.
		 * Post v1/projectinvoicesettings
		 * @param {ProjectInvoiceSettingsInputModel} requestBody Project invoice settings.
		 * @return {void} 
		 */
		ProjectInvoiceSettings_PostProjectInvoiceSettings(requestBody: ProjectInvoiceSettingsInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectinvoicesettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an project invoice settings.
		 * Returns: No Content (204) if succeeded. Not found (404) if project invoice settings can't be found.
		 * Delete v1/projectinvoicesettings/{guid}
		 * @param {string} guid ID for the project invoice settings to delete.
		 * @return {void} 
		 */
		ProjectInvoiceSettings_DeleteProjectInvoiceSettings(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projectinvoicesettings/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project invoice settings by ID.
		 * Get v1/projectinvoicesettings/{guid}
		 * @param {string} guid ID of the project invoice settings.
		 * @return {ProjectInvoiceSettingsOutputModel} The project invoice settings.
		 */
		ProjectInvoiceSettings_GetProjectInvoiceSetting(guid: string): Observable<ProjectInvoiceSettingsOutputModel> {
			return this.http.get<ProjectInvoiceSettingsOutputModel>(this.baseUri + 'v1/projectinvoicesettings/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) project invoice settings.
		 * Patch v1/projectinvoicesettings/{guid}
		 * @param {string} guid ID of the project invoice settings.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProjectInvoiceSettingsInputModel.
		 * @return {Array<ProjectInvoiceSettingsOutputModel>} The project invoice settings.
		 */
		ProjectInvoiceSettings_PatchProjectInvoiceSettings(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectInvoiceSettingsOutputModel>> {
			return this.http.patch<Array<ProjectInvoiceSettingsOutputModel>>(this.baseUri + 'v1/projectinvoicesettings/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add a link to a project.
		 * Post v1/projectlinks
		 * @param {ProjectFileModel} requestBody ProjectFileModel.
		 * @return {void} 
		 */
		Files_PostProjectLink(requestBody: ProjectFileModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectlinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a cost exception to a project member.
		 * Post v1/projectmembercostexceptions
		 * @param {ProjectMemberCostExceptionInputModel} requestBody ProjectMemberCostExceptionModel.
		 * @return {void} 
		 */
		ProjectMemberCostExceptions_Post(requestBody: ProjectMemberCostExceptionInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectmembercostexceptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a project member cost exception.
		 * Deletes project member cost exception. Returns: No Content (204) if succeeded.
		 * Delete v1/projectmembercostexceptions/{guid}
		 * @param {string} guid GUID used to delete the project member cost exception.
		 * @return {void} 
		 */
		ProjectMemberCostExceptions_Delete(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projectmembercostexceptions/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project member cost exception by ID.
		 * Get v1/projectmembercostexceptions/{guid}
		 * @param {string} guid GUID used to get the cost exception.
		 * @return {ProjectMemberCostExceptionOutputModel} Link.
		 */
		ProjectMemberCostExceptions_GetProjectMemberCostException(guid: string): Observable<ProjectMemberCostExceptionOutputModel> {
			return this.http.get<ProjectMemberCostExceptionOutputModel>(this.baseUri + 'v1/projectmembercostexceptions/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) project member cost exception.
		 * Patch v1/projectmembercostexceptions/{guid}
		 * @param {string} guid ID of the project member cost exception.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ProjectMemberCostExceptionModel.
		 * @return {Array<ProjectMemberCostExceptionOutputModel>} list of updated links.
		 */
		ProjectMemberCostExceptions_Patch(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectMemberCostExceptionOutputModel>> {
			return this.http.patch<Array<ProjectMemberCostExceptionOutputModel>>(this.baseUri + 'v1/projectmembercostexceptions/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a product to a project.
		 * Post v1/projectproducts
		 * @param {ProjectProductInputModel} requestBody projectProductModel
		 * @return {void} 
		 */
		ProjectProducts_PostProjectProduct(requestBody: ProjectProductInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectproducts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a project product.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/projectproducts/{guid}
		 * @param {string} guid GUID of the project product to remove.
		 * @return {void} 
		 */
		ProjectProducts_DeleteProjectProduct(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projectproducts/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the recurring fee rules.
		 * Get v1/projectrecurringfeerules
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {ProductOutputModelType} productType projectRecurringFeeRule's product type. if given, it filters the projectRecurringFeeRules by the given type.
		 * @param {Date} changedSince Optional: Get recurring fee rules that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProjectRecurringFeeRuleOutputModel>} List of updated project recurring fee rules
		 */
		ProjectRecurringFeeRules_GetProjectRecurringFeeRules(firstRow: number | null | undefined, rowCount: number | null | undefined, productType: ProductOutputModelType | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProjectRecurringFeeRuleOutputModel>> {
			return this.http.get<Array<ProjectRecurringFeeRuleOutputModel>>(this.baseUri + 'v1/projectrecurringfeerules?firstRow=' + firstRow + '&rowCount=' + rowCount + '&productType=' + productType + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a projectRecurringFeeRule.
		 * Post v1/projectrecurringfeerules
		 * @param {ProjectRecurringFeeRuleInputModel} requestBody ProjectRecurringFeeRuleModel.
		 * @return {void} 
		 */
		ProjectRecurringFeeRules_PostProjectRecurringFeeRule(requestBody: ProjectRecurringFeeRuleInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectrecurringfeerules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a projectRecurringFeeRule.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/projectrecurringfeerules/{guid}
		 * @param {string} guid GUID used to delete the project recurring fee rule.
		 * @return {void} 
		 */
		ProjectRecurringFeeRules_DeleteProjectRecurringFeeRule(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projectrecurringfeerules/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project's RecurringFeeRule by ID.
		 * Get v1/projectrecurringfeerules/{guid}
		 * @param {string} guid Id used to get the ProjectRecurringFeeRule.
		 * @param {boolean} includeInactive Indicates the rule should be returned even if it is not active. Default is false.
		 * @return {ProjectRecurringFeeRuleOutputModel} List of updated project recurring fee rules.
		 */
		ProjectRecurringFeeRules_GetProjectRecurringFeeRule(guid: string, includeInactive: boolean | null | undefined): Observable<ProjectRecurringFeeRuleOutputModel> {
			return this.http.get<ProjectRecurringFeeRuleOutputModel>(this.baseUri + 'v1/projectrecurringfeerules/' + (guid == null ? '' : encodeURIComponent(guid)) + '&includeInactive=' + includeInactive, {});
		}

		/**
		 * Update (Patch) a projectRecurringFeeRule or a part of it.
		 * Patch v1/projectrecurringfeerules/{guid}
		 * @param {string} guid ID of the projectRecurringFeeRule.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ProjectRecurringFeeRuleModel.
		 * @return {Array<ProjectRecurringFeeRuleOutputModel>} List of updated projectRecurringFeeRules.
		 */
		ProjectRecurringFeeRules_PatchProjectRecurringFeeRule(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectRecurringFeeRuleOutputModel>> {
			return this.http.patch<Array<ProjectRecurringFeeRuleOutputModel>>(this.baseUri + 'v1/projectrecurringfeerules/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the projects
		 * Get v1/projects
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} currencyGuid Optional: ID of project currency.
		 * @param {Date} changedSince Optional: Get projects that have been added or changed after this date time (greater or equal).
		 * @param {boolean} isBillable Optional: When true fetch projects that have something to bill, when false nothing to bill. Default nothing = all.
		 * @param {boolean} internal Optional: Get internal / non-internal projects.
		 * @return {Array<ProjectOutputModel>} Projects
		 */
		Projects_GetProjects(pageToken: string | null | undefined, rowCount: number | null | undefined, currencyGuid: string | null | undefined, changedSince: Date | null | undefined, isBillable: boolean | null | undefined, customerGuids: Array<string> | null | undefined, projectGuids: Array<string> | null | undefined, projectKeywordGuids: Array<string> | null | undefined, projectStatusTypeGuids: Array<string> | null | undefined, salesPersonGuids: Array<string> | null | undefined, projectOwnerGuids: Array<string> | null | undefined, businessUnitGuids: Array<string> | null | undefined, minimumBillableAmount: number | null | undefined, customerOwnerGuids: Array<string> | null | undefined, invoiceableDate: Date | null | undefined, marketSegmentationGuids: Array<string> | null | undefined, salesStatusTypeGuids: Array<string> | null | undefined, isClosed: boolean | null | undefined, hasRecurringFees: boolean | null | undefined, companyCurrencyGuids: Array<string> | null | undefined, projectMemberUserGuids: Array<string> | null | undefined, numbers: Array<number> | null | undefined, internal: boolean | null | undefined): Observable<Array<ProjectOutputModel>> {
			return this.http.get<Array<ProjectOutputModel>>(this.baseUri + 'v1/projects?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&currencyGuid=' + (currencyGuid == null ? '' : encodeURIComponent(currencyGuid)) + '&changedSince=' + changedSince?.toISOString() + '&isBillable=' + isBillable + '&' + customerGuids?.map(z => `customerGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectGuids?.map(z => `projectGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectKeywordGuids?.map(z => `projectKeywordGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectStatusTypeGuids?.map(z => `projectStatusTypeGuids=${encodeURIComponent(z)}`).join('&') + '&' + salesPersonGuids?.map(z => `salesPersonGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectOwnerGuids?.map(z => `projectOwnerGuids=${encodeURIComponent(z)}`).join('&') + '&' + businessUnitGuids?.map(z => `businessUnitGuids=${encodeURIComponent(z)}`).join('&') + '&minimumBillableAmount=' + minimumBillableAmount + '&' + customerOwnerGuids?.map(z => `customerOwnerGuids=${encodeURIComponent(z)}`).join('&') + '&invoiceableDate=' + invoiceableDate?.toISOString() + '&' + marketSegmentationGuids?.map(z => `marketSegmentationGuids=${encodeURIComponent(z)}`).join('&') + '&' + salesStatusTypeGuids?.map(z => `salesStatusTypeGuids=${encodeURIComponent(z)}`).join('&') + '&isClosed=' + isClosed + '&hasRecurringFees=' + hasRecurringFees + '&' + companyCurrencyGuids?.map(z => `companyCurrencyGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectMemberUserGuids?.map(z => `projectMemberUserGuids=${encodeURIComponent(z)}`).join('&') + '&' + numbers?.map(z => `numbers=${z}`).join('&') + '&internal=' + internal, {});
		}

		/**
		 * Insert a project
		 * When creating a new project, the price list property will be ignored, as it is chosen by default.
		 * Post v1/projects
		 * @param {ProjectInputModelBase} requestBody ProjectInputModelBase
		 * @return {void} 
		 */
		Projects_PostProject(requestBody: ProjectInputModelBase): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the project custom properties.
		 * Get v1/projects/customproperties
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} active Optional: Get only active or inactive project properties.
		 * @param {string} textToSearch Optional: Text to search from custom property name.
		 * @param {boolean} isInUse Optional: Is the customer property used in any custom property usage.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc".
		 * @return {Array<CustomPropertyModel>} 
		 */
		ProjectCustomProperties_GetProjectCustomProperties(firstRow: number | null | undefined, rowCount: number | null | undefined, active: boolean | null | undefined, textToSearch: string | null | undefined, isInUse: boolean | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<CustomPropertyModel>> {
			return this.http.get<Array<CustomPropertyModel>>(this.baseUri + 'v1/projects/customproperties?firstRow=' + firstRow + '&rowCount=' + rowCount + '&active=' + active + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&isInUse=' + isInUse + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a project custom property.
		 * Post v1/projects/customproperties
		 * @param {CustomPropertyModel} requestBody ProjectCustomPropertyModel.
		 * @return {void} 
		 */
		ProjectCustomProperties_PostProjectCustomProperty(requestBody: CustomPropertyModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/customproperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert a project custom property selection item.
		 * Post v1/projects/customproperties/projectcustompropertyselectionitems
		 * @param {ProjectCustomPropertySelectionItemInputModel} requestBody CustomPropertySelectionItemInputModel.
		 * @return {void} 
		 */
		ProjectCustomPropertySelectionItems_PostProjectCustomPropertySelectionItem(requestBody: ProjectCustomPropertySelectionItemInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/customproperties/projectcustompropertyselectionitems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a project custom property selection item.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/projects/customproperties/projectcustompropertyselectionitems/{guid}
		 * @param {string} guid GUID used to delete the project custom property selection item.
		 * @return {void} 
		 */
		ProjectCustomPropertySelectionItems_DeleteProjectCustomPropertySelectionItem(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/customproperties/projectcustompropertyselectionitems/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project custom property selection item by ID.
		 * Get v1/projects/customproperties/projectcustompropertyselectionitems/{guid}
		 * @param {string} guid Id used to get the project custom property selection item.
		 * @return {ProjectCustomPropertySelectionItemOutputModel} 
		 */
		ProjectCustomPropertySelectionItems_GetProjectCustomPropertySelectionItem(guid: string): Observable<ProjectCustomPropertySelectionItemOutputModel> {
			return this.http.get<ProjectCustomPropertySelectionItemOutputModel>(this.baseUri + 'v1/projects/customproperties/projectcustompropertyselectionitems/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a project custom property selection item or a part of it.
		 * Patch v1/projects/customproperties/projectcustompropertyselectionitems/{guid}
		 * @param {string} guid ID of the project custom property selection item.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ProjectCustomPropertySelectionItemInputModel.
		 * @return {Array<ProjectCustomPropertySelectionItemOutputModel>} List of updated project custom properties.
		 */
		ProjectCustomPropertySelectionItems_PatchProjectCustomPropertySelectionItem(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectCustomPropertySelectionItemOutputModel>> {
			return this.http.patch<Array<ProjectCustomPropertySelectionItemOutputModel>>(this.baseUri + 'v1/projects/customproperties/projectcustompropertyselectionitems/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the project custom properties.
		 * Get v1/projects/customproperties/{customPropertyGuid}/projectcustompropertyselectionitems
		 * @param {string} customPropertyGuid Custom property id used to get the project custom property selection items.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} isActive Optional: Get only active or inactive selection items.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {Date} changedSince Optional: Get custom property selection items that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProjectCustomPropertySelectionItemOutputModel>} 
		 */
		ProjectCustomPropertySelectionItems_GetProjectCustomPropertySelectionItems(customPropertyGuid: string, rowCount: number | null | undefined, isActive: boolean | null | undefined, pageToken: string | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProjectCustomPropertySelectionItemOutputModel>> {
			return this.http.get<Array<ProjectCustomPropertySelectionItemOutputModel>>(this.baseUri + 'v1/projects/customproperties/' + (customPropertyGuid == null ? '' : encodeURIComponent(customPropertyGuid)) + '/projectcustompropertyselectionitems&rowCount=' + rowCount + '&isActive=' + isActive + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Deletes a project custom property.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/projects/customproperties/{guid}
		 * @param {string} guid GUID used to delete the project custom property.
		 * @return {void} 
		 */
		ProjectCustomProperties_DeleteProjectCustomProperty(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/customproperties/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project custom property by ID.
		 * Get v1/projects/customproperties/{guid}
		 * @param {string} guid Id used to get the project custom property.
		 * @return {CustomPropertyModel} 
		 */
		ProjectCustomProperties_GetProjectCustomProperty(guid: string): Observable<CustomPropertyModel> {
			return this.http.get<CustomPropertyModel>(this.baseUri + 'v1/projects/customproperties/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a project custom property or a part of it.
		 * Patch v1/projects/customproperties/{guid}
		 * @param {string} guid ID of the project custom property Can also be comma separate list of IDs to patch multiple project custom properties with one call. When multiple IDs are given, returns model which has list of succeeded project custom properties and list of errors.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ProjectCustomPropertyModel.
		 * @return {Array<CustomPropertyModel>} List of updated project custom properties.
		 */
		ProjectCustomProperties_PatchProjectCustomProperty(guid: string, requestBody: Array<PatchOperation>): Observable<Array<CustomPropertyModel>> {
			return this.http.patch<Array<CustomPropertyModel>>(this.baseUri + 'v1/projects/customproperties/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Insert a project custom value.
		 * Post v1/projects/customvalues
		 * @param {ProjectCustomValueModel} requestBody ProjectCustomValueModel.
		 * @return {void} 
		 */
		ProjectCustomValues_PostProjectCustomValue(requestBody: ProjectCustomValueModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/customvalues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a project custom value.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/projects/customvalues/{guid}
		 * @param {string} guid GUID used to delete the project custom value.
		 * @return {void} 
		 */
		ProjectCustomValues_DeleteProjectCustomValue(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/customvalues/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project custom value by ID.
		 * Get v1/projects/customvalues/{guid}
		 * @param {string} guid Id used to get the project custom value.
		 * @return {ProjectCustomValueModel} 
		 */
		ProjectCustomValues_GetProjectCustomValue(guid: string): Observable<ProjectCustomValueModel> {
			return this.http.get<ProjectCustomValueModel>(this.baseUri + 'v1/projects/customvalues/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a project custom value or a part of it.
		 * Patch v1/projects/customvalues/{guid}
		 * @param {string} guid ID of the project custom value Can also be comma separate list of IDs to patch multiple project custom values with one call. When multiple IDs are given, returns model which has list of succeeded project custom values and list of errors.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ProjectCustomValueModel.
		 * @return {Array<ProjectCustomValueModel>} List of updated project custom values.
		 */
		ProjectCustomValues_PatchProjectCustomValue(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectCustomValueModel>> {
			return this.http.patch<Array<ProjectCustomValueModel>>(this.baseUri + 'v1/projects/customvalues/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a project
		 * Returns: No Content (204) if succeeded. Not found (404) if project can't be found.
		 * Delete v1/projects/{guid}
		 * @param {string} guid ID for the project to delete
		 * @return {void} 
		 */
		Projects_DeleteProject(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project by ID
		 * Get v1/projects/{guid}
		 * @param {string} guid Id used to get the project.
		 * @return {ProjectOutputModel} 
		 */
		Projects_GetProject(guid: string): Observable<ProjectOutputModel> {
			return this.http.get<ProjectOutputModel>(this.baseUri + 'v1/projects/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a project or a part of it
		 * To update current project status, give ProjectStatusTypeGuid and possibly Description. To update current sales status, give SalesStatusTypeGuid (
		 * Patch v1/projects/{guid}
		 * @param {string} guid ID of the project
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ProjectInputModel
		 * @return {Array<ProjectOutputModel>} List of updated projects
		 */
		Projects_PatchProject(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectOutputModel>> {
			return this.http.patch<Array<ProjectOutputModel>>(this.baseUri + 'v1/projects/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get project's phases as flat list
		 * Get v1/projects/{guid}/phaseswithhierarchy
		 * @param {string} guid Id of the project.
		 * @return {Array<PhaseModelWithHierarchyInfo>} All the phases for the project
		 */
		Phases_GetProjectPhases(guid: string): Observable<Array<PhaseModelWithHierarchyInfo>> {
			return this.http.get<Array<PhaseModelWithHierarchyInfo>>(this.baseUri + 'v1/projects/' + (guid == null ? '' : encodeURIComponent(guid)) + '/phaseswithhierarchy', {});
		}

		/**
		 * Get the project custom values.
		 * Get v1/projects/{projectGuid}/customvalues
		 * @param {string} projectGuid ID of the project.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} active Optional: Get only values of active or inactive project custom properties.
		 * @param {Array<string>} target List of target for which to get the values.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (sub-model fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc".
		 * @return {Array<ProjectCustomValueModel>} 
		 */
		ProjectCustomValues_GetProjectCustomValues(projectGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined, active: boolean | null | undefined, target: Array<string> | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<ProjectCustomValueModel>> {
			return this.http.get<Array<ProjectCustomValueModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/customvalues&firstRow=' + firstRow + '&rowCount=' + rowCount + '&active=' + active + '&' + target?.map(z => `target=${encodeURIComponent(z)}`).join('&') + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Get all files of a project by its id.
		 * Get v1/projects/{projectGuid}/files
		 * @param {string} projectGuid GUID of the project used to get the files.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc&sortings[1].key=Number&sortings[1].value=Asc".
		 * @return {Array<ProjectFileModel>} File.
		 */
		Files_GetProjectFiles(projectGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<ProjectFileModel>> {
			return this.http.get<Array<ProjectFileModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/files&firstRow=' + firstRow + '&rowCount=' + rowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Get project's flat rates.
		 * Get v1/projects/{projectGuid}/flatrates
		 * @param {string} projectGuid Id of the project.
		 * @return {Array<FlatRateOutputModel>} All the flat rates for the project.
		 */
		FlatRates_GetFlatratesForProject(projectGuid: string): Observable<Array<FlatRateOutputModel>> {
			return this.http.get<Array<FlatRateOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/flatrates', {});
		}

		/**
		 * Get all the keywords for project.
		 * Get v1/projects/{projectGuid}/keywords
		 * @param {string} projectGuid ID of the project for which keywords are requested.
		 * @param {boolean} active If not given, return all Keywords, if given as true return only active Keywords, if given as false returns only inactive Keywords.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Keyword&sortings[0].value=Desc".
		 * @return {Array<ProjectKeywordModel>} Keywords.
		 */
		Keywords_GetProjectKeywords(projectGuid: string, active: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<ProjectKeywordModel>> {
			return this.http.get<Array<ProjectKeywordModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/keywords&active=' + active + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Delete a keyword from the project
		 * Returns: No Content (204) if succeeded. Not found (404) if the keyword or the link can't be found.
		 * Delete v1/projects/{projectGuid}/keywords/{guid}
		 * @return {void} 
		 */
		Keywords_DeleteProjectKeyword(projectGuid: string, guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/keywords/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Link existing keyword to project
		 * Post v1/projects/{projectGuid}/keywords/{guid}
		 * @return {void} 
		 */
		Keywords_LinkKeywordToProject(projectGuid: string, guid: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/keywords/' + (guid == null ? '' : encodeURIComponent(guid)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the overtimePrices for a project.
		 * Get v1/projects/{projectGuid}/overtimeprices
		 * @return {Array<OvertimePriceModel>} Projects.
		 */
		OvertimePrices_GetOvertimePricesForProject(projectGuid: string): Observable<Array<OvertimePriceModel>> {
			return this.http.get<Array<OvertimePriceModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/overtimeprices', {});
		}

		/**
		 * Create custom price list for a project. If project already has a custom price list returns existing price list.
		 * Creates a new price list if project doesn't have a custom price list.
		 * Project can only have one custom price list.
		 * Note that project's price list will be changed to the custom price list created here and
		 * also existing prices are copied to the new price list.
		 * Post v1/projects/{projectGuid}/pricelists/custom
		 * @param {string} projectGuid ID of the project.
		 * @param {boolean} isVolumePricing Get the custom volume pricing price list or regular custom price list. Default is false.
		 * @return {void} 
		 */
		PriceLists_PostCustomPricelist(projectGuid: string, isVolumePricing: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/pricelists/custom&isVolumePricing=' + isVolumePricing, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the productPrices for a project.
		 * Get v1/projects/{projectGuid}/productprices
		 * @param {string} projectGuid ID of the project.
		 * @param {boolean} fromPricelistOnly If true return only prices from the price list, if false also returns prices from the products. Default is false.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from Product name.
		 * @param {boolean} calculateRowCount Optional: Calculate the number of total rows. Default false = total row count is returned as zero.
		 * @param {boolean} isAvailable Optional: If true, returns only prices that are available for the project, false returns price that are not available. Default all.
		 * @param {string} productCode Optional: Absolute search for products with specified product code.
		 * @param {Array<string>} productGuids Optional: Search all product price(s) by products guid(s).
		 * @param {boolean} isVolumePriced Optional: If true, return only volume priced products. If false, return all non volume priced products. Default is null, which means return all products.
		 * @param {Array<string>} productCategoryGuids Optional: Search product prices according to product category / categories by product category guid(s).
		 * @param {Array<ProductType>} productTypes Optional: Search product prices according to product type / types.
		 * @return {Array<ProductPriceOutputModel>} Projects.
		 */
		ProductPrices_GetProductPricesForProject(projectGuid: string, fromPricelistOnly: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, isAvailable: boolean | null | undefined, productCode: string | null | undefined, productGuids: Array<string> | null | undefined, isVolumePriced: boolean | null | undefined, productCategoryGuids: Array<string> | null | undefined, productTypes: Array<ProductType> | null | undefined): Observable<Array<ProductPriceOutputModel>> {
			return this.http.get<Array<ProductPriceOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/productprices&fromPricelistOnly=' + fromPricelistOnly + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&isAvailable=' + isAvailable + '&productCode=' + (productCode == null ? '' : encodeURIComponent(productCode)) + '&' + productGuids?.map(z => `productGuids=${encodeURIComponent(z)}`).join('&') + '&isVolumePriced=' + isVolumePriced + '&' + productCategoryGuids?.map(z => `productCategoryGuids=${encodeURIComponent(z)}`).join('&') + '&' + productTypes?.map(z => `productTypes=${z}`).join('&'), {});
		}

		/**
		 * Gets available products for the given project where price information comes from projects price list
		 * Get v1/projects/{projectGuid}/productsforproject
		 * @param {string} projectGuid Id of the project
		 * @param {number} rowCount Optional: Number of rows to fetch
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {ProductOutputModelType} type Product type. if given, it filters the products by the given type
		 * @param {boolean} includeProductsFromRegistry Optional: If true returns all the products from registry with project specific prices. If false returns only products specified for the project with project specific prices. Default false.
		 * @return {Array<ProductForProjectOutputModel>} All the Products matching search criteria
		 */
		Products_GetSearchedProducts(projectGuid: string, rowCount: number | null | undefined, pageToken: string | null | undefined, type: ProductOutputModelType | null | undefined, includeProductsFromRegistry: boolean | null | undefined): Observable<Array<ProductForProjectOutputModel>> {
			return this.http.get<Array<ProductForProjectOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/productsforproject&rowCount=' + rowCount + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&type=' + type + '&includeProductsFromRegistry=' + includeProductsFromRegistry, {});
		}

		/**
		 * Get all the billing customers for a project
		 * Get v1/projects/{projectGuid}/projectbillingcustomers
		 * @return {Array<ProjectBillingCustomerModel>} Project's billing customers
		 */
		ProjectBillingCustomers_GetWorkHourPricesForProject(projectGuid: string): Observable<Array<ProjectBillingCustomerModel>> {
			return this.http.get<Array<ProjectBillingCustomerModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectbillingcustomers', {});
		}

		/**
		 * Get all the project fees for a project
		 * Get v1/projects/{projectGuid}/projectfees
		 * @param {string} projectGuid ID of the project.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: Number of rows to fetch.
		 * @param {ProductOutputModelType} productType Optional: ProjectFee's product type. if given, it filters the projectFees by the given type. FixedFees (Own work), Materials (Products), Subcontracting
		 * @param {boolean} isBillable Optional: Filter the project fees. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null.
		 * @param {boolean} isBilled Optional: Filter the project fees. If true/false, only the ones that are/are not invoiced are returned. If null, all are returned. Default is null.
		 * @param {Date} invoiceableDate Optional: Filter the project fees. When given, only the ones that are invoiceable before or on the given date are returned. Default is null.
		 * @param {boolean} includeRecurringRules Optional: Also fetches recurring rules along with project fees. Default is false.
		 * @param {boolean} isBillablePeriodInFuture Optional. Filter the project fees. If true/false, only the ones that will be billable in the future are returned. If null, all are returned. Default is false.
		 * @return {Array<ProjectFeeOutputModel>} ProjectFees
		 */
		ProjectFees_GetProjectFeesForProject(projectGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, productType: ProductOutputModelType | null | undefined, isBillable: boolean | null | undefined, isBilled: boolean | null | undefined, invoiceableDate: Date | null | undefined, includeRecurringRules: boolean | null | undefined, isBillablePeriodInFuture: boolean | null | undefined): Observable<Array<ProjectFeeOutputModel>> {
			return this.http.get<Array<ProjectFeeOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectfees&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&productType=' + productType + '&isBillable=' + isBillable + '&isBilled=' + isBilled + '&invoiceableDate=' + invoiceableDate?.toISOString() + '&includeRecurringRules=' + includeRecurringRules + '&isBillablePeriodInFuture=' + isBillablePeriodInFuture, {});
		}

		/**
		 * Delete the project forecasts from a month onward, including the given month.
		 * Delete v1/projects/{projectGuid}/projectforecasts
		 * @param {string} projectGuid Project for the forecasts to delete
		 * @param {number} year Year where to start deleting the forecasts
		 * @param {number} month Month where to start deleting the forecasts
		 * @return {void} 
		 */
		ProjectForecasts_DeleteForecasts(projectGuid: string, year: number | null | undefined, month: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectforecasts&year=' + year + '&month=' + month, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the project forecasts
		 * Get v1/projects/{projectGuid}/projectforecasts
		 * @param {string} projectGuid project for the forecasts
		 * @param {Date} startDate Start date of the date range for the forecasts
		 * @param {Date} endDate End date of the date range for the forecasts
		 * @return {Array<ProjectForecastOutputModel>} List of project forecasts.
		 */
		ProjectForecasts_GetForecasts(projectGuid: string, startDate: Date | null | undefined, endDate: Date | null | undefined): Observable<Array<ProjectForecastOutputModel>> {
			return this.http.get<Array<ProjectForecastOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectforecasts&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString(), {});
		}

		/**
		 * Get project invoice settings by project ID.
		 * Get v1/projects/{projectGuid}/projectinvoicesettings
		 * @param {string} projectGuid ID of the project.
		 * @return {Array<ProjectInvoiceSettingsOutputModel>} The project invoice settings.
		 */
		ProjectInvoiceSettings_GetProjectInvoiceSettings(projectGuid: string): Observable<Array<ProjectInvoiceSettingsOutputModel>> {
			return this.http.get<Array<ProjectInvoiceSettingsOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectinvoicesettings', {});
		}

		/**
		 * Get all cost exceptions of project members for a project.
		 * Get v1/projects/{projectGuid}/projectmembercostexceptions
		 * @param {string} projectGuid Guid of the project.
		 * @param {string} userGuid Optional: Guid of the user.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @return {Array<ProjectMemberCostExceptionOutputModel>} All the member cost exceptions for one project.
		 */
		ProjectMemberCostExceptions_GetProjectMemberCostExceptionsForProject(projectGuid: string, userGuid: string | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined): Observable<Array<ProjectMemberCostExceptionOutputModel>> {
			return this.http.get<Array<ProjectMemberCostExceptionOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectmembercostexceptions&userGuid=' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '&firstRow=' + firstRow + '&rowCount=' + rowCount, {});
		}

		/**
		 * Deletes all project products of a project.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/projects/{projectGuid}/projectproducts
		 * @param {string} projectGuid GUID of the project from where project products to remove.
		 * @return {void} 
		 */
		ProjectProducts_DeleteAllProjectProducts(projectGuid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectproducts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project products
		 * This is the same as organization's list of products, unless the project has some specific products and UseProductsFromSetting in project model is set to false.
		 * Get v1/projects/{projectGuid}/projectproducts
		 * @param {string} projectGuid GUID of the project.
		 * @param {boolean} includeProductsFromRegistry Optional: Includes products available from product registry
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @param {boolean} active Fetch only active
		 * @return {Array<ProjectProductOutputModel>} A list of products for the project.
		 */
		ProjectProducts_GetProjectProducts(projectGuid: string, includeProductsFromRegistry: boolean | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined, active: boolean | null | undefined): Observable<Array<ProjectProductOutputModel>> {
			return this.http.get<Array<ProjectProductOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectproducts&includeProductsFromRegistry=' + includeProductsFromRegistry + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&active=' + active, {});
		}

		/**
		 * Get all the Recurring Fee Rules for a project
		 * Get v1/projects/{projectGuid}/projectrecurringfeerules
		 * @param {string} projectGuid ID of the project to get the recurring fee rules.
		 * @param {ProductOutputModelType} productType projectRecurringFeeRule's product type. if given, it filters the projectRecurringFeeRules by the given type.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} isBillablePeriodInFuture Optional. Filter the project recurring fee rules. If true/false, only the ones that will be billable in the future are returned. If null, all are returned. Default is false.
		 * @param {BillablePeriod} billableTimePeriod the time period for any uninvoiced recurring rules.
		 * @return {Array<ProjectRecurringFeeRuleOutputModel>} List of updated project recurring fee rules
		 */
		ProjectRecurringFeeRules_GetProjectRecurringFeeRulesForProject(projectGuid: string, productType: ProductOutputModelType | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, isBillablePeriodInFuture: boolean | null | undefined, billableTimePeriod: BillablePeriod | null | undefined): Observable<Array<ProjectRecurringFeeRuleOutputModel>> {
			return this.http.get<Array<ProjectRecurringFeeRuleOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectrecurringfeerules&productType=' + productType + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&isBillablePeriodInFuture=' + isBillablePeriodInFuture + '&billableTimePeriod=' + billableTimePeriod, {});
		}

		/**
		 * Get the sales notes of a case.
		 * Get v1/projects/{projectGuid}/projectsalesnotes
		 * @param {string} projectGuid Project guid used to get the notes.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get sales notes that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProjectSalesNoteOutputModel>} List of sales notes for a project.
		 */
		SalesNotes_GetProjectSalesNotes(projectGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProjectSalesNoteOutputModel>> {
			return this.http.get<Array<ProjectSalesNoteOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectsalesnotes&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Get all the project travel expenses for a project
		 * Get v1/projects/{projectGuid}/projecttravelexpenses
		 * @param {string} projectGuid ID of the project.
		 * @param {boolean} isBillable Optional: Filter the travel expenses. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null.
		 * @param {boolean} isBilled Optional: Filter the travel expenses. If true/false, only the ones that are/are not invoiced are returned. If null, all are returned. Default is null.
		 * @param {Date} invoiceableDate Optional: Filter the project fees. When given, only the ones that are invoiceable before or on the given date are returned. Default is null.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} isBillablePeriodInFuture Optional. Filter the project travel expenses. If true/false, only the ones that will be billable in the future are returned. If null, all are returned. Default is false.
		 * @param {ExpensesClass} expenseClass Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense
		 * @return {Array<ProjectTravelExpenseOutputModel>} ProjectTravelExpenseOutputModel
		 */
		ProjectTravelExpenses_GetProjectTravelExpensesForProject(projectGuid: string, isBillable: boolean | null | undefined, isBilled: boolean | null | undefined, invoiceableDate: Date | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined, isBillablePeriodInFuture: boolean | null | undefined, expenseClass: ExpensesClass | null | undefined): Observable<Array<ProjectTravelExpenseOutputModel>> {
			return this.http.get<Array<ProjectTravelExpenseOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projecttravelexpenses&isBillable=' + isBillable + '&isBilled=' + isBilled + '&invoiceableDate=' + invoiceableDate?.toISOString() + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&isBillablePeriodInFuture=' + isBillablePeriodInFuture + '&expenseClass=' + expenseClass, {});
		}

		/**
		 * Get all the work hour prices for a project
		 * Get v1/projects/{projectGuid}/projectworkhourprices
		 * @param {string} projectGuid Guid of the project.
		 * @param {boolean} fromPricelistOnly If true return only prices from the price list, if false also returns prices from the products. Default is false.
		 * @param {boolean} isAvailable Optional: If true, returns only prices that are available for the project, false returns price that are not available. Default all.
		 * @param {Date} changedSince Optional: Get project work hour prices that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProjectWorkHourPriceOutputModel>} Projects
		 */
		ProjectWorkHourPrices_GetWorkHourPricesForProject(projectGuid: string, fromPricelistOnly: boolean | null | undefined, isAvailable: boolean | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProjectWorkHourPriceOutputModel>> {
			return this.http.get<Array<ProjectWorkHourPriceOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectworkhourprices&fromPricelistOnly=' + fromPricelistOnly + '&isAvailable=' + isAvailable + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Get project work types.
		 * This is the same as organization's list of work types, unless the project has some specific work types and "UseWorktypesFromSetting" in project model is set to false.
		 * Get v1/projects/{projectGuid}/projectworktypes
		 * @param {string} projectGuid GUID of the project.
		 * @param {boolean} includeWorktypesFromRegistry Include work types also from registry. If false, returns only project specific work types. Default false.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} active If not given, return all work types, if given as true return only active work types, if given as false returns only inactive work types.
		 * @param {string} textToSearch Optional: Text to search from work type name.
		 * @param {Date} changedSince Optional: Get project work types that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProjectWorkTypeModel>} A list of work types for the project.
		 */
		ProjectWorkTypes_GetProjectWorktypes(projectGuid: string, includeWorktypesFromRegistry: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, active: boolean | null | undefined, textToSearch: string | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProjectWorkTypeModel>> {
			return this.http.get<Array<ProjectWorkTypeModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/projectworktypes&includeWorktypesFromRegistry=' + includeWorktypesFromRegistry + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&active=' + active + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Get all the proposals for a project
		 * Get v1/projects/{projectGuid}/proposals
		 * @param {string} projectGuid Project id for which to get proposals.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @param {Date} changedSince Optional: Get proposals that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProposalOutputModel>} Proposal
		 */
		Proposals_GetProposalsForProject(projectGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProposalOutputModel>> {
			return this.http.get<Array<ProposalOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/proposals&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Get resource allocations for a project with required filters (startDate and endDate or changedSince, max 30 days to be fetched at once)
		 * Get v1/projects/{projectGuid}/resourceallocations/allocations
		 * @param {Date} startDate Get resource allocations with startDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
		 * @param {Date} endDate Get resource allocations with endDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
		 * @param {Date} changedSince Optional: Get resource allocations that have been added or changed after this date time (greater or equal).
		 * @param {number} rowCount Optional: Number of rows to fetch.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @return {ResourceAllocationOutputModel} 
		 */
		ResourceAllocations_GetResourceAllocationsByProjectGuid(projectGuid: string, startDate: Date | null | undefined, endDate: Date | null | undefined, changedSince: Date | null | undefined, userLicenseTypes: Array<LicenseUserType> | null | undefined, phaseGuid: string | null | undefined, userGuid: string | null | undefined, projectBusinessUnitGuid: string | null | undefined, userBusinessUnitGuid: string | null | undefined, projectManagerUserGuid: string | null | undefined, userTagGuid: string | null | undefined, useSalesProbability: boolean | null | undefined, projectStatusTypeGuid: string | null | undefined, projectTagGuid: string | null | undefined, superiorUserGuid: string | null | undefined, salesStatusTypeGuid: string | null | undefined, resourceAllocationGuid: string | null | undefined, salesProgress: SalesProgress | null | undefined, rowCount: number | null | undefined, pageToken: string | null | undefined): Observable<ResourceAllocationOutputModel> {
			return this.http.get<ResourceAllocationOutputModel>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/resourceallocations/allocations&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&changedSince=' + changedSince?.toISOString() + '&' + userLicenseTypes?.map(z => `userLicenseTypes=${z}`).join('&') + '&phaseGuid=' + (phaseGuid == null ? '' : encodeURIComponent(phaseGuid)) + '&userGuid=' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '&projectBusinessUnitGuid=' + (projectBusinessUnitGuid == null ? '' : encodeURIComponent(projectBusinessUnitGuid)) + '&userBusinessUnitGuid=' + (userBusinessUnitGuid == null ? '' : encodeURIComponent(userBusinessUnitGuid)) + '&projectManagerUserGuid=' + (projectManagerUserGuid == null ? '' : encodeURIComponent(projectManagerUserGuid)) + '&userTagGuid=' + (userTagGuid == null ? '' : encodeURIComponent(userTagGuid)) + '&useSalesProbability=' + useSalesProbability + '&projectStatusTypeGuid=' + (projectStatusTypeGuid == null ? '' : encodeURIComponent(projectStatusTypeGuid)) + '&projectTagGuid=' + (projectTagGuid == null ? '' : encodeURIComponent(projectTagGuid)) + '&superiorUserGuid=' + (superiorUserGuid == null ? '' : encodeURIComponent(superiorUserGuid)) + '&salesStatusTypeGuid=' + (salesStatusTypeGuid == null ? '' : encodeURIComponent(salesStatusTypeGuid)) + '&resourceAllocationGuid=' + (resourceAllocationGuid == null ? '' : encodeURIComponent(resourceAllocationGuid)) + '&salesProgress=' + salesProgress + '&rowCount=' + rowCount + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get the sales status history for a project
		 * Get v1/projects/{projectGuid}/salesstatushistory
		 * @param {string} projectGuid The project for which the sales status history is fetched.
		 * @return {Array<SalesStatusHistoryOutputModel>} Sales status history
		 */
		SalesStatusHistory_GetSalesStatusHistory(projectGuid: string): Observable<Array<SalesStatusHistoryOutputModel>> {
			return this.http.get<Array<SalesStatusHistoryOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/salesstatushistory', {});
		}

		/**
		 * Get team productivity of a project.
		 * Get v1/projects/{projectGuid}/teamproductivity
		 * @param {string} projectGuid GUID of the project.
		 * @return {Array<TeamProductivityOutputModel>} List of project members with team productivity information.
		 */
		TeamProductivity_GetTeamProductivity(projectGuid: string): Observable<Array<TeamProductivityOutputModel>> {
			return this.http.get<Array<TeamProductivityOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/teamproductivity', {});
		}

		/**
		 * Search active travel expense types of project by part of the name or code.
		 * Get v1/projects/{projectGuid}/travelexpensetypes
		 * @param {string} projectGuid Id of the project.
		 * @param {string} textToSearch Searched string: part of name or code.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @param {string} userGuid Optional: Id of the user to fetch travels for.
		 * @param {ExpensesClass} expenseClass Optional: Expense class of the travel. Mileage/DailyAllowance/OtherTravelExpense.
		 * @return {Array<TravelExpenseTypeOutputModel>} All the Travel expense types matching search criteria.
		 */
		TravelExpenseTypes_GetSearchedTravelExpenseTypes(projectGuid: string, textToSearch: string | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, userGuid: string | null | undefined, expenseClass: ExpensesClass | null | undefined): Observable<Array<TravelExpenseTypeOutputModel>> {
			return this.http.get<Array<TravelExpenseTypeOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/travelexpensetypes&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&userGuid=' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '&expenseClass=' + expenseClass, {});
		}

		/**
		 * Get all the travel prices for a project.
		 * Get v1/projects/{projectGuid}/travelprices
		 * @param {string} projectGuid ID of the project.
		 * @param {boolean} fromPricelistOnly If true return only prices from the price list, if false also returns prices from the settings. Default is false.
		 * @param {Array<ExpensesClass>} expenseClasses Optional: List of expense classes to search by, defaults to all travel categories.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from Product name.
		 * @param {boolean} calculateRowCount Optional: Calculate the number of total rows. Default false = total row count is returned as zero.
		 * @return {Array<TravelPriceOutputModel>} TravelPriceModel.
		 */
		TravelPrices_GetTravelPricesForProject(projectGuid: string, fromPricelistOnly: boolean | null | undefined, expenseClasses: Array<ExpensesClass> | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined): Observable<Array<TravelPriceOutputModel>> {
			return this.http.get<Array<TravelPriceOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/travelprices&fromPricelistOnly=' + fromPricelistOnly + '&' + expenseClasses?.map(z => `expenseClasses=${z}`).join('&') + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount, {});
		}

		/**
		 * Get all the work hours for phases of a project for invoicing
		 * Get v1/projects/{projectGuid}/workhours
		 * @param {string} projectGuid ID of the project.
		 * @param {boolean} isBillable Optional: Filter the work hours. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null.
		 * @param {boolean} isBilled Optional: Filter the work hours. If true/false, only the ones that are/are not invoiced are returned. If null, all are returned. Default is null.
		 * @param {Date} startDate Optional: starting date from which to get the hours. Default all.
		 * @param {Date} endDate Optional: starting date to which to get the hours. Default all.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @return {Array<WorkHourOutputModel>} WorkHours
		 */
		WorkHours_GetProjectWorkHours(projectGuid: string, isBillable: boolean | null | undefined, isBilled: boolean | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined): Observable<Array<WorkHourOutputModel>> {
			return this.http.get<Array<WorkHourOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/workhours&isBillable=' + isBillable + '&isBilled=' + isBilled + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount, {});
		}

		/**
		 * Search active work types by part of the name or code.
		 * Get v1/projects/{projectGuid}/worktypesforproject
		 * @param {string} projectGuid Id of the case to which proposal is connected.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Searched string: part of name or code.
		 * @return {Array<WorktypeForProjectOutputModel>} All the work types matching search criteria.
		 */
		WorkTypes_GetSearchedWorktypes(projectGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined): Observable<Array<WorktypeForProjectOutputModel>> {
			return this.http.get<Array<WorktypeForProjectOutputModel>>(this.baseUri + 'v1/projects/' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '/worktypesforproject&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)), {});
		}

		/**
		 * Insert a project sales note.
		 * Post v1/projectsalesnotes
		 * @param {ProjectSalesNoteInputModel} requestBody SalesNoteOutputModel
		 * @return {void} 
		 */
		SalesNotes_PostProjectSalesNotes(requestBody: ProjectSalesNoteInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectsalesnotes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a project sales note.
		 * Returns: No Content (204) if succeeded. OK (200) if note has child notes and can't be deleted. It is marked as IsDeleted = true. Not found (404) if note can't be found.
		 * Delete v1/projectsalesnotes/{guid}
		 * @param {string} guid GUID used to delete the project sales note.
		 * @return {void} 
		 */
		SalesNotes_DeleteProjectSalesNote(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projectsalesnotes/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project sales note by ID.
		 * Get v1/projectsalesnotes/{guid}
		 * @param {string} guid GUID used to get the project sales note.
		 * @return {ProjectSalesNoteOutputModel} ProjectNote
		 */
		SalesNotes_GetProjectSalesNote(guid: string): Observable<ProjectSalesNoteOutputModel> {
			return this.http.get<ProjectSalesNoteOutputModel>(this.baseUri + 'v1/projectsalesnotes/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a project sales note or a part of it.
		 * Patch v1/projectsalesnotes/{guid}
		 * @param {string} guid ID of the project sales note.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of project sales note model.
		 * @return {Array<ProjectSalesNoteOutputModel>} list of updated sales notes.
		 */
		SalesNotes_PatchProjectSalesNote(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectSalesNoteOutputModel>> {
			return this.http.patch<Array<ProjectSalesNoteOutputModel>>(this.baseUri + 'v1/projectsalesnotes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the ProjectStatusTypes
		 * Get v1/projectstatustypes
		 * @param {boolean} active If not given, return all ProjectStatusTypes, if given as true return only active ProjectStatusTypes, if given as false returns only inactive ProjectStatusTypes
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from ProjectStatusType name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc&sortings[1].key=isActive&sortings[1].value=Asc"
		 * @return {Array<ProjectStatusTypeModel>} All the ProjectStatusTypes
		 */
		ProjectStatusTypes_GetProjectStatusTypes(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<ProjectStatusTypeModel>> {
			return this.http.get<Array<ProjectStatusTypeModel>>(this.baseUri + 'v1/projectstatustypes?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a project status type
		 * Post v1/projectstatustypes
		 * @param {ProjectStatusTypeModel} requestBody ProjectStatusTypeModel
		 * @return {void} 
		 */
		ProjectStatusTypes_PostProjectStatusType(requestBody: ProjectStatusTypeModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectstatustypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a projectStatusType
		 * Returns: No Content (204) if succeeded. Not found (404) if projectStatusType can't be found.
		 * Delete v1/projectstatustypes/{guid}
		 * @param {string} guid ID for the projectStatusType to delete
		 * @param {string} moveUsagesToGuid Optional: ID of the project status type to which to move usages of this project status type. Default null. If project status type is in use and usages aren't moved the deletion might fail.
		 * @return {void} 
		 */
		ProjectStatusTypes_DeleteProjectStatusType(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projectstatustypes/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get projectStatusType by ID
		 * Get v1/projectstatustypes/{guid}
		 * @param {string} guid GUID used to get the projectStatusType.
		 * @return {ProjectStatusTypeModel} projectStatusType
		 */
		ProjectStatusTypes_GetProjectStatusType(guid: string): Observable<ProjectStatusTypeModel> {
			return this.http.get<ProjectStatusTypeModel>(this.baseUri + 'v1/projectstatustypes/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a projectStatusType or a part of it
		 * Patch v1/projectstatustypes/{guid}
		 * @param {string} guid ID of the projectStatusType
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProjectStatusTypeModel
		 * @return {Array<ProjectStatusTypeModel>} List of updated business units
		 */
		ProjectStatusTypes_PatchProjectStatusType(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectStatusTypeModel>> {
			return this.http.patch<Array<ProjectStatusTypeModel>>(this.baseUri + 'v1/projectstatustypes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the project task statuses.
		 * Get v1/projecttaskstatuses
		 * @param {boolean} active If not given, return all project task statuses, if given as true return only active project task statuses, if given as false returns only inactive project task statuses.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from activity type name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc".
		 * @return {Array<ProjectTaskStatusModel>} List of Activity Types.
		 */
		ProjectTaskStatuses_GetProjectTaskStatuses(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<ProjectTaskStatusModel>> {
			return this.http.get<Array<ProjectTaskStatusModel>>(this.baseUri + 'v1/projecttaskstatuses?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a project task status.
		 * Post v1/projecttaskstatuses
		 * @param {ProjectTaskStatusModel} requestBody ProjectTaskStatusModel.
		 * @return {void} 
		 */
		ProjectTaskStatuses_PostProjectTaskStatus(requestBody: ProjectTaskStatusModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projecttaskstatuses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a project task status.
		 * Returns: No Content (204) if succeeded. Not found (404) if product can't be found.
		 * Delete v1/projecttaskstatuses/{guid}
		 * @param {string} guid ID for the project task status to delete.
		 * @param {string} moveUsagesToGuid Optional: ID of the project task status to which to move usages of this project task status. Default null.
		 * @return {void} 
		 */
		ProjectTaskStatuses_DeleteProjectTaskStatus(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projecttaskstatuses/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Project task status by ID.
		 * Get v1/projecttaskstatuses/{guid}
		 * @param {string} guid GUID used to get the Project task status.
		 * @return {ProjectTaskStatusModel} Project task status.
		 */
		ProjectTaskStatuses_GetProjectTaskStatus(guid: string): Observable<ProjectTaskStatusModel> {
			return this.http.get<ProjectTaskStatusModel>(this.baseUri + 'v1/projecttaskstatuses/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an Project task status or a part of it.
		 * Patch v1/projecttaskstatuses/{guid}
		 * @param {string} guid ID of the Project task status.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProjectTaskStatusModel.
		 * @return {Array<ProjectTaskStatusModel>} List of updated Project task status.
		 */
		ProjectTaskStatuses_PatchProjectTaskStatus(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectTaskStatusModel>> {
			return this.http.patch<Array<ProjectTaskStatusModel>>(this.baseUri + 'v1/projecttaskstatuses/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get travel expense file by ID.
		 * Get v1/projecttravelexpensefiles/{guid}
		 * @param {string} guid GUID used to get the travel expense file.
		 * @return {ProjectTravelExpenseFileModel} InvoiceFile.
		 */
		Files_GetTravelExpenseFile(guid: string): Observable<ProjectTravelExpenseFileModel> {
			return this.http.get<ProjectTravelExpenseFileModel>(this.baseUri + 'v1/projecttravelexpensefiles/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get the project travel expenses.
		 * Get v1/projecttravelexpenses
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get project travel expenses that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProjectTravelExpenseOutputModel>} ProjectTravelExpenseOutputModel
		 */
		ProjectTravelExpenses_GetProjectTravelExpenses(pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProjectTravelExpenseOutputModel>> {
			return this.http.get<Array<ProjectTravelExpenseOutputModel>>(this.baseUri + 'v1/projecttravelexpenses?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a project travel expense.
		 * Post v1/projecttravelexpenses
		 * @param {ProjectTravelExpenseInputModel} requestBody ProjectTravelExpenseInputModel.
		 * @return {void} 
		 */
		ProjectTravelExpenses_PostProjectTravelExpense(requestBody: ProjectTravelExpenseInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projecttravelexpenses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a project travel expense.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/projecttravelexpenses/{guid}
		 * @param {string} guid GUID used to delete the project travel expense.
		 * @return {void} 
		 */
		ProjectTravelExpenses_DeleteProjectTravelExpense(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projecttravelexpenses/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project travel expense by ID.
		 * Get v1/projecttravelexpenses/{guid}
		 * @param {string} guid Id used to get the project travel expense.
		 * @return {ProjectTravelExpenseOutputModel} ProjectTravelExpenseOutputModel.
		 */
		ProjectTravelExpenses_GetProjectTravelExpense(guid: string): Observable<ProjectTravelExpenseOutputModel> {
			return this.http.get<ProjectTravelExpenseOutputModel>(this.baseUri + 'v1/projecttravelexpenses/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a project travel expense or a part of it.
		 * Patch v1/projecttravelexpenses/{guid}
		 * @param {string} guid ID of the project travel expense.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ProjectTravelExpenseInputModel.
		 * @return {Array<ProjectTravelExpenseOutputModel>} List of updated project travel expenses.
		 */
		ProjectTravelExpenses_PatchProjectTravelExpense(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectTravelExpenseOutputModel>> {
			return this.http.patch<Array<ProjectTravelExpenseOutputModel>>(this.baseUri + 'v1/projecttravelexpenses/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all files of a travel expense by its id.
		 * Get v1/projecttravelexpenses/{projectTravelExpenseGuid}/files
		 * @param {string} projectTravelExpenseGuid GUID of the travel expense used to get the files.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch.
		 * @return {Array<ProjectTravelExpenseFileModel>} TravelExpenseFile.
		 */
		Files_GetTravelExpenseFiles(projectTravelExpenseGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined): Observable<Array<ProjectTravelExpenseFileModel>> {
			return this.http.get<Array<ProjectTravelExpenseFileModel>>(this.baseUri + 'v1/projecttravelexpenses/' + (projectTravelExpenseGuid == null ? '' : encodeURIComponent(projectTravelExpenseGuid)) + '/files&firstRow=' + firstRow + '&rowCount=' + rowCount, {});
		}

		/**
		 * Insert a work hour price
		 * Post v1/projectworkhourprices
		 * @param {ProjectWorkHourPriceInputModel} requestBody ProjectWorkHourPriceInputModel
		 * @return {void} 
		 */
		ProjectWorkHourPrices_PostProjectWorkHourPrice(requestBody: ProjectWorkHourPriceInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectworkhourprices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a work hour price
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/projectworkhourprices/{guid}
		 * @param {string} guid GUID used to delete the work hour price.
		 * @return {void} 
		 */
		ProjectWorkHourPrices_DeleteProjectWorkHourPrice(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projectworkhourprices/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project work hour price by ID
		 * Get v1/projectworkhourprices/{guid}
		 * @param {string} guid Id used to get the work hour price.
		 * @return {ProjectWorkHourPriceOutputModel} 
		 */
		ProjectWorkHourPrices_GetProjectWorkHourPrice(guid: string): Observable<ProjectWorkHourPriceOutputModel> {
			return this.http.get<ProjectWorkHourPriceOutputModel>(this.baseUri + 'v1/projectworkhourprices/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a work hour price or a part of it
		 * Patch v1/projectworkhourprices/{guid}
		 * @param {string} guid ID of the work hour price
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProjectWorkHourPriceInputModel
		 * @return {Array<ProjectWorkHourPriceOutputModel>} list of updated work hour prices
		 */
		ProjectWorkHourPrices_PatchProjectWorkHourPrice(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectWorkHourPriceOutputModel>> {
			return this.http.patch<Array<ProjectWorkHourPriceOutputModel>>(this.baseUri + 'v1/projectworkhourprices/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a work type to a project.
		 * The "UseWorktypesFromSetting" flag for the Project should be false (the project should not use the organization list of work types).
		 * Post v1/projectworktypes
		 * @param {ProjectWorkTypeModel} requestBody ProjectWorkTypeModel.
		 * @return {void} 
		 */
		ProjectWorkTypes_PostProjectWorktype(requestBody: ProjectWorkTypeModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projectworktypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a project work type.
		 * Returns: No Content (204) if succeeded. The "UseWorktypesFromSetting" flag for the Project should be false (the project should not use the organization list of work types).
		 * Delete v1/projectworktypes/{guid}
		 * @param {string} guid GUID of the project work type to remove.
		 * @return {void} 
		 */
		ProjectWorkTypes_DeleteProjectWorktype(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projectworktypes/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update (patch) a project work type.
		 * This currently can be used only to change the default work type in a project. The "UseWorktypesFromSetting" flag for the Project should be false (the project should not use the organization list of work types).
		 * Patch v1/projectworktypes/{guid}
		 * @param {string} guid ID of the project work type.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProjectWorkTypeModel.
		 * @return {Array<ProjectWorkTypeModel>} list of updated project work types.
		 */
		ProjectWorkTypes_PatchProjectWorktype(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProjectWorkTypeModel>> {
			return this.http.patch<Array<ProjectWorkTypeModel>>(this.baseUri + 'v1/projectworktypes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the proposal fee rows.
		 * Get v1/proposalfeerows
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get proposal fee rows that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProposalFeeRowOutputModel>} Proposal fee rows
		 */
		ProposalFees_GetProposalFees(pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProposalFeeRowOutputModel>> {
			return this.http.get<Array<ProposalFeeRowOutputModel>>(this.baseUri + 'v1/proposalfeerows?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a proposal fee row.
		 * Post v1/proposalfeerows
		 * @param {ProposalFeeRowInputModel} requestBody ProposalFeeModel
		 * @return {void} 
		 */
		ProposalFees_PostProposalFee(requestBody: ProposalFeeRowInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/proposalfeerows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a proposal fee row
		 * Returns: No Content (204) if succeeded. Not found (404) if proposal fee row can't be found.
		 * Delete v1/proposalfeerows/{guid}
		 * @param {string} guid ID for the proposal fee row to delete
		 * @return {void} 
		 */
		ProposalFees_DeleteProposalFee(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/proposalfeerows/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the proposal fee rows by guid
		 * Get v1/proposalfeerows/{guid}
		 * @param {string} guid proposal fee row id to get
		 * @return {ProposalFeeRowOutputModel} Proposal fee
		 */
		ProposalFees_GetProposalFee(guid: string): Observable<ProposalFeeRowOutputModel> {
			return this.http.get<ProposalFeeRowOutputModel>(this.baseUri + 'v1/proposalfeerows/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a proposal fee row or a part of it
		 * Patch v1/proposalfeerows/{guid}
		 * @param {string} guid ID of the proposal fee row
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProposalFeeModel
		 * @return {Array<ProposalFeeRowOutputModel>} list of updated proposal fee rows
		 */
		ProposalFees_PatchProposalFee(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProposalFeeRowOutputModel>> {
			return this.http.patch<Array<ProposalFeeRowOutputModel>>(this.baseUri + 'v1/proposalfeerows/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the proposals
		 * Get v1/proposals
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get proposals that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProposalOutputModel>} Proposal
		 */
		Proposals_GetProposals(pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProposalOutputModel>> {
			return this.http.get<Array<ProposalOutputModel>>(this.baseUri + 'v1/proposals?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a proposal.
		 * Post v1/proposals
		 * @param {ProposalInputModel} requestBody ProposalInputModel
		 * @return {void} 
		 */
		Proposals_PostProposal(requestBody: ProposalInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/proposals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a proposal
		 * Returns: No Content (204) if succeeded. Not found (404) if proposal can't be found.
		 * Delete v1/proposals/{guid}
		 * @param {string} guid Guid for the proposal to delete
		 * @return {void} 
		 */
		Proposals_DeleteProposal(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/proposals/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Proposal by ID
		 * Get v1/proposals/{guid}
		 * @param {string} guid GUID used to get the Proposal.
		 * @return {ProposalOutputModel} Proposal
		 */
		Proposals_GetProposal(guid: string): Observable<ProposalOutputModel> {
			return this.http.get<ProposalOutputModel>(this.baseUri + 'v1/proposals/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a Proposal or a part of it
		 * Patch v1/proposals/{guid}
		 * @param {string} guid Guid of the Proposal
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProposalInputModel
		 * @return {Array<ProposalOutputModel>} List of updated Proposals
		 */
		Proposals_PatchProposal(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProposalOutputModel>> {
			return this.http.patch<Array<ProposalOutputModel>>(this.baseUri + 'v1/proposals/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get settings for a proposal
		 * Get v1/proposals/{guid}/proposalsettings
		 * @param {string} guid GUID used to get the Proposal.
		 * @return {ProposalSettingsOutputModel} Proposal
		 */
		ProposalSettings_GetProposalSettings(guid: string): Observable<ProposalSettingsOutputModel> {
			return this.http.get<ProposalSettingsOutputModel>(this.baseUri + 'v1/proposals/' + (guid == null ? '' : encodeURIComponent(guid)) + '/proposalsettings', {});
		}

		/**
		 * Update (Patch) proposal settings
		 * Patch v1/proposals/{guid}/proposalsettings
		 * @param {string} guid Guid of the Proposal
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProposalSettingsInputModel
		 * @return {Array<ProposalSettingsOutputModel>} List of updated Proposal settings
		 */
		ProposalSettings_PatchProposalSettings(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProposalSettingsOutputModel>> {
			return this.http.patch<Array<ProposalSettingsOutputModel>>(this.baseUri + 'v1/proposals/' + (guid == null ? '' : encodeURIComponent(guid)) + '/proposalsettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the proposal fee rows for a proposal
		 * Get v1/proposals/{proposalGuid}/proposalfeerows
		 * @param {string} proposalGuid proposal id for which to get proposal fees rows.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @return {Array<ProposalFeeRowOutputModel>} Proposal fee rows
		 */
		ProposalFees_GetProposalFeesForProposal(proposalGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined): Observable<Array<ProposalFeeRowOutputModel>> {
			return this.http.get<Array<ProposalFeeRowOutputModel>>(this.baseUri + 'v1/proposals/' + (proposalGuid == null ? '' : encodeURIComponent(proposalGuid)) + '/proposalfeerows&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount, {});
		}

		/**
		 * Get all the proposal subtotals for a proposal
		 * Get v1/proposals/{proposalGuid}/proposalsubtotals
		 * @param {string} proposalGuid proposal id for which to get proposal subtotals.
		 * @param {string} pageToken Optional: Page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @return {Array<ProposalSubtotalOutputModel>} Proposal
		 */
		ProposalSubtotals_GetProposalSubtotalsForProposal(proposalGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined): Observable<Array<ProposalSubtotalOutputModel>> {
			return this.http.get<Array<ProposalSubtotalOutputModel>>(this.baseUri + 'v1/proposals/' + (proposalGuid == null ? '' : encodeURIComponent(proposalGuid)) + '/proposalsubtotals&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount, {});
		}

		/**
		 * Get all the proposal work rows.
		 * Get v1/proposals/{proposalGuid}/proposalworkrows
		 * @param {string} proposalGuid proposal id for which to get proposal work rows.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @return {Array<ProposalWorkhourRowOutputModel>} Proposal work rows.
		 */
		ProposalWorkhours_GetProposalWorkHoursForProposal(proposalGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined): Observable<Array<ProposalWorkhourRowOutputModel>> {
			return this.http.get<Array<ProposalWorkhourRowOutputModel>>(this.baseUri + 'v1/proposals/' + (proposalGuid == null ? '' : encodeURIComponent(proposalGuid)) + '/proposalworkrows&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount, {});
		}

		/**
		 * Get all the proposal statuses
		 * Get v1/proposalstatuses
		 * @param {boolean} isActive Optional: If not given, return all proposal statuses, if given as true return only active proposal statuses, if given as false returns only inactive proposal statuses.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} proposalStatusName Optional: Search by proposal status name.
		 * @return {Array<ProposalStatusOutputModel>} Proposal statuses
		 */
		ProposalStatuses_GetProposalStatuses(isActive: boolean | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined, proposalStatusName: string | null | undefined): Observable<Array<ProposalStatusOutputModel>> {
			return this.http.get<Array<ProposalStatusOutputModel>>(this.baseUri + 'v1/proposalstatuses?isActive=' + isActive + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&proposalStatusName=' + (proposalStatusName == null ? '' : encodeURIComponent(proposalStatusName)), {});
		}

		/**
		 * Insert a proposal status
		 * Post v1/proposalstatuses
		 * @param {ProposalStatusInputModel} requestBody ProposalStatusModel
		 * @return {void} 
		 */
		ProposalStatuses_PostProposalStatus(requestBody: ProposalStatusInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/proposalstatuses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an proposal status
		 * Returns: No Content (204) if succeeded. Not found (404) if proposal status can't be found.
		 * Delete v1/proposalstatuses/{guid}
		 * @param {string} guid ID for the proposal status to delete
		 * @param {string} moveUsagesToGuid Optional: ID of the proposal status to which to move usages of this proposal status. Default null. If proposal status is in use and usages aren't moved the deletion might fail.
		 * @return {void} 
		 */
		ProposalStatuses_DeleteProposalStatus(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/proposalstatuses/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Proposal status by ID
		 * Get v1/proposalstatuses/{guid}
		 * @param {string} guid GUID used to get the Proposal status.
		 * @return {ProposalStatusOutputModel} Proposal status
		 */
		ProposalStatuses_GetProposalStatus(guid: string): Observable<ProposalStatusOutputModel> {
			return this.http.get<ProposalStatusOutputModel>(this.baseUri + 'v1/proposalstatuses/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an Proposal status or a part of it
		 * Patch v1/proposalstatuses/{guid}
		 * @param {string} guid ID of the Proposal status
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProposalStatusModel
		 * @return {Array<ProposalStatusOutputModel>} List of updated Proposal statuses
		 */
		ProposalStatuses_PatchProposalStatus(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProposalStatusOutputModel>> {
			return this.http.patch<Array<ProposalStatusOutputModel>>(this.baseUri + 'v1/proposalstatuses/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get usage for an proposal status.
		 * Get v1/proposalstatuses/{guid}/usage
		 * @param {string} guid GUID used to get the proposal status.
		 * @return {Array<UsageModel2>} Usage
		 */
		ProposalStatuses_GetUsage(guid: string): Observable<Array<UsageModel2>> {
			return this.http.get<Array<UsageModel2>>(this.baseUri + 'v1/proposalstatuses/' + (guid == null ? '' : encodeURIComponent(guid)) + '/usage', {});
		}

		/**
		 * Get the proposal subtotals.
		 * Get v1/proposalsubtotals
		 * @param {string} pageToken Optional: Page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get proposal subtotals that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProposalSubtotalOutputModel>} 
		 */
		ProposalSubtotals_GetProposalSubtotals(pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProposalSubtotalOutputModel>> {
			return this.http.get<Array<ProposalSubtotalOutputModel>>(this.baseUri + 'v1/proposalsubtotals?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a proposal subtotal
		 * Post v1/proposalsubtotals
		 * @param {ProposalSubtotalInputModel} requestBody ProposalSubtotalModel
		 * @return {void} 
		 */
		ProposalSubtotals_PostProposalSubtotal(requestBody: ProposalSubtotalInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/proposalsubtotals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a proposal subtotal
		 * Returns: No Content (204) if succeeded. Not found (404) if proposal subtotal can't be found.
		 * Delete v1/proposalsubtotals/{guid}
		 * @param {string} guid ID for the proposal subtotal to delete.
		 * @return {void} 
		 */
		ProposalSubtotals_DeleteProposalSubtotal(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/proposalsubtotals/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Proposal subtotal by ID
		 * Get v1/proposalsubtotals/{guid}
		 * @param {string} guid GUID used to get the Proposal subtotal.
		 * @return {ProposalSubtotalOutputModel} Proposal subtotal
		 */
		ProposalSubtotals_GetProposalSubtotal(guid: string): Observable<ProposalSubtotalOutputModel> {
			return this.http.get<ProposalSubtotalOutputModel>(this.baseUri + 'v1/proposalsubtotals/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a Proposal subtotal or a part of it
		 * It is not possible to changed the proposalGuid for an existing proposal subtotal. Also, when a proposal subtotal is connected to a phase, the connection can only be broken if the phase is deleted.
		 * Patch v1/proposalsubtotals/{guid}
		 * @param {string} guid ID of the Proposal subtotal
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProposalSubtotalModel
		 * @return {Array<ProposalSubtotalOutputModel>} List of updated Proposal subtotals
		 */
		ProposalSubtotals_PatchProposalSubtotal(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProposalSubtotalOutputModel>> {
			return this.http.patch<Array<ProposalSubtotalOutputModel>>(this.baseUri + 'v1/proposalsubtotals/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the proposal work rows.
		 * Get v1/proposalworkrows
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get proposal work rows that have been added or changed after this date time (greater or equal).
		 * @return {Array<ProposalWorkhourRowOutputModel>} 
		 */
		ProposalWorkhours_GetProposalWorkHours(pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<ProposalWorkhourRowOutputModel>> {
			return this.http.get<Array<ProposalWorkhourRowOutputModel>>(this.baseUri + 'v1/proposalworkrows?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a proposal work row.
		 * Post v1/proposalworkrows
		 * @param {ProposalWorkhourRowInputModel} requestBody ProposalWorkhourModel
		 * @return {void} 
		 */
		ProposalWorkhours_PostProposalWorkhour(requestBody: ProposalWorkhourRowInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/proposalworkrows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a proposal work row.
		 * Returns: No Content (204) if succeeded. Not found (404) if proposal work row can't be found.
		 * Delete v1/proposalworkrows/{guid}
		 * @param {string} guid ID for the proposal work row to delete.
		 * @return {void} 
		 */
		ProposalWorkhours_DeleteProposalWorkhour(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/proposalworkrows/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the proposal work row by guid.
		 * Get v1/proposalworkrows/{guid}
		 * @param {string} guid proposal work row id to get.
		 * @return {ProposalWorkhourRowOutputModel} Proposal work row.
		 */
		ProposalWorkhours_GetProposalWorkhour(guid: string): Observable<ProposalWorkhourRowOutputModel> {
			return this.http.get<ProposalWorkhourRowOutputModel>(this.baseUri + 'v1/proposalworkrows/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a proposal work row or a part of it.
		 * Patch v1/proposalworkrows/{guid}
		 * @param {string} guid ID of the proposal work row.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of ProposalWorkhourModel.
		 * @return {Array<ProposalWorkhourRowOutputModel>} updated proposal work row.
		 */
		ProposalWorkhours_PatchProposalWorkhour(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ProposalWorkhourRowOutputModel>> {
			return this.http.patch<Array<ProposalWorkhourRowOutputModel>>(this.baseUri + 'v1/proposalworkrows/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get new access token using a refresh token.
		 * Post v1/refreshtoken
		 * @param {string} requestBody Refresh token.
		 * @return {PublicAuthenticationOutputModel} PublicAuthenticationOutputModel
		 */
		PublicBearerAuthentication_GetAccessTokenTokenFromRefreshToken(requestBody: string): Observable<PublicAuthenticationOutputModel> {
			return this.http.post<PublicAuthenticationOutputModel>(this.baseUri + 'v1/refreshtoken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get resource allocations
		 * Get v1/resourceallocations
		 * @param {number} rowCount Optional: Number of rows to fetch.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {Date} changedSince Optional: Get resource allocations that have been added or changed after this date time (greater or equal).
		 * @return {ResourceAllocationOutputModel} ResourceAllocation
		 */
		ResourceAllocations_GetResourceAllocations(rowCount: number | null | undefined, pageToken: string | null | undefined, changedSince: Date | null | undefined): Observable<ResourceAllocationOutputModel> {
			return this.http.get<ResourceAllocationOutputModel>(this.baseUri + 'v1/resourceallocations?rowCount=' + rowCount + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a resource allocation
		 * Post v1/resourceallocations
		 * @param {ResourceAllocationInputModel} requestBody ResourceAllocationInputModel
		 * @return {void} 
		 */
		ResourceAllocations_PostResourceAllocation(requestBody: ResourceAllocationInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/resourceallocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get resource allocations (its POST because of being able to accommodate more filters)
		 * Post v1/resourceallocations/allocations
		 * @param {number} rowCount Optional: Number of rows to fetch.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {Date} changedSince Optional: Get resource allocations that have been added or changed after this date time (greater or equal).
		 * @param {ResourceAllocationCriteriaModel} requestBody resourceAllocationCriteriaModel
		 * @return {Array<ResourceAllocationOutputModel>} ResourceAllocationModel
		 */
		ResourceAllocations_PostResourceAllocations(rowCount: number | null | undefined, pageToken: string | null | undefined, changedSince: Date | null | undefined, requestBody: ResourceAllocationCriteriaModel): Observable<Array<ResourceAllocationOutputModel>> {
			return this.http.post<Array<ResourceAllocationOutputModel>>(this.baseUri + 'v1/resourceallocations/allocations?rowCount=' + rowCount + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&changedSince=' + changedSince?.toISOString(), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an resource allocation
		 * Returns: No Content (204) if succeeded. Not found (404) if resource allocation can't be found.
		 * Delete v1/resourceallocations/{guid}
		 * @param {string} guid ID of the resource allocation to delete
		 * @return {void} 
		 */
		ResourceAllocations_DeleteResourceAllocation(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/resourceallocations/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get resource allocation by ID
		 * Get v1/resourceallocations/{guid}
		 * @param {string} guid GUID used to get the resource allocation.
		 * @return {ResourceAllocationOutputModel} ResourceAllocation
		 */
		ResourceAllocations_GetResourceAllocation(guid: string): Observable<ResourceAllocationOutputModel> {
			return this.http.get<ResourceAllocationOutputModel>(this.baseUri + 'v1/resourceallocations/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a resource allocation or a part of it
		 * Patch v1/resourceallocations/{guid}
		 * @param {string} guid ID of the resource allocation
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ResourceAllocationModel
		 * @return {Array<ResourceAllocationOutputModel>} List of updated activities
		 */
		ResourceAllocations_PatchResourceAllocation(guid: string, requestBody: Array<PatchOperation>): Observable<Array<ResourceAllocationOutputModel>> {
			return this.http.patch<Array<ResourceAllocationOutputModel>>(this.baseUri + 'v1/resourceallocations/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get role allocations.
		 * Get v1/roleallocations
		 * @param {Date} startDate Starting date from which to get the role allocations. If end date is not specified on the role allocation then it will be compared with phase end date.
		 * @param {Date} endDate Optional: Ending date to which to get the role allocations. If start date is not specified on the role allocation then it will be compared with phase start date.
		 * @param {string} pageToken Optional: Page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @param {boolean} useSalesProbability Optional: Calculates the hours based on sales probability set for the project. Default is true.
		 * @param {Array<string>} roleGuids Optional: Role IDs.
		 * @param {Array<string>} phaseGuids Optional: Phase IDs.
		 * @param {Array<string>} projectGuids Optional: Project IDs.
		 * @return {Array<RoleAllocationOutputModel>} RoleAllocationModel.
		 */
		RoleAllocations_GetRoleAllocations(startDate: Date, endDate: Date | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined, useSalesProbability: boolean | null | undefined, roleGuids: Array<string> | null | undefined, phaseGuids: Array<string> | null | undefined, projectGuids: Array<string> | null | undefined): Observable<Array<RoleAllocationOutputModel>> {
			return this.http.get<Array<RoleAllocationOutputModel>>(this.baseUri + 'v1/roleallocations?startDate=' + startDate.toISOString() + '&endDate=' + endDate?.toISOString() + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&useSalesProbability=' + useSalesProbability + '&' + roleGuids?.map(z => `roleGuids=${encodeURIComponent(z)}`).join('&') + '&' + phaseGuids?.map(z => `phaseGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectGuids?.map(z => `projectGuids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Insert a role allocation.
		 * Post v1/roleallocations
		 * @param {RoleAllocationInputModel} requestBody Role allocation to insert.
		 * @return {void} 
		 */
		RoleAllocations_PostRoleAllocation(requestBody: RoleAllocationInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/roleallocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a role allocation.
		 * Returns: No Content (204) if succeeded. Not found (404) if role can't be found.
		 * Delete v1/roleallocations/{guid}
		 * @param {string} guid ID for the role allocation to delete.
		 * @return {void} 
		 */
		RoleAllocations_DeleteRoleAllocation(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/roleallocations/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get role allocation by GUID.
		 * Get v1/roleallocations/{guid}
		 * @param {string} guid ID used to get the role allocation.
		 * @return {RoleAllocationOutputModel} RoleAllocationModel.
		 */
		RoleAllocations_GetRoleAllocation(guid: string): Observable<RoleAllocationOutputModel> {
			return this.http.get<RoleAllocationOutputModel>(this.baseUri + 'v1/roleallocations/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a role allocation.
		 * Patch v1/roleallocations/{guid}
		 * @param {string} guid ID of the role allocation.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of RoleAllocationModel.
		 * @return {Array<RoleAllocationOutputModel>} RoleAllocationModel.
		 */
		RoleAllocations_PatchRoleAllocation(guid: string, requestBody: Array<PatchOperation>): Observable<Array<RoleAllocationOutputModel>> {
			return this.http.patch<Array<RoleAllocationOutputModel>>(this.baseUri + 'v1/roleallocations/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get roles.
		 * Get v1/roles
		 * @param {boolean} isActive If not given, return all roles, if given as true return only active roles, if given as false returns only inactive roles.
		 * @param {string} pageToken Optional: Page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @param {Date} changedSince Optional: Get roles that have been added or changed after this date time (greater or equal).
		 * @return {Array<RoleOutputModel>} All the roles.
		 */
		Roles_GetRoles(isActive: boolean | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<RoleOutputModel>> {
			return this.http.get<Array<RoleOutputModel>>(this.baseUri + 'v1/roles?isActive=' + isActive + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a role.
		 * Post v1/roles
		 * @param {RoleInputModel} requestBody RoleInputModel.
		 * @return {void} 
		 */
		Roles_PostRole(requestBody: RoleInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/roles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a role.
		 * Returns: No Content (204) if succeeded. Not found (404) if role can't be found.
		 * Delete v1/roles/{guid}
		 * @param {string} guid ID for the role to delete.
		 * @return {void} 
		 */
		Roles_DeleteRole(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/roles/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get role by GUID.
		 * Get v1/roles/{guid}
		 * @param {string} guid Id used to get the role.
		 * @return {RoleOutputModel} RoleOutputModel.
		 */
		Roles_GetRole(guid: string): Observable<RoleOutputModel> {
			return this.http.get<RoleOutputModel>(this.baseUri + 'v1/roles/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a role or a part of it.
		 * Patch v1/roles/{guid}
		 * @param {string} guid ID of the role.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of RoleInputModel.
		 * @return {Array<RoleOutputModel>} list of updated roles.
		 */
		Roles_PatchRole(guid: string, requestBody: Array<PatchOperation>): Observable<Array<RoleOutputModel>> {
			return this.http.patch<Array<RoleOutputModel>>(this.baseUri + 'v1/roles/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of root phases with information about hierarchy.
		 * Get v1/rootphaseswithhierarchy
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @return {Array<PhaseOutputModel>} 
		 */
		Phases_GetRootPhases(pageToken: string | null | undefined, rowCount: number | null | undefined, customerGuids: Array<string> | null | undefined, projectGuids: Array<string> | null | undefined, projectKeywordGuids: Array<string> | null | undefined, projectStatusTypeGuids: Array<string> | null | undefined, salesPersonGuids: Array<string> | null | undefined, projectOwnerGuids: Array<string> | null | undefined, businessUnitGuids: Array<string> | null | undefined, customerOwnerGuids: Array<string> | null | undefined, salesStatusTypeGuids: Array<string> | null | undefined, openProjects: boolean | null | undefined, projectMemberUserGuids: Array<string> | null | undefined): Observable<Array<PhaseOutputModel>> {
			return this.http.get<Array<PhaseOutputModel>>(this.baseUri + 'v1/rootphaseswithhierarchy?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&' + customerGuids?.map(z => `customerGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectGuids?.map(z => `projectGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectKeywordGuids?.map(z => `projectKeywordGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectStatusTypeGuids?.map(z => `projectStatusTypeGuids=${encodeURIComponent(z)}`).join('&') + '&' + salesPersonGuids?.map(z => `salesPersonGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectOwnerGuids?.map(z => `projectOwnerGuids=${encodeURIComponent(z)}`).join('&') + '&' + businessUnitGuids?.map(z => `businessUnitGuids=${encodeURIComponent(z)}`).join('&') + '&' + customerOwnerGuids?.map(z => `customerOwnerGuids=${encodeURIComponent(z)}`).join('&') + '&' + salesStatusTypeGuids?.map(z => `salesStatusTypeGuids=${encodeURIComponent(z)}`).join('&') + '&openProjects=' + openProjects + '&' + projectMemberUserGuids?.map(z => `projectMemberUserGuids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get sales accounts.
		 * Get v1/salesaccounts
		 * @param {boolean} active If not given, return all Sales accounts, if given as true return only active Sales accounts, if given as false returns only inactive Sales accounts.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from cost account name or identifier.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc &sortings[1].key=Identifier&sortings[1].value=Asc".
		 * @return {Array<SalesAccountModel>} All the sales accounts.
		 */
		SalesAccounts_GetSalesAccounts(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<SalesAccountModel>> {
			return this.http.get<Array<SalesAccountModel>>(this.baseUri + 'v1/salesaccounts?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a sales account.
		 * Post v1/salesaccounts
		 * @param {SalesAccountModel} requestBody SalesAccountModel.
		 * @return {void} 
		 */
		SalesAccounts_PostSalesAccount(requestBody: SalesAccountModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/salesaccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a sales account.
		 * Returns: No Content (204) if succeeded. Not found (404) if sales account can't be found.
		 * Delete v1/salesaccounts/{guid}
		 * @param {string} guid ID for the sales account to delete.
		 * @return {void} 
		 */
		SalesAccounts_DeleteSalesAccount(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/salesaccounts/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get sales account by ID.
		 * Get v1/salesaccounts/{guid}
		 * @param {string} guid Id used to get the sales account.
		 * @return {SalesAccountModel} SalesAccountModel.
		 */
		SalesAccounts_GetSalesAccount(guid: string): Observable<SalesAccountModel> {
			return this.http.get<SalesAccountModel>(this.baseUri + 'v1/salesaccounts/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a sales account or a part of it.
		 * Patch v1/salesaccounts/{guid}
		 * @param {string} guid ID of the sales account.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of SalesAccountModel.
		 * @return {Array<SalesAccountModel>} list of updated sales account.
		 */
		SalesAccounts_PatchSalesAccount(guid: string, requestBody: Array<PatchOperation>): Observable<Array<SalesAccountModel>> {
			return this.http.patch<Array<SalesAccountModel>>(this.baseUri + 'v1/salesaccounts/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the sales cases (sales status is in progress)
		 * Get v1/salescases
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @return {Array<ProjectOutputModel>} Projects
		 */
		Projects_GetSalesCases(pageToken: string | null | undefined, rowCount: number | null | undefined, customerGuids: Array<string> | null | undefined, currencyGuids: Array<string> | null | undefined, projectGuids: Array<string> | null | undefined, projectKeywordGuids: Array<string> | null | undefined, projectStatusTypeGuids: Array<string> | null | undefined, salesPersonGuids: Array<string> | null | undefined, projectOwnerGuids: Array<string> | null | undefined, businessUnitGuids: Array<string> | null | undefined, minimumBillableAmount: number | null | undefined, customerOwnerGuids: Array<string> | null | undefined, invoiceableDate: Date | null | undefined, marketSegmentationGuids: Array<string> | null | undefined, salesStatusTypeGuids: Array<string> | null | undefined, isClosed: boolean | null | undefined, hasRecurringFees: boolean | null | undefined, companyCurrencyGuids: Array<string> | null | undefined, projectMemberUserGuids: Array<string> | null | undefined, numbers: Array<number> | null | undefined): Observable<Array<ProjectOutputModel>> {
			return this.http.get<Array<ProjectOutputModel>>(this.baseUri + 'v1/salescases?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&' + customerGuids?.map(z => `customerGuids=${encodeURIComponent(z)}`).join('&') + '&' + currencyGuids?.map(z => `currencyGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectGuids?.map(z => `projectGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectKeywordGuids?.map(z => `projectKeywordGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectStatusTypeGuids?.map(z => `projectStatusTypeGuids=${encodeURIComponent(z)}`).join('&') + '&' + salesPersonGuids?.map(z => `salesPersonGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectOwnerGuids?.map(z => `projectOwnerGuids=${encodeURIComponent(z)}`).join('&') + '&' + businessUnitGuids?.map(z => `businessUnitGuids=${encodeURIComponent(z)}`).join('&') + '&minimumBillableAmount=' + minimumBillableAmount + '&' + customerOwnerGuids?.map(z => `customerOwnerGuids=${encodeURIComponent(z)}`).join('&') + '&invoiceableDate=' + invoiceableDate?.toISOString() + '&' + marketSegmentationGuids?.map(z => `marketSegmentationGuids=${encodeURIComponent(z)}`).join('&') + '&' + salesStatusTypeGuids?.map(z => `salesStatusTypeGuids=${encodeURIComponent(z)}`).join('&') + '&isClosed=' + isClosed + '&hasRecurringFees=' + hasRecurringFees + '&' + companyCurrencyGuids?.map(z => `companyCurrencyGuids=${encodeURIComponent(z)}`).join('&') + '&' + projectMemberUserGuids?.map(z => `projectMemberUserGuids=${encodeURIComponent(z)}`).join('&') + '&' + numbers?.map(z => `numbers=${z}`).join('&'), {});
		}

		/**
		 * Get all the sales status types
		 * Get v1/salesstatustypes
		 * @param {boolean} active If not given, return all sales status types, if given as true return only active sales status types, if given as false returns only inactive sales status types
		 * @param {SalesStatusType} salesState Optional: Get sales status types of the sales state.
		 * @param {number} firstRow Optional: First row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from sales status type name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Name&sortings[0].value=Desc &sortings[1].key=Code&sortings[1].value=Asc"
		 * @return {Array<SalesStatusTypeOutputModel>} Sales status types
		 */
		SalesStatusTypes_GetSalesStatusTypes(active: boolean | null | undefined, salesState: SalesStatusType | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<SalesStatusTypeOutputModel>> {
			return this.http.get<Array<SalesStatusTypeOutputModel>>(this.baseUri + 'v1/salesstatustypes?active=' + active + '&salesState=' + salesState + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a sales status type
		 * Post v1/salesstatustypes
		 * @param {SalesStatusTypeInputModel} requestBody salesStatusType
		 * @return {void} 
		 */
		SalesStatusTypes_PostSalesStatusType(requestBody: SalesStatusTypeInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/salesstatustypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an sales status type.
		 * Returns: No Content (204) if succeeded. Not found (404) if sales status type can't be found.
		 * Delete v1/salesstatustypes/{guid}
		 * @param {string} guid ID for the sales status type to delete.
		 * @param {string} moveUsagesToGuid Optional: ID of the sales status type to which to move usages of this sales status type. Default null. If sales status type is in use and usages aren't moved the deletion might fail.
		 * @return {void} 
		 */
		SalesStatusTypes_DeleteSalesStatusType(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/salesstatustypes/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get sales status type by ID
		 * Get v1/salesstatustypes/{guid}
		 * @param {string} guid GUID used to get the sales status type.
		 * @return {SalesStatusTypeOutputModel} Sales status type
		 */
		SalesStatusTypes_GetSalesStatusType(guid: string): Observable<SalesStatusTypeOutputModel> {
			return this.http.get<SalesStatusTypeOutputModel>(this.baseUri + 'v1/salesstatustypes/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an sales status type or a part of it
		 * Patch v1/salesstatustypes/{guid}
		 * @param {string} guid ID of the sales status type
		 * @param {Array<PatchOperation>} requestBody JSON patch document of salesStatusType
		 * @return {Array<SalesStatusTypeOutputModel>} List of updated sales status types
		 */
		SalesStatusTypes_PatchSalesStatusType(guid: string, requestBody: Array<PatchOperation>): Observable<Array<SalesStatusTypeOutputModel>> {
			return this.http.patch<Array<SalesStatusTypeOutputModel>>(this.baseUri + 'v1/salesstatustypes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Logout. Invalidates refresh token. Access token will be invalid when it expires.
		 * Post v1/signout
		 * @return {void} 
		 */
		PublicBearerAuthentication_Logout(requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/signout', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the time entries.
		 * Get v1/timeentries
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {Array<string>} phaseGuid Optional: Filters time entries for given phases.
		 * @param {Array<string>} timeEntryTypeGuid Optional: Filters time entries for given time entry types.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get time entries that have been added or changed after this date time (greater or equal).
		 * @return {Array<TimeEntryModel>} 
		 */
		TimeEntries_GetTimeEntries(firstRow: number | null | undefined, phaseGuid: Array<string> | null | undefined, timeEntryTypeGuid: Array<string> | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined): Observable<Array<TimeEntryModel>> {
			return this.http.get<Array<TimeEntryModel>>(this.baseUri + 'v1/timeentries?firstRow=' + firstRow + '&' + phaseGuid?.map(z => `phaseGuid=${encodeURIComponent(z)}`).join('&') + '&' + timeEntryTypeGuid?.map(z => `timeEntryTypeGuid=${encodeURIComponent(z)}`).join('&') + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a time entry.
		 * Post v1/timeentries
		 * @param {TimeEntryModel} requestBody TimeEntryModel.
		 * @return {void} 
		 */
		TimeEntries_PostTimeEntry(requestBody: TimeEntryModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/timeentries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a time entry.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/timeentries/{guid}
		 * @param {string} guid GUID used to delete the time entry.
		 * @return {void} 
		 */
		TimeEntries_DeleteTimeEntry(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/timeentries/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get time entry by ID.
		 * Get v1/timeentries/{guid}
		 * @param {string} guid Id used to get the time entry.
		 * @return {TimeEntryModel} 
		 */
		TimeEntries_GetTimeEntry(guid: string): Observable<TimeEntryModel> {
			return this.http.get<TimeEntryModel>(this.baseUri + 'v1/timeentries/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a time entry or a part of it.
		 * Patch v1/timeentries/{guid}
		 * @param {string} guid ID of the time entry.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of TimeEntryModel.
		 * @return {Array<TimeEntryModel>} List of updated time entries.
		 */
		TimeEntries_PatchTimeEntry(guid: string, requestBody: Array<PatchOperation>): Observable<Array<TimeEntryModel>> {
			return this.http.patch<Array<TimeEntryModel>>(this.baseUri + 'v1/timeentries/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all time entry types.
		 * Get v1/timeentrytypes
		 * @param {boolean} active Filter the time entry types. If true/false, only the active/inactive ones are returned. If null, all the time entry types are returned.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from time entry type name.
		 * @param {boolean} calculateRowCount Optional: Calculates the total row count.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc".
		 * @return {Array<TimeEntryTypeModel>} Projects.
		 */
		TimeEntryTypes_GetTimeEntryTypes(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<TimeEntryTypeModel>> {
			return this.http.get<Array<TimeEntryTypeModel>>(this.baseUri + 'v1/timeentrytypes?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a time entry type.
		 * Post v1/timeentrytypes
		 * @param {TimeEntryTypeModel} requestBody TimeEntryTypeModel.
		 * @return {void} 
		 */
		TimeEntryTypes_PostTimeEntryType(requestBody: TimeEntryTypeModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/timeentrytypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a time entry type.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/timeentrytypes/{guid}
		 * @param {string} guid GUID used to delete the time entry type.
		 * @return {void} 
		 */
		TimeEntryTypes_DeleteTimeEntryType(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/timeentrytypes/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get time entry type by ID.
		 * Get v1/timeentrytypes/{guid}
		 * @param {string} guid ID used to get the time entry type.
		 * @return {TimeEntryTypeModel} 
		 */
		TimeEntryTypes_GetTimeEntryType(guid: string): Observable<TimeEntryTypeModel> {
			return this.http.get<TimeEntryTypeModel>(this.baseUri + 'v1/timeentrytypes/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a time entry type or a part of it.
		 * Patch v1/timeentrytypes/{guid}
		 * @param {string} guid ID of the time entry type.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of TimeEntryTypeModel.
		 * @return {Array<TimeEntryTypeModel>} Updated time entry type model.
		 */
		TimeEntryTypes_PatchTimeEntryType(guid: string, requestBody: Array<PatchOperation>): Observable<Array<TimeEntryTypeModel>> {
			return this.http.patch<Array<TimeEntryTypeModel>>(this.baseUri + 'v1/timeentrytypes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Can be used to get the login information and access token for the api client.
		 * Post v1/token
		 * @param {ClientCredentials} requestBody ClientCredentials of the client.
		 * @return {PublicAuthenticationOutputModel} PublicAuthenticationOutputModel
		 */
		PublicBearerAuthentication_GetLoginToken(requestBody: ClientCredentials): Observable<PublicAuthenticationOutputModel> {
			return this.http.post<PublicAuthenticationOutputModel>(this.baseUri + 'v1/token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Insert a travel expense type country setting
		 * Post v1/travelexpensetypecountrysettings
		 * @param {TravelExpenseTypeCountrySettingsModel} requestBody Travel expense type country setting model
		 * @return {void} 
		 */
		TravelExpenseTypeCountrySettings_PostTravelExpenseTypeCountrySettings(requestBody: TravelExpenseTypeCountrySettingsModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/travelexpensetypecountrysettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a travel expense type country setting
		 * Returns: No Content (204) if succeeded. Not found (404) if travel expense type country setting can't be found.
		 * Delete v1/travelexpensetypecountrysettings/{guid}
		 * @param {string} guid GUID used to delete the travel expense type country setting.
		 * @return {void} 
		 */
		TravelExpenseTypeCountrySettings_DeleteTravelExpenseTypeCountrySetting(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/travelexpensetypecountrysettings/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update (Patch) a travel expense type country setting
		 * Patch v1/travelexpensetypecountrysettings/{guid}
		 * @param {string} guid ID of the travel expense type country setting
		 * @param {Array<PatchOperation>} requestBody JSON patch document of TravelExpenseTypeCountrySettingsModel
		 * @return {Array<TravelExpenseTypeCountrySettingsModel>} List of updated travel expense type country settings
		 */
		TravelExpenseTypeCountrySettings_PatchTravelExpenseTypeCountrySettings(guid: string, requestBody: Array<PatchOperation>): Observable<Array<TravelExpenseTypeCountrySettingsModel>> {
			return this.http.patch<Array<TravelExpenseTypeCountrySettingsModel>>(this.baseUri + 'v1/travelexpensetypecountrysettings/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the travel expense types.
		 * Get v1/travelexpensetypes
		 * @param {boolean} active If not given, return all travel expense types, if given as true return only active travel expense types, if given as false returns only inactive travel expense types.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default all.
		 * @param {string} textToSearch Searched string: part of name or code.
		 * @param {string} code Optional: Code of the travel expense type.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=IsActive&sortings[0].value=Asc&sortings[1].key=Name&sortings[1].value=Desc.
		 * @return {Array<TravelExpenseTypeOutputModel>} All the travel expense types.
		 */
		TravelExpenseTypes_GetTravelExpenseTypes(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, code: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<TravelExpenseTypeOutputModel>> {
			return this.http.get<Array<TravelExpenseTypeOutputModel>>(this.baseUri + 'v1/travelexpensetypes?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a new travel expense type.
		 * Post v1/travelexpensetypes
		 * @param {TravelExpenseTypeInputModel} requestBody TravelExpenseTypeInputModel.
		 * @return {void} 
		 */
		TravelExpenseTypes_PostTravelExpenseType(requestBody: TravelExpenseTypeInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/travelexpensetypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a travel expense type.
		 * Delete v1/travelexpensetypes/{guid}
		 * @param {string} guid Guid for the travel expense type to delete.
		 * @return {void} 
		 */
		TravelExpenseTypes_DeleteTravelExpenseType(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/travelexpensetypes/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get travel expense type by guid.
		 * Get v1/travelexpensetypes/{guid}
		 * @param {string} guid GUID used to get the travel expense type.
		 * @return {TravelExpenseTypeOutputModel} Travel expense type.
		 */
		TravelExpenseTypes_GetTravelExpenseType(guid: string): Observable<TravelExpenseTypeOutputModel> {
			return this.http.get<TravelExpenseTypeOutputModel>(this.baseUri + 'v1/travelexpensetypes/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an travel expense type or a part of it.
		 * Patch v1/travelexpensetypes/{guid}
		 * @param {string} guid Guid of the travel expense type.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of TravelExpenseTypeInputModel.
		 * @return {Array<TravelExpenseTypeOutputModel>} List of updated travel expense types.
		 */
		TravelExpenseTypes_PatchTravelExpenseType(guid: string, requestBody: Array<PatchOperation>): Observable<Array<TravelExpenseTypeOutputModel>> {
			return this.http.patch<Array<TravelExpenseTypeOutputModel>>(this.baseUri + 'v1/travelexpensetypes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all country settings for a travel expense type
		 * Get v1/travelexpensetypes/{travelExpenseTypeGuid}/travelexpensetypecountrysettings
		 * @param {string} travelExpenseTypeGuid Guid of the travel expense type.
		 * @return {Array<TravelExpenseTypeCountrySettingsModel>} All the TravelExpenseCountrySettings (tax related information)
		 */
		TravelExpenseTypeCountrySettings_GetTravelExpenseTypeCountrySettings(travelExpenseTypeGuid: string): Observable<Array<TravelExpenseTypeCountrySettingsModel>> {
			return this.http.get<Array<TravelExpenseTypeCountrySettingsModel>>(this.baseUri + 'v1/travelexpensetypes/' + (travelExpenseTypeGuid == null ? '' : encodeURIComponent(travelExpenseTypeGuid)) + '/travelexpensetypecountrysettings', {});
		}

		/**
		 * Get travel price by ID.
		 * Get v1/travelprices/{guid}
		 * @param {string} guid Id used to get the travel price.
		 * @return {TravelPriceOutputModel} 
		 */
		TravelPrices_GetTravelPrice(guid: string): Observable<TravelPriceOutputModel> {
			return this.http.get<TravelPriceOutputModel>(this.baseUri + 'v1/travelprices/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get travel reimbursements.
		 * Get v1/travelreimbursements
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch.
		 * @param {Date} changedSince Optional: Get travel reimbursements that have been added or changed after this date time (greater or equal).
		 * @param {Array<string>} travelReimbursementStatusGuids Optional: List of travel reimbursement status ids.
		 * @return {Array<TravelReimbursementOutputModel>} 
		 */
		TravelReimbursements_GetTravelReimbursements(pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined, travelReimbursementStatusGuids: Array<string> | null | undefined): Observable<Array<TravelReimbursementOutputModel>> {
			return this.http.get<Array<TravelReimbursementOutputModel>>(this.baseUri + 'v1/travelreimbursements?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString() + '&' + travelReimbursementStatusGuids?.map(z => `travelReimbursementStatusGuids=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Add a travel reimbursement
		 * Post v1/travelreimbursements
		 * @param {boolean} addAllUnreimbursedTravelExpenses Optional: Add all of user's unreimbursed travel expenses to reimbursement. Default is true. If TravelExpenseReimbursementStartDate is given in organization settings, travel expenses are added from that date onwards. If value is false then expenses from includedProjectTravelExpenses list are added.
		 * @param {Array<string>} includedProjectTravelExpenses Optional: A list of included projectTravelExpense GUIDs belonging to the user. If addAllUnreimbursedTravelExpenses is true then this list is ignored.
		 * @param {TravelReimbursementInputModel} requestBody TravelReimbursementModel
		 * @return {void} 
		 */
		TravelReimbursements_PostTravelReimbursement(addAllUnreimbursedTravelExpenses: boolean | null | undefined, includedProjectTravelExpenses: Array<string> | null | undefined, requestBody: TravelReimbursementInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/travelreimbursements?addAllUnreimbursedTravelExpenses=' + addAllUnreimbursedTravelExpenses + '&' + includedProjectTravelExpenses?.map(z => `includedProjectTravelExpenses=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a travel reimbursement
		 * Delete v1/travelreimbursements/{guid}
		 * @param {string} guid GUID of travel reimbursement
		 * @return {void} 
		 */
		TravelReimbursements_DeleteTravelReimbursement(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/travelreimbursements/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get travel reimbursement by ID
		 * Get v1/travelreimbursements/{guid}
		 * @param {string} guid ID of travel reimbursement
		 * @return {TravelReimbursementOutputModel} 
		 */
		TravelReimbursements_GetTravelReimbursement(guid: string): Observable<TravelReimbursementOutputModel> {
			return this.http.get<TravelReimbursementOutputModel>(this.baseUri + 'v1/travelreimbursements/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a travel reimbursement
		 * Patch v1/travelreimbursements/{guid}
		 * @param {string} guid ID of the travel reimbursement
		 * @param {Array<PatchOperation>} requestBody JSON Patch document
		 * @return {Array<TravelReimbursementOutputModel>} Updated travel reimbursement
		 */
		TravelReimbursements_PatchTravelReimbursement(guid: string, requestBody: Array<PatchOperation>): Observable<Array<TravelReimbursementOutputModel>> {
			return this.http.patch<Array<TravelReimbursementOutputModel>>(this.baseUri + 'v1/travelreimbursements/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a travel reimbursement PDF.
		 * Get v1/travelreimbursements/{guid}/pdf
		 * @param {string} guid The travel reimbursement GUID.
		 * @return {void} Get a travel reimbursement PDF
		 */
		Pdf_GetTravelReimbursementPdf(guid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/travelreimbursements/' + (guid == null ? '' : encodeURIComponent(guid)) + '/pdf', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the project travel expenses for a travel reimbursement
		 * Get v1/travelreimbursements/{travelReimbursementGuid}/projecttravelexpenses
		 * @param {string} travelReimbursementGuid Optional: ID of the travel reimbursement
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {ExpensesClass} expenseClass Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense
		 * @return {Array<ProjectTravelExpenseOutputModel>} ProjectTravelExpenseOutputModel
		 */
		ProjectTravelExpenses_GetProjectTravelExpensesForTravelReimbursement(travelReimbursementGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, expenseClass: ExpensesClass | null | undefined): Observable<Array<ProjectTravelExpenseOutputModel>> {
			return this.http.get<Array<ProjectTravelExpenseOutputModel>>(this.baseUri + 'v1/travelreimbursements/' + (travelReimbursementGuid == null ? '' : encodeURIComponent(travelReimbursementGuid)) + '/projecttravelexpenses&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&expenseClass=' + expenseClass, {});
		}

		/**
		 * Get the travel reimbursement statuses.
		 * Get v1/travelreimbursementstatuses
		 * @param {boolean} active Optional: Filter the travel reimbursement statuses. If true/false, only the active/inactive ones are returned. If null, all the travel reimbursement statuses are returned.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from travel reimbursement name.
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc".
		 * @return {Array<TravelReimbursementStatusModel>} 
		 */
		TravelReimbursementStatus_GetTravelReimbursementStatuses(active: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<TravelReimbursementStatusModel>> {
			return this.http.get<Array<TravelReimbursementStatusModel>>(this.baseUri + 'v1/travelreimbursementstatuses?active=' + active + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a travel reimbursement status.
		 * Post v1/travelreimbursementstatuses
		 * @param {TravelReimbursementStatusModel} requestBody TravelReimbursementStatusModel.
		 * @return {void} 
		 */
		TravelReimbursementStatus_PostTravelReimbursementStatus(requestBody: TravelReimbursementStatusModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/travelreimbursementstatuses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a travel reimbursement status.
		 * Returns: No Content (204) if succeeded. Not found (404) if travel reimbursement status can't be found.
		 * Delete v1/travelreimbursementstatuses/{guid}
		 * @param {string} guid ID for the travel reimbursement status to delete.
		 * @param {string} moveUsagesToGuid Optional: ID of the travel reimbursement status to which to move usages of this travel reimbursement status. Default null. If travel reimbursement status is in use and usages aren't moved the deletion might fail.
		 * @return {void} 
		 */
		TravelReimbursementStatus_DeleteTravelReimbursementStatus(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/travelreimbursementstatuses/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the travel reimbursement statuses by guid.
		 * Get v1/travelreimbursementstatuses/{guid}
		 * @param {string} guid reimbursement status id to get.
		 * @return {TravelReimbursementStatusModel} TravelReimbursementStatusModel.
		 */
		TravelReimbursementStatus_GetTravelReimbursementStatus(guid: string): Observable<TravelReimbursementStatusModel> {
			return this.http.get<TravelReimbursementStatusModel>(this.baseUri + 'v1/travelreimbursementstatuses/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a travel reimbursement status or a part of it.
		 * Patch v1/travelreimbursementstatuses/{guid}
		 * @param {string} guid ID of the travel reimbursement status.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of TravelReimbursementStatusModel.
		 * @return {Array<TravelReimbursementStatusModel>} list of updated travel reimbursement statuses.
		 */
		TravelReimbursementStatus_PatchTravelReimbursementStatus(guid: string, requestBody: Array<PatchOperation>): Observable<Array<TravelReimbursementStatusModel>> {
			return this.http.patch<Array<TravelReimbursementStatusModel>>(this.baseUri + 'v1/travelreimbursementstatuses/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get users
		 * Get v1/users
		 * @param {number} rowCount Optional: How many rows to fetch.
		 * @param {boolean} isActive If not given, return all users, if given as true return only active users, if given as false returns only inactive users
		 * @param {Array<string>} businessUnitGuids Optional: ID of the business unit of the user. If not provided, returns for all business units. Default all.
		 * @param {Array<string>} keywordGuids Optional: ID of the keyword of the user. If not provided, returns for all keywords. Default all.
		 * @param {Date} changedSince Optional: Get users that have been added or changed after this date time (greater or equal).
		 * @param {Array<string>} supervisorUserGuids Optional: ID of the supervisor to get subordinates for.
		 * @param {string} code Optional: Code of the user.
		 * @param {string} email Optional: Email address of the user.
		 * @param {GetUsersPurpose} purpose Optional: Filter users by purpose.
		 * @return {Array<UserOutputModel>} All the users
		 */
		Users_GetUsers(pageToken: string | null | undefined, rowCount: number | null | undefined, isActive: boolean | null | undefined, businessUnitGuids: Array<string> | null | undefined, keywordGuids: Array<string> | null | undefined, changedSince: Date | null | undefined, supervisorUserGuids: Array<string> | null | undefined, code: string | null | undefined, email: string | null | undefined, purpose: GetUsersPurpose | null | undefined): Observable<Array<UserOutputModel>> {
			return this.http.get<Array<UserOutputModel>>(this.baseUri + 'v1/users?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&isActive=' + isActive + '&' + businessUnitGuids?.map(z => `businessUnitGuids=${encodeURIComponent(z)}`).join('&') + '&' + keywordGuids?.map(z => `keywordGuids=${encodeURIComponent(z)}`).join('&') + '&changedSince=' + changedSince?.toISOString() + '&' + supervisorUserGuids?.map(z => `supervisorUserGuids=${encodeURIComponent(z)}`).join('&') + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&purpose=' + purpose, {});
		}

		/**
		 * Insert an user.
		 * Post v1/users
		 * @param {UserInputModel} requestBody UserModel.
		 * @return {void} 
		 */
		Users_PostUser(requestBody: UserInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the user custom properties.
		 * Get v1/users/customproperties
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} isActive Optional: Get only active or inactive user custom properties.
		 * @param {boolean} isInUse Optional: Is the customer property used in any custom property usage.
		 * @param {Date} changedSince Optional: Get custom properties that have been added or changed after this date time (greater or equal).
		 * @return {Array<UserCustomPropertyOutputModel>} 
		 */
		UserCustomProperties_GetUserCustomProperties(pageToken: string | null | undefined, rowCount: number | null | undefined, isActive: boolean | null | undefined, isInUse: boolean | null | undefined, changedSince: Date | null | undefined): Observable<Array<UserCustomPropertyOutputModel>> {
			return this.http.get<Array<UserCustomPropertyOutputModel>>(this.baseUri + 'v1/users/customproperties?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&isActive=' + isActive + '&isInUse=' + isInUse + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Insert a user custom property.
		 * Post v1/users/customproperties
		 * @param {UserCustomPropertyInputModel} requestBody UserCustomPropertyModel.
		 * @return {void} 
		 */
		UserCustomProperties_PostUserCustomProperty(requestBody: UserCustomPropertyInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/users/customproperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Insert a user custom property selection item.
		 * Post v1/users/customproperties/usercustompropertyselectionitems
		 * @param {UserCustomPropertySelectionItemInputModel} requestBody UserPropertySelectionItemInputModel.
		 * @return {void} 
		 */
		UserCustomPropertySelectionItems_PostUserCustomPropertySelectionItem(requestBody: UserCustomPropertySelectionItemInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/users/customproperties/usercustompropertyselectionitems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a user custom property selection item.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/users/customproperties/usercustompropertyselectionitems/{guid}
		 * @param {string} guid GUID used to delete the user custom property selection item.
		 * @return {void} 
		 */
		UserCustomPropertySelectionItems_DeleteUserCustomPropertySelectionItem(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/users/customproperties/usercustompropertyselectionitems/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user custom property selection item by ID.
		 * Get v1/users/customproperties/usercustompropertyselectionitems/{guid}
		 * @param {string} guid Id used to get the user custom property selection item.
		 * @return {UserCustomPropertySelectionItemOutputModel} 
		 */
		UserCustomPropertySelectionItems_GetUserCustomPropertySelectionItem(guid: string): Observable<UserCustomPropertySelectionItemOutputModel> {
			return this.http.get<UserCustomPropertySelectionItemOutputModel>(this.baseUri + 'v1/users/customproperties/usercustompropertyselectionitems/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a user custom property selection item or a part of it.
		 * Patch v1/users/customproperties/usercustompropertyselectionitems/{guid}
		 * @param {string} guid ID of the user custom property selection item.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of UserCustomPropertySelectionItemInputModel.
		 * @return {Array<UserCustomPropertySelectionItemOutputModel>} List of updated user custom properties.
		 */
		UserCustomPropertySelectionItems_PatchUserCustomPropertySelectionItem(guid: string, requestBody: Array<PatchOperation>): Observable<Array<UserCustomPropertySelectionItemOutputModel>> {
			return this.http.patch<Array<UserCustomPropertySelectionItemOutputModel>>(this.baseUri + 'v1/users/customproperties/usercustompropertyselectionitems/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the user custom properties.
		 * Get v1/users/customproperties/{customPropertyGuid}/usercustompropertyselectionitems
		 * @param {string} customPropertyGuid Custom property id used to get the user custom property selection items.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} isActive Optional: Get only active or inactive selection items.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {Date} changedSince Optional: Get custom property selection items that have been added or changed after this date time (greater or equal).
		 * @return {Array<UserCustomPropertySelectionItemOutputModel>} 
		 */
		UserCustomPropertySelectionItems_GetUserCustomPropertySelectionItems(customPropertyGuid: string, rowCount: number | null | undefined, isActive: boolean | null | undefined, pageToken: string | null | undefined, changedSince: Date | null | undefined): Observable<Array<UserCustomPropertySelectionItemOutputModel>> {
			return this.http.get<Array<UserCustomPropertySelectionItemOutputModel>>(this.baseUri + 'v1/users/customproperties/' + (customPropertyGuid == null ? '' : encodeURIComponent(customPropertyGuid)) + '/usercustompropertyselectionitems&rowCount=' + rowCount + '&isActive=' + isActive + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Deletes a user custom property.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/users/customproperties/{guid}
		 * @param {string} guid GUID used to delete the user custom property.
		 * @return {void} 
		 */
		UserCustomProperties_DeleteUserCustomProperty(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/users/customproperties/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user custom property by ID.
		 * Get v1/users/customproperties/{guid}
		 * @param {string} guid Id used to get the user custom property.
		 * @return {UserCustomPropertyOutputModel} 
		 */
		UserCustomProperties_GetUserCustomProperty(guid: string): Observable<UserCustomPropertyOutputModel> {
			return this.http.get<UserCustomPropertyOutputModel>(this.baseUri + 'v1/users/customproperties/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a user custom property or a part of it.
		 * Patch v1/users/customproperties/{guid}
		 * @param {string} guid ID of the user custom property Can also be comma separate list of IDs to patch multiple user custom properties with one call. When multiple IDs are given, returns model which has list of succeeded user custom properties and list of errors.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of UserCustomPropertyModel.
		 * @return {Array<UserCustomPropertyOutputModel>} List of updated user custom properties.
		 */
		UserCustomProperties_PatchUserCustomProperty(guid: string, requestBody: Array<PatchOperation>): Observable<Array<UserCustomPropertyOutputModel>> {
			return this.http.patch<Array<UserCustomPropertyOutputModel>>(this.baseUri + 'v1/users/customproperties/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Insert a user custom value.
		 * Post v1/users/customvalues
		 * @param {UserCustomValueInputModel} requestBody UserCustomValueModel.
		 * @return {void} 
		 */
		UserCustomValues_PostUserCustomValue(requestBody: UserCustomValueInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/users/customvalues', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a user custom value.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/users/customvalues/{guid}
		 * @param {string} guid GUID used to delete the user custom value.
		 * @return {void} 
		 */
		UserCustomValues_DeleteUserCustomValue(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/users/customvalues/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user custom value by ID.
		 * Get v1/users/customvalues/{guid}
		 * @param {string} guid Id used to get the user custom value.
		 * @return {UserCustomValueOutputModel} 
		 */
		UserCustomValues_GetUserCustomValue(guid: string): Observable<UserCustomValueOutputModel> {
			return this.http.get<UserCustomValueOutputModel>(this.baseUri + 'v1/users/customvalues/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a user custom value or a part of it.
		 * Patch v1/users/customvalues/{guid}
		 * @param {string} guid ID of the user custom value Can also be comma separate list of IDs to patch multiple user custom values with one call. When multiple IDs are given, returns model which has list of succeeded user custom values and list of errors.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of UserCustomValueModel.
		 * @return {Array<UserCustomValueOutputModel>} List of updated user custom values.
		 */
		UserCustomValues_PatchUserCustomValue(guid: string, requestBody: Array<PatchOperation>): Observable<Array<UserCustomValueOutputModel>> {
			return this.http.patch<Array<UserCustomValueOutputModel>>(this.baseUri + 'v1/users/customvalues/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an user.
		 * No Content (204) if succeeded. Bad Request (400) if user can't be deleted. Not Found (404) if the user can't be found.
		 * Delete v1/users/{guid}
		 * @param {string} guid ID of the user.
		 * @return {void} 
		 */
		Users_DeleteUser(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/users/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get user by ID.
		 * Get v1/users/{guid}
		 * @param {string} guid GUID used to get the user.
		 * @return {UserOutputModel} User.
		 */
		Users_GetUser(guid: string): Observable<UserOutputModel> {
			return this.http.get<UserOutputModel>(this.baseUri + 'v1/users/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) an user or a part of it.
		 * Patch v1/users/{guid}
		 * @param {string} guid ID of the user.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of UserModel.
		 * @return {Array<UserOutputModel>} List of updated users.
		 */
		Users_PatchUser(guid: string, requestBody: Array<PatchOperation>): Observable<Array<UserOutputModel>> {
			return this.http.patch<Array<UserOutputModel>>(this.baseUri + 'v1/users/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the user custom values.
		 * Get v1/users/{userGuid}/customvalues
		 * @param {string} userGuid ID of the user.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {boolean} isActive Optional: Get only values of active or inactive user custom properties.
		 * @param {Array<string>} targets Optional: List of target for which to get the values.
		 * @param {Date} changedSince Optional: Get user custom values that have been added or changed after this date time (greater or equal).
		 * @return {Array<UserCustomValueOutputModel>} 
		 */
		UserCustomValues_GetUserCustomValues(userGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, isActive: boolean | null | undefined, targets: Array<string> | null | undefined, changedSince: Date | null | undefined): Observable<Array<UserCustomValueOutputModel>> {
			return this.http.get<Array<UserCustomValueOutputModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/customvalues&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&isActive=' + isActive + '&' + targets?.map(z => `targets=${encodeURIComponent(z)}`).join('&') + '&changedSince=' + changedSince?.toISOString(), {});
		}

		/**
		 * Get the flextime balance for a user for a specified date. Total balance is returned for the given date. Month balance is the balance for the month of the given date.
		 * Values are returned only if the advanced time tracking add-on is active.
		 * Get v1/users/{userGuid}/flextime
		 * @param {string} userGuid Id of the user.
		 * @param {Date} eventDate Date for which to get the balance. Max 12 months into the future.
		 * @return {FlextimeModel} FlextimeModel.
		 */
		Flextime_GetFlextime(userGuid: string, eventDate: Date | null | undefined): Observable<FlextimeModel> {
			return this.http.get<FlextimeModel>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/flextime&eventDate=' + eventDate?.toISOString(), {});
		}

		/**
		 * Get the Flextime Adjustments.
		 * Get v1/users/{userGuid}/flextimeadjustments
		 * @param {string} userGuid ID of the user for whom to get the adjustments.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @return {Array<FlextimeAdjustmentOutputModel>} List of Flextime Adjustments.
		 */
		FlextimeAdjustments_GetFlextimeAdjustments(userGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined): Observable<Array<FlextimeAdjustmentOutputModel>> {
			return this.http.get<Array<FlextimeAdjustmentOutputModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/flextimeadjustments&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount, {});
		}

		/**
		 * Get all the keywords for user.
		 * Get v1/users/{userGuid}/keywords
		 * @param {string} userGuid ID of the user for who keywords are requested.
		 * @param {boolean} active If not given, return all Keywords, if given as true return only active Keywords, if given as false returns only inactive Keywords.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=Keyword&sortings[0].value=Desc".
		 * @return {Array<UserKeywordModel>} Keywords.
		 */
		Keywords_GetUserKeywords(userGuid: string, active: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<UserKeywordModel>> {
			return this.http.get<Array<UserKeywordModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/keywords&active=' + active + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Delete a keyword from the user
		 * Returns: No Content (204) if succeeded. Not found (404) if the keyword or the link can't be found.
		 * Delete v1/users/{userGuid}/keywords/{guid}
		 * @return {void} 
		 */
		Keywords_DeleteUserKeyword(userGuid: string, guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/keywords/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Link existing keyword to user
		 * Post v1/users/{userGuid}/keywords/{guid}
		 * @return {void} 
		 */
		Keywords_LinkKeywordToUser(userGuid: string, guid: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/keywords/' + (guid == null ? '' : encodeURIComponent(guid)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all the projectFees for a user
		 * Get v1/users/{userGuid}/projectfees
		 * @param {string} userGuid ID of the user.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: Number of rows to fetch.
		 * @param {ProductOutputModelType} productType Optional: ProjectFee's product type. if given, it filters the projectFees by the given type. FixedFees (Own work), Materials (Products), Subcontracting.
		 * @param {boolean} isBillable Optional: Filter the project fees. If true/false, only the billable/non-billable ones are returned. If null, all are returned. Default is null.
		 * @param {boolean} isBilled Optional: Filter the project fees. If true/false, only the ones that are/are not invoiced are returned. If null, all are returned. Default is null.
		 * @param {Date} invoiceableDate Optional: Filter the project fees. When given, only the ones that are invoiceable before or on the given date are returned. Default is null.
		 * @param {boolean} hasPhase Optional: Filter the project fees. If true/false, only the ones are connected/not-connected to a phase are returned. If null, all are returned. Default is null.
		 * @param {Date} startDate Start date search criteria. Only get project fees that have event date from this date.
		 * @param {Date} endDate End date search criteria. Only get project fees that have event date until this date.
		 * @return {Array<ProjectFeeOutputModel>} ProjectFees
		 */
		ProjectFees_GetUserProjectFees(userGuid: string, pageToken: string | null | undefined, rowCount: number | null | undefined, productType: ProductOutputModelType | null | undefined, isBillable: boolean | null | undefined, isBilled: boolean | null | undefined, invoiceableDate: Date | null | undefined, hasPhase: boolean | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined): Observable<Array<ProjectFeeOutputModel>> {
			return this.http.get<Array<ProjectFeeOutputModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/projectfees&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&productType=' + productType + '&isBillable=' + isBillable + '&isBilled=' + isBilled + '&invoiceableDate=' + invoiceableDate?.toISOString() + '&hasPhase=' + hasPhase + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString(), {});
		}

		/**
		 * Get all cost exceptions of project members for user.
		 * Get v1/users/{userGuid}/projectmembercostexceptions
		 * @param {string} userGuid Guid of the user.
		 * @param {boolean} isProjectClosed Search only for open or closed projects. Default all projects.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @return {Array<ProjectMemberCostExceptionOutputModel>} All the member cost exceptions for one project.
		 */
		ProjectMemberCostExceptions_GetProjectMemberCostExceptionsForUser(userGuid: string, isProjectClosed: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined): Observable<Array<ProjectMemberCostExceptionOutputModel>> {
			return this.http.get<Array<ProjectMemberCostExceptionOutputModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/projectmembercostexceptions&isProjectClosed=' + isProjectClosed + '&firstRow=' + firstRow + '&rowCount=' + rowCount, {});
		}

		/**
		 * Get all the project travel expenses for a user
		 * Get v1/users/{userGuid}/projecttravelexpenses
		 * @param {string} userGuid ID of the user.
		 * @param {Date} startDate Optional: starting date from which to get the travel expenses. Default all.
		 * @param {Date} endDate Optional: starting date to which to get the travel expenses. Default all.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {ExpensesClass} expenseClass Optional: Class of the expense. Mileage, DailyAllowance or OtherTravelExpense
		 * @param {boolean} isReimbursed Optional. Filter the project travel expenses. If true/false, only the ones that are reimbursed are returned. If null, all are returned. Default is null.
		 * @param {boolean} isTravelReimbursementRequired Optional: Filter the project travel expenses by whether or not the reimbursement is required. Default all.
		 * @param {string} travelReimbursementGuid Optional: ID of the travel reimbursement
		 * @param {string} costCurrencyGuid Optional: ID of the cost currency.
		 * @return {Array<ProjectTravelExpenseOutputModel>} ProjectTravelExpenseOutputModel
		 */
		ProjectTravelExpenses_GetProjectTravelExpensesForUser(userGuid: string, startDate: Date | null | undefined, endDate: Date | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined, expenseClass: ExpensesClass | null | undefined, isReimbursed: boolean | null | undefined, isTravelReimbursementRequired: boolean | null | undefined, travelReimbursementGuid: string | null | undefined, costCurrencyGuid: string | null | undefined): Observable<Array<ProjectTravelExpenseOutputModel>> {
			return this.http.get<Array<ProjectTravelExpenseOutputModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/projecttravelexpenses&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&expenseClass=' + expenseClass + '&isReimbursed=' + isReimbursed + '&isTravelReimbursementRequired=' + isTravelReimbursementRequired + '&travelReimbursementGuid=' + (travelReimbursementGuid == null ? '' : encodeURIComponent(travelReimbursementGuid)) + '&costCurrencyGuid=' + (costCurrencyGuid == null ? '' : encodeURIComponent(costCurrencyGuid)), {});
		}

		/**
		 * Get resource allocations for a user with required filters (startDate and endDate or changedSince, max 30 days to be fetched at once)
		 * Get v1/users/{userGuid}/resourceallocations/allocations
		 * @param {Date} startDate Get resource allocations with startDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
		 * @param {Date} endDate Get resource allocations with endDate. Using startDate and endDate or changedSince parameters are required to fetch a maximum of 30 days
		 * @param {Date} changedSince Optional: Get resource allocations that have been added or changed after this date time (greater or equal).
		 * @param {number} rowCount Optional: Number of rows to fetch.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @return {ResourceAllocationOutputModel} 
		 */
		ResourceAllocations_GetResourceAllocationsByUserGuid(userGuid: string, startDate: Date | null | undefined, endDate: Date | null | undefined, changedSince: Date | null | undefined, userLicenseTypes: Array<LicenseUserType> | null | undefined, phaseGuid: string | null | undefined, projectGuid: string | null | undefined, projectBusinessUnitGuid: string | null | undefined, userBusinessUnitGuid: string | null | undefined, projectManagerUserGuid: string | null | undefined, userTagGuid: string | null | undefined, useSalesProbability: boolean | null | undefined, projectStatusTypeGuid: string | null | undefined, projectTagGuid: string | null | undefined, superiorUserGuid: string | null | undefined, salesStatusTypeGuid: string | null | undefined, resourceAllocationGuid: string | null | undefined, salesProgress: SalesProgress | null | undefined, rowCount: number | null | undefined, pageToken: string | null | undefined): Observable<ResourceAllocationOutputModel> {
			return this.http.get<ResourceAllocationOutputModel>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/resourceallocations/allocations&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&changedSince=' + changedSince?.toISOString() + '&' + userLicenseTypes?.map(z => `userLicenseTypes=${z}`).join('&') + '&phaseGuid=' + (phaseGuid == null ? '' : encodeURIComponent(phaseGuid)) + '&projectGuid=' + (projectGuid == null ? '' : encodeURIComponent(projectGuid)) + '&projectBusinessUnitGuid=' + (projectBusinessUnitGuid == null ? '' : encodeURIComponent(projectBusinessUnitGuid)) + '&userBusinessUnitGuid=' + (userBusinessUnitGuid == null ? '' : encodeURIComponent(userBusinessUnitGuid)) + '&projectManagerUserGuid=' + (projectManagerUserGuid == null ? '' : encodeURIComponent(projectManagerUserGuid)) + '&userTagGuid=' + (userTagGuid == null ? '' : encodeURIComponent(userTagGuid)) + '&useSalesProbability=' + useSalesProbability + '&projectStatusTypeGuid=' + (projectStatusTypeGuid == null ? '' : encodeURIComponent(projectStatusTypeGuid)) + '&projectTagGuid=' + (projectTagGuid == null ? '' : encodeURIComponent(projectTagGuid)) + '&superiorUserGuid=' + (superiorUserGuid == null ? '' : encodeURIComponent(superiorUserGuid)) + '&salesStatusTypeGuid=' + (salesStatusTypeGuid == null ? '' : encodeURIComponent(salesStatusTypeGuid)) + '&resourceAllocationGuid=' + (resourceAllocationGuid == null ? '' : encodeURIComponent(resourceAllocationGuid)) + '&salesProgress=' + salesProgress + '&rowCount=' + rowCount + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get all the time entries for a user.
		 * Get v1/users/{userGuid}/timeentries
		 * @param {string} userGuid ID of the user.
		 * @param {Date} startDate Optional: starting date from which to get the time entries. Default all.
		 * @param {Date} endDate Optional: starting date to which to get the time entries. Default all.
		 * @param {Array<string>} phaseGuid Optional: Filters time entries for given phases.
		 * @param {Array<string>} timeEntryTypeGuid Optional: Filters time entries for given time entry types.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @return {Array<TimeEntryModel>} TimeEntries.
		 */
		TimeEntries_GetTimeEntriesForUser(userGuid: string, startDate: Date | null | undefined, endDate: Date | null | undefined, phaseGuid: Array<string> | null | undefined, timeEntryTypeGuid: Array<string> | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined): Observable<Array<TimeEntryModel>> {
			return this.http.get<Array<TimeEntryModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/timeentries&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&' + phaseGuid?.map(z => `phaseGuid=${encodeURIComponent(z)}`).join('&') + '&' + timeEntryTypeGuid?.map(z => `timeEntryTypeGuid=${encodeURIComponent(z)}`).join('&') + '&firstRow=' + firstRow + '&rowCount=' + rowCount, {});
		}

		/**
		 * Get all files of all travel expenses of the user.
		 * Get v1/users/{userGuid}/travelexpensesfiles
		 * @param {string} userGuid GUID of the user used to get the files attached to travel expenses.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch.
		 * @param {Date} startDate Optional: Start date to from which to check travel expenses.
		 * @param {Date} endDate Optional: End date to check for availability until travel expenses.
		 * @return {Array<ProjectTravelExpenseFileModel>} TravelExpenseFile.
		 */
		Files_GetUsersTravelExpensesFiles(userGuid: string, firstRow: number | null | undefined, rowCount: number | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined): Observable<Array<ProjectTravelExpenseFileModel>> {
			return this.http.get<Array<ProjectTravelExpenseFileModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/travelexpensesfiles&firstRow=' + firstRow + '&rowCount=' + rowCount + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString(), {});
		}

		/**
		 * Get all the work contracts for the user.
		 * Get v1/users/{userGuid}/workcontracts
		 * @param {string} userGuid Id of the user.
		 * @return {Array<WorkContractOutputModel>} Work contracts.
		 */
		WorkContracts_GetWorkContractsForUser(userGuid: string): Observable<Array<WorkContractOutputModel>> {
			return this.http.get<Array<WorkContractOutputModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/workcontracts', {});
		}

		/**
		 * Gets current work contract for the user
		 * Get v1/users/{userGuid}/workcontracts/current
		 * @param {string} userGuid Id of the user
		 * @return {WorkContractOutputModel} Work contracts
		 */
		WorkContracts_GetCurrentWorkContractForUser(userGuid: string): Observable<WorkContractOutputModel> {
			return this.http.get<WorkContractOutputModel>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/workcontracts/current', {});
		}

		/**
		 * Get workdays for a user.
		 * Get v1/users/{userGuid}/workdays
		 * @param {string} userGuid ID of the user.
		 * @param {Date} startDate Start date of the workdays.
		 * @param {Date} endDate End date of the workdays.
		 * @return {Array<WorkdayModel>} User's workdays.
		 */
		Workdays_GetWorkdays(userGuid: string, startDate: Date, endDate: Date): Observable<Array<WorkdayModel>> {
			return this.http.get<Array<WorkdayModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/workdays&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString(), {});
		}

		/**
		 * Update (Patch) a workday or a part of it
		 * Patch v1/users/{userGuid}/workdays/{date}
		 * @param {string} userGuid ID of the user.
		 * @param {Date} date Date of the workday..
		 * @param {Array<PatchOperation>} requestBody JSON patch document of WorkdayModel
		 * @return {Array<WorkdayModel>} list of updated workdays
		 */
		Workdays_PatchWorkDay(userGuid: string, date: Date, requestBody: Array<PatchOperation>): Observable<Array<WorkdayModel>> {
			return this.http.patch<Array<WorkdayModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/workdays/' + date.toISOString(), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the work hours for a user
		 * Get v1/users/{userGuid}/workhours
		 * @param {string} userGuid ID of the user.
		 * @param {Date} startDate Optional: starting date from which to get the hours. Default all.
		 * @param {Date} endDate Optional: starting date to which to get the hours. Default all.
		 * @param {Array<string>} phaseGuid Optional: ID of the phase to get the hours for. Default all.
		 * @param {Array<string>} workTypeGuid Optional: ID of the work type. Default all.
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @return {Array<WorkHourOutputModel>} WorkHours
		 */
		WorkHours_GetWorkHoursForUser(userGuid: string, startDate: Date | null | undefined, endDate: Date | null | undefined, phaseGuid: Array<string> | null | undefined, workTypeGuid: Array<string> | null | undefined, pageToken: string | null | undefined, rowCount: number | null | undefined): Observable<Array<WorkHourOutputModel>> {
			return this.http.get<Array<WorkHourOutputModel>>(this.baseUri + 'v1/users/' + (userGuid == null ? '' : encodeURIComponent(userGuid)) + '/workhours&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&' + phaseGuid?.map(z => `phaseGuid=${encodeURIComponent(z)}`).join('&') + '&' + workTypeGuid?.map(z => `workTypeGuid=${encodeURIComponent(z)}`).join('&') + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount, {});
		}

		/**
		 * Get all organization vat rates
		 * Get v1/vatrates
		 * @param {string} countryGuid If not given, return all vat rates in organizations country. If given return only for that country.
		 * @param {boolean} active If not given, return all vat rates, if given as true return only active ones, if given as false returns only inactive ones.
		 * @return {Array<VatRateOutputModel>} Vat rates
		 */
		VatRates_GetVatRates(countryGuid: string | null | undefined, active: boolean | null | undefined): Observable<Array<VatRateOutputModel>> {
			return this.http.get<Array<VatRateOutputModel>>(this.baseUri + 'v1/vatrates?countryGuid=' + (countryGuid == null ? '' : encodeURIComponent(countryGuid)) + '&active=' + active, {});
		}

		/**
		 * Insert a vat rate
		 * Post v1/vatrates
		 * @param {VatRateInputModel} requestBody VatRateInputModel
		 * @return {void} 
		 */
		VatRates_PostVatRate(requestBody: VatRateInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/vatrates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a vat rate
		 * Returns: No Content (204) if succeeded. Bad Request (400) if vat rate is the default one. Not Found (404) if vat rate can't be found.
		 * Delete v1/vatrates/{guid}
		 * @param {string} guid GUID for the vat rate to delete
		 * @return {void} 
		 */
		VatRates_DeleteVatRate(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/vatrates/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a vat rate by GUID
		 * Get v1/vatrates/{guid}
		 * @param {string} guid GUID used to get the vat rate.
		 * @return {VatRateOutputModel} Vat rate
		 */
		VatRates_GetVatRate(guid: string): Observable<VatRateOutputModel> {
			return this.http.get<VatRateOutputModel>(this.baseUri + 'v1/vatrates/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a vat rate or a part of it
		 * Patch v1/vatrates/{guid}
		 * @param {string} guid GUID of the vat rate
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of ValueAddedTaxModel
		 * @return {Array<VatRateOutputModel>} list of updated vat rates
		 */
		VatRates_PatchVatRate(guid: string, requestBody: Array<PatchOperation>): Observable<Array<VatRateOutputModel>> {
			return this.http.patch<Array<VatRateOutputModel>>(this.baseUri + 'v1/vatrates/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Insert a work contract.
		 * Post v1/workcontracts
		 * @param {boolean} resetFlextime Optional. Reset flextime to zero when new work contract starts or keep the flextime value. Default true = reset flextime.
		 * @param {WorkContractInputModel} requestBody WorkContractOutputModel.
		 * @return {void} 
		 */
		WorkContracts_PostWorkContract(resetFlextime: boolean | null | undefined, requestBody: WorkContractInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/workcontracts?resetFlextime=' + resetFlextime, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a work contract.
		 * Returns: No Content (204) if succeeded. Not found (404) if work contract can't be found.
		 * Delete v1/workcontracts/{guid}
		 * @param {string} guid ID for the work contract to delete.
		 * @return {void} 
		 */
		WorkContracts_DeleteWorkContract(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/workcontracts/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get work contract by ID.
		 * Get v1/workcontracts/{guid}
		 * @param {string} guid Id used to get the work contract.
		 * @return {WorkContractOutputModel} 
		 */
		WorkContracts_GetWorkContract(guid: string): Observable<WorkContractOutputModel> {
			return this.http.get<WorkContractOutputModel>(this.baseUri + 'v1/workcontracts/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a work contract or a part of it.
		 * Patch v1/workcontracts/{guid}
		 * @param {string} guid ID of the work contract.
		 * @param {Array<PatchOperation>} requestBody JSON patch document of WorkContractOutputModel.
		 * @return {Array<WorkContractOutputModel>} list of updated work contract.
		 */
		WorkContracts_PatchWorkContract(guid: string, requestBody: Array<PatchOperation>): Observable<Array<WorkContractOutputModel>> {
			return this.http.patch<Array<WorkContractOutputModel>>(this.baseUri + 'v1/workcontracts/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get work hour price by ID.
		 * Get v1/workhourprices/{guid}
		 * @param {string} guid Id used to get the work hour price.
		 * @return {WorkHourPriceOutputModel} 
		 */
		WorkHourPrices_GetWorkHourPrice(guid: string): Observable<WorkHourPriceOutputModel> {
			return this.http.get<WorkHourPriceOutputModel>(this.baseUri + 'v1/workhourprices/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Get the work hours.
		 * Get v1/workhours
		 * @param {string} pageToken Optional: page token to fetch the next page.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {Date} changedSince Optional: Get work hours that have been added or changed after this date time (greater or equal).
		 * @param {BillableStatusType} billableStatus Billable status type
		 * @param {Date} eventDateStart Optional: Get work hours that have event date after this date time (greater or equal).
		 * @param {Date} eventDateEnd Optional: Get work hours that have event date before this date time (less or equal).
		 * @return {Array<WorkHourOutputModel>} 
		 */
		WorkHours_GetWorkHours(pageToken: string | null | undefined, rowCount: number | null | undefined, changedSince: Date | null | undefined, billableStatus: BillableStatusType | null | undefined, eventDateStart: Date | null | undefined, eventDateEnd: Date | null | undefined): Observable<Array<WorkHourOutputModel>> {
			return this.http.get<Array<WorkHourOutputModel>>(this.baseUri + 'v1/workhours?pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&rowCount=' + rowCount + '&changedSince=' + changedSince?.toISOString() + '&billableStatus=' + billableStatus + '&eventDateStart=' + eventDateStart?.toISOString() + '&eventDateEnd=' + eventDateEnd?.toISOString(), {});
		}

		/**
		 * Insert a work hour
		 * Post v1/workhours
		 * @param {WorkHourInputModel} requestBody WorkHourInputModel
		 * @return {void} 
		 */
		WorkHours_PostWorkHour(requestBody: WorkHourInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/workhours', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a work hour.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/workhours/{guid}
		 * @param {string} guid GUID used to delete the work hour.
		 * @return {void} 
		 */
		WorkHours_DeleteWorkHour(guid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/workhours/' + (guid == null ? '' : encodeURIComponent(guid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get work hour by ID
		 * Get v1/workhours/{guid}
		 * @param {string} guid Id used to get the work hour.
		 * @return {WorkHourOutputModel} 
		 */
		WorkHours_GetWorkHour(guid: string): Observable<WorkHourOutputModel> {
			return this.http.get<WorkHourOutputModel>(this.baseUri + 'v1/workhours/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a work hour or a part of it
		 * Patch v1/workhours/{guid}
		 * @param {string} guid ID of the work hour. Can also be comma separate list of IDs to patch multiple work hours with one call. When multiple IDs are given, returns model which has list of succeeded work hours and list of errors.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of WorkHourInputModel
		 * @return {Array<WorkHourOutputModel>} List of updated work hours
		 */
		WorkHours_PatchWorkHour(guid: string, requestBody: Array<PatchOperation>): Observable<Array<WorkHourOutputModel>> {
			return this.http.patch<Array<WorkHourOutputModel>>(this.baseUri + 'v1/workhours/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all work types.
		 * Get v1/worktypes
		 * @param {boolean} active Filter the work types. If true/false, only the active/inactive ones are returned. If null, all the work types are returned.
		 * @param {boolean} productive Filter the work types. If true/false, only the productive/non-productive ones are returned. If null, all the work types are returned.
		 * @param {number} firstRow Optional: first row to fetch. Default 0 = first row.
		 * @param {number} rowCount Optional: How many rows to fetch, Default 20, maximum 100.
		 * @param {string} textToSearch Optional: Text to search from work type name or code.
		 * @param {string} code Optional: Code of the work type.
		 * @param {Date} changedSince Optional: Get work types that have been added or changed after this date time (greater or equal).
		 * @param {boolean} calculateRowCount Optional: Calculate total number of rows.
		 * @param {Array<KeyValuePairOfStringAndSortDirection>} sortings Optional: A list of Key-Value pairs, containing names of fields and directions by which the results should be sorted. Any sortable field name (submodel fields not supported) in the model can be used, while value can be "Desc" or "Asc". Example: "?sortings[0].key=name&sortings[0].value=Asc".
		 * @return {Array<WorkTypeOutputModel>} All the work types matching search criteria.
		 */
		WorkTypes_GetWorkTypes(active: boolean | null | undefined, productive: boolean | null | undefined, firstRow: number | null | undefined, rowCount: number | null | undefined, textToSearch: string | null | undefined, code: string | null | undefined, changedSince: Date | null | undefined, calculateRowCount: boolean | null | undefined, sortings: Array<KeyValuePairOfStringAndSortDirection> | null | undefined): Observable<Array<WorkTypeOutputModel>> {
			return this.http.get<Array<WorkTypeOutputModel>>(this.baseUri + 'v1/worktypes?active=' + active + '&productive=' + productive + '&firstRow=' + firstRow + '&rowCount=' + rowCount + '&textToSearch=' + (textToSearch == null ? '' : encodeURIComponent(textToSearch)) + '&code=' + (code == null ? '' : encodeURIComponent(code)) + '&changedSince=' + changedSince?.toISOString() + '&calculateRowCount=' + calculateRowCount + '&' + sortings?.map(z => `sortings=${z}`).join('&'), {});
		}

		/**
		 * Insert a work type.
		 * Post v1/worktypes
		 * @param {WorkTypeInputModel} requestBody WorkTypeModel.
		 * @return {void} 
		 */
		WorkTypes_PostWorkType(requestBody: WorkTypeInputModel): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/worktypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a work type.
		 * Returns: No Content (204) if succeeded.
		 * Delete v1/worktypes/{guid}
		 * @param {string} guid GUID used to delete the work type.
		 * @param {string} moveUsagesToGuid Optional: ID of the work type to which to move usages of this work type. Default null. If work type is in use and usages aren't moved the deletion might fail.
		 * @return {void} 
		 */
		WorkTypes_DeleteWorkType(guid: string, moveUsagesToGuid: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/worktypes/' + (guid == null ? '' : encodeURIComponent(guid)) + '&moveUsagesToGuid=' + (moveUsagesToGuid == null ? '' : encodeURIComponent(moveUsagesToGuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get work type by ID.
		 * Get v1/worktypes/{guid}
		 * @param {string} guid Id used to get the work type.
		 * @return {WorkTypeOutputModel} 
		 */
		WorkTypes_GetWorkType(guid: string): Observable<WorkTypeOutputModel> {
			return this.http.get<WorkTypeOutputModel>(this.baseUri + 'v1/worktypes/' + (guid == null ? '' : encodeURIComponent(guid)), {});
		}

		/**
		 * Update (Patch) a work type or a part of it.
		 * Patch v1/worktypes/{guid}
		 * @param {string} guid ID of the work type.
		 * @param {Array<PatchOperation>} requestBody JSON Patch document of WorkTypeModel.
		 * @return {Array<WorkTypeOutputModel>} List of updated work types.
		 */
		WorkTypes_PatchWorkType(guid: string, requestBody: Array<PatchOperation>): Observable<Array<WorkTypeOutputModel>> {
			return this.http.patch<Array<WorkTypeOutputModel>>(this.baseUri + 'v1/worktypes/' + (guid == null ? '' : encodeURIComponent(guid)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

