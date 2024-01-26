import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddressInputModel {
		addressLine1?: string | null;
		addressLine2?: string | null;
		city?: string | null;
		country?: string | null;
		postalCode?: string | null;
		state?: string | null;
	}
	export interface AddressInputModelFormProperties {
		addressLine1: FormControl<string | null | undefined>,
		addressLine2: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateAddressInputModelFormGroup() {
		return new FormGroup<AddressInputModelFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddressUpdateModel {
		addressLine1?: string | null;
		addressLine2?: string | null;
		city?: string | null;
		country?: string | null;
		postalCode?: string | null;
		state?: string | null;
	}
	export interface AddressUpdateModelFormProperties {
		addressLine1: FormControl<string | null | undefined>,
		addressLine2: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateAddressUpdateModelFormGroup() {
		return new FormGroup<AddressUpdateModelFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddressViewModel {
		addressLine1?: string | null;
		addressLine2?: string | null;
		city?: string | null;
		country?: string | null;
		postalCode?: string | null;
		state?: string | null;
	}
	export interface AddressViewModelFormProperties {
		addressLine1: FormControl<string | null | undefined>,
		addressLine2: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateAddressViewModelFormGroup() {
		return new FormGroup<AddressViewModelFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppointmentAuditViewModel {
		appointmentId?: string | null;
		id?: string | null;
		modificationType?: string | null;
		modifiedBy?: string | null;
		modifiedOn?: string | null;
		notesAfter?: string | null;
		notesBefore?: string | null;
		statusAfter?: string | null;
		statusBefore?: string | null;
	}
	export interface AppointmentAuditViewModelFormProperties {
		appointmentId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		modificationType: FormControl<string | null | undefined>,
		modifiedBy: FormControl<string | null | undefined>,
		modifiedOn: FormControl<string | null | undefined>,
		notesAfter: FormControl<string | null | undefined>,
		notesBefore: FormControl<string | null | undefined>,
		statusAfter: FormControl<string | null | undefined>,
		statusBefore: FormControl<string | null | undefined>,
	}
	export function CreateAppointmentAuditViewModelFormGroup() {
		return new FormGroup<AppointmentAuditViewModelFormProperties>({
			appointmentId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modificationType: new FormControl<string | null | undefined>(undefined),
			modifiedBy: new FormControl<string | null | undefined>(undefined),
			modifiedOn: new FormControl<string | null | undefined>(undefined),
			notesAfter: new FormControl<string | null | undefined>(undefined),
			notesBefore: new FormControl<string | null | undefined>(undefined),
			statusAfter: new FormControl<string | null | undefined>(undefined),
			statusBefore: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppointmentCustomerViewModel {
		appointmentId?: string | null;
		customerId?: string | null;
	}
	export interface AppointmentCustomerViewModelFormProperties {
		appointmentId: FormControl<string | null | undefined>,
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateAppointmentCustomerViewModelFormGroup() {
		return new FormGroup<AppointmentCustomerViewModelFormProperties>({
			appointmentId: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppointmentListViewModel {
		count?: number | null;
		data?: Array<AppointmentViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface AppointmentListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateAppointmentListViewModelFormGroup() {
		return new FormGroup<AppointmentListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppointmentViewModel {
		auditTrail?: Array<AppointmentAuditViewModel>;
		bookedBy?: string | null;
		businessName?: string | null;
		calendarId?: string | null;
		confirmationNumber?: string | null;
		confirmed?: boolean | null;
		createDate?: string | null;
		customFields?: {[id: string]: CustomFieldViewModel };
		customerId?: string | null;
		customerMessage?: string | null;
		customers?: Array<AppointmentCustomerViewModel>;
		date?: string | null;
		dateInternational?: string | null;
		downloadIcsUrl?: string | null;
		duration?: number | null;
		email?: string | null;
		emailConfirmationSent?: string | null;
		emailReminderSent?: string | null;
		endDateTime?: string | null;
		firstname?: string | null;
		groupSize?: number | null;
		id?: string | null;
		ipAddress?: string | null;
		lastModifiedBy?: string | null;
		lastModifiedOn?: string | null;
		lastname?: string | null;
		latitude?: string | null;
		location?: string | null;
		locationId?: string | null;
		longitude?: string | null;
		name?: string | null;
		notes?: string | null;
		object?: string | null;
		onlineBooking?: boolean | null;
		paymentStatus?: number | null;
		phone?: string | null;
		phoneExt?: string | null;
		phoneType?: string | null;
		rescheduledId?: string | null;
		resourceEmail?: string | null;
		resourceGroupId?: string | null;
		resourceGroupName?: string | null;
		resourceId?: string | null;
		resourceImageUrl?: string | null;
		resourceName?: string | null;
		resources?: Array<AppointmentResourceViewModel>;
		serviceAllocationId?: string | null;
		serviceId?: string | null;
		serviceImageUrl?: string | null;
		serviceName?: string | null;
		smsConfirmationSent?: string | null;
		smsReminderSent?: string | null;
		startDateTime?: string | null;
		status?: string | null;
		stripeChargeId?: string | null;
		stripeRefundId?: string | null;
		time?: number | null;
		timezone?: number | null;
		timezoneIana?: string | null;
		timezoneId?: string | null;
	}
	export interface AppointmentViewModelFormProperties {
		bookedBy: FormControl<string | null | undefined>,
		businessName: FormControl<string | null | undefined>,
		calendarId: FormControl<string | null | undefined>,
		confirmationNumber: FormControl<string | null | undefined>,
		confirmed: FormControl<boolean | null | undefined>,
		createDate: FormControl<string | null | undefined>,
		customFields: FormControl<{[id: string]: CustomFieldViewModel } | null | undefined>,
		customerId: FormControl<string | null | undefined>,
		customerMessage: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		dateInternational: FormControl<string | null | undefined>,
		downloadIcsUrl: FormControl<string | null | undefined>,
		duration: FormControl<number | null | undefined>,
		email: FormControl<string | null | undefined>,
		emailConfirmationSent: FormControl<string | null | undefined>,
		emailReminderSent: FormControl<string | null | undefined>,
		endDateTime: FormControl<string | null | undefined>,
		firstname: FormControl<string | null | undefined>,
		groupSize: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		lastModifiedBy: FormControl<string | null | undefined>,
		lastModifiedOn: FormControl<string | null | undefined>,
		lastname: FormControl<string | null | undefined>,
		latitude: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		longitude: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		onlineBooking: FormControl<boolean | null | undefined>,
		paymentStatus: FormControl<number | null | undefined>,
		phone: FormControl<string | null | undefined>,
		phoneExt: FormControl<string | null | undefined>,
		phoneType: FormControl<string | null | undefined>,
		rescheduledId: FormControl<string | null | undefined>,
		resourceEmail: FormControl<string | null | undefined>,
		resourceGroupId: FormControl<string | null | undefined>,
		resourceGroupName: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceImageUrl: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		serviceAllocationId: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		serviceImageUrl: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		smsConfirmationSent: FormControl<string | null | undefined>,
		smsReminderSent: FormControl<string | null | undefined>,
		startDateTime: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		stripeChargeId: FormControl<string | null | undefined>,
		stripeRefundId: FormControl<string | null | undefined>,
		time: FormControl<number | null | undefined>,
		timezone: FormControl<number | null | undefined>,
		timezoneIana: FormControl<string | null | undefined>,
		timezoneId: FormControl<string | null | undefined>,
	}
	export function CreateAppointmentViewModelFormGroup() {
		return new FormGroup<AppointmentViewModelFormProperties>({
			bookedBy: new FormControl<string | null | undefined>(undefined),
			businessName: new FormControl<string | null | undefined>(undefined),
			calendarId: new FormControl<string | null | undefined>(undefined),
			confirmationNumber: new FormControl<string | null | undefined>(undefined),
			confirmed: new FormControl<boolean | null | undefined>(undefined),
			createDate: new FormControl<string | null | undefined>(undefined),
			customFields: new FormControl<{[id: string]: CustomFieldViewModel } | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			customerMessage: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			dateInternational: new FormControl<string | null | undefined>(undefined),
			downloadIcsUrl: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			emailConfirmationSent: new FormControl<string | null | undefined>(undefined),
			emailReminderSent: new FormControl<string | null | undefined>(undefined),
			endDateTime: new FormControl<string | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined),
			groupSize: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined),
			lastModifiedOn: new FormControl<string | null | undefined>(undefined),
			lastname: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			longitude: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			onlineBooking: new FormControl<boolean | null | undefined>(undefined),
			paymentStatus: new FormControl<number | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			phoneExt: new FormControl<string | null | undefined>(undefined),
			phoneType: new FormControl<string | null | undefined>(undefined),
			rescheduledId: new FormControl<string | null | undefined>(undefined),
			resourceEmail: new FormControl<string | null | undefined>(undefined),
			resourceGroupId: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceImageUrl: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			serviceAllocationId: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			serviceImageUrl: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			smsConfirmationSent: new FormControl<string | null | undefined>(undefined),
			smsReminderSent: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			stripeChargeId: new FormControl<string | null | undefined>(undefined),
			stripeRefundId: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			timezone: new FormControl<number | null | undefined>(undefined),
			timezoneIana: new FormControl<string | null | undefined>(undefined),
			timezoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomFieldViewModel {
		name?: string | null;
		value?: string | null;
	}
	export interface CustomFieldViewModelFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomFieldViewModelFormGroup() {
		return new FormGroup<CustomFieldViewModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppointmentResourceViewModel {
		appointmentId?: string | null;
		resourceEmail?: string | null;
		resourceGroupId?: string | null;
		resourceId?: string | null;
		resourceImageUrl?: string | null;
		resourceName?: string | null;
	}
	export interface AppointmentResourceViewModelFormProperties {
		appointmentId: FormControl<string | null | undefined>,
		resourceEmail: FormControl<string | null | undefined>,
		resourceGroupId: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceImageUrl: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateAppointmentResourceViewModelFormGroup() {
		return new FormGroup<AppointmentResourceViewModelFormProperties>({
			appointmentId: new FormControl<string | null | undefined>(undefined),
			resourceEmail: new FormControl<string | null | undefined>(undefined),
			resourceGroupId: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceImageUrl: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppointmentReminderViewModel {
		emailFirstReminder?: number | null;
		emailFirstReminderInterval?: number | null;
		emailSecondReminder?: number | null;
		emailSecondReminderInterval?: number | null;
		smsFirstReminder?: number | null;
		smsFirstReminderInterval?: number | null;
		smsSecondReminder?: number | null;
		smsSecondReminderInterval?: number | null;
	}
	export interface AppointmentReminderViewModelFormProperties {
		emailFirstReminder: FormControl<number | null | undefined>,
		emailFirstReminderInterval: FormControl<number | null | undefined>,
		emailSecondReminder: FormControl<number | null | undefined>,
		emailSecondReminderInterval: FormControl<number | null | undefined>,
		smsFirstReminder: FormControl<number | null | undefined>,
		smsFirstReminderInterval: FormControl<number | null | undefined>,
		smsSecondReminder: FormControl<number | null | undefined>,
		smsSecondReminderInterval: FormControl<number | null | undefined>,
	}
	export function CreateAppointmentReminderViewModelFormGroup() {
		return new FormGroup<AppointmentReminderViewModelFormProperties>({
			emailFirstReminder: new FormControl<number | null | undefined>(undefined),
			emailFirstReminderInterval: new FormControl<number | null | undefined>(undefined),
			emailSecondReminder: new FormControl<number | null | undefined>(undefined),
			emailSecondReminderInterval: new FormControl<number | null | undefined>(undefined),
			smsFirstReminder: new FormControl<number | null | undefined>(undefined),
			smsFirstReminderInterval: new FormControl<number | null | undefined>(undefined),
			smsSecondReminder: new FormControl<number | null | undefined>(undefined),
			smsSecondReminderInterval: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AppointmentRemindersInputModel {
		emailFirstReminder?: number | null;
		emailFirstReminderInterval?: number | null;
		emailSecondReminder?: number | null;
		emailSecondReminderInterval?: number | null;
		smsFirstReminder?: number | null;
		smsFirstReminderInterval?: number | null;
		smsSecondReminder?: number | null;
		smsSecondReminderInterval?: number | null;
	}
	export interface AppointmentRemindersInputModelFormProperties {
		emailFirstReminder: FormControl<number | null | undefined>,
		emailFirstReminderInterval: FormControl<number | null | undefined>,
		emailSecondReminder: FormControl<number | null | undefined>,
		emailSecondReminderInterval: FormControl<number | null | undefined>,
		smsFirstReminder: FormControl<number | null | undefined>,
		smsFirstReminderInterval: FormControl<number | null | undefined>,
		smsSecondReminder: FormControl<number | null | undefined>,
		smsSecondReminderInterval: FormControl<number | null | undefined>,
	}
	export function CreateAppointmentRemindersInputModelFormGroup() {
		return new FormGroup<AppointmentRemindersInputModelFormProperties>({
			emailFirstReminder: new FormControl<number | null | undefined>(undefined),
			emailFirstReminderInterval: new FormControl<number | null | undefined>(undefined),
			emailSecondReminder: new FormControl<number | null | undefined>(undefined),
			emailSecondReminderInterval: new FormControl<number | null | undefined>(undefined),
			smsFirstReminder: new FormControl<number | null | undefined>(undefined),
			smsFirstReminderInterval: new FormControl<number | null | undefined>(undefined),
			smsSecondReminder: new FormControl<number | null | undefined>(undefined),
			smsSecondReminderInterval: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AuthorizedCompanyListViewModel {
		count?: number | null;
		data?: Array<AuthorizedCompanyViewModel>;
		email?: string | null;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface AuthorizedCompanyListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		email: FormControl<string | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizedCompanyListViewModelFormGroup() {
		return new FormGroup<AuthorizedCompanyListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthorizedCompanyViewModel {
		id?: string | null;
		name?: string | null;
		object?: string | null;
	}
	export interface AuthorizedCompanyViewModelFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizedCompanyViewModelFormGroup() {
		return new FormGroup<AuthorizedCompanyViewModelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AvailabilityInputModel {
		fri?: WeekDayInputModel;
		mon?: WeekDayInputModel;
		sat?: WeekDayInputModel;
		sun?: WeekDayInputModel;
		thu?: WeekDayInputModel;
		tue?: WeekDayInputModel;
		wed?: WeekDayInputModel;
	}
	export interface AvailabilityInputModelFormProperties {
	}
	export function CreateAvailabilityInputModelFormGroup() {
		return new FormGroup<AvailabilityInputModelFormProperties>({
		});

	}

	export interface WeekDayInputModel {
		endTime?: number | null;
		startTime?: number | null;
	}
	export interface WeekDayInputModelFormProperties {
		endTime: FormControl<number | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateWeekDayInputModelFormGroup() {
		return new FormGroup<WeekDayInputModelFormProperties>({
			endTime: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AvailabilityViewModel2 {
		fri?: WeekDayViewModel2;
		mon?: WeekDayViewModel2;
		sat?: WeekDayViewModel2;
		sun?: WeekDayViewModel2;
		thu?: WeekDayViewModel2;
		tue?: WeekDayViewModel2;
		wed?: WeekDayViewModel2;
	}
	export interface AvailabilityViewModel2FormProperties {
	}
	export function CreateAvailabilityViewModel2FormGroup() {
		return new FormGroup<AvailabilityViewModel2FormProperties>({
		});

	}

	export interface WeekDayViewModel2 {
		displayEndTime?: string | null;
		displayStartTime?: string | null;
		endTime?: number | null;
		startTime?: number | null;
	}
	export interface WeekDayViewModel2FormProperties {
		displayEndTime: FormControl<string | null | undefined>,
		displayStartTime: FormControl<string | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateWeekDayViewModel2FormGroup() {
		return new FormGroup<WeekDayViewModel2FormProperties>({
			displayEndTime: new FormControl<string | null | undefined>(undefined),
			displayStartTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BusinessDefaultsInputModel {
		autoUpdateCustomer?: boolean | null;
		businessNotification?: boolean | null;
		customerCity?: boolean | null;
		customerState?: boolean | null;
		emailInfo?: boolean | null;
		enableUtcTimezone?: boolean | null;
	}
	export interface BusinessDefaultsInputModelFormProperties {
		autoUpdateCustomer: FormControl<boolean | null | undefined>,
		businessNotification: FormControl<boolean | null | undefined>,
		customerCity: FormControl<boolean | null | undefined>,
		customerState: FormControl<boolean | null | undefined>,
		emailInfo: FormControl<boolean | null | undefined>,
		enableUtcTimezone: FormControl<boolean | null | undefined>,
	}
	export function CreateBusinessDefaultsInputModelFormGroup() {
		return new FormGroup<BusinessDefaultsInputModelFormProperties>({
			autoUpdateCustomer: new FormControl<boolean | null | undefined>(undefined),
			businessNotification: new FormControl<boolean | null | undefined>(undefined),
			customerCity: new FormControl<boolean | null | undefined>(undefined),
			customerState: new FormControl<boolean | null | undefined>(undefined),
			emailInfo: new FormControl<boolean | null | undefined>(undefined),
			enableUtcTimezone: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BusinessDefaultsUpdateModel {
		autoUpdateCustomer?: boolean | null;
		businessNotification?: boolean | null;
		customerCity?: boolean | null;
		customerState?: boolean | null;
		emailInfo?: boolean | null;
		enableUtcTimezone?: boolean | null;
	}
	export interface BusinessDefaultsUpdateModelFormProperties {
		autoUpdateCustomer: FormControl<boolean | null | undefined>,
		businessNotification: FormControl<boolean | null | undefined>,
		customerCity: FormControl<boolean | null | undefined>,
		customerState: FormControl<boolean | null | undefined>,
		emailInfo: FormControl<boolean | null | undefined>,
		enableUtcTimezone: FormControl<boolean | null | undefined>,
	}
	export function CreateBusinessDefaultsUpdateModelFormGroup() {
		return new FormGroup<BusinessDefaultsUpdateModelFormProperties>({
			autoUpdateCustomer: new FormControl<boolean | null | undefined>(undefined),
			businessNotification: new FormControl<boolean | null | undefined>(undefined),
			customerCity: new FormControl<boolean | null | undefined>(undefined),
			customerState: new FormControl<boolean | null | undefined>(undefined),
			emailInfo: new FormControl<boolean | null | undefined>(undefined),
			enableUtcTimezone: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BusinessDefaultsViewModel {
		autoUpdateCustomer?: boolean | null;
		businessNotification?: boolean | null;
		customerCity?: boolean | null;
		customerState?: boolean | null;
		emailInfo?: boolean | null;
		enableUtcTimezone?: boolean | null;
		object?: string | null;
	}
	export interface BusinessDefaultsViewModelFormProperties {
		autoUpdateCustomer: FormControl<boolean | null | undefined>,
		businessNotification: FormControl<boolean | null | undefined>,
		customerCity: FormControl<boolean | null | undefined>,
		customerState: FormControl<boolean | null | undefined>,
		emailInfo: FormControl<boolean | null | undefined>,
		enableUtcTimezone: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateBusinessDefaultsViewModelFormGroup() {
		return new FormGroup<BusinessDefaultsViewModelFormProperties>({
			autoUpdateCustomer: new FormControl<boolean | null | undefined>(undefined),
			businessNotification: new FormControl<boolean | null | undefined>(undefined),
			customerCity: new FormControl<boolean | null | undefined>(undefined),
			customerState: new FormControl<boolean | null | undefined>(undefined),
			emailInfo: new FormControl<boolean | null | undefined>(undefined),
			enableUtcTimezone: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessHolidayViewModel {
		businessClosed?: boolean | null;
		holidayName?: string | null;
		id?: string | null;
		publicHolidayId?: number | null;
	}
	export interface BusinessHolidayViewModelFormProperties {
		businessClosed: FormControl<boolean | null | undefined>,
		holidayName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		publicHolidayId: FormControl<number | null | undefined>,
	}
	export function CreateBusinessHolidayViewModelFormGroup() {
		return new FormGroup<BusinessHolidayViewModelFormProperties>({
			businessClosed: new FormControl<boolean | null | undefined>(undefined),
			holidayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			publicHolidayId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BusinessHourInputModel {

		/**
		 * endTime is entered in military format. e.g. 1800 = 6pm end, 2400 = midnight end of day.
		 * For 24 hours enter startTime = 0 and endTime = 2400
		 */
		endTime?: number | null;

		/** If true then available for 24 hours. startTime must be zero and endTime must be 2400. */
		is24Hours?: boolean | null;

		/** If false, then not available entire day, starTime and endTime must both be zero. If true, then available between startTime and endTime. */
		isOpen?: boolean | null;

		/** startTime is entered in military format. e.g. 0 = midnight start, 900 = 9am start */
		startTime?: number | null;
	}
	export interface BusinessHourInputModelFormProperties {

		/**
		 * endTime is entered in military format. e.g. 1800 = 6pm end, 2400 = midnight end of day.
		 * For 24 hours enter startTime = 0 and endTime = 2400
		 */
		endTime: FormControl<number | null | undefined>,

		/** If true then available for 24 hours. startTime must be zero and endTime must be 2400. */
		is24Hours: FormControl<boolean | null | undefined>,

		/** If false, then not available entire day, starTime and endTime must both be zero. If true, then available between startTime and endTime. */
		isOpen: FormControl<boolean | null | undefined>,

		/** startTime is entered in military format. e.g. 0 = midnight start, 900 = 9am start */
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateBusinessHourInputModelFormGroup() {
		return new FormGroup<BusinessHourInputModelFormProperties>({
			endTime: new FormControl<number | null | undefined>(undefined),
			is24Hours: new FormControl<boolean | null | undefined>(undefined),
			isOpen: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BusinessHourViewModel {
		endTime?: number | null;
		is24Hours?: boolean | null;
		isOpen?: boolean | null;
		startTime?: number | null;
	}
	export interface BusinessHourViewModelFormProperties {
		endTime: FormControl<number | null | undefined>,
		is24Hours: FormControl<boolean | null | undefined>,
		isOpen: FormControl<boolean | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateBusinessHourViewModelFormGroup() {
		return new FormGroup<BusinessHourViewModelFormProperties>({
			endTime: new FormControl<number | null | undefined>(undefined),
			is24Hours: new FormControl<boolean | null | undefined>(undefined),
			isOpen: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BusinessHoursInputModel {
		fri?: BusinessHourInputModel;
		mon?: BusinessHourInputModel;
		sat?: BusinessHourInputModel;
		sun?: BusinessHourInputModel;
		thu?: BusinessHourInputModel;
		tue?: BusinessHourInputModel;
		wed?: BusinessHourInputModel;
	}
	export interface BusinessHoursInputModelFormProperties {
	}
	export function CreateBusinessHoursInputModelFormGroup() {
		return new FormGroup<BusinessHoursInputModelFormProperties>({
		});

	}

	export interface BusinessHoursUpdateModel {
		fri?: BusinessHourInputModel;
		mon?: BusinessHourInputModel;
		sat?: BusinessHourInputModel;
		sun?: BusinessHourInputModel;
		thu?: BusinessHourInputModel;
		tue?: BusinessHourInputModel;
		wed?: BusinessHourInputModel;
	}
	export interface BusinessHoursUpdateModelFormProperties {
	}
	export function CreateBusinessHoursUpdateModelFormGroup() {
		return new FormGroup<BusinessHoursUpdateModelFormProperties>({
		});

	}

	export interface BusinessHoursViewModel {
		fri?: BusinessHourViewModel;
		mon?: BusinessHourViewModel;
		sat?: BusinessHourViewModel;
		sun?: BusinessHourViewModel;
		thu?: BusinessHourViewModel;
		tue?: BusinessHourViewModel;
		wed?: BusinessHourViewModel;
	}
	export interface BusinessHoursViewModelFormProperties {
	}
	export function CreateBusinessHoursViewModelFormGroup() {
		return new FormGroup<BusinessHoursViewModelFormProperties>({
		});

	}

	export interface BusinessPermissionListViewModel {
		count?: number | null;
		data?: Array<BusinessPermissionViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface BusinessPermissionListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateBusinessPermissionListViewModelFormGroup() {
		return new FormGroup<BusinessPermissionListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessPermissionViewModel {
		access?: string | null;
		function?: string | null;
		object?: string | null;
		role?: string | null;
	}
	export interface BusinessPermissionViewModelFormProperties {
		access: FormControl<string | null | undefined>,
		function: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
	}
	export function CreateBusinessPermissionViewModelFormGroup() {
		return new FormGroup<BusinessPermissionViewModelFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessServiceListViewModel {
		count?: number | null;
		data?: Array<BusinessServiceViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface BusinessServiceListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateBusinessServiceListViewModelFormGroup() {
		return new FormGroup<BusinessServiceListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessServiceViewModel {
		id?: number | null;
		object?: string | null;
		serviceId?: number | null;
		serviceName?: string | null;
	}
	export interface BusinessServiceViewModelFormProperties {
		id: FormControl<number | null | undefined>,
		object: FormControl<string | null | undefined>,
		serviceId: FormControl<number | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateBusinessServiceViewModelFormGroup() {
		return new FormGroup<BusinessServiceViewModelFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<number | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessUserInputModel {
		email?: string | null;
		locationId?: string | null;
		name?: string | null;
		resourceId?: string | null;
		role?: string | null;
		sendRegistrationInvite?: boolean | null;
	}
	export interface BusinessUserInputModelFormProperties {
		email: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
		sendRegistrationInvite: FormControl<boolean | null | undefined>,
	}
	export function CreateBusinessUserInputModelFormGroup() {
		return new FormGroup<BusinessUserInputModelFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			sendRegistrationInvite: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BusinessUserListViewModel {
		count?: number | null;
		data?: Array<BusinessUserViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface BusinessUserListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateBusinessUserListViewModelFormGroup() {
		return new FormGroup<BusinessUserListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessUserViewModel {
		accountId?: string | null;
		businessName?: string | null;
		email?: string | null;
		id?: string | null;
		identityAccount?: boolean | null;
		locationId?: string | null;
		name?: string | null;
		object?: string | null;
		permissions?: Array<BusinessUserPermissionViewModel>;
		resourceId?: string | null;
		resourceName?: string | null;
		role?: string | null;
	}
	export interface BusinessUserViewModelFormProperties {
		accountId: FormControl<string | null | undefined>,
		businessName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		identityAccount: FormControl<boolean | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
	}
	export function CreateBusinessUserViewModelFormGroup() {
		return new FormGroup<BusinessUserViewModelFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			businessName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			identityAccount: new FormControl<boolean | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessUserPermissionViewModel {
		access?: string | null;
		function?: string | null;
		object?: string | null;
	}
	export interface BusinessUserPermissionViewModelFormProperties {
		access: FormControl<string | null | undefined>,
		function: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateBusinessUserPermissionViewModelFormGroup() {
		return new FormGroup<BusinessUserPermissionViewModelFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BusinessUserUpdateModel {
		email?: string | null;
		name?: string | null;
		resourceId?: string | null;
		role?: string | null;
		sendRegistrationInvite?: boolean | null;
	}
	export interface BusinessUserUpdateModelFormProperties {
		email: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
		sendRegistrationInvite: FormControl<boolean | null | undefined>,
	}
	export function CreateBusinessUserUpdateModelFormGroup() {
		return new FormGroup<BusinessUserUpdateModelFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			sendRegistrationInvite: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CalendarAuthViewModel {
		calendarAuthUrl?: string | null;
		calendarId?: string | null;
		object?: string | null;
	}
	export interface CalendarAuthViewModelFormProperties {
		calendarAuthUrl: FormControl<string | null | undefined>,
		calendarId: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateCalendarAuthViewModelFormGroup() {
		return new FormGroup<CalendarAuthViewModelFormProperties>({
			calendarAuthUrl: new FormControl<string | null | undefined>(undefined),
			calendarId: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CalendarBlockInputModel {
		endDate?: Date | null;
		endTime?: number | null;
		reason?: string | null;
		repeat?: RepeatInputModel;
		repeats?: boolean | null;
		startDate?: Date | null;
		startTime?: number | null;
	}
	export interface CalendarBlockInputModelFormProperties {
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateCalendarBlockInputModelFormGroup() {
		return new FormGroup<CalendarBlockInputModelFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RepeatInputModel {
		frequency?: string | null;
		interval?: number | null;
		monthDay?: number | null;
		monthType?: string | null;
		weekdays?: string | null;
	}
	export interface RepeatInputModelFormProperties {
		frequency: FormControl<string | null | undefined>,
		interval: FormControl<number | null | undefined>,
		monthDay: FormControl<number | null | undefined>,
		monthType: FormControl<string | null | undefined>,
		weekdays: FormControl<string | null | undefined>,
	}
	export function CreateRepeatInputModelFormGroup() {
		return new FormGroup<RepeatInputModelFormProperties>({
			frequency: new FormControl<string | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			monthDay: new FormControl<number | null | undefined>(undefined),
			monthType: new FormControl<string | null | undefined>(undefined),
			weekdays: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CalendarBlockListViewModel {
		count?: number | null;
		data?: Array<CalendarBlockViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface CalendarBlockListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCalendarBlockListViewModelFormGroup() {
		return new FormGroup<CalendarBlockListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CalendarBlockViewModel {
		calendarId?: string | null;
		deletedStatus?: boolean | null;
		deletedTime?: string | null;
		endDate?: string | null;
		endTime?: number | null;
		id?: string | null;
		locationId?: string | null;
		object?: string | null;
		reason?: string | null;
		repeat?: RepeatViewModel;
		repeats?: boolean | null;
		startDate?: string | null;
		startTime?: number | null;
	}
	export interface CalendarBlockViewModelFormProperties {
		calendarId: FormControl<string | null | undefined>,
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<string | null | undefined>,
		endDate: FormControl<string | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		startDate: FormControl<string | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateCalendarBlockViewModelFormGroup() {
		return new FormGroup<CalendarBlockViewModelFormProperties>({
			calendarId: new FormControl<string | null | undefined>(undefined),
			deletedStatus: new FormControl<boolean | null | undefined>(undefined),
			deletedTime: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RepeatViewModel {
		frequency?: string | null;
		interval?: number | null;
		monthDay?: string | null;
		monthType?: string | null;
		weekdays?: string | null;
	}
	export interface RepeatViewModelFormProperties {
		frequency: FormControl<string | null | undefined>,
		interval: FormControl<number | null | undefined>,
		monthDay: FormControl<string | null | undefined>,
		monthType: FormControl<string | null | undefined>,
		weekdays: FormControl<string | null | undefined>,
	}
	export function CreateRepeatViewModelFormGroup() {
		return new FormGroup<RepeatViewModelFormProperties>({
			frequency: new FormControl<string | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			monthDay: new FormControl<string | null | undefined>(undefined),
			monthType: new FormControl<string | null | undefined>(undefined),
			weekdays: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CalendarBlockUpdateModel {
		endDate?: Date | null;
		endTime?: number | null;
		reason?: string | null;
		repeat?: RepeatInputModel;
		repeats?: boolean | null;
		startDate?: Date | null;
		startTime?: number | null;
	}
	export interface CalendarBlockUpdateModelFormProperties {
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateCalendarBlockUpdateModelFormGroup() {
		return new FormGroup<CalendarBlockUpdateModelFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CalendarHourViewModel {
		endTime?: number | null;
		startTime?: number | null;
	}
	export interface CalendarHourViewModelFormProperties {
		endTime: FormControl<number | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateCalendarHourViewModelFormGroup() {
		return new FormGroup<CalendarHourViewModelFormProperties>({
			endTime: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CalendarHoursViewModel {
		fri?: CalendarHourViewModel;
		mon?: CalendarHourViewModel;
		sat?: CalendarHourViewModel;
		sun?: CalendarHourViewModel;
		thu?: CalendarHourViewModel;
		tue?: CalendarHourViewModel;
		wed?: CalendarHourViewModel;
	}
	export interface CalendarHoursViewModelFormProperties {
	}
	export function CreateCalendarHoursViewModelFormGroup() {
		return new FormGroup<CalendarHoursViewModelFormProperties>({
		});

	}

	export interface CompanyDomainInputModel {
		domain?: string | null;
	}
	export interface CompanyDomainInputModelFormProperties {
		domain: FormControl<string | null | undefined>,
	}
	export function CreateCompanyDomainInputModelFormGroup() {
		return new FormGroup<CompanyDomainInputModelFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompanyDomainListViewModel {
		data?: Array<CompanyDomainViewModel>;
		object?: string | null;
		url?: string | null;
	}
	export interface CompanyDomainListViewModelFormProperties {
		object: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCompanyDomainListViewModelFormGroup() {
		return new FormGroup<CompanyDomainListViewModelFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompanyDomainViewModel {
		domain?: string | null;
		id?: string | null;
		object?: string | null;
	}
	export interface CompanyDomainViewModelFormProperties {
		domain: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateCompanyDomainViewModelFormGroup() {
		return new FormGroup<CompanyDomainViewModelFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompanyDomainUpdateModel {
		domain?: string | null;
	}
	export interface CompanyDomainUpdateModelFormProperties {
		domain: FormControl<string | null | undefined>,
	}
	export function CreateCompanyDomainUpdateModelFormGroup() {
		return new FormGroup<CompanyDomainUpdateModelFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompanyInputModel {
		addressLine1?: string | null;
		addressLine2?: string | null;
		bookingWebhookUrl?: string | null;
		city?: string | null;
		country?: string | null;
		customerWebhookUrl?: string | null;
		disableEmailAndSmsNotifications?: boolean | null;
		email?: string | null;
		fax?: string | null;
		name?: string | null;
		notificationFromEmailAddress?: string | null;
		notificationFromName?: string | null;
		phone?: string | null;
		postalCode?: string | null;
		registrationEmail?: string | null;
		reminderWebhookUrl?: string | null;
		resourceWebhookUrl?: string | null;
		state?: string | null;
		timezoneName?: string | null;
		webhookSignatureHash?: string | null;
		website?: string | null;
	}
	export interface CompanyInputModelFormProperties {
		addressLine1: FormControl<string | null | undefined>,
		addressLine2: FormControl<string | null | undefined>,
		bookingWebhookUrl: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		customerWebhookUrl: FormControl<string | null | undefined>,
		disableEmailAndSmsNotifications: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		notificationFromEmailAddress: FormControl<string | null | undefined>,
		notificationFromName: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		registrationEmail: FormControl<string | null | undefined>,
		reminderWebhookUrl: FormControl<string | null | undefined>,
		resourceWebhookUrl: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		timezoneName: FormControl<string | null | undefined>,
		webhookSignatureHash: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateCompanyInputModelFormGroup() {
		return new FormGroup<CompanyInputModelFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			bookingWebhookUrl: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			customerWebhookUrl: new FormControl<string | null | undefined>(undefined),
			disableEmailAndSmsNotifications: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationFromEmailAddress: new FormControl<string | null | undefined>(undefined),
			notificationFromName: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			registrationEmail: new FormControl<string | null | undefined>(undefined),
			reminderWebhookUrl: new FormControl<string | null | undefined>(undefined),
			resourceWebhookUrl: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			timezoneName: new FormControl<string | null | undefined>(undefined),
			webhookSignatureHash: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompanyUpdateModel {
		addressLine1?: string | null;
		addressLine2?: string | null;
		bookingWebhookUrl?: string | null;
		city?: string | null;
		country?: string | null;
		customerWebhookUrl?: string | null;
		disableEmailAndSmsNotifications?: boolean | null;
		email?: string | null;
		fax?: string | null;
		name?: string | null;
		notificationFromEmailAddress?: string | null;
		notificationFromName?: string | null;
		phone?: string | null;
		postalCode?: string | null;
		registrationEmail?: string | null;
		reminderWebhookUrl?: string | null;
		resourceWebhookUrl?: string | null;
		state?: string | null;
		timezoneName?: string | null;
		webhookSignatureHash?: string | null;
		website?: string | null;
	}
	export interface CompanyUpdateModelFormProperties {
		addressLine1: FormControl<string | null | undefined>,
		addressLine2: FormControl<string | null | undefined>,
		bookingWebhookUrl: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		customerWebhookUrl: FormControl<string | null | undefined>,
		disableEmailAndSmsNotifications: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		notificationFromEmailAddress: FormControl<string | null | undefined>,
		notificationFromName: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		registrationEmail: FormControl<string | null | undefined>,
		reminderWebhookUrl: FormControl<string | null | undefined>,
		resourceWebhookUrl: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		timezoneName: FormControl<string | null | undefined>,
		webhookSignatureHash: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateCompanyUpdateModelFormGroup() {
		return new FormGroup<CompanyUpdateModelFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			bookingWebhookUrl: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			customerWebhookUrl: new FormControl<string | null | undefined>(undefined),
			disableEmailAndSmsNotifications: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationFromEmailAddress: new FormControl<string | null | undefined>(undefined),
			notificationFromName: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			registrationEmail: new FormControl<string | null | undefined>(undefined),
			reminderWebhookUrl: new FormControl<string | null | undefined>(undefined),
			resourceWebhookUrl: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			timezoneName: new FormControl<string | null | undefined>(undefined),
			webhookSignatureHash: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CompanyViewModel {
		addressLine1?: string | null;
		addressLine2?: string | null;
		bookingWebhookUrl?: string | null;
		city?: string | null;
		clientId?: string | null;
		clientSecret?: string | null;
		country?: string | null;
		customerWebhookUrl?: string | null;
		deletedStatus?: boolean | null;
		deletedTime?: string | null;
		disableEmailAndSmsNotifications?: boolean | null;
		email?: string | null;
		fax?: string | null;
		id?: string | null;
		name?: string | null;
		notificationFromEmailAddress?: string | null;
		notificationFromName?: string | null;
		object?: string | null;
		phone?: string | null;
		postalCode?: string | null;
		registrationDate?: string | null;
		registrationEmail?: string | null;
		reminderWebhookUrl?: string | null;
		resourceWebhookUrl?: string | null;
		state?: string | null;
		timezoneId?: string | null;
		timezoneName?: string | null;
		webhookSignatureHash?: string | null;
		website?: string | null;
	}
	export interface CompanyViewModelFormProperties {
		addressLine1: FormControl<string | null | undefined>,
		addressLine2: FormControl<string | null | undefined>,
		bookingWebhookUrl: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		clientSecret: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		customerWebhookUrl: FormControl<string | null | undefined>,
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<string | null | undefined>,
		disableEmailAndSmsNotifications: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		notificationFromEmailAddress: FormControl<string | null | undefined>,
		notificationFromName: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		registrationDate: FormControl<string | null | undefined>,
		registrationEmail: FormControl<string | null | undefined>,
		reminderWebhookUrl: FormControl<string | null | undefined>,
		resourceWebhookUrl: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		timezoneId: FormControl<string | null | undefined>,
		timezoneName: FormControl<string | null | undefined>,
		webhookSignatureHash: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateCompanyViewModelFormGroup() {
		return new FormGroup<CompanyViewModelFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined),
			addressLine2: new FormControl<string | null | undefined>(undefined),
			bookingWebhookUrl: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			customerWebhookUrl: new FormControl<string | null | undefined>(undefined),
			deletedStatus: new FormControl<boolean | null | undefined>(undefined),
			deletedTime: new FormControl<string | null | undefined>(undefined),
			disableEmailAndSmsNotifications: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationFromEmailAddress: new FormControl<string | null | undefined>(undefined),
			notificationFromName: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			registrationDate: new FormControl<string | null | undefined>(undefined),
			registrationEmail: new FormControl<string | null | undefined>(undefined),
			reminderWebhookUrl: new FormControl<string | null | undefined>(undefined),
			resourceWebhookUrl: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			timezoneId: new FormControl<string | null | undefined>(undefined),
			timezoneName: new FormControl<string | null | undefined>(undefined),
			webhookSignatureHash: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactInputModel {
		businessPhone?: string | null;
		businessPhoneExt?: string | null;
		conferenceInfo?: string | null;
		homePhone?: string | null;
		mobilePhone?: string | null;
		preferredPhoneType?: string | null;
		skypeUsername?: string | null;
	}
	export interface ContactInputModelFormProperties {
		businessPhone: FormControl<string | null | undefined>,
		businessPhoneExt: FormControl<string | null | undefined>,
		conferenceInfo: FormControl<string | null | undefined>,
		homePhone: FormControl<string | null | undefined>,
		mobilePhone: FormControl<string | null | undefined>,
		preferredPhoneType: FormControl<string | null | undefined>,
		skypeUsername: FormControl<string | null | undefined>,
	}
	export function CreateContactInputModelFormGroup() {
		return new FormGroup<ContactInputModelFormProperties>({
			businessPhone: new FormControl<string | null | undefined>(undefined),
			businessPhoneExt: new FormControl<string | null | undefined>(undefined),
			conferenceInfo: new FormControl<string | null | undefined>(undefined),
			homePhone: new FormControl<string | null | undefined>(undefined),
			mobilePhone: new FormControl<string | null | undefined>(undefined),
			preferredPhoneType: new FormControl<string | null | undefined>(undefined),
			skypeUsername: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactUpdateModel {
		businessPhone?: string | null;
		businessPhoneExt?: string | null;
		conferenceInfo?: string | null;
		homePhone?: string | null;
		mobilePhone?: string | null;
		preferredPhoneType?: string | null;
		skypeUsername?: string | null;
	}
	export interface ContactUpdateModelFormProperties {
		businessPhone: FormControl<string | null | undefined>,
		businessPhoneExt: FormControl<string | null | undefined>,
		conferenceInfo: FormControl<string | null | undefined>,
		homePhone: FormControl<string | null | undefined>,
		mobilePhone: FormControl<string | null | undefined>,
		preferredPhoneType: FormControl<string | null | undefined>,
		skypeUsername: FormControl<string | null | undefined>,
	}
	export function CreateContactUpdateModelFormGroup() {
		return new FormGroup<ContactUpdateModelFormProperties>({
			businessPhone: new FormControl<string | null | undefined>(undefined),
			businessPhoneExt: new FormControl<string | null | undefined>(undefined),
			conferenceInfo: new FormControl<string | null | undefined>(undefined),
			homePhone: new FormControl<string | null | undefined>(undefined),
			mobilePhone: new FormControl<string | null | undefined>(undefined),
			preferredPhoneType: new FormControl<string | null | undefined>(undefined),
			skypeUsername: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactViewModel {
		businessPhone?: string | null;
		businessPhoneExt?: string | null;
		conferenceInfo?: string | null;
		homePhone?: string | null;
		mobilePhone?: string | null;
		phoneType?: string | null;
		skypeUsername?: string | null;
	}
	export interface ContactViewModelFormProperties {
		businessPhone: FormControl<string | null | undefined>,
		businessPhoneExt: FormControl<string | null | undefined>,
		conferenceInfo: FormControl<string | null | undefined>,
		homePhone: FormControl<string | null | undefined>,
		mobilePhone: FormControl<string | null | undefined>,
		phoneType: FormControl<string | null | undefined>,
		skypeUsername: FormControl<string | null | undefined>,
	}
	export function CreateContactViewModelFormGroup() {
		return new FormGroup<ContactViewModelFormProperties>({
			businessPhone: new FormControl<string | null | undefined>(undefined),
			businessPhoneExt: new FormControl<string | null | undefined>(undefined),
			conferenceInfo: new FormControl<string | null | undefined>(undefined),
			homePhone: new FormControl<string | null | undefined>(undefined),
			mobilePhone: new FormControl<string | null | undefined>(undefined),
			phoneType: new FormControl<string | null | undefined>(undefined),
			skypeUsername: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContentResult {
		content?: string | null;
		contentType?: string | null;
		statusCode?: number | null;
	}
	export interface ContentResultFormProperties {
		content: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateContentResultFormGroup() {
		return new FormGroup<ContentResultFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomFieldInputModel {
		field1?: string | null;
		field10?: string | null;
		field2?: string | null;
		field3?: string | null;
		field4?: string | null;
		field5?: string | null;
		field6?: string | null;
		field7?: string | null;
		field8?: string | null;
		field9?: string | null;
	}
	export interface CustomFieldInputModelFormProperties {
		field1: FormControl<string | null | undefined>,
		field10: FormControl<string | null | undefined>,
		field2: FormControl<string | null | undefined>,
		field3: FormControl<string | null | undefined>,
		field4: FormControl<string | null | undefined>,
		field5: FormControl<string | null | undefined>,
		field6: FormControl<string | null | undefined>,
		field7: FormControl<string | null | undefined>,
		field8: FormControl<string | null | undefined>,
		field9: FormControl<string | null | undefined>,
	}
	export function CreateCustomFieldInputModelFormGroup() {
		return new FormGroup<CustomFieldInputModelFormProperties>({
			field1: new FormControl<string | null | undefined>(undefined),
			field10: new FormControl<string | null | undefined>(undefined),
			field2: new FormControl<string | null | undefined>(undefined),
			field3: new FormControl<string | null | undefined>(undefined),
			field4: new FormControl<string | null | undefined>(undefined),
			field5: new FormControl<string | null | undefined>(undefined),
			field6: new FormControl<string | null | undefined>(undefined),
			field7: new FormControl<string | null | undefined>(undefined),
			field8: new FormControl<string | null | undefined>(undefined),
			field9: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomFieldUpdateModel {
		field1?: string | null;
		field10?: string | null;
		field2?: string | null;
		field3?: string | null;
		field4?: string | null;
		field5?: string | null;
		field6?: string | null;
		field7?: string | null;
		field8?: string | null;
		field9?: string | null;
	}
	export interface CustomFieldUpdateModelFormProperties {
		field1: FormControl<string | null | undefined>,
		field10: FormControl<string | null | undefined>,
		field2: FormControl<string | null | undefined>,
		field3: FormControl<string | null | undefined>,
		field4: FormControl<string | null | undefined>,
		field5: FormControl<string | null | undefined>,
		field6: FormControl<string | null | undefined>,
		field7: FormControl<string | null | undefined>,
		field8: FormControl<string | null | undefined>,
		field9: FormControl<string | null | undefined>,
	}
	export function CreateCustomFieldUpdateModelFormGroup() {
		return new FormGroup<CustomFieldUpdateModelFormProperties>({
			field1: new FormControl<string | null | undefined>(undefined),
			field10: new FormControl<string | null | undefined>(undefined),
			field2: new FormControl<string | null | undefined>(undefined),
			field3: new FormControl<string | null | undefined>(undefined),
			field4: new FormControl<string | null | undefined>(undefined),
			field5: new FormControl<string | null | undefined>(undefined),
			field6: new FormControl<string | null | undefined>(undefined),
			field7: new FormControl<string | null | undefined>(undefined),
			field8: new FormControl<string | null | undefined>(undefined),
			field9: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerListViewModel {
		count?: number | null;
		data?: Array<CustomerViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface CustomerListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCustomerListViewModelFormGroup() {
		return new FormGroup<CustomerListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerViewModel {
		address?: AddressViewModel;
		birthdate?: string | null;
		businessName?: string | null;
		companyName?: string | null;
		contact?: ContactViewModel;
		createdBy?: string | null;
		createdOn?: string | null;
		customFields?: {[id: string]: CustomFieldViewModel };
		deletedStatus?: boolean | null;
		deletedTime?: string | null;
		disabled?: boolean | null;
		email?: string | null;
		emailInfo?: boolean | null;
		emailPromotion?: boolean | null;
		firstname?: string | null;
		gender?: string | null;
		groupId?: string | null;
		id?: string | null;
		inviteEmailSent?: string | null;
		lastVisitDate?: string | null;
		lastname?: string | null;
		latitude?: string | null;
		locationId?: string | null;
		longitude?: string | null;
		modifiedBy?: string | null;
		modifiedOn?: string | null;
		name?: string | null;
		notificationType?: string | null;
		object?: string | null;
		registeredBy?: string | null;
		registrationDate?: string | null;
		resourceId?: string | null;
		stripeCustomerId?: string | null;
		subscriptionId?: string | null;
		verificationDate?: string | null;
		verifiedBy?: string | null;
		welcomeEmailSent?: string | null;
	}
	export interface CustomerViewModelFormProperties {
		birthdate: FormControl<string | null | undefined>,
		businessName: FormControl<string | null | undefined>,
		companyName: FormControl<string | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		createdOn: FormControl<string | null | undefined>,
		customFields: FormControl<{[id: string]: CustomFieldViewModel } | null | undefined>,
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<string | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		emailInfo: FormControl<boolean | null | undefined>,
		emailPromotion: FormControl<boolean | null | undefined>,
		firstname: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		groupId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		inviteEmailSent: FormControl<string | null | undefined>,
		lastVisitDate: FormControl<string | null | undefined>,
		lastname: FormControl<string | null | undefined>,
		latitude: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		longitude: FormControl<string | null | undefined>,
		modifiedBy: FormControl<string | null | undefined>,
		modifiedOn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		notificationType: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		registeredBy: FormControl<string | null | undefined>,
		registrationDate: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		stripeCustomerId: FormControl<string | null | undefined>,
		subscriptionId: FormControl<string | null | undefined>,
		verificationDate: FormControl<string | null | undefined>,
		verifiedBy: FormControl<string | null | undefined>,
		welcomeEmailSent: FormControl<string | null | undefined>,
	}
	export function CreateCustomerViewModelFormGroup() {
		return new FormGroup<CustomerViewModelFormProperties>({
			birthdate: new FormControl<string | null | undefined>(undefined),
			businessName: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			createdOn: new FormControl<string | null | undefined>(undefined),
			customFields: new FormControl<{[id: string]: CustomFieldViewModel } | null | undefined>(undefined),
			deletedStatus: new FormControl<boolean | null | undefined>(undefined),
			deletedTime: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			emailInfo: new FormControl<boolean | null | undefined>(undefined),
			emailPromotion: new FormControl<boolean | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inviteEmailSent: new FormControl<string | null | undefined>(undefined),
			lastVisitDate: new FormControl<string | null | undefined>(undefined),
			lastname: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			longitude: new FormControl<string | null | undefined>(undefined),
			modifiedBy: new FormControl<string | null | undefined>(undefined),
			modifiedOn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationType: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			registeredBy: new FormControl<string | null | undefined>(undefined),
			registrationDate: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			stripeCustomerId: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			verificationDate: new FormControl<string | null | undefined>(undefined),
			verifiedBy: new FormControl<string | null | undefined>(undefined),
			welcomeEmailSent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomerPrivacyViewModel {
		appointments?: Array<AppointmentViewModel>;
		customer?: CustomerViewModel;
	}
	export interface CustomerPrivacyViewModelFormProperties {
	}
	export function CreateCustomerPrivacyViewModelFormGroup() {
		return new FormGroup<CustomerPrivacyViewModelFormProperties>({
		});

	}

	export interface EmailTemplateInputModel {
		templateContent?: string | null;
		templateName?: string | null;
	}
	export interface EmailTemplateInputModelFormProperties {
		templateContent: FormControl<string | null | undefined>,
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateEmailTemplateInputModelFormGroup() {
		return new FormGroup<EmailTemplateInputModelFormProperties>({
			templateContent: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailTemplateListViewModel {
		data?: Array<EmailTemplateViewModel>;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface EmailTemplateListViewModelFormProperties {
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateEmailTemplateListViewModelFormGroup() {
		return new FormGroup<EmailTemplateListViewModelFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EmailTemplateViewModel {
		customized?: boolean | null;
		description?: string | null;
		name?: string | null;
		object?: string | null;
		scope?: string | null;
	}
	export interface EmailTemplateViewModelFormProperties {
		customized: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		scope: FormControl<string | null | undefined>,
	}
	export function CreateEmailTemplateViewModelFormGroup() {
		return new FormGroup<EmailTemplateViewModelFormProperties>({
			customized: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleServiceAccountCreds {
		auth_provider_x509_cert_url?: string | null;
		auth_uri?: string | null;
		client_email?: string | null;
		client_id?: string | null;
		client_x509_cert_url?: string | null;
		private_key?: string | null;
		private_key_id?: string | null;
		project_id?: string | null;
		token_uri?: string | null;
		type?: string | null;
	}
	export interface GoogleServiceAccountCredsFormProperties {
		auth_provider_x509_cert_url: FormControl<string | null | undefined>,
		auth_uri: FormControl<string | null | undefined>,
		client_email: FormControl<string | null | undefined>,
		client_id: FormControl<string | null | undefined>,
		client_x509_cert_url: FormControl<string | null | undefined>,
		private_key: FormControl<string | null | undefined>,
		private_key_id: FormControl<string | null | undefined>,
		project_id: FormControl<string | null | undefined>,
		token_uri: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleServiceAccountCredsFormGroup() {
		return new FormGroup<GoogleServiceAccountCredsFormProperties>({
			auth_provider_x509_cert_url: new FormControl<string | null | undefined>(undefined),
			auth_uri: new FormControl<string | null | undefined>(undefined),
			client_email: new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			client_x509_cert_url: new FormControl<string | null | undefined>(undefined),
			private_key: new FormControl<string | null | undefined>(undefined),
			private_key_id: new FormControl<string | null | undefined>(undefined),
			project_id: new FormControl<string | null | undefined>(undefined),
			token_uri: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationInputModel {
		address?: AddressInputModel;

		/** Field is required. */
		adminEmail?: string | null;

		/** This field is no longer required and has been deprecated. */
		adminName?: string | null;
		appointmentReminders?: AppointmentRemindersInputModel;
		businessHours?: BusinessHoursInputModel;
		defaults?: BusinessDefaultsInputModel;
		email?: string | null;
		fax?: string | null;

		/**
		 * Use the friendlyId as an alternative to the assigned locationId
		 * Choose something easy and meaningful. Must be unique within your company.
		 * FriendlyId's are limited to maximum of 64 characters.
		 */
		friendlyId?: string | null;
		name?: string | null;

		/**
		 * GroupSize Limits the number of people that can come
		 * along on a single appointment
		 */
		phone?: string | null;
		regionId?: string | null;
		settings?: OnlineSettingsInputModel;

		/** Field is required. It is in Iana format. e.g. America/New_York. Use moment.js in your client for ease of timezone detection and selection */
		timezoneName?: string | null;
		website?: string | null;
	}
	export interface LocationInputModelFormProperties {

		/** Field is required. */
		adminEmail: FormControl<string | null | undefined>,

		/** This field is no longer required and has been deprecated. */
		adminName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,

		/**
		 * Use the friendlyId as an alternative to the assigned locationId
		 * Choose something easy and meaningful. Must be unique within your company.
		 * FriendlyId's are limited to maximum of 64 characters.
		 */
		friendlyId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * GroupSize Limits the number of people that can come
		 * along on a single appointment
		 */
		phone: FormControl<string | null | undefined>,
		regionId: FormControl<string | null | undefined>,

		/** Field is required. It is in Iana format. e.g. America/New_York. Use moment.js in your client for ease of timezone detection and selection */
		timezoneName: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateLocationInputModelFormGroup() {
		return new FormGroup<LocationInputModelFormProperties>({
			adminEmail: new FormControl<string | null | undefined>(undefined),
			adminName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			friendlyId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			regionId: new FormControl<string | null | undefined>(undefined),
			timezoneName: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OnlineSettingsInputModel {
		bookAheadUnit?: number | null;
		bookAheadValue?: number | null;
		bookInAdvance?: number | null;
		bookingTimerMins?: number | null;
		customerBookingsPerDay?: number | null;
		enableWorldTimezones?: boolean | null;
	}
	export interface OnlineSettingsInputModelFormProperties {
		bookAheadUnit: FormControl<number | null | undefined>,
		bookAheadValue: FormControl<number | null | undefined>,
		bookInAdvance: FormControl<number | null | undefined>,
		bookingTimerMins: FormControl<number | null | undefined>,
		customerBookingsPerDay: FormControl<number | null | undefined>,
		enableWorldTimezones: FormControl<boolean | null | undefined>,
	}
	export function CreateOnlineSettingsInputModelFormGroup() {
		return new FormGroup<OnlineSettingsInputModelFormProperties>({
			bookAheadUnit: new FormControl<number | null | undefined>(undefined),
			bookAheadValue: new FormControl<number | null | undefined>(undefined),
			bookInAdvance: new FormControl<number | null | undefined>(undefined),
			bookingTimerMins: new FormControl<number | null | undefined>(undefined),
			customerBookingsPerDay: new FormControl<number | null | undefined>(undefined),
			enableWorldTimezones: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LocationListViewModel {
		count?: number | null;
		data?: Array<LocationViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface LocationListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateLocationListViewModelFormGroup() {
		return new FormGroup<LocationListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationViewModel {
		address?: AddressViewModel;
		adminEmail?: string | null;
		adminName?: string | null;
		appointmentReminders?: AppointmentReminderViewModel;
		businessHolidays?: Array<BusinessHolidayViewModel>;
		businessHours?: BusinessHoursViewModel;
		companyId?: string | null;
		companyName?: string | null;
		defaults?: BusinessDefaultsViewModel;
		email?: string | null;
		fax?: string | null;
		friendlyId?: string | null;
		id?: string | null;
		imageUrl?: string | null;
		latitude?: number | null;
		logo?: string | null;
		longitude?: number | null;
		name?: string | null;
		object?: string | null;
		phone?: string | null;
		primaryBusiness?: boolean | null;
		primaryCalendarId?: string | null;
		regionId?: string | null;
		services?: Array<BusinessServiceViewModel>;
		settings?: OnlineSettingsViewModel;
		timezoneIana?: string | null;
		timezoneId?: string | null;
		timezoneOffset?: number | null;
		travel?: TravelViewModel;
		website?: string | null;
	}
	export interface LocationViewModelFormProperties {
		adminEmail: FormControl<string | null | undefined>,
		adminName: FormControl<string | null | undefined>,
		companyId: FormControl<string | null | undefined>,
		companyName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		friendlyId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		logo: FormControl<string | null | undefined>,
		longitude: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		primaryBusiness: FormControl<boolean | null | undefined>,
		primaryCalendarId: FormControl<string | null | undefined>,
		regionId: FormControl<string | null | undefined>,
		timezoneIana: FormControl<string | null | undefined>,
		timezoneId: FormControl<string | null | undefined>,
		timezoneOffset: FormControl<number | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateLocationViewModelFormGroup() {
		return new FormGroup<LocationViewModelFormProperties>({
			adminEmail: new FormControl<string | null | undefined>(undefined),
			adminName: new FormControl<string | null | undefined>(undefined),
			companyId: new FormControl<string | null | undefined>(undefined),
			companyName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			friendlyId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			primaryBusiness: new FormControl<boolean | null | undefined>(undefined),
			primaryCalendarId: new FormControl<string | null | undefined>(undefined),
			regionId: new FormControl<string | null | undefined>(undefined),
			timezoneIana: new FormControl<string | null | undefined>(undefined),
			timezoneId: new FormControl<string | null | undefined>(undefined),
			timezoneOffset: new FormControl<number | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OnlineSettingsViewModel {
		availabilityForm?: number | null;
		bookAheadUnit?: number | null;
		bookAheadValue?: number | null;
		bookInAdvance?: number | null;
		bookWithAccount?: boolean | null;
		bookingConfirmationMessage?: string | null;
		bookingMessage?: string | null;
		bookingPolicy?: string | null;
		bookingTimerMins?: number | null;
		businessId?: string | null;
		companyId?: string | null;
		customerBookingsPerDay?: number | null;
		customerVerification?: boolean | null;
		defaultService?: boolean | null;
		defaultToCustomerTimezone?: boolean | null;
		disableAuthorization?: boolean | null;
		enableWorldTimezones?: boolean | null;
		enabled?: boolean | null;
		familyMembersEnabled?: boolean | null;
		firstAvailable?: boolean | null;
		formFlow?: number | null;
		hideBreadCrumbNav?: boolean | null;
		hideContinueBooking?: boolean | null;
		hideLocationNav?: boolean | null;
		hideNavBar?: boolean | null;
		hideServiceGroupsNav?: boolean | null;
		hideServicesNav?: boolean | null;
		id?: number | null;
		lateCancelAction?: number | null;
		lateCancelHours?: number | null;
		lateRescheduleAction?: number | null;
		lateRescheduleHours?: number | null;
		liveMode?: boolean | null;
		locationId?: string | null;
		object?: string | null;
		resourceAnyLabel?: string | null;
		resourceLabel?: string | null;
		resourceSelection?: boolean | null;
		returnToAvailability?: boolean | null;
		returnToService?: boolean | null;
		serviceLabel?: string | null;
		showBusinessLogo?: boolean | null;
		showOnSchedLogo?: boolean | null;
		showServiceGroups?: boolean | null;
	}
	export interface OnlineSettingsViewModelFormProperties {
		availabilityForm: FormControl<number | null | undefined>,
		bookAheadUnit: FormControl<number | null | undefined>,
		bookAheadValue: FormControl<number | null | undefined>,
		bookInAdvance: FormControl<number | null | undefined>,
		bookWithAccount: FormControl<boolean | null | undefined>,
		bookingConfirmationMessage: FormControl<string | null | undefined>,
		bookingMessage: FormControl<string | null | undefined>,
		bookingPolicy: FormControl<string | null | undefined>,
		bookingTimerMins: FormControl<number | null | undefined>,
		businessId: FormControl<string | null | undefined>,
		companyId: FormControl<string | null | undefined>,
		customerBookingsPerDay: FormControl<number | null | undefined>,
		customerVerification: FormControl<boolean | null | undefined>,
		defaultService: FormControl<boolean | null | undefined>,
		defaultToCustomerTimezone: FormControl<boolean | null | undefined>,
		disableAuthorization: FormControl<boolean | null | undefined>,
		enableWorldTimezones: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		familyMembersEnabled: FormControl<boolean | null | undefined>,
		firstAvailable: FormControl<boolean | null | undefined>,
		formFlow: FormControl<number | null | undefined>,
		hideBreadCrumbNav: FormControl<boolean | null | undefined>,
		hideContinueBooking: FormControl<boolean | null | undefined>,
		hideLocationNav: FormControl<boolean | null | undefined>,
		hideNavBar: FormControl<boolean | null | undefined>,
		hideServiceGroupsNav: FormControl<boolean | null | undefined>,
		hideServicesNav: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		lateCancelAction: FormControl<number | null | undefined>,
		lateCancelHours: FormControl<number | null | undefined>,
		lateRescheduleAction: FormControl<number | null | undefined>,
		lateRescheduleHours: FormControl<number | null | undefined>,
		liveMode: FormControl<boolean | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		resourceAnyLabel: FormControl<string | null | undefined>,
		resourceLabel: FormControl<string | null | undefined>,
		resourceSelection: FormControl<boolean | null | undefined>,
		returnToAvailability: FormControl<boolean | null | undefined>,
		returnToService: FormControl<boolean | null | undefined>,
		serviceLabel: FormControl<string | null | undefined>,
		showBusinessLogo: FormControl<boolean | null | undefined>,
		showOnSchedLogo: FormControl<boolean | null | undefined>,
		showServiceGroups: FormControl<boolean | null | undefined>,
	}
	export function CreateOnlineSettingsViewModelFormGroup() {
		return new FormGroup<OnlineSettingsViewModelFormProperties>({
			availabilityForm: new FormControl<number | null | undefined>(undefined),
			bookAheadUnit: new FormControl<number | null | undefined>(undefined),
			bookAheadValue: new FormControl<number | null | undefined>(undefined),
			bookInAdvance: new FormControl<number | null | undefined>(undefined),
			bookWithAccount: new FormControl<boolean | null | undefined>(undefined),
			bookingConfirmationMessage: new FormControl<string | null | undefined>(undefined),
			bookingMessage: new FormControl<string | null | undefined>(undefined),
			bookingPolicy: new FormControl<string | null | undefined>(undefined),
			bookingTimerMins: new FormControl<number | null | undefined>(undefined),
			businessId: new FormControl<string | null | undefined>(undefined),
			companyId: new FormControl<string | null | undefined>(undefined),
			customerBookingsPerDay: new FormControl<number | null | undefined>(undefined),
			customerVerification: new FormControl<boolean | null | undefined>(undefined),
			defaultService: new FormControl<boolean | null | undefined>(undefined),
			defaultToCustomerTimezone: new FormControl<boolean | null | undefined>(undefined),
			disableAuthorization: new FormControl<boolean | null | undefined>(undefined),
			enableWorldTimezones: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			familyMembersEnabled: new FormControl<boolean | null | undefined>(undefined),
			firstAvailable: new FormControl<boolean | null | undefined>(undefined),
			formFlow: new FormControl<number | null | undefined>(undefined),
			hideBreadCrumbNav: new FormControl<boolean | null | undefined>(undefined),
			hideContinueBooking: new FormControl<boolean | null | undefined>(undefined),
			hideLocationNav: new FormControl<boolean | null | undefined>(undefined),
			hideNavBar: new FormControl<boolean | null | undefined>(undefined),
			hideServiceGroupsNav: new FormControl<boolean | null | undefined>(undefined),
			hideServicesNav: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lateCancelAction: new FormControl<number | null | undefined>(undefined),
			lateCancelHours: new FormControl<number | null | undefined>(undefined),
			lateRescheduleAction: new FormControl<number | null | undefined>(undefined),
			lateRescheduleHours: new FormControl<number | null | undefined>(undefined),
			liveMode: new FormControl<boolean | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			resourceAnyLabel: new FormControl<string | null | undefined>(undefined),
			resourceLabel: new FormControl<string | null | undefined>(undefined),
			resourceSelection: new FormControl<boolean | null | undefined>(undefined),
			returnToAvailability: new FormControl<boolean | null | undefined>(undefined),
			returnToService: new FormControl<boolean | null | undefined>(undefined),
			serviceLabel: new FormControl<string | null | undefined>(undefined),
			showBusinessLogo: new FormControl<boolean | null | undefined>(undefined),
			showOnSchedLogo: new FormControl<boolean | null | undefined>(undefined),
			showServiceGroups: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TravelViewModel {
		distance?: string | null;
		proximity?: string | null;
		startAddress?: string | null;
		startLat?: string | null;
		startLon?: string | null;
		units?: string | null;
	}
	export interface TravelViewModelFormProperties {
		distance: FormControl<string | null | undefined>,
		proximity: FormControl<string | null | undefined>,
		startAddress: FormControl<string | null | undefined>,
		startLat: FormControl<string | null | undefined>,
		startLon: FormControl<string | null | undefined>,
		units: FormControl<string | null | undefined>,
	}
	export function CreateTravelViewModelFormGroup() {
		return new FormGroup<TravelViewModelFormProperties>({
			distance: new FormControl<string | null | undefined>(undefined),
			proximity: new FormControl<string | null | undefined>(undefined),
			startAddress: new FormControl<string | null | undefined>(undefined),
			startLat: new FormControl<string | null | undefined>(undefined),
			startLon: new FormControl<string | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationUpdateModel {
		address?: AddressUpdateModel;
		adminEmail?: string | null;
		adminName?: string | null;
		appointmentReminders?: AppointmentRemindersInputModel;
		businessHours?: BusinessHoursUpdateModel;
		defaults?: BusinessDefaultsUpdateModel;
		email?: string | null;
		fax?: string | null;
		friendlyId?: string | null;
		name?: string | null;
		phone?: string | null;
		regionId?: string | null;
		settings?: OnlineSettingsUpdateModel;
		timezoneName?: string | null;
		website?: string | null;
	}
	export interface LocationUpdateModelFormProperties {
		adminEmail: FormControl<string | null | undefined>,
		adminName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		friendlyId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		regionId: FormControl<string | null | undefined>,
		timezoneName: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateLocationUpdateModelFormGroup() {
		return new FormGroup<LocationUpdateModelFormProperties>({
			adminEmail: new FormControl<string | null | undefined>(undefined),
			adminName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			friendlyId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			regionId: new FormControl<string | null | undefined>(undefined),
			timezoneName: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OnlineSettingsUpdateModel {
		bookAheadUnit?: number | null;
		bookAheadValue?: number | null;
		bookInAdvance?: number | null;
		bookingTimerMins?: number | null;
		customerBookingsPerDay?: number | null;
		enableWorldTimezones?: boolean | null;
	}
	export interface OnlineSettingsUpdateModelFormProperties {
		bookAheadUnit: FormControl<number | null | undefined>,
		bookAheadValue: FormControl<number | null | undefined>,
		bookInAdvance: FormControl<number | null | undefined>,
		bookingTimerMins: FormControl<number | null | undefined>,
		customerBookingsPerDay: FormControl<number | null | undefined>,
		enableWorldTimezones: FormControl<boolean | null | undefined>,
	}
	export function CreateOnlineSettingsUpdateModelFormGroup() {
		return new FormGroup<OnlineSettingsUpdateModelFormProperties>({
			bookAheadUnit: new FormControl<number | null | undefined>(undefined),
			bookAheadValue: new FormControl<number | null | undefined>(undefined),
			bookInAdvance: new FormControl<number | null | undefined>(undefined),
			bookingTimerMins: new FormControl<number | null | undefined>(undefined),
			customerBookingsPerDay: new FormControl<number | null | undefined>(undefined),
			enableWorldTimezones: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LocationsInputModel {
		locations?: Array<LocationInputModel>;
	}
	export interface LocationsInputModelFormProperties {
	}
	export function CreateLocationsInputModelFormGroup() {
		return new FormGroup<LocationsInputModelFormProperties>({
		});

	}

	export interface MasterEmailTemplateSettingsViewModel {
		centerEmailContent?: boolean | null;
		centerEmailContentPanel?: boolean | null;
		centerEmailFooter?: boolean | null;
		contentBackgroundColor?: string | null;
		contentColor?: string | null;
		contentLinkColor?: string | null;
		emailBackgroundColor?: string | null;
		emailColor?: string | null;
		emailLinkColor?: string | null;
		footerFontSize?: string | null;
		footerLogoHeight?: string | null;
		footerLogoPadding?: string | null;
		footerPanelEmailContact?: boolean | null;
		footerPanelPhoneContact?: boolean | null;
		footerPanelWebsiteContact?: boolean | null;
		headerLogoHeight?: string | null;
		headerLogoPadding?: string | null;
		panelBackgroundColor?: string | null;
		panelColor?: string | null;
		panelLinkColor?: string | null;
		privacyPolicyLink?: string | null;
		showContentPanel?: boolean | null;
		showFooterLogo?: boolean | null;
		showFooterPanel?: boolean | null;
		showHeaderLogo?: boolean | null;
		showHeaderPanel?: boolean | null;
		version?: string | null;
	}
	export interface MasterEmailTemplateSettingsViewModelFormProperties {
		centerEmailContent: FormControl<boolean | null | undefined>,
		centerEmailContentPanel: FormControl<boolean | null | undefined>,
		centerEmailFooter: FormControl<boolean | null | undefined>,
		contentBackgroundColor: FormControl<string | null | undefined>,
		contentColor: FormControl<string | null | undefined>,
		contentLinkColor: FormControl<string | null | undefined>,
		emailBackgroundColor: FormControl<string | null | undefined>,
		emailColor: FormControl<string | null | undefined>,
		emailLinkColor: FormControl<string | null | undefined>,
		footerFontSize: FormControl<string | null | undefined>,
		footerLogoHeight: FormControl<string | null | undefined>,
		footerLogoPadding: FormControl<string | null | undefined>,
		footerPanelEmailContact: FormControl<boolean | null | undefined>,
		footerPanelPhoneContact: FormControl<boolean | null | undefined>,
		footerPanelWebsiteContact: FormControl<boolean | null | undefined>,
		headerLogoHeight: FormControl<string | null | undefined>,
		headerLogoPadding: FormControl<string | null | undefined>,
		panelBackgroundColor: FormControl<string | null | undefined>,
		panelColor: FormControl<string | null | undefined>,
		panelLinkColor: FormControl<string | null | undefined>,
		privacyPolicyLink: FormControl<string | null | undefined>,
		showContentPanel: FormControl<boolean | null | undefined>,
		showFooterLogo: FormControl<boolean | null | undefined>,
		showFooterPanel: FormControl<boolean | null | undefined>,
		showHeaderLogo: FormControl<boolean | null | undefined>,
		showHeaderPanel: FormControl<boolean | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateMasterEmailTemplateSettingsViewModelFormGroup() {
		return new FormGroup<MasterEmailTemplateSettingsViewModelFormProperties>({
			centerEmailContent: new FormControl<boolean | null | undefined>(undefined),
			centerEmailContentPanel: new FormControl<boolean | null | undefined>(undefined),
			centerEmailFooter: new FormControl<boolean | null | undefined>(undefined),
			contentBackgroundColor: new FormControl<string | null | undefined>(undefined),
			contentColor: new FormControl<string | null | undefined>(undefined),
			contentLinkColor: new FormControl<string | null | undefined>(undefined),
			emailBackgroundColor: new FormControl<string | null | undefined>(undefined),
			emailColor: new FormControl<string | null | undefined>(undefined),
			emailLinkColor: new FormControl<string | null | undefined>(undefined),
			footerFontSize: new FormControl<string | null | undefined>(undefined),
			footerLogoHeight: new FormControl<string | null | undefined>(undefined),
			footerLogoPadding: new FormControl<string | null | undefined>(undefined),
			footerPanelEmailContact: new FormControl<boolean | null | undefined>(undefined),
			footerPanelPhoneContact: new FormControl<boolean | null | undefined>(undefined),
			footerPanelWebsiteContact: new FormControl<boolean | null | undefined>(undefined),
			headerLogoHeight: new FormControl<string | null | undefined>(undefined),
			headerLogoPadding: new FormControl<string | null | undefined>(undefined),
			panelBackgroundColor: new FormControl<string | null | undefined>(undefined),
			panelColor: new FormControl<string | null | undefined>(undefined),
			panelLinkColor: new FormControl<string | null | undefined>(undefined),
			privacyPolicyLink: new FormControl<string | null | undefined>(undefined),
			showContentPanel: new FormControl<boolean | null | undefined>(undefined),
			showFooterLogo: new FormControl<boolean | null | undefined>(undefined),
			showFooterPanel: new FormControl<boolean | null | undefined>(undefined),
			showHeaderLogo: new FormControl<boolean | null | undefined>(undefined),
			showHeaderPanel: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MasterTemplateSettingsInputModel {
		centerEmailContent?: boolean | null;
		centerEmailContentPanel?: boolean | null;
		centerEmailFooter?: boolean | null;
		contentBackgroundColor?: string | null;
		contentColor?: string | null;
		contentLinkColor?: string | null;
		emailBackgroundColor?: string | null;
		emailColor?: string | null;
		emailLinkColor?: string | null;
		footerFontSize?: string | null;
		footerLogoHeight?: string | null;
		footerLogoPadding?: string | null;
		footerPanelEmailContact?: boolean | null;
		footerPanelPhoneContact?: boolean | null;
		footerPanelWebsiteContact?: boolean | null;
		headerLogoHeight?: string | null;
		headerLogoPadding?: string | null;
		panelBackgroundColor?: string | null;
		panelColor?: string | null;
		panelLinkColor?: string | null;
		privacyPolicyLink?: string | null;
		showContentPanel?: boolean | null;
		showFooterLogo?: boolean | null;
		showFooterPanel?: boolean | null;
		showHeaderLogo?: boolean | null;
		showHeaderPanel?: boolean | null;
	}
	export interface MasterTemplateSettingsInputModelFormProperties {
		centerEmailContent: FormControl<boolean | null | undefined>,
		centerEmailContentPanel: FormControl<boolean | null | undefined>,
		centerEmailFooter: FormControl<boolean | null | undefined>,
		contentBackgroundColor: FormControl<string | null | undefined>,
		contentColor: FormControl<string | null | undefined>,
		contentLinkColor: FormControl<string | null | undefined>,
		emailBackgroundColor: FormControl<string | null | undefined>,
		emailColor: FormControl<string | null | undefined>,
		emailLinkColor: FormControl<string | null | undefined>,
		footerFontSize: FormControl<string | null | undefined>,
		footerLogoHeight: FormControl<string | null | undefined>,
		footerLogoPadding: FormControl<string | null | undefined>,
		footerPanelEmailContact: FormControl<boolean | null | undefined>,
		footerPanelPhoneContact: FormControl<boolean | null | undefined>,
		footerPanelWebsiteContact: FormControl<boolean | null | undefined>,
		headerLogoHeight: FormControl<string | null | undefined>,
		headerLogoPadding: FormControl<string | null | undefined>,
		panelBackgroundColor: FormControl<string | null | undefined>,
		panelColor: FormControl<string | null | undefined>,
		panelLinkColor: FormControl<string | null | undefined>,
		privacyPolicyLink: FormControl<string | null | undefined>,
		showContentPanel: FormControl<boolean | null | undefined>,
		showFooterLogo: FormControl<boolean | null | undefined>,
		showFooterPanel: FormControl<boolean | null | undefined>,
		showHeaderLogo: FormControl<boolean | null | undefined>,
		showHeaderPanel: FormControl<boolean | null | undefined>,
	}
	export function CreateMasterTemplateSettingsInputModelFormGroup() {
		return new FormGroup<MasterTemplateSettingsInputModelFormProperties>({
			centerEmailContent: new FormControl<boolean | null | undefined>(undefined),
			centerEmailContentPanel: new FormControl<boolean | null | undefined>(undefined),
			centerEmailFooter: new FormControl<boolean | null | undefined>(undefined),
			contentBackgroundColor: new FormControl<string | null | undefined>(undefined),
			contentColor: new FormControl<string | null | undefined>(undefined),
			contentLinkColor: new FormControl<string | null | undefined>(undefined),
			emailBackgroundColor: new FormControl<string | null | undefined>(undefined),
			emailColor: new FormControl<string | null | undefined>(undefined),
			emailLinkColor: new FormControl<string | null | undefined>(undefined),
			footerFontSize: new FormControl<string | null | undefined>(undefined),
			footerLogoHeight: new FormControl<string | null | undefined>(undefined),
			footerLogoPadding: new FormControl<string | null | undefined>(undefined),
			footerPanelEmailContact: new FormControl<boolean | null | undefined>(undefined),
			footerPanelPhoneContact: new FormControl<boolean | null | undefined>(undefined),
			footerPanelWebsiteContact: new FormControl<boolean | null | undefined>(undefined),
			headerLogoHeight: new FormControl<string | null | undefined>(undefined),
			headerLogoPadding: new FormControl<string | null | undefined>(undefined),
			panelBackgroundColor: new FormControl<string | null | undefined>(undefined),
			panelColor: new FormControl<string | null | undefined>(undefined),
			panelLinkColor: new FormControl<string | null | undefined>(undefined),
			privacyPolicyLink: new FormControl<string | null | undefined>(undefined),
			showContentPanel: new FormControl<boolean | null | undefined>(undefined),
			showFooterLogo: new FormControl<boolean | null | undefined>(undefined),
			showFooterPanel: new FormControl<boolean | null | undefined>(undefined),
			showHeaderLogo: new FormControl<boolean | null | undefined>(undefined),
			showHeaderPanel: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PhoneViewModel {
		businessPhone?: string | null;
		businessPhoneExt?: string | null;
		homePhone?: string | null;
		mobilePhone?: string | null;
		phoneType?: string | null;
	}
	export interface PhoneViewModelFormProperties {
		businessPhone: FormControl<string | null | undefined>,
		businessPhoneExt: FormControl<string | null | undefined>,
		homePhone: FormControl<string | null | undefined>,
		mobilePhone: FormControl<string | null | undefined>,
		phoneType: FormControl<string | null | undefined>,
	}
	export function CreatePhoneViewModelFormGroup() {
		return new FormGroup<PhoneViewModelFormProperties>({
			businessPhone: new FormControl<string | null | undefined>(undefined),
			businessPhoneExt: new FormControl<string | null | undefined>(undefined),
			homePhone: new FormControl<string | null | undefined>(undefined),
			mobilePhone: new FormControl<string | null | undefined>(undefined),
			phoneType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegionInputModel {
		name?: string | null;
	}
	export interface RegionInputModelFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateRegionInputModelFormGroup() {
		return new FormGroup<RegionInputModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegionListViewModel {
		count?: number | null;
		data?: Array<RegionViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface RegionListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateRegionListViewModelFormGroup() {
		return new FormGroup<RegionListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegionViewModel {
		id?: string | null;
		name?: string | null;
		object?: string | null;
	}
	export interface RegionViewModelFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateRegionViewModelFormGroup() {
		return new FormGroup<RegionViewModelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegionUpdateModel {
		name?: string | null;
	}
	export interface RegionUpdateModelFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateRegionUpdateModelFormGroup() {
		return new FormGroup<RegionUpdateModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepeatUpdateModel {
		frequency?: string | null;
		interval?: number | null;
		monthDay?: number | null;
		monthType?: string | null;
		weekdays?: string | null;
	}
	export interface RepeatUpdateModelFormProperties {
		frequency: FormControl<string | null | undefined>,
		interval: FormControl<number | null | undefined>,
		monthDay: FormControl<number | null | undefined>,
		monthType: FormControl<string | null | undefined>,
		weekdays: FormControl<string | null | undefined>,
	}
	export function CreateRepeatUpdateModelFormGroup() {
		return new FormGroup<RepeatUpdateModelFormProperties>({
			frequency: new FormControl<string | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			monthDay: new FormControl<number | null | undefined>(undefined),
			monthType: new FormControl<string | null | undefined>(undefined),
			weekdays: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceAllocationInputModel {
		endDate?: Date | null;
		endTime?: number | null;
		reason?: string | null;
		repeat?: RepeatInputModel;
		repeats?: boolean | null;
		startDate?: Date | null;
		startTime?: number | null;
	}
	export interface ResourceAllocationInputModelFormProperties {
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateResourceAllocationInputModelFormGroup() {
		return new FormGroup<ResourceAllocationInputModelFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceAllocationListViewModel {
		count?: number | null;
		data?: Array<ResourceAllocationViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface ResourceAllocationListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateResourceAllocationListViewModelFormGroup() {
		return new FormGroup<ResourceAllocationListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceAllocationViewModel {
		businessId?: number | null;
		deletedStatus?: boolean | null;
		deletedTime?: string | null;
		endDate?: string | null;
		endTime?: number | null;
		id?: number | null;
		object?: string | null;
		reason?: string | null;
		repeat?: RepeatViewModel;
		repeats?: boolean | null;
		resourceId?: number | null;
		startDate?: string | null;
		startTime?: number | null;
	}
	export interface ResourceAllocationViewModelFormProperties {
		businessId: FormControl<number | null | undefined>,
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<string | null | undefined>,
		endDate: FormControl<string | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		object: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		resourceId: FormControl<number | null | undefined>,
		startDate: FormControl<string | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateResourceAllocationViewModelFormGroup() {
		return new FormGroup<ResourceAllocationViewModelFormProperties>({
			businessId: new FormControl<number | null | undefined>(undefined),
			deletedStatus: new FormControl<boolean | null | undefined>(undefined),
			deletedTime: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			resourceId: new FormControl<number | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceAllocationUpdateModel {
		endDate?: Date | null;
		endTime?: number | null;
		reason?: string | null;
		repeat?: RepeatInputModel;
		repeats?: boolean | null;
		startDate?: Date | null;
		startTime?: number | null;
	}
	export interface ResourceAllocationUpdateModelFormProperties {
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateResourceAllocationUpdateModelFormGroup() {
		return new FormGroup<ResourceAllocationUpdateModelFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceAvailabilityViewModel {
		businessId?: number | null;
		ignoreBusinessHours?: boolean | null;
		resourceId?: number | null;
		resourceName?: string | null;
		resourceTzo?: number | null;
		weekdays?: AvailabilityViewModel2;
	}
	export interface ResourceAvailabilityViewModelFormProperties {
		businessId: FormControl<number | null | undefined>,
		ignoreBusinessHours: FormControl<boolean | null | undefined>,
		resourceId: FormControl<number | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		resourceTzo: FormControl<number | null | undefined>,
	}
	export function CreateResourceAvailabilityViewModelFormGroup() {
		return new FormGroup<ResourceAvailabilityViewModelFormProperties>({
			businessId: new FormControl<number | null | undefined>(undefined),
			ignoreBusinessHours: new FormControl<boolean | null | undefined>(undefined),
			resourceId: new FormControl<number | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceTzo: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceBlockInputModel {
		allDay?: boolean | null;
		endDate?: Date | null;
		endTime?: number | null;
		reason?: string | null;
		repeat?: RepeatInputModel;
		repeats?: boolean | null;
		startDate?: Date | null;
		startTime?: number | null;
	}
	export interface ResourceBlockInputModelFormProperties {
		allDay: FormControl<boolean | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateResourceBlockInputModelFormGroup() {
		return new FormGroup<ResourceBlockInputModelFormProperties>({
			allDay: new FormControl<boolean | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceBlockListViewModel {
		count?: number | null;
		data?: Array<ResourceBlockViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface ResourceBlockListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateResourceBlockListViewModelFormGroup() {
		return new FormGroup<ResourceBlockListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceBlockViewModel {
		businessId?: number | null;
		deletedStatus?: boolean | null;
		deletedTime?: string | null;
		endDate?: string | null;
		endTime?: number | null;
		id?: number | null;
		object?: string | null;
		reason?: string | null;
		repeat?: RepeatViewModel;
		repeats?: boolean | null;
		resourceId?: number | null;
		startDate?: string | null;
		startTime?: number | null;
	}
	export interface ResourceBlockViewModelFormProperties {
		businessId: FormControl<number | null | undefined>,
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<string | null | undefined>,
		endDate: FormControl<string | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		object: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		resourceId: FormControl<number | null | undefined>,
		startDate: FormControl<string | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateResourceBlockViewModelFormGroup() {
		return new FormGroup<ResourceBlockViewModelFormProperties>({
			businessId: new FormControl<number | null | undefined>(undefined),
			deletedStatus: new FormControl<boolean | null | undefined>(undefined),
			deletedTime: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			resourceId: new FormControl<number | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceBlockUpdateModel {
		allDay?: boolean | null;
		endDate?: Date | null;
		endTime?: number | null;
		reason?: string | null;
		repeat?: RepeatInputModel;
		repeats?: boolean | null;
		startDate?: Date | null;
		startTime?: number | null;
	}
	export interface ResourceBlockUpdateModelFormProperties {
		allDay: FormControl<boolean | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateResourceBlockUpdateModelFormGroup() {
		return new FormGroup<ResourceBlockUpdateModelFormProperties>({
			allDay: new FormControl<boolean | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceBulkUpdateModel {
		address?: AddressUpdateModel;
		availability?: AvailabilityInputModel;
		contact?: ContactUpdateModel;
		customFields?: CustomFieldUpdateModel;
		description?: string | null;
		email?: string | null;
		groupId?: string | null;
		id?: string | null;
		name?: string | null;
		options?: ResourceOptionsUpdateModel;
		recurringAvailability?: boolean | null;
		serviceIds?: Array<string>;
		timezoneId?: string | null;
	}
	export interface ResourceBulkUpdateModelFormProperties {
		description: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		groupId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		recurringAvailability: FormControl<boolean | null | undefined>,
		timezoneId: FormControl<string | null | undefined>,
	}
	export function CreateResourceBulkUpdateModelFormGroup() {
		return new FormGroup<ResourceBulkUpdateModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			recurringAvailability: new FormControl<boolean | null | undefined>(undefined),
			timezoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceOptionsUpdateModel {
		bioLink?: string | null;
		bookingNotification?: number | null;

		/** 0 = OnSched Availability, 1 = Google Calendar, 2 = Outlook Calendar */
		calendarAvailability?: number | null;
		displayColor?: string | null;
		effectiveDate?: Date | null;
		gender?: string | null;
		googleCalendarId?: string | null;
		hourly?: number | null;
		ignoreBusinessHours?: boolean | null;

		/** 0 = None, 1=Online Bookings 2=All Bookings. */
		notificationType?: number | null;
		outlookCalendarId?: string | null;
		sortKey?: number | null;
	}
	export interface ResourceOptionsUpdateModelFormProperties {
		bioLink: FormControl<string | null | undefined>,
		bookingNotification: FormControl<number | null | undefined>,

		/** 0 = OnSched Availability, 1 = Google Calendar, 2 = Outlook Calendar */
		calendarAvailability: FormControl<number | null | undefined>,
		displayColor: FormControl<string | null | undefined>,
		effectiveDate: FormControl<Date | null | undefined>,
		gender: FormControl<string | null | undefined>,
		googleCalendarId: FormControl<string | null | undefined>,
		hourly: FormControl<number | null | undefined>,
		ignoreBusinessHours: FormControl<boolean | null | undefined>,

		/** 0 = None, 1=Online Bookings 2=All Bookings. */
		notificationType: FormControl<number | null | undefined>,
		outlookCalendarId: FormControl<string | null | undefined>,
		sortKey: FormControl<number | null | undefined>,
	}
	export function CreateResourceOptionsUpdateModelFormGroup() {
		return new FormGroup<ResourceOptionsUpdateModelFormProperties>({
			bioLink: new FormControl<string | null | undefined>(undefined),
			bookingNotification: new FormControl<number | null | undefined>(undefined),
			calendarAvailability: new FormControl<number | null | undefined>(undefined),
			displayColor: new FormControl<string | null | undefined>(undefined),
			effectiveDate: new FormControl<Date | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			googleCalendarId: new FormControl<string | null | undefined>(undefined),
			hourly: new FormControl<number | null | undefined>(undefined),
			ignoreBusinessHours: new FormControl<boolean | null | undefined>(undefined),
			notificationType: new FormControl<number | null | undefined>(undefined),
			outlookCalendarId: new FormControl<string | null | undefined>(undefined),
			sortKey: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceGroupInputModel {
		description?: string | null;
		email?: string | null;
		locationId?: string | null;
		name?: string | null;
	}
	export interface ResourceGroupInputModelFormProperties {
		description: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupInputModelFormGroup() {
		return new FormGroup<ResourceGroupInputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceGroupListViewModel {
		count?: number | null;
		data?: Array<ResourceGroupViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface ResourceGroupListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupListViewModelFormGroup() {
		return new FormGroup<ResourceGroupListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceGroupViewModel {
		bookingNotification?: number | null;
		deletedStatus?: boolean | null;
		deletedTime?: Date | null;
		description?: string | null;
		email?: string | null;
		id?: string | null;
		locationId?: string | null;
		name?: string | null;
		object?: string | null;
	}
	export interface ResourceGroupViewModelFormProperties {
		bookingNotification: FormControl<number | null | undefined>,
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupViewModelFormGroup() {
		return new FormGroup<ResourceGroupViewModelFormProperties>({
			bookingNotification: new FormControl<number | null | undefined>(undefined),
			deletedStatus: new FormControl<boolean | null | undefined>(undefined),
			deletedTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceGroupUpdateModel {
		description?: string | null;
		email?: string | null;
		name?: string | null;
	}
	export interface ResourceGroupUpdateModelFormProperties {
		description: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceGroupUpdateModelFormGroup() {
		return new FormGroup<ResourceGroupUpdateModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceHourViewModel {
		endTime?: number | null;
		startTime?: number | null;
	}
	export interface ResourceHourViewModelFormProperties {
		endTime: FormControl<number | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateResourceHourViewModelFormGroup() {
		return new FormGroup<ResourceHourViewModelFormProperties>({
			endTime: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceHoursViewModel {
		fri?: ResourceHourViewModel;
		mon?: ResourceHourViewModel;
		sat?: ResourceHourViewModel;
		sun?: ResourceHourViewModel;
		thu?: ResourceHourViewModel;
		tue?: ResourceHourViewModel;
		wed?: ResourceHourViewModel;
	}
	export interface ResourceHoursViewModelFormProperties {
	}
	export function CreateResourceHoursViewModelFormGroup() {
		return new FormGroup<ResourceHoursViewModelFormProperties>({
		});

	}

	export interface ResourceImageInputModel {
		imageFileData?: string | null;
		imageFileName?: string | null;
	}
	export interface ResourceImageInputModelFormProperties {
		imageFileData: FormControl<string | null | undefined>,
		imageFileName: FormControl<string | null | undefined>,
	}
	export function CreateResourceImageInputModelFormGroup() {
		return new FormGroup<ResourceImageInputModelFormProperties>({
			imageFileData: new FormControl<string | null | undefined>(undefined),
			imageFileName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceInputModel {
		address?: AddressInputModel;
		availability?: AvailabilityInputModel;
		contact?: ContactInputModel;
		customFields?: CustomFieldInputModel;
		description?: string | null;
		email?: string | null;
		groupId?: string | null;
		locationId?: string | null;
		name?: string | null;

		/** Options for the new resource */
		options?: ResourceOptionsInputModel;
		recurringAvailability?: boolean | null;
		serviceIds?: Array<string>;
		timezoneId?: string | null;
	}
	export interface ResourceInputModelFormProperties {
		description: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		groupId: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		recurringAvailability: FormControl<boolean | null | undefined>,
		timezoneId: FormControl<string | null | undefined>,
	}
	export function CreateResourceInputModelFormGroup() {
		return new FormGroup<ResourceInputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			recurringAvailability: new FormControl<boolean | null | undefined>(undefined),
			timezoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for the new resource */
	export interface ResourceOptionsInputModel {
		bioLink?: string | null;
		bookingNotification?: number | null;

		/** 0 = OnSched Availability, 1 = Google Calendar, 2 = Outlook Calendar */
		calendarAvailability?: number | null;
		displayColor?: string | null;
		effectiveDate?: Date | null;
		gender?: string | null;
		googleCalendarId?: string | null;
		hourly?: number | null;
		ignoreBusinessHours?: boolean | null;

		/** 0 = None, 1=Online Bookings 2=All Bookings. */
		notificationType?: number | null;
		outlookCalendarId?: string | null;
		sortKey?: number | null;
	}

	/** Options for the new resource */
	export interface ResourceOptionsInputModelFormProperties {
		bioLink: FormControl<string | null | undefined>,
		bookingNotification: FormControl<number | null | undefined>,

		/** 0 = OnSched Availability, 1 = Google Calendar, 2 = Outlook Calendar */
		calendarAvailability: FormControl<number | null | undefined>,
		displayColor: FormControl<string | null | undefined>,
		effectiveDate: FormControl<Date | null | undefined>,
		gender: FormControl<string | null | undefined>,
		googleCalendarId: FormControl<string | null | undefined>,
		hourly: FormControl<number | null | undefined>,
		ignoreBusinessHours: FormControl<boolean | null | undefined>,

		/** 0 = None, 1=Online Bookings 2=All Bookings. */
		notificationType: FormControl<number | null | undefined>,
		outlookCalendarId: FormControl<string | null | undefined>,
		sortKey: FormControl<number | null | undefined>,
	}
	export function CreateResourceOptionsInputModelFormGroup() {
		return new FormGroup<ResourceOptionsInputModelFormProperties>({
			bioLink: new FormControl<string | null | undefined>(undefined),
			bookingNotification: new FormControl<number | null | undefined>(undefined),
			calendarAvailability: new FormControl<number | null | undefined>(undefined),
			displayColor: new FormControl<string | null | undefined>(undefined),
			effectiveDate: new FormControl<Date | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			googleCalendarId: new FormControl<string | null | undefined>(undefined),
			hourly: new FormControl<number | null | undefined>(undefined),
			ignoreBusinessHours: new FormControl<boolean | null | undefined>(undefined),
			notificationType: new FormControl<number | null | undefined>(undefined),
			outlookCalendarId: new FormControl<string | null | undefined>(undefined),
			sortKey: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceListViewModel {
		count?: number | null;
		data?: Array<ResourceViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface ResourceListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateResourceListViewModelFormGroup() {
		return new FormGroup<ResourceListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceViewModel {
		address?: AddressViewModel;
		availability?: ResourceHoursViewModel;
		bioLink?: string | null;
		bookingNotification?: number | null;
		calendarAvailability?: number | null;
		contact?: ContactViewModel;
		customFields?: CustomFieldInputModel;
		deletedStatus?: boolean | null;
		deletedTime?: Date | null;
		description?: string | null;
		effectiveDate?: Date | null;
		email?: string | null;
		gender?: string | null;
		googleCalendarAuthUrl?: string | null;
		googleCalendarAuthorized?: boolean | null;
		googleCalendarId?: string | null;
		groupId?: number | null;
		hourly?: number | null;
		id?: string | null;
		ignoreBusinessHours?: boolean | null;
		imageUrl?: string | null;
		locationId?: string | null;
		name?: string | null;
		notificationType?: number | null;
		object?: string | null;

		/** Options for the new resource */
		options?: ResourceOptionsInputModel;
		outlookCalendarAuthUrl?: string | null;
		outlookCalendarAuthorized?: boolean | null;
		outlookCalendarId?: string | null;
		phone?: PhoneViewModel;
		recurringAvailability?: boolean | null;
		services?: Array<ResourceServiceViewModel>;
		skypeName?: string | null;
		sortKey?: number | null;
		timezoneIana?: string | null;
		timezoneId?: string | null;
		timezoneOffset?: number | null;
	}
	export interface ResourceViewModelFormProperties {
		bioLink: FormControl<string | null | undefined>,
		bookingNotification: FormControl<number | null | undefined>,
		calendarAvailability: FormControl<number | null | undefined>,
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		effectiveDate: FormControl<Date | null | undefined>,
		email: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		googleCalendarAuthUrl: FormControl<string | null | undefined>,
		googleCalendarAuthorized: FormControl<boolean | null | undefined>,
		googleCalendarId: FormControl<string | null | undefined>,
		groupId: FormControl<number | null | undefined>,
		hourly: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		ignoreBusinessHours: FormControl<boolean | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		notificationType: FormControl<number | null | undefined>,
		object: FormControl<string | null | undefined>,
		outlookCalendarAuthUrl: FormControl<string | null | undefined>,
		outlookCalendarAuthorized: FormControl<boolean | null | undefined>,
		outlookCalendarId: FormControl<string | null | undefined>,
		recurringAvailability: FormControl<boolean | null | undefined>,
		skypeName: FormControl<string | null | undefined>,
		sortKey: FormControl<number | null | undefined>,
		timezoneIana: FormControl<string | null | undefined>,
		timezoneId: FormControl<string | null | undefined>,
		timezoneOffset: FormControl<number | null | undefined>,
	}
	export function CreateResourceViewModelFormGroup() {
		return new FormGroup<ResourceViewModelFormProperties>({
			bioLink: new FormControl<string | null | undefined>(undefined),
			bookingNotification: new FormControl<number | null | undefined>(undefined),
			calendarAvailability: new FormControl<number | null | undefined>(undefined),
			deletedStatus: new FormControl<boolean | null | undefined>(undefined),
			deletedTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			effectiveDate: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			googleCalendarAuthUrl: new FormControl<string | null | undefined>(undefined),
			googleCalendarAuthorized: new FormControl<boolean | null | undefined>(undefined),
			googleCalendarId: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<number | null | undefined>(undefined),
			hourly: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ignoreBusinessHours: new FormControl<boolean | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationType: new FormControl<number | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			outlookCalendarAuthUrl: new FormControl<string | null | undefined>(undefined),
			outlookCalendarAuthorized: new FormControl<boolean | null | undefined>(undefined),
			outlookCalendarId: new FormControl<string | null | undefined>(undefined),
			recurringAvailability: new FormControl<boolean | null | undefined>(undefined),
			skypeName: new FormControl<string | null | undefined>(undefined),
			sortKey: new FormControl<number | null | undefined>(undefined),
			timezoneIana: new FormControl<string | null | undefined>(undefined),
			timezoneId: new FormControl<string | null | undefined>(undefined),
			timezoneOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResourceServiceViewModel {
		object?: string | null;
		serviceId?: number | null;
		serviceName?: string | null;
	}
	export interface ResourceServiceViewModelFormProperties {
		object: FormControl<string | null | undefined>,
		serviceId: FormControl<number | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateResourceServiceViewModelFormGroup() {
		return new FormGroup<ResourceServiceViewModelFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<number | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceUpdateModel {
		address?: AddressUpdateModel;
		availability?: AvailabilityInputModel;
		contact?: ContactUpdateModel;
		customFields?: CustomFieldUpdateModel;
		description?: string | null;
		email?: string | null;
		groupId?: string | null;
		locationId?: string | null;
		name?: string | null;
		options?: ResourceOptionsUpdateModel;
		recurringAvailability?: boolean | null;
		serviceIds?: Array<string>;
		timezoneId?: string | null;
	}
	export interface ResourceUpdateModelFormProperties {
		description: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		groupId: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		recurringAvailability: FormControl<boolean | null | undefined>,
		timezoneId: FormControl<string | null | undefined>,
	}
	export function CreateResourceUpdateModelFormGroup() {
		return new FormGroup<ResourceUpdateModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			recurringAvailability: new FormControl<boolean | null | undefined>(undefined),
			timezoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourcesInputModel {
		resources?: Array<ResourceInputModel>;
	}
	export interface ResourcesInputModelFormProperties {
	}
	export function CreateResourcesInputModelFormGroup() {
		return new FormGroup<ResourcesInputModelFormProperties>({
		});

	}

	export interface ResourcesUpdateModel {
		resources?: Array<ResourceBulkUpdateModel>;
	}
	export interface ResourcesUpdateModelFormProperties {
	}
	export function CreateResourcesUpdateModelFormGroup() {
		return new FormGroup<ResourcesUpdateModelFormProperties>({
		});

	}

	export interface ScheduleInputModel {
		availability?: AvailabilityInputModel;
		bookingsPerSlot?: number | null;
		interval?: number | null;
		locationId?: string | null;
		name?: string | null;
		resourceGroupId?: string | null;
		type?: string | null;
	}
	export interface ScheduleInputModelFormProperties {
		bookingsPerSlot: FormControl<number | null | undefined>,
		interval: FormControl<number | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		resourceGroupId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateScheduleInputModelFormGroup() {
		return new FormGroup<ScheduleInputModelFormProperties>({
			bookingsPerSlot: new FormControl<number | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceGroupId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduleListViewModel {
		count?: number | null;
		data?: Array<ScheduleViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface ScheduleListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateScheduleListViewModelFormGroup() {
		return new FormGroup<ScheduleListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduleViewModel {
		availability?: CalendarHoursViewModel;
		bookingsPerSlot?: number | null;
		deletedStatus?: boolean | null;
		deletedTime?: Date | null;
		id?: string | null;
		interval?: number | null;
		locationId?: string | null;
		name?: string | null;
		object?: string | null;
		primary?: boolean | null;
		resourceGroupId?: string | null;
		type?: string | null;
	}
	export interface ScheduleViewModelFormProperties {
		bookingsPerSlot: FormControl<number | null | undefined>,
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		interval: FormControl<number | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		primary: FormControl<boolean | null | undefined>,
		resourceGroupId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateScheduleViewModelFormGroup() {
		return new FormGroup<ScheduleViewModelFormProperties>({
			bookingsPerSlot: new FormControl<number | null | undefined>(undefined),
			deletedStatus: new FormControl<boolean | null | undefined>(undefined),
			deletedTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			resourceGroupId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduleUpdateModel {
		availability?: AvailabilityInputModel;
		bookingsPerSlot?: number | null;
		interval?: number | null;
		locationId?: string | null;
		name?: string | null;
		resourceGroupId?: string | null;
		type?: string | null;
	}
	export interface ScheduleUpdateModelFormProperties {
		bookingsPerSlot: FormControl<number | null | undefined>,
		interval: FormControl<number | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		resourceGroupId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateScheduleUpdateModelFormGroup() {
		return new FormGroup<ScheduleUpdateModelFormProperties>({
			bookingsPerSlot: new FormControl<number | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceGroupId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceAllocationInputModel {
		bookingLimit?: number | null;
		endDate?: Date | null;
		endTime?: number | null;
		locationId?: string | null;
		reason?: string | null;
		repeat?: RepeatInputModel;
		repeats?: boolean | null;
		resourceId?: string | null;
		startDate?: Date | null;
		startTime?: number | null;
	}
	export interface ServiceAllocationInputModelFormProperties {
		bookingLimit: FormControl<number | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateServiceAllocationInputModelFormGroup() {
		return new FormGroup<ServiceAllocationInputModelFormProperties>({
			bookingLimit: new FormControl<number | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceAllocationListViewModel {
		count?: number | null;
		data?: Array<ServiceAllocationViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface ServiceAllocationListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateServiceAllocationListViewModelFormGroup() {
		return new FormGroup<ServiceAllocationListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceAllocationViewModel {
		bookingCount?: number | null;
		bookingLimit?: number | null;
		deletedStatus?: boolean | null;
		deletedTime?: string | null;
		endDate?: string | null;
		endTime?: number | null;
		id?: string | null;
		locationId?: string | null;
		object?: string | null;
		reason?: string | null;
		repeat?: RepeatViewModel;
		repeats?: boolean | null;
		resourceAddress?: AddressViewModel;
		resourceDescription?: string | null;
		resourceId?: string | null;
		resourceImageUrl?: string | null;
		resourceName?: string | null;
		resourcePhone?: PhoneViewModel;
		serviceDescription?: string | null;
		serviceDuration?: number | null;
		serviceId?: string | null;
		serviceImageUrl?: string | null;
		serviceName?: string | null;
		startDate?: string | null;
		startTime?: number | null;
		timezoneName?: string | null;
		timezoneOffset?: number | null;
	}
	export interface ServiceAllocationViewModelFormProperties {
		bookingCount: FormControl<number | null | undefined>,
		bookingLimit: FormControl<number | null | undefined>,
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<string | null | undefined>,
		endDate: FormControl<string | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		resourceDescription: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceImageUrl: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		serviceDescription: FormControl<string | null | undefined>,
		serviceDuration: FormControl<number | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		serviceImageUrl: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		startDate: FormControl<string | null | undefined>,
		startTime: FormControl<number | null | undefined>,
		timezoneName: FormControl<string | null | undefined>,
		timezoneOffset: FormControl<number | null | undefined>,
	}
	export function CreateServiceAllocationViewModelFormGroup() {
		return new FormGroup<ServiceAllocationViewModelFormProperties>({
			bookingCount: new FormControl<number | null | undefined>(undefined),
			bookingLimit: new FormControl<number | null | undefined>(undefined),
			deletedStatus: new FormControl<boolean | null | undefined>(undefined),
			deletedTime: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			resourceDescription: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceImageUrl: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			serviceDescription: new FormControl<string | null | undefined>(undefined),
			serviceDuration: new FormControl<number | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			serviceImageUrl: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
			timezoneName: new FormControl<string | null | undefined>(undefined),
			timezoneOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceAllocationUpdateModel {
		bookingLimit?: number | null;
		endDate?: Date | null;
		endTime?: number | null;
		locationId?: string | null;
		reason?: string | null;
		repeat?: RepeatInputModel;
		repeats?: boolean | null;
		resourceId?: string | null;
		startDate?: Date | null;
		startTime?: number | null;
	}
	export interface ServiceAllocationUpdateModelFormProperties {
		bookingLimit: FormControl<number | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateServiceAllocationUpdateModelFormGroup() {
		return new FormGroup<ServiceAllocationUpdateModelFormProperties>({
			bookingLimit: new FormControl<number | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceAllocationsInputModel {
		serviceAllocations?: Array<ServiceAllocationInputModel>;
	}
	export interface ServiceAllocationsInputModelFormProperties {
	}
	export function CreateServiceAllocationsInputModelFormGroup() {
		return new FormGroup<ServiceAllocationsInputModelFormProperties>({
		});

	}

	export interface ServiceAvailabilityViewModel {
		ignoreBusinessHours?: boolean | null;
		serviceId?: number | null;
		serviceName?: string | null;
		weekdays?: AvailabilityViewModel2;
	}
	export interface ServiceAvailabilityViewModelFormProperties {
		ignoreBusinessHours: FormControl<boolean | null | undefined>,
		serviceId: FormControl<number | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateServiceAvailabilityViewModelFormGroup() {
		return new FormGroup<ServiceAvailabilityViewModelFormProperties>({
			ignoreBusinessHours: new FormControl<boolean | null | undefined>(undefined),
			serviceId: new FormControl<number | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceBlockInputModel {
		endDate?: Date | null;
		endTime?: number | null;
		locationId?: string | null;
		reason?: string | null;
		repeat?: RepeatInputModel;
		repeats?: boolean | null;
		startDate?: Date | null;
		startTime?: number | null;
	}
	export interface ServiceBlockInputModelFormProperties {
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateServiceBlockInputModelFormGroup() {
		return new FormGroup<ServiceBlockInputModelFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceBlockListViewModel {
		count?: number | null;
		data?: Array<ServiceBlockViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface ServiceBlockListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateServiceBlockListViewModelFormGroup() {
		return new FormGroup<ServiceBlockListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceBlockViewModel {
		deletedStatus?: boolean | null;
		deletedTime?: string | null;
		endDate?: string | null;
		endTime?: number | null;
		id?: string | null;
		locationId?: string | null;
		object?: string | null;
		reason?: string | null;
		repeat?: RepeatViewModel;
		repeats?: boolean | null;
		serviceId?: string | null;
		startDate?: string | null;
		startTime?: number | null;
	}
	export interface ServiceBlockViewModelFormProperties {
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<string | null | undefined>,
		endDate: FormControl<string | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		startDate: FormControl<string | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateServiceBlockViewModelFormGroup() {
		return new FormGroup<ServiceBlockViewModelFormProperties>({
			deletedStatus: new FormControl<boolean | null | undefined>(undefined),
			deletedTime: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceBlockUpdateModel {
		endDate?: Date | null;
		endTime?: number | null;
		reason?: string | null;
		repeat?: RepeatUpdateModel;
		repeats?: boolean | null;
		startDate?: Date | null;
		startTime?: number | null;
	}
	export interface ServiceBlockUpdateModelFormProperties {
		endDate: FormControl<Date | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		repeats: FormControl<boolean | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateServiceBlockUpdateModelFormGroup() {
		return new FormGroup<ServiceBlockUpdateModelFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			repeats: new FormControl<boolean | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceCalendarInputModel {
		calendarId?: string | null;
		locationId?: string | null;
		serviceId?: string | null;
	}
	export interface ServiceCalendarInputModelFormProperties {
		calendarId: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
	}
	export function CreateServiceCalendarInputModelFormGroup() {
		return new FormGroup<ServiceCalendarInputModelFormProperties>({
			calendarId: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceCalendarViewModel {
		calendarId?: string | null;
		calendarName?: string | null;
		id?: string | null;
		locationId?: string | null;
		serviceId?: string | null;
		serviceName?: string | null;
	}
	export interface ServiceCalendarViewModelFormProperties {
		calendarId: FormControl<string | null | undefined>,
		calendarName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateServiceCalendarViewModelFormGroup() {
		return new FormGroup<ServiceCalendarViewModelFormProperties>({
			calendarId: new FormControl<string | null | undefined>(undefined),
			calendarName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceFeesInputModel {
		cancellationFeeAmount?: number | null;
		cancellationFeeTaxable?: boolean | null;
		feeAmount?: number | null;
		feeTaxable?: boolean | null;
		nonRefundable?: boolean | null;
	}
	export interface ServiceFeesInputModelFormProperties {
		cancellationFeeAmount: FormControl<number | null | undefined>,
		cancellationFeeTaxable: FormControl<boolean | null | undefined>,
		feeAmount: FormControl<number | null | undefined>,
		feeTaxable: FormControl<boolean | null | undefined>,
		nonRefundable: FormControl<boolean | null | undefined>,
	}
	export function CreateServiceFeesInputModelFormGroup() {
		return new FormGroup<ServiceFeesInputModelFormProperties>({
			cancellationFeeAmount: new FormControl<number | null | undefined>(undefined),
			cancellationFeeTaxable: new FormControl<boolean | null | undefined>(undefined),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			feeTaxable: new FormControl<boolean | null | undefined>(undefined),
			nonRefundable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ServiceFeesUpdateModel {
		cancellationFeeAmount?: number | null;
		cancellationFeeTaxable?: boolean | null;
		feeAmount?: number | null;
		feeTaxable?: boolean | null;
		nonRefundable?: boolean | null;
	}
	export interface ServiceFeesUpdateModelFormProperties {
		cancellationFeeAmount: FormControl<number | null | undefined>,
		cancellationFeeTaxable: FormControl<boolean | null | undefined>,
		feeAmount: FormControl<number | null | undefined>,
		feeTaxable: FormControl<boolean | null | undefined>,
		nonRefundable: FormControl<boolean | null | undefined>,
	}
	export function CreateServiceFeesUpdateModelFormGroup() {
		return new FormGroup<ServiceFeesUpdateModelFormProperties>({
			cancellationFeeAmount: new FormControl<number | null | undefined>(undefined),
			cancellationFeeTaxable: new FormControl<boolean | null | undefined>(undefined),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			feeTaxable: new FormControl<boolean | null | undefined>(undefined),
			nonRefundable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ServiceGroupInputModel {
		description?: string | null;
		locationId?: string | null;
		name?: string | null;
		type?: number | null;
	}
	export interface ServiceGroupInputModelFormProperties {
		description: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<number | null | undefined>,
	}
	export function CreateServiceGroupInputModelFormGroup() {
		return new FormGroup<ServiceGroupInputModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceGroupListViewModel {
		count?: number | null;
		data?: Array<ServiceGroupViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface ServiceGroupListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateServiceGroupListViewModelFormGroup() {
		return new FormGroup<ServiceGroupListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceGroupViewModel {
		companyId?: string | null;
		description?: string | null;
		id?: string | null;
		imageUrl?: string | null;
		isDeleted?: boolean | null;
		locationId?: string | null;
		name?: string | null;
		object?: string | null;
		type?: number | null;
	}
	export interface ServiceGroupViewModelFormProperties {
		companyId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		isDeleted: FormControl<boolean | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		type: FormControl<number | null | undefined>,
	}
	export function CreateServiceGroupViewModelFormGroup() {
		return new FormGroup<ServiceGroupViewModelFormProperties>({
			companyId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceHourViewModel {
		endTime?: number | null;
		startTime?: number | null;
	}
	export interface ServiceHourViewModelFormProperties {
		endTime: FormControl<number | null | undefined>,
		startTime: FormControl<number | null | undefined>,
	}
	export function CreateServiceHourViewModelFormGroup() {
		return new FormGroup<ServiceHourViewModelFormProperties>({
			endTime: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceHoursViewModel {
		fri?: ServiceHourViewModel;
		mon?: ServiceHourViewModel;
		sat?: ServiceHourViewModel;
		sun?: ServiceHourViewModel;
		thu?: ServiceHourViewModel;
		tue?: ServiceHourViewModel;
		wed?: ServiceHourViewModel;
	}
	export interface ServiceHoursViewModelFormProperties {
	}
	export function CreateServiceHoursViewModelFormGroup() {
		return new FormGroup<ServiceHoursViewModelFormProperties>({
		});

	}

	export interface ServiceImageInputModel {
		imageFileData?: string | null;
		imageFileName?: string | null;
	}
	export interface ServiceImageInputModelFormProperties {
		imageFileData: FormControl<string | null | undefined>,
		imageFileName: FormControl<string | null | undefined>,
	}
	export function CreateServiceImageInputModelFormGroup() {
		return new FormGroup<ServiceImageInputModelFormProperties>({
			imageFileData: new FormControl<string | null | undefined>(undefined),
			imageFileName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceInputModel {
		availability?: AvailabilityInputModel;
		bookingInterval?: number | null;
		bookingLimit?: number | null;
		customFields?: CustomFieldInputModel;
		description?: string | null;
		duration?: number | null;
		fees?: ServiceFeesInputModel;
		locationId?: string | null;
		maxCapacity?: number | null;
		maxGroupSize?: number | null;
		mediaPageUrl?: string | null;
		name?: string | null;
		options?: ServiceOptionsInputModel;
		public?: boolean | null;
		serviceGroupId?: string | null;
		settings?: ServiceSettingsInputModel;
		type?: string | null;
	}
	export interface ServiceInputModelFormProperties {
		bookingInterval: FormControl<number | null | undefined>,
		bookingLimit: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		duration: FormControl<number | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		maxCapacity: FormControl<number | null | undefined>,
		maxGroupSize: FormControl<number | null | undefined>,
		mediaPageUrl: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		public: FormControl<boolean | null | undefined>,
		serviceGroupId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateServiceInputModelFormGroup() {
		return new FormGroup<ServiceInputModelFormProperties>({
			bookingInterval: new FormControl<number | null | undefined>(undefined),
			bookingLimit: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			maxCapacity: new FormControl<number | null | undefined>(undefined),
			maxGroupSize: new FormControl<number | null | undefined>(undefined),
			mediaPageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			serviceGroupId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceOptionsInputModel {
		consumerPadding?: boolean | null;
		defaultService?: boolean | null;
		durationInterval?: number | null;
		durationMax?: number | null;
		durationMin?: number | null;
		durationSelect?: boolean | null;
		padding?: number | null;
	}
	export interface ServiceOptionsInputModelFormProperties {
		consumerPadding: FormControl<boolean | null | undefined>,
		defaultService: FormControl<boolean | null | undefined>,
		durationInterval: FormControl<number | null | undefined>,
		durationMax: FormControl<number | null | undefined>,
		durationMin: FormControl<number | null | undefined>,
		durationSelect: FormControl<boolean | null | undefined>,
		padding: FormControl<number | null | undefined>,
	}
	export function CreateServiceOptionsInputModelFormGroup() {
		return new FormGroup<ServiceOptionsInputModelFormProperties>({
			consumerPadding: new FormControl<boolean | null | undefined>(undefined),
			defaultService: new FormControl<boolean | null | undefined>(undefined),
			durationInterval: new FormControl<number | null | undefined>(undefined),
			durationMax: new FormControl<number | null | undefined>(undefined),
			durationMin: new FormControl<number | null | undefined>(undefined),
			durationSelect: new FormControl<boolean | null | undefined>(undefined),
			padding: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceSettingsInputModel {
		bookAheadUnit?: number | null;
		bookAheadValue?: number | null;
		bookInAdvance?: number | null;
	}
	export interface ServiceSettingsInputModelFormProperties {
		bookAheadUnit: FormControl<number | null | undefined>,
		bookAheadValue: FormControl<number | null | undefined>,
		bookInAdvance: FormControl<number | null | undefined>,
	}
	export function CreateServiceSettingsInputModelFormGroup() {
		return new FormGroup<ServiceSettingsInputModelFormProperties>({
			bookAheadUnit: new FormControl<number | null | undefined>(undefined),
			bookAheadValue: new FormControl<number | null | undefined>(undefined),
			bookInAdvance: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceListViewModel {
		count?: number | null;
		data?: Array<ServiceViewModel>;
		hasMore?: boolean | null;
		object?: string | null;
		total?: number | null;
		url?: string | null;
	}
	export interface ServiceListViewModelFormProperties {
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateServiceListViewModelFormGroup() {
		return new FormGroup<ServiceListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceViewModel {
		availability?: ServiceHoursViewModel;
		bookAheadUnit?: number | null;
		bookAheadValue?: number | null;
		bookInAdvance?: number | null;
		bookingInterval?: number | null;
		bookingLimit?: number | null;
		calendarId?: string | null;
		calendarResourceGroupId?: string | null;
		cancellationFeeAmount?: number | null;
		cancellationFeeTaxable?: boolean | null;
		companyId?: string | null;
		consumerPadding?: boolean | null;
		customFields?: CustomFieldInputModel;
		dailyBookingLimitCount?: number | null;
		dailyBookingLimitMinutes?: number | null;
		defaultService?: boolean | null;
		description?: string | null;
		duration?: number | null;
		durationInterval?: number | null;
		durationMax?: number | null;
		durationMin?: number | null;
		durationSelect?: boolean | null;
		feeAmount?: number | null;
		feeTaxable?: boolean | null;
		id?: string | null;
		imageUrl?: string | null;
		locationId?: string | null;
		maxBookingLimit?: number | null;
		maxCapacity?: number | null;
		maxGroupSize?: number | null;
		maxResourceBookingLimit?: number | null;
		mediaPageUrl?: string | null;
		name?: string | null;
		nonRefundable?: boolean | null;
		object?: string | null;
		padding?: number | null;
		roundRobin?: number | null;
		serviceGroupId?: number | null;
		serviceGroupName?: string | null;
		showOnline?: boolean | null;
		type?: string | null;
	}
	export interface ServiceViewModelFormProperties {
		bookAheadUnit: FormControl<number | null | undefined>,
		bookAheadValue: FormControl<number | null | undefined>,
		bookInAdvance: FormControl<number | null | undefined>,
		bookingInterval: FormControl<number | null | undefined>,
		bookingLimit: FormControl<number | null | undefined>,
		calendarId: FormControl<string | null | undefined>,
		calendarResourceGroupId: FormControl<string | null | undefined>,
		cancellationFeeAmount: FormControl<number | null | undefined>,
		cancellationFeeTaxable: FormControl<boolean | null | undefined>,
		companyId: FormControl<string | null | undefined>,
		consumerPadding: FormControl<boolean | null | undefined>,
		dailyBookingLimitCount: FormControl<number | null | undefined>,
		dailyBookingLimitMinutes: FormControl<number | null | undefined>,
		defaultService: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		duration: FormControl<number | null | undefined>,
		durationInterval: FormControl<number | null | undefined>,
		durationMax: FormControl<number | null | undefined>,
		durationMin: FormControl<number | null | undefined>,
		durationSelect: FormControl<boolean | null | undefined>,
		feeAmount: FormControl<number | null | undefined>,
		feeTaxable: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		maxBookingLimit: FormControl<number | null | undefined>,
		maxCapacity: FormControl<number | null | undefined>,
		maxGroupSize: FormControl<number | null | undefined>,
		maxResourceBookingLimit: FormControl<number | null | undefined>,
		mediaPageUrl: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		nonRefundable: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,
		padding: FormControl<number | null | undefined>,
		roundRobin: FormControl<number | null | undefined>,
		serviceGroupId: FormControl<number | null | undefined>,
		serviceGroupName: FormControl<string | null | undefined>,
		showOnline: FormControl<boolean | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateServiceViewModelFormGroup() {
		return new FormGroup<ServiceViewModelFormProperties>({
			bookAheadUnit: new FormControl<number | null | undefined>(undefined),
			bookAheadValue: new FormControl<number | null | undefined>(undefined),
			bookInAdvance: new FormControl<number | null | undefined>(undefined),
			bookingInterval: new FormControl<number | null | undefined>(undefined),
			bookingLimit: new FormControl<number | null | undefined>(undefined),
			calendarId: new FormControl<string | null | undefined>(undefined),
			calendarResourceGroupId: new FormControl<string | null | undefined>(undefined),
			cancellationFeeAmount: new FormControl<number | null | undefined>(undefined),
			cancellationFeeTaxable: new FormControl<boolean | null | undefined>(undefined),
			companyId: new FormControl<string | null | undefined>(undefined),
			consumerPadding: new FormControl<boolean | null | undefined>(undefined),
			dailyBookingLimitCount: new FormControl<number | null | undefined>(undefined),
			dailyBookingLimitMinutes: new FormControl<number | null | undefined>(undefined),
			defaultService: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			durationInterval: new FormControl<number | null | undefined>(undefined),
			durationMax: new FormControl<number | null | undefined>(undefined),
			durationMin: new FormControl<number | null | undefined>(undefined),
			durationSelect: new FormControl<boolean | null | undefined>(undefined),
			feeAmount: new FormControl<number | null | undefined>(undefined),
			feeTaxable: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			maxBookingLimit: new FormControl<number | null | undefined>(undefined),
			maxCapacity: new FormControl<number | null | undefined>(undefined),
			maxGroupSize: new FormControl<number | null | undefined>(undefined),
			maxResourceBookingLimit: new FormControl<number | null | undefined>(undefined),
			mediaPageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nonRefundable: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			padding: new FormControl<number | null | undefined>(undefined),
			roundRobin: new FormControl<number | null | undefined>(undefined),
			serviceGroupId: new FormControl<number | null | undefined>(undefined),
			serviceGroupName: new FormControl<string | null | undefined>(undefined),
			showOnline: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceOptionsUpdateModel {
		consumerPadding?: boolean | null;
		defaultService?: boolean | null;
		durationInterval?: number | null;
		durationMax?: number | null;
		durationMin?: number | null;
		durationSelect?: boolean | null;
		padding?: number | null;
	}
	export interface ServiceOptionsUpdateModelFormProperties {
		consumerPadding: FormControl<boolean | null | undefined>,
		defaultService: FormControl<boolean | null | undefined>,
		durationInterval: FormControl<number | null | undefined>,
		durationMax: FormControl<number | null | undefined>,
		durationMin: FormControl<number | null | undefined>,
		durationSelect: FormControl<boolean | null | undefined>,
		padding: FormControl<number | null | undefined>,
	}
	export function CreateServiceOptionsUpdateModelFormGroup() {
		return new FormGroup<ServiceOptionsUpdateModelFormProperties>({
			consumerPadding: new FormControl<boolean | null | undefined>(undefined),
			defaultService: new FormControl<boolean | null | undefined>(undefined),
			durationInterval: new FormControl<number | null | undefined>(undefined),
			durationMax: new FormControl<number | null | undefined>(undefined),
			durationMin: new FormControl<number | null | undefined>(undefined),
			durationSelect: new FormControl<boolean | null | undefined>(undefined),
			padding: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceSettingsUpdateModel {
		bookAheadUnit?: number | null;
		bookAheadValue?: number | null;
		bookInAdvance?: number | null;
	}
	export interface ServiceSettingsUpdateModelFormProperties {
		bookAheadUnit: FormControl<number | null | undefined>,
		bookAheadValue: FormControl<number | null | undefined>,
		bookInAdvance: FormControl<number | null | undefined>,
	}
	export function CreateServiceSettingsUpdateModelFormGroup() {
		return new FormGroup<ServiceSettingsUpdateModelFormProperties>({
			bookAheadUnit: new FormControl<number | null | undefined>(undefined),
			bookAheadValue: new FormControl<number | null | undefined>(undefined),
			bookInAdvance: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServiceUpdateModel {
		availability?: AvailabilityInputModel;
		bookingInterval?: number | null;
		bookingLimit?: number | null;
		customFields?: CustomFieldUpdateModel;
		description?: string | null;
		duration?: number | null;
		fees?: ServiceFeesUpdateModel;
		locationId?: string | null;
		maxCapacity?: number | null;
		maxGroupSize?: number | null;
		mediaPageUrl?: string | null;
		name?: string | null;
		options?: ServiceOptionsUpdateModel;
		public?: boolean | null;
		serviceGroupId?: string | null;
		settings?: ServiceSettingsUpdateModel;
		type?: string | null;
	}
	export interface ServiceUpdateModelFormProperties {
		bookingInterval: FormControl<number | null | undefined>,
		bookingLimit: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		duration: FormControl<number | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		maxCapacity: FormControl<number | null | undefined>,
		maxGroupSize: FormControl<number | null | undefined>,
		mediaPageUrl: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		public: FormControl<boolean | null | undefined>,
		serviceGroupId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateServiceUpdateModelFormGroup() {
		return new FormGroup<ServiceUpdateModelFormProperties>({
			bookingInterval: new FormControl<number | null | undefined>(undefined),
			bookingLimit: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			maxCapacity: new FormControl<number | null | undefined>(undefined),
			maxGroupSize: new FormControl<number | null | undefined>(undefined),
			mediaPageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			serviceGroupId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SystemTimezoneViewModel {
		baseUtcOffset?: number | null;
		daylightName?: string | null;
		displayName?: string | null;
		standardName?: string | null;
		supportsDaylightSavingTime?: boolean | null;
		timezoneIana?: string | null;
		timezoneId?: string | null;
	}
	export interface SystemTimezoneViewModelFormProperties {
		baseUtcOffset: FormControl<number | null | undefined>,
		daylightName: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		standardName: FormControl<string | null | undefined>,
		supportsDaylightSavingTime: FormControl<boolean | null | undefined>,
		timezoneIana: FormControl<string | null | undefined>,
		timezoneId: FormControl<string | null | undefined>,
	}
	export function CreateSystemTimezoneViewModelFormGroup() {
		return new FormGroup<SystemTimezoneViewModelFormProperties>({
			baseUtcOffset: new FormControl<number | null | undefined>(undefined),
			daylightName: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			standardName: new FormControl<string | null | undefined>(undefined),
			supportsDaylightSavingTime: new FormControl<boolean | null | undefined>(undefined),
			timezoneIana: new FormControl<string | null | undefined>(undefined),
			timezoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimezoneViewModel {
		object?: string | null;
		regions?: Array<string>;
		timezones?: Array<TimezonesViewModel>;
	}
	export interface TimezoneViewModelFormProperties {
		object: FormControl<string | null | undefined>,
	}
	export function CreateTimezoneViewModelFormGroup() {
		return new FormGroup<TimezoneViewModelFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimezonesViewModel {
		name?: string | null;
		region?: string | null;
		timezoneIanna?: string | null;
		tzOffset?: number | null;
	}
	export interface TimezonesViewModelFormProperties {
		name: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		timezoneIanna: FormControl<string | null | undefined>,
		tzOffset: FormControl<number | null | undefined>,
	}
	export function CreateTimezonesViewModelFormGroup() {
		return new FormGroup<TimezonesViewModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			timezoneIanna: new FormControl<string | null | undefined>(undefined),
			tzOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Appointments
		 * <p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
		 * Get setup/v1/appointments
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {string} email Filter appointments by email address
		 * @param {string} lastname Filter appointments by lastname or part of
		 * @param {string} serviceId Filter appointments by service
		 * @param {string} calendarId Filter appointments by calendar
		 * @param {string} resourceId Filter appointments by resource
		 * @param {string} customerId Filter appointments by customer
		 * @param {string} serviceAllocationId Filter appointments by service allocation
		 * @param {Date} startDate Format YYYY-MM-DD: Filter appointments by on/after startDate
		 * @param {Date} endDate Format YYYY-MM-DD: Filter appointments on/before endDate
		 * @param {string} status Filter appointments by status: IN, BK, CN, RE, RS
		 * @param {string} bookedBy Filter appointments by user email who booked
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {AppointmentListViewModel} Success
		 */
		SetupV1AppointmentsGetByLocationIdAndEmailAndLastnameAndServiceIdAndCalendarIdAndResourceIdAndCustomerIdAndServiceAllocationIdAndStartDateAndEndDateAndStatusAndBookedByAndOffsetAndLimit(locationId: string | null | undefined, email: string | null | undefined, lastname: string | null | undefined, serviceId: string | null | undefined, calendarId: string | null | undefined, resourceId: string | null | undefined, customerId: string | null | undefined, serviceAllocationId: string | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, status: string | null | undefined, bookedBy: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<AppointmentListViewModel> {
			return this.http.get<AppointmentListViewModel>(this.baseUri + 'setup/v1/appointments?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&lastname=' + (lastname == null ? '' : encodeURIComponent(lastname)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '&calendarId=' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&serviceAllocationId=' + (serviceAllocationId == null ? '' : encodeURIComponent(serviceAllocationId)) + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&bookedBy=' + (bookedBy == null ? '' : encodeURIComponent(bookedBy)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Appointment
		 * <p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. Find appointment id's by using the <i>GET​/setup​/v1​/appointments</i> endpoint.</p>
		 * Get setup/v1/appointments/{id}
		 * @param {string} id id of appointment object
		 * @return {AppointmentViewModel} Success
		 */
		SetupV1Appointments_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<AppointmentViewModel> {
			return this.http.get<AppointmentViewModel>(this.baseUri + 'setup/v1/appointments/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Reassign Appointment
		 * <p>Use this endpoint to <b>Reassign</b> an appointment from one resource to another. The result returned is a single appointment that was reassigned to the target resource. A valid <b>appointment id</b> and <b>resource id</b> is required. Find appointment id's by using the <i>GET /setup/v1/appointments</i> endpoint, find resource id's by using the <i>GET ​/setup​/v1​/resources</i> endpoint.</p>
		 * Put setup/v1/appointments/{id}/reassign/resource/{resourceId}
		 * @param {string} id id of appointment object
		 * @param {string} resourceId id of target resource
		 * @return {AppointmentViewModel} Success
		 */
		SetupV1Appointments_idReassignResource_resourceIdPut(id: string, resourceId: string, headersHandler?: () => HttpHeaders): Observable<AppointmentViewModel> {
			return this.http.put<AppointmentViewModel>(this.baseUri + 'setup/v1/appointments/' + (id == null ? '' : encodeURIComponent(id)) + '/reassign/resource/' + (resourceId == null ? '' : encodeURIComponent(resourceId)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Users
		 * <p>Use this endpoint to return a <b>List of Business Users and their Roles</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/businessusers
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {string} email Filter by email address
		 * @param {string} role Filter user role
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {BusinessUserListViewModel} Success
		 */
		SetupV1BusinessusersGetByLocationIdAndEmailAndRoleAndOffsetAndLimit(locationId: string | null | undefined, email: string | null | undefined, role: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BusinessUserListViewModel> {
			return this.http.get<BusinessUserListViewModel>(this.baseUri + 'setup/v1/businessusers?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&role=' + (role == null ? '' : encodeURIComponent(role)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create User
		 * <p>Use this endpoint to <b>Create</b> a Business User. If not specified, the business location defaults to the primary business location. </p>
		 * <p>Required fields: <b>Name</b>, <b>Email</b> and <b>Role</b><b>Note:</b> If the businessUser is a bookable resource (bizresource) then a resourceId is required.</p>
		 * <p>For role, use one of the values listed. <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>
		 * <p>The <b>sendRegistrationInvite</b> parameter is available to API consumers for their own use. It provides no added functionality in OnSched.</p>
		 * Post setup/v1/businessusers
		 * @return {BusinessUserViewModel} Success
		 */
		SetupV1BusinessusersPost(requestBody: BusinessUserInputModel, headersHandler?: () => HttpHeaders): Observable<BusinessUserViewModel> {
			return this.http.post<BusinessUserViewModel>(this.baseUri + 'setup/v1/businessusers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List User Permissions
		 * <p>Use this endpoint to return a <b>List of Business User Permissions by Role</b>. Results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/businessusers/permissions
		 * @param {string} role Filter permissions by role
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {BusinessPermissionListViewModel} Success
		 */
		SetupV1BusinessusersPermissionsGetByRoleAndOffsetAndLimit(role: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BusinessPermissionListViewModel> {
			return this.http.get<BusinessPermissionListViewModel>(this.baseUri + 'setup/v1/businessusers/permissions?role=' + (role == null ? '' : encodeURIComponent(role)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List User Companies
		 * <p>Use this endpoint to return a <b>List of Companies</b> associated with the business users email requested. A business user <b>email</b> address is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/businessusers/{email}/companies
		 * @param {string} email Email of business user
		 * @param {string} searchText All or partial company name
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {AuthorizedCompanyListViewModel} Success
		 */
		SetupV1Businessusers_emailCompaniesGetBySearchTextAndOffsetAndLimit(email: string, searchText: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<AuthorizedCompanyListViewModel> {
			return this.http.get<AuthorizedCompanyListViewModel>(this.baseUri + 'setup/v1/businessusers/' + (email == null ? '' : encodeURIComponent(email)) + '/companies&searchText=' + (searchText == null ? '' : encodeURIComponent(searchText)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete User
		 * <p>Use this endpoint to permanently <b>Delete</b> a Business User. A valid <b>businessUser id</b> is required.</p>
		 * Delete setup/v1/businessusers/{id}
		 * @return {void} Success
		 */
		SetupV1Businessusers_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'setup/v1/businessusers/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User
		 * <p>Use this endpoint to return a <b>Business User</b> object. A valid <b>businessUser id</b> is required. Find businessUser id's using the <i>GET /setup/v1/businessusers</i> endpoint.</p>
		 * Get setup/v1/businessusers/{id}
		 * @param {string} id id of businessUser object
		 * @return {BusinessUserViewModel} Success
		 */
		SetupV1Businessusers_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<BusinessUserViewModel> {
			return this.http.get<BusinessUserViewModel>(this.baseUri + 'setup/v1/businessusers/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update User
		 * <p>Use this endpoint to <b>Update</b> a Business User. A valid <b>businessUser id</b> is required.</p>
		 * <p>
		 * <b>Business Roles Include: bizowner</b> (Business Owner), <b>bizadmin</b> (Business Administrator), <b>bizresource</b> (Business User - Bookable Resource).</p>
		 * Put setup/v1/businessusers/{id}
		 * @return {BusinessUserViewModel} Success
		 */
		SetupV1Businessusers_idPut(id: string, requestBody: BusinessUserUpdateModel, headersHandler?: () => HttpHeaders): Observable<BusinessUserViewModel> {
			return this.http.put<BusinessUserViewModel>(this.baseUri + 'setup/v1/businessusers/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Calendars
		 * <p>Use this endpoint to return a <b>List of Calendars</b> from the requested location. If not specified, the business location defaults to the primary business location. </p>
		 * Get setup/v1/calendars
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {boolean} deleted Filter by deleted status
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {ScheduleListViewModel} Success
		 */
		SetupV1CalendarsGetByLocationIdAndDeletedAndOffsetAndLimit(locationId: string | null | undefined, deleted: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ScheduleListViewModel> {
			return this.http.get<ScheduleListViewModel>(this.baseUri + 'setup/v1/calendars?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&deleted=' + deleted + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * DEPRECATING: Create
		 * <p>
		 * <b>DEPRECATING:</b> Create Calendar</p>
		 * <p>We are no longer supporting Multiple Calendar Functionality as it is part of our Legacy Application and has no relevance in the API.</p>
		 * Post setup/v1/calendars
		 * @return {ScheduleViewModel} Success
		 */
		SetupV1CalendarsPost(requestBody: ScheduleInputModel, headersHandler?: () => HttpHeaders): Observable<ScheduleViewModel> {
			return this.http.post<ScheduleViewModel>(this.baseUri + 'setup/v1/calendars', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Calendar Block
		 * <p>Use this endpoint to permanently <b>Delete</b> a calendar block. A valid <b>calendarBlock id</b> is required.</p>
		 * Delete setup/v1/calendars/block/{id}
		 * @param {string} id id of a calendarBlock object
		 * @return {CalendarBlockViewModel} Success
		 */
		SetupV1CalendarsBlock_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<CalendarBlockViewModel> {
			return this.http.delete<CalendarBlockViewModel>(this.baseUri + 'setup/v1/calendars/block/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Calendar Block
		 * <p>Use this endpoint to <b>Create</b> a Calendar Block. A valid <b>calendarBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/calendars​/{id}​/block</i> endpoint for fieldnames and details.</p>
		 * Put setup/v1/calendars/block/{id}
		 * @param {string} id id of calendarBlock object
		 * @param {CalendarBlockUpdateModel} requestBody Resource Block input model
		 * @return {CalendarBlockViewModel} Success
		 */
		SetupV1CalendarsBlock_idPut(id: string, requestBody: CalendarBlockUpdateModel, headersHandler?: () => HttpHeaders): Observable<CalendarBlockViewModel> {
			return this.http.put<CalendarBlockViewModel>(this.baseUri + 'setup/v1/calendars/block/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Calendar Block
		 * <p>Use this endpoint to return a <b>Calendar Block</b>. A valid <b>calendarBlock id</b> is required. </p>
		 * Get setup/v1/calendars/blocks/{id}
		 * @param {string} id id of calendarBlock object
		 * @return {CalendarBlockViewModel} Success
		 */
		SetupV1CalendarsBlocks_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<CalendarBlockViewModel> {
			return this.http.get<CalendarBlockViewModel>(this.baseUri + 'setup/v1/calendars/blocks/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Calendar
		 * <p>Use this endpoint to <b>Delete</b> a calendar object. A valid <b>calendar id</b> is required. The calendar is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/calendars​/{id}​/recover </i>endpoint.</p>
		 * Delete setup/v1/calendars/{id}
		 * @param {string} id id of calendar object
		 * @return {ScheduleViewModel} Success
		 */
		SetupV1Calendars_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ScheduleViewModel> {
			return this.http.delete<ScheduleViewModel>(this.baseUri + 'setup/v1/calendars/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Calendar
		 * <p>Use this endpoint to return a <b>Calendar</b> object. A valid <b>calendar id</b> is required.</p>
		 * Get setup/v1/calendars/{id}
		 * @param {string} id id of calendar object
		 * @return {ScheduleViewModel} Success
		 */
		SetupV1Calendars_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<ScheduleViewModel> {
			return this.http.get<ScheduleViewModel>(this.baseUri + 'setup/v1/calendars/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Calendar
		 * <p>Use this endpoint to <b>Update</b> a calendar object. A valid <b>calendar id</b> is required. When your company was created a calendar object was automatically created with 24-hour weekly availability. Its <b>name = Main</b>, the <b>type = resource</b> and by default the <b>interval = 30 mins</b>. We are currently supporting resource calendar type. Other types were part of our Legacy Application and has no relevance in the API product.</p>
		 * Put setup/v1/calendars/{id}
		 * @param {string} id id of calendar object
		 * @param {ScheduleUpdateModel} requestBody Input model for the calendar object
		 * @return {ScheduleViewModel} Success
		 */
		SetupV1Calendars_idPut(id: string, requestBody: ScheduleUpdateModel, headersHandler?: () => HttpHeaders): Observable<ScheduleViewModel> {
			return this.http.put<ScheduleViewModel>(this.baseUri + 'setup/v1/calendars/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create Calendar Block
		 * <p>Use this endpoint to <b>Create</b> a Calendar Block. A valid <b>calendar id</b> is required.</p>
		 * <p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
		 * <p>Calendar blocks can be set to specific time ranges or for the whole day. Th block a whole day set the startTime to 0 and endTime to 2400.</p>
		 * <p>Calendar blocks can be for a specific date range instance or set to repeat at a specified frequency.</p>
		 * <p>
		 * <b>Repeat object: (repeats = true)</b>
		 * </p>
		 * <p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
		 * <p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>
		 * <p>
		 * <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
		 * <p>
		 * <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b>  is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>
		 * <p>
		 * <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
		 * <p>
		 * <b>Repeats will end on the date specified by the end date.</b>
		 * </p>
		 * Post setup/v1/calendars/{id}/block
		 * @param {string} id id of calendar object
		 * @return {ResourceBlockViewModel} Success
		 */
		SetupV1Calendars_idBlockPost(id: string, requestBody: CalendarBlockInputModel, headersHandler?: () => HttpHeaders): Observable<ResourceBlockViewModel> {
			return this.http.post<ResourceBlockViewModel>(this.baseUri + 'setup/v1/calendars/' + (id == null ? '' : encodeURIComponent(id)) + '/block', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Calendar Blocks
		 * <p>Use this endpoint to return a <b>List of Calendar Blocks</b> for the requested calendar. A valid <b>calendar id</b> is required. </p>
		 * Get setup/v1/calendars/{id}/blocks
		 * @param {string} id id of calendar to list blocks
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {CalendarBlockListViewModel} Valid response
		 */
		SetupV1Calendars_idBlocksGetByOffsetAndLimit(id: string, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<CalendarBlockListViewModel> {
			return this.http.get<CalendarBlockListViewModel>(this.baseUri + 'setup/v1/calendars/' + (id == null ? '' : encodeURIComponent(id)) + '/blocks&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Recover Calendar
		 * <p>Use this endpoint to <b>Recover</b> a previously deleted calendar object. A valid <b>calendar id</b> is required.</p>
		 * Put setup/v1/calendars/{id}/recover
		 * @param {string} id id of calendar object
		 * @return {ScheduleViewModel} Success
		 */
		SetupV1Calendars_idRecoverPut(id: string, headersHandler?: () => HttpHeaders): Observable<ScheduleViewModel> {
			return this.http.put<ScheduleViewModel>(this.baseUri + 'setup/v1/calendars/' + (id == null ? '' : encodeURIComponent(id)) + '/recover', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Calendar Services
		 * <p>Use this endpoint to return a <b>List of Linked Services</b> of a calendar object. A valid <b>calendar id</b> is required. Find calendar id's by using the <i>GET /setup/v1/calendars</i> endpoint.</p>
		 * Get setup/v1/calendars/{id}/services
		 * @param {string} id id of calendar object
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {ServiceListViewModel} Success
		 */
		SetupV1Calendars_idServicesGetByOffsetAndLimit(id: string, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceListViewModel> {
			return this.http.get<ServiceListViewModel>(this.baseUri + 'setup/v1/calendars/' + (id == null ? '' : encodeURIComponent(id)) + '/services&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Company
		 * <p>Use this endpoint to return the <b>Authorized Company</b> information. The company is the main entity that oversees all business locations defined below it, hierarchically. </p>
		 * <p>Access to the company credentials gives you access to all business locations defined in the authorized company. Client credentials resolve to a single company and are purposely hidden from this endpoint.</p>
		 * Get setup/v1/companies
		 * @return {CompanyViewModel} Success
		 */
		SetupV1CompaniesGet(headersHandler?: () => HttpHeaders): Observable<CompanyViewModel> {
			return this.http.get<CompanyViewModel>(this.baseUri + 'setup/v1/companies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Company
		 * <p>Use this endpoint to <b>Create</b> a new authorized company.</p>
		 * <p>
		 * <b>Note: Special API Partner credentials are required to access this endpoint.</b>
		 * </p>
		 * <p>The <b>name, registrationEmail, phone, country</b> and <b>timezoneName</b> are required fields. For <b>country</b> use the standard ISO 3166 2-character country code.</p>
		 * <p>The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>.</p>
		 * <p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>
		 * Post setup/v1/companies
		 * @param {CompanyInputModel} requestBody Company Input Model
		 * @return {CompanyViewModel} Success
		 */
		SetupV1CompaniesPost(requestBody: CompanyInputModel, headersHandler?: () => HttpHeaders): Observable<CompanyViewModel> {
			return this.http.post<CompanyViewModel>(this.baseUri + 'setup/v1/companies', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update Company
		 * <p>Use this endpoint to <b>Update</b> the authorized company information. Your client credentials resolve to a single company. The timezoneName must be expressed as an IANA Timezone, e.g., <i>America/New_York</i>. </p>
		 * <p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>
		 * Put setup/v1/companies
		 * @param {CompanyUpdateModel} requestBody Company Update Model
		 * @return {CompanyViewModel} Success
		 */
		SetupV1CompaniesPut(requestBody: CompanyUpdateModel, headersHandler?: () => HttpHeaders): Observable<CompanyViewModel> {
			return this.http.put<CompanyViewModel>(this.baseUri + 'setup/v1/companies', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Company Domains
		 * <p>Use this endpoint to return a <b>List of Company Domains</b> for the authorized company. To share the OnSchedJS booking widget on your website or in your application your domain must be listed.</p>
		 * Get setup/v1/companies/domains
		 * @return {CompanyDomainListViewModel} Success
		 */
		SetupV1CompaniesDomainsGet(headersHandler?: () => HttpHeaders): Observable<CompanyDomainListViewModel> {
			return this.http.get<CompanyDomainListViewModel>(this.baseUri + 'setup/v1/companies/domains', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Company Domain
		 * <p>Use this endpoint to <b>Create</b> an OnSchedJs domain for your authorized company. To share the OnSchedJS booking widget on your website or in your application you must add the domain.</p>
		 * Post setup/v1/companies/domains
		 * @param {CompanyDomainInputModel} requestBody Company Domain Input Model
		 * @return {CompanyDomainViewModel} Success
		 */
		SetupV1CompaniesDomainsPost(requestBody: CompanyDomainInputModel, headersHandler?: () => HttpHeaders): Observable<CompanyDomainViewModel> {
			return this.http.post<CompanyDomainViewModel>(this.baseUri + 'setup/v1/companies/domains', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Company Domain
		 * <p>Use this endpoint to <b>Delete</b> an OnSchedJs domain from your authorized company. A valid <b>companyDomain id</b> is required.</p>
		 * Delete setup/v1/companies/domains/{id}
		 * @param {string} id id of companyDomain object
		 * @return {CompanyDomainViewModel} Success
		 */
		SetupV1CompaniesDomains_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<CompanyDomainViewModel> {
			return this.http.delete<CompanyDomainViewModel>(this.baseUri + 'setup/v1/companies/domains/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Company Domain
		 * <p>Use this endpoint to return a <b>Company Domain</b> object. A valid <b>companyDomain id</b> is required. </p>
		 * Get setup/v1/companies/domains/{id}
		 * @param {string} id id of companyDomain object
		 * @return {CompanyDomainViewModel} Success
		 */
		SetupV1CompaniesDomains_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<CompanyDomainViewModel> {
			return this.http.get<CompanyDomainViewModel>(this.baseUri + 'setup/v1/companies/domains/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Company Domain
		 * <p>Use this endpoint to <b>Update</b> an OnSchedJs domain for your authorized company. A valid <b>companyDomain id</b> is required.</p>
		 * Put setup/v1/companies/domains/{id}
		 * @param {string} id id of companyDomain object
		 * @param {CompanyDomainUpdateModel} requestBody Company Domain Update Model
		 * @return {CompanyDomainViewModel} Success
		 */
		SetupV1CompaniesDomains_idPut(id: string, requestBody: CompanyDomainUpdateModel, headersHandler?: () => HttpHeaders): Observable<CompanyDomainViewModel> {
			return this.http.put<CompanyDomainViewModel>(this.baseUri + 'setup/v1/companies/domains/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Email Templates
		 * <p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized at the Business Location level or Company level. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>
		 * Get setup/v1/companies/email/templates
		 * @return {EmailTemplateListViewModel} Success
		 */
		SetupV1CompaniesEmailTemplatesGet(headersHandler?: () => HttpHeaders): Observable<EmailTemplateListViewModel> {
			return this.http.get<EmailTemplateListViewModel>(this.baseUri + 'setup/v1/companies/email/templates', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Master Template Settings
		 * <p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. Deleting a custom master email template setting will reactivate the original default OnSched template settings.</p>
		 * Delete setup/v1/companies/email/templates/master
		 * @return {MasterEmailTemplateSettingsViewModel} Success
		 */
		SetupV1CompaniesEmailTemplatesMasterDelete(headersHandler?: () => HttpHeaders): Observable<MasterEmailTemplateSettingsViewModel> {
			return this.http.delete<MasterEmailTemplateSettingsViewModel>(this.baseUri + 'setup/v1/companies/email/templates/master', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Master Template Settings
		 * <p>Use this endpoint to return the <b>Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. </p>
		 * Get setup/v1/companies/email/templates/master
		 * @return {MasterEmailTemplateSettingsViewModel} Success
		 */
		SetupV1CompaniesEmailTemplatesMasterGet(headersHandler?: () => HttpHeaders): Observable<MasterEmailTemplateSettingsViewModel> {
			return this.http.get<MasterEmailTemplateSettingsViewModel>(this.baseUri + 'setup/v1/companies/email/templates/master', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Master Template Settings
		 * <p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
		 * <p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>
		 * Post setup/v1/companies/email/templates/master
		 * @return {MasterEmailTemplateSettingsViewModel} Success
		 */
		SetupV1CompaniesEmailTemplatesMasterPost(requestBody: MasterTemplateSettingsInputModel, headersHandler?: () => HttpHeaders): Observable<MasterEmailTemplateSettingsViewModel> {
			return this.http.post<MasterEmailTemplateSettingsViewModel>(this.baseUri + 'setup/v1/companies/email/templates/master', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Email Template
		 * <p>Use this endpoint to return the requested <b>Email Template</b>. If it wasn't customized the default template is returned. The response content is in html format. A valid emailTemplate <b>name</b> is required. Find template names by using the: <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>
		 * <p>To create custom company email templates, go to the <i>POST ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint and create a template using the Primary Business Location Id.</p>
		 * Get setup/v1/companies/email/templates/{templateName}
		 * @param {string} templateName Email template name
		 * @return {ContentResult} Success
		 */
		SetupV1CompaniesEmailTemplates_templateNameGet(templateName: string, headersHandler?: () => HttpHeaders): Observable<ContentResult> {
			return this.http.get<ContentResult>(this.baseUri + 'setup/v1/companies/email/templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Regions
		 * <p>Use this endpoint to return a list of <b>Regions</b> in the authorized company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. </p>
		 * Get setup/v1/companies/regions
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {RegionListViewModel} region object's
		 */
		SetupV1CompaniesRegionsGetByOffsetAndLimit(offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<RegionListViewModel> {
			return this.http.get<RegionListViewModel>(this.baseUri + 'setup/v1/companies/regions?offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Region
		 * <p>Use this endpoint to <b>Create</b> a region object. Regions can be mapped to business locations. They can be used by the locations endpoints to filter locations by region id.</p>
		 * Post setup/v1/companies/regions
		 * @return {RegionViewModel} Success
		 */
		SetupV1CompaniesRegionsPost(requestBody: RegionInputModel, headersHandler?: () => HttpHeaders): Observable<RegionViewModel> {
			return this.http.post<RegionViewModel>(this.baseUri + 'setup/v1/companies/regions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Region
		 * <p>Use this endpoint to <b>Delete</b> a region object. A valid <b>region id</b> is required. If the region is related to any business locations it won't be deleted. You must first remove any references to region id from the business locations prior to deleting.</p>
		 * Delete setup/v1/companies/regions/{id}
		 * @param {string} id id of Region
		 * @return {RegionViewModel} Success
		 */
		SetupV1CompaniesRegions_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<RegionViewModel> {
			return this.http.delete<RegionViewModel>(this.baseUri + 'setup/v1/companies/regions/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Region
		 * <p>Use this endpoint to return a <b>Region</b> object. A valid <b>region id</b> is required.</p>
		 * Get setup/v1/companies/regions/{id}
		 * @param {string} id id of a region object
		 * @return {RegionViewModel} Success
		 */
		SetupV1CompaniesRegions_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<RegionViewModel> {
			return this.http.get<RegionViewModel>(this.baseUri + 'setup/v1/companies/regions/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Region
		 * <p>Use this endpoint to <b>Update</b> a region object. A valid <b>region id</b> is required.</p>
		 * Put setup/v1/companies/regions/{id}
		 * @param {string} id id of Region
		 * @param {RegionUpdateModel} requestBody Region Update Model
		 * @return {RegionViewModel} Success
		 */
		SetupV1CompaniesRegions_idPut(id: string, requestBody: RegionUpdateModel, headersHandler?: () => HttpHeaders): Observable<RegionViewModel> {
			return this.http.put<RegionViewModel>(this.baseUri + 'setup/v1/companies/regions/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Time Zones
		 * <p>Use this endpoint to return a <b>List of timezone names, timezoneIana and tzOffset values</b> calculated for the date requested. Daylight Savings may or may not apply depending on the date specified.</p>
		 * Get setup/v1/companies/timezones/{date}
		 * @param {Date} date "YYYY-MM-DD: Date for timezone info"
		 * @return {TimezoneViewModel} Success
		 */
		SetupV1CompaniesTimezones_dateGet(date: Date, headersHandler?: () => HttpHeaders): Observable<TimezoneViewModel> {
			return this.http.get<TimezoneViewModel>(this.baseUri + 'setup/v1/companies/timezones/' + date.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Customers
		 * <p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/customers
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {string} groupId Filter by groupId
		 * @param {string} email Filter by email address.
		 * @param {string} lastname Search by lastname.
		 * @param {boolean} deleted Filter by deleted status.
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {CustomerListViewModel} Success
		 */
		SetupV1CustomersGetByLocationIdAndGroupIdAndEmailAndLastnameAndDeletedAndOffsetAndLimit(locationId: string | null | undefined, groupId: string | null | undefined, email: string | null | undefined, lastname: string | null | undefined, deleted: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<CustomerListViewModel> {
			return this.http.get<CustomerListViewModel>(this.baseUri + 'setup/v1/customers?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&lastname=' + (lastname == null ? '' : encodeURIComponent(lastname)) + '&deleted=' + deleted + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Customer
		 * <p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /setup/v1/customers</i> endpoint.</p>
		 * Get setup/v1/customers/{id}
		 * @param {string} id id of customer object
		 * @return {CustomerViewModel} Success
		 */
		SetupV1Customers_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<CustomerViewModel> {
			return this.http.get<CustomerViewModel>(this.baseUri + 'setup/v1/customers/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Customer Data
		 * <p>Use this endpoint to return the <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's using the <i>GET /setup/v1/customers</i> endpoint.</p>
		 * Get setup/v1/customers/{id}/privacy
		 * @param {string} id id of customer object
		 * @return {CustomerPrivacyViewModel} Success
		 */
		SetupV1Customers_idPrivacyGet(id: string, headersHandler?: () => HttpHeaders): Observable<CustomerPrivacyViewModel> {
			return this.http.get<CustomerPrivacyViewModel>(this.baseUri + 'setup/v1/customers/' + (id == null ? '' : encodeURIComponent(id)) + '/privacy', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Locations
		 * <p>Use this endpoint to <b>List Business Locations</b> associated with your company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * <p>
		 * <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>
		 * Get setup/v1/locations
		 * @param {string} name Location name(full or partial) to filter on
		 * @param {string} serviceId Find locations that offer this service
		 * @param {string} friendlyId friendlyId of location
		 * @param {boolean} deleted Filter locations on deleted status
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {LocationListViewModel} Success
		 */
		SetupV1LocationsGetByNameAndServiceIdAndFriendlyIdAndDeletedAndOffsetAndLimit(name: string | null | undefined, serviceId: string | null | undefined, friendlyId: string | null | undefined, deleted: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<LocationListViewModel> {
			return this.http.get<LocationListViewModel>(this.baseUri + 'setup/v1/locations?name=' + (name == null ? '' : encodeURIComponent(name)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '&friendlyId=' + (friendlyId == null ? '' : encodeURIComponent(friendlyId)) + '&deleted=' + deleted + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Location
		 * <p>Use this endpoint to <b>Create</b> a new business location. The result is a business location object with a GUID assigned to the location.</p>
		 * <p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>
		 * <p>
		 * <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>
		 * <p>
		 * <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>
		 * <p>
		 * <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>
		 * <p>
		 * <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
		 * <p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
		 * <p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
		 * <p>
		 * <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>
		 * Post setup/v1/locations
		 * @return {LocationViewModel} Success
		 */
		SetupV1LocationsPost(requestBody: LocationInputModel, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.post<LocationViewModel>(this.baseUri + 'setup/v1/locations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create Locations Bulk
		 * <p>Use this endpoint to <b>Create Bulk</b> business locations. The posted list of locations cannot exceed 100 location objects per transaction for performance purposes. The result is a list of new business location objects with a GUID assigned to each location.</p>
		 * <p>The <b>name</b> and <b>timezoneName</b> fields are required. The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>. Refer to: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone Wiki</a> for a listing of IANA time zones.</p>
		 * <p>
		 * <b>Business hours</b> are set by defining the <b>startTime</b> and <b>endTime</b> values for each day available/open. All days of the week must be provided when setting availability. Days are defined as <b>sun, mon, tue, wed, thu, fri and sat</b>. Start and End Times are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. If there is no physical location and the business hours are irrelevant, set the hours to open 24 hours by setting startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. </p>
		 * <p>
		 * <b>Settings</b> can be set here. Booking timer minutes, book ahead restrictions and customer bookings per day are all available here. Please read about the settings scope parameter before setting these values as it may simplify your process.</p>
		 * <p>
		 * <b>Settings Scope</b> can be set to the company or the business location level. You can have all locations use the same company level settings or individual business locations can define their own, business location scope. If you want to use the company settings throughout all locations, do not pass in <b>settings element</b>. To create business location scoped settings, pass in the <b>settings element</b> with the field values defined in the post body. </p>
		 * <p>
		 * <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
		 * <p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
		 * <p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
		 * <p>
		 * <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>
		 * Post setup/v1/locations/bulk
		 * @return {Array<LocationViewModel>} Success
		 */
		SetupV1LocationsBulkPost(requestBody: LocationsInputModel, headersHandler?: () => HttpHeaders): Observable<Array<LocationViewModel>> {
			return this.http.post<Array<LocationViewModel>>(this.baseUri + 'setup/v1/locations/bulk', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Unlink Service
		 * <p>Use this endpoint to <b>Unlink</b> a location service from a business location. A valid <b>locationService id</b> is required. Find location services by using the <i>GET ​/setup​/v1​/locations​/{id}​/services</i> endpoint. </p>
		 * Delete setup/v1/locations/services/{id}
		 * @param {string} id id of locationService object
		 * @return {LocationViewModel} Success
		 */
		SetupV1LocationsServices_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.delete<LocationViewModel>(this.baseUri + 'setup/v1/locations/services/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Linked Service
		 * <p>Use this endpoint to <b>Get a Linked Service</b>. A valid <b>locationService id</b> is required.</p>
		 * Get setup/v1/locations/services/{id}
		 * @param {string} id id of locationService object
		 * @return {BusinessServiceViewModel} location service objects
		 */
		SetupV1LocationsServices_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<BusinessServiceViewModel> {
			return this.http.get<BusinessServiceViewModel>(this.baseUri + 'setup/v1/locations/services/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Location
		 * <p>Use this endpoint to <b>Delete</b> a business location. A valid business <b>location id</b> is required. The location is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/locations​/{id}​/recover</i> endpoint.</p>
		 * Delete setup/v1/locations/{id}
		 * @param {string} id id of business location, defaults to primary business location
		 * @return {LocationViewModel} Success
		 */
		SetupV1Locations_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.delete<LocationViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Location
		 * <p>Use this endpoint to return a <b>Location</b> object. A valid <b>location id</b> is required. If not specified, the business location defaults to the primary business location. Find all business location id's, by using the <i>GET /consumer/v1/locations</i> endpoint.</p>
		 * <p>
		 * <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>
		 * Get setup/v1/locations/{id}
		 * @param {string} id id of business location, defaults to primary business location
		 * @return {LocationViewModel} Success
		 */
		SetupV1Locations_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.get<LocationViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Location
		 * <p>Use this endpoint to <b>Update</b> a business location object. A valid business <b>location id</b> is required. The optional removeRegion query parameter can be used to remove the region relationship from the location.</p>
		 * <p>If the settings element is populated the scope will be set to the business location with the settings supplied. If your settings are uniform across all locations, then do not supply the settings element and the location will use the settings defined on the primary business location (company scoped). Company scoped settings cascade down to the locations. You can override any location that needs different settings by providing settings in the update model. Use the <i>PUT /setup/v1/locations/{id}/settings/scope/{settingsScope}</i> endpoint to change the settings scope only. This is typically used when switching from business location scope back to company.</p>
		 * <p>Refer to: <i><b>POST ​/setup​/v1​/locations</b></i> endpoint for details.</p>
		 * Put setup/v1/locations/{id}
		 * @return {LocationViewModel} Success
		 */
		SetupV1Locations_idPutByRemoveRegion(id: string, removeRegion: boolean | null | undefined, requestBody: LocationUpdateModel, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.put<LocationViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '&removeRegion=' + removeRegion, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Reminders
		 * <p>Use this endpoint to <b>Get Email and SMS appointment reminder settings</b> for the requested location. A valid business <b>location id</b> is required. </p>
		 * Get setup/v1/locations/{id}/appointmentreminders
		 * @param {string} id id of business location, defaults to primary business location
		 * @return {AppointmentReminderViewModel} Success
		 */
		SetupV1Locations_idAppointmentremindersGet(id: string, headersHandler?: () => HttpHeaders): Observable<AppointmentReminderViewModel> {
			return this.http.get<AppointmentReminderViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/appointmentreminders', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Reminders
		 * <p>Use this endpoint to <b>Update</b> Email and SMS appointment reminder settings for the requested location. A valid business <b>location id</b> is required. </p>
		 * <p>
		 * <b>Appointment Reminders</b> Reminder values are used to define how many hours, days, or weeks (interval value) prior to the appointment to send the reminder. <b>Interval</b> values are used to define the reminder interval: <b>1 = Hours</b>, <b>2 = Days</b> and <b>3 = Weeks</b>. The reminder fields are numbers. If you are using the hours interval, use a number from 1 to 24.</p>
		 * <p>Example 1: <b>emailFirstReminder:  1, emailFirstReminderInterval:  2</b> - results in 1st reminder being sent <b>1 Day before</b> the appointment time.</p>
		 * <p>Example 2: <b>emailSecondReminder: 3, emailSecondReminderInterval: 1</b> - results in 2nd reminder being sent <b>3 Hours before</b> the appointment time.</p>
		 * Put setup/v1/locations/{id}/appointmentreminders
		 * @param {string} id id of business location, defaults to primary business location
		 * @param {AppointmentRemindersInputModel} requestBody input model for reminders
		 * @return {LocationViewModel} Success
		 */
		SetupV1Locations_idAppointmentremindersPut(id: string, requestBody: AppointmentRemindersInputModel, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.put<LocationViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/appointmentreminders', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete All Location Images
		 * <p>Use this endpoint to <b>Delete All</b> location images from the location blob storage container. An option exists to use upper case for matching the subdirectory name. Legacy apps stored pics using upper case while the API uses lower case names.</p>
		 * Delete setup/v1/locations/{id}/deleteallimages
		 * @return {boolean} Success
		 */
		SetupV1Locations_idDeleteallimagesDeleteByUppercase(id: string, uppercase: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<boolean> {
			return this.http.delete<boolean>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/deleteallimages&uppercase=' + uppercase, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Location Image
		 * <p>Use this endpoint to <b>Delete</b> a previously uploaded location image. A valid business <b>location id</b> is required.</p>
		 * Delete setup/v1/locations/{id}/deleteimage
		 * @param {string} id id of business location, defaults to primary business location
		 * @return {LocationViewModel} Success
		 */
		SetupV1Locations_idDeleteimageDelete(id: string, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.delete<LocationViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/deleteimage', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Email Templates
		 * <p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>
		 * Get setup/v1/locations/{id}/email/templates
		 * @return {EmailTemplateListViewModel} Success
		 */
		SetupV1Locations_idEmailTemplatesGet(id: string, headersHandler?: () => HttpHeaders): Observable<EmailTemplateListViewModel> {
			return this.http.get<EmailTemplateListViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/email/templates', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Custom Template
		 * <p>Use this endpoint to a <b>Create</b> a Custom Email Template. You must convert the content to a base64 encoded string. Updates to the primary business location create company scoped custom templates. Updates to non-primary business locations create business location scoped custom templates. The master template cannot be updated with this endpoint.</p>
		 * <p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new email template that will be used instead. If you delete it, you are deleting the custom template you created and the original default template created by OnSched will be reactivated.</p>
		 * Post setup/v1/locations/{id}/email/templates
		 * @param {string} id id of business location, defaults to primary business location
		 * @param {EmailTemplateInputModel} requestBody Input model for email template
		 * @return {ContentResult} Success
		 */
		SetupV1Locations_idEmailTemplatesPost(id: string, requestBody: EmailTemplateInputModel, headersHandler?: () => HttpHeaders): Observable<ContentResult> {
			return this.http.post<ContentResult>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/email/templates', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Master Template Settings
		 * <p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Deleting a custom master email template will reactivate the original default OnSched template settings.</p>
		 * Delete setup/v1/locations/{id}/email/templates/master
		 * @param {string} id id of business location, defaults to primary business location
		 * @return {MasterEmailTemplateSettingsViewModel} Success
		 */
		SetupV1Locations_idEmailTemplatesMasterDelete(id: string, headersHandler?: () => HttpHeaders): Observable<MasterEmailTemplateSettingsViewModel> {
			return this.http.delete<MasterEmailTemplateSettingsViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/email/templates/master', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Master Template Settings
		 * <p>Use this endpoint to get <b>Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding panels and for changing color schemes. </p>
		 * Get setup/v1/locations/{id}/email/templates/master
		 * @param {string} id id of business location, defaults to primary business location
		 * @return {MasterEmailTemplateSettingsViewModel} Success
		 */
		SetupV1Locations_idEmailTemplatesMasterGet(id: string, headersHandler?: () => HttpHeaders): Observable<MasterEmailTemplateSettingsViewModel> {
			return this.http.get<MasterEmailTemplateSettingsViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/email/templates/master', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Master Template Settings
		 * <p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. A valid business <b>location id</b> is required. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates​/masterSettings</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
		 * <p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it, you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>
		 * Post setup/v1/locations/{id}/email/templates/master
		 * @param {string} id id of business location, defaults to primary business location
		 * @param {MasterTemplateSettingsInputModel} requestBody Input model for master email template settings
		 * @return {MasterEmailTemplateSettingsViewModel} Success
		 */
		SetupV1Locations_idEmailTemplatesMasterPost(id: string, requestBody: MasterTemplateSettingsInputModel, headersHandler?: () => HttpHeaders): Observable<MasterEmailTemplateSettingsViewModel> {
			return this.http.post<MasterEmailTemplateSettingsViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/email/templates/master', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Custom Template
		 * <p>Use this endpoint to <b>Delete</b> a Custom Email Template that was previously created. A valid business <b>location id</b> and email <b>templateName</b> are required. Deleting a custom email template will revert the template back to its default originally created by OnSched. Changes will be reflected in all business locations associated with this company.</p>
		 * <p>The email template endpoints work a little differently than most. When you delete you are deleting the custom template you created, and the original default Email Template created by OnSched will be reactivated.</p>
		 * Delete setup/v1/locations/{id}/email/templates/{templateName}
		 * @param {string} id id of business location, defaults to primary business location
		 * @param {string} templateName Name of the email template
		 * @return {ContentResult} Success
		 */
		SetupV1Locations_idEmailTemplates_templateNameDelete(id: string, templateName: string, headersHandler?: () => HttpHeaders): Observable<ContentResult> {
			return this.http.delete<ContentResult>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/email/templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Email Template
		 * <p>Use this endpoint to return the requested <b>Email Template</b>. The template is from the primary business location. If it wasn't customized the default template is returned. The response content is in html format. A valid <b>emailTemplate name</b> is required. Find template names by using the <i>GET ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>
		 * Get setup/v1/locations/{id}/email/templates/{templateName}
		 * @param {string} id id of business location
		 * @param {string} templateName name of the email template
		 * @return {ContentResult} Success
		 */
		SetupV1Locations_idEmailTemplates_templateNameGet(id: string, templateName: string, headersHandler?: () => HttpHeaders): Observable<ContentResult> {
			return this.http.get<ContentResult>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/email/templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Google Cal Access
		 * <p>Use this endpoint to <b>Delete</b> authorized access to all google calendar users in your organization. Upon deletion Google Calendars will no longer be synced for resources.</p>
		 * Delete setup/v1/locations/{id}/google/service/account
		 * @param {string} id id of business location, defaults to primary business location
		 * @return {void} Success
		 */
		SetupV1Locations_idGoogleServiceAccountDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/google/service/account', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Google Cal Access
		 * <p>Use this endpoint to <b>Authorize Access</b> to google calendar users in your organization. You must create/have a Google Service account as an admin of your GSuite, then save the credentials as a Json Key file. This <b>Json Key</b> and a valid business <b>location id</b> are required. </p>
		 * Post setup/v1/locations/{id}/google/service/account
		 * @param {string} id id of business location, defaults to primary business location
		 * @param {GoogleServiceAccountCreds} requestBody Generated Json Key file from Google
		 * @return {GoogleServiceAccountCreds} Success
		 */
		SetupV1Locations_idGoogleServiceAccountPost(id: string, requestBody: GoogleServiceAccountCreds, headersHandler?: () => HttpHeaders): Observable<GoogleServiceAccountCreds> {
			return this.http.post<GoogleServiceAccountCreds>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/google/service/account', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update Location Holidays
		 * <p>Use this endpoint to <b>Update</b> Business Holidays as Opened or Closed. A valid business <b>location id</b> is required. If not specified, the business location defaults to the primary business location.</p>
		 * <p>Holidays are automatically defined with the initial Post Location endpoint and are based on country code. Find your location holiday codes by using the: <i>GET /setup​/v1​/locations​/{id}</i> endpoint. Change your holidays to open or closed by passing in the <b>holidayId</b> along with the <b>closed</b> boolean value to change the status of a specific holiday. Pass in an <b>asterisk *</b> for the holidayId then all business holidays will be set as defined.</p>
		 * Put setup/v1/locations/{id}/holidays/{holidayId}/{closed}
		 * @return {LocationViewModel} Success
		 */
		SetupV1Locations_idHolidays_holidayId_closedPut(id: string, holidayId: string, closed: boolean, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.put<LocationViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/holidays/' + (holidayId == null ? '' : encodeURIComponent(holidayId)) + '/' + closed, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Recover Location
		 * <p>Use this endpoint to <b>Recover</b> a deleted business location. A valid business <b>location id</b> is required.</p>
		 * Put setup/v1/locations/{id}/recover
		 * @return {LocationViewModel} Success
		 */
		SetupV1Locations_idRecoverPut(id: string, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.put<LocationViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/recover', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Linked Services
		 * <p>Use this endpoint to <b>Delete All</b> location linked services from a business location. A valid business <b>location id</b> is required. </p>
		 * Delete setup/v1/locations/{id}/services
		 * @param {string} id id of business location, defaults to primary business location
		 * @return {LocationViewModel} Success
		 */
		SetupV1Locations_idServicesDelete(id: string, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.delete<LocationViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/services', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Location Linked Services
		 * <p>Use this endpoint to return a list of <b>Location Linked Services</b>. A valid business <b>location id</b> is required. By default, there are no location linked services attached to a location. Refer to the: <i>POST /setup​/v1​/locations​/{id}​/services</i> for details. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/locations/{id}/services
		 * @param {string} id id of business location, defaults to primary business location
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {BusinessServiceListViewModel} location service objects
		 */
		SetupV1Locations_idServicesGetByOffsetAndLimit(id: string, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BusinessServiceListViewModel> {
			return this.http.get<BusinessServiceListViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/services&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Linked Service
		 * <p>Use this endpoint to <b>Link Services</b> to a location object. A valid business <b>location id</b> is required. By default, there are <i>no services linked</i> to a location. </p>
		 * <p>Services are definable globally at the Company level and associated with the Primary Business Location, or at a Secondary Business Location. When accessing the Services endpoints, by default, API consumers are provided with a <b>combined</b> list of Services defined from both the Primary and Secondary Business Location.</p>
		 * <p>If necessary, the list of Service(s) provided can be cherry-picked/linked to <b>only include specific Service(s)</b> by using this endpoint. This allows for a subset of defined Services to be provided for a location.</p>
		 * <p>Supplying the list of services ids to cherry-pick/link to the location in the request body will explicitly define which Primary Location Services are offered by the specified business location.</p>
		 * Post setup/v1/locations/{id}/services
		 * @param {string} id id of business location, defaults to primary business location
		 * @param {Array<string>} requestBody array of valid service object id's
		 * @return {LocationViewModel} Success
		 */
		SetupV1Locations_idServicesPost(id: string, requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.post<LocationViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/services', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update Location Scope
		 * <p>Use this endpoint to <b>Update</b> a business locations online booking settings scope. A valid business <b>location id</b> is required.</p>
		 * <p>
		 * <b>settingsScope</b> values are <b>0 = company scope, 1 = business location scope</b>. To inherit the online settings defined in the primary business location, then use value = 0 for company scope. Otherwise, to override the settings for a specific location then use value = 1 for business location scope. <b>Note</b>: You cannot change the settings scope of the Primary Business Location.</p>
		 * Put setup/v1/locations/{id}/settings/scope/{settingsScope}
		 * @return {LocationViewModel} Success
		 */
		SetupV1Locations_idSettingsScope_settingsScopePut(id: string, settingsScope: string, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.put<LocationViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/settings/scope/' + (settingsScope == null ? '' : encodeURIComponent(settingsScope)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Upload Location Image
		 * <p>Use this endpoint to <b>Upload</b> an image to a location object. A valid business <b>location id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>
		 * Post setup/v1/locations/{id}/uploadimage
		 * @param {string} id id of business location, defaults to primary business location
		 * @param {ResourceImageInputModel} requestBody Input model for image upload
		 * @return {LocationViewModel} Success
		 */
		SetupV1Locations_idUploadimagePost(id: string, requestBody: ResourceImageInputModel, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.post<LocationViewModel>(this.baseUri + 'setup/v1/locations/' + (id == null ? '' : encodeURIComponent(id)) + '/uploadimage', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Resource Groups
		 * <p>Use this endpoint to <b>List Resource Groups</b> for the specified location. If not specified, the business location defaults to the primary business location. <b>Name</b> is a required field.</p>
		 * <p>Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/resourcegroups
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {boolean} deleted Filter results by deleted status
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {ResourceGroupListViewModel} Success
		 */
		SetupV1ResourcegroupsGetByLocationIdAndDeletedAndOffsetAndLimit(locationId: string | null | undefined, deleted: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResourceGroupListViewModel> {
			return this.http.get<ResourceGroupListViewModel>(this.baseUri + 'setup/v1/resourcegroups?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&deleted=' + deleted + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Resource Group
		 * <p>Use this endpoint to <b>Create</b> a resourceGroup object. Resource groups are used to categorize your resources.</p>
		 * Post setup/v1/resourcegroups
		 * @param {ResourceGroupInputModel} requestBody Resource input model
		 * @return {ResourceGroupViewModel} Success
		 */
		SetupV1ResourcegroupsPost(requestBody: ResourceGroupInputModel, headersHandler?: () => HttpHeaders): Observable<ResourceGroupViewModel> {
			return this.http.post<ResourceGroupViewModel>(this.baseUri + 'setup/v1/resourcegroups', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Resource Group
		 * <p>Use this endpoint to <b>Delete</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. The resource group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/resourcegroups​/{id}​/recover</i> endpoint.</p>
		 * Delete setup/v1/resourcegroups/{id}
		 * @param {string} id id of resourceGroup object
		 * @return {ResourceGroupViewModel} Success
		 */
		SetupV1Resourcegroups_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceGroupViewModel> {
			return this.http.delete<ResourceGroupViewModel>(this.baseUri + 'setup/v1/resourcegroups/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Resource Group
		 * <p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET setup/v1/resourceGroups</i> endpoint.</p>
		 * Get setup/v1/resourcegroups/{id}
		 * @param {string} id id of resourceGroup object
		 * @return {ResourceGroupViewModel} Success
		 */
		SetupV1Resourcegroups_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceGroupViewModel> {
			return this.http.get<ResourceGroupViewModel>(this.baseUri + 'setup/v1/resourcegroups/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Resource Group
		 * <p>Use this endpoint to <b>Update</b> a resourceGroup object. A valid <b>resourceGroup id</b> is required. </p>
		 * Put setup/v1/resourcegroups/{id}
		 * @param {string} id id of resourcGroup object
		 * @param {ResourceGroupUpdateModel} requestBody Resource Group Update Model
		 * @return {ResourceGroupViewModel} Success
		 */
		SetupV1Resourcegroups_idPut(id: string, requestBody: ResourceGroupUpdateModel, headersHandler?: () => HttpHeaders): Observable<ResourceGroupViewModel> {
			return this.http.put<ResourceGroupViewModel>(this.baseUri + 'setup/v1/resourcegroups/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Recover Resource Group
		 * <p>Use this endpoint to <b>Recover</b> a deleted resourceGroup object. A valid <b>resourceGroup id</b> is required.</p>
		 * Put setup/v1/resourcegroups/{id}/recover
		 * @param {string} id id of resourceGroup object
		 * @return {ResourceViewModel} Success
		 */
		SetupV1Resourcegroups_idRecoverPut(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.put<ResourceViewModel>(this.baseUri + 'setup/v1/resourcegroups/' + (id == null ? '' : encodeURIComponent(id)) + '/recover', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Resources
		 * <p>Use this endpoint to return a <b>List of Resources</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/resources
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {string} resourceGroupId Filter by group Id
		 * @param {string} email Filter by email address
		 * @param {string} name Search by name
		 * @param {boolean} deleted Show by deleted status, default is false
		 * @param {string} googleAuthReturnUrl Google calendar authorization return url
		 * @param {string} outlookAuthReturnUrl Outlook calendar authorization return url
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max is 100
		 * @return {ResourceListViewModel} resource object
		 */
		SetupV1ResourcesGetByLocationIdAndResourceGroupIdAndEmailAndNameAndDeletedAndGoogleAuthReturnUrlAndOutlookAuthReturnUrlAndOffsetAndLimit(locationId: string | null | undefined, resourceGroupId: string | null | undefined, email: string | null | undefined, name: string | null | undefined, deleted: boolean | null | undefined, googleAuthReturnUrl: string | null | undefined, outlookAuthReturnUrl: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResourceListViewModel> {
			return this.http.get<ResourceListViewModel>(this.baseUri + 'setup/v1/resources?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&resourceGroupId=' + (resourceGroupId == null ? '' : encodeURIComponent(resourceGroupId)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&deleted=' + deleted + '&googleAuthReturnUrl=' + (googleAuthReturnUrl == null ? '' : encodeURIComponent(googleAuthReturnUrl)) + '&outlookAuthReturnUrl=' + (outlookAuthReturnUrl == null ? '' : encodeURIComponent(outlookAuthReturnUrl)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Resource
		 * <p>Use this endpoint to <b>Create</b> a new resource.</p>
		 * <p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
		 * <p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
		 * <p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>
		 * Post setup/v1/resources
		 * @param {string} googleAuthReturnUrl Google calendar authorization return url
		 * @param {string} outlookAuthReturnUrl Outlook calendar authorization return url
		 * @param {ResourceInputModel} requestBody Resource input model
		 * @return {ResourceViewModel} Success
		 */
		SetupV1ResourcesPostByGoogleAuthReturnUrlAndOutlookAuthReturnUrl(googleAuthReturnUrl: string | null | undefined, outlookAuthReturnUrl: string | null | undefined, requestBody: ResourceInputModel, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.post<ResourceViewModel>(this.baseUri + 'setup/v1/resources?googleAuthReturnUrl=' + (googleAuthReturnUrl == null ? '' : encodeURIComponent(googleAuthReturnUrl)) + '&outlookAuthReturnUrl=' + (outlookAuthReturnUrl == null ? '' : encodeURIComponent(outlookAuthReturnUrl)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Allocation
		 * <p>Use this endpoint to <b>Delete</b> a Resource Allocation. A valid <b>resourceAllocation id</b> is required.</p>
		 * Delete setup/v1/resources/allocations/{id}
		 * @param {string} id id of resourceAllocation object
		 * @return {ResourceBlockViewModel} Success
		 */
		SetupV1ResourcesAllocations_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceBlockViewModel> {
			return this.http.delete<ResourceBlockViewModel>(this.baseUri + 'setup/v1/resources/allocations/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Allocation
		 * <p>Use this endpoint to return a <b>Resource Allocation</b>. A valid <b>resourceAllocation id</b> is required. </p>
		 * Get setup/v1/resources/allocations/{id}
		 * @param {string} id id of resourceAllocation object
		 * @return {ResourceAllocationViewModel} Success
		 */
		SetupV1ResourcesAllocations_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceAllocationViewModel> {
			return this.http.get<ResourceAllocationViewModel>(this.baseUri + 'setup/v1/resources/allocations/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Allocation
		 * <p>Use this endpoint to <b>Update</b> a resource allocation. A valid <b>resourceAllocation id</b> is required. Refer to the <i>POST /setup/v1/resources/{id}/allocations</i> endpoint for details.</p>
		 * Put setup/v1/resources/allocations/{id}
		 * @param {string} id id of resourceAllocation object
		 * @param {ResourceAllocationUpdateModel} requestBody Resource allocation update model
		 * @return {ResourceBlockViewModel} Success
		 */
		SetupV1ResourcesAllocations_idPut(id: string, requestBody: ResourceAllocationUpdateModel, headersHandler?: () => HttpHeaders): Observable<ResourceBlockViewModel> {
			return this.http.put<ResourceBlockViewModel>(this.baseUri + 'setup/v1/resources/allocations/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Block
		 * <p>Use this endpoint to <b>Delete</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>
		 * Delete setup/v1/resources/block/{id}
		 * @param {string} id id of resourceBlock object
		 * @return {ResourceBlockViewModel} Success
		 */
		SetupV1ResourcesBlock_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceBlockViewModel> {
			return this.http.delete<ResourceBlockViewModel>(this.baseUri + 'setup/v1/resources/block/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Block
		 * <p>Use this endpoint to <b>Update</b> a Resource Block. A valid <b>resourceBlock id</b> is required. Refer to the <i>POST ​/setup​/v1​/resources​/{id}​/block</i> endpoint for fieldnames and details.</p>
		 * Put setup/v1/resources/block/{id}
		 * @param {string} id id of resourceBlock object
		 * @param {ResourceBlockUpdateModel} requestBody Resource Block update model
		 * @return {ResourceBlockViewModel} Success
		 */
		SetupV1ResourcesBlock_idPut(id: string, requestBody: ResourceBlockUpdateModel, headersHandler?: () => HttpHeaders): Observable<ResourceBlockViewModel> {
			return this.http.put<ResourceBlockViewModel>(this.baseUri + 'setup/v1/resources/block/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Block
		 * <p>Use this endpoint to <b>Get</b> a Resource Block. A valid <b>resourceBlock id</b> is required.</p>
		 * Get setup/v1/resources/blocks/{id}
		 * @param {string} id id of resourceBlock object
		 * @return {ResourceBlockViewModel} Success
		 */
		SetupV1ResourcesBlocks_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceBlockViewModel> {
			return this.http.get<ResourceBlockViewModel>(this.baseUri + 'setup/v1/resources/blocks/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Resources Bulk
		 * <p>Use this endpoint to <b>Bulk Create</b> resources. Valid <b>resource ids</b> are required. The posted list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
		 * <p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
		 * <p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
		 * <p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>
		 * Post setup/v1/resources/bulk
		 * @param {string} googleAuthReturnUrl Google calendar authorization return url
		 * @param {string} outlookAuthReturnUrl Outlook calendar authorization return url
		 * @param {ResourcesInputModel} requestBody Resources input model
		 * @return {Array<ResourceViewModel>} Success
		 */
		SetupV1ResourcesBulkPostByGoogleAuthReturnUrlAndOutlookAuthReturnUrl(googleAuthReturnUrl: string | null | undefined, outlookAuthReturnUrl: string | null | undefined, requestBody: ResourcesInputModel, headersHandler?: () => HttpHeaders): Observable<Array<ResourceViewModel>> {
			return this.http.post<Array<ResourceViewModel>>(this.baseUri + 'setup/v1/resources/bulk?googleAuthReturnUrl=' + (googleAuthReturnUrl == null ? '' : encodeURIComponent(googleAuthReturnUrl)) + '&outlookAuthReturnUrl=' + (outlookAuthReturnUrl == null ? '' : encodeURIComponent(outlookAuthReturnUrl)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update Resources Bulk
		 * <p>Use this endpoint to <b>Bulk Update</b> resources. Valid <b>resource id's</b> are required. The list of resources cannot exceed 100 resource objects per transaction for performance purposes.</p>
		 * <p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
		 * <p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
		 * <p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>
		 * Put setup/v1/resources/bulk
		 * @param {string} googleAuthReturnUrl Google calendar authorization return url
		 * @param {string} outlookAuthReturnUrl Outlook calendar authorization return url
		 * @param {ResourcesUpdateModel} requestBody Resources update model
		 * @return {Array<ResourceViewModel>} Success
		 */
		SetupV1ResourcesBulkPutByGoogleAuthReturnUrlAndOutlookAuthReturnUrl(googleAuthReturnUrl: string | null | undefined, outlookAuthReturnUrl: string | null | undefined, requestBody: ResourcesUpdateModel, headersHandler?: () => HttpHeaders): Observable<Array<ResourceViewModel>> {
			return this.http.put<Array<ResourceViewModel>>(this.baseUri + 'setup/v1/resources/bulk?googleAuthReturnUrl=' + (googleAuthReturnUrl == null ? '' : encodeURIComponent(googleAuthReturnUrl)) + '&outlookAuthReturnUrl=' + (outlookAuthReturnUrl == null ? '' : encodeURIComponent(outlookAuthReturnUrl)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Time Zones
		 * <p>Use this endpoint to return a <b>List of Time Zones</b>.</p>
		 * Get setup/v1/resources/timezones
		 * @return {SystemTimezoneViewModel} Success
		 */
		SetupV1ResourcesTimezonesGet(headersHandler?: () => HttpHeaders): Observable<SystemTimezoneViewModel> {
			return this.http.get<SystemTimezoneViewModel>(this.baseUri + 'setup/v1/resources/timezones', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Resource
		 * <p>Use this endpoint to <b>Delete</b> a resource. The resource is not permanently deleted and can be recovered. A valid <b>resource id</b> is required.</p>
		 * Delete setup/v1/resources/{id}
		 * @param {string} id id of resource object
		 * @return {ResourceViewModel} Success
		 */
		SetupV1Resources_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.delete<ResourceViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Resource
		 * <p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the: <i>GET /setup/v1/resources</i> endpoint.</p>
		 * Get setup/v1/resources/{id}
		 * @param {string} id id of resource object
		 * @param {string} googleAuthReturnUrl Google calendar authorization return url
		 * @param {string} outlookAuthReturnUrl Outlook calendar authorization return url
		 * @return {ResourceViewModel} Success
		 */
		SetupV1Resources_idGetByGoogleAuthReturnUrlAndOutlookAuthReturnUrl(id: string, googleAuthReturnUrl: string | null | undefined, outlookAuthReturnUrl: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.get<ResourceViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '&googleAuthReturnUrl=' + (googleAuthReturnUrl == null ? '' : encodeURIComponent(googleAuthReturnUrl)) + '&outlookAuthReturnUrl=' + (outlookAuthReturnUrl == null ? '' : encodeURIComponent(outlookAuthReturnUrl)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Resource
		 * <p>Use this endpoint to <b>Update</b> a resource. A valid <b>resource id</b> is required.</p>
		 * <p>Required Fields: <b>Email Address</b> and <b>Name</b></p>
		 * <p>Providing a single or many serviceId(s) in the service array will result the resource explicitly being available to provide those services only. While passing in an empty array will result in all services being available to the resources. This includes all company and business scoped services. See the <i>POST ​/setup​/v1​/resources​/{id}​/services</i> endpoint for details about explicitly linking services.</p>
		 * <p>Set the resource availability type by using the <b>recurringAvailability</b> flag. Set recurringAvailability to <b>True</b> for <b>Weekly Availability</b> or <b>False</b> for <b>Resource Allocations</b>.</p>
		 * Put setup/v1/resources/{id}
		 * @param {string} id id of resource object
		 * @param {string} googleAuthReturnUrl Google calendar authorization return url
		 * @param {string} outlookAuthReturnUrl Outlook calendar authorization return url
		 * @param {ResourceUpdateModel} requestBody Resource Update Model
		 * @return {ResourceViewModel} Success
		 */
		SetupV1Resources_idPutByGoogleAuthReturnUrlAndOutlookAuthReturnUrl(id: string, googleAuthReturnUrl: string | null | undefined, outlookAuthReturnUrl: string | null | undefined, requestBody: ResourceUpdateModel, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.put<ResourceViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '&googleAuthReturnUrl=' + (googleAuthReturnUrl == null ? '' : encodeURIComponent(googleAuthReturnUrl)) + '&outlookAuthReturnUrl=' + (outlookAuthReturnUrl == null ? '' : encodeURIComponent(outlookAuthReturnUrl)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Resource Allocations
		 * <p>Use this endpoint to return a list of <b>Resource Allocations</b> for a specified resource. We recommend using allocations if a resource's schedule changes frequently from day to day or week to week. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/resources/{id}/allocations
		 * @param {string} id id of resource to list allocations for
		 * @param {Date} startDate yyyy-mm-dd, filter allocations on/after startDate
		 * @param {Date} endDate yyyy-mm-dd, filter on/before endDate
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {ResourceAllocationListViewModel} resource allocation objects
		 */
		SetupV1Resources_idAllocationsGetByStartDateAndEndDateAndOffsetAndLimit(id: string, startDate: Date | null | undefined, endDate: Date | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResourceAllocationListViewModel> {
			return this.http.get<ResourceAllocationListViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/allocations&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Allocation
		 * <p>Use this endpoint to <b>Create</b> a resource allocation for a resource. A valid <b>resource id</b> is required.</p>
		 * <p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Resource allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. They can repeat for a specific date range instance or set to repeat at a specified frequency.</p>
		 * <p>
		 * <b>Repeat object: (repeats = true)</b>
		 * </p>
		 * <p>The <b>frequency</b> can be set to a value of <b>D, W or M </b>for <b>Day, Week</b> or <b>Month</b> respectively.</p>
		 * <p>Use the <b>interval</b> property to specify the interval that the allocation repeats. For example, an interval of 2 for a weekly allocation means that the allocation will repeat every 2nd week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will repeat every 10 days. The interval property applies to all repeat frequencies.  <b>If using the repeat functionality an interval value is required</b>.</p>
		 * <p>
		 * <b>DAILY ALLOCATIONS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
		 * <p>
		 * <b>WEEKLY ALLOCATIONS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>. You must specify the <b>“weekdays”</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>.  For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the allocation date range.</p>
		 * <p>
		 * <b>MONTHLY ALLOCATIONS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly. <b>monthDay</b> is the day of the month you want allocated.  If monthDay=’15’ this means to allocate the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on.  For <b>monthType M</b>, monthDay value contains 2 digits:  day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
		 * <p>
		 * <b>Repeats will end on the date specified by the end date.</b>
		 * </p>
		 * Post setup/v1/resources/{id}/allocations
		 * @param {string} id id of resource object
		 * @return {ResourceBlockViewModel} Success
		 */
		SetupV1Resources_idAllocationsPost(id: string, requestBody: ResourceAllocationInputModel, headersHandler?: () => HttpHeaders): Observable<ResourceBlockViewModel> {
			return this.http.post<ResourceBlockViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/allocations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Weekly Availability
		 * <p>Use this endpoint to view the <b>Weekly Availability</b> for a resource. The displayed available times are represented in the resource's timezone. The resource timezone can be set to any world timezone. If not provided, by default it is set to the Business timezone.</p>
		 * Get setup/v1/resources/{id}/availability
		 * @param {string} id id of resource object
		 * @return {ResourceAvailabilityViewModel} Success
		 */
		SetupV1Resources_idAvailabilityGet(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceAvailabilityViewModel> {
			return this.http.get<ResourceAvailabilityViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/availability', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Weekly Availability
		 * <p>Use this endpoint to <b>Update</b> resource weekly availability. A valid <b>resource id</b> is required. The availability day entries are created when a resource object is created.</p>
		 * <p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
		 * <p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the resource. Resources can be set to any world timezone. </p>
		 * Put setup/v1/resources/{id}/availability
		 * @param {string} id id of resource object
		 * @param {AvailabilityInputModel} requestBody Resource Availability Input Model
		 * @return {ResourceAvailabilityViewModel} Success
		 */
		SetupV1Resources_idAvailabilityPut(id: string, requestBody: AvailabilityInputModel, headersHandler?: () => HttpHeaders): Observable<ResourceAvailabilityViewModel> {
			return this.http.put<ResourceAvailabilityViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/availability', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create Block
		 * <p>Use this endpoint to <b>Create</b> a Resource Block. A valid <b>resource id</b> is required.</p>
		 * <p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
		 * <p>Resource blocks can be set to specific time ranges or for the whole day. Use the <b>AllDay</b> setting to create an all-day block. <b>AllDay</b> will automatically set startTime to 0 and endTime to 2400.</p>
		 * <p>Resource blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>
		 * <p>
		 * <b>Repeat object: (repeats = true)</b>
		 * </p>
		 * <p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
		 * <p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>
		 * <p>
		 * <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
		 * <p>
		 * <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>
		 * <p>
		 * <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”. </p>
		 * <p>
		 * <b>Repeats will end on the date specified by the end date.</b>
		 * </p>
		 * Post setup/v1/resources/{id}/block
		 * @param {string} id id of resource object
		 * @return {ResourceBlockViewModel} Success
		 */
		SetupV1Resources_idBlockPost(id: string, requestBody: ResourceBlockInputModel, headersHandler?: () => HttpHeaders): Observable<ResourceBlockViewModel> {
			return this.http.post<ResourceBlockViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/block', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Resource Blocks
		 * <p>Use this endpoint to return a list of <b>Resource Blocks</b>. A valid <b>resource id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/resources/{id}/blocks
		 * @param {string} id id of resource to list blocks for
		 * @param {Date} startDate YYYY-MM-DD, filter blocks on/after startDate
		 * @param {Date} endDate YYYY-MM-DD, filter on/before endDate
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {ResourceBlockListViewModel} resource block object's
		 */
		SetupV1Resources_idBlocksGetByStartDateAndEndDateAndOffsetAndLimit(id: string, startDate: Date | null | undefined, endDate: Date | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResourceBlockListViewModel> {
			return this.http.get<ResourceBlockListViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/blocks&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Resource Google URL
		 * <p>Use this endpoint to return the <b>Resources Google Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Google Email Address</b> are required.</p>
		 * Get setup/v1/resources/{id}/calendar/auth/google/{googleEmailAddress}
		 * @param {string} id id of resource object
		 * @param {string} googleEmailAddress Email address of Google Calendar
		 * @param {string} googleAuthReturnUrl Google calendar authorization return url
		 * @return {CalendarAuthViewModel} Success
		 */
		SetupV1Resources_idCalendarAuthGoogle_googleEmailAddressGetByGoogleAuthReturnUrl(id: string, googleEmailAddress: string, googleAuthReturnUrl: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<CalendarAuthViewModel> {
			return this.http.get<CalendarAuthViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/calendar/auth/google/' + (googleEmailAddress == null ? '' : encodeURIComponent(googleEmailAddress)) + '&googleAuthReturnUrl=' + (googleAuthReturnUrl == null ? '' : encodeURIComponent(googleAuthReturnUrl)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Resource Outlook URL
		 * <p>Use this endpoint to return the <b>Resources Outlook Calendar Authorization URL</b>. A valid <b>resource id</b> and <b>Outlook Email Address</b> are required.</p>
		 * Get setup/v1/resources/{id}/calendar/auth/outlook/{outlookEmailAddress}
		 * @param {string} id id of resource object
		 * @param {string} outlookEmailAddress Email address of Outlook Calendar
		 * @param {string} outlookAuthReturnUrl Outlook calendar authorization return url
		 * @return {CalendarAuthViewModel} Success
		 */
		SetupV1Resources_idCalendarAuthOutlook_outlookEmailAddressGetByOutlookAuthReturnUrl(id: string, outlookEmailAddress: string, outlookAuthReturnUrl: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<CalendarAuthViewModel> {
			return this.http.get<CalendarAuthViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/calendar/auth/outlook/' + (outlookEmailAddress == null ? '' : encodeURIComponent(outlookEmailAddress)) + '&outlookAuthReturnUrl=' + (outlookAuthReturnUrl == null ? '' : encodeURIComponent(outlookAuthReturnUrl)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Resource Image
		 * <p>Use this endpoint to permanently <b>Delete</b> a previously uploaded resource image. A valid <b>resource id</b> is required.</p>
		 * Delete setup/v1/resources/{id}/deleteimage
		 * @param {string} id id of resource object
		 * @return {ResourceViewModel} Success
		 */
		SetupV1Resources_idDeleteimageDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.delete<ResourceViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/deleteimage', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Reassign Resource
		 * <p>Use this endpoint to <b>Reassign</b> appointments from one resource to another. If the startDate is not supplied, the default is today's date + 1 day; If the endDate is not supplied, all future appointments from the start date will be reassigned. If the calendar id is not supplied the default is the primary calendar of the location.</p>
		 * Put setup/v1/resources/{id}/reassign/appointments/{resourceId}
		 * @param {string} id id of the original resource
		 * @param {string} resourceId id of the target resource
		 * @param {Date} startDate YYYY-MM-DD, Appt range start date
		 * @param {Date} endDate YYYY-MM-DD, Appt range end date
		 * @param {string} calendarId CalendarId of calendar containing appointments
		 * @return {Array<AppointmentViewModel>} Success
		 */
		SetupV1Resources_idReassignAppointments_resourceIdPutByStartDateAndEndDateAndCalendarId(id: string, resourceId: string, startDate: Date | null | undefined, endDate: Date | null | undefined, calendarId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AppointmentViewModel>> {
			return this.http.put<Array<AppointmentViewModel>>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/reassign/appointments/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&calendarId=' + (calendarId == null ? '' : encodeURIComponent(calendarId)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Recover Resource
		 * <p>Use this endpoint to <b>Recover</b> a deleted resource. A valid <b>resource id</b> is required.</p>
		 * Put setup/v1/resources/{id}/recover
		 * @param {string} id id of resource object
		 * @param {string} googleAuthReturnUrl Google calendar authorization return url
		 * @param {string} outlookAuthReturnUrl Outlook calendar authorization return url
		 * @return {ResourceViewModel} Success
		 */
		SetupV1Resources_idRecoverPutByGoogleAuthReturnUrlAndOutlookAuthReturnUrl(id: string, googleAuthReturnUrl: string | null | undefined, outlookAuthReturnUrl: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.put<ResourceViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/recover&googleAuthReturnUrl=' + (googleAuthReturnUrl == null ? '' : encodeURIComponent(googleAuthReturnUrl)) + '&outlookAuthReturnUrl=' + (outlookAuthReturnUrl == null ? '' : encodeURIComponent(outlookAuthReturnUrl)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Linked Services
		 * <p>Use this endpoint to <b>Delete</b> linked services from a Resource, i.e. unlink the services. A valid <b>resource id</b> is required. Once deleted, all services become available to the resource.</p>
		 * Delete setup/v1/resources/{id}/services
		 * @param {string} id id of resource object
		 * @return {ResourceViewModel} Success
		 */
		SetupV1Resources_idServicesDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.delete<ResourceViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/services', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Linked Services
		 * <p>Use this endpoint to explicitly <b>Link Services</b> to a Resource. A valid <b>resource id</b> is required.</p>
		 * <p>
		 * <b>Note:</b> By default, the services array is empty which signifies that all services are provided by the resource. Linking services here will add to the linked service(s) array available to this resource. This will limit the services available to the resource.</p>
		 * <p>You cannot post services that already exist in the array, you can only add new ones. Use the <i>PUT ​/setup​/v1​/resources​/{id}​/services</i> endpoint to update the entire list.</p>
		 * Post setup/v1/resources/{id}/services
		 * @param {string} id id of resource object
		 * @param {Array<string>} requestBody Array of valid service object id's
		 * @return {ResourceViewModel} Success
		 */
		SetupV1Resources_idServicesPost(id: string, requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.post<ResourceViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/services', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update Linked Services
		 * <p>Use this endpoint to <b>Update</b> the linked services of a Resource. A valid <b>resource id</b> is required.</p>
		 * <p>Updating services with this endpoint will update the linked services available to the resource. Only those services will be available to the resource.</p>
		 * <p>
		 * <b>Note:</b> This is a destructive process, any existing linked services will be removed and replaced with the list of services supplied here. Provide the resources complete list of services when using this endpoint.</p>
		 * Put setup/v1/resources/{id}/services
		 * @param {string} id id of resource object
		 * @param {Array<string>} requestBody Array of valid service object id's
		 * @return {ResourceViewModel} Success
		 */
		SetupV1Resources_idServicesPut(id: string, requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.put<ResourceViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/services', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Upload Resource Image
		 * <p>Use this endpoint to <b>Upload</b> a resource image to the resource. A valid <b>resource id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>
		 * Post setup/v1/resources/{id}/uploadimage
		 * @param {string} id id of resource object
		 * @param {ResourceImageInputModel} requestBody Input model for image upload
		 * @return {ResourceViewModel} Success
		 */
		SetupV1Resources_idUploadimagePost(id: string, requestBody: ResourceImageInputModel, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.post<ResourceViewModel>(this.baseUri + 'setup/v1/resources/' + (id == null ? '' : encodeURIComponent(id)) + '/uploadimage', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Service Groups
		 * <p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If no business location is specified it will default to the Primary Business Location of the company. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>
		 * Get setup/v1/servicegroups
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {ServiceGroupListViewModel} Success
		 */
		SetupV1ServicegroupsGetByLocationIdAndOffsetAndLimit(locationId: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceGroupListViewModel> {
			return this.http.get<ServiceGroupListViewModel>(this.baseUri + 'setup/v1/servicegroups?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Service Group
		 * <p>Use this endpoint to <b>Create</b> a Service Group. If no locationId is specified in the body, the business location will default to the primary business location. Service groups are used to categorize services. Service groups are optional and only make sense if you have multiple services that will be easier read if categorized. Only the service group Type of 0 is supported by the API. It defaults to 0 if not supplied.</p>
		 * Post setup/v1/servicegroups
		 * @return {ServiceGroupViewModel} Success
		 */
		SetupV1ServicegroupsPost(requestBody: ServiceGroupInputModel, headersHandler?: () => HttpHeaders): Observable<ServiceGroupViewModel> {
			return this.http.post<ServiceGroupViewModel>(this.baseUri + 'setup/v1/servicegroups', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Service Group
		 * <p>Use this endpoint to <b>Delete</b> a Service Group object. A valid <b>serviceGroup id</b> is required. The service group is not permanently deleted and can be recovered by using the <i>PUT ​/setup​/v1​/servicegroups​/{id}​/recover</i> endpoint.</p>
		 * Delete setup/v1/servicegroups/{id}
		 * @param {number} id id of serviceGroup object
		 * @return {ServiceGroupViewModel} Success
		 */
		SetupV1Servicegroups_idDelete(id: number, headersHandler?: () => HttpHeaders): Observable<ServiceGroupViewModel> {
			return this.http.delete<ServiceGroupViewModel>(this.baseUri + 'setup/v1/servicegroups/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Service Group
		 * <p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find service group id's by using the <i>GET /setup/v1/serviceGroups</i> endpoint.</p>
		 * Get setup/v1/servicegroups/{id}
		 * @param {number} id id of serviceGroup object
		 * @return {ServiceGroupViewModel} Success
		 */
		SetupV1Servicegroups_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<ServiceGroupViewModel> {
			return this.http.get<ServiceGroupViewModel>(this.baseUri + 'setup/v1/servicegroups/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Service Group
		 * <p>Use this endpoint to <b>Update</b> a Service Group object. A valid <b>serviceGroup id</b> is required. </p>
		 * Put setup/v1/servicegroups/{id}
		 * @param {number} id id of serviceGroup object
		 * @return {ServiceGroupViewModel} Success
		 */
		SetupV1Servicegroups_idPut(id: number, requestBody: ServiceGroupInputModel, headersHandler?: () => HttpHeaders): Observable<ServiceGroupViewModel> {
			return this.http.put<ServiceGroupViewModel>(this.baseUri + 'setup/v1/servicegroups/' + id, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Recover Service Group
		 * <p>Use this endpoint to <b>Recover</b> a deleted Service Group. A valid <b>serviceGroup id</b> is required. </p>
		 * Put setup/v1/servicegroups/{id}/recover
		 * @param {number} id id of serviceGroup object
		 * @return {ServiceGroupViewModel} Success
		 */
		SetupV1Servicegroups_idRecoverPut(id: number, headersHandler?: () => HttpHeaders): Observable<ServiceGroupViewModel> {
			return this.http.put<ServiceGroupViewModel>(this.baseUri + 'setup/v1/servicegroups/' + id + '/recover', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Services
		 * <p>Use this endpoint to return a <b>List of Service</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/services
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {number} serviceGroupId Filter services by groupId
		 * @param {boolean} deleted Filter by deleted status
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {ServiceListViewModel} Success
		 */
		SetupV1ServicesGetByLocationIdAndServiceGroupIdAndDeletedAndOffsetAndLimit(locationId: string | null | undefined, serviceGroupId: number | null | undefined, deleted: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceListViewModel> {
			return this.http.get<ServiceListViewModel>(this.baseUri + 'setup/v1/services?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&serviceGroupId=' + serviceGroupId + '&deleted=' + deleted + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Service
		 * <p>Use this endpoint to <b>Create</b> a new service. If not specified, the business location defaults to the primary business location. Note: Posting a service to the Primary Business Location will scope as company scoped and make the service available to all locations. If you want a service to only be available from a specific location, include the business location id.</p>
		 * <p>Required fields: <b>Name</b> and <b>Duration</b></p>
		 * <p>The service <b>Type</b> is either, <b>1 = Appointment</b> or <b>2 = Event</b>. Default is 1 if not specified.</p>
		 * <p>For type = 1, Appointments - Create an availability entry for each weekday to provide the service for. <b>All days of the week must be provided when adding service availability.</b> Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. Start and End Times are entered in military format. e.g., 800 is 8:00am, 2230 is 10:30pm. If not provided, it defaults to the primary location business hours.</p>
		 * <p>We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0. If you require times in between specified hours to be unavailable, use the service block endpoint at: <i>POST ​/setup​/v1​/services​/{id}​/block</i>.</p>
		 * <p>For type = 2, Events - Create service allocations for their availability. Refer to the: <i>POST /setup​/v1​/services​/{id}​/allocations</i> to set up service allocations for the event.</p>
		 * <p>Options are available for customer selected durations, for details: <a href="https://docs.onsched.com/docs/services-overview#variable-duration">Variable Duration Overview</a></p>
		 * <p>Additional parameters include but are not limited to bookingLimit, maxCapacity and maxGroupSize. For details: <a href="https://docs.onsched.com/docs/service-max-capacity">Service Limits Overview</a></p>
		 * Post setup/v1/services
		 * @return {ServiceViewModel} Success
		 */
		SetupV1ServicesPost(requestBody: ServiceInputModel, headersHandler?: () => HttpHeaders): Observable<ServiceViewModel> {
			return this.http.post<ServiceViewModel>(this.baseUri + 'setup/v1/services', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Allocation
		 * <p>Use this endpoint to permanently <b>Delete</b> a service allocation. A valid <b>serviceAllocation id</b> is required.</p>
		 * Delete setup/v1/services/allocations/{id}
		 * @param {string} id id of serviceAllocation object
		 * @return {ServiceAllocationViewModel} Success
		 */
		SetupV1ServicesAllocations_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ServiceAllocationViewModel> {
			return this.http.delete<ServiceAllocationViewModel>(this.baseUri + 'setup/v1/services/allocations/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Allocation
		 * <p>Use this endpoint to <b>Get a Service Allocation</b>. A valid <b>serviceAllocation id</b> is required.</p>
		 * Get setup/v1/services/allocations/{id}
		 * @param {string} id id of serviceAllocation object
		 * @return {ServiceAllocationViewModel} Success
		 */
		SetupV1ServicesAllocations_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<ServiceAllocationViewModel> {
			return this.http.get<ServiceAllocationViewModel>(this.baseUri + 'setup/v1/services/allocations/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Allocation
		 * <p>Use this endpoint to <b>Update</b> a service allocation. A valid <b>serviceAllocation id</b> is required. Refer to the <i>POST /setup/v1/services/{id}/allocations</i> endpoint for fields names and details.</p>
		 * Put setup/v1/services/allocations/{id}
		 * @param {string} id id of serviceAllocation object
		 * @param {ServiceAllocationUpdateModel} requestBody Service allocation update model
		 * @return {ServiceAllocationViewModel} Success
		 */
		SetupV1ServicesAllocations_idPut(id: string, requestBody: ServiceAllocationUpdateModel, headersHandler?: () => HttpHeaders): Observable<ServiceAllocationViewModel> {
			return this.http.put<ServiceAllocationViewModel>(this.baseUri + 'setup/v1/services/allocations/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Block
		 * <p>Use this endpoint to permanently <b>Delete</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>
		 * Delete setup/v1/services/block/{id}
		 * @param {string} id id of serviceBlock object
		 * @return {ResourceBlockViewModel} Success
		 */
		SetupV1ServicesBlock_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceBlockViewModel> {
			return this.http.delete<ResourceBlockViewModel>(this.baseUri + 'setup/v1/services/block/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Block
		 * <p>Use this endpoint to <b>Update</b> a Service Block. A valid <b>serviceBlock id</b> is required.</p>
		 * Put setup/v1/services/block/{id}
		 * @param {string} id id of serviceBlock object
		 * @param {ServiceBlockUpdateModel} requestBody Service Block update model
		 * @return {ServiceBlockViewModel} Success
		 */
		SetupV1ServicesBlock_idPut(id: string, requestBody: ServiceBlockUpdateModel, headersHandler?: () => HttpHeaders): Observable<ServiceBlockViewModel> {
			return this.http.put<ServiceBlockViewModel>(this.baseUri + 'setup/v1/services/block/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Block
		 * <p>Use this endpoint to <b>Get a Service Block</b>. A valid <b>serviceBlock id</b> is required.</p>
		 * Get setup/v1/services/blocks/{id}
		 * @param {string} id id of serviceBlock object
		 * @return {ResourceBlockViewModel} Success
		 */
		SetupV1ServicesBlocks_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceBlockViewModel> {
			return this.http.get<ResourceBlockViewModel>(this.baseUri + 'setup/v1/services/blocks/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Link Service to Calendar
		 * <p>Use this endpoint to <b>Link a Service</b> to a calendar. </p>
		 * Post setup/v1/services/calendar
		 * @return {ServiceCalendarViewModel} Success
		 */
		SetupV1ServicesCalendarPost(requestBody: ServiceCalendarInputModel, headersHandler?: () => HttpHeaders): Observable<ServiceCalendarViewModel> {
			return this.http.post<ServiceCalendarViewModel>(this.baseUri + 'setup/v1/services/calendar', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Service Links
		 * <p>Use this endpoint to <b>Delete</b> service links from the calendar specified. A valid <b>calendar id</b> is required.</p>
		 * Delete setup/v1/services/calendar/{id}
		 * @param {string} id id of calender to delete service links from
		 * @return {ServiceCalendarViewModel} Success
		 */
		SetupV1ServicesCalendar_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ServiceCalendarViewModel> {
			return this.http.delete<ServiceCalendarViewModel>(this.baseUri + 'setup/v1/services/calendar/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Service
		 * <p>Use this endpoint to <b>Delete</b> a service object. A valid <b>service id</b> is required. The service is not permanently deleted and can be recovered by using the <i>PUT /setup​/v1​/services​/{id}​/recover</i> endpoint.</p>
		 * Delete setup/v1/services/{id}
		 * @param {string} id id of service object
		 * @return {ServiceViewModel} Success
		 */
		SetupV1Services_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ServiceViewModel> {
			return this.http.delete<ServiceViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Service
		 * <p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /setup/v1/services</i> endpoint.</p>
		 * Get setup/v1/services/{id}
		 * @param {number} id id of service object
		 * @return {ServiceViewModel} Success
		 */
		SetupV1Services_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<ServiceViewModel> {
			return this.http.get<ServiceViewModel>(this.baseUri + 'setup/v1/services/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Service
		 * <p>Use this endpoint to <b>Update</b> a service object. A valid <b>service id</b> is required.</p>
		 * Put setup/v1/services/{id}
		 * @return {ServiceViewModel} Success
		 */
		SetupV1Services_idPut(id: string, requestBody: ServiceUpdateModel, headersHandler?: () => HttpHeaders): Observable<ServiceViewModel> {
			return this.http.put<ServiceViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Service Allocations
		 * <p>Use this endpoint to return a <b>List of Service Allocations</b> for a specified service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b> where the events are offered on specific dates and times. Retrieve all allocations for a location by passing in 0 as the service id.</p>
		 * <p>The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/services/{id}/allocations
		 * @param {string} id id of  service to list allocations for, 0 for all
		 * @param {string} locationId The id of the location. Defaults to the primary location
		 * @param {string} resourceId The id of the resource to filter on
		 * @param {Date} startDate Format YYYY-MM-DD. Filter appointments by on/after startDate
		 * @param {Date} endDate Format YYYY-MM-DD. Filter appointments on/before endDate
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {ServiceAllocationListViewModel} service alloaction object
		 */
		SetupV1Services_idAllocationsGetByLocationIdAndResourceIdAndStartDateAndEndDateAndOffsetAndLimit(id: string, locationId: string | null | undefined, resourceId: string | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceAllocationListViewModel> {
			return this.http.get<ServiceAllocationListViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/allocations&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Allocation
		 * <p>Use this endpoint to <b>Create</b> a service allocation for a service. A valid <b>service id</b> is required. Service allocations are used for <b>Event type services only</b>. Service allocations allow you to specify the time(s) a service is available as opposed to using weekly availability which represents a weekly schedule, ie: Mon-Fri 9am-5pm.</p>
		 * <p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>. Service allocations can be set to specific time ranges or for the whole day by setting startTime=0 and endTime=2400. Service allocations can repeat for a specific date range instance or set to repeat at a specified frequency.</p>
		 * <p>
		 * <b>Repeat object: (repeats = true)</b>
		 * </p>
		 * <p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
		 * <p>Use the <b>interval</b> property to specify the interval that the allocation repeats. For example, an interval of 2 for a weekly allocation means that the allocation will repeat every 2nd week beginning at the day specified. A daily allocation with an interval of 10 means the allocation will repeat every 10 days. The interval property applies to all repeat frequencies.  <b>If using the repeat functionality an interval value is required</b>.</p>
		 * <p>
		 * <b>DAILY ALLOCATIONS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
		 * <p>
		 * <b>WEEKLY ALLOCATIONS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>. You must specify the <b>“weekdays”</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>.  For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the allocation date range.</p>
		 * <p>
		 * <b>MONTHLY ALLOCATIONS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly. <b>monthDay</b> is the day of the month you want allocated.  If monthDay=’15’ this means to allocate the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on.  For <b>monthType M</b>, monthDay value contains 2 digits:  day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
		 * <p>
		 * <b>Repeats will end on the date specified by the end date.</b>
		 * </p>
		 * Post setup/v1/services/{id}/allocations
		 * @param {string} id id of service object
		 * @return {ServiceAllocationViewModel} Success
		 */
		SetupV1Services_idAllocationsPost(id: string, requestBody: ServiceAllocationInputModel, headersHandler?: () => HttpHeaders): Observable<ServiceAllocationViewModel> {
			return this.http.post<ServiceAllocationViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/allocations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create Allocations Bulk
		 * <p>Use this endpoint to <b>Create</b> bulk service allocations. A valid <b>service id</b> is required. Use this endpoint only if you need to POST multiple service allocations in one transaction. For details refer to: <a href="POST ​/setup​/v1​/services​/{id}​/allocations">Post Service Allocation</a></p>
		 * Post setup/v1/services/{id}/allocations/bulk
		 * @param {string} id id of service object
		 * @return {Array<ServiceAllocationViewModel>} Success
		 */
		SetupV1Services_idAllocationsBulkPost(id: string, requestBody: ServiceAllocationsInputModel, headersHandler?: () => HttpHeaders): Observable<Array<ServiceAllocationViewModel>> {
			return this.http.post<Array<ServiceAllocationViewModel>>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/allocations/bulk', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Weekly Availability
		 * <p>Use this endpoint to return the <b>Weekly Service Availability</b> for an appointment service. A valid <b>service id</b> is required. Weekly availability is returned for services where the Type = 1. For event type services, where service Type = 2, refer to the <i>GET ​/setup​/v1​/services​/{id}​/allocations</i> endpoint.</p>
		 * Get setup/v1/services/{id}/availability
		 * @param {string} id id of service object
		 * @return {ServiceAvailabilityViewModel} Success
		 */
		SetupV1Services_idAvailabilityGet(id: string, headersHandler?: () => HttpHeaders): Observable<ServiceAvailabilityViewModel> {
			return this.http.get<ServiceAvailabilityViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/availability', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Weekly Availability
		 * <p>Use this endpoint to <b>Update</b> service weekly availability. A valid <b>service id</b> is required. The availability day entries are created when a service object is created.</p>
		 * <p>To update weekly availability hours, all days of the week must be provided. Days are defined as <b>sun, mon, tue, wed, thu, fri</b> and <b>sat</b>. The <b>startTime</b> and <b>endTime</b> fields are entered in <b>military format. e.g., 800 is 8:00am, 2230 is 10:30pm</b>. We support 24-hour availability, set startTime=0 and endTime=2400. To set a whole day as unavailable, set both the startTime and endTime to 0.</p>
		 * <p>If you require times in between specified hours to be unavailable, use the resource blocks endpoints. Times entered represent the timezone of the business location.</p>
		 * Put setup/v1/services/{id}/availability
		 * @param {string} id id of service object
		 * @param {AvailabilityInputModel} requestBody Service Availability Input Model
		 * @return {ServiceAvailabilityViewModel} Success
		 */
		SetupV1Services_idAvailabilityPut(id: string, requestBody: AvailabilityInputModel, headersHandler?: () => HttpHeaders): Observable<ServiceAvailabilityViewModel> {
			return this.http.put<ServiceAvailabilityViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/availability', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create Block
		 * <p>Use this endpoint to <b>Create</b> a Service Block. A valid <b>service id</b> is required.</p>
		 * <p>Required fields: <b>startDate, endDate, startTime, endTime</b> and <b>reason</b>.</p>
		 * <p>Service blocks can be set to specific time ranges or for the whole day. To block a whole day set startTime to 0 and endTime to 2400.</p>
		 * <p>Service blocks can be for a specific date range instance or set to repeat at a specified frequency. </p>
		 * <p>
		 * <b>Repeat object: (repeats = true)</b>
		 * </p>
		 * <p>The <b>frequency</b> can be set to a value of <b>D, W or M</b> for <b>Day, Week</b> or <b>Month</b> respectively.</p>
		 * <p>Use the <b>interval</b> property to specify the interval that the block repeats. For example, an interval of 2 for a weekly block means that the block will repeat every 2nd week beginning at the day specified. A daily block with an interval of 10 means the block will repeat every 10 days. The interval property applies to all repeat frequencies. <b>If using the repeat functionality an interval value is required</b>.</p>
		 * <p>
		 * <b>DAILY BLOCKS</b>: Will repeat for each day of the week for the date range specified for the interval specified.  An interval value of “1” repeats every day, and an interval value of “3” is every 3rd day.</p>
		 * <p>
		 * <b>WEEKLY BLOCKS</b>: Will repeat only on the specified days of the week for the date range specified. For weekly the <b>frequency</b> is required and should be set to <b>“W”</b>.  You must specify the <b>weekdays</b> parameter. Weekdays are expressed as a string of digits with each single digit in the string representing a day of the week. The possible values are <b>0,1,2,3,4,5,6</b> where <b>0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday</b>. For example, a weekly frequency with an interval of “1”, and an entry of weekdays = “24”, will repeat each week on Tuesday and Thursday for the duration of the block date range.</p>
		 * <p>
		 * <b>MONTHLY BLOCKS</b>: Will repeat either on the day of the month specified in the <b>monthDay</b> property or on the day of the week and week of the month specified by the <b>monthType</b> property.  In both cases <b>frequency</b> is required and should be set to <b>“M”</b>, monthly, <b>monthDay</b> is the day of the month you want blocked.  If monthDay=’15’ this means to block the 15th of every month in the date range requested. Using monthDay in conjunction with monthType addresses “day of the week and week of the month” scenario.  There are two possible values for monthType: <b>D for Day of Month</b> or <b>W for Week of Month.</b> For <b>monthType D</b>, monthDay value must be between 1 and 31. It is the day of the month to repeat on. For <b>monthType M</b>, monthDay value contains 2 digits: day of week (0-6), (0,1,2,3,4,5,6 where 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday) and week of month (1-5). 1 being the first week, 2 being the second. The third Thursday of the month is depicted as a monthType=”M” and monthDay=”43”.</p>
		 * <p>
		 * <b>Repeats will end on the date specified by the end date.</b>
		 * </p>
		 * Post setup/v1/services/{id}/block
		 * @param {string} id id of service object
		 * @return {ServiceBlockViewModel} Success
		 */
		SetupV1Services_idBlockPost(id: string, requestBody: ServiceBlockInputModel, headersHandler?: () => HttpHeaders): Observable<ServiceBlockViewModel> {
			return this.http.post<ServiceBlockViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/block', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Service Blocks
		 * <p>Use this endpoint to return a list of <b>Service Blocks</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/services/{id}/blocks
		 * @param {string} id id of service to list blocks for
		 * @param {Date} startDate Format YYYY-MM-DD. Filter blocks on/after startDate
		 * @param {Date} endDate Format YYYY-MM-DD. Filter on/before endDate
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @return {ServiceBlockListViewModel} service block object's
		 */
		SetupV1Services_idBlocksGetByStartDateAndEndDateAndOffsetAndLimit(id: string, startDate: Date | null | undefined, endDate: Date | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceBlockListViewModel> {
			return this.http.get<ServiceBlockListViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/blocks&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Linked Calendar
		 * <p>Use this endpoint to <b>Get the Linked Calendar</b> for the service requested. A valid <b>service id</b> is required. A service can only be linked to one calendar in a location.</p>
		 * Get setup/v1/services/{id}/calendar
		 * @param {string} id id of service object
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @return {ServiceCalendarViewModel} Success
		 */
		SetupV1Services_idCalendarGetByLocationId(id: string, locationId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceCalendarViewModel> {
			return this.http.get<ServiceCalendarViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/calendar&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Service Image
		 * <p>Use this endpoint to permanently <b>Delete</b> a previously uploaded service image. A valid <b>service id</b> is required.</p>
		 * Delete setup/v1/services/{id}/deleteimage
		 * @param {string} id id of service object
		 * @return {ServiceViewModel} Success
		 */
		SetupV1Services_idDeleteimageDelete(id: string, headersHandler?: () => HttpHeaders): Observable<ServiceViewModel> {
			return this.http.delete<ServiceViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/deleteimage', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Recover Service
		 * <p>Use this endpoint to <b>Recover</b> a deleted service object. A valid <b>service id</b> is required.</p>
		 * Put setup/v1/services/{id}/recover
		 * @return {ServiceViewModel} Success
		 */
		SetupV1Services_idRecoverPut(id: string, headersHandler?: () => HttpHeaders): Observable<ServiceViewModel> {
			return this.http.put<ServiceViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/recover', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Resources for Service
		 * <p>Use this endpoint to return a list of <b>Resources</b> that provide the requested service. A valid <b>service id</b> is required. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get setup/v1/services/{id}/resources
		 * @param {string} id id of service object
		 * @param {number} offset Starting row of page, default 0
		 * @param {number} limit Page limit default 20, max 100
		 * @param {string} googleAuthReturnUrl Google calendar authorization return url
		 * @param {string} outlookAuthReturnUrl Outlook calendar authorization return url
		 * @return {ResourceListViewModel} Success
		 */
		SetupV1Services_idResourcesGetByOffsetAndLimitAndGoogleAuthReturnUrlAndOutlookAuthReturnUrl(id: string, offset: number | null | undefined, limit: number | null | undefined, googleAuthReturnUrl: string | null | undefined, outlookAuthReturnUrl: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResourceListViewModel> {
			return this.http.get<ResourceListViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/resources&offset=' + offset + '&limit=' + limit + '&googleAuthReturnUrl=' + (googleAuthReturnUrl == null ? '' : encodeURIComponent(googleAuthReturnUrl)) + '&outlookAuthReturnUrl=' + (outlookAuthReturnUrl == null ? '' : encodeURIComponent(outlookAuthReturnUrl)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Upload Service Image
		 * <p>Use this endpoint to <b>Upload</b> an image to the service. A valid <b>service id</b> is required. You must convert the image to a <b>base64 encoded string</b> and pass that string as input along with your <b>filename</b>.</p>
		 * Post setup/v1/services/{id}/uploadimage
		 * @param {string} id id of service object
		 * @param {ServiceImageInputModel} requestBody Input model for image upload
		 * @return {ServiceViewModel} Success
		 */
		SetupV1Services_idUploadimagePost(id: string, requestBody: ServiceImageInputModel, headersHandler?: () => HttpHeaders): Observable<ServiceViewModel> {
			return this.http.post<ServiceViewModel>(this.baseUri + 'setup/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/uploadimage', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

