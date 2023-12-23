import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The AcceptDomainTransferFromAnotherAwsAccount response includes the following element. */
	export interface AcceptDomainTransferFromAnotherAwsAccountResponse {

		/** Max length: 255 */
		OperationId?: string | null;
	}

	/** The AcceptDomainTransferFromAnotherAwsAccount response includes the following element. */
	export interface AcceptDomainTransferFromAnotherAwsAccountResponseFormProperties {

		/** Max length: 255 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptDomainTransferFromAnotherAwsAccountResponseFormGroup() {
		return new FormGroup<AcceptDomainTransferFromAnotherAwsAccountResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}


	/** The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements. */
	export interface AcceptDomainTransferFromAnotherAwsAccountRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;

		/** Required */
		Password: string;
	}

	/** The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements. */
	export interface AcceptDomainTransferFromAnotherAwsAccountRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateAcceptDomainTransferFromAnotherAwsAccountRequestFormGroup() {
		return new FormGroup<AcceptDomainTransferFromAnotherAwsAccountRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidInput {
	}
	export interface InvalidInputFormProperties {
	}
	export function CreateInvalidInputFormGroup() {
		return new FormGroup<InvalidInputFormProperties>({
		});

	}

	export interface OperationLimitExceeded {
	}
	export interface OperationLimitExceededFormProperties {
	}
	export function CreateOperationLimitExceededFormGroup() {
		return new FormGroup<OperationLimitExceededFormProperties>({
		});

	}

	export interface DomainLimitExceeded {
	}
	export interface DomainLimitExceededFormProperties {
	}
	export function CreateDomainLimitExceededFormGroup() {
		return new FormGroup<DomainLimitExceededFormProperties>({
		});

	}


	/** The <code>CancelDomainTransferToAnotherAwsAccount</code> response includes the following element. */
	export interface CancelDomainTransferToAnotherAwsAccountResponse {

		/** Max length: 255 */
		OperationId?: string | null;
	}

	/** The <code>CancelDomainTransferToAnotherAwsAccount</code> response includes the following element. */
	export interface CancelDomainTransferToAnotherAwsAccountResponseFormProperties {

		/** Max length: 255 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateCancelDomainTransferToAnotherAwsAccountResponseFormGroup() {
		return new FormGroup<CancelDomainTransferToAnotherAwsAccountResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}


	/** The CancelDomainTransferToAnotherAwsAccount request includes the following element. */
	export interface CancelDomainTransferToAnotherAwsAccountRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
	}

	/** The CancelDomainTransferToAnotherAwsAccount request includes the following element. */
	export interface CancelDomainTransferToAnotherAwsAccountRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCancelDomainTransferToAnotherAwsAccountRequestFormGroup() {
		return new FormGroup<CancelDomainTransferToAnotherAwsAccountRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The CheckDomainAvailability response includes the following elements. */
	export interface CheckDomainAvailabilityResponse {

		/** Required */
		Availability: CheckDomainAvailabilityResponseAvailability;
	}

	/** The CheckDomainAvailability response includes the following elements. */
	export interface CheckDomainAvailabilityResponseFormProperties {

		/** Required */
		Availability: FormControl<CheckDomainAvailabilityResponseAvailability | null | undefined>,
	}
	export function CreateCheckDomainAvailabilityResponseFormGroup() {
		return new FormGroup<CheckDomainAvailabilityResponseFormProperties>({
			Availability: new FormControl<CheckDomainAvailabilityResponseAvailability | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckDomainAvailabilityResponseAvailability { AVAILABLE = 0, AVAILABLE_RESERVED = 1, AVAILABLE_PREORDER = 2, UNAVAILABLE = 3, UNAVAILABLE_PREMIUM = 4, UNAVAILABLE_RESTRICTED = 5, RESERVED = 6, DONT_KNOW = 7 }


	/** The CheckDomainAvailability request contains the following elements. */
	export interface CheckDomainAvailabilityRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;

		/** Max length: 3 */
		IdnLangCode?: string | null;
	}

	/** The CheckDomainAvailability request contains the following elements. */
	export interface CheckDomainAvailabilityRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Max length: 3 */
		IdnLangCode: FormControl<string | null | undefined>,
	}
	export function CreateCheckDomainAvailabilityRequestFormGroup() {
		return new FormGroup<CheckDomainAvailabilityRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			IdnLangCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3)]),
		});

	}

	export interface UnsupportedTLD {
	}
	export interface UnsupportedTLDFormProperties {
	}
	export function CreateUnsupportedTLDFormGroup() {
		return new FormGroup<UnsupportedTLDFormProperties>({
		});

	}


	/** The CheckDomainTransferability response includes the following elements. */
	export interface CheckDomainTransferabilityResponse {

		/**
		 * A complex type that contains information about whether the specified domain can be transferred to Route 53.
		 * Required
		 */
		Transferability: DomainTransferability;
	}

	/** The CheckDomainTransferability response includes the following elements. */
	export interface CheckDomainTransferabilityResponseFormProperties {
	}
	export function CreateCheckDomainTransferabilityResponseFormGroup() {
		return new FormGroup<CheckDomainTransferabilityResponseFormProperties>({
		});

	}


	/** A complex type that contains information about whether the specified domain can be transferred to Route 53. */
	export interface DomainTransferability {

		/** <p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> for <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> </dl> */
		Transferable?: DomainTransferabilityTransferable | null;
	}

	/** A complex type that contains information about whether the specified domain can be transferred to Route 53. */
	export interface DomainTransferabilityFormProperties {

		/** <p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> for <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> </dl> */
		Transferable: FormControl<DomainTransferabilityTransferable | null | undefined>,
	}
	export function CreateDomainTransferabilityFormGroup() {
		return new FormGroup<DomainTransferabilityFormProperties>({
			Transferable: new FormControl<DomainTransferabilityTransferable | null | undefined>(undefined),
		});

	}

	export enum DomainTransferabilityTransferable { TRANSFERABLE = 0, UNTRANSFERABLE = 1, DONT_KNOW = 2 }


	/** The CheckDomainTransferability request contains the following elements. */
	export interface CheckDomainTransferabilityRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;

		/** Max length: 1024 */
		AuthCode?: string | null;
	}

	/** The CheckDomainTransferability request contains the following elements. */
	export interface CheckDomainTransferabilityRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		AuthCode: FormControl<string | null | undefined>,
	}
	export function CreateCheckDomainTransferabilityRequestFormGroup() {
		return new FormGroup<CheckDomainTransferabilityRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			AuthCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface DeleteTagsForDomainResponse {
	}
	export interface DeleteTagsForDomainResponseFormProperties {
	}
	export function CreateDeleteTagsForDomainResponseFormGroup() {
		return new FormGroup<DeleteTagsForDomainResponseFormProperties>({
		});

	}


	/** The DeleteTagsForDomainRequest includes the following elements. */
	export interface DeleteTagsForDomainRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;

		/** Required */
		TagsToDelete: Array<string>;
	}

	/** The DeleteTagsForDomainRequest includes the following elements. */
	export interface DeleteTagsForDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTagsForDomainRequestFormGroup() {
		return new FormGroup<DeleteTagsForDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}

	export interface DisableDomainAutoRenewResponse {
	}
	export interface DisableDomainAutoRenewResponseFormProperties {
	}
	export function CreateDisableDomainAutoRenewResponseFormGroup() {
		return new FormGroup<DisableDomainAutoRenewResponseFormProperties>({
		});

	}

	export interface DisableDomainAutoRenewRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
	}
	export interface DisableDomainAutoRenewRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDisableDomainAutoRenewRequestFormGroup() {
		return new FormGroup<DisableDomainAutoRenewRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The DisableDomainTransferLock response includes the following element. */
	export interface DisableDomainTransferLockResponse {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: string;
	}

	/** The DisableDomainTransferLock response includes the following element. */
	export interface DisableDomainTransferLockResponseFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDisableDomainTransferLockResponseFormGroup() {
		return new FormGroup<DisableDomainTransferLockResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The DisableDomainTransferLock request includes the following element. */
	export interface DisableDomainTransferLockRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
	}

	/** The DisableDomainTransferLock request includes the following element. */
	export interface DisableDomainTransferLockRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDisableDomainTransferLockRequestFormGroup() {
		return new FormGroup<DisableDomainTransferLockRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}

	export interface DuplicateRequest {
	}
	export interface DuplicateRequestFormProperties {
	}
	export function CreateDuplicateRequestFormGroup() {
		return new FormGroup<DuplicateRequestFormProperties>({
		});

	}

	export interface TLDRulesViolation {
	}
	export interface TLDRulesViolationFormProperties {
	}
	export function CreateTLDRulesViolationFormGroup() {
		return new FormGroup<TLDRulesViolationFormProperties>({
		});

	}

	export interface EnableDomainAutoRenewResponse {
	}
	export interface EnableDomainAutoRenewResponseFormProperties {
	}
	export function CreateEnableDomainAutoRenewResponseFormGroup() {
		return new FormGroup<EnableDomainAutoRenewResponseFormProperties>({
		});

	}

	export interface EnableDomainAutoRenewRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
	}
	export interface EnableDomainAutoRenewRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateEnableDomainAutoRenewRequestFormGroup() {
		return new FormGroup<EnableDomainAutoRenewRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The EnableDomainTransferLock response includes the following elements. */
	export interface EnableDomainTransferLockResponse {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: string;
	}

	/** The EnableDomainTransferLock response includes the following elements. */
	export interface EnableDomainTransferLockResponseFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateEnableDomainTransferLockResponseFormGroup() {
		return new FormGroup<EnableDomainTransferLockResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** A request to set the transfer lock for the specified domain. */
	export interface EnableDomainTransferLockRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
	}

	/** A request to set the transfer lock for the specified domain. */
	export interface EnableDomainTransferLockRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateEnableDomainTransferLockRequestFormGroup() {
		return new FormGroup<EnableDomainTransferLockRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}

	export interface GetContactReachabilityStatusResponse {

		/** Max length: 255 */
		domainName?: string | null;
		status?: GetContactReachabilityStatusResponseStatus | null;
	}
	export interface GetContactReachabilityStatusResponseFormProperties {

		/** Max length: 255 */
		domainName: FormControl<string | null | undefined>,
		status: FormControl<GetContactReachabilityStatusResponseStatus | null | undefined>,
	}
	export function CreateGetContactReachabilityStatusResponseFormGroup() {
		return new FormGroup<GetContactReachabilityStatusResponseFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			status: new FormControl<GetContactReachabilityStatusResponseStatus | null | undefined>(undefined),
		});

	}

	export enum GetContactReachabilityStatusResponseStatus { PENDING = 0, DONE = 1, EXPIRED = 2 }

	export interface GetContactReachabilityStatusRequest {

		/** Max length: 255 */
		domainName?: string | null;
	}
	export interface GetContactReachabilityStatusRequestFormProperties {

		/** Max length: 255 */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateGetContactReachabilityStatusRequestFormGroup() {
		return new FormGroup<GetContactReachabilityStatusRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}


	/** The GetDomainDetail response includes the following elements. */
	export interface GetDomainDetailResponse {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;

		/** Required */
		Nameservers: Array<Nameserver>;
		AutoRenew?: boolean | null;

		/**
		 * ContactDetail includes the following elements.
		 * Required
		 */
		AdminContact: ContactDetail;

		/**
		 * ContactDetail includes the following elements.
		 * Required
		 */
		RegistrantContact: ContactDetail;

		/**
		 * ContactDetail includes the following elements.
		 * Required
		 */
		TechContact: ContactDetail;
		AdminPrivacy?: boolean | null;
		RegistrantPrivacy?: boolean | null;
		TechPrivacy?: boolean | null;
		RegistrarName?: string | null;
		WhoIsServer?: string | null;
		RegistrarUrl?: string | null;

		/** Max length: 254 */
		AbuseContactEmail?: string | null;

		/** Max length: 30 */
		AbuseContactPhone?: string | null;
		RegistryDomainId?: string | null;
		CreationDate?: Date | null;
		UpdatedDate?: Date | null;
		ExpirationDate?: Date | null;
		Reseller?: string | null;
		DnsSec?: string | null;
		StatusList?: Array<string>;
	}

	/** The GetDomainDetail response includes the following elements. */
	export interface GetDomainDetailResponseFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
		AutoRenew: FormControl<boolean | null | undefined>,
		AdminPrivacy: FormControl<boolean | null | undefined>,
		RegistrantPrivacy: FormControl<boolean | null | undefined>,
		TechPrivacy: FormControl<boolean | null | undefined>,
		RegistrarName: FormControl<string | null | undefined>,
		WhoIsServer: FormControl<string | null | undefined>,
		RegistrarUrl: FormControl<string | null | undefined>,

		/** Max length: 254 */
		AbuseContactEmail: FormControl<string | null | undefined>,

		/** Max length: 30 */
		AbuseContactPhone: FormControl<string | null | undefined>,
		RegistryDomainId: FormControl<string | null | undefined>,
		CreationDate: FormControl<Date | null | undefined>,
		UpdatedDate: FormControl<Date | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
		Reseller: FormControl<string | null | undefined>,
		DnsSec: FormControl<string | null | undefined>,
	}
	export function CreateGetDomainDetailResponseFormGroup() {
		return new FormGroup<GetDomainDetailResponseFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			AutoRenew: new FormControl<boolean | null | undefined>(undefined),
			AdminPrivacy: new FormControl<boolean | null | undefined>(undefined),
			RegistrantPrivacy: new FormControl<boolean | null | undefined>(undefined),
			TechPrivacy: new FormControl<boolean | null | undefined>(undefined),
			RegistrarName: new FormControl<string | null | undefined>(undefined),
			WhoIsServer: new FormControl<string | null | undefined>(undefined),
			RegistrarUrl: new FormControl<string | null | undefined>(undefined),
			AbuseContactEmail: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(254)]),
			AbuseContactPhone: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			RegistryDomainId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			UpdatedDate: new FormControl<Date | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
			Reseller: new FormControl<string | null | undefined>(undefined),
			DnsSec: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Nameserver includes the following elements. */
	export interface Nameserver {

		/**
		 * Required
		 * Max length: 255
		 * Pattern: [a-zA-Z0-9_\-.]*
		 */
		Name: string;
		GlueIps?: Array<string>;
	}

	/** Nameserver includes the following elements. */
	export interface NameserverFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Pattern: [a-zA-Z0-9_\-.]*
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateNameserverFormGroup() {
		return new FormGroup<NameserverFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** ContactDetail includes the following elements. */
	export interface ContactDetail {

		/** Max length: 255 */
		FirstName?: string | null;

		/** Max length: 255 */
		LastName?: string | null;
		ContactType?: ContactDetailContactType | null;

		/** Max length: 255 */
		OrganizationName?: string | null;

		/** Max length: 255 */
		AddressLine1?: string | null;

		/** Max length: 255 */
		AddressLine2?: string | null;

		/** Max length: 255 */
		City?: string | null;

		/** Max length: 255 */
		State?: string | null;
		CountryCode?: ContactDetailCountryCode | null;

		/** Max length: 255 */
		ZipCode?: string | null;

		/** Max length: 30 */
		PhoneNumber?: string | null;

		/** Max length: 254 */
		Email?: string | null;

		/** Max length: 30 */
		Fax?: string | null;
		ExtraParams?: Array<ExtraParam>;
	}

	/** ContactDetail includes the following elements. */
	export interface ContactDetailFormProperties {

		/** Max length: 255 */
		FirstName: FormControl<string | null | undefined>,

		/** Max length: 255 */
		LastName: FormControl<string | null | undefined>,
		ContactType: FormControl<ContactDetailContactType | null | undefined>,

		/** Max length: 255 */
		OrganizationName: FormControl<string | null | undefined>,

		/** Max length: 255 */
		AddressLine1: FormControl<string | null | undefined>,

		/** Max length: 255 */
		AddressLine2: FormControl<string | null | undefined>,

		/** Max length: 255 */
		City: FormControl<string | null | undefined>,

		/** Max length: 255 */
		State: FormControl<string | null | undefined>,
		CountryCode: FormControl<ContactDetailCountryCode | null | undefined>,

		/** Max length: 255 */
		ZipCode: FormControl<string | null | undefined>,

		/** Max length: 30 */
		PhoneNumber: FormControl<string | null | undefined>,

		/** Max length: 254 */
		Email: FormControl<string | null | undefined>,

		/** Max length: 30 */
		Fax: FormControl<string | null | undefined>,
	}
	export function CreateContactDetailFormGroup() {
		return new FormGroup<ContactDetailFormProperties>({
			FirstName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			LastName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			ContactType: new FormControl<ContactDetailContactType | null | undefined>(undefined),
			OrganizationName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			AddressLine1: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			AddressLine2: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			City: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			State: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			CountryCode: new FormControl<ContactDetailCountryCode | null | undefined>(undefined),
			ZipCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			PhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(254)]),
			Fax: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
		});

	}

	export enum ContactDetailContactType { PERSON = 0, COMPANY = 1, ASSOCIATION = 2, PUBLIC_BODY = 3, RESELLER = 4 }

	export enum ContactDetailCountryCode { AD = 0, AE = 1, AF = 2, AG = 3, AI = 4, AL = 5, AM = 6, AN = 7, AO = 8, AQ = 9, AR = 10, AS = 11, AT = 12, AU = 13, AW = 14, AZ = 15, BA = 16, BB = 17, BD = 18, BE = 19, BF = 20, BG = 21, BH = 22, BI = 23, BJ = 24, BL = 25, BM = 26, BN = 27, BO = 28, BR = 29, BS = 30, BT = 31, BW = 32, BY = 33, BZ = 34, CA = 35, CC = 36, CD = 37, CF = 38, CG = 39, CH = 40, CI = 41, CK = 42, CL = 43, CM = 44, CN = 45, CO = 46, CR = 47, CU = 48, CV = 49, CX = 50, CY = 51, CZ = 52, DE = 53, DJ = 54, DK = 55, DM = 56, DO = 57, DZ = 58, EC = 59, EE = 60, EG = 61, ER = 62, ES = 63, ET = 64, FI = 65, FJ = 66, FK = 67, FM = 68, FO = 69, FR = 70, GA = 71, GB = 72, GD = 73, GE = 74, GH = 75, GI = 76, GL = 77, GM = 78, GN = 79, GQ = 80, GR = 81, GT = 82, GU = 83, GW = 84, GY = 85, HK = 86, HN = 87, HR = 88, HT = 89, HU = 90, ID = 91, IE = 92, IL = 93, IM = 94, IN = 95, IQ = 96, IR = 97, IS = 98, IT = 99, JM = 100, JO = 101, JP = 102, KE = 103, KG = 104, KH = 105, KI = 106, KM = 107, KN = 108, KP = 109, KR = 110, KW = 111, KY = 112, KZ = 113, LA = 114, LB = 115, LC = 116, LI = 117, LK = 118, LR = 119, LS = 120, LT = 121, LU = 122, LV = 123, LY = 124, MA = 125, MC = 126, MD = 127, ME = 128, MF = 129, MG = 130, MH = 131, MK = 132, ML = 133, MM = 134, MN = 135, MO = 136, MP = 137, MR = 138, MS = 139, MT = 140, MU = 141, MV = 142, MW = 143, MX = 144, MY = 145, MZ = 146, NA = 147, NC = 148, NE = 149, NG = 150, NI = 151, NL = 152, NO = 153, NP = 154, NR = 155, NU = 156, NZ = 157, OM = 158, PA = 159, PE = 160, PF = 161, PG = 162, PH = 163, PK = 164, PL = 165, PM = 166, PN = 167, PR = 168, PT = 169, PW = 170, PY = 171, QA = 172, RO = 173, RS = 174, RU = 175, RW = 176, SA = 177, SB = 178, SC = 179, SD = 180, SE = 181, SG = 182, SH = 183, SI = 184, SK = 185, SL = 186, SM = 187, SN = 188, SO = 189, SR = 190, ST = 191, SV = 192, SY = 193, SZ = 194, TC = 195, TD = 196, TG = 197, TH = 198, TJ = 199, TK = 200, TL = 201, TM = 202, TN = 203, TO = 204, TR = 205, TT = 206, TV = 207, TW = 208, TZ = 209, UA = 210, UG = 211, US = 212, UY = 213, UZ = 214, VA = 215, VC = 216, VE = 217, VG = 218, VI = 219, VN = 220, VU = 221, WF = 222, WS = 223, YE = 224, YT = 225, ZA = 226, ZM = 227, ZW = 228 }


	/** ExtraParam includes the following elements. */
	export interface ExtraParam {

		/** Required */
		Name: ExtraParamName;

		/**
		 * Required
		 * Max length: 2048
		 */
		Value: string;
	}

	/** ExtraParam includes the following elements. */
	export interface ExtraParamFormProperties {

		/** Required */
		Name: FormControl<ExtraParamName | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateExtraParamFormGroup() {
		return new FormGroup<ExtraParamFormProperties>({
			Name: new FormControl<ExtraParamName | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048)]),
		});

	}

	export enum ExtraParamName { DUNS_NUMBER = 0, BRAND_NUMBER = 1, BIRTH_DEPARTMENT = 2, BIRTH_DATE_IN_YYYY_MM_DD = 3, BIRTH_COUNTRY = 4, BIRTH_CITY = 5, DOCUMENT_NUMBER = 6, AU_ID_NUMBER = 7, AU_ID_TYPE = 8, CA_LEGAL_TYPE = 9, CA_BUSINESS_ENTITY_TYPE = 10, CA_LEGAL_REPRESENTATIVE = 11, CA_LEGAL_REPRESENTATIVE_CAPACITY = 12, ES_IDENTIFICATION = 13, ES_IDENTIFICATION_TYPE = 14, ES_LEGAL_FORM = 15, FI_BUSINESS_NUMBER = 16, FI_ID_NUMBER = 17, FI_NATIONALITY = 18, FI_ORGANIZATION_TYPE = 19, IT_NATIONALITY = 20, IT_PIN = 21, IT_REGISTRANT_ENTITY_TYPE = 22, RU_PASSPORT_DATA = 23, SE_ID_NUMBER = 24, SG_ID_NUMBER = 25, VAT_NUMBER = 26, UK_CONTACT_TYPE = 27, UK_COMPANY_NUMBER = 28 }


	/** The GetDomainDetail request includes the following element. */
	export interface GetDomainDetailRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
	}

	/** The GetDomainDetail request includes the following element. */
	export interface GetDomainDetailRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateGetDomainDetailRequestFormGroup() {
		return new FormGroup<GetDomainDetailRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}

	export interface GetDomainSuggestionsResponse {
		SuggestionsList?: Array<DomainSuggestion>;
	}
	export interface GetDomainSuggestionsResponseFormProperties {
	}
	export function CreateGetDomainSuggestionsResponseFormGroup() {
		return new FormGroup<GetDomainSuggestionsResponseFormProperties>({
		});

	}


	/** Information about one suggested domain name. */
	export interface DomainSuggestion {

		/** Max length: 255 */
		DomainName?: string | null;
		Availability?: string | null;
	}

	/** Information about one suggested domain name. */
	export interface DomainSuggestionFormProperties {

		/** Max length: 255 */
		DomainName: FormControl<string | null | undefined>,
		Availability: FormControl<string | null | undefined>,
	}
	export function CreateDomainSuggestionFormGroup() {
		return new FormGroup<DomainSuggestionFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			Availability: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomainSuggestionsRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;

		/** Required */
		SuggestionCount: number;

		/** Required */
		OnlyAvailable: boolean;
	}
	export interface GetDomainSuggestionsRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		SuggestionCount: FormControl<number | null | undefined>,

		/** Required */
		OnlyAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateGetDomainSuggestionsRequestFormGroup() {
		return new FormGroup<GetDomainSuggestionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			SuggestionCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OnlyAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The GetOperationDetail response includes the following elements. */
	export interface GetOperationDetailResponse {

		/** Max length: 255 */
		OperationId?: string | null;
		Status?: GetOperationDetailResponseStatus | null;
		Message?: string | null;

		/** Max length: 255 */
		DomainName?: string | null;
		Type?: GetOperationDetailResponseType | null;
		SubmittedDate?: Date | null;
	}

	/** The GetOperationDetail response includes the following elements. */
	export interface GetOperationDetailResponseFormProperties {

		/** Max length: 255 */
		OperationId: FormControl<string | null | undefined>,
		Status: FormControl<GetOperationDetailResponseStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,

		/** Max length: 255 */
		DomainName: FormControl<string | null | undefined>,
		Type: FormControl<GetOperationDetailResponseType | null | undefined>,
		SubmittedDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetOperationDetailResponseFormGroup() {
		return new FormGroup<GetOperationDetailResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			Status: new FormControl<GetOperationDetailResponseStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			Type: new FormControl<GetOperationDetailResponseType | null | undefined>(undefined),
			SubmittedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GetOperationDetailResponseStatus { SUBMITTED = 0, IN_PROGRESS = 1, ERROR = 2, SUCCESSFUL = 3, FAILED = 4 }

	export enum GetOperationDetailResponseType { REGISTER_DOMAIN = 0, DELETE_DOMAIN = 1, TRANSFER_IN_DOMAIN = 2, UPDATE_DOMAIN_CONTACT = 3, UPDATE_NAMESERVER = 4, CHANGE_PRIVACY_PROTECTION = 5, DOMAIN_LOCK = 6, ENABLE_AUTORENEW = 7, DISABLE_AUTORENEW = 8, ADD_DNSSEC = 9, REMOVE_DNSSEC = 10, EXPIRE_DOMAIN = 11, TRANSFER_OUT_DOMAIN = 12, CHANGE_DOMAIN_OWNER = 13, RENEW_DOMAIN = 14, PUSH_DOMAIN = 15, INTERNAL_TRANSFER_OUT_DOMAIN = 16, INTERNAL_TRANSFER_IN_DOMAIN = 17 }


	/** The <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> request includes the following element. */
	export interface GetOperationDetailRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: string;
	}

	/** The <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> request includes the following element. */
	export interface GetOperationDetailRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateGetOperationDetailRequestFormGroup() {
		return new FormGroup<GetOperationDetailRequestFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The ListDomains response includes the following elements. */
	export interface ListDomainsResponse {

		/** Required */
		Domains: Array<DomainSummary>;

		/** Max length: 4096 */
		NextPageMarker?: string | null;
	}

	/** The ListDomains response includes the following elements. */
	export interface ListDomainsResponseFormProperties {

		/** Max length: 4096 */
		NextPageMarker: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResponseFormGroup() {
		return new FormGroup<ListDomainsResponseFormProperties>({
			NextPageMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}


	/** Summary information about one domain. */
	export interface DomainSummary {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
		AutoRenew?: boolean | null;
		TransferLock?: boolean | null;
		Expiry?: Date | null;
	}

	/** Summary information about one domain. */
	export interface DomainSummaryFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
		AutoRenew: FormControl<boolean | null | undefined>,
		TransferLock: FormControl<boolean | null | undefined>,
		Expiry: FormControl<Date | null | undefined>,
	}
	export function CreateDomainSummaryFormGroup() {
		return new FormGroup<DomainSummaryFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			AutoRenew: new FormControl<boolean | null | undefined>(undefined),
			TransferLock: new FormControl<boolean | null | undefined>(undefined),
			Expiry: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The ListDomains request includes the following elements. */
	export interface ListDomainsRequest {

		/** Max length: 4096 */
		Marker?: string | null;

		/** Maximum: 100 */
		MaxItems?: number | null;
	}

	/** The ListDomains request includes the following elements. */
	export interface ListDomainsRequestFormProperties {

		/** Max length: 4096 */
		Marker: FormControl<string | null | undefined>,

		/** Maximum: 100 */
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListDomainsRequestFormGroup() {
		return new FormGroup<ListDomainsRequestFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
		});

	}


	/** The ListOperations response includes the following elements. */
	export interface ListOperationsResponse {

		/** Required */
		Operations: Array<OperationSummary>;

		/** Max length: 4096 */
		NextPageMarker?: string | null;
	}

	/** The ListOperations response includes the following elements. */
	export interface ListOperationsResponseFormProperties {

		/** Max length: 4096 */
		NextPageMarker: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			NextPageMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}


	/** OperationSummary includes the following elements. */
	export interface OperationSummary {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: string;

		/** Required */
		Status: GetOperationDetailResponseStatus;

		/** Required */
		Type: GetOperationDetailResponseType;

		/** Required */
		SubmittedDate: Date;
	}

	/** OperationSummary includes the following elements. */
	export interface OperationSummaryFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<GetOperationDetailResponseStatus | null | undefined>,

		/** Required */
		Type: FormControl<GetOperationDetailResponseType | null | undefined>,

		/** Required */
		SubmittedDate: FormControl<Date | null | undefined>,
	}
	export function CreateOperationSummaryFormGroup() {
		return new FormGroup<OperationSummaryFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			Status: new FormControl<GetOperationDetailResponseStatus | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<GetOperationDetailResponseType | null | undefined>(undefined, [Validators.required]),
			SubmittedDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The ListOperations request includes the following elements. */
	export interface ListOperationsRequest {
		SubmittedSince?: Date | null;

		/** Max length: 4096 */
		Marker?: string | null;

		/** Maximum: 100 */
		MaxItems?: number | null;
	}

	/** The ListOperations request includes the following elements. */
	export interface ListOperationsRequestFormProperties {
		SubmittedSince: FormControl<Date | null | undefined>,

		/** Max length: 4096 */
		Marker: FormControl<string | null | undefined>,

		/** Maximum: 100 */
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListOperationsRequestFormGroup() {
		return new FormGroup<ListOperationsRequestFormProperties>({
			SubmittedSince: new FormControl<Date | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
		});

	}


	/** The ListTagsForDomain response includes the following elements. */
	export interface ListTagsForDomainResponse {

		/** Required */
		TagList: Array<Tag>;
	}

	/** The ListTagsForDomain response includes the following elements. */
	export interface ListTagsForDomainResponseFormProperties {
	}
	export function CreateListTagsForDomainResponseFormGroup() {
		return new FormGroup<ListTagsForDomainResponseFormProperties>({
		});

	}


	/** Each tag includes the following elements. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** Each tag includes the following elements. */
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


	/** The ListTagsForDomainRequest includes the following elements. */
	export interface ListTagsForDomainRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
	}

	/** The ListTagsForDomainRequest includes the following elements. */
	export interface ListTagsForDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForDomainRequestFormGroup() {
		return new FormGroup<ListTagsForDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The RegisterDomain response includes the following element. */
	export interface RegisterDomainResponse {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: string;
	}

	/** The RegisterDomain response includes the following element. */
	export interface RegisterDomainResponseFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDomainResponseFormGroup() {
		return new FormGroup<RegisterDomainResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The RegisterDomain request includes the following elements. */
	export interface RegisterDomainRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;

		/** Max length: 3 */
		IdnLangCode?: string | null;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 10
		 */
		DurationInYears: number;
		AutoRenew?: boolean | null;

		/**
		 * ContactDetail includes the following elements.
		 * Required
		 */
		AdminContact: ContactDetail;

		/**
		 * ContactDetail includes the following elements.
		 * Required
		 */
		RegistrantContact: ContactDetail;

		/**
		 * ContactDetail includes the following elements.
		 * Required
		 */
		TechContact: ContactDetail;
		PrivacyProtectAdminContact?: boolean | null;
		PrivacyProtectRegistrantContact?: boolean | null;
		PrivacyProtectTechContact?: boolean | null;
	}

	/** The RegisterDomain request includes the following elements. */
	export interface RegisterDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Max length: 3 */
		IdnLangCode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 10
		 */
		DurationInYears: FormControl<number | null | undefined>,
		AutoRenew: FormControl<boolean | null | undefined>,
		PrivacyProtectAdminContact: FormControl<boolean | null | undefined>,
		PrivacyProtectRegistrantContact: FormControl<boolean | null | undefined>,
		PrivacyProtectTechContact: FormControl<boolean | null | undefined>,
	}
	export function CreateRegisterDomainRequestFormGroup() {
		return new FormGroup<RegisterDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			IdnLangCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3)]),
			DurationInYears: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(10)]),
			AutoRenew: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectAdminContact: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectRegistrantContact: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectTechContact: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The RejectDomainTransferFromAnotherAwsAccount response includes the following element. */
	export interface RejectDomainTransferFromAnotherAwsAccountResponse {

		/** Max length: 255 */
		OperationId?: string | null;
	}

	/** The RejectDomainTransferFromAnotherAwsAccount response includes the following element. */
	export interface RejectDomainTransferFromAnotherAwsAccountResponseFormProperties {

		/** Max length: 255 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateRejectDomainTransferFromAnotherAwsAccountResponseFormGroup() {
		return new FormGroup<RejectDomainTransferFromAnotherAwsAccountResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}


	/** The RejectDomainTransferFromAnotherAwsAccount request includes the following element. */
	export interface RejectDomainTransferFromAnotherAwsAccountRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
	}

	/** The RejectDomainTransferFromAnotherAwsAccount request includes the following element. */
	export interface RejectDomainTransferFromAnotherAwsAccountRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateRejectDomainTransferFromAnotherAwsAccountRequestFormGroup() {
		return new FormGroup<RejectDomainTransferFromAnotherAwsAccountRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}

	export interface RenewDomainResponse {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: string;
	}
	export interface RenewDomainResponseFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateRenewDomainResponseFormGroup() {
		return new FormGroup<RenewDomainResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year. */
	export interface RenewDomainRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		DurationInYears?: number | null;

		/** Required */
		CurrentExpiryYear: number;
	}

	/** A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year. */
	export interface RenewDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		DurationInYears: FormControl<number | null | undefined>,

		/** Required */
		CurrentExpiryYear: FormControl<number | null | undefined>,
	}
	export function CreateRenewDomainRequestFormGroup() {
		return new FormGroup<RenewDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			DurationInYears: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			CurrentExpiryYear: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResendContactReachabilityEmailResponse {

		/** Max length: 255 */
		domainName?: string | null;

		/** Max length: 254 */
		emailAddress?: string | null;
		isAlreadyVerified?: boolean | null;
	}
	export interface ResendContactReachabilityEmailResponseFormProperties {

		/** Max length: 255 */
		domainName: FormControl<string | null | undefined>,

		/** Max length: 254 */
		emailAddress: FormControl<string | null | undefined>,
		isAlreadyVerified: FormControl<boolean | null | undefined>,
	}
	export function CreateResendContactReachabilityEmailResponseFormGroup() {
		return new FormGroup<ResendContactReachabilityEmailResponseFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(254)]),
			isAlreadyVerified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ResendContactReachabilityEmailRequest {

		/** Max length: 255 */
		domainName?: string | null;
	}
	export interface ResendContactReachabilityEmailRequestFormProperties {

		/** Max length: 255 */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateResendContactReachabilityEmailRequestFormGroup() {
		return new FormGroup<ResendContactReachabilityEmailRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}


	/** The RetrieveDomainAuthCode response includes the following element. */
	export interface RetrieveDomainAuthCodeResponse {

		/**
		 * Required
		 * Max length: 1024
		 */
		AuthCode: string;
	}

	/** The RetrieveDomainAuthCode response includes the following element. */
	export interface RetrieveDomainAuthCodeResponseFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		AuthCode: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveDomainAuthCodeResponseFormGroup() {
		return new FormGroup<RetrieveDomainAuthCodeResponseFormProperties>({
			AuthCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024)]),
		});

	}


	/** A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar. */
	export interface RetrieveDomainAuthCodeRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
	}

	/** A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar. */
	export interface RetrieveDomainAuthCodeRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveDomainAuthCodeRequestFormGroup() {
		return new FormGroup<RetrieveDomainAuthCodeRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The TransferDomain response includes the following element. */
	export interface TransferDomainResponse {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: string;
	}

	/** The TransferDomain response includes the following element. */
	export interface TransferDomainResponseFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateTransferDomainResponseFormGroup() {
		return new FormGroup<TransferDomainResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The TransferDomain request includes the following elements. */
	export interface TransferDomainRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;

		/** Max length: 3 */
		IdnLangCode?: string | null;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 10
		 */
		DurationInYears: number;
		Nameservers?: Array<Nameserver>;

		/** Max length: 1024 */
		AuthCode?: string | null;
		AutoRenew?: boolean | null;

		/**
		 * ContactDetail includes the following elements.
		 * Required
		 */
		AdminContact: ContactDetail;

		/**
		 * ContactDetail includes the following elements.
		 * Required
		 */
		RegistrantContact: ContactDetail;

		/**
		 * ContactDetail includes the following elements.
		 * Required
		 */
		TechContact: ContactDetail;
		PrivacyProtectAdminContact?: boolean | null;
		PrivacyProtectRegistrantContact?: boolean | null;
		PrivacyProtectTechContact?: boolean | null;
	}

	/** The TransferDomain request includes the following elements. */
	export interface TransferDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,

		/** Max length: 3 */
		IdnLangCode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 10
		 */
		DurationInYears: FormControl<number | null | undefined>,

		/** Max length: 1024 */
		AuthCode: FormControl<string | null | undefined>,
		AutoRenew: FormControl<boolean | null | undefined>,
		PrivacyProtectAdminContact: FormControl<boolean | null | undefined>,
		PrivacyProtectRegistrantContact: FormControl<boolean | null | undefined>,
		PrivacyProtectTechContact: FormControl<boolean | null | undefined>,
	}
	export function CreateTransferDomainRequestFormGroup() {
		return new FormGroup<TransferDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			IdnLangCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3)]),
			DurationInYears: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(10)]),
			AuthCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			AutoRenew: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectAdminContact: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectRegistrantContact: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectTechContact: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements. */
	export interface TransferDomainToAnotherAwsAccountResponse {

		/** Max length: 255 */
		OperationId?: string | null;
		Password?: string | null;
	}

	/** The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements. */
	export interface TransferDomainToAnotherAwsAccountResponseFormProperties {

		/** Max length: 255 */
		OperationId: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateTransferDomainToAnotherAwsAccountResponseFormGroup() {
		return new FormGroup<TransferDomainToAnotherAwsAccountResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The TransferDomainToAnotherAwsAccount request includes the following elements. */
	export interface TransferDomainToAnotherAwsAccountRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;

		/**
		 * Required
		 * Pattern: ^(\d{12})$
		 */
		AccountId: string;
	}

	/** The TransferDomainToAnotherAwsAccount request includes the following elements. */
	export interface TransferDomainToAnotherAwsAccountRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Pattern: ^(\d{12})$
		 */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateTransferDomainToAnotherAwsAccountRequestFormGroup() {
		return new FormGroup<TransferDomainToAnotherAwsAccountRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The UpdateDomainContact response includes the following element. */
	export interface UpdateDomainContactResponse {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: string;
	}

	/** The UpdateDomainContact response includes the following element. */
	export interface UpdateDomainContactResponseFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainContactResponseFormGroup() {
		return new FormGroup<UpdateDomainContactResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The UpdateDomainContact request includes the following elements. */
	export interface UpdateDomainContactRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;

		/** ContactDetail includes the following elements. */
		AdminContact?: ContactDetail;

		/** ContactDetail includes the following elements. */
		RegistrantContact?: ContactDetail;

		/** ContactDetail includes the following elements. */
		TechContact?: ContactDetail;
	}

	/** The UpdateDomainContact request includes the following elements. */
	export interface UpdateDomainContactRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainContactRequestFormGroup() {
		return new FormGroup<UpdateDomainContactRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The UpdateDomainContactPrivacy response includes the following element. */
	export interface UpdateDomainContactPrivacyResponse {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: string;
	}

	/** The UpdateDomainContactPrivacy response includes the following element. */
	export interface UpdateDomainContactPrivacyResponseFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainContactPrivacyResponseFormGroup() {
		return new FormGroup<UpdateDomainContactPrivacyResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The UpdateDomainContactPrivacy request includes the following elements. */
	export interface UpdateDomainContactPrivacyRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
		AdminPrivacy?: boolean | null;
		RegistrantPrivacy?: boolean | null;
		TechPrivacy?: boolean | null;
	}

	/** The UpdateDomainContactPrivacy request includes the following elements. */
	export interface UpdateDomainContactPrivacyRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
		AdminPrivacy: FormControl<boolean | null | undefined>,
		RegistrantPrivacy: FormControl<boolean | null | undefined>,
		TechPrivacy: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainContactPrivacyRequestFormGroup() {
		return new FormGroup<UpdateDomainContactPrivacyRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			AdminPrivacy: new FormControl<boolean | null | undefined>(undefined),
			RegistrantPrivacy: new FormControl<boolean | null | undefined>(undefined),
			TechPrivacy: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The UpdateDomainNameservers response includes the following element. */
	export interface UpdateDomainNameserversResponse {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: string;
	}

	/** The UpdateDomainNameservers response includes the following element. */
	export interface UpdateDomainNameserversResponseFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainNameserversResponseFormGroup() {
		return new FormGroup<UpdateDomainNameserversResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** <p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p> */
	export interface UpdateDomainNameserversRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
		FIAuthKey?: string | null;

		/** Required */
		Nameservers: Array<Nameserver>;
	}

	/** <p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p> */
	export interface UpdateDomainNameserversRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
		FIAuthKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainNameserversRequestFormGroup() {
		return new FormGroup<UpdateDomainNameserversRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			FIAuthKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTagsForDomainResponse {
	}
	export interface UpdateTagsForDomainResponseFormProperties {
	}
	export function CreateUpdateTagsForDomainResponseFormGroup() {
		return new FormGroup<UpdateTagsForDomainResponseFormProperties>({
		});

	}


	/** The UpdateTagsForDomainRequest includes the following elements. */
	export interface UpdateTagsForDomainRequest {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: string;
		TagsToUpdate?: Array<Tag>;
	}

	/** The UpdateTagsForDomainRequest includes the following elements. */
	export interface UpdateTagsForDomainRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTagsForDomainRequestFormGroup() {
		return new FormGroup<UpdateTagsForDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}


	/** The ViewBilling response includes the following elements. */
	export interface ViewBillingResponse {

		/** Max length: 4096 */
		NextPageMarker?: string | null;
		BillingRecords?: Array<BillingRecord>;
	}

	/** The ViewBilling response includes the following elements. */
	export interface ViewBillingResponseFormProperties {

		/** Max length: 4096 */
		NextPageMarker: FormControl<string | null | undefined>,
	}
	export function CreateViewBillingResponseFormGroup() {
		return new FormGroup<ViewBillingResponseFormProperties>({
			NextPageMarker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}


	/** Information for one billing record. */
	export interface BillingRecord {

		/** Max length: 255 */
		DomainName?: string | null;
		Operation?: GetOperationDetailResponseType | null;
		InvoiceId?: string | null;
		BillDate?: Date | null;
		Price?: number | null;
	}

	/** Information for one billing record. */
	export interface BillingRecordFormProperties {

		/** Max length: 255 */
		DomainName: FormControl<string | null | undefined>,
		Operation: FormControl<GetOperationDetailResponseType | null | undefined>,
		InvoiceId: FormControl<string | null | undefined>,
		BillDate: FormControl<Date | null | undefined>,
		Price: FormControl<number | null | undefined>,
	}
	export function CreateBillingRecordFormGroup() {
		return new FormGroup<BillingRecordFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			Operation: new FormControl<GetOperationDetailResponseType | null | undefined>(undefined),
			InvoiceId: new FormControl<string | null | undefined>(undefined),
			BillDate: new FormControl<Date | null | undefined>(undefined),
			Price: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The ViewBilling request includes the following elements. */
	export interface ViewBillingRequest {
		Start?: Date | null;
		End?: Date | null;

		/** Max length: 4096 */
		Marker?: string | null;

		/** Maximum: 100 */
		MaxItems?: number | null;
	}

	/** The ViewBilling request includes the following elements. */
	export interface ViewBillingRequestFormProperties {
		Start: FormControl<Date | null | undefined>,
		End: FormControl<Date | null | undefined>,

		/** Max length: 4096 */
		Marker: FormControl<string | null | undefined>,

		/** Maximum: 100 */
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateViewBillingRequestFormGroup() {
		return new FormGroup<ViewBillingRequestFormProperties>({
			Start: new FormControl<Date | null | undefined>(undefined),
			End: new FormControl<Date | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			MaxItems: new FormControl<number | null | undefined>(undefined, [Validators.max(100)]),
		});

	}

	export enum OperationType { REGISTER_DOMAIN = 0, DELETE_DOMAIN = 1, TRANSFER_IN_DOMAIN = 2, UPDATE_DOMAIN_CONTACT = 3, UPDATE_NAMESERVER = 4, CHANGE_PRIVACY_PROTECTION = 5, DOMAIN_LOCK = 6, ENABLE_AUTORENEW = 7, DISABLE_AUTORENEW = 8, ADD_DNSSEC = 9, REMOVE_DNSSEC = 10, EXPIRE_DOMAIN = 11, TRANSFER_OUT_DOMAIN = 12, CHANGE_DOMAIN_OWNER = 13, RENEW_DOMAIN = 14, PUSH_DOMAIN = 15, INTERNAL_TRANSFER_OUT_DOMAIN = 16, INTERNAL_TRANSFER_IN_DOMAIN = 17 }

	export enum DomainAvailability { AVAILABLE = 0, AVAILABLE_RESERVED = 1, AVAILABLE_PREORDER = 2, UNAVAILABLE = 3, UNAVAILABLE_PREMIUM = 4, UNAVAILABLE_RESTRICTED = 5, RESERVED = 6, DONT_KNOW = 7 }

	export enum ContactType { PERSON = 0, COMPANY = 1, ASSOCIATION = 2, PUBLIC_BODY = 3, RESELLER = 4 }

	export enum CountryCode { AD = 0, AE = 1, AF = 2, AG = 3, AI = 4, AL = 5, AM = 6, AN = 7, AO = 8, AQ = 9, AR = 10, AS = 11, AT = 12, AU = 13, AW = 14, AZ = 15, BA = 16, BB = 17, BD = 18, BE = 19, BF = 20, BG = 21, BH = 22, BI = 23, BJ = 24, BL = 25, BM = 26, BN = 27, BO = 28, BR = 29, BS = 30, BT = 31, BW = 32, BY = 33, BZ = 34, CA = 35, CC = 36, CD = 37, CF = 38, CG = 39, CH = 40, CI = 41, CK = 42, CL = 43, CM = 44, CN = 45, CO = 46, CR = 47, CU = 48, CV = 49, CX = 50, CY = 51, CZ = 52, DE = 53, DJ = 54, DK = 55, DM = 56, DO = 57, DZ = 58, EC = 59, EE = 60, EG = 61, ER = 62, ES = 63, ET = 64, FI = 65, FJ = 66, FK = 67, FM = 68, FO = 69, FR = 70, GA = 71, GB = 72, GD = 73, GE = 74, GH = 75, GI = 76, GL = 77, GM = 78, GN = 79, GQ = 80, GR = 81, GT = 82, GU = 83, GW = 84, GY = 85, HK = 86, HN = 87, HR = 88, HT = 89, HU = 90, ID = 91, IE = 92, IL = 93, IM = 94, IN = 95, IQ = 96, IR = 97, IS = 98, IT = 99, JM = 100, JO = 101, JP = 102, KE = 103, KG = 104, KH = 105, KI = 106, KM = 107, KN = 108, KP = 109, KR = 110, KW = 111, KY = 112, KZ = 113, LA = 114, LB = 115, LC = 116, LI = 117, LK = 118, LR = 119, LS = 120, LT = 121, LU = 122, LV = 123, LY = 124, MA = 125, MC = 126, MD = 127, ME = 128, MF = 129, MG = 130, MH = 131, MK = 132, ML = 133, MM = 134, MN = 135, MO = 136, MP = 137, MR = 138, MS = 139, MT = 140, MU = 141, MV = 142, MW = 143, MX = 144, MY = 145, MZ = 146, NA = 147, NC = 148, NE = 149, NG = 150, NI = 151, NL = 152, NO = 153, NP = 154, NR = 155, NU = 156, NZ = 157, OM = 158, PA = 159, PE = 160, PF = 161, PG = 162, PH = 163, PK = 164, PL = 165, PM = 166, PN = 167, PR = 168, PT = 169, PW = 170, PY = 171, QA = 172, RO = 173, RS = 174, RU = 175, RW = 176, SA = 177, SB = 178, SC = 179, SD = 180, SE = 181, SG = 182, SH = 183, SI = 184, SK = 185, SL = 186, SM = 187, SN = 188, SO = 189, SR = 190, ST = 191, SV = 192, SY = 193, SZ = 194, TC = 195, TD = 196, TG = 197, TH = 198, TJ = 199, TK = 200, TL = 201, TM = 202, TN = 203, TO = 204, TR = 205, TT = 206, TV = 207, TW = 208, TZ = 209, UA = 210, UG = 211, US = 212, UY = 213, UZ = 214, VA = 215, VC = 216, VE = 217, VG = 218, VI = 219, VN = 220, VU = 221, WF = 222, WS = 223, YE = 224, YT = 225, ZA = 226, ZM = 227, ZW = 228 }


	/** <p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> for <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> </dl> */
	export enum Transferable { TRANSFERABLE = 0, UNTRANSFERABLE = 1, DONT_KNOW = 2 }

	export enum ReachabilityStatus { PENDING = 0, DONE = 1, EXPIRED = 2 }

	export enum OperationStatus { SUBMITTED = 0, IN_PROGRESS = 1, ERROR = 2, SUCCESSFUL = 3, FAILED = 4 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Accepts the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount
		 * @return {AcceptDomainTransferFromAnotherAwsAccountResponse} Success
		 */
		AcceptDomainTransferFromAnotherAwsAccount(requestBody: AcceptDomainTransferFromAnotherAwsAccountRequest): Observable<AcceptDomainTransferFromAnotherAwsAccountResponse> {
			return this.http.post<AcceptDomainTransferFromAnotherAwsAccountResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels the transfer of a domain from the current AWS account to another AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other AWS account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount
		 * @return {CancelDomainTransferToAnotherAwsAccountResponse} Success
		 */
		CancelDomainTransferToAnotherAwsAccount(requestBody: CancelDomainTransferToAnotherAwsAccountRequest): Observable<CancelDomainTransferToAnotherAwsAccountResponse> {
			return this.http.post<CancelDomainTransferToAnotherAwsAccountResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.
		 * Post #X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability
		 * @return {CheckDomainAvailabilityResponse} Success
		 */
		CheckDomainAvailability(requestBody: CheckDomainAvailabilityRequest): Observable<CheckDomainAvailabilityResponse> {
			return this.http.post<CheckDomainAvailabilityResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.CheckDomainAvailability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks whether a domain name can be transferred to Amazon Route 53.
		 * Post #X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability
		 * @return {CheckDomainTransferabilityResponse} Success
		 */
		CheckDomainTransferability(requestBody: CheckDomainTransferabilityRequest): Observable<CheckDomainTransferabilityResponse> {
			return this.http.post<CheckDomainTransferabilityResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.CheckDomainTransferability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation deletes the specified tags for a domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain
		 * @return {DeleteTagsForDomainResponse} Success
		 */
		DeleteTagsForDomain(requestBody: DeleteTagsForDomainRequest): Observable<DeleteTagsForDomainResponse> {
			return this.http.post<DeleteTagsForDomainResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.DeleteTagsForDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation disables automatic renewal of domain registration for the specified domain.
		 * Post #X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew
		 * @return {DisableDomainAutoRenewResponse} Success
		 */
		DisableDomainAutoRenew(requestBody: DisableDomainAutoRenewRequest): Observable<DisableDomainAutoRenewResponse> {
			return this.http.post<DisableDomainAutoRenewResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.DisableDomainAutoRenew', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation removes the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
		 * Post #X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock
		 * @return {DisableDomainTransferLockResponse} Success
		 */
		DisableDomainTransferLock(requestBody: DisableDomainTransferLockRequest): Observable<DisableDomainTransferLockResponse> {
			return this.http.post<DisableDomainTransferLockResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.DisableDomainTransferLock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your AWS account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew
		 * @return {EnableDomainAutoRenewResponse} Success
		 */
		EnableDomainAutoRenew(requestBody: EnableDomainAutoRenewRequest): Observable<EnableDomainAutoRenewResponse> {
			return this.http.post<EnableDomainAutoRenewResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.EnableDomainAutoRenew', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation sets the transfer lock on the domain (specifically the <code>clientTransferProhibited</code> status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
		 * Post #X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock
		 * @return {EnableDomainTransferLockResponse} Success
		 */
		EnableDomainTransferLock(requestBody: EnableDomainTransferLockRequest): Observable<EnableDomainTransferLockResponse> {
			return this.http.post<EnableDomainTransferLockResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.EnableDomainTransferLock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded.</p> <p>If you want us to resend the email, use the <code>ResendContactReachabilityEmail</code> operation.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus
		 * @return {GetContactReachabilityStatusResponse} Success
		 */
		GetContactReachabilityStatus(requestBody: GetContactReachabilityStatusRequest): Observable<GetContactReachabilityStatusResponse> {
			return this.http.post<GetContactReachabilityStatusResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.GetContactReachabilityStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation returns detailed information about a specified domain that is associated with the current AWS account. Contact information for the domain is also returned as part of the output.
		 * Post #X-Amz-Target=Route53Domains_v20140515.GetDomainDetail
		 * @return {GetDomainDetailResponse} Success
		 */
		GetDomainDetail(requestBody: GetDomainDetailRequest): Observable<GetDomainDetailResponse> {
			return this.http.post<GetDomainDetailResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.GetDomainDetail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The GetDomainSuggestions operation returns a list of suggested domain names.
		 * Post #X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions
		 * @return {GetDomainSuggestionsResponse} Success
		 */
		GetDomainSuggestions(requestBody: GetDomainSuggestionsRequest): Observable<GetDomainSuggestionsResponse> {
			return this.http.post<GetDomainSuggestionsResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.GetDomainSuggestions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation returns the current status of an operation that is not completed.
		 * Post #X-Amz-Target=Route53Domains_v20140515.GetOperationDetail
		 * @return {GetOperationDetailResponse} Success
		 */
		GetOperationDetail(requestBody: GetOperationDetailRequest): Observable<GetOperationDetailResponse> {
			return this.http.post<GetOperationDetailResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.GetOperationDetail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation returns all the domain names registered with Amazon Route 53 for the current AWS account.
		 * Post #X-Amz-Target=Route53Domains_v20140515.ListDomains
		 * @param {string} MaxItems Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListDomainsResponse} Success
		 */
		ListDomains(MaxItems: string | null | undefined, Marker: string | null | undefined, requestBody: ListDomainsRequest): Observable<ListDomainsResponse> {
			return this.http.post<ListDomainsResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.ListDomains?MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account.
		 * Post #X-Amz-Target=Route53Domains_v20140515.ListOperations
		 * @param {string} MaxItems Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListOperationsResponse} Success
		 */
		ListOperations(MaxItems: string | null | undefined, Marker: string | null | undefined, requestBody: ListOperationsRequest): Observable<ListOperationsResponse> {
			return this.http.post<ListOperationsResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.ListOperations?MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation returns all of the tags that are associated with the specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain
		 * @return {ListTagsForDomainResponse} Success
		 */
		ListTagsForDomain(requestBody: ListTagsForDomainRequest): Observable<ListTagsForDomainResponse> {
			return this.http.post<ListTagsForDomainResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.ListTagsForDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables autorenew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the registrant, admin, and tech contacts.</p> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your AWS account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=Route53Domains_v20140515.RegisterDomain
		 * @return {RegisterDomainResponse} Success
		 */
		RegisterDomain(requestBody: RegisterDomainRequest): Observable<RegisterDomainResponse> {
			return this.http.post<RegisterDomainResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.RegisterDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Rejects the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount
		 * @return {RejectDomainTransferFromAnotherAwsAccountResponse} Success
		 */
		RejectDomainTransferFromAnotherAwsAccount(requestBody: RejectDomainTransferFromAnotherAwsAccountRequest): Observable<RejectDomainTransferFromAnotherAwsAccountResponse> {
			return this.http.post<RejectDomainTransferFromAnotherAwsAccountResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.RenewDomain
		 * @return {RenewDomainResponse} Success
		 */
		RenewDomain(requestBody: RenewDomainRequest): Observable<RenewDomainResponse> {
			return this.http.post<RenewDomainResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.RenewDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.
		 * Post #X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail
		 * @return {ResendContactReachabilityEmailResponse} Success
		 */
		ResendContactReachabilityEmail(requestBody: ResendContactReachabilityEmailRequest): Observable<ResendContactReachabilityEmailResponse> {
			return this.http.post<ResendContactReachabilityEmailResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.ResendContactReachabilityEmail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation returns the AuthCode for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.
		 * Post #X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode
		 * @return {RetrieveDomainAuthCodeResponse} Success
		 */
		RetrieveDomainAuthCode(requestBody: RetrieveDomainAuthCodeRequest): Observable<RetrieveDomainAuthCodeResponse> {
			return this.http.post<RetrieveDomainAuthCodeResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs).</p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one AWS account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.TransferDomain
		 * @return {TransferDomainResponse} Success
		 */
		TransferDomain(requestBody: TransferDomainRequest): Observable<TransferDomainResponse> {
			return this.http.post<TransferDomainResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.TransferDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Transfers a domain from the current AWS account to another AWS account. Note the following:</p> <ul> <li> <p>The AWS account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one AWS account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another AWS account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different AWS Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount
		 * @return {TransferDomainToAnotherAwsAccountResponse} Success
		 */
		TransferDomainToAnotherAwsAccount(requestBody: TransferDomainToAnotherAwsAccountRequest): Observable<TransferDomainToAnotherAwsAccountResponse> {
			return this.http.post<TransferDomainToAnotherAwsAccountResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact
		 * @return {UpdateDomainContactResponse} Success
		 */
		UpdateDomainContact(requestBody: UpdateDomainContactRequest): Observable<UpdateDomainContactResponse> {
			return this.http.post<UpdateDomainContactResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi.</p> <p>This operation affects only the contact information for the specified contact type (registrant, administrator, or tech). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>
		 * Post #X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy
		 * @return {UpdateDomainContactPrivacyResponse} Success
		 */
		UpdateDomainContactPrivacy(requestBody: UpdateDomainContactPrivacyRequest): Observable<UpdateDomainContactPrivacyResponse> {
			return this.http.post<UpdateDomainContactPrivacyResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContactPrivacy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers
		 * @return {UpdateDomainNameserversResponse} Success
		 */
		UpdateDomainNameservers(requestBody: UpdateDomainNameserversRequest): Observable<UpdateDomainNameserversResponse> {
			return this.http.post<UpdateDomainNameserversResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.UpdateDomainNameservers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation adds or updates tags for a specified domain.</p> <p>All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain
		 * @return {UpdateTagsForDomainResponse} Success
		 */
		UpdateTagsForDomain(requestBody: UpdateTagsForDomainRequest): Observable<UpdateTagsForDomainResponse> {
			return this.http.post<UpdateTagsForDomainResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.UpdateTagsForDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all the domain-related billing records for the current AWS account for a specified period
		 * Post #X-Amz-Target=Route53Domains_v20140515.ViewBilling
		 * @return {ViewBillingResponse} Success
		 */
		ViewBilling(requestBody: ViewBillingRequest): Observable<ViewBillingResponse> {
			return this.http.post<ViewBillingResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.ViewBilling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptDomainTransferFromAnotherAwsAccountX_Amz_Target { Route53Domains_v20140515_AcceptDomainTransferFromAnotherAwsAccount = 0 }

	export enum CancelDomainTransferToAnotherAwsAccountX_Amz_Target { Route53Domains_v20140515_CancelDomainTransferToAnotherAwsAccount = 0 }

	export enum CheckDomainAvailabilityX_Amz_Target { Route53Domains_v20140515_CheckDomainAvailability = 0 }

	export enum CheckDomainTransferabilityX_Amz_Target { Route53Domains_v20140515_CheckDomainTransferability = 0 }

	export enum DeleteTagsForDomainX_Amz_Target { Route53Domains_v20140515_DeleteTagsForDomain = 0 }

	export enum DisableDomainAutoRenewX_Amz_Target { Route53Domains_v20140515_DisableDomainAutoRenew = 0 }

	export enum DisableDomainTransferLockX_Amz_Target { Route53Domains_v20140515_DisableDomainTransferLock = 0 }

	export enum EnableDomainAutoRenewX_Amz_Target { Route53Domains_v20140515_EnableDomainAutoRenew = 0 }

	export enum EnableDomainTransferLockX_Amz_Target { Route53Domains_v20140515_EnableDomainTransferLock = 0 }

	export enum GetContactReachabilityStatusX_Amz_Target { Route53Domains_v20140515_GetContactReachabilityStatus = 0 }

	export enum GetDomainDetailX_Amz_Target { Route53Domains_v20140515_GetDomainDetail = 0 }

	export enum GetDomainSuggestionsX_Amz_Target { Route53Domains_v20140515_GetDomainSuggestions = 0 }

	export enum GetOperationDetailX_Amz_Target { Route53Domains_v20140515_GetOperationDetail = 0 }

	export enum ListDomainsX_Amz_Target { Route53Domains_v20140515_ListDomains = 0 }

	export enum ListOperationsX_Amz_Target { Route53Domains_v20140515_ListOperations = 0 }

	export enum ListTagsForDomainX_Amz_Target { Route53Domains_v20140515_ListTagsForDomain = 0 }

	export enum RegisterDomainX_Amz_Target { Route53Domains_v20140515_RegisterDomain = 0 }

	export enum RejectDomainTransferFromAnotherAwsAccountX_Amz_Target { Route53Domains_v20140515_RejectDomainTransferFromAnotherAwsAccount = 0 }

	export enum RenewDomainX_Amz_Target { Route53Domains_v20140515_RenewDomain = 0 }

	export enum ResendContactReachabilityEmailX_Amz_Target { Route53Domains_v20140515_ResendContactReachabilityEmail = 0 }

	export enum RetrieveDomainAuthCodeX_Amz_Target { Route53Domains_v20140515_RetrieveDomainAuthCode = 0 }

	export enum TransferDomainX_Amz_Target { Route53Domains_v20140515_TransferDomain = 0 }

	export enum TransferDomainToAnotherAwsAccountX_Amz_Target { Route53Domains_v20140515_TransferDomainToAnotherAwsAccount = 0 }

	export enum UpdateDomainContactX_Amz_Target { Route53Domains_v20140515_UpdateDomainContact = 0 }

	export enum UpdateDomainContactPrivacyX_Amz_Target { Route53Domains_v20140515_UpdateDomainContactPrivacy = 0 }

	export enum UpdateDomainNameserversX_Amz_Target { Route53Domains_v20140515_UpdateDomainNameservers = 0 }

	export enum UpdateTagsForDomainX_Amz_Target { Route53Domains_v20140515_UpdateTagsForDomain = 0 }

	export enum ViewBillingX_Amz_Target { Route53Domains_v20140515_ViewBilling = 0 }

}

