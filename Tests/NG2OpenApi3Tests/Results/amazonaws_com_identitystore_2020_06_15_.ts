import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateGroupResponse {

		/** Required */
		GroupId: string;

		/** Required */
		IdentityStoreId: string;
	}
	export interface CreateGroupResponseFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupResponseFormGroup() {
		return new FormGroup<CreateGroupResponseFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGroupRequest {

		/** Required */
		IdentityStoreId: string;
		DisplayName?: string;
		Description?: string;
	}
	export interface CreateGroupRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateGroupMembershipResponse {

		/** Required */
		MembershipId: string;

		/** Required */
		IdentityStoreId: string;
	}
	export interface CreateGroupMembershipResponseFormProperties {

		/** Required */
		MembershipId: FormControl<string | null | undefined>,

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupMembershipResponseFormGroup() {
		return new FormGroup<CreateGroupMembershipResponseFormProperties>({
			MembershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGroupMembershipRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		GroupId: string;

		/** Required */
		MemberId: MemberId;
	}
	export interface CreateGroupMembershipRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupMembershipRequestFormGroup() {
		return new FormGroup<CreateGroupMembershipRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object containing the identifier of a group member. */
	export interface MemberId {
		UserId?: string;
	}

	/** An object containing the identifier of a group member. */
	export interface MemberIdFormProperties {
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateMemberIdFormGroup() {
		return new FormGroup<MemberIdFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserResponse {

		/** Required */
		UserId: string;

		/** Required */
		IdentityStoreId: string;
	}
	export interface CreateUserResponseFormProperties {

		/** Required */
		UserId: FormControl<string | null | undefined>,

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserRequest {

		/** Required */
		IdentityStoreId: string;
		UserName?: string;
		Name?: Name;
		DisplayName?: string;
		NickName?: string;
		ProfileUrl?: string;
		Emails?: Array<Email>;
		Addresses?: Array<Address>;
		PhoneNumbers?: Array<PhoneNumber>;
		UserType?: string;
		Title?: string;
		PreferredLanguage?: string;
		Locale?: string;
		Timezone?: string;
	}
	export interface CreateUserRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		NickName: FormControl<string | null | undefined>,
		ProfileUrl: FormControl<string | null | undefined>,
		UserType: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		PreferredLanguage: FormControl<string | null | undefined>,
		Locale: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			NickName: new FormControl<string | null | undefined>(undefined),
			ProfileUrl: new FormControl<string | null | undefined>(undefined),
			UserType: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			PreferredLanguage: new FormControl<string | null | undefined>(undefined),
			Locale: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The full name of the user. */
	export interface Name {
		Formatted?: string;
		FamilyName?: string;
		GivenName?: string;
		MiddleName?: string;
		HonorificPrefix?: string;
		HonorificSuffix?: string;
	}

	/** The full name of the user. */
	export interface NameFormProperties {
		Formatted: FormControl<string | null | undefined>,
		FamilyName: FormControl<string | null | undefined>,
		GivenName: FormControl<string | null | undefined>,
		MiddleName: FormControl<string | null | undefined>,
		HonorificPrefix: FormControl<string | null | undefined>,
		HonorificSuffix: FormControl<string | null | undefined>,
	}
	export function CreateNameFormGroup() {
		return new FormGroup<NameFormProperties>({
			Formatted: new FormControl<string | null | undefined>(undefined),
			FamilyName: new FormControl<string | null | undefined>(undefined),
			GivenName: new FormControl<string | null | undefined>(undefined),
			MiddleName: new FormControl<string | null | undefined>(undefined),
			HonorificPrefix: new FormControl<string | null | undefined>(undefined),
			HonorificSuffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The email address associated with the user. */
	export interface Email {
		Value?: string;
		Type?: string;
		Primary?: boolean | null;
	}

	/** The email address associated with the user. */
	export interface EmailFormProperties {
		Value: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Primary: FormControl<boolean | null | undefined>,
	}
	export function CreateEmailFormGroup() {
		return new FormGroup<EmailFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Primary: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The address associated with the specified user. */
	export interface Address {
		StreetAddress?: string;
		Locality?: string;
		Region?: string;
		PostalCode?: string;
		Country?: string;
		Formatted?: string;
		Type?: string;
		Primary?: boolean | null;
	}

	/** The address associated with the specified user. */
	export interface AddressFormProperties {
		StreetAddress: FormControl<string | null | undefined>,
		Locality: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		Formatted: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Primary: FormControl<boolean | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			StreetAddress: new FormControl<string | null | undefined>(undefined),
			Locality: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Formatted: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Primary: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The phone number associated with the user. */
	export interface PhoneNumber {
		Value?: string;
		Type?: string;
		Primary?: boolean | null;
	}

	/** The phone number associated with the user. */
	export interface PhoneNumberFormProperties {
		Value: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Primary: FormControl<boolean | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Primary: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupResponse {
	}
	export interface DeleteGroupResponseFormProperties {
	}
	export function CreateDeleteGroupResponseFormGroup() {
		return new FormGroup<DeleteGroupResponseFormProperties>({
		});

	}

	export interface DeleteGroupRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		GroupId: string;
	}
	export interface DeleteGroupRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupRequestFormGroup() {
		return new FormGroup<DeleteGroupRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGroupMembershipResponse {
	}
	export interface DeleteGroupMembershipResponseFormProperties {
	}
	export function CreateDeleteGroupMembershipResponseFormGroup() {
		return new FormGroup<DeleteGroupMembershipResponseFormProperties>({
		});

	}

	export interface DeleteGroupMembershipRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		MembershipId: string;
	}
	export interface DeleteGroupMembershipRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		MembershipId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupMembershipRequestFormGroup() {
		return new FormGroup<DeleteGroupMembershipRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MembershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteUserResponse {
	}
	export interface DeleteUserResponseFormProperties {
	}
	export function CreateDeleteUserResponseFormGroup() {
		return new FormGroup<DeleteUserResponseFormProperties>({
		});

	}

	export interface DeleteUserRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		UserId: string;
	}
	export interface DeleteUserRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeGroupResponse {

		/** Required */
		GroupId: string;
		DisplayName?: string;
		ExternalIds?: Array<ExternalId>;
		Description?: string;

		/** Required */
		IdentityStoreId: string;
	}
	export interface DescribeGroupResponseFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGroupResponseFormGroup() {
		return new FormGroup<DescribeGroupResponseFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The identifier issued to this resource by an external identity provider. */
	export interface ExternalId {

		/** Required */
		Issuer: string;

		/** Required */
		Id: string;
	}

	/** The identifier issued to this resource by an external identity provider. */
	export interface ExternalIdFormProperties {

		/** Required */
		Issuer: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateExternalIdFormGroup() {
		return new FormGroup<ExternalIdFormProperties>({
			Issuer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeGroupRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		GroupId: string;
	}
	export interface DescribeGroupRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGroupRequestFormGroup() {
		return new FormGroup<DescribeGroupRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeGroupMembershipResponse {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		MembershipId: string;

		/** Required */
		GroupId: string;

		/**
		 * An object containing the identifier of a group member.
		 * Required
		 */
		MemberId: MemberId;
	}
	export interface DescribeGroupMembershipResponseFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		MembershipId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGroupMembershipResponseFormGroup() {
		return new FormGroup<DescribeGroupMembershipResponseFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MembershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeGroupMembershipRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		MembershipId: string;
	}
	export interface DescribeGroupMembershipRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		MembershipId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGroupMembershipRequestFormGroup() {
		return new FormGroup<DescribeGroupMembershipRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MembershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeUserResponse {
		UserName?: string;

		/** Required */
		UserId: string;
		ExternalIds?: Array<ExternalId>;
		Name?: Name;
		DisplayName?: string;
		NickName?: string;
		ProfileUrl?: string;
		Emails?: Array<Email>;
		Addresses?: Array<Address>;
		PhoneNumbers?: Array<PhoneNumber>;
		UserType?: string;
		Title?: string;
		PreferredLanguage?: string;
		Locale?: string;
		Timezone?: string;

		/** Required */
		IdentityStoreId: string;
	}
	export interface DescribeUserResponseFormProperties {
		UserName: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		NickName: FormControl<string | null | undefined>,
		ProfileUrl: FormControl<string | null | undefined>,
		UserType: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		PreferredLanguage: FormControl<string | null | undefined>,
		Locale: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserResponseFormGroup() {
		return new FormGroup<DescribeUserResponseFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			NickName: new FormControl<string | null | undefined>(undefined),
			ProfileUrl: new FormControl<string | null | undefined>(undefined),
			UserType: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			PreferredLanguage: new FormControl<string | null | undefined>(undefined),
			Locale: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeUserRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		UserId: string;
	}
	export interface DescribeUserRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserRequestFormGroup() {
		return new FormGroup<DescribeUserRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGroupIdResponse {

		/** Required */
		GroupId: string;

		/** Required */
		IdentityStoreId: string;
	}
	export interface GetGroupIdResponseFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupIdResponseFormGroup() {
		return new FormGroup<GetGroupIdResponseFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGroupIdRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		AlternateIdentifier: AlternateIdentifier;
	}
	export interface GetGroupIdRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupIdRequestFormGroup() {
		return new FormGroup<GetGroupIdRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute. */
	export interface AlternateIdentifier {
		ExternalId?: ExternalId;
		UniqueAttribute?: UniqueAttribute;
	}

	/** A unique identifier for a user or group that is not the primary identifier. This value can be an identifier from an external identity provider (IdP) that is associated with the user, the group, or a unique attribute. */
	export interface AlternateIdentifierFormProperties {
	}
	export function CreateAlternateIdentifierFormGroup() {
		return new FormGroup<AlternateIdentifierFormProperties>({
		});

	}


	/** An entity attribute that's unique to a specific entity. */
	export interface UniqueAttribute {

		/** Required */
		AttributePath: string;

		/** Required */
		AttributeValue: AttributeValue;
	}

	/** An entity attribute that's unique to a specific entity. */
	export interface UniqueAttributeFormProperties {

		/** Required */
		AttributePath: FormControl<string | null | undefined>,
	}
	export function CreateUniqueAttributeFormGroup() {
		return new FormGroup<UniqueAttributeFormProperties>({
			AttributePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The value of the attribute. This is a <code>Document</code> type. This type is not supported by Java V1, Go V1, and older versions of the AWS CLI. */
	export interface AttributeValue {
	}

	/** The value of the attribute. This is a <code>Document</code> type. This type is not supported by Java V1, Go V1, and older versions of the AWS CLI. */
	export interface AttributeValueFormProperties {
	}
	export function CreateAttributeValueFormGroup() {
		return new FormGroup<AttributeValueFormProperties>({
		});

	}

	export interface GetGroupMembershipIdResponse {

		/** Required */
		MembershipId: string;

		/** Required */
		IdentityStoreId: string;
	}
	export interface GetGroupMembershipIdResponseFormProperties {

		/** Required */
		MembershipId: FormControl<string | null | undefined>,

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupMembershipIdResponseFormGroup() {
		return new FormGroup<GetGroupMembershipIdResponseFormProperties>({
			MembershipId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGroupMembershipIdRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		GroupId: string;

		/** Required */
		MemberId: MemberId;
	}
	export interface GetGroupMembershipIdRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupMembershipIdRequestFormGroup() {
		return new FormGroup<GetGroupMembershipIdRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUserIdResponse {

		/** Required */
		UserId: string;

		/** Required */
		IdentityStoreId: string;
	}
	export interface GetUserIdResponseFormProperties {

		/** Required */
		UserId: FormControl<string | null | undefined>,

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateGetUserIdResponseFormGroup() {
		return new FormGroup<GetUserIdResponseFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetUserIdRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		AlternateIdentifier: AlternateIdentifier;
	}
	export interface GetUserIdRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateGetUserIdRequestFormGroup() {
		return new FormGroup<GetUserIdRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IsMemberInGroupsResponse {

		/** Required */
		Results: Array<GroupMembershipExistenceResult>;
	}
	export interface IsMemberInGroupsResponseFormProperties {
	}
	export function CreateIsMemberInGroupsResponseFormGroup() {
		return new FormGroup<IsMemberInGroupsResponseFormProperties>({
		});

	}


	/** Indicates whether a resource is a member of a group in the identity store. */
	export interface GroupMembershipExistenceResult {
		GroupId?: string;
		MemberId?: MemberId;
		MembershipExists?: boolean | null;
	}

	/** Indicates whether a resource is a member of a group in the identity store. */
	export interface GroupMembershipExistenceResultFormProperties {
		GroupId: FormControl<string | null | undefined>,
		MembershipExists: FormControl<boolean | null | undefined>,
	}
	export function CreateGroupMembershipExistenceResultFormGroup() {
		return new FormGroup<GroupMembershipExistenceResultFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined),
			MembershipExists: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IsMemberInGroupsRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		MemberId: MemberId;

		/** Required */
		GroupIds: Array<string>;
	}
	export interface IsMemberInGroupsRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateIsMemberInGroupsRequestFormGroup() {
		return new FormGroup<IsMemberInGroupsRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListGroupMembershipsResponse {

		/** Required */
		GroupMemberships: Array<GroupMembership>;
		NextToken?: string;
	}
	export interface ListGroupMembershipsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupMembershipsResponseFormGroup() {
		return new FormGroup<ListGroupMembershipsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the identifiers for a group, a group member, and a <code>GroupMembership</code> object in the identity store. */
	export interface GroupMembership {

		/** Required */
		IdentityStoreId: string;
		MembershipId?: string;
		GroupId?: string;
		MemberId?: MemberId;
	}

	/** Contains the identifiers for a group, a group member, and a <code>GroupMembership</code> object in the identity store. */
	export interface GroupMembershipFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
		MembershipId: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateGroupMembershipFormGroup() {
		return new FormGroup<GroupMembershipFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MembershipId: new FormControl<string | null | undefined>(undefined),
			GroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupMembershipsRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		GroupId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListGroupMembershipsRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupMembershipsRequestFormGroup() {
		return new FormGroup<ListGroupMembershipsRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupMembershipsForMemberResponse {

		/** Required */
		GroupMemberships: Array<GroupMembership>;
		NextToken?: string;
	}
	export interface ListGroupMembershipsForMemberResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupMembershipsForMemberResponseFormGroup() {
		return new FormGroup<ListGroupMembershipsForMemberResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupMembershipsForMemberRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		MemberId: MemberId;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListGroupMembershipsForMemberRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupMembershipsForMemberRequestFormGroup() {
		return new FormGroup<ListGroupMembershipsForMemberRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupsResponse {

		/** Required */
		Groups: Array<Group>;
		NextToken?: string;
	}
	export interface ListGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A group object that contains the metadata and attributes for a specified group. */
	export interface Group {

		/** Required */
		GroupId: string;
		DisplayName?: string;
		ExternalIds?: Array<ExternalId>;
		Description?: string;

		/** Required */
		IdentityStoreId: string;
	}

	/** A group object that contains the metadata and attributes for a specified group. */
	export interface GroupFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListGroupsRequest {

		/** Required */
		IdentityStoreId: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
	}
	export interface ListGroupsRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsRequestFormGroup() {
		return new FormGroup<ListGroupsRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A query filter used by <code>ListUsers</code> and <code>ListGroups</code>. This filter object provides the attribute name and attribute value to search users or groups. */
	export interface Filter {

		/** Required */
		AttributePath: string;

		/** Required */
		AttributeValue: string;
	}

	/** A query filter used by <code>ListUsers</code> and <code>ListGroups</code>. This filter object provides the attribute name and attribute value to search users or groups. */
	export interface FilterFormProperties {

		/** Required */
		AttributePath: FormControl<string | null | undefined>,

		/** Required */
		AttributeValue: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			AttributePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListUsersResponse {

		/** Required */
		Users: Array<User>;
		NextToken?: string;
	}
	export interface ListUsersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A user object that contains the metadata and attributes for a specified user. */
	export interface User {
		UserName?: string;

		/** Required */
		UserId: string;
		ExternalIds?: Array<ExternalId>;
		Name?: Name;
		DisplayName?: string;
		NickName?: string;
		ProfileUrl?: string;
		Emails?: Array<Email>;
		Addresses?: Array<Address>;
		PhoneNumbers?: Array<PhoneNumber>;
		UserType?: string;
		Title?: string;
		PreferredLanguage?: string;
		Locale?: string;
		Timezone?: string;

		/** Required */
		IdentityStoreId: string;
	}

	/** A user object that contains the metadata and attributes for a specified user. */
	export interface UserFormProperties {
		UserName: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		NickName: FormControl<string | null | undefined>,
		ProfileUrl: FormControl<string | null | undefined>,
		UserType: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		PreferredLanguage: FormControl<string | null | undefined>,
		Locale: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			NickName: new FormControl<string | null | undefined>(undefined),
			ProfileUrl: new FormControl<string | null | undefined>(undefined),
			UserType: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			PreferredLanguage: new FormControl<string | null | undefined>(undefined),
			Locale: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListUsersRequest {

		/** Required */
		IdentityStoreId: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
	}
	export interface ListUsersRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupResponse {
	}
	export interface UpdateGroupResponseFormProperties {
	}
	export function CreateUpdateGroupResponseFormGroup() {
		return new FormGroup<UpdateGroupResponseFormProperties>({
		});

	}

	export interface UpdateGroupRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		GroupId: string;

		/** Required */
		Operations: Array<AttributeOperation>;
	}
	export interface UpdateGroupRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupRequestFormGroup() {
		return new FormGroup<UpdateGroupRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An operation that applies to the requested group. This operation might add, replace, or remove an attribute. */
	export interface AttributeOperation {

		/** Required */
		AttributePath: string;
		AttributeValue?: AttributeValue;
	}

	/** An operation that applies to the requested group. This operation might add, replace, or remove an attribute. */
	export interface AttributeOperationFormProperties {

		/** Required */
		AttributePath: FormControl<string | null | undefined>,
	}
	export function CreateAttributeOperationFormGroup() {
		return new FormGroup<AttributeOperationFormProperties>({
			AttributePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUserResponse {
	}
	export interface UpdateUserResponseFormProperties {
	}
	export function CreateUpdateUserResponseFormGroup() {
		return new FormGroup<UpdateUserResponseFormProperties>({
		});

	}

	export interface UpdateUserRequest {

		/** Required */
		IdentityStoreId: string;

		/** Required */
		UserId: string;

		/** Required */
		Operations: Array<AttributeOperation>;
	}
	export interface UpdateUserRequestFormProperties {

		/** Required */
		IdentityStoreId: FormControl<string | null | undefined>,

		/** Required */
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			IdentityStoreId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a group within the specified identity store.
		 * Post #X-Amz-Target=AWSIdentityStore.CreateGroup
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(requestBody: CreateGroupRequest): Observable<CreateGroupResponse> {
			return this.http.post<CreateGroupResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.CreateGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a relationship between a member and a group. The following identifiers must be specified: <code>GroupId</code>, <code>IdentityStoreId</code>, and <code>MemberId</code>.
		 * Post #X-Amz-Target=AWSIdentityStore.CreateGroupMembership
		 * @return {CreateGroupMembershipResponse} Success
		 */
		CreateGroupMembership(requestBody: CreateGroupMembershipRequest): Observable<CreateGroupMembershipResponse> {
			return this.http.post<CreateGroupMembershipResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.CreateGroupMembership', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a user within the specified identity store.
		 * Post #X-Amz-Target=AWSIdentityStore.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserRequest): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.CreateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a group within an identity store given <code>GroupId</code>.
		 * Post #X-Amz-Target=AWSIdentityStore.DeleteGroup
		 * @return {DeleteGroupResponse} Success
		 */
		DeleteGroup(requestBody: DeleteGroupRequest): Observable<DeleteGroupResponse> {
			return this.http.post<DeleteGroupResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.DeleteGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a membership within a group given <code>MembershipId</code>.
		 * Post #X-Amz-Target=AWSIdentityStore.DeleteGroupMembership
		 * @return {DeleteGroupMembershipResponse} Success
		 */
		DeleteGroupMembership(requestBody: DeleteGroupMembershipRequest): Observable<DeleteGroupMembershipResponse> {
			return this.http.post<DeleteGroupMembershipResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user within an identity store given <code>UserId</code>.
		 * Post #X-Amz-Target=AWSIdentityStore.DeleteUser
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest): Observable<DeleteUserResponse> {
			return this.http.post<DeleteUserResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.DeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the group metadata and attributes from <code>GroupId</code> in an identity store.
		 * Post #X-Amz-Target=AWSIdentityStore.DescribeGroup
		 * @return {DescribeGroupResponse} Success
		 */
		DescribeGroup(requestBody: DescribeGroupRequest): Observable<DescribeGroupResponse> {
			return this.http.post<DescribeGroupResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.DescribeGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves membership metadata and attributes from <code>MembershipId</code> in an identity store.
		 * Post #X-Amz-Target=AWSIdentityStore.DescribeGroupMembership
		 * @return {DescribeGroupMembershipResponse} Success
		 */
		DescribeGroupMembership(requestBody: DescribeGroupMembershipRequest): Observable<DescribeGroupMembershipResponse> {
			return this.http.post<DescribeGroupMembershipResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the user metadata and attributes from the <code>UserId</code> in an identity store.
		 * Post #X-Amz-Target=AWSIdentityStore.DescribeUser
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(requestBody: DescribeUserRequest): Observable<DescribeUserResponse> {
			return this.http.post<DescribeUserResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.DescribeUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves <code>GroupId</code> in an identity store.
		 * Post #X-Amz-Target=AWSIdentityStore.GetGroupId
		 * @return {GetGroupIdResponse} Success
		 */
		GetGroupId(requestBody: GetGroupIdRequest): Observable<GetGroupIdResponse> {
			return this.http.post<GetGroupIdResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.GetGroupId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the <code>MembershipId</code> in an identity store.
		 * Post #X-Amz-Target=AWSIdentityStore.GetGroupMembershipId
		 * @return {GetGroupMembershipIdResponse} Success
		 */
		GetGroupMembershipId(requestBody: GetGroupMembershipIdRequest): Observable<GetGroupMembershipIdResponse> {
			return this.http.post<GetGroupMembershipIdResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the <code>UserId</code> in an identity store.
		 * Post #X-Amz-Target=AWSIdentityStore.GetUserId
		 * @return {GetUserIdResponse} Success
		 */
		GetUserId(requestBody: GetUserIdRequest): Observable<GetUserIdResponse> {
			return this.http.post<GetUserIdResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.GetUserId', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks the user's membership in all requested groups and returns if the member exists in all queried groups.
		 * Post #X-Amz-Target=AWSIdentityStore.IsMemberInGroups
		 * @return {IsMemberInGroupsResponse} Success
		 */
		IsMemberInGroups(requestBody: IsMemberInGroupsRequest): Observable<IsMemberInGroupsResponse> {
			return this.http.post<IsMemberInGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.IsMemberInGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For the specified group in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
		 * Post #X-Amz-Target=AWSIdentityStore.ListGroupMemberships
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupMembershipsResponse} Success
		 */
		ListGroupMemberships(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupMembershipsRequest): Observable<ListGroupMembershipsResponse> {
			return this.http.post<ListGroupMembershipsResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.ListGroupMemberships?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For the specified member in the specified identity store, returns the list of all <code>GroupMembership</code> objects and returns results in paginated form.
		 * Post #X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupMembershipsForMemberResponse} Success
		 */
		ListGroupMembershipsForMember(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupMembershipsForMemberRequest): Observable<ListGroupMembershipsForMemberResponse> {
			return this.http.post<ListGroupMembershipsForMemberResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all groups in the identity store. Returns a paginated list of complete <code>Group</code> objects. Filtering for a <code>Group</code> by the <code>DisplayName</code> attribute is deprecated. Instead, use the <code>GetGroupId</code> API action.
		 * Post #X-Amz-Target=AWSIdentityStore.ListGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupsRequest): Observable<ListGroupsResponse> {
			return this.http.post<ListGroupsResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.ListGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all users in the identity store. Returns a paginated list of complete <code>User</code> objects. Filtering for a <code>User</code> by the <code>UserName</code> attribute is deprecated. Instead, use the <code>GetUserId</code> API action.
		 * Post #X-Amz-Target=AWSIdentityStore.ListUsers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUsersRequest): Observable<ListUsersResponse> {
			return this.http.post<ListUsersResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.ListUsers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For the specified group in the specified identity store, updates the group metadata and attributes.
		 * Post #X-Amz-Target=AWSIdentityStore.UpdateGroup
		 * @return {UpdateGroupResponse} Success
		 */
		UpdateGroup(requestBody: UpdateGroupRequest): Observable<UpdateGroupResponse> {
			return this.http.post<UpdateGroupResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.UpdateGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For the specified user in the specified identity store, updates the user metadata and attributes.
		 * Post #X-Amz-Target=AWSIdentityStore.UpdateUser
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(requestBody: UpdateUserRequest): Observable<UpdateUserResponse> {
			return this.http.post<UpdateUserResponse>(this.baseUri + '#X-Amz-Target=AWSIdentityStore.UpdateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateGroupX_Amz_Target { 'AWSIdentityStore.CreateGroup' = 'AWSIdentityStore.CreateGroup' }

	export enum CreateGroupMembershipX_Amz_Target { 'AWSIdentityStore.CreateGroupMembership' = 'AWSIdentityStore.CreateGroupMembership' }

	export enum CreateUserX_Amz_Target { 'AWSIdentityStore.CreateUser' = 'AWSIdentityStore.CreateUser' }

	export enum DeleteGroupX_Amz_Target { 'AWSIdentityStore.DeleteGroup' = 'AWSIdentityStore.DeleteGroup' }

	export enum DeleteGroupMembershipX_Amz_Target { 'AWSIdentityStore.DeleteGroupMembership' = 'AWSIdentityStore.DeleteGroupMembership' }

	export enum DeleteUserX_Amz_Target { 'AWSIdentityStore.DeleteUser' = 'AWSIdentityStore.DeleteUser' }

	export enum DescribeGroupX_Amz_Target { 'AWSIdentityStore.DescribeGroup' = 'AWSIdentityStore.DescribeGroup' }

	export enum DescribeGroupMembershipX_Amz_Target { 'AWSIdentityStore.DescribeGroupMembership' = 'AWSIdentityStore.DescribeGroupMembership' }

	export enum DescribeUserX_Amz_Target { 'AWSIdentityStore.DescribeUser' = 'AWSIdentityStore.DescribeUser' }

	export enum GetGroupIdX_Amz_Target { 'AWSIdentityStore.GetGroupId' = 'AWSIdentityStore.GetGroupId' }

	export enum GetGroupMembershipIdX_Amz_Target { 'AWSIdentityStore.GetGroupMembershipId' = 'AWSIdentityStore.GetGroupMembershipId' }

	export enum GetUserIdX_Amz_Target { 'AWSIdentityStore.GetUserId' = 'AWSIdentityStore.GetUserId' }

	export enum IsMemberInGroupsX_Amz_Target { 'AWSIdentityStore.IsMemberInGroups' = 'AWSIdentityStore.IsMemberInGroups' }

	export enum ListGroupMembershipsX_Amz_Target { 'AWSIdentityStore.ListGroupMemberships' = 'AWSIdentityStore.ListGroupMemberships' }

	export enum ListGroupMembershipsForMemberX_Amz_Target { 'AWSIdentityStore.ListGroupMembershipsForMember' = 'AWSIdentityStore.ListGroupMembershipsForMember' }

	export enum ListGroupsX_Amz_Target { 'AWSIdentityStore.ListGroups' = 'AWSIdentityStore.ListGroups' }

	export enum ListUsersX_Amz_Target { 'AWSIdentityStore.ListUsers' = 'AWSIdentityStore.ListUsers' }

	export enum UpdateGroupX_Amz_Target { 'AWSIdentityStore.UpdateGroup' = 'AWSIdentityStore.UpdateGroup' }

	export enum UpdateUserX_Amz_Target { 'AWSIdentityStore.UpdateUser' = 'AWSIdentityStore.UpdateUser' }

}

