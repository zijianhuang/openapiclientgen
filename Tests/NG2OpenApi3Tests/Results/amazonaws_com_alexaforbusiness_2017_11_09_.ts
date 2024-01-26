import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApproveSkillResponse {
	}
	export interface ApproveSkillResponseFormProperties {
	}
	export function CreateApproveSkillResponseFormGroup() {
		return new FormGroup<ApproveSkillResponseFormProperties>({
		});

	}

	export interface ApproveSkillRequest {

		/** Required */
		SkillId: string;
	}
	export interface ApproveSkillRequestFormProperties {

		/** Required */
		SkillId: FormControl<string | null | undefined>,
	}
	export function CreateApproveSkillRequestFormGroup() {
		return new FormGroup<ApproveSkillRequestFormProperties>({
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface AssociateContactWithAddressBookResponse {
	}
	export interface AssociateContactWithAddressBookResponseFormProperties {
	}
	export function CreateAssociateContactWithAddressBookResponseFormGroup() {
		return new FormGroup<AssociateContactWithAddressBookResponseFormProperties>({
		});

	}

	export interface AssociateContactWithAddressBookRequest {

		/** Required */
		ContactArn: string;

		/** Required */
		AddressBookArn: string;
	}
	export interface AssociateContactWithAddressBookRequestFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		AddressBookArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateContactWithAddressBookRequestFormGroup() {
		return new FormGroup<AssociateContactWithAddressBookRequestFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AddressBookArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateDeviceWithNetworkProfileResponse {
	}
	export interface AssociateDeviceWithNetworkProfileResponseFormProperties {
	}
	export function CreateAssociateDeviceWithNetworkProfileResponseFormGroup() {
		return new FormGroup<AssociateDeviceWithNetworkProfileResponseFormProperties>({
		});

	}

	export interface AssociateDeviceWithNetworkProfileRequest {

		/** Required */
		DeviceArn: string;

		/** Required */
		NetworkProfileArn: string;
	}
	export interface AssociateDeviceWithNetworkProfileRequestFormProperties {

		/** Required */
		DeviceArn: FormControl<string | null | undefined>,

		/** Required */
		NetworkProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDeviceWithNetworkProfileRequestFormGroup() {
		return new FormGroup<AssociateDeviceWithNetworkProfileRequestFormProperties>({
			DeviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceNotRegisteredException {
	}
	export interface DeviceNotRegisteredExceptionFormProperties {
	}
	export function CreateDeviceNotRegisteredExceptionFormGroup() {
		return new FormGroup<DeviceNotRegisteredExceptionFormProperties>({
		});

	}

	export interface AssociateDeviceWithRoomResponse {
	}
	export interface AssociateDeviceWithRoomResponseFormProperties {
	}
	export function CreateAssociateDeviceWithRoomResponseFormGroup() {
		return new FormGroup<AssociateDeviceWithRoomResponseFormProperties>({
		});

	}

	export interface AssociateDeviceWithRoomRequest {
		DeviceArn?: string;
		RoomArn?: string;
	}
	export interface AssociateDeviceWithRoomRequestFormProperties {
		DeviceArn: FormControl<string | null | undefined>,
		RoomArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDeviceWithRoomRequestFormGroup() {
		return new FormGroup<AssociateDeviceWithRoomRequestFormProperties>({
			DeviceArn: new FormControl<string | null | undefined>(undefined),
			RoomArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateSkillGroupWithRoomResponse {
	}
	export interface AssociateSkillGroupWithRoomResponseFormProperties {
	}
	export function CreateAssociateSkillGroupWithRoomResponseFormGroup() {
		return new FormGroup<AssociateSkillGroupWithRoomResponseFormProperties>({
		});

	}

	export interface AssociateSkillGroupWithRoomRequest {
		SkillGroupArn?: string;
		RoomArn?: string;
	}
	export interface AssociateSkillGroupWithRoomRequestFormProperties {
		SkillGroupArn: FormControl<string | null | undefined>,
		RoomArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSkillGroupWithRoomRequestFormGroup() {
		return new FormGroup<AssociateSkillGroupWithRoomRequestFormProperties>({
			SkillGroupArn: new FormControl<string | null | undefined>(undefined),
			RoomArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateSkillWithSkillGroupResponse {
	}
	export interface AssociateSkillWithSkillGroupResponseFormProperties {
	}
	export function CreateAssociateSkillWithSkillGroupResponseFormGroup() {
		return new FormGroup<AssociateSkillWithSkillGroupResponseFormProperties>({
		});

	}

	export interface AssociateSkillWithSkillGroupRequest {
		SkillGroupArn?: string;

		/** Required */
		SkillId: string;
	}
	export interface AssociateSkillWithSkillGroupRequestFormProperties {
		SkillGroupArn: FormControl<string | null | undefined>,

		/** Required */
		SkillId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSkillWithSkillGroupRequestFormGroup() {
		return new FormGroup<AssociateSkillWithSkillGroupRequestFormProperties>({
			SkillGroupArn: new FormControl<string | null | undefined>(undefined),
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SkillNotLinkedException {
	}
	export interface SkillNotLinkedExceptionFormProperties {
	}
	export function CreateSkillNotLinkedExceptionFormGroup() {
		return new FormGroup<SkillNotLinkedExceptionFormProperties>({
		});

	}

	export interface AssociateSkillWithUsersResponse {
	}
	export interface AssociateSkillWithUsersResponseFormProperties {
	}
	export function CreateAssociateSkillWithUsersResponseFormGroup() {
		return new FormGroup<AssociateSkillWithUsersResponseFormProperties>({
		});

	}

	export interface AssociateSkillWithUsersRequest {

		/** Required */
		SkillId: string;
	}
	export interface AssociateSkillWithUsersRequestFormProperties {

		/** Required */
		SkillId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSkillWithUsersRequestFormGroup() {
		return new FormGroup<AssociateSkillWithUsersRequestFormProperties>({
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAddressBookResponse {
		AddressBookArn?: string;
	}
	export interface CreateAddressBookResponseFormProperties {
		AddressBookArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAddressBookResponseFormGroup() {
		return new FormGroup<CreateAddressBookResponseFormProperties>({
			AddressBookArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAddressBookRequest {

		/** Required */
		Name: string;
		Description?: string;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateAddressBookRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAddressBookRequestFormGroup() {
		return new FormGroup<CreateAddressBookRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key-value pair that can be associated with a resource.  */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key-value pair that can be associated with a resource.  */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AlreadyExistsException {
	}
	export interface AlreadyExistsExceptionFormProperties {
	}
	export function CreateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateBusinessReportScheduleResponse {
		ScheduleArn?: string;
	}
	export interface CreateBusinessReportScheduleResponseFormProperties {
		ScheduleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBusinessReportScheduleResponseFormGroup() {
		return new FormGroup<CreateBusinessReportScheduleResponseFormProperties>({
			ScheduleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBusinessReportScheduleRequest {
		ScheduleName?: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;

		/** Required */
		Format: BusinessReportFormat;

		/** Required */
		ContentRange: BusinessReportContentRange;
		Recurrence?: BusinessReportRecurrence;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateBusinessReportScheduleRequestFormProperties {
		ScheduleName: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<BusinessReportFormat | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateBusinessReportScheduleRequestFormGroup() {
		return new FormGroup<CreateBusinessReportScheduleRequestFormProperties>({
			ScheduleName: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<BusinessReportFormat | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BusinessReportFormat { CSV = 0, CSV_ZIP = 1 }


	/** The content range of the report. */
	export interface BusinessReportContentRange {

		/** Required */
		Interval: BusinessReportInterval;
	}

	/** The content range of the report. */
	export interface BusinessReportContentRangeFormProperties {

		/** Required */
		Interval: FormControl<BusinessReportInterval | null | undefined>,
	}
	export function CreateBusinessReportContentRangeFormGroup() {
		return new FormGroup<BusinessReportContentRangeFormProperties>({
			Interval: new FormControl<BusinessReportInterval | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BusinessReportInterval { ONE_DAY = 0, ONE_WEEK = 1, THIRTY_DAYS = 2 }


	/** The recurrence of the reports. */
	export interface BusinessReportRecurrence {
		StartDate?: string;
	}

	/** The recurrence of the reports. */
	export interface BusinessReportRecurrenceFormProperties {
		StartDate: FormControl<string | null | undefined>,
	}
	export function CreateBusinessReportRecurrenceFormGroup() {
		return new FormGroup<BusinessReportRecurrenceFormProperties>({
			StartDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConferenceProviderResponse {
		ConferenceProviderArn?: string;
	}
	export interface CreateConferenceProviderResponseFormProperties {
		ConferenceProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateConferenceProviderResponseFormGroup() {
		return new FormGroup<CreateConferenceProviderResponseFormProperties>({
			ConferenceProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConferenceProviderRequest {

		/** Required */
		ConferenceProviderName: string;

		/** Required */
		ConferenceProviderType: ConferenceProviderType;
		IPDialIn?: IPDialIn;
		PSTNDialIn?: PSTNDialIn;

		/** Required */
		MeetingSetting: MeetingSetting;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateConferenceProviderRequestFormProperties {

		/** Required */
		ConferenceProviderName: FormControl<string | null | undefined>,

		/** Required */
		ConferenceProviderType: FormControl<ConferenceProviderType | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateConferenceProviderRequestFormGroup() {
		return new FormGroup<CreateConferenceProviderRequestFormProperties>({
			ConferenceProviderName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConferenceProviderType: new FormControl<ConferenceProviderType | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConferenceProviderType { CHIME = 0, BLUEJEANS = 1, FUZE = 2, GOOGLE_HANGOUTS = 3, POLYCOM = 4, RINGCENTRAL = 5, SKYPE_FOR_BUSINESS = 6, WEBEX = 7, ZOOM = 8, CUSTOM = 9 }


	/** The IP endpoint and protocol for calling. */
	export interface IPDialIn {

		/** Required */
		Endpoint: string;

		/** Required */
		CommsProtocol: CommsProtocol;
	}

	/** The IP endpoint and protocol for calling. */
	export interface IPDialInFormProperties {

		/** Required */
		Endpoint: FormControl<string | null | undefined>,

		/** Required */
		CommsProtocol: FormControl<CommsProtocol | null | undefined>,
	}
	export function CreateIPDialInFormGroup() {
		return new FormGroup<IPDialInFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CommsProtocol: new FormControl<CommsProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CommsProtocol { SIP = 0, SIPS = 1, H323 = 2 }


	/** The information for public switched telephone network (PSTN) conferencing. */
	export interface PSTNDialIn {

		/** Required */
		CountryCode: string;

		/** Required */
		PhoneNumber: string;

		/** Required */
		OneClickIdDelay: string;

		/** Required */
		OneClickPinDelay: string;
	}

	/** The information for public switched telephone network (PSTN) conferencing. */
	export interface PSTNDialInFormProperties {

		/** Required */
		CountryCode: FormControl<string | null | undefined>,

		/** Required */
		PhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		OneClickIdDelay: FormControl<string | null | undefined>,

		/** Required */
		OneClickPinDelay: FormControl<string | null | undefined>,
	}
	export function CreatePSTNDialInFormGroup() {
		return new FormGroup<PSTNDialInFormProperties>({
			CountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OneClickIdDelay: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OneClickPinDelay: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The values that indicate whether a pin is always required (YES), never required (NO), or OPTIONAL.</p> <ul> <li> <p>If YES, Alexa will always ask for a meeting pin.</p> </li> <li> <p>If NO, Alexa will never ask for a meeting pin.</p> </li> <li> <p>If OPTIONAL, Alexa will ask if you have a meeting pin and if the customer responds with yes, it will ask for the meeting pin.</p> </li> </ul> */
	export interface MeetingSetting {

		/** Required */
		RequirePin: RequirePin;
	}

	/** <p>The values that indicate whether a pin is always required (YES), never required (NO), or OPTIONAL.</p> <ul> <li> <p>If YES, Alexa will always ask for a meeting pin.</p> </li> <li> <p>If NO, Alexa will never ask for a meeting pin.</p> </li> <li> <p>If OPTIONAL, Alexa will ask if you have a meeting pin and if the customer responds with yes, it will ask for the meeting pin.</p> </li> </ul> */
	export interface MeetingSettingFormProperties {

		/** Required */
		RequirePin: FormControl<RequirePin | null | undefined>,
	}
	export function CreateMeetingSettingFormGroup() {
		return new FormGroup<MeetingSettingFormProperties>({
			RequirePin: new FormControl<RequirePin | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RequirePin { YES = 0, NO = 1, OPTIONAL = 2 }

	export interface CreateContactResponse {
		ContactArn?: string;
	}
	export interface CreateContactResponseFormProperties {
		ContactArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactResponseFormGroup() {
		return new FormGroup<CreateContactResponseFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateContactRequest {
		DisplayName?: string;

		/** Required */
		FirstName: string;
		LastName?: string;
		PhoneNumber?: string;
		PhoneNumbers?: Array<PhoneNumber>;
		SipAddresses?: Array<SipAddress>;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateContactRequestFormProperties {
		DisplayName: FormControl<string | null | undefined>,

		/** Required */
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactRequestFormGroup() {
		return new FormGroup<CreateContactRequestFormProperties>({
			DisplayName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastName: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The phone number for the contact containing the raw number and phone number type. */
	export interface PhoneNumber {

		/** Required */
		Number: string;

		/** Required */
		Type: PhoneNumberType;
	}

	/** The phone number for the contact containing the raw number and phone number type. */
	export interface PhoneNumberFormProperties {

		/** Required */
		Number: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<PhoneNumberType | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			Number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<PhoneNumberType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PhoneNumberType { MOBILE = 0, WORK = 1, HOME = 2 }


	/** The SIP address for the contact containing the URI and SIP address type. */
	export interface SipAddress {

		/** Required */
		Uri: string;

		/** Required */
		Type: SipType;
	}

	/** The SIP address for the contact containing the URI and SIP address type. */
	export interface SipAddressFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<SipType | null | undefined>,
	}
	export function CreateSipAddressFormGroup() {
		return new FormGroup<SipAddressFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<SipType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SipType { WORK = 0 }

	export interface CreateGatewayGroupResponse {
		GatewayGroupArn?: string;
	}
	export interface CreateGatewayGroupResponseFormProperties {
		GatewayGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateGatewayGroupResponseFormGroup() {
		return new FormGroup<CreateGatewayGroupResponseFormProperties>({
			GatewayGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGatewayGroupRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		ClientRequestToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateGatewayGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateGatewayGroupRequestFormGroup() {
		return new FormGroup<CreateGatewayGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkProfileResponse {
		NetworkProfileArn?: string;
	}
	export interface CreateNetworkProfileResponseFormProperties {
		NetworkProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkProfileResponseFormGroup() {
		return new FormGroup<CreateNetworkProfileResponseFormProperties>({
			NetworkProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkProfileRequest {

		/** Required */
		NetworkProfileName: string;
		Description?: string;

		/** Required */
		Ssid: string;

		/** Required */
		SecurityType: NetworkSecurityType;
		EapMethod?: NetworkEapMethod;
		CurrentPassword?: string;
		NextPassword?: string;
		CertificateAuthorityArn?: string;
		TrustAnchors?: Array<string>;

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Required
		 * Max length: 150
		 * Min length: 10
		 */
		ClientRequestToken: string;
		Tags?: Array<Tag>;
	}
	export interface CreateNetworkProfileRequestFormProperties {

		/** Required */
		NetworkProfileName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Ssid: FormControl<string | null | undefined>,

		/** Required */
		SecurityType: FormControl<NetworkSecurityType | null | undefined>,
		EapMethod: FormControl<NetworkEapMethod | null | undefined>,
		CurrentPassword: FormControl<string | null | undefined>,
		NextPassword: FormControl<string | null | undefined>,
		CertificateAuthorityArn: FormControl<string | null | undefined>,

		/**
		 * A unique, user-specified identifier for the request that ensures idempotency.
		 * Required
		 * Max length: 150
		 * Min length: 10
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkProfileRequestFormGroup() {
		return new FormGroup<CreateNetworkProfileRequestFormProperties>({
			NetworkProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Ssid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SecurityType: new FormControl<NetworkSecurityType | null | undefined>(undefined, [Validators.required]),
			EapMethod: new FormControl<NetworkEapMethod | null | undefined>(undefined),
			CurrentPassword: new FormControl<string | null | undefined>(undefined),
			NextPassword: new FormControl<string | null | undefined>(undefined),
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(150), Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9_-]*')]),
		});

	}

	export enum NetworkSecurityType { OPEN = 0, WEP = 1, WPA_PSK = 2, WPA2_PSK = 3, WPA2_ENTERPRISE = 4 }

	export enum NetworkEapMethod { EAP_TLS = 0 }

	export interface InvalidCertificateAuthorityException {
	}
	export interface InvalidCertificateAuthorityExceptionFormProperties {
	}
	export function CreateInvalidCertificateAuthorityExceptionFormGroup() {
		return new FormGroup<InvalidCertificateAuthorityExceptionFormProperties>({
		});

	}

	export interface InvalidServiceLinkedRoleStateException {
	}
	export interface InvalidServiceLinkedRoleStateExceptionFormProperties {
	}
	export function CreateInvalidServiceLinkedRoleStateExceptionFormGroup() {
		return new FormGroup<InvalidServiceLinkedRoleStateExceptionFormProperties>({
		});

	}

	export interface CreateProfileResponse {
		ProfileArn?: string;
	}
	export interface CreateProfileResponseFormProperties {
		ProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileResponseFormGroup() {
		return new FormGroup<CreateProfileResponseFormProperties>({
			ProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProfileRequest {

		/** Required */
		ProfileName: string;

		/** Required */
		Timezone: string;

		/** Required */
		Address: string;

		/** Required */
		DistanceUnit: DistanceUnit;

		/** Required */
		TemperatureUnit: TemperatureUnit;

		/** Required */
		WakeWord: WakeWord;
		Locale?: string;
		ClientRequestToken?: string;
		SetupModeDisabled?: boolean | null;
		MaxVolumeLimit?: number | null;
		PSTNEnabled?: boolean | null;
		DataRetentionOptIn?: boolean | null;
		MeetingRoomConfiguration?: CreateMeetingRoomConfiguration;
		Tags?: Array<Tag>;
	}
	export interface CreateProfileRequestFormProperties {

		/** Required */
		ProfileName: FormControl<string | null | undefined>,

		/** Required */
		Timezone: FormControl<string | null | undefined>,

		/** Required */
		Address: FormControl<string | null | undefined>,

		/** Required */
		DistanceUnit: FormControl<DistanceUnit | null | undefined>,

		/** Required */
		TemperatureUnit: FormControl<TemperatureUnit | null | undefined>,

		/** Required */
		WakeWord: FormControl<WakeWord | null | undefined>,
		Locale: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		SetupModeDisabled: FormControl<boolean | null | undefined>,
		MaxVolumeLimit: FormControl<number | null | undefined>,
		PSTNEnabled: FormControl<boolean | null | undefined>,
		DataRetentionOptIn: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateProfileRequestFormGroup() {
		return new FormGroup<CreateProfileRequestFormProperties>({
			ProfileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timezone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DistanceUnit: new FormControl<DistanceUnit | null | undefined>(undefined, [Validators.required]),
			TemperatureUnit: new FormControl<TemperatureUnit | null | undefined>(undefined, [Validators.required]),
			WakeWord: new FormControl<WakeWord | null | undefined>(undefined, [Validators.required]),
			Locale: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			SetupModeDisabled: new FormControl<boolean | null | undefined>(undefined),
			MaxVolumeLimit: new FormControl<number | null | undefined>(undefined),
			PSTNEnabled: new FormControl<boolean | null | undefined>(undefined),
			DataRetentionOptIn: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DistanceUnit { METRIC = 0, IMPERIAL = 1 }

	export enum TemperatureUnit { FAHRENHEIT = 0, CELSIUS = 1 }

	export enum WakeWord { ALEXA = 0, AMAZON = 1, ECHO = 2, COMPUTER = 3 }


	/** Creates meeting room settings of a room profile. */
	export interface CreateMeetingRoomConfiguration {
		RoomUtilizationMetricsEnabled?: boolean | null;

		/** Creates settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. */
		EndOfMeetingReminder?: CreateEndOfMeetingReminder;
		InstantBooking?: CreateInstantBooking;
		RequireCheckIn?: CreateRequireCheckIn;
		ProactiveJoin?: CreateProactiveJoin;
	}

	/** Creates meeting room settings of a room profile. */
	export interface CreateMeetingRoomConfigurationFormProperties {
		RoomUtilizationMetricsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateMeetingRoomConfigurationFormGroup() {
		return new FormGroup<CreateMeetingRoomConfigurationFormProperties>({
			RoomUtilizationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Creates settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. */
	export interface CreateEndOfMeetingReminder {

		/** Required */
		ReminderAtMinutes: Array<number>;

		/** Required */
		ReminderType: EndOfMeetingReminderType;

		/** Required */
		Enabled: boolean;
	}

	/** Creates settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending. */
	export interface CreateEndOfMeetingReminderFormProperties {

		/** Required */
		ReminderType: FormControl<EndOfMeetingReminderType | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateEndOfMeetingReminderFormGroup() {
		return new FormGroup<CreateEndOfMeetingReminderFormProperties>({
			ReminderType: new FormControl<EndOfMeetingReminderType | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EndOfMeetingReminderType { ANNOUNCEMENT_TIME_CHECK = 0, ANNOUNCEMENT_VARIABLE_TIME_LEFT = 1, CHIME = 2, KNOCK = 3 }


	/** Creates settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available. */
	export interface CreateInstantBooking {

		/** Required */
		DurationInMinutes: number;

		/** Required */
		Enabled: boolean;
	}

	/** Creates settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available. */
	export interface CreateInstantBookingFormProperties {

		/** Required */
		DurationInMinutes: FormControl<number | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateInstantBookingFormGroup() {
		return new FormGroup<CreateInstantBookingFormProperties>({
			DurationInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. */
	export interface CreateRequireCheckIn {

		/** Required */
		ReleaseAfterMinutes: number;

		/** Required */
		Enabled: boolean;
	}

	/** Creates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released. */
	export interface CreateRequireCheckInFormProperties {

		/** Required */
		ReleaseAfterMinutes: FormControl<number | null | undefined>,

		/** Required */
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateRequireCheckInFormGroup() {
		return new FormGroup<CreateRequireCheckInFormProperties>({
			ReleaseAfterMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProactiveJoin {

		/** Required */
		EnabledByMotion: boolean;
	}
	export interface CreateProactiveJoinFormProperties {

		/** Required */
		EnabledByMotion: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateProactiveJoinFormGroup() {
		return new FormGroup<CreateProactiveJoinFormProperties>({
			EnabledByMotion: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRoomResponse {
		RoomArn?: string;
	}
	export interface CreateRoomResponseFormProperties {
		RoomArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoomResponseFormGroup() {
		return new FormGroup<CreateRoomResponseFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRoomRequest {

		/** Required */
		RoomName: string;
		Description?: string;
		ProfileArn?: string;
		ProviderCalendarId?: string;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateRoomRequestFormProperties {

		/** Required */
		RoomName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ProfileArn: FormControl<string | null | undefined>,
		ProviderCalendarId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoomRequestFormGroup() {
		return new FormGroup<CreateRoomRequestFormProperties>({
			RoomName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ProfileArn: new FormControl<string | null | undefined>(undefined),
			ProviderCalendarId: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSkillGroupResponse {
		SkillGroupArn?: string;
	}
	export interface CreateSkillGroupResponseFormProperties {
		SkillGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSkillGroupResponseFormGroup() {
		return new FormGroup<CreateSkillGroupResponseFormProperties>({
			SkillGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSkillGroupRequest {

		/** Required */
		SkillGroupName: string;
		Description?: string;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateSkillGroupRequestFormProperties {

		/** Required */
		SkillGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateSkillGroupRequestFormGroup() {
		return new FormGroup<CreateSkillGroupRequestFormProperties>({
			SkillGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserResponse {
		UserArn?: string;
	}
	export interface CreateUserResponseFormProperties {
		UserArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
			UserArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserRequest {

		/** Required */
		UserId: string;
		FirstName?: string;
		LastName?: string;
		Email?: string;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateUserRequestFormProperties {

		/** Required */
		UserId: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface DeleteAddressBookResponse {
	}
	export interface DeleteAddressBookResponseFormProperties {
	}
	export function CreateDeleteAddressBookResponseFormGroup() {
		return new FormGroup<DeleteAddressBookResponseFormProperties>({
		});

	}

	export interface DeleteAddressBookRequest {

		/** Required */
		AddressBookArn: string;
	}
	export interface DeleteAddressBookRequestFormProperties {

		/** Required */
		AddressBookArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAddressBookRequestFormGroup() {
		return new FormGroup<DeleteAddressBookRequestFormProperties>({
			AddressBookArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBusinessReportScheduleResponse {
	}
	export interface DeleteBusinessReportScheduleResponseFormProperties {
	}
	export function CreateDeleteBusinessReportScheduleResponseFormGroup() {
		return new FormGroup<DeleteBusinessReportScheduleResponseFormProperties>({
		});

	}

	export interface DeleteBusinessReportScheduleRequest {

		/** Required */
		ScheduleArn: string;
	}
	export interface DeleteBusinessReportScheduleRequestFormProperties {

		/** Required */
		ScheduleArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBusinessReportScheduleRequestFormGroup() {
		return new FormGroup<DeleteBusinessReportScheduleRequestFormProperties>({
			ScheduleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteConferenceProviderResponse {
	}
	export interface DeleteConferenceProviderResponseFormProperties {
	}
	export function CreateDeleteConferenceProviderResponseFormGroup() {
		return new FormGroup<DeleteConferenceProviderResponseFormProperties>({
		});

	}

	export interface DeleteConferenceProviderRequest {

		/** Required */
		ConferenceProviderArn: string;
	}
	export interface DeleteConferenceProviderRequestFormProperties {

		/** Required */
		ConferenceProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConferenceProviderRequestFormGroup() {
		return new FormGroup<DeleteConferenceProviderRequestFormProperties>({
			ConferenceProviderArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteContactResponse {
	}
	export interface DeleteContactResponseFormProperties {
	}
	export function CreateDeleteContactResponseFormGroup() {
		return new FormGroup<DeleteContactResponseFormProperties>({
		});

	}

	export interface DeleteContactRequest {

		/** Required */
		ContactArn: string;
	}
	export interface DeleteContactRequestFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteContactRequestFormGroup() {
		return new FormGroup<DeleteContactRequestFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDeviceResponse {
	}
	export interface DeleteDeviceResponseFormProperties {
	}
	export function CreateDeleteDeviceResponseFormGroup() {
		return new FormGroup<DeleteDeviceResponseFormProperties>({
		});

	}

	export interface DeleteDeviceRequest {

		/** Required */
		DeviceArn: string;
	}
	export interface DeleteDeviceRequestFormProperties {

		/** Required */
		DeviceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDeviceRequestFormGroup() {
		return new FormGroup<DeleteDeviceRequestFormProperties>({
			DeviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDeviceUsageDataResponse {
	}
	export interface DeleteDeviceUsageDataResponseFormProperties {
	}
	export function CreateDeleteDeviceUsageDataResponseFormGroup() {
		return new FormGroup<DeleteDeviceUsageDataResponseFormProperties>({
		});

	}

	export interface DeleteDeviceUsageDataRequest {

		/** Required */
		DeviceArn: string;

		/** Required */
		DeviceUsageType: DeviceUsageType;
	}
	export interface DeleteDeviceUsageDataRequestFormProperties {

		/** Required */
		DeviceArn: FormControl<string | null | undefined>,

		/** Required */
		DeviceUsageType: FormControl<DeviceUsageType | null | undefined>,
	}
	export function CreateDeleteDeviceUsageDataRequestFormGroup() {
		return new FormGroup<DeleteDeviceUsageDataRequestFormProperties>({
			DeviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceUsageType: new FormControl<DeviceUsageType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeviceUsageType { VOICE = 0 }

	export interface DeleteGatewayGroupResponse {
	}
	export interface DeleteGatewayGroupResponseFormProperties {
	}
	export function CreateDeleteGatewayGroupResponseFormGroup() {
		return new FormGroup<DeleteGatewayGroupResponseFormProperties>({
		});

	}

	export interface DeleteGatewayGroupRequest {

		/** Required */
		GatewayGroupArn: string;
	}
	export interface DeleteGatewayGroupRequestFormProperties {

		/** Required */
		GatewayGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGatewayGroupRequestFormGroup() {
		return new FormGroup<DeleteGatewayGroupRequestFormProperties>({
			GatewayGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceAssociatedException {
	}
	export interface ResourceAssociatedExceptionFormProperties {
	}
	export function CreateResourceAssociatedExceptionFormGroup() {
		return new FormGroup<ResourceAssociatedExceptionFormProperties>({
		});

	}

	export interface DeleteNetworkProfileResponse {
	}
	export interface DeleteNetworkProfileResponseFormProperties {
	}
	export function CreateDeleteNetworkProfileResponseFormGroup() {
		return new FormGroup<DeleteNetworkProfileResponseFormProperties>({
		});

	}

	export interface DeleteNetworkProfileRequest {

		/** Required */
		NetworkProfileArn: string;
	}
	export interface DeleteNetworkProfileRequestFormProperties {

		/** Required */
		NetworkProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNetworkProfileRequestFormGroup() {
		return new FormGroup<DeleteNetworkProfileRequestFormProperties>({
			NetworkProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProfileResponse {
	}
	export interface DeleteProfileResponseFormProperties {
	}
	export function CreateDeleteProfileResponseFormGroup() {
		return new FormGroup<DeleteProfileResponseFormProperties>({
		});

	}

	export interface DeleteProfileRequest {
		ProfileArn?: string;
	}
	export interface DeleteProfileRequestFormProperties {
		ProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfileRequestFormGroup() {
		return new FormGroup<DeleteProfileRequestFormProperties>({
			ProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRoomResponse {
	}
	export interface DeleteRoomResponseFormProperties {
	}
	export function CreateDeleteRoomResponseFormGroup() {
		return new FormGroup<DeleteRoomResponseFormProperties>({
		});

	}

	export interface DeleteRoomRequest {
		RoomArn?: string;
	}
	export interface DeleteRoomRequestFormProperties {
		RoomArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRoomRequestFormGroup() {
		return new FormGroup<DeleteRoomRequestFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRoomSkillParameterResponse {
	}
	export interface DeleteRoomSkillParameterResponseFormProperties {
	}
	export function CreateDeleteRoomSkillParameterResponseFormGroup() {
		return new FormGroup<DeleteRoomSkillParameterResponseFormProperties>({
		});

	}

	export interface DeleteRoomSkillParameterRequest {
		RoomArn?: string;

		/** Required */
		SkillId: string;

		/** Required */
		ParameterKey: string;
	}
	export interface DeleteRoomSkillParameterRequestFormProperties {
		RoomArn: FormControl<string | null | undefined>,

		/** Required */
		SkillId: FormControl<string | null | undefined>,

		/** Required */
		ParameterKey: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRoomSkillParameterRequestFormGroup() {
		return new FormGroup<DeleteRoomSkillParameterRequestFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined),
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParameterKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSkillAuthorizationResponse {
	}
	export interface DeleteSkillAuthorizationResponseFormProperties {
	}
	export function CreateDeleteSkillAuthorizationResponseFormGroup() {
		return new FormGroup<DeleteSkillAuthorizationResponseFormProperties>({
		});

	}

	export interface DeleteSkillAuthorizationRequest {

		/** Required */
		SkillId: string;
		RoomArn?: string;
	}
	export interface DeleteSkillAuthorizationRequestFormProperties {

		/** Required */
		SkillId: FormControl<string | null | undefined>,
		RoomArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSkillAuthorizationRequestFormGroup() {
		return new FormGroup<DeleteSkillAuthorizationRequestFormProperties>({
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoomArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSkillGroupResponse {
	}
	export interface DeleteSkillGroupResponseFormProperties {
	}
	export function CreateDeleteSkillGroupResponseFormGroup() {
		return new FormGroup<DeleteSkillGroupResponseFormProperties>({
		});

	}

	export interface DeleteSkillGroupRequest {
		SkillGroupArn?: string;
	}
	export interface DeleteSkillGroupRequestFormProperties {
		SkillGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSkillGroupRequestFormGroup() {
		return new FormGroup<DeleteSkillGroupRequestFormProperties>({
			SkillGroupArn: new FormControl<string | null | undefined>(undefined),
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
		UserArn?: string;

		/** Required */
		EnrollmentId: string;
	}
	export interface DeleteUserRequestFormProperties {
		UserArn: FormControl<string | null | undefined>,

		/** Required */
		EnrollmentId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			UserArn: new FormControl<string | null | undefined>(undefined),
			EnrollmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateContactFromAddressBookResponse {
	}
	export interface DisassociateContactFromAddressBookResponseFormProperties {
	}
	export function CreateDisassociateContactFromAddressBookResponseFormGroup() {
		return new FormGroup<DisassociateContactFromAddressBookResponseFormProperties>({
		});

	}

	export interface DisassociateContactFromAddressBookRequest {

		/** Required */
		ContactArn: string;

		/** Required */
		AddressBookArn: string;
	}
	export interface DisassociateContactFromAddressBookRequestFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		AddressBookArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateContactFromAddressBookRequestFormGroup() {
		return new FormGroup<DisassociateContactFromAddressBookRequestFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AddressBookArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateDeviceFromRoomResponse {
	}
	export interface DisassociateDeviceFromRoomResponseFormProperties {
	}
	export function CreateDisassociateDeviceFromRoomResponseFormGroup() {
		return new FormGroup<DisassociateDeviceFromRoomResponseFormProperties>({
		});

	}

	export interface DisassociateDeviceFromRoomRequest {
		DeviceArn?: string;
	}
	export interface DisassociateDeviceFromRoomRequestFormProperties {
		DeviceArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateDeviceFromRoomRequestFormGroup() {
		return new FormGroup<DisassociateDeviceFromRoomRequestFormProperties>({
			DeviceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateSkillFromSkillGroupResponse {
	}
	export interface DisassociateSkillFromSkillGroupResponseFormProperties {
	}
	export function CreateDisassociateSkillFromSkillGroupResponseFormGroup() {
		return new FormGroup<DisassociateSkillFromSkillGroupResponseFormProperties>({
		});

	}

	export interface DisassociateSkillFromSkillGroupRequest {
		SkillGroupArn?: string;

		/** Required */
		SkillId: string;
	}
	export interface DisassociateSkillFromSkillGroupRequestFormProperties {
		SkillGroupArn: FormControl<string | null | undefined>,

		/** Required */
		SkillId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateSkillFromSkillGroupRequestFormGroup() {
		return new FormGroup<DisassociateSkillFromSkillGroupRequestFormProperties>({
			SkillGroupArn: new FormControl<string | null | undefined>(undefined),
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateSkillFromUsersResponse {
	}
	export interface DisassociateSkillFromUsersResponseFormProperties {
	}
	export function CreateDisassociateSkillFromUsersResponseFormGroup() {
		return new FormGroup<DisassociateSkillFromUsersResponseFormProperties>({
		});

	}

	export interface DisassociateSkillFromUsersRequest {

		/** Required */
		SkillId: string;
	}
	export interface DisassociateSkillFromUsersRequestFormProperties {

		/** Required */
		SkillId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateSkillFromUsersRequestFormGroup() {
		return new FormGroup<DisassociateSkillFromUsersRequestFormProperties>({
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateSkillGroupFromRoomResponse {
	}
	export interface DisassociateSkillGroupFromRoomResponseFormProperties {
	}
	export function CreateDisassociateSkillGroupFromRoomResponseFormGroup() {
		return new FormGroup<DisassociateSkillGroupFromRoomResponseFormProperties>({
		});

	}

	export interface DisassociateSkillGroupFromRoomRequest {
		SkillGroupArn?: string;
		RoomArn?: string;
	}
	export interface DisassociateSkillGroupFromRoomRequestFormProperties {
		SkillGroupArn: FormControl<string | null | undefined>,
		RoomArn: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateSkillGroupFromRoomRequestFormGroup() {
		return new FormGroup<DisassociateSkillGroupFromRoomRequestFormProperties>({
			SkillGroupArn: new FormControl<string | null | undefined>(undefined),
			RoomArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ForgetSmartHomeAppliancesResponse {
	}
	export interface ForgetSmartHomeAppliancesResponseFormProperties {
	}
	export function CreateForgetSmartHomeAppliancesResponseFormGroup() {
		return new FormGroup<ForgetSmartHomeAppliancesResponseFormProperties>({
		});

	}

	export interface ForgetSmartHomeAppliancesRequest {

		/** Required */
		RoomArn: string;
	}
	export interface ForgetSmartHomeAppliancesRequestFormProperties {

		/** Required */
		RoomArn: FormControl<string | null | undefined>,
	}
	export function CreateForgetSmartHomeAppliancesRequestFormGroup() {
		return new FormGroup<ForgetSmartHomeAppliancesRequestFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAddressBookResponse {
		AddressBook?: AddressBook;
	}
	export interface GetAddressBookResponseFormProperties {
	}
	export function CreateGetAddressBookResponseFormGroup() {
		return new FormGroup<GetAddressBookResponseFormProperties>({
		});

	}


	/** An address book with attributes. */
	export interface AddressBook {
		AddressBookArn?: string;
		Name?: string;
		Description?: string;
	}

	/** An address book with attributes. */
	export interface AddressBookFormProperties {
		AddressBookArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateAddressBookFormGroup() {
		return new FormGroup<AddressBookFormProperties>({
			AddressBookArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAddressBookRequest {

		/** Required */
		AddressBookArn: string;
	}
	export interface GetAddressBookRequestFormProperties {

		/** Required */
		AddressBookArn: FormControl<string | null | undefined>,
	}
	export function CreateGetAddressBookRequestFormGroup() {
		return new FormGroup<GetAddressBookRequestFormProperties>({
			AddressBookArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetConferencePreferenceResponse {
		Preference?: ConferencePreference;
	}
	export interface GetConferencePreferenceResponseFormProperties {
	}
	export function CreateGetConferencePreferenceResponseFormGroup() {
		return new FormGroup<GetConferencePreferenceResponseFormProperties>({
		});

	}


	/** The default conference provider that is used if no other scheduled meetings are detected. */
	export interface ConferencePreference {
		DefaultConferenceProviderArn?: string;
	}

	/** The default conference provider that is used if no other scheduled meetings are detected. */
	export interface ConferencePreferenceFormProperties {
		DefaultConferenceProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateConferencePreferenceFormGroup() {
		return new FormGroup<ConferencePreferenceFormProperties>({
			DefaultConferenceProviderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetConferencePreferenceRequest {
	}
	export interface GetConferencePreferenceRequestFormProperties {
	}
	export function CreateGetConferencePreferenceRequestFormGroup() {
		return new FormGroup<GetConferencePreferenceRequestFormProperties>({
		});

	}

	export interface GetConferenceProviderResponse {
		ConferenceProvider?: ConferenceProvider;
	}
	export interface GetConferenceProviderResponseFormProperties {
	}
	export function CreateGetConferenceProviderResponseFormGroup() {
		return new FormGroup<GetConferenceProviderResponseFormProperties>({
		});

	}


	/** An entity that provides a conferencing solution. Alexa for Business acts as the voice interface and mediator that connects users to their preferred conference provider. Examples of conference providers include Amazon Chime, Zoom, Cisco, and Polycom.  */
	export interface ConferenceProvider {
		Arn?: string;
		Name?: string;
		Type?: ConferenceProviderType;
		IPDialIn?: IPDialIn;
		PSTNDialIn?: PSTNDialIn;
		MeetingSetting?: MeetingSetting;
	}

	/** An entity that provides a conferencing solution. Alexa for Business acts as the voice interface and mediator that connects users to their preferred conference provider. Examples of conference providers include Amazon Chime, Zoom, Cisco, and Polycom.  */
	export interface ConferenceProviderFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ConferenceProviderType | null | undefined>,
	}
	export function CreateConferenceProviderFormGroup() {
		return new FormGroup<ConferenceProviderFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ConferenceProviderType | null | undefined>(undefined),
		});

	}

	export interface GetConferenceProviderRequest {

		/** Required */
		ConferenceProviderArn: string;
	}
	export interface GetConferenceProviderRequestFormProperties {

		/** Required */
		ConferenceProviderArn: FormControl<string | null | undefined>,
	}
	export function CreateGetConferenceProviderRequestFormGroup() {
		return new FormGroup<GetConferenceProviderRequestFormProperties>({
			ConferenceProviderArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContactResponse {
		Contact?: Contact;
	}
	export interface GetContactResponseFormProperties {
	}
	export function CreateGetContactResponseFormGroup() {
		return new FormGroup<GetContactResponseFormProperties>({
		});

	}


	/** A contact with attributes. */
	export interface Contact {
		ContactArn?: string;
		DisplayName?: string;
		FirstName?: string;
		LastName?: string;
		PhoneNumber?: string;
		PhoneNumbers?: Array<PhoneNumber>;
		SipAddresses?: Array<SipAddress>;
	}

	/** A contact with attributes. */
	export interface ContactFormProperties {
		ContactArn: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetContactRequest {

		/** Required */
		ContactArn: string;
	}
	export interface GetContactRequestFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,
	}
	export function CreateGetContactRequestFormGroup() {
		return new FormGroup<GetContactRequestFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDeviceResponse {
		Device?: Device;
	}
	export interface GetDeviceResponseFormProperties {
	}
	export function CreateGetDeviceResponseFormGroup() {
		return new FormGroup<GetDeviceResponseFormProperties>({
		});

	}


	/** A device with attributes. */
	export interface Device {
		DeviceArn?: string;
		DeviceSerialNumber?: string;
		DeviceType?: string;
		DeviceName?: string;
		SoftwareVersion?: string;
		MacAddress?: string;
		RoomArn?: string;
		DeviceStatus?: DeviceStatus;
		DeviceStatusInfo?: DeviceStatusInfo;
		NetworkProfileInfo?: DeviceNetworkProfileInfo;
	}

	/** A device with attributes. */
	export interface DeviceFormProperties {
		DeviceArn: FormControl<string | null | undefined>,
		DeviceSerialNumber: FormControl<string | null | undefined>,
		DeviceType: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
		SoftwareVersion: FormControl<string | null | undefined>,
		MacAddress: FormControl<string | null | undefined>,
		RoomArn: FormControl<string | null | undefined>,
		DeviceStatus: FormControl<DeviceStatus | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			DeviceArn: new FormControl<string | null | undefined>(undefined),
			DeviceSerialNumber: new FormControl<string | null | undefined>(undefined),
			DeviceType: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined),
			SoftwareVersion: new FormControl<string | null | undefined>(undefined),
			MacAddress: new FormControl<string | null | undefined>(undefined),
			RoomArn: new FormControl<string | null | undefined>(undefined),
			DeviceStatus: new FormControl<DeviceStatus | null | undefined>(undefined),
		});

	}

	export enum DeviceStatus { READY = 0, PENDING = 1, WAS_OFFLINE = 2, DEREGISTERED = 3, FAILED = 4 }


	/** Detailed information about a device's status. */
	export interface DeviceStatusInfo {
		DeviceStatusDetails?: Array<DeviceStatusDetail>;
		ConnectionStatus?: ConnectionStatus;
		ConnectionStatusUpdatedTime?: Date;
	}

	/** Detailed information about a device's status. */
	export interface DeviceStatusInfoFormProperties {
		ConnectionStatus: FormControl<ConnectionStatus | null | undefined>,
		ConnectionStatusUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeviceStatusInfoFormGroup() {
		return new FormGroup<DeviceStatusInfoFormProperties>({
			ConnectionStatus: new FormControl<ConnectionStatus | null | undefined>(undefined),
			ConnectionStatusUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Details of a device’s status. */
	export interface DeviceStatusDetail {
		Feature?: Feature;
		Code?: DeviceStatusDetailCode;
	}

	/** Details of a device’s status. */
	export interface DeviceStatusDetailFormProperties {
		Feature: FormControl<Feature | null | undefined>,
		Code: FormControl<DeviceStatusDetailCode | null | undefined>,
	}
	export function CreateDeviceStatusDetailFormGroup() {
		return new FormGroup<DeviceStatusDetailFormProperties>({
			Feature: new FormControl<Feature | null | undefined>(undefined),
			Code: new FormControl<DeviceStatusDetailCode | null | undefined>(undefined),
		});

	}

	export enum Feature { BLUETOOTH = 0, VOLUME = 1, NOTIFICATIONS = 2, LISTS = 3, SKILLS = 4, NETWORK_PROFILE = 5, SETTINGS = 6, ALL = 7 }

	export enum DeviceStatusDetailCode { DEVICE_SOFTWARE_UPDATE_NEEDED = 0, DEVICE_WAS_OFFLINE = 1, CREDENTIALS_ACCESS_FAILURE = 2, TLS_VERSION_MISMATCH = 3, ASSOCIATION_REJECTION = 4, AUTHENTICATION_FAILURE = 5, DHCP_FAILURE = 6, INTERNET_UNAVAILABLE = 7, DNS_FAILURE = 8, UNKNOWN_FAILURE = 9, CERTIFICATE_ISSUING_LIMIT_EXCEEDED = 10, INVALID_CERTIFICATE_AUTHORITY = 11, NETWORK_PROFILE_NOT_FOUND = 12, INVALID_PASSWORD_STATE = 13, PASSWORD_NOT_FOUND = 14, PASSWORD_MANAGER_ACCESS_DENIED = 15, CERTIFICATE_AUTHORITY_ACCESS_DENIED = 16 }

	export enum ConnectionStatus { ONLINE = 0, OFFLINE = 1 }


	/** Detailed information about a device's network profile. */
	export interface DeviceNetworkProfileInfo {
		NetworkProfileArn?: string;
		CertificateArn?: string;
		CertificateExpirationTime?: Date;
	}

	/** Detailed information about a device's network profile. */
	export interface DeviceNetworkProfileInfoFormProperties {
		NetworkProfileArn: FormControl<string | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		CertificateExpirationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeviceNetworkProfileInfoFormGroup() {
		return new FormGroup<DeviceNetworkProfileInfoFormProperties>({
			NetworkProfileArn: new FormControl<string | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			CertificateExpirationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetDeviceRequest {
		DeviceArn?: string;
	}
	export interface GetDeviceRequestFormProperties {
		DeviceArn: FormControl<string | null | undefined>,
	}
	export function CreateGetDeviceRequestFormGroup() {
		return new FormGroup<GetDeviceRequestFormProperties>({
			DeviceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGatewayResponse {
		Gateway?: Gateway;
	}
	export interface GetGatewayResponseFormProperties {
	}
	export function CreateGetGatewayResponseFormGroup() {
		return new FormGroup<GetGatewayResponseFormProperties>({
		});

	}


	/** The details of the gateway.  */
	export interface Gateway {
		Arn?: string;
		Name?: string;
		Description?: string;
		GatewayGroupArn?: string;
		SoftwareVersion?: string;
	}

	/** The details of the gateway.  */
	export interface GatewayFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		GatewayGroupArn: FormControl<string | null | undefined>,
		SoftwareVersion: FormControl<string | null | undefined>,
	}
	export function CreateGatewayFormGroup() {
		return new FormGroup<GatewayFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			GatewayGroupArn: new FormControl<string | null | undefined>(undefined),
			SoftwareVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGatewayRequest {

		/** Required */
		GatewayArn: string;
	}
	export interface GetGatewayRequestFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateGetGatewayRequestFormGroup() {
		return new FormGroup<GetGatewayRequestFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGatewayGroupResponse {

		/** The details of the gateway group. */
		GatewayGroup?: GatewayGroup;
	}
	export interface GetGatewayGroupResponseFormProperties {
	}
	export function CreateGetGatewayGroupResponseFormGroup() {
		return new FormGroup<GetGatewayGroupResponseFormProperties>({
		});

	}


	/** The details of the gateway group. */
	export interface GatewayGroup {
		Arn?: string;
		Name?: string;
		Description?: string;
	}

	/** The details of the gateway group. */
	export interface GatewayGroupFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGatewayGroupFormGroup() {
		return new FormGroup<GatewayGroupFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGatewayGroupRequest {

		/** Required */
		GatewayGroupArn: string;
	}
	export interface GetGatewayGroupRequestFormProperties {

		/** Required */
		GatewayGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateGetGatewayGroupRequestFormGroup() {
		return new FormGroup<GetGatewayGroupRequestFormProperties>({
			GatewayGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInvitationConfigurationResponse {
		OrganizationName?: string;
		ContactEmail?: string;
		PrivateSkillIds?: Array<string>;
	}
	export interface GetInvitationConfigurationResponseFormProperties {
		OrganizationName: FormControl<string | null | undefined>,
		ContactEmail: FormControl<string | null | undefined>,
	}
	export function CreateGetInvitationConfigurationResponseFormGroup() {
		return new FormGroup<GetInvitationConfigurationResponseFormProperties>({
			OrganizationName: new FormControl<string | null | undefined>(undefined),
			ContactEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInvitationConfigurationRequest {
	}
	export interface GetInvitationConfigurationRequestFormProperties {
	}
	export function CreateGetInvitationConfigurationRequestFormGroup() {
		return new FormGroup<GetInvitationConfigurationRequestFormProperties>({
		});

	}

	export interface GetNetworkProfileResponse {
		NetworkProfile?: NetworkProfile;
	}
	export interface GetNetworkProfileResponseFormProperties {
	}
	export function CreateGetNetworkProfileResponseFormGroup() {
		return new FormGroup<GetNetworkProfileResponseFormProperties>({
		});

	}


	/** The network profile associated with a device. */
	export interface NetworkProfile {
		NetworkProfileArn?: string;
		NetworkProfileName?: string;
		Description?: string;
		Ssid?: string;
		SecurityType?: NetworkSecurityType;
		EapMethod?: NetworkEapMethod;
		CurrentPassword?: string;
		NextPassword?: string;
		CertificateAuthorityArn?: string;
		TrustAnchors?: Array<string>;
	}

	/** The network profile associated with a device. */
	export interface NetworkProfileFormProperties {
		NetworkProfileArn: FormControl<string | null | undefined>,
		NetworkProfileName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Ssid: FormControl<string | null | undefined>,
		SecurityType: FormControl<NetworkSecurityType | null | undefined>,
		EapMethod: FormControl<NetworkEapMethod | null | undefined>,
		CurrentPassword: FormControl<string | null | undefined>,
		NextPassword: FormControl<string | null | undefined>,
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateNetworkProfileFormGroup() {
		return new FormGroup<NetworkProfileFormProperties>({
			NetworkProfileArn: new FormControl<string | null | undefined>(undefined),
			NetworkProfileName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Ssid: new FormControl<string | null | undefined>(undefined),
			SecurityType: new FormControl<NetworkSecurityType | null | undefined>(undefined),
			EapMethod: new FormControl<NetworkEapMethod | null | undefined>(undefined),
			CurrentPassword: new FormControl<string | null | undefined>(undefined),
			NextPassword: new FormControl<string | null | undefined>(undefined),
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetNetworkProfileRequest {

		/** Required */
		NetworkProfileArn: string;
	}
	export interface GetNetworkProfileRequestFormProperties {

		/** Required */
		NetworkProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateGetNetworkProfileRequestFormGroup() {
		return new FormGroup<GetNetworkProfileRequestFormProperties>({
			NetworkProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidSecretsManagerResourceException {
	}
	export interface InvalidSecretsManagerResourceExceptionFormProperties {
	}
	export function CreateInvalidSecretsManagerResourceExceptionFormGroup() {
		return new FormGroup<InvalidSecretsManagerResourceExceptionFormProperties>({
		});

	}

	export interface GetProfileResponse {
		Profile?: Profile;
	}
	export interface GetProfileResponseFormProperties {
	}
	export function CreateGetProfileResponseFormGroup() {
		return new FormGroup<GetProfileResponseFormProperties>({
		});

	}


	/** A room profile with attributes. */
	export interface Profile {
		ProfileArn?: string;
		ProfileName?: string;
		IsDefault?: boolean | null;
		Address?: string;
		Timezone?: string;
		DistanceUnit?: DistanceUnit;
		TemperatureUnit?: TemperatureUnit;
		WakeWord?: WakeWord;
		Locale?: string;
		SetupModeDisabled?: boolean | null;
		MaxVolumeLimit?: number | null;
		PSTNEnabled?: boolean | null;
		DataRetentionOptIn?: boolean | null;
		AddressBookArn?: string;
		MeetingRoomConfiguration?: MeetingRoomConfiguration;
	}

	/** A room profile with attributes. */
	export interface ProfileFormProperties {
		ProfileArn: FormControl<string | null | undefined>,
		ProfileName: FormControl<string | null | undefined>,
		IsDefault: FormControl<boolean | null | undefined>,
		Address: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
		DistanceUnit: FormControl<DistanceUnit | null | undefined>,
		TemperatureUnit: FormControl<TemperatureUnit | null | undefined>,
		WakeWord: FormControl<WakeWord | null | undefined>,
		Locale: FormControl<string | null | undefined>,
		SetupModeDisabled: FormControl<boolean | null | undefined>,
		MaxVolumeLimit: FormControl<number | null | undefined>,
		PSTNEnabled: FormControl<boolean | null | undefined>,
		DataRetentionOptIn: FormControl<boolean | null | undefined>,
		AddressBookArn: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			ProfileArn: new FormControl<string | null | undefined>(undefined),
			ProfileName: new FormControl<string | null | undefined>(undefined),
			IsDefault: new FormControl<boolean | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			DistanceUnit: new FormControl<DistanceUnit | null | undefined>(undefined),
			TemperatureUnit: new FormControl<TemperatureUnit | null | undefined>(undefined),
			WakeWord: new FormControl<WakeWord | null | undefined>(undefined),
			Locale: new FormControl<string | null | undefined>(undefined),
			SetupModeDisabled: new FormControl<boolean | null | undefined>(undefined),
			MaxVolumeLimit: new FormControl<number | null | undefined>(undefined),
			PSTNEnabled: new FormControl<boolean | null | undefined>(undefined),
			DataRetentionOptIn: new FormControl<boolean | null | undefined>(undefined),
			AddressBookArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Meeting room settings of a room profile. */
	export interface MeetingRoomConfiguration {
		RoomUtilizationMetricsEnabled?: boolean | null;
		EndOfMeetingReminder?: EndOfMeetingReminder;
		InstantBooking?: InstantBooking;
		RequireCheckIn?: RequireCheckIn;
		ProactiveJoin?: ProactiveJoin;
	}

	/** Meeting room settings of a room profile. */
	export interface MeetingRoomConfigurationFormProperties {
		RoomUtilizationMetricsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateMeetingRoomConfigurationFormGroup() {
		return new FormGroup<MeetingRoomConfigurationFormProperties>({
			RoomUtilizationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.  */
	export interface EndOfMeetingReminder {
		ReminderAtMinutes?: Array<number> | null;
		ReminderType?: EndOfMeetingReminderType;
		Enabled?: boolean | null;
	}

	/** Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.  */
	export interface EndOfMeetingReminderFormProperties {
		ReminderType: FormControl<EndOfMeetingReminderType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEndOfMeetingReminderFormGroup() {
		return new FormGroup<EndOfMeetingReminderFormProperties>({
			ReminderType: new FormControl<EndOfMeetingReminderType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available. */
	export interface InstantBooking {
		DurationInMinutes?: number | null;
		Enabled?: boolean | null;
	}

	/** Settings for the instant booking feature that are applied to a room profile. When users start their meeting with Alexa, Alexa automatically books the room for the configured duration if the room is available. */
	export interface InstantBookingFormProperties {
		DurationInMinutes: FormControl<number | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateInstantBookingFormGroup() {
		return new FormGroup<InstantBookingFormProperties>({
			DurationInMinutes: new FormControl<number | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.  */
	export interface RequireCheckIn {
		ReleaseAfterMinutes?: number | null;
		Enabled?: boolean | null;
	}

	/** Settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.  */
	export interface RequireCheckInFormProperties {
		ReleaseAfterMinutes: FormControl<number | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateRequireCheckInFormGroup() {
		return new FormGroup<RequireCheckInFormProperties>({
			ReleaseAfterMinutes: new FormControl<number | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProactiveJoin {
		EnabledByMotion?: boolean | null;
	}
	export interface ProactiveJoinFormProperties {
		EnabledByMotion: FormControl<boolean | null | undefined>,
	}
	export function CreateProactiveJoinFormGroup() {
		return new FormGroup<ProactiveJoinFormProperties>({
			EnabledByMotion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetProfileRequest {
		ProfileArn?: string;
	}
	export interface GetProfileRequestFormProperties {
		ProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateGetProfileRequestFormGroup() {
		return new FormGroup<GetProfileRequestFormProperties>({
			ProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRoomResponse {
		Room?: Room;
	}
	export interface GetRoomResponseFormProperties {
	}
	export function CreateGetRoomResponseFormGroup() {
		return new FormGroup<GetRoomResponseFormProperties>({
		});

	}


	/** A room with attributes. */
	export interface Room {
		RoomArn?: string;
		RoomName?: string;
		Description?: string;
		ProviderCalendarId?: string;
		ProfileArn?: string;
	}

	/** A room with attributes. */
	export interface RoomFormProperties {
		RoomArn: FormControl<string | null | undefined>,
		RoomName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ProviderCalendarId: FormControl<string | null | undefined>,
		ProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateRoomFormGroup() {
		return new FormGroup<RoomFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined),
			RoomName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ProviderCalendarId: new FormControl<string | null | undefined>(undefined),
			ProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRoomRequest {
		RoomArn?: string;
	}
	export interface GetRoomRequestFormProperties {
		RoomArn: FormControl<string | null | undefined>,
	}
	export function CreateGetRoomRequestFormGroup() {
		return new FormGroup<GetRoomRequestFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRoomSkillParameterResponse {
		RoomSkillParameter?: RoomSkillParameter;
	}
	export interface GetRoomSkillParameterResponseFormProperties {
	}
	export function CreateGetRoomSkillParameterResponseFormGroup() {
		return new FormGroup<GetRoomSkillParameterResponseFormProperties>({
		});

	}


	/** A skill parameter associated with a room. */
	export interface RoomSkillParameter {

		/** Required */
		ParameterKey: string;

		/** Required */
		ParameterValue: string;
	}

	/** A skill parameter associated with a room. */
	export interface RoomSkillParameterFormProperties {

		/** Required */
		ParameterKey: FormControl<string | null | undefined>,

		/** Required */
		ParameterValue: FormControl<string | null | undefined>,
	}
	export function CreateRoomSkillParameterFormGroup() {
		return new FormGroup<RoomSkillParameterFormProperties>({
			ParameterKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParameterValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRoomSkillParameterRequest {
		RoomArn?: string;

		/** Required */
		SkillId: string;

		/** Required */
		ParameterKey: string;
	}
	export interface GetRoomSkillParameterRequestFormProperties {
		RoomArn: FormControl<string | null | undefined>,

		/** Required */
		SkillId: FormControl<string | null | undefined>,

		/** Required */
		ParameterKey: FormControl<string | null | undefined>,
	}
	export function CreateGetRoomSkillParameterRequestFormGroup() {
		return new FormGroup<GetRoomSkillParameterRequestFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined),
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParameterKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSkillGroupResponse {
		SkillGroup?: SkillGroup;
	}
	export interface GetSkillGroupResponseFormProperties {
	}
	export function CreateGetSkillGroupResponseFormGroup() {
		return new FormGroup<GetSkillGroupResponseFormProperties>({
		});

	}


	/** A skill group with attributes. */
	export interface SkillGroup {
		SkillGroupArn?: string;
		SkillGroupName?: string;
		Description?: string;
	}

	/** A skill group with attributes. */
	export interface SkillGroupFormProperties {
		SkillGroupArn: FormControl<string | null | undefined>,
		SkillGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateSkillGroupFormGroup() {
		return new FormGroup<SkillGroupFormProperties>({
			SkillGroupArn: new FormControl<string | null | undefined>(undefined),
			SkillGroupName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSkillGroupRequest {
		SkillGroupArn?: string;
	}
	export interface GetSkillGroupRequestFormProperties {
		SkillGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateGetSkillGroupRequestFormGroup() {
		return new FormGroup<GetSkillGroupRequestFormProperties>({
			SkillGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBusinessReportSchedulesResponse {
		BusinessReportSchedules?: Array<BusinessReportSchedule>;
		NextToken?: string;
	}
	export interface ListBusinessReportSchedulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBusinessReportSchedulesResponseFormGroup() {
		return new FormGroup<ListBusinessReportSchedulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The schedule of the usage report. */
	export interface BusinessReportSchedule {
		ScheduleArn?: string;
		ScheduleName?: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		Format?: BusinessReportFormat;
		ContentRange?: BusinessReportContentRange;
		Recurrence?: BusinessReportRecurrence;
		LastBusinessReport?: BusinessReport;
	}

	/** The schedule of the usage report. */
	export interface BusinessReportScheduleFormProperties {
		ScheduleArn: FormControl<string | null | undefined>,
		ScheduleName: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		Format: FormControl<BusinessReportFormat | null | undefined>,
	}
	export function CreateBusinessReportScheduleFormGroup() {
		return new FormGroup<BusinessReportScheduleFormProperties>({
			ScheduleArn: new FormControl<string | null | undefined>(undefined),
			ScheduleName: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<BusinessReportFormat | null | undefined>(undefined),
		});

	}


	/** Usage report with specified parameters. */
	export interface BusinessReport {
		Status?: BusinessReportStatus;
		FailureCode?: BusinessReportFailureCode;
		S3Location?: BusinessReportS3Location;
		DeliveryTime?: Date;
		DownloadUrl?: string;
	}

	/** Usage report with specified parameters. */
	export interface BusinessReportFormProperties {
		Status: FormControl<BusinessReportStatus | null | undefined>,
		FailureCode: FormControl<BusinessReportFailureCode | null | undefined>,
		DeliveryTime: FormControl<Date | null | undefined>,
		DownloadUrl: FormControl<string | null | undefined>,
	}
	export function CreateBusinessReportFormGroup() {
		return new FormGroup<BusinessReportFormProperties>({
			Status: new FormControl<BusinessReportStatus | null | undefined>(undefined),
			FailureCode: new FormControl<BusinessReportFailureCode | null | undefined>(undefined),
			DeliveryTime: new FormControl<Date | null | undefined>(undefined),
			DownloadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BusinessReportStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum BusinessReportFailureCode { ACCESS_DENIED = 0, NO_SUCH_BUCKET = 1, INTERNAL_FAILURE = 2 }


	/** The S3 location of the output reports. */
	export interface BusinessReportS3Location {
		Path?: string;
		BucketName?: string;
	}

	/** The S3 location of the output reports. */
	export interface BusinessReportS3LocationFormProperties {
		Path: FormControl<string | null | undefined>,
		BucketName: FormControl<string | null | undefined>,
	}
	export function CreateBusinessReportS3LocationFormGroup() {
		return new FormGroup<BusinessReportS3LocationFormProperties>({
			Path: new FormControl<string | null | undefined>(undefined),
			BucketName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBusinessReportSchedulesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListBusinessReportSchedulesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListBusinessReportSchedulesRequestFormGroup() {
		return new FormGroup<ListBusinessReportSchedulesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListConferenceProvidersResponse {
		ConferenceProviders?: Array<ConferenceProvider>;
		NextToken?: string;
	}
	export interface ListConferenceProvidersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConferenceProvidersResponseFormGroup() {
		return new FormGroup<ListConferenceProvidersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConferenceProvidersRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListConferenceProvidersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListConferenceProvidersRequestFormGroup() {
		return new FormGroup<ListConferenceProvidersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDeviceEventsResponse {
		DeviceEvents?: Array<DeviceEvent>;
		NextToken?: string;
	}
	export interface ListDeviceEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceEventsResponseFormGroup() {
		return new FormGroup<ListDeviceEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of device events. */
	export interface DeviceEvent {
		Type?: DeviceEventType;
		Value?: string;
		Timestamp?: Date;
	}

	/** The list of device events. */
	export interface DeviceEventFormProperties {
		Type: FormControl<DeviceEventType | null | undefined>,
		Value: FormControl<string | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateDeviceEventFormGroup() {
		return new FormGroup<DeviceEventFormProperties>({
			Type: new FormControl<DeviceEventType | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DeviceEventType { CONNECTION_STATUS = 0, DEVICE_STATUS = 1 }

	export interface ListDeviceEventsRequest {

		/** Required */
		DeviceArn: string;
		EventType?: DeviceEventType;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDeviceEventsRequestFormProperties {

		/** Required */
		DeviceArn: FormControl<string | null | undefined>,
		EventType: FormControl<DeviceEventType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDeviceEventsRequestFormGroup() {
		return new FormGroup<ListDeviceEventsRequestFormProperties>({
			DeviceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventType: new FormControl<DeviceEventType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGatewayGroupsResponse {
		GatewayGroups?: Array<GatewayGroupSummary>;
		NextToken?: string;
	}
	export interface ListGatewayGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewayGroupsResponseFormGroup() {
		return new FormGroup<ListGatewayGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of a gateway group. */
	export interface GatewayGroupSummary {
		Arn?: string;
		Name?: string;
		Description?: string;
	}

	/** The summary of a gateway group. */
	export interface GatewayGroupSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGatewayGroupSummaryFormGroup() {
		return new FormGroup<GatewayGroupSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGatewayGroupsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListGatewayGroupsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGatewayGroupsRequestFormGroup() {
		return new FormGroup<ListGatewayGroupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGatewaysResponse {
		Gateways?: Array<GatewaySummary>;
		NextToken?: string;
	}
	export interface ListGatewaysResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewaysResponseFormGroup() {
		return new FormGroup<ListGatewaysResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of a gateway. */
	export interface GatewaySummary {
		Arn?: string;
		Name?: string;
		Description?: string;
		GatewayGroupArn?: string;
		SoftwareVersion?: string;
	}

	/** The summary of a gateway. */
	export interface GatewaySummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		GatewayGroupArn: FormControl<string | null | undefined>,
		SoftwareVersion: FormControl<string | null | undefined>,
	}
	export function CreateGatewaySummaryFormGroup() {
		return new FormGroup<GatewaySummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			GatewayGroupArn: new FormControl<string | null | undefined>(undefined),
			SoftwareVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGatewaysRequest {
		GatewayGroupArn?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListGatewaysRequestFormProperties {
		GatewayGroupArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListGatewaysRequestFormGroup() {
		return new FormGroup<ListGatewaysRequestFormProperties>({
			GatewayGroupArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSkillsResponse {
		SkillSummaries?: Array<SkillSummary>;
		NextToken?: string;
	}
	export interface ListSkillsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSkillsResponseFormGroup() {
		return new FormGroup<ListSkillsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of skills. */
	export interface SkillSummary {
		SkillId?: string;
		SkillName?: string;
		SupportsLinking?: boolean | null;
		EnablementType?: EnablementType;
		SkillType?: SkillType;
	}

	/** The summary of skills. */
	export interface SkillSummaryFormProperties {
		SkillId: FormControl<string | null | undefined>,
		SkillName: FormControl<string | null | undefined>,
		SupportsLinking: FormControl<boolean | null | undefined>,
		EnablementType: FormControl<EnablementType | null | undefined>,
		SkillType: FormControl<SkillType | null | undefined>,
	}
	export function CreateSkillSummaryFormGroup() {
		return new FormGroup<SkillSummaryFormProperties>({
			SkillId: new FormControl<string | null | undefined>(undefined),
			SkillName: new FormControl<string | null | undefined>(undefined),
			SupportsLinking: new FormControl<boolean | null | undefined>(undefined),
			EnablementType: new FormControl<EnablementType | null | undefined>(undefined),
			SkillType: new FormControl<SkillType | null | undefined>(undefined),
		});

	}

	export enum EnablementType { ENABLED = 0, PENDING = 1 }

	export enum SkillType { PUBLIC = 0, PRIVATE = 1 }

	export interface ListSkillsRequest {
		SkillGroupArn?: string;
		EnablementType?: EnablementType;
		SkillType?: SkillTypeFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListSkillsRequestFormProperties {
		SkillGroupArn: FormControl<string | null | undefined>,
		EnablementType: FormControl<EnablementType | null | undefined>,
		SkillType: FormControl<SkillTypeFilter | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSkillsRequestFormGroup() {
		return new FormGroup<ListSkillsRequestFormProperties>({
			SkillGroupArn: new FormControl<string | null | undefined>(undefined),
			EnablementType: new FormControl<EnablementType | null | undefined>(undefined),
			SkillType: new FormControl<SkillTypeFilter | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SkillTypeFilter { PUBLIC = 0, PRIVATE = 1, ALL = 2 }

	export interface ListSkillsStoreCategoriesResponse {
		CategoryList?: Array<Category>;
		NextToken?: string;
	}
	export interface ListSkillsStoreCategoriesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSkillsStoreCategoriesResponseFormGroup() {
		return new FormGroup<ListSkillsStoreCategoriesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The skill store category that is shown. Alexa skills are assigned a specific skill category during creation, such as News, Social, and Sports. */
	export interface Category {
		CategoryId?: number | null;
		CategoryName?: string;
	}

	/** The skill store category that is shown. Alexa skills are assigned a specific skill category during creation, such as News, Social, and Sports. */
	export interface CategoryFormProperties {
		CategoryId: FormControl<number | null | undefined>,
		CategoryName: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			CategoryId: new FormControl<number | null | undefined>(undefined),
			CategoryName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSkillsStoreCategoriesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListSkillsStoreCategoriesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSkillsStoreCategoriesRequestFormGroup() {
		return new FormGroup<ListSkillsStoreCategoriesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSkillsStoreSkillsByCategoryResponse {
		SkillsStoreSkills?: Array<SkillsStoreSkill>;
		NextToken?: string;
	}
	export interface ListSkillsStoreSkillsByCategoryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSkillsStoreSkillsByCategoryResponseFormGroup() {
		return new FormGroup<ListSkillsStoreSkillsByCategoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detailed information about an Alexa skill. */
	export interface SkillsStoreSkill {
		SkillId?: string;
		SkillName?: string;
		ShortDescription?: string;
		IconUrl?: string;
		SampleUtterances?: Array<string>;
		SkillDetails?: SkillDetails;
		SupportsLinking?: boolean | null;
	}

	/** The detailed information about an Alexa skill. */
	export interface SkillsStoreSkillFormProperties {
		SkillId: FormControl<string | null | undefined>,
		SkillName: FormControl<string | null | undefined>,
		ShortDescription: FormControl<string | null | undefined>,
		IconUrl: FormControl<string | null | undefined>,
		SupportsLinking: FormControl<boolean | null | undefined>,
	}
	export function CreateSkillsStoreSkillFormGroup() {
		return new FormGroup<SkillsStoreSkillFormProperties>({
			SkillId: new FormControl<string | null | undefined>(undefined),
			SkillName: new FormControl<string | null | undefined>(undefined),
			ShortDescription: new FormControl<string | null | undefined>(undefined),
			IconUrl: new FormControl<string | null | undefined>(undefined),
			SupportsLinking: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Granular information about the skill. */
	export interface SkillDetails {
		ProductDescription?: string;
		InvocationPhrase?: string;
		ReleaseDate?: string;
		EndUserLicenseAgreement?: string;
		GenericKeywords?: Array<string>;
		BulletPoints?: Array<string>;
		NewInThisVersionBulletPoints?: Array<string>;
		SkillTypes?: Array<string>;
		Reviews?: Reviews;
		DeveloperInfo?: DeveloperInfo;
	}

	/** Granular information about the skill. */
	export interface SkillDetailsFormProperties {
		ProductDescription: FormControl<string | null | undefined>,
		InvocationPhrase: FormControl<string | null | undefined>,
		ReleaseDate: FormControl<string | null | undefined>,
		EndUserLicenseAgreement: FormControl<string | null | undefined>,
	}
	export function CreateSkillDetailsFormGroup() {
		return new FormGroup<SkillDetailsFormProperties>({
			ProductDescription: new FormControl<string | null | undefined>(undefined),
			InvocationPhrase: new FormControl<string | null | undefined>(undefined),
			ReleaseDate: new FormControl<string | null | undefined>(undefined),
			EndUserLicenseAgreement: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Reviews {
	}
	export interface ReviewsFormProperties {
	}
	export function CreateReviewsFormGroup() {
		return new FormGroup<ReviewsFormProperties>({
		});

	}


	/** The details about the developer that published the skill. */
	export interface DeveloperInfo {
		DeveloperName?: string;
		PrivacyPolicy?: string;
		Email?: string;
		Url?: string;
	}

	/** The details about the developer that published the skill. */
	export interface DeveloperInfoFormProperties {
		DeveloperName: FormControl<string | null | undefined>,
		PrivacyPolicy: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateDeveloperInfoFormGroup() {
		return new FormGroup<DeveloperInfoFormProperties>({
			DeveloperName: new FormControl<string | null | undefined>(undefined),
			PrivacyPolicy: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSkillsStoreSkillsByCategoryRequest {

		/** Required */
		CategoryId: number;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListSkillsStoreSkillsByCategoryRequestFormProperties {

		/** Required */
		CategoryId: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSkillsStoreSkillsByCategoryRequestFormGroup() {
		return new FormGroup<ListSkillsStoreSkillsByCategoryRequestFormProperties>({
			CategoryId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSmartHomeAppliancesResponse {
		SmartHomeAppliances?: Array<SmartHomeAppliance>;
		NextToken?: string;
	}
	export interface ListSmartHomeAppliancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSmartHomeAppliancesResponseFormGroup() {
		return new FormGroup<ListSmartHomeAppliancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A smart home appliance that can connect to a central system. Any domestic device can be a smart appliance.  */
	export interface SmartHomeAppliance {
		FriendlyName?: string;
		Description?: string;
		ManufacturerName?: string;
	}

	/** A smart home appliance that can connect to a central system. Any domestic device can be a smart appliance.  */
	export interface SmartHomeApplianceFormProperties {
		FriendlyName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ManufacturerName: FormControl<string | null | undefined>,
	}
	export function CreateSmartHomeApplianceFormGroup() {
		return new FormGroup<SmartHomeApplianceFormProperties>({
			FriendlyName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ManufacturerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSmartHomeAppliancesRequest {

		/** Required */
		RoomArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListSmartHomeAppliancesRequestFormProperties {

		/** Required */
		RoomArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSmartHomeAppliancesRequestFormGroup() {
		return new FormGroup<ListSmartHomeAppliancesRequestFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}
	export interface ListTagsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsRequest {

		/** Required */
		Arn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTagsRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutConferencePreferenceResponse {
	}
	export interface PutConferencePreferenceResponseFormProperties {
	}
	export function CreatePutConferencePreferenceResponseFormGroup() {
		return new FormGroup<PutConferencePreferenceResponseFormProperties>({
		});

	}

	export interface PutConferencePreferenceRequest {

		/** Required */
		ConferencePreference: ConferencePreference;
	}
	export interface PutConferencePreferenceRequestFormProperties {
	}
	export function CreatePutConferencePreferenceRequestFormGroup() {
		return new FormGroup<PutConferencePreferenceRequestFormProperties>({
		});

	}

	export interface PutInvitationConfigurationResponse {
	}
	export interface PutInvitationConfigurationResponseFormProperties {
	}
	export function CreatePutInvitationConfigurationResponseFormGroup() {
		return new FormGroup<PutInvitationConfigurationResponseFormProperties>({
		});

	}

	export interface PutInvitationConfigurationRequest {

		/** Required */
		OrganizationName: string;
		ContactEmail?: string;
		PrivateSkillIds?: Array<string>;
	}
	export interface PutInvitationConfigurationRequestFormProperties {

		/** Required */
		OrganizationName: FormControl<string | null | undefined>,
		ContactEmail: FormControl<string | null | undefined>,
	}
	export function CreatePutInvitationConfigurationRequestFormGroup() {
		return new FormGroup<PutInvitationConfigurationRequestFormProperties>({
			OrganizationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRoomSkillParameterResponse {
	}
	export interface PutRoomSkillParameterResponseFormProperties {
	}
	export function CreatePutRoomSkillParameterResponseFormGroup() {
		return new FormGroup<PutRoomSkillParameterResponseFormProperties>({
		});

	}

	export interface PutRoomSkillParameterRequest {
		RoomArn?: string;

		/** Required */
		SkillId: string;

		/** Required */
		RoomSkillParameter: RoomSkillParameter;
	}
	export interface PutRoomSkillParameterRequestFormProperties {
		RoomArn: FormControl<string | null | undefined>,

		/** Required */
		SkillId: FormControl<string | null | undefined>,
	}
	export function CreatePutRoomSkillParameterRequestFormGroup() {
		return new FormGroup<PutRoomSkillParameterRequestFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined),
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutSkillAuthorizationResponse {
	}
	export interface PutSkillAuthorizationResponseFormProperties {
	}
	export function CreatePutSkillAuthorizationResponseFormGroup() {
		return new FormGroup<PutSkillAuthorizationResponseFormProperties>({
		});

	}

	export interface PutSkillAuthorizationRequest {

		/** Required */
		AuthorizationResult: AuthorizationResult;

		/** Required */
		SkillId: string;
		RoomArn?: string;
	}
	export interface PutSkillAuthorizationRequestFormProperties {

		/** Required */
		SkillId: FormControl<string | null | undefined>,
		RoomArn: FormControl<string | null | undefined>,
	}
	export function CreatePutSkillAuthorizationRequestFormGroup() {
		return new FormGroup<PutSkillAuthorizationRequestFormProperties>({
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoomArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthorizationResult {
	}
	export interface AuthorizationResultFormProperties {
	}
	export function CreateAuthorizationResultFormGroup() {
		return new FormGroup<AuthorizationResultFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface RegisterAVSDeviceResponse {
		DeviceArn?: string;
	}
	export interface RegisterAVSDeviceResponseFormProperties {
		DeviceArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterAVSDeviceResponseFormGroup() {
		return new FormGroup<RegisterAVSDeviceResponseFormProperties>({
			DeviceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterAVSDeviceRequest {

		/** Required */
		ClientId: string;

		/** Required */
		UserCode: string;

		/** Required */
		ProductId: string;
		DeviceSerialNumber?: string;

		/** Required */
		AmazonId: string;
		RoomArn?: string;
		Tags?: Array<Tag>;
	}
	export interface RegisterAVSDeviceRequestFormProperties {

		/** Required */
		ClientId: FormControl<string | null | undefined>,

		/** Required */
		UserCode: FormControl<string | null | undefined>,

		/** Required */
		ProductId: FormControl<string | null | undefined>,
		DeviceSerialNumber: FormControl<string | null | undefined>,

		/** Required */
		AmazonId: FormControl<string | null | undefined>,
		RoomArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterAVSDeviceRequestFormGroup() {
		return new FormGroup<RegisterAVSDeviceRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceSerialNumber: new FormControl<string | null | undefined>(undefined),
			AmazonId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoomArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidDeviceException {
	}
	export interface InvalidDeviceExceptionFormProperties {
	}
	export function CreateInvalidDeviceExceptionFormGroup() {
		return new FormGroup<InvalidDeviceExceptionFormProperties>({
		});

	}

	export interface RejectSkillResponse {
	}
	export interface RejectSkillResponseFormProperties {
	}
	export function CreateRejectSkillResponseFormGroup() {
		return new FormGroup<RejectSkillResponseFormProperties>({
		});

	}

	export interface RejectSkillRequest {

		/** Required */
		SkillId: string;
	}
	export interface RejectSkillRequestFormProperties {

		/** Required */
		SkillId: FormControl<string | null | undefined>,
	}
	export function CreateRejectSkillRequestFormGroup() {
		return new FormGroup<RejectSkillRequestFormProperties>({
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResolveRoomResponse {
		RoomArn?: string;
		RoomName?: string;
		RoomSkillParameters?: Array<RoomSkillParameter>;
	}
	export interface ResolveRoomResponseFormProperties {
		RoomArn: FormControl<string | null | undefined>,
		RoomName: FormControl<string | null | undefined>,
	}
	export function CreateResolveRoomResponseFormGroup() {
		return new FormGroup<ResolveRoomResponseFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined),
			RoomName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResolveRoomRequest {

		/** Required */
		UserId: string;

		/** Required */
		SkillId: string;
	}
	export interface ResolveRoomRequestFormProperties {

		/** Required */
		UserId: FormControl<string | null | undefined>,

		/** Required */
		SkillId: FormControl<string | null | undefined>,
	}
	export function CreateResolveRoomRequestFormGroup() {
		return new FormGroup<ResolveRoomRequestFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SkillId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RevokeInvitationResponse {
	}
	export interface RevokeInvitationResponseFormProperties {
	}
	export function CreateRevokeInvitationResponseFormGroup() {
		return new FormGroup<RevokeInvitationResponseFormProperties>({
		});

	}

	export interface RevokeInvitationRequest {
		UserArn?: string;
		EnrollmentId?: string;
	}
	export interface RevokeInvitationRequestFormProperties {
		UserArn: FormControl<string | null | undefined>,
		EnrollmentId: FormControl<string | null | undefined>,
	}
	export function CreateRevokeInvitationRequestFormGroup() {
		return new FormGroup<RevokeInvitationRequestFormProperties>({
			UserArn: new FormControl<string | null | undefined>(undefined),
			EnrollmentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchAddressBooksResponse {
		AddressBooks?: Array<AddressBookData>;
		NextToken?: string;
		TotalCount?: number | null;
	}
	export interface SearchAddressBooksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchAddressBooksResponseFormGroup() {
		return new FormGroup<SearchAddressBooksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information related to an address book. */
	export interface AddressBookData {
		AddressBookArn?: string;
		Name?: string;
		Description?: string;
	}

	/** Information related to an address book. */
	export interface AddressBookDataFormProperties {
		AddressBookArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateAddressBookDataFormGroup() {
		return new FormGroup<AddressBookDataFormProperties>({
			AddressBookArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchAddressBooksRequest {
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface SearchAddressBooksRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchAddressBooksRequestFormGroup() {
		return new FormGroup<SearchAddressBooksRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria. */
	export interface Filter {

		/** Required */
		Key: string;

		/** Required */
		Values: Array<string>;
	}

	/** A filter name and value pair that is used to return a more specific list of results. Filters can be used to match a set of resources by various criteria. */
	export interface FilterFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object representing a sort criteria.  */
	export interface Sort {

		/** Required */
		Key: string;

		/** Required */
		Value: SortValue;
	}

	/** An object representing a sort criteria.  */
	export interface SortFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<SortValue | null | undefined>,
	}
	export function CreateSortFormGroup() {
		return new FormGroup<SortFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<SortValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SortValue { ASC = 0, DESC = 1 }

	export interface SearchContactsResponse {
		Contacts?: Array<ContactData>;
		NextToken?: string;
		TotalCount?: number | null;
	}
	export interface SearchContactsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchContactsResponseFormGroup() {
		return new FormGroup<SearchContactsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information related to a contact. */
	export interface ContactData {
		ContactArn?: string;
		DisplayName?: string;
		FirstName?: string;
		LastName?: string;
		PhoneNumber?: string;
		PhoneNumbers?: Array<PhoneNumber>;
		SipAddresses?: Array<SipAddress>;
	}

	/** Information related to a contact. */
	export interface ContactDataFormProperties {
		ContactArn: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateContactDataFormGroup() {
		return new FormGroup<ContactDataFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchContactsRequest {
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface SearchContactsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchContactsRequestFormGroup() {
		return new FormGroup<SearchContactsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchDevicesResponse {
		Devices?: Array<DeviceData>;
		NextToken?: string;
		TotalCount?: number | null;
	}
	export interface SearchDevicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchDevicesResponseFormGroup() {
		return new FormGroup<SearchDevicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Device attributes. */
	export interface DeviceData {
		DeviceArn?: string;
		DeviceSerialNumber?: string;
		DeviceType?: string;
		DeviceName?: string;
		SoftwareVersion?: string;
		MacAddress?: string;
		DeviceStatus?: DeviceStatus;
		NetworkProfileArn?: string;
		NetworkProfileName?: string;
		RoomArn?: string;
		RoomName?: string;
		DeviceStatusInfo?: DeviceStatusInfo;
		CreatedTime?: Date;
	}

	/** Device attributes. */
	export interface DeviceDataFormProperties {
		DeviceArn: FormControl<string | null | undefined>,
		DeviceSerialNumber: FormControl<string | null | undefined>,
		DeviceType: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
		SoftwareVersion: FormControl<string | null | undefined>,
		MacAddress: FormControl<string | null | undefined>,
		DeviceStatus: FormControl<DeviceStatus | null | undefined>,
		NetworkProfileArn: FormControl<string | null | undefined>,
		NetworkProfileName: FormControl<string | null | undefined>,
		RoomArn: FormControl<string | null | undefined>,
		RoomName: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeviceDataFormGroup() {
		return new FormGroup<DeviceDataFormProperties>({
			DeviceArn: new FormControl<string | null | undefined>(undefined),
			DeviceSerialNumber: new FormControl<string | null | undefined>(undefined),
			DeviceType: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined),
			SoftwareVersion: new FormControl<string | null | undefined>(undefined),
			MacAddress: new FormControl<string | null | undefined>(undefined),
			DeviceStatus: new FormControl<DeviceStatus | null | undefined>(undefined),
			NetworkProfileArn: new FormControl<string | null | undefined>(undefined),
			NetworkProfileName: new FormControl<string | null | undefined>(undefined),
			RoomArn: new FormControl<string | null | undefined>(undefined),
			RoomName: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SearchDevicesRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}
	export interface SearchDevicesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchDevicesRequestFormGroup() {
		return new FormGroup<SearchDevicesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchNetworkProfilesResponse {
		NetworkProfiles?: Array<NetworkProfileData>;
		NextToken?: string;
		TotalCount?: number | null;
	}
	export interface SearchNetworkProfilesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchNetworkProfilesResponseFormGroup() {
		return new FormGroup<SearchNetworkProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data associated with a network profile. */
	export interface NetworkProfileData {
		NetworkProfileArn?: string;
		NetworkProfileName?: string;
		Description?: string;
		Ssid?: string;
		SecurityType?: NetworkSecurityType;
		EapMethod?: NetworkEapMethod;
		CertificateAuthorityArn?: string;
	}

	/** The data associated with a network profile. */
	export interface NetworkProfileDataFormProperties {
		NetworkProfileArn: FormControl<string | null | undefined>,
		NetworkProfileName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Ssid: FormControl<string | null | undefined>,
		SecurityType: FormControl<NetworkSecurityType | null | undefined>,
		EapMethod: FormControl<NetworkEapMethod | null | undefined>,
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateNetworkProfileDataFormGroup() {
		return new FormGroup<NetworkProfileDataFormProperties>({
			NetworkProfileArn: new FormControl<string | null | undefined>(undefined),
			NetworkProfileName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Ssid: new FormControl<string | null | undefined>(undefined),
			SecurityType: new FormControl<NetworkSecurityType | null | undefined>(undefined),
			EapMethod: new FormControl<NetworkEapMethod | null | undefined>(undefined),
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchNetworkProfilesRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}
	export interface SearchNetworkProfilesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchNetworkProfilesRequestFormGroup() {
		return new FormGroup<SearchNetworkProfilesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchProfilesResponse {
		Profiles?: Array<ProfileData>;
		NextToken?: string;
		TotalCount?: number | null;
	}
	export interface SearchProfilesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchProfilesResponseFormGroup() {
		return new FormGroup<SearchProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data of a room profile. */
	export interface ProfileData {
		ProfileArn?: string;
		ProfileName?: string;
		IsDefault?: boolean | null;
		Address?: string;
		Timezone?: string;
		DistanceUnit?: DistanceUnit;
		TemperatureUnit?: TemperatureUnit;
		WakeWord?: WakeWord;
		Locale?: string;
	}

	/** The data of a room profile. */
	export interface ProfileDataFormProperties {
		ProfileArn: FormControl<string | null | undefined>,
		ProfileName: FormControl<string | null | undefined>,
		IsDefault: FormControl<boolean | null | undefined>,
		Address: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
		DistanceUnit: FormControl<DistanceUnit | null | undefined>,
		TemperatureUnit: FormControl<TemperatureUnit | null | undefined>,
		WakeWord: FormControl<WakeWord | null | undefined>,
		Locale: FormControl<string | null | undefined>,
	}
	export function CreateProfileDataFormGroup() {
		return new FormGroup<ProfileDataFormProperties>({
			ProfileArn: new FormControl<string | null | undefined>(undefined),
			ProfileName: new FormControl<string | null | undefined>(undefined),
			IsDefault: new FormControl<boolean | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			DistanceUnit: new FormControl<DistanceUnit | null | undefined>(undefined),
			TemperatureUnit: new FormControl<TemperatureUnit | null | undefined>(undefined),
			WakeWord: new FormControl<WakeWord | null | undefined>(undefined),
			Locale: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchProfilesRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}
	export interface SearchProfilesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchProfilesRequestFormGroup() {
		return new FormGroup<SearchProfilesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchRoomsResponse {
		Rooms?: Array<RoomData>;
		NextToken?: string;
		TotalCount?: number | null;
	}
	export interface SearchRoomsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchRoomsResponseFormGroup() {
		return new FormGroup<SearchRoomsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data of a room. */
	export interface RoomData {
		RoomArn?: string;
		RoomName?: string;
		Description?: string;
		ProviderCalendarId?: string;
		ProfileArn?: string;
		ProfileName?: string;
	}

	/** The data of a room. */
	export interface RoomDataFormProperties {
		RoomArn: FormControl<string | null | undefined>,
		RoomName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ProviderCalendarId: FormControl<string | null | undefined>,
		ProfileArn: FormControl<string | null | undefined>,
		ProfileName: FormControl<string | null | undefined>,
	}
	export function CreateRoomDataFormGroup() {
		return new FormGroup<RoomDataFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined),
			RoomName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ProviderCalendarId: new FormControl<string | null | undefined>(undefined),
			ProfileArn: new FormControl<string | null | undefined>(undefined),
			ProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchRoomsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}
	export interface SearchRoomsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchRoomsRequestFormGroup() {
		return new FormGroup<SearchRoomsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchSkillGroupsResponse {
		SkillGroups?: Array<SkillGroupData>;
		NextToken?: string;
		TotalCount?: number | null;
	}
	export interface SearchSkillGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchSkillGroupsResponseFormGroup() {
		return new FormGroup<SearchSkillGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The attributes of a skill group. */
	export interface SkillGroupData {
		SkillGroupArn?: string;
		SkillGroupName?: string;
		Description?: string;
	}

	/** The attributes of a skill group. */
	export interface SkillGroupDataFormProperties {
		SkillGroupArn: FormControl<string | null | undefined>,
		SkillGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateSkillGroupDataFormGroup() {
		return new FormGroup<SkillGroupDataFormProperties>({
			SkillGroupArn: new FormControl<string | null | undefined>(undefined),
			SkillGroupName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchSkillGroupsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}
	export interface SearchSkillGroupsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchSkillGroupsRequestFormGroup() {
		return new FormGroup<SearchSkillGroupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchUsersResponse {
		Users?: Array<UserData>;
		NextToken?: string;
		TotalCount?: number | null;
	}
	export interface SearchUsersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateSearchUsersResponseFormGroup() {
		return new FormGroup<SearchUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information related to a user. */
	export interface UserData {
		UserArn?: string;
		FirstName?: string;
		LastName?: string;
		Email?: string;
		EnrollmentStatus?: EnrollmentStatus;
		EnrollmentId?: string;
	}

	/** Information related to a user. */
	export interface UserDataFormProperties {
		UserArn: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		EnrollmentStatus: FormControl<EnrollmentStatus | null | undefined>,
		EnrollmentId: FormControl<string | null | undefined>,
	}
	export function CreateUserDataFormGroup() {
		return new FormGroup<UserDataFormProperties>({
			UserArn: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			EnrollmentStatus: new FormControl<EnrollmentStatus | null | undefined>(undefined),
			EnrollmentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnrollmentStatus { INITIALIZED = 0, PENDING = 1, REGISTERED = 2, DISASSOCIATING = 3, DEREGISTERING = 4 }

	export interface SearchUsersRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
		SortCriteria?: Array<Sort>;
	}
	export interface SearchUsersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchUsersRequestFormGroup() {
		return new FormGroup<SearchUsersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SendAnnouncementResponse {
		AnnouncementArn?: string;
	}
	export interface SendAnnouncementResponseFormProperties {
		AnnouncementArn: FormControl<string | null | undefined>,
	}
	export function CreateSendAnnouncementResponseFormGroup() {
		return new FormGroup<SendAnnouncementResponseFormProperties>({
			AnnouncementArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendAnnouncementRequest {

		/** Required */
		RoomFilters: Array<Filter>;

		/** Required */
		Content: Content;
		TimeToLiveInSeconds?: number | null;

		/** Required */
		ClientRequestToken: string;
	}
	export interface SendAnnouncementRequestFormProperties {
		TimeToLiveInSeconds: FormControl<number | null | undefined>,

		/** Required */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateSendAnnouncementRequestFormGroup() {
		return new FormGroup<SendAnnouncementRequestFormProperties>({
			TimeToLiveInSeconds: new FormControl<number | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The content definition. This can contain only one text, SSML, or audio list object. */
	export interface Content {
		TextList?: Array<Text>;
		SsmlList?: Array<Ssml>;
		AudioList?: Array<Audio>;
	}

	/** The content definition. This can contain only one text, SSML, or audio list object. */
	export interface ContentFormProperties {
	}
	export function CreateContentFormGroup() {
		return new FormGroup<ContentFormProperties>({
		});

	}


	/** The text message. */
	export interface Text {

		/** Required */
		Locale: Locale;

		/** Required */
		Value: string;
	}

	/** The text message. */
	export interface TextFormProperties {

		/** Required */
		Locale: FormControl<Locale | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTextFormGroup() {
		return new FormGroup<TextFormProperties>({
			Locale: new FormControl<Locale | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Locale { 'en-US' = 0 }


	/** The SSML message. For more information, see <a href="https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html">SSML Reference</a>. */
	export interface Ssml {

		/** Required */
		Locale: Locale;

		/** Required */
		Value: string;
	}

	/** The SSML message. For more information, see <a href="https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html">SSML Reference</a>. */
	export interface SsmlFormProperties {

		/** Required */
		Locale: FormControl<Locale | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateSsmlFormGroup() {
		return new FormGroup<SsmlFormProperties>({
			Locale: new FormControl<Locale | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The audio message. There is a 1 MB limit on the audio file input and the only supported format is MP3. To convert your MP3 audio files to an Alexa-friendly, </p> <p>required codec version (MPEG version 2) and bit rate (48 kbps), you might use converter software. One option for this is a command-line tool, FFmpeg. For more information, see <a href="https://www.ffmpeg.org/">FFmpeg</a>. The following command converts the provided &lt;input-file&gt; to an MP3 file that is played in the announcement:</p> <p> <code>ffmpeg -i &lt;input-file&gt; -ac 2 -codec:a libmp3lame -b:a 48k -ar 16000 &lt;output-file.mp3&gt;</code> </p> */
	export interface Audio {

		/** Required */
		Locale: Locale;

		/** Required */
		Location: string;
	}

	/** <p>The audio message. There is a 1 MB limit on the audio file input and the only supported format is MP3. To convert your MP3 audio files to an Alexa-friendly, </p> <p>required codec version (MPEG version 2) and bit rate (48 kbps), you might use converter software. One option for this is a command-line tool, FFmpeg. For more information, see <a href="https://www.ffmpeg.org/">FFmpeg</a>. The following command converts the provided &lt;input-file&gt; to an MP3 file that is played in the announcement:</p> <p> <code>ffmpeg -i &lt;input-file&gt; -ac 2 -codec:a libmp3lame -b:a 48k -ar 16000 &lt;output-file.mp3&gt;</code> </p> */
	export interface AudioFormProperties {

		/** Required */
		Locale: FormControl<Locale | null | undefined>,

		/** Required */
		Location: FormControl<string | null | undefined>,
	}
	export function CreateAudioFormGroup() {
		return new FormGroup<AudioFormProperties>({
			Locale: new FormControl<Locale | null | undefined>(undefined, [Validators.required]),
			Location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendInvitationResponse {
	}
	export interface SendInvitationResponseFormProperties {
	}
	export function CreateSendInvitationResponseFormGroup() {
		return new FormGroup<SendInvitationResponseFormProperties>({
		});

	}

	export interface SendInvitationRequest {
		UserArn?: string;
	}
	export interface SendInvitationRequestFormProperties {
		UserArn: FormControl<string | null | undefined>,
	}
	export function CreateSendInvitationRequestFormGroup() {
		return new FormGroup<SendInvitationRequestFormProperties>({
			UserArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidUserStatusException {
	}
	export interface InvalidUserStatusExceptionFormProperties {
	}
	export function CreateInvalidUserStatusExceptionFormGroup() {
		return new FormGroup<InvalidUserStatusExceptionFormProperties>({
		});

	}

	export interface StartDeviceSyncResponse {
	}
	export interface StartDeviceSyncResponseFormProperties {
	}
	export function CreateStartDeviceSyncResponseFormGroup() {
		return new FormGroup<StartDeviceSyncResponseFormProperties>({
		});

	}

	export interface StartDeviceSyncRequest {
		RoomArn?: string;
		DeviceArn?: string;

		/** Required */
		Features: Array<Feature>;
	}
	export interface StartDeviceSyncRequestFormProperties {
		RoomArn: FormControl<string | null | undefined>,
		DeviceArn: FormControl<string | null | undefined>,
	}
	export function CreateStartDeviceSyncRequestFormGroup() {
		return new FormGroup<StartDeviceSyncRequestFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined),
			DeviceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSmartHomeApplianceDiscoveryResponse {
	}
	export interface StartSmartHomeApplianceDiscoveryResponseFormProperties {
	}
	export function CreateStartSmartHomeApplianceDiscoveryResponseFormGroup() {
		return new FormGroup<StartSmartHomeApplianceDiscoveryResponseFormProperties>({
		});

	}

	export interface StartSmartHomeApplianceDiscoveryRequest {

		/** Required */
		RoomArn: string;
	}
	export interface StartSmartHomeApplianceDiscoveryRequestFormProperties {

		/** Required */
		RoomArn: FormControl<string | null | undefined>,
	}
	export function CreateStartSmartHomeApplianceDiscoveryRequestFormGroup() {
		return new FormGroup<StartSmartHomeApplianceDiscoveryRequestFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Arn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		Arn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAddressBookResponse {
	}
	export interface UpdateAddressBookResponseFormProperties {
	}
	export function CreateUpdateAddressBookResponseFormGroup() {
		return new FormGroup<UpdateAddressBookResponseFormProperties>({
		});

	}

	export interface UpdateAddressBookRequest {

		/** Required */
		AddressBookArn: string;
		Name?: string;
		Description?: string;
	}
	export interface UpdateAddressBookRequestFormProperties {

		/** Required */
		AddressBookArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAddressBookRequestFormGroup() {
		return new FormGroup<UpdateAddressBookRequestFormProperties>({
			AddressBookArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NameInUseException {
	}
	export interface NameInUseExceptionFormProperties {
	}
	export function CreateNameInUseExceptionFormGroup() {
		return new FormGroup<NameInUseExceptionFormProperties>({
		});

	}

	export interface UpdateBusinessReportScheduleResponse {
	}
	export interface UpdateBusinessReportScheduleResponseFormProperties {
	}
	export function CreateUpdateBusinessReportScheduleResponseFormGroup() {
		return new FormGroup<UpdateBusinessReportScheduleResponseFormProperties>({
		});

	}

	export interface UpdateBusinessReportScheduleRequest {

		/** Required */
		ScheduleArn: string;
		S3BucketName?: string;
		S3KeyPrefix?: string;
		Format?: BusinessReportFormat;
		ScheduleName?: string;
		Recurrence?: BusinessReportRecurrence;
	}
	export interface UpdateBusinessReportScheduleRequestFormProperties {

		/** Required */
		ScheduleArn: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		Format: FormControl<BusinessReportFormat | null | undefined>,
		ScheduleName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBusinessReportScheduleRequestFormGroup() {
		return new FormGroup<UpdateBusinessReportScheduleRequestFormProperties>({
			ScheduleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<BusinessReportFormat | null | undefined>(undefined),
			ScheduleName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConferenceProviderResponse {
	}
	export interface UpdateConferenceProviderResponseFormProperties {
	}
	export function CreateUpdateConferenceProviderResponseFormGroup() {
		return new FormGroup<UpdateConferenceProviderResponseFormProperties>({
		});

	}

	export interface UpdateConferenceProviderRequest {

		/** Required */
		ConferenceProviderArn: string;

		/** Required */
		ConferenceProviderType: ConferenceProviderType;
		IPDialIn?: IPDialIn;
		PSTNDialIn?: PSTNDialIn;

		/** Required */
		MeetingSetting: MeetingSetting;
	}
	export interface UpdateConferenceProviderRequestFormProperties {

		/** Required */
		ConferenceProviderArn: FormControl<string | null | undefined>,

		/** Required */
		ConferenceProviderType: FormControl<ConferenceProviderType | null | undefined>,
	}
	export function CreateUpdateConferenceProviderRequestFormGroup() {
		return new FormGroup<UpdateConferenceProviderRequestFormProperties>({
			ConferenceProviderArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConferenceProviderType: new FormControl<ConferenceProviderType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContactResponse {
	}
	export interface UpdateContactResponseFormProperties {
	}
	export function CreateUpdateContactResponseFormGroup() {
		return new FormGroup<UpdateContactResponseFormProperties>({
		});

	}

	export interface UpdateContactRequest {

		/** Required */
		ContactArn: string;
		DisplayName?: string;
		FirstName?: string;
		LastName?: string;
		PhoneNumber?: string;
		PhoneNumbers?: Array<PhoneNumber>;
		SipAddresses?: Array<SipAddress>;
	}
	export interface UpdateContactRequestFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactRequestFormGroup() {
		return new FormGroup<UpdateContactRequestFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeviceResponse {
	}
	export interface UpdateDeviceResponseFormProperties {
	}
	export function CreateUpdateDeviceResponseFormGroup() {
		return new FormGroup<UpdateDeviceResponseFormProperties>({
		});

	}

	export interface UpdateDeviceRequest {
		DeviceArn?: string;
		DeviceName?: string;
	}
	export interface UpdateDeviceRequestFormProperties {
		DeviceArn: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceRequestFormGroup() {
		return new FormGroup<UpdateDeviceRequestFormProperties>({
			DeviceArn: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewayResponse {
	}
	export interface UpdateGatewayResponseFormProperties {
	}
	export function CreateUpdateGatewayResponseFormGroup() {
		return new FormGroup<UpdateGatewayResponseFormProperties>({
		});

	}

	export interface UpdateGatewayRequest {

		/** Required */
		GatewayArn: string;
		Name?: string;
		Description?: string;
		SoftwareVersion?: string;
	}
	export interface UpdateGatewayRequestFormProperties {

		/** Required */
		GatewayArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SoftwareVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayRequestFormGroup() {
		return new FormGroup<UpdateGatewayRequestFormProperties>({
			GatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			SoftwareVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewayGroupResponse {
	}
	export interface UpdateGatewayGroupResponseFormProperties {
	}
	export function CreateUpdateGatewayGroupResponseFormGroup() {
		return new FormGroup<UpdateGatewayGroupResponseFormProperties>({
		});

	}

	export interface UpdateGatewayGroupRequest {

		/** Required */
		GatewayGroupArn: string;
		Name?: string;
		Description?: string;
	}
	export interface UpdateGatewayGroupRequestFormProperties {

		/** Required */
		GatewayGroupArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayGroupRequestFormGroup() {
		return new FormGroup<UpdateGatewayGroupRequestFormProperties>({
			GatewayGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkProfileResponse {
	}
	export interface UpdateNetworkProfileResponseFormProperties {
	}
	export function CreateUpdateNetworkProfileResponseFormGroup() {
		return new FormGroup<UpdateNetworkProfileResponseFormProperties>({
		});

	}

	export interface UpdateNetworkProfileRequest {

		/** Required */
		NetworkProfileArn: string;
		NetworkProfileName?: string;
		Description?: string;
		CurrentPassword?: string;
		NextPassword?: string;
		CertificateAuthorityArn?: string;
		TrustAnchors?: Array<string>;
	}
	export interface UpdateNetworkProfileRequestFormProperties {

		/** Required */
		NetworkProfileArn: FormControl<string | null | undefined>,
		NetworkProfileName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CurrentPassword: FormControl<string | null | undefined>,
		NextPassword: FormControl<string | null | undefined>,
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkProfileRequestFormGroup() {
		return new FormGroup<UpdateNetworkProfileRequestFormProperties>({
			NetworkProfileArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkProfileName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CurrentPassword: new FormControl<string | null | undefined>(undefined),
			NextPassword: new FormControl<string | null | undefined>(undefined),
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProfileResponse {
	}
	export interface UpdateProfileResponseFormProperties {
	}
	export function CreateUpdateProfileResponseFormGroup() {
		return new FormGroup<UpdateProfileResponseFormProperties>({
		});

	}

	export interface UpdateProfileRequest {
		ProfileArn?: string;
		ProfileName?: string;
		IsDefault?: boolean | null;
		Timezone?: string;
		Address?: string;
		DistanceUnit?: DistanceUnit;
		TemperatureUnit?: TemperatureUnit;
		WakeWord?: WakeWord;
		Locale?: string;
		SetupModeDisabled?: boolean | null;
		MaxVolumeLimit?: number | null;
		PSTNEnabled?: boolean | null;
		DataRetentionOptIn?: boolean | null;
		MeetingRoomConfiguration?: UpdateMeetingRoomConfiguration;
	}
	export interface UpdateProfileRequestFormProperties {
		ProfileArn: FormControl<string | null | undefined>,
		ProfileName: FormControl<string | null | undefined>,
		IsDefault: FormControl<boolean | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
		Address: FormControl<string | null | undefined>,
		DistanceUnit: FormControl<DistanceUnit | null | undefined>,
		TemperatureUnit: FormControl<TemperatureUnit | null | undefined>,
		WakeWord: FormControl<WakeWord | null | undefined>,
		Locale: FormControl<string | null | undefined>,
		SetupModeDisabled: FormControl<boolean | null | undefined>,
		MaxVolumeLimit: FormControl<number | null | undefined>,
		PSTNEnabled: FormControl<boolean | null | undefined>,
		DataRetentionOptIn: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateProfileRequestFormGroup() {
		return new FormGroup<UpdateProfileRequestFormProperties>({
			ProfileArn: new FormControl<string | null | undefined>(undefined),
			ProfileName: new FormControl<string | null | undefined>(undefined),
			IsDefault: new FormControl<boolean | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			Address: new FormControl<string | null | undefined>(undefined),
			DistanceUnit: new FormControl<DistanceUnit | null | undefined>(undefined),
			TemperatureUnit: new FormControl<TemperatureUnit | null | undefined>(undefined),
			WakeWord: new FormControl<WakeWord | null | undefined>(undefined),
			Locale: new FormControl<string | null | undefined>(undefined),
			SetupModeDisabled: new FormControl<boolean | null | undefined>(undefined),
			MaxVolumeLimit: new FormControl<number | null | undefined>(undefined),
			PSTNEnabled: new FormControl<boolean | null | undefined>(undefined),
			DataRetentionOptIn: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Updates meeting room settings of a room profile. */
	export interface UpdateMeetingRoomConfiguration {
		RoomUtilizationMetricsEnabled?: boolean | null;
		EndOfMeetingReminder?: UpdateEndOfMeetingReminder;
		InstantBooking?: UpdateInstantBooking;
		RequireCheckIn?: UpdateRequireCheckIn;
		ProactiveJoin?: UpdateProactiveJoin;
	}

	/** Updates meeting room settings of a room profile. */
	export interface UpdateMeetingRoomConfigurationFormProperties {
		RoomUtilizationMetricsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateMeetingRoomConfigurationFormGroup() {
		return new FormGroup<UpdateMeetingRoomConfigurationFormProperties>({
			RoomUtilizationMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.  */
	export interface UpdateEndOfMeetingReminder {
		ReminderAtMinutes?: Array<number> | null;
		ReminderType?: EndOfMeetingReminderType;
		Enabled?: boolean | null;
	}

	/** Settings for the end of meeting reminder feature that are applied to a room profile. The end of meeting reminder enables Alexa to remind users when a meeting is ending.  */
	export interface UpdateEndOfMeetingReminderFormProperties {
		ReminderType: FormControl<EndOfMeetingReminderType | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateEndOfMeetingReminderFormGroup() {
		return new FormGroup<UpdateEndOfMeetingReminderFormProperties>({
			ReminderType: new FormControl<EndOfMeetingReminderType | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Updates settings for the instant booking feature that are applied to a room profile. If instant booking is enabled, Alexa automatically reserves a room if it is free when a user joins a meeting with Alexa. */
	export interface UpdateInstantBooking {
		DurationInMinutes?: number | null;
		Enabled?: boolean | null;
	}

	/** Updates settings for the instant booking feature that are applied to a room profile. If instant booking is enabled, Alexa automatically reserves a room if it is free when a user joins a meeting with Alexa. */
	export interface UpdateInstantBookingFormProperties {
		DurationInMinutes: FormControl<number | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateInstantBookingFormGroup() {
		return new FormGroup<UpdateInstantBookingFormProperties>({
			DurationInMinutes: new FormControl<number | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Updates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.  */
	export interface UpdateRequireCheckIn {
		ReleaseAfterMinutes?: number | null;
		Enabled?: boolean | null;
	}

	/** Updates settings for the require check in feature that are applied to a room profile. Require check in allows a meeting room’s Alexa or AVS device to prompt the user to check in; otherwise, the room will be released.  */
	export interface UpdateRequireCheckInFormProperties {
		ReleaseAfterMinutes: FormControl<number | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateRequireCheckInFormGroup() {
		return new FormGroup<UpdateRequireCheckInFormProperties>({
			ReleaseAfterMinutes: new FormControl<number | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateProactiveJoin {

		/** Required */
		EnabledByMotion: boolean;
	}
	export interface UpdateProactiveJoinFormProperties {

		/** Required */
		EnabledByMotion: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateProactiveJoinFormGroup() {
		return new FormGroup<UpdateProactiveJoinFormProperties>({
			EnabledByMotion: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRoomResponse {
	}
	export interface UpdateRoomResponseFormProperties {
	}
	export function CreateUpdateRoomResponseFormGroup() {
		return new FormGroup<UpdateRoomResponseFormProperties>({
		});

	}

	export interface UpdateRoomRequest {
		RoomArn?: string;
		RoomName?: string;
		Description?: string;
		ProviderCalendarId?: string;
		ProfileArn?: string;
	}
	export interface UpdateRoomRequestFormProperties {
		RoomArn: FormControl<string | null | undefined>,
		RoomName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ProviderCalendarId: FormControl<string | null | undefined>,
		ProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoomRequestFormGroup() {
		return new FormGroup<UpdateRoomRequestFormProperties>({
			RoomArn: new FormControl<string | null | undefined>(undefined),
			RoomName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ProviderCalendarId: new FormControl<string | null | undefined>(undefined),
			ProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSkillGroupResponse {
	}
	export interface UpdateSkillGroupResponseFormProperties {
	}
	export function CreateUpdateSkillGroupResponseFormGroup() {
		return new FormGroup<UpdateSkillGroupResponseFormProperties>({
		});

	}

	export interface UpdateSkillGroupRequest {
		SkillGroupArn?: string;
		SkillGroupName?: string;
		Description?: string;
	}
	export interface UpdateSkillGroupRequestFormProperties {
		SkillGroupArn: FormControl<string | null | undefined>,
		SkillGroupName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSkillGroupRequestFormGroup() {
		return new FormGroup<UpdateSkillGroupRequestFormProperties>({
			SkillGroupArn: new FormControl<string | null | undefined>(undefined),
			SkillGroupName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnablementTypeFilter { ENABLED = 0, PENDING = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a skill with the organization under the customer's AWS account. If a skill is private, the user implicitly accepts access to this skill during enablement.
		 * Post #X-Amz-Target=AlexaForBusiness.ApproveSkill
		 * @return {ApproveSkillResponse} Success
		 */
		ApproveSkill(requestBody: ApproveSkillRequest): Observable<ApproveSkillResponse> {
			return this.http.post<ApproveSkillResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ApproveSkill', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a contact with a given address book.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook
		 * @return {AssociateContactWithAddressBookResponse} Success
		 */
		AssociateContactWithAddressBook(requestBody: AssociateContactWithAddressBookRequest): Observable<AssociateContactWithAddressBookResponse> {
			return this.http.post<AssociateContactWithAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateContactWithAddressBook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a device with the specified network profile.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile
		 * @return {AssociateDeviceWithNetworkProfileResponse} Success
		 */
		AssociateDeviceWithNetworkProfile(requestBody: AssociateDeviceWithNetworkProfileRequest): Observable<AssociateDeviceWithNetworkProfileResponse> {
			return this.http.post<AssociateDeviceWithNetworkProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a device with a given room. This applies all the settings from the room profile to the device, and all the skills in any skill groups added to that room. This operation requires the device to be online, or else a manual sync is required.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom
		 * @return {AssociateDeviceWithRoomResponse} Success
		 */
		AssociateDeviceWithRoom(requestBody: AssociateDeviceWithRoomRequest): Observable<AssociateDeviceWithRoomResponse> {
			return this.http.post<AssociateDeviceWithRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateDeviceWithRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a skill group with a given room. This enables all skills in the associated skill group on all devices in the room.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom
		 * @return {AssociateSkillGroupWithRoomResponse} Success
		 */
		AssociateSkillGroupWithRoom(requestBody: AssociateSkillGroupWithRoomRequest): Observable<AssociateSkillGroupWithRoomResponse> {
			return this.http.post<AssociateSkillGroupWithRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateSkillGroupWithRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a skill with a skill group.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup
		 * @return {AssociateSkillWithSkillGroupResponse} Success
		 */
		AssociateSkillWithSkillGroup(requestBody: AssociateSkillWithSkillGroupRequest): Observable<AssociateSkillWithSkillGroupResponse> {
			return this.http.post<AssociateSkillWithSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateSkillWithSkillGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Makes a private skill available for enrolled users to enable on their devices.
		 * Post #X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers
		 * @return {AssociateSkillWithUsersResponse} Success
		 */
		AssociateSkillWithUsers(requestBody: AssociateSkillWithUsersRequest): Observable<AssociateSkillWithUsersResponse> {
			return this.http.post<AssociateSkillWithUsersResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.AssociateSkillWithUsers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an address book with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateAddressBook
		 * @return {CreateAddressBookResponse} Success
		 */
		CreateAddressBook(requestBody: CreateAddressBookRequest): Observable<CreateAddressBookResponse> {
			return this.http.post<CreateAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateAddressBook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a recurring schedule for usage reports to deliver to the specified S3 location with a specified daily or weekly interval.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule
		 * @return {CreateBusinessReportScheduleResponse} Success
		 */
		CreateBusinessReportSchedule(requestBody: CreateBusinessReportScheduleRequest): Observable<CreateBusinessReportScheduleResponse> {
			return this.http.post<CreateBusinessReportScheduleResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateBusinessReportSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a new conference provider under the user's AWS account.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateConferenceProvider
		 * @return {CreateConferenceProviderResponse} Success
		 */
		CreateConferenceProvider(requestBody: CreateConferenceProviderRequest): Observable<CreateConferenceProviderResponse> {
			return this.http.post<CreateConferenceProviderResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateConferenceProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a contact with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateContact
		 * @return {CreateContactResponse} Success
		 */
		CreateContact(requestBody: CreateContactRequest): Observable<CreateContactResponse> {
			return this.http.post<CreateContactResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a gateway group with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateGatewayGroup
		 * @return {CreateGatewayGroupResponse} Success
		 */
		CreateGatewayGroup(requestBody: CreateGatewayGroupRequest): Observable<CreateGatewayGroupResponse> {
			return this.http.post<CreateGatewayGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateGatewayGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a network profile with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateNetworkProfile
		 * @return {CreateNetworkProfileResponse} Success
		 */
		CreateNetworkProfile(requestBody: CreateNetworkProfileRequest): Observable<CreateNetworkProfileResponse> {
			return this.http.post<CreateNetworkProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new room profile with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateProfile
		 * @return {CreateProfileResponse} Success
		 */
		CreateProfile(requestBody: CreateProfileRequest): Observable<CreateProfileResponse> {
			return this.http.post<CreateProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a room with the specified details.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateRoom
		 * @return {CreateRoomResponse} Success
		 */
		CreateRoom(requestBody: CreateRoomRequest): Observable<CreateRoomResponse> {
			return this.http.post<CreateRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a skill group with a specified name and description.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateSkillGroup
		 * @return {CreateSkillGroupResponse} Success
		 */
		CreateSkillGroup(requestBody: CreateSkillGroupRequest): Observable<CreateSkillGroupResponse> {
			return this.http.post<CreateSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateSkillGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a user.
		 * Post #X-Amz-Target=AlexaForBusiness.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserRequest): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.CreateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an address book by the address book ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteAddressBook
		 * @return {DeleteAddressBookResponse} Success
		 */
		DeleteAddressBook(requestBody: DeleteAddressBookRequest): Observable<DeleteAddressBookResponse> {
			return this.http.post<DeleteAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteAddressBook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the recurring report delivery schedule with the specified schedule ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule
		 * @return {DeleteBusinessReportScheduleResponse} Success
		 */
		DeleteBusinessReportSchedule(requestBody: DeleteBusinessReportScheduleRequest): Observable<DeleteBusinessReportScheduleResponse> {
			return this.http.post<DeleteBusinessReportScheduleResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteBusinessReportSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a conference provider.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider
		 * @return {DeleteConferenceProviderResponse} Success
		 */
		DeleteConferenceProvider(requestBody: DeleteConferenceProviderRequest): Observable<DeleteConferenceProviderResponse> {
			return this.http.post<DeleteConferenceProviderResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteConferenceProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a contact by the contact ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteContact
		 * @return {DeleteContactResponse} Success
		 */
		DeleteContact(requestBody: DeleteContactRequest): Observable<DeleteContactResponse> {
			return this.http.post<DeleteContactResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a device from Alexa For Business.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteDevice
		 * @return {DeleteDeviceResponse} Success
		 */
		DeleteDevice(requestBody: DeleteDeviceRequest): Observable<DeleteDeviceResponse> {
			return this.http.post<DeleteDeviceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * When this action is called for a specified shared device, it allows authorized users to delete the device's entire previous history of voice input data and associated response data. This action can be called once every 24 hours for a specific shared device.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData
		 * @return {DeleteDeviceUsageDataResponse} Success
		 */
		DeleteDeviceUsageData(requestBody: DeleteDeviceUsageDataRequest): Observable<DeleteDeviceUsageDataResponse> {
			return this.http.post<DeleteDeviceUsageDataResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteDeviceUsageData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a gateway group.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup
		 * @return {DeleteGatewayGroupResponse} Success
		 */
		DeleteGatewayGroup(requestBody: DeleteGatewayGroupRequest): Observable<DeleteGatewayGroupResponse> {
			return this.http.post<DeleteGatewayGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteGatewayGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a network profile by the network profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile
		 * @return {DeleteNetworkProfileResponse} Success
		 */
		DeleteNetworkProfile(requestBody: DeleteNetworkProfileRequest): Observable<DeleteNetworkProfileResponse> {
			return this.http.post<DeleteNetworkProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a room profile by the profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteProfile
		 * @return {DeleteProfileResponse} Success
		 */
		DeleteProfile(requestBody: DeleteProfileRequest): Observable<DeleteProfileResponse> {
			return this.http.post<DeleteProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a room by the room ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteRoom
		 * @return {DeleteRoomResponse} Success
		 */
		DeleteRoom(requestBody: DeleteRoomRequest): Observable<DeleteRoomResponse> {
			return this.http.post<DeleteRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes room skill parameter details by room, skill, and parameter key ID.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter
		 * @return {DeleteRoomSkillParameterResponse} Success
		 */
		DeleteRoomSkillParameter(requestBody: DeleteRoomSkillParameterRequest): Observable<DeleteRoomSkillParameterResponse> {
			return this.http.post<DeleteRoomSkillParameterResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteRoomSkillParameter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unlinks a third-party account from a skill.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization
		 * @return {DeleteSkillAuthorizationResponse} Success
		 */
		DeleteSkillAuthorization(requestBody: DeleteSkillAuthorizationRequest): Observable<DeleteSkillAuthorizationResponse> {
			return this.http.post<DeleteSkillAuthorizationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteSkillAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a skill group by skill group ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteSkillGroup
		 * @return {DeleteSkillGroupResponse} Success
		 */
		DeleteSkillGroup(requestBody: DeleteSkillGroupRequest): Observable<DeleteSkillGroupResponse> {
			return this.http.post<DeleteSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteSkillGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified user by user ARN and enrollment ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.DeleteUser
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest): Observable<DeleteUserResponse> {
			return this.http.post<DeleteUserResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a contact from a given address book.
		 * Post #X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook
		 * @return {DisassociateContactFromAddressBookResponse} Success
		 */
		DisassociateContactFromAddressBook(requestBody: DisassociateContactFromAddressBookRequest): Observable<DisassociateContactFromAddressBookResponse> {
			return this.http.post<DisassociateContactFromAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DisassociateContactFromAddressBook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a device from its current room. The device continues to be connected to the Wi-Fi network and is still registered to the account. The device settings and skills are removed from the room.
		 * Post #X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom
		 * @return {DisassociateDeviceFromRoomResponse} Success
		 */
		DisassociateDeviceFromRoom(requestBody: DisassociateDeviceFromRoomRequest): Observable<DisassociateDeviceFromRoomResponse> {
			return this.http.post<DisassociateDeviceFromRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DisassociateDeviceFromRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a skill from a skill group.
		 * Post #X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup
		 * @return {DisassociateSkillFromSkillGroupResponse} Success
		 */
		DisassociateSkillFromSkillGroup(requestBody: DisassociateSkillFromSkillGroupRequest): Observable<DisassociateSkillFromSkillGroupResponse> {
			return this.http.post<DisassociateSkillFromSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromSkillGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Makes a private skill unavailable for enrolled users and prevents them from enabling it on their devices.
		 * Post #X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers
		 * @return {DisassociateSkillFromUsersResponse} Success
		 */
		DisassociateSkillFromUsers(requestBody: DisassociateSkillFromUsersRequest): Observable<DisassociateSkillFromUsersResponse> {
			return this.http.post<DisassociateSkillFromUsersResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DisassociateSkillFromUsers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a skill group from a specified room. This disables all skills in the skill group on all devices in the room.
		 * Post #X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom
		 * @return {DisassociateSkillGroupFromRoomResponse} Success
		 */
		DisassociateSkillGroupFromRoom(requestBody: DisassociateSkillGroupFromRoomRequest): Observable<DisassociateSkillGroupFromRoomResponse> {
			return this.http.post<DisassociateSkillGroupFromRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.DisassociateSkillGroupFromRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Forgets smart home appliances associated to a room.
		 * Post #X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances
		 * @return {ForgetSmartHomeAppliancesResponse} Success
		 */
		ForgetSmartHomeAppliances(requestBody: ForgetSmartHomeAppliancesRequest): Observable<ForgetSmartHomeAppliancesResponse> {
			return this.http.post<ForgetSmartHomeAppliancesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ForgetSmartHomeAppliances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets address the book details by the address book ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetAddressBook
		 * @return {GetAddressBookResponse} Success
		 */
		GetAddressBook(requestBody: GetAddressBookRequest): Observable<GetAddressBookResponse> {
			return this.http.post<GetAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetAddressBook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the existing conference preferences.
		 * Post #X-Amz-Target=AlexaForBusiness.GetConferencePreference
		 * @return {GetConferencePreferenceResponse} Success
		 */
		GetConferencePreference(requestBody: GetConferencePreferenceRequest): Observable<GetConferencePreferenceResponse> {
			return this.http.post<GetConferencePreferenceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetConferencePreference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets details about a specific conference provider.
		 * Post #X-Amz-Target=AlexaForBusiness.GetConferenceProvider
		 * @return {GetConferenceProviderResponse} Success
		 */
		GetConferenceProvider(requestBody: GetConferenceProviderRequest): Observable<GetConferenceProviderResponse> {
			return this.http.post<GetConferenceProviderResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetConferenceProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the contact details by the contact ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetContact
		 * @return {GetContactResponse} Success
		 */
		GetContact(requestBody: GetContactRequest): Observable<GetContactResponse> {
			return this.http.post<GetContactResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the details of a device by device ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetDevice
		 * @return {GetDeviceResponse} Success
		 */
		GetDevice(requestBody: GetDeviceRequest): Observable<GetDeviceResponse> {
			return this.http.post<GetDeviceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details of a gateway.
		 * Post #X-Amz-Target=AlexaForBusiness.GetGateway
		 * @return {GetGatewayResponse} Success
		 */
		GetGateway(requestBody: GetGatewayRequest): Observable<GetGatewayResponse> {
			return this.http.post<GetGatewayResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details of a gateway group.
		 * Post #X-Amz-Target=AlexaForBusiness.GetGatewayGroup
		 * @return {GetGatewayGroupResponse} Success
		 */
		GetGatewayGroup(requestBody: GetGatewayGroupRequest): Observable<GetGatewayGroupResponse> {
			return this.http.post<GetGatewayGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetGatewayGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the configured values for the user enrollment invitation email template.
		 * Post #X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration
		 * @return {GetInvitationConfigurationResponse} Success
		 */
		GetInvitationConfiguration(requestBody: GetInvitationConfigurationRequest): Observable<GetInvitationConfigurationResponse> {
			return this.http.post<GetInvitationConfigurationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetInvitationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the network profile details by the network profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetNetworkProfile
		 * @return {GetNetworkProfileResponse} Success
		 */
		GetNetworkProfile(requestBody: GetNetworkProfileRequest): Observable<GetNetworkProfileResponse> {
			return this.http.post<GetNetworkProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the details of a room profile by profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetProfile
		 * @return {GetProfileResponse} Success
		 */
		GetProfile(requestBody: GetProfileRequest): Observable<GetProfileResponse> {
			return this.http.post<GetProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets room details by room ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetRoom
		 * @return {GetRoomResponse} Success
		 */
		GetRoom(requestBody: GetRoomRequest): Observable<GetRoomResponse> {
			return this.http.post<GetRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets room skill parameter details by room, skill, and parameter key ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter
		 * @return {GetRoomSkillParameterResponse} Success
		 */
		GetRoomSkillParameter(requestBody: GetRoomSkillParameterRequest): Observable<GetRoomSkillParameterResponse> {
			return this.http.post<GetRoomSkillParameterResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetRoomSkillParameter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets skill group details by skill group ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.GetSkillGroup
		 * @return {GetSkillGroupResponse} Success
		 */
		GetSkillGroup(requestBody: GetSkillGroupRequest): Observable<GetSkillGroupResponse> {
			return this.http.post<GetSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.GetSkillGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the details of the schedules that a user configured. A download URL of the report associated with each schedule is returned every time this action is called. A new download URL is returned each time, and is valid for 24 hours.
		 * Post #X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBusinessReportSchedulesResponse} Success
		 */
		ListBusinessReportSchedules(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListBusinessReportSchedulesRequest): Observable<ListBusinessReportSchedulesResponse> {
			return this.http.post<ListBusinessReportSchedulesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListBusinessReportSchedules?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists conference providers under a specific AWS account.
		 * Post #X-Amz-Target=AlexaForBusiness.ListConferenceProviders
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConferenceProvidersResponse} Success
		 */
		ListConferenceProviders(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListConferenceProvidersRequest): Observable<ListConferenceProvidersResponse> {
			return this.http.post<ListConferenceProvidersResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListConferenceProviders?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the device event history, including device connection status, for up to 30 days.
		 * Post #X-Amz-Target=AlexaForBusiness.ListDeviceEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDeviceEventsResponse} Success
		 */
		ListDeviceEvents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDeviceEventsRequest): Observable<ListDeviceEventsResponse> {
			return this.http.post<ListDeviceEventsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListDeviceEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of gateway group summaries. Use GetGatewayGroup to retrieve details of a specific gateway group.
		 * Post #X-Amz-Target=AlexaForBusiness.ListGatewayGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGatewayGroupsResponse} Success
		 */
		ListGatewayGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGatewayGroupsRequest): Observable<ListGatewayGroupsResponse> {
			return this.http.post<ListGatewayGroupsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListGatewayGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of gateway summaries. Use GetGateway to retrieve details of a specific gateway. An optional gateway group ARN can be provided to only retrieve gateway summaries of gateways that are associated with that gateway group ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.ListGateways
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGatewaysResponse} Success
		 */
		ListGateways(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGatewaysRequest): Observable<ListGatewaysResponse> {
			return this.http.post<ListGatewaysResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListGateways?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all enabled skills in a specific skill group.
		 * Post #X-Amz-Target=AlexaForBusiness.ListSkills
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSkillsResponse} Success
		 */
		ListSkills(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSkillsRequest): Observable<ListSkillsResponse> {
			return this.http.post<ListSkillsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListSkills?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all categories in the Alexa skill store.
		 * Post #X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSkillsStoreCategoriesResponse} Success
		 */
		ListSkillsStoreCategories(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSkillsStoreCategoriesRequest): Observable<ListSkillsStoreCategoriesResponse> {
			return this.http.post<ListSkillsStoreCategoriesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListSkillsStoreCategories?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all skills in the Alexa skill store by category.
		 * Post #X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSkillsStoreSkillsByCategoryResponse} Success
		 */
		ListSkillsStoreSkillsByCategory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSkillsStoreSkillsByCategoryRequest): Observable<ListSkillsStoreSkillsByCategoryResponse> {
			return this.http.post<ListSkillsStoreSkillsByCategoryResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListSkillsStoreSkillsByCategory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the smart home appliances associated with a room.
		 * Post #X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSmartHomeAppliancesResponse} Success
		 */
		ListSmartHomeAppliances(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSmartHomeAppliancesRequest): Observable<ListSmartHomeAppliancesResponse> {
			return this.http.post<ListSmartHomeAppliancesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListSmartHomeAppliances?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags for the specified resource.
		 * Post #X-Amz-Target=AlexaForBusiness.ListTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsResponse} Success
		 */
		ListTags(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsRequest): Observable<ListTagsResponse> {
			return this.http.post<ListTagsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ListTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the conference preferences on a specific conference provider at the account level.
		 * Post #X-Amz-Target=AlexaForBusiness.PutConferencePreference
		 * @return {PutConferencePreferenceResponse} Success
		 */
		PutConferencePreference(requestBody: PutConferencePreferenceRequest): Observable<PutConferencePreferenceResponse> {
			return this.http.post<PutConferencePreferenceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.PutConferencePreference', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Configures the email template for the user enrollment invitation with the specified attributes.
		 * Post #X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration
		 * @return {PutInvitationConfigurationResponse} Success
		 */
		PutInvitationConfiguration(requestBody: PutInvitationConfigurationRequest): Observable<PutInvitationConfigurationResponse> {
			return this.http.post<PutInvitationConfigurationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.PutInvitationConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates room skill parameter details by room, skill, and parameter key ID. Not all skills have a room skill parameter.
		 * Post #X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter
		 * @return {PutRoomSkillParameterResponse} Success
		 */
		PutRoomSkillParameter(requestBody: PutRoomSkillParameterRequest): Observable<PutRoomSkillParameterResponse> {
			return this.http.post<PutRoomSkillParameterResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.PutRoomSkillParameter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Links a user's account to a third-party skill provider. If this API operation is called by an assumed IAM role, the skill being linked must be a private skill. Also, the skill must be owned by the AWS account that assumed the IAM role.
		 * Post #X-Amz-Target=AlexaForBusiness.PutSkillAuthorization
		 * @return {PutSkillAuthorizationResponse} Success
		 */
		PutSkillAuthorization(requestBody: PutSkillAuthorizationRequest): Observable<PutSkillAuthorizationResponse> {
			return this.http.post<PutSkillAuthorizationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.PutSkillAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM) using Alexa Voice Service (AVS).
		 * Post #X-Amz-Target=AlexaForBusiness.RegisterAVSDevice
		 * @return {RegisterAVSDeviceResponse} Success
		 */
		RegisterAVSDevice(requestBody: RegisterAVSDeviceRequest): Observable<RegisterAVSDeviceResponse> {
			return this.http.post<RegisterAVSDeviceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.RegisterAVSDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a skill from the organization under a user's AWS account. If the skill is a private skill, it moves to an AcceptStatus of PENDING. Any private or public skill that is rejected can be added later by calling the ApproveSkill API.
		 * Post #X-Amz-Target=AlexaForBusiness.RejectSkill
		 * @return {RejectSkillResponse} Success
		 */
		RejectSkill(requestBody: RejectSkillRequest): Observable<RejectSkillResponse> {
			return this.http.post<RejectSkillResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.RejectSkill', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Determines the details for the room from which a skill request was invoked. This operation is used by skill developers.</p> <p>To query ResolveRoom from an Alexa skill, the skill ID needs to be authorized. When the skill is using an AWS Lambda function, the skill is automatically authorized when you publish your skill as a private skill to your AWS account. Skills that are hosted using a custom web service must be manually authorized. To get your skill authorized, contact AWS Support with your AWS account ID that queries the ResolveRoom API and skill ID. </p>
		 * Post #X-Amz-Target=AlexaForBusiness.ResolveRoom
		 * @return {ResolveRoomResponse} Success
		 */
		ResolveRoom(requestBody: ResolveRoomRequest): Observable<ResolveRoomResponse> {
			return this.http.post<ResolveRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.ResolveRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes an invitation and invalidates the enrollment URL.
		 * Post #X-Amz-Target=AlexaForBusiness.RevokeInvitation
		 * @return {RevokeInvitationResponse} Success
		 */
		RevokeInvitation(requestBody: RevokeInvitationRequest): Observable<RevokeInvitationResponse> {
			return this.http.post<RevokeInvitationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.RevokeInvitation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches address books and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchAddressBooks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchAddressBooksResponse} Success
		 */
		SearchAddressBooks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchAddressBooksRequest): Observable<SearchAddressBooksResponse> {
			return this.http.post<SearchAddressBooksResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchAddressBooks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches contacts and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchContacts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchContactsResponse} Success
		 */
		SearchContacts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchContactsRequest): Observable<SearchContactsResponse> {
			return this.http.post<SearchContactsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchContacts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches devices and lists the ones that meet a set of filter criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchDevices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchDevicesResponse} Success
		 */
		SearchDevices(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchDevicesRequest): Observable<SearchDevicesResponse> {
			return this.http.post<SearchDevicesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchDevices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches network profiles and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchNetworkProfilesResponse} Success
		 */
		SearchNetworkProfiles(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchNetworkProfilesRequest): Observable<SearchNetworkProfilesResponse> {
			return this.http.post<SearchNetworkProfilesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchNetworkProfiles?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches room profiles and lists the ones that meet a set of filter criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchProfiles
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchProfilesResponse} Success
		 */
		SearchProfiles(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchProfilesRequest): Observable<SearchProfilesResponse> {
			return this.http.post<SearchProfilesResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchProfiles?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches rooms and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchRooms
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchRoomsResponse} Success
		 */
		SearchRooms(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchRoomsRequest): Observable<SearchRoomsResponse> {
			return this.http.post<SearchRoomsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchRooms?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches skill groups and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchSkillGroups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchSkillGroupsResponse} Success
		 */
		SearchSkillGroups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchSkillGroupsRequest): Observable<SearchSkillGroupsResponse> {
			return this.http.post<SearchSkillGroupsResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchSkillGroups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches users and lists the ones that meet a set of filter and sort criteria.
		 * Post #X-Amz-Target=AlexaForBusiness.SearchUsers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchUsersResponse} Success
		 */
		SearchUsers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchUsersRequest): Observable<SearchUsersResponse> {
			return this.http.post<SearchUsersResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SearchUsers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Triggers an asynchronous flow to send text, SSML, or audio announcements to rooms that are identified by a search or filter.
		 * Post #X-Amz-Target=AlexaForBusiness.SendAnnouncement
		 * @return {SendAnnouncementResponse} Success
		 */
		SendAnnouncement(requestBody: SendAnnouncementRequest): Observable<SendAnnouncementResponse> {
			return this.http.post<SendAnnouncementResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SendAnnouncement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends an enrollment invitation email with a URL to a user. The URL is valid for 30 days or until you call this operation again, whichever comes first.
		 * Post #X-Amz-Target=AlexaForBusiness.SendInvitation
		 * @return {SendInvitationResponse} Success
		 */
		SendInvitation(requestBody: SendInvitationRequest): Observable<SendInvitationResponse> {
			return this.http.post<SendInvitationResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.SendInvitation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resets a device and its account to the known default settings. This clears all information and settings set by previous users in the following ways:</p> <ul> <li> <p>Bluetooth - This unpairs all bluetooth devices paired with your echo device.</p> </li> <li> <p>Volume - This resets the echo device's volume to the default value.</p> </li> <li> <p>Notifications - This clears all notifications from your echo device.</p> </li> <li> <p>Lists - This clears all to-do items from your echo device.</p> </li> <li> <p>Settings - This internally syncs the room's profile (if the device is assigned to a room), contacts, address books, delegation access for account linking, and communications (if enabled on the room profile).</p> </li> </ul>
		 * Post #X-Amz-Target=AlexaForBusiness.StartDeviceSync
		 * @return {StartDeviceSyncResponse} Success
		 */
		StartDeviceSync(requestBody: StartDeviceSyncRequest): Observable<StartDeviceSyncResponse> {
			return this.http.post<StartDeviceSyncResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.StartDeviceSync', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Initiates the discovery of any smart home appliances associated with the room.
		 * Post #X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery
		 * @return {StartSmartHomeApplianceDiscoveryResponse} Success
		 */
		StartSmartHomeApplianceDiscovery(requestBody: StartSmartHomeApplianceDiscoveryRequest): Observable<StartSmartHomeApplianceDiscoveryResponse> {
			return this.http.post<StartSmartHomeApplianceDiscoveryResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.StartSmartHomeApplianceDiscovery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds metadata tags to a specified resource.
		 * Post #X-Amz-Target=AlexaForBusiness.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes metadata tags from a specified resource.
		 * Post #X-Amz-Target=AlexaForBusiness.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates address book details by the address book ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateAddressBook
		 * @return {UpdateAddressBookResponse} Success
		 */
		UpdateAddressBook(requestBody: UpdateAddressBookRequest): Observable<UpdateAddressBookResponse> {
			return this.http.post<UpdateAddressBookResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateAddressBook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration of the report delivery schedule with the specified schedule ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule
		 * @return {UpdateBusinessReportScheduleResponse} Success
		 */
		UpdateBusinessReportSchedule(requestBody: UpdateBusinessReportScheduleRequest): Observable<UpdateBusinessReportScheduleResponse> {
			return this.http.post<UpdateBusinessReportScheduleResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateBusinessReportSchedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing conference provider's settings.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider
		 * @return {UpdateConferenceProviderResponse} Success
		 */
		UpdateConferenceProvider(requestBody: UpdateConferenceProviderRequest): Observable<UpdateConferenceProviderResponse> {
			return this.http.post<UpdateConferenceProviderResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateConferenceProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the contact details by the contact ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateContact
		 * @return {UpdateContactResponse} Success
		 */
		UpdateContact(requestBody: UpdateContactRequest): Observable<UpdateContactResponse> {
			return this.http.post<UpdateContactResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the device name by device ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateDevice
		 * @return {UpdateDeviceResponse} Success
		 */
		UpdateDevice(requestBody: UpdateDeviceRequest): Observable<UpdateDeviceResponse> {
			return this.http.post<UpdateDeviceResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the details of a gateway. If any optional field is not provided, the existing corresponding value is left unmodified.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateGateway
		 * @return {UpdateGatewayResponse} Success
		 */
		UpdateGateway(requestBody: UpdateGatewayRequest): Observable<UpdateGatewayResponse> {
			return this.http.post<UpdateGatewayResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateGateway', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the details of a gateway group. If any optional field is not provided, the existing corresponding value is left unmodified.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup
		 * @return {UpdateGatewayGroupResponse} Success
		 */
		UpdateGatewayGroup(requestBody: UpdateGatewayGroupRequest): Observable<UpdateGatewayGroupResponse> {
			return this.http.post<UpdateGatewayGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateGatewayGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a network profile by the network profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile
		 * @return {UpdateNetworkProfileResponse} Success
		 */
		UpdateNetworkProfile(requestBody: UpdateNetworkProfileRequest): Observable<UpdateNetworkProfileResponse> {
			return this.http.post<UpdateNetworkProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateNetworkProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing room profile by room profile ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateProfile
		 * @return {UpdateProfileResponse} Success
		 */
		UpdateProfile(requestBody: UpdateProfileRequest): Observable<UpdateProfileResponse> {
			return this.http.post<UpdateProfileResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates room details by room ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateRoom
		 * @return {UpdateRoomResponse} Success
		 */
		UpdateRoom(requestBody: UpdateRoomRequest): Observable<UpdateRoomResponse> {
			return this.http.post<UpdateRoomResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateRoom', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates skill group details by skill group ARN.
		 * Post #X-Amz-Target=AlexaForBusiness.UpdateSkillGroup
		 * @return {UpdateSkillGroupResponse} Success
		 */
		UpdateSkillGroup(requestBody: UpdateSkillGroupRequest): Observable<UpdateSkillGroupResponse> {
			return this.http.post<UpdateSkillGroupResponse>(this.baseUri + '#X-Amz-Target=AlexaForBusiness.UpdateSkillGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ApproveSkillX_Amz_Target { 'AlexaForBusiness.ApproveSkill' = 0 }

	export enum AssociateContactWithAddressBookX_Amz_Target { 'AlexaForBusiness.AssociateContactWithAddressBook' = 0 }

	export enum AssociateDeviceWithNetworkProfileX_Amz_Target { 'AlexaForBusiness.AssociateDeviceWithNetworkProfile' = 0 }

	export enum AssociateDeviceWithRoomX_Amz_Target { 'AlexaForBusiness.AssociateDeviceWithRoom' = 0 }

	export enum AssociateSkillGroupWithRoomX_Amz_Target { 'AlexaForBusiness.AssociateSkillGroupWithRoom' = 0 }

	export enum AssociateSkillWithSkillGroupX_Amz_Target { 'AlexaForBusiness.AssociateSkillWithSkillGroup' = 0 }

	export enum AssociateSkillWithUsersX_Amz_Target { 'AlexaForBusiness.AssociateSkillWithUsers' = 0 }

	export enum CreateAddressBookX_Amz_Target { 'AlexaForBusiness.CreateAddressBook' = 0 }

	export enum CreateBusinessReportScheduleX_Amz_Target { 'AlexaForBusiness.CreateBusinessReportSchedule' = 0 }

	export enum CreateConferenceProviderX_Amz_Target { 'AlexaForBusiness.CreateConferenceProvider' = 0 }

	export enum CreateContactX_Amz_Target { 'AlexaForBusiness.CreateContact' = 0 }

	export enum CreateGatewayGroupX_Amz_Target { 'AlexaForBusiness.CreateGatewayGroup' = 0 }

	export enum CreateNetworkProfileX_Amz_Target { 'AlexaForBusiness.CreateNetworkProfile' = 0 }

	export enum CreateProfileX_Amz_Target { 'AlexaForBusiness.CreateProfile' = 0 }

	export enum CreateRoomX_Amz_Target { 'AlexaForBusiness.CreateRoom' = 0 }

	export enum CreateSkillGroupX_Amz_Target { 'AlexaForBusiness.CreateSkillGroup' = 0 }

	export enum CreateUserX_Amz_Target { 'AlexaForBusiness.CreateUser' = 0 }

	export enum DeleteAddressBookX_Amz_Target { 'AlexaForBusiness.DeleteAddressBook' = 0 }

	export enum DeleteBusinessReportScheduleX_Amz_Target { 'AlexaForBusiness.DeleteBusinessReportSchedule' = 0 }

	export enum DeleteConferenceProviderX_Amz_Target { 'AlexaForBusiness.DeleteConferenceProvider' = 0 }

	export enum DeleteContactX_Amz_Target { 'AlexaForBusiness.DeleteContact' = 0 }

	export enum DeleteDeviceX_Amz_Target { 'AlexaForBusiness.DeleteDevice' = 0 }

	export enum DeleteDeviceUsageDataX_Amz_Target { 'AlexaForBusiness.DeleteDeviceUsageData' = 0 }

	export enum DeleteGatewayGroupX_Amz_Target { 'AlexaForBusiness.DeleteGatewayGroup' = 0 }

	export enum DeleteNetworkProfileX_Amz_Target { 'AlexaForBusiness.DeleteNetworkProfile' = 0 }

	export enum DeleteProfileX_Amz_Target { 'AlexaForBusiness.DeleteProfile' = 0 }

	export enum DeleteRoomX_Amz_Target { 'AlexaForBusiness.DeleteRoom' = 0 }

	export enum DeleteRoomSkillParameterX_Amz_Target { 'AlexaForBusiness.DeleteRoomSkillParameter' = 0 }

	export enum DeleteSkillAuthorizationX_Amz_Target { 'AlexaForBusiness.DeleteSkillAuthorization' = 0 }

	export enum DeleteSkillGroupX_Amz_Target { 'AlexaForBusiness.DeleteSkillGroup' = 0 }

	export enum DeleteUserX_Amz_Target { 'AlexaForBusiness.DeleteUser' = 0 }

	export enum DisassociateContactFromAddressBookX_Amz_Target { 'AlexaForBusiness.DisassociateContactFromAddressBook' = 0 }

	export enum DisassociateDeviceFromRoomX_Amz_Target { 'AlexaForBusiness.DisassociateDeviceFromRoom' = 0 }

	export enum DisassociateSkillFromSkillGroupX_Amz_Target { 'AlexaForBusiness.DisassociateSkillFromSkillGroup' = 0 }

	export enum DisassociateSkillFromUsersX_Amz_Target { 'AlexaForBusiness.DisassociateSkillFromUsers' = 0 }

	export enum DisassociateSkillGroupFromRoomX_Amz_Target { 'AlexaForBusiness.DisassociateSkillGroupFromRoom' = 0 }

	export enum ForgetSmartHomeAppliancesX_Amz_Target { 'AlexaForBusiness.ForgetSmartHomeAppliances' = 0 }

	export enum GetAddressBookX_Amz_Target { 'AlexaForBusiness.GetAddressBook' = 0 }

	export enum GetConferencePreferenceX_Amz_Target { 'AlexaForBusiness.GetConferencePreference' = 0 }

	export enum GetConferenceProviderX_Amz_Target { 'AlexaForBusiness.GetConferenceProvider' = 0 }

	export enum GetContactX_Amz_Target { 'AlexaForBusiness.GetContact' = 0 }

	export enum GetDeviceX_Amz_Target { 'AlexaForBusiness.GetDevice' = 0 }

	export enum GetGatewayX_Amz_Target { 'AlexaForBusiness.GetGateway' = 0 }

	export enum GetGatewayGroupX_Amz_Target { 'AlexaForBusiness.GetGatewayGroup' = 0 }

	export enum GetInvitationConfigurationX_Amz_Target { 'AlexaForBusiness.GetInvitationConfiguration' = 0 }

	export enum GetNetworkProfileX_Amz_Target { 'AlexaForBusiness.GetNetworkProfile' = 0 }

	export enum GetProfileX_Amz_Target { 'AlexaForBusiness.GetProfile' = 0 }

	export enum GetRoomX_Amz_Target { 'AlexaForBusiness.GetRoom' = 0 }

	export enum GetRoomSkillParameterX_Amz_Target { 'AlexaForBusiness.GetRoomSkillParameter' = 0 }

	export enum GetSkillGroupX_Amz_Target { 'AlexaForBusiness.GetSkillGroup' = 0 }

	export enum ListBusinessReportSchedulesX_Amz_Target { 'AlexaForBusiness.ListBusinessReportSchedules' = 0 }

	export enum ListConferenceProvidersX_Amz_Target { 'AlexaForBusiness.ListConferenceProviders' = 0 }

	export enum ListDeviceEventsX_Amz_Target { 'AlexaForBusiness.ListDeviceEvents' = 0 }

	export enum ListGatewayGroupsX_Amz_Target { 'AlexaForBusiness.ListGatewayGroups' = 0 }

	export enum ListGatewaysX_Amz_Target { 'AlexaForBusiness.ListGateways' = 0 }

	export enum ListSkillsX_Amz_Target { 'AlexaForBusiness.ListSkills' = 0 }

	export enum ListSkillsStoreCategoriesX_Amz_Target { 'AlexaForBusiness.ListSkillsStoreCategories' = 0 }

	export enum ListSkillsStoreSkillsByCategoryX_Amz_Target { 'AlexaForBusiness.ListSkillsStoreSkillsByCategory' = 0 }

	export enum ListSmartHomeAppliancesX_Amz_Target { 'AlexaForBusiness.ListSmartHomeAppliances' = 0 }

	export enum ListTagsX_Amz_Target { 'AlexaForBusiness.ListTags' = 0 }

	export enum PutConferencePreferenceX_Amz_Target { 'AlexaForBusiness.PutConferencePreference' = 0 }

	export enum PutInvitationConfigurationX_Amz_Target { 'AlexaForBusiness.PutInvitationConfiguration' = 0 }

	export enum PutRoomSkillParameterX_Amz_Target { 'AlexaForBusiness.PutRoomSkillParameter' = 0 }

	export enum PutSkillAuthorizationX_Amz_Target { 'AlexaForBusiness.PutSkillAuthorization' = 0 }

	export enum RegisterAVSDeviceX_Amz_Target { 'AlexaForBusiness.RegisterAVSDevice' = 0 }

	export enum RejectSkillX_Amz_Target { 'AlexaForBusiness.RejectSkill' = 0 }

	export enum ResolveRoomX_Amz_Target { 'AlexaForBusiness.ResolveRoom' = 0 }

	export enum RevokeInvitationX_Amz_Target { 'AlexaForBusiness.RevokeInvitation' = 0 }

	export enum SearchAddressBooksX_Amz_Target { 'AlexaForBusiness.SearchAddressBooks' = 0 }

	export enum SearchContactsX_Amz_Target { 'AlexaForBusiness.SearchContacts' = 0 }

	export enum SearchDevicesX_Amz_Target { 'AlexaForBusiness.SearchDevices' = 0 }

	export enum SearchNetworkProfilesX_Amz_Target { 'AlexaForBusiness.SearchNetworkProfiles' = 0 }

	export enum SearchProfilesX_Amz_Target { 'AlexaForBusiness.SearchProfiles' = 0 }

	export enum SearchRoomsX_Amz_Target { 'AlexaForBusiness.SearchRooms' = 0 }

	export enum SearchSkillGroupsX_Amz_Target { 'AlexaForBusiness.SearchSkillGroups' = 0 }

	export enum SearchUsersX_Amz_Target { 'AlexaForBusiness.SearchUsers' = 0 }

	export enum SendAnnouncementX_Amz_Target { 'AlexaForBusiness.SendAnnouncement' = 0 }

	export enum SendInvitationX_Amz_Target { 'AlexaForBusiness.SendInvitation' = 0 }

	export enum StartDeviceSyncX_Amz_Target { 'AlexaForBusiness.StartDeviceSync' = 0 }

	export enum StartSmartHomeApplianceDiscoveryX_Amz_Target { 'AlexaForBusiness.StartSmartHomeApplianceDiscovery' = 0 }

	export enum TagResourceX_Amz_Target { 'AlexaForBusiness.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AlexaForBusiness.UntagResource' = 0 }

	export enum UpdateAddressBookX_Amz_Target { 'AlexaForBusiness.UpdateAddressBook' = 0 }

	export enum UpdateBusinessReportScheduleX_Amz_Target { 'AlexaForBusiness.UpdateBusinessReportSchedule' = 0 }

	export enum UpdateConferenceProviderX_Amz_Target { 'AlexaForBusiness.UpdateConferenceProvider' = 0 }

	export enum UpdateContactX_Amz_Target { 'AlexaForBusiness.UpdateContact' = 0 }

	export enum UpdateDeviceX_Amz_Target { 'AlexaForBusiness.UpdateDevice' = 0 }

	export enum UpdateGatewayX_Amz_Target { 'AlexaForBusiness.UpdateGateway' = 0 }

	export enum UpdateGatewayGroupX_Amz_Target { 'AlexaForBusiness.UpdateGatewayGroup' = 0 }

	export enum UpdateNetworkProfileX_Amz_Target { 'AlexaForBusiness.UpdateNetworkProfile' = 0 }

	export enum UpdateProfileX_Amz_Target { 'AlexaForBusiness.UpdateProfile' = 0 }

	export enum UpdateRoomX_Amz_Target { 'AlexaForBusiness.UpdateRoom' = 0 }

	export enum UpdateSkillGroupX_Amz_Target { 'AlexaForBusiness.UpdateSkillGroup' = 0 }

}

