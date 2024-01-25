import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * A person's physical address. May be a P.O. box or street address. All fields
	 * are optional.
	 */
	export interface Address {

		/** The city of the address. */
		city?: string | null;

		/** The country of the address. */
		country?: string | null;

		/**
		 * The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country
		 * code of the address.
		 */
		countryCode?: string | null;

		/** The extended address of the address; for example, the apartment number. */
		extendedAddress?: string | null;

		/**
		 * Output only. The type of the address translated and formatted in the viewer's
		 * account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string | null;

		/**
		 * The unstructured value of the address. If this is not set by the user it
		 * will be automatically constructed from structured values.
		 */
		formattedValue?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The P.O. box of the address. */
		poBox?: string | null;

		/** The postal code of the address. */
		postalCode?: string | null;

		/** The region of the address; for example, the state or province. */
		region?: string | null;

		/** The street address. */
		streetAddress?: string | null;

		/**
		 * The type of the address. The type can be custom or one of these predefined
		 * values:
		 * * `home`
		 * * `work`
		 * * `other`
		 */
		type?: string | null;
	}

	/**
	 * A person's physical address. May be a P.O. box or street address. All fields
	 * are optional.
	 */
	export interface AddressFormProperties {

		/** The city of the address. */
		city: FormControl<string | null | undefined>,

		/** The country of the address. */
		country: FormControl<string | null | undefined>,

		/**
		 * The [ISO 3166-1 alpha-2](http://www.iso.org/iso/country_codes.htm) country
		 * code of the address.
		 */
		countryCode: FormControl<string | null | undefined>,

		/** The extended address of the address; for example, the apartment number. */
		extendedAddress: FormControl<string | null | undefined>,

		/**
		 * Output only. The type of the address translated and formatted in the viewer's
		 * account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType: FormControl<string | null | undefined>,

		/**
		 * The unstructured value of the address. If this is not set by the user it
		 * will be automatically constructed from structured values.
		 */
		formattedValue: FormControl<string | null | undefined>,

		/** The P.O. box of the address. */
		poBox: FormControl<string | null | undefined>,

		/** The postal code of the address. */
		postalCode: FormControl<string | null | undefined>,

		/** The region of the address; for example, the state or province. */
		region: FormControl<string | null | undefined>,

		/** The street address. */
		streetAddress: FormControl<string | null | undefined>,

		/**
		 * The type of the address. The type can be custom or one of these predefined
		 * values:
		 * * `home`
		 * * `work`
		 * * `other`
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			extendedAddress: new FormControl<string | null | undefined>(undefined),
			formattedType: new FormControl<string | null | undefined>(undefined),
			formattedValue: new FormControl<string | null | undefined>(undefined),
			poBox: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			streetAddress: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about a field. */
	export interface FieldMetadata {

		/**
		 * True if the field is the primary field; false if the field is a secondary
		 * field.
		 */
		primary?: boolean | null;

		/** The source of a field. */
		source?: Source;

		/**
		 * Output only. True if the field is verified; false if the field is unverified. A
		 * verified field is typically a name, email address, phone number, or
		 * website that has been confirmed to be owned by the person.
		 */
		verified?: boolean | null;
	}

	/** Metadata about a field. */
	export interface FieldMetadataFormProperties {

		/**
		 * True if the field is the primary field; false if the field is a secondary
		 * field.
		 */
		primary: FormControl<boolean | null | undefined>,

		/**
		 * Output only. True if the field is verified; false if the field is unverified. A
		 * verified field is typically a name, email address, phone number, or
		 * website that has been confirmed to be owned by the person.
		 */
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateFieldMetadataFormGroup() {
		return new FormGroup<FieldMetadataFormProperties>({
			primary: new FormControl<boolean | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The source of a field. */
	export interface Source {

		/**
		 * **Only populated in `person.metadata.sources`.**
		 * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
		 * source. Used for web cache validation.
		 */
		etag?: string | null;

		/** The unique identifier within the source type generated by the server. */
		id?: string | null;

		/** The metadata about a profile. */
		profileMetadata?: ProfileMetadata;

		/** The source type. */
		type?: SourceType | null;

		/**
		 * Output only. **Only populated in `person.metadata.sources`.**
		 * Last update timestamp of this source.
		 */
		updateTime?: string | null;
	}

	/** The source of a field. */
	export interface SourceFormProperties {

		/**
		 * **Only populated in `person.metadata.sources`.**
		 * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
		 * source. Used for web cache validation.
		 */
		etag: FormControl<string | null | undefined>,

		/** The unique identifier within the source type generated by the server. */
		id: FormControl<string | null | undefined>,

		/** The source type. */
		type: FormControl<SourceType | null | undefined>,

		/**
		 * Output only. **Only populated in `person.metadata.sources`.**
		 * Last update timestamp of this source.
		 */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SourceType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata about a profile. */
	export interface ProfileMetadata {

		/** Output only. The profile object type. */
		objectType?: ProfileMetadataObjectType | null;

		/** Output only. The user types. */
		userTypes?: Array<string>;
	}

	/** The metadata about a profile. */
	export interface ProfileMetadataFormProperties {

		/** Output only. The profile object type. */
		objectType: FormControl<ProfileMetadataObjectType | null | undefined>,
	}
	export function CreateProfileMetadataFormGroup() {
		return new FormGroup<ProfileMetadataFormProperties>({
			objectType: new FormControl<ProfileMetadataObjectType | null | undefined>(undefined),
		});

	}

	export enum ProfileMetadataObjectType { OBJECT_TYPE_UNSPECIFIED = 0, PERSON = 1, PAGE = 2 }

	export enum SourceType { SOURCE_TYPE_UNSPECIFIED = 0, ACCOUNT = 1, PROFILE = 2, DOMAIN_PROFILE = 3, CONTACT = 4 }


	/** A person's age range. */
	export interface AgeRangeType {

		/** The age range. */
		ageRange?: AgeRangeTypeAgeRange | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;
	}

	/** A person's age range. */
	export interface AgeRangeTypeFormProperties {

		/** The age range. */
		ageRange: FormControl<AgeRangeTypeAgeRange | null | undefined>,
	}
	export function CreateAgeRangeTypeFormGroup() {
		return new FormGroup<AgeRangeTypeFormProperties>({
			ageRange: new FormControl<AgeRangeTypeAgeRange | null | undefined>(undefined),
		});

	}

	export enum AgeRangeTypeAgeRange { AGE_RANGE_UNSPECIFIED = 0, LESS_THAN_EIGHTEEN = 1, EIGHTEEN_TO_TWENTY = 2, TWENTY_ONE_OR_OLDER = 3 }


	/** The response to a batch get contact groups request. */
	export interface BatchGetContactGroupsResponse {

		/** The list of responses for each requested contact group resource. */
		responses?: Array<ContactGroupResponse>;
	}

	/** The response to a batch get contact groups request. */
	export interface BatchGetContactGroupsResponseFormProperties {
	}
	export function CreateBatchGetContactGroupsResponseFormGroup() {
		return new FormGroup<BatchGetContactGroupsResponseFormProperties>({
		});

	}


	/** The response for a specific contact group. */
	export interface ContactGroupResponse {

		/** A contact group. */
		contactGroup?: ContactGroup;

		/** The original requested resource name. */
		requestedResourceName?: string | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		status?: Status;
	}

	/** The response for a specific contact group. */
	export interface ContactGroupResponseFormProperties {

		/** The original requested resource name. */
		requestedResourceName: FormControl<string | null | undefined>,
	}
	export function CreateContactGroupResponseFormGroup() {
		return new FormGroup<ContactGroupResponseFormProperties>({
			requestedResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A contact group. */
	export interface ContactGroup {

		/**
		 * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
		 * resource. Used for web cache validation.
		 */
		etag?: string | null;

		/**
		 * Output only. The name translated and formatted in the viewer's account locale
		 * or the `Accept-Language` HTTP header locale for system groups names.
		 * Group names set by the owner are the same as name.
		 */
		formattedName?: string | null;

		/** Output only. The contact group type. */
		groupType?: ContactGroupGroupType | null;

		/**
		 * Output only. The total number of contacts in the group irrespective of max members in
		 * specified in the request.
		 */
		memberCount?: number | null;

		/**
		 * Output only. The list of contact person resource names that are members of the contact
		 * group. The field is not populated for LIST requests and can only be updated
		 * through the
		 * [ModifyContactGroupMembers](/people/api/rest/v1/contactgroups/members/modify).
		 */
		memberResourceNames?: Array<string>;

		/** The metadata about a contact group. */
		metadata?: ContactGroupMetadata;

		/**
		 * The contact group name set by the group owner or a system provided name
		 * for system groups.
		 */
		name?: string | null;

		/**
		 * The resource name for the contact group, assigned by the server. An ASCII
		 * string, in the form of `contactGroups/{contact_group_id}`.
		 */
		resourceName?: string | null;
	}

	/** A contact group. */
	export interface ContactGroupFormProperties {

		/**
		 * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
		 * resource. Used for web cache validation.
		 */
		etag: FormControl<string | null | undefined>,

		/**
		 * Output only. The name translated and formatted in the viewer's account locale
		 * or the `Accept-Language` HTTP header locale for system groups names.
		 * Group names set by the owner are the same as name.
		 */
		formattedName: FormControl<string | null | undefined>,

		/** Output only. The contact group type. */
		groupType: FormControl<ContactGroupGroupType | null | undefined>,

		/**
		 * Output only. The total number of contacts in the group irrespective of max members in
		 * specified in the request.
		 */
		memberCount: FormControl<number | null | undefined>,

		/**
		 * The contact group name set by the group owner or a system provided name
		 * for system groups.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource name for the contact group, assigned by the server. An ASCII
		 * string, in the form of `contactGroups/{contact_group_id}`.
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateContactGroupFormGroup() {
		return new FormGroup<ContactGroupFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			formattedName: new FormControl<string | null | undefined>(undefined),
			groupType: new FormControl<ContactGroupGroupType | null | undefined>(undefined),
			memberCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContactGroupGroupType { GROUP_TYPE_UNSPECIFIED = 0, USER_CONTACT_GROUP = 1, SYSTEM_CONTACT_GROUP = 2 }


	/** The metadata about a contact group. */
	export interface ContactGroupMetadata {

		/**
		 * Output only. True if the contact group resource has been deleted. Populated only for
		 * [`ListContactGroups`](/people/api/rest/v1/contactgroups/list) requests
		 * that include a sync token.
		 */
		deleted?: boolean | null;

		/** Output only. The time the group was last updated. */
		updateTime?: string | null;
	}

	/** The metadata about a contact group. */
	export interface ContactGroupMetadataFormProperties {

		/**
		 * Output only. True if the contact group resource has been deleted. Populated only for
		 * [`ListContactGroups`](/people/api/rest/v1/contactgroups/list) requests
		 * that include a sync token.
		 */
		deleted: FormControl<boolean | null | undefined>,

		/** Output only. The time the group was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateContactGroupMetadataFormGroup() {
		return new FormGroup<ContactGroupMetadataFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's short biography. */
	export interface Biography {

		/** The content type of the biography. */
		contentType?: BiographyContentType | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The short biography. */
		value?: string | null;
	}

	/** A person's short biography. */
	export interface BiographyFormProperties {

		/** The content type of the biography. */
		contentType: FormControl<BiographyContentType | null | undefined>,

		/** The short biography. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBiographyFormGroup() {
		return new FormGroup<BiographyFormProperties>({
			contentType: new FormControl<BiographyContentType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BiographyContentType { CONTENT_TYPE_UNSPECIFIED = 0, TEXT_PLAIN = 1, TEXT_HTML = 2 }


	/**
	 * A person's birthday. At least one of the `date` and `text` fields are
	 * specified. The `date` and `text` fields typically represent the same
	 * date, but are not guaranteed to.
	 */
	export interface Birthday {

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
		 * and time zone are either specified elsewhere or are not significant. The date
		 * is relative to the Proleptic Gregorian Calendar. This can represent:
		 * * A full date, with non-zero year, month and day values
		 * * A month and day value, with a zero year, e.g. an anniversary
		 * * A year on its own, with zero month and day values
		 * * A year and month value, with a zero day, e.g. a credit card expiration date
		 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
		 */
		date?: Date;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** A free-form string representing the user's birthday. */
		text?: string | null;
	}

	/**
	 * A person's birthday. At least one of the `date` and `text` fields are
	 * specified. The `date` and `text` fields typically represent the same
	 * date, but are not guaranteed to.
	 */
	export interface BirthdayFormProperties {

		/** A free-form string representing the user's birthday. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateBirthdayFormGroup() {
		return new FormGroup<BirthdayFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
	 * and time zone are either specified elsewhere or are not significant. The date
	 * is relative to the Proleptic Gregorian Calendar. This can represent:
	 * * A full date, with non-zero year, month and day values
	 * * A month and day value, with a zero year, e.g. an anniversary
	 * * A year on its own, with zero month and day values
	 * * A year and month value, with a zero day, e.g. a credit card expiration date
	 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
	 */
	export interface Date {

		/**
		 * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
		 * if specifying a year by itself or a year and month where the day is not
		 * significant.
		 */
		day?: number | null;

		/**
		 * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
		 * month and day.
		 */
		month?: number | null;

		/**
		 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
		 * a year.
		 */
		year?: number | null;
	}

	/**
	 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
	 * and time zone are either specified elsewhere or are not significant. The date
	 * is relative to the Proleptic Gregorian Calendar. This can represent:
	 * * A full date, with non-zero year, month and day values
	 * * A month and day value, with a zero year, e.g. an anniversary
	 * * A year on its own, with zero month and day values
	 * * A year and month value, with a zero day, e.g. a credit card expiration date
	 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
	 */
	export interface DateFormProperties {

		/**
		 * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
		 * if specifying a year by itself or a year and month where the day is not
		 * significant.
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
		 * month and day.
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
		 * a year.
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * **DEPRECATED**: No data will be returned
	 * A person's bragging rights.
	 */
	export interface BraggingRights {

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The bragging rights; for example, `climbed mount everest`. */
		value?: string | null;
	}

	/**
	 * **DEPRECATED**: No data will be returned
	 * A person's bragging rights.
	 */
	export interface BraggingRightsFormProperties {

		/** The bragging rights; for example, `climbed mount everest`. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateBraggingRightsFormGroup() {
		return new FormGroup<BraggingRightsFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Google contact group membership. */
	export interface ContactGroupMembership {

		/** Output only. The contact group ID for the contact group membership. */
		contactGroupId?: string | null;

		/**
		 * The resource name for the contact group, assigned by the server. An ASCII
		 * string, in the form of `contactGroups/{contact_group_id}`.
		 * Only contact_group_resource_name can be used for modifying memberships.
		 * Any contact group membership can be removed, but only user group or
		 * "myContacts" or "starred" system groups memberships can be added. A
		 * contact must always have at least one contact group membership.
		 */
		contactGroupResourceName?: string | null;
	}

	/** A Google contact group membership. */
	export interface ContactGroupMembershipFormProperties {

		/** Output only. The contact group ID for the contact group membership. */
		contactGroupId: FormControl<string | null | undefined>,

		/**
		 * The resource name for the contact group, assigned by the server. An ASCII
		 * string, in the form of `contactGroups/{contact_group_id}`.
		 * Only contact_group_resource_name can be used for modifying memberships.
		 * Any contact group membership can be removed, but only user group or
		 * "myContacts" or "starred" system groups memberships can be added. A
		 * contact must always have at least one contact group membership.
		 */
		contactGroupResourceName: FormControl<string | null | undefined>,
	}
	export function CreateContactGroupMembershipFormGroup() {
		return new FormGroup<ContactGroupMembershipFormProperties>({
			contactGroupId: new FormControl<string | null | undefined>(undefined),
			contactGroupResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A person's cover photo. A large image shown on the person's
	 * profile page that represents who they are or what they care about.
	 */
	export interface CoverPhoto {

		/**
		 * True if the cover photo is the default cover photo;
		 * false if the cover photo is a user-provided cover photo.
		 */
		default?: boolean | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The URL of the cover photo. */
		url?: string | null;
	}

	/**
	 * A person's cover photo. A large image shown on the person's
	 * profile page that represents who they are or what they care about.
	 */
	export interface CoverPhotoFormProperties {

		/**
		 * True if the cover photo is the default cover photo;
		 * false if the cover photo is a user-provided cover photo.
		 */
		default: FormControl<boolean | null | undefined>,

		/** The URL of the cover photo. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCoverPhotoFormGroup() {
		return new FormGroup<CoverPhotoFormProperties>({
			default: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to create a new contact group. */
	export interface CreateContactGroupRequest {

		/** A contact group. */
		contactGroup?: ContactGroup;
	}

	/** A request to create a new contact group. */
	export interface CreateContactGroupRequestFormProperties {
	}
	export function CreateCreateContactGroupRequestFormGroup() {
		return new FormGroup<CreateContactGroupRequestFormProperties>({
		});

	}


	/** The response for deleteing a contact's photo. */
	export interface DeleteContactPhotoResponse {

		/**
		 * Information about a person merged from various data sources such as the
		 * authenticated user's contacts and profile data.
		 * Most fields can have multiple items. The items in a field have no guaranteed
		 * order, but each non-empty field is guaranteed to have exactly one field with
		 * `metadata.primary` set to true.
		 */
		person?: Person;
	}

	/** The response for deleteing a contact's photo. */
	export interface DeleteContactPhotoResponseFormProperties {
	}
	export function CreateDeleteContactPhotoResponseFormGroup() {
		return new FormGroup<DeleteContactPhotoResponseFormProperties>({
		});

	}


	/**
	 * Information about a person merged from various data sources such as the
	 * authenticated user's contacts and profile data.
	 * Most fields can have multiple items. The items in a field have no guaranteed
	 * order, but each non-empty field is guaranteed to have exactly one field with
	 * `metadata.primary` set to true.
	 */
	export interface Person {

		/** The person's street addresses. */
		addresses?: Array<Address>;

		/**
		 * Output only. **DEPRECATED** (Please use `person.ageRanges` instead)
		 * The person's age range.
		 */
		ageRange?: AgeRangeTypeAgeRange | null;

		/** Output only. The person's age ranges. */
		ageRanges?: Array<AgeRangeType>;

		/** The person's biographies. */
		biographies?: Array<Biography>;

		/** The person's birthdays. */
		birthdays?: Array<Birthday>;

		/**
		 * **DEPRECATED**: No data will be returned
		 * The person's bragging rights.
		 */
		braggingRights?: Array<BraggingRights>;

		/** Output only. The person's cover photos. */
		coverPhotos?: Array<CoverPhoto>;

		/** The person's email addresses. */
		emailAddresses?: Array<EmailAddress>;

		/**
		 * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
		 * resource. Used for web cache validation.
		 */
		etag?: string | null;

		/** The person's events. */
		events?: Array<Event>;

		/** The person's genders. */
		genders?: Array<Gender>;

		/** The person's instant messaging clients. */
		imClients?: Array<ImClient>;

		/** The person's interests. */
		interests?: Array<Interest>;

		/** The person's locale preferences. */
		locales?: Array<Locale>;

		/** The person's group memberships. */
		memberships?: Array<Membership>;

		/** The metadata about a person. */
		metadata?: PersonMetadata;

		/** The person's names. */
		names?: Array<Name>;

		/** The person's nicknames. */
		nicknames?: Array<Nickname>;

		/** The person's occupations. */
		occupations?: Array<Occupation>;

		/** The person's past or current organizations. */
		organizations?: Array<Organization>;

		/** The person's phone numbers. */
		phoneNumbers?: Array<PhoneNumber>;

		/** Output only. The person's photos. */
		photos?: Array<Photo>;

		/** The person's relations. */
		relations?: Array<Relation>;

		/**
		 * Output only. **DEPRECATED**: No data will be returned
		 * The person's relationship interests.
		 */
		relationshipInterests?: Array<RelationshipInterest>;

		/**
		 * Output only. **DEPRECATED**: No data will be returned
		 * The person's relationship statuses.
		 */
		relationshipStatuses?: Array<RelationshipStatus>;

		/** The person's residences. */
		residences?: Array<Residence>;

		/**
		 * The resource name for the person, assigned by the server. An ASCII string
		 * with a max length of 27 characters, in the form of
		 * `people/{person_id}`.
		 */
		resourceName?: string | null;

		/** The person's SIP addresses. */
		sipAddresses?: Array<SipAddress>;

		/** The person's skills. */
		skills?: Array<Skill>;

		/**
		 * Output only. **DEPRECATED**: No data will be returned
		 * The person's taglines.
		 */
		taglines?: Array<Tagline>;

		/** The person's associated URLs. */
		urls?: Array<Url>;

		/** The person's user defined data. */
		userDefined?: Array<UserDefined>;
	}

	/**
	 * Information about a person merged from various data sources such as the
	 * authenticated user's contacts and profile data.
	 * Most fields can have multiple items. The items in a field have no guaranteed
	 * order, but each non-empty field is guaranteed to have exactly one field with
	 * `metadata.primary` set to true.
	 */
	export interface PersonFormProperties {

		/**
		 * Output only. **DEPRECATED** (Please use `person.ageRanges` instead)
		 * The person's age range.
		 */
		ageRange: FormControl<AgeRangeTypeAgeRange | null | undefined>,

		/**
		 * The [HTTP entity tag](https://en.wikipedia.org/wiki/HTTP_ETag) of the
		 * resource. Used for web cache validation.
		 */
		etag: FormControl<string | null | undefined>,

		/**
		 * The resource name for the person, assigned by the server. An ASCII string
		 * with a max length of 27 characters, in the form of
		 * `people/{person_id}`.
		 */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreatePersonFormGroup() {
		return new FormGroup<PersonFormProperties>({
			ageRange: new FormControl<AgeRangeTypeAgeRange | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's email address. */
	export interface EmailAddress {

		/** The display name of the email. */
		displayName?: string | null;

		/**
		 * Output only. The type of the email address translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/**
		 * The type of the email address. The type can be custom or one of these
		 * predefined values:
		 * * `home`
		 * * `work`
		 * * `other`
		 */
		type?: string | null;

		/** The email address. */
		value?: string | null;
	}

	/** A person's email address. */
	export interface EmailAddressFormProperties {

		/** The display name of the email. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Output only. The type of the email address translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType: FormControl<string | null | undefined>,

		/**
		 * The type of the email address. The type can be custom or one of these
		 * predefined values:
		 * * `home`
		 * * `work`
		 * * `other`
		 */
		type: FormControl<string | null | undefined>,

		/** The email address. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEmailAddressFormGroup() {
		return new FormGroup<EmailAddressFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			formattedType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event related to the person. */
	export interface Event {

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
		 * and time zone are either specified elsewhere or are not significant. The date
		 * is relative to the Proleptic Gregorian Calendar. This can represent:
		 * * A full date, with non-zero year, month and day values
		 * * A month and day value, with a zero year, e.g. an anniversary
		 * * A year on its own, with zero month and day values
		 * * A year and month value, with a zero day, e.g. a credit card expiration date
		 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
		 */
		date?: Date;

		/**
		 * Output only. The type of the event translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/**
		 * The type of the event. The type can be custom or one of these predefined
		 * values:
		 * * `anniversary`
		 * * `other`
		 */
		type?: string | null;
	}

	/** An event related to the person. */
	export interface EventFormProperties {

		/**
		 * Output only. The type of the event translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType: FormControl<string | null | undefined>,

		/**
		 * The type of the event. The type can be custom or one of these predefined
		 * values:
		 * * `anniversary`
		 * * `other`
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			formattedType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's gender. */
	export interface Gender {

		/**
		 * The type of pronouns that should be used to address the person. The value
		 * can be custom or one of these predefined values:
		 * * `male`
		 * * `female`
		 * * `other`
		 */
		addressMeAs?: string | null;

		/**
		 * Output only. The value of the gender translated and formatted in the viewer's account
		 * locale or the `Accept-Language` HTTP header locale. Unspecified or custom
		 * value are not localized.
		 */
		formattedValue?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/**
		 * The gender for the person. The gender can be custom or one of these
		 * predefined values:
		 * * `male`
		 * * `female`
		 * * `unspecified`
		 */
		value?: string | null;
	}

	/** A person's gender. */
	export interface GenderFormProperties {

		/**
		 * The type of pronouns that should be used to address the person. The value
		 * can be custom or one of these predefined values:
		 * * `male`
		 * * `female`
		 * * `other`
		 */
		addressMeAs: FormControl<string | null | undefined>,

		/**
		 * Output only. The value of the gender translated and formatted in the viewer's account
		 * locale or the `Accept-Language` HTTP header locale. Unspecified or custom
		 * value are not localized.
		 */
		formattedValue: FormControl<string | null | undefined>,

		/**
		 * The gender for the person. The gender can be custom or one of these
		 * predefined values:
		 * * `male`
		 * * `female`
		 * * `unspecified`
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGenderFormGroup() {
		return new FormGroup<GenderFormProperties>({
			addressMeAs: new FormControl<string | null | undefined>(undefined),
			formattedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's instant messaging client. */
	export interface ImClient {

		/**
		 * Output only. The protocol of the IM client formatted in the viewer's account
		 * locale or the `Accept-Language` HTTP header locale.
		 */
		formattedProtocol?: string | null;

		/**
		 * Output only. The type of the IM client translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/**
		 * The protocol of the IM client. The protocol can be custom or one of these
		 * predefined values:
		 * * `aim`
		 * * `msn`
		 * * `yahoo`
		 * * `skype`
		 * * `qq`
		 * * `googleTalk`
		 * * `icq`
		 * * `jabber`
		 * * `netMeeting`
		 */
		protocol?: string | null;

		/**
		 * The type of the IM client. The type can be custom or one of these
		 * predefined values:
		 * * `home`
		 * * `work`
		 * * `other`
		 */
		type?: string | null;

		/** The user name used in the IM client. */
		username?: string | null;
	}

	/** A person's instant messaging client. */
	export interface ImClientFormProperties {

		/**
		 * Output only. The protocol of the IM client formatted in the viewer's account
		 * locale or the `Accept-Language` HTTP header locale.
		 */
		formattedProtocol: FormControl<string | null | undefined>,

		/**
		 * Output only. The type of the IM client translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType: FormControl<string | null | undefined>,

		/**
		 * The protocol of the IM client. The protocol can be custom or one of these
		 * predefined values:
		 * * `aim`
		 * * `msn`
		 * * `yahoo`
		 * * `skype`
		 * * `qq`
		 * * `googleTalk`
		 * * `icq`
		 * * `jabber`
		 * * `netMeeting`
		 */
		protocol: FormControl<string | null | undefined>,

		/**
		 * The type of the IM client. The type can be custom or one of these
		 * predefined values:
		 * * `home`
		 * * `work`
		 * * `other`
		 */
		type: FormControl<string | null | undefined>,

		/** The user name used in the IM client. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateImClientFormGroup() {
		return new FormGroup<ImClientFormProperties>({
			formattedProtocol: new FormControl<string | null | undefined>(undefined),
			formattedType: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One of the person's interests. */
	export interface Interest {

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The interest; for example, `stargazing`. */
		value?: string | null;
	}

	/** One of the person's interests. */
	export interface InterestFormProperties {

		/** The interest; for example, `stargazing`. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateInterestFormGroup() {
		return new FormGroup<InterestFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's locale preference. */
	export interface Locale {

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/**
		 * The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47)
		 * language tag representing the locale.
		 */
		value?: string | null;
	}

	/** A person's locale preference. */
	export interface LocaleFormProperties {

		/**
		 * The well-formed [IETF BCP 47](https://tools.ietf.org/html/bcp47)
		 * language tag representing the locale.
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLocaleFormGroup() {
		return new FormGroup<LocaleFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A person's membership in a group. Only contact group memberships can be
	 * modified.
	 */
	export interface Membership {

		/** A Google contact group membership. */
		contactGroupMembership?: ContactGroupMembership;

		/** A G Suite Domain membership. */
		domainMembership?: DomainMembership;

		/** Metadata about a field. */
		metadata?: FieldMetadata;
	}

	/**
	 * A person's membership in a group. Only contact group memberships can be
	 * modified.
	 */
	export interface MembershipFormProperties {
	}
	export function CreateMembershipFormGroup() {
		return new FormGroup<MembershipFormProperties>({
		});

	}


	/** A G Suite Domain membership. */
	export interface DomainMembership {

		/** True if the person is in the viewer's G Suite domain. */
		inViewerDomain?: boolean | null;
	}

	/** A G Suite Domain membership. */
	export interface DomainMembershipFormProperties {

		/** True if the person is in the viewer's G Suite domain. */
		inViewerDomain: FormControl<boolean | null | undefined>,
	}
	export function CreateDomainMembershipFormGroup() {
		return new FormGroup<DomainMembershipFormProperties>({
			inViewerDomain: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The metadata about a person. */
	export interface PersonMetadata {

		/**
		 * Output only. True if the person resource has been deleted. Populated only for
		 * [`connections.list`](/people/api/rest/v1/people.connections/list) requests
		 * that include a sync token.
		 */
		deleted?: boolean | null;

		/** Output only. Resource names of people linked to this resource. */
		linkedPeopleResourceNames?: Array<string>;

		/**
		 * Output only. **DEPRECATED** (Please use
		 * `person.metadata.sources.profileMetadata.objectType` instead)
		 * The type of the person object.
		 */
		objectType?: ProfileMetadataObjectType | null;

		/**
		 * Output only. Any former resource names this person has had. Populated only for
		 * [`connections.list`](/people/api/rest/v1/people.connections/list) requests
		 * that include a sync token.
		 * The resource name may change when adding or removing fields that link a
		 * contact and profile such as a verified email, verified phone number, or
		 * profile URL.
		 */
		previousResourceNames?: Array<string>;

		/** The sources of data for the person. */
		sources?: Array<Source>;
	}

	/** The metadata about a person. */
	export interface PersonMetadataFormProperties {

		/**
		 * Output only. True if the person resource has been deleted. Populated only for
		 * [`connections.list`](/people/api/rest/v1/people.connections/list) requests
		 * that include a sync token.
		 */
		deleted: FormControl<boolean | null | undefined>,

		/**
		 * Output only. **DEPRECATED** (Please use
		 * `person.metadata.sources.profileMetadata.objectType` instead)
		 * The type of the person object.
		 */
		objectType: FormControl<ProfileMetadataObjectType | null | undefined>,
	}
	export function CreatePersonMetadataFormGroup() {
		return new FormGroup<PersonMetadataFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			objectType: new FormControl<ProfileMetadataObjectType | null | undefined>(undefined),
		});

	}


	/** A person's name. If the name is a mononym, the family name is empty. */
	export interface Name {

		/**
		 * Output only. The display name formatted according to the locale specified by
		 * the viewer's account or the `Accept-Language` HTTP header.
		 */
		displayName?: string | null;

		/**
		 * Output only. The display name with the last name first formatted according to
		 * the locale specified by the viewer's account or the
		 * `Accept-Language` HTTP header.
		 */
		displayNameLastFirst?: string | null;

		/** The family name. */
		familyName?: string | null;

		/** The given name. */
		givenName?: string | null;

		/** The honorific prefixes, such as `Mrs.` or `Dr.` */
		honorificPrefix?: string | null;

		/** The honorific suffixes, such as `Jr.` */
		honorificSuffix?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The middle name(s). */
		middleName?: string | null;

		/** The family name spelled as it sounds. */
		phoneticFamilyName?: string | null;

		/** The full name spelled as it sounds. */
		phoneticFullName?: string | null;

		/** The given name spelled as it sounds. */
		phoneticGivenName?: string | null;

		/** The honorific prefixes spelled as they sound. */
		phoneticHonorificPrefix?: string | null;

		/** The honorific suffixes spelled as they sound. */
		phoneticHonorificSuffix?: string | null;

		/** The middle name(s) spelled as they sound. */
		phoneticMiddleName?: string | null;
	}

	/** A person's name. If the name is a mononym, the family name is empty. */
	export interface NameFormProperties {

		/**
		 * Output only. The display name formatted according to the locale specified by
		 * the viewer's account or the `Accept-Language` HTTP header.
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Output only. The display name with the last name first formatted according to
		 * the locale specified by the viewer's account or the
		 * `Accept-Language` HTTP header.
		 */
		displayNameLastFirst: FormControl<string | null | undefined>,

		/** The family name. */
		familyName: FormControl<string | null | undefined>,

		/** The given name. */
		givenName: FormControl<string | null | undefined>,

		/** The honorific prefixes, such as `Mrs.` or `Dr.` */
		honorificPrefix: FormControl<string | null | undefined>,

		/** The honorific suffixes, such as `Jr.` */
		honorificSuffix: FormControl<string | null | undefined>,

		/** The middle name(s). */
		middleName: FormControl<string | null | undefined>,

		/** The family name spelled as it sounds. */
		phoneticFamilyName: FormControl<string | null | undefined>,

		/** The full name spelled as it sounds. */
		phoneticFullName: FormControl<string | null | undefined>,

		/** The given name spelled as it sounds. */
		phoneticGivenName: FormControl<string | null | undefined>,

		/** The honorific prefixes spelled as they sound. */
		phoneticHonorificPrefix: FormControl<string | null | undefined>,

		/** The honorific suffixes spelled as they sound. */
		phoneticHonorificSuffix: FormControl<string | null | undefined>,

		/** The middle name(s) spelled as they sound. */
		phoneticMiddleName: FormControl<string | null | undefined>,
	}
	export function CreateNameFormGroup() {
		return new FormGroup<NameFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			displayNameLastFirst: new FormControl<string | null | undefined>(undefined),
			familyName: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
			honorificPrefix: new FormControl<string | null | undefined>(undefined),
			honorificSuffix: new FormControl<string | null | undefined>(undefined),
			middleName: new FormControl<string | null | undefined>(undefined),
			phoneticFamilyName: new FormControl<string | null | undefined>(undefined),
			phoneticFullName: new FormControl<string | null | undefined>(undefined),
			phoneticGivenName: new FormControl<string | null | undefined>(undefined),
			phoneticHonorificPrefix: new FormControl<string | null | undefined>(undefined),
			phoneticHonorificSuffix: new FormControl<string | null | undefined>(undefined),
			phoneticMiddleName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's nickname. */
	export interface Nickname {

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The type of the nickname. */
		type?: NicknameType | null;

		/** The nickname. */
		value?: string | null;
	}

	/** A person's nickname. */
	export interface NicknameFormProperties {

		/** The type of the nickname. */
		type: FormControl<NicknameType | null | undefined>,

		/** The nickname. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateNicknameFormGroup() {
		return new FormGroup<NicknameFormProperties>({
			type: new FormControl<NicknameType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NicknameType { DEFAULT = 0, MAIDEN_NAME = 1, INITIALS = 2, GPLUS = 3, OTHER_NAME = 4, ALTERNATE_NAME = 5, SHORT_NAME = 6 }


	/** A person's occupation. */
	export interface Occupation {

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The occupation; for example, `carpenter`. */
		value?: string | null;
	}

	/** A person's occupation. */
	export interface OccupationFormProperties {

		/** The occupation; for example, `carpenter`. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateOccupationFormGroup() {
		return new FormGroup<OccupationFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A person's past or current organization. Overlapping date ranges are
	 * permitted.
	 */
	export interface Organization {

		/**
		 * True if the organization is the person's current organization;
		 * false if the organization is a past organization.
		 */
		current?: boolean | null;

		/** The person's department at the organization. */
		department?: string | null;

		/**
		 * The domain name associated with the organization; for example,
		 * `google.com`.
		 */
		domain?: string | null;

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
		 * and time zone are either specified elsewhere or are not significant. The date
		 * is relative to the Proleptic Gregorian Calendar. This can represent:
		 * * A full date, with non-zero year, month and day values
		 * * A month and day value, with a zero year, e.g. an anniversary
		 * * A year on its own, with zero month and day values
		 * * A year and month value, with a zero day, e.g. a credit card expiration date
		 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
		 */
		endDate?: Date;

		/**
		 * Output only. The type of the organization translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string | null;

		/** The person's job description at the organization. */
		jobDescription?: string | null;

		/** The location of the organization office the person works at. */
		location?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The name of the organization. */
		name?: string | null;

		/** The phonetic name of the organization. */
		phoneticName?: string | null;

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
		 * and time zone are either specified elsewhere or are not significant. The date
		 * is relative to the Proleptic Gregorian Calendar. This can represent:
		 * * A full date, with non-zero year, month and day values
		 * * A month and day value, with a zero year, e.g. an anniversary
		 * * A year on its own, with zero month and day values
		 * * A year and month value, with a zero day, e.g. a credit card expiration date
		 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
		 */
		startDate?: Date;

		/**
		 * The symbol associated with the organization; for example, a stock ticker
		 * symbol, abbreviation, or acronym.
		 */
		symbol?: string | null;

		/** The person's job title at the organization. */
		title?: string | null;

		/**
		 * The type of the organization. The type can be custom or  one of these
		 * predefined values:
		 * * `work`
		 * * `school`
		 */
		type?: string | null;
	}

	/**
	 * A person's past or current organization. Overlapping date ranges are
	 * permitted.
	 */
	export interface OrganizationFormProperties {

		/**
		 * True if the organization is the person's current organization;
		 * false if the organization is a past organization.
		 */
		current: FormControl<boolean | null | undefined>,

		/** The person's department at the organization. */
		department: FormControl<string | null | undefined>,

		/**
		 * The domain name associated with the organization; for example,
		 * `google.com`.
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Output only. The type of the organization translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType: FormControl<string | null | undefined>,

		/** The person's job description at the organization. */
		jobDescription: FormControl<string | null | undefined>,

		/** The location of the organization office the person works at. */
		location: FormControl<string | null | undefined>,

		/** The name of the organization. */
		name: FormControl<string | null | undefined>,

		/** The phonetic name of the organization. */
		phoneticName: FormControl<string | null | undefined>,

		/**
		 * The symbol associated with the organization; for example, a stock ticker
		 * symbol, abbreviation, or acronym.
		 */
		symbol: FormControl<string | null | undefined>,

		/** The person's job title at the organization. */
		title: FormControl<string | null | undefined>,

		/**
		 * The type of the organization. The type can be custom or  one of these
		 * predefined values:
		 * * `work`
		 * * `school`
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			current: new FormControl<boolean | null | undefined>(undefined),
			department: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			formattedType: new FormControl<string | null | undefined>(undefined),
			jobDescription: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phoneticName: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's phone number. */
	export interface PhoneNumber {

		/**
		 * Output only. The canonicalized [ITU-T
		 * E.164](https://law.resource.org/pub/us/cfr/ibr/004/itu-t.E.164.1.2008.pdf)
		 * form of the phone number.
		 */
		canonicalForm?: string | null;

		/**
		 * Output only. The type of the phone number translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/**
		 * The type of the phone number. The type can be custom or one of these
		 * predefined values:
		 * * `home`
		 * * `work`
		 * * `mobile`
		 * * `homeFax`
		 * * `workFax`
		 * * `otherFax`
		 * * `pager`
		 * * `workMobile`
		 * * `workPager`
		 * * `main`
		 * * `googleVoice`
		 * * `other`
		 */
		type?: string | null;

		/** The phone number. */
		value?: string | null;
	}

	/** A person's phone number. */
	export interface PhoneNumberFormProperties {

		/**
		 * Output only. The canonicalized [ITU-T
		 * E.164](https://law.resource.org/pub/us/cfr/ibr/004/itu-t.E.164.1.2008.pdf)
		 * form of the phone number.
		 */
		canonicalForm: FormControl<string | null | undefined>,

		/**
		 * Output only. The type of the phone number translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType: FormControl<string | null | undefined>,

		/**
		 * The type of the phone number. The type can be custom or one of these
		 * predefined values:
		 * * `home`
		 * * `work`
		 * * `mobile`
		 * * `homeFax`
		 * * `workFax`
		 * * `otherFax`
		 * * `pager`
		 * * `workMobile`
		 * * `workPager`
		 * * `main`
		 * * `googleVoice`
		 * * `other`
		 */
		type: FormControl<string | null | undefined>,

		/** The phone number. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			canonicalForm: new FormControl<string | null | undefined>(undefined),
			formattedType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A person's photo. A picture shown next to the person's name to
	 * help others recognize the person.
	 */
	export interface Photo {

		/**
		 * True if the photo is a default photo;
		 * false if the photo is a user-provided photo.
		 */
		default?: boolean | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/**
		 * The URL of the photo. You can change the desired size by appending a query
		 * parameter `sz={size}` at the end of the url, where {size} is the size in
		 * pixels. Example:
		 * https://lh3.googleusercontent.com/-T_wVWLlmg7w/AAAAAAAAAAI/AAAAAAAABa8/00gzXvDBYqw/s100/photo.jpg?sz=50
		 */
		url?: string | null;
	}

	/**
	 * A person's photo. A picture shown next to the person's name to
	 * help others recognize the person.
	 */
	export interface PhotoFormProperties {

		/**
		 * True if the photo is a default photo;
		 * false if the photo is a user-provided photo.
		 */
		default: FormControl<boolean | null | undefined>,

		/**
		 * The URL of the photo. You can change the desired size by appending a query
		 * parameter `sz={size}` at the end of the url, where {size} is the size in
		 * pixels. Example:
		 * https://lh3.googleusercontent.com/-T_wVWLlmg7w/AAAAAAAAAAI/AAAAAAAABa8/00gzXvDBYqw/s100/photo.jpg?sz=50
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePhotoFormGroup() {
		return new FormGroup<PhotoFormProperties>({
			default: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's relation to another person. */
	export interface Relation {

		/**
		 * Output only. The type of the relation translated and formatted in the viewer's
		 * account locale or the locale specified in the Accept-Language HTTP header.
		 */
		formattedType?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The name of the other person this relation refers to. */
		person?: string | null;

		/**
		 * The person's relation to the other person. The type can be custom or one of
		 * these predefined values:
		 * * `spouse`
		 * * `child`
		 * * `mother`
		 * * `father`
		 * * `parent`
		 * * `brother`
		 * * `sister`
		 * * `friend`
		 * * `relative`
		 * * `domesticPartner`
		 * * `manager`
		 * * `assistant`
		 * * `referredBy`
		 * * `partner`
		 */
		type?: string | null;
	}

	/** A person's relation to another person. */
	export interface RelationFormProperties {

		/**
		 * Output only. The type of the relation translated and formatted in the viewer's
		 * account locale or the locale specified in the Accept-Language HTTP header.
		 */
		formattedType: FormControl<string | null | undefined>,

		/** The name of the other person this relation refers to. */
		person: FormControl<string | null | undefined>,

		/**
		 * The person's relation to the other person. The type can be custom or one of
		 * these predefined values:
		 * * `spouse`
		 * * `child`
		 * * `mother`
		 * * `father`
		 * * `parent`
		 * * `brother`
		 * * `sister`
		 * * `friend`
		 * * `relative`
		 * * `domesticPartner`
		 * * `manager`
		 * * `assistant`
		 * * `referredBy`
		 * * `partner`
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRelationFormGroup() {
		return new FormGroup<RelationFormProperties>({
			formattedType: new FormControl<string | null | undefined>(undefined),
			person: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * **DEPRECATED**: No data will be returned
	 * A person's relationship interest .
	 */
	export interface RelationshipInterest {

		/**
		 * Output only. The value of the relationship interest translated and formatted
		 * in the viewer's account locale or the locale specified in the
		 * Accept-Language HTTP header.
		 */
		formattedValue?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/**
		 * The kind of relationship the person is looking for. The value can be custom
		 * or one of these predefined values:
		 * * `friend`
		 * * `date`
		 * * `relationship`
		 * * `networking`
		 */
		value?: string | null;
	}

	/**
	 * **DEPRECATED**: No data will be returned
	 * A person's relationship interest .
	 */
	export interface RelationshipInterestFormProperties {

		/**
		 * Output only. The value of the relationship interest translated and formatted
		 * in the viewer's account locale or the locale specified in the
		 * Accept-Language HTTP header.
		 */
		formattedValue: FormControl<string | null | undefined>,

		/**
		 * The kind of relationship the person is looking for. The value can be custom
		 * or one of these predefined values:
		 * * `friend`
		 * * `date`
		 * * `relationship`
		 * * `networking`
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipInterestFormGroup() {
		return new FormGroup<RelationshipInterestFormProperties>({
			formattedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * **DEPRECATED**: No data will be returned
	 * A person's relationship status.
	 */
	export interface RelationshipStatus {

		/**
		 * Output only. The value of the relationship status translated and formatted in
		 * the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedValue?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/**
		 * The relationship status. The value can be custom or one of these
		 * predefined values:
		 * * `single`
		 * * `inARelationship`
		 * * `engaged`
		 * * `married`
		 * * `itsComplicated`
		 * * `openRelationship`
		 * * `widowed`
		 * * `inDomesticPartnership`
		 * * `inCivilUnion`
		 */
		value?: string | null;
	}

	/**
	 * **DEPRECATED**: No data will be returned
	 * A person's relationship status.
	 */
	export interface RelationshipStatusFormProperties {

		/**
		 * Output only. The value of the relationship status translated and formatted in
		 * the viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedValue: FormControl<string | null | undefined>,

		/**
		 * The relationship status. The value can be custom or one of these
		 * predefined values:
		 * * `single`
		 * * `inARelationship`
		 * * `engaged`
		 * * `married`
		 * * `itsComplicated`
		 * * `openRelationship`
		 * * `widowed`
		 * * `inDomesticPartnership`
		 * * `inCivilUnion`
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateRelationshipStatusFormGroup() {
		return new FormGroup<RelationshipStatusFormProperties>({
			formattedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's past or current residence. */
	export interface Residence {

		/**
		 * True if the residence is the person's current residence;
		 * false if the residence is a past residence.
		 */
		current?: boolean | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The address of the residence. */
		value?: string | null;
	}

	/** A person's past or current residence. */
	export interface ResidenceFormProperties {

		/**
		 * True if the residence is the person's current residence;
		 * false if the residence is a past residence.
		 */
		current: FormControl<boolean | null | undefined>,

		/** The address of the residence. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResidenceFormGroup() {
		return new FormGroup<ResidenceFormProperties>({
			current: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A person's SIP address. Session Initial Protocol addresses are used for VoIP
	 * communications to make voice or video calls over the internet.
	 */
	export interface SipAddress {

		/**
		 * Output only. The type of the SIP address translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/**
		 * The type of the SIP address. The type can be custom or or one of these
		 * predefined values:
		 * * `home`
		 * * `work`
		 * * `mobile`
		 * * `other`
		 */
		type?: string | null;

		/**
		 * The SIP address in the
		 * [RFC 3261 19.1](https://tools.ietf.org/html/rfc3261#section-19.1) SIP URI
		 * format.
		 */
		value?: string | null;
	}

	/**
	 * A person's SIP address. Session Initial Protocol addresses are used for VoIP
	 * communications to make voice or video calls over the internet.
	 */
	export interface SipAddressFormProperties {

		/**
		 * Output only. The type of the SIP address translated and formatted in the
		 * viewer's account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType: FormControl<string | null | undefined>,

		/**
		 * The type of the SIP address. The type can be custom or or one of these
		 * predefined values:
		 * * `home`
		 * * `work`
		 * * `mobile`
		 * * `other`
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The SIP address in the
		 * [RFC 3261 19.1](https://tools.ietf.org/html/rfc3261#section-19.1) SIP URI
		 * format.
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSipAddressFormGroup() {
		return new FormGroup<SipAddressFormProperties>({
			formattedType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A skill that the person has. */
	export interface Skill {

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The skill; for example, `underwater basket weaving`. */
		value?: string | null;
	}

	/** A skill that the person has. */
	export interface SkillFormProperties {

		/** The skill; for example, `underwater basket weaving`. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSkillFormGroup() {
		return new FormGroup<SkillFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * **DEPRECATED**: No data will be returned
	 * A brief one-line description of the person.
	 */
	export interface Tagline {

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The tagline. */
		value?: string | null;
	}

	/**
	 * **DEPRECATED**: No data will be returned
	 * A brief one-line description of the person.
	 */
	export interface TaglineFormProperties {

		/** The tagline. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTaglineFormGroup() {
		return new FormGroup<TaglineFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A person's associated URLs. */
	export interface Url {

		/**
		 * Output only. The type of the URL translated and formatted in the viewer's
		 * account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/**
		 * The type of the URL. The type can be custom or one of these predefined
		 * values:
		 * * `home`
		 * * `work`
		 * * `blog`
		 * * `profile`
		 * * `homePage`
		 * * `ftp`
		 * * `reservations`
		 * * `appInstallPage`: website for a Google+ application.
		 * * `other`
		 */
		type?: string | null;

		/** The URL. */
		value?: string | null;
	}

	/** A person's associated URLs. */
	export interface UrlFormProperties {

		/**
		 * Output only. The type of the URL translated and formatted in the viewer's
		 * account locale or the `Accept-Language` HTTP header locale.
		 */
		formattedType: FormControl<string | null | undefined>,

		/**
		 * The type of the URL. The type can be custom or one of these predefined
		 * values:
		 * * `home`
		 * * `work`
		 * * `blog`
		 * * `profile`
		 * * `homePage`
		 * * `ftp`
		 * * `reservations`
		 * * `appInstallPage`: website for a Google+ application.
		 * * `other`
		 */
		type: FormControl<string | null | undefined>,

		/** The URL. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUrlFormGroup() {
		return new FormGroup<UrlFormProperties>({
			formattedType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Arbitrary user data that is populated by the end users. */
	export interface UserDefined {

		/** The end user specified key of the user defined data. */
		key?: string | null;

		/** Metadata about a field. */
		metadata?: FieldMetadata;

		/** The end user specified value of the user defined data. */
		value?: string | null;
	}

	/** Arbitrary user data that is populated by the end users. */
	export interface UserDefinedFormProperties {

		/** The end user specified key of the user defined data. */
		key: FormControl<string | null | undefined>,

		/** The end user specified value of the user defined data. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserDefinedFormGroup() {
		return new FormGroup<UserDefinedFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** The response to a get request for a list of people by resource name. */
	export interface GetPeopleResponse {

		/** The response for each requested resource name. */
		responses?: Array<PersonResponse>;
	}

	/** The response to a get request for a list of people by resource name. */
	export interface GetPeopleResponseFormProperties {
	}
	export function CreateGetPeopleResponseFormGroup() {
		return new FormGroup<GetPeopleResponseFormProperties>({
		});

	}


	/** The response for a single person */
	export interface PersonResponse {

		/**
		 * **DEPRECATED** (Please use status instead)
		 * [HTTP 1.1 status code]
		 * (http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
		 */
		httpStatusCode?: number | null;

		/**
		 * Information about a person merged from various data sources such as the
		 * authenticated user's contacts and profile data.
		 * Most fields can have multiple items. The items in a field have no guaranteed
		 * order, but each non-empty field is guaranteed to have exactly one field with
		 * `metadata.primary` set to true.
		 */
		person?: Person;

		/**
		 * The original requested resource name. May be different than the resource
		 * name on the returned person.
		 * The resource name can change when adding or removing fields that link a
		 * contact and profile such as a verified email, verified phone number, or a
		 * profile URL.
		 */
		requestedResourceName?: string | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		status?: Status;
	}

	/** The response for a single person */
	export interface PersonResponseFormProperties {

		/**
		 * **DEPRECATED** (Please use status instead)
		 * [HTTP 1.1 status code]
		 * (http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
		 */
		httpStatusCode: FormControl<number | null | undefined>,

		/**
		 * The original requested resource name. May be different than the resource
		 * name on the returned person.
		 * The resource name can change when adding or removing fields that link a
		 * contact and profile such as a verified email, verified phone number, or a
		 * profile URL.
		 */
		requestedResourceName: FormControl<string | null | undefined>,
	}
	export function CreatePersonResponseFormGroup() {
		return new FormGroup<PersonResponseFormProperties>({
			httpStatusCode: new FormControl<number | null | undefined>(undefined),
			requestedResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a request for the authenticated user's connections. */
	export interface ListConnectionsResponse {

		/** The list of people that the requestor is connected to. */
		connections?: Array<Person>;

		/**
		 * A token, which can be sent as `page_token` to retrieve the next page.
		 * If this field is omitted, there are no subsequent pages.
		 */
		nextPageToken?: string | null;

		/**
		 * A token, which can be sent as `sync_token` to retrieve changes since the
		 * last request. Request must set `request_sync_token` to return the sync
		 * token.
		 */
		nextSyncToken?: string | null;

		/** The total number of items in the list without pagination. */
		totalItems?: number | null;

		/**
		 * **DEPRECATED** (Please use totalItems)
		 * The total number of people in the list without pagination.
		 */
		totalPeople?: number | null;
	}

	/** The response to a request for the authenticated user's connections. */
	export interface ListConnectionsResponseFormProperties {

		/**
		 * A token, which can be sent as `page_token` to retrieve the next page.
		 * If this field is omitted, there are no subsequent pages.
		 */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * A token, which can be sent as `sync_token` to retrieve changes since the
		 * last request. Request must set `request_sync_token` to return the sync
		 * token.
		 */
		nextSyncToken: FormControl<string | null | undefined>,

		/** The total number of items in the list without pagination. */
		totalItems: FormControl<number | null | undefined>,

		/**
		 * **DEPRECATED** (Please use totalItems)
		 * The total number of people in the list without pagination.
		 */
		totalPeople: FormControl<number | null | undefined>,
	}
	export function CreateListConnectionsResponseFormGroup() {
		return new FormGroup<ListConnectionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			nextSyncToken: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
			totalPeople: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response to a list contact groups request. */
	export interface ListContactGroupsResponse {

		/**
		 * The list of contact groups. Members of the contact groups are not
		 * populated.
		 */
		contactGroups?: Array<ContactGroup>;

		/** The token that can be used to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The token that can be used to retrieve changes since the last request. */
		nextSyncToken?: string | null;

		/** The total number of items in the list without pagination. */
		totalItems?: number | null;
	}

	/** The response to a list contact groups request. */
	export interface ListContactGroupsResponseFormProperties {

		/** The token that can be used to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The token that can be used to retrieve changes since the last request. */
		nextSyncToken: FormControl<string | null | undefined>,

		/** The total number of items in the list without pagination. */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateListContactGroupsResponseFormGroup() {
		return new FormGroup<ListContactGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			nextSyncToken: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A request to modify an existing contact group's members. Contacts can be
	 * removed from any group but they can only be added to a user group or
	 * "myContacts" or "starred" system groups.
	 */
	export interface ModifyContactGroupMembersRequest {

		/**
		 * Optional. The resource names of the contact people to add in the form of
		 * `people/{person_id}`.
		 */
		resourceNamesToAdd?: Array<string>;

		/**
		 * Optional. The resource names of the contact people to remove in the form of
		 * `people/{person_id}`.
		 */
		resourceNamesToRemove?: Array<string>;
	}

	/**
	 * A request to modify an existing contact group's members. Contacts can be
	 * removed from any group but they can only be added to a user group or
	 * "myContacts" or "starred" system groups.
	 */
	export interface ModifyContactGroupMembersRequestFormProperties {
	}
	export function CreateModifyContactGroupMembersRequestFormGroup() {
		return new FormGroup<ModifyContactGroupMembersRequestFormProperties>({
		});

	}


	/** The response to a modify contact group members request. */
	export interface ModifyContactGroupMembersResponse {

		/**
		 * The contact people resource names that cannot be removed from their
		 * last contact group.
		 */
		canNotRemoveLastContactGroupResourceNames?: Array<string>;

		/** The contact people resource names that were not found. */
		notFoundResourceNames?: Array<string>;
	}

	/** The response to a modify contact group members request. */
	export interface ModifyContactGroupMembersResponseFormProperties {
	}
	export function CreateModifyContactGroupMembersResponseFormGroup() {
		return new FormGroup<ModifyContactGroupMembersResponseFormProperties>({
		});

	}


	/**
	 * A request to update an existing user contact group. All updated fields will
	 * be replaced.
	 */
	export interface UpdateContactGroupRequest {

		/** A contact group. */
		contactGroup?: ContactGroup;
	}

	/**
	 * A request to update an existing user contact group. All updated fields will
	 * be replaced.
	 */
	export interface UpdateContactGroupRequestFormProperties {
	}
	export function CreateUpdateContactGroupRequestFormGroup() {
		return new FormGroup<UpdateContactGroupRequestFormProperties>({
		});

	}


	/**
	 * A request to update an existing contact's photo.
	 * All requests must have a valid photo format: JPEG or PNG.
	 */
	export interface UpdateContactPhotoRequest {

		/**
		 * Optional. A field mask to restrict which fields on the person are returned. Multiple
		 * fields can be specified by separating them with commas. Defaults to empty
		 * if not set, which will skip the post mutate get. Valid values are:
		 * * addresses
		 * * ageRanges
		 * * biographies
		 * * birthdays
		 * * coverPhotos
		 * * emailAddresses
		 * * events
		 * * genders
		 * * imClients
		 * * interests
		 * * locales
		 * * memberships
		 * * metadata
		 * * names
		 * * nicknames
		 * * occupations
		 * * organizations
		 * * phoneNumbers
		 * * photos
		 * * relations
		 * * residences
		 * * sipAddresses
		 * * skills
		 * * urls
		 * * userDefined
		 */
		personFields?: string | null;

		/** Required. Raw photo bytes */
		photoBytes?: string | null;
	}

	/**
	 * A request to update an existing contact's photo.
	 * All requests must have a valid photo format: JPEG or PNG.
	 */
	export interface UpdateContactPhotoRequestFormProperties {

		/**
		 * Optional. A field mask to restrict which fields on the person are returned. Multiple
		 * fields can be specified by separating them with commas. Defaults to empty
		 * if not set, which will skip the post mutate get. Valid values are:
		 * * addresses
		 * * ageRanges
		 * * biographies
		 * * birthdays
		 * * coverPhotos
		 * * emailAddresses
		 * * events
		 * * genders
		 * * imClients
		 * * interests
		 * * locales
		 * * memberships
		 * * metadata
		 * * names
		 * * nicknames
		 * * occupations
		 * * organizations
		 * * phoneNumbers
		 * * photos
		 * * relations
		 * * residences
		 * * sipAddresses
		 * * skills
		 * * urls
		 * * userDefined
		 */
		personFields: FormControl<string | null | undefined>,

		/** Required. Raw photo bytes */
		photoBytes: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactPhotoRequestFormGroup() {
		return new FormGroup<UpdateContactPhotoRequestFormProperties>({
			personFields: new FormControl<string | null | undefined>(undefined),
			photoBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for updating a contact's photo. */
	export interface UpdateContactPhotoResponse {

		/**
		 * Information about a person merged from various data sources such as the
		 * authenticated user's contacts and profile data.
		 * Most fields can have multiple items. The items in a field have no guaranteed
		 * order, but each non-empty field is guaranteed to have exactly one field with
		 * `metadata.primary` set to true.
		 */
		person?: Person;
	}

	/** The response for updating a contact's photo. */
	export interface UpdateContactPhotoResponseFormProperties {
	}
	export function CreateUpdateContactPhotoResponseFormGroup() {
		return new FormGroup<UpdateContactPhotoResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all contact groups owned by the authenticated user. Members of the
		 * contact groups are not populated.
		 * Get v1/contactGroups
		 * @param {number} pageSize Optional. The maximum number of resources to return. Valid values are between 1 and
		 * 1000, inclusive. Defaults to 30 if not set or set to 0.
		 * @param {string} pageToken Optional. The next_page_token value returned from a previous call to
		 * [ListContactGroups](/people/api/rest/v1/contactgroups/list).
		 * Requests the next page of resources.
		 * @param {string} syncToken Optional. A sync token, returned by a previous call to `contactgroups.list`.
		 * Only resources changed since the sync token was created will be returned.
		 * @return {void} Successful response
		 */
		People_contactGroups_list(pageSize: number | null | undefined, pageToken: string | null | undefined, syncToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/contactGroups?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new contact group owned by the authenticated user.
		 * Post v1/contactGroups
		 * @return {void} Successful response
		 */
		People_contactGroups_create(requestBody: CreateContactGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/contactGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of contact groups owned by the authenticated user by specifying
		 * a list of contact group resource names.
		 * Get v1/contactGroups:batchGet
		 * @param {number} maxMembers Optional. Specifies the maximum number of members to return for each group. Defaults
		 * to 0 if not set, which will return zero members.
		 * @param {Array<string>} resourceNames Required. The resource names of the contact groups to get.
		 * @return {void} Successful response
		 */
		People_contactGroups_batchGet(maxMembers: number | null | undefined, resourceNames: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/contactGroups:batchGet?maxMembers=' + maxMembers + '&' + resourceNames?.map(z => `resourceNames=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides information about a list of specific people by specifying a list
		 * of requested resource names. Use `people/me` to indicate the authenticated
		 * user.
		 * The request throws a 400 error if 'personFields' is not specified.
		 * Get v1/people:batchGet
		 * @param {string} personFields Required. A field mask to restrict which fields on each person are returned. Multiple
		 * fields can be specified by separating them with commas. Valid values are:
		 * * addresses
		 * * ageRanges
		 * * biographies
		 * * birthdays
		 * * coverPhotos
		 * * emailAddresses
		 * * events
		 * * genders
		 * * imClients
		 * * interests
		 * * locales
		 * * memberships
		 * * metadata
		 * * names
		 * * nicknames
		 * * occupations
		 * * organizations
		 * * phoneNumbers
		 * * photos
		 * * relations
		 * * residences
		 * * sipAddresses
		 * * skills
		 * * urls
		 * * userDefined
		 * @param {string} requestMask_includeField Required. Comma-separated list of person fields to be included in the response. Each
		 * path should start with `person.`: for example, `person.names` or
		 * `person.photos`.
		 * @param {Array<string>} resourceNames Required. The resource names of the people to provide information about.
		 * - To get information about the authenticated user, specify `people/me`.
		 * - To get information about a google account, specify
		 *   `people/{account_id}`.
		 * - To get information about a contact, specify the resource name that
		 *   identifies the contact as returned by
		 * [`people.connections.list`](/people/api/rest/v1/people.connections/list).
		 * You can include up to 50 resource names in one request.
		 * @return {void} Successful response
		 */
		People_people_getBatchGet(personFields: string | null | undefined, requestMask_includeField: string | null | undefined, resourceNames: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/people:batchGet?personFields=' + (personFields == null ? '' : encodeURIComponent(personFields)) + '&requestMask_includeField=' + (requestMask_includeField == null ? '' : encodeURIComponent(requestMask_includeField)) + '&' + resourceNames?.map(z => `resourceNames=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new contact and return the person resource for that contact.
		 * Post v1/people:createContact
		 * @return {void} Successful response
		 */
		People_people_createContact(requestBody: Person): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/people:createContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an existing contact group owned by the authenticated user by
		 * specifying a contact group resource name.
		 * Delete v1/{resourceName}
		 * @param {string} resourceName Required. The resource name of the contact group to delete.
		 * @param {boolean} deleteContacts Optional. Set to true to also delete the contacts in the specified group.
		 * @return {void} Successful response
		 */
		People_contactGroups_delete(resourceName: string, deleteContacts: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&deleteContacts=' + deleteContacts, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific contact group owned by the authenticated user by specifying
		 * a contact group resource name.
		 * Get v1/{resourceName}
		 * @param {string} resourceName Required. The resource name of the contact group to get.
		 * @param {number} maxMembers Optional. Specifies the maximum number of members to return. Defaults to 0 if not
		 * set, which will return zero members.
		 * @param {string} requestMask_includeField Required. Comma-separated list of person fields to be included in the response. Each
		 * path should start with `person.`: for example, `person.names` or
		 * `person.photos`.
		 * @return {void} Successful response
		 */
		People_contactGroups_get(resourceName: string, maxMembers: number | null | undefined, requestMask_includeField: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&maxMembers=' + maxMembers + '&requestMask_includeField=' + (requestMask_includeField == null ? '' : encodeURIComponent(requestMask_includeField)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the name of an existing contact group owned by the authenticated
		 * user.
		 * Put v1/{resourceName}
		 * @param {string} resourceName The resource name for the contact group, assigned by the server. An ASCII
		 * string, in the form of `contactGroups/{contact_group_id}`.
		 * @return {void} Successful response
		 */
		People_contactGroups_update(resourceName: string, requestBody: UpdateContactGroupRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides a list of the authenticated user's contacts merged with any
		 * connected profiles.
		 * The request throws a 400 error if 'personFields' is not specified.
		 * Get v1/{resourceName}/connections
		 * @param {string} resourceName Required. The resource name to return connections for. Only `people/me` is valid.
		 * @param {number} pageSize Optional. The number of connections to include in the response. Valid values are
		 * between 1 and 2000, inclusive. Defaults to 100 if not set or set to 0.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListConnections` call.
		 * Provide this to retrieve the subsequent page.
		 * When paginating, all other parameters provided to `ListConnections`
		 * must match the call that provided the page token.
		 * @param {string} personFields Required. A field mask to restrict which fields on each person are returned. Multiple
		 * fields can be specified by separating them with commas. Valid values are:
		 * * addresses
		 * * ageRanges
		 * * biographies
		 * * birthdays
		 * * coverPhotos
		 * * emailAddresses
		 * * events
		 * * genders
		 * * imClients
		 * * interests
		 * * locales
		 * * memberships
		 * * metadata
		 * * names
		 * * nicknames
		 * * occupations
		 * * organizations
		 * * phoneNumbers
		 * * photos
		 * * relations
		 * * residences
		 * * sipAddresses
		 * * skills
		 * * urls
		 * * userDefined
		 * @param {string} requestMask_includeField Required. Comma-separated list of person fields to be included in the response. Each
		 * path should start with `person.`: for example, `person.names` or
		 * `person.photos`.
		 * @param {boolean} requestSyncToken Optional. Whether the response should include `next_sync_token`, which can be used to
		 * get all changes since the last request. For subsequent sync requests use
		 * the `sync_token` param instead. Initial sync requests that specify
		 * `request_sync_token` have an additional rate limit.
		 * @param {People_people_connections_listSortOrder} sortOrder Optional. The order in which the connections should be sorted. Defaults to
		 * `LAST_MODIFIED_ASCENDING`.
		 * @param {string} syncToken Optional. A sync token, received from a previous `ListConnections` call.
		 * Provide this to retrieve only the resources changed since the last request.
		 * Sync requests that specify `sync_token` have an additional rate limit.
		 * When syncing, all other parameters provided to `ListConnections`
		 * must match the call that provided the sync token.
		 * @return {void} Successful response
		 */
		People_people_connections_list(resourceName: string, pageSize: number | null | undefined, pageToken: string | null | undefined, personFields: string | null | undefined, requestMask_includeField: string | null | undefined, requestSyncToken: boolean | null | undefined, sortOrder: People_people_connections_listSortOrder | null | undefined, syncToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/connections&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&personFields=' + (personFields == null ? '' : encodeURIComponent(personFields)) + '&requestMask_includeField=' + (requestMask_includeField == null ? '' : encodeURIComponent(requestMask_includeField)) + '&requestSyncToken=' + requestSyncToken + '&sortOrder=' + sortOrder + '&syncToken=' + (syncToken == null ? '' : encodeURIComponent(syncToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modify the members of a contact group owned by the authenticated user.
		 * The only system contact groups that can have members added are
		 * `contactGroups/myContacts` and `contactGroups/starred`. Other system
		 * contact groups are deprecated and can only have contacts removed.
		 * Post v1/{resourceName}/members:modify
		 * @param {string} resourceName Required. The resource name of the contact group to modify.
		 * @return {void} Successful response
		 */
		People_contactGroups_members_modify(resourceName: string, requestBody: ModifyContactGroupMembersRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/members:modify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a contact person. Any non-contact data will not be deleted.
		 * Delete v1/{resourceName}:deleteContact
		 * @param {string} resourceName Required. The resource name of the contact to delete.
		 * @return {void} Successful response
		 */
		People_people_deleteContact(resourceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + ':deleteContact', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a contact's photo.
		 * Delete v1/{resourceName}:deleteContactPhoto
		 * @param {string} resourceName Required. The resource name of the contact whose photo will be deleted.
		 * @param {string} personFields Optional. A field mask to restrict which fields on the person are returned. Multiple
		 * fields can be specified by separating them with commas. Defaults to empty
		 * if not set, which will skip the post mutate get. Valid values are:
		 * * addresses
		 * * ageRanges
		 * * biographies
		 * * birthdays
		 * * coverPhotos
		 * * emailAddresses
		 * * events
		 * * genders
		 * * imClients
		 * * interests
		 * * locales
		 * * memberships
		 * * metadata
		 * * names
		 * * nicknames
		 * * occupations
		 * * organizations
		 * * phoneNumbers
		 * * photos
		 * * relations
		 * * residences
		 * * sipAddresses
		 * * skills
		 * * urls
		 * * userDefined
		 * @return {void} Successful response
		 */
		People_people_deleteContactPhoto(resourceName: string, personFields: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + ':deleteContactPhoto&personFields=' + (personFields == null ? '' : encodeURIComponent(personFields)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update contact data for an existing contact person. Any non-contact data
		 * will not be modified.
		 * The request throws a 400 error if `updatePersonFields` is not specified.
		 * The request throws a 400 error if `person.metadata.sources` is not
		 * specified for the contact to be updated.
		 * The request throws a 400 error with an error with reason
		 * `"failedPrecondition"` if `person.metadata.sources.etag` is different than
		 * the contact's etag, which indicates the contact has changed since its data
		 * was read. Clients should get the latest person and re-apply their updates
		 * to the latest person.
		 * Patch v1/{resourceName}:updateContact
		 * @param {string} resourceName The resource name for the person, assigned by the server. An ASCII string
		 * with a max length of 27 characters, in the form of
		 * `people/{person_id}`.
		 * @param {string} updatePersonFields Required. A field mask to restrict which fields on the person are updated. Multiple
		 * fields can be specified by separating them with commas.
		 * All updated fields will be replaced. Valid values are:
		 * * addresses
		 * * biographies
		 * * birthdays
		 * * emailAddresses
		 * * events
		 * * genders
		 * * imClients
		 * * interests
		 * * locales
		 * * memberships
		 * * names
		 * * nicknames
		 * * occupations
		 * * organizations
		 * * phoneNumbers
		 * * relations
		 * * residences
		 * * sipAddresses
		 * * urls
		 * * userDefined
		 * @return {void} Successful response
		 */
		People_people_updateContact(resourceName: string, updatePersonFields: string | null | undefined, requestBody: Person): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + ':updateContact&updatePersonFields=' + (updatePersonFields == null ? '' : encodeURIComponent(updatePersonFields)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a contact's photo.
		 * Patch v1/{resourceName}:updateContactPhoto
		 * @param {string} resourceName Required. Person resource name
		 * @return {void} Successful response
		 */
		People_people_updateContactPhoto(resourceName: string, requestBody: UpdateContactPhotoRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + ':updateContactPhoto', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum People_people_connections_listSortOrder { LAST_MODIFIED_ASCENDING = 0, LAST_MODIFIED_DESCENDING = 1, FIRST_NAME_ASCENDING = 2, LAST_NAME_ASCENDING = 3 }

}

