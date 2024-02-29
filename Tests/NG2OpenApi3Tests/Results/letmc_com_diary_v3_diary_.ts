import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines a single branch of a client. */
	export interface AdvertisingBranchModel {

		/** Branch address line 1. */
		Address1?: string | null;

		/** Branch address line 2. */
		Address2?: string | null;

		/** Branch address line 3. */
		Address3?: string | null;

		/** Branch address line 4. */
		Address4?: string | null;

		/** The relevant company name, if not the one specified on the branch then the one on company. */
		CompanyName?: string | null;

		/** County */
		County?: string | null;

		/** Branch email address. */
		EMailAddress?: string | null;

		/** A unique identifier defining the object and change revision. */
		ETag?: string | null;

		/** Branch fax phone number. */
		FaxPhone?: string | null;

		/** Branch land phone number. */
		LandPhone?: string | null;

		/** The branch name. */
		Name?: string | null;

		/** The unique Object ID (OID). */
		OID?: string | null;

		/** Branch address postcode. */
		Postcode?: string | null;

		/** Branch web address. */
		WebAddress?: string | null;
	}

	/** Defines a single branch of a client. */
	export interface AdvertisingBranchModelFormProperties {

		/** Branch address line 1. */
		Address1: FormControl<string | null | undefined>,

		/** Branch address line 2. */
		Address2: FormControl<string | null | undefined>,

		/** Branch address line 3. */
		Address3: FormControl<string | null | undefined>,

		/** Branch address line 4. */
		Address4: FormControl<string | null | undefined>,

		/** The relevant company name, if not the one specified on the branch then the one on company. */
		CompanyName: FormControl<string | null | undefined>,

		/** County */
		County: FormControl<string | null | undefined>,

		/** Branch email address. */
		EMailAddress: FormControl<string | null | undefined>,

		/** A unique identifier defining the object and change revision. */
		ETag: FormControl<string | null | undefined>,

		/** Branch fax phone number. */
		FaxPhone: FormControl<string | null | undefined>,

		/** Branch land phone number. */
		LandPhone: FormControl<string | null | undefined>,

		/** The branch name. */
		Name: FormControl<string | null | undefined>,

		/** The unique Object ID (OID). */
		OID: FormControl<string | null | undefined>,

		/** Branch address postcode. */
		Postcode: FormControl<string | null | undefined>,

		/** Branch web address. */
		WebAddress: FormControl<string | null | undefined>,
	}
	export function CreateAdvertisingBranchModelFormGroup() {
		return new FormGroup<AdvertisingBranchModelFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			CompanyName: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			EMailAddress: new FormControl<string | null | undefined>(undefined),
			ETag: new FormControl<string | null | undefined>(undefined),
			FaxPhone: new FormControl<string | null | undefined>(undefined),
			LandPhone: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
			Postcode: new FormControl<string | null | undefined>(undefined),
			WebAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds results from a paged query returning BranchModel values */
	export interface AdvertisingBranchModelResults {

		/**
		 * The total number of results available for all pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count?: number | null;

		/** The resulting data returned from the paged query range */
		Data?: Array<AdvertisingBranchModel>;
	}

	/** Holds results from a paged query returning BranchModel values */
	export interface AdvertisingBranchModelResultsFormProperties {

		/**
		 * The total number of results available for all pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count: FormControl<number | null | undefined>,
	}
	export function CreateAdvertisingBranchModelResultsFormGroup() {
		return new FormGroup<AdvertisingBranchModelResultsFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Hypermedia Link Class */
	export interface BaseHypermediaLink {

		/** The hypermedia href */
		Href?: string | null;

		/** The http method type */
		Method?: string | null;

		/** The hypermedia link relationship to current result object. */
		Relationship?: string | null;
	}

	/** Hypermedia Link Class */
	export interface BaseHypermediaLinkFormProperties {

		/** The hypermedia href */
		Href: FormControl<string | null | undefined>,

		/** The http method type */
		Method: FormControl<string | null | undefined>,

		/** The hypermedia link relationship to current result object. */
		Relationship: FormControl<string | null | undefined>,
	}
	export function CreateBaseHypermediaLinkFormGroup() {
		return new FormGroup<BaseHypermediaLinkFormProperties>({
			Href: new FormControl<string | null | undefined>(undefined),
			Method: new FormControl<string | null | undefined>(undefined),
			Relationship: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Submission Model - Structure to submit the appointment details */
	export interface DiaryAppointmentDetails {

		/** Represents a viewing booking slot */
		AllocationDetails?: DiaryBookingModel;

		/** The Appointment Type ID */
		AppointmentType?: string | null;

		/** Additional appointment comments */
		ExtraComments?: string | null;

		/** A collection of guests linked to the appointment. If none leave empty */
		Guests?: Array<DiaryGuestDetails>;

		/** The subject of the appointment */
		Subject?: string | null;
	}

	/** Submission Model - Structure to submit the appointment details */
	export interface DiaryAppointmentDetailsFormProperties {

		/** The Appointment Type ID */
		AppointmentType: FormControl<string | null | undefined>,

		/** Additional appointment comments */
		ExtraComments: FormControl<string | null | undefined>,

		/** The subject of the appointment */
		Subject: FormControl<string | null | undefined>,
	}
	export function CreateDiaryAppointmentDetailsFormGroup() {
		return new FormGroup<DiaryAppointmentDetailsFormProperties>({
			AppointmentType: new FormControl<string | null | undefined>(undefined),
			ExtraComments: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a viewing booking slot */
	export interface DiaryBookingModel {

		/** The end time of the booking */
		End?: Date | null;

		/** The unique ID of the staff member this booking is with */
		StaffID?: string | null;

		/** The name of the staff member this booking is with */
		StaffName?: string | null;

		/** The start time of the booking */
		Start?: Date | null;
	}

	/** Represents a viewing booking slot */
	export interface DiaryBookingModelFormProperties {

		/** The end time of the booking */
		End: FormControl<Date | null | undefined>,

		/** The unique ID of the staff member this booking is with */
		StaffID: FormControl<string | null | undefined>,

		/** The name of the staff member this booking is with */
		StaffName: FormControl<string | null | undefined>,

		/** The start time of the booking */
		Start: FormControl<Date | null | undefined>,
	}
	export function CreateDiaryBookingModelFormGroup() {
		return new FormGroup<DiaryBookingModelFormProperties>({
			End: new FormControl<Date | null | undefined>(undefined),
			StaffID: new FormControl<string | null | undefined>(undefined),
			StaffName: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Submission Model - Structure to submit appointment guest details */
	export interface DiaryGuestDetails {

		/** Marketing Correspondence Preferences */
		AllowMarketingCorrespondence?: boolean | null;

		/** Email address */
		EmailAddress?: string | null;

		/** Forename */
		Forename?: string | null;

		/** Mobile phone */
		MobilePhone?: string | null;

		/** The unique identifier of a user, only submit this is known */
		OID?: string | null;

		/** Surname */
		Surname?: string | null;
	}

	/** Submission Model - Structure to submit appointment guest details */
	export interface DiaryGuestDetailsFormProperties {

		/** Marketing Correspondence Preferences */
		AllowMarketingCorrespondence: FormControl<boolean | null | undefined>,

		/** Email address */
		EmailAddress: FormControl<string | null | undefined>,

		/** Forename */
		Forename: FormControl<string | null | undefined>,

		/** Mobile phone */
		MobilePhone: FormControl<string | null | undefined>,

		/** The unique identifier of a user, only submit this is known */
		OID: FormControl<string | null | undefined>,

		/** Surname */
		Surname: FormControl<string | null | undefined>,
	}
	export function CreateDiaryGuestDetailsFormGroup() {
		return new FormGroup<DiaryGuestDetailsFormProperties>({
			AllowMarketingCorrespondence: new FormControl<boolean | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			Forename: new FormControl<string | null | undefined>(undefined),
			MobilePhone: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
			Surname: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single diary appointment for a staff member. */
	export interface DiaryAppointmentModel {

		/** The diary appointment type. */
		AppointmentType?: string | null;

		/** Whether the appointment has been cancelled. */
		Cancelled?: boolean | null;

		/** The appointment comments text. */
		Comment?: string | null;

		/** The date/time this appointment was created. */
		CreatedAt?: Date | null;

		/** The staff member that created this appointment. */
		CreatedBy?: string | null;

		/** A unique identifier defining the object and change revision. */
		ETag?: string | null;

		/** The end date/time of this appointment. */
		End?: Date | null;

		/** Linked Guest Model:- */
		LinkedGuest?: Array<LinkedGuestModel>;

		/** A collection of properties linked to the appointment:- */
		LinkedProperties?: Array<LinkedPropertiesModel>;

		/** Date appointment next repeats:- */
		NextRecurringDate?: Date | null;

		/** The unique Object ID (OID). */
		OID?: string | null;

		/**
		 * The reccurrence interval for the appointment:-
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Recurrence?: number | null;

		/** The type of recurrence:- */
		RecurrenceType?: string | null;

		/** The date/time to remind the staff member of this appointment. */
		RemindAt?: Date | null;

		/** The number of minutes before the appointment start date/time to remind the staff member. -1 means don't remind. */
		RemindBefore?: DiaryAppointmentModelRemindBefore | null;

		/** The staff member holding this appointment. */
		Staff?: string | null;

		/** The start date/time of this appointment. */
		Start?: Date | null;

		/** The appointment subject text. */
		Subject?: string | null;
	}

	/** Represents a single diary appointment for a staff member. */
	export interface DiaryAppointmentModelFormProperties {

		/** The diary appointment type. */
		AppointmentType: FormControl<string | null | undefined>,

		/** Whether the appointment has been cancelled. */
		Cancelled: FormControl<boolean | null | undefined>,

		/** The appointment comments text. */
		Comment: FormControl<string | null | undefined>,

		/** The date/time this appointment was created. */
		CreatedAt: FormControl<Date | null | undefined>,

		/** The staff member that created this appointment. */
		CreatedBy: FormControl<string | null | undefined>,

		/** A unique identifier defining the object and change revision. */
		ETag: FormControl<string | null | undefined>,

		/** The end date/time of this appointment. */
		End: FormControl<Date | null | undefined>,

		/** Date appointment next repeats:- */
		NextRecurringDate: FormControl<Date | null | undefined>,

		/** The unique Object ID (OID). */
		OID: FormControl<string | null | undefined>,

		/**
		 * The reccurrence interval for the appointment:-
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Recurrence: FormControl<number | null | undefined>,

		/** The type of recurrence:- */
		RecurrenceType: FormControl<string | null | undefined>,

		/** The date/time to remind the staff member of this appointment. */
		RemindAt: FormControl<Date | null | undefined>,

		/** The number of minutes before the appointment start date/time to remind the staff member. -1 means don't remind. */
		RemindBefore: FormControl<DiaryAppointmentModelRemindBefore | null | undefined>,

		/** The staff member holding this appointment. */
		Staff: FormControl<string | null | undefined>,

		/** The start date/time of this appointment. */
		Start: FormControl<Date | null | undefined>,

		/** The appointment subject text. */
		Subject: FormControl<string | null | undefined>,
	}
	export function CreateDiaryAppointmentModelFormGroup() {
		return new FormGroup<DiaryAppointmentModelFormProperties>({
			AppointmentType: new FormControl<string | null | undefined>(undefined),
			Cancelled: new FormControl<boolean | null | undefined>(undefined),
			Comment: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			ETag: new FormControl<string | null | undefined>(undefined),
			End: new FormControl<Date | null | undefined>(undefined),
			NextRecurringDate: new FormControl<Date | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
			Recurrence: new FormControl<number | null | undefined>(undefined),
			RecurrenceType: new FormControl<string | null | undefined>(undefined),
			RemindAt: new FormControl<Date | null | undefined>(undefined),
			RemindBefore: new FormControl<DiaryAppointmentModelRemindBefore | null | undefined>(undefined),
			Staff: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<Date | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds information on guests */
	export interface LinkedGuestModel {

		/** Guest Created At:- */
		CreatedAt?: Date | null;

		/** Guest Email:- */
		Email?: string | null;

		/** Guest Global Reference:- */
		GlobalReference?: string | null;

		/** Guest Mobile:- */
		Mobile?: string | null;

		/** Guest Name:- */
		Name?: string | null;

		/** Guest OID:- */
		OID?: string | null;
	}

	/** Holds information on guests */
	export interface LinkedGuestModelFormProperties {

		/** Guest Created At:- */
		CreatedAt: FormControl<Date | null | undefined>,

		/** Guest Email:- */
		Email: FormControl<string | null | undefined>,

		/** Guest Global Reference:- */
		GlobalReference: FormControl<string | null | undefined>,

		/** Guest Mobile:- */
		Mobile: FormControl<string | null | undefined>,

		/** Guest Name:- */
		Name: FormControl<string | null | undefined>,

		/** Guest OID:- */
		OID: FormControl<string | null | undefined>,
	}
	export function CreateLinkedGuestModelFormGroup() {
		return new FormGroup<LinkedGuestModelFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			GlobalReference: new FormControl<string | null | undefined>(undefined),
			Mobile: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds information on linked properties */
	export interface LinkedPropertiesModel {

		/** Address 1 */
		Address1?: string | null;

		/** Address2 */
		Address2?: string | null;

		/** Address 3 */
		Address3?: string | null;

		/** Address 4 */
		Address4?: string | null;

		/** Address Flat Room Number */
		AddressFlatRoomNumber?: string | null;

		/** Address Number */
		AddressNumber?: string | null;

		/** ETag */
		ETag?: string | null;

		/** Holds information on the most recent tenancy linked to the property. */
		LatestTenancy?: LatestTenancyModel;

		/** Holds information on landlords */
		MainLandlord?: LinkedLandlordModel;

		/** OID */
		OID?: string | null;

		/** Postcode */
		Postcode?: string | null;
	}

	/** Holds information on linked properties */
	export interface LinkedPropertiesModelFormProperties {

		/** Address 1 */
		Address1: FormControl<string | null | undefined>,

		/** Address2 */
		Address2: FormControl<string | null | undefined>,

		/** Address 3 */
		Address3: FormControl<string | null | undefined>,

		/** Address 4 */
		Address4: FormControl<string | null | undefined>,

		/** Address Flat Room Number */
		AddressFlatRoomNumber: FormControl<string | null | undefined>,

		/** Address Number */
		AddressNumber: FormControl<string | null | undefined>,

		/** ETag */
		ETag: FormControl<string | null | undefined>,

		/** OID */
		OID: FormControl<string | null | undefined>,

		/** Postcode */
		Postcode: FormControl<string | null | undefined>,
	}
	export function CreateLinkedPropertiesModelFormGroup() {
		return new FormGroup<LinkedPropertiesModelFormProperties>({
			Address1: new FormControl<string | null | undefined>(undefined),
			Address2: new FormControl<string | null | undefined>(undefined),
			Address3: new FormControl<string | null | undefined>(undefined),
			Address4: new FormControl<string | null | undefined>(undefined),
			AddressFlatRoomNumber: new FormControl<string | null | undefined>(undefined),
			AddressNumber: new FormControl<string | null | undefined>(undefined),
			ETag: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
			Postcode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds information on the most recent tenancy linked to the property. */
	export interface LatestTenancyModel {

		/** Access Arrangements */
		AccessArrangements?: string | null;

		/** Arrange access Mobile 1 */
		AccessMobile1?: string | null;

		/** Arrange access Mobile 2 */
		AccessMobile2?: string | null;

		/** Arrange access Mobile 3 */
		AccessMobile3?: string | null;

		/** Arrange access contact name 1 */
		AccessName1?: string | null;

		/** Arrange access contact name 2 */
		AccessName2?: string | null;

		/** Arrange access contact name 3 */
		AccessName3?: string | null;

		/** ETag */
		ETag?: string | null;

		/** The end date of the Tenancy */
		EndDate?: Date | null;

		/** The fixed date of the Tenancy */
		FixedDate?: Date | null;

		/** The unique global reference of the Tenancy */
		GlobalReference?: string | null;

		/** Has the Tenancy ended? */
		IsTenancyEnded?: boolean | null;

		/** Is the tenancy Proposed? */
		IsTenancyProposed?: boolean | null;

		/** Is the tenancy signed? */
		IsTenancySigned?: boolean | null;

		/** A collection of tenants linked to the tenancy:- */
		LinkedTenants?: Array<LinkedTenantModel>;

		/** OID */
		OID?: string | null;

		/** The start date of the Tenancy */
		StartDate?: Date | null;
	}

	/** Holds information on the most recent tenancy linked to the property. */
	export interface LatestTenancyModelFormProperties {

		/** Access Arrangements */
		AccessArrangements: FormControl<string | null | undefined>,

		/** Arrange access Mobile 1 */
		AccessMobile1: FormControl<string | null | undefined>,

		/** Arrange access Mobile 2 */
		AccessMobile2: FormControl<string | null | undefined>,

		/** Arrange access Mobile 3 */
		AccessMobile3: FormControl<string | null | undefined>,

		/** Arrange access contact name 1 */
		AccessName1: FormControl<string | null | undefined>,

		/** Arrange access contact name 2 */
		AccessName2: FormControl<string | null | undefined>,

		/** Arrange access contact name 3 */
		AccessName3: FormControl<string | null | undefined>,

		/** ETag */
		ETag: FormControl<string | null | undefined>,

		/** The end date of the Tenancy */
		EndDate: FormControl<Date | null | undefined>,

		/** The fixed date of the Tenancy */
		FixedDate: FormControl<Date | null | undefined>,

		/** The unique global reference of the Tenancy */
		GlobalReference: FormControl<string | null | undefined>,

		/** Has the Tenancy ended? */
		IsTenancyEnded: FormControl<boolean | null | undefined>,

		/** Is the tenancy Proposed? */
		IsTenancyProposed: FormControl<boolean | null | undefined>,

		/** Is the tenancy signed? */
		IsTenancySigned: FormControl<boolean | null | undefined>,

		/** OID */
		OID: FormControl<string | null | undefined>,

		/** The start date of the Tenancy */
		StartDate: FormControl<Date | null | undefined>,
	}
	export function CreateLatestTenancyModelFormGroup() {
		return new FormGroup<LatestTenancyModelFormProperties>({
			AccessArrangements: new FormControl<string | null | undefined>(undefined),
			AccessMobile1: new FormControl<string | null | undefined>(undefined),
			AccessMobile2: new FormControl<string | null | undefined>(undefined),
			AccessMobile3: new FormControl<string | null | undefined>(undefined),
			AccessName1: new FormControl<string | null | undefined>(undefined),
			AccessName2: new FormControl<string | null | undefined>(undefined),
			AccessName3: new FormControl<string | null | undefined>(undefined),
			ETag: new FormControl<string | null | undefined>(undefined),
			EndDate: new FormControl<Date | null | undefined>(undefined),
			FixedDate: new FormControl<Date | null | undefined>(undefined),
			GlobalReference: new FormControl<string | null | undefined>(undefined),
			IsTenancyEnded: new FormControl<boolean | null | undefined>(undefined),
			IsTenancyProposed: new FormControl<boolean | null | undefined>(undefined),
			IsTenancySigned: new FormControl<boolean | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
			StartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Holds information on tenants */
	export interface LinkedTenantModel {

		/** ETag */
		ETag?: string | null;

		/** Tenant's email address */
		Email?: string | null;

		/** Forename */
		Forename?: string | null;

		/** OID */
		OID?: string | null;

		/** Tenant's phone number */
		PhoneNumber?: string | null;

		/** Surname */
		Surname?: string | null;

		/** Title */
		Title?: string | null;
	}

	/** Holds information on tenants */
	export interface LinkedTenantModelFormProperties {

		/** ETag */
		ETag: FormControl<string | null | undefined>,

		/** Tenant's email address */
		Email: FormControl<string | null | undefined>,

		/** Forename */
		Forename: FormControl<string | null | undefined>,

		/** OID */
		OID: FormControl<string | null | undefined>,

		/** Tenant's phone number */
		PhoneNumber: FormControl<string | null | undefined>,

		/** Surname */
		Surname: FormControl<string | null | undefined>,

		/** Title */
		Title: FormControl<string | null | undefined>,
	}
	export function CreateLinkedTenantModelFormGroup() {
		return new FormGroup<LinkedTenantModelFormProperties>({
			ETag: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Forename: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Surname: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds information on landlords */
	export interface LinkedLandlordModel {

		/** ETag */
		ETag?: string | null;

		/** Landlord's email address */
		Email?: string | null;

		/** Forename */
		Forename?: string | null;

		/** OID */
		OID?: string | null;

		/** Landlord's phone number */
		PhoneNumber?: string | null;

		/** Surname */
		Surname?: string | null;

		/** Title */
		Title?: string | null;
	}

	/** Holds information on landlords */
	export interface LinkedLandlordModelFormProperties {

		/** ETag */
		ETag: FormControl<string | null | undefined>,

		/** Landlord's email address */
		Email: FormControl<string | null | undefined>,

		/** Forename */
		Forename: FormControl<string | null | undefined>,

		/** OID */
		OID: FormControl<string | null | undefined>,

		/** Landlord's phone number */
		PhoneNumber: FormControl<string | null | undefined>,

		/** Surname */
		Surname: FormControl<string | null | undefined>,

		/** Title */
		Title: FormControl<string | null | undefined>,
	}
	export function CreateLinkedLandlordModelFormGroup() {
		return new FormGroup<LinkedLandlordModelFormProperties>({
			ETag: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Forename: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Surname: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiaryAppointmentModelRemindBefore { Min = 'Min', Min2 = 'Min2', Min5 = 'Min5', Min10 = 'Min10', Min15 = 'Min15', Min30 = 'Min30', Min45 = 'Min45', Hour = 'Hour', Hour2 = 'Hour2', Hour3 = 'Hour3', Hour6 = 'Hour6', Hour12 = 'Hour12', Day = 'Day', Day2 = 'Day2', Day3 = 'Day3', Week = 'Week', NoReminder = 'NoReminder' }


	/** Holds results from a paged query returning DiaryAppointmentModel values */
	export interface DiaryAppointmentModelResults {

		/**
		 * The total number of results available for all pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count?: number | null;

		/** The resulting data returned from the paged query range */
		Data?: Array<DiaryAppointmentModel>;
	}

	/** Holds results from a paged query returning DiaryAppointmentModel values */
	export interface DiaryAppointmentModelResultsFormProperties {

		/**
		 * The total number of results available for all pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count: FormControl<number | null | undefined>,
	}
	export function CreateDiaryAppointmentModelResultsFormGroup() {
		return new FormGroup<DiaryAppointmentModelResultsFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a diary appointment type. */
	export interface DiaryAppointmentTypeModel {

		/** A unique identifier defining the object and change revision. */
		ETag?: string | null;

		/** The appointment type name. */
		Name?: string | null;

		/** The unique Object ID (OID). */
		OID?: string | null;

		/** The appointment system type. */
		SystemType?: DiaryAppointmentTypeModelSystemType | null;
	}

	/** Represents a diary appointment type. */
	export interface DiaryAppointmentTypeModelFormProperties {

		/** A unique identifier defining the object and change revision. */
		ETag: FormControl<string | null | undefined>,

		/** The appointment type name. */
		Name: FormControl<string | null | undefined>,

		/** The unique Object ID (OID). */
		OID: FormControl<string | null | undefined>,

		/** The appointment system type. */
		SystemType: FormControl<DiaryAppointmentTypeModelSystemType | null | undefined>,
	}
	export function CreateDiaryAppointmentTypeModelFormGroup() {
		return new FormGroup<DiaryAppointmentTypeModelFormProperties>({
			ETag: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
			SystemType: new FormControl<DiaryAppointmentTypeModelSystemType | null | undefined>(undefined),
		});

	}

	export enum DiaryAppointmentTypeModelSystemType { Viewing = 'Viewing', ViewAndValue = 'ViewAndValue', OpeningInspection = 'OpeningInspection', InterimInspection = 'InterimInspection', ClosingInspection = 'ClosingInspection', SalesAppraisal = 'SalesAppraisal', Custom = 'Custom' }


	/** Holds results from a paged query returning DiaryAppointmentTypeModel values */
	export interface DiaryAppointmentTypeModelResults {

		/**
		 * The total number of results available for all pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count?: number | null;

		/** The resulting data returned from the paged query range */
		Data?: Array<DiaryAppointmentTypeModel>;
	}

	/** Holds results from a paged query returning DiaryAppointmentTypeModel values */
	export interface DiaryAppointmentTypeModelResultsFormProperties {

		/**
		 * The total number of results available for all pages
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count: FormControl<number | null | undefined>,
	}
	export function CreateDiaryAppointmentTypeModelResultsFormGroup() {
		return new FormGroup<DiaryAppointmentTypeModelResultsFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Feedback Submission Model:- */
	export interface FeedbackSubmissionModel {

		/** Appointment to submit feedback to:- */
		AppointmentID?: string | null;

		/** Feedback to submit:- */
		Feedback?: string | null;

		/** Property to submit feedback to:- */
		PropertyID?: string | null;
	}

	/** Feedback Submission Model:- */
	export interface FeedbackSubmissionModelFormProperties {

		/** Appointment to submit feedback to:- */
		AppointmentID: FormControl<string | null | undefined>,

		/** Feedback to submit:- */
		Feedback: FormControl<string | null | undefined>,

		/** Property to submit feedback to:- */
		PropertyID: FormControl<string | null | undefined>,
	}
	export function CreateFeedbackSubmissionModelFormGroup() {
		return new FormGroup<FeedbackSubmissionModelFormProperties>({
			AppointmentID: new FormControl<string | null | undefined>(undefined),
			Feedback: new FormControl<string | null | undefined>(undefined),
			PropertyID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Guest Diary Parameters Model */
	export interface GuestDiaryParametersModel {

		/** Guest Mobile Phone */
		ContactMobile?: string | null;

		/** Guest Email Address */
		EmailAddress?: string | null;

		/** Guest Forename */
		Forename?: string | null;

		/** Guest OID */
		OID?: string | null;

		/** Guest Surname */
		Surname?: string | null;
	}

	/** Guest Diary Parameters Model */
	export interface GuestDiaryParametersModelFormProperties {

		/** Guest Mobile Phone */
		ContactMobile: FormControl<string | null | undefined>,

		/** Guest Email Address */
		EmailAddress: FormControl<string | null | undefined>,

		/** Guest Forename */
		Forename: FormControl<string | null | undefined>,

		/** Guest OID */
		OID: FormControl<string | null | undefined>,

		/** Guest Surname */
		Surname: FormControl<string | null | undefined>,
	}
	export function CreateGuestDiaryParametersModelFormGroup() {
		return new FormGroup<GuestDiaryParametersModelFormProperties>({
			ContactMobile: new FormControl<string | null | undefined>(undefined),
			EmailAddress: new FormControl<string | null | undefined>(undefined),
			Forename: new FormControl<string | null | undefined>(undefined),
			OID: new FormControl<string | null | undefined>(undefined),
			Surname: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contacts Person Model Results:- */
	export interface GuestDiaryParametersResultsModel {

		/**
		 * Results count:-
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count?: number | null;

		/** Results data:- */
		Data?: Array<GuestDiaryParametersModel>;

		/** Results links:- */
		Links?: Array<BaseHypermediaLink>;
	}

	/** Contacts Person Model Results:- */
	export interface GuestDiaryParametersResultsModelFormProperties {

		/**
		 * Results count:-
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Count: FormControl<number | null | undefined>,
	}
	export function CreateGuestDiaryParametersResultsModelFormGroup() {
		return new FormGroup<GuestDiaryParametersResultsModelFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of all available allocations for a date + 7 days for a specified appointment type
		 * Get v3/diary/{shortName}/allocations
		 * @param {string} shortName The unique client short-name
		 * @param {Date} preferredDate The date to search from
		 * @param {string} appointmentType The unique appointment type identifier
		 * @param {boolean} lettings Sales or Lettings property?
		 * @param {string} propertyIdentifier The unique property identifier (Sales or Lettings) determines branch and property type
		 * @param {string} branchID Branch ID to check appointments (required if no property submitted)
		 * @return {Array<DiaryBookingModel>} OK
		 */
		DiaryController_GetAllocations(shortName: string, preferredDate: Date, appointmentType: string, lettings: boolean | null | undefined, propertyIdentifier: string | null | undefined, branchID: string | null | undefined): Observable<Array<DiaryBookingModel>> {
			return this.http.get<Array<DiaryBookingModel>>(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/allocations&preferredDate=' + preferredDate.toISOString() + '&appointmentType=' + (appointmentType == null ? '' : encodeURIComponent(appointmentType)) + '&lettings=' + lettings + '&propertyIdentifier=' + (propertyIdentifier == null ? '' : encodeURIComponent(propertyIdentifier)) + '&branchID=' + (branchID == null ? '' : encodeURIComponent(branchID)), {});
		}

		/**
		 * Delete an existing appointment using its unique identifier
		 * Delete v3/diary/{shortName}/appointment
		 * @param {string} shortName The unique client short-name
		 * @param {string} appointmentID The unique appointment id
		 * @return {string} OK
		 */
		DiaryController_DeleteAppointment(shortName: string, appointmentID: string): Observable<string> {
			return this.http.delete(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/appointment&appointmentID=' + (appointmentID == null ? '' : encodeURIComponent(appointmentID)), { responseType: 'text' });
		}

		/**
		 * Get an appointment by ID
		 * Get v3/diary/{shortName}/appointment
		 * @param {string} shortName Company short name
		 * @param {string} appointmentID Appointment ID
		 * @return {DiaryAppointmentModel} OK
		 */
		DiaryController_GetAppointment(shortName: string, appointmentID: string): Observable<DiaryAppointmentModel> {
			return this.http.get<DiaryAppointmentModel>(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/appointment&appointmentID=' + (appointmentID == null ? '' : encodeURIComponent(appointmentID)), {});
		}

		/**
		 * Post an appointment into a valid diary allocation
		 * Post v3/diary/{shortName}/appointment
		 * @param {string} shortName The unique client short-name
		 * @param {Array<string>} propertyIdentifier The unique property identifier (Sales or Lettings)
		 * @param {boolean} lettings Sales or Lettings property?
		 * @param {DiaryAppointmentDetails} requestBody The appointment details model
		 * @return {string} OK
		 */
		DiaryController_PostAppointment(shortName: string, propertyIdentifier: Array<string>, lettings: boolean | null | undefined, requestBody: DiaryAppointmentDetails): Observable<string> {
			return this.http.post(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/appointment&' + propertyIdentifier.map(z => `propertyIdentifier=${encodeURIComponent(z)}`).join('&') + '&lettings=' + lettings, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Update an existing appointment using its unique identifier
		 * Put v3/diary/{shortName}/appointment
		 * @param {string} shortName The unique client short-name
		 * @param {string} appointmentID The unique appointment id
		 * @param {boolean} lettings Sales or Lettings property?
		 * @param {boolean} AllowMarketingCorrespondence Sales or Lettings property?
		 * @param {DiaryAppointmentDetails} requestBody The appointment details model
		 * @return {string} OK
		 */
		DiaryController_PutAppointment(shortName: string, appointmentID: string, lettings: boolean | null | undefined, AllowMarketingCorrespondence: boolean | null | undefined, requestBody: DiaryAppointmentDetails): Observable<string> {
			return this.http.put(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/appointment&appointmentID=' + (appointmentID == null ? '' : encodeURIComponent(appointmentID)) + '&lettings=' + lettings + '&AllowMarketingCorrespondence=' + AllowMarketingCorrespondence, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Submit appointment feedback
		 * Post v3/diary/{shortName}/appointment/feedback
		 * @param {string} shortName The unique client short-name
		 * @param {FeedbackSubmissionModel} requestBody Feedback submission model
		 * @return {string} OK
		 */
		DiaryController_AddFeedback(shortName: string, requestBody: FeedbackSubmissionModel): Observable<string> {
			return this.http.post(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/appointment/feedback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Cancel an existing appointment using its unique identifier
		 * Patch v3/diary/{shortName}/appointment/{appointmentID}/cancel
		 * @param {string} shortName The unique client short-name
		 * @param {string} appointmentID The unique appointment id
		 * @return {string} OK
		 */
		DiaryController_CancelAppointment(shortName: string, appointmentID: string): Observable<string> {
			return this.http.patch(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/appointment/' + (appointmentID == null ? '' : encodeURIComponent(appointmentID)) + '/cancel', null, { responseType: 'text' });
		}

		/**
		 * A collection of diary appointments linked to a company filtered between specific dates and by appointment type
		 * Get v3/diary/{shortName}/appointmentsbetweendates
		 * @param {string} shortName The unique client short-name
		 * @param {string} branchID The unique ID of the Branch
		 * @param {Date} startDate The search from date
		 * @param {Date} endDate The search to date
		 * @param {Array<string>} appointmentTypesToSearch The appointment IDs to search for
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} count The maximum number of items to return (up to 1000 per request)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DiaryAppointmentModelResults} OK
		 */
		DiaryController_GetAppointmentsBetweenDates(shortName: string, branchID: string, startDate: Date, endDate: Date, appointmentTypesToSearch: Array<string>, offset: number, count: number): Observable<DiaryAppointmentModelResults> {
			return this.http.get<DiaryAppointmentModelResults>(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/appointmentsbetweendates&branchID=' + (branchID == null ? '' : encodeURIComponent(branchID)) + '&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString() + '&' + appointmentTypesToSearch.map(z => `appointmentTypesToSearch=${encodeURIComponent(z)}`).join('&') + '&offset=' + offset + '&count=' + count, {});
		}

		/**
		 * A collection of all diary appointment types
		 * Get v3/diary/{shortName}/appointmenttypes
		 * @param {string} shortName The unique client short-name
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} count The maximum number of items to return (up to 1000 per request)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DiaryAppointmentTypeModelResults} OK
		 */
		DiaryController_GetAppointmentTypes(shortName: string, offset: number, count: number): Observable<DiaryAppointmentTypeModelResults> {
			return this.http.get<DiaryAppointmentTypeModelResults>(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/appointmenttypes&offset=' + offset + '&count=' + count, {});
		}

		/**
		 * All branches defined for a company
		 * Get v3/diary/{shortName}/company/branches
		 * @param {string} shortName The unique client short-name
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} count The maximum number of items to return (up to 1000 per request)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {AdvertisingBranchModelResults} OK
		 */
		CompanyController_GetBranches(shortName: string, offset: number, count: number): Observable<AdvertisingBranchModelResults> {
			return this.http.get<AdvertisingBranchModelResults>(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/company/branches&offset=' + offset + '&count=' + count, {});
		}

		/**
		 * Get a specific branch given its unique Object ID (OID)
		 * Get v3/diary/{shortName}/company/branches/{branchID}
		 * @param {string} shortName The unique client short-name
		 * @param {string} branchID The unique ID of the Branch
		 * @return {AdvertisingBranchModel} OK
		 */
		CompanyControllerGetByShortNameAndBranchID(shortName: string, branchID: string): Observable<AdvertisingBranchModel> {
			return this.http.get<AdvertisingBranchModel>(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/company/branches/' + (branchID == null ? '' : encodeURIComponent(branchID)), {});
		}

		/**
		 * Retrieves all recurring appointments:-
		 * Get v3/diary/{shortName}/recurringappointment
		 * @param {string} shortName The unique client short-name
		 * @param {string} branchID The unique ID of the Branch
		 * @param {Array<string>} appointmentTypesToSearch The appointment IDs to search for
		 * @param {number} offset The index of the first item to return
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} count The maximum number of items to return (up to 1000 per request)
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DiaryAppointmentModelResults} OK
		 */
		DiaryController_GetRecurringAppointments(shortName: string, branchID: string, appointmentTypesToSearch: Array<string>, offset: number, count: number): Observable<DiaryAppointmentModelResults> {
			return this.http.get<DiaryAppointmentModelResults>(this.baseUri + 'v3/diary/' + (shortName == null ? '' : encodeURIComponent(shortName)) + '/recurringappointment&branchID=' + (branchID == null ? '' : encodeURIComponent(branchID)) + '&' + appointmentTypesToSearch.map(z => `appointmentTypesToSearch=${encodeURIComponent(z)}`).join('&') + '&offset=' + offset + '&count=' + count, {});
		}

		/**
		 * Match Guest Parameters with existing applicants
		 * Get v3/diary/{shortname}/{branchID}/guest/search
		 * @param {number} offset Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} count Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GuestDiaryParametersResultsModel} OK
		 */
		DiaryController_SearchGuest(shortname: string, branchID: string, forename: string, emailaddress: string, surname: string, offset: number, count: number): Observable<GuestDiaryParametersResultsModel> {
			return this.http.get<GuestDiaryParametersResultsModel>(this.baseUri + 'v3/diary/' + (shortname == null ? '' : encodeURIComponent(shortname)) + '/' + (branchID == null ? '' : encodeURIComponent(branchID)) + '/guest/search&forename=' + (forename == null ? '' : encodeURIComponent(forename)) + '&emailaddress=' + (emailaddress == null ? '' : encodeURIComponent(emailaddress)) + '&surname=' + (surname == null ? '' : encodeURIComponent(surname)) + '&offset=' + offset + '&count=' + count, {});
		}
	}

}

