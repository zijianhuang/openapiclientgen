import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Description of an address. */
	export interface Address {

		/** Street name and number. */
		address_1?: string | null;

		/** Second line of address if applicable (such as a building number). */
		address_2?: string | null;

		/** Third line of address if applicable (such as a unit or suite number). */
		address_3?: string | null;

		/** City name. */
		city?: string | null;

		/** State code. */
		state?: string | null;

		/** Postal (ZIP) code. */
		zip?: string | null;
	}

	/** Description of an address. */
	export interface AddressFormProperties {

		/** Street name and number. */
		address_1: FormControl<string | null | undefined>,

		/** Second line of address if applicable (such as a building number). */
		address_2: FormControl<string | null | undefined>,

		/** Third line of address if applicable (such as a unit or suite number). */
		address_3: FormControl<string | null | undefined>,

		/** City name. */
		city: FormControl<string | null | undefined>,

		/** State code. */
		state: FormControl<string | null | undefined>,

		/** Postal (ZIP) code. */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			address_1: new FormControl<string | null | undefined>(undefined),
			address_2: new FormControl<string | null | undefined>(undefined),
			address_3: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of addresses associated with a facility. */
	export interface Addresses {

		/** Description of an address. */
		mailing?: Address;

		/** Description of an address. */
		physical?: Address;
	}

	/** Collection of addresses associated with a facility. */
	export interface AddressesFormProperties {
	}
	export function CreateAddressesFormGroup() {
		return new FormGroup<AddressesFormProperties>({
		});

	}


	/** API invocation or processing error */
	export interface ApiError {

		/** Required */
		errors: Array<ErrorMessage>;
	}

	/** API invocation or processing error */
	export interface ApiErrorFormProperties {
	}
	export function CreateApiErrorFormGroup() {
		return new FormGroup<ApiErrorFormProperties>({
		});

	}

	export interface ErrorMessage {
		code?: string | null;
		detail?: string | null;
		status?: string | null;
		title?: string | null;
	}
	export interface ErrorMessageFormProperties {
		code: FormControl<string | null | undefined>,
		detail: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateErrorMessageFormGroup() {
		return new FormGroup<ErrorMessageFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Phone number information for scheduling an appointment. */
	export interface AppointmentPhoneNumber {

		/** Appointment phone number extension. */
		extension?: string | null;

		/** Appointment phone number label (e.g. 'Main phone', 'Appointment phone', etc). */
		label?: string | null;

		/** Appointment phone number. */
		number?: string | null;

		/** Appointment contact number type (e.g. 'tel', 'fax', etc) */
		type?: string | null;
	}

	/** Phone number information for scheduling an appointment. */
	export interface AppointmentPhoneNumberFormProperties {

		/** Appointment phone number extension. */
		extension: FormControl<string | null | undefined>,

		/** Appointment phone number label (e.g. 'Main phone', 'Appointment phone', etc). */
		label: FormControl<string | null | undefined>,

		/** Appointment phone number. */
		number: FormControl<string | null | undefined>,

		/** Appointment contact number type (e.g. 'tel', 'fax', etc) */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAppointmentPhoneNumberFormGroup() {
		return new FormGroup<AppointmentPhoneNumberFormProperties>({
			extension: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed information of a facility service. */
	export interface DetailedService {

		/** Additional appointment information. May contain html / string formatting characters. */
		appointment_leadin?: string | null;

		/** List of phone numbers related to scheduling appointments for this service. */
		appointment_phones?: Array<AppointmentPhoneNumber>;

		/** Deprecated until further notice. */
		description_facility?: string | null;

		/** Service name. */
		name?: string | null;

		/** String detailing online scheduling availability. */
		online_scheduling_available?: string | null;

		/** URL to a page with additional details for this service within the associated facility's health care system. */
		path?: string | null;

		/** String detailing if referrals are required for the service. */
		referral_required?: string | null;

		/** Service id. */
		service_id?: string | null;

		/** List of service locations. */
		service_locations?: Array<DetailedServiceLocation>;

		/** String detailing if walk-ins are accepted for the service. */
		walk_ins_accepted?: string | null;
	}

	/** Detailed information of a facility service. */
	export interface DetailedServiceFormProperties {

		/** Additional appointment information. May contain html / string formatting characters. */
		appointment_leadin: FormControl<string | null | undefined>,

		/** Deprecated until further notice. */
		description_facility: FormControl<string | null | undefined>,

		/** Service name. */
		name: FormControl<string | null | undefined>,

		/** String detailing online scheduling availability. */
		online_scheduling_available: FormControl<string | null | undefined>,

		/** URL to a page with additional details for this service within the associated facility's health care system. */
		path: FormControl<string | null | undefined>,

		/** String detailing if referrals are required for the service. */
		referral_required: FormControl<string | null | undefined>,

		/** Service id. */
		service_id: FormControl<string | null | undefined>,

		/** String detailing if walk-ins are accepted for the service. */
		walk_ins_accepted: FormControl<string | null | undefined>,
	}
	export function CreateDetailedServiceFormGroup() {
		return new FormGroup<DetailedServiceFormProperties>({
			appointment_leadin: new FormControl<string | null | undefined>(undefined),
			description_facility: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			online_scheduling_available: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			referral_required: new FormControl<string | null | undefined>(undefined),
			service_id: new FormControl<string | null | undefined>(undefined),
			walk_ins_accepted: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for a location offering a service. */
	export interface DetailedServiceLocation {

		/** Additional information related to service location hours. */
		additional_hours_info?: string | null;

		/** List of appointment phone information. */
		appointment_phones?: Array<AppointmentPhoneNumber>;

		/** List of email contact information regarding facility services. */
		email_contacts?: Array<DetailedServiceEmailContact>;

		/** Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events. */
		facility_service_hours?: DetailedServiceHours;

		/** Service location address. */
		service_location_address?: DetailedServiceAddress;
	}

	/** Details for a location offering a service. */
	export interface DetailedServiceLocationFormProperties {

		/** Additional information related to service location hours. */
		additional_hours_info: FormControl<string | null | undefined>,
	}
	export function CreateDetailedServiceLocationFormGroup() {
		return new FormGroup<DetailedServiceLocationFormProperties>({
			additional_hours_info: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Email contact information for facility service. */
	export interface DetailedServiceEmailContact {

		/** Email address for facility service contact. */
		email_address?: string | null;

		/** Email address label. */
		email_label?: string | null;
	}

	/** Email contact information for facility service. */
	export interface DetailedServiceEmailContactFormProperties {

		/** Email address for facility service contact. */
		email_address: FormControl<string | null | undefined>,

		/** Email address label. */
		email_label: FormControl<string | null | undefined>,
	}
	export function CreateDetailedServiceEmailContactFormGroup() {
		return new FormGroup<DetailedServiceEmailContactFormProperties>({
			email_address: new FormControl<string | null | undefined>(undefined),
			email_label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events. */
	export interface DetailedServiceHours {

		/** Service availability on Fridays. */
		Friday?: string | null;

		/** Service availability on Mondays. */
		Monday?: string | null;

		/** Service availability on Saturdays. */
		Saturday?: string | null;

		/** Service availability on Sundays. */
		Sunday?: string | null;

		/** Service availability on Thursdays. */
		Thursday?: string | null;

		/** Service availability on Tuesdays. */
		Tuesday?: string | null;

		/** Service availability on Wednesdays. */
		Wednesday?: string | null;
	}

	/** Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events. */
	export interface DetailedServiceHoursFormProperties {

		/** Service availability on Fridays. */
		Friday: FormControl<string | null | undefined>,

		/** Service availability on Mondays. */
		Monday: FormControl<string | null | undefined>,

		/** Service availability on Saturdays. */
		Saturday: FormControl<string | null | undefined>,

		/** Service availability on Sundays. */
		Sunday: FormControl<string | null | undefined>,

		/** Service availability on Thursdays. */
		Thursday: FormControl<string | null | undefined>,

		/** Service availability on Tuesdays. */
		Tuesday: FormControl<string | null | undefined>,

		/** Service availability on Wednesdays. */
		Wednesday: FormControl<string | null | undefined>,
	}
	export function CreateDetailedServiceHoursFormGroup() {
		return new FormGroup<DetailedServiceHoursFormProperties>({
			Friday: new FormControl<string | null | undefined>(undefined),
			Monday: new FormControl<string | null | undefined>(undefined),
			Saturday: new FormControl<string | null | undefined>(undefined),
			Sunday: new FormControl<string | null | undefined>(undefined),
			Thursday: new FormControl<string | null | undefined>(undefined),
			Tuesday: new FormControl<string | null | undefined>(undefined),
			Wednesday: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service location address. */
	export interface DetailedServiceAddress {

		/** Street name and number. */
		address_line1?: string | null;

		/** Building number. */
		address_line2?: string | null;

		/** Building name and/or number of service. */
		building_name_number?: string | null;

		/** City name. */
		city?: string | null;

		/** Clinic name for service. */
		clinic_name?: string | null;

		/** Country code. */
		country_code?: string | null;

		/** State code. */
		state?: string | null;

		/** Wing, floor, or room number of service. */
		wing_floor_or_room_number?: string | null;

		/** Postal (ZIP) code. */
		zip_code?: string | null;
	}

	/** Service location address. */
	export interface DetailedServiceAddressFormProperties {

		/** Street name and number. */
		address_line1: FormControl<string | null | undefined>,

		/** Building number. */
		address_line2: FormControl<string | null | undefined>,

		/** Building name and/or number of service. */
		building_name_number: FormControl<string | null | undefined>,

		/** City name. */
		city: FormControl<string | null | undefined>,

		/** Clinic name for service. */
		clinic_name: FormControl<string | null | undefined>,

		/** Country code. */
		country_code: FormControl<string | null | undefined>,

		/** State code. */
		state: FormControl<string | null | undefined>,

		/** Wing, floor, or room number of service. */
		wing_floor_or_room_number: FormControl<string | null | undefined>,

		/** Postal (ZIP) code. */
		zip_code: FormControl<string | null | undefined>,
	}
	export function CreateDetailedServiceAddressFormGroup() {
		return new FormGroup<DetailedServiceAddressFormProperties>({
			address_line1: new FormControl<string | null | undefined>(undefined),
			address_line2: new FormControl<string | null | undefined>(undefined),
			building_name_number: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			clinic_name: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			wing_floor_or_room_number: new FormControl<string | null | undefined>(undefined),
			zip_code: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Distance to facility in miles using decimal format. Used when querying for facilities proximal to a location.  */
	export interface Distance {

		/**
		 * Distance to facility in decimal format.
		 * Required
		 * Type: double
		 */
		distance: number;

		/**
		 * Identifier of facility.
		 * Required
		 */
		id: string;
	}

	/** Distance to facility in miles using decimal format. Used when querying for facilities proximal to a location.  */
	export interface DistanceFormProperties {

		/**
		 * Distance to facility in decimal format.
		 * Required
		 * Type: double
		 */
		distance: FormControl<number | null | undefined>,

		/**
		 * Identifier of facility.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDistanceFormGroup() {
		return new FormGroup<DistanceFormProperties>({
			distance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** JSON API response for a query for facility ids. */
	export interface FacilitiesIdsResponse {

		/** List of VA facility ids. */
		data?: Array<string>;
	}

	/** JSON API response for a query for facility ids. */
	export interface FacilitiesIdsResponseFormProperties {
	}
	export function CreateFacilitiesIdsResponseFormGroup() {
		return new FormGroup<FacilitiesIdsResponseFormProperties>({
		});

	}


	/** Metadata representation for data in response. This metadata includes paginated items that allow user to see the current page, objects perPage, total pages and total entries. */
	export interface FacilitiesMetadata {
		distances?: Array<Distance>;

		/**
		 * Pagination data reflecting response that has been seperated into discrete pages.
		 * Required
		 */
		pagination: Pagination;
	}

	/** Metadata representation for data in response. This metadata includes paginated items that allow user to see the current page, objects perPage, total pages and total entries. */
	export interface FacilitiesMetadataFormProperties {
	}
	export function CreateFacilitiesMetadataFormGroup() {
		return new FormGroup<FacilitiesMetadataFormProperties>({
		});

	}


	/** Pagination data reflecting response that has been seperated into discrete pages. */
	export interface Pagination {

		/**
		 * Current page of response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		current_page: number;

		/**
		 * Number of results per page.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page: number;

		/**
		 * Total number of entries matching this query.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_entries: number;

		/**
		 * Total number of pages matching this query.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_pages: number;
	}

	/** Pagination data reflecting response that has been seperated into discrete pages. */
	export interface PaginationFormProperties {

		/**
		 * Current page of response.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		current_page: FormControl<number | null | undefined>,

		/**
		 * Number of results per page.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		per_page: FormControl<number | null | undefined>,

		/**
		 * Total number of entries matching this query.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_entries: FormControl<number | null | undefined>,

		/**
		 * Total number of pages matching this query.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_pages: FormControl<number | null | undefined>,
	}
	export function CreatePaginationFormGroup() {
		return new FormGroup<PaginationFormProperties>({
			current_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			per_page: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_entries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total_pages: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** JSON API-compliant response object describing one or more VA facilities */
	export interface FacilitiesResponse {
		data?: Array<Facility>;

		/**
		 * Links for first page, next page, previous and last page of response.
		 * Required
		 */
		links: PageLinks;

		/**
		 * Metadata representation for data in response. This metadata includes paginated items that allow user to see the current page, objects perPage, total pages and total entries.
		 * Required
		 */
		meta: FacilitiesMetadata;
	}

	/** JSON API-compliant response object describing one or more VA facilities */
	export interface FacilitiesResponseFormProperties {
	}
	export function CreateFacilitiesResponseFormGroup() {
		return new FormGroup<FacilitiesResponseFormProperties>({
		});

	}


	/** JSON API representation of a Facility. */
	export interface Facility {

		/**
		 * Details describing a facility.
		 * Required
		 */
		attributes: FacilityAttributes;

		/**
		 * Identifier representing facility.
		 * Required
		 */
		id: string;

		/**
		 * One of 4 facility top-level type categories (e.g. health, benefits, cemetery and vet center).
		 * Required
		 */
		type: FacilityType;
	}

	/** JSON API representation of a Facility. */
	export interface FacilityFormProperties {

		/**
		 * Identifier representing facility.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * One of 4 facility top-level type categories (e.g. health, benefits, cemetery and vet center).
		 * Required
		 */
		type: FormControl<FacilityType | null | undefined>,
	}
	export function CreateFacilityFormGroup() {
		return new FormGroup<FacilityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<FacilityType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details describing a facility. */
	export interface FacilityAttributes {

		/** This field is deprecated and replaced with "operating_status". */
		active_status?: FacilityAttributesActive_status | null;

		/** Collection of addresses associated with a facility. */
		address?: Addresses;

		/** Subtype of facility which can further be used to describe facility. */
		classification?: string | null;
		detailed_services?: Array<DetailedService>;

		/**
		 * One of facility top-level type categories (e.g.) health, benefits, cemetery and vet center.
		 * Required
		 */
		facility_type: FacilityAttributesFacility_type;

		/** Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events. */
		hours?: Hours;

		/**
		 * Facility latitude.
		 * Required
		 * Type: float
		 */
		lat: number;

		/**
		 * Facility longitude.
		 * Required
		 * Type: float
		 */
		long: number;
		mobile?: boolean | null;

		/**
		 * Name associated with given facility.
		 * Required
		 */
		name: string;

		/**
		 * Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.
		 * Required
		 */
		operating_status: OperatingStatus;

		/** Additional information about a VA health or Vet Center facility's operating hours. */
		operational_hours_special_instructions?: string | null;

		/** Collection of all telephone contact numbers for given facility. */
		phone?: Phone;

		/** Scores that indicate patient satisfaction at given facility per service. */
		satisfaction?: Satisfaction;

		/** All services offered by a VA health or benefits facility grouped by service type. */
		services?: Services;

		/** Facility time zone. */
		time_zone?: string | null;
		visn?: string | null;

		/** Collection of wait times reported for various services based on access to care survey. */
		wait_times?: WaitTimes;

		/** Web address of facility. */
		website?: string | null;
	}

	/** Details describing a facility. */
	export interface FacilityAttributesFormProperties {

		/** This field is deprecated and replaced with "operating_status". */
		active_status: FormControl<FacilityAttributesActive_status | null | undefined>,

		/** Subtype of facility which can further be used to describe facility. */
		classification: FormControl<string | null | undefined>,

		/**
		 * One of facility top-level type categories (e.g.) health, benefits, cemetery and vet center.
		 * Required
		 */
		facility_type: FormControl<FacilityAttributesFacility_type | null | undefined>,

		/**
		 * Facility latitude.
		 * Required
		 * Type: float
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Facility longitude.
		 * Required
		 * Type: float
		 */
		long: FormControl<number | null | undefined>,
		mobile: FormControl<boolean | null | undefined>,

		/**
		 * Name associated with given facility.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Additional information about a VA health or Vet Center facility's operating hours. */
		operational_hours_special_instructions: FormControl<string | null | undefined>,

		/** Facility time zone. */
		time_zone: FormControl<string | null | undefined>,
		visn: FormControl<string | null | undefined>,

		/** Web address of facility. */
		website: FormControl<string | null | undefined>,
	}
	export function CreateFacilityAttributesFormGroup() {
		return new FormGroup<FacilityAttributesFormProperties>({
			active_status: new FormControl<FacilityAttributesActive_status | null | undefined>(undefined),
			classification: new FormControl<string | null | undefined>(undefined),
			facility_type: new FormControl<FacilityAttributesFacility_type | null | undefined>(undefined, [Validators.required]),
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			long: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mobile: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operational_hours_special_instructions: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			visn: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FacilityAttributesActive_status { A = 'A', T = 'T' }

	export enum FacilityAttributesFacility_type { va_benefits_facility = 'va_benefits_facility', va_cemetery = 'va_cemetery', va_health_facility = 'va_health_facility', vet_center = 'vet_center' }


	/** Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events. */
	export interface Hours {

		/** Hours of operation for Friday. */
		friday?: string | null;

		/** Hours of operation for Monday. */
		monday?: string | null;

		/** Hours of operation for Saturday. */
		saturday?: string | null;

		/** Hours of operation for Sunday. */
		sunday?: string | null;

		/** Hours of operation for Thursday. */
		thursday?: string | null;

		/** Hours of operation for Tuesday. */
		tuesday?: string | null;

		/** Hours of operation for Wednesday. */
		wednesday?: string | null;
	}

	/** Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events. */
	export interface HoursFormProperties {

		/** Hours of operation for Friday. */
		friday: FormControl<string | null | undefined>,

		/** Hours of operation for Monday. */
		monday: FormControl<string | null | undefined>,

		/** Hours of operation for Saturday. */
		saturday: FormControl<string | null | undefined>,

		/** Hours of operation for Sunday. */
		sunday: FormControl<string | null | undefined>,

		/** Hours of operation for Thursday. */
		thursday: FormControl<string | null | undefined>,

		/** Hours of operation for Tuesday. */
		tuesday: FormControl<string | null | undefined>,

		/** Hours of operation for Wednesday. */
		wednesday: FormControl<string | null | undefined>,
	}
	export function CreateHoursFormGroup() {
		return new FormGroup<HoursFormProperties>({
			friday: new FormControl<string | null | undefined>(undefined),
			monday: new FormControl<string | null | undefined>(undefined),
			saturday: new FormControl<string | null | undefined>(undefined),
			sunday: new FormControl<string | null | undefined>(undefined),
			thursday: new FormControl<string | null | undefined>(undefined),
			tuesday: new FormControl<string | null | undefined>(undefined),
			wednesday: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status. */
	export interface OperatingStatus {

		/**
		 * Details of facility notices for visitors, such as messages about parking lot closures or floor visitation information.
		 * Min length: 0
		 * Max length: 300
		 */
		additional_info?: string | null;

		/**
		 * Status codes indicate normal hours/services, limited hours/services, closed operations, or published facility notices for visitors.
		 * Required
		 */
		code: OperatingStatusCode;

		/** List of supplemental statuses for VA facility. */
		supplemental_status?: Array<SupplementalStatus>;
	}

	/** Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status. */
	export interface OperatingStatusFormProperties {

		/**
		 * Details of facility notices for visitors, such as messages about parking lot closures or floor visitation information.
		 * Min length: 0
		 * Max length: 300
		 */
		additional_info: FormControl<string | null | undefined>,

		/**
		 * Status codes indicate normal hours/services, limited hours/services, closed operations, or published facility notices for visitors.
		 * Required
		 */
		code: FormControl<OperatingStatusCode | null | undefined>,
	}
	export function CreateOperatingStatusFormGroup() {
		return new FormGroup<OperatingStatusFormProperties>({
			additional_info: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(300)]),
			code: new FormControl<OperatingStatusCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OperatingStatusCode { NORMAL = 'NORMAL', NOTICE = 'NOTICE', LIMITED = 'LIMITED', CLOSED = 'CLOSED' }


	/** Supplemental status for VA facility. */
	export interface SupplementalStatus {

		/**
		 * Unique id for supplemental status.
		 * Required
		 */
		id: string;

		/**
		 * Descriptive label for supplemental status.
		 * Required
		 */
		label: string;
	}

	/** Supplemental status for VA facility. */
	export interface SupplementalStatusFormProperties {

		/**
		 * Unique id for supplemental status.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Descriptive label for supplemental status.
		 * Required
		 */
		label: FormControl<string | null | undefined>,
	}
	export function CreateSupplementalStatusFormGroup() {
		return new FormGroup<SupplementalStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Collection of all telephone contact numbers for given facility.  */
	export interface Phone {

		/** Phone number that may be reached outside of operating hours for given facility. */
		after_hours?: string | null;

		/** Phone number for enrollment coordinator for given facility. */
		enrollment_coordinator?: string | null;

		/** Phone number used for faxing to given facility. */
		fax?: string | null;

		/** Phone number for VA Health Connect. */
		health_connect?: string | null;

		/** Phone number for given facility. */
		main?: string | null;

		/** Phone number for mental health clinic for given facility. */
		mental_health_clinic?: string | null;

		/** Phone number for patient advocate for given facility. */
		patient_advocate?: string | null;

		/** Phone number for pharmacy for given facility. */
		pharmacy?: string | null;
	}

	/** Collection of all telephone contact numbers for given facility.  */
	export interface PhoneFormProperties {

		/** Phone number that may be reached outside of operating hours for given facility. */
		after_hours: FormControl<string | null | undefined>,

		/** Phone number for enrollment coordinator for given facility. */
		enrollment_coordinator: FormControl<string | null | undefined>,

		/** Phone number used for faxing to given facility. */
		fax: FormControl<string | null | undefined>,

		/** Phone number for VA Health Connect. */
		health_connect: FormControl<string | null | undefined>,

		/** Phone number for given facility. */
		main: FormControl<string | null | undefined>,

		/** Phone number for mental health clinic for given facility. */
		mental_health_clinic: FormControl<string | null | undefined>,

		/** Phone number for patient advocate for given facility. */
		patient_advocate: FormControl<string | null | undefined>,

		/** Phone number for pharmacy for given facility. */
		pharmacy: FormControl<string | null | undefined>,
	}
	export function CreatePhoneFormGroup() {
		return new FormGroup<PhoneFormProperties>({
			after_hours: new FormControl<string | null | undefined>(undefined),
			enrollment_coordinator: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			health_connect: new FormControl<string | null | undefined>(undefined),
			main: new FormControl<string | null | undefined>(undefined),
			mental_health_clinic: new FormControl<string | null | undefined>(undefined),
			patient_advocate: new FormControl<string | null | undefined>(undefined),
			pharmacy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Scores that indicate patient satisfaction at given facility per service. */
	export interface Satisfaction {

		/** Type: DateOnly */
		effective_date?: Date | null;

		/** Veteran-reported satisfaction score for health care services at VA health facilities. */
		health?: PatientSatisfaction;
	}

	/** Scores that indicate patient satisfaction at given facility per service. */
	export interface SatisfactionFormProperties {

		/** Type: DateOnly */
		effective_date: FormControl<Date | null | undefined>,
	}
	export function CreateSatisfactionFormGroup() {
		return new FormGroup<SatisfactionFormProperties>({
			effective_date: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Veteran-reported satisfaction score for health care services at VA health facilities. */
	export interface PatientSatisfaction {

		/**
		 * Percentage of Veterans who say they usually or always get an appointment when they need routine attention at a primary care location. NOTE: Veterans are rating their satisfaction of getting an appointment for a routine primary care visit.
		 * Type: float
		 */
		primary_care_routine?: number | null;

		/**
		 * Percentage of Veterans who say they usually or always get an appointment when they need urgent attention at a primary care location. NOTE: Veterans are rating their satisfaction of getting an appointment for an urgent primary care visit, NOT an urgent care visit.
		 * Type: float
		 */
		primary_care_urgent?: number | null;

		/**
		 * Percentage of Veterans who say they usually or always get an appointment when they need routine attention at a specialty care location. NOTE: Veterans are rating their satisfaction of getting an appointment for a routine specialty care visit.
		 * Type: float
		 */
		specialty_care_routine?: number | null;

		/**
		 * Percentage of Veterans who say they usually or always get an appointment when they need urgent attention at a specialty care location. NOTE: Veterans are rating their satisfaction of getting an appointment for an urgent specialty care visit, NOT an urgent care visit.
		 * Type: float
		 */
		specialty_care_urgent?: number | null;
	}

	/** Veteran-reported satisfaction score for health care services at VA health facilities. */
	export interface PatientSatisfactionFormProperties {

		/**
		 * Percentage of Veterans who say they usually or always get an appointment when they need routine attention at a primary care location. NOTE: Veterans are rating their satisfaction of getting an appointment for a routine primary care visit.
		 * Type: float
		 */
		primary_care_routine: FormControl<number | null | undefined>,

		/**
		 * Percentage of Veterans who say they usually or always get an appointment when they need urgent attention at a primary care location. NOTE: Veterans are rating their satisfaction of getting an appointment for an urgent primary care visit, NOT an urgent care visit.
		 * Type: float
		 */
		primary_care_urgent: FormControl<number | null | undefined>,

		/**
		 * Percentage of Veterans who say they usually or always get an appointment when they need routine attention at a specialty care location. NOTE: Veterans are rating their satisfaction of getting an appointment for a routine specialty care visit.
		 * Type: float
		 */
		specialty_care_routine: FormControl<number | null | undefined>,

		/**
		 * Percentage of Veterans who say they usually or always get an appointment when they need urgent attention at a specialty care location. NOTE: Veterans are rating their satisfaction of getting an appointment for an urgent specialty care visit, NOT an urgent care visit.
		 * Type: float
		 */
		specialty_care_urgent: FormControl<number | null | undefined>,
	}
	export function CreatePatientSatisfactionFormGroup() {
		return new FormGroup<PatientSatisfactionFormProperties>({
			primary_care_routine: new FormControl<number | null | undefined>(undefined),
			primary_care_urgent: new FormControl<number | null | undefined>(undefined),
			specialty_care_routine: new FormControl<number | null | undefined>(undefined),
			specialty_care_urgent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** All services offered by a VA health or benefits facility grouped by service type. */
	export interface Services {

		/** List of benefits services for given facility. */
		benefits?: Array<string>;

		/** List of health services for given facility. */
		health?: Array<string>;

		/**
		 * Date of the most recent change in offered services.
		 * Type: DateOnly
		 */
		last_updated?: Date | null;

		/** List of other services not included in one of the other service categories. */
		other?: Array<string>;
	}

	/** All services offered by a VA health or benefits facility grouped by service type. */
	export interface ServicesFormProperties {

		/**
		 * Date of the most recent change in offered services.
		 * Type: DateOnly
		 */
		last_updated: FormControl<Date | null | undefined>,
	}
	export function CreateServicesFormGroup() {
		return new FormGroup<ServicesFormProperties>({
			last_updated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Collection of wait times reported for various services based on access to care survey. */
	export interface WaitTimes {

		/**
		 * The effective date of when the access to care survey was carried out.
		 * Type: DateOnly
		 */
		effective_date?: Date | null;

		/** List of expected patient wait times for given health service. */
		health?: Array<PatientWaitTime>;
	}

	/** Collection of wait times reported for various services based on access to care survey. */
	export interface WaitTimesFormProperties {

		/**
		 * The effective date of when the access to care survey was carried out.
		 * Type: DateOnly
		 */
		effective_date: FormControl<Date | null | undefined>,
	}
	export function CreateWaitTimesFormGroup() {
		return new FormGroup<WaitTimesFormProperties>({
			effective_date: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Expected wait times for new and established patients for a given health care service at VA health facilities. */
	export interface PatientWaitTime {

		/**
		 * Average number of days a patient who has already been to this location has to wait for a non-urgent appointment.
		 * Type: double
		 */
		established?: number | null;

		/**
		 * Average number of days a Veteran who hasn't been to this location has to wait for a non-urgent appointment.
		 * Type: double
		 */
		new?: number | null;

		/**
		 * Service being offered by facility.
		 * Required
		 */
		service: PatientWaitTimeService;
	}

	/** Expected wait times for new and established patients for a given health care service at VA health facilities. */
	export interface PatientWaitTimeFormProperties {

		/**
		 * Average number of days a patient who has already been to this location has to wait for a non-urgent appointment.
		 * Type: double
		 */
		established: FormControl<number | null | undefined>,

		/**
		 * Average number of days a Veteran who hasn't been to this location has to wait for a non-urgent appointment.
		 * Type: double
		 */
		new: FormControl<number | null | undefined>,

		/**
		 * Service being offered by facility.
		 * Required
		 */
		service: FormControl<PatientWaitTimeService | null | undefined>,
	}
	export function CreatePatientWaitTimeFormGroup() {
		return new FormGroup<PatientWaitTimeFormProperties>({
			established: new FormControl<number | null | undefined>(undefined),
			new: new FormControl<number | null | undefined>(undefined),
			service: new FormControl<PatientWaitTimeService | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PatientWaitTimeService { Audiology = 'Audiology', Cardiology = 'Cardiology', CaregiverSupport = 'CaregiverSupport', Covid19Vaccine = 'Covid19Vaccine', DentalServices = 'DentalServices', Dermatology = 'Dermatology', EmergencyCare = 'EmergencyCare', Gastroenterology = 'Gastroenterology', Gynecology = 'Gynecology', MentalHealthCare = 'MentalHealthCare', Ophthalmology = 'Ophthalmology', Optometry = 'Optometry', Orthopedics = 'Orthopedics', Nutrition = 'Nutrition', Podiatry = 'Podiatry', PrimaryCare = 'PrimaryCare', SpecialtyCare = 'SpecialtyCare', UrgentCare = 'UrgentCare', Urology = 'Urology', WomensHealth = 'WomensHealth' }

	export enum FacilityType { va_facilities = 'va_facilities' }


	/** Links for first page, next page, previous and last page of response. */
	export interface PageLinks {

		/** Link to first page of response. */
		first?: string | null;

		/** Link to last page of response. */
		last?: string | null;

		/** Link to next page of response. */
		next?: string | null;

		/** Link to previous page of response. */
		prev?: string | null;

		/** Link to related pages of response. */
		related?: string | null;

		/**
		 * Link to current page of response.
		 * Required
		 */
		self: string;
	}

	/** Links for first page, next page, previous and last page of response. */
	export interface PageLinksFormProperties {

		/** Link to first page of response. */
		first: FormControl<string | null | undefined>,

		/** Link to last page of response. */
		last: FormControl<string | null | undefined>,

		/** Link to next page of response. */
		next: FormControl<string | null | undefined>,

		/** Link to previous page of response. */
		prev: FormControl<string | null | undefined>,

		/** Link to related pages of response. */
		related: FormControl<string | null | undefined>,

		/**
		 * Link to current page of response.
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreatePageLinksFormGroup() {
		return new FormGroup<PageLinksFormProperties>({
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			related: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Response that contains facility data. */
	export interface FacilityReadResponse {

		/**
		 * JSON API representation of a Facility.
		 * Required
		 */
		data: Facility;
	}

	/** Response that contains facility data. */
	export interface FacilityReadResponseFormProperties {
	}
	export function CreateFacilityReadResponseFormGroup() {
		return new FormGroup<FacilityReadResponseFormProperties>({
		});

	}


	/** A general error json response for things like Authorization Errors or Bad Requests (ex. invalid parameter values). */
	export interface GenericError {

		/** Required */
		message: string;
	}

	/** A general error json response for things like Authorization Errors or Bad Requests (ex. invalid parameter values). */
	export interface GenericErrorFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGenericErrorFormGroup() {
		return new FormGroup<GenericErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** GeoJSON API-compliant response object describing one or more VA facilities. */
	export interface GeoFacilitiesResponse {
		features?: Array<GeoFacility>;

		/** Required */
		type: GeoFacilitiesResponseType;
	}

	/** GeoJSON API-compliant response object describing one or more VA facilities. */
	export interface GeoFacilitiesResponseFormProperties {

		/** Required */
		type: FormControl<GeoFacilitiesResponseType | null | undefined>,
	}
	export function CreateGeoFacilitiesResponseFormGroup() {
		return new FormGroup<GeoFacilitiesResponseFormProperties>({
			type: new FormControl<GeoFacilitiesResponseType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** GeoJSON-complaint Feature object describing a VA Facility */
	export interface GeoFacility {

		/**
		 * Geometric data giving the physical location of a VA Facility.
		 * Required
		 */
		geometry: Geometry;

		/**
		 * Details describing a facility.
		 * Required
		 */
		properties: Properties;

		/**
		 * Top level category describing the type of facility.
		 * Required
		 */
		type: GeoFacilityType;
	}

	/** GeoJSON-complaint Feature object describing a VA Facility */
	export interface GeoFacilityFormProperties {

		/**
		 * Top level category describing the type of facility.
		 * Required
		 */
		type: FormControl<GeoFacilityType | null | undefined>,
	}
	export function CreateGeoFacilityFormGroup() {
		return new FormGroup<GeoFacilityFormProperties>({
			type: new FormControl<GeoFacilityType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Geometric data giving the physical location of a VA Facility. */
	export interface Geometry {

		/**
		 * The latitude and longitude of the Facility's physical location.
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		coordinates?: Array<number>;

		/**
		 * Describes the type of geometric data provided.
		 * Required
		 */
		type: GeometryType;
	}

	/** Geometric data giving the physical location of a VA Facility. */
	export interface GeometryFormProperties {

		/**
		 * Describes the type of geometric data provided.
		 * Required
		 */
		type: FormControl<GeometryType | null | undefined>,
	}
	export function CreateGeometryFormGroup() {
		return new FormGroup<GeometryFormProperties>({
			type: new FormControl<GeometryType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GeometryType { Point = 'Point' }


	/** Details describing a facility. */
	export interface Properties {

		/** This field is deprecated and replaced with "operating_status". */
		active_status?: FacilityAttributesActive_status | null;

		/** Collection of addresses associated with a facility. */
		address?: Addresses;

		/** Subtype of facility which can further be used to describe facility. */
		classification?: string | null;
		detailed_services?: Array<DetailedService>;

		/**
		 * One of facility top-level type categories (e.g.) health, benefits, cemetery and vet center.
		 * Required
		 */
		facility_type: FacilityAttributesFacility_type;

		/** Standard hours of operation. Currently formatted as descriptive text suitable for display, with no guarantee of a standard parseable format. Hours of operation may vary due to holidays or other events. */
		hours?: Hours;

		/**
		 * Identifier representing the Facility.
		 * Required
		 */
		id: string;
		mobile?: boolean | null;

		/** Name associated with given facility. */
		name?: string | null;

		/**
		 * Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.
		 * Required
		 */
		operating_status: OperatingStatus;

		/** Additional information about facility operating hours. */
		operational_hours_special_instructions?: string | null;

		/** Collection of all telephone contact numbers for given facility. */
		phone?: Phone;

		/** Scores that indicate patient satisfaction at given facility per service. */
		satisfaction?: Satisfaction;

		/** All services offered by a VA health or benefits facility grouped by service type. */
		services?: Services;

		/** Facility time zone */
		time_zone?: string | null;
		visn?: string | null;

		/** Collection of wait times reported for various services based on access to care survey. */
		wait_times?: WaitTimes;

		/** Web address of facility. */
		website?: string | null;
	}

	/** Details describing a facility. */
	export interface PropertiesFormProperties {

		/** This field is deprecated and replaced with "operating_status". */
		active_status: FormControl<FacilityAttributesActive_status | null | undefined>,

		/** Subtype of facility which can further be used to describe facility. */
		classification: FormControl<string | null | undefined>,

		/**
		 * One of facility top-level type categories (e.g.) health, benefits, cemetery and vet center.
		 * Required
		 */
		facility_type: FormControl<FacilityAttributesFacility_type | null | undefined>,

		/**
		 * Identifier representing the Facility.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
		mobile: FormControl<boolean | null | undefined>,

		/** Name associated with given facility. */
		name: FormControl<string | null | undefined>,

		/** Additional information about facility operating hours. */
		operational_hours_special_instructions: FormControl<string | null | undefined>,

		/** Facility time zone */
		time_zone: FormControl<string | null | undefined>,
		visn: FormControl<string | null | undefined>,

		/** Web address of facility. */
		website: FormControl<string | null | undefined>,
	}
	export function CreatePropertiesFormGroup() {
		return new FormGroup<PropertiesFormProperties>({
			active_status: new FormControl<FacilityAttributesActive_status | null | undefined>(undefined),
			classification: new FormControl<string | null | undefined>(undefined),
			facility_type: new FormControl<FacilityAttributesFacility_type | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mobile: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operational_hours_special_instructions: new FormControl<string | null | undefined>(undefined),
			time_zone: new FormControl<string | null | undefined>(undefined),
			visn: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GeoFacilityType { Feature = 'Feature' }

	export enum GeoFacilitiesResponseType { FeatureCollection = 'FeatureCollection' }


	/** Response that contains GeoFacility data. */
	export interface GeoFacilityReadResponse {

		/**
		 * Geometric data giving the physical location of a VA Facility.
		 * Required
		 */
		geometry: Geometry;

		/**
		 * Details describing a facility.
		 * Required
		 */
		properties: Properties;

		/** Required */
		type: GeoFacilityType;
	}

	/** Response that contains GeoFacility data. */
	export interface GeoFacilityReadResponseFormProperties {

		/** Required */
		type: FormControl<GeoFacilityType | null | undefined>,
	}
	export function CreateGeoFacilityReadResponseFormGroup() {
		return new FormGroup<GeoFacilityReadResponseFormProperties>({
			type: new FormControl<GeoFacilityType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** JSON API-compliant object containing metadata about this response. */
	export interface Meta {

		/** Version of the drive time band data set used to generate this response. */
		band_version?: string | null;
	}

	/** JSON API-compliant object containing metadata about this response. */
	export interface MetaFormProperties {

		/** Version of the drive time band data set used to generate this response. */
		band_version: FormControl<string | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			band_version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JSON API-compliant object describing a nearby VA facility. */
	export interface Nearby {

		/** Required */
		attributes: NearbyAttributes;

		/**
		 * Identifier for facility.
		 * Required
		 */
		id: string;

		/**
		 * Type of facility.
		 * Required
		 */
		type: NearbyType;
	}

	/** JSON API-compliant object describing a nearby VA facility. */
	export interface NearbyFormProperties {

		/**
		 * Identifier for facility.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Type of facility.
		 * Required
		 */
		type: FormControl<NearbyType | null | undefined>,
	}
	export function CreateNearbyFormGroup() {
		return new FormGroup<NearbyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<NearbyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NearbyAttributes {

		/**
		 * Maximum time to reach facility.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_time: number;

		/**
		 * Minimum time to reach facility.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		min_time: number;
	}
	export interface NearbyAttributesFormProperties {

		/**
		 * Maximum time to reach facility.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_time: FormControl<number | null | undefined>,

		/**
		 * Minimum time to reach facility.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		min_time: FormControl<number | null | undefined>,
	}
	export function CreateNearbyAttributesFormGroup() {
		return new FormGroup<NearbyAttributesFormProperties>({
			max_time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			min_time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NearbyType { nearby_facility = 'nearby_facility' }


	/** Response which contains minimum and maximum time it takes to reach facility. */
	export interface NearbyResponse {
		data?: Array<Nearby>;

		/** JSON API-compliant object containing metadata about this response. */
		meta?: Meta;
	}

	/** Response which contains minimum and maximum time it takes to reach facility. */
	export interface NearbyResponseFormProperties {
	}
	export function CreateNearbyResponseFormGroup() {
		return new FormGroup<NearbyResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Query facilities by location or IDs, with optional filters
		 * Query facilities by bounding box, latitude and longitude, state, visn, or zip code. Bounding box is specified as four `bbox[]` parameters, long1, lat1, long2, lat2. (Relative order is unimportant.)
		 * A query by latitude and longitude returns all facilities in the system, sorted by distance from that location. Providing an optional radius in miles to this query will narrow the scope of the returned facilities to those falling within the specified radius from that location.
		 * All location queries support filtering by facility type, available services, and mobile status.
		 * One can also retrieve facilities by ID using a comma-separated list like `?ids=id1,id2`. When requesting multiple facilities by ID, the API will return as many results as it can find matches for, omitting IDs where there is no match. It will not return an HTTP error code if it is unable to match a requested ID. Clients may supply IDs up to the limit their HTTP client enforces for URI path lengths. (Usually 2048 characters.)
		 * Results are paginated. JSON responses include pagination information in the standard JSON API "links" and "meta" elements.
		 * ### Parameter combinations
		 * You may optionally specify `page` and `per_page` with any query. You must specify one of the following parameter combinations:
		 * - `bbox[]`, with the option of any combination of `type`, `services[]`, or `mobile`
		 * - `ids`
		 * - `lat` and `long`, with the option of any combination of `radius`, `ids`, `type`, `services[]`, or `mobile`
		 * - `state`, with the option of any combination of `type`, `services[]`, or `mobile`
		 * - `visn`
		 * - `zip`, with the option of any combination of `type`, `services[]`, or `mobile`
		 * Invalid combinations will return `400 Bad Request`.
		 * Get facilities
		 * @param {Array<string>} ids List of comma-separated facility IDs to retrieve in a single request. Can be combined with lat and long parameters to retrieve facilities sorted by distance from a location.
		 * @param {string} zip Zip code to search for facilities. More detailed zip codes can be passed in, but only the first five digits are used to determine facilities to return.
		 * @param {string} state State in which to search for facilities. Except in rare cases, this is two characters.
		 * @param {number} lat Latitude of point to search for facilities, in WGS84 coordinate reference system.
		 *     Type: float
		 * @param {number} long Longitude of point to search for facilities, in WGS84 coordinate reference system.
		 *     Type: float
		 * @param {number} radius Optional radial distance from specified latitude and longitude to filter facilities search in WGS84 coordinate reference system.
		 *     Type: float
		 * @param {Array<number>} bbox_ Bounding box (longitude, latitude, longitude, latitude) within which facilities will be returned. (WGS84 coordinate reference system)
		 *     Minimum items: 4    Maximum items: 4
		 * @param {number} visn VISN search of matching facilities.
		 *     Type: double
		 * @param {GetFacilitiesByLocationType} type Optional facility type search filter
		 * @param {Array<string>} services_ Optional facility service search filter
		 * @param {boolean} mobile Optional facility mobile search filter
		 * @param {string} page Page of results to return per paginated response.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Number of results to return per paginated response.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {FacilitiesResponse} Success
		 */
		GetFacilitiesByLocation(ids: Array<string> | null | undefined, zip: string | null | undefined, state: string | null | undefined, lat: number | null | undefined, long: number | null | undefined, radius: number | null | undefined, bbox_: Array<number> | null | undefined, visn: number | null | undefined, type: GetFacilitiesByLocationType | null | undefined, services_: Array<string> | null | undefined, mobile: boolean | null | undefined, page: string | null | undefined, per_page: string | null | undefined): Observable<FacilitiesResponse> {
			return this.http.get<FacilitiesResponse>(this.baseUri + 'facilities?' + ids?.map(z => `ids=${encodeURIComponent(z)}`).join('&') + '&zip=' + (zip == null ? '' : encodeURIComponent(zip)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&lat=' + lat + '&long=' + long + '&radius=' + radius + '&' + bbox_?.map(z => `bbox[]=${z}`).join('&') + '&visn=' + visn + '&type=' + type + '&' + services_?.map(z => `services[]=${encodeURIComponent(z)}`).join('&') + '&mobile=' + mobile + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Bulk download information for all facilities
		 * Retrieve all available facilities in a single operation, formatted as either a GeoJSON FeatureCollection or as a CSV. Due to the complexity of the facility resource type, the CSV response contains a subset of available facility data - specifically it omits the available services, patient satisfaction, and patient wait time data.
		 * Get facilities/all
		 * @return {GeoFacilitiesResponse} Success
		 */
		GetAllFacilities(): Observable<GeoFacilitiesResponse> {
			return this.http.get<GeoFacilitiesResponse>(this.baseUri + 'facilities/all', {});
		}

		/**
		 * Retrieve a specific facility by ID
		 * Get facilities/{id}
		 * @param {string} id Facility ID, in the form `<prefix>_<station>`, where prefix is one of "vha", "vba", "nca", or "vc", for health facility, benefits, cemetery, or vet center, respectively.
		 * @return {FacilityReadResponse} Success
		 */
		GetFacilityById(id: string): Observable<FacilityReadResponse> {
			return this.http.get<FacilityReadResponse>(this.baseUri + 'facilities/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Bulk download of all facility IDs
		 * Retrieves all available facility IDs only
		 * Get ids
		 * @param {GetFacilitiesByLocationType} type Optional facility type search filter
		 * @return {FacilitiesIdsResponse} Success
		 */
		GetFacilityIds(type: GetFacilitiesByLocationType | null | undefined): Observable<FacilitiesIdsResponse> {
			return this.http.get<FacilitiesIdsResponse>(this.baseUri + 'ids?type=' + type, {});
		}

		/**
		 * Retrieve all VA health facilities reachable by driving within the specified time period
		 * Retrieve all VA health facilities that are located within a specified drive time from a specified location based on coordinates (lat and lng). Optional filter parameters include drive_time and services[]. Address (street_address, city, state, and zip) no longer returns results.
		 * The "attributes" element has information about the drive-time band that contains the requested location for each facility in the response. The values of `min_time` and `max_time` are in minutes. For example, a facility returned with a matched `min_time` of 10 and `max_time` of 20 is a 10 to 20 minute drive from the requested location.
		 * To retrieve full details for nearby facilities, see the documentation for `/facilities?ids`.
		 * Get nearby
		 * @param {number} lat Latitude of the location from which drive time will be calculated.
		 *     Type: float
		 * @param {number} lng Longitude of the location from which drive time will be calculated.
		 *     Type: float
		 * @param {string} street_address Street address of the location from which drive time will be calculated.
		 * @param {string} city City of the location from which drive time will be calculated.
		 * @param {string} state Two character state code of the location from which drive time will be calculated.
		 * @param {string} zip Zip code of the location from which drive time will be calculated.
		 * @param {GetNearbyFacilitiesDrive_time} drive_time Filter to only include facilities that are within the specified number of drive time minutes from the requested location.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} services_ Optional facility service search filter
		 * @return {NearbyResponse} Success
		 */
		GetNearbyFacilities(lat: number | null | undefined, lng: number | null | undefined, street_address: string | null | undefined, city: string | null | undefined, state: string | null | undefined, zip: string | null | undefined, drive_time: GetNearbyFacilitiesDrive_time | null | undefined, services_: Array<string> | null | undefined): Observable<NearbyResponse> {
			return this.http.get<NearbyResponse>(this.baseUri + 'nearby?lat=' + lat + '&lng=' + lng + '&street_address=' + (street_address == null ? '' : encodeURIComponent(street_address)) + '&city=' + (city == null ? '' : encodeURIComponent(city)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&zip=' + (zip == null ? '' : encodeURIComponent(zip)) + '&drive_time=' + drive_time + '&' + services_?.map(z => `services[]=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export enum GetFacilitiesByLocationType { health = 'health', cemetery = 'cemetery', benefits = 'benefits', vet_center = 'vet_center' }

	export enum GetAllFacilitiesAccept { 'application/geo+json' = 'application/geo+json', 'application/vnd.geo+json' = 'application/vnd.geo+json', 'text/csv' = 'text/csv' }

	export enum GetNearbyFacilitiesDrive_time { _10 = 0, _20 = 1, _30 = 2, _40 = 3, _50 = 4, _60 = 5, _70 = 6, _80 = 7, _90 = 8 }

}

