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

	export interface AppoinmentBookingFormsViewModel {
		bookingConfirmationPage?: string | null;
		bookingForm?: string | null;
	}
	export interface AppoinmentBookingFormsViewModelFormProperties {
		bookingConfirmationPage: FormControl<string | null | undefined>,
		bookingForm: FormControl<string | null | undefined>,
	}
	export function CreateAppoinmentBookingFormsViewModelFormGroup() {
		return new FormGroup<AppoinmentBookingFormsViewModelFormProperties>({
			bookingConfirmationPage: new FormControl<string | null | undefined>(undefined),
			bookingForm: new FormControl<string | null | undefined>(undefined),
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

	export interface AppointmentBookModel {
		appointmentBookingFields?: Array<BookingFieldItem>;
		customFields?: CustomFieldInputModel;
		customerBookingFields?: Array<BookingFieldItem>;
		customerMessage?: string | null;
		email?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		groupSize?: number | null;
		name?: string | null;
		notes?: string | null;
		phone?: string | null;
		phoneExt?: string | null;
		phoneType?: string | null;
	}
	export interface AppointmentBookModelFormProperties {
		customerMessage: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		groupSize: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		phoneExt: FormControl<string | null | undefined>,
		phoneType: FormControl<string | null | undefined>,
	}
	export function CreateAppointmentBookModelFormGroup() {
		return new FormGroup<AppointmentBookModelFormProperties>({
			customerMessage: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			groupSize: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			phoneExt: new FormControl<string | null | undefined>(undefined),
			phoneType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BookingFieldItem {
		name?: string | null;
		value?: string | null;
	}
	export interface BookingFieldItemFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateBookingFieldItemFormGroup() {
		return new FormGroup<BookingFieldItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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

	export interface AppointmentInitialModel {
		appointmentBookingFields?: Array<BookingFieldItem>;
		bookedBy?: string | null;
		bookingWindowId?: string | null;
		calendarId?: string | null;
		customFields?: CustomFieldInputModel;
		customerBookingFields?: Array<BookingFieldItem>;
		customerId?: string | null;
		customerMessage?: string | null;
		email?: string | null;
		endDateTime?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		groupSize?: number | null;
		location?: string | null;
		locationId?: string | null;
		name?: string | null;
		notes?: string | null;
		phone?: string | null;
		phoneType?: string | null;
		resourceGroupId?: string | null;
		resourceId?: string | null;
		resourceIds?: string | null;
		serviceAllocationId?: string | null;
		serviceId?: string | null;
		startDateTime?: Date | null;
		timezoneName?: string | null;
		travelAppointmentId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		travelTimeMins?: number | null;
	}
	export interface AppointmentInitialModelFormProperties {
		bookedBy: FormControl<string | null | undefined>,
		bookingWindowId: FormControl<string | null | undefined>,
		calendarId: FormControl<string | null | undefined>,
		customerId: FormControl<string | null | undefined>,
		customerMessage: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		endDateTime: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		groupSize: FormControl<number | null | undefined>,
		location: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		phoneType: FormControl<string | null | undefined>,
		resourceGroupId: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceIds: FormControl<string | null | undefined>,
		serviceAllocationId: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		startDateTime: FormControl<Date | null | undefined>,
		timezoneName: FormControl<string | null | undefined>,
		travelAppointmentId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		travelTimeMins: FormControl<number | null | undefined>,
	}
	export function CreateAppointmentInitialModelFormGroup() {
		return new FormGroup<AppointmentInitialModelFormProperties>({
			bookedBy: new FormControl<string | null | undefined>(undefined),
			bookingWindowId: new FormControl<string | null | undefined>(undefined),
			calendarId: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			customerMessage: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			groupSize: new FormControl<number | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			phoneType: new FormControl<string | null | undefined>(undefined),
			resourceGroupId: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceIds: new FormControl<string | null | undefined>(undefined),
			serviceAllocationId: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			timezoneName: new FormControl<string | null | undefined>(undefined),
			travelAppointmentId: new FormControl<string | null | undefined>(undefined),
			travelTimeMins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AppointmentInitialViewModel {
		appointmentBookingFields?: Array<BookingFieldViewModel>;
		auditTrail?: Array<AppointmentAuditViewModel>;
		bookedBy?: string | null;
		bookingForms?: AppoinmentBookingFormsViewModel;
		businessName?: string | null;
		calendarId?: string | null;
		confirmationNumber?: string | null;
		confirmed?: boolean | null;
		createDate?: string | null;
		customFields?: {[id: string]: CustomFieldViewModel };
		customerBookingFields?: Array<BookingFieldViewModel>;
		customerId?: string | null;
		customerMessage?: string | null;
		customers?: Array<AppointmentCustomerViewModel>;
		date?: string | null;
		dateInternational?: string | null;
		downloadIcsUrl?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration?: number | null;
		email?: string | null;
		emailConfirmationSent?: string | null;
		emailReminderSent?: string | null;
		endDateTime?: string | null;
		firstname?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timezone?: number | null;
		timezoneIana?: string | null;
		timezoneId?: string | null;
	}
	export interface AppointmentInitialViewModelFormProperties {
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration: FormControl<number | null | undefined>,
		email: FormControl<string | null | undefined>,
		emailConfirmationSent: FormControl<string | null | undefined>,
		emailReminderSent: FormControl<string | null | undefined>,
		endDateTime: FormControl<string | null | undefined>,
		firstname: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timezone: FormControl<number | null | undefined>,
		timezoneIana: FormControl<string | null | undefined>,
		timezoneId: FormControl<string | null | undefined>,
	}
	export function CreateAppointmentInitialViewModelFormGroup() {
		return new FormGroup<AppointmentInitialViewModelFormProperties>({
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

	export interface BookingFieldViewModel {
		businessId?: string | null;
		companyId?: string | null;
		fieldLabel?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		fieldLength?: number | null;
		fieldListItems?: Array<BookingFieldListItemViewModel>;
		fieldName?: string | null;
		fieldRequired?: boolean | null;
		fieldType?: string | null;
		id?: string | null;
		leadQuestion?: boolean | null;

		/** Type: double */
		leadQuestionWeight?: number | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sortKey?: number | null;
	}
	export interface BookingFieldViewModelFormProperties {
		businessId: FormControl<string | null | undefined>,
		companyId: FormControl<string | null | undefined>,
		fieldLabel: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		fieldLength: FormControl<number | null | undefined>,
		fieldName: FormControl<string | null | undefined>,
		fieldRequired: FormControl<boolean | null | undefined>,
		fieldType: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		leadQuestion: FormControl<boolean | null | undefined>,

		/** Type: double */
		leadQuestionWeight: FormControl<number | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sortKey: FormControl<number | null | undefined>,
	}
	export function CreateBookingFieldViewModelFormGroup() {
		return new FormGroup<BookingFieldViewModelFormProperties>({
			businessId: new FormControl<string | null | undefined>(undefined),
			companyId: new FormControl<string | null | undefined>(undefined),
			fieldLabel: new FormControl<string | null | undefined>(undefined),
			fieldLength: new FormControl<number | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
			fieldRequired: new FormControl<boolean | null | undefined>(undefined),
			fieldType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			leadQuestion: new FormControl<boolean | null | undefined>(undefined),
			leadQuestionWeight: new FormControl<number | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			sortKey: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BookingFieldListItemViewModel {
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		leadAnswerScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		leadRoutingEntityId?: number | null;
		leadRoutingEntityType?: string | null;
		name?: string | null;
		object?: string | null;
		value?: string | null;
	}
	export interface BookingFieldListItemViewModelFormProperties {
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		leadAnswerScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		leadRoutingEntityId: FormControl<number | null | undefined>,
		leadRoutingEntityType: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateBookingFieldListItemViewModelFormGroup() {
		return new FormGroup<BookingFieldListItemViewModelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			leadAnswerScore: new FormControl<number | null | undefined>(undefined),
			leadRoutingEntityId: new FormControl<number | null | undefined>(undefined),
			leadRoutingEntityType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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

	export interface AppointmentListViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		data?: Array<AppointmentViewModel>;
		hasMore?: boolean | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
		url?: string | null;
	}
	export interface AppointmentListViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration?: number | null;
		email?: string | null;
		emailConfirmationSent?: string | null;
		emailReminderSent?: string | null;
		endDateTime?: string | null;
		firstname?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration: FormControl<number | null | undefined>,
		email: FormControl<string | null | undefined>,
		emailConfirmationSent: FormControl<string | null | undefined>,
		emailReminderSent: FormControl<string | null | undefined>,
		endDateTime: FormControl<string | null | undefined>,
		firstname: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface AppointmentNoShowModel {
	}
	export interface AppointmentNoShowModelFormProperties {
	}
	export function CreateAppointmentNoShowModelFormGroup() {
		return new FormGroup<AppointmentNoShowModelFormProperties>({
		});

	}

	export interface AppointmentReminderViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		emailFirstReminder?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		emailFirstReminderInterval?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		emailSecondReminder?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		emailSecondReminderInterval?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		smsFirstReminder?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		smsFirstReminderInterval?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		smsSecondReminder?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		smsSecondReminderInterval?: number | null;
	}
	export interface AppointmentReminderViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		emailFirstReminder: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		emailFirstReminderInterval: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		emailSecondReminder: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		emailSecondReminderInterval: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		smsFirstReminder: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		smsFirstReminderInterval: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		smsSecondReminder: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface AppointmentRescheduleModel {
		endDateTime?: Date | null;
		resourceId?: string | null;
		resourceIds?: string | null;
		serviceId?: string | null;
		startDateTime?: Date | null;
		travelAppointmentId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		travelTimeMins?: number | null;
	}
	export interface AppointmentRescheduleModelFormProperties {
		endDateTime: FormControl<Date | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceIds: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		startDateTime: FormControl<Date | null | undefined>,
		travelAppointmentId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		travelTimeMins: FormControl<number | null | undefined>,
	}
	export function CreateAppointmentRescheduleModelFormGroup() {
		return new FormGroup<AppointmentRescheduleModelFormProperties>({
			endDateTime: new FormControl<Date | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceIds: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<Date | null | undefined>(undefined),
			travelAppointmentId: new FormControl<string | null | undefined>(undefined),
			travelTimeMins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AppointmentReserveModel {
		appointmentBookingFields?: Array<BookingFieldItem>;
		customFields?: CustomFieldInputModel;
		customerBookingFields?: Array<BookingFieldItem>;
		customerMessage?: string | null;
		email?: string | null;
		name?: string | null;
		notes?: string | null;
		phone?: string | null;
		phoneExt?: string | null;
		phoneType?: string | null;
	}
	export interface AppointmentReserveModelFormProperties {
		customerMessage: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		phoneExt: FormControl<string | null | undefined>,
		phoneType: FormControl<string | null | undefined>,
	}
	export function CreateAppointmentReserveModelFormGroup() {
		return new FormGroup<AppointmentReserveModelFormProperties>({
			customerMessage: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			phoneExt: new FormControl<string | null | undefined>(undefined),
			phoneType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AvailabilityDayViewModel {
		availableDays?: Array<AvailableDayViewModel>;
		object?: string | null;
		resourceDescription?: string | null;
		resourceId?: string | null;
		resourceName?: string | null;
		serviceDescription?: string | null;
		serviceId?: string | null;
		serviceName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tzRequested?: number | null;
		url?: string | null;
	}
	export interface AvailabilityDayViewModelFormProperties {
		object: FormControl<string | null | undefined>,
		resourceDescription: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		serviceDescription: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tzRequested: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityDayViewModelFormGroup() {
		return new FormGroup<AvailabilityDayViewModelFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			resourceDescription: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			serviceDescription: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			tzRequested: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AvailableDayViewModel {
		available?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingLimit?: number | null;
		closed?: boolean | null;
		date?: string | null;
		object?: string | null;
		reason?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		reasonCode?: number | null;
	}
	export interface AvailableDayViewModelFormProperties {
		available: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingLimit: FormControl<number | null | undefined>,
		closed: FormControl<boolean | null | undefined>,
		date: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		reasonCode: FormControl<number | null | undefined>,
	}
	export function CreateAvailableDayViewModelFormGroup() {
		return new FormGroup<AvailableDayViewModelFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			bookingCount: new FormControl<number | null | undefined>(undefined),
			bookingLimit: new FormControl<number | null | undefined>(undefined),
			closed: new FormControl<boolean | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AvailabilityViewModel {
		availableDays?: Array<AvailableDayViewModel>;
		availableTimes?: Array<AvailableTimeViewModel>;
		businessName?: string | null;
		calendarId?: string | null;
		calendarResourceGroupId?: string | null;
		endDate?: string | null;
		firstAvailableDate?: string | null;
		locationId?: string | null;
		object?: string | null;
		resourceDescription?: string | null;
		resourceId?: string | null;
		resourceIds?: string | null;
		resourceName?: string | null;
		serviceDescription?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		serviceDuration?: number | null;
		serviceId?: string | null;
		serviceName?: string | null;
		startDate?: string | null;

		/** Returns the Timezone Name in IANA format if a TimezoneName was passed into an Availability call; otherwise this property is hidden */
		timezoneName?: string | null;

		/**
		 * Returns the timezone offset if a tzOffset was supplied into an Availability call; null if a TimezoneName was passed; otherwise the Business timezone offset is returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tzRequested?: number | null;
		url?: string | null;
	}
	export interface AvailabilityViewModelFormProperties {
		businessName: FormControl<string | null | undefined>,
		calendarId: FormControl<string | null | undefined>,
		calendarResourceGroupId: FormControl<string | null | undefined>,
		endDate: FormControl<string | null | undefined>,
		firstAvailableDate: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		resourceDescription: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceIds: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		serviceDescription: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		serviceDuration: FormControl<number | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		startDate: FormControl<string | null | undefined>,

		/** Returns the Timezone Name in IANA format if a TimezoneName was passed into an Availability call; otherwise this property is hidden */
		timezoneName: FormControl<string | null | undefined>,

		/**
		 * Returns the timezone offset if a tzOffset was supplied into an Availability call; null if a TimezoneName was passed; otherwise the Business timezone offset is returned
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tzRequested: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityViewModelFormGroup() {
		return new FormGroup<AvailabilityViewModelFormProperties>({
			businessName: new FormControl<string | null | undefined>(undefined),
			calendarId: new FormControl<string | null | undefined>(undefined),
			calendarResourceGroupId: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			firstAvailableDate: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			resourceDescription: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceIds: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			serviceDescription: new FormControl<string | null | undefined>(undefined),
			serviceDuration: new FormControl<number | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			timezoneName: new FormControl<string | null | undefined>(undefined),
			tzRequested: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AvailableTimeViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		allowableBookings?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		allowableCapacity?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		availableBookings?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		availableCapacity?: number | null;
		date?: string | null;
		displayTime?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration?: number | null;
		endDateTime?: string | null;
		resourceId?: string | null;
		startDateTime?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time?: number | null;
		travelAppointmentId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		travelTimeMins?: number | null;
	}
	export interface AvailableTimeViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		allowableBookings: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		allowableCapacity: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		availableBookings: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		availableCapacity: FormControl<number | null | undefined>,
		date: FormControl<string | null | undefined>,
		displayTime: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration: FormControl<number | null | undefined>,
		endDateTime: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		startDateTime: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time: FormControl<number | null | undefined>,
		travelAppointmentId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		travelTimeMins: FormControl<number | null | undefined>,
	}
	export function CreateAvailableTimeViewModelFormGroup() {
		return new FormGroup<AvailableTimeViewModelFormProperties>({
			allowableBookings: new FormControl<number | null | undefined>(undefined),
			allowableCapacity: new FormControl<number | null | undefined>(undefined),
			availableBookings: new FormControl<number | null | undefined>(undefined),
			availableCapacity: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			displayTime: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			endDateTime: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			travelAppointmentId: new FormControl<string | null | undefined>(undefined),
			travelTimeMins: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BookingFieldListViewModel {
		bookingFields?: Array<BookingFieldViewModel>;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
	}
	export interface BookingFieldListViewModelFormProperties {
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateBookingFieldListViewModelFormGroup() {
		return new FormGroup<BookingFieldListViewModelFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		publicHolidayId?: number | null;
	}
	export interface BusinessHolidayViewModelFormProperties {
		businessClosed: FormControl<boolean | null | undefined>,
		holidayName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface BusinessHourViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endTime?: number | null;
		is24Hours?: boolean | null;
		isOpen?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startTime?: number | null;
	}
	export interface BusinessHourViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endTime: FormControl<number | null | undefined>,
		is24Hours: FormControl<boolean | null | undefined>,
		isOpen: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface BusinessServiceViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		serviceId?: number | null;
		serviceName?: string | null;
	}
	export interface BusinessServiceViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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


	/** View model for country objects */
	export interface CountryViewModel {
		code?: string | null;
		name?: string | null;
		object?: string | null;
	}

	/** View model for country objects */
	export interface CountryViewModelFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateCountryViewModelFormGroup() {
		return new FormGroup<CountryViewModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomFieldDefinitionListViewModel {
		customFields?: Array<CustomFieldDefinitionViewModel>;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
	}
	export interface CustomFieldDefinitionListViewModelFormProperties {
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateCustomFieldDefinitionListViewModelFormGroup() {
		return new FormGroup<CustomFieldDefinitionListViewModelFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomFieldDefinitionViewModel {
		fieldKey?: string | null;
		fieldLabel?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		fieldLength?: number | null;
		fieldListItems?: Array<CustomFieldListDefinitionViewModel>;
		fieldName?: string | null;
		fieldPublic?: boolean | null;
		fieldRequired?: boolean | null;
		fieldType?: string | null;
		id?: string | null;
		leadQuestion?: boolean | null;

		/** Type: double */
		leadQuestionWeight?: number | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sortKey?: number | null;
	}
	export interface CustomFieldDefinitionViewModelFormProperties {
		fieldKey: FormControl<string | null | undefined>,
		fieldLabel: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		fieldLength: FormControl<number | null | undefined>,
		fieldName: FormControl<string | null | undefined>,
		fieldPublic: FormControl<boolean | null | undefined>,
		fieldRequired: FormControl<boolean | null | undefined>,
		fieldType: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		leadQuestion: FormControl<boolean | null | undefined>,

		/** Type: double */
		leadQuestionWeight: FormControl<number | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sortKey: FormControl<number | null | undefined>,
	}
	export function CreateCustomFieldDefinitionViewModelFormGroup() {
		return new FormGroup<CustomFieldDefinitionViewModelFormProperties>({
			fieldKey: new FormControl<string | null | undefined>(undefined),
			fieldLabel: new FormControl<string | null | undefined>(undefined),
			fieldLength: new FormControl<number | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
			fieldPublic: new FormControl<boolean | null | undefined>(undefined),
			fieldRequired: new FormControl<boolean | null | undefined>(undefined),
			fieldType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			leadQuestion: new FormControl<boolean | null | undefined>(undefined),
			leadQuestionWeight: new FormControl<number | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			sortKey: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomFieldListDefinitionViewModel {
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		leadAnswerScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		leadRoutingEntityId?: number | null;
		leadRoutingEntityType?: string | null;
		name?: string | null;
		object?: string | null;
		value?: string | null;
	}
	export interface CustomFieldListDefinitionViewModelFormProperties {
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		leadAnswerScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		leadRoutingEntityId: FormControl<number | null | undefined>,
		leadRoutingEntityType: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomFieldListDefinitionViewModelFormGroup() {
		return new FormGroup<CustomFieldListDefinitionViewModelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			leadAnswerScore: new FormControl<number | null | undefined>(undefined),
			leadRoutingEntityId: new FormControl<number | null | undefined>(undefined),
			leadRoutingEntityType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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

	export interface CustomerInputModel {
		address?: AddressInputModel;
		contact?: ContactInputModel;
		customFields?: CustomFieldInputModel;
		email?: string | null;
		firstname?: string | null;
		lastname?: string | null;
		locationId?: string | null;
		name?: string | null;

		/** 0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS */
		notificationType?: string | null;
		sendLeadNotification?: boolean | null;
		stripeCustomerId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		type?: number | null;
	}
	export interface CustomerInputModelFormProperties {
		email: FormControl<string | null | undefined>,
		firstname: FormControl<string | null | undefined>,
		lastname: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** 0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS */
		notificationType: FormControl<string | null | undefined>,
		sendLeadNotification: FormControl<boolean | null | undefined>,
		stripeCustomerId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		type: FormControl<number | null | undefined>,
	}
	export function CreateCustomerInputModelFormGroup() {
		return new FormGroup<CustomerInputModelFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined),
			lastname: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationType: new FormControl<string | null | undefined>(undefined),
			sendLeadNotification: new FormControl<boolean | null | undefined>(undefined),
			stripeCustomerId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CustomerListViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		data?: Array<CustomerViewModel>;
		hasMore?: boolean | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
		url?: string | null;
	}
	export interface CustomerListViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface CustomerUpdateModel {
		address?: AddressUpdateModel;
		contact?: ContactUpdateModel;
		customFields?: CustomFieldUpdateModel;
		email?: string | null;
		firstname?: string | null;
		lastname?: string | null;
		locationId?: string | null;
		name?: string | null;

		/** 0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS */
		notificationType?: string | null;
		stripeCustomerId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		type?: number | null;
	}
	export interface CustomerUpdateModelFormProperties {
		email: FormControl<string | null | undefined>,
		firstname: FormControl<string | null | undefined>,
		lastname: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** 0 = default(Email), 1 = Email, 2 = SMS, 3 = Email and SMS */
		notificationType: FormControl<string | null | undefined>,
		stripeCustomerId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		type: FormControl<number | null | undefined>,
	}
	export function CreateCustomerUpdateModelFormGroup() {
		return new FormGroup<CustomerUpdateModelFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstname: new FormControl<string | null | undefined>(undefined),
			lastname: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationType: new FormControl<string | null | undefined>(undefined),
			stripeCustomerId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LocationListViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		data?: Array<LocationViewModel>;
		hasMore?: boolean | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
		url?: string | null;
	}
	export interface LocationListViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: double */
		latitude?: number | null;
		logo?: string | null;

		/** Type: double */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: double */
		latitude: FormControl<number | null | undefined>,
		logo: FormControl<string | null | undefined>,

		/** Type: double */
		longitude: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		primaryBusiness: FormControl<boolean | null | undefined>,
		primaryCalendarId: FormControl<string | null | undefined>,
		regionId: FormControl<string | null | undefined>,
		timezoneIana: FormControl<string | null | undefined>,
		timezoneId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		availabilityForm?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookAheadUnit?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookAheadValue?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookInAdvance?: number | null;
		bookWithAccount?: boolean | null;
		bookingConfirmationMessage?: string | null;
		bookingMessage?: string | null;
		bookingPolicy?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingTimerMins?: number | null;
		businessId?: string | null;
		companyId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		customerBookingsPerDay?: number | null;
		customerVerification?: boolean | null;
		defaultService?: boolean | null;
		defaultToCustomerTimezone?: boolean | null;
		disableAuthorization?: boolean | null;
		enableWorldTimezones?: boolean | null;
		enabled?: boolean | null;
		familyMembersEnabled?: boolean | null;
		firstAvailable?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		formFlow?: number | null;
		hideBreadCrumbNav?: boolean | null;
		hideContinueBooking?: boolean | null;
		hideLocationNav?: boolean | null;
		hideNavBar?: boolean | null;
		hideServiceGroupsNav?: boolean | null;
		hideServicesNav?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lateCancelAction?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lateCancelHours?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lateRescheduleAction?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		availabilityForm: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookAheadUnit: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookAheadValue: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookInAdvance: FormControl<number | null | undefined>,
		bookWithAccount: FormControl<boolean | null | undefined>,
		bookingConfirmationMessage: FormControl<string | null | undefined>,
		bookingMessage: FormControl<string | null | undefined>,
		bookingPolicy: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingTimerMins: FormControl<number | null | undefined>,
		businessId: FormControl<string | null | undefined>,
		companyId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		customerBookingsPerDay: FormControl<number | null | undefined>,
		customerVerification: FormControl<boolean | null | undefined>,
		defaultService: FormControl<boolean | null | undefined>,
		defaultToCustomerTimezone: FormControl<boolean | null | undefined>,
		disableAuthorization: FormControl<boolean | null | undefined>,
		enableWorldTimezones: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		familyMembersEnabled: FormControl<boolean | null | undefined>,
		firstAvailable: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		formFlow: FormControl<number | null | undefined>,
		hideBreadCrumbNav: FormControl<boolean | null | undefined>,
		hideContinueBooking: FormControl<boolean | null | undefined>,
		hideLocationNav: FormControl<boolean | null | undefined>,
		hideNavBar: FormControl<boolean | null | undefined>,
		hideServiceGroupsNav: FormControl<boolean | null | undefined>,
		hideServicesNav: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lateCancelAction: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lateCancelHours: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lateRescheduleAction: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface RepeatViewModel {
		frequency?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		interval?: number | null;
		monthDay?: string | null;
		monthType?: string | null;
		weekdays?: string | null;
	}
	export interface RepeatViewModelFormProperties {
		frequency: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface ResourceGroupListViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		data?: Array<ResourceGroupViewModel>;
		hasMore?: boolean | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
		url?: string | null;
	}
	export interface ResourceGroupListViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface ResourceHourViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endTime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startTime?: number | null;
	}
	export interface ResourceHourViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endTime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface ResourceListViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		data?: Array<ResourceViewModel>;
		hasMore?: boolean | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
		url?: string | null;
	}
	export interface ResourceListViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingNotification?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		calendarAvailability?: number | null;
		contact?: ContactViewModel;
		customFields?: CustomFieldInputModel;
		deletedStatus?: boolean | null;
		deletedTime?: Date | null;
		description?: string | null;
		effectiveDate?: Date | null;
		email?: string | null;
		gender?: string | null;
		googleCalendarId?: string | null;
		groupId?: string | null;

		/** Type: double */
		hourly?: number | null;
		id?: string | null;
		ignoreBusinessHours?: boolean | null;
		imageUrl?: string | null;
		locationId?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		notificationType?: number | null;
		object?: string | null;
		outlookCalendarId?: string | null;
		recurringAvailability?: boolean | null;
		services?: Array<ResourceServiceViewModel>;
		skypeName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sortKey?: number | null;
		timezoneIana?: string | null;
		timezoneId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timezoneOffset?: number | null;
	}
	export interface ResourceViewModelFormProperties {
		bioLink: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingNotification: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		calendarAvailability: FormControl<number | null | undefined>,
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		effectiveDate: FormControl<Date | null | undefined>,
		email: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		googleCalendarId: FormControl<string | null | undefined>,
		groupId: FormControl<string | null | undefined>,

		/** Type: double */
		hourly: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		ignoreBusinessHours: FormControl<boolean | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		notificationType: FormControl<number | null | undefined>,
		object: FormControl<string | null | undefined>,
		outlookCalendarId: FormControl<string | null | undefined>,
		recurringAvailability: FormControl<boolean | null | undefined>,
		skypeName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sortKey: FormControl<number | null | undefined>,
		timezoneIana: FormControl<string | null | undefined>,
		timezoneId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
			googleCalendarId: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			hourly: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ignoreBusinessHours: new FormControl<boolean | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationType: new FormControl<number | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		resourceId?: number | null;
		resourceName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		serviceId?: number | null;
		serviceName?: string | null;
	}
	export interface ResourceServiceViewModelFormProperties {
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		resourceId: FormControl<number | null | undefined>,
		resourceName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		serviceId: FormControl<number | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateResourceServiceViewModelFormGroup() {
		return new FormGroup<ResourceServiceViewModelFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<number | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<number | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceServiceListViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		data?: Array<ResourceServiceViewModel>;
		hasMore?: boolean | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
		url?: string | null;
	}
	export interface ResourceServiceListViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateResourceServiceListViewModelFormGroup() {
		return new FormGroup<ResourceServiceListViewModelFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			hasMore: new FormControl<boolean | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceAllocationListViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		data?: Array<ServiceAllocationViewModel>;
		hasMore?: boolean | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
		url?: string | null;
	}
	export interface ServiceAllocationListViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingLimit?: number | null;
		deletedStatus?: boolean | null;
		deletedTime?: string | null;
		endDate?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		serviceDuration?: number | null;
		serviceId?: string | null;
		serviceImageUrl?: string | null;
		serviceName?: string | null;
		startDate?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startTime?: number | null;
		timezoneName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timezoneOffset?: number | null;
	}
	export interface ServiceAllocationViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingLimit: FormControl<number | null | undefined>,
		deletedStatus: FormControl<boolean | null | undefined>,
		deletedTime: FormControl<string | null | undefined>,
		endDate: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		serviceDuration: FormControl<number | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		serviceImageUrl: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		startDate: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startTime: FormControl<number | null | undefined>,
		timezoneName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface ServiceGroupListViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		data?: Array<ServiceGroupViewModel>;
		hasMore?: boolean | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
		url?: string | null;
	}
	export interface ServiceGroupListViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endTime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startTime?: number | null;
	}
	export interface ServiceHourViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		endTime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export interface ServiceListViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
		data?: Array<ServiceViewModel>;
		hasMore?: boolean | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
		url?: string | null;
	}
	export interface ServiceListViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
		hasMore: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookAheadUnit?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookAheadValue?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookInAdvance?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingInterval?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingLimit?: number | null;
		calendarId?: string | null;
		calendarResourceGroupId?: string | null;

		/** Type: double */
		cancellationFeeAmount?: number | null;
		cancellationFeeTaxable?: boolean | null;
		companyId?: string | null;
		consumerPadding?: boolean | null;
		customFields?: CustomFieldInputModel;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		dailyBookingLimitCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		dailyBookingLimitMinutes?: number | null;
		defaultService?: boolean | null;
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		durationInterval?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		durationMax?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		durationMin?: number | null;
		durationSelect?: boolean | null;

		/** Type: double */
		feeAmount?: number | null;
		feeTaxable?: boolean | null;
		id?: string | null;
		imageUrl?: string | null;
		locationId?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxBookingLimit?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxCapacity?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxGroupSize?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxResourceBookingLimit?: number | null;
		mediaPageUrl?: string | null;
		name?: string | null;
		nonRefundable?: boolean | null;
		object?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		padding?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		roundRobin?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		serviceGroupId?: number | null;
		serviceGroupName?: string | null;
		showOnline?: boolean | null;
		type?: string | null;
	}
	export interface ServiceViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookAheadUnit: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookAheadValue: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookInAdvance: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingInterval: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bookingLimit: FormControl<number | null | undefined>,
		calendarId: FormControl<string | null | undefined>,
		calendarResourceGroupId: FormControl<string | null | undefined>,

		/** Type: double */
		cancellationFeeAmount: FormControl<number | null | undefined>,
		cancellationFeeTaxable: FormControl<boolean | null | undefined>,
		companyId: FormControl<string | null | undefined>,
		consumerPadding: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		dailyBookingLimitCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		dailyBookingLimitMinutes: FormControl<number | null | undefined>,
		defaultService: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		duration: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		durationInterval: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		durationMax: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		durationMin: FormControl<number | null | undefined>,
		durationSelect: FormControl<boolean | null | undefined>,

		/** Type: double */
		feeAmount: FormControl<number | null | undefined>,
		feeTaxable: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		locationId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxBookingLimit: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxCapacity: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxGroupSize: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxResourceBookingLimit: FormControl<number | null | undefined>,
		mediaPageUrl: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		nonRefundable: FormControl<boolean | null | undefined>,
		object: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		padding: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		roundRobin: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

	export enum ServiceSortOrder { natural = 'natural', name = 'name' }

	export enum ServicesScope { company = 'company', location = 'location', all = 'all' }


	/** View model for state object */
	export interface StateViewModel {
		code?: string | null;
		country?: string | null;
		countryName?: string | null;
		name?: string | null;
		object?: string | null;
	}

	/** View model for state object */
	export interface StateViewModelFormProperties {
		code: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		countryName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		object: FormControl<string | null | undefined>,
	}
	export function CreateStateViewModelFormGroup() {
		return new FormGroup<StateViewModelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			countryName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnavailableTimeListViewModel {
		object?: string | null;
		unavailableTimes?: Array<UnavailableTimeViewModel>;
		url?: string | null;
	}
	export interface UnavailableTimeListViewModelFormProperties {
		object: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateUnavailableTimeListViewModelFormGroup() {
		return new FormGroup<UnavailableTimeListViewModelFormProperties>({
			object: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnavailableTimeViewModel {
		calendarId?: string | null;
		date?: string | null;
		endDateTime?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		entityId?: number | null;
		entityType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		fromTime?: number | null;
		locationId?: string | null;
		objectName?: string | null;
		reason?: string | null;
		reasonCode?: string | null;
		resourceId?: string | null;
		resourceName?: string | null;
		serviceId?: string | null;
		serviceName?: string | null;
		startDateTime?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		toTime?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tzOffset?: number | null;
	}
	export interface UnavailableTimeViewModelFormProperties {
		calendarId: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		endDateTime: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		entityId: FormControl<number | null | undefined>,
		entityType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		fromTime: FormControl<number | null | undefined>,
		locationId: FormControl<string | null | undefined>,
		objectName: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		reasonCode: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		serviceId: FormControl<string | null | undefined>,
		serviceName: FormControl<string | null | undefined>,
		startDateTime: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		toTime: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tzOffset: FormControl<number | null | undefined>,
	}
	export function CreateUnavailableTimeViewModelFormGroup() {
		return new FormGroup<UnavailableTimeViewModelFormProperties>({
			calendarId: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			endDateTime: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<number | null | undefined>(undefined),
			entityType: new FormControl<string | null | undefined>(undefined),
			fromTime: new FormControl<number | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			objectName: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			startDateTime: new FormControl<string | null | undefined>(undefined),
			toTime: new FormControl<number | null | undefined>(undefined),
			tzOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Appointments
		 * <p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
		 * Get consumer/v1/appointments
		 * @param {string} locationId id of business location
		 * @param {string} email Filter by email address
		 * @param {string} lastname Filter by lastname or part of it
		 * @param {string} phone Filter by phone number or part of it
		 * @param {string} serviceId Filter by service
		 * @param {string} calendarId Filter by calendar
		 * @param {string} resourceId Filter by resource
		 * @param {string} customerId Filter by customer
		 * @param {string} serviceAllocationId Filter by service allocation
		 * @param {Date} startDate Format YYYY-MM-DD. Filter by on/after startDate
		 * @param {Date} endDate Format YYYY-MM-DD. Filter on/before endDate
		 * @param {string} status Filter by status: IN, BK, CN, RE, RS
		 * @param {string} bookedBy Filter by the email of who booked
		 * @param {number} offset Starting row of page, default 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Page limit, default 20, max 100
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {AppointmentListViewModel} Success
		 */
		ConsumerV1AppointmentsGetByLocationIdAndEmailAndLastnameAndPhoneAndServiceIdAndCalendarIdAndResourceIdAndCustomerIdAndServiceAllocationIdAndStartDateAndEndDateAndStatusAndBookedByAndOffsetAndLimit(locationId: string | null | undefined, email: string | null | undefined, lastname: string | null | undefined, phone: string | null | undefined, serviceId: string | null | undefined, calendarId: string | null | undefined, resourceId: string | null | undefined, customerId: string | null | undefined, serviceAllocationId: string | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, status: string | null | undefined, bookedBy: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<AppointmentListViewModel> {
			return this.http.get<AppointmentListViewModel>(this.baseUri + 'consumer/v1/appointments?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&lastname=' + (lastname == null ? '' : encodeURIComponent(lastname)) + '&phone=' + (phone == null ? '' : encodeURIComponent(phone)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '&calendarId=' + (calendarId == null ? '' : encodeURIComponent(calendarId)) + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&serviceAllocationId=' + (serviceAllocationId == null ? '' : encodeURIComponent(serviceAllocationId)) + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&bookedBy=' + (bookedBy == null ? '' : encodeURIComponent(bookedBy)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Appointment
		 * <p>Use this endpoint to <b>Create</b> a new appointment. The appointment will be created with an "IN", Initial status. Posting an appointment with "IN" status requires minimal information and requires a "PUT book" call to complete the booking transaction, <i>PUT ​/consumer​/v1​/appointments​/{id}​/book</i>. Alternatively, you can post an appointment using the <b>completeBooking</b> option which completes the booking in one transaction, but it will require more data. The method you choose depends on your solutions workflow. </p>
		 * <p>
		 * <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b></p>
		 * <p>A valid <b>serviceId</b> is required. The serviceId provided must be valid for the location being booked. A valid serviceId is one that is scoped to a Primary Company Location or is associated with a Business Location</p>
		 * <p>OPTIONAL FIELDS INCLUDE: </p>
		 * <p>
		 * <b>locationId</b> - if not supplied, the appointment will be posted to the primary business location. If you support multiple location, we recommend always supplying the locationId. </p>
		 * <p>
		 * <b>resourceId</b> - not required when posting with an "IN" status but is required when the appointment is booked. Use <i>GET /consumer/v1/resources</i> for a list of resources. </p>
		 * <p>
		 * <b>customerId</b> - if supplied the name and email will be retrieved from the customer record. </p>
		 * <p>
		 * <b>BookedBy</b> - if not supplied the email address of the booked appointment is used or the ip address if no email address is provided. BookedBy is used in the Appointment Audit trail which can be viewed in the appointment object.</p>
		 * <p>
		 * <b>Location</b> - is a string value representing the location of the appointment. It provides no added functionality in OnSched and should not be confused with locationId.</p>
		 * <p>
		 * <b>TimezoneName</b> - if used timezoneName must be in IANA format, <i>America/New_York</i>. This is the timezone the appointment was booked in. Populating this information can help later in situations where appointments are booked before a Daylight Savings change. If no timezoneName is supplied, the Business Locations timezone will be used.</p>
		 * <p>
		 * <b>COMPLETE BOOKING:</b> This parameter provides a mechanism for immediate booking with the POST appointment endpoint. To complete the booking in one transaction, populate the <b>completeBooking</b> parameter with a "BK", booked or an "RS", reserved status and provide an (<b>email</b> and <b>name</b>) or a <b>customerId</b> in the post body. Doing so will book the appointment and send notifications all in one transaction. <b>Note:</b> "IN" can also be used as a completeBooking option to support payment flows. With the "IN" option, notifications are NOT sent.</p>
		 * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
		 * Post consumer/v1/appointments
		 * @param {string} completeBooking Options are "BK", "RS" or "IN"
		 * @return {AppointmentInitialViewModel} Success
		 */
		ConsumerV1AppointmentsPostByCompleteBooking(completeBooking: string | null | undefined, requestBody: AppointmentInitialModel, headersHandler?: () => HttpHeaders): Observable<AppointmentInitialViewModel> {
			return this.http.post<AppointmentInitialViewModel>(this.baseUri + 'consumer/v1/appointments?completeBooking=' + (completeBooking == null ? '' : encodeURIComponent(completeBooking)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Custom Fields Labels
		 * <p>Use this endpoint to return a locations <b>Appointment Booking Fields</b>. Appointment booking fields are stored with each Appointment record. They are used when you need additional information collected during your booking process. It is tied to an appointment/visit and will be stored in the appointment record. Use the field name, type, and length to determine how to update these field values when posting an appointment.</p>
		 * Get consumer/v1/appointments/bookingfields
		 * @param {string} locationId id of business location
		 * @return {BookingFieldListViewModel} Success
		 */
		ConsumerV1AppointmentsBookingfieldsGetByLocationId(locationId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<BookingFieldListViewModel> {
			return this.http.get<BookingFieldListViewModel>(this.baseUri + 'consumer/v1/appointments/bookingfields?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Custom Fields List
		 * <p>Use this endpoint to return a locations <b>Appointment Custom Field</b> definitions. Appointment custom fields are stored with each appointment. They are used when the information collected during the booking is specific to a particular appointment/visit. The response will list the custom fields used (customField1 - 10), the field type (string, number, date, boolean) and the length of each one.</p>
		 * Get consumer/v1/appointments/customfields
		 * @param {string} locationId id of business location
		 * @return {CustomFieldDefinitionListViewModel} Success
		 */
		ConsumerV1AppointmentsCustomfieldsGetByLocationId(locationId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<CustomFieldDefinitionListViewModel> {
			return this.http.get<CustomFieldDefinitionListViewModel>(this.baseUri + 'consumer/v1/appointments/customfields?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Appointment
		 * <p>Use this endpoint to permanently <b>Delete</b> an appointment. Only appointments with a of "IN" status, initial, can be deleted. Past dated appointments cannot be deleted. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
		 * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>
		 * Delete consumer/v1/appointments/{id}
		 * @param {string} id appointment id to delete
		 * @return {AppointmentViewModel} Success
		 */
		ConsumerV1Appointments_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<AppointmentViewModel> {
			return this.http.delete<AppointmentViewModel>(this.baseUri + 'consumer/v1/appointments/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Appointment
		 * <p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
		 * Get consumer/v1/appointments/{id}
		 * @param {string} id id of appointment requested
		 * @return {AppointmentViewModel} Success
		 */
		ConsumerV1Appointments_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<AppointmentViewModel> {
			return this.http.get<AppointmentViewModel>(this.baseUri + 'consumer/v1/appointments/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Book Appointment
		 * <p>Use this endpoint to <b>Book</b> an appointment. Only appointments with an "IN" status, Initial, can be booked. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint. Other pertinent fields can also be updated at the time of booking by including them in the post body. <b>Note: If no name or email address was provided in the initial Post Appointment, it will be required in the post body.</b></p>
		 * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
		 * Put consumer/v1/appointments/{id}/book
		 * @param {string} id appointment id to book
		 * @return {AppointmentViewModel} Success
		 */
		ConsumerV1Appointments_idBookPut(id: string, requestBody: AppointmentBookModel, headersHandler?: () => HttpHeaders): Observable<AppointmentViewModel> {
			return this.http.put<AppointmentViewModel>(this.baseUri + 'consumer/v1/appointments/' + (id == null ? '' : encodeURIComponent(id)) + '/book', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Cancel Appointment
		 * <p>Use this endpoint to <b>Cancel</b> an appointment booking or reservation. Only appointments with a "BK", booked or "RS", reserved status can be cancelled. Past dated appointments cannot be cancelled. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>
		 * Put consumer/v1/appointments/{id}/cancel
		 * @param {string} id appointment id to cancel
		 * @return {AppointmentViewModel} Success
		 */
		ConsumerV1Appointments_idCancelPut(id: string, headersHandler?: () => HttpHeaders): Observable<AppointmentViewModel> {
			return this.http.put<AppointmentViewModel>(this.baseUri + 'consumer/v1/appointments/' + (id == null ? '' : encodeURIComponent(id)) + '/cancel', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Confirm Appointment
		 * <p>Use this endpoint to <b>Confirm</b> an appointment. This updates the boolean confirmed field to TRUE. <b>NOTE:</b> If the appointment status is set to "RS", Reserved, it also updates the status of the appointment to "BK", Booked. </p>
		 * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>
		 * Put consumer/v1/appointments/{id}/confirm
		 * @param {number} id appointment id to confirm
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} undo Use this parameter to undo the confirmed status
		 * @return {void} Success
		 */
		ConsumerV1Appointments_idConfirmPutByUndo(id: number, undo: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'consumer/v1/appointments/' + id + '/confirm?undo=' + undo, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Set NoShow Status
		 * <p>Use this endpoint to change the status of an appointment from "BK", Booked to <b>"NS", NoShow</b>. This gives API consumers a way to internally track No Show appointments. It provides no added functionality in OnSched.</p>
		 * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>
		 * Put consumer/v1/appointments/{id}/noshow
		 * @param {number} id appointment id to mark as NoShow
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Success
		 */
		ConsumerV1Appointments_idNoshowPut(id: number, requestBody: AppointmentNoShowModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'consumer/v1/appointments/' + id + '/noshow', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Reschedule Appointment
		 * <p>Use this endpoint to <b>Reschedule</b> an appointment booking. Only appointments in "BK", booked status, can be Rescheduled. Past dated appointments cannot be rescheduled. A valid <b>appointment id</b> is required.</p>
		 * <p>The <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b>.</p>
		 * <p>The serviceId is optional. If changing the <b>serviceId</b>, the new service id's duration must match the original service's duration.</p>
		 * <p>The resourceId is optional. If changing the <b>resourceId</b>, verify the availability of the new resource prior to rescheduling.</p>
		 * <p>
		 * <b>IMPORTANT:</b> Always run availability before rescheduling an appointment to verify the timeslot is open and available for the new time, service and/or resource requested. This is the only way to assure the slot is available. You cannot reschedule an appointment to a different location. If necessary, you should cancel and then book an appointment in the other location.</p>
		 * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>
		 * Put consumer/v1/appointments/{id}/reschedule
		 * @param {string} id appointment id to reschedule
		 * @return {AppointmentViewModel} Success
		 */
		ConsumerV1Appointments_idReschedulePut(id: string, requestBody: AppointmentRescheduleModel, headersHandler?: () => HttpHeaders): Observable<AppointmentViewModel> {
			return this.http.put<AppointmentViewModel>(this.baseUri + 'consumer/v1/appointments/' + (id == null ? '' : encodeURIComponent(id)) + '/reschedule', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Reserve Appointment
		 * <p>Use this endpoint to <b>Reserve</b> an appointment. Only appointments with an "IN" status, Initial, can be reserved. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
		 * <p>
		 * <b>NOTE: Reservations are different from Bookings as reservations are a two-step booking process that must be managed by the API consumer.</b> An appointment that is reserved is not completely booked until other business conditions have been met. For example, an appointment may be reserved if it is not yet assigned to a resource or until the customer or resource explicitly confirms it.</p>
		 * <p>With reservations you have the ability to notify the customer of a reservation prior to officially booking and the workflow can be designed to indicate what conditions will need to be met in order to convert the reservation to a complete booking. A reservation converts to a complete booking when it is either Confirmed or Booked. </p>
		 * <p>
		 * <b>IMPORTANT: A reserved appointment time will not be released, i.e., become available to others, until it is Cancelled. The booking timer is not used with reserved appointments.</b>
		 * </p>
		 * <p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>
		 * Put consumer/v1/appointments/{id}/reserve
		 * @param {string} id appointment id to reserve
		 * @return {void} Success
		 */
		ConsumerV1Appointments_idReservePutBySendNotifications(id: string, sendNotifications: boolean | null | undefined, requestBody: AppointmentReserveModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'consumer/v1/appointments/' + (id == null ? '' : encodeURIComponent(id)) + '/reserve&sendNotifications=' + sendNotifications, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Available Times
		 * <p>
		 * <b>Choose your search criteria carefully. Availability is an expensive call.</b> If you search availability for all resources, you should only do so for a single date. If you search availability for multiple dates, you should only do so for a specific resource by specifying the optional resourceId parameter.</p>
		 * <p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
		 * <p>A <b>resourceId</b> is optional, it is recommended if known at the time of availability call.</p>
		 * <p>
		 * <b>timezoneName</b> is optional, it allows you to specify the IANA formatted name for the end user's timezone to view availability. e.g., <i>America/New_York</i>. <b>NOTE: This is the recommended approach for your implementation.</b>  The "tzOffset" parameter remains for backward compatibility.  For JavaScript, use moment.js in your client for ease of timezone detection and selection. For iOS, use the name property of the NSTimeZone returned from the localTimeZone method. For .NET, consider NodaTime or TimeZoneConverter via NuGet. </p>
		 * <p>
		 * <b>duration</b> should only be populated if you allow the end user to select a duration, otherwise the service's duration will be used.</p>
		 * <p>
		 * <b>startTime</b> and <b>endTime</b> are optional and are specified in <b>military time e.g., 800 = 8:00am, 2230 = 10:30pm</b>. Note: You will only see availability within the boundary of your business location start and end times.</p>
		 * <p>
		 * <b>dayAvailability</b> will return day level availability for the number of days requested from the start date. See <i>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days</i> for details.</p>
		 * <p>
		 * <b>firstDayAvailable</b> only works with day availability. If set to true it will look for the first day available within the range specified by the dayAvailability parameter. The two parameters together can be a clever way to display availability for a week or month. Tip - pass in the beginning of the week or month, and available times are displayed for the first available date if exists.</p>
		 * <p>
		 * <b>tzOffset</b> allows you to pass in the timezone offset for the end user's timezone of choice, e.g., (-240) for EST. If you use this option, your application should be timezone aware. The requested timezone is specified as an offset (plus or minus) from GMT time.</p>
		 * <p>Availability can be complex. For further troubleshooting refer to the: <i><b>GET /consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable</b></i> endpoint. This endpoint will show you all unavailable times for a given date range. Available times are created from any unblocked time periods. For more information: <a href="https://onsched.readme.io/docs/availability-overview">Availability Overview</a></p>
		 * Get consumer/v1/availability/{serviceId}/{startDate}/{endDate}
		 * @param {string} serviceId Service Id for availability search
		 * @param {Date} startDate Format YYYY-MM-DD: Start Date for availability search
		 * @param {Date} endDate Format YYYY-MM-DD: End Date for availability search
		 * @param {number} startTime Format Military Time Start Time for availability search. Defaults to Business Hours Start
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} endTime Format Military Time. End Time for availability search. Defaults to Business Hours End
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} locationId Id of business location, defaults to primary business location
		 * @param {string} resourceId Resource Id for availability search
		 * @param {string} resourceGroupId Resource Group Id for availability search
		 * @param {string} resourceIds Comma separated Resource Id's for availability search
		 * @param {string} roundRobin Round robin choice 0=none, 1=random, 2=balanced
		 * @param {number} duration Duration of the service if different from default
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} interval Booking Interval if different than the default
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} timezoneName Requested IANA timezone Id to view availability
		 * @param {number} tzOffset Request timezone offset to view availability
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} destination For calculating travel based availability, requires distance scope
		 * @param {Date} dayAvailabilityStartDate Format YYYY-DD-YY: Start date for day availability, defaults to startDate
		 * @param {number} dayAvailability Number of days of day availability to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} firstDayAvailable Return available times for the first available day
		 * @return {AvailabilityViewModel} Success
		 */
		ConsumerV1Availability_serviceId_startDate_endDateGetByStartTimeAndEndTimeAndLocationIdAndResourceIdAndResourceGroupIdAndResourceIdsAndRoundRobinAndDurationAndIntervalAndTimezoneNameAndTzOffsetAndDestinationAndDayAvailabilityStartDateAndDayAvailabilityAndFirstDayAvailable(serviceId: string, startDate: Date, endDate: Date, startTime: number | null | undefined, endTime: number | null | undefined, locationId: string | null | undefined, resourceId: string | null | undefined, resourceGroupId: string | null | undefined, resourceIds: string | null | undefined, roundRobin: string | null | undefined, duration: number | null | undefined, interval: number | null | undefined, timezoneName: string | null | undefined, tzOffset: number | null | undefined, destination: string | null | undefined, dayAvailabilityStartDate: Date | null | undefined, dayAvailability: number | null | undefined, firstDayAvailable: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<AvailabilityViewModel> {
			return this.http.get<AvailabilityViewModel>(this.baseUri + 'consumer/v1/availability/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/' + startDate.toISOString() + '/' + endDate.toISOString() + '&startTime=' + startTime + '&endTime=' + endTime + '&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&resourceGroupId=' + (resourceGroupId == null ? '' : encodeURIComponent(resourceGroupId)) + '&resourceIds=' + (resourceIds == null ? '' : encodeURIComponent(resourceIds)) + '&roundRobin=' + (roundRobin == null ? '' : encodeURIComponent(roundRobin)) + '&duration=' + duration + '&interval=' + interval + '&timezoneName=' + (timezoneName == null ? '' : encodeURIComponent(timezoneName)) + '&tzOffset=' + tzOffset + '&destination=' + (destination == null ? '' : encodeURIComponent(destination)) + '&dayAvailabilityStartDate=' + dayAvailabilityStartDate?.toISOString() + '&dayAvailability=' + dayAvailability + '&firstDayAvailable=' + firstDayAvailable, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Available Days
		 * <p>This endpoint will return <b>Day Level Availability</b> for the range of dates requested. For example, if the business is closed, or there is a public holiday this endpoint will return that the "Day is unavailable".</p>
		 * <p>Day Availability is a high-level check for Holidays and Open/Available hours of a location, service and/or resource and should be used to restrict your choices of days available in your application to improve usability and performance.</p>
		 * <p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
		 * <p>The locationId is optional, however if not supplied it defaults to the Primary Business Location for open/closed hours information. It is recommended you always provide the locationId.</p>
		 * <p>A <b>resourceId</b> is optional. If used the available days will be return day availability for the resource specified.</p>
		 * <p>The <b>tzOffset</b> parameter should be used if the appointment requester, the end user, is in a different timezone than the location or resource.</p>
		 * Get consumer/v1/availability/{serviceId}/{startDate}/{endDate}/days
		 * @param {string} serviceId Service Id for day availability search
		 * @param {Date} startDate Format YYYY-MM-DD: Start Date for availability search
		 * @param {Date} endDate Format YYYY-MM-DD: End Date for availability search
		 * @param {string} locationId Id of business location, defaults to primary business location
		 * @param {string} resourceId Resource Id to filter on
		 * @param {number} tzOffset Timezone offset to view availability for
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {AvailabilityDayViewModel} Success
		 */
		ConsumerV1Availability_serviceId_startDate_endDateDaysGetByLocationIdAndResourceIdAndTzOffset(serviceId: string, startDate: Date, endDate: Date, locationId: string | null | undefined, resourceId: string | null | undefined, tzOffset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<AvailabilityDayViewModel> {
			return this.http.get<AvailabilityDayViewModel>(this.baseUri + 'consumer/v1/availability/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/' + startDate.toISOString() + '/' + endDate.toISOString() + '/days&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&tzOffset=' + tzOffset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Unavailable Times
		 * <p>This endpoint is used to show <b>Unavailable</b> times and provides valuable information as to why a time slot is unavailable. If you question your availability results, populate the same parameters to this endpoint to find out why.</p>
		 * <p>A <b>serviceId</b> is required. The <b>startDate</b> and <b>endDate</b> are required and are formatted as: <b>YYYY-MM-DD</b></p>
		 * <p>Location hours, holidays, services, resources, blocks, allocations, and appointments are just some of variables that may cause time slots to become unavailable. Use this endpoint to understand why you don't see availability.</p>
		 * Get consumer/v1/availability/{serviceId}/{startDate}/{endDate}/unavailable
		 * @param {string} serviceId Service Id for availability search
		 * @param {Date} startDate Format YYYY-MM-DD: Start Date for unavailable time search
		 * @param {Date} endDate Format YYYY-MM-DD: End Date for unavailable time search
		 * @param {string} locationId Id of business location, defaults to primary business location
		 * @param {string} resourceId Resource Id to filter on
		 * @param {number} duration Duration of the service if different from default
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} tzOffset Request timezone offset to view unavailable times
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} skipTimePastUnavailability Set as true to remove Time Past (TP) blocks in the response
		 * @return {UnavailableTimeListViewModel} Success
		 */
		ConsumerV1Availability_serviceId_startDate_endDateUnavailableGetByLocationIdAndResourceIdAndDurationAndTzOffsetAndSkipTimePastUnavailability(serviceId: string, startDate: Date, endDate: Date, locationId: string | null | undefined, resourceId: string | null | undefined, duration: number | null | undefined, tzOffset: number | null | undefined, skipTimePastUnavailability: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<UnavailableTimeListViewModel> {
			return this.http.get<UnavailableTimeListViewModel>(this.baseUri + 'consumer/v1/availability/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/' + startDate.toISOString() + '/' + endDate.toISOString() + '/unavailable&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&duration=' + duration + '&tzOffset=' + tzOffset + '&skipTimePastUnavailability=' + skipTimePastUnavailability, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Customers
		 * <p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get consumer/v1/customers
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {string} groupId Filter by groupId
		 * @param {string} email Filter by email address
		 * @param {string} lastname Filter by lastname
		 * @param {boolean} deleted Filter by deleted status
		 * @param {number} offset Starting row of page, default 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Page limit default 20, max 100
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CustomerListViewModel} Success
		 */
		ConsumerV1CustomersGetByLocationIdAndGroupIdAndEmailAndLastnameAndDeletedAndOffsetAndLimit(locationId: string | null | undefined, groupId: string | null | undefined, email: string | null | undefined, lastname: string | null | undefined, deleted: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<CustomerListViewModel> {
			return this.http.get<CustomerListViewModel>(this.baseUri + 'consumer/v1/customers?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&lastname=' + (lastname == null ? '' : encodeURIComponent(lastname)) + '&deleted=' + deleted + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Customer
		 * <p>Use this endpoint to <b>Create</b> a new Customer. A customer object is automatically created with the first appointment booking if it doesn't already exist. If not specified, the business location id defaults to the primary business location.</p>
		 * <p>Required Fields: <b>Email</b> and <b>Name</b> or <b>First and Lastname</b> depending on customer type. Type 0 = Person, Type 1 = Business. For type 0, the firstname and lastname fields are used. For type 1, the Name field is used, and the name field is also used to populate the lastname.</p>
		 * Post consumer/v1/customers
		 * @return {CustomerViewModel} Success
		 */
		ConsumerV1CustomersPost(requestBody: CustomerInputModel, headersHandler?: () => HttpHeaders): Observable<CustomerViewModel> {
			return this.http.post<CustomerViewModel>(this.baseUri + 'consumer/v1/customers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Customer Booking Fields
		 * <p>Use this endpoint to return <b>Customer Booking Fields</b>. Customer booking fields are stored with each customer object. They are used when the information collected during the booking is for a particular customer. Customer Booking Fields include any custom customer fields you define and want to capture with the Booking.</p>
		 * Get consumer/v1/customers/bookingfields
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @return {BookingFieldListViewModel} Success
		 */
		ConsumerV1CustomersBookingfieldsGetByLocationId(locationId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<BookingFieldListViewModel> {
			return this.http.get<BookingFieldListViewModel>(this.baseUri + 'consumer/v1/customers/bookingfields?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Country Codes
		 * <p>Use this endpoint to return a <b>List of Countries with their associated Country Code</b>. Country codes are based on the 2-character ANSI standard. If your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>
		 * Get consumer/v1/customers/countries
		 * @return {Array<CountryViewModel>} Success
		 */
		ConsumerV1CustomersCountriesGet(headersHandler?: () => HttpHeaders): Observable<Array<CountryViewModel>> {
			return this.http.get<Array<CountryViewModel>>(this.baseUri + 'consumer/v1/customers/countries', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Customer Custom Fields
		 * <p>Use this endpoint to return <b>Customer Custom Fields</b>. Customer custom fields are stored with the customer object. They are used when the information collected during the booking is specific to a particular customer.</p>
		 * Get consumer/v1/customers/customfields
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {boolean} leadQuestions A true/false indicator to filter on custom fields used for lead questions
		 * @return {CustomFieldDefinitionListViewModel} Success
		 */
		ConsumerV1CustomersCustomfieldsGetByLocationIdAndLeadQuestions(locationId: string | null | undefined, leadQuestions: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<CustomFieldDefinitionListViewModel> {
			return this.http.get<CustomFieldDefinitionListViewModel>(this.baseUri + 'consumer/v1/customers/customfields?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&leadQuestions=' + leadQuestions, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Country States
		 * <p>Use this endpoint to return a <b>List of Countries with their associated State Codes</b>. Supply a country code to filter results further. If states for your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>
		 * Get consumer/v1/customers/states
		 * @return {Array<StateViewModel>} Success
		 */
		ConsumerV1CustomersStatesGetByCountry(country: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<StateViewModel>> {
			return this.http.get<Array<StateViewModel>>(this.baseUri + 'consumer/v1/customers/states?country=' + (country == null ? '' : encodeURIComponent(country)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Customer
		 * <p>Use this endpoint to permanently <b>Delete</b> a Customer object. A valid <b>customer id</b> is required.</p>
		 * Delete consumer/v1/customers/{id}
		 * @param {string} id id of customer object
		 * @return {void} Success
		 */
		ConsumerV1Customers_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'consumer/v1/customers/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Customer
		 * <p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /consumer/v1/customers</i> endpoint.</p>
		 * Get consumer/v1/customers/{id}
		 * @param {string} id id of customer object
		 * @return {CustomerViewModel} Success
		 */
		ConsumerV1Customers_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<CustomerViewModel> {
			return this.http.get<CustomerViewModel>(this.baseUri + 'consumer/v1/customers/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Customer
		 * <p>Use this endpoint to <b>Update</b> a Customer object. A valid <b>customer id</b> is required. Note: Blank fields are not changed.</p>
		 * Put consumer/v1/customers/{id}
		 * @param {string} id id of customer object
		 * @return {void} Success
		 */
		ConsumerV1Customers_idPut(id: string, requestBody: CustomerUpdateModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'consumer/v1/customers/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Locations
		 * <p>Use this endpoint to return a <b>List of Business Locations</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20 and maximum is 100. Use the other query parameters to filter the results further. </p>
		 * <p>
		 * <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>
		 * Get consumer/v1/locations
		 * @param {string} name Location name (full or partial)
		 * @param {string} nearestTo Search by distance nearest Geocoords, City, Postal/Zip Code
		 * @param {number} proximity Maximum distance to display
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} units Distance either imperial(miles), metric(kilometers)
		 * @param {string} serviceId Locations that offer this service
		 * @param {string} friendlyId Frienldy Id of location
		 * @param {string} regionId Locations within a specific region
		 * @param {boolean} ignorePrimary Don't include the Primary Location
		 * @param {number} offset Starting row of page, default 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Page limit, default 20, max 100
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {LocationListViewModel} Success
		 */
		ConsumerV1LocationsGetByNameAndNearestToAndProximityAndUnitsAndServiceIdAndFriendlyIdAndRegionIdAndIgnorePrimaryAndOffsetAndLimit(name: string | null | undefined, nearestTo: string | null | undefined, proximity: number | null | undefined, units: string | null | undefined, serviceId: string | null | undefined, friendlyId: string | null | undefined, regionId: string | null | undefined, ignorePrimary: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<LocationListViewModel> {
			return this.http.get<LocationListViewModel>(this.baseUri + 'consumer/v1/locations?name=' + (name == null ? '' : encodeURIComponent(name)) + '&nearestTo=' + (nearestTo == null ? '' : encodeURIComponent(nearestTo)) + '&proximity=' + proximity + '&units=' + (units == null ? '' : encodeURIComponent(units)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '&friendlyId=' + (friendlyId == null ? '' : encodeURIComponent(friendlyId)) + '&regionId=' + (regionId == null ? '' : encodeURIComponent(regionId)) + '&ignorePrimary=' + ignorePrimary + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Location
		 * <p>Use this endpoint to return a <b>Location</b> object. A valid business <b>location id</b> is required. Find all location id's by using the <i>GET /consumer/v1/locations</i> endpoint.</p>
		 * <p>
		 * <b>IMPORTANT DEPRECATION NOTICE</b>: The following online settings parameters were intended for internal use in our Portal application only. They will be deprecated on <b>OCTOBER 15, 2022</b>. These fields are currently part of the <b>SETTINGS</b> object in all location endpoints: <b>businessId, enabled, familyMembersEnabled, serviceLabel, resourceLabel, resourceAnyLabel, resourceSelection, liveMode, formFlow, availabilityForm, showServiceGroups, showOnSchedLogo, showBusinessLogo, disableAuthorization, hideNavBar, hideLocationNav, hideServiceGroupsNav, hideServicesNav, hideContinueBooking, returnToService, returnToAvailability, hideBreadCrumbNav.</b> If you are using these fields, please adjust your code to handle the deprecation or let us know by submitting a ticket to: <b><i>support@onsched.com</i></b> as we do not want to interrupt your existing workflows.</p>
		 * Get consumer/v1/locations/{id}
		 * @param {string} id id of business location
		 * @return {LocationViewModel} Success
		 */
		ConsumerV1Locations_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<LocationViewModel> {
			return this.http.get<LocationViewModel>(this.baseUri + 'consumer/v1/locations/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Resource Groups
		 * <p>Use this endpoint to return a list of <b>Resource Groups</b> for the requested location. If not specified, the business location defaults to the primary business location.</p>
		 * Get consumer/v1/resourcegroups
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {boolean} deleted Filter results by deleted status
		 * @param {number} offset Starting row of page, default 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Page limit default 20, max 100
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResourceGroupListViewModel} Success
		 */
		ConsumerV1ResourcegroupsGetByLocationIdAndDeletedAndOffsetAndLimit(locationId: string | null | undefined, deleted: boolean | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResourceGroupListViewModel> {
			return this.http.get<ResourceGroupListViewModel>(this.baseUri + 'consumer/v1/resourcegroups?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&deleted=' + deleted + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Resource Group
		 * <p>Use this endpoint to return a <b>Resource Group</b> object. A valid <b>resourceGroup id</b> is required. Find resourceGroup id's by using the <i>GET /consumer/v1/resourceGroups</i> endpoint.</p>
		 * Get consumer/v1/resourcegroups/{id}
		 * @param {string} id id of the resourceGroup object
		 * @return {ResourceGroupViewModel} Success
		 */
		ConsumerV1Resourcegroups_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<ResourceGroupViewModel> {
			return this.http.get<ResourceGroupViewModel>(this.baseUri + 'consumer/v1/resourcegroups/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Resources
		 * <p>Use this endpoint to return a <b>List of Resources</b> associated with a business location. If not specified, the business location defaults to the primary business location. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get consumer/v1/resources
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {number} resourceGroupId Filter by groupId
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} email Filter by email address
		 * @param {string} name Search by name, supports Partial name search
		 * @param {string} sortOrder Specify sort order of response
		 * @param {number} offset Starting row of page, default 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Page limit default 20, max 100
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResourceListViewModel} resource object
		 */
		ConsumerV1ResourcesGetByLocationIdAndResourceGroupIdAndEmailAndNameAndSortOrderAndOffsetAndLimit(locationId: string | null | undefined, resourceGroupId: number | null | undefined, email: string | null | undefined, name: string | null | undefined, sortOrder: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResourceListViewModel> {
			return this.http.get<ResourceListViewModel>(this.baseUri + 'consumer/v1/resources?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&resourceGroupId=' + resourceGroupId + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Resource
		 * <p>Use this endpoint to return a <b>Resource</b> object. A valid <b>resource id</b> is required. Find resource id's by using the <i>GET consumer/v1/resources</i> endpoint. </p>
		 * Get consumer/v1/resources/{id}
		 * @param {number} id id of resource object
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResourceViewModel} Success
		 */
		ConsumerV1Resources_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<ResourceViewModel> {
			return this.http.get<ResourceViewModel>(this.baseUri + 'consumer/v1/resources/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Resource Linked Services
		 * <p>Use this endpoint to get a <b>List of Linked Services</b> associated with the resource requested. The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, the maximum limit is 100. Use the other query parameters to filter the results further.</p>
		 * <p>Resource linked services are used to explicitly define the services that can be booked for a specified resource. By default, all services are bookable for any resource. For more information: <a href="https://docs.onsched.com/docs/linked-services">Linked Services Overview</a></p>
		 * Get consumer/v1/resources/{id}/services
		 * @param {number} id id of resource object
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset Starting row of page, default 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Page limit default 20, max 100
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResourceServiceListViewModel} list of resource services
		 */
		ConsumerV1Resources_idServicesGetByOffsetAndLimit(id: number, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResourceServiceListViewModel> {
			return this.http.get<ResourceServiceListViewModel>(this.baseUri + 'consumer/v1/resources/' + id + '/services?offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Service Groups
		 * <p>Use this endpoint to return a list of <b>Service Groups</b> for the requested location. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and size. Default offset is 0, limit is 20, maximum is 100. Use the other query parameters to filter the results further.</p>
		 * Get consumer/v1/servicegroups
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {number} offset Starting row of page, default 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Page limit default 20, max 100
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ServiceGroupListViewModel} Success
		 */
		ConsumerV1ServicegroupsGetByLocationIdAndOffsetAndLimit(locationId: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceGroupListViewModel> {
			return this.http.get<ServiceGroupListViewModel>(this.baseUri + 'consumer/v1/servicegroups?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Service Group
		 * <p>Use this endpoint to return a <b>Service Group</b> object. A valid <b>serviceGroup id</b> is required. Find serviceGroup id's by using the <i>GET /consumer/v1/serviceGroups</i> endpoint.</p>
		 * Get consumer/v1/servicegroups/{id}
		 * @param {number} id id of the serviceGroup object
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ServiceGroupViewModel} Success
		 */
		ConsumerV1Servicegroups_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<ServiceGroupViewModel> {
			return this.http.get<ServiceGroupViewModel>(this.baseUri + 'consumer/v1/servicegroups/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Services
		 * <p>Use this endpoint to <b>List Services</b> available at your business location and/or company. If not specified, the business location defaults to the primary business location. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get consumer/v1/services
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {number} serviceGroupId Filter by groupId
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} defaultService Filter by default service, default is false
		 * @param {boolean} allLocations Search All Locations, default is false
		 * @param {ServicesScope} scope Filter by scope, Company, Location or All, default is All
		 * @param {string} name Filter by Name, supports Partial name search
		 * @param {string} serviceId Filter by ServiceId, using this parameter would ignore all other parameters
		 * @param {number} offset Starting row of page, default 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Page limit default 20, max 100
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {ServiceSortOrder} sortOrder Sort results using Natural Sort or Sorted alphabetically by Service Names, default is natural
		 * @param {boolean} sortDescending Sort results in Descending Order, default true
		 * @return {ServiceListViewModel} Success
		 */
		ConsumerV1ServicesGetByLocationIdAndServiceGroupIdAndDefaultServiceAndAllLocationsAndScopeAndNameAndServiceIdAndOffsetAndLimitAndSortOrderAndSortDescending(locationId: string | null | undefined, serviceGroupId: number | null | undefined, defaultService: boolean | null | undefined, allLocations: boolean | null | undefined, scope: ServicesScope | null | undefined, name: string | null | undefined, serviceId: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, sortOrder: ServiceSortOrder | null | undefined, sortDescending: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceListViewModel> {
			return this.http.get<ServiceListViewModel>(this.baseUri + 'consumer/v1/services?locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&serviceGroupId=' + serviceGroupId + '&defaultService=' + defaultService + '&allLocations=' + allLocations + '&scope=' + scope + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '&offset=' + offset + '&limit=' + limit + '&sortOrder=' + sortOrder + '&sortDescending=' + sortDescending, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Service Allocation
		 * <p>Use this endpoint to return a <b>Service Allocation</b> object. A valid <b>serviceAllocation id</b> is required. Find service allocation id's by using the <i>GET/consumer​/v1​/services​/{id}​/allocations</i> endpoint.</p>
		 * Get consumer/v1/services/allocations/{id}
		 * @param {string} id id of serviceAllocation object
		 * @return {ServiceAllocationViewModel} Success
		 */
		ConsumerV1ServicesAllocations_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<ServiceAllocationViewModel> {
			return this.http.get<ServiceAllocationViewModel>(this.baseUri + 'consumer/v1/services/allocations/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Service
		 * <p>Use this endpoint to return a <b>Service</b> object. A valid <b>service id</b> is required. Find service id's by using the <i>GET /consumer/v1/services</i> endpoint.</p>
		 * Get consumer/v1/services/{id}
		 * @param {number} id id of service object
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ServiceViewModel} Success
		 */
		ConsumerV1Services_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<ServiceViewModel> {
			return this.http.get<ServiceViewModel>(this.baseUri + 'consumer/v1/services/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Service Allocations
		 * <p>Use this endpoint to return a <b>List of Service Allocations</b> associated with the requested service. A valid <b>service id</b> is required. Allocations are used for Event type services/bookings. Retrieve all allocations for a location by passing in zero as the service id. Otherwise, to get allocations for a specific service supply the service id. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://docs.onsched.com/reference/post_setup-v1-services-id-allocations">Create Service Allocations</a></p>
		 * Get consumer/v1/services/{id}/allocations
		 * @param {string} id id of service to list allocations for, 0 for all
		 * @param {string} locationId id of the location, defaults to the primary location
		 * @param {string} resourceId id of the resource to filter on
		 * @param {Date} startDate Format YYYY-MM-DD: Filter allocations on/after startDate
		 * @param {Date} endDate Format YYYY-MM-DD. Filter allocations on/before endDate
		 * @param {number} offset Starting row of page, default 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Page limit default 20, max 100
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ServiceAllocationListViewModel} service alloaction object
		 */
		ConsumerV1Services_idAllocationsGetByLocationIdAndResourceIdAndStartDateAndEndDateAndOffsetAndLimit(id: string, locationId: string | null | undefined, resourceId: string | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ServiceAllocationListViewModel> {
			return this.http.get<ServiceAllocationListViewModel>(this.baseUri + 'consumer/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/allocations&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Resources for Service
		 * <p>Use this endpoint to return a list of <b>Resources that provide the Service requested</b>. A valid <b>service id</b> is required. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>
		 * Get consumer/v1/services/{id}/resources
		 * @param {string} id id of service object
		 * @param {string} locationId id of business location, defaults to primary business location
		 * @param {number} offset Starting row of page, default 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Page limit default 20, max 100
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ResourceListViewModel} Success
		 */
		ConsumerV1Services_idResourcesGetByLocationIdAndOffsetAndLimit(id: string, locationId: string | null | undefined, offset: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ResourceListViewModel> {
			return this.http.get<ResourceListViewModel>(this.baseUri + 'consumer/v1/services/' + (id == null ? '' : encodeURIComponent(id)) + '/resources&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

