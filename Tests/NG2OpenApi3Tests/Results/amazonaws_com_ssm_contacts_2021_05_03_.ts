import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptPageResult {
	}
	export interface AcceptPageResultFormProperties {
	}
	export function CreateAcceptPageResultFormGroup() {
		return new FormGroup<AcceptPageResultFormProperties>({
		});

	}

	export interface AcceptPageRequest {

		/** Required */
		PageId: string;
		ContactChannelId?: string;

		/** Required */
		AcceptType: AcceptType;
		Note?: string;

		/** Required */
		AcceptCode: string;
		AcceptCodeValidation?: AcceptCodeValidation;
	}
	export interface AcceptPageRequestFormProperties {

		/** Required */
		PageId: FormControl<string | null | undefined>,
		ContactChannelId: FormControl<string | null | undefined>,

		/** Required */
		AcceptType: FormControl<AcceptType | null | undefined>,
		Note: FormControl<string | null | undefined>,

		/** Required */
		AcceptCode: FormControl<string | null | undefined>,
		AcceptCodeValidation: FormControl<AcceptCodeValidation | null | undefined>,
	}
	export function CreateAcceptPageRequestFormGroup() {
		return new FormGroup<AcceptPageRequestFormProperties>({
			PageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactChannelId: new FormControl<string | null | undefined>(undefined),
			AcceptType: new FormControl<AcceptType | null | undefined>(undefined, [Validators.required]),
			Note: new FormControl<string | null | undefined>(undefined),
			AcceptCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AcceptCodeValidation: new FormControl<AcceptCodeValidation | null | undefined>(undefined),
		});

	}

	export enum AcceptType { DELIVERED = 'DELIVERED', READ = 'READ' }

	export enum AcceptCodeValidation { IGNORE = 'IGNORE', ENFORCE = 'ENFORCE' }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ActivateContactChannelResult {
	}
	export interface ActivateContactChannelResultFormProperties {
	}
	export function CreateActivateContactChannelResultFormGroup() {
		return new FormGroup<ActivateContactChannelResultFormProperties>({
		});

	}

	export interface ActivateContactChannelRequest {

		/** Required */
		ContactChannelId: string;

		/** Required */
		ActivationCode: string;
	}
	export interface ActivateContactChannelRequestFormProperties {

		/** Required */
		ContactChannelId: FormControl<string | null | undefined>,

		/** Required */
		ActivationCode: FormControl<string | null | undefined>,
	}
	export function CreateActivateContactChannelRequestFormGroup() {
		return new FormGroup<ActivateContactChannelRequestFormProperties>({
			ContactChannelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ActivationCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateContactResult {

		/** Required */
		ContactArn: string;
	}
	export interface CreateContactResultFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactResultFormGroup() {
		return new FormGroup<CreateContactResultFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateContactRequest {

		/** Required */
		Alias: string;
		DisplayName?: string;

		/** Required */
		Type: ContactType;

		/** Required */
		Plan: Plan;
		Tags?: Array<Tag>;
		IdempotencyToken?: string;
	}
	export interface CreateContactRequestFormProperties {

		/** Required */
		Alias: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ContactType | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactRequestFormGroup() {
		return new FormGroup<CreateContactRequestFormProperties>({
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContactType | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContactType { PERSONAL = 'PERSONAL', ESCALATION = 'ESCALATION', ONCALL_SCHEDULE = 'ONCALL_SCHEDULE' }


	/** Information about the stages and on-call rotation teams associated with an escalation plan or engagement plan.  */
	export interface Plan {
		Stages?: Array<Stage>;
		RotationIds?: Array<string>;
	}

	/** Information about the stages and on-call rotation teams associated with an escalation plan or engagement plan.  */
	export interface PlanFormProperties {
	}
	export function CreatePlanFormGroup() {
		return new FormGroup<PlanFormProperties>({
		});

	}


	/** A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods. */
	export interface Stage {

		/** Required */
		DurationInMinutes: number;

		/** Required */
		Targets: Array<Target>;
	}

	/** A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods. */
	export interface StageFormProperties {

		/** Required */
		DurationInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateStageFormGroup() {
		return new FormGroup<StageFormProperties>({
			DurationInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The contact or contact channel that's being engaged. */
	export interface Target {
		ChannelTargetInfo?: ChannelTargetInfo;
		ContactTargetInfo?: ContactTargetInfo;
	}

	/** The contact or contact channel that's being engaged. */
	export interface TargetFormProperties {
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
		});

	}


	/** Information about the contact channel that Incident Manager uses to engage the contact. */
	export interface ChannelTargetInfo {

		/** Required */
		ContactChannelId: string;
		RetryIntervalInMinutes?: number | null;
	}

	/** Information about the contact channel that Incident Manager uses to engage the contact. */
	export interface ChannelTargetInfoFormProperties {

		/** Required */
		ContactChannelId: FormControl<string | null | undefined>,
		RetryIntervalInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateChannelTargetInfoFormGroup() {
		return new FormGroup<ChannelTargetInfoFormProperties>({
			ContactChannelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RetryIntervalInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The contact that Incident Manager is engaging during an incident. */
	export interface ContactTargetInfo {
		ContactId?: string;

		/** Required */
		IsEssential: boolean;
	}

	/** The contact that Incident Manager is engaging during an incident. */
	export interface ContactTargetInfoFormProperties {
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		IsEssential: FormControl<boolean | null | undefined>,
	}
	export function CreateContactTargetInfoFormGroup() {
		return new FormGroup<ContactTargetInfoFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined),
			IsEssential: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A container of a key-value name pair. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** A container of a key-value name pair. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface DataEncryptionException {
	}
	export interface DataEncryptionExceptionFormProperties {
	}
	export function CreateDataEncryptionExceptionFormGroup() {
		return new FormGroup<DataEncryptionExceptionFormProperties>({
		});

	}

	export interface CreateContactChannelResult {

		/** Required */
		ContactChannelArn: string;
	}
	export interface CreateContactChannelResultFormProperties {

		/** Required */
		ContactChannelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactChannelResultFormGroup() {
		return new FormGroup<CreateContactChannelResultFormProperties>({
			ContactChannelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateContactChannelRequest {

		/** Required */
		ContactId: string;

		/** Required */
		Name: string;

		/** Required */
		Type: ChannelType;

		/** Required */
		DeliveryAddress: ContactChannelAddress;
		DeferActivation?: boolean | null;
		IdempotencyToken?: string;
	}
	export interface CreateContactChannelRequestFormProperties {

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ChannelType | null | undefined>,
		DeferActivation: FormControl<boolean | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateContactChannelRequestFormGroup() {
		return new FormGroup<CreateContactChannelRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ChannelType | null | undefined>(undefined, [Validators.required]),
			DeferActivation: new FormControl<boolean | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelType { SMS = 'SMS', VOICE = 'VOICE', EMAIL = 'EMAIL' }


	/** The details that Incident Manager uses when trying to engage the contact channel. */
	export interface ContactChannelAddress {
		SimpleAddress?: string;
	}

	/** The details that Incident Manager uses when trying to engage the contact channel. */
	export interface ContactChannelAddressFormProperties {
		SimpleAddress: FormControl<string | null | undefined>,
	}
	export function CreateContactChannelAddressFormGroup() {
		return new FormGroup<ContactChannelAddressFormProperties>({
			SimpleAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRotationResult {

		/** Required */
		RotationArn: string;
	}
	export interface CreateRotationResultFormProperties {

		/** Required */
		RotationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateRotationResultFormGroup() {
		return new FormGroup<CreateRotationResultFormProperties>({
			RotationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRotationRequest {

		/** Required */
		Name: string;

		/** Required */
		ContactIds: Array<string>;
		StartTime?: Date;

		/** Required */
		TimeZoneId: string;

		/** Required */
		Recurrence: RecurrenceSettings;
		Tags?: Array<Tag>;
		IdempotencyToken?: string;
	}
	export interface CreateRotationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		TimeZoneId: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRotationRequestFormGroup() {
		return new FormGroup<CreateRotationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			TimeZoneId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about when an on-call rotation is in effect and how long the rotation period lasts. */
	export interface RecurrenceSettings {
		MonthlySettings?: Array<MonthlySetting>;
		WeeklySettings?: Array<WeeklySetting>;
		DailySettings?: Array<HandOffTime>;

		/** Required */
		NumberOfOnCalls: number;
		ShiftCoverages?: ShiftCoveragesMap;

		/** Required */
		RecurrenceMultiplier: number;
	}

	/** Information about when an on-call rotation is in effect and how long the rotation period lasts. */
	export interface RecurrenceSettingsFormProperties {

		/** Required */
		NumberOfOnCalls: FormControl<number | null | undefined>,

		/** Required */
		RecurrenceMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateRecurrenceSettingsFormGroup() {
		return new FormGroup<RecurrenceSettingsFormProperties>({
			NumberOfOnCalls: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RecurrenceMultiplier: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about on-call rotations that recur monthly. */
	export interface MonthlySetting {

		/** Required */
		DayOfMonth: number;

		/** Required */
		HandOffTime: HandOffTime;
	}

	/** Information about on-call rotations that recur monthly. */
	export interface MonthlySettingFormProperties {

		/** Required */
		DayOfMonth: FormControl<number | null | undefined>,
	}
	export function CreateMonthlySettingFormGroup() {
		return new FormGroup<MonthlySettingFormProperties>({
			DayOfMonth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about when an on-call rotation shift begins or ends. */
	export interface HandOffTime {

		/** Required */
		HourOfDay: number;

		/** Required */
		MinuteOfHour: number;
	}

	/** Details about when an on-call rotation shift begins or ends. */
	export interface HandOffTimeFormProperties {

		/** Required */
		HourOfDay: FormControl<number | null | undefined>,

		/** Required */
		MinuteOfHour: FormControl<number | null | undefined>,
	}
	export function CreateHandOffTimeFormGroup() {
		return new FormGroup<HandOffTimeFormProperties>({
			HourOfDay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MinuteOfHour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about rotations that recur weekly. */
	export interface WeeklySetting {

		/** Required */
		DayOfWeek: DayOfWeek;

		/** Required */
		HandOffTime: HandOffTime;
	}

	/** Information about rotations that recur weekly. */
	export interface WeeklySettingFormProperties {

		/** Required */
		DayOfWeek: FormControl<DayOfWeek | null | undefined>,
	}
	export function CreateWeeklySettingFormGroup() {
		return new FormGroup<WeeklySettingFormProperties>({
			DayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DayOfWeek { MON = 'MON', TUE = 'TUE', WED = 'WED', THU = 'THU', FRI = 'FRI', SAT = 'SAT', SUN = 'SUN' }

	export interface ShiftCoveragesMap {
	}
	export interface ShiftCoveragesMapFormProperties {
	}
	export function CreateShiftCoveragesMapFormGroup() {
		return new FormGroup<ShiftCoveragesMapFormProperties>({
		});

	}

	export interface CreateRotationOverrideResult {

		/** Required */
		RotationOverrideId: string;
	}
	export interface CreateRotationOverrideResultFormProperties {

		/** Required */
		RotationOverrideId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRotationOverrideResultFormGroup() {
		return new FormGroup<CreateRotationOverrideResultFormProperties>({
			RotationOverrideId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRotationOverrideRequest {

		/** Required */
		RotationId: string;

		/** Required */
		NewContactIds: Array<string>;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
		IdempotencyToken?: string;
	}
	export interface CreateRotationOverrideRequestFormProperties {

		/** Required */
		RotationId: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRotationOverrideRequestFormGroup() {
		return new FormGroup<CreateRotationOverrideRequestFormProperties>({
			RotationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeactivateContactChannelResult {
	}
	export interface DeactivateContactChannelResultFormProperties {
	}
	export function CreateDeactivateContactChannelResultFormGroup() {
		return new FormGroup<DeactivateContactChannelResultFormProperties>({
		});

	}

	export interface DeactivateContactChannelRequest {

		/** Required */
		ContactChannelId: string;
	}
	export interface DeactivateContactChannelRequestFormProperties {

		/** Required */
		ContactChannelId: FormControl<string | null | undefined>,
	}
	export function CreateDeactivateContactChannelRequestFormGroup() {
		return new FormGroup<DeactivateContactChannelRequestFormProperties>({
			ContactChannelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteContactResult {
	}
	export interface DeleteContactResultFormProperties {
	}
	export function CreateDeleteContactResultFormGroup() {
		return new FormGroup<DeleteContactResultFormProperties>({
		});

	}

	export interface DeleteContactRequest {

		/** Required */
		ContactId: string;
	}
	export interface DeleteContactRequestFormProperties {

		/** Required */
		ContactId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteContactRequestFormGroup() {
		return new FormGroup<DeleteContactRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteContactChannelResult {
	}
	export interface DeleteContactChannelResultFormProperties {
	}
	export function CreateDeleteContactChannelResultFormGroup() {
		return new FormGroup<DeleteContactChannelResultFormProperties>({
		});

	}

	export interface DeleteContactChannelRequest {

		/** Required */
		ContactChannelId: string;
	}
	export interface DeleteContactChannelRequestFormProperties {

		/** Required */
		ContactChannelId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteContactChannelRequestFormGroup() {
		return new FormGroup<DeleteContactChannelRequestFormProperties>({
			ContactChannelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRotationResult {
	}
	export interface DeleteRotationResultFormProperties {
	}
	export function CreateDeleteRotationResultFormGroup() {
		return new FormGroup<DeleteRotationResultFormProperties>({
		});

	}

	export interface DeleteRotationRequest {

		/** Required */
		RotationId: string;
	}
	export interface DeleteRotationRequestFormProperties {

		/** Required */
		RotationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRotationRequestFormGroup() {
		return new FormGroup<DeleteRotationRequestFormProperties>({
			RotationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRotationOverrideResult {
	}
	export interface DeleteRotationOverrideResultFormProperties {
	}
	export function CreateDeleteRotationOverrideResultFormGroup() {
		return new FormGroup<DeleteRotationOverrideResultFormProperties>({
		});

	}

	export interface DeleteRotationOverrideRequest {

		/** Required */
		RotationId: string;

		/** Required */
		RotationOverrideId: string;
	}
	export interface DeleteRotationOverrideRequestFormProperties {

		/** Required */
		RotationId: FormControl<string | null | undefined>,

		/** Required */
		RotationOverrideId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRotationOverrideRequestFormGroup() {
		return new FormGroup<DeleteRotationOverrideRequestFormProperties>({
			RotationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RotationOverrideId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEngagementResult {

		/** Required */
		ContactArn: string;

		/** Required */
		EngagementArn: string;

		/** Required */
		Sender: string;

		/** Required */
		Subject: string;

		/** Required */
		Content: string;
		PublicSubject?: string;
		PublicContent?: string;
		IncidentId?: string;
		StartTime?: Date;
		StopTime?: Date;
	}
	export interface DescribeEngagementResultFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		EngagementArn: FormControl<string | null | undefined>,

		/** Required */
		Sender: FormControl<string | null | undefined>,

		/** Required */
		Subject: FormControl<string | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,
		PublicSubject: FormControl<string | null | undefined>,
		PublicContent: FormControl<string | null | undefined>,
		IncidentId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		StopTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeEngagementResultFormGroup() {
		return new FormGroup<DescribeEngagementResultFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngagementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Sender: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublicSubject: new FormControl<string | null | undefined>(undefined),
			PublicContent: new FormControl<string | null | undefined>(undefined),
			IncidentId: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			StopTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeEngagementRequest {

		/** Required */
		EngagementId: string;
	}
	export interface DescribeEngagementRequestFormProperties {

		/** Required */
		EngagementId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEngagementRequestFormGroup() {
		return new FormGroup<DescribeEngagementRequestFormProperties>({
			EngagementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePageResult {

		/** Required */
		PageArn: string;

		/** Required */
		EngagementArn: string;

		/** Required */
		ContactArn: string;

		/** Required */
		Sender: string;

		/** Required */
		Subject: string;

		/** Required */
		Content: string;
		PublicSubject?: string;
		PublicContent?: string;
		IncidentId?: string;
		SentTime?: Date;
		ReadTime?: Date;
		DeliveryTime?: Date;
	}
	export interface DescribePageResultFormProperties {

		/** Required */
		PageArn: FormControl<string | null | undefined>,

		/** Required */
		EngagementArn: FormControl<string | null | undefined>,

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		Sender: FormControl<string | null | undefined>,

		/** Required */
		Subject: FormControl<string | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,
		PublicSubject: FormControl<string | null | undefined>,
		PublicContent: FormControl<string | null | undefined>,
		IncidentId: FormControl<string | null | undefined>,
		SentTime: FormControl<Date | null | undefined>,
		ReadTime: FormControl<Date | null | undefined>,
		DeliveryTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribePageResultFormGroup() {
		return new FormGroup<DescribePageResultFormProperties>({
			PageArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngagementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Sender: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublicSubject: new FormControl<string | null | undefined>(undefined),
			PublicContent: new FormControl<string | null | undefined>(undefined),
			IncidentId: new FormControl<string | null | undefined>(undefined),
			SentTime: new FormControl<Date | null | undefined>(undefined),
			ReadTime: new FormControl<Date | null | undefined>(undefined),
			DeliveryTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribePageRequest {

		/** Required */
		PageId: string;
	}
	export interface DescribePageRequestFormProperties {

		/** Required */
		PageId: FormControl<string | null | undefined>,
	}
	export function CreateDescribePageRequestFormGroup() {
		return new FormGroup<DescribePageRequestFormProperties>({
			PageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContactResult {

		/** Required */
		ContactArn: string;

		/** Required */
		Alias: string;
		DisplayName?: string;

		/** Required */
		Type: ContactType;

		/** Required */
		Plan: Plan;
	}
	export interface GetContactResultFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		Alias: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ContactType | null | undefined>,
	}
	export function CreateGetContactResultFormGroup() {
		return new FormGroup<GetContactResultFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContactType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContactRequest {

		/** Required */
		ContactId: string;
	}
	export interface GetContactRequestFormProperties {

		/** Required */
		ContactId: FormControl<string | null | undefined>,
	}
	export function CreateGetContactRequestFormGroup() {
		return new FormGroup<GetContactRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContactChannelResult {

		/** Required */
		ContactArn: string;

		/** Required */
		ContactChannelArn: string;

		/** Required */
		Name: string;

		/** Required */
		Type: ChannelType;

		/** Required */
		DeliveryAddress: ContactChannelAddress;
		ActivationStatus?: ActivationStatus;
	}
	export interface GetContactChannelResultFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		ContactChannelArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ChannelType | null | undefined>,
		ActivationStatus: FormControl<ActivationStatus | null | undefined>,
	}
	export function CreateGetContactChannelResultFormGroup() {
		return new FormGroup<GetContactChannelResultFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactChannelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ChannelType | null | undefined>(undefined, [Validators.required]),
			ActivationStatus: new FormControl<ActivationStatus | null | undefined>(undefined),
		});

	}

	export enum ActivationStatus { ACTIVATED = 'ACTIVATED', NOT_ACTIVATED = 'NOT_ACTIVATED' }

	export interface GetContactChannelRequest {

		/** Required */
		ContactChannelId: string;
	}
	export interface GetContactChannelRequestFormProperties {

		/** Required */
		ContactChannelId: FormControl<string | null | undefined>,
	}
	export function CreateGetContactChannelRequestFormGroup() {
		return new FormGroup<GetContactChannelRequestFormProperties>({
			ContactChannelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContactPolicyResult {
		ContactArn?: string;
		Policy?: string;
	}
	export interface GetContactPolicyResultFormProperties {
		ContactArn: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetContactPolicyResultFormGroup() {
		return new FormGroup<GetContactPolicyResultFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetContactPolicyRequest {

		/** Required */
		ContactArn: string;
	}
	export interface GetContactPolicyRequestFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,
	}
	export function CreateGetContactPolicyRequestFormGroup() {
		return new FormGroup<GetContactPolicyRequestFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRotationResult {

		/** Required */
		RotationArn: string;

		/** Required */
		Name: string;

		/** Required */
		ContactIds: Array<string>;

		/** Required */
		StartTime: Date;

		/** Required */
		TimeZoneId: string;

		/** Required */
		Recurrence: RecurrenceSettings;
	}
	export interface GetRotationResultFormProperties {

		/** Required */
		RotationArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		TimeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateGetRotationResultFormGroup() {
		return new FormGroup<GetRotationResultFormProperties>({
			RotationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TimeZoneId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRotationRequest {

		/** Required */
		RotationId: string;
	}
	export interface GetRotationRequestFormProperties {

		/** Required */
		RotationId: FormControl<string | null | undefined>,
	}
	export function CreateGetRotationRequestFormGroup() {
		return new FormGroup<GetRotationRequestFormProperties>({
			RotationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRotationOverrideResult {
		RotationOverrideId?: string;
		RotationArn?: string;
		NewContactIds?: Array<string>;
		StartTime?: Date;
		EndTime?: Date;
		CreateTime?: Date;
	}
	export interface GetRotationOverrideResultFormProperties {
		RotationOverrideId: FormControl<string | null | undefined>,
		RotationArn: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		CreateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetRotationOverrideResultFormGroup() {
		return new FormGroup<GetRotationOverrideResultFormProperties>({
			RotationOverrideId: new FormControl<string | null | undefined>(undefined),
			RotationArn: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			CreateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetRotationOverrideRequest {

		/** Required */
		RotationId: string;

		/** Required */
		RotationOverrideId: string;
	}
	export interface GetRotationOverrideRequestFormProperties {

		/** Required */
		RotationId: FormControl<string | null | undefined>,

		/** Required */
		RotationOverrideId: FormControl<string | null | undefined>,
	}
	export function CreateGetRotationOverrideRequestFormGroup() {
		return new FormGroup<GetRotationOverrideRequestFormProperties>({
			RotationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RotationOverrideId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListContactChannelsResult {
		NextToken?: string;

		/** Required */
		ContactChannels: Array<ContactChannel>;
	}
	export interface ListContactChannelsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContactChannelsResultFormGroup() {
		return new FormGroup<ListContactChannelsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The method that Incident Manager uses to engage a contact. */
	export interface ContactChannel {

		/** Required */
		ContactChannelArn: string;

		/** Required */
		ContactArn: string;

		/** Required */
		Name: string;
		Type?: ChannelType;

		/** Required */
		DeliveryAddress: ContactChannelAddress;

		/** Required */
		ActivationStatus: ActivationStatus;
	}

	/** The method that Incident Manager uses to engage a contact. */
	export interface ContactChannelFormProperties {

		/** Required */
		ContactChannelArn: FormControl<string | null | undefined>,

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<ChannelType | null | undefined>,

		/** Required */
		ActivationStatus: FormControl<ActivationStatus | null | undefined>,
	}
	export function CreateContactChannelFormGroup() {
		return new FormGroup<ContactChannelFormProperties>({
			ContactChannelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ChannelType | null | undefined>(undefined),
			ActivationStatus: new FormControl<ActivationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListContactChannelsRequest {

		/** Required */
		ContactId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListContactChannelsRequestFormProperties {

		/** Required */
		ContactId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListContactChannelsRequestFormGroup() {
		return new FormGroup<ListContactChannelsRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListContactsResult {
		NextToken?: string;
		Contacts?: Array<Contact>;
	}
	export interface ListContactsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContactsResultFormGroup() {
		return new FormGroup<ListContactsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A personal contact or escalation plan that Incident Manager engages during an incident. */
	export interface Contact {

		/** Required */
		ContactArn: string;

		/** Required */
		Alias: string;
		DisplayName?: string;

		/** Required */
		Type: ContactType;
	}

	/** A personal contact or escalation plan that Incident Manager engages during an incident. */
	export interface ContactFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		Alias: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ContactType | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContactType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListContactsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		AliasPrefix?: string;
		Type?: ContactType;
	}
	export interface ListContactsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		AliasPrefix: FormControl<string | null | undefined>,
		Type: FormControl<ContactType | null | undefined>,
	}
	export function CreateListContactsRequestFormGroup() {
		return new FormGroup<ListContactsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			AliasPrefix: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ContactType | null | undefined>(undefined),
		});

	}

	export interface ListEngagementsResult {
		NextToken?: string;

		/** Required */
		Engagements: Array<Engagement>;
	}
	export interface ListEngagementsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEngagementsResultFormGroup() {
		return new FormGroup<ListEngagementsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Incident Manager reaching out to a contact or escalation plan to engage contact during an incident. */
	export interface Engagement {

		/** Required */
		EngagementArn: string;

		/** Required */
		ContactArn: string;

		/** Required */
		Sender: string;
		IncidentId?: string;
		StartTime?: Date;
		StopTime?: Date;
	}

	/** Incident Manager reaching out to a contact or escalation plan to engage contact during an incident. */
	export interface EngagementFormProperties {

		/** Required */
		EngagementArn: FormControl<string | null | undefined>,

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		Sender: FormControl<string | null | undefined>,
		IncidentId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		StopTime: FormControl<Date | null | undefined>,
	}
	export function CreateEngagementFormGroup() {
		return new FormGroup<EngagementFormProperties>({
			EngagementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Sender: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IncidentId: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			StopTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEngagementsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		IncidentId?: string;
		TimeRangeValue?: TimeRange;
	}
	export interface ListEngagementsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		IncidentId: FormControl<string | null | undefined>,
	}
	export function CreateListEngagementsRequestFormGroup() {
		return new FormGroup<ListEngagementsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			IncidentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A range of between two set times */
	export interface TimeRange {
		StartTime?: Date;
		EndTime?: Date;
	}

	/** A range of between two set times */
	export interface TimeRangeFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateTimeRangeFormGroup() {
		return new FormGroup<TimeRangeFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPageReceiptsResult {
		NextToken?: string;
		Receipts?: Array<Receipt>;
	}
	export interface ListPageReceiptsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPageReceiptsResultFormGroup() {
		return new FormGroup<ListPageReceiptsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Records events during an engagement. */
	export interface Receipt {
		ContactChannelArn?: string;

		/** Required */
		ReceiptType: ReceiptType;
		ReceiptInfo?: string;

		/** Required */
		ReceiptTime: Date;
	}

	/** Records events during an engagement. */
	export interface ReceiptFormProperties {
		ContactChannelArn: FormControl<string | null | undefined>,

		/** Required */
		ReceiptType: FormControl<ReceiptType | null | undefined>,
		ReceiptInfo: FormControl<string | null | undefined>,

		/** Required */
		ReceiptTime: FormControl<Date | null | undefined>,
	}
	export function CreateReceiptFormGroup() {
		return new FormGroup<ReceiptFormProperties>({
			ContactChannelArn: new FormControl<string | null | undefined>(undefined),
			ReceiptType: new FormControl<ReceiptType | null | undefined>(undefined, [Validators.required]),
			ReceiptInfo: new FormControl<string | null | undefined>(undefined),
			ReceiptTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReceiptType { DELIVERED = 'DELIVERED', ERROR = 'ERROR', READ = 'READ', SENT = 'SENT', STOP = 'STOP' }

	export interface ListPageReceiptsRequest {

		/** Required */
		PageId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPageReceiptsRequestFormProperties {

		/** Required */
		PageId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPageReceiptsRequestFormGroup() {
		return new FormGroup<ListPageReceiptsRequestFormProperties>({
			PageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPageResolutionsResult {
		NextToken?: string;

		/** Required */
		PageResolutions: Array<ResolutionContact>;
	}
	export interface ListPageResolutionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPageResolutionsResultFormGroup() {
		return new FormGroup<ListPageResolutionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about the engagement resolution steps. The resolution starts from the first contact, which can be an escalation plan, then resolves to an on-call rotation, and finally to a personal contact.</p> <p>The <code>ResolutionContact</code> structure describes the information for each node or step in that process. It contains information about different contact types, such as the escalation, rotation, and personal contacts.</p> */
	export interface ResolutionContact {

		/** Required */
		ContactArn: string;

		/** Required */
		Type: ContactType;
		StageIndex?: number | null;
	}

	/** <p>Information about the engagement resolution steps. The resolution starts from the first contact, which can be an escalation plan, then resolves to an on-call rotation, and finally to a personal contact.</p> <p>The <code>ResolutionContact</code> structure describes the information for each node or step in that process. It contains information about different contact types, such as the escalation, rotation, and personal contacts.</p> */
	export interface ResolutionContactFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ContactType | null | undefined>,
		StageIndex: FormControl<number | null | undefined>,
	}
	export function CreateResolutionContactFormGroup() {
		return new FormGroup<ResolutionContactFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ContactType | null | undefined>(undefined, [Validators.required]),
			StageIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPageResolutionsRequest {
		NextToken?: string;

		/** Required */
		PageId: string;
	}
	export interface ListPageResolutionsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		PageId: FormControl<string | null | undefined>,
	}
	export function CreateListPageResolutionsRequestFormGroup() {
		return new FormGroup<ListPageResolutionsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			PageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPagesByContactResult {
		NextToken?: string;

		/** Required */
		Pages: Array<Page>;
	}
	export interface ListPagesByContactResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPagesByContactResultFormGroup() {
		return new FormGroup<ListPagesByContactResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Incident Manager engaging a contact's contact channel. */
	export interface Page {

		/** Required */
		PageArn: string;

		/** Required */
		EngagementArn: string;

		/** Required */
		ContactArn: string;

		/** Required */
		Sender: string;
		IncidentId?: string;
		SentTime?: Date;
		DeliveryTime?: Date;
		ReadTime?: Date;
	}

	/** Incident Manager engaging a contact's contact channel. */
	export interface PageFormProperties {

		/** Required */
		PageArn: FormControl<string | null | undefined>,

		/** Required */
		EngagementArn: FormControl<string | null | undefined>,

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		Sender: FormControl<string | null | undefined>,
		IncidentId: FormControl<string | null | undefined>,
		SentTime: FormControl<Date | null | undefined>,
		DeliveryTime: FormControl<Date | null | undefined>,
		ReadTime: FormControl<Date | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			PageArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EngagementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Sender: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IncidentId: new FormControl<string | null | undefined>(undefined),
			SentTime: new FormControl<Date | null | undefined>(undefined),
			DeliveryTime: new FormControl<Date | null | undefined>(undefined),
			ReadTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPagesByContactRequest {

		/** Required */
		ContactId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPagesByContactRequestFormProperties {

		/** Required */
		ContactId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPagesByContactRequestFormGroup() {
		return new FormGroup<ListPagesByContactRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPagesByEngagementResult {
		NextToken?: string;

		/** Required */
		Pages: Array<Page>;
	}
	export interface ListPagesByEngagementResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPagesByEngagementResultFormGroup() {
		return new FormGroup<ListPagesByEngagementResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPagesByEngagementRequest {

		/** Required */
		EngagementId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPagesByEngagementRequestFormProperties {

		/** Required */
		EngagementId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPagesByEngagementRequestFormGroup() {
		return new FormGroup<ListPagesByEngagementRequestFormProperties>({
			EngagementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPreviewRotationShiftsResult {
		RotationShifts?: Array<RotationShift>;
		NextToken?: string;
	}
	export interface ListPreviewRotationShiftsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPreviewRotationShiftsResultFormGroup() {
		return new FormGroup<ListPreviewRotationShiftsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a shift that belongs to an on-call rotation. */
	export interface RotationShift {
		ContactIds?: Array<string>;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
		Type?: ShiftType;
		ShiftDetails?: ShiftDetails;
	}

	/** Information about a shift that belongs to an on-call rotation. */
	export interface RotationShiftFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		Type: FormControl<ShiftType | null | undefined>,
	}
	export function CreateRotationShiftFormGroup() {
		return new FormGroup<RotationShiftFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ShiftType | null | undefined>(undefined),
		});

	}

	export enum ShiftType { REGULAR = 'REGULAR', OVERRIDDEN = 'OVERRIDDEN' }


	/** Information about overrides to an on-call rotation shift. */
	export interface ShiftDetails {

		/** Required */
		OverriddenContactIds: Array<string>;
	}

	/** Information about overrides to an on-call rotation shift. */
	export interface ShiftDetailsFormProperties {
	}
	export function CreateShiftDetailsFormGroup() {
		return new FormGroup<ShiftDetailsFormProperties>({
		});

	}

	export interface ListPreviewRotationShiftsRequest {
		RotationStartTime?: Date;
		StartTime?: Date;

		/** Required */
		EndTime: Date;

		/** Required */
		Members: Array<string>;

		/** Required */
		TimeZoneId: string;

		/** Required */
		Recurrence: RecurrenceSettings;
		Overrides?: Array<PreviewOverride>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPreviewRotationShiftsRequestFormProperties {
		RotationStartTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		TimeZoneId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPreviewRotationShiftsRequestFormGroup() {
		return new FormGroup<ListPreviewRotationShiftsRequestFormProperties>({
			RotationStartTime: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TimeZoneId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about contacts and times that an on-call override replaces. */
	export interface PreviewOverride {
		NewMembers?: Array<string>;
		StartTime?: Date;
		EndTime?: Date;
	}

	/** Information about contacts and times that an on-call override replaces. */
	export interface PreviewOverrideFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreatePreviewOverrideFormGroup() {
		return new FormGroup<PreviewOverrideFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRotationOverridesResult {
		RotationOverrides?: Array<RotationOverride>;
		NextToken?: string;
	}
	export interface ListRotationOverridesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRotationOverridesResultFormGroup() {
		return new FormGroup<ListRotationOverridesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an override specified for an on-call rotation. */
	export interface RotationOverride {

		/** Required */
		RotationOverrideId: string;

		/** Required */
		NewContactIds: Array<string>;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;

		/** Required */
		CreateTime: Date;
	}

	/** Information about an override specified for an on-call rotation. */
	export interface RotationOverrideFormProperties {

		/** Required */
		RotationOverrideId: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		CreateTime: FormControl<Date | null | undefined>,
	}
	export function CreateRotationOverrideFormGroup() {
		return new FormGroup<RotationOverrideFormProperties>({
			RotationOverrideId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CreateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRotationOverridesRequest {

		/** Required */
		RotationId: string;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListRotationOverridesRequestFormProperties {

		/** Required */
		RotationId: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRotationOverridesRequestFormGroup() {
		return new FormGroup<ListRotationOverridesRequestFormProperties>({
			RotationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRotationShiftsResult {
		RotationShifts?: Array<RotationShift>;
		NextToken?: string;
	}
	export interface ListRotationShiftsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRotationShiftsResultFormGroup() {
		return new FormGroup<ListRotationShiftsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRotationShiftsRequest {

		/** Required */
		RotationId: string;
		StartTime?: Date;

		/** Required */
		EndTime: Date;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListRotationShiftsRequestFormProperties {

		/** Required */
		RotationId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRotationShiftsRequestFormGroup() {
		return new FormGroup<ListRotationShiftsRequestFormProperties>({
			RotationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRotationsResult {
		NextToken?: string;

		/** Required */
		Rotations: Array<Rotation>;
	}
	export interface ListRotationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRotationsResultFormGroup() {
		return new FormGroup<ListRotationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a rotation in an on-call schedule. */
	export interface Rotation {

		/** Required */
		RotationArn: string;

		/** Required */
		Name: string;
		ContactIds?: Array<string>;
		StartTime?: Date;
		TimeZoneId?: string;
		Recurrence?: RecurrenceSettings;
	}

	/** Information about a rotation in an on-call schedule. */
	export interface RotationFormProperties {

		/** Required */
		RotationArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		TimeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateRotationFormGroup() {
		return new FormGroup<RotationFormProperties>({
			RotationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			TimeZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRotationsRequest {
		RotationNamePrefix?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListRotationsRequestFormProperties {
		RotationNamePrefix: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRotationsRequestFormGroup() {
		return new FormGroup<ListRotationsRequestFormProperties>({
			RotationNamePrefix: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResult {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResultFormProperties {
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutContactPolicyResult {
	}
	export interface PutContactPolicyResultFormProperties {
	}
	export function CreatePutContactPolicyResultFormGroup() {
		return new FormGroup<PutContactPolicyResultFormProperties>({
		});

	}

	export interface PutContactPolicyRequest {

		/** Required */
		ContactArn: string;

		/** Required */
		Policy: string;
	}
	export interface PutContactPolicyRequestFormProperties {

		/** Required */
		ContactArn: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutContactPolicyRequestFormGroup() {
		return new FormGroup<PutContactPolicyRequestFormProperties>({
			ContactArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendActivationCodeResult {
	}
	export interface SendActivationCodeResultFormProperties {
	}
	export function CreateSendActivationCodeResultFormGroup() {
		return new FormGroup<SendActivationCodeResultFormProperties>({
		});

	}

	export interface SendActivationCodeRequest {

		/** Required */
		ContactChannelId: string;
	}
	export interface SendActivationCodeRequestFormProperties {

		/** Required */
		ContactChannelId: FormControl<string | null | undefined>,
	}
	export function CreateSendActivationCodeRequestFormGroup() {
		return new FormGroup<SendActivationCodeRequestFormProperties>({
			ContactChannelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartEngagementResult {

		/** Required */
		EngagementArn: string;
	}
	export interface StartEngagementResultFormProperties {

		/** Required */
		EngagementArn: FormControl<string | null | undefined>,
	}
	export function CreateStartEngagementResultFormGroup() {
		return new FormGroup<StartEngagementResultFormProperties>({
			EngagementArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartEngagementRequest {

		/** Required */
		ContactId: string;

		/** Required */
		Sender: string;

		/** Required */
		Subject: string;

		/** Required */
		Content: string;
		PublicSubject?: string;
		PublicContent?: string;
		IncidentId?: string;
		IdempotencyToken?: string;
	}
	export interface StartEngagementRequestFormProperties {

		/** Required */
		ContactId: FormControl<string | null | undefined>,

		/** Required */
		Sender: FormControl<string | null | undefined>,

		/** Required */
		Subject: FormControl<string | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,
		PublicSubject: FormControl<string | null | undefined>,
		PublicContent: FormControl<string | null | undefined>,
		IncidentId: FormControl<string | null | undefined>,
		IdempotencyToken: FormControl<string | null | undefined>,
	}
	export function CreateStartEngagementRequestFormGroup() {
		return new FormGroup<StartEngagementRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Sender: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublicSubject: new FormControl<string | null | undefined>(undefined),
			PublicContent: new FormControl<string | null | undefined>(undefined),
			IncidentId: new FormControl<string | null | undefined>(undefined),
			IdempotencyToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopEngagementResult {
	}
	export interface StopEngagementResultFormProperties {
	}
	export function CreateStopEngagementResultFormGroup() {
		return new FormGroup<StopEngagementResultFormProperties>({
		});

	}

	export interface StopEngagementRequest {

		/** Required */
		EngagementId: string;
		Reason?: string;
	}
	export interface StopEngagementRequestFormProperties {

		/** Required */
		EngagementId: FormControl<string | null | undefined>,
		Reason: FormControl<string | null | undefined>,
	}
	export function CreateStopEngagementRequestFormGroup() {
		return new FormGroup<StopEngagementRequestFormProperties>({
			EngagementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceResult {
	}
	export interface TagResourceResultFormProperties {
	}
	export function CreateTagResourceResultFormGroup() {
		return new FormGroup<TagResourceResultFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceResult {
	}
	export interface UntagResourceResultFormProperties {
	}
	export function CreateUntagResourceResultFormGroup() {
		return new FormGroup<UntagResourceResultFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateContactResult {
	}
	export interface UpdateContactResultFormProperties {
	}
	export function CreateUpdateContactResultFormGroup() {
		return new FormGroup<UpdateContactResultFormProperties>({
		});

	}

	export interface UpdateContactRequest {

		/** Required */
		ContactId: string;
		DisplayName?: string;
		Plan?: Plan;
	}
	export interface UpdateContactRequestFormProperties {

		/** Required */
		ContactId: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactRequestFormGroup() {
		return new FormGroup<UpdateContactRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateContactChannelResult {
	}
	export interface UpdateContactChannelResultFormProperties {
	}
	export function CreateUpdateContactChannelResultFormGroup() {
		return new FormGroup<UpdateContactChannelResultFormProperties>({
		});

	}

	export interface UpdateContactChannelRequest {

		/** Required */
		ContactChannelId: string;
		Name?: string;
		DeliveryAddress?: ContactChannelAddress;
	}
	export interface UpdateContactChannelRequestFormProperties {

		/** Required */
		ContactChannelId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactChannelRequestFormGroup() {
		return new FormGroup<UpdateContactChannelRequestFormProperties>({
			ContactChannelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRotationResult {
	}
	export interface UpdateRotationResultFormProperties {
	}
	export function CreateUpdateRotationResultFormGroup() {
		return new FormGroup<UpdateRotationResultFormProperties>({
		});

	}

	export interface UpdateRotationRequest {

		/** Required */
		RotationId: string;
		ContactIds?: Array<string>;
		StartTime?: Date;
		TimeZoneId?: string;

		/** Required */
		Recurrence: RecurrenceSettings;
	}
	export interface UpdateRotationRequestFormProperties {

		/** Required */
		RotationId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		TimeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRotationRequestFormGroup() {
		return new FormGroup<UpdateRotationRequestFormProperties>({
			RotationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			TimeZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about when an on-call shift begins and ends. */
	export interface CoverageTime {
		Start?: HandOffTime;
		End?: HandOffTime;
	}

	/** Information about when an on-call shift begins and ends. */
	export interface CoverageTimeFormProperties {
	}
	export function CreateCoverageTimeFormGroup() {
		return new FormGroup<CoverageTimeFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Used to acknowledge an engagement to a contact channel during an incident.
		 * Post #X-Amz-Target=SSMContacts.AcceptPage
		 * @return {AcceptPageResult} Success
		 */
		AcceptPage(requestBody: AcceptPageRequest): Observable<AcceptPageResult> {
			return this.http.post<AcceptPageResult>(this.baseUri + '#X-Amz-Target=SSMContacts.AcceptPage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
		 * Post #X-Amz-Target=SSMContacts.ActivateContactChannel
		 * @return {ActivateContactChannelResult} Success
		 */
		ActivateContactChannel(requestBody: ActivateContactChannelRequest): Observable<ActivateContactChannelResult> {
			return this.http.post<ActivateContactChannelResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ActivateContactChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.
		 * Post #X-Amz-Target=SSMContacts.CreateContact
		 * @return {CreateContactResult} Success
		 */
		CreateContact(requestBody: CreateContactRequest): Observable<CreateContactResult> {
			return this.http.post<CreateContactResult>(this.baseUri + '#X-Amz-Target=SSMContacts.CreateContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A contact channel is the method that Incident Manager uses to engage your contact.
		 * Post #X-Amz-Target=SSMContacts.CreateContactChannel
		 * @return {CreateContactChannelResult} Success
		 */
		CreateContactChannel(requestBody: CreateContactChannelRequest): Observable<CreateContactChannelResult> {
			return this.http.post<CreateContactChannelResult>(this.baseUri + '#X-Amz-Target=SSMContacts.CreateContactChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a rotation in an on-call schedule.
		 * Post #X-Amz-Target=SSMContacts.CreateRotation
		 * @return {CreateRotationResult} Success
		 */
		CreateRotation(requestBody: CreateRotationRequest): Observable<CreateRotationResult> {
			return this.http.post<CreateRotationResult>(this.baseUri + '#X-Amz-Target=SSMContacts.CreateRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an override for a rotation in an on-call schedule.
		 * Post #X-Amz-Target=SSMContacts.CreateRotationOverride
		 * @return {CreateRotationOverrideResult} Success
		 */
		CreateRotationOverride(requestBody: CreateRotationOverrideRequest): Observable<CreateRotationOverrideResult> {
			return this.http.post<CreateRotationOverrideResult>(this.baseUri + '#X-Amz-Target=SSMContacts.CreateRotationOverride', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
		 * Post #X-Amz-Target=SSMContacts.DeactivateContactChannel
		 * @return {DeactivateContactChannelResult} Success
		 */
		DeactivateContactChannel(requestBody: DeactivateContactChannelRequest): Observable<DeactivateContactChannelResult> {
			return this.http.post<DeactivateContactChannelResult>(this.baseUri + '#X-Amz-Target=SSMContacts.DeactivateContactChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
		 * Post #X-Amz-Target=SSMContacts.DeleteContact
		 * @return {DeleteContactResult} Success
		 */
		DeleteContact(requestBody: DeleteContactRequest): Observable<DeleteContactResult> {
			return this.http.post<DeleteContactResult>(this.baseUri + '#X-Amz-Target=SSMContacts.DeleteContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
		 * Post #X-Amz-Target=SSMContacts.DeleteContactChannel
		 * @return {DeleteContactChannelResult} Success
		 */
		DeleteContactChannel(requestBody: DeleteContactChannelRequest): Observable<DeleteContactChannelResult> {
			return this.http.post<DeleteContactChannelResult>(this.baseUri + '#X-Amz-Target=SSMContacts.DeleteContactChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.
		 * Post #X-Amz-Target=SSMContacts.DeleteRotation
		 * @return {DeleteRotationResult} Success
		 */
		DeleteRotation(requestBody: DeleteRotationRequest): Observable<DeleteRotationResult> {
			return this.http.post<DeleteRotationResult>(this.baseUri + '#X-Amz-Target=SSMContacts.DeleteRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing override for an on-call rotation.
		 * Post #X-Amz-Target=SSMContacts.DeleteRotationOverride
		 * @return {DeleteRotationOverrideResult} Success
		 */
		DeleteRotationOverride(requestBody: DeleteRotationOverrideRequest): Observable<DeleteRotationOverrideResult> {
			return this.http.post<DeleteRotationOverrideResult>(this.baseUri + '#X-Amz-Target=SSMContacts.DeleteRotationOverride', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
		 * Post #X-Amz-Target=SSMContacts.DescribeEngagement
		 * @return {DescribeEngagementResult} Success
		 */
		DescribeEngagement(requestBody: DescribeEngagementRequest): Observable<DescribeEngagementResult> {
			return this.http.post<DescribeEngagementResult>(this.baseUri + '#X-Amz-Target=SSMContacts.DescribeEngagement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists details of the engagement to a contact channel.
		 * Post #X-Amz-Target=SSMContacts.DescribePage
		 * @return {DescribePageResult} Success
		 */
		DescribePage(requestBody: DescribePageRequest): Observable<DescribePageResult> {
			return this.http.post<DescribePageResult>(this.baseUri + '#X-Amz-Target=SSMContacts.DescribePage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the specified contact or escalation plan.
		 * Post #X-Amz-Target=SSMContacts.GetContact
		 * @return {GetContactResult} Success
		 */
		GetContact(requestBody: GetContactRequest): Observable<GetContactResult> {
			return this.http.post<GetContactResult>(this.baseUri + '#X-Amz-Target=SSMContacts.GetContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List details about a specific contact channel.
		 * Post #X-Amz-Target=SSMContacts.GetContactChannel
		 * @return {GetContactChannelResult} Success
		 */
		GetContactChannel(requestBody: GetContactChannelRequest): Observable<GetContactChannelResult> {
			return this.http.post<GetContactChannelResult>(this.baseUri + '#X-Amz-Target=SSMContacts.GetContactChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the resource policies attached to the specified contact or escalation plan.
		 * Post #X-Amz-Target=SSMContacts.GetContactPolicy
		 * @return {GetContactPolicyResult} Success
		 */
		GetContactPolicy(requestBody: GetContactPolicyRequest): Observable<GetContactPolicyResult> {
			return this.http.post<GetContactPolicyResult>(this.baseUri + '#X-Amz-Target=SSMContacts.GetContactPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about an on-call rotation.
		 * Post #X-Amz-Target=SSMContacts.GetRotation
		 * @return {GetRotationResult} Success
		 */
		GetRotation(requestBody: GetRotationRequest): Observable<GetRotationResult> {
			return this.http.post<GetRotationResult>(this.baseUri + '#X-Amz-Target=SSMContacts.GetRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about an override to an on-call rotation.
		 * Post #X-Amz-Target=SSMContacts.GetRotationOverride
		 * @return {GetRotationOverrideResult} Success
		 */
		GetRotationOverride(requestBody: GetRotationOverrideRequest): Observable<GetRotationOverrideResult> {
			return this.http.post<GetRotationOverrideResult>(this.baseUri + '#X-Amz-Target=SSMContacts.GetRotationOverride', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all contact channels for the specified contact.
		 * Post #X-Amz-Target=SSMContacts.ListContactChannels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListContactChannelsResult} Success
		 */
		ListContactChannels(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListContactChannelsRequest): Observable<ListContactChannelsResult> {
			return this.http.post<ListContactChannelsResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListContactChannels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all contacts and escalation plans in Incident Manager.
		 * Post #X-Amz-Target=SSMContacts.ListContacts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListContactsResult} Success
		 */
		ListContacts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListContactsRequest): Observable<ListContactsResult> {
			return this.http.post<ListContactsResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListContacts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all engagements that have happened in an incident.
		 * Post #X-Amz-Target=SSMContacts.ListEngagements
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEngagementsResult} Success
		 */
		ListEngagements(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEngagementsRequest): Observable<ListEngagementsResult> {
			return this.http.post<ListEngagementsResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListEngagements?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the engagements to contact channels that have been acknowledged.
		 * Post #X-Amz-Target=SSMContacts.ListPageReceipts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPageReceiptsResult} Success
		 */
		ListPageReceipts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPageReceiptsRequest): Observable<ListPageReceiptsResult> {
			return this.http.post<ListPageReceiptsResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListPageReceipts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.
		 * Post #X-Amz-Target=SSMContacts.ListPageResolutions
		 * @param {string} NextToken Pagination token
		 * @return {ListPageResolutionsResult} Success
		 */
		ListPageResolutions(NextToken: string | null | undefined, requestBody: ListPageResolutionsRequest): Observable<ListPageResolutionsResult> {
			return this.http.post<ListPageResolutionsResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListPageResolutions?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the engagements to a contact's contact channels.
		 * Post #X-Amz-Target=SSMContacts.ListPagesByContact
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPagesByContactResult} Success
		 */
		ListPagesByContact(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPagesByContactRequest): Observable<ListPagesByContactResult> {
			return this.http.post<ListPagesByContactResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListPagesByContact?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the engagements to contact channels that occurred by engaging a contact.
		 * Post #X-Amz-Target=SSMContacts.ListPagesByEngagement
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPagesByEngagementResult} Success
		 */
		ListPagesByEngagement(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPagesByEngagementRequest): Observable<ListPagesByEngagementResult> {
			return this.http.post<ListPagesByEngagementResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListPagesByEngagement?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>
		 * Post #X-Amz-Target=SSMContacts.ListPreviewRotationShifts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPreviewRotationShiftsResult} Success
		 */
		ListPreviewRotationShifts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPreviewRotationShiftsRequest): Observable<ListPreviewRotationShiftsResult> {
			return this.http.post<ListPreviewRotationShiftsResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListPreviewRotationShifts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of overrides currently specified for an on-call rotation.
		 * Post #X-Amz-Target=SSMContacts.ListRotationOverrides
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRotationOverridesResult} Success
		 */
		ListRotationOverrides(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRotationOverridesRequest): Observable<ListRotationOverridesResult> {
			return this.http.post<ListRotationOverridesResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListRotationOverrides?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of shifts generated by an existing rotation in the system.
		 * Post #X-Amz-Target=SSMContacts.ListRotationShifts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRotationShiftsResult} Success
		 */
		ListRotationShifts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRotationShiftsRequest): Observable<ListRotationShiftsResult> {
			return this.http.post<ListRotationShiftsResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListRotationShifts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of on-call rotations.
		 * Post #X-Amz-Target=SSMContacts.ListRotations
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRotationsResult} Success
		 */
		ListRotations(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRotationsRequest): Observable<ListRotationsResult> {
			return this.http.post<ListRotationsResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListRotations?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags of an escalation plan or contact.
		 * Post #X-Amz-Target=SSMContacts.ListTagsForResource
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResult> {
			return this.http.post<ListTagsForResourceResult>(this.baseUri + '#X-Amz-Target=SSMContacts.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.
		 * Post #X-Amz-Target=SSMContacts.PutContactPolicy
		 * @return {PutContactPolicyResult} Success
		 */
		PutContactPolicy(requestBody: PutContactPolicyRequest): Observable<PutContactPolicyResult> {
			return this.http.post<PutContactPolicyResult>(this.baseUri + '#X-Amz-Target=SSMContacts.PutContactPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
		 * Post #X-Amz-Target=SSMContacts.SendActivationCode
		 * @return {SendActivationCodeResult} Success
		 */
		SendActivationCode(requestBody: SendActivationCodeRequest): Observable<SendActivationCodeResult> {
			return this.http.post<SendActivationCodeResult>(this.baseUri + '#X-Amz-Target=SSMContacts.SendActivationCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
		 * Post #X-Amz-Target=SSMContacts.StartEngagement
		 * @return {StartEngagementResult} Success
		 */
		StartEngagement(requestBody: StartEngagementRequest): Observable<StartEngagementResult> {
			return this.http.post<StartEngagementResult>(this.baseUri + '#X-Amz-Target=SSMContacts.StartEngagement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
		 * Post #X-Amz-Target=SSMContacts.StopEngagement
		 * @return {StopEngagementResult} Success
		 */
		StopEngagement(requestBody: StopEngagementRequest): Observable<StopEngagementResult> {
			return this.http.post<StopEngagementResult>(this.baseUri + '#X-Amz-Target=SSMContacts.StopEngagement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.
		 * Post #X-Amz-Target=SSMContacts.TagResource
		 * @return {TagResourceResult} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResult> {
			return this.http.post<TagResourceResult>(this.baseUri + '#X-Amz-Target=SSMContacts.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from the specified resource.
		 * Post #X-Amz-Target=SSMContacts.UntagResource
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResult> {
			return this.http.post<UntagResourceResult>(this.baseUri + '#X-Amz-Target=SSMContacts.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the contact or escalation plan specified.
		 * Post #X-Amz-Target=SSMContacts.UpdateContact
		 * @return {UpdateContactResult} Success
		 */
		UpdateContact(requestBody: UpdateContactRequest): Observable<UpdateContactResult> {
			return this.http.post<UpdateContactResult>(this.baseUri + '#X-Amz-Target=SSMContacts.UpdateContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a contact's contact channel.
		 * Post #X-Amz-Target=SSMContacts.UpdateContactChannel
		 * @return {UpdateContactChannelResult} Success
		 */
		UpdateContactChannel(requestBody: UpdateContactChannelRequest): Observable<UpdateContactChannelResult> {
			return this.http.post<UpdateContactChannelResult>(this.baseUri + '#X-Amz-Target=SSMContacts.UpdateContactChannel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the information specified for an on-call rotation.
		 * Post #X-Amz-Target=SSMContacts.UpdateRotation
		 * @return {UpdateRotationResult} Success
		 */
		UpdateRotation(requestBody: UpdateRotationRequest): Observable<UpdateRotationResult> {
			return this.http.post<UpdateRotationResult>(this.baseUri + '#X-Amz-Target=SSMContacts.UpdateRotation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptPageX_Amz_Target { 'SSMContacts.AcceptPage' = 'SSMContacts.AcceptPage' }

	export enum ActivateContactChannelX_Amz_Target { 'SSMContacts.ActivateContactChannel' = 'SSMContacts.ActivateContactChannel' }

	export enum CreateContactX_Amz_Target { 'SSMContacts.CreateContact' = 'SSMContacts.CreateContact' }

	export enum CreateContactChannelX_Amz_Target { 'SSMContacts.CreateContactChannel' = 'SSMContacts.CreateContactChannel' }

	export enum CreateRotationX_Amz_Target { 'SSMContacts.CreateRotation' = 'SSMContacts.CreateRotation' }

	export enum CreateRotationOverrideX_Amz_Target { 'SSMContacts.CreateRotationOverride' = 'SSMContacts.CreateRotationOverride' }

	export enum DeactivateContactChannelX_Amz_Target { 'SSMContacts.DeactivateContactChannel' = 'SSMContacts.DeactivateContactChannel' }

	export enum DeleteContactX_Amz_Target { 'SSMContacts.DeleteContact' = 'SSMContacts.DeleteContact' }

	export enum DeleteContactChannelX_Amz_Target { 'SSMContacts.DeleteContactChannel' = 'SSMContacts.DeleteContactChannel' }

	export enum DeleteRotationX_Amz_Target { 'SSMContacts.DeleteRotation' = 'SSMContacts.DeleteRotation' }

	export enum DeleteRotationOverrideX_Amz_Target { 'SSMContacts.DeleteRotationOverride' = 'SSMContacts.DeleteRotationOverride' }

	export enum DescribeEngagementX_Amz_Target { 'SSMContacts.DescribeEngagement' = 'SSMContacts.DescribeEngagement' }

	export enum DescribePageX_Amz_Target { 'SSMContacts.DescribePage' = 'SSMContacts.DescribePage' }

	export enum GetContactX_Amz_Target { 'SSMContacts.GetContact' = 'SSMContacts.GetContact' }

	export enum GetContactChannelX_Amz_Target { 'SSMContacts.GetContactChannel' = 'SSMContacts.GetContactChannel' }

	export enum GetContactPolicyX_Amz_Target { 'SSMContacts.GetContactPolicy' = 'SSMContacts.GetContactPolicy' }

	export enum GetRotationX_Amz_Target { 'SSMContacts.GetRotation' = 'SSMContacts.GetRotation' }

	export enum GetRotationOverrideX_Amz_Target { 'SSMContacts.GetRotationOverride' = 'SSMContacts.GetRotationOverride' }

	export enum ListContactChannelsX_Amz_Target { 'SSMContacts.ListContactChannels' = 'SSMContacts.ListContactChannels' }

	export enum ListContactsX_Amz_Target { 'SSMContacts.ListContacts' = 'SSMContacts.ListContacts' }

	export enum ListEngagementsX_Amz_Target { 'SSMContacts.ListEngagements' = 'SSMContacts.ListEngagements' }

	export enum ListPageReceiptsX_Amz_Target { 'SSMContacts.ListPageReceipts' = 'SSMContacts.ListPageReceipts' }

	export enum ListPageResolutionsX_Amz_Target { 'SSMContacts.ListPageResolutions' = 'SSMContacts.ListPageResolutions' }

	export enum ListPagesByContactX_Amz_Target { 'SSMContacts.ListPagesByContact' = 'SSMContacts.ListPagesByContact' }

	export enum ListPagesByEngagementX_Amz_Target { 'SSMContacts.ListPagesByEngagement' = 'SSMContacts.ListPagesByEngagement' }

	export enum ListPreviewRotationShiftsX_Amz_Target { 'SSMContacts.ListPreviewRotationShifts' = 'SSMContacts.ListPreviewRotationShifts' }

	export enum ListRotationOverridesX_Amz_Target { 'SSMContacts.ListRotationOverrides' = 'SSMContacts.ListRotationOverrides' }

	export enum ListRotationShiftsX_Amz_Target { 'SSMContacts.ListRotationShifts' = 'SSMContacts.ListRotationShifts' }

	export enum ListRotationsX_Amz_Target { 'SSMContacts.ListRotations' = 'SSMContacts.ListRotations' }

	export enum ListTagsForResourceX_Amz_Target { 'SSMContacts.ListTagsForResource' = 'SSMContacts.ListTagsForResource' }

	export enum PutContactPolicyX_Amz_Target { 'SSMContacts.PutContactPolicy' = 'SSMContacts.PutContactPolicy' }

	export enum SendActivationCodeX_Amz_Target { 'SSMContacts.SendActivationCode' = 'SSMContacts.SendActivationCode' }

	export enum StartEngagementX_Amz_Target { 'SSMContacts.StartEngagement' = 'SSMContacts.StartEngagement' }

	export enum StopEngagementX_Amz_Target { 'SSMContacts.StopEngagement' = 'SSMContacts.StopEngagement' }

	export enum TagResourceX_Amz_Target { 'SSMContacts.TagResource' = 'SSMContacts.TagResource' }

	export enum UntagResourceX_Amz_Target { 'SSMContacts.UntagResource' = 'SSMContacts.UntagResource' }

	export enum UpdateContactX_Amz_Target { 'SSMContacts.UpdateContact' = 'SSMContacts.UpdateContact' }

	export enum UpdateContactChannelX_Amz_Target { 'SSMContacts.UpdateContactChannel' = 'SSMContacts.UpdateContactChannel' }

	export enum UpdateRotationX_Amz_Target { 'SSMContacts.UpdateRotation' = 'SSMContacts.UpdateRotation' }

}

