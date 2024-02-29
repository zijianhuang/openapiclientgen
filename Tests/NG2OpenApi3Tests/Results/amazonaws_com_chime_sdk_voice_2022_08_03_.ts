import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorResponseFormProperties {
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorResponseFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorResponseFormProperties>({
		});

	}


	/** If a phone number action fails for one or more of the phone numbers in a request, a list of the failed phone numbers is returned, along with error codes and error messages. */
	export interface PhoneNumberError {
		PhoneNumberId?: string;
		ErrorCode?: ErrorCode;
		ErrorMessage?: string;
	}

	/** If a phone number action fails for one or more of the phone numbers in a request, a list of the failed phone numbers is returned, along with error codes and error messages. */
	export interface PhoneNumberErrorFormProperties {
		PhoneNumberId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberErrorFormGroup() {
		return new FormGroup<PhoneNumberErrorFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { BadRequest = 'BadRequest', Conflict = 'Conflict', Forbidden = 'Forbidden', NotFound = 'NotFound', PreconditionFailed = 'PreconditionFailed', ResourceLimitExceeded = 'ResourceLimitExceeded', ServiceFailure = 'ServiceFailure', AccessDenied = 'AccessDenied', ServiceUnavailable = 'ServiceUnavailable', Throttled = 'Throttled', Throttling = 'Throttling', Unauthorized = 'Unauthorized', Unprocessable = 'Unprocessable', VoiceConnectorGroupAssociationsExist = 'VoiceConnectorGroupAssociationsExist', PhoneNumberAssociationsExist = 'PhoneNumberAssociationsExist', Gone = 'Gone' }

	export interface UnauthorizedClientException {
	}
	export interface UnauthorizedClientExceptionFormProperties {
	}
	export function CreateUnauthorizedClientExceptionFormGroup() {
		return new FormGroup<UnauthorizedClientExceptionFormProperties>({
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

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
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

	export interface ThrottledClientException {
	}
	export interface ThrottledClientExceptionFormProperties {
	}
	export function CreateThrottledClientExceptionFormGroup() {
		return new FormGroup<ThrottledClientExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface ServiceFailureException {
	}
	export interface ServiceFailureExceptionFormProperties {
	}
	export function CreateServiceFailureExceptionFormGroup() {
		return new FormGroup<ServiceFailureExceptionFormProperties>({
		});

	}

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponseFormProperties {
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorGroupResponseFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorGroupResponseFormProperties>({
		});

	}

	export interface BatchDeletePhoneNumberResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface BatchDeletePhoneNumberResponseFormProperties {
	}
	export function CreateBatchDeletePhoneNumberResponseFormGroup() {
		return new FormGroup<BatchDeletePhoneNumberResponseFormProperties>({
		});

	}

	export interface BatchUpdatePhoneNumberResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface BatchUpdatePhoneNumberResponseFormProperties {
	}
	export function CreateBatchUpdatePhoneNumberResponseFormGroup() {
		return new FormGroup<BatchUpdatePhoneNumberResponseFormProperties>({
		});

	}


	/** The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions. */
	export interface UpdatePhoneNumberRequestItem {

		/** Required */
		PhoneNumberId: string;
		ProductType?: PhoneNumberProductType;
		CallingName?: string;
	}

	/** The phone number ID, product type, or calling name fields to update, used with the <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions. */
	export interface UpdatePhoneNumberRequestItemFormProperties {

		/** Required */
		PhoneNumberId: FormControl<string | null | undefined>,
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
		CallingName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberRequestItemFormGroup() {
		return new FormGroup<UpdatePhoneNumberRequestItemFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined),
			CallingName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberProductType { VoiceConnector = 'VoiceConnector', SipMediaApplicationDialIn = 'SipMediaApplicationDialIn' }

	export interface CreatePhoneNumberOrderResponse {
		PhoneNumberOrder?: PhoneNumberOrder;
	}
	export interface CreatePhoneNumberOrderResponseFormProperties {
	}
	export function CreateCreatePhoneNumberOrderResponseFormGroup() {
		return new FormGroup<CreatePhoneNumberOrderResponseFormProperties>({
		});

	}


	/** The details of an Amazon Chime SDK phone number order. */
	export interface PhoneNumberOrder {
		PhoneNumberOrderId?: string;
		ProductType?: PhoneNumberProductType;
		Status?: PhoneNumberOrderStatus;
		OrderType?: PhoneNumberOrderType;
		OrderedPhoneNumbers?: Array<OrderedPhoneNumber>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** The details of an Amazon Chime SDK phone number order. */
	export interface PhoneNumberOrderFormProperties {
		PhoneNumberOrderId: FormControl<string | null | undefined>,
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
		Status: FormControl<PhoneNumberOrderStatus | null | undefined>,
		OrderType: FormControl<PhoneNumberOrderType | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePhoneNumberOrderFormGroup() {
		return new FormGroup<PhoneNumberOrderFormProperties>({
			PhoneNumberOrderId: new FormControl<string | null | undefined>(undefined),
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined),
			Status: new FormControl<PhoneNumberOrderStatus | null | undefined>(undefined),
			OrderType: new FormControl<PhoneNumberOrderType | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberOrderStatus { Processing = 'Processing', Successful = 'Successful', Failed = 'Failed', Partial = 'Partial', PendingDocuments = 'PendingDocuments', Submitted = 'Submitted', FOC = 'FOC', ChangeRequested = 'ChangeRequested', Exception = 'Exception', CancelRequested = 'CancelRequested', Cancelled = 'Cancelled' }

	export enum PhoneNumberOrderType { New = 'New', Porting = 'Porting' }


	/** A phone number for which an order has been placed. */
	export interface OrderedPhoneNumber {
		E164PhoneNumber?: string;
		Status?: OrderedPhoneNumberStatus;
	}

	/** A phone number for which an order has been placed. */
	export interface OrderedPhoneNumberFormProperties {
		E164PhoneNumber: FormControl<string | null | undefined>,
		Status: FormControl<OrderedPhoneNumberStatus | null | undefined>,
	}
	export function CreateOrderedPhoneNumberFormGroup() {
		return new FormGroup<OrderedPhoneNumberFormProperties>({
			E164PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OrderedPhoneNumberStatus | null | undefined>(undefined),
		});

	}

	export enum OrderedPhoneNumberStatus { Processing = 'Processing', Acquired = 'Acquired', Failed = 'Failed' }

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateProxySessionResponse {
		ProxySession?: ProxySession;
	}
	export interface CreateProxySessionResponseFormProperties {
	}
	export function CreateCreateProxySessionResponseFormGroup() {
		return new FormGroup<CreateProxySessionResponseFormProperties>({
		});

	}


	/** The proxy session for an Amazon Chime SDK Voice Connector. */
	export interface ProxySession {
		VoiceConnectorId?: string;
		ProxySessionId?: string;
		Name?: string;
		Status?: ProxySessionStatus;
		ExpiryMinutes?: number | null;
		Capabilities?: Array<Capability>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		EndedTimestamp?: Date;
		Participants?: Array<Participant>;
		NumberSelectionBehavior?: NumberSelectionBehavior;
		GeoMatchLevel?: GeoMatchLevel;
		GeoMatchParams?: GeoMatchParams;
	}

	/** The proxy session for an Amazon Chime SDK Voice Connector. */
	export interface ProxySessionFormProperties {
		VoiceConnectorId: FormControl<string | null | undefined>,
		ProxySessionId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<ProxySessionStatus | null | undefined>,
		ExpiryMinutes: FormControl<number | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		EndedTimestamp: FormControl<Date | null | undefined>,
		NumberSelectionBehavior: FormControl<NumberSelectionBehavior | null | undefined>,
		GeoMatchLevel: FormControl<GeoMatchLevel | null | undefined>,
	}
	export function CreateProxySessionFormGroup() {
		return new FormGroup<ProxySessionFormProperties>({
			VoiceConnectorId: new FormControl<string | null | undefined>(undefined),
			ProxySessionId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ProxySessionStatus | null | undefined>(undefined),
			ExpiryMinutes: new FormControl<number | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			EndedTimestamp: new FormControl<Date | null | undefined>(undefined),
			NumberSelectionBehavior: new FormControl<NumberSelectionBehavior | null | undefined>(undefined),
			GeoMatchLevel: new FormControl<GeoMatchLevel | null | undefined>(undefined),
		});

	}

	export enum ProxySessionStatus { Open = 'Open', InProgress = 'InProgress', Closed = 'Closed' }

	export enum Capability { Voice = 'Voice', SMS = 'SMS' }


	/** The phone number and proxy phone number for a participant in an Amazon Chime SDK Voice Connector proxy session. */
	export interface Participant {
		PhoneNumber?: string;
		ProxyPhoneNumber?: string;
	}

	/** The phone number and proxy phone number for a participant in an Amazon Chime SDK Voice Connector proxy session. */
	export interface ParticipantFormProperties {
		PhoneNumber: FormControl<string | null | undefined>,
		ProxyPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateParticipantFormGroup() {
		return new FormGroup<ParticipantFormProperties>({
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			ProxyPhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NumberSelectionBehavior { PreferSticky = 'PreferSticky', AvoidSticky = 'AvoidSticky' }

	export enum GeoMatchLevel { Country = 'Country', AreaCode = 'AreaCode' }


	/** The country and area code for a proxy phone number in a proxy phone session. */
	export interface GeoMatchParams {

		/** Required */
		Country: string;

		/** Required */
		AreaCode: string;
	}

	/** The country and area code for a proxy phone number in a proxy phone session. */
	export interface GeoMatchParamsFormProperties {

		/** Required */
		Country: FormControl<string | null | undefined>,

		/** Required */
		AreaCode: FormControl<string | null | undefined>,
	}
	export function CreateGeoMatchParamsFormGroup() {
		return new FormGroup<GeoMatchParamsFormProperties>({
			Country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AreaCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSipMediaApplicationResponse {
		SipMediaApplication?: SipMediaApplication;
	}
	export interface CreateSipMediaApplicationResponseFormProperties {
	}
	export function CreateCreateSipMediaApplicationResponseFormGroup() {
		return new FormGroup<CreateSipMediaApplicationResponseFormProperties>({
		});

	}


	/** The details of the SIP media application, including name and endpoints. An AWS account can have multiple SIP media applications. */
	export interface SipMediaApplication {
		SipMediaApplicationId?: string;
		AwsRegion?: string;
		Name?: string;
		Endpoints?: Array<SipMediaApplicationEndpoint>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		SipMediaApplicationArn?: string;
	}

	/** The details of the SIP media application, including name and endpoints. An AWS account can have multiple SIP media applications. */
	export interface SipMediaApplicationFormProperties {
		SipMediaApplicationId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		SipMediaApplicationArn: FormControl<string | null | undefined>,
	}
	export function CreateSipMediaApplicationFormGroup() {
		return new FormGroup<SipMediaApplicationFormProperties>({
			SipMediaApplicationId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			SipMediaApplicationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The endpoint assigned to a SIP media application. */
	export interface SipMediaApplicationEndpoint {
		LambdaArn?: string;
	}

	/** The endpoint assigned to a SIP media application. */
	export interface SipMediaApplicationEndpointFormProperties {
		LambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateSipMediaApplicationEndpointFormGroup() {
		return new FormGroup<SipMediaApplicationEndpointFormProperties>({
			LambdaArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a tag applied to a resource. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Describes a tag applied to a resource. */
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateSipMediaApplicationCallResponse {
		SipMediaApplicationCall?: SipMediaApplicationCall;
	}
	export interface CreateSipMediaApplicationCallResponseFormProperties {
	}
	export function CreateCreateSipMediaApplicationCallResponseFormGroup() {
		return new FormGroup<CreateSipMediaApplicationCallResponseFormProperties>({
		});

	}


	/** A <code>Call</code> instance for a SIP media application. */
	export interface SipMediaApplicationCall {
		TransactionId?: string;
	}

	/** A <code>Call</code> instance for a SIP media application. */
	export interface SipMediaApplicationCallFormProperties {
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateSipMediaApplicationCallFormGroup() {
		return new FormGroup<SipMediaApplicationCallFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSipRuleResponse {
		SipRule?: SipRule;
	}
	export interface CreateSipRuleResponseFormProperties {
	}
	export function CreateCreateSipRuleResponseFormGroup() {
		return new FormGroup<CreateSipRuleResponseFormProperties>({
		});

	}


	/** The details of a SIP rule, including name, triggers, and target applications. An AWS account can have multiple SIP rules. */
	export interface SipRule {
		SipRuleId?: string;
		Name?: string;
		Disabled?: boolean | null;
		TriggerType?: SipRuleTriggerType;
		TriggerValue?: string;
		TargetApplications?: Array<SipRuleTargetApplication>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** The details of a SIP rule, including name, triggers, and target applications. An AWS account can have multiple SIP rules. */
	export interface SipRuleFormProperties {
		SipRuleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
		TriggerType: FormControl<SipRuleTriggerType | null | undefined>,
		TriggerValue: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateSipRuleFormGroup() {
		return new FormGroup<SipRuleFormProperties>({
			SipRuleId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
			TriggerType: new FormControl<SipRuleTriggerType | null | undefined>(undefined),
			TriggerValue: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SipRuleTriggerType { ToPhoneNumber = 'ToPhoneNumber', RequestUriHostname = 'RequestUriHostname' }


	/** A target SIP media application and other details, such as priority and AWS Region, to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided. */
	export interface SipRuleTargetApplication {
		SipMediaApplicationId?: string;
		Priority?: number | null;
		AwsRegion?: string;
	}

	/** A target SIP media application and other details, such as priority and AWS Region, to be specified in the SIP rule. Only one SIP rule per AWS Region can be provided. */
	export interface SipRuleTargetApplicationFormProperties {
		SipMediaApplicationId: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		AwsRegion: FormControl<string | null | undefined>,
	}
	export function CreateSipRuleTargetApplicationFormGroup() {
		return new FormGroup<SipRuleTargetApplicationFormProperties>({
			SipMediaApplicationId: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			AwsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVoiceConnectorResponse {
		VoiceConnector?: VoiceConnector;
	}
	export interface CreateVoiceConnectorResponseFormProperties {
	}
	export function CreateCreateVoiceConnectorResponseFormGroup() {
		return new FormGroup<CreateVoiceConnectorResponseFormProperties>({
		});

	}


	/** The Amazon Chime SDK Voice Connector configuration, including outbound host name and encryption settings. */
	export interface VoiceConnector {
		VoiceConnectorId?: string;
		AwsRegion?: VoiceConnectorAwsRegion;
		Name?: string;
		OutboundHostName?: string;
		RequireEncryption?: boolean | null;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		VoiceConnectorArn?: string;
	}

	/** The Amazon Chime SDK Voice Connector configuration, including outbound host name and encryption settings. */
	export interface VoiceConnectorFormProperties {
		VoiceConnectorId: FormControl<string | null | undefined>,
		AwsRegion: FormControl<VoiceConnectorAwsRegion | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OutboundHostName: FormControl<string | null | undefined>,
		RequireEncryption: FormControl<boolean | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		VoiceConnectorArn: FormControl<string | null | undefined>,
	}
	export function CreateVoiceConnectorFormGroup() {
		return new FormGroup<VoiceConnectorFormProperties>({
			VoiceConnectorId: new FormControl<string | null | undefined>(undefined),
			AwsRegion: new FormControl<VoiceConnectorAwsRegion | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OutboundHostName: new FormControl<string | null | undefined>(undefined),
			RequireEncryption: new FormControl<boolean | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			VoiceConnectorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VoiceConnectorAwsRegion { 'us-east-1' = 'us-east-1', 'us-west-2' = 'us-west-2', 'ca-central-1' = 'ca-central-1', 'eu-central-1' = 'eu-central-1', 'eu-west-1' = 'eu-west-1', 'eu-west-2' = 'eu-west-2', 'ap-northeast-2' = 'ap-northeast-2', 'ap-northeast-1' = 'ap-northeast-1', 'ap-southeast-1' = 'ap-southeast-1', 'ap-southeast-2' = 'ap-southeast-2' }

	export interface CreateVoiceConnectorGroupResponse {
		VoiceConnectorGroup?: VoiceConnectorGroup;
	}
	export interface CreateVoiceConnectorGroupResponseFormProperties {
	}
	export function CreateCreateVoiceConnectorGroupResponseFormGroup() {
		return new FormGroup<CreateVoiceConnectorGroupResponseFormProperties>({
		});

	}


	/** The Amazon Chime SDK Voice Connector group configuration, including associated Voice Connectors. You can include Voice Connectors from different AWS Regions in a group. This creates a fault tolerant mechanism for fallback in case of availability events. */
	export interface VoiceConnectorGroup {
		VoiceConnectorGroupId?: string;
		Name?: string;
		VoiceConnectorItems?: Array<VoiceConnectorItem>;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		VoiceConnectorGroupArn?: string;
	}

	/** The Amazon Chime SDK Voice Connector group configuration, including associated Voice Connectors. You can include Voice Connectors from different AWS Regions in a group. This creates a fault tolerant mechanism for fallback in case of availability events. */
	export interface VoiceConnectorGroupFormProperties {
		VoiceConnectorGroupId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		VoiceConnectorGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateVoiceConnectorGroupFormGroup() {
		return new FormGroup<VoiceConnectorGroupFormProperties>({
			VoiceConnectorGroupId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			VoiceConnectorGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For Amazon Chime SDK Voice Connector groups, the Amazon Chime SDK Voice Connectors to which you route inbound calls. Includes priority configuration settings. Limit: 3 VoiceConnectorItems per Voice Connector group. */
	export interface VoiceConnectorItem {

		/** Required */
		VoiceConnectorId: string;

		/** Required */
		Priority: number;
	}

	/** For Amazon Chime SDK Voice Connector groups, the Amazon Chime SDK Voice Connectors to which you route inbound calls. Includes priority configuration settings. Limit: 3 VoiceConnectorItems per Voice Connector group. */
	export interface VoiceConnectorItemFormProperties {

		/** Required */
		VoiceConnectorId: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateVoiceConnectorItemFormGroup() {
		return new FormGroup<VoiceConnectorItemFormProperties>({
			VoiceConnectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVoiceProfileResponse {
		VoiceProfile?: VoiceProfile;
	}
	export interface CreateVoiceProfileResponseFormProperties {
	}
	export function CreateCreateVoiceProfileResponseFormGroup() {
		return new FormGroup<CreateVoiceProfileResponseFormProperties>({
		});

	}


	/** The combination of a voice print and caller ID. */
	export interface VoiceProfile {
		VoiceProfileId?: string;
		VoiceProfileArn?: string;
		VoiceProfileDomainId?: string;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		ExpirationTimestamp?: Date;
	}

	/** The combination of a voice print and caller ID. */
	export interface VoiceProfileFormProperties {
		VoiceProfileId: FormControl<string | null | undefined>,
		VoiceProfileArn: FormControl<string | null | undefined>,
		VoiceProfileDomainId: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		ExpirationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateVoiceProfileFormGroup() {
		return new FormGroup<VoiceProfileFormProperties>({
			VoiceProfileId: new FormControl<string | null | undefined>(undefined),
			VoiceProfileArn: new FormControl<string | null | undefined>(undefined),
			VoiceProfileDomainId: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ExpirationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GoneException {
	}
	export interface GoneExceptionFormProperties {
	}
	export function CreateGoneExceptionFormGroup() {
		return new FormGroup<GoneExceptionFormProperties>({
		});

	}

	export interface CreateVoiceProfileDomainResponse {
		VoiceProfileDomain?: VoiceProfileDomain;
	}
	export interface CreateVoiceProfileDomainResponseFormProperties {
	}
	export function CreateCreateVoiceProfileDomainResponseFormGroup() {
		return new FormGroup<CreateVoiceProfileDomainResponseFormProperties>({
		});

	}


	/** A collection of voice profiles. */
	export interface VoiceProfileDomain {
		VoiceProfileDomainId?: string;
		VoiceProfileDomainArn?: string;
		Name?: string;
		Description?: string;
		ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** A collection of voice profiles. */
	export interface VoiceProfileDomainFormProperties {
		VoiceProfileDomainId: FormControl<string | null | undefined>,
		VoiceProfileDomainArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateVoiceProfileDomainFormGroup() {
		return new FormGroup<VoiceProfileDomainFormProperties>({
			VoiceProfileDomainId: new FormControl<string | null | undefined>(undefined),
			VoiceProfileDomainArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p>A structure that contains the configuration settings for server-side encryption.</p> <note> <p>We only support symmetric keys. Do not use asymmetric or HMAC keys, or KMS aliases.</p> </note> */
	export interface ServerSideEncryptionConfiguration {

		/** Required */
		KmsKeyArn: string;
	}

	/** <p>A structure that contains the configuration settings for server-side encryption.</p> <note> <p>We only support symmetric keys. Do not use asymmetric or HMAC keys, or KMS aliases.</p> </note> */
	export interface ServerSideEncryptionConfigurationFormProperties {

		/** Required */
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateServerSideEncryptionConfigurationFormGroup() {
		return new FormGroup<ServerSideEncryptionConfigurationFormProperties>({
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorResponseFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorResponseFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorResponseFormProperties>({
		});

	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
		PhoneNumberErrors?: Array<PhoneNumberError>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponseFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorGroupResponseFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorGroupResponseFormProperties>({
		});

	}

	export interface GetGlobalSettingsResponse {
		VoiceConnector?: VoiceConnectorSettings;
	}
	export interface GetGlobalSettingsResponseFormProperties {
	}
	export function CreateGetGlobalSettingsResponseFormGroup() {
		return new FormGroup<GetGlobalSettingsResponseFormProperties>({
		});

	}


	/** The Amazon Chime SDK Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
	export interface VoiceConnectorSettings {
		CdrBucket?: string;
	}

	/** The Amazon Chime SDK Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
	export interface VoiceConnectorSettingsFormProperties {
		CdrBucket: FormControl<string | null | undefined>,
	}
	export function CreateVoiceConnectorSettingsFormGroup() {
		return new FormGroup<VoiceConnectorSettingsFormProperties>({
			CdrBucket: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPhoneNumberResponse {
		PhoneNumber?: PhoneNumber;
	}
	export interface GetPhoneNumberResponseFormProperties {
	}
	export function CreateGetPhoneNumberResponseFormGroup() {
		return new FormGroup<GetPhoneNumberResponseFormProperties>({
		});

	}


	/** A phone number used to call an Amazon Chime SDK Voice Connector. */
	export interface PhoneNumber {
		PhoneNumberId?: string;
		E164PhoneNumber?: string;
		Country?: string;
		Type?: PhoneNumberType;
		ProductType?: PhoneNumberProductType;
		Status?: PhoneNumberStatus;
		Capabilities?: PhoneNumberCapabilities;
		Associations?: Array<PhoneNumberAssociation>;
		CallingName?: string;
		CallingNameStatus?: CallingNameStatus;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		DeletionTimestamp?: Date;
		OrderId?: string;
	}

	/** A phone number used to call an Amazon Chime SDK Voice Connector. */
	export interface PhoneNumberFormProperties {
		PhoneNumberId: FormControl<string | null | undefined>,
		E164PhoneNumber: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		Type: FormControl<PhoneNumberType | null | undefined>,
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
		Status: FormControl<PhoneNumberStatus | null | undefined>,
		CallingName: FormControl<string | null | undefined>,
		CallingNameStatus: FormControl<CallingNameStatus | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		DeletionTimestamp: FormControl<Date | null | undefined>,
		OrderId: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberFormGroup() {
		return new FormGroup<PhoneNumberFormProperties>({
			PhoneNumberId: new FormControl<string | null | undefined>(undefined),
			E164PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<PhoneNumberType | null | undefined>(undefined),
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined),
			Status: new FormControl<PhoneNumberStatus | null | undefined>(undefined),
			CallingName: new FormControl<string | null | undefined>(undefined),
			CallingNameStatus: new FormControl<CallingNameStatus | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			DeletionTimestamp: new FormControl<Date | null | undefined>(undefined),
			OrderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberType { Local = 'Local', TollFree = 'TollFree' }

	export enum PhoneNumberStatus { Cancelled = 'Cancelled', PortinCancelRequested = 'PortinCancelRequested', PortinInProgress = 'PortinInProgress', AcquireInProgress = 'AcquireInProgress', AcquireFailed = 'AcquireFailed', Unassigned = 'Unassigned', Assigned = 'Assigned', ReleaseInProgress = 'ReleaseInProgress', DeleteInProgress = 'DeleteInProgress', ReleaseFailed = 'ReleaseFailed', DeleteFailed = 'DeleteFailed' }


	/** The phone number capabilities for Amazon Chime SDK phone numbers, such as enabled inbound and outbound calling, and text messaging. */
	export interface PhoneNumberCapabilities {
		InboundCall?: boolean | null;
		OutboundCall?: boolean | null;
		InboundSMS?: boolean | null;
		OutboundSMS?: boolean | null;
		InboundMMS?: boolean | null;
		OutboundMMS?: boolean | null;
	}

	/** The phone number capabilities for Amazon Chime SDK phone numbers, such as enabled inbound and outbound calling, and text messaging. */
	export interface PhoneNumberCapabilitiesFormProperties {
		InboundCall: FormControl<boolean | null | undefined>,
		OutboundCall: FormControl<boolean | null | undefined>,
		InboundSMS: FormControl<boolean | null | undefined>,
		OutboundSMS: FormControl<boolean | null | undefined>,
		InboundMMS: FormControl<boolean | null | undefined>,
		OutboundMMS: FormControl<boolean | null | undefined>,
	}
	export function CreatePhoneNumberCapabilitiesFormGroup() {
		return new FormGroup<PhoneNumberCapabilitiesFormProperties>({
			InboundCall: new FormControl<boolean | null | undefined>(undefined),
			OutboundCall: new FormControl<boolean | null | undefined>(undefined),
			InboundSMS: new FormControl<boolean | null | undefined>(undefined),
			OutboundSMS: new FormControl<boolean | null | undefined>(undefined),
			InboundMMS: new FormControl<boolean | null | undefined>(undefined),
			OutboundMMS: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The phone number associations, such as an Amazon Chime SDK account ID, user ID, Voice Connector ID, or Voice Connector group ID. */
	export interface PhoneNumberAssociation {
		Value?: string;
		Name?: PhoneNumberAssociationName;
		AssociatedTimestamp?: Date;
	}

	/** The phone number associations, such as an Amazon Chime SDK account ID, user ID, Voice Connector ID, or Voice Connector group ID. */
	export interface PhoneNumberAssociationFormProperties {
		Value: FormControl<string | null | undefined>,
		Name: FormControl<PhoneNumberAssociationName | null | undefined>,
		AssociatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreatePhoneNumberAssociationFormGroup() {
		return new FormGroup<PhoneNumberAssociationFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<PhoneNumberAssociationName | null | undefined>(undefined),
			AssociatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PhoneNumberAssociationName { VoiceConnectorId = 'VoiceConnectorId', VoiceConnectorGroupId = 'VoiceConnectorGroupId', SipRuleId = 'SipRuleId' }

	export enum CallingNameStatus { Unassigned = 'Unassigned', UpdateInProgress = 'UpdateInProgress', UpdateSucceeded = 'UpdateSucceeded', UpdateFailed = 'UpdateFailed' }

	export interface GetPhoneNumberOrderResponse {
		PhoneNumberOrder?: PhoneNumberOrder;
	}
	export interface GetPhoneNumberOrderResponseFormProperties {
	}
	export function CreateGetPhoneNumberOrderResponseFormGroup() {
		return new FormGroup<GetPhoneNumberOrderResponseFormProperties>({
		});

	}

	export interface GetPhoneNumberSettingsResponse {
		CallingName?: string;
		CallingNameUpdatedTimestamp?: Date;
	}
	export interface GetPhoneNumberSettingsResponseFormProperties {
		CallingName: FormControl<string | null | undefined>,
		CallingNameUpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateGetPhoneNumberSettingsResponseFormGroup() {
		return new FormGroup<GetPhoneNumberSettingsResponseFormProperties>({
			CallingName: new FormControl<string | null | undefined>(undefined),
			CallingNameUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetProxySessionResponse {
		ProxySession?: ProxySession;
	}
	export interface GetProxySessionResponseFormProperties {
	}
	export function CreateGetProxySessionResponseFormGroup() {
		return new FormGroup<GetProxySessionResponseFormProperties>({
		});

	}

	export interface GetSipMediaApplicationResponse {
		SipMediaApplication?: SipMediaApplication;
	}
	export interface GetSipMediaApplicationResponseFormProperties {
	}
	export function CreateGetSipMediaApplicationResponseFormGroup() {
		return new FormGroup<GetSipMediaApplicationResponseFormProperties>({
		});

	}

	export interface GetSipMediaApplicationAlexaSkillConfigurationResponse {
		SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
	}
	export interface GetSipMediaApplicationAlexaSkillConfigurationResponseFormProperties {
	}
	export function CreateGetSipMediaApplicationAlexaSkillConfigurationResponseFormGroup() {
		return new FormGroup<GetSipMediaApplicationAlexaSkillConfigurationResponseFormProperties>({
		});

	}


	/** The Alexa Skill configuration of a SIP media application. */
	export interface SipMediaApplicationAlexaSkillConfiguration {

		/** Required */
		AlexaSkillStatus: AlexaSkillStatus;

		/** Required */
		AlexaSkillIds: Array<string>;
	}

	/** The Alexa Skill configuration of a SIP media application. */
	export interface SipMediaApplicationAlexaSkillConfigurationFormProperties {

		/** Required */
		AlexaSkillStatus: FormControl<AlexaSkillStatus | null | undefined>,
	}
	export function CreateSipMediaApplicationAlexaSkillConfigurationFormGroup() {
		return new FormGroup<SipMediaApplicationAlexaSkillConfigurationFormProperties>({
			AlexaSkillStatus: new FormControl<AlexaSkillStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AlexaSkillStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }

	export interface GetSipMediaApplicationLoggingConfigurationResponse {
		SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
	}
	export interface GetSipMediaApplicationLoggingConfigurationResponseFormProperties {
	}
	export function CreateGetSipMediaApplicationLoggingConfigurationResponseFormGroup() {
		return new FormGroup<GetSipMediaApplicationLoggingConfigurationResponseFormProperties>({
		});

	}


	/** The logging configuration of a SIP media application. */
	export interface SipMediaApplicationLoggingConfiguration {
		EnableSipMediaApplicationMessageLogs?: boolean | null;
	}

	/** The logging configuration of a SIP media application. */
	export interface SipMediaApplicationLoggingConfigurationFormProperties {
		EnableSipMediaApplicationMessageLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateSipMediaApplicationLoggingConfigurationFormGroup() {
		return new FormGroup<SipMediaApplicationLoggingConfigurationFormProperties>({
			EnableSipMediaApplicationMessageLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetSipRuleResponse {
		SipRule?: SipRule;
	}
	export interface GetSipRuleResponseFormProperties {
	}
	export function CreateGetSipRuleResponseFormGroup() {
		return new FormGroup<GetSipRuleResponseFormProperties>({
		});

	}

	export interface GetSpeakerSearchTaskResponse {
		SpeakerSearchTask?: SpeakerSearchTask;
	}
	export interface GetSpeakerSearchTaskResponseFormProperties {
	}
	export function CreateGetSpeakerSearchTaskResponseFormGroup() {
		return new FormGroup<GetSpeakerSearchTaskResponseFormProperties>({
		});

	}


	/** A representation of an asynchronous request to perform speaker search analysis on a Voice Connector call. */
	export interface SpeakerSearchTask {
		SpeakerSearchTaskId?: string;
		SpeakerSearchTaskStatus?: string;
		CallDetails?: CallDetails;
		SpeakerSearchDetails?: SpeakerSearchDetails;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		StartedTimestamp?: Date;
		StatusMessage?: string;
	}

	/** A representation of an asynchronous request to perform speaker search analysis on a Voice Connector call. */
	export interface SpeakerSearchTaskFormProperties {
		SpeakerSearchTaskId: FormControl<string | null | undefined>,
		SpeakerSearchTaskStatus: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		StartedTimestamp: FormControl<Date | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateSpeakerSearchTaskFormGroup() {
		return new FormGroup<SpeakerSearchTaskFormProperties>({
			SpeakerSearchTaskId: new FormControl<string | null | undefined>(undefined),
			SpeakerSearchTaskStatus: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			StartedTimestamp: new FormControl<Date | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of an Amazon Chime SDK Voice Connector call. */
	export interface CallDetails {
		VoiceConnectorId?: string;
		TransactionId?: string;
		IsCaller?: boolean | null;
	}

	/** The details of an Amazon Chime SDK Voice Connector call. */
	export interface CallDetailsFormProperties {
		VoiceConnectorId: FormControl<string | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
		IsCaller: FormControl<boolean | null | undefined>,
	}
	export function CreateCallDetailsFormGroup() {
		return new FormGroup<CallDetailsFormProperties>({
			VoiceConnectorId: new FormControl<string | null | undefined>(undefined),
			TransactionId: new FormControl<string | null | undefined>(undefined),
			IsCaller: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The details of a speaker search task. */
	export interface SpeakerSearchDetails {
		Results?: Array<SpeakerSearchResult>;
		VoiceprintGenerationStatus?: string;
	}

	/** The details of a speaker search task. */
	export interface SpeakerSearchDetailsFormProperties {
		VoiceprintGenerationStatus: FormControl<string | null | undefined>,
	}
	export function CreateSpeakerSearchDetailsFormGroup() {
		return new FormGroup<SpeakerSearchDetailsFormProperties>({
			VoiceprintGenerationStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a speaker search analysis. */
	export interface SpeakerSearchResult {
		ConfidenceScore?: number;
		VoiceProfileId?: string;
	}

	/** The result of a speaker search analysis. */
	export interface SpeakerSearchResultFormProperties {
		ConfidenceScore: FormControl<number | null | undefined>,
		VoiceProfileId: FormControl<string | null | undefined>,
	}
	export function CreateSpeakerSearchResultFormGroup() {
		return new FormGroup<SpeakerSearchResultFormProperties>({
			ConfidenceScore: new FormControl<number | null | undefined>(undefined),
			VoiceProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVoiceConnectorResponse {
		VoiceConnector?: VoiceConnector;
	}
	export interface GetVoiceConnectorResponseFormProperties {
	}
	export function CreateGetVoiceConnectorResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorResponseFormProperties>({
		});

	}

	export interface GetVoiceConnectorEmergencyCallingConfigurationResponse {
		EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
	}
	export interface GetVoiceConnectorEmergencyCallingConfigurationResponseFormProperties {
	}
	export function CreateGetVoiceConnectorEmergencyCallingConfigurationResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorEmergencyCallingConfigurationResponseFormProperties>({
		});

	}


	/** The emergency calling configuration details associated with an Amazon Chime SDK Voice Connector. */
	export interface EmergencyCallingConfiguration {
		DNIS?: Array<DNISEmergencyCallingConfiguration>;
	}

	/** The emergency calling configuration details associated with an Amazon Chime SDK Voice Connector. */
	export interface EmergencyCallingConfigurationFormProperties {
	}
	export function CreateEmergencyCallingConfigurationFormGroup() {
		return new FormGroup<EmergencyCallingConfigurationFormProperties>({
		});

	}


	/** The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime SDK Voice Connector's emergency calling configuration. */
	export interface DNISEmergencyCallingConfiguration {

		/** Required */
		EmergencyPhoneNumber: string;
		TestPhoneNumber?: string;

		/** Required */
		CallingCountry: string;
	}

	/** The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime SDK Voice Connector's emergency calling configuration. */
	export interface DNISEmergencyCallingConfigurationFormProperties {

		/** Required */
		EmergencyPhoneNumber: FormControl<string | null | undefined>,
		TestPhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		CallingCountry: FormControl<string | null | undefined>,
	}
	export function CreateDNISEmergencyCallingConfigurationFormGroup() {
		return new FormGroup<DNISEmergencyCallingConfigurationFormProperties>({
			EmergencyPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TestPhoneNumber: new FormControl<string | null | undefined>(undefined),
			CallingCountry: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetVoiceConnectorGroupResponse {
		VoiceConnectorGroup?: VoiceConnectorGroup;
	}
	export interface GetVoiceConnectorGroupResponseFormProperties {
	}
	export function CreateGetVoiceConnectorGroupResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorGroupResponseFormProperties>({
		});

	}

	export interface GetVoiceConnectorLoggingConfigurationResponse {
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface GetVoiceConnectorLoggingConfigurationResponseFormProperties {
	}
	export function CreateGetVoiceConnectorLoggingConfigurationResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorLoggingConfigurationResponseFormProperties>({
		});

	}


	/** The logging configuration associated with an Amazon Chime SDK Voice Connector. Specifies whether SIP message logs can be sent to Amazon CloudWatch Logs. */
	export interface LoggingConfiguration {
		EnableSIPLogs?: boolean | null;
		EnableMediaMetricLogs?: boolean | null;
	}

	/** The logging configuration associated with an Amazon Chime SDK Voice Connector. Specifies whether SIP message logs can be sent to Amazon CloudWatch Logs. */
	export interface LoggingConfigurationFormProperties {
		EnableSIPLogs: FormControl<boolean | null | undefined>,
		EnableMediaMetricLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateLoggingConfigurationFormGroup() {
		return new FormGroup<LoggingConfigurationFormProperties>({
			EnableSIPLogs: new FormControl<boolean | null | undefined>(undefined),
			EnableMediaMetricLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetVoiceConnectorOriginationResponse {
		Origination?: Origination;
	}
	export interface GetVoiceConnectorOriginationResponseFormProperties {
	}
	export function CreateGetVoiceConnectorOriginationResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorOriginationResponseFormProperties>({
		});

	}


	/** <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime SDK Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one.</p> </note> */
	export interface Origination {
		Routes?: Array<OriginationRoute>;
		Disabled?: boolean | null;
	}

	/** <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime SDK Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one.</p> </note> */
	export interface OriginationFormProperties {
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateOriginationFormGroup() {
		return new FormGroup<OriginationFormProperties>({
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Origination routes define call distribution properties for your SIP hosts to receive inbound calls using an Amazon Chime SDK Voice Connector. Limit: Ten origination routes for each Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one.</p> </note> */
	export interface OriginationRoute {
		Host?: string;
		Port?: number | null;
		Protocol?: OriginationRouteProtocol;
		Priority?: number | null;
		Weight?: number | null;
	}

	/** <p>Origination routes define call distribution properties for your SIP hosts to receive inbound calls using an Amazon Chime SDK Voice Connector. Limit: Ten origination routes for each Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one.</p> </note> */
	export interface OriginationRouteFormProperties {
		Host: FormControl<string | null | undefined>,
		Port: FormControl<number | null | undefined>,
		Protocol: FormControl<OriginationRouteProtocol | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		Weight: FormControl<number | null | undefined>,
	}
	export function CreateOriginationRouteFormGroup() {
		return new FormGroup<OriginationRouteFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Protocol: new FormControl<OriginationRouteProtocol | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			Weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OriginationRouteProtocol { TCP = 'TCP', UDP = 'UDP' }

	export interface GetVoiceConnectorProxyResponse {
		Proxy?: Proxy;
	}
	export interface GetVoiceConnectorProxyResponseFormProperties {
	}
	export function CreateGetVoiceConnectorProxyResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorProxyResponseFormProperties>({
		});

	}


	/** The proxy configuration for an Amazon Chime SDK Voice Connector. */
	export interface Proxy {
		DefaultSessionExpiryMinutes?: number | null;
		Disabled?: boolean | null;
		FallBackPhoneNumber?: string;
		PhoneNumberCountries?: Array<string>;
	}

	/** The proxy configuration for an Amazon Chime SDK Voice Connector. */
	export interface ProxyFormProperties {
		DefaultSessionExpiryMinutes: FormControl<number | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
		FallBackPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateProxyFormGroup() {
		return new FormGroup<ProxyFormProperties>({
			DefaultSessionExpiryMinutes: new FormControl<number | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
			FallBackPhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVoiceConnectorStreamingConfigurationResponse {
		StreamingConfiguration?: StreamingConfiguration;
	}
	export interface GetVoiceConnectorStreamingConfigurationResponseFormProperties {
	}
	export function CreateGetVoiceConnectorStreamingConfigurationResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorStreamingConfigurationResponseFormProperties>({
		});

	}


	/** The streaming configuration associated with an Amazon Chime SDK Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
	export interface StreamingConfiguration {

		/** Required */
		DataRetentionInHours: number;

		/** Required */
		Disabled: boolean;
		StreamingNotificationTargets?: Array<StreamingNotificationTarget>;
		MediaInsightsConfiguration?: MediaInsightsConfiguration;
	}

	/** The streaming configuration associated with an Amazon Chime SDK Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours. */
	export interface StreamingConfigurationFormProperties {

		/** Required */
		DataRetentionInHours: FormControl<number | null | undefined>,

		/** Required */
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateStreamingConfigurationFormGroup() {
		return new FormGroup<StreamingConfigurationFormProperties>({
			DataRetentionInHours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Disabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The target recipient for a streaming configuration notification. */
	export interface StreamingNotificationTarget {
		NotificationTarget?: NotificationTarget;
	}

	/** The target recipient for a streaming configuration notification. */
	export interface StreamingNotificationTargetFormProperties {
		NotificationTarget: FormControl<NotificationTarget | null | undefined>,
	}
	export function CreateStreamingNotificationTargetFormGroup() {
		return new FormGroup<StreamingNotificationTargetFormProperties>({
			NotificationTarget: new FormControl<NotificationTarget | null | undefined>(undefined),
		});

	}

	export enum NotificationTarget { EventBridge = 'EventBridge', SNS = 'SNS', SQS = 'SQS' }


	/** The configuration for a call analytics task. */
	export interface MediaInsightsConfiguration {
		Disabled?: boolean | null;
		ConfigurationArn?: string;
	}

	/** The configuration for a call analytics task. */
	export interface MediaInsightsConfigurationFormProperties {
		Disabled: FormControl<boolean | null | undefined>,
		ConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateMediaInsightsConfigurationFormGroup() {
		return new FormGroup<MediaInsightsConfigurationFormProperties>({
			Disabled: new FormControl<boolean | null | undefined>(undefined),
			ConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVoiceConnectorTerminationResponse {
		Termination?: Termination;
	}
	export interface GetVoiceConnectorTerminationResponseFormProperties {
	}
	export function CreateGetVoiceConnectorTerminationResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorTerminationResponseFormProperties>({
		});

	}


	/** Termination settings enable SIP hosts to make outbound calls using an Amazon Chime SDK Voice Connector. */
	export interface Termination {
		CpsLimit?: number | null;
		DefaultPhoneNumber?: string;
		CallingRegions?: Array<string>;
		CidrAllowedList?: Array<string>;
		Disabled?: boolean | null;
	}

	/** Termination settings enable SIP hosts to make outbound calls using an Amazon Chime SDK Voice Connector. */
	export interface TerminationFormProperties {
		CpsLimit: FormControl<number | null | undefined>,
		DefaultPhoneNumber: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateTerminationFormGroup() {
		return new FormGroup<TerminationFormProperties>({
			CpsLimit: new FormControl<number | null | undefined>(undefined),
			DefaultPhoneNumber: new FormControl<string | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetVoiceConnectorTerminationHealthResponse {
		TerminationHealth?: TerminationHealth;
	}
	export interface GetVoiceConnectorTerminationHealthResponseFormProperties {
	}
	export function CreateGetVoiceConnectorTerminationHealthResponseFormGroup() {
		return new FormGroup<GetVoiceConnectorTerminationHealthResponseFormProperties>({
		});

	}


	/** The termination health details, including the source IP address and timestamp of the last successful <code>SIP OPTIONS</code> message from your SIP infrastructure. */
	export interface TerminationHealth {
		Timestamp?: Date;
		Source?: string;
	}

	/** The termination health details, including the source IP address and timestamp of the last successful <code>SIP OPTIONS</code> message from your SIP infrastructure. */
	export interface TerminationHealthFormProperties {
		Timestamp: FormControl<Date | null | undefined>,
		Source: FormControl<string | null | undefined>,
	}
	export function CreateTerminationHealthFormGroup() {
		return new FormGroup<TerminationHealthFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVoiceProfileResponse {
		VoiceProfile?: VoiceProfile;
	}
	export interface GetVoiceProfileResponseFormProperties {
	}
	export function CreateGetVoiceProfileResponseFormGroup() {
		return new FormGroup<GetVoiceProfileResponseFormProperties>({
		});

	}

	export interface GetVoiceProfileDomainResponse {
		VoiceProfileDomain?: VoiceProfileDomain;
	}
	export interface GetVoiceProfileDomainResponseFormProperties {
	}
	export function CreateGetVoiceProfileDomainResponseFormGroup() {
		return new FormGroup<GetVoiceProfileDomainResponseFormProperties>({
		});

	}

	export interface GetVoiceToneAnalysisTaskResponse {
		VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
	}
	export interface GetVoiceToneAnalysisTaskResponseFormProperties {
	}
	export function CreateGetVoiceToneAnalysisTaskResponseFormGroup() {
		return new FormGroup<GetVoiceToneAnalysisTaskResponseFormProperties>({
		});

	}


	/** A representation of an asynchronous request to perform voice tone analysis on a Voice Connector call. */
	export interface VoiceToneAnalysisTask {
		VoiceToneAnalysisTaskId?: string;
		VoiceToneAnalysisTaskStatus?: string;
		CallDetails?: CallDetails;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		StartedTimestamp?: Date;
		StatusMessage?: string;
	}

	/** A representation of an asynchronous request to perform voice tone analysis on a Voice Connector call. */
	export interface VoiceToneAnalysisTaskFormProperties {
		VoiceToneAnalysisTaskId: FormControl<string | null | undefined>,
		VoiceToneAnalysisTaskStatus: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		StartedTimestamp: FormControl<Date | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateVoiceToneAnalysisTaskFormGroup() {
		return new FormGroup<VoiceToneAnalysisTaskFormProperties>({
			VoiceToneAnalysisTaskId: new FormControl<string | null | undefined>(undefined),
			VoiceToneAnalysisTaskStatus: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			StartedTimestamp: new FormControl<Date | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAvailableVoiceConnectorRegionsResponse {
		VoiceConnectorRegions?: Array<VoiceConnectorAwsRegion>;
	}
	export interface ListAvailableVoiceConnectorRegionsResponseFormProperties {
	}
	export function CreateListAvailableVoiceConnectorRegionsResponseFormGroup() {
		return new FormGroup<ListAvailableVoiceConnectorRegionsResponseFormProperties>({
		});

	}

	export interface ListPhoneNumberOrdersResponse {
		PhoneNumberOrders?: Array<PhoneNumberOrder>;
		NextToken?: string;
	}
	export interface ListPhoneNumberOrdersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumberOrdersResponseFormGroup() {
		return new FormGroup<ListPhoneNumberOrdersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPhoneNumbersResponse {
		PhoneNumbers?: Array<PhoneNumber>;
		NextToken?: string;
	}
	export interface ListPhoneNumbersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhoneNumbersResponseFormGroup() {
		return new FormGroup<ListPhoneNumbersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProxySessionsResponse {
		ProxySessions?: Array<ProxySession>;
		NextToken?: string;
	}
	export interface ListProxySessionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProxySessionsResponseFormGroup() {
		return new FormGroup<ListProxySessionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSipMediaApplicationsResponse {
		SipMediaApplications?: Array<SipMediaApplication>;
		NextToken?: string;
	}
	export interface ListSipMediaApplicationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSipMediaApplicationsResponseFormGroup() {
		return new FormGroup<ListSipMediaApplicationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSipRulesResponse {
		SipRules?: Array<SipRule>;
		NextToken?: string;
	}
	export interface ListSipRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSipRulesResponseFormGroup() {
		return new FormGroup<ListSipRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSupportedPhoneNumberCountriesResponse {
		PhoneNumberCountries?: Array<PhoneNumberCountry>;
	}
	export interface ListSupportedPhoneNumberCountriesResponseFormProperties {
	}
	export function CreateListSupportedPhoneNumberCountriesResponseFormGroup() {
		return new FormGroup<ListSupportedPhoneNumberCountriesResponseFormProperties>({
		});

	}


	/** The phone number's country. */
	export interface PhoneNumberCountry {
		CountryCode?: string;
		SupportedPhoneNumberTypes?: Array<PhoneNumberType>;
	}

	/** The phone number's country. */
	export interface PhoneNumberCountryFormProperties {
		CountryCode: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberCountryFormGroup() {
		return new FormGroup<PhoneNumberCountryFormProperties>({
			CountryCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListVoiceConnectorGroupsResponse {
		VoiceConnectorGroups?: Array<VoiceConnectorGroup>;
		NextToken?: string;
	}
	export interface ListVoiceConnectorGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVoiceConnectorGroupsResponseFormGroup() {
		return new FormGroup<ListVoiceConnectorGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVoiceConnectorTerminationCredentialsResponse {
		Usernames?: Array<string>;
	}
	export interface ListVoiceConnectorTerminationCredentialsResponseFormProperties {
	}
	export function CreateListVoiceConnectorTerminationCredentialsResponseFormGroup() {
		return new FormGroup<ListVoiceConnectorTerminationCredentialsResponseFormProperties>({
		});

	}

	export interface ListVoiceConnectorsResponse {
		VoiceConnectors?: Array<VoiceConnector>;
		NextToken?: string;
	}
	export interface ListVoiceConnectorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVoiceConnectorsResponseFormGroup() {
		return new FormGroup<ListVoiceConnectorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVoiceProfileDomainsResponse {
		VoiceProfileDomains?: Array<VoiceProfileDomainSummary>;
		NextToken?: string;
	}
	export interface ListVoiceProfileDomainsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVoiceProfileDomainsResponseFormGroup() {
		return new FormGroup<ListVoiceProfileDomainsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A high-level overview of a voice profile domain. */
	export interface VoiceProfileDomainSummary {
		VoiceProfileDomainId?: string;
		VoiceProfileDomainArn?: string;
		Name?: string;
		Description?: string;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
	}

	/** A high-level overview of a voice profile domain. */
	export interface VoiceProfileDomainSummaryFormProperties {
		VoiceProfileDomainId: FormControl<string | null | undefined>,
		VoiceProfileDomainArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateVoiceProfileDomainSummaryFormGroup() {
		return new FormGroup<VoiceProfileDomainSummaryFormProperties>({
			VoiceProfileDomainId: new FormControl<string | null | undefined>(undefined),
			VoiceProfileDomainArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListVoiceProfilesResponse {
		VoiceProfiles?: Array<VoiceProfileSummary>;
		NextToken?: string;
	}
	export interface ListVoiceProfilesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVoiceProfilesResponseFormGroup() {
		return new FormGroup<ListVoiceProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A high-level summary of a voice profile. */
	export interface VoiceProfileSummary {
		VoiceProfileId?: string;
		VoiceProfileArn?: string;
		VoiceProfileDomainId?: string;
		CreatedTimestamp?: Date;
		UpdatedTimestamp?: Date;
		ExpirationTimestamp?: Date;
	}

	/** A high-level summary of a voice profile. */
	export interface VoiceProfileSummaryFormProperties {
		VoiceProfileId: FormControl<string | null | undefined>,
		VoiceProfileArn: FormControl<string | null | undefined>,
		VoiceProfileDomainId: FormControl<string | null | undefined>,
		CreatedTimestamp: FormControl<Date | null | undefined>,
		UpdatedTimestamp: FormControl<Date | null | undefined>,
		ExpirationTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateVoiceProfileSummaryFormGroup() {
		return new FormGroup<VoiceProfileSummaryFormProperties>({
			VoiceProfileId: new FormControl<string | null | undefined>(undefined),
			VoiceProfileArn: new FormControl<string | null | undefined>(undefined),
			VoiceProfileDomainId: new FormControl<string | null | undefined>(undefined),
			CreatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			UpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			ExpirationTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PutSipMediaApplicationAlexaSkillConfigurationResponse {
		SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
	}
	export interface PutSipMediaApplicationAlexaSkillConfigurationResponseFormProperties {
	}
	export function CreatePutSipMediaApplicationAlexaSkillConfigurationResponseFormGroup() {
		return new FormGroup<PutSipMediaApplicationAlexaSkillConfigurationResponseFormProperties>({
		});

	}

	export interface PutSipMediaApplicationLoggingConfigurationResponse {
		SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
	}
	export interface PutSipMediaApplicationLoggingConfigurationResponseFormProperties {
	}
	export function CreatePutSipMediaApplicationLoggingConfigurationResponseFormGroup() {
		return new FormGroup<PutSipMediaApplicationLoggingConfigurationResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorEmergencyCallingConfigurationResponse {
		EmergencyCallingConfiguration?: EmergencyCallingConfiguration;
	}
	export interface PutVoiceConnectorEmergencyCallingConfigurationResponseFormProperties {
	}
	export function CreatePutVoiceConnectorEmergencyCallingConfigurationResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorEmergencyCallingConfigurationResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorLoggingConfigurationResponse {
		LoggingConfiguration?: LoggingConfiguration;
	}
	export interface PutVoiceConnectorLoggingConfigurationResponseFormProperties {
	}
	export function CreatePutVoiceConnectorLoggingConfigurationResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorLoggingConfigurationResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorOriginationResponse {
		Origination?: Origination;
	}
	export interface PutVoiceConnectorOriginationResponseFormProperties {
	}
	export function CreatePutVoiceConnectorOriginationResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorOriginationResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorProxyResponse {
		Proxy?: Proxy;
	}
	export interface PutVoiceConnectorProxyResponseFormProperties {
	}
	export function CreatePutVoiceConnectorProxyResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorProxyResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorStreamingConfigurationResponse {
		StreamingConfiguration?: StreamingConfiguration;
	}
	export interface PutVoiceConnectorStreamingConfigurationResponseFormProperties {
	}
	export function CreatePutVoiceConnectorStreamingConfigurationResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorStreamingConfigurationResponseFormProperties>({
		});

	}

	export interface PutVoiceConnectorTerminationResponse {
		Termination?: Termination;
	}
	export interface PutVoiceConnectorTerminationResponseFormProperties {
	}
	export function CreatePutVoiceConnectorTerminationResponseFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationResponseFormProperties>({
		});

	}


	/** The SIP credentials used to authenticate requests to an Amazon Chime SDK Voice Connector. */
	export interface Credential {
		Username?: string;
		Password?: string;
	}

	/** The SIP credentials used to authenticate requests to an Amazon Chime SDK Voice Connector. */
	export interface CredentialFormProperties {
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCredentialFormGroup() {
		return new FormGroup<CredentialFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestorePhoneNumberResponse {
		PhoneNumber?: PhoneNumber;
	}
	export interface RestorePhoneNumberResponseFormProperties {
	}
	export function CreateRestorePhoneNumberResponseFormGroup() {
		return new FormGroup<RestorePhoneNumberResponseFormProperties>({
		});

	}

	export interface SearchAvailablePhoneNumbersResponse {
		E164PhoneNumbers?: Array<string>;
		NextToken?: string;
	}
	export interface SearchAvailablePhoneNumbersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchAvailablePhoneNumbersResponseFormGroup() {
		return new FormGroup<SearchAvailablePhoneNumbersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSpeakerSearchTaskResponse {
		SpeakerSearchTask?: SpeakerSearchTask;
	}
	export interface StartSpeakerSearchTaskResponseFormProperties {
	}
	export function CreateStartSpeakerSearchTaskResponseFormGroup() {
		return new FormGroup<StartSpeakerSearchTaskResponseFormProperties>({
		});

	}

	export interface UnprocessableEntityException {
	}
	export interface UnprocessableEntityExceptionFormProperties {
	}
	export function CreateUnprocessableEntityExceptionFormGroup() {
		return new FormGroup<UnprocessableEntityExceptionFormProperties>({
		});

	}

	export interface StartVoiceToneAnalysisTaskResponse {
		VoiceToneAnalysisTask?: VoiceToneAnalysisTask;
	}
	export interface StartVoiceToneAnalysisTaskResponseFormProperties {
	}
	export function CreateStartVoiceToneAnalysisTaskResponseFormGroup() {
		return new FormGroup<StartVoiceToneAnalysisTaskResponseFormProperties>({
		});

	}

	export interface UpdatePhoneNumberResponse {
		PhoneNumber?: PhoneNumber;
	}
	export interface UpdatePhoneNumberResponseFormProperties {
	}
	export function CreateUpdatePhoneNumberResponseFormGroup() {
		return new FormGroup<UpdatePhoneNumberResponseFormProperties>({
		});

	}

	export interface UpdateProxySessionResponse {
		ProxySession?: ProxySession;
	}
	export interface UpdateProxySessionResponseFormProperties {
	}
	export function CreateUpdateProxySessionResponseFormGroup() {
		return new FormGroup<UpdateProxySessionResponseFormProperties>({
		});

	}

	export interface UpdateSipMediaApplicationResponse {
		SipMediaApplication?: SipMediaApplication;
	}
	export interface UpdateSipMediaApplicationResponseFormProperties {
	}
	export function CreateUpdateSipMediaApplicationResponseFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationResponseFormProperties>({
		});

	}

	export interface UpdateSipMediaApplicationCallResponse {
		SipMediaApplicationCall?: SipMediaApplicationCall;
	}
	export interface UpdateSipMediaApplicationCallResponseFormProperties {
	}
	export function CreateUpdateSipMediaApplicationCallResponseFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationCallResponseFormProperties>({
		});

	}

	export interface UpdateSipRuleResponse {
		SipRule?: SipRule;
	}
	export interface UpdateSipRuleResponseFormProperties {
	}
	export function CreateUpdateSipRuleResponseFormGroup() {
		return new FormGroup<UpdateSipRuleResponseFormProperties>({
		});

	}

	export interface UpdateVoiceConnectorResponse {
		VoiceConnector?: VoiceConnector;
	}
	export interface UpdateVoiceConnectorResponseFormProperties {
	}
	export function CreateUpdateVoiceConnectorResponseFormGroup() {
		return new FormGroup<UpdateVoiceConnectorResponseFormProperties>({
		});

	}

	export interface UpdateVoiceConnectorGroupResponse {
		VoiceConnectorGroup?: VoiceConnectorGroup;
	}
	export interface UpdateVoiceConnectorGroupResponseFormProperties {
	}
	export function CreateUpdateVoiceConnectorGroupResponseFormGroup() {
		return new FormGroup<UpdateVoiceConnectorGroupResponseFormProperties>({
		});

	}

	export interface UpdateVoiceProfileResponse {
		VoiceProfile?: VoiceProfile;
	}
	export interface UpdateVoiceProfileResponseFormProperties {
	}
	export function CreateUpdateVoiceProfileResponseFormGroup() {
		return new FormGroup<UpdateVoiceProfileResponseFormProperties>({
		});

	}

	export interface UpdateVoiceProfileDomainResponse {
		VoiceProfileDomain?: VoiceProfileDomain;
	}
	export interface UpdateVoiceProfileDomainResponseFormProperties {
	}
	export function CreateUpdateVoiceProfileDomainResponseFormGroup() {
		return new FormGroup<UpdateVoiceProfileDomainResponseFormProperties>({
		});

	}

	export interface ValidateE911AddressResponse {
		ValidationResult?: number | null;
		AddressExternalId?: string;
		Address?: Address;
		CandidateAddressList?: Array<CandidateAddress>;
	}
	export interface ValidateE911AddressResponseFormProperties {
		ValidationResult: FormControl<number | null | undefined>,
		AddressExternalId: FormControl<string | null | undefined>,
	}
	export function CreateValidateE911AddressResponseFormGroup() {
		return new FormGroup<ValidateE911AddressResponseFormProperties>({
			ValidationResult: new FormControl<number | null | undefined>(undefined),
			AddressExternalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A validated address. */
	export interface Address {
		streetName?: string;
		streetSuffix?: string;
		postDirectional?: string;
		preDirectional?: string;
		streetNumber?: string;
		city?: string;
		state?: string;
		postalCode?: string;
		postalCodePlus4?: string;
		country?: string;
	}

	/** A validated address. */
	export interface AddressFormProperties {
		streetName: FormControl<string | null | undefined>,
		streetSuffix: FormControl<string | null | undefined>,
		postDirectional: FormControl<string | null | undefined>,
		preDirectional: FormControl<string | null | undefined>,
		streetNumber: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		postalCodePlus4: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			streetName: new FormControl<string | null | undefined>(undefined),
			streetSuffix: new FormControl<string | null | undefined>(undefined),
			postDirectional: new FormControl<string | null | undefined>(undefined),
			preDirectional: new FormControl<string | null | undefined>(undefined),
			streetNumber: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			postalCodePlus4: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A suggested address. */
	export interface CandidateAddress {
		streetInfo?: string;
		streetNumber?: string;
		city?: string;
		state?: string;
		postalCode?: string;
		postalCodePlus4?: string;
		country?: string;
	}

	/** A suggested address. */
	export interface CandidateAddressFormProperties {
		streetInfo: FormControl<string | null | undefined>,
		streetNumber: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		postalCodePlus4: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
	}
	export function CreateCandidateAddressFormGroup() {
		return new FormGroup<CandidateAddressFormProperties>({
			streetInfo: new FormControl<string | null | undefined>(undefined),
			streetNumber: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			postalCodePlus4: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {

		/** Required */
		E164PhoneNumbers: Array<string>;
		ForceAssociate?: boolean | null;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequestFormProperties {
		ForceAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorGroupRequestFormProperties>({
			ForceAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AssociatePhoneNumbersWithVoiceConnectorRequest {

		/** Required */
		E164PhoneNumbers: Array<string>;
		ForceAssociate?: boolean | null;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorRequestFormProperties {
		ForceAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorRequestFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorRequestFormProperties>({
			ForceAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BatchDeletePhoneNumberRequest {

		/** Required */
		PhoneNumberIds: Array<string>;
	}
	export interface BatchDeletePhoneNumberRequestFormProperties {
	}
	export function CreateBatchDeletePhoneNumberRequestFormGroup() {
		return new FormGroup<BatchDeletePhoneNumberRequestFormProperties>({
		});

	}

	export interface BatchUpdatePhoneNumberRequest {

		/** Required */
		UpdatePhoneNumberRequestItems: Array<UpdatePhoneNumberRequestItem>;
	}
	export interface BatchUpdatePhoneNumberRequestFormProperties {
	}
	export function CreateBatchUpdatePhoneNumberRequestFormGroup() {
		return new FormGroup<BatchUpdatePhoneNumberRequestFormProperties>({
		});

	}

	export enum CallLegType { Caller = 'Caller', Callee = 'Callee' }

	export interface CreatePhoneNumberOrderRequest {

		/** Required */
		ProductType: PhoneNumberProductType;

		/** Required */
		E164PhoneNumbers: Array<string>;
	}
	export interface CreatePhoneNumberOrderRequestFormProperties {

		/** Required */
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
	}
	export function CreateCreatePhoneNumberOrderRequestFormGroup() {
		return new FormGroup<CreatePhoneNumberOrderRequestFormProperties>({
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProxySessionRequest {

		/** Required */
		ParticipantPhoneNumbers: Array<string>;
		Name?: string;
		ExpiryMinutes?: number | null;

		/** Required */
		Capabilities: Array<Capability>;
		NumberSelectionBehavior?: NumberSelectionBehavior;
		GeoMatchLevel?: GeoMatchLevel;
		GeoMatchParams?: GeoMatchParams;
	}
	export interface CreateProxySessionRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		ExpiryMinutes: FormControl<number | null | undefined>,
		NumberSelectionBehavior: FormControl<NumberSelectionBehavior | null | undefined>,
		GeoMatchLevel: FormControl<GeoMatchLevel | null | undefined>,
	}
	export function CreateCreateProxySessionRequestFormGroup() {
		return new FormGroup<CreateProxySessionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			ExpiryMinutes: new FormControl<number | null | undefined>(undefined),
			NumberSelectionBehavior: new FormControl<NumberSelectionBehavior | null | undefined>(undefined),
			GeoMatchLevel: new FormControl<GeoMatchLevel | null | undefined>(undefined),
		});

	}

	export interface SipHeadersMap {
	}
	export interface SipHeadersMapFormProperties {
	}
	export function CreateSipHeadersMapFormGroup() {
		return new FormGroup<SipHeadersMapFormProperties>({
		});

	}

	export interface SMACreateCallArgumentsMap {
	}
	export interface SMACreateCallArgumentsMapFormProperties {
	}
	export function CreateSMACreateCallArgumentsMapFormGroup() {
		return new FormGroup<SMACreateCallArgumentsMapFormProperties>({
		});

	}

	export interface CreateSipMediaApplicationCallRequest {

		/** Required */
		FromPhoneNumber: string;

		/** Required */
		ToPhoneNumber: string;
		SipHeaders?: SipHeadersMap;
		ArgumentsMap?: SMACreateCallArgumentsMap;
	}
	export interface CreateSipMediaApplicationCallRequestFormProperties {

		/** Required */
		FromPhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		ToPhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateCreateSipMediaApplicationCallRequestFormGroup() {
		return new FormGroup<CreateSipMediaApplicationCallRequestFormProperties>({
			FromPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ToPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSipMediaApplicationRequest {

		/** Required */
		AwsRegion: string;

		/** Required */
		Name: string;

		/** Required */
		Endpoints: Array<SipMediaApplicationEndpoint>;
		Tags?: Array<Tag>;
	}
	export interface CreateSipMediaApplicationRequestFormProperties {

		/** Required */
		AwsRegion: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSipMediaApplicationRequestFormGroup() {
		return new FormGroup<CreateSipMediaApplicationRequestFormProperties>({
			AwsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSipRuleRequest {

		/** Required */
		Name: string;

		/** Required */
		TriggerType: SipRuleTriggerType;

		/** Required */
		TriggerValue: string;
		Disabled?: boolean | null;
		TargetApplications?: Array<SipRuleTargetApplication>;
	}
	export interface CreateSipRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		TriggerType: FormControl<SipRuleTriggerType | null | undefined>,

		/** Required */
		TriggerValue: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateSipRuleRequestFormGroup() {
		return new FormGroup<CreateSipRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TriggerType: new FormControl<SipRuleTriggerType | null | undefined>(undefined, [Validators.required]),
			TriggerValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateVoiceConnectorGroupRequest {

		/** Required */
		Name: string;
		VoiceConnectorItems?: Array<VoiceConnectorItem>;
	}
	export interface CreateVoiceConnectorGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<CreateVoiceConnectorGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVoiceConnectorRequest {

		/** Required */
		Name: string;
		AwsRegion?: VoiceConnectorAwsRegion;

		/** Required */
		RequireEncryption: boolean;
		Tags?: Array<Tag>;
	}
	export interface CreateVoiceConnectorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		AwsRegion: FormControl<VoiceConnectorAwsRegion | null | undefined>,

		/** Required */
		RequireEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateVoiceConnectorRequestFormGroup() {
		return new FormGroup<CreateVoiceConnectorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AwsRegion: new FormControl<VoiceConnectorAwsRegion | null | undefined>(undefined),
			RequireEncryption: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVoiceProfileDomainRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateVoiceProfileDomainRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateVoiceProfileDomainRequestFormGroup() {
		return new FormGroup<CreateVoiceProfileDomainRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVoiceProfileRequest {

		/** Required */
		SpeakerSearchTaskId: string;
	}
	export interface CreateVoiceProfileRequestFormProperties {

		/** Required */
		SpeakerSearchTaskId: FormControl<string | null | undefined>,
	}
	export function CreateCreateVoiceProfileRequestFormGroup() {
		return new FormGroup<CreateVoiceProfileRequestFormProperties>({
			SpeakerSearchTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePhoneNumberRequest {
	}
	export interface DeletePhoneNumberRequestFormProperties {
	}
	export function CreateDeletePhoneNumberRequestFormGroup() {
		return new FormGroup<DeletePhoneNumberRequestFormProperties>({
		});

	}

	export interface DeleteProxySessionRequest {
	}
	export interface DeleteProxySessionRequestFormProperties {
	}
	export function CreateDeleteProxySessionRequestFormGroup() {
		return new FormGroup<DeleteProxySessionRequestFormProperties>({
		});

	}

	export interface DeleteSipMediaApplicationRequest {
	}
	export interface DeleteSipMediaApplicationRequestFormProperties {
	}
	export function CreateDeleteSipMediaApplicationRequestFormGroup() {
		return new FormGroup<DeleteSipMediaApplicationRequestFormProperties>({
		});

	}

	export interface DeleteSipRuleRequest {
	}
	export interface DeleteSipRuleRequestFormProperties {
	}
	export function CreateDeleteSipRuleRequestFormGroup() {
		return new FormGroup<DeleteSipRuleRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
	}
	export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorEmergencyCallingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorEmergencyCallingConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorGroupRequest {
	}
	export interface DeleteVoiceConnectorGroupRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorGroupRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorOriginationRequest {
	}
	export interface DeleteVoiceConnectorOriginationRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorOriginationRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorOriginationRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorProxyRequest {
	}
	export interface DeleteVoiceConnectorProxyRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorProxyRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorProxyRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorRequest {
	}
	export interface DeleteVoiceConnectorRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorStreamingConfigurationRequest {
	}
	export interface DeleteVoiceConnectorStreamingConfigurationRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorStreamingConfigurationRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorStreamingConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorTerminationCredentialsRequest {

		/** Required */
		Usernames: Array<string>;
	}
	export interface DeleteVoiceConnectorTerminationCredentialsRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorTerminationCredentialsRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorTerminationCredentialsRequestFormProperties>({
		});

	}

	export interface DeleteVoiceConnectorTerminationRequest {
	}
	export interface DeleteVoiceConnectorTerminationRequestFormProperties {
	}
	export function CreateDeleteVoiceConnectorTerminationRequestFormGroup() {
		return new FormGroup<DeleteVoiceConnectorTerminationRequestFormProperties>({
		});

	}

	export interface DeleteVoiceProfileDomainRequest {
	}
	export interface DeleteVoiceProfileDomainRequestFormProperties {
	}
	export function CreateDeleteVoiceProfileDomainRequestFormGroup() {
		return new FormGroup<DeleteVoiceProfileDomainRequestFormProperties>({
		});

	}

	export interface DeleteVoiceProfileRequest {
	}
	export interface DeleteVoiceProfileRequestFormProperties {
	}
	export function CreateDeleteVoiceProfileRequestFormGroup() {
		return new FormGroup<DeleteVoiceProfileRequestFormProperties>({
		});

	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {

		/** Required */
		E164PhoneNumbers: Array<string>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFormProperties>({
		});

	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {

		/** Required */
		E164PhoneNumbers: Array<string>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorRequestFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorRequestFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorRequestFormProperties>({
		});

	}

	export interface GetPhoneNumberOrderRequest {
	}
	export interface GetPhoneNumberOrderRequestFormProperties {
	}
	export function CreateGetPhoneNumberOrderRequestFormGroup() {
		return new FormGroup<GetPhoneNumberOrderRequestFormProperties>({
		});

	}

	export interface GetPhoneNumberRequest {
	}
	export interface GetPhoneNumberRequestFormProperties {
	}
	export function CreateGetPhoneNumberRequestFormGroup() {
		return new FormGroup<GetPhoneNumberRequestFormProperties>({
		});

	}

	export interface GetProxySessionRequest {
	}
	export interface GetProxySessionRequestFormProperties {
	}
	export function CreateGetProxySessionRequestFormGroup() {
		return new FormGroup<GetProxySessionRequestFormProperties>({
		});

	}

	export interface GetSipMediaApplicationAlexaSkillConfigurationRequest {
	}
	export interface GetSipMediaApplicationAlexaSkillConfigurationRequestFormProperties {
	}
	export function CreateGetSipMediaApplicationAlexaSkillConfigurationRequestFormGroup() {
		return new FormGroup<GetSipMediaApplicationAlexaSkillConfigurationRequestFormProperties>({
		});

	}

	export interface GetSipMediaApplicationLoggingConfigurationRequest {
	}
	export interface GetSipMediaApplicationLoggingConfigurationRequestFormProperties {
	}
	export function CreateGetSipMediaApplicationLoggingConfigurationRequestFormGroup() {
		return new FormGroup<GetSipMediaApplicationLoggingConfigurationRequestFormProperties>({
		});

	}

	export interface GetSipMediaApplicationRequest {
	}
	export interface GetSipMediaApplicationRequestFormProperties {
	}
	export function CreateGetSipMediaApplicationRequestFormGroup() {
		return new FormGroup<GetSipMediaApplicationRequestFormProperties>({
		});

	}

	export interface GetSipRuleRequest {
	}
	export interface GetSipRuleRequestFormProperties {
	}
	export function CreateGetSipRuleRequestFormGroup() {
		return new FormGroup<GetSipRuleRequestFormProperties>({
		});

	}

	export interface GetSpeakerSearchTaskRequest {
	}
	export interface GetSpeakerSearchTaskRequestFormProperties {
	}
	export function CreateGetSpeakerSearchTaskRequestFormGroup() {
		return new FormGroup<GetSpeakerSearchTaskRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorEmergencyCallingConfigurationRequest {
	}
	export interface GetVoiceConnectorEmergencyCallingConfigurationRequestFormProperties {
	}
	export function CreateGetVoiceConnectorEmergencyCallingConfigurationRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorEmergencyCallingConfigurationRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorGroupRequest {
	}
	export interface GetVoiceConnectorGroupRequestFormProperties {
	}
	export function CreateGetVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorGroupRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorLoggingConfigurationRequest {
	}
	export interface GetVoiceConnectorLoggingConfigurationRequestFormProperties {
	}
	export function CreateGetVoiceConnectorLoggingConfigurationRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorLoggingConfigurationRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorOriginationRequest {
	}
	export interface GetVoiceConnectorOriginationRequestFormProperties {
	}
	export function CreateGetVoiceConnectorOriginationRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorOriginationRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorProxyRequest {
	}
	export interface GetVoiceConnectorProxyRequestFormProperties {
	}
	export function CreateGetVoiceConnectorProxyRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorProxyRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorRequest {
	}
	export interface GetVoiceConnectorRequestFormProperties {
	}
	export function CreateGetVoiceConnectorRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorStreamingConfigurationRequest {
	}
	export interface GetVoiceConnectorStreamingConfigurationRequestFormProperties {
	}
	export function CreateGetVoiceConnectorStreamingConfigurationRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorStreamingConfigurationRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorTerminationHealthRequest {
	}
	export interface GetVoiceConnectorTerminationHealthRequestFormProperties {
	}
	export function CreateGetVoiceConnectorTerminationHealthRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorTerminationHealthRequestFormProperties>({
		});

	}

	export interface GetVoiceConnectorTerminationRequest {
	}
	export interface GetVoiceConnectorTerminationRequestFormProperties {
	}
	export function CreateGetVoiceConnectorTerminationRequestFormGroup() {
		return new FormGroup<GetVoiceConnectorTerminationRequestFormProperties>({
		});

	}

	export interface GetVoiceProfileDomainRequest {
	}
	export interface GetVoiceProfileDomainRequestFormProperties {
	}
	export function CreateGetVoiceProfileDomainRequestFormGroup() {
		return new FormGroup<GetVoiceProfileDomainRequestFormProperties>({
		});

	}

	export interface GetVoiceProfileRequest {
	}
	export interface GetVoiceProfileRequestFormProperties {
	}
	export function CreateGetVoiceProfileRequestFormGroup() {
		return new FormGroup<GetVoiceProfileRequestFormProperties>({
		});

	}

	export interface GetVoiceToneAnalysisTaskRequest {
	}
	export interface GetVoiceToneAnalysisTaskRequestFormProperties {
	}
	export function CreateGetVoiceToneAnalysisTaskRequestFormGroup() {
		return new FormGroup<GetVoiceToneAnalysisTaskRequestFormProperties>({
		});

	}

	export enum LanguageCode { 'en-US' = 'en-US' }

	export interface ListPhoneNumberOrdersRequest {
	}
	export interface ListPhoneNumberOrdersRequestFormProperties {
	}
	export function CreateListPhoneNumberOrdersRequestFormGroup() {
		return new FormGroup<ListPhoneNumberOrdersRequestFormProperties>({
		});

	}

	export interface ListPhoneNumbersRequest {
	}
	export interface ListPhoneNumbersRequestFormProperties {
	}
	export function CreateListPhoneNumbersRequestFormGroup() {
		return new FormGroup<ListPhoneNumbersRequestFormProperties>({
		});

	}

	export interface ListProxySessionsRequest {
	}
	export interface ListProxySessionsRequestFormProperties {
	}
	export function CreateListProxySessionsRequestFormGroup() {
		return new FormGroup<ListProxySessionsRequestFormProperties>({
		});

	}

	export interface ListSipMediaApplicationsRequest {
	}
	export interface ListSipMediaApplicationsRequestFormProperties {
	}
	export function CreateListSipMediaApplicationsRequestFormGroup() {
		return new FormGroup<ListSipMediaApplicationsRequestFormProperties>({
		});

	}

	export interface ListSipRulesRequest {
	}
	export interface ListSipRulesRequestFormProperties {
	}
	export function CreateListSipRulesRequestFormGroup() {
		return new FormGroup<ListSipRulesRequestFormProperties>({
		});

	}

	export interface ListSupportedPhoneNumberCountriesRequest {
	}
	export interface ListSupportedPhoneNumberCountriesRequestFormProperties {
	}
	export function CreateListSupportedPhoneNumberCountriesRequestFormGroup() {
		return new FormGroup<ListSupportedPhoneNumberCountriesRequestFormProperties>({
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

	export interface ListVoiceConnectorGroupsRequest {
	}
	export interface ListVoiceConnectorGroupsRequestFormProperties {
	}
	export function CreateListVoiceConnectorGroupsRequestFormGroup() {
		return new FormGroup<ListVoiceConnectorGroupsRequestFormProperties>({
		});

	}

	export interface ListVoiceConnectorTerminationCredentialsRequest {
	}
	export interface ListVoiceConnectorTerminationCredentialsRequestFormProperties {
	}
	export function CreateListVoiceConnectorTerminationCredentialsRequestFormGroup() {
		return new FormGroup<ListVoiceConnectorTerminationCredentialsRequestFormProperties>({
		});

	}

	export interface ListVoiceConnectorsRequest {
	}
	export interface ListVoiceConnectorsRequestFormProperties {
	}
	export function CreateListVoiceConnectorsRequestFormGroup() {
		return new FormGroup<ListVoiceConnectorsRequestFormProperties>({
		});

	}

	export interface ListVoiceProfileDomainsRequest {
	}
	export interface ListVoiceProfileDomainsRequestFormProperties {
	}
	export function CreateListVoiceProfileDomainsRequestFormGroup() {
		return new FormGroup<ListVoiceProfileDomainsRequestFormProperties>({
		});

	}

	export interface ListVoiceProfilesRequest {
	}
	export interface ListVoiceProfilesRequestFormProperties {
	}
	export function CreateListVoiceProfilesRequestFormGroup() {
		return new FormGroup<ListVoiceProfilesRequestFormProperties>({
		});

	}

	export interface PutSipMediaApplicationAlexaSkillConfigurationRequest {
		SipMediaApplicationAlexaSkillConfiguration?: SipMediaApplicationAlexaSkillConfiguration;
	}
	export interface PutSipMediaApplicationAlexaSkillConfigurationRequestFormProperties {
	}
	export function CreatePutSipMediaApplicationAlexaSkillConfigurationRequestFormGroup() {
		return new FormGroup<PutSipMediaApplicationAlexaSkillConfigurationRequestFormProperties>({
		});

	}

	export interface PutSipMediaApplicationLoggingConfigurationRequest {
		SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
	}
	export interface PutSipMediaApplicationLoggingConfigurationRequestFormProperties {
	}
	export function CreatePutSipMediaApplicationLoggingConfigurationRequestFormGroup() {
		return new FormGroup<PutSipMediaApplicationLoggingConfigurationRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorEmergencyCallingConfigurationRequest {

		/** Required */
		EmergencyCallingConfiguration: EmergencyCallingConfiguration;
	}
	export interface PutVoiceConnectorEmergencyCallingConfigurationRequestFormProperties {
	}
	export function CreatePutVoiceConnectorEmergencyCallingConfigurationRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorEmergencyCallingConfigurationRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorLoggingConfigurationRequest {

		/** Required */
		LoggingConfiguration: LoggingConfiguration;
	}
	export interface PutVoiceConnectorLoggingConfigurationRequestFormProperties {
	}
	export function CreatePutVoiceConnectorLoggingConfigurationRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorLoggingConfigurationRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorOriginationRequest {

		/** Required */
		Origination: Origination;
	}
	export interface PutVoiceConnectorOriginationRequestFormProperties {
	}
	export function CreatePutVoiceConnectorOriginationRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorOriginationRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorProxyRequest {

		/** Required */
		DefaultSessionExpiryMinutes: number;

		/** Required */
		PhoneNumberPoolCountries: Array<string>;
		FallBackPhoneNumber?: string;
		Disabled?: boolean | null;
	}
	export interface PutVoiceConnectorProxyRequestFormProperties {

		/** Required */
		DefaultSessionExpiryMinutes: FormControl<number | null | undefined>,
		FallBackPhoneNumber: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorProxyRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorProxyRequestFormProperties>({
			DefaultSessionExpiryMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			FallBackPhoneNumber: new FormControl<string | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutVoiceConnectorStreamingConfigurationRequest {

		/** Required */
		StreamingConfiguration: StreamingConfiguration;
	}
	export interface PutVoiceConnectorStreamingConfigurationRequestFormProperties {
	}
	export function CreatePutVoiceConnectorStreamingConfigurationRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorStreamingConfigurationRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorTerminationCredentialsRequest {
		Credentials?: Array<Credential>;
	}
	export interface PutVoiceConnectorTerminationCredentialsRequestFormProperties {
	}
	export function CreatePutVoiceConnectorTerminationCredentialsRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationCredentialsRequestFormProperties>({
		});

	}

	export interface PutVoiceConnectorTerminationRequest {

		/** Required */
		Termination: Termination;
	}
	export interface PutVoiceConnectorTerminationRequestFormProperties {
	}
	export function CreatePutVoiceConnectorTerminationRequestFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationRequestFormProperties>({
		});

	}

	export interface RestorePhoneNumberRequest {
	}
	export interface RestorePhoneNumberRequestFormProperties {
	}
	export function CreateRestorePhoneNumberRequestFormGroup() {
		return new FormGroup<RestorePhoneNumberRequestFormProperties>({
		});

	}

	export interface SMAUpdateCallArgumentsMap {
	}
	export interface SMAUpdateCallArgumentsMapFormProperties {
	}
	export function CreateSMAUpdateCallArgumentsMapFormGroup() {
		return new FormGroup<SMAUpdateCallArgumentsMapFormProperties>({
		});

	}

	export interface SearchAvailablePhoneNumbersRequest {
	}
	export interface SearchAvailablePhoneNumbersRequestFormProperties {
	}
	export function CreateSearchAvailablePhoneNumbersRequestFormGroup() {
		return new FormGroup<SearchAvailablePhoneNumbersRequestFormProperties>({
		});

	}

	export interface StartSpeakerSearchTaskRequest {

		/** Required */
		TransactionId: string;

		/** Required */
		VoiceProfileDomainId: string;
		ClientRequestToken?: string;
		CallLeg?: CallLegType;
	}
	export interface StartSpeakerSearchTaskRequestFormProperties {

		/** Required */
		TransactionId: FormControl<string | null | undefined>,

		/** Required */
		VoiceProfileDomainId: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		CallLeg: FormControl<CallLegType | null | undefined>,
	}
	export function CreateStartSpeakerSearchTaskRequestFormGroup() {
		return new FormGroup<StartSpeakerSearchTaskRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VoiceProfileDomainId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			CallLeg: new FormControl<CallLegType | null | undefined>(undefined),
		});

	}

	export interface StartVoiceToneAnalysisTaskRequest {

		/** Required */
		TransactionId: string;

		/** Required */
		LanguageCode: LanguageCode;
		ClientRequestToken?: string;
	}
	export interface StartVoiceToneAnalysisTaskRequestFormProperties {

		/** Required */
		TransactionId: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartVoiceToneAnalysisTaskRequestFormGroup() {
		return new FormGroup<StartVoiceToneAnalysisTaskRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopSpeakerSearchTaskRequest {
	}
	export interface StopSpeakerSearchTaskRequestFormProperties {
	}
	export function CreateStopSpeakerSearchTaskRequestFormGroup() {
		return new FormGroup<StopSpeakerSearchTaskRequestFormProperties>({
		});

	}

	export interface StopVoiceToneAnalysisTaskRequest {
	}
	export interface StopVoiceToneAnalysisTaskRequestFormProperties {
	}
	export function CreateStopVoiceToneAnalysisTaskRequestFormGroup() {
		return new FormGroup<StopVoiceToneAnalysisTaskRequestFormProperties>({
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

	export interface UpdateGlobalSettingsRequest {
		VoiceConnector?: VoiceConnectorSettings;
	}
	export interface UpdateGlobalSettingsRequestFormProperties {
	}
	export function CreateUpdateGlobalSettingsRequestFormGroup() {
		return new FormGroup<UpdateGlobalSettingsRequestFormProperties>({
		});

	}

	export interface UpdatePhoneNumberRequest {
		ProductType?: PhoneNumberProductType;
		CallingName?: string;
	}
	export interface UpdatePhoneNumberRequestFormProperties {
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
		CallingName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberRequestFormGroup() {
		return new FormGroup<UpdatePhoneNumberRequestFormProperties>({
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined),
			CallingName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePhoneNumberSettingsRequest {

		/** Required */
		CallingName: string;
	}
	export interface UpdatePhoneNumberSettingsRequestFormProperties {

		/** Required */
		CallingName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberSettingsRequestFormGroup() {
		return new FormGroup<UpdatePhoneNumberSettingsRequestFormProperties>({
			CallingName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProxySessionRequest {

		/** Required */
		Capabilities: Array<Capability>;
		ExpiryMinutes?: number | null;
	}
	export interface UpdateProxySessionRequestFormProperties {
		ExpiryMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProxySessionRequestFormGroup() {
		return new FormGroup<UpdateProxySessionRequestFormProperties>({
			ExpiryMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSipMediaApplicationCallRequest {

		/** Required */
		Arguments: SMAUpdateCallArgumentsMap;
	}
	export interface UpdateSipMediaApplicationCallRequestFormProperties {
	}
	export function CreateUpdateSipMediaApplicationCallRequestFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationCallRequestFormProperties>({
		});

	}

	export interface UpdateSipMediaApplicationRequest {
		Name?: string;
		Endpoints?: Array<SipMediaApplicationEndpoint>;
	}
	export interface UpdateSipMediaApplicationRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSipMediaApplicationRequestFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSipRuleRequest {

		/** Required */
		Name: string;
		Disabled?: boolean | null;
		TargetApplications?: Array<SipRuleTargetApplication>;
	}
	export interface UpdateSipRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSipRuleRequestFormGroup() {
		return new FormGroup<UpdateSipRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateVoiceConnectorGroupRequest {

		/** Required */
		Name: string;

		/** Required */
		VoiceConnectorItems: Array<VoiceConnectorItem>;
	}
	export interface UpdateVoiceConnectorGroupRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVoiceConnectorGroupRequestFormGroup() {
		return new FormGroup<UpdateVoiceConnectorGroupRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateVoiceConnectorRequest {

		/** Required */
		Name: string;

		/** Required */
		RequireEncryption: boolean;
	}
	export interface UpdateVoiceConnectorRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RequireEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateVoiceConnectorRequestFormGroup() {
		return new FormGroup<UpdateVoiceConnectorRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequireEncryption: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateVoiceProfileDomainRequest {
		Name?: string;
		Description?: string;
	}
	export interface UpdateVoiceProfileDomainRequestFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVoiceProfileDomainRequestFormGroup() {
		return new FormGroup<UpdateVoiceProfileDomainRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVoiceProfileRequest {

		/** Required */
		SpeakerSearchTaskId: string;
	}
	export interface UpdateVoiceProfileRequestFormProperties {

		/** Required */
		SpeakerSearchTaskId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVoiceProfileRequestFormGroup() {
		return new FormGroup<UpdateVoiceProfileRequestFormProperties>({
			SpeakerSearchTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidateE911AddressRequest {

		/** Required */
		AwsAccountId: string;

		/** Required */
		StreetNumber: string;

		/** Required */
		StreetInfo: string;

		/** Required */
		City: string;

		/** Required */
		State: string;

		/** Required */
		Country: string;

		/** Required */
		PostalCode: string;
	}
	export interface ValidateE911AddressRequestFormProperties {

		/** Required */
		AwsAccountId: FormControl<string | null | undefined>,

		/** Required */
		StreetNumber: FormControl<string | null | undefined>,

		/** Required */
		StreetInfo: FormControl<string | null | undefined>,

		/** Required */
		City: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<string | null | undefined>,

		/** Required */
		Country: FormControl<string | null | undefined>,

		/** Required */
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateValidateE911AddressRequestFormGroup() {
		return new FormGroup<ValidateE911AddressRequestFormProperties>({
			AwsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreetNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StreetInfo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			City: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PostalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates phone numbers with the specified Amazon Chime SDK Voice Connector.
		 * Post voice-connectors/{voiceConnectorId}#operation=associate-phone-numbers
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {AssociatePhoneNumbersWithVoiceConnectorResponse} Success
		 */
		AssociatePhoneNumbersWithVoiceConnector(voiceConnectorId: string, operation: AssociatePhoneNumbersWithVoiceConnectorOperation, requestBody: AssociatePhoneNumbersWithVoiceConnectorPostBody): Observable<AssociatePhoneNumbersWithVoiceConnectorResponse> {
			return this.http.post<AssociatePhoneNumbersWithVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '#operation=associate-phone-numbers&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates phone numbers with the specified Amazon Chime SDK Voice Connector group.
		 * Post voice-connector-groups/{voiceConnectorGroupId}#operation=associate-phone-numbers
		 * @param {string} voiceConnectorGroupId The Amazon Chime SDK Voice Connector group ID.
		 * @return {AssociatePhoneNumbersWithVoiceConnectorGroupResponse} Success
		 */
		AssociatePhoneNumbersWithVoiceConnectorGroup(voiceConnectorGroupId: string, operation: AssociatePhoneNumbersWithVoiceConnectorOperation, requestBody: AssociatePhoneNumbersWithVoiceConnectorGroupPostBody): Observable<AssociatePhoneNumbersWithVoiceConnectorGroupResponse> {
			return this.http.post<AssociatePhoneNumbersWithVoiceConnectorGroupResponse>(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)) + '#operation=associate-phone-numbers&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Moves phone numbers into the <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime SDK Voice Connectors before they can be deleted. </p> <p> Phone numbers remain in the <b>Deletion queue</b> for 7 days before they are deleted permanently. </p>
		 * Post phone-numbers#operation=batch-delete
		 * @return {BatchDeletePhoneNumberResponse} Success
		 */
		BatchDeletePhoneNumber(operation: BatchDeletePhoneNumberOperation, requestBody: BatchDeletePhoneNumberPostBody): Observable<BatchDeletePhoneNumberResponse> {
			return this.http.post<BatchDeletePhoneNumberResponse>(this.baseUri + 'phone-numbers#operation=batch-delete?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates one or more phone numbers.
		 * Post phone-numbers#operation=batch-update
		 * @return {BatchUpdatePhoneNumberResponse} Success
		 */
		BatchUpdatePhoneNumber(operation: BatchUpdatePhoneNumberOperation, requestBody: BatchUpdatePhoneNumberPostBody): Observable<BatchUpdatePhoneNumberResponse> {
			return this.http.post<BatchUpdatePhoneNumberResponse>(this.baseUri + 'phone-numbers#operation=batch-update?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an order for phone numbers to be provisioned. For numbers outside the U.S., you must use the Amazon Chime SDK SIP media application dial-in product type.
		 * Post phone-number-orders
		 * @return {void} 
		 */
		CreatePhoneNumberOrder(requestBody: CreatePhoneNumberOrderPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'phone-number-orders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the phone numbers for an administrator's Amazon Chime SDK account.
		 * Get phone-number-orders
		 * @param {string} next_token The token used to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPhoneNumberOrdersResponse} Success
		 */
		ListPhoneNumberOrders(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPhoneNumberOrdersResponse> {
			return this.http.get<ListPhoneNumberOrdersResponse>(this.baseUri + 'phone-number-orders?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a proxy session for the specified Amazon Chime SDK Voice Connector for the specified participant phone numbers.
		 * Post voice-connectors/{voiceConnectorId}/proxy-sessions
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		CreateProxySession(voiceConnectorId: string, requestBody: CreateProxySessionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the proxy sessions for the specified Amazon Chime SDK Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/proxy-sessions
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @param {ProxySessionStatus} status The proxy session status.
		 * @param {string} next_token The token used to retrieve the next page of results.
		 *     Max length: 65535
		 * @param {number} max_results The maximum number of results to return in a single call.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProxySessionsResponse} Success
		 */
		ListProxySessions(voiceConnectorId: string, status: ProxySessionStatus | null | undefined, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListProxySessionsResponse> {
			return this.http.get<ListProxySessionsResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions&status=' + status + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a SIP media application. For more information about SIP media applications, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/ag/manage-sip-applications.html">Managing SIP media applications and rules</a> in the <i>Amazon Chime SDK Administrator Guide</i>.
		 * Post sip-media-applications
		 * @return {void} 
		 */
		CreateSipMediaApplication(requestBody: CreateSipMediaApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sip-media-applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the SIP media applications under the administrator's AWS account.
		 * Get sip-media-applications
		 * @param {number} max_results The maximum number of results to return in a single call. Defaults to 100.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} next_token The token used to return the next page of results.
		 *     Max length: 65535
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSipMediaApplicationsResponse} Success
		 */
		ListSipMediaApplications(max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSipMediaApplicationsResponse> {
			return this.http.get<ListSipMediaApplicationsResponse>(this.baseUri + 'sip-media-applications?max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates an outbound call to a phone number from the phone number specified in the request, and it invokes the endpoint of the specified <code>sipMediaApplicationId</code>.
		 * Post sip-media-applications/{sipMediaApplicationId}/calls
		 * @param {string} sipMediaApplicationId The ID of the SIP media application.
		 * @return {void} 
		 */
		CreateSipMediaApplicationCall(sipMediaApplicationId: string, requestBody: CreateSipMediaApplicationCallPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)) + '/calls', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a SIP rule, which can be used to run a SIP media application as a target for a specific trigger type. For more information about SIP rules, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/ag/manage-sip-applications.html">Managing SIP media applications and rules</a> in the <i>Amazon Chime SDK Administrator Guide</i>.
		 * Post sip-rules
		 * @return {void} 
		 */
		CreateSipRule(requestBody: CreateSipRulePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sip-rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the SIP rules under the administrator's AWS account.
		 * Get sip-rules
		 * @param {string} sip_media_application The SIP media application ID.
		 * @param {number} max_results The maximum number of results to return in a single call. Defaults to 100.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} next_token The token used to return the next page of results.
		 *     Max length: 65535
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSipRulesResponse} Success
		 */
		ListSipRules(sip_media_application: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSipRulesResponse> {
			return this.http.get<ListSipRulesResponse>(this.baseUri + 'sip-rules?sip_media_application=' + (sip_media_application == null ? '' : encodeURIComponent(sip_media_application)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates an Amazon Chime SDK Voice Connector. For more information about Voice Connectors, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/ag/voice-connector-groups.html">Managing Amazon Chime SDK Voice Connector groups</a> in the <i>Amazon Chime SDK Administrator Guide</i>.
		 * Post voice-connectors
		 * @return {void} 
		 */
		CreateVoiceConnector(requestBody: CreateVoiceConnectorPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Amazon Chime SDK Voice Connectors in the administrators AWS account.
		 * Get voice-connectors
		 * @param {string} next_token The token used to return the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVoiceConnectorsResponse} Success
		 */
		ListVoiceConnectors(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListVoiceConnectorsResponse> {
			return this.http.get<ListVoiceConnectorsResponse>(this.baseUri + 'voice-connectors?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates an Amazon Chime SDK Voice Connector group under the administrator's AWS account. You can associate Amazon Chime SDK Voice Connectors with the Voice Connector group by including <code>VoiceConnectorItems</code> in the request. </p> <p>You can include Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.</p>
		 * Post voice-connector-groups
		 * @return {void} 
		 */
		CreateVoiceConnectorGroup(requestBody: CreateVoiceConnectorGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connector-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Amazon Chime SDK Voice Connector groups in the administrator's AWS account.
		 * Get voice-connector-groups
		 * @param {string} next_token The token used to return the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call. 
		 *     Minimum: 1    Maximum: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVoiceConnectorGroupsResponse} Success
		 */
		ListVoiceConnectorGroups(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListVoiceConnectorGroupsResponse> {
			return this.http.get<ListVoiceConnectorGroupsResponse>(this.baseUri + 'voice-connector-groups?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates a voice profile, which consists of an enrolled user and their latest voice print.</p> <important> <p>Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p> </important> <p>For more information about voice profiles and voice analytics, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/pstn-voice-analytics.html">Using Amazon Chime SDK Voice Analytics</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>
		 * Post voice-profiles
		 * @return {void} 
		 */
		CreateVoiceProfile(requestBody: CreateVoiceProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a voice profile domain, a collection of voice profiles, their voice prints, and encrypted enrollment audio.</p> <important> <p>Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p> </important> <p>For more information about voice profile domains, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/pstn-voice-analytics.html">Using Amazon Chime SDK Voice Analytics</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>
		 * Post voice-profile-domains
		 * @return {void} 
		 */
		CreateVoiceProfileDomain(requestBody: CreateVoiceProfileDomainPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-profile-domains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the specified voice profile domains in the administrator's AWS account.
		 * Get voice-profile-domains
		 * @param {string} next_token The token used to return the next page of results.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVoiceProfileDomainsResponse} Success
		 */
		ListVoiceProfileDomains(next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListVoiceProfileDomainsResponse> {
			return this.http.get<ListVoiceProfileDomainsResponse>(this.baseUri + 'voice-profile-domains?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Moves the specified phone number into the <b>Deletion queue</b>. A phone number must be disassociated from any users or Amazon Chime SDK Voice Connectors before it can be deleted.</p> <p>Deleted phone numbers remain in the <b>Deletion queue</b> queue for 7 days before they are deleted permanently.</p>
		 * Delete phone-numbers/{phoneNumberId}
		 * @param {string} phoneNumberId The phone number ID.
		 * @return {void} 
		 */
		DeletePhoneNumber(phoneNumberId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.
		 * Get phone-numbers/{phoneNumberId}
		 * @param {string} phoneNumberId The phone number ID.
		 * @return {GetPhoneNumberResponse} Success
		 */
		GetPhoneNumber(phoneNumberId: string): Observable<GetPhoneNumberResponse> {
			return this.http.get<GetPhoneNumberResponse>(this.baseUri + 'phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)), {});
		}

		/**
		 * <p>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action.</p> <p>For numbers outside the U.S., you must use the Amazon Chime SDK SIP Media Application Dial-In product type.</p> <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
		 * Post phone-numbers/{phoneNumberId}
		 * @param {string} phoneNumberId The phone number ID.
		 * @return {UpdatePhoneNumberResponse} Success
		 */
		UpdatePhoneNumber(phoneNumberId: string, requestBody: UpdatePhoneNumberPostBody): Observable<UpdatePhoneNumberResponse> {
			return this.http.post<UpdatePhoneNumberResponse>(this.baseUri + 'phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified proxy session from the specified Amazon Chime SDK Voice Connector.
		 * Delete voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @param {string} proxySessionId The proxy session ID.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteProxySession(voiceConnectorId: string, proxySessionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions/' + (proxySessionId == null ? '' : encodeURIComponent(proxySessionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the specified proxy session details for the specified Amazon Chime SDK Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @param {string} proxySessionId The proxy session ID.
		 *     Min length: 1    Max length: 128
		 * @return {GetProxySessionResponse} Success
		 */
		GetProxySession(voiceConnectorId: string, proxySessionId: string): Observable<GetProxySessionResponse> {
			return this.http.get<GetProxySessionResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions/' + (proxySessionId == null ? '' : encodeURIComponent(proxySessionId)), {});
		}

		/**
		 * Updates the specified proxy session details, such as voice or SMS capabilities.
		 * Post voice-connectors/{voiceConnectorId}/proxy-sessions/{proxySessionId}
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @param {string} proxySessionId The proxy session ID.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		UpdateProxySession(voiceConnectorId: string, proxySessionId: string, requestBody: UpdateProxySessionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/proxy-sessions/' + (proxySessionId == null ? '' : encodeURIComponent(proxySessionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a SIP media application.
		 * Delete sip-media-applications/{sipMediaApplicationId}
		 * @param {string} sipMediaApplicationId The SIP media application ID.
		 * @return {void} 
		 */
		DeleteSipMediaApplication(sipMediaApplicationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the information for a SIP media application, including name, AWS Region, and endpoints.
		 * Get sip-media-applications/{sipMediaApplicationId}
		 * @param {string} sipMediaApplicationId The SIP media application ID .
		 * @return {GetSipMediaApplicationResponse} Success
		 */
		GetSipMediaApplication(sipMediaApplicationId: string): Observable<GetSipMediaApplicationResponse> {
			return this.http.get<GetSipMediaApplicationResponse>(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)), {});
		}

		/**
		 * Updates the details of the specified SIP media application.
		 * Put sip-media-applications/{sipMediaApplicationId}
		 * @param {string} sipMediaApplicationId The SIP media application ID.
		 * @return {UpdateSipMediaApplicationResponse} Success
		 */
		UpdateSipMediaApplication(sipMediaApplicationId: string, requestBody: UpdateSipMediaApplicationPutBody): Observable<UpdateSipMediaApplicationResponse> {
			return this.http.put<UpdateSipMediaApplicationResponse>(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a SIP rule.
		 * Delete sip-rules/{sipRuleId}
		 * @param {string} sipRuleId The SIP rule ID.
		 * @return {void} 
		 */
		DeleteSipRule(sipRuleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sip-rules/' + (sipRuleId == null ? '' : encodeURIComponent(sipRuleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.
		 * Get sip-rules/{sipRuleId}
		 * @param {string} sipRuleId The SIP rule ID.
		 * @return {GetSipRuleResponse} Success
		 */
		GetSipRule(sipRuleId: string): Observable<GetSipRuleResponse> {
			return this.http.get<GetSipRuleResponse>(this.baseUri + 'sip-rules/' + (sipRuleId == null ? '' : encodeURIComponent(sipRuleId)), {});
		}

		/**
		 * Updates the details of the specified SIP rule.
		 * Put sip-rules/{sipRuleId}
		 * @param {string} sipRuleId The SIP rule ID.
		 * @return {void} 
		 */
		UpdateSipRule(sipRuleId: string, requestBody: UpdateSipRulePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sip-rules/' + (sipRuleId == null ? '' : encodeURIComponent(sipRuleId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an Amazon Chime SDK Voice Connector. Any phone numbers associated with the Amazon Chime SDK Voice Connector must be disassociated from it before it can be deleted.
		 * Delete voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnector(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details for the specified Amazon Chime SDK Voice Connector, such as timestamps,name, outbound host, and encryption requirements.
		 * Get voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {GetVoiceConnectorResponse} Success
		 */
		GetVoiceConnector(voiceConnectorId: string): Observable<GetVoiceConnectorResponse> {
			return this.http.get<GetVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), {});
		}

		/**
		 * Updates the details for the specified Amazon Chime SDK Voice Connector.
		 * Put voice-connectors/{voiceConnectorId}
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {UpdateVoiceConnectorResponse} Success
		 */
		UpdateVoiceConnector(voiceConnectorId: string, requestBody: UpdateVoiceConnectorPutBody): Observable<UpdateVoiceConnectorResponse> {
			return this.http.put<UpdateVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the emergency calling details from the specified Amazon Chime SDK Voice Connector.
		 * Delete voice-connectors/{voiceConnectorId}/emergency-calling-configuration
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorEmergencyCallingConfiguration(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/emergency-calling-configuration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the emergency calling configuration details for the specified Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/emergency-calling-configuration
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {GetVoiceConnectorEmergencyCallingConfigurationResponse} Success
		 */
		GetVoiceConnectorEmergencyCallingConfiguration(voiceConnectorId: string): Observable<GetVoiceConnectorEmergencyCallingConfigurationResponse> {
			return this.http.get<GetVoiceConnectorEmergencyCallingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/emergency-calling-configuration', {});
		}

		/**
		 * Updates a Voice Connector's emergency calling configuration.
		 * Put voice-connectors/{voiceConnectorId}/emergency-calling-configuration
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {PutVoiceConnectorEmergencyCallingConfigurationResponse} Success
		 */
		PutVoiceConnectorEmergencyCallingConfiguration(voiceConnectorId: string, requestBody: PutVoiceConnectorEmergencyCallingConfigurationPutBody): Observable<PutVoiceConnectorEmergencyCallingConfigurationResponse> {
			return this.http.put<PutVoiceConnectorEmergencyCallingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/emergency-calling-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon Chime SDK Voice Connector group. Any <code>VoiceConnectorItems</code> and phone numbers associated with the group must be removed before it can be deleted.
		 * Delete voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Voice Connector Group ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorGroup(voiceConnectorGroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details for the specified Amazon Chime SDK Voice Connector group, such as timestamps,name, and associated <code>VoiceConnectorItems</code>.
		 * Get voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Voice Connector group ID.
		 * @return {GetVoiceConnectorGroupResponse} Success
		 */
		GetVoiceConnectorGroup(voiceConnectorGroupId: string): Observable<GetVoiceConnectorGroupResponse> {
			return this.http.get<GetVoiceConnectorGroupResponse>(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), {});
		}

		/**
		 * Updates the settings for the specified Amazon Chime SDK Voice Connector group.
		 * Put voice-connector-groups/{voiceConnectorGroupId}
		 * @param {string} voiceConnectorGroupId The Voice Connector ID.
		 * @return {void} 
		 */
		UpdateVoiceConnectorGroup(voiceConnectorGroupId: string, requestBody: UpdateVoiceConnectorGroupPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the origination settings for the specified Amazon Chime SDK Voice Connector. </p> <note> <p>If emergency calling is configured for the Voice Connector, it must be deleted prior to deleting the origination settings.</p> </note>
		 * Delete voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorOrigination(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the origination settings for the specified Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {GetVoiceConnectorOriginationResponse} Success
		 */
		GetVoiceConnectorOrigination(voiceConnectorId: string): Observable<GetVoiceConnectorOriginationResponse> {
			return this.http.get<GetVoiceConnectorOriginationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', {});
		}

		/**
		 * Updates a Voice Connector's origination settings.
		 * Put voice-connectors/{voiceConnectorId}/origination
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {PutVoiceConnectorOriginationResponse} Success
		 */
		PutVoiceConnectorOrigination(voiceConnectorId: string, requestBody: PutVoiceConnectorOriginationPutBody): Observable<PutVoiceConnectorOriginationResponse> {
			return this.http.put<PutVoiceConnectorOriginationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/origination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the proxy configuration from the specified Amazon Chime SDK Voice Connector.
		 * Delete voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		DeleteVoiceConnectorProxy(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the proxy configuration details for the specified Amazon Chime SDK Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @return {GetVoiceConnectorProxyResponse} Success
		 */
		GetVoiceConnectorProxy(voiceConnectorId: string): Observable<GetVoiceConnectorProxyResponse> {
			return this.http.get<GetVoiceConnectorProxyResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', {});
		}

		/**
		 * Puts the specified proxy configuration to the specified Amazon Chime SDK Voice Connector.
		 * Put voice-connectors/{voiceConnectorId}/programmable-numbers/proxy
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @return {PutVoiceConnectorProxyResponse} Success
		 */
		PutVoiceConnectorProxy(voiceConnectorId: string, requestBody: PutVoiceConnectorProxyPutBody): Observable<PutVoiceConnectorProxyResponse> {
			return this.http.put<PutVoiceConnectorProxyResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/programmable-numbers/proxy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Voice Connector's streaming configuration.
		 * Delete voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorStreamingConfiguration(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the streaming configuration details for the specified Amazon Chime SDK Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.
		 * Get voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {GetVoiceConnectorStreamingConfigurationResponse} Success
		 */
		GetVoiceConnectorStreamingConfiguration(voiceConnectorId: string): Observable<GetVoiceConnectorStreamingConfigurationResponse> {
			return this.http.get<GetVoiceConnectorStreamingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', {});
		}

		/**
		 * Updates a Voice Connector's streaming configuration settings.
		 * Put voice-connectors/{voiceConnectorId}/streaming-configuration
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {PutVoiceConnectorStreamingConfigurationResponse} Success
		 */
		PutVoiceConnectorStreamingConfiguration(voiceConnectorId: string, requestBody: PutVoiceConnectorStreamingConfigurationPutBody): Observable<PutVoiceConnectorStreamingConfigurationResponse> {
			return this.http.put<PutVoiceConnectorStreamingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/streaming-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the termination settings for the specified Amazon Chime SDK Voice Connector.</p> <note> <p>If emergency calling is configured for the Voice Connector, it must be deleted prior to deleting the termination settings.</p> </note>
		 * Delete voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorTermination(voiceConnectorId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the termination setting details for the specified Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {GetVoiceConnectorTerminationResponse} Success
		 */
		GetVoiceConnectorTermination(voiceConnectorId: string): Observable<GetVoiceConnectorTerminationResponse> {
			return this.http.get<GetVoiceConnectorTerminationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', {});
		}

		/**
		 * Updates a Voice Connector's termination settings.
		 * Put voice-connectors/{voiceConnectorId}/termination
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {PutVoiceConnectorTerminationResponse} Success
		 */
		PutVoiceConnectorTermination(voiceConnectorId: string, requestBody: PutVoiceConnectorTerminationPutBody): Observable<PutVoiceConnectorTerminationResponse> {
			return this.http.put<PutVoiceConnectorTerminationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified SIP credentials used by your equipment to authenticate during call termination.
		 * Post voice-connectors/{voiceConnectorId}/termination/credentials#operation=delete
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {void} 
		 */
		DeleteVoiceConnectorTerminationCredentials(voiceConnectorId: string, operation: DeleteVoiceConnectorTerminationCredentialsOperation, requestBody: DeleteVoiceConnectorTerminationCredentialsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/credentials#operation=delete&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a voice profile, including its voice print and enrollment data. WARNING: This action is not reversible.
		 * Delete voice-profiles/{VoiceProfileId}
		 * @param {string} VoiceProfileId The voice profile ID.
		 *     Min length: 1    Max length: 256
		 * @return {void} 
		 */
		DeleteVoiceProfile(VoiceProfileId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-profiles/' + (VoiceProfileId == null ? '' : encodeURIComponent(VoiceProfileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the details of the specified voice profile.
		 * Get voice-profiles/{VoiceProfileId}
		 * @param {string} VoiceProfileId The voice profile ID.
		 *     Min length: 1    Max length: 256
		 * @return {GetVoiceProfileResponse} Success
		 */
		GetVoiceProfile(VoiceProfileId: string): Observable<GetVoiceProfileResponse> {
			return this.http.get<GetVoiceProfileResponse>(this.baseUri + 'voice-profiles/' + (VoiceProfileId == null ? '' : encodeURIComponent(VoiceProfileId)), {});
		}

		/**
		 * <p>Updates the specified voice profile’s voice print and refreshes its expiration timestamp.</p> <important> <p>As a condition of using this feature, you acknowledge that the collection, use, storage, and retention of your caller’s biometric identifiers and biometric information (“biometric data”) in the form of a digital voiceprint requires the caller’s informed consent via a written release. Such consent is required under various state laws, including biometrics laws in Illinois, Texas, Washington and other state privacy laws.</p> <p>You must provide a written release to each caller through a process that clearly reflects each caller’s informed consent before using Amazon Chime SDK Voice Insights service, as required under the terms of your agreement with AWS governing your use of the service.</p> </important>
		 * Put voice-profiles/{VoiceProfileId}
		 * @param {string} VoiceProfileId The profile ID.
		 *     Min length: 1    Max length: 256
		 * @return {UpdateVoiceProfileResponse} Success
		 */
		UpdateVoiceProfile(VoiceProfileId: string, requestBody: UpdateVoiceProfilePutBody): Observable<UpdateVoiceProfileResponse> {
			return this.http.put<UpdateVoiceProfileResponse>(this.baseUri + 'voice-profiles/' + (VoiceProfileId == null ? '' : encodeURIComponent(VoiceProfileId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes all voice profiles in the domain. WARNING: This action is not reversible.
		 * Delete voice-profile-domains/{VoiceProfileDomainId}
		 * @param {string} VoiceProfileDomainId The voice profile domain ID.
		 *     Min length: 1    Max length: 256
		 * @return {void} 
		 */
		DeleteVoiceProfileDomain(VoiceProfileDomainId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'voice-profile-domains/' + (VoiceProfileDomainId == null ? '' : encodeURIComponent(VoiceProfileDomainId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the details of the specified voice profile domain.
		 * Get voice-profile-domains/{VoiceProfileDomainId}
		 * @param {string} VoiceProfileDomainId The voice profile domain ID.
		 *     Min length: 1    Max length: 256
		 * @return {GetVoiceProfileDomainResponse} Success
		 */
		GetVoiceProfileDomain(VoiceProfileDomainId: string): Observable<GetVoiceProfileDomainResponse> {
			return this.http.get<GetVoiceProfileDomainResponse>(this.baseUri + 'voice-profile-domains/' + (VoiceProfileDomainId == null ? '' : encodeURIComponent(VoiceProfileDomainId)), {});
		}

		/**
		 * Updates the settings for the specified voice profile domain.
		 * Put voice-profile-domains/{VoiceProfileDomainId}
		 * @param {string} VoiceProfileDomainId The domain ID.
		 *     Min length: 1    Max length: 256
		 * @return {UpdateVoiceProfileDomainResponse} Success
		 */
		UpdateVoiceProfileDomain(VoiceProfileDomainId: string, requestBody: UpdateVoiceProfileDomainPutBody): Observable<UpdateVoiceProfileDomainResponse> {
			return this.http.put<UpdateVoiceProfileDomainResponse>(this.baseUri + 'voice-profile-domains/' + (VoiceProfileDomainId == null ? '' : encodeURIComponent(VoiceProfileDomainId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified phone numbers from the specified Amazon Chime SDK Voice Connector.
		 * Post voice-connectors/{voiceConnectorId}#operation=disassociate-phone-numbers
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {DisassociatePhoneNumbersFromVoiceConnectorResponse} Success
		 */
		DisassociatePhoneNumbersFromVoiceConnector(voiceConnectorId: string, operation: DisassociatePhoneNumbersFromVoiceConnectorOperation, requestBody: DisassociatePhoneNumbersFromVoiceConnectorPostBody): Observable<DisassociatePhoneNumbersFromVoiceConnectorResponse> {
			return this.http.post<DisassociatePhoneNumbersFromVoiceConnectorResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '#operation=disassociate-phone-numbers&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified phone numbers from the specified Amazon Chime SDK Voice Connector group.
		 * Post voice-connector-groups/{voiceConnectorGroupId}#operation=disassociate-phone-numbers
		 * @param {string} voiceConnectorGroupId The Voice Connector group ID.
		 * @return {DisassociatePhoneNumbersFromVoiceConnectorGroupResponse} Success
		 */
		DisassociatePhoneNumbersFromVoiceConnectorGroup(voiceConnectorGroupId: string, operation: DisassociatePhoneNumbersFromVoiceConnectorOperation, requestBody: DisassociatePhoneNumbersFromVoiceConnectorGroupPostBody): Observable<DisassociatePhoneNumbersFromVoiceConnectorGroupResponse> {
			return this.http.post<DisassociatePhoneNumbersFromVoiceConnectorGroupResponse>(this.baseUri + 'voice-connector-groups/' + (voiceConnectorGroupId == null ? '' : encodeURIComponent(voiceConnectorGroupId)) + '#operation=disassociate-phone-numbers&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the global settings for the Amazon Chime SDK Voice Connectors in an AWS account.
		 * Get settings
		 * @return {GetGlobalSettingsResponse} Success
		 */
		GetGlobalSettings(): Observable<GetGlobalSettingsResponse> {
			return this.http.get<GetGlobalSettingsResponse>(this.baseUri + 'settings', {});
		}

		/**
		 * Updates global settings for the Amazon Chime SDK Voice Connectors in an AWS account.
		 * Put settings
		 * @return {void} 
		 */
		UpdateGlobalSettings(requestBody: UpdateGlobalSettingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details for the specified phone number order, such as the order creation timestamp, phone numbers in E.164 format, product type, and order status.
		 * Get phone-number-orders/{phoneNumberOrderId}
		 * @param {string} phoneNumberOrderId The ID of the phone number order .
		 * @return {GetPhoneNumberOrderResponse} Success
		 */
		GetPhoneNumberOrder(phoneNumberOrderId: string): Observable<GetPhoneNumberOrderResponse> {
			return this.http.get<GetPhoneNumberOrderResponse>(this.baseUri + 'phone-number-orders/' + (phoneNumberOrderId == null ? '' : encodeURIComponent(phoneNumberOrderId)), {});
		}

		/**
		 * Retrieves the phone number settings for the administrator's AWS account, such as the default outbound calling name.
		 * Get settings/phone-number
		 * @return {GetPhoneNumberSettingsResponse} Success
		 */
		GetPhoneNumberSettings(): Observable<GetPhoneNumberSettingsResponse> {
			return this.http.get<GetPhoneNumberSettingsResponse>(this.baseUri + 'settings/phone-number', {});
		}

		/**
		 * Updates the phone number settings for the administrator's AWS account, such as the default outbound calling name. You can update the default outbound calling name once every seven days. Outbound calling names can take up to 72 hours to update.
		 * Put settings/phone-number
		 * @return {void} 
		 */
		UpdatePhoneNumberSettings(requestBody: UpdatePhoneNumberSettingsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'settings/phone-number', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Alexa Skill configuration for the SIP media application.
		 * Get sip-media-applications/{sipMediaApplicationId}/alexa-skill-configuration
		 * @param {string} sipMediaApplicationId The SIP media application ID.
		 * @return {GetSipMediaApplicationAlexaSkillConfigurationResponse} Success
		 */
		GetSipMediaApplicationAlexaSkillConfiguration(sipMediaApplicationId: string): Observable<GetSipMediaApplicationAlexaSkillConfigurationResponse> {
			return this.http.get<GetSipMediaApplicationAlexaSkillConfigurationResponse>(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)) + '/alexa-skill-configuration', {});
		}

		/**
		 * Updates the Alexa Skill configuration for the SIP media application.
		 * Put sip-media-applications/{sipMediaApplicationId}/alexa-skill-configuration
		 * @param {string} sipMediaApplicationId The SIP media application ID.
		 * @return {PutSipMediaApplicationAlexaSkillConfigurationResponse} Success
		 */
		PutSipMediaApplicationAlexaSkillConfiguration(sipMediaApplicationId: string, requestBody: PutSipMediaApplicationAlexaSkillConfigurationPutBody): Observable<PutSipMediaApplicationAlexaSkillConfigurationResponse> {
			return this.http.put<PutSipMediaApplicationAlexaSkillConfigurationResponse>(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)) + '/alexa-skill-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the logging configuration for the specified SIP media application.
		 * Get sip-media-applications/{sipMediaApplicationId}/logging-configuration
		 * @param {string} sipMediaApplicationId The SIP media application ID.
		 * @return {GetSipMediaApplicationLoggingConfigurationResponse} Success
		 */
		GetSipMediaApplicationLoggingConfiguration(sipMediaApplicationId: string): Observable<GetSipMediaApplicationLoggingConfigurationResponse> {
			return this.http.get<GetSipMediaApplicationLoggingConfigurationResponse>(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)) + '/logging-configuration', {});
		}

		/**
		 * Updates the logging configuration for the specified SIP media application.
		 * Put sip-media-applications/{sipMediaApplicationId}/logging-configuration
		 * @param {string} sipMediaApplicationId The SIP media application ID.
		 * @return {PutSipMediaApplicationLoggingConfigurationResponse} Success
		 */
		PutSipMediaApplicationLoggingConfiguration(sipMediaApplicationId: string, requestBody: PutSipMediaApplicationLoggingConfigurationPutBody): Observable<PutSipMediaApplicationLoggingConfigurationResponse> {
			return this.http.put<PutSipMediaApplicationLoggingConfigurationResponse>(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)) + '/logging-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the details of the specified speaker search task.
		 * Get voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}
		 * @param {string} VoiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @param {string} SpeakerSearchTaskId The ID of the speaker search task.
		 *     Min length: 1    Max length: 256
		 * @return {GetSpeakerSearchTaskResponse} Success
		 */
		GetSpeakerSearchTask(VoiceConnectorId: string, SpeakerSearchTaskId: string): Observable<GetSpeakerSearchTaskResponse> {
			return this.http.get<GetSpeakerSearchTaskResponse>(this.baseUri + 'voice-connectors/' + (VoiceConnectorId == null ? '' : encodeURIComponent(VoiceConnectorId)) + '/speaker-search-tasks/' + (SpeakerSearchTaskId == null ? '' : encodeURIComponent(SpeakerSearchTaskId)), {});
		}

		/**
		 * Retrieves the logging configuration settings for the specified Voice Connector. Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.
		 * Get voice-connectors/{voiceConnectorId}/logging-configuration
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {GetVoiceConnectorLoggingConfigurationResponse} Success
		 */
		GetVoiceConnectorLoggingConfiguration(voiceConnectorId: string): Observable<GetVoiceConnectorLoggingConfigurationResponse> {
			return this.http.get<GetVoiceConnectorLoggingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/logging-configuration', {});
		}

		/**
		 * Updates a Voice Connector's logging configuration.
		 * Put voice-connectors/{voiceConnectorId}/logging-configuration
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {PutVoiceConnectorLoggingConfigurationResponse} Success
		 */
		PutVoiceConnectorLoggingConfiguration(voiceConnectorId: string, requestBody: PutVoiceConnectorLoggingConfigurationPutBody): Observable<PutVoiceConnectorLoggingConfigurationResponse> {
			return this.http.put<PutVoiceConnectorLoggingConfigurationResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/logging-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the last time a <code>SIP OPTIONS</code> ping was received from your SIP infrastructure for the specified Amazon Chime SDK Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/termination/health
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {GetVoiceConnectorTerminationHealthResponse} Success
		 */
		GetVoiceConnectorTerminationHealth(voiceConnectorId: string): Observable<GetVoiceConnectorTerminationHealthResponse> {
			return this.http.get<GetVoiceConnectorTerminationHealthResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/health', {});
		}

		/**
		 * Retrieves the details of a voice tone analysis task.
		 * Get voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}#isCaller
		 * @param {string} VoiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @param {string} VoiceToneAnalysisTaskId The ID of the voice tone anlysis task.
		 *     Min length: 1    Max length: 256
		 * @param {boolean} isCaller Specifies whether the voice being analyzed is the caller (originator) or the callee (responder).
		 * @return {GetVoiceToneAnalysisTaskResponse} Success
		 */
		GetVoiceToneAnalysisTask(VoiceConnectorId: string, VoiceToneAnalysisTaskId: string, isCaller: boolean): Observable<GetVoiceToneAnalysisTaskResponse> {
			return this.http.get<GetVoiceToneAnalysisTaskResponse>(this.baseUri + 'voice-connectors/' + (VoiceConnectorId == null ? '' : encodeURIComponent(VoiceConnectorId)) + '/voice-tone-analysis-tasks/' + (VoiceToneAnalysisTaskId == null ? '' : encodeURIComponent(VoiceToneAnalysisTaskId)) + '#isCaller&isCaller=' + isCaller, {});
		}

		/**
		 * Lists the available AWS Regions in which you can create an Amazon Chime SDK Voice Connector.
		 * Get voice-connector-regions
		 * @return {ListAvailableVoiceConnectorRegionsResponse} Success
		 */
		ListAvailableVoiceConnectorRegions(): Observable<ListAvailableVoiceConnectorRegionsResponse> {
			return this.http.get<ListAvailableVoiceConnectorRegionsResponse>(this.baseUri + 'voice-connector-regions', {});
		}

		/**
		 * Lists the phone numbers for the specified Amazon Chime SDK account, Amazon Chime SDK user, Amazon Chime SDK Voice Connector, or Amazon Chime SDK Voice Connector group.
		 * Get phone-numbers
		 * @param {string} status The status of your organization's phone numbers.
		 * @param {PhoneNumberProductType} product_type The phone number product types.
		 * @param {PhoneNumberAssociationName} filter_name The filter to limit the number of results.
		 * @param {string} filter_value The filter value.
		 * @param {number} max_results The maximum number of results to return in a single call.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} next_token The token used to return the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPhoneNumbersResponse} Success
		 */
		ListPhoneNumbers(status: string | null | undefined, product_type: PhoneNumberProductType | null | undefined, filter_name: PhoneNumberAssociationName | null | undefined, filter_value: string | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPhoneNumbersResponse> {
			return this.http.get<ListPhoneNumbersResponse>(this.baseUri + 'phone-numbers?status=' + (status == null ? '' : encodeURIComponent(status)) + '&product_type=' + product_type + '&filter_name=' + filter_name + '&filter_value=' + (filter_value == null ? '' : encodeURIComponent(filter_value)) + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the countries that you can order phone numbers from.
		 * Get phone-number-countries#product-type
		 * @param {PhoneNumberProductType} product_type The phone number product type.
		 * @return {ListSupportedPhoneNumberCountriesResponse} Success
		 */
		ListSupportedPhoneNumberCountries(product_type: PhoneNumberProductType): Observable<ListSupportedPhoneNumberCountriesResponse> {
			return this.http.get<ListSupportedPhoneNumberCountriesResponse>(this.baseUri + 'phone-number-countries#product-type?product_type=' + product_type, {});
		}

		/**
		 * Returns a list of the tags in a given resource.
		 * Get tags#arn
		 * @param {string} arn The resource ARN.
		 *     Min length: 1    Max length: 1024
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Lists the SIP credentials for the specified Amazon Chime SDK Voice Connector.
		 * Get voice-connectors/{voiceConnectorId}/termination/credentials
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {ListVoiceConnectorTerminationCredentialsResponse} Success
		 */
		ListVoiceConnectorTerminationCredentials(voiceConnectorId: string): Observable<ListVoiceConnectorTerminationCredentialsResponse> {
			return this.http.get<ListVoiceConnectorTerminationCredentialsResponse>(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/credentials', {});
		}

		/**
		 * Lists the voice profiles in a voice profile domain.
		 * Get voice-profiles#voice-profile-domain-id
		 * @param {string} voice_profile_domain_id The ID of the voice profile domain.
		 *     Min length: 1    Max length: 256
		 * @param {string} next_token The token used to retrieve the next page of results.
		 * @param {number} max_results The maximum number of results in the request.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListVoiceProfilesResponse} Success
		 */
		ListVoiceProfiles(voice_profile_domain_id: string, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListVoiceProfilesResponse> {
			return this.http.get<ListVoiceProfilesResponse>(this.baseUri + 'voice-profiles#voice-profile-domain-id?voice_profile_domain_id=' + (voice_profile_domain_id == null ? '' : encodeURIComponent(voice_profile_domain_id)) + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Updates a Voice Connector's termination credentials.
		 * Post voice-connectors/{voiceConnectorId}/termination/credentials#operation=put
		 * @param {string} voiceConnectorId The Voice Connector ID.
		 * @return {void} 
		 */
		PutVoiceConnectorTerminationCredentials(voiceConnectorId: string, operation: PutVoiceConnectorTerminationCredentialsOperation, requestBody: PutVoiceConnectorTerminationCredentialsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (voiceConnectorId == null ? '' : encodeURIComponent(voiceConnectorId)) + '/termination/credentials#operation=put&operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores a deleted phone number.
		 * Post phone-numbers/{phoneNumberId}#operation=restore
		 * @param {string} phoneNumberId The ID of the phone number being restored.
		 * @return {RestorePhoneNumberResponse} Success
		 */
		RestorePhoneNumber(phoneNumberId: string, operation: RestorePhoneNumberOperation): Observable<RestorePhoneNumberResponse> {
			return this.http.post<RestorePhoneNumberResponse>(this.baseUri + 'phone-numbers/' + (phoneNumberId == null ? '' : encodeURIComponent(phoneNumberId)) + '#operation=restore&operation=' + operation, null, {});
		}

		/**
		 * Searches the provisioned phone numbers in an organization.
		 * Get search#type=phone-numbers
		 * @param {string} area_code Confines a search to just the phone numbers associated with the specified area code.
		 * @param {string} city Confines a search to just the phone numbers associated with the specified city.
		 * @param {string} country Confines a search to just the phone numbers associated with the specified country.
		 * @param {string} state Confines a search to just the phone numbers associated with the specified state.
		 * @param {string} toll_free_prefix Confines a search to just the phone numbers associated with the specified toll-free prefix.
		 *     Min length: 3    Max length: 3
		 * @param {PhoneNumberType} phone_number_type Confines a search to just the phone numbers associated with the specified phone number type, either <b>local</b> or <b>toll-free</b>.
		 * @param {number} max_results The maximum number of results to return.
		 *     Minimum: 1    Maximum: 500
		 * @param {string} next_token The token used to return the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchAvailablePhoneNumbersResponse} Success
		 */
		SearchAvailablePhoneNumbers(area_code: string | null | undefined, city: string | null | undefined, country: string | null | undefined, state: string | null | undefined, toll_free_prefix: string | null | undefined, phone_number_type: PhoneNumberType | null | undefined, max_results: number | null | undefined, next_token: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined, type: SearchAvailablePhoneNumbersType): Observable<SearchAvailablePhoneNumbersResponse> {
			return this.http.get<SearchAvailablePhoneNumbersResponse>(this.baseUri + 'search#type=phone-numbers?area_code=' + (area_code == null ? '' : encodeURIComponent(area_code)) + '&city=' + (city == null ? '' : encodeURIComponent(city)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&toll_free_prefix=' + (toll_free_prefix == null ? '' : encodeURIComponent(toll_free_prefix)) + '&phone_number_type=' + phone_number_type + '&max_results=' + max_results + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&type=' + type, {});
		}

		/**
		 * <p>Starts a speaker search task.</p> <important> <p>Before starting any speaker search tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p> </important>
		 * Post voice-connectors/{VoiceConnectorId}/speaker-search-tasks
		 * @param {string} VoiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		StartSpeakerSearchTask(VoiceConnectorId: string, requestBody: StartSpeakerSearchTaskPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (VoiceConnectorId == null ? '' : encodeURIComponent(VoiceConnectorId)) + '/speaker-search-tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Starts a voice tone analysis task. For more information about voice tone analysis, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/pstn-voice-analytics.html">Using Amazon Chime SDK voice analytics</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p> <important> <p>Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p> </important>
		 * Post voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks
		 * @param {string} VoiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @return {void} 
		 */
		StartVoiceToneAnalysisTask(VoiceConnectorId: string, requestBody: StartVoiceToneAnalysisTaskPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (VoiceConnectorId == null ? '' : encodeURIComponent(VoiceConnectorId)) + '/voice-tone-analysis-tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a speaker search task.
		 * Post voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}#operation=stop
		 * @param {string} VoiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @param {string} SpeakerSearchTaskId The speaker search task ID.
		 *     Min length: 1    Max length: 256
		 * @return {void} 
		 */
		StopSpeakerSearchTask(VoiceConnectorId: string, SpeakerSearchTaskId: string, operation: StopSpeakerSearchTaskOperation): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (VoiceConnectorId == null ? '' : encodeURIComponent(VoiceConnectorId)) + '/speaker-search-tasks/' + (SpeakerSearchTaskId == null ? '' : encodeURIComponent(SpeakerSearchTaskId)) + '#operation=stop&operation=' + operation, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a voice tone analysis task.
		 * Post voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}#operation=stop
		 * @param {string} VoiceConnectorId The Voice Connector ID.
		 *     Min length: 1    Max length: 128
		 * @param {string} VoiceToneAnalysisTaskId The ID of the voice tone analysis task.
		 *     Min length: 1    Max length: 256
		 * @return {void} 
		 */
		StopVoiceToneAnalysisTask(VoiceConnectorId: string, VoiceToneAnalysisTaskId: string, operation: StopSpeakerSearchTaskOperation): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'voice-connectors/' + (VoiceConnectorId == null ? '' : encodeURIComponent(VoiceConnectorId)) + '/voice-tone-analysis-tasks/' + (VoiceToneAnalysisTaskId == null ? '' : encodeURIComponent(VoiceToneAnalysisTaskId)) + '#operation=stop&operation=' + operation, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a tag to the specified resource.
		 * Post tags#operation=tag-resource
		 * @return {void} 
		 */
		TagResource(operation: TagResourceOperation, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=tag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes tags from a resource.
		 * Post tags#operation=untag-resource
		 * @return {void} 
		 */
		UntagResource(operation: UntagResourceOperation, requestBody: UntagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#operation=untag-resource?operation=' + operation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Invokes the AWS Lambda function associated with the SIP media application and transaction ID in an update request. The Lambda function can then return a new set of actions.
		 * Post sip-media-applications/{sipMediaApplicationId}/calls/{transactionId}
		 * @param {string} sipMediaApplicationId The ID of the SIP media application handling the call.
		 * @param {string} transactionId The ID of the call transaction.
		 * @return {void} 
		 */
		UpdateSipMediaApplicationCall(sipMediaApplicationId: string, transactionId: string, requestBody: UpdateSipMediaApplicationCallPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sip-media-applications/' + (sipMediaApplicationId == null ? '' : encodeURIComponent(sipMediaApplicationId)) + '/calls/' + (transactionId == null ? '' : encodeURIComponent(transactionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validates an address to be used for 911 calls made with Amazon Chime SDK Voice Connectors. You can use validated addresses in a Presence Information Data Format Location Object file that you include in SIP requests. That helps ensure that addresses are routed to the appropriate Public Safety Answering Point.
		 * Post emergency-calling/address
		 * @return {void} 
		 */
		ValidateE911Address(requestBody: ValidateE911AddressPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'emergency-calling/address', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AssociatePhoneNumbersWithVoiceConnectorOperation { 'associate-phone-numbers' = 'associate-phone-numbers' }

	export interface AssociatePhoneNumbersWithVoiceConnectorPostBody {

		/**
		 * List of phone numbers, in E.164 format.
		 * Required
		 */
		E164PhoneNumbers: Array<string>;

		/** If true, associates the provided phone numbers with the provided Amazon Chime SDK Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate?: boolean | null;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorPostBodyFormProperties {

		/** If true, associates the provided phone numbers with the provided Amazon Chime SDK Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorPostBodyFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorPostBodyFormProperties>({
			ForceAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AssociatePhoneNumbersWithVoiceConnectorGroupPostBody {

		/**
		 * List of phone numbers, in E.164 format.
		 * Required
		 */
		E164PhoneNumbers: Array<string>;

		/** If true, associates the provided phone numbers with the provided Amazon Chime SDK Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate?: boolean | null;
	}
	export interface AssociatePhoneNumbersWithVoiceConnectorGroupPostBodyFormProperties {

		/** If true, associates the provided phone numbers with the provided Amazon Chime SDK Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations. */
		ForceAssociate: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociatePhoneNumbersWithVoiceConnectorGroupPostBodyFormGroup() {
		return new FormGroup<AssociatePhoneNumbersWithVoiceConnectorGroupPostBodyFormProperties>({
			ForceAssociate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum BatchDeletePhoneNumberOperation { 'batch-delete' = 'batch-delete' }

	export interface BatchDeletePhoneNumberPostBody {

		/**
		 * List of phone number IDs.
		 * Required
		 * Minimum items: 1
		 */
		PhoneNumberIds: Array<string>;
	}
	export interface BatchDeletePhoneNumberPostBodyFormProperties {
	}
	export function CreateBatchDeletePhoneNumberPostBodyFormGroup() {
		return new FormGroup<BatchDeletePhoneNumberPostBodyFormProperties>({
		});

	}

	export enum BatchUpdatePhoneNumberOperation { 'batch-update' = 'batch-update' }

	export interface BatchUpdatePhoneNumberPostBody {

		/**
		 * Lists the phone numbers in the update request.
		 * Required
		 */
		UpdatePhoneNumberRequestItems: Array<UpdatePhoneNumberRequestItem>;
	}
	export interface BatchUpdatePhoneNumberPostBodyFormProperties {
	}
	export function CreateBatchUpdatePhoneNumberPostBodyFormGroup() {
		return new FormGroup<BatchUpdatePhoneNumberPostBodyFormProperties>({
		});

	}

	export interface CreatePhoneNumberOrderPostBody {

		/**
		 * The phone number product type.
		 * Required
		 */
		ProductType: PhoneNumberProductType;

		/**
		 * List of phone numbers, in E.164 format.
		 * Required
		 */
		E164PhoneNumbers: Array<string>;
	}
	export interface CreatePhoneNumberOrderPostBodyFormProperties {

		/**
		 * The phone number product type.
		 * Required
		 */
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,
	}
	export function CreateCreatePhoneNumberOrderPostBodyFormGroup() {
		return new FormGroup<CreatePhoneNumberOrderPostBodyFormProperties>({
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProxySessionPostBody {

		/**
		 * The participant phone numbers.
		 * Required
		 * Minimum items: 2
		 * Maximum items: 2
		 */
		ParticipantPhoneNumbers: Array<string>;

		/** The name of the proxy session. */
		Name?: string | null;

		/**
		 * The number of minutes allowed for the proxy session.
		 * Minimum: 1
		 */
		ExpiryMinutes?: number | null;

		/**
		 * The proxy session's capabilities.
		 * Required
		 */
		Capabilities: Array<Capability>;

		/** The preference for proxy phone number reuse, or stickiness, between the same participants across sessions. */
		NumberSelectionBehavior?: NumberSelectionBehavior | null;

		/** The preference for matching the country or area code of the proxy phone number with that of the first participant. */
		GeoMatchLevel?: GeoMatchLevel | null;

		/** The country and area code for a proxy phone number in a proxy phone session. */
		GeoMatchParams?: CreateProxySessionPostBodyGeoMatchParams;
	}
	export interface CreateProxySessionPostBodyFormProperties {

		/** The name of the proxy session. */
		Name: FormControl<string | null | undefined>,

		/**
		 * The number of minutes allowed for the proxy session.
		 * Minimum: 1
		 */
		ExpiryMinutes: FormControl<number | null | undefined>,

		/** The preference for proxy phone number reuse, or stickiness, between the same participants across sessions. */
		NumberSelectionBehavior: FormControl<NumberSelectionBehavior | null | undefined>,

		/** The preference for matching the country or area code of the proxy phone number with that of the first participant. */
		GeoMatchLevel: FormControl<GeoMatchLevel | null | undefined>,
	}
	export function CreateCreateProxySessionPostBodyFormGroup() {
		return new FormGroup<CreateProxySessionPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^$|^[a-zA-Z0-9 ]{0,30}$')]),
			ExpiryMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NumberSelectionBehavior: new FormControl<NumberSelectionBehavior | null | undefined>(undefined),
			GeoMatchLevel: new FormControl<GeoMatchLevel | null | undefined>(undefined),
		});

	}

	export interface CreateProxySessionPostBodyGeoMatchParams {
		Country?: string;
		AreaCode?: string;
	}
	export interface CreateProxySessionPostBodyGeoMatchParamsFormProperties {
		Country: FormControl<string | null | undefined>,
		AreaCode: FormControl<string | null | undefined>,
	}
	export function CreateCreateProxySessionPostBodyGeoMatchParamsFormGroup() {
		return new FormGroup<CreateProxySessionPostBodyGeoMatchParamsFormProperties>({
			Country: new FormControl<string | null | undefined>(undefined),
			AreaCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSipMediaApplicationPostBody {

		/**
		 * The AWS Region assigned to the SIP media application.
		 * Required
		 */
		AwsRegion: string;

		/**
		 * The SIP media application's name.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: string;

		/**
		 * List of endpoints (Lambda ARNs) specified for the SIP media application.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Endpoints: Array<SipMediaApplicationEndpoint>;

		/**
		 * The tags assigned to the SIP media application.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateSipMediaApplicationPostBodyFormProperties {

		/**
		 * The AWS Region assigned to the SIP media application.
		 * Required
		 */
		AwsRegion: FormControl<string | null | undefined>,

		/**
		 * The SIP media application's name.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSipMediaApplicationPostBodyFormGroup() {
		return new FormGroup<CreateSipMediaApplicationPostBodyFormProperties>({
			AwsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9 _.-]+')]),
		});

	}

	export interface CreateSipMediaApplicationCallPostBody {

		/**
		 * The phone number that a user calls from. This is a phone number in your Amazon Chime SDK phone number inventory.
		 * Required
		 */
		FromPhoneNumber: string;

		/**
		 * The phone number that the service should call.
		 * Required
		 */
		ToPhoneNumber: string;

		/** The SIP headers added to an outbound call leg. */
		SipHeaders?: {[id: string]: string };

		/** Context passed to a CreateSipMediaApplication API call. For example, you could pass key-value pairs such as: <code>"FirstName": "John", "LastName": "Doe"</code> */
		ArgumentsMap?: {[id: string]: string };
	}
	export interface CreateSipMediaApplicationCallPostBodyFormProperties {

		/**
		 * The phone number that a user calls from. This is a phone number in your Amazon Chime SDK phone number inventory.
		 * Required
		 */
		FromPhoneNumber: FormControl<string | null | undefined>,

		/**
		 * The phone number that the service should call.
		 * Required
		 */
		ToPhoneNumber: FormControl<string | null | undefined>,

		/** The SIP headers added to an outbound call leg. */
		SipHeaders: FormControl<{[id: string]: string } | null | undefined>,

		/** Context passed to a CreateSipMediaApplication API call. For example, you could pass key-value pairs such as: <code>"FirstName": "John", "LastName": "Doe"</code> */
		ArgumentsMap: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSipMediaApplicationCallPostBodyFormGroup() {
		return new FormGroup<CreateSipMediaApplicationCallPostBodyFormProperties>({
			FromPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\+?[1-9]\d{1,14}$')]),
			ToPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\+?[1-9]\d{1,14}$')]),
			SipHeaders: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			ArgumentsMap: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSipRulePostBody {

		/**
		 * The name of the SIP rule.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: string;

		/**
		 * The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.
		 * Required
		 */
		TriggerType: SipRuleTriggerType;

		/**
		 * If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound host name of a Voice Connector. If <code>TriggerType</code> is <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the <code>ToPhoneNumber</code> value.
		 * Required
		 */
		TriggerValue: string;

		/** Disables or enables a SIP rule. You must disable SIP rules before you can delete them. */
		Disabled?: boolean | null;

		/**
		 * List of SIP media applications, with priority and AWS Region. Only one SIP application per AWS Region can be used.
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		TargetApplications?: Array<SipRuleTargetApplication>;
	}
	export interface CreateSipRulePostBodyFormProperties {

		/**
		 * The name of the SIP rule.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.
		 * Required
		 */
		TriggerType: FormControl<SipRuleTriggerType | null | undefined>,

		/**
		 * If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound host name of a Voice Connector. If <code>TriggerType</code> is <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the <code>ToPhoneNumber</code> value.
		 * Required
		 */
		TriggerValue: FormControl<string | null | undefined>,

		/** Disables or enables a SIP rule. You must disable SIP rules before you can delete them. */
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateSipRulePostBodyFormGroup() {
		return new FormGroup<CreateSipRulePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9 _.-]+')]),
			TriggerType: new FormControl<SipRuleTriggerType | null | undefined>(undefined, [Validators.required]),
			TriggerValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateVoiceConnectorPostBody {

		/**
		 * The name of the Voice Connector.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: string;

		/** The AWS Region in which the Amazon Chime SDK Voice Connector is created. Default value: <code>us-east-1</code> . */
		AwsRegion?: VoiceConnectorAwsRegion | null;

		/**
		 * Enables or disables encryption for the Voice Connector.
		 * Required
		 */
		RequireEncryption: boolean;

		/**
		 * The tags assigned to the Voice Connector.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateVoiceConnectorPostBodyFormProperties {

		/**
		 * The name of the Voice Connector.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/** The AWS Region in which the Amazon Chime SDK Voice Connector is created. Default value: <code>us-east-1</code> . */
		AwsRegion: FormControl<VoiceConnectorAwsRegion | null | undefined>,

		/**
		 * Enables or disables encryption for the Voice Connector.
		 * Required
		 */
		RequireEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateVoiceConnectorPostBodyFormGroup() {
		return new FormGroup<CreateVoiceConnectorPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9 _.-]+')]),
			AwsRegion: new FormControl<VoiceConnectorAwsRegion | null | undefined>(undefined),
			RequireEncryption: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVoiceConnectorGroupPostBody {

		/**
		 * The name of the Voice Connector group.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: string;

		/** Lists the Voice Connectors that inbound calls are routed to. */
		VoiceConnectorItems?: Array<VoiceConnectorItem>;
	}
	export interface CreateVoiceConnectorGroupPostBodyFormProperties {

		/**
		 * The name of the Voice Connector group.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateVoiceConnectorGroupPostBodyFormGroup() {
		return new FormGroup<CreateVoiceConnectorGroupPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9 _.-]+')]),
		});

	}

	export interface CreateVoiceProfilePostBody {

		/**
		 * The ID of the speaker search task.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		SpeakerSearchTaskId: string;
	}
	export interface CreateVoiceProfilePostBodyFormProperties {

		/**
		 * The ID of the speaker search task.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		SpeakerSearchTaskId: FormControl<string | null | undefined>,
	}
	export function CreateCreateVoiceProfilePostBodyFormGroup() {
		return new FormGroup<CreateVoiceProfilePostBodyFormProperties>({
			SpeakerSearchTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateVoiceProfileDomainPostBody {

		/**
		 * The name of the voice profile domain.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: string;

		/**
		 * A description of the voice profile domain.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * <p>A structure that contains the configuration settings for server-side encryption.</p> <note> <p>We only support symmetric keys. Do not use asymmetric or HMAC keys, or KMS aliases.</p> </note>
		 * Required
		 */
		ServerSideEncryptionConfiguration: CreateVoiceProfileDomainPostBodyServerSideEncryptionConfiguration;

		/** The unique identifier for the client request. Use a different token for different domain creation requests. */
		ClientRequestToken?: string | null;

		/**
		 * The tags assigned to the domain.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateVoiceProfileDomainPostBodyFormProperties {

		/**
		 * The name of the voice profile domain.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the voice profile domain.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/** The unique identifier for the client request. Use a different token for different domain creation requests. */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateVoiceProfileDomainPostBodyFormGroup() {
		return new FormGroup<CreateVoiceProfileDomainPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9 _.-]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_a-zA-Z0-9]*$\{2,64\}$')]),
		});

	}

	export interface CreateVoiceProfileDomainPostBodyServerSideEncryptionConfiguration {
		KmsKeyArn?: string;
	}
	export interface CreateVoiceProfileDomainPostBodyServerSideEncryptionConfigurationFormProperties {
		KmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateVoiceProfileDomainPostBodyServerSideEncryptionConfigurationFormGroup() {
		return new FormGroup<CreateVoiceProfileDomainPostBodyServerSideEncryptionConfigurationFormProperties>({
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePhoneNumberPostBody {

		/** The product type. */
		ProductType?: PhoneNumberProductType | null;

		/** The outbound calling name associated with the phone number. */
		CallingName?: string | null;
	}
	export interface UpdatePhoneNumberPostBodyFormProperties {

		/** The product type. */
		ProductType: FormControl<PhoneNumberProductType | null | undefined>,

		/** The outbound calling name associated with the phone number. */
		CallingName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberPostBodyFormGroup() {
		return new FormGroup<UpdatePhoneNumberPostBodyFormProperties>({
			ProductType: new FormControl<PhoneNumberProductType | null | undefined>(undefined),
			CallingName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^$|^[a-zA-Z0-9 ]{2,15}$')]),
		});

	}

	export interface UpdateProxySessionPostBody {

		/**
		 * The proxy session capabilities.
		 * Required
		 */
		Capabilities: Array<Capability>;

		/**
		 * The number of minutes allowed for the proxy session.
		 * Minimum: 1
		 */
		ExpiryMinutes?: number | null;
	}
	export interface UpdateProxySessionPostBodyFormProperties {

		/**
		 * The number of minutes allowed for the proxy session.
		 * Minimum: 1
		 */
		ExpiryMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProxySessionPostBodyFormGroup() {
		return new FormGroup<UpdateProxySessionPostBodyFormProperties>({
			ExpiryMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface UpdateSipMediaApplicationPutBody {

		/**
		 * The new name for the specified SIP media application.
		 * Min length: 1
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The new set of endpoints for the specified SIP media application.
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		Endpoints?: Array<SipMediaApplicationEndpoint>;
	}
	export interface UpdateSipMediaApplicationPutBodyFormProperties {

		/**
		 * The new name for the specified SIP media application.
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSipMediaApplicationPutBodyFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9 _.-]+')]),
		});

	}

	export interface UpdateSipRulePutBody {

		/**
		 * The new name for the specified SIP rule.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: string;

		/** The new value that indicates whether the rule is disabled. */
		Disabled?: boolean | null;

		/**
		 * The new list of target applications.
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		TargetApplications?: Array<SipRuleTargetApplication>;
	}
	export interface UpdateSipRulePutBodyFormProperties {

		/**
		 * The new name for the specified SIP rule.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/** The new value that indicates whether the rule is disabled. */
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSipRulePutBodyFormGroup() {
		return new FormGroup<UpdateSipRulePutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9 _.-]+')]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateVoiceConnectorPutBody {

		/**
		 * The name of the Voice Connector.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: string;

		/**
		 * When enabled, requires encryption for the Voice Connector.
		 * Required
		 */
		RequireEncryption: boolean;
	}
	export interface UpdateVoiceConnectorPutBodyFormProperties {

		/**
		 * The name of the Voice Connector.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * When enabled, requires encryption for the Voice Connector.
		 * Required
		 */
		RequireEncryption: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateVoiceConnectorPutBodyFormGroup() {
		return new FormGroup<UpdateVoiceConnectorPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9 _.-]+')]),
			RequireEncryption: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutVoiceConnectorEmergencyCallingConfigurationPutBody {

		/**
		 * The emergency calling configuration details associated with an Amazon Chime SDK Voice Connector.
		 * Required
		 */
		EmergencyCallingConfiguration: PutVoiceConnectorEmergencyCallingConfigurationPutBodyEmergencyCallingConfiguration;
	}
	export interface PutVoiceConnectorEmergencyCallingConfigurationPutBodyFormProperties {
	}
	export function CreatePutVoiceConnectorEmergencyCallingConfigurationPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorEmergencyCallingConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutVoiceConnectorEmergencyCallingConfigurationPutBodyEmergencyCallingConfiguration {
		DNIS?: Array<DNISEmergencyCallingConfiguration>;
	}
	export interface PutVoiceConnectorEmergencyCallingConfigurationPutBodyEmergencyCallingConfigurationFormProperties {
	}
	export function CreatePutVoiceConnectorEmergencyCallingConfigurationPutBodyEmergencyCallingConfigurationFormGroup() {
		return new FormGroup<PutVoiceConnectorEmergencyCallingConfigurationPutBodyEmergencyCallingConfigurationFormProperties>({
		});

	}

	export interface UpdateVoiceConnectorGroupPutBody {

		/**
		 * The name of the Voice Connector group.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: string;

		/**
		 * The <code>VoiceConnectorItems</code> to associate with the Voice Connector group.
		 * Required
		 */
		VoiceConnectorItems: Array<VoiceConnectorItem>;
	}
	export interface UpdateVoiceConnectorGroupPutBodyFormProperties {

		/**
		 * The name of the Voice Connector group.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVoiceConnectorGroupPutBodyFormGroup() {
		return new FormGroup<UpdateVoiceConnectorGroupPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9 _.-]+')]),
		});

	}

	export interface PutVoiceConnectorOriginationPutBody {

		/**
		 * <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime SDK Voice Connector.</p> <note> <p>The parameters listed below are not required, but you must use at least one.</p> </note>
		 * Required
		 */
		Origination: PutVoiceConnectorOriginationPutBodyOrigination;
	}
	export interface PutVoiceConnectorOriginationPutBodyFormProperties {
	}
	export function CreatePutVoiceConnectorOriginationPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorOriginationPutBodyFormProperties>({
		});

	}

	export interface PutVoiceConnectorOriginationPutBodyOrigination {
		Routes?: Array<OriginationRoute>;
		Disabled?: boolean | null;
	}
	export interface PutVoiceConnectorOriginationPutBodyOriginationFormProperties {
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorOriginationPutBodyOriginationFormGroup() {
		return new FormGroup<PutVoiceConnectorOriginationPutBodyOriginationFormProperties>({
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutVoiceConnectorProxyPutBody {

		/**
		 * The default number of minutes allowed for proxy session.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DefaultSessionExpiryMinutes: number;

		/**
		 * The countries for proxy phone numbers to be selected from.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		PhoneNumberPoolCountries: Array<string>;

		/** The phone number to route calls to after a proxy session expires. */
		FallBackPhoneNumber?: string | null;

		/** When true, stops proxy sessions from being created on the specified Amazon Chime SDK Voice Connector. */
		Disabled?: boolean | null;
	}
	export interface PutVoiceConnectorProxyPutBodyFormProperties {

		/**
		 * The default number of minutes allowed for proxy session.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DefaultSessionExpiryMinutes: FormControl<number | null | undefined>,

		/** The phone number to route calls to after a proxy session expires. */
		FallBackPhoneNumber: FormControl<string | null | undefined>,

		/** When true, stops proxy sessions from being created on the specified Amazon Chime SDK Voice Connector. */
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorProxyPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorProxyPutBodyFormProperties>({
			DefaultSessionExpiryMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			FallBackPhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+?[1-9]\d{1,14}$')]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutVoiceConnectorStreamingConfigurationPutBody {

		/**
		 * The streaming configuration associated with an Amazon Chime SDK Voice Connector. Specifies whether media streaming is enabled for sending to Amazon Kinesis, and shows the retention period for the Amazon Kinesis data, in hours.
		 * Required
		 */
		StreamingConfiguration: PutVoiceConnectorStreamingConfigurationPutBodyStreamingConfiguration;
	}
	export interface PutVoiceConnectorStreamingConfigurationPutBodyFormProperties {
	}
	export function CreatePutVoiceConnectorStreamingConfigurationPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorStreamingConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutVoiceConnectorStreamingConfigurationPutBodyStreamingConfiguration {
		DataRetentionInHours?: number | null;
		Disabled?: boolean | null;
		StreamingNotificationTargets?: Array<StreamingNotificationTarget>;
		MediaInsightsConfiguration?: MediaInsightsConfiguration;
	}
	export interface PutVoiceConnectorStreamingConfigurationPutBodyStreamingConfigurationFormProperties {
		DataRetentionInHours: FormControl<number | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorStreamingConfigurationPutBodyStreamingConfigurationFormGroup() {
		return new FormGroup<PutVoiceConnectorStreamingConfigurationPutBodyStreamingConfigurationFormProperties>({
			DataRetentionInHours: new FormControl<number | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutVoiceConnectorTerminationPutBody {

		/**
		 * Termination settings enable SIP hosts to make outbound calls using an Amazon Chime SDK Voice Connector.
		 * Required
		 */
		Termination: PutVoiceConnectorTerminationPutBodyTermination;
	}
	export interface PutVoiceConnectorTerminationPutBodyFormProperties {
	}
	export function CreatePutVoiceConnectorTerminationPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationPutBodyFormProperties>({
		});

	}

	export interface PutVoiceConnectorTerminationPutBodyTermination {
		CpsLimit?: number | null;
		DefaultPhoneNumber?: string;
		CallingRegions?: Array<string>;
		CidrAllowedList?: Array<string>;
		Disabled?: boolean | null;
	}
	export interface PutVoiceConnectorTerminationPutBodyTerminationFormProperties {
		CpsLimit: FormControl<number | null | undefined>,
		DefaultPhoneNumber: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorTerminationPutBodyTerminationFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationPutBodyTerminationFormProperties>({
			CpsLimit: new FormControl<number | null | undefined>(undefined),
			DefaultPhoneNumber: new FormControl<string | null | undefined>(undefined),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DeleteVoiceConnectorTerminationCredentialsOperation { delete = 'delete' }

	export interface DeleteVoiceConnectorTerminationCredentialsPostBody {

		/**
		 * The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.
		 * Required
		 */
		Usernames: Array<string>;
	}
	export interface DeleteVoiceConnectorTerminationCredentialsPostBodyFormProperties {
	}
	export function CreateDeleteVoiceConnectorTerminationCredentialsPostBodyFormGroup() {
		return new FormGroup<DeleteVoiceConnectorTerminationCredentialsPostBodyFormProperties>({
		});

	}

	export interface UpdateVoiceProfilePutBody {

		/**
		 * The ID of the speaker search task.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		SpeakerSearchTaskId: string;
	}
	export interface UpdateVoiceProfilePutBodyFormProperties {

		/**
		 * The ID of the speaker search task.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		SpeakerSearchTaskId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVoiceProfilePutBodyFormGroup() {
		return new FormGroup<UpdateVoiceProfilePutBodyFormProperties>({
			SpeakerSearchTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateVoiceProfileDomainPutBody {

		/**
		 * The name of the voice profile domain.
		 * Min length: 1
		 * Max length: 256
		 */
		Name?: string | null;

		/**
		 * The description of the voice profile domain.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description?: string | null;
	}
	export interface UpdateVoiceProfileDomainPutBodyFormProperties {

		/**
		 * The name of the voice profile domain.
		 * Min length: 1
		 * Max length: 256
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the voice profile domain.
		 * Min length: 0
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVoiceProfileDomainPutBodyFormGroup() {
		return new FormGroup<UpdateVoiceProfileDomainPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9 _.-]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
		});

	}

	export enum DisassociatePhoneNumbersFromVoiceConnectorOperation { 'disassociate-phone-numbers' = 'disassociate-phone-numbers' }

	export interface DisassociatePhoneNumbersFromVoiceConnectorPostBody {

		/**
		 * List of phone numbers, in E.164 format.
		 * Required
		 */
		E164PhoneNumbers: Array<string>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorPostBodyFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorPostBodyFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorPostBodyFormProperties>({
		});

	}

	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupPostBody {

		/**
		 * The list of phone numbers, in E.164 format.
		 * Required
		 */
		E164PhoneNumbers: Array<string>;
	}
	export interface DisassociatePhoneNumbersFromVoiceConnectorGroupPostBodyFormProperties {
	}
	export function CreateDisassociatePhoneNumbersFromVoiceConnectorGroupPostBodyFormGroup() {
		return new FormGroup<DisassociatePhoneNumbersFromVoiceConnectorGroupPostBodyFormProperties>({
		});

	}

	export interface UpdateGlobalSettingsPutBody {

		/** The Amazon Chime SDK Voice Connector settings. Includes any Amazon S3 buckets designated for storing call detail records. */
		VoiceConnector?: UpdateGlobalSettingsPutBodyVoiceConnector;
	}
	export interface UpdateGlobalSettingsPutBodyFormProperties {
	}
	export function CreateUpdateGlobalSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateGlobalSettingsPutBodyFormProperties>({
		});

	}

	export interface UpdateGlobalSettingsPutBodyVoiceConnector {
		CdrBucket?: string;
	}
	export interface UpdateGlobalSettingsPutBodyVoiceConnectorFormProperties {
		CdrBucket: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalSettingsPutBodyVoiceConnectorFormGroup() {
		return new FormGroup<UpdateGlobalSettingsPutBodyVoiceConnectorFormProperties>({
			CdrBucket: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePhoneNumberSettingsPutBody {

		/**
		 * The default outbound calling name for the account.
		 * Required
		 */
		CallingName: string;
	}
	export interface UpdatePhoneNumberSettingsPutBodyFormProperties {

		/**
		 * The default outbound calling name for the account.
		 * Required
		 */
		CallingName: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePhoneNumberSettingsPutBodyFormGroup() {
		return new FormGroup<UpdatePhoneNumberSettingsPutBodyFormProperties>({
			CallingName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^$|^[a-zA-Z0-9 ]{2,15}$')]),
		});

	}

	export interface PutSipMediaApplicationAlexaSkillConfigurationPutBody {

		/** The Alexa Skill configuration of a SIP media application. */
		SipMediaApplicationAlexaSkillConfiguration?: PutSipMediaApplicationAlexaSkillConfigurationPutBodySipMediaApplicationAlexaSkillConfiguration;
	}
	export interface PutSipMediaApplicationAlexaSkillConfigurationPutBodyFormProperties {
	}
	export function CreatePutSipMediaApplicationAlexaSkillConfigurationPutBodyFormGroup() {
		return new FormGroup<PutSipMediaApplicationAlexaSkillConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutSipMediaApplicationAlexaSkillConfigurationPutBodySipMediaApplicationAlexaSkillConfiguration {
		AlexaSkillStatus?: AlexaSkillStatus;
		AlexaSkillIds?: Array<string>;
	}
	export interface PutSipMediaApplicationAlexaSkillConfigurationPutBodySipMediaApplicationAlexaSkillConfigurationFormProperties {
		AlexaSkillStatus: FormControl<AlexaSkillStatus | null | undefined>,
	}
	export function CreatePutSipMediaApplicationAlexaSkillConfigurationPutBodySipMediaApplicationAlexaSkillConfigurationFormGroup() {
		return new FormGroup<PutSipMediaApplicationAlexaSkillConfigurationPutBodySipMediaApplicationAlexaSkillConfigurationFormProperties>({
			AlexaSkillStatus: new FormControl<AlexaSkillStatus | null | undefined>(undefined),
		});

	}

	export interface PutSipMediaApplicationLoggingConfigurationPutBody {

		/** The logging configuration of a SIP media application. */
		SipMediaApplicationLoggingConfiguration?: PutSipMediaApplicationLoggingConfigurationPutBodySipMediaApplicationLoggingConfiguration;
	}
	export interface PutSipMediaApplicationLoggingConfigurationPutBodyFormProperties {
	}
	export function CreatePutSipMediaApplicationLoggingConfigurationPutBodyFormGroup() {
		return new FormGroup<PutSipMediaApplicationLoggingConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutSipMediaApplicationLoggingConfigurationPutBodySipMediaApplicationLoggingConfiguration {
		EnableSipMediaApplicationMessageLogs?: boolean | null;
	}
	export interface PutSipMediaApplicationLoggingConfigurationPutBodySipMediaApplicationLoggingConfigurationFormProperties {
		EnableSipMediaApplicationMessageLogs: FormControl<boolean | null | undefined>,
	}
	export function CreatePutSipMediaApplicationLoggingConfigurationPutBodySipMediaApplicationLoggingConfigurationFormGroup() {
		return new FormGroup<PutSipMediaApplicationLoggingConfigurationPutBodySipMediaApplicationLoggingConfigurationFormProperties>({
			EnableSipMediaApplicationMessageLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutVoiceConnectorLoggingConfigurationPutBody {

		/**
		 * The logging configuration associated with an Amazon Chime SDK Voice Connector. Specifies whether SIP message logs can be sent to Amazon CloudWatch Logs.
		 * Required
		 */
		LoggingConfiguration: PutVoiceConnectorLoggingConfigurationPutBodyLoggingConfiguration;
	}
	export interface PutVoiceConnectorLoggingConfigurationPutBodyFormProperties {
	}
	export function CreatePutVoiceConnectorLoggingConfigurationPutBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorLoggingConfigurationPutBodyFormProperties>({
		});

	}

	export interface PutVoiceConnectorLoggingConfigurationPutBodyLoggingConfiguration {
		EnableSIPLogs?: boolean | null;
		EnableMediaMetricLogs?: boolean | null;
	}
	export interface PutVoiceConnectorLoggingConfigurationPutBodyLoggingConfigurationFormProperties {
		EnableSIPLogs: FormControl<boolean | null | undefined>,
		EnableMediaMetricLogs: FormControl<boolean | null | undefined>,
	}
	export function CreatePutVoiceConnectorLoggingConfigurationPutBodyLoggingConfigurationFormGroup() {
		return new FormGroup<PutVoiceConnectorLoggingConfigurationPutBodyLoggingConfigurationFormProperties>({
			EnableSIPLogs: new FormControl<boolean | null | undefined>(undefined),
			EnableMediaMetricLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PutVoiceConnectorTerminationCredentialsOperation { put = 'put' }

	export interface PutVoiceConnectorTerminationCredentialsPostBody {

		/** The termination credentials being updated. */
		Credentials?: Array<Credential>;
	}
	export interface PutVoiceConnectorTerminationCredentialsPostBodyFormProperties {
	}
	export function CreatePutVoiceConnectorTerminationCredentialsPostBodyFormGroup() {
		return new FormGroup<PutVoiceConnectorTerminationCredentialsPostBodyFormProperties>({
		});

	}

	export enum RestorePhoneNumberOperation { restore = 'restore' }

	export enum SearchAvailablePhoneNumbersType { 'phone-numbers' = 'phone-numbers' }

	export interface StartSpeakerSearchTaskPostBody {

		/**
		 * The transaction ID of the call being analyzed.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		TransactionId: string;

		/**
		 * The ID of the voice profile domain that will store the voice profile.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		VoiceProfileDomainId: string;

		/** The unique identifier for the client request. Use a different token for different speaker search tasks. */
		ClientRequestToken?: string | null;

		/** Specifies which call leg to stream for speaker search. */
		CallLeg?: CallLegType | null;
	}
	export interface StartSpeakerSearchTaskPostBodyFormProperties {

		/**
		 * The transaction ID of the call being analyzed.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		TransactionId: FormControl<string | null | undefined>,

		/**
		 * The ID of the voice profile domain that will store the voice profile.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		VoiceProfileDomainId: FormControl<string | null | undefined>,

		/** The unique identifier for the client request. Use a different token for different speaker search tasks. */
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Specifies which call leg to stream for speaker search. */
		CallLeg: FormControl<CallLegType | null | undefined>,
	}
	export function CreateStartSpeakerSearchTaskPostBodyFormGroup() {
		return new FormGroup<StartSpeakerSearchTaskPostBodyFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
			VoiceProfileDomainId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_a-zA-Z0-9]*$\{2,64\}$')]),
			CallLeg: new FormControl<CallLegType | null | undefined>(undefined),
		});

	}

	export interface StartVoiceToneAnalysisTaskPostBody {

		/**
		 * The transaction ID.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		TransactionId: string;

		/**
		 * The language code.
		 * Required
		 */
		LanguageCode: LanguageCode;

		/** The unique identifier for the client request. Use a different token for different voice tone analysis tasks. */
		ClientRequestToken?: string | null;
	}
	export interface StartVoiceToneAnalysisTaskPostBodyFormProperties {

		/**
		 * The transaction ID.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		TransactionId: FormControl<string | null | undefined>,

		/**
		 * The language code.
		 * Required
		 */
		LanguageCode: FormControl<LanguageCode | null | undefined>,

		/** The unique identifier for the client request. Use a different token for different voice tone analysis tasks. */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartVoiceToneAnalysisTaskPostBodyFormGroup() {
		return new FormGroup<StartVoiceToneAnalysisTaskPostBodyFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-_a-zA-Z0-9]*$\{2,64\}$')]),
		});

	}

	export enum StopSpeakerSearchTaskOperation { stop = 'stop' }

	export enum TagResourceOperation { 'tag-resource' = 'tag-resource' }

	export interface TagResourcePostBody {

		/**
		 * The ARN of the resource being tagged.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		ResourceARN: string;

		/**
		 * A list of the tags being added to the resource.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The ARN of the resource being tagged.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
		});

	}

	export enum UntagResourceOperation { 'untag-resource' = 'untag-resource' }

	export interface UntagResourcePostBody {

		/**
		 * The ARN of the resource having its tags removed.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		ResourceARN: string;

		/**
		 * The keys of the tags being removed from the resource.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The ARN of the resource having its tags removed.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('^arn[\/\:\-\_\.a-zA-Z0-9]+$')]),
		});

	}

	export interface UpdateSipMediaApplicationCallPostBody {

		/**
		 * Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.
		 * Required
		 */
		Arguments: {[id: string]: string };
	}
	export interface UpdateSipMediaApplicationCallPostBodyFormProperties {

		/**
		 * Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.
		 * Required
		 */
		Arguments: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateSipMediaApplicationCallPostBodyFormGroup() {
		return new FormGroup<UpdateSipMediaApplicationCallPostBodyFormProperties>({
			Arguments: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidateE911AddressPostBody {

		/**
		 * The AWS account ID.
		 * Required
		 */
		AwsAccountId: string;

		/**
		 * The address street number, such as <code>200</code> or <code>2121</code>.
		 * Required
		 */
		StreetNumber: string;

		/**
		 * The address street information, such as <code>8th Avenue</code>.
		 * Required
		 */
		StreetInfo: string;

		/**
		 * The address city, such as <code>Portland</code>.
		 * Required
		 */
		City: string;

		/**
		 * The address state, such as <code>ME</code>.
		 * Required
		 */
		State: string;

		/**
		 * The country in the address being validated.
		 * Required
		 */
		Country: string;

		/**
		 * The dress postal code, such <code>04352</code>.
		 * Required
		 */
		PostalCode: string;
	}
	export interface ValidateE911AddressPostBodyFormProperties {

		/**
		 * The AWS account ID.
		 * Required
		 */
		AwsAccountId: FormControl<string | null | undefined>,

		/**
		 * The address street number, such as <code>200</code> or <code>2121</code>.
		 * Required
		 */
		StreetNumber: FormControl<string | null | undefined>,

		/**
		 * The address street information, such as <code>8th Avenue</code>.
		 * Required
		 */
		StreetInfo: FormControl<string | null | undefined>,

		/**
		 * The address city, such as <code>Portland</code>.
		 * Required
		 */
		City: FormControl<string | null | undefined>,

		/**
		 * The address state, such as <code>ME</code>.
		 * Required
		 */
		State: FormControl<string | null | undefined>,

		/**
		 * The country in the address being validated.
		 * Required
		 */
		Country: FormControl<string | null | undefined>,

		/**
		 * The dress postal code, such <code>04352</code>.
		 * Required
		 */
		PostalCode: FormControl<string | null | undefined>,
	}
	export function CreateValidateE911AddressPostBodyFormGroup() {
		return new FormGroup<ValidateE911AddressPostBodyFormProperties>({
			AwsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			StreetNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			StreetInfo: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			City: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			State: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			Country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
			PostalCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.*\S.*')]),
		});

	}

}

