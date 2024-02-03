import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The AcceptDomainTransferFromAnotherAwsAccount response includes the following element. */
	export interface AcceptDomainTransferFromAnotherAwsAccountResponse {
		OperationId?: string;
	}

	/** The AcceptDomainTransferFromAnotherAwsAccount response includes the following element. */
	export interface AcceptDomainTransferFromAnotherAwsAccountResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptDomainTransferFromAnotherAwsAccountResponseFormGroup() {
		return new FormGroup<AcceptDomainTransferFromAnotherAwsAccountResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements. */
	export interface AcceptDomainTransferFromAnotherAwsAccountRequest {

		/** Required */
		DomainName: string;

		/** Required */
		Password: string;
	}

	/** The AcceptDomainTransferFromAnotherAwsAccount request includes the following elements. */
	export interface AcceptDomainTransferFromAnotherAwsAccountRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateAcceptDomainTransferFromAnotherAwsAccountRequestFormGroup() {
		return new FormGroup<AcceptDomainTransferFromAnotherAwsAccountRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UnsupportedTLD {
	}
	export interface UnsupportedTLDFormProperties {
	}
	export function CreateUnsupportedTLDFormGroup() {
		return new FormGroup<UnsupportedTLDFormProperties>({
		});

	}

	export interface AssociateDelegationSignerToDomainResponse {
		OperationId?: string;
	}
	export interface AssociateDelegationSignerToDomainResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDelegationSignerToDomainResponseFormGroup() {
		return new FormGroup<AssociateDelegationSignerToDomainResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateDelegationSignerToDomainRequest {

		/** Required */
		DomainName: string;

		/** Required */
		SigningAttributes: DnssecSigningAttributes;
	}
	export interface AssociateDelegationSignerToDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDelegationSignerToDomainRequestFormGroup() {
		return new FormGroup<AssociateDelegationSignerToDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a delegation signer (DS) record that was created in the registry by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>.  */
	export interface DnssecSigningAttributes {
		Algorithm?: number | null;
		Flags?: number | null;
		PublicKey?: string;
	}

	/** Information about a delegation signer (DS) record that was created in the registry by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>.  */
	export interface DnssecSigningAttributesFormProperties {
		Algorithm: FormControl<number | null | undefined>,
		Flags: FormControl<number | null | undefined>,
		PublicKey: FormControl<string | null | undefined>,
	}
	export function CreateDnssecSigningAttributesFormGroup() {
		return new FormGroup<DnssecSigningAttributesFormProperties>({
			Algorithm: new FormControl<number | null | undefined>(undefined),
			Flags: new FormControl<number | null | undefined>(undefined),
			PublicKey: new FormControl<string | null | undefined>(undefined),
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

	export interface DnssecLimitExceeded {
	}
	export interface DnssecLimitExceededFormProperties {
	}
	export function CreateDnssecLimitExceededFormGroup() {
		return new FormGroup<DnssecLimitExceededFormProperties>({
		});

	}


	/** The <code>CancelDomainTransferToAnotherAwsAccount</code> response includes the following element. */
	export interface CancelDomainTransferToAnotherAwsAccountResponse {
		OperationId?: string;
	}

	/** The <code>CancelDomainTransferToAnotherAwsAccount</code> response includes the following element. */
	export interface CancelDomainTransferToAnotherAwsAccountResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateCancelDomainTransferToAnotherAwsAccountResponseFormGroup() {
		return new FormGroup<CancelDomainTransferToAnotherAwsAccountResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The CancelDomainTransferToAnotherAwsAccount request includes the following element. */
	export interface CancelDomainTransferToAnotherAwsAccountRequest {

		/** Required */
		DomainName: string;
	}

	/** The CancelDomainTransferToAnotherAwsAccount request includes the following element. */
	export interface CancelDomainTransferToAnotherAwsAccountRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCancelDomainTransferToAnotherAwsAccountRequestFormGroup() {
		return new FormGroup<CancelDomainTransferToAnotherAwsAccountRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The CheckDomainAvailability response includes the following elements. */
	export interface CheckDomainAvailabilityResponse {
		Availability?: DomainAvailability;
	}

	/** The CheckDomainAvailability response includes the following elements. */
	export interface CheckDomainAvailabilityResponseFormProperties {
		Availability: FormControl<DomainAvailability | null | undefined>,
	}
	export function CreateCheckDomainAvailabilityResponseFormGroup() {
		return new FormGroup<CheckDomainAvailabilityResponseFormProperties>({
			Availability: new FormControl<DomainAvailability | null | undefined>(undefined),
		});

	}

	export enum DomainAvailability { AVAILABLE = 'AVAILABLE', AVAILABLE_RESERVED = 'AVAILABLE_RESERVED', AVAILABLE_PREORDER = 'AVAILABLE_PREORDER', UNAVAILABLE = 'UNAVAILABLE', UNAVAILABLE_PREMIUM = 'UNAVAILABLE_PREMIUM', UNAVAILABLE_RESTRICTED = 'UNAVAILABLE_RESTRICTED', RESERVED = 'RESERVED', DONT_KNOW = 'DONT_KNOW' }


	/** The CheckDomainAvailability request contains the following elements. */
	export interface CheckDomainAvailabilityRequest {

		/** Required */
		DomainName: string;
		IdnLangCode?: string;
	}

	/** The CheckDomainAvailability request contains the following elements. */
	export interface CheckDomainAvailabilityRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		IdnLangCode: FormControl<string | null | undefined>,
	}
	export function CreateCheckDomainAvailabilityRequestFormGroup() {
		return new FormGroup<CheckDomainAvailabilityRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdnLangCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The CheckDomainTransferability response includes the following elements. */
	export interface CheckDomainTransferabilityResponse {
		Transferability?: DomainTransferability;
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

		/** <p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> or <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> <dt>DOMAIN_IN_OWN_ACCOUNT</dt> <dd> <p>The domain already exists in the current Amazon Web Services account.</p> </dd> <dt>DOMAIN_IN_ANOTHER_ACCOUNT</dt> <dd> <p> the domain exists in another Amazon Web Services account.</p> </dd> <dt>PREMIUM_DOMAIN</dt> <dd> <p>Premium domain transfer is not supported.</p> </dd> </dl> */
		Transferable?: DomainTransferabilityTransferable | null;
	}

	/** A complex type that contains information about whether the specified domain can be transferred to Route 53. */
	export interface DomainTransferabilityFormProperties {

		/** <p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> or <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> <dt>DOMAIN_IN_OWN_ACCOUNT</dt> <dd> <p>The domain already exists in the current Amazon Web Services account.</p> </dd> <dt>DOMAIN_IN_ANOTHER_ACCOUNT</dt> <dd> <p> the domain exists in another Amazon Web Services account.</p> </dd> <dt>PREMIUM_DOMAIN</dt> <dd> <p>Premium domain transfer is not supported.</p> </dd> </dl> */
		Transferable: FormControl<DomainTransferabilityTransferable | null | undefined>,
	}
	export function CreateDomainTransferabilityFormGroup() {
		return new FormGroup<DomainTransferabilityFormProperties>({
			Transferable: new FormControl<DomainTransferabilityTransferable | null | undefined>(undefined),
		});

	}

	export enum DomainTransferabilityTransferable { TRANSFERABLE = 'TRANSFERABLE', UNTRANSFERABLE = 'UNTRANSFERABLE', DONT_KNOW = 'DONT_KNOW', DOMAIN_IN_OWN_ACCOUNT = 'DOMAIN_IN_OWN_ACCOUNT', DOMAIN_IN_ANOTHER_ACCOUNT = 'DOMAIN_IN_ANOTHER_ACCOUNT', PREMIUM_DOMAIN = 'PREMIUM_DOMAIN' }


	/** The CheckDomainTransferability request contains the following elements. */
	export interface CheckDomainTransferabilityRequest {

		/** Required */
		DomainName: string;
		AuthCode?: string;
	}

	/** The CheckDomainTransferability request contains the following elements. */
	export interface CheckDomainTransferabilityRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		AuthCode: FormControl<string | null | undefined>,
	}
	export function CreateCheckDomainTransferabilityRequestFormGroup() {
		return new FormGroup<CheckDomainTransferabilityRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDomainResponse {
		OperationId?: string;
	}
	export interface DeleteDomainResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDomainResponseFormGroup() {
		return new FormGroup<DeleteDomainResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDomainRequest {

		/** Required */
		DomainName: string;
	}
	export interface DeleteDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDomainRequestFormGroup() {
		return new FormGroup<DeleteDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		DomainName: string;

		/** Required */
		TagsToDelete: Array<string>;
	}

	/** The DeleteTagsForDomainRequest includes the following elements. */
	export interface DeleteTagsForDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTagsForDomainRequestFormGroup() {
		return new FormGroup<DeleteTagsForDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		DomainName: string;
	}
	export interface DisableDomainAutoRenewRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDisableDomainAutoRenewRequestFormGroup() {
		return new FormGroup<DisableDomainAutoRenewRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The DisableDomainTransferLock response includes the following element. */
	export interface DisableDomainTransferLockResponse {
		OperationId?: string;
	}

	/** The DisableDomainTransferLock response includes the following element. */
	export interface DisableDomainTransferLockResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDisableDomainTransferLockResponseFormGroup() {
		return new FormGroup<DisableDomainTransferLockResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The DisableDomainTransferLock request includes the following element. */
	export interface DisableDomainTransferLockRequest {

		/** Required */
		DomainName: string;
	}

	/** The DisableDomainTransferLock request includes the following element. */
	export interface DisableDomainTransferLockRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDisableDomainTransferLockRequestFormGroup() {
		return new FormGroup<DisableDomainTransferLockRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateDelegationSignerFromDomainResponse {
		OperationId?: string;
	}
	export interface DisassociateDelegationSignerFromDomainResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateDelegationSignerFromDomainResponseFormGroup() {
		return new FormGroup<DisassociateDelegationSignerFromDomainResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateDelegationSignerFromDomainRequest {

		/** Required */
		DomainName: string;

		/** Required */
		Id: string;
	}
	export interface DisassociateDelegationSignerFromDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateDelegationSignerFromDomainRequestFormGroup() {
		return new FormGroup<DisassociateDelegationSignerFromDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		DomainName: string;
	}
	export interface EnableDomainAutoRenewRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateEnableDomainAutoRenewRequestFormGroup() {
		return new FormGroup<EnableDomainAutoRenewRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The EnableDomainTransferLock response includes the following elements. */
	export interface EnableDomainTransferLockResponse {
		OperationId?: string;
	}

	/** The EnableDomainTransferLock response includes the following elements. */
	export interface EnableDomainTransferLockResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateEnableDomainTransferLockResponseFormGroup() {
		return new FormGroup<EnableDomainTransferLockResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to set the transfer lock for the specified domain. */
	export interface EnableDomainTransferLockRequest {

		/** Required */
		DomainName: string;
	}

	/** A request to set the transfer lock for the specified domain. */
	export interface EnableDomainTransferLockRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateEnableDomainTransferLockRequestFormGroup() {
		return new FormGroup<EnableDomainTransferLockRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContactReachabilityStatusResponse {
		domainName?: string;
		status?: ReachabilityStatus;
	}
	export interface GetContactReachabilityStatusResponseFormProperties {
		domainName: FormControl<string | null | undefined>,
		status: FormControl<ReachabilityStatus | null | undefined>,
	}
	export function CreateGetContactReachabilityStatusResponseFormGroup() {
		return new FormGroup<GetContactReachabilityStatusResponseFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ReachabilityStatus | null | undefined>(undefined),
		});

	}

	export enum ReachabilityStatus { PENDING = 'PENDING', DONE = 'DONE', EXPIRED = 'EXPIRED' }

	export interface GetContactReachabilityStatusRequest {
		domainName?: string;
	}
	export interface GetContactReachabilityStatusRequestFormProperties {
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateGetContactReachabilityStatusRequestFormGroup() {
		return new FormGroup<GetContactReachabilityStatusRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The GetDomainDetail response includes the following elements. */
	export interface GetDomainDetailResponse {
		DomainName?: string;
		Nameservers?: Array<Nameserver>;
		AutoRenew?: boolean | null;
		AdminContact?: ContactDetail;
		RegistrantContact?: ContactDetail;
		TechContact?: ContactDetail;
		AdminPrivacy?: boolean | null;
		RegistrantPrivacy?: boolean | null;
		TechPrivacy?: boolean | null;
		RegistrarName?: string;
		WhoIsServer?: string;
		RegistrarUrl?: string;
		AbuseContactEmail?: string;
		AbuseContactPhone?: string;
		RegistryDomainId?: string;
		CreationDate?: Date;
		UpdatedDate?: Date;
		ExpirationDate?: Date;
		Reseller?: string;
		DnsSec?: string;
		StatusList?: Array<string>;
		DnssecKeys?: Array<DnssecKey>;
	}

	/** The GetDomainDetail response includes the following elements. */
	export interface GetDomainDetailResponseFormProperties {
		DomainName: FormControl<string | null | undefined>,
		AutoRenew: FormControl<boolean | null | undefined>,
		AdminPrivacy: FormControl<boolean | null | undefined>,
		RegistrantPrivacy: FormControl<boolean | null | undefined>,
		TechPrivacy: FormControl<boolean | null | undefined>,
		RegistrarName: FormControl<string | null | undefined>,
		WhoIsServer: FormControl<string | null | undefined>,
		RegistrarUrl: FormControl<string | null | undefined>,
		AbuseContactEmail: FormControl<string | null | undefined>,
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
			DomainName: new FormControl<string | null | undefined>(undefined),
			AutoRenew: new FormControl<boolean | null | undefined>(undefined),
			AdminPrivacy: new FormControl<boolean | null | undefined>(undefined),
			RegistrantPrivacy: new FormControl<boolean | null | undefined>(undefined),
			TechPrivacy: new FormControl<boolean | null | undefined>(undefined),
			RegistrarName: new FormControl<string | null | undefined>(undefined),
			WhoIsServer: new FormControl<string | null | undefined>(undefined),
			RegistrarUrl: new FormControl<string | null | undefined>(undefined),
			AbuseContactEmail: new FormControl<string | null | undefined>(undefined),
			AbuseContactPhone: new FormControl<string | null | undefined>(undefined),
			RegistryDomainId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<Date | null | undefined>(undefined),
			UpdatedDate: new FormControl<Date | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
			Reseller: new FormControl<string | null | undefined>(undefined),
			DnsSec: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Name server includes the following elements. */
	export interface Nameserver {

		/** Required */
		Name: string;
		GlueIps?: Array<string>;
	}

	/** Name server includes the following elements. */
	export interface NameserverFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateNameserverFormGroup() {
		return new FormGroup<NameserverFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** ContactDetail includes the following elements. */
	export interface ContactDetail {
		FirstName?: string;
		LastName?: string;
		ContactType?: ContactType;
		OrganizationName?: string;
		AddressLine1?: string;
		AddressLine2?: string;
		City?: string;
		State?: string;
		CountryCode?: CountryCode;
		ZipCode?: string;
		PhoneNumber?: string;
		Email?: string;
		Fax?: string;
		ExtraParams?: Array<ExtraParam>;
	}

	/** ContactDetail includes the following elements. */
	export interface ContactDetailFormProperties {
		FirstName: FormControl<string | null | undefined>,
		LastName: FormControl<string | null | undefined>,
		ContactType: FormControl<ContactType | null | undefined>,
		OrganizationName: FormControl<string | null | undefined>,
		AddressLine1: FormControl<string | null | undefined>,
		AddressLine2: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		CountryCode: FormControl<CountryCode | null | undefined>,
		ZipCode: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Fax: FormControl<string | null | undefined>,
	}
	export function CreateContactDetailFormGroup() {
		return new FormGroup<ContactDetailFormProperties>({
			FirstName: new FormControl<string | null | undefined>(undefined),
			LastName: new FormControl<string | null | undefined>(undefined),
			ContactType: new FormControl<ContactType | null | undefined>(undefined),
			OrganizationName: new FormControl<string | null | undefined>(undefined),
			AddressLine1: new FormControl<string | null | undefined>(undefined),
			AddressLine2: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			CountryCode: new FormControl<CountryCode | null | undefined>(undefined),
			ZipCode: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
			Email: new FormControl<string | null | undefined>(undefined),
			Fax: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContactType { PERSON = 'PERSON', COMPANY = 'COMPANY', ASSOCIATION = 'ASSOCIATION', PUBLIC_BODY = 'PUBLIC_BODY', RESELLER = 'RESELLER' }

	export enum CountryCode { AC = 'AC', AD = 'AD', AE = 'AE', AF = 'AF', AG = 'AG', AI = 'AI', AL = 'AL', AM = 'AM', AN = 'AN', AO = 'AO', AQ = 'AQ', AR = 'AR', AS = 'AS', AT = 'AT', AU = 'AU', AW = 'AW', AX = 'AX', AZ = 'AZ', BA = 'BA', BB = 'BB', BD = 'BD', BE = 'BE', BF = 'BF', BG = 'BG', BH = 'BH', BI = 'BI', BJ = 'BJ', BL = 'BL', BM = 'BM', BN = 'BN', BO = 'BO', BQ = 'BQ', BR = 'BR', BS = 'BS', BT = 'BT', BV = 'BV', BW = 'BW', BY = 'BY', BZ = 'BZ', CA = 'CA', CC = 'CC', CD = 'CD', CF = 'CF', CG = 'CG', CH = 'CH', CI = 'CI', CK = 'CK', CL = 'CL', CM = 'CM', CN = 'CN', CO = 'CO', CR = 'CR', CU = 'CU', CV = 'CV', CW = 'CW', CX = 'CX', CY = 'CY', CZ = 'CZ', DE = 'DE', DJ = 'DJ', DK = 'DK', DM = 'DM', DO = 'DO', DZ = 'DZ', EC = 'EC', EE = 'EE', EG = 'EG', EH = 'EH', ER = 'ER', ES = 'ES', ET = 'ET', FI = 'FI', FJ = 'FJ', FK = 'FK', FM = 'FM', FO = 'FO', FR = 'FR', GA = 'GA', GB = 'GB', GD = 'GD', GE = 'GE', GF = 'GF', GG = 'GG', GH = 'GH', GI = 'GI', GL = 'GL', GM = 'GM', GN = 'GN', GP = 'GP', GQ = 'GQ', GR = 'GR', GS = 'GS', GT = 'GT', GU = 'GU', GW = 'GW', GY = 'GY', HK = 'HK', HM = 'HM', HN = 'HN', HR = 'HR', HT = 'HT', HU = 'HU', ID = 'ID', IE = 'IE', IL = 'IL', IM = 'IM', IN = 'IN', IO = 'IO', IQ = 'IQ', IR = 'IR', IS = 'IS', IT = 'IT', JE = 'JE', JM = 'JM', JO = 'JO', JP = 'JP', KE = 'KE', KG = 'KG', KH = 'KH', KI = 'KI', KM = 'KM', KN = 'KN', KP = 'KP', KR = 'KR', KW = 'KW', KY = 'KY', KZ = 'KZ', LA = 'LA', LB = 'LB', LC = 'LC', LI = 'LI', LK = 'LK', LR = 'LR', LS = 'LS', LT = 'LT', LU = 'LU', LV = 'LV', LY = 'LY', MA = 'MA', MC = 'MC', MD = 'MD', ME = 'ME', MF = 'MF', MG = 'MG', MH = 'MH', MK = 'MK', ML = 'ML', MM = 'MM', MN = 'MN', MO = 'MO', MP = 'MP', MQ = 'MQ', MR = 'MR', MS = 'MS', MT = 'MT', MU = 'MU', MV = 'MV', MW = 'MW', MX = 'MX', MY = 'MY', MZ = 'MZ', NA = 'NA', NC = 'NC', NE = 'NE', NF = 'NF', NG = 'NG', NI = 'NI', NL = 'NL', NO = 'NO', NP = 'NP', NR = 'NR', NU = 'NU', NZ = 'NZ', OM = 'OM', PA = 'PA', PE = 'PE', PF = 'PF', PG = 'PG', PH = 'PH', PK = 'PK', PL = 'PL', PM = 'PM', PN = 'PN', PR = 'PR', PS = 'PS', PT = 'PT', PW = 'PW', PY = 'PY', QA = 'QA', RE = 'RE', RO = 'RO', RS = 'RS', RU = 'RU', RW = 'RW', SA = 'SA', SB = 'SB', SC = 'SC', SD = 'SD', SE = 'SE', SG = 'SG', SH = 'SH', SI = 'SI', SJ = 'SJ', SK = 'SK', SL = 'SL', SM = 'SM', SN = 'SN', SO = 'SO', SR = 'SR', SS = 'SS', ST = 'ST', SV = 'SV', SX = 'SX', SY = 'SY', SZ = 'SZ', TC = 'TC', TD = 'TD', TF = 'TF', TG = 'TG', TH = 'TH', TJ = 'TJ', TK = 'TK', TL = 'TL', TM = 'TM', TN = 'TN', TO = 'TO', TP = 'TP', TR = 'TR', TT = 'TT', TV = 'TV', TW = 'TW', TZ = 'TZ', UA = 'UA', UG = 'UG', US = 'US', UY = 'UY', UZ = 'UZ', VA = 'VA', VC = 'VC', VE = 'VE', VG = 'VG', VI = 'VI', VN = 'VN', VU = 'VU', WF = 'WF', WS = 'WS', YE = 'YE', YT = 'YT', ZA = 'ZA', ZM = 'ZM', ZW = 'ZW' }


	/** ExtraParam includes the following elements. */
	export interface ExtraParam {

		/** Required */
		Name: ExtraParamName;

		/** Required */
		Value: string;
	}

	/** ExtraParam includes the following elements. */
	export interface ExtraParamFormProperties {

		/** Required */
		Name: FormControl<ExtraParamName | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateExtraParamFormGroup() {
		return new FormGroup<ExtraParamFormProperties>({
			Name: new FormControl<ExtraParamName | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExtraParamName { DUNS_NUMBER = 'DUNS_NUMBER', BRAND_NUMBER = 'BRAND_NUMBER', BIRTH_DEPARTMENT = 'BIRTH_DEPARTMENT', BIRTH_DATE_IN_YYYY_MM_DD = 'BIRTH_DATE_IN_YYYY_MM_DD', BIRTH_COUNTRY = 'BIRTH_COUNTRY', BIRTH_CITY = 'BIRTH_CITY', DOCUMENT_NUMBER = 'DOCUMENT_NUMBER', AU_ID_NUMBER = 'AU_ID_NUMBER', AU_ID_TYPE = 'AU_ID_TYPE', CA_LEGAL_TYPE = 'CA_LEGAL_TYPE', CA_BUSINESS_ENTITY_TYPE = 'CA_BUSINESS_ENTITY_TYPE', CA_LEGAL_REPRESENTATIVE = 'CA_LEGAL_REPRESENTATIVE', CA_LEGAL_REPRESENTATIVE_CAPACITY = 'CA_LEGAL_REPRESENTATIVE_CAPACITY', ES_IDENTIFICATION = 'ES_IDENTIFICATION', ES_IDENTIFICATION_TYPE = 'ES_IDENTIFICATION_TYPE', ES_LEGAL_FORM = 'ES_LEGAL_FORM', FI_BUSINESS_NUMBER = 'FI_BUSINESS_NUMBER', FI_ID_NUMBER = 'FI_ID_NUMBER', FI_NATIONALITY = 'FI_NATIONALITY', FI_ORGANIZATION_TYPE = 'FI_ORGANIZATION_TYPE', IT_NATIONALITY = 'IT_NATIONALITY', IT_PIN = 'IT_PIN', IT_REGISTRANT_ENTITY_TYPE = 'IT_REGISTRANT_ENTITY_TYPE', RU_PASSPORT_DATA = 'RU_PASSPORT_DATA', SE_ID_NUMBER = 'SE_ID_NUMBER', SG_ID_NUMBER = 'SG_ID_NUMBER', VAT_NUMBER = 'VAT_NUMBER', UK_CONTACT_TYPE = 'UK_CONTACT_TYPE', UK_COMPANY_NUMBER = 'UK_COMPANY_NUMBER', EU_COUNTRY_OF_CITIZENSHIP = 'EU_COUNTRY_OF_CITIZENSHIP', AU_PRIORITY_TOKEN = 'AU_PRIORITY_TOKEN' }


	/** <p>Information about the DNSSEC key.</p> <p>You get this from your DNS provider and then give it to Route 53 (by using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>) to pass it to the registry to establish the chain of trust.</p> */
	export interface DnssecKey {
		Algorithm?: number | null;
		Flags?: number | null;
		PublicKey?: string;
		DigestType?: number | null;
		Digest?: string;
		KeyTag?: number | null;
		Id?: string;
	}

	/** <p>Information about the DNSSEC key.</p> <p>You get this from your DNS provider and then give it to Route 53 (by using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AssociateDelegationSignerToDomain.html">AssociateDelegationSignerToDomain</a>) to pass it to the registry to establish the chain of trust.</p> */
	export interface DnssecKeyFormProperties {
		Algorithm: FormControl<number | null | undefined>,
		Flags: FormControl<number | null | undefined>,
		PublicKey: FormControl<string | null | undefined>,
		DigestType: FormControl<number | null | undefined>,
		Digest: FormControl<string | null | undefined>,
		KeyTag: FormControl<number | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDnssecKeyFormGroup() {
		return new FormGroup<DnssecKeyFormProperties>({
			Algorithm: new FormControl<number | null | undefined>(undefined),
			Flags: new FormControl<number | null | undefined>(undefined),
			PublicKey: new FormControl<string | null | undefined>(undefined),
			DigestType: new FormControl<number | null | undefined>(undefined),
			Digest: new FormControl<string | null | undefined>(undefined),
			KeyTag: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The GetDomainDetail request includes the following element. */
	export interface GetDomainDetailRequest {

		/** Required */
		DomainName: string;
	}

	/** The GetDomainDetail request includes the following element. */
	export interface GetDomainDetailRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateGetDomainDetailRequestFormGroup() {
		return new FormGroup<GetDomainDetailRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		DomainName?: string;
		Availability?: string;
	}

	/** Information about one suggested domain name. */
	export interface DomainSuggestionFormProperties {
		DomainName: FormControl<string | null | undefined>,
		Availability: FormControl<string | null | undefined>,
	}
	export function CreateDomainSuggestionFormGroup() {
		return new FormGroup<DomainSuggestionFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			Availability: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomainSuggestionsRequest {

		/** Required */
		DomainName: string;

		/** Required */
		SuggestionCount: number;

		/** Required */
		OnlyAvailable: boolean;
	}
	export interface GetDomainSuggestionsRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		SuggestionCount: FormControl<number | null | undefined>,

		/** Required */
		OnlyAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateGetDomainSuggestionsRequestFormGroup() {
		return new FormGroup<GetDomainSuggestionsRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SuggestionCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OnlyAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The GetOperationDetail response includes the following elements. */
	export interface GetOperationDetailResponse {
		OperationId?: string;
		Status?: OperationStatus;
		Message?: string;
		DomainName?: string;
		Type?: OperationType;
		SubmittedDate?: Date;
		LastUpdatedDate?: Date;
		StatusFlag?: StatusFlag;
	}

	/** The GetOperationDetail response includes the following elements. */
	export interface GetOperationDetailResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
		Status: FormControl<OperationStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		Type: FormControl<OperationType | null | undefined>,
		SubmittedDate: FormControl<Date | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,
		StatusFlag: FormControl<StatusFlag | null | undefined>,
	}
	export function CreateGetOperationDetailResponseFormGroup() {
		return new FormGroup<GetOperationDetailResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OperationStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<OperationType | null | undefined>(undefined),
			SubmittedDate: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			StatusFlag: new FormControl<StatusFlag | null | undefined>(undefined),
		});

	}

	export enum OperationStatus { SUBMITTED = 'SUBMITTED', IN_PROGRESS = 'IN_PROGRESS', ERROR = 'ERROR', SUCCESSFUL = 'SUCCESSFUL', FAILED = 'FAILED' }

	export enum OperationType { REGISTER_DOMAIN = 'REGISTER_DOMAIN', DELETE_DOMAIN = 'DELETE_DOMAIN', TRANSFER_IN_DOMAIN = 'TRANSFER_IN_DOMAIN', UPDATE_DOMAIN_CONTACT = 'UPDATE_DOMAIN_CONTACT', UPDATE_NAMESERVER = 'UPDATE_NAMESERVER', CHANGE_PRIVACY_PROTECTION = 'CHANGE_PRIVACY_PROTECTION', DOMAIN_LOCK = 'DOMAIN_LOCK', ENABLE_AUTORENEW = 'ENABLE_AUTORENEW', DISABLE_AUTORENEW = 'DISABLE_AUTORENEW', ADD_DNSSEC = 'ADD_DNSSEC', REMOVE_DNSSEC = 'REMOVE_DNSSEC', EXPIRE_DOMAIN = 'EXPIRE_DOMAIN', TRANSFER_OUT_DOMAIN = 'TRANSFER_OUT_DOMAIN', CHANGE_DOMAIN_OWNER = 'CHANGE_DOMAIN_OWNER', RENEW_DOMAIN = 'RENEW_DOMAIN', PUSH_DOMAIN = 'PUSH_DOMAIN', INTERNAL_TRANSFER_OUT_DOMAIN = 'INTERNAL_TRANSFER_OUT_DOMAIN', INTERNAL_TRANSFER_IN_DOMAIN = 'INTERNAL_TRANSFER_IN_DOMAIN' }

	export enum StatusFlag { PENDING_ACCEPTANCE = 'PENDING_ACCEPTANCE', PENDING_CUSTOMER_ACTION = 'PENDING_CUSTOMER_ACTION', PENDING_AUTHORIZATION = 'PENDING_AUTHORIZATION', PENDING_PAYMENT_VERIFICATION = 'PENDING_PAYMENT_VERIFICATION', PENDING_SUPPORT_CASE = 'PENDING_SUPPORT_CASE' }


	/** The <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> request includes the following element. */
	export interface GetOperationDetailRequest {

		/** Required */
		OperationId: string;
	}

	/** The <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> request includes the following element. */
	export interface GetOperationDetailRequestFormProperties {

		/** Required */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateGetOperationDetailRequestFormGroup() {
		return new FormGroup<GetOperationDetailRequestFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The ListDomains response includes the following elements. */
	export interface ListDomainsResponse {
		Domains?: Array<DomainSummary>;
		NextPageMarker?: string;
	}

	/** The ListDomains response includes the following elements. */
	export interface ListDomainsResponseFormProperties {
		NextPageMarker: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResponseFormGroup() {
		return new FormGroup<ListDomainsResponseFormProperties>({
			NextPageMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about one domain. */
	export interface DomainSummary {
		DomainName?: string;
		AutoRenew?: boolean | null;
		TransferLock?: boolean | null;
		Expiry?: Date;
	}

	/** Summary information about one domain. */
	export interface DomainSummaryFormProperties {
		DomainName: FormControl<string | null | undefined>,
		AutoRenew: FormControl<boolean | null | undefined>,
		TransferLock: FormControl<boolean | null | undefined>,
		Expiry: FormControl<Date | null | undefined>,
	}
	export function CreateDomainSummaryFormGroup() {
		return new FormGroup<DomainSummaryFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			AutoRenew: new FormControl<boolean | null | undefined>(undefined),
			TransferLock: new FormControl<boolean | null | undefined>(undefined),
			Expiry: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The ListDomains request includes the following elements. */
	export interface ListDomainsRequest {
		FilterConditions?: Array<FilterCondition>;
		SortCondition?: SortCondition;
		Marker?: string;
		MaxItems?: number | null;
	}

	/** The ListDomains request includes the following elements. */
	export interface ListDomainsRequestFormProperties {
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListDomainsRequestFormGroup() {
		return new FormGroup<ListDomainsRequestFormProperties>({
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information for the filtering of a list of domains returned by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains__ListDomains.html">ListDomains</a>. */
	export interface FilterCondition {

		/** Required */
		Name: ListDomainsAttributeName;

		/** Required */
		Operator: Operator;

		/** Required */
		Values: Array<string>;
	}

	/** Information for the filtering of a list of domains returned by <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains__ListDomains.html">ListDomains</a>. */
	export interface FilterConditionFormProperties {

		/** Required */
		Name: FormControl<ListDomainsAttributeName | null | undefined>,

		/** Required */
		Operator: FormControl<Operator | null | undefined>,
	}
	export function CreateFilterConditionFormGroup() {
		return new FormGroup<FilterConditionFormProperties>({
			Name: new FormControl<ListDomainsAttributeName | null | undefined>(undefined, [Validators.required]),
			Operator: new FormControl<Operator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ListDomainsAttributeName { DomainName = 'DomainName', Expiry = 'Expiry' }

	export enum Operator { LE = 'LE', GE = 'GE', BEGINS_WITH = 'BEGINS_WITH' }


	/** Information for sorting a list of domains. */
	export interface SortCondition {

		/** Required */
		Name: ListDomainsAttributeName;

		/** Required */
		SortOrder: SortOrder;
	}

	/** Information for sorting a list of domains. */
	export interface SortConditionFormProperties {

		/** Required */
		Name: FormControl<ListDomainsAttributeName | null | undefined>,

		/** Required */
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateSortConditionFormGroup() {
		return new FormGroup<SortConditionFormProperties>({
			Name: new FormControl<ListDomainsAttributeName | null | undefined>(undefined, [Validators.required]),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SortOrder { ASC = 'ASC', DESC = 'DESC' }


	/** The ListOperations response includes the following elements. */
	export interface ListOperationsResponse {
		Operations?: Array<OperationSummary>;
		NextPageMarker?: string;
	}

	/** The ListOperations response includes the following elements. */
	export interface ListOperationsResponseFormProperties {
		NextPageMarker: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			NextPageMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OperationSummary includes the following elements. */
	export interface OperationSummary {
		OperationId?: string;
		Status?: OperationStatus;
		Type?: OperationType;
		SubmittedDate?: Date;
		DomainName?: string;
		Message?: string;
		StatusFlag?: StatusFlag;
		LastUpdatedDate?: Date;
	}

	/** OperationSummary includes the following elements. */
	export interface OperationSummaryFormProperties {
		OperationId: FormControl<string | null | undefined>,
		Status: FormControl<OperationStatus | null | undefined>,
		Type: FormControl<OperationType | null | undefined>,
		SubmittedDate: FormControl<Date | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		StatusFlag: FormControl<StatusFlag | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateOperationSummaryFormGroup() {
		return new FormGroup<OperationSummaryFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OperationStatus | null | undefined>(undefined),
			Type: new FormControl<OperationType | null | undefined>(undefined),
			SubmittedDate: new FormControl<Date | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			StatusFlag: new FormControl<StatusFlag | null | undefined>(undefined),
			LastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The ListOperations request includes the following elements. */
	export interface ListOperationsRequest {
		SubmittedSince?: Date;
		Marker?: string;
		MaxItems?: number | null;
		Status?: Array<OperationStatus>;
		Type?: Array<OperationType>;
		SortBy?: ListOperationsSortAttributeName;
		SortOrder?: SortOrder;
	}

	/** The ListOperations request includes the following elements. */
	export interface ListOperationsRequestFormProperties {
		SubmittedSince: FormControl<Date | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
		SortBy: FormControl<ListOperationsSortAttributeName | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListOperationsRequestFormGroup() {
		return new FormGroup<ListOperationsRequestFormProperties>({
			SubmittedSince: new FormControl<Date | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
			SortBy: new FormControl<ListOperationsSortAttributeName | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum ListOperationsSortAttributeName { SubmittedDate = 'SubmittedDate' }

	export interface ListPricesResponse {
		Prices?: Array<DomainPrice>;
		NextPageMarker?: string;
	}
	export interface ListPricesResponseFormProperties {
		NextPageMarker: FormControl<string | null | undefined>,
	}
	export function CreateListPricesResponseFormGroup() {
		return new FormGroup<ListPricesResponseFormProperties>({
			NextPageMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the domain price associated with a TLD. */
	export interface DomainPrice {
		Name?: string;
		RegistrationPrice?: PriceWithCurrency;
		TransferPrice?: PriceWithCurrency;
		RenewalPrice?: PriceWithCurrency;
		ChangeOwnershipPrice?: PriceWithCurrency;
		RestorationPrice?: PriceWithCurrency;
	}

	/** Information about the domain price associated with a TLD. */
	export interface DomainPriceFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDomainPriceFormGroup() {
		return new FormGroup<DomainPriceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Currency-specific price information. */
	export interface PriceWithCurrency {

		/** Required */
		Price: number;

		/** Required */
		Currency: string;
	}

	/** Currency-specific price information. */
	export interface PriceWithCurrencyFormProperties {

		/** Required */
		Price: FormControl<number | null | undefined>,

		/** Required */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreatePriceWithCurrencyFormGroup() {
		return new FormGroup<PriceWithCurrencyFormProperties>({
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPricesRequest {
		Tld?: string;
		Marker?: string;
		MaxItems?: number | null;
	}
	export interface ListPricesRequestFormProperties {
		Tld: FormControl<string | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateListPricesRequestFormGroup() {
		return new FormGroup<ListPricesRequestFormProperties>({
			Tld: new FormControl<string | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The ListTagsForDomain response includes the following elements. */
	export interface ListTagsForDomainResponse {
		TagList?: Array<Tag>;
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
		Key?: string;
		Value?: string;
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

		/** Required */
		DomainName: string;
	}

	/** The ListTagsForDomainRequest includes the following elements. */
	export interface ListTagsForDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForDomainRequestFormGroup() {
		return new FormGroup<ListTagsForDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PushDomainRequest {

		/** Required */
		DomainName: string;

		/** Required */
		Target: string;
	}
	export interface PushDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		Target: FormControl<string | null | undefined>,
	}
	export function CreatePushDomainRequestFormGroup() {
		return new FormGroup<PushDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The RegisterDomain response includes the following element. */
	export interface RegisterDomainResponse {
		OperationId?: string;
	}

	/** The RegisterDomain response includes the following element. */
	export interface RegisterDomainResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDomainResponseFormGroup() {
		return new FormGroup<RegisterDomainResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The RegisterDomain request includes the following elements. */
	export interface RegisterDomainRequest {

		/** Required */
		DomainName: string;
		IdnLangCode?: string;

		/** Required */
		DurationInYears: number;
		AutoRenew?: boolean | null;

		/** Required */
		AdminContact: ContactDetail;

		/** Required */
		RegistrantContact: ContactDetail;

		/** Required */
		TechContact: ContactDetail;
		PrivacyProtectAdminContact?: boolean | null;
		PrivacyProtectRegistrantContact?: boolean | null;
		PrivacyProtectTechContact?: boolean | null;
	}

	/** The RegisterDomain request includes the following elements. */
	export interface RegisterDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		IdnLangCode: FormControl<string | null | undefined>,

		/** Required */
		DurationInYears: FormControl<number | null | undefined>,
		AutoRenew: FormControl<boolean | null | undefined>,
		PrivacyProtectAdminContact: FormControl<boolean | null | undefined>,
		PrivacyProtectRegistrantContact: FormControl<boolean | null | undefined>,
		PrivacyProtectTechContact: FormControl<boolean | null | undefined>,
	}
	export function CreateRegisterDomainRequestFormGroup() {
		return new FormGroup<RegisterDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdnLangCode: new FormControl<string | null | undefined>(undefined),
			DurationInYears: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AutoRenew: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectAdminContact: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectRegistrantContact: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectTechContact: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The RejectDomainTransferFromAnotherAwsAccount response includes the following element. */
	export interface RejectDomainTransferFromAnotherAwsAccountResponse {
		OperationId?: string;
	}

	/** The RejectDomainTransferFromAnotherAwsAccount response includes the following element. */
	export interface RejectDomainTransferFromAnotherAwsAccountResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateRejectDomainTransferFromAnotherAwsAccountResponseFormGroup() {
		return new FormGroup<RejectDomainTransferFromAnotherAwsAccountResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The RejectDomainTransferFromAnotherAwsAccount request includes the following element. */
	export interface RejectDomainTransferFromAnotherAwsAccountRequest {

		/** Required */
		DomainName: string;
	}

	/** The RejectDomainTransferFromAnotherAwsAccount request includes the following element. */
	export interface RejectDomainTransferFromAnotherAwsAccountRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateRejectDomainTransferFromAnotherAwsAccountRequestFormGroup() {
		return new FormGroup<RejectDomainTransferFromAnotherAwsAccountRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RenewDomainResponse {
		OperationId?: string;
	}
	export interface RenewDomainResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateRenewDomainResponseFormGroup() {
		return new FormGroup<RenewDomainResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year. */
	export interface RenewDomainRequest {

		/** Required */
		DomainName: string;
		DurationInYears?: number | null;

		/** Required */
		CurrentExpiryYear: number;
	}

	/** A <code>RenewDomain</code> request includes the number of years that you want to renew for and the current expiration year. */
	export interface RenewDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		DurationInYears: FormControl<number | null | undefined>,

		/** Required */
		CurrentExpiryYear: FormControl<number | null | undefined>,
	}
	export function CreateRenewDomainRequestFormGroup() {
		return new FormGroup<RenewDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DurationInYears: new FormControl<number | null | undefined>(undefined),
			CurrentExpiryYear: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResendContactReachabilityEmailResponse {
		domainName?: string;
		emailAddress?: string;
		isAlreadyVerified?: boolean | null;
	}
	export interface ResendContactReachabilityEmailResponseFormProperties {
		domainName: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		isAlreadyVerified: FormControl<boolean | null | undefined>,
	}
	export function CreateResendContactReachabilityEmailResponseFormGroup() {
		return new FormGroup<ResendContactReachabilityEmailResponseFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			isAlreadyVerified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ResendContactReachabilityEmailRequest {
		domainName?: string;
	}
	export interface ResendContactReachabilityEmailRequestFormProperties {
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateResendContactReachabilityEmailRequestFormGroup() {
		return new FormGroup<ResendContactReachabilityEmailRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResendOperationAuthorizationRequest {

		/** Required */
		OperationId: string;
	}
	export interface ResendOperationAuthorizationRequestFormProperties {

		/** Required */
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateResendOperationAuthorizationRequestFormGroup() {
		return new FormGroup<ResendOperationAuthorizationRequestFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The RetrieveDomainAuthCode response includes the following element. */
	export interface RetrieveDomainAuthCodeResponse {
		AuthCode?: string;
	}

	/** The RetrieveDomainAuthCode response includes the following element. */
	export interface RetrieveDomainAuthCodeResponseFormProperties {
		AuthCode: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveDomainAuthCodeResponseFormGroup() {
		return new FormGroup<RetrieveDomainAuthCodeResponseFormProperties>({
			AuthCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar. */
	export interface RetrieveDomainAuthCodeRequest {

		/** Required */
		DomainName: string;
	}

	/** A request for the authorization code for the specified domain. To transfer a domain to another registrar, you provide this value to the new registrar. */
	export interface RetrieveDomainAuthCodeRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveDomainAuthCodeRequestFormGroup() {
		return new FormGroup<RetrieveDomainAuthCodeRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The TransferDomain response includes the following element. */
	export interface TransferDomainResponse {
		OperationId?: string;
	}

	/** The TransferDomain response includes the following element. */
	export interface TransferDomainResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateTransferDomainResponseFormGroup() {
		return new FormGroup<TransferDomainResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The TransferDomain request includes the following elements. */
	export interface TransferDomainRequest {

		/** Required */
		DomainName: string;
		IdnLangCode?: string;

		/** Required */
		DurationInYears: number;
		Nameservers?: Array<Nameserver>;
		AuthCode?: string;
		AutoRenew?: boolean | null;

		/** Required */
		AdminContact: ContactDetail;

		/** Required */
		RegistrantContact: ContactDetail;

		/** Required */
		TechContact: ContactDetail;
		PrivacyProtectAdminContact?: boolean | null;
		PrivacyProtectRegistrantContact?: boolean | null;
		PrivacyProtectTechContact?: boolean | null;
	}

	/** The TransferDomain request includes the following elements. */
	export interface TransferDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		IdnLangCode: FormControl<string | null | undefined>,

		/** Required */
		DurationInYears: FormControl<number | null | undefined>,
		AuthCode: FormControl<string | null | undefined>,
		AutoRenew: FormControl<boolean | null | undefined>,
		PrivacyProtectAdminContact: FormControl<boolean | null | undefined>,
		PrivacyProtectRegistrantContact: FormControl<boolean | null | undefined>,
		PrivacyProtectTechContact: FormControl<boolean | null | undefined>,
	}
	export function CreateTransferDomainRequestFormGroup() {
		return new FormGroup<TransferDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdnLangCode: new FormControl<string | null | undefined>(undefined),
			DurationInYears: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AuthCode: new FormControl<string | null | undefined>(undefined),
			AutoRenew: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectAdminContact: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectRegistrantContact: new FormControl<boolean | null | undefined>(undefined),
			PrivacyProtectTechContact: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements. */
	export interface TransferDomainToAnotherAwsAccountResponse {
		OperationId?: string;
		Password?: string;
	}

	/** The <code>TransferDomainToAnotherAwsAccount</code> response includes the following elements. */
	export interface TransferDomainToAnotherAwsAccountResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateTransferDomainToAnotherAwsAccountResponseFormGroup() {
		return new FormGroup<TransferDomainToAnotherAwsAccountResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The TransferDomainToAnotherAwsAccount request includes the following elements. */
	export interface TransferDomainToAnotherAwsAccountRequest {

		/** Required */
		DomainName: string;

		/** Required */
		AccountId: string;
	}

	/** The TransferDomainToAnotherAwsAccount request includes the following elements. */
	export interface TransferDomainToAnotherAwsAccountRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,

		/** Required */
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateTransferDomainToAnotherAwsAccountRequestFormGroup() {
		return new FormGroup<TransferDomainToAnotherAwsAccountRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The UpdateDomainContact response includes the following element. */
	export interface UpdateDomainContactResponse {
		OperationId?: string;
	}

	/** The UpdateDomainContact response includes the following element. */
	export interface UpdateDomainContactResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainContactResponseFormGroup() {
		return new FormGroup<UpdateDomainContactResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The UpdateDomainContact request includes the following elements. */
	export interface UpdateDomainContactRequest {

		/** Required */
		DomainName: string;
		AdminContact?: ContactDetail;
		RegistrantContact?: ContactDetail;
		TechContact?: ContactDetail;
		Consent?: Consent;
	}

	/** The UpdateDomainContact request includes the following elements. */
	export interface UpdateDomainContactRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainContactRequestFormGroup() {
		return new FormGroup<UpdateDomainContactRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Customer's consent for the owner change request.  */
	export interface Consent {

		/** Required */
		MaxPrice: number;

		/** Required */
		Currency: string;
	}

	/**  Customer's consent for the owner change request.  */
	export interface ConsentFormProperties {

		/** Required */
		MaxPrice: FormControl<number | null | undefined>,

		/** Required */
		Currency: FormControl<string | null | undefined>,
	}
	export function CreateConsentFormGroup() {
		return new FormGroup<ConsentFormProperties>({
			MaxPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The UpdateDomainContactPrivacy response includes the following element. */
	export interface UpdateDomainContactPrivacyResponse {
		OperationId?: string;
	}

	/** The UpdateDomainContactPrivacy response includes the following element. */
	export interface UpdateDomainContactPrivacyResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainContactPrivacyResponseFormGroup() {
		return new FormGroup<UpdateDomainContactPrivacyResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The UpdateDomainContactPrivacy request includes the following elements. */
	export interface UpdateDomainContactPrivacyRequest {

		/** Required */
		DomainName: string;
		AdminPrivacy?: boolean | null;
		RegistrantPrivacy?: boolean | null;
		TechPrivacy?: boolean | null;
	}

	/** The UpdateDomainContactPrivacy request includes the following elements. */
	export interface UpdateDomainContactPrivacyRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		AdminPrivacy: FormControl<boolean | null | undefined>,
		RegistrantPrivacy: FormControl<boolean | null | undefined>,
		TechPrivacy: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainContactPrivacyRequestFormGroup() {
		return new FormGroup<UpdateDomainContactPrivacyRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AdminPrivacy: new FormControl<boolean | null | undefined>(undefined),
			RegistrantPrivacy: new FormControl<boolean | null | undefined>(undefined),
			TechPrivacy: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The UpdateDomainNameservers response includes the following element. */
	export interface UpdateDomainNameserversResponse {
		OperationId?: string;
	}

	/** The UpdateDomainNameservers response includes the following element. */
	export interface UpdateDomainNameserversResponseFormProperties {
		OperationId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainNameserversResponseFormGroup() {
		return new FormGroup<UpdateDomainNameserversResponseFormProperties>({
			OperationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p> */
	export interface UpdateDomainNameserversRequest {

		/** Required */
		DomainName: string;
		FIAuthKey?: string;

		/** Required */
		Nameservers: Array<Nameserver>;
	}

	/** <p>Replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain.</p> <p>If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email. </p> */
	export interface UpdateDomainNameserversRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		FIAuthKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainNameserversRequestFormGroup() {
		return new FormGroup<UpdateDomainNameserversRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		DomainName: string;
		TagsToUpdate?: Array<Tag>;
	}

	/** The UpdateTagsForDomainRequest includes the following elements. */
	export interface UpdateTagsForDomainRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTagsForDomainRequestFormGroup() {
		return new FormGroup<UpdateTagsForDomainRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The ViewBilling response includes the following elements. */
	export interface ViewBillingResponse {
		NextPageMarker?: string;
		BillingRecords?: Array<BillingRecord>;
	}

	/** The ViewBilling response includes the following elements. */
	export interface ViewBillingResponseFormProperties {
		NextPageMarker: FormControl<string | null | undefined>,
	}
	export function CreateViewBillingResponseFormGroup() {
		return new FormGroup<ViewBillingResponseFormProperties>({
			NextPageMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information for one billing record. */
	export interface BillingRecord {
		DomainName?: string;
		Operation?: OperationType;
		InvoiceId?: string;
		BillDate?: Date;
		Price?: number | null;
	}

	/** Information for one billing record. */
	export interface BillingRecordFormProperties {
		DomainName: FormControl<string | null | undefined>,
		Operation: FormControl<OperationType | null | undefined>,
		InvoiceId: FormControl<string | null | undefined>,
		BillDate: FormControl<Date | null | undefined>,
		Price: FormControl<number | null | undefined>,
	}
	export function CreateBillingRecordFormGroup() {
		return new FormGroup<BillingRecordFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			Operation: new FormControl<OperationType | null | undefined>(undefined),
			InvoiceId: new FormControl<string | null | undefined>(undefined),
			BillDate: new FormControl<Date | null | undefined>(undefined),
			Price: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The ViewBilling request includes the following elements. */
	export interface ViewBillingRequest {
		Start?: Date;
		End?: Date;
		Marker?: string;
		MaxItems?: number | null;
	}

	/** The ViewBilling request includes the following elements. */
	export interface ViewBillingRequestFormProperties {
		Start: FormControl<Date | null | undefined>,
		End: FormControl<Date | null | undefined>,
		Marker: FormControl<string | null | undefined>,
		MaxItems: FormControl<number | null | undefined>,
	}
	export function CreateViewBillingRequestFormGroup() {
		return new FormGroup<ViewBillingRequestFormProperties>({
			Start: new FormControl<Date | null | undefined>(undefined),
			End: new FormControl<Date | null | undefined>(undefined),
			Marker: new FormControl<string | null | undefined>(undefined),
			MaxItems: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> or <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> <dt>DOMAIN_IN_OWN_ACCOUNT</dt> <dd> <p>The domain already exists in the current Amazon Web Services account.</p> </dd> <dt>DOMAIN_IN_ANOTHER_ACCOUNT</dt> <dd> <p> the domain exists in another Amazon Web Services account.</p> </dd> <dt>PREMIUM_DOMAIN</dt> <dd> <p>Premium domain transfer is not supported.</p> </dd> </dl> */
	export enum Transferable { TRANSFERABLE = 'TRANSFERABLE', UNTRANSFERABLE = 'UNTRANSFERABLE', DONT_KNOW = 'DONT_KNOW', DOMAIN_IN_OWN_ACCOUNT = 'DOMAIN_IN_OWN_ACCOUNT', DOMAIN_IN_ANOTHER_ACCOUNT = 'DOMAIN_IN_ANOTHER_ACCOUNT', PREMIUM_DOMAIN = 'PREMIUM_DOMAIN' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Accepts the transfer of a domain from another Amazon Web Services account to the currentAmazon Web Services account. You initiate a transfer between Amazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>.</p> <p>If you use the CLI command at <a href="https://docs.aws.amazon.com/cli/latest/reference/route53domains/accept-domain-transfer-from-another-aws-account.html">accept-domain-transfer-from-another-aws-account</a>, use JSON format as input instead of text because otherwise CLI will throw an error from domain transfer input that includes single quotes.</p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount
		 * @return {AcceptDomainTransferFromAnotherAwsAccountResponse} Success
		 */
		AcceptDomainTransferFromAnotherAwsAccount(requestBody: AcceptDomainTransferFromAnotherAwsAccountRequest): Observable<AcceptDomainTransferFromAnotherAwsAccountResponse> {
			return this.http.post<AcceptDomainTransferFromAnotherAwsAccountResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Creates a delegation signer (DS) record in the registry zone for this domain name.</p> <p>Note that creating DS record at the registry impacts DNSSEC validation of your DNS records. This action may render your domain name unavailable on the internet if the steps are completed in the wrong order, or with incorrect timing. For more information about DNSSEC signing, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html">Configuring DNSSEC signing</a> in the <i>Route 53 developer guide</i>.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain
		 * @return {AssociateDelegationSignerToDomainResponse} Success
		 */
		AssociateDelegationSignerToDomain(requestBody: AssociateDelegationSignerToDomainRequest): Observable<AssociateDelegationSignerToDomainResponse> {
			return this.http.post<AssociateDelegationSignerToDomainResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.AssociateDelegationSignerToDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels the transfer of a domain from the current Amazon Web Services account to another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <important> <p>You must cancel the transfer before the other Amazon Web Services account accepts the transfer using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
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
		 * <p>This operation deletes the specified domain. This action is permanent. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-delete.html">Deleting a domain name registration</a>.</p> <p>To transfer the domain registration to another registrar, use the transfer process that’s provided by the registrar to which you want to transfer the registration. Otherwise, the following apply:</p> <ol> <li> <p>You can’t get a refund for the cost of a deleted domain registration.</p> </li> <li> <p>The registry for the top-level domain might hold the domain name for a brief time before releasing it for other users to register (varies by registry). </p> </li> <li> <p>When the registration has been deleted, we'll send you a confirmation to the registrant contact. The email will come from <code>noreply@domainnameverification.net</code> or <code>noreply@registrar.amazon.com</code>.</p> </li> </ol>
		 * Post #X-Amz-Target=Route53Domains_v20140515.DeleteDomain
		 * @return {DeleteDomainResponse} Success
		 */
		DeleteDomain(requestBody: DeleteDomainRequest): Observable<DeleteDomainResponse> {
			return this.http.post<DeleteDomainResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.DeleteDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Deletes a delegation signer (DS) record in the registry zone for this domain name.
		 * Post #X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain
		 * @return {DisassociateDelegationSignerFromDomainResponse} Success
		 */
		DisassociateDelegationSignerFromDomain(requestBody: DisassociateDelegationSignerFromDomainRequest): Observable<DisassociateDelegationSignerFromDomainResponse> {
			return this.http.post<DisassociateDelegationSignerFromDomainResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.DisassociateDelegationSignerFromDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your Amazon Web Services account.</p> <p>The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">Domains That You Can Register with Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</p>
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
		 * This operation returns detailed information about a specified domain that is associated with the current Amazon Web Services account. Contact information for the domain is also returned as part of the output.
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
		 * This operation returns all the domain names registered with Amazon Route 53 for the current Amazon Web Services account if no filtering conditions are used.
		 * Post #X-Amz-Target=Route53Domains_v20140515.ListDomains
		 * @param {string} MaxItems Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListDomainsResponse} Success
		 */
		ListDomains(MaxItems: string | null | undefined, Marker: string | null | undefined, requestBody: ListDomainsRequest): Observable<ListDomainsResponse> {
			return this.http.post<ListDomainsResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.ListDomains?MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. </p> <p>This command runs only in the us-east-1 Region.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.ListOperations
		 * @param {string} MaxItems Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListOperationsResponse} Success
		 */
		ListOperations(MaxItems: string | null | undefined, Marker: string | null | undefined, requestBody: ListOperationsRequest): Observable<ListOperationsResponse> {
			return this.http.post<ListOperationsResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.ListOperations?MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the following prices for either all the TLDs supported by Route 53, or the specified TLD:</p> <ul> <li> <p>Registration</p> </li> <li> <p>Transfer</p> </li> <li> <p>Owner change</p> </li> <li> <p>Domain renewal</p> </li> <li> <p>Domain restoration</p> </li> </ul>
		 * Post #X-Amz-Target=Route53Domains_v20140515.ListPrices
		 * @param {string} MaxItems Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ListPricesResponse} Success
		 */
		ListPrices(MaxItems: string | null | undefined, Marker: string | null | undefined, requestBody: ListPricesRequest): Observable<ListPricesResponse> {
			return this.http.post<ListPricesResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.ListPrices?MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p> Moves a domain from Amazon Web Services to another registrar. </p> <p>Supported actions:</p> <ul> <li> <p>Changes the IPS tags of a .uk domain, and pushes it to transit. Transit means that the domain is ready to be transferred to another registrar.</p> </li> </ul>
		 * Post #X-Amz-Target=Route53Domains_v20140515.PushDomain
		 * @return {void} Success
		 */
		PushDomain(requestBody: PushDomainRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.PushDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation registers a domain. For some top-level domains (TLDs), this operation requires extra parameters.</p> <p>When you register a domain, Amazon Route 53 does the following:</p> <ul> <li> <p>Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.</p> </li> <li> <p>Enables auto renew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.</p> </li> <li> <p>Optionally enables privacy protection, so WHOIS queries return contact for the registrar or the phrase "REDACTED FOR PRIVACY", or "On behalf of &lt;domain name&gt; owner." If you don't enable privacy protection, WHOIS queries return the information that you entered for the administrative, registrant, and technical contacts.</p> <note> <p>While some domains may allow different privacy settings per contact, we recommend specifying the same privacy setting for all contacts.</p> </note> </li> <li> <p>If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.</p> </li> <li> <p>Charges your Amazon Web Services account an amount based on the top-level domain. For more information, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=Route53Domains_v20140515.RegisterDomain
		 * @return {RegisterDomainResponse} Success
		 */
		RegisterDomain(requestBody: RegisterDomainRequest): Observable<RegisterDomainResponse> {
			return this.http.post<RegisterDomainResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.RegisterDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Rejects the transfer of a domain from another Amazon Web Services account to the current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount
		 * @return {RejectDomainTransferFromAnotherAwsAccountResponse} Success
		 */
		RejectDomainTransferFromAnotherAwsAccount(requestBody: RejectDomainTransferFromAnotherAwsAccountRequest): Observable<RejectDomainTransferFromAnotherAwsAccountResponse> {
			return this.http.post<RejectDomainTransferFromAnotherAwsAccountResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your Amazon Web Services account.</p> <p>We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-renew.html">Renewing Registration for a Domain</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
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
		 * Resend the form of authorization email for this operation.
		 * Post #X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization
		 * @return {void} Success
		 */
		ResendOperationAuthorization(requestBody: ResendOperationAuthorizationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.ResendOperationAuthorization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * This operation returns the authorization code for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.
		 * Post #X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode
		 * @return {RetrieveDomainAuthCodeResponse} Success
		 */
		RetrieveDomainAuthCode(requestBody: RetrieveDomainAuthCodeRequest): Observable<RetrieveDomainAuthCodeResponse> {
			return this.http.post<RetrieveDomainAuthCodeResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.RetrieveDomainAuthCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Transfers a domain from another registrar to Amazon Route 53. </p> <p>For more information about transferring domains, see the following topics:</p> <ul> <li> <p>For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html">Transferring Registration for a Domain to Amazon Route 53</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> <li> <p>For information about how to transfer a domain from one Amazon Web Services account to another, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_TransferDomainToAnotherAwsAccount.html">TransferDomainToAnotherAwsAccount</a>. </p> </li> <li> <p>For information about how to transfer a domain to another domain registrar, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-from-route-53.html">Transferring a Domain from Amazon Route 53 to Another Registrar</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </li> </ul> <p>If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.</p> <important> <p>If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.</p> </important> <p>If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.TransferDomain
		 * @return {TransferDomainResponse} Success
		 */
		TransferDomain(requestBody: TransferDomainRequest): Observable<TransferDomainResponse> {
			return this.http.post<TransferDomainResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.TransferDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following:</p> <ul> <li> <p>The Amazon Web Services account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_AcceptDomainTransferFromAnotherAwsAccount.html">AcceptDomainTransferFromAnotherAwsAccount</a>. </p> </li> <li> <p>You can cancel the transfer before the other account accepts it. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_CancelDomainTransferToAnotherAwsAccount.html">CancelDomainTransferToAnotherAwsAccount</a>. </p> </li> <li> <p>The other account can reject the transfer. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_RejectDomainTransferFromAnotherAwsAccount.html">RejectDomainTransferFromAnotherAwsAccount</a>. </p> </li> </ul> <important> <p>When you transfer a domain from one Amazon Web Services account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another Amazon Web Services account, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zones-migrating.html">Migrating a Hosted Zone to a Different Amazon Web Services Account</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> </important> <p>Use either <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_ListOperations.html">ListOperations</a> or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to determine whether the operation succeeded. <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> provides additional information, for example, <code>Domain Transfer from Aws Account 111122223333 has been cancelled</code>. </p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount
		 * @return {TransferDomainToAnotherAwsAccountResponse} Success
		 */
		TransferDomainToAnotherAwsAccount(requestBody: TransferDomainToAnotherAwsAccountRequest): Observable<TransferDomainToAnotherAwsAccountResponse> {
			return this.http.post<TransferDomainToAnotherAwsAccountResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.TransferDomainToAnotherAwsAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical.</p> <p>If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the operation. If the request is not completed successfully, the domain registrant will be notified by email.</p>
		 * Post #X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact
		 * @return {UpdateDomainContactResponse} Success
		 */
		UpdateDomainContact(requestBody: UpdateDomainContactRequest): Observable<UpdateDomainContactResponse> {
			return this.http.post<UpdateDomainContactResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.UpdateDomainContact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, your contact information is replaced with contact information for the registrar or with the phrase "REDACTED FOR PRIVACY", or "On behalf of &lt;domain name&gt; owner."</p> <note> <p>While some domains may allow different privacy settings per contact, we recommend specifying the same privacy setting for all contacts.</p> </note> <p>This operation affects only the contact information for the specified contact type (administrative, registrant, or technical). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_domains_GetOperationDetail.html">GetOperationDetail</a> to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.</p> <important> <p>By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either <code>UpdateDomainContactPrivacy</code> or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see <a href="https://aws.amazon.com/privacy/">https://aws.amazon.com/privacy/</a>.</p> </important>
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
		 * Returns all the domain-related billing records for the current Amazon Web Services account for a specified period
		 * Post #X-Amz-Target=Route53Domains_v20140515.ViewBilling
		 * @param {string} MaxItems Pagination limit
		 * @param {string} Marker Pagination token
		 * @return {ViewBillingResponse} Success
		 */
		ViewBilling(MaxItems: string | null | undefined, Marker: string | null | undefined, requestBody: ViewBillingRequest): Observable<ViewBillingResponse> {
			return this.http.post<ViewBillingResponse>(this.baseUri + '#X-Amz-Target=Route53Domains_v20140515.ViewBilling?MaxItems=' + (MaxItems == null ? '' : encodeURIComponent(MaxItems)) + '&Marker=' + (Marker == null ? '' : encodeURIComponent(Marker)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptDomainTransferFromAnotherAwsAccountX_Amz_Target { 'Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount' = 'Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount' }

	export enum AssociateDelegationSignerToDomainX_Amz_Target { 'Route53Domains_v20140515.AssociateDelegationSignerToDomain' = 'Route53Domains_v20140515.AssociateDelegationSignerToDomain' }

	export enum CancelDomainTransferToAnotherAwsAccountX_Amz_Target { 'Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount' = 'Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount' }

	export enum CheckDomainAvailabilityX_Amz_Target { 'Route53Domains_v20140515.CheckDomainAvailability' = 'Route53Domains_v20140515.CheckDomainAvailability' }

	export enum CheckDomainTransferabilityX_Amz_Target { 'Route53Domains_v20140515.CheckDomainTransferability' = 'Route53Domains_v20140515.CheckDomainTransferability' }

	export enum DeleteDomainX_Amz_Target { 'Route53Domains_v20140515.DeleteDomain' = 'Route53Domains_v20140515.DeleteDomain' }

	export enum DeleteTagsForDomainX_Amz_Target { 'Route53Domains_v20140515.DeleteTagsForDomain' = 'Route53Domains_v20140515.DeleteTagsForDomain' }

	export enum DisableDomainAutoRenewX_Amz_Target { 'Route53Domains_v20140515.DisableDomainAutoRenew' = 'Route53Domains_v20140515.DisableDomainAutoRenew' }

	export enum DisableDomainTransferLockX_Amz_Target { 'Route53Domains_v20140515.DisableDomainTransferLock' = 'Route53Domains_v20140515.DisableDomainTransferLock' }

	export enum DisassociateDelegationSignerFromDomainX_Amz_Target { 'Route53Domains_v20140515.DisassociateDelegationSignerFromDomain' = 'Route53Domains_v20140515.DisassociateDelegationSignerFromDomain' }

	export enum EnableDomainAutoRenewX_Amz_Target { 'Route53Domains_v20140515.EnableDomainAutoRenew' = 'Route53Domains_v20140515.EnableDomainAutoRenew' }

	export enum EnableDomainTransferLockX_Amz_Target { 'Route53Domains_v20140515.EnableDomainTransferLock' = 'Route53Domains_v20140515.EnableDomainTransferLock' }

	export enum GetContactReachabilityStatusX_Amz_Target { 'Route53Domains_v20140515.GetContactReachabilityStatus' = 'Route53Domains_v20140515.GetContactReachabilityStatus' }

	export enum GetDomainDetailX_Amz_Target { 'Route53Domains_v20140515.GetDomainDetail' = 'Route53Domains_v20140515.GetDomainDetail' }

	export enum GetDomainSuggestionsX_Amz_Target { 'Route53Domains_v20140515.GetDomainSuggestions' = 'Route53Domains_v20140515.GetDomainSuggestions' }

	export enum GetOperationDetailX_Amz_Target { 'Route53Domains_v20140515.GetOperationDetail' = 'Route53Domains_v20140515.GetOperationDetail' }

	export enum ListDomainsX_Amz_Target { 'Route53Domains_v20140515.ListDomains' = 'Route53Domains_v20140515.ListDomains' }

	export enum ListOperationsX_Amz_Target { 'Route53Domains_v20140515.ListOperations' = 'Route53Domains_v20140515.ListOperations' }

	export enum ListPricesX_Amz_Target { 'Route53Domains_v20140515.ListPrices' = 'Route53Domains_v20140515.ListPrices' }

	export enum ListTagsForDomainX_Amz_Target { 'Route53Domains_v20140515.ListTagsForDomain' = 'Route53Domains_v20140515.ListTagsForDomain' }

	export enum PushDomainX_Amz_Target { 'Route53Domains_v20140515.PushDomain' = 'Route53Domains_v20140515.PushDomain' }

	export enum RegisterDomainX_Amz_Target { 'Route53Domains_v20140515.RegisterDomain' = 'Route53Domains_v20140515.RegisterDomain' }

	export enum RejectDomainTransferFromAnotherAwsAccountX_Amz_Target { 'Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount' = 'Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount' }

	export enum RenewDomainX_Amz_Target { 'Route53Domains_v20140515.RenewDomain' = 'Route53Domains_v20140515.RenewDomain' }

	export enum ResendContactReachabilityEmailX_Amz_Target { 'Route53Domains_v20140515.ResendContactReachabilityEmail' = 'Route53Domains_v20140515.ResendContactReachabilityEmail' }

	export enum ResendOperationAuthorizationX_Amz_Target { 'Route53Domains_v20140515.ResendOperationAuthorization' = 'Route53Domains_v20140515.ResendOperationAuthorization' }

	export enum RetrieveDomainAuthCodeX_Amz_Target { 'Route53Domains_v20140515.RetrieveDomainAuthCode' = 'Route53Domains_v20140515.RetrieveDomainAuthCode' }

	export enum TransferDomainX_Amz_Target { 'Route53Domains_v20140515.TransferDomain' = 'Route53Domains_v20140515.TransferDomain' }

	export enum TransferDomainToAnotherAwsAccountX_Amz_Target { 'Route53Domains_v20140515.TransferDomainToAnotherAwsAccount' = 'Route53Domains_v20140515.TransferDomainToAnotherAwsAccount' }

	export enum UpdateDomainContactX_Amz_Target { 'Route53Domains_v20140515.UpdateDomainContact' = 'Route53Domains_v20140515.UpdateDomainContact' }

	export enum UpdateDomainContactPrivacyX_Amz_Target { 'Route53Domains_v20140515.UpdateDomainContactPrivacy' = 'Route53Domains_v20140515.UpdateDomainContactPrivacy' }

	export enum UpdateDomainNameserversX_Amz_Target { 'Route53Domains_v20140515.UpdateDomainNameservers' = 'Route53Domains_v20140515.UpdateDomainNameservers' }

	export enum UpdateTagsForDomainX_Amz_Target { 'Route53Domains_v20140515.UpdateTagsForDomain' = 'Route53Domains_v20140515.UpdateTagsForDomain' }

	export enum ViewBillingX_Amz_Target { 'Route53Domains_v20140515.ViewBilling' = 'Route53Domains_v20140515.ViewBilling' }

}

