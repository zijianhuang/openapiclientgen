import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ProfileDetailResponse {
		profile?: ProfileDetail;
	}
	export interface ProfileDetailResponseFormProperties {
	}
	export function CreateProfileDetailResponseFormGroup() {
		return new FormGroup<ProfileDetailResponseFormProperties>({
		});

	}


	/** The state of the profile after a read or write operation. */
	export interface ProfileDetail {
		createdAt?: Date;
		createdBy?: string;
		durationSeconds?: number | null;
		enabled?: boolean | null;
		managedPolicyArns?: Array<string>;
		name?: string;
		profileArn?: string;
		profileId?: string;
		requireInstanceProperties?: boolean | null;
		roleArns?: Array<string>;
		sessionPolicy?: string;
		updatedAt?: Date;
	}

	/** The state of the profile after a read or write operation. */
	export interface ProfileDetailFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		durationSeconds: FormControl<number | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		profileArn: FormControl<string | null | undefined>,
		profileId: FormControl<string | null | undefined>,
		requireInstanceProperties: FormControl<boolean | null | undefined>,
		sessionPolicy: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateProfileDetailFormGroup() {
		return new FormGroup<ProfileDetailFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			durationSeconds: new FormControl<number | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profileArn: new FormControl<string | null | undefined>(undefined),
			profileId: new FormControl<string | null | undefined>(undefined),
			requireInstanceProperties: new FormControl<boolean | null | undefined>(undefined),
			sessionPolicy: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A label that consists of a key and value you define.  */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** A label that consists of a key and value you define.  */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface TrustAnchorDetailResponse {

		/** Required */
		trustAnchor: TrustAnchorDetail;
	}
	export interface TrustAnchorDetailResponseFormProperties {
	}
	export function CreateTrustAnchorDetailResponseFormGroup() {
		return new FormGroup<TrustAnchorDetailResponseFormProperties>({
		});

	}


	/** The state of the trust anchor after a read or write operation.  */
	export interface TrustAnchorDetail {
		createdAt?: Date;
		enabled?: boolean | null;
		name?: string;
		notificationSettings?: Array<NotificationSettingDetail>;
		source?: Source;
		trustAnchorArn?: string;
		trustAnchorId?: string;
		updatedAt?: Date;
	}

	/** The state of the trust anchor after a read or write operation.  */
	export interface TrustAnchorDetailFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		trustAnchorArn: FormControl<string | null | undefined>,
		trustAnchorId: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateTrustAnchorDetailFormGroup() {
		return new FormGroup<TrustAnchorDetailFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			trustAnchorArn: new FormControl<string | null | undefined>(undefined),
			trustAnchorId: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>The state of a notification setting.</p> <p>A notification setting includes information such as event name, threshold, status of the notification setting, and the channel to notify.</p> */
	export interface NotificationSettingDetail {
		channel?: NotificationChannel;
		configuredBy?: string;

		/** Required */
		enabled: boolean;

		/** Required */
		event: NotificationEvent;
		threshold?: number | null;
	}

	/** <p>The state of a notification setting.</p> <p>A notification setting includes information such as event name, threshold, status of the notification setting, and the channel to notify.</p> */
	export interface NotificationSettingDetailFormProperties {
		channel: FormControl<NotificationChannel | null | undefined>,
		configuredBy: FormControl<string | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,

		/** Required */
		event: FormControl<NotificationEvent | null | undefined>,
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateNotificationSettingDetailFormGroup() {
		return new FormGroup<NotificationSettingDetailFormProperties>({
			channel: new FormControl<NotificationChannel | null | undefined>(undefined),
			configuredBy: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			event: new FormControl<NotificationEvent | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum NotificationChannel { ALL = 0 }

	export enum NotificationEvent { CA_CERTIFICATE_EXPIRY = 0, END_ENTITY_CERTIFICATE_EXPIRY = 1 }


	/** The trust anchor type and its related certificate data. */
	export interface Source {
		sourceData?: SourceData;
		sourceType?: TrustAnchorType;
	}

	/** The trust anchor type and its related certificate data. */
	export interface SourceFormProperties {
		sourceType: FormControl<TrustAnchorType | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			sourceType: new FormControl<TrustAnchorType | null | undefined>(undefined),
		});

	}


	/** The data field of the trust anchor depending on its type.  */
	export interface SourceData {
		acmPcaArn?: string;
		x509CertificateData?: string;
	}

	/** The data field of the trust anchor depending on its type.  */
	export interface SourceDataFormProperties {
		acmPcaArn: FormControl<string | null | undefined>,
		x509CertificateData: FormControl<string | null | undefined>,
	}
	export function CreateSourceDataFormGroup() {
		return new FormGroup<SourceDataFormProperties>({
			acmPcaArn: new FormControl<string | null | undefined>(undefined),
			x509CertificateData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TrustAnchorType { AWS_ACM_PCA = 0, CERTIFICATE_BUNDLE = 1, SELF_SIGNED_REPOSITORY = 2 }


	/**  Customizable notification settings that will be applied to notification events. IAM Roles Anywhere consumes these settings while notifying across multiple channels - CloudWatch metrics, EventBridge, and Health Dashboard.  */
	export interface NotificationSetting {
		channel?: NotificationChannel;

		/** Required */
		enabled: boolean;

		/** Required */
		event: NotificationEvent;
		threshold?: number | null;
	}

	/**  Customizable notification settings that will be applied to notification events. IAM Roles Anywhere consumes these settings while notifying across multiple channels - CloudWatch metrics, EventBridge, and Health Dashboard.  */
	export interface NotificationSettingFormProperties {
		channel: FormControl<NotificationChannel | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,

		/** Required */
		event: FormControl<NotificationEvent | null | undefined>,
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateNotificationSettingFormGroup() {
		return new FormGroup<NotificationSettingFormProperties>({
			channel: new FormControl<NotificationChannel | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			event: new FormControl<NotificationEvent | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CrlDetailResponse {

		/** Required */
		crl: CrlDetail;
	}
	export interface CrlDetailResponseFormProperties {
	}
	export function CreateCrlDetailResponseFormGroup() {
		return new FormGroup<CrlDetailResponseFormProperties>({
		});

	}


	/** The state of the certificate revocation list (CRL) after a read or write operation. */
	export interface CrlDetail {
		createdAt?: Date;
		crlArn?: string;
		crlData?: string;
		crlId?: string;
		enabled?: boolean | null;
		name?: string;
		trustAnchorArn?: string;
		updatedAt?: Date;
	}

	/** The state of the certificate revocation list (CRL) after a read or write operation. */
	export interface CrlDetailFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		crlArn: FormControl<string | null | undefined>,
		crlData: FormControl<string | null | undefined>,
		crlId: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		trustAnchorArn: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCrlDetailFormGroup() {
		return new FormGroup<CrlDetailFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			crlArn: new FormControl<string | null | undefined>(undefined),
			crlData: new FormControl<string | null | undefined>(undefined),
			crlId: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			trustAnchorArn: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
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

	export interface SubjectDetailResponse {
		subject?: SubjectDetail;
	}
	export interface SubjectDetailResponseFormProperties {
	}
	export function CreateSubjectDetailResponseFormGroup() {
		return new FormGroup<SubjectDetailResponseFormProperties>({
		});

	}


	/** The state of the subject after a read or write operation. */
	export interface SubjectDetail {
		createdAt?: Date;
		credentials?: Array<CredentialSummary>;
		enabled?: boolean | null;
		instanceProperties?: Array<InstanceProperty>;
		lastSeenAt?: Date;
		subjectArn?: string;
		subjectId?: string;
		updatedAt?: Date;
		x509Subject?: string;
	}

	/** The state of the subject after a read or write operation. */
	export interface SubjectDetailFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		lastSeenAt: FormControl<Date | null | undefined>,
		subjectArn: FormControl<string | null | undefined>,
		subjectId: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		x509Subject: FormControl<string | null | undefined>,
	}
	export function CreateSubjectDetailFormGroup() {
		return new FormGroup<SubjectDetailFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			lastSeenAt: new FormControl<Date | null | undefined>(undefined),
			subjectArn: new FormControl<string | null | undefined>(undefined),
			subjectId: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			x509Subject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A record of a presented X509 credential from a temporary credential request.  */
	export interface CredentialSummary {
		enabled?: boolean | null;
		failed?: boolean | null;
		issuer?: string;
		seenAt?: Date;
		serialNumber?: string;
		x509CertificateData?: string;
	}

	/** A record of a presented X509 credential from a temporary credential request.  */
	export interface CredentialSummaryFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		failed: FormControl<boolean | null | undefined>,
		issuer: FormControl<string | null | undefined>,
		seenAt: FormControl<Date | null | undefined>,
		serialNumber: FormControl<string | null | undefined>,
		x509CertificateData: FormControl<string | null | undefined>,
	}
	export function CreateCredentialSummaryFormGroup() {
		return new FormGroup<CredentialSummaryFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			failed: new FormControl<boolean | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			seenAt: new FormControl<Date | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			x509CertificateData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key-value pair you set that identifies a property of the authenticating instance. */
	export interface InstanceProperty {
		failed?: boolean | null;

		/** A list of instanceProperty objects. */
		properties?: any;
		seenAt?: Date;
	}

	/** A key-value pair you set that identifies a property of the authenticating instance. */
	export interface InstancePropertyFormProperties {
		failed: FormControl<boolean | null | undefined>,

		/** A list of instanceProperty objects. */
		properties: FormControl<any | null | undefined>,
		seenAt: FormControl<Date | null | undefined>,
	}
	export function CreateInstancePropertyFormGroup() {
		return new FormGroup<InstancePropertyFormProperties>({
			failed: new FormControl<boolean | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			seenAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListCrlsResponse {
		crls?: Array<CrlDetail>;
		nextToken?: string;
	}
	export interface ListCrlsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCrlsResponseFormGroup() {
		return new FormGroup<ListCrlsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProfilesResponse {
		nextToken?: string;
		profiles?: Array<ProfileDetail>;
	}
	export interface ListProfilesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfilesResponseFormGroup() {
		return new FormGroup<ListProfilesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSubjectsResponse {
		nextToken?: string;
		subjects?: Array<SubjectSummary>;
	}
	export interface ListSubjectsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubjectsResponseFormGroup() {
		return new FormGroup<ListSubjectsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary representation of subjects. */
	export interface SubjectSummary {
		createdAt?: Date;
		enabled?: boolean | null;
		lastSeenAt?: Date;
		subjectArn?: string;
		subjectId?: string;
		updatedAt?: Date;
		x509Subject?: string;
	}

	/** A summary representation of subjects. */
	export interface SubjectSummaryFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		lastSeenAt: FormControl<Date | null | undefined>,
		subjectArn: FormControl<string | null | undefined>,
		subjectId: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		x509Subject: FormControl<string | null | undefined>,
	}
	export function CreateSubjectSummaryFormGroup() {
		return new FormGroup<SubjectSummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			lastSeenAt: new FormControl<Date | null | undefined>(undefined),
			subjectArn: new FormControl<string | null | undefined>(undefined),
			subjectId: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			x509Subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTrustAnchorsResponse {
		nextToken?: string;
		trustAnchors?: Array<TrustAnchorDetail>;
	}
	export interface ListTrustAnchorsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrustAnchorsResponseFormGroup() {
		return new FormGroup<ListTrustAnchorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutNotificationSettingsResponse {

		/**
		 * The state of the trust anchor after a read or write operation.
		 * Required
		 */
		trustAnchor: TrustAnchorDetail;
	}
	export interface PutNotificationSettingsResponseFormProperties {
	}
	export function CreatePutNotificationSettingsResponseFormGroup() {
		return new FormGroup<PutNotificationSettingsResponseFormProperties>({
		});

	}

	export interface ResetNotificationSettingsResponse {

		/**
		 * The state of the trust anchor after a read or write operation.
		 * Required
		 */
		trustAnchor: TrustAnchorDetail;
	}
	export interface ResetNotificationSettingsResponseFormProperties {
	}
	export function CreateResetNotificationSettingsResponseFormGroup() {
		return new FormGroup<ResetNotificationSettingsResponseFormProperties>({
		});

	}


	/** A notification setting key to reset. A notification setting key includes the event and the channel.  */
	export interface NotificationSettingKey {
		channel?: NotificationChannel;

		/** Required */
		event: NotificationEvent;
	}

	/** A notification setting key to reset. A notification setting key includes the event and the channel.  */
	export interface NotificationSettingKeyFormProperties {
		channel: FormControl<NotificationChannel | null | undefined>,

		/** Required */
		event: FormControl<NotificationEvent | null | undefined>,
	}
	export function CreateNotificationSettingKeyFormGroup() {
		return new FormGroup<NotificationSettingKeyFormProperties>({
			channel: new FormControl<NotificationChannel | null | undefined>(undefined),
			event: new FormControl<NotificationEvent | null | undefined>(undefined, [Validators.required]),
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

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
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

	export interface CreateProfileRequest {
		durationSeconds?: number | null;
		enabled?: boolean | null;
		managedPolicyArns?: Array<string>;

		/** Required */
		name: string;
		requireInstanceProperties?: boolean | null;

		/** Required */
		roleArns: Array<string>;
		sessionPolicy?: string;
		tags?: Array<Tag>;
	}
	export interface CreateProfileRequestFormProperties {
		durationSeconds: FormControl<number | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		requireInstanceProperties: FormControl<boolean | null | undefined>,
		sessionPolicy: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileRequestFormGroup() {
		return new FormGroup<CreateProfileRequestFormProperties>({
			durationSeconds: new FormControl<number | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requireInstanceProperties: new FormControl<boolean | null | undefined>(undefined),
			sessionPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTrustAnchorRequest {
		enabled?: boolean | null;

		/** Required */
		name: string;
		notificationSettings?: Array<NotificationSetting>;

		/** Required */
		source: Source;
		tags?: Array<Tag>;
	}
	export interface CreateTrustAnchorRequestFormProperties {
		enabled: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrustAnchorRequestFormGroup() {
		return new FormGroup<CreateTrustAnchorRequestFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportCrlRequest {

		/** Required */
		crlData: string;
		enabled?: boolean | null;

		/** Required */
		name: string;
		tags?: Array<Tag>;

		/** Required */
		trustAnchorArn: string;
	}
	export interface ImportCrlRequestFormProperties {

		/** Required */
		crlData: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		trustAnchorArn: FormControl<string | null | undefined>,
	}
	export function CreateImportCrlRequestFormGroup() {
		return new FormGroup<ImportCrlRequestFormProperties>({
			crlData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trustAnchorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InstancePropertyMap {
	}
	export interface InstancePropertyMapFormProperties {
	}
	export function CreateInstancePropertyMapFormGroup() {
		return new FormGroup<InstancePropertyMapFormProperties>({
		});

	}

	export interface ListRequest {
	}
	export interface ListRequestFormProperties {
	}
	export function CreateListRequestFormGroup() {
		return new FormGroup<ListRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface PutNotificationSettingsRequest {

		/** Required */
		notificationSettings: Array<NotificationSetting>;

		/** Required */
		trustAnchorId: string;
	}
	export interface PutNotificationSettingsRequestFormProperties {

		/** Required */
		trustAnchorId: FormControl<string | null | undefined>,
	}
	export function CreatePutNotificationSettingsRequestFormGroup() {
		return new FormGroup<PutNotificationSettingsRequestFormProperties>({
			trustAnchorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResetNotificationSettingsRequest {

		/** Required */
		notificationSettingKeys: Array<NotificationSettingKey>;

		/** Required */
		trustAnchorId: string;
	}
	export interface ResetNotificationSettingsRequestFormProperties {

		/** Required */
		trustAnchorId: FormControl<string | null | undefined>,
	}
	export function CreateResetNotificationSettingsRequestFormGroup() {
		return new FormGroup<ResetNotificationSettingsRequestFormProperties>({
			trustAnchorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScalarCrlRequest {
	}
	export interface ScalarCrlRequestFormProperties {
	}
	export function CreateScalarCrlRequestFormGroup() {
		return new FormGroup<ScalarCrlRequestFormProperties>({
		});

	}

	export interface ScalarProfileRequest {
	}
	export interface ScalarProfileRequestFormProperties {
	}
	export function CreateScalarProfileRequestFormGroup() {
		return new FormGroup<ScalarProfileRequestFormProperties>({
		});

	}

	export interface ScalarSubjectRequest {
	}
	export interface ScalarSubjectRequestFormProperties {
	}
	export function CreateScalarSubjectRequestFormGroup() {
		return new FormGroup<ScalarSubjectRequestFormProperties>({
		});

	}

	export interface ScalarTrustAnchorRequest {
	}
	export interface ScalarTrustAnchorRequestFormProperties {
	}
	export function CreateScalarTrustAnchorRequestFormGroup() {
		return new FormGroup<ScalarTrustAnchorRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCrlRequest {
		crlData?: string;
		name?: string;
	}
	export interface UpdateCrlRequestFormProperties {
		crlData: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCrlRequestFormGroup() {
		return new FormGroup<UpdateCrlRequestFormProperties>({
			crlData: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProfileRequest {
		durationSeconds?: number | null;
		managedPolicyArns?: Array<string>;
		name?: string;
		roleArns?: Array<string>;
		sessionPolicy?: string;
	}
	export interface UpdateProfileRequestFormProperties {
		durationSeconds: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		sessionPolicy: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfileRequestFormGroup() {
		return new FormGroup<UpdateProfileRequestFormProperties>({
			durationSeconds: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sessionPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTrustAnchorRequest {
		name?: string;
		source?: Source;
	}
	export interface UpdateTrustAnchorRequestFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrustAnchorRequestFormGroup() {
		return new FormGroup<UpdateTrustAnchorRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a <i>profile</i>, a list of the roles that Roles Anywhere service is trusted to assume. You use profiles to intersect permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateProfile</code>. </p>
		 * Post profiles
		 * @return {void} 
		 */
		CreateProfile(requestBody: CreateProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all profiles in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListProfiles</code>. </p>
		 * Get profiles
		 * @param {string} nextToken A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.
		 * @param {number} pageSize The number of resources in the paginated list. 
		 * @return {ListProfilesResponse} Success
		 */
		ListProfiles(nextToken: string | null | undefined, pageSize: number | null | undefined): Observable<ListProfilesResponse> {
			return this.http.get<ListProfilesResponse>(this.baseUri + 'profiles?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&pageSize=' + pageSize, {});
		}

		/**
		 * <p>Creates a trust anchor to establish trust between IAM Roles Anywhere and your certificate authority (CA). You can define a trust anchor as a reference to an Private Certificate Authority (Private CA) or by uploading a CA certificate. Your Amazon Web Services workloads can authenticate with the trust anchor using certificates issued by the CA in exchange for temporary Amazon Web Services credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateTrustAnchor</code>. </p>
		 * Post trustanchors
		 * @return {void} 
		 */
		CreateTrustAnchor(requestBody: CreateTrustAnchorPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'trustanchors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the trust anchors in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTrustAnchors</code>. </p>
		 * Get trustanchors
		 * @param {string} nextToken A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.
		 * @param {number} pageSize The number of resources in the paginated list. 
		 * @return {ListTrustAnchorsResponse} Success
		 */
		ListTrustAnchors(nextToken: string | null | undefined, pageSize: number | null | undefined): Observable<ListTrustAnchorsResponse> {
			return this.http.get<ListTrustAnchorsResponse>(this.baseUri + 'trustanchors?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&pageSize=' + pageSize, {});
		}

		/**
		 * <p>Deletes a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteCrl</code>. </p>
		 * Delete crl/{crlId}
		 * @param {string} crlId The unique identifier of the certificate revocation list (CRL).
		 * @return {CrlDetailResponse} Success
		 */
		DeleteCrl(crlId: string): Observable<CrlDetailResponse> {
			return this.http.delete<CrlDetailResponse>(this.baseUri + 'crl/' + (crlId == null ? '' : encodeURIComponent(crlId)), {});
		}

		/**
		 * <p>Gets a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetCrl</code>. </p>
		 * Get crl/{crlId}
		 * @param {string} crlId The unique identifier of the certificate revocation list (CRL).
		 * @return {CrlDetailResponse} Success
		 */
		GetCrl(crlId: string): Observable<CrlDetailResponse> {
			return this.http.get<CrlDetailResponse>(this.baseUri + 'crl/' + (crlId == null ? '' : encodeURIComponent(crlId)), {});
		}

		/**
		 * <p>Updates the certificate revocation list (CRL). A CRL is a list of certificates that have been revoked by the issuing certificate authority (CA). IAM Roles Anywhere validates against the CRL before issuing credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateCrl</code>. </p>
		 * Patch crl/{crlId}
		 * @param {string} crlId The unique identifier of the certificate revocation list (CRL).
		 * @return {CrlDetailResponse} Success
		 */
		UpdateCrl(crlId: string, requestBody: UpdateCrlPatchBody): Observable<CrlDetailResponse> {
			return this.http.patch<CrlDetailResponse>(this.baseUri + 'crl/' + (crlId == null ? '' : encodeURIComponent(crlId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteProfile</code>. </p>
		 * Delete profile/{profileId}
		 * @param {string} profileId The unique identifier of the profile.
		 * @return {ProfileDetailResponse} Success
		 */
		DeleteProfile(profileId: string): Observable<ProfileDetailResponse> {
			return this.http.delete<ProfileDetailResponse>(this.baseUri + 'profile/' + (profileId == null ? '' : encodeURIComponent(profileId)), {});
		}

		/**
		 * <p>Gets a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetProfile</code>. </p>
		 * Get profile/{profileId}
		 * @param {string} profileId The unique identifier of the profile.
		 * @return {ProfileDetailResponse} Success
		 */
		GetProfile(profileId: string): Observable<ProfileDetailResponse> {
			return this.http.get<ProfileDetailResponse>(this.baseUri + 'profile/' + (profileId == null ? '' : encodeURIComponent(profileId)), {});
		}

		/**
		 * <p>Updates a <i>profile</i>, a list of the roles that IAM Roles Anywhere service is trusted to assume. You use profiles to intersect permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateProfile</code>. </p>
		 * Patch profile/{profileId}
		 * @param {string} profileId The unique identifier of the profile.
		 * @return {ProfileDetailResponse} Success
		 */
		UpdateProfile(profileId: string, requestBody: UpdateProfilePatchBody): Observable<ProfileDetailResponse> {
			return this.http.patch<ProfileDetailResponse>(this.baseUri + 'profile/' + (profileId == null ? '' : encodeURIComponent(profileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteTrustAnchor</code>. </p>
		 * Delete trustanchor/{trustAnchorId}
		 * @param {string} trustAnchorId The unique identifier of the trust anchor.
		 * @return {TrustAnchorDetailResponse} Success
		 */
		DeleteTrustAnchor(trustAnchorId: string): Observable<TrustAnchorDetailResponse> {
			return this.http.delete<TrustAnchorDetailResponse>(this.baseUri + 'trustanchor/' + (trustAnchorId == null ? '' : encodeURIComponent(trustAnchorId)), {});
		}

		/**
		 * <p>Gets a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetTrustAnchor</code>. </p>
		 * Get trustanchor/{trustAnchorId}
		 * @param {string} trustAnchorId The unique identifier of the trust anchor.
		 * @return {TrustAnchorDetailResponse} Success
		 */
		GetTrustAnchor(trustAnchorId: string): Observable<TrustAnchorDetailResponse> {
			return this.http.get<TrustAnchorDetailResponse>(this.baseUri + 'trustanchor/' + (trustAnchorId == null ? '' : encodeURIComponent(trustAnchorId)), {});
		}

		/**
		 * <p>Updates a trust anchor. You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. You can define a trust anchor as a reference to an Private Certificate Authority (Private CA) or by uploading a CA certificate. Your Amazon Web Services workloads can authenticate with the trust anchor using certificates issued by the CA in exchange for temporary Amazon Web Services credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateTrustAnchor</code>. </p>
		 * Patch trustanchor/{trustAnchorId}
		 * @param {string} trustAnchorId The unique identifier of the trust anchor.
		 * @return {TrustAnchorDetailResponse} Success
		 */
		UpdateTrustAnchor(trustAnchorId: string, requestBody: UpdateTrustAnchorPatchBody): Observable<TrustAnchorDetailResponse> {
			return this.http.patch<TrustAnchorDetailResponse>(this.baseUri + 'trustanchor/' + (trustAnchorId == null ? '' : encodeURIComponent(trustAnchorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableCrl</code>. </p>
		 * Post crl/{crlId}/disable
		 * @param {string} crlId The unique identifier of the certificate revocation list (CRL).
		 * @return {CrlDetailResponse} Success
		 */
		DisableCrl(crlId: string): Observable<CrlDetailResponse> {
			return this.http.post<CrlDetailResponse>(this.baseUri + 'crl/' + (crlId == null ? '' : encodeURIComponent(crlId)) + '/disable', null, {});
		}

		/**
		 * <p>Disables a profile. When disabled, temporary credential requests with this profile fail.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableProfile</code>. </p>
		 * Post profile/{profileId}/disable
		 * @param {string} profileId The unique identifier of the profile.
		 * @return {ProfileDetailResponse} Success
		 */
		DisableProfile(profileId: string): Observable<ProfileDetailResponse> {
			return this.http.post<ProfileDetailResponse>(this.baseUri + 'profile/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/disable', null, {});
		}

		/**
		 * <p>Disables a trust anchor. When disabled, temporary credential requests specifying this trust anchor are unauthorized.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableTrustAnchor</code>. </p>
		 * Post trustanchor/{trustAnchorId}/disable
		 * @param {string} trustAnchorId The unique identifier of the trust anchor.
		 * @return {TrustAnchorDetailResponse} Success
		 */
		DisableTrustAnchor(trustAnchorId: string): Observable<TrustAnchorDetailResponse> {
			return this.http.post<TrustAnchorDetailResponse>(this.baseUri + 'trustanchor/' + (trustAnchorId == null ? '' : encodeURIComponent(trustAnchorId)) + '/disable', null, {});
		}

		/**
		 * <p>Enables a certificate revocation list (CRL). When enabled, certificates stored in the CRL are unauthorized to receive session credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableCrl</code>. </p>
		 * Post crl/{crlId}/enable
		 * @param {string} crlId The unique identifier of the certificate revocation list (CRL).
		 * @return {CrlDetailResponse} Success
		 */
		EnableCrl(crlId: string): Observable<CrlDetailResponse> {
			return this.http.post<CrlDetailResponse>(this.baseUri + 'crl/' + (crlId == null ? '' : encodeURIComponent(crlId)) + '/enable', null, {});
		}

		/**
		 * <p>Enables temporary credential requests for a profile. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableProfile</code>. </p>
		 * Post profile/{profileId}/enable
		 * @param {string} profileId The unique identifier of the profile.
		 * @return {ProfileDetailResponse} Success
		 */
		EnableProfile(profileId: string): Observable<ProfileDetailResponse> {
			return this.http.post<ProfileDetailResponse>(this.baseUri + 'profile/' + (profileId == null ? '' : encodeURIComponent(profileId)) + '/enable', null, {});
		}

		/**
		 * <p>Enables a trust anchor. When enabled, certificates in the trust anchor chain are authorized for trust validation. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableTrustAnchor</code>. </p>
		 * Post trustanchor/{trustAnchorId}/enable
		 * @param {string} trustAnchorId The unique identifier of the trust anchor.
		 * @return {TrustAnchorDetailResponse} Success
		 */
		EnableTrustAnchor(trustAnchorId: string): Observable<TrustAnchorDetailResponse> {
			return this.http.post<TrustAnchorDetailResponse>(this.baseUri + 'trustanchor/' + (trustAnchorId == null ? '' : encodeURIComponent(trustAnchorId)) + '/enable', null, {});
		}

		/**
		 * <p>Gets a <i>subject</i>, which associates a certificate identity with authentication attempts. The subject stores auditing information such as the status of the last authentication attempt, the certificate data used in the attempt, and the last time the associated identity attempted authentication. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetSubject</code>. </p>
		 * Get subject/{subjectId}
		 * @param {string} subjectId The unique identifier of the subject. 
		 * @return {SubjectDetailResponse} Success
		 */
		GetSubject(subjectId: string): Observable<SubjectDetailResponse> {
			return this.http.get<SubjectDetailResponse>(this.baseUri + 'subject/' + (subjectId == null ? '' : encodeURIComponent(subjectId)), {});
		}

		/**
		 * <p>Imports the certificate revocation list (CRL). A CRL is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the CRL before issuing credentials. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:ImportCrl</code>. </p>
		 * Post crls
		 * @return {void} 
		 */
		ImportCrl(requestBody: ImportCrlPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'crls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists all certificate revocation lists (CRL) in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListCrls</code>. </p>
		 * Get crls
		 * @param {string} nextToken A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.
		 * @param {number} pageSize The number of resources in the paginated list. 
		 * @return {ListCrlsResponse} Success
		 */
		ListCrls(nextToken: string | null | undefined, pageSize: number | null | undefined): Observable<ListCrlsResponse> {
			return this.http.get<ListCrlsResponse>(this.baseUri + 'crls?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&pageSize=' + pageSize, {});
		}

		/**
		 * <p>Lists the subjects in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListSubjects</code>. </p>
		 * Get subjects
		 * @param {string} nextToken A token that indicates where the output should continue from, if a previous request did not show all results. To get the next results, make the request again with this value.
		 * @param {number} pageSize The number of resources in the paginated list. 
		 * @return {ListSubjectsResponse} Success
		 */
		ListSubjects(nextToken: string | null | undefined, pageSize: number | null | undefined): Observable<ListSubjectsResponse> {
			return this.http.get<ListSubjectsResponse>(this.baseUri + 'subjects?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&pageSize=' + pageSize, {});
		}

		/**
		 * <p>Lists the tags attached to the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTagsForResource</code>. </p>
		 * Get ListTagsForResource#resourceArn
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'ListTagsForResource#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Attaches a list of <i>notification settings</i> to a trust anchor.</p> <p>A notification setting includes information such as event name, threshold, status of the notification setting, and the channel to notify.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:PutNotificationSettings</code>. </p>
		 * Patch put-notifications-settings
		 * @return {PutNotificationSettingsResponse} Success
		 */
		PutNotificationSettings(requestBody: PutNotificationSettingsPatchBody): Observable<PutNotificationSettingsResponse> {
			return this.http.patch<PutNotificationSettingsResponse>(this.baseUri + 'put-notifications-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resets the <i>custom notification setting</i> to IAM Roles Anywhere default setting. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:ResetNotificationSettings</code>. </p>
		 * Patch reset-notifications-settings
		 * @return {ResetNotificationSettingsResponse} Success
		 */
		ResetNotificationSettings(requestBody: ResetNotificationSettingsPatchBody): Observable<ResetNotificationSettingsResponse> {
			return this.http.patch<ResetNotificationSettingsResponse>(this.baseUri + 'reset-notifications-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches tags to a resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:TagResource</code>. </p>
		 * Post TagResource
		 * @return {void} 
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes tags from the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UntagResource</code>. </p>
		 * Post UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + 'UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateProfilePostBody {

		/**
		 * The number of seconds the vended session credentials are valid for.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		durationSeconds?: number | null;

		/** Specifies whether the profile is enabled. */
		enabled?: boolean | null;

		/**
		 * A list of managed policy ARNs that apply to the vended session credentials.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		managedPolicyArns?: Array<string>;

		/**
		 * The name of the profile.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/** Specifies whether instance properties are required in temporary credential requests with this profile. */
		requireInstanceProperties?: boolean | null;

		/**
		 * A list of IAM roles that this profile can assume in a temporary credential request.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		roleArns: Array<string>;

		/** A session policy that applies to the trust boundary of the vended session credentials. */
		sessionPolicy?: string | null;

		/**
		 * The tags to attach to the profile.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface CreateProfilePostBodyFormProperties {

		/**
		 * The number of seconds the vended session credentials are valid for.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		durationSeconds: FormControl<number | null | undefined>,

		/** Specifies whether the profile is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The name of the profile.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Specifies whether instance properties are required in temporary credential requests with this profile. */
		requireInstanceProperties: FormControl<boolean | null | undefined>,

		/** A session policy that applies to the trust boundary of the vended session credentials. */
		sessionPolicy: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfilePostBodyFormGroup() {
		return new FormGroup<CreateProfilePostBodyFormProperties>({
			durationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(3600)]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[ a-zA-Z0-9-_]*$')]),
			requireInstanceProperties: new FormControl<boolean | null | undefined>(undefined),
			sessionPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTrustAnchorPostBody {

		/** Specifies whether the trust anchor is enabled. */
		enabled?: boolean | null;

		/**
		 * The name of the trust anchor.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * A list of notification settings to be associated to the trust anchor.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		notificationSettings?: Array<NotificationSetting>;

		/**
		 * The trust anchor type and its related certificate data.
		 * Required
		 */
		source: CreateTrustAnchorPostBodySource;

		/**
		 * The tags to attach to the trust anchor.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface CreateTrustAnchorPostBodyFormProperties {

		/** Specifies whether the trust anchor is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The name of the trust anchor.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrustAnchorPostBodyFormGroup() {
		return new FormGroup<CreateTrustAnchorPostBodyFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[ a-zA-Z0-9-_]*$')]),
		});

	}

	export interface CreateTrustAnchorPostBodySource {
		sourceData?: SourceData;
		sourceType?: TrustAnchorType;
	}
	export interface CreateTrustAnchorPostBodySourceFormProperties {
		sourceType: FormControl<TrustAnchorType | null | undefined>,
	}
	export function CreateCreateTrustAnchorPostBodySourceFormGroup() {
		return new FormGroup<CreateTrustAnchorPostBodySourceFormProperties>({
			sourceType: new FormControl<TrustAnchorType | null | undefined>(undefined),
		});

	}

	export interface UpdateCrlPatchBody {

		/**
		 * The x509 v3 specified certificate revocation list (CRL).
		 * Max length: 300000
		 * Min length: 1
		 */
		crlData?: string | null;

		/**
		 * The name of the Crl.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;
	}
	export interface UpdateCrlPatchBodyFormProperties {

		/**
		 * The x509 v3 specified certificate revocation list (CRL).
		 * Max length: 300000
		 * Min length: 1
		 */
		crlData: FormControl<string | null | undefined>,

		/**
		 * The name of the Crl.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCrlPatchBodyFormGroup() {
		return new FormGroup<UpdateCrlPatchBodyFormProperties>({
			crlData: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[ a-zA-Z0-9-_]*$')]),
		});

	}

	export interface UpdateProfilePatchBody {

		/**
		 * The number of seconds the vended session credentials are valid for.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		durationSeconds?: number | null;

		/**
		 * A list of managed policy ARNs that apply to the vended session credentials.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		managedPolicyArns?: Array<string>;

		/**
		 * The name of the profile.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * A list of IAM roles that this profile can assume in a temporary credential request.
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		roleArns?: Array<string>;

		/**
		 * A session policy that applies to the trust boundary of the vended session credentials.
		 * Max length: 100000
		 * Min length: 1
		 */
		sessionPolicy?: string | null;
	}
	export interface UpdateProfilePatchBodyFormProperties {

		/**
		 * The number of seconds the vended session credentials are valid for.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		durationSeconds: FormControl<number | null | undefined>,

		/**
		 * The name of the profile.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A session policy that applies to the trust boundary of the vended session credentials.
		 * Max length: 100000
		 * Min length: 1
		 */
		sessionPolicy: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfilePatchBodyFormGroup() {
		return new FormGroup<UpdateProfilePatchBodyFormProperties>({
			durationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(3600)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[ a-zA-Z0-9-_]*$')]),
			sessionPolicy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100000)]),
		});

	}

	export interface UpdateTrustAnchorPatchBody {

		/**
		 * The name of the trust anchor.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/** The trust anchor type and its related certificate data. */
		source?: UpdateTrustAnchorPatchBodySource;
	}
	export interface UpdateTrustAnchorPatchBodyFormProperties {

		/**
		 * The name of the trust anchor.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrustAnchorPatchBodyFormGroup() {
		return new FormGroup<UpdateTrustAnchorPatchBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[ a-zA-Z0-9-_]*$')]),
		});

	}

	export interface UpdateTrustAnchorPatchBodySource {
		sourceData?: SourceData;
		sourceType?: TrustAnchorType;
	}
	export interface UpdateTrustAnchorPatchBodySourceFormProperties {
		sourceType: FormControl<TrustAnchorType | null | undefined>,
	}
	export function CreateUpdateTrustAnchorPatchBodySourceFormGroup() {
		return new FormGroup<UpdateTrustAnchorPatchBodySourceFormProperties>({
			sourceType: new FormControl<TrustAnchorType | null | undefined>(undefined),
		});

	}

	export interface ImportCrlPostBody {

		/**
		 * The x509 v3 specified certificate revocation list (CRL).
		 * Required
		 * Max length: 300000
		 * Min length: 1
		 */
		crlData: string;

		/** Specifies whether the certificate revocation list (CRL) is enabled. */
		enabled?: boolean | null;

		/**
		 * The name of the certificate revocation list (CRL).
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * A list of tags to attach to the certificate revocation list (CRL).
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;

		/**
		 * The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		trustAnchorArn: string;
	}
	export interface ImportCrlPostBodyFormProperties {

		/**
		 * The x509 v3 specified certificate revocation list (CRL).
		 * Required
		 * Max length: 300000
		 * Min length: 1
		 */
		crlData: FormControl<string | null | undefined>,

		/** Specifies whether the certificate revocation list (CRL) is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The name of the certificate revocation list (CRL).
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The ARN of the TrustAnchor the certificate revocation list (CRL) will provide revocation for.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		trustAnchorArn: FormControl<string | null | undefined>,
	}
	export function CreateImportCrlPostBodyFormGroup() {
		return new FormGroup<ImportCrlPostBodyFormProperties>({
			crlData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300000)]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[ a-zA-Z0-9-_]*$')]),
			trustAnchorArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('^arn:aws(-[^:]+)?:rolesanywhere(:.*){2}(:trust-anchor.*)$')]),
		});

	}

	export interface PutNotificationSettingsPatchBody {

		/**
		 * A list of notification settings to be associated to the trust anchor.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		notificationSettings: Array<NotificationSetting>;

		/**
		 * The unique identifier of the trust anchor.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		trustAnchorId: string;
	}
	export interface PutNotificationSettingsPatchBodyFormProperties {

		/**
		 * The unique identifier of the trust anchor.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		trustAnchorId: FormControl<string | null | undefined>,
	}
	export function CreatePutNotificationSettingsPatchBodyFormGroup() {
		return new FormGroup<PutNotificationSettingsPatchBodyFormProperties>({
			trustAnchorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-f0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}')]),
		});

	}

	export interface ResetNotificationSettingsPatchBody {

		/**
		 * A list of notification setting keys to reset. A notification setting key includes the event and the channel.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		notificationSettingKeys: Array<NotificationSettingKey>;

		/**
		 * The unique identifier of the trust anchor.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		trustAnchorId: string;
	}
	export interface ResetNotificationSettingsPatchBodyFormProperties {

		/**
		 * The unique identifier of the trust anchor.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		trustAnchorId: FormControl<string | null | undefined>,
	}
	export function CreateResetNotificationSettingsPatchBodyFormGroup() {
		return new FormGroup<ResetNotificationSettingsPatchBodyFormProperties>({
			trustAnchorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('[a-f0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The ARN of the resource.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		resourceArn: string;

		/**
		 * The tags to attach to the resource.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The ARN of the resource.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * The ARN of the resource.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		resourceArn: string;

		/**
		 * A list of keys. Tag keys are the unique identifiers of tags.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The ARN of the resource.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
		});

	}

}

