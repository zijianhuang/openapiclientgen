import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptedPaymentV3 {

		/**
		 * The amount of the payment in minor units
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		amount: number;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currencyType: string;

		/**
		 * <p>Any value here will override the memo value in the parent payout</p>
		 * <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>
		 * Min length: 0
		 * Max length: 40
		 */
		paymentMemo?: string | null;

		/**
		 * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>
		 * <p>The structure of the data will be dictated by the requirements of the payment rails</p>
		 * Min length: 0
		 * Max length: 512
		 */
		paymentMetadata?: string | null;

		/**
		 * A reference identifier for the payor for the given payee payment
		 * Required
		 * Min length: 0
		 * Max length: 40
		 */
		payorPaymentId: string;

		/**
		 * Indicates the 3rd party system involved in making this payment
		 * Required
		 */
		railsId: string;

		/**
		 * Your identifier for the payee
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: string;

		/**
		 * <p>The identifier for the remote payments system if not Velo</p>
		 * Min length: 1
		 * Max length: 100
		 */
		remoteSystemId?: string | null;

		/**
		 * The identifier of the source account to debit the payment from
		 * Required
		 */
		sourceAccountName: string;
	}
	export interface AcceptedPaymentV3FormProperties {

		/**
		 * The amount of the payment in minor units
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currencyType: FormControl<string | null | undefined>,

		/**
		 * <p>Any value here will override the memo value in the parent payout</p>
		 * <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>
		 * Min length: 0
		 * Max length: 40
		 */
		paymentMemo: FormControl<string | null | undefined>,

		/**
		 * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>
		 * <p>The structure of the data will be dictated by the requirements of the payment rails</p>
		 * Min length: 0
		 * Max length: 512
		 */
		paymentMetadata: FormControl<string | null | undefined>,

		/**
		 * A reference identifier for the payor for the given payee payment
		 * Required
		 * Min length: 0
		 * Max length: 40
		 */
		payorPaymentId: FormControl<string | null | undefined>,

		/**
		 * Indicates the 3rd party system involved in making this payment
		 * Required
		 */
		railsId: FormControl<string | null | undefined>,

		/**
		 * Your identifier for the payee
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier for the remote payments system if not Velo</p>
		 * Min length: 1
		 * Max length: 100
		 */
		remoteSystemId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the source account to debit the payment from
		 * Required
		 */
		sourceAccountName: FormControl<string | null | undefined>,
	}
	export function CreateAcceptedPaymentV3FormGroup() {
		return new FormGroup<AcceptedPaymentV3FormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currencyType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			paymentMemo: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(40)]),
			paymentMetadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
			payorPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(40)]),
			railsId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remoteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			remoteSystemId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			sourceAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccessTokenResponse {

		/**
		 * Bearer token used in headers to access secure endpoints
		 */
		access_token?: string | null;

		/**
		 * If the user is a payee then the payeeId<P>
		 * If the user is a payor then the payorId
		 */
		entityIds?: Array<string>;

		/**
		 * The lifetime in seconds of the access token
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_in?: number | null;

		/** can be used to obtain a new access token */
		refresh_token?: string | null;

		/** the scope of the access token */
		scope?: string | null;

		/** the type of the token */
		token_type?: string | null;
		user_info?: UserInfo;
	}
	export interface AccessTokenResponseFormProperties {

		/**
		 * Bearer token used in headers to access secure endpoints
		 */
		access_token: FormControl<string | null | undefined>,

		/**
		 * The lifetime in seconds of the access token
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires_in: FormControl<number | null | undefined>,

		/** can be used to obtain a new access token */
		refresh_token: FormControl<string | null | undefined>,

		/** the scope of the access token */
		scope: FormControl<string | null | undefined>,

		/** the type of the token */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateAccessTokenResponseFormGroup() {
		return new FormGroup<AccessTokenResponseFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserInfo {
		mfa_details?: MFADetails;
		userType?: UserInfoUserType | null;

		/** the id of the user */
		user_id?: string | null;
	}
	export interface UserInfoFormProperties {
		userType: FormControl<UserInfoUserType | null | undefined>,

		/** the id of the user */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateUserInfoFormGroup() {
		return new FormGroup<UserInfoFormProperties>({
			userType: new FormControl<UserInfoUserType | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MFADetails {

		/** The type of the MFA device */
		mfa_type?: MFADetailsMfa_type | null;

		/** true if the user has used the MFA device for login */
		verified?: boolean | null;
	}
	export interface MFADetailsFormProperties {

		/** The type of the MFA device */
		mfa_type: FormControl<MFADetailsMfa_type | null | undefined>,

		/** true if the user has used the MFA device for login */
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateMFADetailsFormGroup() {
		return new FormGroup<MFADetailsFormProperties>({
			mfa_type: new FormControl<MFADetailsMfa_type | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum MFADetailsMfa_type { SMS = 'SMS', YUBIKEY = 'YUBIKEY', TOTP = 'TOTP' }

	export enum UserInfoUserType { BACKOFFICE = 'BACKOFFICE', PAYOR = 'PAYOR', PAYEE = 'PAYEE' }

	export interface AccessTokenValidationRequest {

		/**
		 * an OTP either sent via sms or generated by a registered MFA device
		 * Required
		 * Min length: 6
		 * Max length: 64
		 */
		otp: string;
	}
	export interface AccessTokenValidationRequestFormProperties {

		/**
		 * an OTP either sent via sms or generated by a registered MFA device
		 * Required
		 * Min length: 6
		 * Max length: 64
		 */
		otp: FormControl<string | null | undefined>,
	}
	export function CreateAccessTokenValidationRequestFormGroup() {
		return new FormGroup<AccessTokenValidationRequestFormProperties>({
			otp: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(6), Validators.maxLength(64)]),
		});

	}

	export interface AuthResponse {

		/** Required */
		access_token: string;
		entityIds?: Array<string>;

		/** Type: double */
		expires_in?: number | null;
		refresh_token?: string | null;
		scope?: string | null;

		/** Required */
		token_type: string;
	}
	export interface AuthResponseFormProperties {

		/** Required */
		access_token: FormControl<string | null | undefined>,

		/** Type: double */
		expires_in: FormControl<number | null | undefined>,
		refresh_token: FormControl<string | null | undefined>,
		scope: FormControl<string | null | undefined>,

		/** Required */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateAuthResponseFormGroup() {
		return new FormGroup<AuthResponseFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expires_in: new FormControl<number | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutoTopUpConfigV2 {

		/**
		 * Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.
		 * Required
		 */
		enabled: boolean;

		/**
		 * When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minBalance?: string | null;

		/**
		 * When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		targetBalance?: string | null;
	}
	export interface AutoTopUpConfigV2FormProperties {

		/**
		 * Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minBalance: FormControl<string | null | undefined>,

		/**
		 * When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		targetBalance: FormControl<string | null | undefined>,
	}
	export function CreateAutoTopUpConfigV2FormGroup() {
		return new FormGroup<AutoTopUpConfigV2FormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			minBalance: new FormControl<string | null | undefined>(undefined),
			targetBalance: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutoTopUpConfigV3 {

		/**
		 * Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.
		 * Required
		 */
		enabled: boolean;

		/** Id of funding account from which to pull funds when auto top-up is triggered.  Note - if this is not set then auto top-up is effectively disabled. */
		fundingAccountId?: string | null;

		/**
		 * When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minBalance?: string | null;

		/**
		 * When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		targetBalance?: string | null;
	}
	export interface AutoTopUpConfigV3FormProperties {

		/**
		 * Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/** Id of funding account from which to pull funds when auto top-up is triggered.  Note - if this is not set then auto top-up is effectively disabled. */
		fundingAccountId: FormControl<string | null | undefined>,

		/**
		 * When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		minBalance: FormControl<string | null | undefined>,

		/**
		 * When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		targetBalance: FormControl<string | null | undefined>,
	}
	export function CreateAutoTopUpConfigV3FormGroup() {
		return new FormGroup<AutoTopUpConfigV3FormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			fundingAccountId: new FormControl<string | null | undefined>(undefined),
			minBalance: new FormControl<string | null | undefined>(undefined),
			targetBalance: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The notification category.  One of "payment", "payee", "debit". */
	export enum Category { payment = 'payment', payee = 'payee', debit = 'debit' }

	export interface ChallengeV3 {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		description: string;

		/**
		 * Required
		 * Min length: 3
		 * Max length: 20
		 */
		value: string;
	}
	export interface ChallengeV3FormProperties {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 3
		 * Max length: 20
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateChallengeV3FormGroup() {
		return new FormGroup<ChallengeV3FormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
		});

	}


	/**
	 * <p>Used to override the default challenge presented to the payee when they onboard</p>
	 * <p>Not used after the payee has onboarded</p>
	 */
	export interface ChallengeV4 {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		description: string;

		/**
		 * The value that the user will be asked to verify when they onboard
		 * Required
		 * Min length: 3
		 * Max length: 20
		 */
		value: string;
	}

	/**
	 * <p>Used to override the default challenge presented to the payee when they onboard</p>
	 * <p>Not used after the payee has onboarded</p>
	 */
	export interface ChallengeV4FormProperties {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The value that the user will be asked to verify when they onboard
		 * Required
		 * Min length: 3
		 * Max length: 20
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateChallengeV4FormGroup() {
		return new FormGroup<ChallengeV4FormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
		});

	}

	export interface CompanyV3 {

		/**
		 * Required
		 * Min length: 3
		 * Max length: 40
		 */
		name: string;

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		operatingName?: string | null;

		/**
		 * Company Tax Id must be between 6 and 30 characters long
		 * Min length: 6
		 * Max length: 30
		 */
		taxId?: string | null;
	}
	export interface CompanyV3FormProperties {

		/**
		 * Required
		 * Min length: 3
		 * Max length: 40
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		operatingName: FormControl<string | null | undefined>,

		/**
		 * Company Tax Id must be between 6 and 30 characters long
		 * Min length: 6
		 * Max length: 30
		 */
		taxId: FormControl<string | null | undefined>,
	}
	export function CreateCompanyV3FormGroup() {
		return new FormGroup<CompanyV3FormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
			operatingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			taxId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(30)]),
		});

	}

	export interface CompanyV4 {

		/**
		 * Required
		 * Min length: 3
		 * Max length: 40
		 */
		name: string;

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		operatingName?: string | null;

		/**
		 * Company Tax Id must be between 6 and 30 characters long
		 * Min length: 6
		 * Max length: 30
		 */
		taxId?: string | null;
	}
	export interface CompanyV4FormProperties {

		/**
		 * Required
		 * Min length: 3
		 * Max length: 40
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		operatingName: FormControl<string | null | undefined>,

		/**
		 * Company Tax Id must be between 6 and 30 characters long
		 * Min length: 6
		 * Max length: 30
		 */
		taxId: FormControl<string | null | undefined>,
	}
	export function CreateCompanyV4FormGroup() {
		return new FormGroup<CompanyV4FormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
			operatingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			taxId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(30)]),
		});

	}

	export interface CreateFundingAccountRequestV2 {

		/**
		 * Required if type is either FBO or PRIVATE
		 * Min length: 1
		 * Max length: 22
		 */
		accountName?: string | null;

		/**
		 * Required if type is either FBO or PRIVATE
		 * Min length: 4
		 * Max length: 17
		 */
		accountNumber?: string | null;

		/**
		 * ISO 4217 currency code, Required if type is either WUBS_DECOUPLED or PRIVATE
		 * Min length: 3
		 * Max length: 3
		 */
		currency?: string | null;

		/**
		 * Required
		 * Min length: 3
		 * Max length: 30
		 */
		name: string;

		/** Required */
		payorId: string;

		/**
		 * Required if type is either FBO or PRIVATE
		 * Min length: 6
		 * Max length: 9
		 */
		routingNumber?: string | null;

		/** Required */
		type: CreateFundingAccountRequestV2Type;
	}
	export interface CreateFundingAccountRequestV2FormProperties {

		/**
		 * Required if type is either FBO or PRIVATE
		 * Min length: 1
		 * Max length: 22
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * Required if type is either FBO or PRIVATE
		 * Min length: 4
		 * Max length: 17
		 */
		accountNumber: FormControl<string | null | undefined>,

		/**
		 * ISO 4217 currency code, Required if type is either WUBS_DECOUPLED or PRIVATE
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 3
		 * Max length: 30
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		payorId: FormControl<string | null | undefined>,

		/**
		 * Required if type is either FBO or PRIVATE
		 * Min length: 6
		 * Max length: 9
		 */
		routingNumber: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CreateFundingAccountRequestV2Type | null | undefined>,
	}
	export function CreateCreateFundingAccountRequestV2FormGroup() {
		return new FormGroup<CreateFundingAccountRequestV2FormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(22)]),
			accountNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(17)]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			routingNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(9)]),
			type: new FormControl<CreateFundingAccountRequestV2Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateFundingAccountRequestV2Type { FBO = 'FBO', WUBS_DECOUPLED = 'WUBS_DECOUPLED', PRIVATE = 'PRIVATE' }

	export interface CreateIndividualV3 {

		/**
		 * Must not be date in future. Example - 1970-05-20
		 * Required
		 * Type: DateOnly
		 */
		dateOfBirth: Date;

		/** Required */
		name: CreateIndividualV3_name;

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		nationalIdentification?: string | null;
	}
	export interface CreateIndividualV3FormProperties {

		/**
		 * Must not be date in future. Example - 1970-05-20
		 * Required
		 * Type: DateOnly
		 */
		dateOfBirth: FormControl<Date | null | undefined>,

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		nationalIdentification: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndividualV3FormGroup() {
		return new FormGroup<CreateIndividualV3FormProperties>({
			dateOfBirth: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			nationalIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(30)]),
		});

	}

	export interface CreateIndividualV3_name {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 40
		 */
		firstName: string;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 40
		 */
		lastName: string;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		otherNames?: string | null;

		/**
		 * Min length: 1
		 * Max length: 10
		 */
		title?: string | null;
	}
	export interface CreateIndividualV3_nameFormProperties {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 40
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 40
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		otherNames: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 10
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndividualV3_nameFormGroup() {
		return new FormGroup<CreateIndividualV3_nameFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			otherNames: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10)]),
		});

	}

	export interface CreateIndividualV4 {

		/**
		 * Must not be date in future. Example - 1970-05-20
		 * Required
		 * Type: DateOnly
		 */
		dateOfBirth: Date;

		/** Required */
		name: CreateIndividualV3_name;

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		nationalIdentification?: string | null;
	}
	export interface CreateIndividualV4FormProperties {

		/**
		 * Must not be date in future. Example - 1970-05-20
		 * Required
		 * Type: DateOnly
		 */
		dateOfBirth: FormControl<Date | null | undefined>,

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		nationalIdentification: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndividualV4FormGroup() {
		return new FormGroup<CreateIndividualV4FormProperties>({
			dateOfBirth: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			nationalIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(30)]),
		});

	}

	export interface CreatePayeeAddressV3 {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		city: string;

		/**
		 * 2 letter ISO 3166-1 country code
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: string;

		/**
		 * Min length: 2
		 * Max length: 50
		 */
		countyOrProvince?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		line1: string;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line2?: string | null;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line3?: string | null;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line4?: string | null;

		/**
		 * Min length: 2
		 * Max length: 60
		 */
		zipOrPostcode?: string | null;
	}
	export interface CreatePayeeAddressV3FormProperties {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * 2 letter ISO 3166-1 country code
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 50
		 */
		countyOrProvince: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		line1: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line2: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line3: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line4: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 60
		 */
		zipOrPostcode: FormControl<string | null | undefined>,
	}
	export function CreateCreatePayeeAddressV3FormGroup() {
		return new FormGroup<CreatePayeeAddressV3FormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
			countyOrProvince: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(50)]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			line3: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			line4: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			zipOrPostcode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(60)]),
		});

	}

	export interface CreatePayeeAddressV4 {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		city: string;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: string;

		/**
		 * Min length: 2
		 * Max length: 50
		 */
		countyOrProvince?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		line1: string;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line2?: string | null;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line3?: string | null;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line4?: string | null;

		/**
		 * Min length: 2
		 * Max length: 60
		 */
		zipOrPostcode?: string | null;
	}
	export interface CreatePayeeAddressV4FormProperties {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 50
		 */
		countyOrProvince: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		line1: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line2: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line3: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		line4: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 60
		 */
		zipOrPostcode: FormControl<string | null | undefined>,
	}
	export function CreateCreatePayeeAddressV4FormGroup() {
		return new FormGroup<CreatePayeeAddressV4FormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			countyOrProvince: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(50)]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			line3: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			line4: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			zipOrPostcode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(60)]),
		});

	}

	export interface CreatePayeeV3 {

		/** Required */
		address: CreatePayeeAddressV3;
		challenge?: ChallengeV3;
		company?: CompanyV3;

		/**
		 * Required
		 * Min length: 3
		 * Max length: 255
		 */
		email: string;
		individual?: CreateIndividualV3;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language?: string | null;
		payeeId?: string | null;
		paymentChannel?: CreatePaymentChannelV3;
		payorRefs?: Array<PayeePayorRefV3>;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: string;

		/**
		 * Type of Payee. One of the following values: Individual, Company
		 * Required
		 */
		type: string;
	}
	export interface CreatePayeeV3FormProperties {

		/**
		 * Required
		 * Min length: 3
		 * Max length: 255
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language: FormControl<string | null | undefined>,
		payeeId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: FormControl<string | null | undefined>,

		/**
		 * Type of Payee. One of the following values: Individual, Company
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreatePayeeV3FormGroup() {
		return new FormGroup<CreatePayeeV3FormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
			language: new FormControl<string | null | undefined>(undefined),
			payeeId: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePaymentChannelV3 {

		/** Required */
		accountName: string;

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 6
		 * Max length: 17
		 */
		accountNumber?: string | null;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		countryCode: string;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: string;

		/**
		 * Must match the regular expression ```^[A-Za-z0-9]+$```.
		 * Min length: 15
		 * Max length: 34
		 */
		iban?: string | null;
		paymentChannelName?: string | null;

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 9
		 * Max length: 9
		 */
		routingNumber?: string | null;
	}
	export interface CreatePaymentChannelV3FormProperties {

		/** Required */
		accountName: FormControl<string | null | undefined>,

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 6
		 * Max length: 17
		 */
		accountNumber: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * Must match the regular expression ```^[A-Za-z0-9]+$```.
		 * Min length: 15
		 * Max length: 34
		 */
		iban: FormControl<string | null | undefined>,
		paymentChannelName: FormControl<string | null | undefined>,

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 9
		 * Max length: 9
		 */
		routingNumber: FormControl<string | null | undefined>,
	}
	export function CreateCreatePaymentChannelV3FormGroup() {
		return new FormGroup<CreatePaymentChannelV3FormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accountNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(17)]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			iban: new FormControl<string | null | undefined>(undefined, [Validators.minLength(15), Validators.maxLength(34), Validators.pattern('^[A-Za-z0-9]+$')]),
			paymentChannelName: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(9), Validators.maxLength(9)]),
		});

	}

	export interface PayeePayorRefV3 {
		invitationStatus?: string | null;

		/** The timestamp when the invitation status is updated */
		invitationStatusTimestamp?: Date | null;

		/** Indicates any conditions which prevent the payee from being payable for this payor */
		payableIssues?: Array<PayableIssueV3>;

		/** Indicates if the payee is payable for this payor */
		payableStatus?: boolean | null;
		paymentChannelId?: string | null;
		payorId?: string | null;
		remoteId?: string | null;
	}
	export interface PayeePayorRefV3FormProperties {
		invitationStatus: FormControl<string | null | undefined>,

		/** The timestamp when the invitation status is updated */
		invitationStatusTimestamp: FormControl<Date | null | undefined>,

		/** Indicates if the payee is payable for this payor */
		payableStatus: FormControl<boolean | null | undefined>,
		paymentChannelId: FormControl<string | null | undefined>,
		payorId: FormControl<string | null | undefined>,
		remoteId: FormControl<string | null | undefined>,
	}
	export function CreatePayeePayorRefV3FormGroup() {
		return new FormGroup<PayeePayorRefV3FormProperties>({
			invitationStatus: new FormControl<string | null | undefined>(undefined),
			invitationStatusTimestamp: new FormControl<Date | null | undefined>(undefined),
			payableStatus: new FormControl<boolean | null | undefined>(undefined),
			paymentChannelId: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** payable issues for the payee and payor combination */
	export interface PayableIssueV3 {

		/** Required */
		code: string;

		/** Required */
		message: string;
	}

	/** payable issues for the payee and payor combination */
	export interface PayableIssueV3FormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreatePayableIssueV3FormGroup() {
		return new FormGroup<PayableIssueV3FormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePayeeV4 {

		/** Required */
		address: CreatePayeeAddressV4;

		/**
		 * <p>Used to override the default challenge presented to the payee when they onboard</p>
		 * <p>Not used after the payee has onboarded</p>
		 */
		challenge?: ChallengeV4;
		company?: CompanyV4;

		/**
		 * Required
		 * Min length: 3
		 * Max length: 255
		 */
		email: string;
		individual?: CreateIndividualV4;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language?: string | null;
		paymentChannel?: CreatePaymentChannelV4;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: string;

		/**
		 * The type of the payee
		 * Required
		 */
		type: CreatePayeeV4Type;
	}
	export interface CreatePayeeV4FormProperties {

		/**
		 * Required
		 * Min length: 3
		 * Max length: 255
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: FormControl<string | null | undefined>,

		/**
		 * The type of the payee
		 * Required
		 */
		type: FormControl<CreatePayeeV4Type | null | undefined>,
	}
	export function CreateCreatePayeeV4FormGroup() {
		return new FormGroup<CreatePayeeV4FormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
			language: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			type: new FormControl<CreatePayeeV4Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePaymentChannelV4 {

		/** Required */
		accountName: string;

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 6
		 * Max length: 17
		 */
		accountNumber?: string | null;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		countryCode: string;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: string;

		/**
		 * Must match the regular expression ```^[A-Za-z0-9]+$```.
		 * Min length: 15
		 * Max length: 34
		 */
		iban?: string | null;
		paymentChannelName?: string | null;

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 9
		 * Max length: 9
		 */
		routingNumber?: string | null;
	}
	export interface CreatePaymentChannelV4FormProperties {

		/** Required */
		accountName: FormControl<string | null | undefined>,

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 6
		 * Max length: 17
		 */
		accountNumber: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * Must match the regular expression ```^[A-Za-z0-9]+$```.
		 * Min length: 15
		 * Max length: 34
		 */
		iban: FormControl<string | null | undefined>,
		paymentChannelName: FormControl<string | null | undefined>,

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 9
		 * Max length: 9
		 */
		routingNumber: FormControl<string | null | undefined>,
	}
	export function CreateCreatePaymentChannelV4FormGroup() {
		return new FormGroup<CreatePaymentChannelV4FormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accountNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(17)]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			iban: new FormControl<string | null | undefined>(undefined, [Validators.minLength(15), Validators.maxLength(34), Validators.pattern('^[A-Za-z0-9]+$')]),
			paymentChannelName: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(9), Validators.maxLength(9)]),
		});

	}

	export enum CreatePayeeV4Type { Individual = 'Individual', Company = 'Company' }

	export interface CreatePayeesCSVRequestV3 {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		addressCity: string;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		addressCountry: string;

		/**
		 * Min length: 1
		 * Max length: 50
		 */
		addressCountyOrProvince?: string | null;

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		addressLine1: string;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine2?: string | null;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine3?: string | null;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine4?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 60
		 */
		addressZipOrPostcode: string;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		challengeDescription?: string | null;

		/**
		 * Min length: 3
		 * Max length: 20
		 */
		challengeValue?: string | null;

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		companyEIN?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		companyName?: string | null;

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		companyOperatingName?: string | null;

		/**
		 * Required
		 * Min length: 3
		 * Max length: 255
		 */
		email: string;

		/**
		 * Must not be date in future. Example - 1970-05-20
		 * Type: DateOnly
		 */
		individualDateOfBirth?: Date | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualFirstName?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualLastName?: string | null;

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		individualNationalIdentification?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualOtherNames?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualTitle?: string | null;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		payeeLanguage?: string | null;
		paymentChannelAccountName?: string | null;

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 6
		 * Max length: 17
		 */
		paymentChannelAccountNumber?: string | null;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		paymentChannelCountryCode?: string | null;

		/**
		 * Min length: 3
		 * Max length: 3
		 */
		paymentChannelCurrency?: string | null;

		/**
		 * Must match the regular expression ```^[A-Za-z0-9]+$```.
		 * Min length: 15
		 * Max length: 34
		 */
		paymentChannelIban?: string | null;

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 9
		 * Max length: 9
		 */
		paymentChannelRoutingNumber?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: string;

		/**
		 * The type of the payee
		 * Required
		 */
		type: CreatePayeeV4Type;
	}
	export interface CreatePayeesCSVRequestV3FormProperties {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		addressCity: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		addressCountry: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 50
		 */
		addressCountyOrProvince: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		addressLine1: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine2: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine3: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine4: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 60
		 */
		addressZipOrPostcode: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		challengeDescription: FormControl<string | null | undefined>,

		/**
		 * Min length: 3
		 * Max length: 20
		 */
		challengeValue: FormControl<string | null | undefined>,

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		companyEIN: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		companyName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		companyOperatingName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 3
		 * Max length: 255
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Must not be date in future. Example - 1970-05-20
		 * Type: DateOnly
		 */
		individualDateOfBirth: FormControl<Date | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualFirstName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualLastName: FormControl<string | null | undefined>,

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		individualNationalIdentification: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualOtherNames: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualTitle: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		payeeLanguage: FormControl<string | null | undefined>,
		paymentChannelAccountName: FormControl<string | null | undefined>,

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 6
		 * Max length: 17
		 */
		paymentChannelAccountNumber: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		paymentChannelCountryCode: FormControl<string | null | undefined>,

		/**
		 * Min length: 3
		 * Max length: 3
		 */
		paymentChannelCurrency: FormControl<string | null | undefined>,

		/**
		 * Must match the regular expression ```^[A-Za-z0-9]+$```.
		 * Min length: 15
		 * Max length: 34
		 */
		paymentChannelIban: FormControl<string | null | undefined>,

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 9
		 * Max length: 9
		 */
		paymentChannelRoutingNumber: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: FormControl<string | null | undefined>,

		/**
		 * The type of the payee
		 * Required
		 */
		type: FormControl<CreatePayeeV4Type | null | undefined>,
	}
	export function CreateCreatePayeesCSVRequestV3FormGroup() {
		return new FormGroup<CreatePayeesCSVRequestV3FormProperties>({
			addressCity: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			addressCountry: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			addressCountyOrProvince: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			addressLine1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
			addressLine2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			addressLine3: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			addressLine4: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			addressZipOrPostcode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]),
			challengeDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			challengeValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(20)]),
			companyEIN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(30)]),
			companyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			companyOperatingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
			individualDateOfBirth: new FormControl<Date | null | undefined>(undefined),
			individualFirstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			individualLastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			individualNationalIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(30)]),
			individualOtherNames: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			individualTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			payeeLanguage: new FormControl<string | null | undefined>(undefined),
			paymentChannelAccountName: new FormControl<string | null | undefined>(undefined),
			paymentChannelAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(17)]),
			paymentChannelCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			paymentChannelCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			paymentChannelIban: new FormControl<string | null | undefined>(undefined, [Validators.minLength(15), Validators.maxLength(34), Validators.pattern('^[A-Za-z0-9]+$')]),
			paymentChannelRoutingNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(9), Validators.maxLength(9)]),
			remoteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			type: new FormControl<CreatePayeeV4Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePayeesCSVRequestV4 {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		addressCity: string;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		addressCountry: string;

		/**
		 * Min length: 1
		 * Max length: 50
		 */
		addressCountyOrProvince?: string | null;

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		addressLine1: string;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine2?: string | null;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine3?: string | null;

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine4?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 60
		 */
		addressZipOrPostcode: string;

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		challengeDescription?: string | null;

		/**
		 * Min length: 3
		 * Max length: 20
		 */
		challengeValue?: string | null;

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		companyEIN?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		companyName?: string | null;

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		companyOperatingName?: string | null;

		/**
		 * Required
		 * Min length: 3
		 * Max length: 255
		 */
		email: string;

		/**
		 * Must not be date in future. Example - 1970-05-20
		 * Type: DateOnly
		 */
		individualDateOfBirth?: Date | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualFirstName?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualLastName?: string | null;

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		individualNationalIdentification?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualOtherNames?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualTitle?: string | null;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		payeeLanguage?: string | null;
		paymentChannelAccountName?: string | null;

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 6
		 * Max length: 17
		 */
		paymentChannelAccountNumber?: string | null;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		paymentChannelCountryCode?: string | null;

		/**
		 * Min length: 3
		 * Max length: 3
		 */
		paymentChannelCurrency?: string | null;

		/**
		 * Must match the regular expression ```^[A-Za-z0-9]+$```.
		 * Min length: 15
		 * Max length: 34
		 */
		paymentChannelIban?: string | null;

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 9
		 * Max length: 9
		 */
		paymentChannelRoutingNumber?: string | null;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: string;

		/**
		 * The type of the payee
		 * Required
		 */
		type: CreatePayeeV4Type;
	}
	export interface CreatePayeesCSVRequestV4FormProperties {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		addressCity: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		addressCountry: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 50
		 */
		addressCountyOrProvince: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		addressLine1: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine2: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine3: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 100
		 */
		addressLine4: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 60
		 */
		addressZipOrPostcode: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 255
		 */
		challengeDescription: FormControl<string | null | undefined>,

		/**
		 * Min length: 3
		 * Max length: 20
		 */
		challengeValue: FormControl<string | null | undefined>,

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		companyEIN: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		companyName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		companyOperatingName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 3
		 * Max length: 255
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Must not be date in future. Example - 1970-05-20
		 * Type: DateOnly
		 */
		individualDateOfBirth: FormControl<Date | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualFirstName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualLastName: FormControl<string | null | undefined>,

		/**
		 * Min length: 6
		 * Max length: 30
		 */
		individualNationalIdentification: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualOtherNames: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		individualTitle: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		payeeLanguage: FormControl<string | null | undefined>,
		paymentChannelAccountName: FormControl<string | null | undefined>,

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 6
		 * Max length: 17
		 */
		paymentChannelAccountNumber: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		paymentChannelCountryCode: FormControl<string | null | undefined>,

		/**
		 * Min length: 3
		 * Max length: 3
		 */
		paymentChannelCurrency: FormControl<string | null | undefined>,

		/**
		 * Must match the regular expression ```^[A-Za-z0-9]+$```.
		 * Min length: 15
		 * Max length: 34
		 */
		paymentChannelIban: FormControl<string | null | undefined>,

		/**
		 * Either routing number and account number or only iban must be set
		 * Min length: 9
		 * Max length: 9
		 */
		paymentChannelRoutingNumber: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: FormControl<string | null | undefined>,

		/**
		 * The type of the payee
		 * Required
		 */
		type: FormControl<CreatePayeeV4Type | null | undefined>,
	}
	export function CreateCreatePayeesCSVRequestV4FormGroup() {
		return new FormGroup<CreatePayeesCSVRequestV4FormProperties>({
			addressCity: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			addressCountry: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			addressCountyOrProvince: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			addressLine1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
			addressLine2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			addressLine3: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			addressLine4: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			addressZipOrPostcode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(60)]),
			challengeDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			challengeValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(20)]),
			companyEIN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(30)]),
			companyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			companyOperatingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
			individualDateOfBirth: new FormControl<Date | null | undefined>(undefined),
			individualFirstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			individualLastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			individualNationalIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(30)]),
			individualOtherNames: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			individualTitle: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			payeeLanguage: new FormControl<string | null | undefined>(undefined),
			paymentChannelAccountName: new FormControl<string | null | undefined>(undefined),
			paymentChannelAccountNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(17)]),
			paymentChannelCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			paymentChannelCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			paymentChannelIban: new FormControl<string | null | undefined>(undefined, [Validators.minLength(15), Validators.maxLength(34), Validators.pattern('^[A-Za-z0-9]+$')]),
			paymentChannelRoutingNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(9), Validators.maxLength(9)]),
			remoteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			type: new FormControl<CreatePayeeV4Type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePayeesCSVResponseV3 {
		batchId?: string | null;
		rejectedCsvRows?: Array<CreatePayeesCSVResponseV3_rejectedCsvRows>;
	}
	export interface CreatePayeesCSVResponseV3FormProperties {
		batchId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePayeesCSVResponseV3FormGroup() {
		return new FormGroup<CreatePayeesCSVResponseV3FormProperties>({
			batchId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePayeesCSVResponseV3_rejectedCsvRows {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lineNumber?: number | null;
		message?: string | null;
		rejectedContent?: string | null;
	}
	export interface CreatePayeesCSVResponseV3_rejectedCsvRowsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		lineNumber: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
		rejectedContent: FormControl<string | null | undefined>,
	}
	export function CreateCreatePayeesCSVResponseV3_rejectedCsvRowsFormGroup() {
		return new FormGroup<CreatePayeesCSVResponseV3_rejectedCsvRowsFormProperties>({
			lineNumber: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			rejectedContent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePayeesCSVResponseV4 {
		batchId?: string | null;
		rejectedCsvRows?: Array<CreatePayeesCSVResponseV3_rejectedCsvRows>;
	}
	export interface CreatePayeesCSVResponseV4FormProperties {
		batchId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePayeesCSVResponseV4FormGroup() {
		return new FormGroup<CreatePayeesCSVResponseV4FormProperties>({
			batchId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePayeesRequestV3 {

		/** Required */
		payees: Array<CreatePayeeV3>;

		/** Required */
		payorId: string;
	}
	export interface CreatePayeesRequestV3FormProperties {

		/** Required */
		payorId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePayeesRequestV3FormGroup() {
		return new FormGroup<CreatePayeesRequestV3FormProperties>({
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePayeesRequestV4 {

		/** Required */
		payees: Array<CreatePayeeV4>;

		/** Required */
		payorId: string;
	}
	export interface CreatePayeesRequestV4FormProperties {

		/** Required */
		payorId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePayeesRequestV4FormGroup() {
		return new FormGroup<CreatePayeesRequestV4FormProperties>({
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePayorLinkRequest {

		/** Required */
		fromPayorId: string;

		/** Required */
		linkType: CreatePayorLinkRequestLinkType;

		/** Required */
		toPayorId: string;
	}
	export interface CreatePayorLinkRequestFormProperties {

		/** Required */
		fromPayorId: FormControl<string | null | undefined>,

		/** Required */
		linkType: FormControl<CreatePayorLinkRequestLinkType | null | undefined>,

		/** Required */
		toPayorId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePayorLinkRequestFormGroup() {
		return new FormGroup<CreatePayorLinkRequestFormProperties>({
			fromPayorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkType: new FormControl<CreatePayorLinkRequestLinkType | null | undefined>(undefined, [Validators.required]),
			toPayorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreatePayorLinkRequestLinkType { PARENT_OF = 'PARENT_OF' }

	export interface CreatePayoutRequestV3 {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2000
		 */
		payments: Array<PaymentInstructionV3>;

		/**
		 * <p>The id of the payor whose source account(s) will be debited</p>
		 * <p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p>
		 */
		payoutFromPayorId?: string | null;

		/**
		 * <p>Text applied to all payment memos unless specified explicitly on a payment</p>
		 * <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>
		 * Max length: 40
		 */
		payoutMemo?: string | null;

		/**
		 * <p>The id of the payor whose payees will be paid</p>
		 * <p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p>
		 */
		payoutToPayorId?: string | null;
	}
	export interface CreatePayoutRequestV3FormProperties {

		/**
		 * <p>The id of the payor whose source account(s) will be debited</p>
		 * <p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p>
		 */
		payoutFromPayorId: FormControl<string | null | undefined>,

		/**
		 * <p>Text applied to all payment memos unless specified explicitly on a payment</p>
		 * <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>
		 * Max length: 40
		 */
		payoutMemo: FormControl<string | null | undefined>,

		/**
		 * <p>The id of the payor whose payees will be paid</p>
		 * <p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p>
		 */
		payoutToPayorId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePayoutRequestV3FormGroup() {
		return new FormGroup<CreatePayoutRequestV3FormProperties>({
			payoutFromPayorId: new FormControl<string | null | undefined>(undefined),
			payoutMemo: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40)]),
			payoutToPayorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instruction for creating a payment */
	export interface PaymentInstructionV3 {

		/**
		 * <p>Amount to send to Payee</p>
		 * <p>The maximum payment amount is dependent on the currency</p>
		 * Required
		 * Minimum: 1
		 */
		amount: string;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: string;

		/**
		 * <p>Any value here will override the memo value in the parent payout</p>
		 * <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>
		 * Min length: 0
		 * Max length: 40
		 */
		paymentMemo?: string | null;

		/**
		 * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>
		 * <p>The structure of the data will be dictated by the requirements of the payment rails</p>
		 * Min length: 0
		 * Max length: 512
		 */
		paymentMetadata?: string | null;

		/**
		 * A reference identifier for the payor for the given payee payment
		 * Min length: 0
		 * Max length: 40
		 */
		payorPaymentId?: string | null;

		/**
		 * Your identifier for the payee
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: string;

		/**
		 * <p>The identifier for the remote payments system if not Velo</p>
		 * <p>Should only be used after consultation with Velo Payments</p>
		 * Min length: 1
		 * Max length: 100
		 */
		remoteSystemId?: string | null;

		/**
		 * Must match a valid source account name belonging to the payor
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		sourceAccountName: string;

		/** Optionally choose a specific transmission method for the payment */
		transmissionType?: PaymentInstructionV3TransmissionType | null;
	}

	/** Instruction for creating a payment */
	export interface PaymentInstructionV3FormProperties {

		/**
		 * <p>Amount to send to Payee</p>
		 * <p>The maximum payment amount is dependent on the currency</p>
		 * Required
		 * Minimum: 1
		 */
		amount: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * <p>Any value here will override the memo value in the parent payout</p>
		 * <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>
		 * Min length: 0
		 * Max length: 40
		 */
		paymentMemo: FormControl<string | null | undefined>,

		/**
		 * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>
		 * <p>The structure of the data will be dictated by the requirements of the payment rails</p>
		 * Min length: 0
		 * Max length: 512
		 */
		paymentMetadata: FormControl<string | null | undefined>,

		/**
		 * A reference identifier for the payor for the given payee payment
		 * Min length: 0
		 * Max length: 40
		 */
		payorPaymentId: FormControl<string | null | undefined>,

		/**
		 * Your identifier for the payee
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier for the remote payments system if not Velo</p>
		 * <p>Should only be used after consultation with Velo Payments</p>
		 * Min length: 1
		 * Max length: 100
		 */
		remoteSystemId: FormControl<string | null | undefined>,

		/**
		 * Must match a valid source account name belonging to the payor
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		sourceAccountName: FormControl<string | null | undefined>,

		/** Optionally choose a specific transmission method for the payment */
		transmissionType: FormControl<PaymentInstructionV3TransmissionType | null | undefined>,
	}
	export function CreatePaymentInstructionV3FormGroup() {
		return new FormGroup<PaymentInstructionV3FormProperties>({
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			paymentMemo: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(40)]),
			paymentMetadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
			payorPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(40)]),
			remoteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			remoteSystemId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			sourceAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64)]),
			transmissionType: new FormControl<PaymentInstructionV3TransmissionType | null | undefined>(undefined),
		});

	}

	export enum PaymentInstructionV3TransmissionType { SAME_DAY_ACH = 'SAME_DAY_ACH', WIRE = 'WIRE', ACH = 'ACH', LOCAL = 'LOCAL', SWIFT = 'SWIFT' }

	export interface CreateWebhookRequest {

		/**
		 * the authorization header to include with the notification.
		 * Min length: 4
		 * Max length: 1000
		 */
		authorizationHeader?: string | null;

		/** the categories to enable. */
		categories?: Array<Category>;

		/**
		 * whether the webhook is enabled.
		 * Required
		 */
		enabled: boolean;

		/** Required */
		payorId: string;

		/**
		 * the webhook URL to use.
		 * Required
		 * Min length: 6
		 * Max length: 2000
		 */
		webhookUrl: string;
	}
	export interface CreateWebhookRequestFormProperties {

		/**
		 * the authorization header to include with the notification.
		 * Min length: 4
		 * Max length: 1000
		 */
		authorizationHeader: FormControl<string | null | undefined>,

		/**
		 * whether the webhook is enabled.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/** Required */
		payorId: FormControl<string | null | undefined>,

		/**
		 * the webhook URL to use.
		 * Required
		 * Min length: 6
		 * Max length: 2000
		 */
		webhookUrl: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebhookRequestFormGroup() {
		return new FormGroup<CreateWebhookRequestFormProperties>({
			authorizationHeader: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(1000), Validators.pattern('.*')]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhookUrl: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(6), Validators.maxLength(2000)]),
		});

	}


	/** Base type for all Debit Events */
	export interface DebitEvent extends SourceEvent {

		/**
		 * ID of this debit transaction within the Velo platform
		 * Required
		 */
		debitTransactionId: string;
	}

	/** Base type for all Debit Events */
	export interface DebitEventFormProperties extends SourceEventFormProperties {

		/**
		 * ID of this debit transaction within the Velo platform
		 * Required
		 */
		debitTransactionId: FormControl<string | null | undefined>,
	}
	export function CreateDebitEventFormGroup() {
		return new FormGroup<DebitEventFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			debitTransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DebitEvent_allOf {

		/**
		 * ID of this debit transaction within the Velo platform
		 * Required
		 */
		debitTransactionId: string;
	}
	export interface DebitEvent_allOfFormProperties {

		/**
		 * ID of this debit transaction within the Velo platform
		 * Required
		 */
		debitTransactionId: FormControl<string | null | undefined>,
	}
	export function CreateDebitEvent_allOfFormGroup() {
		return new FormGroup<DebitEvent_allOfFormProperties>({
			debitTransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Base type for all debit status changed events */
	export interface DebitStatusChanged extends DebitEvent {

		/**
		 * The new status of the debit. One of "PENDING" "PROCESSING" "REJECTED" "RELEASED"
		 * Required
		 */
		status: string;
	}

	/** Base type for all debit status changed events */
	export interface DebitStatusChangedFormProperties extends DebitEventFormProperties {

		/**
		 * The new status of the debit. One of "PENDING" "PROCESSING" "REJECTED" "RELEASED"
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateDebitStatusChangedFormGroup() {
		return new FormGroup<DebitStatusChangedFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			debitTransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DebitStatusChanged_allOf {

		/**
		 * The new status of the debit. One of "PENDING" "PROCESSING" "REJECTED" "RELEASED"
		 * Required
		 */
		status: string;
	}
	export interface DebitStatusChanged_allOfFormProperties {

		/**
		 * The new status of the debit. One of "PENDING" "PROCESSING" "REJECTED" "RELEASED"
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateDebitStatusChanged_allOfFormGroup() {
		return new FormGroup<DebitStatusChanged_allOfFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/** Unique numeric code that can be used for switching client behavior or to drive translated or customised error messages */
		errorCode?: string | null;
		errorData?: ErrorData;

		/** English language message indicating the nature of the error */
		errorMessage?: string | null;
		localisationDetails?: LocalisationDetails;

		/** the property or object that caused the error */
		location?: string | null;

		/**
		 * the location type in the request that was the cause of the error
		 */
		locationType?: ErrorLocationType | null;

		/** a camel-cased string that can be used by clients to localise client error messages (deprecated) */
		reasonCode?: string | null;
	}
	export interface ErrorFormProperties {

		/** Unique numeric code that can be used for switching client behavior or to drive translated or customised error messages */
		errorCode: FormControl<string | null | undefined>,

		/** English language message indicating the nature of the error */
		errorMessage: FormControl<string | null | undefined>,

		/** the property or object that caused the error */
		location: FormControl<string | null | undefined>,

		/**
		 * the location type in the request that was the cause of the error
		 */
		locationType: FormControl<ErrorLocationType | null | undefined>,

		/** a camel-cased string that can be used by clients to localise client error messages (deprecated) */
		reasonCode: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			locationType: new FormControl<ErrorLocationType | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorData {

		/** Object containing typed error data specific to the API */
		content?: string | null;

		/** The description of the error data content */
		description?: string | null;
	}
	export interface ErrorDataFormProperties {

		/** Object containing typed error data specific to the API */
		content: FormControl<string | null | undefined>,

		/** The description of the error data content */
		description: FormControl<string | null | undefined>,
	}
	export function CreateErrorDataFormGroup() {
		return new FormGroup<ErrorDataFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocalisationDetails {

		/** name to value map containing any named parameters that appear in the message template */
		parameters?: {[id: string]: string };

		/** the English language message template used to construct the error message */
		template?: string | null;
	}
	export interface LocalisationDetailsFormProperties {

		/** name to value map containing any named parameters that appear in the message template */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** the English language message template used to construct the error message */
		template: FormControl<string | null | undefined>,
	}
	export function CreateLocalisationDetailsFormGroup() {
		return new FormGroup<LocalisationDetailsFormProperties>({
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorLocationType { requestBody = 'requestBody', queryParam = 'queryParam', requestParam = 'requestParam', header = 'header', pathParam = 'pathParam' }


	/** Error response returned by all error conditions in Velo Services */
	export interface ErrorResponse {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId?: string | null;

		/**
		 * one or more errors
		 * Minimum items: 1
		 */
		errors?: Array<Error>;

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode?: number | null;
	}

	/** Error response returned by all error conditions in Velo Services */
	export interface ErrorResponseFormProperties {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId: FormControl<string | null | undefined>,

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode: FormControl<number | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpStatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FailedPayeeV3 {
		address?: CreatePayeeAddressV3;
		challenge?: ChallengeV3;
		company?: CompanyV3;
		email?: string | null;
		individual?: CreateIndividualV3;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language?: string | null;
		payeeId?: string | null;
		paymentChannel?: CreatePaymentChannelV3;
		payorRefs?: Array<PayeePayorRefV3>;
		remoteId?: string | null;

		/** Type of Payee. One of the following values: Individual, Company */
		type?: string | null;
	}
	export interface FailedPayeeV3FormProperties {
		email: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language: FormControl<string | null | undefined>,
		payeeId: FormControl<string | null | undefined>,
		remoteId: FormControl<string | null | undefined>,

		/** Type of Payee. One of the following values: Individual, Company */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFailedPayeeV3FormGroup() {
		return new FormGroup<FailedPayeeV3FormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			payeeId: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FailedPayeeV4 {
		address?: CreatePayeeAddressV4;

		/**
		 * <p>Used to override the default challenge presented to the payee when they onboard</p>
		 * <p>Not used after the payee has onboarded</p>
		 */
		challenge?: ChallengeV4;
		company?: CompanyV4;
		email?: string | null;
		individual?: CreateIndividualV4;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language?: string | null;
		payeeId?: string | null;
		paymentChannel?: CreatePaymentChannelV4;
		payorRefs?: Array<PayeePayorRefV4>;
		remoteId?: string | null;

		/** Type of Payee. One of the following values: Individual, Company */
		type?: string | null;
	}
	export interface FailedPayeeV4FormProperties {
		email: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language: FormControl<string | null | undefined>,
		payeeId: FormControl<string | null | undefined>,
		remoteId: FormControl<string | null | undefined>,

		/** Type of Payee. One of the following values: Individual, Company */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFailedPayeeV4FormGroup() {
		return new FormGroup<FailedPayeeV4FormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			payeeId: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayeePayorRefV4 {
		invitationStatus?: string | null;

		/** The timestamp when the invitation status is updated */
		invitationStatusTimestamp?: Date | null;

		/** Indicates any conditions which prevent the payee from being payable for this payor */
		payableIssues?: Array<PayableIssueV4>;

		/** Indicates if the payee is payable for this payor */
		payableStatus?: boolean | null;
		paymentChannelId?: string | null;
		payorId?: string | null;
		remoteId?: string | null;
	}
	export interface PayeePayorRefV4FormProperties {
		invitationStatus: FormControl<string | null | undefined>,

		/** The timestamp when the invitation status is updated */
		invitationStatusTimestamp: FormControl<Date | null | undefined>,

		/** Indicates if the payee is payable for this payor */
		payableStatus: FormControl<boolean | null | undefined>,
		paymentChannelId: FormControl<string | null | undefined>,
		payorId: FormControl<string | null | undefined>,
		remoteId: FormControl<string | null | undefined>,
	}
	export function CreatePayeePayorRefV4FormGroup() {
		return new FormGroup<PayeePayorRefV4FormProperties>({
			invitationStatus: new FormControl<string | null | undefined>(undefined),
			invitationStatusTimestamp: new FormControl<Date | null | undefined>(undefined),
			payableStatus: new FormControl<boolean | null | undefined>(undefined),
			paymentChannelId: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** payable issues for the payee and payor combination */
	export interface PayableIssueV4 {

		/** Required */
		code: string;

		/** Required */
		message: string;
	}

	/** payable issues for the payee and payor combination */
	export interface PayableIssueV4FormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreatePayableIssueV4FormGroup() {
		return new FormGroup<PayableIssueV4FormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FailedSubmissionV3 {
		failedSubmission?: FailedPayeeV3;
		failureMessage?: string | null;
	}
	export interface FailedSubmissionV3FormProperties {
		failureMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedSubmissionV3FormGroup() {
		return new FormGroup<FailedSubmissionV3FormProperties>({
			failureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FailedSubmissionV4 {
		failedSubmission?: FailedPayeeV4;
		failureMessage?: string | null;
	}
	export interface FailedSubmissionV4FormProperties {
		failureMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedSubmissionV4FormGroup() {
		return new FormGroup<FailedSubmissionV4FormProperties>({
			failureMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FundingAccountResponseV2 {

		/** name on the bank account */
		accountName?: string | null;

		/** bank account number */
		accountNumber?: string | null;

		/** A flag for whether the funding account has been archived.  Only present in the response if true. */
		archived?: boolean | null;

		/**
		 * ISO 3166-1 2 letter country code (upper case)
		 * Min length: 2
		 * Max length: 2
		 */
		country?: string | null;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 3
		 * Max length: 3
		 */
		currency?: string | null;

		/** Funding Account Id */
		id?: string | null;

		/** name of funding account */
		name?: string | null;
		payorId?: string | null;

		/** bank account routing number */
		routingNumber?: string | null;

		/** Funding account type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE */
		type?: string | null;
	}
	export interface FundingAccountResponseV2FormProperties {

		/** name on the bank account */
		accountName: FormControl<string | null | undefined>,

		/** bank account number */
		accountNumber: FormControl<string | null | undefined>,

		/** A flag for whether the funding account has been archived.  Only present in the response if true. */
		archived: FormControl<boolean | null | undefined>,

		/**
		 * ISO 3166-1 2 letter country code (upper case)
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/** Funding Account Id */
		id: FormControl<string | null | undefined>,

		/** name of funding account */
		name: FormControl<string | null | undefined>,
		payorId: FormControl<string | null | undefined>,

		/** bank account routing number */
		routingNumber: FormControl<string | null | undefined>,

		/** Funding account type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFundingAccountResponseV2FormGroup() {
		return new FormGroup<FundingAccountResponseV2FormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			archived: new FormControl<boolean | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2)]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FundingAudit {

		/**
		 * The amount funded
		 * Type: double
		 */
		amount?: number | null;

		/** The currency of the funding */
		currency?: string | null;
		dateTime?: Date | null;
		events?: Array<FundingEvent>;
		fundingAccountName?: string | null;

		/** Funding type. One of the following values: ACH, WIRE, EMBEDDED, BANK_TRANSFER */
		fundingType?: string | null;
		sourceAccountName?: string | null;

		/** Status of the funding. One of the following values: PENDING, FAILED, CREDIT, DEBIT */
		status?: string | null;

		/** Type of top up. One of the following values: AUTOMATIC, MANUAL */
		topupType?: string | null;
	}
	export interface FundingAuditFormProperties {

		/**
		 * The amount funded
		 * Type: double
		 */
		amount: FormControl<number | null | undefined>,

		/** The currency of the funding */
		currency: FormControl<string | null | undefined>,
		dateTime: FormControl<Date | null | undefined>,
		fundingAccountName: FormControl<string | null | undefined>,

		/** Funding type. One of the following values: ACH, WIRE, EMBEDDED, BANK_TRANSFER */
		fundingType: FormControl<string | null | undefined>,
		sourceAccountName: FormControl<string | null | undefined>,

		/** Status of the funding. One of the following values: PENDING, FAILED, CREDIT, DEBIT */
		status: FormControl<string | null | undefined>,

		/** Type of top up. One of the following values: AUTOMATIC, MANUAL */
		topupType: FormControl<string | null | undefined>,
	}
	export function CreateFundingAuditFormGroup() {
		return new FormGroup<FundingAuditFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			dateTime: new FormControl<Date | null | undefined>(undefined),
			fundingAccountName: new FormControl<string | null | undefined>(undefined),
			fundingType: new FormControl<string | null | undefined>(undefined),
			sourceAccountName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			topupType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FundingEvent {
		eventDateTime?: Date | null;
		eventId?: string | null;

		/** Funding event type. One of the following values: PAYOR_FUNDING_DETECTED, PAYOR_FUNDING_REQUESTED, PAYOR_FUNDING_RETURN_RECEIVED, FUNDING_RETURN_DETECTED, PAYOR_FUNDING_REQUEST_SUBMITTED, PAYOR_FUNDING_ENTRY_DETAIL_RECEIVED, FUNDING_DEALLOCATED */
		fundingEventType?: string | null;
		principal?: string | null;
	}
	export interface FundingEventFormProperties {
		eventDateTime: FormControl<Date | null | undefined>,
		eventId: FormControl<string | null | undefined>,

		/** Funding event type. One of the following values: PAYOR_FUNDING_DETECTED, PAYOR_FUNDING_REQUESTED, PAYOR_FUNDING_RETURN_RECEIVED, FUNDING_RETURN_DETECTED, PAYOR_FUNDING_REQUEST_SUBMITTED, PAYOR_FUNDING_ENTRY_DETAIL_RECEIVED, FUNDING_DEALLOCATED */
		fundingEventType: FormControl<string | null | undefined>,
		principal: FormControl<string | null | undefined>,
	}
	export function CreateFundingEventFormGroup() {
		return new FormGroup<FundingEventFormProperties>({
			eventDateTime: new FormControl<Date | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
			fundingEventType: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FundingPayorStatusAuditResponse {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		amount?: string | null;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 3
		 * Max length: 3
		 */
		currency?: string | null;
		fundingId?: string | null;
		status?: string | null;
	}
	export interface FundingPayorStatusAuditResponseFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		amount: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,
		fundingId: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateFundingPayorStatusAuditResponseFormGroup() {
		return new FormGroup<FundingPayorStatusAuditResponseFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			fundingId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FundingRequestV2 {

		/**
		 * Amount to fund, decimal implied
		 * Required
		 * Minimum: 1
		 * Maximum: 9999999999
		 */
		amount: string;
	}
	export interface FundingRequestV2FormProperties {

		/**
		 * Amount to fund, decimal implied
		 * Required
		 * Minimum: 1
		 * Maximum: 9999999999
		 */
		amount: FormControl<string | null | undefined>,
	}
	export function CreateFundingRequestV2FormGroup() {
		return new FormGroup<FundingRequestV2FormProperties>({
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(9999999999)]),
		});

	}

	export interface FundingRequestV3 {

		/**
		 * Amount to fund in minor units
		 * Required
		 * Minimum: 1
		 * Maximum: 9999999999
		 */
		amount: string;

		/**
		 * The funding account id
		 * Required
		 */
		fundingAccountId: string;
	}
	export interface FundingRequestV3FormProperties {

		/**
		 * Amount to fund in minor units
		 * Required
		 * Minimum: 1
		 * Maximum: 9999999999
		 */
		amount: FormControl<string | null | undefined>,

		/**
		 * The funding account id
		 * Required
		 */
		fundingAccountId: FormControl<string | null | undefined>,
	}
	export function CreateFundingRequestV3FormGroup() {
		return new FormGroup<FundingRequestV3FormProperties>({
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(9999999999)]),
			fundingAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FundingResponse {

		/** Required */
		allocationDate: Date;

		/** Funding Allocation Type. One of the following values: AUTOMATIC, MANUAL */
		allocationType?: string | null;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		amount: string;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: string;
		detectedFundingRef?: string | null;

		/**
		 * Funding Account Type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE
		 * Required
		 */
		fundingAccountType: string;

		/** Required */
		fundingId: string;
		hiddenDate?: Date | null;

		/** Required */
		payorId: string;
		physicalAccountName?: string | null;
		reason?: string | null;
		sourceAccountId?: string | null;

		/**
		 * Current status of the funding. One of the follwing values: PENDING, UNALLOCATED, ALLOCATED, HIDDEN, RETURNED, RETURNING, BULK_RETURN, OTHER
		 * Required
		 */
		status: string;
		text?: string | null;
	}
	export interface FundingResponseFormProperties {

		/** Required */
		allocationDate: FormControl<Date | null | undefined>,

		/** Funding Allocation Type. One of the following values: AUTOMATIC, MANUAL */
		allocationType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		amount: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,
		detectedFundingRef: FormControl<string | null | undefined>,

		/**
		 * Funding Account Type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE
		 * Required
		 */
		fundingAccountType: FormControl<string | null | undefined>,

		/** Required */
		fundingId: FormControl<string | null | undefined>,
		hiddenDate: FormControl<Date | null | undefined>,

		/** Required */
		payorId: FormControl<string | null | undefined>,
		physicalAccountName: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		sourceAccountId: FormControl<string | null | undefined>,

		/**
		 * Current status of the funding. One of the follwing values: PENDING, UNALLOCATED, ALLOCATED, HIDDEN, RETURNED, RETURNING, BULK_RETURN, OTHER
		 * Required
		 */
		status: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateFundingResponseFormGroup() {
		return new FormGroup<FundingResponseFormProperties>({
			allocationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			allocationType: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			detectedFundingRef: new FormControl<string | null | undefined>(undefined),
			fundingAccountType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fundingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hiddenDate: new FormControl<Date | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			physicalAccountName: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			sourceAccountId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FxSummary {

		/** Required */
		creationDateTime: Date;

		/**
		 * Current status of the funding. One of the following values: FUNDED, INSTRUCTED, UNFUNDED
		 * Required
		 */
		fundingStatus: string;

		/**
		 * Required
		 * Type: double
		 */
		invertedRate: number;

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency?: string | null;

		/** Required */
		quoteId: string;

		/**
		 * Required
		 * Type: double
		 */
		rate: number;

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency?: string | null;

		/**
		 * Current status of the FX Summary. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED
		 * Required
		 */
		status: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCost: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPaymentAmount: number;
	}
	export interface FxSummaryFormProperties {

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Current status of the funding. One of the following values: FUNDED, INSTRUCTED, UNFUNDED
		 * Required
		 */
		fundingStatus: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		invertedRate: FormControl<number | null | undefined>,

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency: FormControl<string | null | undefined>,

		/** Required */
		quoteId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		rate: FormControl<number | null | undefined>,

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency: FormControl<string | null | undefined>,

		/**
		 * Current status of the FX Summary. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCost: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPaymentAmount: FormControl<number | null | undefined>,
	}
	export function CreateFxSummaryFormGroup() {
		return new FormGroup<FxSummaryFormProperties>({
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			fundingStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invertedRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			quoteId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sourceCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalCost: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalPaymentAmount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FxSummaryV3 {

		/** Required */
		creationDateTime: Date;

		/**
		 * Current status of the funding. One of the following values: FUNDED, INSTRUCTED, UNFUNDED
		 * Required
		 */
		fundingStatus: string;

		/**
		 * Required
		 * Type: float
		 */
		invertedRate: number;

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency?: string | null;

		/** Required */
		quoteId: string;

		/**
		 * Required
		 * Type: float
		 */
		rate: number;

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency?: string | null;

		/**
		 * Current status of the FX Summary. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED
		 * Required
		 */
		status: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCost: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPaymentAmount: number;
	}
	export interface FxSummaryV3FormProperties {

		/** Required */
		creationDateTime: FormControl<Date | null | undefined>,

		/**
		 * Current status of the funding. One of the following values: FUNDED, INSTRUCTED, UNFUNDED
		 * Required
		 */
		fundingStatus: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: float
		 */
		invertedRate: FormControl<number | null | undefined>,

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency: FormControl<string | null | undefined>,

		/** Required */
		quoteId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: float
		 */
		rate: FormControl<number | null | undefined>,

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency: FormControl<string | null | undefined>,

		/**
		 * Current status of the FX Summary. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCost: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPaymentAmount: FormControl<number | null | undefined>,
	}
	export function CreateFxSummaryV3FormGroup() {
		return new FormGroup<FxSummaryV3FormProperties>({
			creationDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			fundingStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invertedRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			quoteId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sourceCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalCost: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalPaymentAmount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List Users Response Object */
	export interface GetFundingsResponse {
		content?: Array<FundingAudit>;
		links?: Array<GetFundingsResponse_links>;
		page?: PagedUserResponse_page;
	}

	/** List Users Response Object */
	export interface GetFundingsResponseFormProperties {
	}
	export function CreateGetFundingsResponseFormGroup() {
		return new FormGroup<GetFundingsResponseFormProperties>({
		});

	}

	export interface GetFundingsResponse_links {
		href?: string | null;
		rel?: string | null;
	}
	export interface GetFundingsResponse_linksFormProperties {
		href: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreateGetFundingsResponse_linksFormGroup() {
		return new FormGroup<GetFundingsResponse_linksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPayeeListResponseCompanyV3 {

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		name?: string | null;

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		operatingName?: string | null;
	}
	export interface GetPayeeListResponseCompanyV3FormProperties {

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		operatingName: FormControl<string | null | undefined>,
	}
	export function CreateGetPayeeListResponseCompanyV3FormGroup() {
		return new FormGroup<GetPayeeListResponseCompanyV3FormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			operatingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface GetPayeeListResponseCompanyV4 {

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		name?: string | null;

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		operatingName?: string | null;
	}
	export interface GetPayeeListResponseCompanyV4FormProperties {

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 100
		 */
		operatingName: FormControl<string | null | undefined>,
	}
	export function CreateGetPayeeListResponseCompanyV4FormGroup() {
		return new FormGroup<GetPayeeListResponseCompanyV4FormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			operatingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface GetPayeeListResponseIndividualV3 {
		name?: NameV3;
	}
	export interface GetPayeeListResponseIndividualV3FormProperties {
	}
	export function CreateGetPayeeListResponseIndividualV3FormGroup() {
		return new FormGroup<GetPayeeListResponseIndividualV3FormProperties>({
		});

	}

	export interface NameV3 {

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		firstName?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		lastName?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		otherNames?: string | null;

		/**
		 * Min length: 1
		 * Max length: 10
		 */
		title?: string | null;
	}
	export interface NameV3FormProperties {

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		otherNames: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 10
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateNameV3FormGroup() {
		return new FormGroup<NameV3FormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			otherNames: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10)]),
		});

	}

	export interface GetPayeeListResponseIndividualV4 {
		name?: NameV4;
	}
	export interface GetPayeeListResponseIndividualV4FormProperties {
	}
	export function CreateGetPayeeListResponseIndividualV4FormGroup() {
		return new FormGroup<GetPayeeListResponseIndividualV4FormProperties>({
		});

	}

	export interface NameV4 {

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		firstName?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		lastName?: string | null;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		otherNames?: string | null;

		/**
		 * Min length: 1
		 * Max length: 10
		 */
		title?: string | null;
	}
	export interface NameV4FormProperties {

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		otherNames: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 10
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateNameV4FormGroup() {
		return new FormGroup<NameV4FormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			otherNames: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10)]),
		});

	}

	export interface GetPayeeListResponseV3 {
		company?: GetPayeeListResponseCompanyV3;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		country?: string | null;
		created?: Date | null;
		disabled?: boolean | null;
		disabledComment?: string | null;
		disabledUpdatedTimestamp?: Date | null;
		displayName?: string | null;
		email?: string | null;
		individual?: GetPayeeListResponseIndividualV3;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language?: string | null;

		/** Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus?: string | null;
		payeeId?: string | null;

		/** Type of Payee. One of the following values: Individual, Company */
		payeeType?: string | null;
		payorRefs?: Array<PayeePayorRefV3>;
		watchlistOverrideComment?: string | null;

		/** Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED */
		watchlistStatus?: string | null;
		watchlistStatusUpdatedTimestamp?: string | null;
	}
	export interface GetPayeeListResponseV3FormProperties {

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		disabledComment: FormControl<string | null | undefined>,
		disabledUpdatedTimestamp: FormControl<Date | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language: FormControl<string | null | undefined>,

		/** Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus: FormControl<string | null | undefined>,
		payeeId: FormControl<string | null | undefined>,

		/** Type of Payee. One of the following values: Individual, Company */
		payeeType: FormControl<string | null | undefined>,
		watchlistOverrideComment: FormControl<string | null | undefined>,

		/** Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED */
		watchlistStatus: FormControl<string | null | undefined>,
		watchlistStatusUpdatedTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateGetPayeeListResponseV3FormGroup() {
		return new FormGroup<GetPayeeListResponseV3FormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			created: new FormControl<Date | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			disabledComment: new FormControl<string | null | undefined>(undefined),
			disabledUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			onboardedStatus: new FormControl<string | null | undefined>(undefined),
			payeeId: new FormControl<string | null | undefined>(undefined),
			payeeType: new FormControl<string | null | undefined>(undefined),
			watchlistOverrideComment: new FormControl<string | null | undefined>(undefined),
			watchlistStatus: new FormControl<string | null | undefined>(undefined),
			watchlistStatusUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPayeeListResponseV4 {
		company?: GetPayeeListResponseCompanyV4;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		country?: string | null;
		created?: Date | null;
		disabled?: boolean | null;
		disabledComment?: string | null;
		disabledUpdatedTimestamp?: Date | null;
		displayName?: string | null;
		email?: string | null;
		individual?: GetPayeeListResponseIndividualV4;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language?: string | null;

		/** Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus?: string | null;
		payeeId?: string | null;

		/** Type of Payee. One of the following values: Individual, Company */
		payeeType?: string | null;
		payorRefs?: Array<PayeePayorRefV4>;
		watchlistOverrideComment?: string | null;

		/** Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED */
		watchlistStatus?: string | null;
		watchlistStatusUpdatedTimestamp?: string | null;
	}
	export interface GetPayeeListResponseV4FormProperties {

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		disabledComment: FormControl<string | null | undefined>,
		disabledUpdatedTimestamp: FormControl<Date | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language: FormControl<string | null | undefined>,

		/** Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus: FormControl<string | null | undefined>,
		payeeId: FormControl<string | null | undefined>,

		/** Type of Payee. One of the following values: Individual, Company */
		payeeType: FormControl<string | null | undefined>,
		watchlistOverrideComment: FormControl<string | null | undefined>,

		/** Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED */
		watchlistStatus: FormControl<string | null | undefined>,
		watchlistStatusUpdatedTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateGetPayeeListResponseV4FormGroup() {
		return new FormGroup<GetPayeeListResponseV4FormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			created: new FormControl<Date | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			disabledComment: new FormControl<string | null | undefined>(undefined),
			disabledUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			onboardedStatus: new FormControl<string | null | undefined>(undefined),
			payeeId: new FormControl<string | null | undefined>(undefined),
			payeeType: new FormControl<string | null | undefined>(undefined),
			watchlistOverrideComment: new FormControl<string | null | undefined>(undefined),
			watchlistStatus: new FormControl<string | null | undefined>(undefined),
			watchlistStatusUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List Payments for payout */
	export interface GetPaymentsForPayoutResponseV3 {
		content?: Array<PaymentResponseV3>;
		links?: Array<GetPayoutsResponseV3_links>;
		page?: GetPaymentsForPayoutResponseV3_page;
		summary?: GetPaymentsForPayoutResponseV3_summary;
	}

	/** List Payments for payout */
	export interface GetPaymentsForPayoutResponseV3FormProperties {
	}
	export function CreateGetPaymentsForPayoutResponseV3FormGroup() {
		return new FormGroup<GetPaymentsForPayoutResponseV3FormProperties>({
		});

	}

	export interface PaymentResponseV3 {
		accountName?: string | null;

		/** The account number for the account which will receive the payment. */
		accountNumber?: string | null;

		/** The country code of the payment channel. */
		countryCode?: string | null;

		/** Required */
		events: Array<PaymentEventResponseV3>;

		/** ACH file payment was submitted in, if applicable */
		filenameReference?: string | null;

		/**
		 * The funding status of the payment. One of the following values: [FUNDED, INSTRUCTED, UNFUNDED
		 * Required
		 */
		fundingStatus: string;

		/** The iban for the payment. */
		iban?: string | null;

		/** Individual Identification Number assigned to the payment in the ACH file, if applicable */
		individualIdentificationNumber?: string | null;

		/**
		 * The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
		 * Type: float
		 */
		invertedRate?: number | null;

		/**
		 * The id of the paymeee
		 * Required
		 */
		payeeId: string;

		/**
		 * The amount which the payee will receive
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentAmount: number;
		paymentChannelId?: string | null;
		paymentChannelName?: string | null;

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency?: string | null;

		/**
		 * The id of the payment
		 * Required
		 */
		paymentId: string;

		/** The payment memo set by the payor */
		paymentMemo?: string | null;
		paymentScheme?: string | null;

		/**
		 * The id of the payor
		 * Required
		 */
		payorId: string;

		/** The name of the payor */
		payorName?: string | null;
		payorPaymentId?: string | null;

		/**
		 * The quote Id used for the FX
		 * Required
		 */
		quoteId: string;
		railsBatchId?: string | null;

		/**
		 * The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
		 * Required
		 */
		railsId: string;
		railsPaymentId?: string | null;

		/**
		 * The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
		 * Type: float
		 */
		rate?: number | null;
		rejectionReason?: string | null;

		/** The remote id by which the payor refers to the payee. Only populated once payment is confirmed */
		remoteId?: string | null;

		/**
		 * The return cost if a returned payment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		returnCost?: number | null;
		returnReason?: string | null;

		/** The routing number for the payment. */
		routingNumber?: string | null;

		/**
		 * The id of the source account from which the payment was taken
		 * Required
		 */
		sourceAccountId: string;

		/** The name of the source account from which the payment was taken */
		sourceAccountName?: string | null;

		/**
		 * The source amount for the payment (amount debited to make the payment)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sourceAmount?: number | null;

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency?: string | null;

		/**
		 * Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, WITHDRAWN
		 * Required
		 */
		status: string;

		/** Required */
		submittedDateTime: Date;

		/** Trace Number assigned to the payment in the ACH file, if applicable */
		traceNumber?: string | null;
	}
	export interface PaymentResponseV3FormProperties {
		accountName: FormControl<string | null | undefined>,

		/** The account number for the account which will receive the payment. */
		accountNumber: FormControl<string | null | undefined>,

		/** The country code of the payment channel. */
		countryCode: FormControl<string | null | undefined>,

		/** ACH file payment was submitted in, if applicable */
		filenameReference: FormControl<string | null | undefined>,

		/**
		 * The funding status of the payment. One of the following values: [FUNDED, INSTRUCTED, UNFUNDED
		 * Required
		 */
		fundingStatus: FormControl<string | null | undefined>,

		/** The iban for the payment. */
		iban: FormControl<string | null | undefined>,

		/** Individual Identification Number assigned to the payment in the ACH file, if applicable */
		individualIdentificationNumber: FormControl<string | null | undefined>,

		/**
		 * The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
		 * Type: float
		 */
		invertedRate: FormControl<number | null | undefined>,

		/**
		 * The id of the paymeee
		 * Required
		 */
		payeeId: FormControl<string | null | undefined>,

		/**
		 * The amount which the payee will receive
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentAmount: FormControl<number | null | undefined>,
		paymentChannelId: FormControl<string | null | undefined>,
		paymentChannelName: FormControl<string | null | undefined>,

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency: FormControl<string | null | undefined>,

		/**
		 * The id of the payment
		 * Required
		 */
		paymentId: FormControl<string | null | undefined>,

		/** The payment memo set by the payor */
		paymentMemo: FormControl<string | null | undefined>,
		paymentScheme: FormControl<string | null | undefined>,

		/**
		 * The id of the payor
		 * Required
		 */
		payorId: FormControl<string | null | undefined>,

		/** The name of the payor */
		payorName: FormControl<string | null | undefined>,
		payorPaymentId: FormControl<string | null | undefined>,

		/**
		 * The quote Id used for the FX
		 * Required
		 */
		quoteId: FormControl<string | null | undefined>,
		railsBatchId: FormControl<string | null | undefined>,

		/**
		 * The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
		 * Required
		 */
		railsId: FormControl<string | null | undefined>,
		railsPaymentId: FormControl<string | null | undefined>,

		/**
		 * The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
		 * Type: float
		 */
		rate: FormControl<number | null | undefined>,
		rejectionReason: FormControl<string | null | undefined>,

		/** The remote id by which the payor refers to the payee. Only populated once payment is confirmed */
		remoteId: FormControl<string | null | undefined>,

		/**
		 * The return cost if a returned payment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		returnCost: FormControl<number | null | undefined>,
		returnReason: FormControl<string | null | undefined>,

		/** The routing number for the payment. */
		routingNumber: FormControl<string | null | undefined>,

		/**
		 * The id of the source account from which the payment was taken
		 * Required
		 */
		sourceAccountId: FormControl<string | null | undefined>,

		/** The name of the source account from which the payment was taken */
		sourceAccountName: FormControl<string | null | undefined>,

		/**
		 * The source amount for the payment (amount debited to make the payment)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sourceAmount: FormControl<number | null | undefined>,

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency: FormControl<string | null | undefined>,

		/**
		 * Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, WITHDRAWN
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Required */
		submittedDateTime: FormControl<Date | null | undefined>,

		/** Trace Number assigned to the payment in the ACH file, if applicable */
		traceNumber: FormControl<string | null | undefined>,
	}
	export function CreatePaymentResponseV3FormGroup() {
		return new FormGroup<PaymentResponseV3FormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			filenameReference: new FormControl<string | null | undefined>(undefined),
			fundingStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iban: new FormControl<string | null | undefined>(undefined),
			individualIdentificationNumber: new FormControl<string | null | undefined>(undefined),
			invertedRate: new FormControl<number | null | undefined>(undefined),
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentAmount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentChannelId: new FormControl<string | null | undefined>(undefined),
			paymentChannelName: new FormControl<string | null | undefined>(undefined),
			paymentCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			paymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentMemo: new FormControl<string | null | undefined>(undefined),
			paymentScheme: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorName: new FormControl<string | null | undefined>(undefined),
			payorPaymentId: new FormControl<string | null | undefined>(undefined),
			quoteId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			railsBatchId: new FormControl<string | null | undefined>(undefined),
			railsId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			railsPaymentId: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			rejectionReason: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined),
			returnCost: new FormControl<number | null | undefined>(undefined),
			returnReason: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined),
			sourceAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceAccountName: new FormControl<string | null | undefined>(undefined),
			sourceAmount: new FormControl<number | null | undefined>(undefined),
			sourceCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			submittedDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			traceNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentEventResponseV3 {
		accountName?: string | null;

		/** The account number attached to the event. */
		accountNumber?: string | null;

		/**
		 * The date/time at which the event occurred.
		 * Required
		 */
		eventDateTime: Date;

		/**
		 * The id of the event.
		 * Required
		 */
		eventId: string;

		/**
		 * The type of the event. One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN
		 * Required
		 */
		eventType: string;
		iban?: string | null;

		/**
		 * The destination amount exposed by the event.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		paymentAmount?: string | null;

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency?: string | null;
		principal?: string | null;

		/** The routing number attached to the event. */
		routingNumber?: string | null;

		/**
		 * The source amount exposed by the event.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sourceAmount?: string | null;

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency?: string | null;
	}
	export interface PaymentEventResponseV3FormProperties {
		accountName: FormControl<string | null | undefined>,

		/** The account number attached to the event. */
		accountNumber: FormControl<string | null | undefined>,

		/**
		 * The date/time at which the event occurred.
		 * Required
		 */
		eventDateTime: FormControl<Date | null | undefined>,

		/**
		 * The id of the event.
		 * Required
		 */
		eventId: FormControl<string | null | undefined>,

		/**
		 * The type of the event. One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN
		 * Required
		 */
		eventType: FormControl<string | null | undefined>,
		iban: FormControl<string | null | undefined>,

		/**
		 * The destination amount exposed by the event.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		paymentAmount: FormControl<string | null | undefined>,

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency: FormControl<string | null | undefined>,
		principal: FormControl<string | null | undefined>,

		/** The routing number attached to the event. */
		routingNumber: FormControl<string | null | undefined>,

		/**
		 * The source amount exposed by the event.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sourceAmount: FormControl<string | null | undefined>,

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency: FormControl<string | null | undefined>,
	}
	export function CreatePaymentEventResponseV3FormGroup() {
		return new FormGroup<PaymentEventResponseV3FormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			eventDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iban: new FormControl<string | null | undefined>(undefined),
			paymentAmount: new FormControl<string | null | undefined>(undefined),
			paymentCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			principal: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined),
			sourceAmount: new FormControl<string | null | undefined>(undefined),
			sourceCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
		});

	}

	export interface GetPayoutsResponseV3_links {
		href?: string | null;
		rel?: string | null;
	}
	export interface GetPayoutsResponseV3_linksFormProperties {
		href: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreateGetPayoutsResponseV3_linksFormGroup() {
		return new FormGroup<GetPayoutsResponseV3_linksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPaymentsForPayoutResponseV3_page {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages?: number | null;
	}
	export interface GetPaymentsForPayoutResponseV3_pageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateGetPaymentsForPayoutResponseV3_pageFormGroup() {
		return new FormGroup<GetPaymentsForPayoutResponseV3_pageFormProperties>({
			numberOfElements: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetPaymentsForPayoutResponseV3_summary {

		/**
		 * The count of payments within the payout which have been confirmed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		confirmedPayments?: number | null;

		/**
		 * The count of payments within the payout which have failed or been returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failedPayments?: number | null;

		/**
		 * The count of payments within the payout which are incomplete.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		incompletePayments?: number | null;

		/** The date/time at which the payout was instructed. */
		instructedDateTime?: Date | null;

		/** The memo attached to the payout. */
		payoutMemo?: string | null;

		/** The current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN */
		payoutStatus?: string | null;

		/**
		 * The count of payments within the payout which have been released.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		releasedPayments?: number | null;

		/** The date/time at which the payout was submitted. */
		submittedDateTime?: Date | null;

		/**
		 * The count of payments within the payout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPayments?: number | null;

		/** The date/time at which the payout was withdrawn. */
		withdrawnDateTime?: Date | null;
	}
	export interface GetPaymentsForPayoutResponseV3_summaryFormProperties {

		/**
		 * The count of payments within the payout which have been confirmed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		confirmedPayments: FormControl<number | null | undefined>,

		/**
		 * The count of payments within the payout which have failed or been returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		failedPayments: FormControl<number | null | undefined>,

		/**
		 * The count of payments within the payout which are incomplete.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		incompletePayments: FormControl<number | null | undefined>,

		/** The date/time at which the payout was instructed. */
		instructedDateTime: FormControl<Date | null | undefined>,

		/** The memo attached to the payout. */
		payoutMemo: FormControl<string | null | undefined>,

		/** The current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN */
		payoutStatus: FormControl<string | null | undefined>,

		/**
		 * The count of payments within the payout which have been released.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		releasedPayments: FormControl<number | null | undefined>,

		/** The date/time at which the payout was submitted. */
		submittedDateTime: FormControl<Date | null | undefined>,

		/**
		 * The count of payments within the payout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPayments: FormControl<number | null | undefined>,

		/** The date/time at which the payout was withdrawn. */
		withdrawnDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetPaymentsForPayoutResponseV3_summaryFormGroup() {
		return new FormGroup<GetPaymentsForPayoutResponseV3_summaryFormProperties>({
			confirmedPayments: new FormControl<number | null | undefined>(undefined),
			failedPayments: new FormControl<number | null | undefined>(undefined),
			incompletePayments: new FormControl<number | null | undefined>(undefined),
			instructedDateTime: new FormControl<Date | null | undefined>(undefined),
			payoutMemo: new FormControl<string | null | undefined>(undefined),
			payoutStatus: new FormControl<string | null | undefined>(undefined),
			releasedPayments: new FormControl<number | null | undefined>(undefined),
			submittedDateTime: new FormControl<Date | null | undefined>(undefined),
			totalPayments: new FormControl<number | null | undefined>(undefined),
			withdrawnDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** List Payments for payout */
	export interface GetPaymentsForPayoutResponseV4 {
		content?: Array<PaymentResponseV4>;
		links?: Array<PagedPayeeResponseV3_links>;
		page?: PagedPayeeInvitationStatusResponseV3_page;
		summary?: GetPaymentsForPayoutResponseV4_summary;
	}

	/** List Payments for payout */
	export interface GetPaymentsForPayoutResponseV4FormProperties {
	}
	export function CreateGetPaymentsForPayoutResponseV4FormGroup() {
		return new FormGroup<GetPaymentsForPayoutResponseV4FormProperties>({
		});

	}

	export interface PaymentResponseV4 {
		accountName?: string | null;

		/** The account number for the account which will receive the payment. */
		accountNumber?: string | null;

		/** Populated with rejection reason code if the payment was withdrawn automatically at instruct time */
		autoWithdrawnReasonCode?: string | null;

		/** The country code of the payment channel. */
		countryCode?: string | null;

		/** Required */
		events: Array<PaymentEventResponse>;

		/** ACH file payment was submitted in, if applicable */
		filenameReference?: string | null;

		/**
		 * Current funding status of the payment. One of the following values: FUNDED, INSTRUCTED, UNFUNDED
		 * Required
		 */
		fundingStatus: string;

		/** The iban for the payment. */
		iban?: string | null;

		/** Individual Identification Number assigned to the payment in the ACH file, if applicable */
		individualIdentificationNumber?: string | null;

		/**
		 * The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
		 * Type: double
		 */
		invertedRate?: number | null;
		isPaymentCcyBaseCcy?: boolean | null;

		/** The country code of the payee's address. */
		payeeAddressCountryCode?: string | null;

		/**
		 * The id of the paymeee
		 * Required
		 */
		payeeId: string;

		/**
		 * The amount which the payee will receive
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentAmount: number;
		paymentChannelId?: string | null;
		paymentChannelName?: string | null;

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency?: string | null;

		/**
		 * The id of the payment
		 * Required
		 */
		paymentId: string;

		/** The payment memo set by the payor */
		paymentMemo?: string | null;

		/** Metadata for the payment */
		paymentMetadata?: string | null;
		paymentScheme?: string | null;
		paymentTrackingReference?: string | null;

		/**
		 * The id of the payor
		 * Required
		 */
		payorId: string;

		/** The name of the payor */
		payorName?: string | null;
		payorPaymentId?: string | null;
		payout?: PaymentResponseV4_payout;

		/** FX details relating to a payout that was executed or is still waiting to be executed */
		postInstructFxInfo?: PostInstructFxInfo;

		/**
		 * The quote Id used for the FX
		 * Required
		 */
		quoteId: string;
		railsBatchId?: string | null;

		/**
		 * The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
		 * Required
		 */
		railsId: string;
		railsPaymentId?: string | null;

		/**
		 * The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
		 * Type: double
		 */
		rate?: number | null;
		rejectionReason?: string | null;

		/** The remote id by which the payor refers to the payee. Only populated once payment is confirmed */
		remoteId?: string | null;

		/** The velo id of the remote system orchestrating the payment. Not populated for normal Velo payments. */
		remoteSystemId?: string | null;

		/** The id of the payment in the remote system. Not populated for normal Velo payments. */
		remoteSystemPaymentId?: string | null;

		/**
		 * The return cost if a returned payment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		returnCost?: number | null;
		returnReason?: string | null;

		/** The routing number for the payment. */
		routingNumber?: string | null;

		/** Details relating to a payout that was executed via a schedule or is still waiting to be executed */
		schedule?: PayoutSchedule;

		/**
		 * The id of the source account from which the payment was taken
		 * Required
		 */
		sourceAccountId: string;

		/** The name of the source account from which the payment was taken */
		sourceAccountName?: string | null;

		/**
		 * The source amount for the payment (amount debited to make the payment)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sourceAmount?: number | null;

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency?: string | null;

		/**
		 * Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, RETURNED, WITHDRAWN
		 * Required
		 */
		status: string;

		/** Required */
		submittedDateTime: Date;

		/** Trace Number assigned to the payment in the ACH file, if applicable */
		traceNumber?: string | null;

		/** The transmission type of the payment, e.g. ACH, SAME_DAY_ACH, WIRE, GACHO */
		transmissionType?: string | null;
		withdrawable?: boolean | null;
		withdrawnReason?: string | null;
	}
	export interface PaymentResponseV4FormProperties {
		accountName: FormControl<string | null | undefined>,

		/** The account number for the account which will receive the payment. */
		accountNumber: FormControl<string | null | undefined>,

		/** Populated with rejection reason code if the payment was withdrawn automatically at instruct time */
		autoWithdrawnReasonCode: FormControl<string | null | undefined>,

		/** The country code of the payment channel. */
		countryCode: FormControl<string | null | undefined>,

		/** ACH file payment was submitted in, if applicable */
		filenameReference: FormControl<string | null | undefined>,

		/**
		 * Current funding status of the payment. One of the following values: FUNDED, INSTRUCTED, UNFUNDED
		 * Required
		 */
		fundingStatus: FormControl<string | null | undefined>,

		/** The iban for the payment. */
		iban: FormControl<string | null | undefined>,

		/** Individual Identification Number assigned to the payment in the ACH file, if applicable */
		individualIdentificationNumber: FormControl<string | null | undefined>,

		/**
		 * The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
		 * Type: double
		 */
		invertedRate: FormControl<number | null | undefined>,
		isPaymentCcyBaseCcy: FormControl<boolean | null | undefined>,

		/** The country code of the payee's address. */
		payeeAddressCountryCode: FormControl<string | null | undefined>,

		/**
		 * The id of the paymeee
		 * Required
		 */
		payeeId: FormControl<string | null | undefined>,

		/**
		 * The amount which the payee will receive
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentAmount: FormControl<number | null | undefined>,
		paymentChannelId: FormControl<string | null | undefined>,
		paymentChannelName: FormControl<string | null | undefined>,

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency: FormControl<string | null | undefined>,

		/**
		 * The id of the payment
		 * Required
		 */
		paymentId: FormControl<string | null | undefined>,

		/** The payment memo set by the payor */
		paymentMemo: FormControl<string | null | undefined>,

		/** Metadata for the payment */
		paymentMetadata: FormControl<string | null | undefined>,
		paymentScheme: FormControl<string | null | undefined>,
		paymentTrackingReference: FormControl<string | null | undefined>,

		/**
		 * The id of the payor
		 * Required
		 */
		payorId: FormControl<string | null | undefined>,

		/** The name of the payor */
		payorName: FormControl<string | null | undefined>,
		payorPaymentId: FormControl<string | null | undefined>,

		/**
		 * The quote Id used for the FX
		 * Required
		 */
		quoteId: FormControl<string | null | undefined>,
		railsBatchId: FormControl<string | null | undefined>,

		/**
		 * The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.
		 * Required
		 */
		railsId: FormControl<string | null | undefined>,
		railsPaymentId: FormControl<string | null | undefined>,

		/**
		 * The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed
		 * Type: double
		 */
		rate: FormControl<number | null | undefined>,
		rejectionReason: FormControl<string | null | undefined>,

		/** The remote id by which the payor refers to the payee. Only populated once payment is confirmed */
		remoteId: FormControl<string | null | undefined>,

		/** The velo id of the remote system orchestrating the payment. Not populated for normal Velo payments. */
		remoteSystemId: FormControl<string | null | undefined>,

		/** The id of the payment in the remote system. Not populated for normal Velo payments. */
		remoteSystemPaymentId: FormControl<string | null | undefined>,

		/**
		 * The return cost if a returned payment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		returnCost: FormControl<number | null | undefined>,
		returnReason: FormControl<string | null | undefined>,

		/** The routing number for the payment. */
		routingNumber: FormControl<string | null | undefined>,

		/**
		 * The id of the source account from which the payment was taken
		 * Required
		 */
		sourceAccountId: FormControl<string | null | undefined>,

		/** The name of the source account from which the payment was taken */
		sourceAccountName: FormControl<string | null | undefined>,

		/**
		 * The source amount for the payment (amount debited to make the payment)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sourceAmount: FormControl<number | null | undefined>,

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency: FormControl<string | null | undefined>,

		/**
		 * Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, RETURNED, WITHDRAWN
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Required */
		submittedDateTime: FormControl<Date | null | undefined>,

		/** Trace Number assigned to the payment in the ACH file, if applicable */
		traceNumber: FormControl<string | null | undefined>,

		/** The transmission type of the payment, e.g. ACH, SAME_DAY_ACH, WIRE, GACHO */
		transmissionType: FormControl<string | null | undefined>,
		withdrawable: FormControl<boolean | null | undefined>,
		withdrawnReason: FormControl<string | null | undefined>,
	}
	export function CreatePaymentResponseV4FormGroup() {
		return new FormGroup<PaymentResponseV4FormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			autoWithdrawnReasonCode: new FormControl<string | null | undefined>(undefined),
			countryCode: new FormControl<string | null | undefined>(undefined),
			filenameReference: new FormControl<string | null | undefined>(undefined),
			fundingStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iban: new FormControl<string | null | undefined>(undefined),
			individualIdentificationNumber: new FormControl<string | null | undefined>(undefined),
			invertedRate: new FormControl<number | null | undefined>(undefined),
			isPaymentCcyBaseCcy: new FormControl<boolean | null | undefined>(undefined),
			payeeAddressCountryCode: new FormControl<string | null | undefined>(undefined),
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentAmount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			paymentChannelId: new FormControl<string | null | undefined>(undefined),
			paymentChannelName: new FormControl<string | null | undefined>(undefined),
			paymentCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			paymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentMemo: new FormControl<string | null | undefined>(undefined),
			paymentMetadata: new FormControl<string | null | undefined>(undefined),
			paymentScheme: new FormControl<string | null | undefined>(undefined),
			paymentTrackingReference: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorName: new FormControl<string | null | undefined>(undefined),
			payorPaymentId: new FormControl<string | null | undefined>(undefined),
			quoteId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			railsBatchId: new FormControl<string | null | undefined>(undefined),
			railsId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			railsPaymentId: new FormControl<string | null | undefined>(undefined),
			rate: new FormControl<number | null | undefined>(undefined),
			rejectionReason: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined),
			remoteSystemId: new FormControl<string | null | undefined>(undefined),
			remoteSystemPaymentId: new FormControl<string | null | undefined>(undefined),
			returnCost: new FormControl<number | null | undefined>(undefined),
			returnReason: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined),
			sourceAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceAccountName: new FormControl<string | null | undefined>(undefined),
			sourceAmount: new FormControl<number | null | undefined>(undefined),
			sourceCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			submittedDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			traceNumber: new FormControl<string | null | undefined>(undefined),
			transmissionType: new FormControl<string | null | undefined>(undefined),
			withdrawable: new FormControl<boolean | null | undefined>(undefined),
			withdrawnReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentEventResponse {
		accountName?: string | null;

		/** The account number attached to the event. */
		accountNumber?: string | null;

		/**
		 * The date/time at which the event occurred.
		 * Required
		 */
		eventDateTime: Date;

		/**
		 * The id of the event.
		 * Required
		 */
		eventId: string;

		/**
		 * One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, PAYMENT_TRACKING_DETAILS_UPDATED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN, ORCHESTRATED_PAYMENT_BATCH_REQUESTED, ORCHESTRATED_PAYMENT_BATCH_CONFIRMED, ORCHESTRATED_PAYMENT_REQUESTED
		 * Required
		 */
		eventType: string;
		iban?: string | null;

		/**
		 * The destination amount exposed by the event.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		paymentAmount?: string | null;

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency?: string | null;
		principal?: string | null;

		/** The routing number attached to the event. */
		routingNumber?: string | null;
		scheduledAt?: Date | null;

		/** Optional display name as a hint for who scheduled the payout. Not populated if payout was scheduled by an application. */
		scheduledBy?: string | null;
		scheduledFor?: Date | null;

		/**
		 * The source amount exposed by the event.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sourceAmount?: string | null;

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency?: string | null;
	}
	export interface PaymentEventResponseFormProperties {
		accountName: FormControl<string | null | undefined>,

		/** The account number attached to the event. */
		accountNumber: FormControl<string | null | undefined>,

		/**
		 * The date/time at which the event occurred.
		 * Required
		 */
		eventDateTime: FormControl<Date | null | undefined>,

		/**
		 * The id of the event.
		 * Required
		 */
		eventId: FormControl<string | null | undefined>,

		/**
		 * One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, PAYMENT_TRACKING_DETAILS_UPDATED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN, ORCHESTRATED_PAYMENT_BATCH_REQUESTED, ORCHESTRATED_PAYMENT_BATCH_CONFIRMED, ORCHESTRATED_PAYMENT_REQUESTED
		 * Required
		 */
		eventType: FormControl<string | null | undefined>,
		iban: FormControl<string | null | undefined>,

		/**
		 * The destination amount exposed by the event.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		paymentAmount: FormControl<string | null | undefined>,

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency: FormControl<string | null | undefined>,
		principal: FormControl<string | null | undefined>,

		/** The routing number attached to the event. */
		routingNumber: FormControl<string | null | undefined>,
		scheduledAt: FormControl<Date | null | undefined>,

		/** Optional display name as a hint for who scheduled the payout. Not populated if payout was scheduled by an application. */
		scheduledBy: FormControl<string | null | undefined>,
		scheduledFor: FormControl<Date | null | undefined>,

		/**
		 * The source amount exposed by the event.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sourceAmount: FormControl<string | null | undefined>,

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency: FormControl<string | null | undefined>,
	}
	export function CreatePaymentEventResponseFormGroup() {
		return new FormGroup<PaymentEventResponseFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			accountNumber: new FormControl<string | null | undefined>(undefined),
			eventDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iban: new FormControl<string | null | undefined>(undefined),
			paymentAmount: new FormControl<string | null | undefined>(undefined),
			paymentCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			principal: new FormControl<string | null | undefined>(undefined),
			routingNumber: new FormControl<string | null | undefined>(undefined),
			scheduledAt: new FormControl<Date | null | undefined>(undefined),
			scheduledBy: new FormControl<string | null | undefined>(undefined),
			scheduledFor: new FormControl<Date | null | undefined>(undefined),
			sourceAmount: new FormControl<string | null | undefined>(undefined),
			sourceCurrency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
		});

	}


	/** FX details relating to a payout that was executed or is still waiting to be executed */
	export interface PostInstructFxInfo {

		/**
		 * The mode by which the FX rate is to be determined (MANUAL or AUTO)
		 * Required
		 */
		fxMode: string;

		/**
		 * The state to which the Post-Instruct FX process has reached (INITIATED or COMPLETED)
		 * Required
		 */
		fxStatus: string;

		/**
		 * The date-time at which the most recent fxStatus was determined.
		 * Required
		 */
		fxStatusUpdatedAt: Date;

		/** The reference assigned to the FX funding that will fulfil this payment. */
		fxTransactionReference?: string | null;
	}

	/** FX details relating to a payout that was executed or is still waiting to be executed */
	export interface PostInstructFxInfoFormProperties {

		/**
		 * The mode by which the FX rate is to be determined (MANUAL or AUTO)
		 * Required
		 */
		fxMode: FormControl<string | null | undefined>,

		/**
		 * The state to which the Post-Instruct FX process has reached (INITIATED or COMPLETED)
		 * Required
		 */
		fxStatus: FormControl<string | null | undefined>,

		/**
		 * The date-time at which the most recent fxStatus was determined.
		 * Required
		 */
		fxStatusUpdatedAt: FormControl<Date | null | undefined>,

		/** The reference assigned to the FX funding that will fulfil this payment. */
		fxTransactionReference: FormControl<string | null | undefined>,
	}
	export function CreatePostInstructFxInfoFormGroup() {
		return new FormGroup<PostInstructFxInfoFormProperties>({
			fxMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fxStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fxStatusUpdatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			fxTransactionReference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details relating to a payout that was executed via a schedule or is still waiting to be executed */
	export interface PayoutSchedule {

		/** Required */
		notificationsEnabled: boolean;

		/**
		 * Current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED
		 * Required
		 */
		scheduleStatus: string;

		/** Required */
		scheduledAt: Date;

		/** Optional display name as a hint for who scheduled the payout. Not populated if payout was scheduled by an application. */
		scheduledBy?: string | null;

		/**
		 * ID of the user or application that scheduled the payout
		 * Required
		 */
		scheduledByPrincipalId: string;

		/** Required */
		scheduledFor: Date;
	}

	/** Details relating to a payout that was executed via a schedule or is still waiting to be executed */
	export interface PayoutScheduleFormProperties {

		/** Required */
		notificationsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED
		 * Required
		 */
		scheduleStatus: FormControl<string | null | undefined>,

		/** Required */
		scheduledAt: FormControl<Date | null | undefined>,

		/** Optional display name as a hint for who scheduled the payout. Not populated if payout was scheduled by an application. */
		scheduledBy: FormControl<string | null | undefined>,

		/**
		 * ID of the user or application that scheduled the payout
		 * Required
		 */
		scheduledByPrincipalId: FormControl<string | null | undefined>,

		/** Required */
		scheduledFor: FormControl<Date | null | undefined>,
	}
	export function CreatePayoutScheduleFormGroup() {
		return new FormGroup<PayoutScheduleFormProperties>({
			notificationsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scheduleStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheduledAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			scheduledBy: new FormControl<string | null | undefined>(undefined),
			scheduledByPrincipalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheduledFor: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PagedPayeeResponseV3_links {
		href?: string | null;
		rel?: string | null;
	}
	export interface PagedPayeeResponseV3_linksFormProperties {
		href: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreatePagedPayeeResponseV3_linksFormGroup() {
		return new FormGroup<PagedPayeeResponseV3_linksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPaymentsForPayoutResponseV4_summary {

		/**
		 * The count of payments within the payout which have been confirmed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		confirmedPayments?: number | null;

		/**
		 * The count of payments within the payout which are incomplete.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		incompletePayments?: number | null;

		/** Details of principal participating in a payout. */
		instructed?: PayoutPrincipal;

		/** The date/time at which the payout was instructed. */
		instructedDateTime?: Date | null;

		/** Details of payor and principal participating in a payout. */
		payoutFrom?: PayoutPayor;

		/** The memo attached to the payout. */
		payoutMemo?: string | null;

		/** Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN */
		payoutStatus?: string | null;

		/** Details of payor and principal participating in a payout. */
		payoutTo?: PayoutPayor;

		/** The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF */
		payoutType?: string | null;

		/** Details of principal participating in a payout. */
		quoted?: PayoutPrincipal;

		/** The date/time at which the payout was quoted. */
		quotedDateTime?: Date | null;

		/**
		 * The count of payments within the payout which have been released.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		releasedPayments?: number | null;

		/**
		 * The count of payments within the payout which have been returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		returnedPayments?: number | null;

		/** Details relating to a payout that was executed via a schedule or is still waiting to be executed */
		schedule?: PayoutSchedule;

		/** The date/time at which the payout was submitted. */
		submittedDateTime?: Date | null;

		/** Details of payor and principal participating in a payout. */
		submitting?: PayoutPayor;

		/**
		 * The count of payments within the payout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPayments?: number | null;

		/** Details of principal participating in a payout. */
		withdrawn?: PayoutPrincipal;
		withdrawnDateTime?: Date | null;

		/**
		 * The count of payments within the payout which have been withdrawn.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		withdrawnPayments?: number | null;
	}
	export interface GetPaymentsForPayoutResponseV4_summaryFormProperties {

		/**
		 * The count of payments within the payout which have been confirmed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		confirmedPayments: FormControl<number | null | undefined>,

		/**
		 * The count of payments within the payout which are incomplete.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		incompletePayments: FormControl<number | null | undefined>,

		/** The date/time at which the payout was instructed. */
		instructedDateTime: FormControl<Date | null | undefined>,

		/** The memo attached to the payout. */
		payoutMemo: FormControl<string | null | undefined>,

		/** Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN */
		payoutStatus: FormControl<string | null | undefined>,

		/** The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF */
		payoutType: FormControl<string | null | undefined>,

		/** The date/time at which the payout was quoted. */
		quotedDateTime: FormControl<Date | null | undefined>,

		/**
		 * The count of payments within the payout which have been released.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		releasedPayments: FormControl<number | null | undefined>,

		/**
		 * The count of payments within the payout which have been returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		returnedPayments: FormControl<number | null | undefined>,

		/** The date/time at which the payout was submitted. */
		submittedDateTime: FormControl<Date | null | undefined>,

		/**
		 * The count of payments within the payout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPayments: FormControl<number | null | undefined>,
		withdrawnDateTime: FormControl<Date | null | undefined>,

		/**
		 * The count of payments within the payout which have been withdrawn.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		withdrawnPayments: FormControl<number | null | undefined>,
	}
	export function CreateGetPaymentsForPayoutResponseV4_summaryFormGroup() {
		return new FormGroup<GetPaymentsForPayoutResponseV4_summaryFormProperties>({
			confirmedPayments: new FormControl<number | null | undefined>(undefined),
			incompletePayments: new FormControl<number | null | undefined>(undefined),
			instructedDateTime: new FormControl<Date | null | undefined>(undefined),
			payoutMemo: new FormControl<string | null | undefined>(undefined),
			payoutStatus: new FormControl<string | null | undefined>(undefined),
			payoutType: new FormControl<string | null | undefined>(undefined),
			quotedDateTime: new FormControl<Date | null | undefined>(undefined),
			releasedPayments: new FormControl<number | null | undefined>(undefined),
			returnedPayments: new FormControl<number | null | undefined>(undefined),
			submittedDateTime: new FormControl<Date | null | undefined>(undefined),
			totalPayments: new FormControl<number | null | undefined>(undefined),
			withdrawnDateTime: new FormControl<Date | null | undefined>(undefined),
			withdrawnPayments: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of principal participating in a payout. */
	export interface PayoutPrincipal {

		/**
		 * Email address if principal is a user or ID if application.
		 * Required
		 */
		principal: string;

		/**
		 * The id of the principal.
		 * Required
		 */
		principalId: string;
	}

	/** Details of principal participating in a payout. */
	export interface PayoutPrincipalFormProperties {

		/**
		 * Email address if principal is a user or ID if application.
		 * Required
		 */
		principal: FormControl<string | null | undefined>,

		/**
		 * The id of the principal.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreatePayoutPrincipalFormGroup() {
		return new FormGroup<PayoutPrincipalFormProperties>({
			principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of payor and principal participating in a payout. */
	export interface PayoutPayor {

		/**
		 * The alternate name of the payor.
		 * Required
		 */
		dbaName: string;

		/**
		 * The id of the payor.
		 * Required
		 */
		payorId: string;

		/**
		 * The name of the payor.
		 * Required
		 */
		payorName: string;

		/**
		 * Email address if principal is a user or ID if application.
		 * Required
		 */
		principal: string;

		/**
		 * The id of the principal.
		 * Required
		 */
		principalId: string;
	}

	/** Details of payor and principal participating in a payout. */
	export interface PayoutPayorFormProperties {

		/**
		 * The alternate name of the payor.
		 * Required
		 */
		dbaName: FormControl<string | null | undefined>,

		/**
		 * The id of the payor.
		 * Required
		 */
		payorId: FormControl<string | null | undefined>,

		/**
		 * The name of the payor.
		 * Required
		 */
		payorName: FormControl<string | null | undefined>,

		/**
		 * Email address if principal is a user or ID if application.
		 * Required
		 */
		principal: FormControl<string | null | undefined>,

		/**
		 * The id of the principal.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreatePayoutPayorFormGroup() {
		return new FormGroup<PayoutPayorFormProperties>({
			dbaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principal: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPayoutStatistics {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		thisMonthFailedPaymentsCount: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		thisMonthPayoutsCount: number;
	}
	export interface GetPayoutStatisticsFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		thisMonthFailedPaymentsCount: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		thisMonthPayoutsCount: FormControl<number | null | undefined>,
	}
	export function CreateGetPayoutStatisticsFormGroup() {
		return new FormGroup<GetPayoutStatisticsFormProperties>({
			thisMonthFailedPaymentsCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			thisMonthPayoutsCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List Payouts Response */
	export interface GetPayoutsResponse {
		content?: Array<PayoutSummaryAudit>;
		links?: Array<PagedPayeeResponseV3_links>;
		page?: PagedPayeeInvitationStatusResponseV3_page;
	}

	/** List Payouts Response */
	export interface GetPayoutsResponseFormProperties {
	}
	export function CreateGetPayoutsResponseFormGroup() {
		return new FormGroup<GetPayoutsResponseFormProperties>({
		});

	}

	export interface PayoutSummaryAudit {
		dateTime?: Date | null;
		fxSummaries?: Array<FxSummary>;
		instructedDateTime?: string | null;
		payorId?: string | null;

		/** Required */
		payorName: string;
		payoutId?: string | null;
		payoutMemo?: string | null;

		/**
		 * The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF
		 * Required
		 */
		payoutType: string;

		/** Details relating to a payout that was executed via a schedule or is still waiting to be executed */
		schedule?: PayoutSchedule;
		sourceAccountSummary?: Array<SourceAccountSummary>;

		/**
		 * Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN
		 * Required
		 */
		status: string;

		/** Required */
		submittedDateTime: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalIncompletePayments?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPayments?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalReturnedPayments?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalWithdrawnPayments?: number | null;
		withdrawnDateTime?: Date | null;
	}
	export interface PayoutSummaryAuditFormProperties {
		dateTime: FormControl<Date | null | undefined>,
		instructedDateTime: FormControl<string | null | undefined>,
		payorId: FormControl<string | null | undefined>,

		/** Required */
		payorName: FormControl<string | null | undefined>,
		payoutId: FormControl<string | null | undefined>,
		payoutMemo: FormControl<string | null | undefined>,

		/**
		 * The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF
		 * Required
		 */
		payoutType: FormControl<string | null | undefined>,

		/**
		 * Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Required */
		submittedDateTime: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalIncompletePayments: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPayments: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalReturnedPayments: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalWithdrawnPayments: FormControl<number | null | undefined>,
		withdrawnDateTime: FormControl<Date | null | undefined>,
	}
	export function CreatePayoutSummaryAuditFormGroup() {
		return new FormGroup<PayoutSummaryAuditFormProperties>({
			dateTime: new FormControl<Date | null | undefined>(undefined),
			instructedDateTime: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined),
			payorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payoutId: new FormControl<string | null | undefined>(undefined),
			payoutMemo: new FormControl<string | null | undefined>(undefined),
			payoutType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			submittedDateTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalIncompletePayments: new FormControl<number | null | undefined>(undefined),
			totalPayments: new FormControl<number | null | undefined>(undefined),
			totalReturnedPayments: new FormControl<number | null | undefined>(undefined),
			totalWithdrawnPayments: new FormControl<number | null | undefined>(undefined),
			withdrawnDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SourceAccountSummary {

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		currency?: string | null;

		/** Required */
		sourceAccountId: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalCost: string;
	}
	export interface SourceAccountSummaryFormProperties {

		/**
		 * ISO-4217 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/** Required */
		sourceAccountId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalCost: FormControl<string | null | undefined>,
	}
	export function CreateSourceAccountSummaryFormGroup() {
		return new FormGroup<SourceAccountSummaryFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			sourceAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalCost: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List Payouts Response */
	export interface GetPayoutsResponseV3 {
		content?: Array<PayoutSummaryAuditV3>;
		links?: Array<GetPayoutsResponseV3_links>;
		page?: GetPayoutsResponseV3_page;
	}

	/** List Payouts Response */
	export interface GetPayoutsResponseV3FormProperties {
	}
	export function CreateGetPayoutsResponseV3FormGroup() {
		return new FormGroup<GetPayoutsResponseV3FormProperties>({
		});

	}

	export interface PayoutSummaryAuditV3 {
		fxSummaries?: Array<FxSummaryV3>;
		instructedDateTime?: string | null;
		payorId?: string | null;

		/** Required */
		payoutId: string;
		payoutMemo?: string | null;
		sourceAccountSummary?: Array<SourceAccountSummaryV3>;

		/**
		 * Current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN
		 * Required
		 */
		status: string;

		/** Required */
		submittedDateTime: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalFailedPayments?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalIncompletePayments?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPayments?: number | null;
		withdrawnDateTime?: string | null;
	}
	export interface PayoutSummaryAuditV3FormProperties {
		instructedDateTime: FormControl<string | null | undefined>,
		payorId: FormControl<string | null | undefined>,

		/** Required */
		payoutId: FormControl<string | null | undefined>,
		payoutMemo: FormControl<string | null | undefined>,

		/**
		 * Current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/** Required */
		submittedDateTime: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalFailedPayments: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalIncompletePayments: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPayments: FormControl<number | null | undefined>,
		withdrawnDateTime: FormControl<string | null | undefined>,
	}
	export function CreatePayoutSummaryAuditV3FormGroup() {
		return new FormGroup<PayoutSummaryAuditV3FormProperties>({
			instructedDateTime: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined),
			payoutId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payoutMemo: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			submittedDateTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalFailedPayments: new FormControl<number | null | undefined>(undefined),
			totalIncompletePayments: new FormControl<number | null | undefined>(undefined),
			totalPayments: new FormControl<number | null | undefined>(undefined),
			withdrawnDateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SourceAccountSummaryV3 {

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		currency?: string | null;

		/** Required */
		sourceAccountId: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalCost: string;
	}
	export interface SourceAccountSummaryV3FormProperties {

		/**
		 * ISO 3 character currency code
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/** Required */
		sourceAccountId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalCost: FormControl<string | null | undefined>,
	}
	export function CreateSourceAccountSummaryV3FormGroup() {
		return new FormGroup<SourceAccountSummaryV3FormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			sourceAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalCost: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPayoutsResponseV3_page {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages?: number | null;
	}
	export interface GetPayoutsResponseV3_pageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateGetPayoutsResponseV3_pageFormGroup() {
		return new FormGroup<GetPayoutsResponseV3_pageFormProperties>({
			numberOfElements: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IndividualV3 {

		/**
		 * If not authorized to view, value will be masked. Example: - XXXX-XX-XX
		 * Required
		 */
		dateOfBirth: string;

		/** Required */
		name: IndividualV3_name;

		/**
		 * If not authorized to view, value will be masked. Example: XXXXX1234
		 * Min length: 6
		 * Max length: 30
		 */
		nationalIdentification?: string | null;
	}
	export interface IndividualV3FormProperties {

		/**
		 * If not authorized to view, value will be masked. Example: - XXXX-XX-XX
		 * Required
		 */
		dateOfBirth: FormControl<string | null | undefined>,

		/**
		 * If not authorized to view, value will be masked. Example: XXXXX1234
		 * Min length: 6
		 * Max length: 30
		 */
		nationalIdentification: FormControl<string | null | undefined>,
	}
	export function CreateIndividualV3FormGroup() {
		return new FormGroup<IndividualV3FormProperties>({
			dateOfBirth: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nationalIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(30)]),
		});

	}

	export interface IndividualV3_name {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 40
		 */
		firstName: string;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 40
		 */
		lastName: string;

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		otherNames?: string | null;

		/**
		 * Min length: 1
		 * Max length: 10
		 */
		title?: string | null;
	}
	export interface IndividualV3_nameFormProperties {

		/**
		 * Required
		 * Min length: 1
		 * Max length: 40
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 40
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 40
		 */
		otherNames: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 10
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateIndividualV3_nameFormGroup() {
		return new FormGroup<IndividualV3_nameFormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
			otherNames: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(10)]),
		});

	}

	export interface IndividualV4 {

		/**
		 * If not authorized to view, value will be masked. Example: - XXXX-XX-XX
		 * Required
		 */
		dateOfBirth: string;

		/** Required */
		name: IndividualV3_name;

		/**
		 * If not authorized to view, value will be masked. Example: XXXXX1234
		 * Min length: 6
		 * Max length: 30
		 */
		nationalIdentification?: string | null;
	}
	export interface IndividualV4FormProperties {

		/**
		 * If not authorized to view, value will be masked. Example: - XXXX-XX-XX
		 * Required
		 */
		dateOfBirth: FormControl<string | null | undefined>,

		/**
		 * If not authorized to view, value will be masked. Example: XXXXX1234
		 * Min length: 6
		 * Max length: 30
		 */
		nationalIdentification: FormControl<string | null | undefined>,
	}
	export function CreateIndividualV4FormGroup() {
		return new FormGroup<IndividualV4FormProperties>({
			dateOfBirth: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nationalIdentification: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(30)]),
		});

	}

	export interface InstructPayoutRequestV3 {

		/**
		 * Halt instruction if the FX rates have become worse since the last quote
		 * Type: float
		 */
		fxRateDegredationThresholdPercentage?: number | null;
	}
	export interface InstructPayoutRequestV3FormProperties {

		/**
		 * Halt instruction if the FX rates have become worse since the last quote
		 * Type: float
		 */
		fxRateDegredationThresholdPercentage: FormControl<number | null | undefined>,
	}
	export function CreateInstructPayoutRequestV3FormGroup() {
		return new FormGroup<InstructPayoutRequestV3FormProperties>({
			fxRateDegredationThresholdPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvitePayeeRequestV3 {

		/** Required */
		payorId: string;
	}
	export interface InvitePayeeRequestV3FormProperties {

		/** Required */
		payorId: FormControl<string | null | undefined>,
	}
	export function CreateInvitePayeeRequestV3FormGroup() {
		return new FormGroup<InvitePayeeRequestV3FormProperties>({
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvitePayeeRequestV4 {

		/** Required */
		payorId: string;
	}
	export interface InvitePayeeRequestV4FormProperties {

		/** Required */
		payorId: FormControl<string | null | undefined>,
	}
	export function CreateInvitePayeeRequestV4FormGroup() {
		return new FormGroup<InvitePayeeRequestV4FormProperties>({
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InviteUserRequest {

		/**
		 * the email address of the invited user
		 * Required
		 */
		email: string;

		/**
		 * The payorId or payeeId or null if the user is a backoffice admin
		 */
		entityId?: string | null;

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		firstName?: string | null;

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		lastName?: string | null;

		/**
		 * <p>The MFA type that the user will use</p>
		 * <p>The type may be conditional on the role(s) the user has</p>
		 * Required
		 */
		mfaType: MFADetailsMfa_type;

		/**
		 * The main contact number for the user
		 * Required
		 */
		primaryContactNumber: string;

		/**
		 * The role(s) for the user
		 * The role must exist
		 * The role can be a custom role or a system role but the invoker must have the permissions to assign the role
		 * System roles are: velo.backoffice.admin, velo.payor.master_admin, velo.payor.admin, velo.payor.support, velo.payee.admin, velo.payee.support
		 * Required
		 */
		roles: Array<string>;

		/**
		 * The secondary contact number for the user
		 */
		secondaryContactNumber?: string | null;

		/**
		 * The phone number of a device that the user can receive sms messages on
		 * Required
		 */
		smsNumber: string;

		/** Will default to PAYOR if not provided but entityId is provided */
		userType?: UserInfoUserType | null;

		/**
		 * Optional property that MUST be suppied when manually verifying a user
		 * The user's smsNumber is registered via a separate endpoint and an OTP sent to them
		 * Min length: 6
		 * Max length: 6
		 */
		verificationCode?: string | null;
	}
	export interface InviteUserRequestFormProperties {

		/**
		 * the email address of the invited user
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * The payorId or payeeId or null if the user is a backoffice admin
		 */
		entityId: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * <p>The MFA type that the user will use</p>
		 * <p>The type may be conditional on the role(s) the user has</p>
		 * Required
		 */
		mfaType: FormControl<MFADetailsMfa_type | null | undefined>,

		/**
		 * The main contact number for the user
		 * Required
		 */
		primaryContactNumber: FormControl<string | null | undefined>,

		/**
		 * The secondary contact number for the user
		 */
		secondaryContactNumber: FormControl<string | null | undefined>,

		/**
		 * The phone number of a device that the user can receive sms messages on
		 * Required
		 */
		smsNumber: FormControl<string | null | undefined>,

		/** Will default to PAYOR if not provided but entityId is provided */
		userType: FormControl<UserInfoUserType | null | undefined>,

		/**
		 * Optional property that MUST be suppied when manually verifying a user
		 * The user's smsNumber is registered via a separate endpoint and an OTP sent to them
		 * Min length: 6
		 * Max length: 6
		 */
		verificationCode: FormControl<string | null | undefined>,
	}
	export function CreateInviteUserRequestFormGroup() {
		return new FormGroup<InviteUserRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			entityId: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			mfaType: new FormControl<MFADetailsMfa_type | null | undefined>(undefined, [Validators.required]),
			primaryContactNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\+[1-9]\d{1,14}$')]),
			secondaryContactNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+[1-9]\d{1,14}$')]),
			smsNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\+[1-9]\d{1,14}$')]),
			userType: new FormControl<UserInfoUserType | null | undefined>(undefined),
			verificationCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(6)]),
		});

	}

	export interface LinkForResponse {
		href?: string | null;
		rel?: string | null;
	}
	export interface LinkForResponseFormProperties {
		href: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreateLinkForResponseFormGroup() {
		return new FormGroup<LinkForResponseFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List Funding Accounts Response Object */
	export interface ListFundingAccountsResponseV2 {
		content?: Array<FundingAccountResponseV2>;
		links?: Array<ListFundingAccountsResponseV2_links>;
		page?: ListFundingAccountsResponseV2_page;
	}

	/** List Funding Accounts Response Object */
	export interface ListFundingAccountsResponseV2FormProperties {
	}
	export function CreateListFundingAccountsResponseV2FormGroup() {
		return new FormGroup<ListFundingAccountsResponseV2FormProperties>({
		});

	}

	export interface ListFundingAccountsResponseV2_links {
		href?: string | null;
		rel?: string | null;
	}
	export interface ListFundingAccountsResponseV2_linksFormProperties {
		href: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreateListFundingAccountsResponseV2_linksFormGroup() {
		return new FormGroup<ListFundingAccountsResponseV2_linksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFundingAccountsResponseV2_page {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages?: number | null;
	}
	export interface ListFundingAccountsResponseV2_pageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateListFundingAccountsResponseV2_pageFormGroup() {
		return new FormGroup<ListFundingAccountsResponseV2_pageFormProperties>({
			numberOfElements: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List Payments Response Object */
	export interface ListPaymentsResponseV3 {
		content?: Array<PaymentResponseV3>;
		links?: Array<GetPayoutsResponseV3_links>;
		page?: ListPaymentsResponseV3_page;
	}

	/** List Payments Response Object */
	export interface ListPaymentsResponseV3FormProperties {
	}
	export function CreateListPaymentsResponseV3FormGroup() {
		return new FormGroup<ListPaymentsResponseV3FormProperties>({
		});

	}

	export interface ListPaymentsResponseV3_page {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages?: number | null;
	}
	export interface ListPaymentsResponseV3_pageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateListPaymentsResponseV3_pageFormGroup() {
		return new FormGroup<ListPaymentsResponseV3_pageFormProperties>({
			numberOfElements: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List Payments Response Object */
	export interface ListPaymentsResponseV4 {
		content?: Array<PaymentResponseV4>;
		links?: Array<GetPayoutsResponseV3_links>;
		page?: ListPaymentsResponseV3_page;
	}

	/** List Payments Response Object */
	export interface ListPaymentsResponseV4FormProperties {
	}
	export function CreateListPaymentsResponseV4FormGroup() {
		return new FormGroup<ListPaymentsResponseV4FormProperties>({
		});

	}


	/** List Source Accounts Response Object */
	export interface ListSourceAccountResponseV2 {
		content?: Array<SourceAccountResponseV2>;
		links?: Array<ListSourceAccountResponseV2_links>;
		page?: PagedUserResponse_page;
	}

	/** List Source Accounts Response Object */
	export interface ListSourceAccountResponseV2FormProperties {
	}
	export function CreateListSourceAccountResponseV2FormGroup() {
		return new FormGroup<ListSourceAccountResponseV2FormProperties>({
		});

	}

	export interface SourceAccountResponseV2 {

		/** Required */
		accountType: string;
		autoTopUpConfig?: AutoTopUpConfigV2;

		/**
		 * Decimal implied
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		balance?: string | null;

		/** Required */
		balanceVisible: boolean;

		/**
		 * Min length: 3
		 * Max length: 3
		 */
		currency?: string | null;
		customerId?: string | null;
		fundingAccountId?: string | null;

		/** Required */
		fundingRef: string;

		/**
		 * Source Account Id
		 * Required
		 */
		id: string;
		name?: string | null;
		notifications?: NotificationsV2;
		payorId?: string | null;
		physicalAccountId?: string | null;

		/** Required */
		physicalAccountName: string;

		/** Required */
		pooled: boolean;

		/** Required */
		railsId: string;
	}
	export interface SourceAccountResponseV2FormProperties {

		/** Required */
		accountType: FormControl<string | null | undefined>,

		/**
		 * Decimal implied
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		balance: FormControl<string | null | undefined>,

		/** Required */
		balanceVisible: FormControl<boolean | null | undefined>,

		/**
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,
		customerId: FormControl<string | null | undefined>,
		fundingAccountId: FormControl<string | null | undefined>,

		/** Required */
		fundingRef: FormControl<string | null | undefined>,

		/**
		 * Source Account Id
		 * Required
		 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		payorId: FormControl<string | null | undefined>,
		physicalAccountId: FormControl<string | null | undefined>,

		/** Required */
		physicalAccountName: FormControl<string | null | undefined>,

		/** Required */
		pooled: FormControl<boolean | null | undefined>,

		/** Required */
		railsId: FormControl<string | null | undefined>,
	}
	export function CreateSourceAccountResponseV2FormGroup() {
		return new FormGroup<SourceAccountResponseV2FormProperties>({
			accountType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			balance: new FormControl<string | null | undefined>(undefined),
			balanceVisible: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			customerId: new FormControl<string | null | undefined>(undefined),
			fundingAccountId: new FormControl<string | null | undefined>(undefined),
			fundingRef: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined),
			physicalAccountId: new FormControl<string | null | undefined>(undefined),
			physicalAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pooled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			railsId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NotificationsV2 {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimumBalance?: number | null;
	}
	export interface NotificationsV2FormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimumBalance: FormControl<number | null | undefined>,
	}
	export function CreateNotificationsV2FormGroup() {
		return new FormGroup<NotificationsV2FormProperties>({
			minimumBalance: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSourceAccountResponseV2_links {
		href?: string | null;
		rel?: string | null;
	}
	export interface ListSourceAccountResponseV2_linksFormProperties {
		href: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreateListSourceAccountResponseV2_linksFormGroup() {
		return new FormGroup<ListSourceAccountResponseV2_linksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List Source Accounts Response Object */
	export interface ListSourceAccountResponseV3 {
		content?: Array<SourceAccountResponseV3>;
		links?: Array<ListSourceAccountResponseV3_links>;
		page?: PagedUserResponse_page;
	}

	/** List Source Accounts Response Object */
	export interface ListSourceAccountResponseV3FormProperties {
	}
	export function CreateListSourceAccountResponseV3FormGroup() {
		return new FormGroup<ListSourceAccountResponseV3FormProperties>({
		});

	}

	export interface SourceAccountResponseV3 {
		autoTopUpConfig?: AutoTopUpConfigV3;

		/**
		 * Decimal implied
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		balance?: string | null;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		country?: string | null;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 3
		 * Max length: 3
		 */
		currency?: string | null;
		customerId?: string | null;

		/** An optional flag for whether the source account has been deleted. Only present in the response if true. */
		deleted?: boolean | null;

		/** An optional timestamp when the source account has been deleted. Only present in the response if deleted. */
		deletedAt?: Date | null;

		/** The funding reference (will not be set for DECOUPLED accounts). */
		fundingRef?: string | null;

		/**
		 * Source Account Id
		 * Required
		 */
		id: string;
		name?: string | null;
		notifications?: NotificationsV3;
		payorId?: string | null;

		/** The physical account id (will not be set for DECOUPLED accounts). */
		physicalAccountId?: string | null;

		/** The physical account name (will not be set for DECOUPLED accounts). */
		physicalAccountName?: string | null;

		/** The pooled account flag (will not be set for DECOUPLED accounts). */
		pooled?: boolean | null;

		/** Required */
		railsId: string;

		/** Required */
		type: string;

		/** An optional flag for whether the source account has been deleted by a user. Only present in the response if true. */
		userDeleted?: boolean | null;
	}
	export interface SourceAccountResponseV3FormProperties {

		/**
		 * Decimal implied
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		balance: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,
		customerId: FormControl<string | null | undefined>,

		/** An optional flag for whether the source account has been deleted. Only present in the response if true. */
		deleted: FormControl<boolean | null | undefined>,

		/** An optional timestamp when the source account has been deleted. Only present in the response if deleted. */
		deletedAt: FormControl<Date | null | undefined>,

		/** The funding reference (will not be set for DECOUPLED accounts). */
		fundingRef: FormControl<string | null | undefined>,

		/**
		 * Source Account Id
		 * Required
		 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		payorId: FormControl<string | null | undefined>,

		/** The physical account id (will not be set for DECOUPLED accounts). */
		physicalAccountId: FormControl<string | null | undefined>,

		/** The physical account name (will not be set for DECOUPLED accounts). */
		physicalAccountName: FormControl<string | null | undefined>,

		/** The pooled account flag (will not be set for DECOUPLED accounts). */
		pooled: FormControl<boolean | null | undefined>,

		/** Required */
		railsId: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** An optional flag for whether the source account has been deleted by a user. Only present in the response if true. */
		userDeleted: FormControl<boolean | null | undefined>,
	}
	export function CreateSourceAccountResponseV3FormGroup() {
		return new FormGroup<SourceAccountResponseV3FormProperties>({
			balance: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			customerId: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			deletedAt: new FormControl<Date | null | undefined>(undefined),
			fundingRef: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined),
			physicalAccountId: new FormControl<string | null | undefined>(undefined),
			physicalAccountName: new FormControl<string | null | undefined>(undefined),
			pooled: new FormControl<boolean | null | undefined>(undefined),
			railsId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userDeleted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NotificationsV3 {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimumBalance?: number | null;
	}
	export interface NotificationsV3FormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		minimumBalance: FormControl<number | null | undefined>,
	}
	export function CreateNotificationsV3FormGroup() {
		return new FormGroup<NotificationsV3FormProperties>({
			minimumBalance: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSourceAccountResponseV3_links {
		href?: string | null;
		rel?: string | null;
	}
	export interface ListSourceAccountResponseV3_linksFormProperties {
		href: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreateListSourceAccountResponseV3_linksFormGroup() {
		return new FormGroup<ListSourceAccountResponseV3_linksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of the MFA device */
	export enum MFAType { SMS = 'SMS', YUBIKEY = 'YUBIKEY', TOTP = 'TOTP' }

	export interface Notification {

		/**
		 * The API version of the notification schema
		 * Required
		 */
		apiVersion: string;

		/**
		 * The category that the notification relates to. One of "payment", "payee", "debit" or "system"
		 * Required
		 */
		category: string;

		/**
		 * The name of event that led to this notification
		 * Required
		 */
		eventName: string;

		/**
		 * This is a payor specific sequence number starting at 1 for the first notification sent
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sequenceNumber: string;

		/** One of the available set of source event payloads */
		source?: Ping;
	}
	export interface NotificationFormProperties {

		/**
		 * The API version of the notification schema
		 * Required
		 */
		apiVersion: FormControl<string | null | undefined>,

		/**
		 * The category that the notification relates to. One of "payment", "payee", "debit" or "system"
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/**
		 * The name of event that led to this notification
		 * Required
		 */
		eventName: FormControl<string | null | undefined>,

		/**
		 * This is a payor specific sequence number starting at 1 for the first notification sent
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sequenceNumber: FormControl<string | null | undefined>,
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Base type for all onboarding status changed events */
	export interface OnboardingStatusChanged extends PayeeEvent {
	}

	/** Base type for all onboarding status changed events */
	export interface OnboardingStatusChangedFormProperties extends PayeeEventFormProperties {
	}
	export function CreateOnboardingStatusChangedFormGroup() {
		return new FormGroup<OnboardingStatusChangedFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PageForResponse {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalElements?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages?: number | null;
	}
	export interface PageForResponseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalElements: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreatePageForResponseFormGroup() {
		return new FormGroup<PageForResponseFormProperties>({
			numberOfElements: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<string | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse {
		content?: Array<FundingPayorStatusAuditResponse>;
		links?: Array<LinkForResponse>;
		page?: PageForResponse;
	}
	export interface PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponseFormProperties {
	}
	export function CreatePageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponseFormGroup() {
		return new FormGroup<PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponseFormProperties>({
		});

	}


	/** List Payees Invitation Status Object */
	export interface PagedPayeeInvitationStatusResponseV3 {
		content?: Array<PayeeInvitationStatusResponseV3>;
		links?: Array<PagedPayeeResponseV3_links>;
		page?: PagedPayeeInvitationStatusResponseV3_page;
	}

	/** List Payees Invitation Status Object */
	export interface PagedPayeeInvitationStatusResponseV3FormProperties {
	}
	export function CreatePagedPayeeInvitationStatusResponseV3FormGroup() {
		return new FormGroup<PagedPayeeInvitationStatusResponseV3FormProperties>({
		});

	}

	export interface PayeeInvitationStatusResponseV3 {

		/** Type: DateOnly */
		gracePeriodEndDate?: Date | null;

		/**
		 * Payee invitation status. One of the following values: ACCEPTED, PENDING, DECLINED
		 * Required
		 */
		invitationStatus: string;

		/** Required */
		payeeId: string;
	}
	export interface PayeeInvitationStatusResponseV3FormProperties {

		/** Type: DateOnly */
		gracePeriodEndDate: FormControl<Date | null | undefined>,

		/**
		 * Payee invitation status. One of the following values: ACCEPTED, PENDING, DECLINED
		 * Required
		 */
		invitationStatus: FormControl<string | null | undefined>,

		/** Required */
		payeeId: FormControl<string | null | undefined>,
	}
	export function CreatePayeeInvitationStatusResponseV3FormGroup() {
		return new FormGroup<PayeeInvitationStatusResponseV3FormProperties>({
			gracePeriodEndDate: new FormControl<Date | null | undefined>(undefined),
			invitationStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PagedPayeeInvitationStatusResponseV3_page {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages?: number | null;
	}
	export interface PagedPayeeInvitationStatusResponseV3_pageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreatePagedPayeeInvitationStatusResponseV3_pageFormGroup() {
		return new FormGroup<PagedPayeeInvitationStatusResponseV3_pageFormProperties>({
			numberOfElements: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List Payees Invitation Status Object */
	export interface PagedPayeeInvitationStatusResponseV4 {
		content?: Array<PayeeInvitationStatusResponseV4>;
		links?: Array<PagedPayeeResponseV3_links>;
		page?: PagedPayeeInvitationStatusResponseV3_page;
	}

	/** List Payees Invitation Status Object */
	export interface PagedPayeeInvitationStatusResponseV4FormProperties {
	}
	export function CreatePagedPayeeInvitationStatusResponseV4FormGroup() {
		return new FormGroup<PagedPayeeInvitationStatusResponseV4FormProperties>({
		});

	}

	export interface PayeeInvitationStatusResponseV4 {

		/** Type: DateOnly */
		gracePeriodEndDate?: Date | null;

		/**
		 * Payee invitation status. One of the following values: ACCEPTED, PENDING, DECLINED
		 * Required
		 */
		invitationStatus: string;

		/** Required */
		payeeId: string;
	}
	export interface PayeeInvitationStatusResponseV4FormProperties {

		/** Type: DateOnly */
		gracePeriodEndDate: FormControl<Date | null | undefined>,

		/**
		 * Payee invitation status. One of the following values: ACCEPTED, PENDING, DECLINED
		 * Required
		 */
		invitationStatus: FormControl<string | null | undefined>,

		/** Required */
		payeeId: FormControl<string | null | undefined>,
	}
	export function CreatePayeeInvitationStatusResponseV4FormGroup() {
		return new FormGroup<PayeeInvitationStatusResponseV4FormProperties>({
			gracePeriodEndDate: new FormControl<Date | null | undefined>(undefined),
			invitationStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List Payees Response Object */
	export interface PagedPayeeResponseV3 {
		content?: Array<GetPayeeListResponseV3>;
		links?: Array<PagedPayeeResponseV3_links>;
		page?: PagedPayeeResponseV3_page;
		summary?: PagedPayeeResponseV3_summary;
	}

	/** List Payees Response Object */
	export interface PagedPayeeResponseV3FormProperties {
	}
	export function CreatePagedPayeeResponseV3FormGroup() {
		return new FormGroup<PagedPayeeResponseV3FormProperties>({
		});

	}

	export interface PagedPayeeResponseV3_page {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages?: number | null;
	}
	export interface PagedPayeeResponseV3_pageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreatePagedPayeeResponseV3_pageFormGroup() {
		return new FormGroup<PagedPayeeResponseV3_pageFormProperties>({
			numberOfElements: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PagedPayeeResponseV3_summary {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalInvitedCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalOnboardedCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPayeesCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalRegisteredCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalWatchlistFailedCount?: number | null;
	}
	export interface PagedPayeeResponseV3_summaryFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalInvitedCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalOnboardedCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPayeesCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalRegisteredCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalWatchlistFailedCount: FormControl<number | null | undefined>,
	}
	export function CreatePagedPayeeResponseV3_summaryFormGroup() {
		return new FormGroup<PagedPayeeResponseV3_summaryFormProperties>({
			totalInvitedCount: new FormControl<number | null | undefined>(undefined),
			totalOnboardedCount: new FormControl<number | null | undefined>(undefined),
			totalPayeesCount: new FormControl<number | null | undefined>(undefined),
			totalRegisteredCount: new FormControl<number | null | undefined>(undefined),
			totalWatchlistFailedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List Payees Response Object */
	export interface PagedPayeeResponseV4 {
		content?: Array<GetPayeeListResponseV4>;
		links?: Array<PagedPayeeResponseV3_links>;
		page?: PagedPayeeResponseV3_page;
		summary?: PagedPayeeResponseV3_summary;
	}

	/** List Payees Response Object */
	export interface PagedPayeeResponseV4FormProperties {
	}
	export function CreatePagedPayeeResponseV4FormGroup() {
		return new FormGroup<PagedPayeeResponseV4FormProperties>({
		});

	}


	/** List Payees Response Object */
	export interface PagedPaymentsResponseV3 {
		content?: Array<PaymentV3>;
		links?: Array<PagedPayeeResponseV3_links>;
		page?: PagedPayeeInvitationStatusResponseV3_page;
	}

	/** List Payees Response Object */
	export interface PagedPaymentsResponseV3FormProperties {
	}
	export function CreatePagedPaymentsResponseV3FormGroup() {
		return new FormGroup<PagedPaymentsResponseV3FormProperties>({
		});

	}

	export interface PaymentV3 {

		/**
		 * The amount of the payment in minor units
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		amount?: number | null;

		/** Populated only if the payment was automatically withdrawn during instruction for being invalid */
		autoWithdrawnReasonCode?: string | null;

		/**
		 * The currency that the payment was made in
		 * Min length: 3
		 * Max length: 3
		 */
		currency?: string | null;

		/** Payee data associated with a payment. Either individual or company must be populated */
		payee?: PayoutPayeeV3;

		/**
		 * The id of the payment
		 * Required
		 */
		paymentId: string;

		/**
		 * <p>Any value here will override the memo value in the parent payout</p>
		 * <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>
		 * Min length: 0
		 * Max length: 40
		 */
		paymentMemo?: string | null;

		/**
		 * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>
		 * <p>The structure of the data will be dictated by the requirements of the payment rails</p>
		 * Min length: 0
		 * Max length: 512
		 */
		paymentMetadata?: string | null;

		/**
		 * A reference identifier for the payor for the given payee payment
		 * Min length: 0
		 * Max length: 40
		 */
		payorPaymentId?: string | null;

		/** Indicates the 3rd party system involved in making this payment */
		railsId?: string | null;

		/** The remoteId supplied by the payor that identifies the payee */
		remoteId?: string | null;

		/**
		 * <p>The identifier for the remote payments system if not Velo</p>
		 * Min length: 1
		 * Max length: 100
		 */
		remoteSystemId?: string | null;

		/** The identifier of the source account to debit the payment from */
		sourceAccountName?: string | null;

		/** Current status of payment. One of the following values: SUBMITTED, ACCEPTED, REJECTED, WITHDRAWN, RETURNED, AWAITING_FUNDS, FUNDED, UNFUNDED, CANCELLED, BANK_PAYMENT_REQUESTED */
		status?: string | null;

		/** The transmission method of the payment. One of the following values: ACH, SAME_DAY_ACH, WIRE, LOCAL, SWIFT */
		transmissionType?: string | null;

		/** Can this paynent be withdrawn */
		withdrawable?: boolean | null;
	}
	export interface PaymentV3FormProperties {

		/**
		 * The amount of the payment in minor units
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		amount: FormControl<number | null | undefined>,

		/** Populated only if the payment was automatically withdrawn during instruction for being invalid */
		autoWithdrawnReasonCode: FormControl<string | null | undefined>,

		/**
		 * The currency that the payment was made in
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * The id of the payment
		 * Required
		 */
		paymentId: FormControl<string | null | undefined>,

		/**
		 * <p>Any value here will override the memo value in the parent payout</p>
		 * <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>
		 * Min length: 0
		 * Max length: 40
		 */
		paymentMemo: FormControl<string | null | undefined>,

		/**
		 * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>
		 * <p>The structure of the data will be dictated by the requirements of the payment rails</p>
		 * Min length: 0
		 * Max length: 512
		 */
		paymentMetadata: FormControl<string | null | undefined>,

		/**
		 * A reference identifier for the payor for the given payee payment
		 * Min length: 0
		 * Max length: 40
		 */
		payorPaymentId: FormControl<string | null | undefined>,

		/** Indicates the 3rd party system involved in making this payment */
		railsId: FormControl<string | null | undefined>,

		/** The remoteId supplied by the payor that identifies the payee */
		remoteId: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier for the remote payments system if not Velo</p>
		 * Min length: 1
		 * Max length: 100
		 */
		remoteSystemId: FormControl<string | null | undefined>,

		/** The identifier of the source account to debit the payment from */
		sourceAccountName: FormControl<string | null | undefined>,

		/** Current status of payment. One of the following values: SUBMITTED, ACCEPTED, REJECTED, WITHDRAWN, RETURNED, AWAITING_FUNDS, FUNDED, UNFUNDED, CANCELLED, BANK_PAYMENT_REQUESTED */
		status: FormControl<string | null | undefined>,

		/** The transmission method of the payment. One of the following values: ACH, SAME_DAY_ACH, WIRE, LOCAL, SWIFT */
		transmissionType: FormControl<string | null | undefined>,

		/** Can this paynent be withdrawn */
		withdrawable: FormControl<boolean | null | undefined>,
	}
	export function CreatePaymentV3FormGroup() {
		return new FormGroup<PaymentV3FormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			autoWithdrawnReasonCode: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3)]),
			paymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentMemo: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(40)]),
			paymentMetadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
			payorPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(40)]),
			railsId: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined),
			remoteSystemId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			sourceAccountName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			transmissionType: new FormControl<string | null | undefined>(undefined),
			withdrawable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Payee data associated with a payment. Either individual or company must be populated */
	export interface PayoutPayeeV3 {
		company?: PayoutCompanyV3;
		individual?: PayoutIndividualV3;

		/** Required */
		payeeId: string;
	}

	/** Payee data associated with a payment. Either individual or company must be populated */
	export interface PayoutPayeeV3FormProperties {

		/** Required */
		payeeId: FormControl<string | null | undefined>,
	}
	export function CreatePayoutPayeeV3FormGroup() {
		return new FormGroup<PayoutPayeeV3FormProperties>({
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PayoutCompanyV3 {

		/** Required */
		companyName: string;
	}
	export interface PayoutCompanyV3FormProperties {

		/** Required */
		companyName: FormControl<string | null | undefined>,
	}
	export function CreatePayoutCompanyV3FormGroup() {
		return new FormGroup<PayoutCompanyV3FormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PayoutIndividualV3 {

		/** Required */
		name: PayoutNameV3;
	}
	export interface PayoutIndividualV3FormProperties {
	}
	export function CreatePayoutIndividualV3FormGroup() {
		return new FormGroup<PayoutIndividualV3FormProperties>({
		});

	}

	export interface PayoutNameV3 {

		/** Required */
		firstName: string;

		/** Required */
		lastName: string;
	}
	export interface PayoutNameV3FormProperties {

		/** Required */
		firstName: FormControl<string | null | undefined>,

		/** Required */
		lastName: FormControl<string | null | undefined>,
	}
	export function CreatePayoutNameV3FormGroup() {
		return new FormGroup<PayoutNameV3FormProperties>({
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List Users Response Object */
	export interface PagedUserResponse {
		content?: Array<UserResponse>;
		links?: Array<PagedUserResponse_links>;
		page?: PagedUserResponse_page;
	}

	/** List Users Response Object */
	export interface PagedUserResponseFormProperties {
	}
	export function CreatePagedUserResponseFormGroup() {
		return new FormGroup<PagedUserResponseFormProperties>({
		});

	}

	export interface UserResponse {

		/**
		 * The payor or payee company name or null if the user is not a payor or payee user
		 * Min length: 1
		 * Max length: 128
		 */
		companyName?: string | null;

		/** the email address of the user */
		email?: string | null;

		/**
		 * The payorId or payeeId or null if the user is not a payor or payee user
		 */
		entityId?: string | null;

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		firstName?: string | null;

		/** The id of the user */
		id?: string | null;

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		lastName?: string | null;

		/** If true the user is currently locked out and unable to log in */
		lockedOut?: boolean | null;

		/**
		 * A timestamp showing when the user was locked out
		 * If null then the user is not currently locked out
		 */
		lockedOutTimestamp?: Date | null;

		/** The status of the MFA device */
		mfaStatus?: UserResponseMfaStatus | null;

		/** The type of the MFA device */
		mfaType?: MFADetailsMfa_type | null;

		/**
		 * The main contact number for the user
		 */
		primaryContactNumber?: string | null;

		/**
		 * The role(s) for the user
		 * Minimum items: 1
		 */
		roles?: Array<Role>;

		/**
		 * The secondary contact number for the user
		 */
		secondaryContactNumber?: string | null;

		/**
		 * The phone number of a device that the user can receive sms messages on
		 */
		smsNumber?: string | null;

		/**
		 * The status of the user
		 * when the user has been invited but not yet enrolled they will have a PENDING status
		 */
		status?: UserResponseStatus | null;

		/** Indicates the type of user. Could be BACKOFFICE, PAYOR or PAYEE. */
		userType?: UserInfoUserType | null;
	}
	export interface UserResponseFormProperties {

		/**
		 * The payor or payee company name or null if the user is not a payor or payee user
		 * Min length: 1
		 * Max length: 128
		 */
		companyName: FormControl<string | null | undefined>,

		/** the email address of the user */
		email: FormControl<string | null | undefined>,

		/**
		 * The payorId or payeeId or null if the user is not a payor or payee user
		 */
		entityId: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		firstName: FormControl<string | null | undefined>,

		/** The id of the user */
		id: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		lastName: FormControl<string | null | undefined>,

		/** If true the user is currently locked out and unable to log in */
		lockedOut: FormControl<boolean | null | undefined>,

		/**
		 * A timestamp showing when the user was locked out
		 * If null then the user is not currently locked out
		 */
		lockedOutTimestamp: FormControl<Date | null | undefined>,

		/** The status of the MFA device */
		mfaStatus: FormControl<UserResponseMfaStatus | null | undefined>,

		/** The type of the MFA device */
		mfaType: FormControl<MFADetailsMfa_type | null | undefined>,

		/**
		 * The main contact number for the user
		 */
		primaryContactNumber: FormControl<string | null | undefined>,

		/**
		 * The secondary contact number for the user
		 */
		secondaryContactNumber: FormControl<string | null | undefined>,

		/**
		 * The phone number of a device that the user can receive sms messages on
		 */
		smsNumber: FormControl<string | null | undefined>,

		/**
		 * The status of the user
		 * when the user has been invited but not yet enrolled they will have a PENDING status
		 */
		status: FormControl<UserResponseStatus | null | undefined>,

		/** Indicates the type of user. Could be BACKOFFICE, PAYOR or PAYEE. */
		userType: FormControl<UserInfoUserType | null | undefined>,
	}
	export function CreateUserResponseFormGroup() {
		return new FormGroup<UserResponseFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			email: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			lockedOut: new FormControl<boolean | null | undefined>(undefined),
			lockedOutTimestamp: new FormControl<Date | null | undefined>(undefined),
			mfaStatus: new FormControl<UserResponseMfaStatus | null | undefined>(undefined),
			mfaType: new FormControl<MFADetailsMfa_type | null | undefined>(undefined),
			primaryContactNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+[1-9]\d{1,14}$')]),
			secondaryContactNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+[1-9]\d{1,14}$')]),
			smsNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+[1-9]\d{1,14}$')]),
			status: new FormControl<UserResponseStatus | null | undefined>(undefined),
			userType: new FormControl<UserInfoUserType | null | undefined>(undefined),
		});

	}

	export enum UserResponseMfaStatus { REGISTERED = 'REGISTERED', UNREGISTERED = 'UNREGISTERED' }

	export interface Role {

		/**
		 * the name of the role
		 * Required
		 */
		name: string;
	}
	export interface RoleFormProperties {

		/**
		 * the name of the role
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UserResponseStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED', PENDING = 'PENDING' }

	export interface PagedUserResponse_links {
		href?: string | null;
		rel?: string | null;
	}
	export interface PagedUserResponse_linksFormProperties {
		href: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreatePagedUserResponse_linksFormGroup() {
		return new FormGroup<PagedUserResponse_linksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PagedUserResponse_page {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages?: number | null;
	}
	export interface PagedUserResponse_pageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreatePagedUserResponse_pageFormGroup() {
		return new FormGroup<PagedUserResponse_pageFormProperties>({
			numberOfElements: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PasswordRequest {

		/**
		 * a password that passes validation
		 * Required
		 * Min length: 8
		 * Max length: 128
		 */
		password: string;
	}
	export interface PasswordRequestFormProperties {

		/**
		 * a password that passes validation
		 * Required
		 * Min length: 8
		 * Max length: 128
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreatePasswordRequestFormGroup() {
		return new FormGroup<PasswordRequestFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(128)]),
		});

	}


	/** Base type for all payable status changed events */
	export interface PayableStatusChanged extends PayeeEvent {
	}

	/** Base type for all payable status changed events */
	export interface PayableStatusChangedFormProperties extends PayeeEventFormProperties {
	}
	export function CreatePayableStatusChangedFormGroup() {
		return new FormGroup<PayableStatusChangedFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PayeeAddressV3 {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		city: string;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: string;

		/**
		 * Min length: 2
		 * Max length: 100
		 */
		countyOrProvince?: string | null;

		/**
		 * Required
		 * Min length: 2
		 * Max length: 255
		 */
		line1: string;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line2?: string | null;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line3?: string | null;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line4?: string | null;

		/**
		 * Min length: 2
		 * Max length: 30
		 */
		zipOrPostcode?: string | null;
	}
	export interface PayeeAddressV3FormProperties {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 100
		 */
		countyOrProvince: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 2
		 * Max length: 255
		 */
		line1: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line2: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line3: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line4: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 30
		 */
		zipOrPostcode: FormControl<string | null | undefined>,
	}
	export function CreatePayeeAddressV3FormGroup() {
		return new FormGroup<PayeeAddressV3FormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			countyOrProvince: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(100)]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			line3: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			line4: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			zipOrPostcode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(30)]),
		});

	}

	export interface PayeeAddressV4 {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		city: string;

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		country: string;

		/**
		 * Min length: 2
		 * Max length: 100
		 */
		countyOrProvince?: string | null;

		/**
		 * Required
		 * Min length: 2
		 * Max length: 255
		 */
		line1: string;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line2?: string | null;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line3?: string | null;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line4?: string | null;

		/**
		 * Min length: 2
		 * Max length: 30
		 */
		zipOrPostcode?: string | null;
	}
	export interface PayeeAddressV4FormProperties {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 100
		 */
		countyOrProvince: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 2
		 * Max length: 255
		 */
		line1: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line2: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line3: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line4: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 30
		 */
		zipOrPostcode: FormControl<string | null | undefined>,
	}
	export function CreatePayeeAddressV4FormGroup() {
		return new FormGroup<PayeeAddressV4FormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			countyOrProvince: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(100)]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			line3: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			line4: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			zipOrPostcode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(30)]),
		});

	}


	/** List Payee Changes Response Object */
	export interface PayeeDeltaResponseV3 {
		content?: Array<PayeeDeltaV3>;
		links?: Array<PayeeDeltaResponseV3_links>;
		page?: PayeeDeltaResponseV3_page;
	}

	/** List Payee Changes Response Object */
	export interface PayeeDeltaResponseV3FormProperties {
	}
	export function CreatePayeeDeltaResponseV3FormGroup() {
		return new FormGroup<PayeeDeltaResponseV3FormProperties>({
		});

	}

	export interface PayeeDeltaV3 {
		dbaName?: string | null;
		displayName?: string | null;
		email?: string | null;

		/** Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus?: string | null;
		payeeCountry?: string | null;

		/** Required */
		payeeId: string;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: string;
	}
	export interface PayeeDeltaV3FormProperties {
		dbaName: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus: FormControl<string | null | undefined>,
		payeeCountry: FormControl<string | null | undefined>,

		/** Required */
		payeeId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: FormControl<string | null | undefined>,
	}
	export function CreatePayeeDeltaV3FormGroup() {
		return new FormGroup<PayeeDeltaV3FormProperties>({
			dbaName: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			onboardedStatus: new FormControl<string | null | undefined>(undefined),
			payeeCountry: new FormControl<string | null | undefined>(undefined),
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remoteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface PayeeDeltaResponseV3_links {
		href?: string | null;
		rel?: string | null;
	}
	export interface PayeeDeltaResponseV3_linksFormProperties {
		href: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreatePayeeDeltaResponseV3_linksFormGroup() {
		return new FormGroup<PayeeDeltaResponseV3_linksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayeeDeltaResponseV3_page {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages?: number | null;
	}
	export interface PayeeDeltaResponseV3_pageFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		numberOfElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pageSize: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalElements: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreatePayeeDeltaResponseV3_pageFormGroup() {
		return new FormGroup<PayeeDeltaResponseV3_pageFormProperties>({
			numberOfElements: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			totalElements: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List Payee Changes Response Object */
	export interface PayeeDeltaResponseV4 {
		content?: Array<PayeeDeltaV4>;
		links?: Array<PayeeDeltaResponseV4_links>;
		page?: PayeeDeltaResponseV3_page;
	}

	/** List Payee Changes Response Object */
	export interface PayeeDeltaResponseV4FormProperties {
	}
	export function CreatePayeeDeltaResponseV4FormGroup() {
		return new FormGroup<PayeeDeltaResponseV4FormProperties>({
		});

	}

	export interface PayeeDeltaV4 {
		dbaName?: string | null;
		displayName?: string | null;
		email?: string | null;

		/** Payee onboarded status. One of the following value: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus?: string | null;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		payeeCountry?: string | null;

		/** Required */
		payeeId: string;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: string;
	}
	export interface PayeeDeltaV4FormProperties {
		dbaName: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** Payee onboarded status. One of the following value: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		payeeCountry: FormControl<string | null | undefined>,

		/** Required */
		payeeId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: FormControl<string | null | undefined>,
	}
	export function CreatePayeeDeltaV4FormGroup() {
		return new FormGroup<PayeeDeltaV4FormProperties>({
			dbaName: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			onboardedStatus: new FormControl<string | null | undefined>(undefined),
			payeeCountry: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remoteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface PayeeDeltaResponseV4_links {
		href?: string | null;
		rel?: string | null;
	}
	export interface PayeeDeltaResponseV4_linksFormProperties {
		href: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreatePayeeDeltaResponseV4_linksFormGroup() {
		return new FormGroup<PayeeDeltaResponseV4_linksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayeeDetailResponseV3 {

		/** The timestamp when the payee last accepted T&Cs */
		acceptTermsAndConditionsTimestamp?: Date | null;
		address?: PayeeAddressV3;
		cellphoneNumber?: string | null;
		challenge?: ChallengeV3;
		company?: CompanyV3;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		country?: string | null;
		created?: Date | null;
		disabled?: boolean | null;
		disabledComment?: string | null;
		disabledUpdatedTimestamp?: Date | null;
		displayName?: string | null;
		email?: string | null;
		enhancedKycCompleted?: boolean | null;

		/** Type: DateOnly */
		gracePeriodEndDate?: Date | null;
		individual?: IndividualV3;
		kycCompletedTimestamp?: string | null;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language?: string | null;
		marketingOptInDecision?: boolean | null;
		marketingOptInTimestamp?: string | null;

		/** Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus?: string | null;
		pausePayment?: boolean | null;
		pausePaymentTimestamp?: string | null;
		payeeId?: string | null;

		/** Type of Payee. One of the following values: Individual, Company */
		payeeType?: string | null;
		payorRefs?: Array<PayeePayorRefV3>;
		watchlistOverrideComment?: string | null;
		watchlistOverrideExpiresAtTimestamp?: Date | null;

		/** Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED */
		watchlistStatus?: string | null;
		watchlistStatusUpdatedTimestamp?: string | null;
	}
	export interface PayeeDetailResponseV3FormProperties {

		/** The timestamp when the payee last accepted T&Cs */
		acceptTermsAndConditionsTimestamp: FormControl<Date | null | undefined>,
		cellphoneNumber: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		country: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		disabledComment: FormControl<string | null | undefined>,
		disabledUpdatedTimestamp: FormControl<Date | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		enhancedKycCompleted: FormControl<boolean | null | undefined>,

		/** Type: DateOnly */
		gracePeriodEndDate: FormControl<Date | null | undefined>,
		kycCompletedTimestamp: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language: FormControl<string | null | undefined>,
		marketingOptInDecision: FormControl<boolean | null | undefined>,
		marketingOptInTimestamp: FormControl<string | null | undefined>,

		/** Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus: FormControl<string | null | undefined>,
		pausePayment: FormControl<boolean | null | undefined>,
		pausePaymentTimestamp: FormControl<string | null | undefined>,
		payeeId: FormControl<string | null | undefined>,

		/** Type of Payee. One of the following values: Individual, Company */
		payeeType: FormControl<string | null | undefined>,
		watchlistOverrideComment: FormControl<string | null | undefined>,
		watchlistOverrideExpiresAtTimestamp: FormControl<Date | null | undefined>,

		/** Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED */
		watchlistStatus: FormControl<string | null | undefined>,
		watchlistStatusUpdatedTimestamp: FormControl<string | null | undefined>,
	}
	export function CreatePayeeDetailResponseV3FormGroup() {
		return new FormGroup<PayeeDetailResponseV3FormProperties>({
			acceptTermsAndConditionsTimestamp: new FormControl<Date | null | undefined>(undefined),
			cellphoneNumber: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
			created: new FormControl<Date | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			disabledComment: new FormControl<string | null | undefined>(undefined),
			disabledUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			enhancedKycCompleted: new FormControl<boolean | null | undefined>(undefined),
			gracePeriodEndDate: new FormControl<Date | null | undefined>(undefined),
			kycCompletedTimestamp: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			marketingOptInDecision: new FormControl<boolean | null | undefined>(undefined),
			marketingOptInTimestamp: new FormControl<string | null | undefined>(undefined),
			onboardedStatus: new FormControl<string | null | undefined>(undefined),
			pausePayment: new FormControl<boolean | null | undefined>(undefined),
			pausePaymentTimestamp: new FormControl<string | null | undefined>(undefined),
			payeeId: new FormControl<string | null | undefined>(undefined),
			payeeType: new FormControl<string | null | undefined>(undefined),
			watchlistOverrideComment: new FormControl<string | null | undefined>(undefined),
			watchlistOverrideExpiresAtTimestamp: new FormControl<Date | null | undefined>(undefined),
			watchlistStatus: new FormControl<string | null | undefined>(undefined),
			watchlistStatusUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayeeDetailResponseV4 {

		/** The timestamp when the payee last accepted T&Cs */
		acceptTermsAndConditionsTimestamp?: Date | null;
		address?: PayeeAddressV4;
		cellphoneNumber?: string | null;

		/**
		 * <p>Used to override the default challenge presented to the payee when they onboard</p>
		 * <p>Not used after the payee has onboarded</p>
		 */
		challenge?: ChallengeV4;
		company?: CompanyV4;
		country?: string | null;
		created?: Date | null;
		disabled?: boolean | null;
		disabledComment?: string | null;
		disabledUpdatedTimestamp?: Date | null;
		displayName?: string | null;
		email?: string | null;
		enhancedKycCompleted?: boolean | null;

		/** Type: DateOnly */
		gracePeriodEndDate?: Date | null;
		individual?: IndividualV4;
		kycCompletedTimestamp?: string | null;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language?: string | null;
		marketingOptInDecision?: boolean | null;
		marketingOptInTimestamp?: string | null;

		/** Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus?: string | null;
		pausePayment?: boolean | null;
		pausePaymentTimestamp?: string | null;
		payeeId?: string | null;

		/** Type of Payee. One of the following values: Individual, Company */
		payeeType?: string | null;
		payorRefs?: Array<PayeePayorRefV4>;
		watchlistOverrideComment?: string | null;
		watchlistOverrideExpiresAtTimestamp?: Date | null;

		/** Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED */
		watchlistStatus?: string | null;
		watchlistStatusUpdatedTimestamp?: string | null;
	}
	export interface PayeeDetailResponseV4FormProperties {

		/** The timestamp when the payee last accepted T&Cs */
		acceptTermsAndConditionsTimestamp: FormControl<Date | null | undefined>,
		cellphoneNumber: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		disabled: FormControl<boolean | null | undefined>,
		disabledComment: FormControl<string | null | undefined>,
		disabledUpdatedTimestamp: FormControl<Date | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		enhancedKycCompleted: FormControl<boolean | null | undefined>,

		/** Type: DateOnly */
		gracePeriodEndDate: FormControl<Date | null | undefined>,
		kycCompletedTimestamp: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language: FormControl<string | null | undefined>,
		marketingOptInDecision: FormControl<boolean | null | undefined>,
		marketingOptInTimestamp: FormControl<string | null | undefined>,

		/** Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED */
		onboardedStatus: FormControl<string | null | undefined>,
		pausePayment: FormControl<boolean | null | undefined>,
		pausePaymentTimestamp: FormControl<string | null | undefined>,
		payeeId: FormControl<string | null | undefined>,

		/** Type of Payee. One of the following values: Individual, Company */
		payeeType: FormControl<string | null | undefined>,
		watchlistOverrideComment: FormControl<string | null | undefined>,
		watchlistOverrideExpiresAtTimestamp: FormControl<Date | null | undefined>,

		/** Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED */
		watchlistStatus: FormControl<string | null | undefined>,
		watchlistStatusUpdatedTimestamp: FormControl<string | null | undefined>,
	}
	export function CreatePayeeDetailResponseV4FormGroup() {
		return new FormGroup<PayeeDetailResponseV4FormProperties>({
			acceptTermsAndConditionsTimestamp: new FormControl<Date | null | undefined>(undefined),
			cellphoneNumber: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			disabledComment: new FormControl<string | null | undefined>(undefined),
			disabledUpdatedTimestamp: new FormControl<Date | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			enhancedKycCompleted: new FormControl<boolean | null | undefined>(undefined),
			gracePeriodEndDate: new FormControl<Date | null | undefined>(undefined),
			kycCompletedTimestamp: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			marketingOptInDecision: new FormControl<boolean | null | undefined>(undefined),
			marketingOptInTimestamp: new FormControl<string | null | undefined>(undefined),
			onboardedStatus: new FormControl<string | null | undefined>(undefined),
			pausePayment: new FormControl<boolean | null | undefined>(undefined),
			pausePaymentTimestamp: new FormControl<string | null | undefined>(undefined),
			payeeId: new FormControl<string | null | undefined>(undefined),
			payeeType: new FormControl<string | null | undefined>(undefined),
			watchlistOverrideComment: new FormControl<string | null | undefined>(undefined),
			watchlistOverrideExpiresAtTimestamp: new FormControl<Date | null | undefined>(undefined),
			watchlistStatus: new FormControl<string | null | undefined>(undefined),
			watchlistStatusUpdatedTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base type for all payee details changed events */
	export interface PayeeDetailsChanged extends PayeeEvent {
	}

	/** Base type for all payee details changed events */
	export interface PayeeDetailsChangedFormProperties extends PayeeEventFormProperties {
	}
	export function CreatePayeeDetailsChangedFormGroup() {
		return new FormGroup<PayeeDetailsChangedFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Base type for all Payee Events */
	export interface PayeeEvent extends SourceEvent {

		/**
		 * ID of this payee within the Velo platform
		 * Required
		 */
		payeeId: string;

		/** The reasons for the event notification. */
		reasons?: Array<PayeeEvent_allOf_reasons>;
	}

	/** Base type for all Payee Events */
	export interface PayeeEventFormProperties extends SourceEventFormProperties {

		/**
		 * ID of this payee within the Velo platform
		 * Required
		 */
		payeeId: FormControl<string | null | undefined>,
	}
	export function CreatePayeeEventFormGroup() {
		return new FormGroup<PayeeEventFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PayeeEvent_allOf_reasons {

		/** Required */
		code: string;

		/** Required */
		message: string;
	}
	export interface PayeeEvent_allOf_reasonsFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreatePayeeEvent_allOf_reasonsFormGroup() {
		return new FormGroup<PayeeEvent_allOf_reasonsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PayeeEvent_allOf {

		/**
		 * ID of this payee within the Velo platform
		 * Required
		 */
		payeeId: string;

		/** The reasons for the event notification. */
		reasons?: Array<PayeeEvent_allOf_reasons>;
	}
	export interface PayeeEvent_allOfFormProperties {

		/**
		 * ID of this payee within the Velo platform
		 * Required
		 */
		payeeId: FormControl<string | null | undefined>,
	}
	export function CreatePayeeEvent_allOfFormGroup() {
		return new FormGroup<PayeeEvent_allOfFormProperties>({
			payeeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PayeeType { COMPANY = 'COMPANY', INDIVIDUAL = 'INDIVIDUAL' }


	/** The type of the payee */
	export enum PayeeTypeEnum { Individual = 'Individual', Company = 'Company' }


	/**
	 * <p>All properties are optional</p>
	 * <p>Only provided properties will be updated</p>
	 * <p>Use null to null out a property that is allowed to be nullable</p>
	 */
	export interface PayeeUserSelfUpdateRequest {

		/** the email address of the user */
		email?: string | null;

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		firstName?: string | null;

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		lastName?: string | null;

		/**
		 * The main contact number for the user
		 */
		primaryContactNumber?: string | null;

		/**
		 * The secondary contact number for the user
		 */
		secondaryContactNumber?: string | null;

		/**
		 * The phone number of a device that the user can receive sms messages on
		 */
		smsNumber?: string | null;
	}

	/**
	 * <p>All properties are optional</p>
	 * <p>Only provided properties will be updated</p>
	 * <p>Use null to null out a property that is allowed to be nullable</p>
	 */
	export interface PayeeUserSelfUpdateRequestFormProperties {

		/** the email address of the user */
		email: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		lastName: FormControl<string | null | undefined>,

		/**
		 * The main contact number for the user
		 */
		primaryContactNumber: FormControl<string | null | undefined>,

		/**
		 * The secondary contact number for the user
		 */
		secondaryContactNumber: FormControl<string | null | undefined>,

		/**
		 * The phone number of a device that the user can receive sms messages on
		 */
		smsNumber: FormControl<string | null | undefined>,
	}
	export function CreatePayeeUserSelfUpdateRequestFormGroup() {
		return new FormGroup<PayeeUserSelfUpdateRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			primaryContactNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+[1-9]\d{1,14}$')]),
			secondaryContactNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+[1-9]\d{1,14}$')]),
			smsNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+[1-9]\d{1,14}$')]),
		});

	}

	export interface PaymentChannelCountry {

		/**
		 * The ISO code for the country
		 * Required
		 */
		isoCountryCode: string;

		/**
		 * The rules for the given country
		 * Required
		 */
		rules: Array<PaymentChannelRule>;
	}
	export interface PaymentChannelCountryFormProperties {

		/**
		 * The ISO code for the country
		 * Required
		 */
		isoCountryCode: FormControl<string | null | undefined>,
	}
	export function CreatePaymentChannelCountryFormGroup() {
		return new FormGroup<PaymentChannelCountryFormProperties>({
			isoCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Rules that will get applied when creating or updating a payment channel for the given country */
	export interface PaymentChannelRule {

		/** An optional description, or hint, as to how the user should enter the field value. */
		description?: string | null;

		/**
		 * User friendly name
		 * Required
		 */
		displayName: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		displayOrder?: number | null;

		/**
		 * <p>the rule element</p>
		 * <p>will match a given element name for a payment channel configuration
		 * Required
		 */
		element: string;

		/**
		 * maximum length of the element data
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxLength?: number | null;

		/**
		 * mininum length of the element data
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minLength?: number | null;

		/**
		 * is this element required
		 * Required
		 */
		required: boolean;

		/**
		 * a regex to validate the element data
		 * Required
		 */
		validation: string;
	}

	/** Rules that will get applied when creating or updating a payment channel for the given country */
	export interface PaymentChannelRuleFormProperties {

		/** An optional description, or hint, as to how the user should enter the field value. */
		description: FormControl<string | null | undefined>,

		/**
		 * User friendly name
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		displayOrder: FormControl<number | null | undefined>,

		/**
		 * <p>the rule element</p>
		 * <p>will match a given element name for a payment channel configuration
		 * Required
		 */
		element: FormControl<string | null | undefined>,

		/**
		 * maximum length of the element data
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxLength: FormControl<number | null | undefined>,

		/**
		 * mininum length of the element data
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minLength: FormControl<number | null | undefined>,

		/**
		 * is this element required
		 * Required
		 */
		required: FormControl<boolean | null | undefined>,

		/**
		 * a regex to validate the element data
		 * Required
		 */
		validation: FormControl<string | null | undefined>,
	}
	export function CreatePaymentChannelRuleFormGroup() {
		return new FormGroup<PaymentChannelRuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayOrder: new FormControl<number | null | undefined>(undefined),
			element: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxLength: new FormControl<number | null | undefined>(undefined),
			minLength: new FormControl<number | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			validation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaymentChannelRulesResponse {
		bank?: Array<PaymentChannelCountry>;
	}
	export interface PaymentChannelRulesResponseFormProperties {
	}
	export function CreatePaymentChannelRulesResponseFormGroup() {
		return new FormGroup<PaymentChannelRulesResponseFormProperties>({
		});

	}

	export interface PaymentDelta {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paymentAmount?: number | null;
		paymentCurrency?: string | null;

		/** Required */
		paymentId: string;
		payorPaymentId?: string | null;

		/** Required */
		payoutId: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sourceAmount?: number | null;
		sourceCurrency?: string | null;
		status?: string | null;
	}
	export interface PaymentDeltaFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paymentAmount: FormControl<number | null | undefined>,
		paymentCurrency: FormControl<string | null | undefined>,

		/** Required */
		paymentId: FormControl<string | null | undefined>,
		payorPaymentId: FormControl<string | null | undefined>,

		/** Required */
		payoutId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sourceAmount: FormControl<number | null | undefined>,
		sourceCurrency: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreatePaymentDeltaFormGroup() {
		return new FormGroup<PaymentDeltaFormProperties>({
			paymentAmount: new FormControl<number | null | undefined>(undefined),
			paymentCurrency: new FormControl<string | null | undefined>(undefined),
			paymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorPaymentId: new FormControl<string | null | undefined>(undefined),
			payoutId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceAmount: new FormControl<number | null | undefined>(undefined),
			sourceCurrency: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List Payment Changes Response Object */
	export interface PaymentDeltaResponse {
		content?: Array<PaymentDelta>;
		links?: Array<PagedPayeeResponseV3_links>;
		page?: PagedPayeeInvitationStatusResponseV3_page;
	}

	/** List Payment Changes Response Object */
	export interface PaymentDeltaResponseFormProperties {
	}
	export function CreatePaymentDeltaResponseFormGroup() {
		return new FormGroup<PaymentDeltaResponseFormProperties>({
		});

	}


	/** List Payment Changes Response Object */
	export interface PaymentDeltaResponseV1 {
		content?: Array<PaymentDeltaV1>;
		links?: Array<PagedPayeeResponseV3_links>;
		page?: PagedPayeeInvitationStatusResponseV3_page;
	}

	/** List Payment Changes Response Object */
	export interface PaymentDeltaResponseV1FormProperties {
	}
	export function CreatePaymentDeltaResponseV1FormGroup() {
		return new FormGroup<PaymentDeltaResponseV1FormProperties>({
		});

	}

	export interface PaymentDeltaV1 {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paymentAmount?: number | null;
		paymentCurrency?: string | null;

		/** Required */
		paymentId: string;
		payorPaymentId?: string | null;

		/** Required */
		payoutId: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sourceAmount?: number | null;
		sourceCurrency?: string | null;
		status?: string | null;
	}
	export interface PaymentDeltaV1FormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paymentAmount: FormControl<number | null | undefined>,
		paymentCurrency: FormControl<string | null | undefined>,

		/** Required */
		paymentId: FormControl<string | null | undefined>,
		payorPaymentId: FormControl<string | null | undefined>,

		/** Required */
		payoutId: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sourceAmount: FormControl<number | null | undefined>,
		sourceCurrency: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreatePaymentDeltaV1FormGroup() {
		return new FormGroup<PaymentDeltaV1FormProperties>({
			paymentAmount: new FormControl<number | null | undefined>(undefined),
			paymentCurrency: new FormControl<string | null | undefined>(undefined),
			paymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorPaymentId: new FormControl<string | null | undefined>(undefined),
			payoutId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceAmount: new FormControl<number | null | undefined>(undefined),
			sourceCurrency: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base type for all Payment Events */
	export interface PaymentEvent extends SourceEvent {

		/**
		 * ID of this payment within the Velo platform
		 * Required
		 */
		paymentId: string;

		/** ID of this payment in the payors system */
		payorPaymentId?: string | null;

		/** Holder for all payor ids associated with a Payout */
		payoutPayorIds?: PayoutPayorIds;
	}

	/** Base type for all Payment Events */
	export interface PaymentEventFormProperties extends SourceEventFormProperties {

		/**
		 * ID of this payment within the Velo platform
		 * Required
		 */
		paymentId: FormControl<string | null | undefined>,

		/** ID of this payment in the payors system */
		payorPaymentId: FormControl<string | null | undefined>,
	}
	export function CreatePaymentEventFormGroup() {
		return new FormGroup<PaymentEventFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorPaymentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holder for all payor ids associated with a Payout */
	export interface PayoutPayorIds {

		/**
		 * The ID of the Payor providing the source account for the payout
		 * Required
		 */
		payoutFromPayorId: string;

		/**
		 * The ID of the Payor that owns the Payee (on behalf of)
		 * Required
		 */
		payoutToPayorId: string;

		/**
		 * The ID of the Payor that is submitting the payout
		 * Required
		 */
		submittingPayorId: string;
	}

	/** Holder for all payor ids associated with a Payout */
	export interface PayoutPayorIdsFormProperties {

		/**
		 * The ID of the Payor providing the source account for the payout
		 * Required
		 */
		payoutFromPayorId: FormControl<string | null | undefined>,

		/**
		 * The ID of the Payor that owns the Payee (on behalf of)
		 * Required
		 */
		payoutToPayorId: FormControl<string | null | undefined>,

		/**
		 * The ID of the Payor that is submitting the payout
		 * Required
		 */
		submittingPayorId: FormControl<string | null | undefined>,
	}
	export function CreatePayoutPayorIdsFormGroup() {
		return new FormGroup<PayoutPayorIdsFormProperties>({
			payoutFromPayorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payoutToPayorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			submittingPayorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaymentEvent_allOf {

		/**
		 * ID of this payment within the Velo platform
		 * Required
		 */
		paymentId: string;

		/** ID of this payment in the payors system */
		payorPaymentId?: string | null;

		/** Holder for all payor ids associated with a Payout */
		payoutPayorIds?: PayoutPayorIds;
	}
	export interface PaymentEvent_allOfFormProperties {

		/**
		 * ID of this payment within the Velo platform
		 * Required
		 */
		paymentId: FormControl<string | null | undefined>,

		/** ID of this payment in the payors system */
		payorPaymentId: FormControl<string | null | undefined>,
	}
	export function CreatePaymentEvent_allOfFormGroup() {
		return new FormGroup<PaymentEvent_allOfFormProperties>({
			paymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorPaymentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base type for all rejection or return payment events */
	export interface PaymentRejectedOrReturned extends PaymentStatusChanged {

		/**
		 * The Velo code that indicates why the payment was rejected or returned
		 * Required
		 */
		reasonCode: string;

		/**
		 * The description of why the payment was rejected or returned
		 * Required
		 */
		reasonMessage: string;
	}

	/** Base type for all rejection or return payment events */
	export interface PaymentRejectedOrReturnedFormProperties extends PaymentStatusChangedFormProperties {

		/**
		 * The Velo code that indicates why the payment was rejected or returned
		 * Required
		 */
		reasonCode: FormControl<string | null | undefined>,

		/**
		 * The description of why the payment was rejected or returned
		 * Required
		 */
		reasonMessage: FormControl<string | null | undefined>,
	}
	export function CreatePaymentRejectedOrReturnedFormGroup() {
		return new FormGroup<PaymentRejectedOrReturnedFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorPaymentId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reasonCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reasonMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaymentRejectedOrReturned_allOf {

		/**
		 * The Velo code that indicates why the payment was rejected or returned
		 * Required
		 */
		reasonCode: string;

		/**
		 * The description of why the payment was rejected or returned
		 * Required
		 */
		reasonMessage: string;
	}
	export interface PaymentRejectedOrReturned_allOfFormProperties {

		/**
		 * The Velo code that indicates why the payment was rejected or returned
		 * Required
		 */
		reasonCode: FormControl<string | null | undefined>,

		/**
		 * The description of why the payment was rejected or returned
		 * Required
		 */
		reasonMessage: FormControl<string | null | undefined>,
	}
	export function CreatePaymentRejectedOrReturned_allOfFormGroup() {
		return new FormGroup<PaymentRejectedOrReturned_allOfFormProperties>({
			reasonCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reasonMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaymentResponseV4_payout {

		/** Details of payor and principal participating in a payout. */
		payoutFrom?: PayoutPayor;
		payoutId?: string | null;

		/** Details of payor and principal participating in a payout. */
		payoutTo?: PayoutPayor;
	}
	export interface PaymentResponseV4_payoutFormProperties {
		payoutId: FormControl<string | null | undefined>,
	}
	export function CreatePaymentResponseV4_payoutFormGroup() {
		return new FormGroup<PaymentResponseV4_payoutFormProperties>({
			payoutId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base type for all payment status changed events */
	export interface PaymentStatusChanged extends PaymentEvent {

		/**
		 * The new status of the payment. One of "SUBMITTED" "ACCEPTED" "REJECTED" "ACCEPTED_BY_RAILS" "CONFIRMED" "RETURNED" "WITHDRAWN"
		 * Required
		 */
		status: string;
	}

	/** Base type for all payment status changed events */
	export interface PaymentStatusChangedFormProperties extends PaymentEventFormProperties {

		/**
		 * The new status of the payment. One of "SUBMITTED" "ACCEPTED" "REJECTED" "ACCEPTED_BY_RAILS" "CONFIRMED" "RETURNED" "WITHDRAWN"
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreatePaymentStatusChangedFormGroup() {
		return new FormGroup<PaymentStatusChangedFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorPaymentId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaymentStatusChanged_allOf {

		/**
		 * The new status of the payment. One of "SUBMITTED" "ACCEPTED" "REJECTED" "ACCEPTED_BY_RAILS" "CONFIRMED" "RETURNED" "WITHDRAWN"
		 * Required
		 */
		status: string;
	}
	export interface PaymentStatusChanged_allOfFormProperties {

		/**
		 * The new status of the payment. One of "SUBMITTED" "ACCEPTED" "REJECTED" "ACCEPTED_BY_RAILS" "CONFIRMED" "RETURNED" "WITHDRAWN"
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreatePaymentStatusChanged_allOfFormGroup() {
		return new FormGroup<PaymentStatusChanged_allOfFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PayorAddress {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		city: string;

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		country: string;

		/**
		 * Min length: 2
		 * Max length: 100
		 */
		countyOrProvince?: string | null;

		/**
		 * Required
		 * Min length: 2
		 * Max length: 255
		 */
		line1: string;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line2?: string | null;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line3?: string | null;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line4?: string | null;

		/**
		 * Min length: 2
		 * Max length: 30
		 */
		zipOrPostcode?: string | null;
	}
	export interface PayorAddressFormProperties {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 100
		 */
		countyOrProvince: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 2
		 * Max length: 255
		 */
		line1: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line2: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line3: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line4: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 30
		 */
		zipOrPostcode: FormControl<string | null | undefined>,
	}
	export function CreatePayorAddressFormGroup() {
		return new FormGroup<PayorAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			countyOrProvince: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(100)]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			line3: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			line4: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			zipOrPostcode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(30)]),
		});

	}

	export interface PayorAddressV2 {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		city: string;

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		country: string;

		/**
		 * Min length: 2
		 * Max length: 100
		 */
		countyOrProvince?: string | null;

		/**
		 * Required
		 * Min length: 2
		 * Max length: 255
		 */
		line1: string;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line2?: string | null;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line3?: string | null;

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line4?: string | null;

		/**
		 * Min length: 2
		 * Max length: 30
		 */
		zipOrPostcode?: string | null;
	}
	export interface PayorAddressV2FormProperties {

		/**
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 2
		 * Max length: 50
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 100
		 */
		countyOrProvince: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 2
		 * Max length: 255
		 */
		line1: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line2: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line3: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 255
		 */
		line4: FormControl<string | null | undefined>,

		/**
		 * Min length: 2
		 * Max length: 30
		 */
		zipOrPostcode: FormControl<string | null | undefined>,
	}
	export function CreatePayorAddressV2FormGroup() {
		return new FormGroup<PayorAddressV2FormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
			countyOrProvince: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(100)]),
			line1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
			line2: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			line3: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			line4: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			zipOrPostcode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(30)]),
		});

	}

	export interface PayorAmlTransaction {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		credit?: string | null;

		/** ISO 4217 3 character currency code */
		creditCurrency?: string | null;
		dateFundingRequested?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		debit?: string | null;

		/** ISO 4217 3 character currency code */
		debitCurrency?: string | null;
		fundingType?: string | null;

		/** Type: double */
		fxApplied?: number | null;
		payeeEmail?: string | null;
		payeeName?: string | null;
		payeeType?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		paymentAmount?: string | null;

		/** ISO 4217 3 character currency code */
		paymentCurrency?: string | null;
		paymentMemo?: string | null;
		paymentRails?: string | null;
		paymentStatus?: string | null;
		payorPaymentId?: string | null;
		rejectReason?: string | null;

		/** Remote ID of the Payee, set by Payor */
		remoteId?: string | null;
		reportTransactionType?: string | null;
		returnCode?: string | null;
		returnDescription?: string | null;
		returnFee?: string | null;

		/** ISO 4217 3 character currency code */
		returnFeeCurrency?: string | null;
		returnFeeDescription?: string | null;
		sourceAccount?: string | null;

		/** Type: DateOnly */
		transactionDate?: Date | null;
		transactionTime?: string | null;
	}
	export interface PayorAmlTransactionFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		credit: FormControl<string | null | undefined>,

		/** ISO 4217 3 character currency code */
		creditCurrency: FormControl<string | null | undefined>,
		dateFundingRequested: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		debit: FormControl<string | null | undefined>,

		/** ISO 4217 3 character currency code */
		debitCurrency: FormControl<string | null | undefined>,
		fundingType: FormControl<string | null | undefined>,

		/** Type: double */
		fxApplied: FormControl<number | null | undefined>,
		payeeEmail: FormControl<string | null | undefined>,
		payeeName: FormControl<string | null | undefined>,
		payeeType: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		paymentAmount: FormControl<string | null | undefined>,

		/** ISO 4217 3 character currency code */
		paymentCurrency: FormControl<string | null | undefined>,
		paymentMemo: FormControl<string | null | undefined>,
		paymentRails: FormControl<string | null | undefined>,
		paymentStatus: FormControl<string | null | undefined>,
		payorPaymentId: FormControl<string | null | undefined>,
		rejectReason: FormControl<string | null | undefined>,

		/** Remote ID of the Payee, set by Payor */
		remoteId: FormControl<string | null | undefined>,
		reportTransactionType: FormControl<string | null | undefined>,
		returnCode: FormControl<string | null | undefined>,
		returnDescription: FormControl<string | null | undefined>,
		returnFee: FormControl<string | null | undefined>,

		/** ISO 4217 3 character currency code */
		returnFeeCurrency: FormControl<string | null | undefined>,
		returnFeeDescription: FormControl<string | null | undefined>,
		sourceAccount: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		transactionDate: FormControl<Date | null | undefined>,
		transactionTime: FormControl<string | null | undefined>,
	}
	export function CreatePayorAmlTransactionFormGroup() {
		return new FormGroup<PayorAmlTransactionFormProperties>({
			credit: new FormControl<string | null | undefined>(undefined),
			creditCurrency: new FormControl<string | null | undefined>(undefined),
			dateFundingRequested: new FormControl<string | null | undefined>(undefined),
			debit: new FormControl<string | null | undefined>(undefined),
			debitCurrency: new FormControl<string | null | undefined>(undefined),
			fundingType: new FormControl<string | null | undefined>(undefined),
			fxApplied: new FormControl<number | null | undefined>(undefined),
			payeeEmail: new FormControl<string | null | undefined>(undefined),
			payeeName: new FormControl<string | null | undefined>(undefined),
			payeeType: new FormControl<string | null | undefined>(undefined),
			paymentAmount: new FormControl<string | null | undefined>(undefined),
			paymentCurrency: new FormControl<string | null | undefined>(undefined),
			paymentMemo: new FormControl<string | null | undefined>(undefined),
			paymentRails: new FormControl<string | null | undefined>(undefined),
			paymentStatus: new FormControl<string | null | undefined>(undefined),
			payorPaymentId: new FormControl<string | null | undefined>(undefined),
			rejectReason: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined),
			reportTransactionType: new FormControl<string | null | undefined>(undefined),
			returnCode: new FormControl<string | null | undefined>(undefined),
			returnDescription: new FormControl<string | null | undefined>(undefined),
			returnFee: new FormControl<string | null | undefined>(undefined),
			returnFeeCurrency: new FormControl<string | null | undefined>(undefined),
			returnFeeDescription: new FormControl<string | null | undefined>(undefined),
			sourceAccount: new FormControl<string | null | undefined>(undefined),
			transactionDate: new FormControl<Date | null | undefined>(undefined),
			transactionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayorAmlTransactionV3 {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		credit?: string | null;

		/** ISO 4217 3 character currency code */
		creditCurrency?: string | null;
		dateFundingRequested?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		debit?: string | null;

		/** ISO 4217 3 character currency code */
		debitCurrency?: string | null;
		fundingType?: string | null;

		/** Type: double */
		fxApplied?: number | null;
		payeeType?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		paymentAmount?: string | null;

		/** ISO 4217 3 character currency code */
		paymentCurrency?: string | null;
		paymentMemo?: string | null;
		paymentRails?: string | null;
		paymentStatus?: string | null;
		payorPaymentId?: string | null;
		rejectReason?: string | null;

		/** Remote ID of the Payee, set by Payor */
		remoteId?: string | null;
		reportTransactionType?: string | null;
		returnCode?: string | null;
		returnDescription?: string | null;
		returnFee?: string | null;

		/** ISO 4217 3 character currency code */
		returnFeeCurrency?: string | null;
		returnFeeDescription?: string | null;
		sourceAccount?: string | null;

		/** Type: DateOnly */
		transactionDate?: Date | null;
		transactionTime?: string | null;
	}
	export interface PayorAmlTransactionV3FormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		credit: FormControl<string | null | undefined>,

		/** ISO 4217 3 character currency code */
		creditCurrency: FormControl<string | null | undefined>,
		dateFundingRequested: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		debit: FormControl<string | null | undefined>,

		/** ISO 4217 3 character currency code */
		debitCurrency: FormControl<string | null | undefined>,
		fundingType: FormControl<string | null | undefined>,

		/** Type: double */
		fxApplied: FormControl<number | null | undefined>,
		payeeType: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		paymentAmount: FormControl<string | null | undefined>,

		/** ISO 4217 3 character currency code */
		paymentCurrency: FormControl<string | null | undefined>,
		paymentMemo: FormControl<string | null | undefined>,
		paymentRails: FormControl<string | null | undefined>,
		paymentStatus: FormControl<string | null | undefined>,
		payorPaymentId: FormControl<string | null | undefined>,
		rejectReason: FormControl<string | null | undefined>,

		/** Remote ID of the Payee, set by Payor */
		remoteId: FormControl<string | null | undefined>,
		reportTransactionType: FormControl<string | null | undefined>,
		returnCode: FormControl<string | null | undefined>,
		returnDescription: FormControl<string | null | undefined>,
		returnFee: FormControl<string | null | undefined>,

		/** ISO 4217 3 character currency code */
		returnFeeCurrency: FormControl<string | null | undefined>,
		returnFeeDescription: FormControl<string | null | undefined>,
		sourceAccount: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		transactionDate: FormControl<Date | null | undefined>,
		transactionTime: FormControl<string | null | undefined>,
	}
	export function CreatePayorAmlTransactionV3FormGroup() {
		return new FormGroup<PayorAmlTransactionV3FormProperties>({
			credit: new FormControl<string | null | undefined>(undefined),
			creditCurrency: new FormControl<string | null | undefined>(undefined),
			dateFundingRequested: new FormControl<string | null | undefined>(undefined),
			debit: new FormControl<string | null | undefined>(undefined),
			debitCurrency: new FormControl<string | null | undefined>(undefined),
			fundingType: new FormControl<string | null | undefined>(undefined),
			fxApplied: new FormControl<number | null | undefined>(undefined),
			payeeType: new FormControl<string | null | undefined>(undefined),
			paymentAmount: new FormControl<string | null | undefined>(undefined),
			paymentCurrency: new FormControl<string | null | undefined>(undefined),
			paymentMemo: new FormControl<string | null | undefined>(undefined),
			paymentRails: new FormControl<string | null | undefined>(undefined),
			paymentStatus: new FormControl<string | null | undefined>(undefined),
			payorPaymentId: new FormControl<string | null | undefined>(undefined),
			rejectReason: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined),
			reportTransactionType: new FormControl<string | null | undefined>(undefined),
			returnCode: new FormControl<string | null | undefined>(undefined),
			returnDescription: new FormControl<string | null | undefined>(undefined),
			returnFee: new FormControl<string | null | undefined>(undefined),
			returnFeeCurrency: new FormControl<string | null | undefined>(undefined),
			returnFeeDescription: new FormControl<string | null | undefined>(undefined),
			sourceAccount: new FormControl<string | null | undefined>(undefined),
			transactionDate: new FormControl<Date | null | undefined>(undefined),
			transactionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayorBrandingResponse {

		/** How the payor has chosen to refer to payees */
		collectiveAlias?: string | null;

		/** The payor’s 'Doing Business As' name */
		dbaName?: string | null;

		/**
		 * <p>The URL to use for this payor’s logo</p>
		 * <p>This will be an immutable system-generated URL</p>
		 * Required
		 */
		logoUrl: string;

		/**
		 * The name of the payor
		 * Required
		 */
		payorName: string;

		/** The payor’s support contact address */
		supportContact?: string | null;
	}
	export interface PayorBrandingResponseFormProperties {

		/** How the payor has chosen to refer to payees */
		collectiveAlias: FormControl<string | null | undefined>,

		/** The payor’s 'Doing Business As' name */
		dbaName: FormControl<string | null | undefined>,

		/**
		 * <p>The URL to use for this payor’s logo</p>
		 * <p>This will be an immutable system-generated URL</p>
		 * Required
		 */
		logoUrl: FormControl<string | null | undefined>,

		/**
		 * The name of the payor
		 * Required
		 */
		payorName: FormControl<string | null | undefined>,

		/** The payor’s support contact address */
		supportContact: FormControl<string | null | undefined>,
	}
	export function CreatePayorBrandingResponseFormGroup() {
		return new FormGroup<PayorBrandingResponseFormProperties>({
			collectiveAlias: new FormControl<string | null | undefined>(undefined),
			dbaName: new FormControl<string | null | undefined>(undefined),
			logoUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			supportContact: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayorCreateApiKeyRequest {

		/**
		 * Description of the key.
		 * Min length: 2
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * A name for the key.
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		name: string;

		/**
		 * <p>A role to assign to the key.</p>
		 * <p>If you want your API key to have write access then assign the role velo.payor.admin</p>
		 * <p>A later version will change this property from a list to string</p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		roles: Array<string>;
	}
	export interface PayorCreateApiKeyRequestFormProperties {

		/**
		 * Description of the key.
		 * Min length: 2
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A name for the key.
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePayorCreateApiKeyRequestFormGroup() {
		return new FormGroup<PayorCreateApiKeyRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(1024)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
		});

	}

	export interface PayorCreateApiKeyResponse {

		/** API Key */
		apiKey?: string | null;

		/** API Secret */
		apiSecret?: string | null;
	}
	export interface PayorCreateApiKeyResponseFormProperties {

		/** API Key */
		apiKey: FormControl<string | null | undefined>,

		/** API Secret */
		apiSecret: FormControl<string | null | undefined>,
	}
	export function CreatePayorCreateApiKeyResponseFormGroup() {
		return new FormGroup<PayorCreateApiKeyResponseFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			apiSecret: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayorCreateApplicationRequest {

		/**
		 * Description of the application.
		 * Min length: 2
		 * Max length: 1024
		 */
		description?: string | null;

		/**
		 * The name of the application.
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		name: string;
	}
	export interface PayorCreateApplicationRequestFormProperties {

		/**
		 * Description of the application.
		 * Min length: 2
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the application.
		 * Required
		 * Min length: 2
		 * Max length: 100
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePayorCreateApplicationRequestFormGroup() {
		return new FormGroup<PayorCreateApplicationRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(1024)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
		});

	}

	export interface PayorEmailOptOutRequest {

		/** Required */
		reminderEmailsOptOut: boolean;
	}
	export interface PayorEmailOptOutRequestFormProperties {

		/** Required */
		reminderEmailsOptOut: FormControl<boolean | null | undefined>,
	}
	export function CreatePayorEmailOptOutRequestFormGroup() {
		return new FormGroup<PayorEmailOptOutRequestFormProperties>({
			reminderEmailsOptOut: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List Payor Links Response Object */
	export interface PayorLinksResponse {
		links?: Array<PayorLinksResponse_links>;
		payors?: Array<PayorLinksResponse_payors>;
	}

	/** List Payor Links Response Object */
	export interface PayorLinksResponseFormProperties {
	}
	export function CreatePayorLinksResponseFormGroup() {
		return new FormGroup<PayorLinksResponseFormProperties>({
		});

	}

	export interface PayorLinksResponse_links {

		/** Required */
		fromPayorId: string;

		/** Required */
		linkId: string;

		/**
		 * The type of the link. One of the following values: PARENT_OF
		 * Required
		 */
		linkType: string;

		/** Required */
		toPayorId: string;
	}
	export interface PayorLinksResponse_linksFormProperties {

		/** Required */
		fromPayorId: FormControl<string | null | undefined>,

		/** Required */
		linkId: FormControl<string | null | undefined>,

		/**
		 * The type of the link. One of the following values: PARENT_OF
		 * Required
		 */
		linkType: FormControl<string | null | undefined>,

		/** Required */
		toPayorId: FormControl<string | null | undefined>,
	}
	export function CreatePayorLinksResponse_linksFormGroup() {
		return new FormGroup<PayorLinksResponse_linksFormProperties>({
			fromPayorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			toPayorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PayorLinksResponse_payors {

		/** Current KYC state. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC */
		kycState?: string | null;

		/** Required */
		payorId: string;

		/** Required */
		payorName: string;
		primaryContactEmail?: string | null;
	}
	export interface PayorLinksResponse_payorsFormProperties {

		/** Current KYC state. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC */
		kycState: FormControl<string | null | undefined>,

		/** Required */
		payorId: FormControl<string | null | undefined>,

		/** Required */
		payorName: FormControl<string | null | undefined>,
		primaryContactEmail: FormControl<string | null | undefined>,
	}
	export function CreatePayorLinksResponse_payorsFormGroup() {
		return new FormGroup<PayorLinksResponse_payorsFormProperties>({
			kycState: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			primaryContactEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayorLogoRequest {
		logo?: string | null;
	}
	export interface PayorLogoRequestFormProperties {
		logo: FormControl<string | null | undefined>,
	}
	export function CreatePayorLogoRequestFormGroup() {
		return new FormGroup<PayorLogoRequestFormProperties>({
			logo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PayorV1 {
		address?: PayorAddress;

		/** Whether or not the payor allows language choice in the UI. */
		allowsLanguageChoice?: boolean | null;

		/** How the payor has chosen to refer to payees. */
		collectiveAlias?: string | null;

		/** The payor’s 'Doing Business As' name. */
		dbaName?: string | null;

		/** The funding account name to be used for the payor. */
		fundingAccountAccountName?: string | null;

		/** The funding account number to be used for the payor. */
		fundingAccountAccountNumber?: string | null;

		/** The funding account routing number to be used for the payor. */
		fundingAccountRoutingNumber?: string | null;
		includesReports?: boolean | null;

		/** The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC */
		kycState?: string | null;

		/** The payor’s language preference. Must be one of [EN, FR]. */
		language?: string | null;

		/** Whether or not the payor has been manually locked by the backoffice. */
		manualLockout?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxMasterPayorAdmins?: number | null;

		/**
		 * The grace period for paying payees in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		payeeGracePeriodDays?: number | null;

		/** Whether grace period processing is enabled. */
		payeeGracePeriodProcessingEnabled?: boolean | null;
		payorId?: string | null;

		/**
		 * The name of the payor.
		 * Required
		 */
		payorName: string;

		/** Primary contact email for the payor. */
		primaryContactEmail?: string | null;

		/** Name of primary contact for the payor. */
		primaryContactName?: string | null;

		/** Primary contact phone number for the payor. */
		primaryContactPhone?: string | null;

		/** Whether or not the payor has opted-out of reminder emails being sent. */
		reminderEmailsOptOut?: boolean | null;

		/** The payor’s support contact email address. */
		supportContact?: string | null;
		transmissionTypes?: TransmissionTypes;
	}
	export interface PayorV1FormProperties {

		/** Whether or not the payor allows language choice in the UI. */
		allowsLanguageChoice: FormControl<boolean | null | undefined>,

		/** How the payor has chosen to refer to payees. */
		collectiveAlias: FormControl<string | null | undefined>,

		/** The payor’s 'Doing Business As' name. */
		dbaName: FormControl<string | null | undefined>,

		/** The funding account name to be used for the payor. */
		fundingAccountAccountName: FormControl<string | null | undefined>,

		/** The funding account number to be used for the payor. */
		fundingAccountAccountNumber: FormControl<string | null | undefined>,

		/** The funding account routing number to be used for the payor. */
		fundingAccountRoutingNumber: FormControl<string | null | undefined>,
		includesReports: FormControl<boolean | null | undefined>,

		/** The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC */
		kycState: FormControl<string | null | undefined>,

		/** The payor’s language preference. Must be one of [EN, FR]. */
		language: FormControl<string | null | undefined>,

		/** Whether or not the payor has been manually locked by the backoffice. */
		manualLockout: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxMasterPayorAdmins: FormControl<number | null | undefined>,

		/**
		 * The grace period for paying payees in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		payeeGracePeriodDays: FormControl<number | null | undefined>,

		/** Whether grace period processing is enabled. */
		payeeGracePeriodProcessingEnabled: FormControl<boolean | null | undefined>,
		payorId: FormControl<string | null | undefined>,

		/**
		 * The name of the payor.
		 * Required
		 */
		payorName: FormControl<string | null | undefined>,

		/** Primary contact email for the payor. */
		primaryContactEmail: FormControl<string | null | undefined>,

		/** Name of primary contact for the payor. */
		primaryContactName: FormControl<string | null | undefined>,

		/** Primary contact phone number for the payor. */
		primaryContactPhone: FormControl<string | null | undefined>,

		/** Whether or not the payor has opted-out of reminder emails being sent. */
		reminderEmailsOptOut: FormControl<boolean | null | undefined>,

		/** The payor’s support contact email address. */
		supportContact: FormControl<string | null | undefined>,
	}
	export function CreatePayorV1FormGroup() {
		return new FormGroup<PayorV1FormProperties>({
			allowsLanguageChoice: new FormControl<boolean | null | undefined>(undefined),
			collectiveAlias: new FormControl<string | null | undefined>(undefined),
			dbaName: new FormControl<string | null | undefined>(undefined),
			fundingAccountAccountName: new FormControl<string | null | undefined>(undefined),
			fundingAccountAccountNumber: new FormControl<string | null | undefined>(undefined),
			fundingAccountRoutingNumber: new FormControl<string | null | undefined>(undefined),
			includesReports: new FormControl<boolean | null | undefined>(undefined),
			kycState: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			manualLockout: new FormControl<boolean | null | undefined>(undefined),
			maxMasterPayorAdmins: new FormControl<number | null | undefined>(undefined),
			payeeGracePeriodDays: new FormControl<number | null | undefined>(undefined),
			payeeGracePeriodProcessingEnabled: new FormControl<boolean | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined),
			payorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			primaryContactEmail: new FormControl<string | null | undefined>(undefined),
			primaryContactName: new FormControl<string | null | undefined>(undefined),
			primaryContactPhone: new FormControl<string | null | undefined>(undefined),
			reminderEmailsOptOut: new FormControl<boolean | null | undefined>(undefined),
			supportContact: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransmissionTypes {

		/**
		 * Whether the Payor is allowed to pay via ACH
		 * Required
		 */
		ACH: boolean;

		/**
		 * Whether the Payor is allowed to pay via same day ACH
		 * Required
		 */
		SAME_DAY_ACH: boolean;

		/**
		 * Whether the Payor is allowed to pay via wire
		 * Required
		 */
		WIRE: boolean;
	}
	export interface TransmissionTypesFormProperties {

		/**
		 * Whether the Payor is allowed to pay via ACH
		 * Required
		 */
		ACH: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Payor is allowed to pay via same day ACH
		 * Required
		 */
		SAME_DAY_ACH: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Payor is allowed to pay via wire
		 * Required
		 */
		WIRE: FormControl<boolean | null | undefined>,
	}
	export function CreateTransmissionTypesFormGroup() {
		return new FormGroup<TransmissionTypesFormProperties>({
			ACH: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			SAME_DAY_ACH: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			WIRE: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PayorV2 {
		address?: PayorAddressV2;

		/** Whether or not the payor allows language choice in the UI. */
		allowsLanguageChoice?: boolean | null;

		/** How the payor has chosen to refer to payees. */
		collectiveAlias?: string | null;

		/** The payor’s 'Doing Business As' name. */
		dbaName?: string | null;
		includesReports?: boolean | null;

		/** The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC */
		kycState?: string | null;

		/** The payor’s language preference. Must be one of [EN, FR] */
		language?: string | null;
		managingPayees?: boolean | null;

		/** Whether or not the payor has been manually locked by the backoffice. */
		manualLockout?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxMasterPayorAdmins?: number | null;

		/** Is Open Banking supported for this payor */
		openBankingEnabled?: boolean | null;

		/**
		 * The grace period for paying payees in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		payeeGracePeriodDays?: number | null;

		/** Whether grace period processing is enabled. */
		payeeGracePeriodProcessingEnabled?: boolean | null;

		/** The id of the payment rails */
		paymentRails?: string | null;

		/** Required */
		payorId: string;

		/**
		 * The name of the payor.
		 * Required
		 */
		payorName: string;

		/** A unique identifier that an external system uses to reference the payor in their system */
		payorXid?: string | null;

		/** Primary contact email for the payor. */
		primaryContactEmail?: string | null;

		/** Name of primary contact for the payor. */
		primaryContactName?: string | null;

		/** Primary contact phone number for the payor. */
		primaryContactPhone?: string | null;

		/** The source of the payorXid, default is null which means Velo */
		provider?: string | null;

		/** Whether or not the payor has opted-out of reminder emails being sent. */
		reminderEmailsOptOut?: boolean | null;

		/** The payor’s supported remote systems by id */
		remoteSystemIds?: Array<string>;

		/** The payor’s support contact email address. */
		supportContact?: string | null;
		transmissionTypes?: TransmissionTypes_2;

		/**
		 * USD in minor units
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		usdTxnValueReportingThreshold?: number | null;
		wuCustomerId?: string | null;
	}
	export interface PayorV2FormProperties {

		/** Whether or not the payor allows language choice in the UI. */
		allowsLanguageChoice: FormControl<boolean | null | undefined>,

		/** How the payor has chosen to refer to payees. */
		collectiveAlias: FormControl<string | null | undefined>,

		/** The payor’s 'Doing Business As' name. */
		dbaName: FormControl<string | null | undefined>,
		includesReports: FormControl<boolean | null | undefined>,

		/** The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC */
		kycState: FormControl<string | null | undefined>,

		/** The payor’s language preference. Must be one of [EN, FR] */
		language: FormControl<string | null | undefined>,
		managingPayees: FormControl<boolean | null | undefined>,

		/** Whether or not the payor has been manually locked by the backoffice. */
		manualLockout: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		maxMasterPayorAdmins: FormControl<number | null | undefined>,

		/** Is Open Banking supported for this payor */
		openBankingEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The grace period for paying payees in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		payeeGracePeriodDays: FormControl<number | null | undefined>,

		/** Whether grace period processing is enabled. */
		payeeGracePeriodProcessingEnabled: FormControl<boolean | null | undefined>,

		/** The id of the payment rails */
		paymentRails: FormControl<string | null | undefined>,

		/** Required */
		payorId: FormControl<string | null | undefined>,

		/**
		 * The name of the payor.
		 * Required
		 */
		payorName: FormControl<string | null | undefined>,

		/** A unique identifier that an external system uses to reference the payor in their system */
		payorXid: FormControl<string | null | undefined>,

		/** Primary contact email for the payor. */
		primaryContactEmail: FormControl<string | null | undefined>,

		/** Name of primary contact for the payor. */
		primaryContactName: FormControl<string | null | undefined>,

		/** Primary contact phone number for the payor. */
		primaryContactPhone: FormControl<string | null | undefined>,

		/** The source of the payorXid, default is null which means Velo */
		provider: FormControl<string | null | undefined>,

		/** Whether or not the payor has opted-out of reminder emails being sent. */
		reminderEmailsOptOut: FormControl<boolean | null | undefined>,

		/** The payor’s support contact email address. */
		supportContact: FormControl<string | null | undefined>,

		/**
		 * USD in minor units
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		usdTxnValueReportingThreshold: FormControl<number | null | undefined>,
		wuCustomerId: FormControl<string | null | undefined>,
	}
	export function CreatePayorV2FormGroup() {
		return new FormGroup<PayorV2FormProperties>({
			allowsLanguageChoice: new FormControl<boolean | null | undefined>(undefined),
			collectiveAlias: new FormControl<string | null | undefined>(undefined),
			dbaName: new FormControl<string | null | undefined>(undefined),
			includesReports: new FormControl<boolean | null | undefined>(undefined),
			kycState: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			managingPayees: new FormControl<boolean | null | undefined>(undefined),
			manualLockout: new FormControl<boolean | null | undefined>(undefined),
			maxMasterPayorAdmins: new FormControl<number | null | undefined>(undefined),
			openBankingEnabled: new FormControl<boolean | null | undefined>(undefined),
			payeeGracePeriodDays: new FormControl<number | null | undefined>(undefined),
			payeeGracePeriodProcessingEnabled: new FormControl<boolean | null | undefined>(undefined),
			paymentRails: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payorXid: new FormControl<string | null | undefined>(undefined),
			primaryContactEmail: new FormControl<string | null | undefined>(undefined),
			primaryContactName: new FormControl<string | null | undefined>(undefined),
			primaryContactPhone: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			reminderEmailsOptOut: new FormControl<boolean | null | undefined>(undefined),
			supportContact: new FormControl<string | null | undefined>(undefined),
			usdTxnValueReportingThreshold: new FormControl<number | null | undefined>(undefined),
			wuCustomerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransmissionTypes_2 {

		/**
		 * Whether the Payor is allowed to pay via ACH
		 * Required
		 */
		ACH: boolean;

		/**
		 * Whether the Payor is allowed to pay via same day ACH
		 * Required
		 */
		SAME_DAY_ACH: boolean;

		/**
		 * Whether the Payor is allowed to pay via wire
		 * Required
		 */
		WIRE: boolean;
	}
	export interface TransmissionTypes_2FormProperties {

		/**
		 * Whether the Payor is allowed to pay via ACH
		 * Required
		 */
		ACH: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Payor is allowed to pay via same day ACH
		 * Required
		 */
		SAME_DAY_ACH: FormControl<boolean | null | undefined>,

		/**
		 * Whether the Payor is allowed to pay via wire
		 * Required
		 */
		WIRE: FormControl<boolean | null | undefined>,
	}
	export function CreateTransmissionTypes_2FormGroup() {
		return new FormGroup<TransmissionTypes_2FormProperties>({
			ACH: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			SAME_DAY_ACH: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			WIRE: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details relating to a payout that was executed via a schedule or is still waiting to be executed */
	export interface PayoutScheduleV3 {

		/** Required */
		notificationsEnabled: boolean;

		/**
		 * The current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED
		 * Required
		 */
		scheduleStatus: string;

		/** Required */
		scheduledAt: Date;

		/**
		 * ID of the user or application that scheduled the payout
		 * Required
		 */
		scheduledByPrincipalId: string;

		/** Required */
		scheduledFor: Date;
	}

	/** Details relating to a payout that was executed via a schedule or is still waiting to be executed */
	export interface PayoutScheduleV3FormProperties {

		/** Required */
		notificationsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED
		 * Required
		 */
		scheduleStatus: FormControl<string | null | undefined>,

		/** Required */
		scheduledAt: FormControl<Date | null | undefined>,

		/**
		 * ID of the user or application that scheduled the payout
		 * Required
		 */
		scheduledByPrincipalId: FormControl<string | null | undefined>,

		/** Required */
		scheduledFor: FormControl<Date | null | undefined>,
	}
	export function CreatePayoutScheduleV3FormGroup() {
		return new FormGroup<PayoutScheduleV3FormProperties>({
			notificationsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scheduleStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheduledAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			scheduledByPrincipalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheduledFor: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PayoutSummaryResponseV3 {

		/** Required */
		acceptedPayments: Array<AcceptedPaymentV3>;

		/** Required */
		accounts: Array<SourceAccountV3>;

		/** Required */
		fxSummaries: Array<QuoteFxSummaryV3>;

		/**
		 * The number of payments that were accepted in the payout
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentsAccepted?: number | null;

		/**
		 * The number of payments that were rejected in the payout
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentsRejected?: number | null;

		/**
		 * The number of payments that were submitted in the payout
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentsSubmitted?: number | null;

		/**
		 * The number of payments that were withdrawn in the payout
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentsWithdrawn: number;

		/** The id of the payout */
		payoutId?: string | null;

		/** Required */
		rejectedPayments: Array<RejectedPaymentV3>;

		/** Details relating to a payout that was executed via a schedule or is still waiting to be executed */
		schedule?: PayoutScheduleV3;

		/** The status of the payout (one of SUBMITTED, ACCEPTED, REJECTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, WITHDRAWN) */
		status?: string | null;
	}
	export interface PayoutSummaryResponseV3FormProperties {

		/**
		 * The number of payments that were accepted in the payout
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentsAccepted: FormControl<number | null | undefined>,

		/**
		 * The number of payments that were rejected in the payout
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentsRejected: FormControl<number | null | undefined>,

		/**
		 * The number of payments that were submitted in the payout
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentsSubmitted: FormControl<number | null | undefined>,

		/**
		 * The number of payments that were withdrawn in the payout
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		paymentsWithdrawn: FormControl<number | null | undefined>,

		/** The id of the payout */
		payoutId: FormControl<string | null | undefined>,

		/** The status of the payout (one of SUBMITTED, ACCEPTED, REJECTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, WITHDRAWN) */
		status: FormControl<string | null | undefined>,
	}
	export function CreatePayoutSummaryResponseV3FormGroup() {
		return new FormGroup<PayoutSummaryResponseV3FormProperties>({
			paymentsAccepted: new FormControl<number | null | undefined>(undefined),
			paymentsRejected: new FormControl<number | null | undefined>(undefined),
			paymentsSubmitted: new FormControl<number | null | undefined>(undefined),
			paymentsWithdrawn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			payoutId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SourceAccountV3 {

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: string;

		/**
		 * The id of the payout
		 * Required
		 */
		sourceAccountId: string;

		/**
		 * The name of the source account as referencec in the payout
		 * Required
		 */
		sourceAccountName: string;

		/**
		 * The total amount (in mnor units) that will be debited from the source account for the payout
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPayoutCost: number;
	}
	export interface SourceAccountV3FormProperties {

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * The id of the payout
		 * Required
		 */
		sourceAccountId: FormControl<string | null | undefined>,

		/**
		 * The name of the source account as referencec in the payout
		 * Required
		 */
		sourceAccountName: FormControl<string | null | undefined>,

		/**
		 * The total amount (in mnor units) that will be debited from the source account for the payout
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPayoutCost: FormControl<number | null | undefined>,
	}
	export function CreateSourceAccountV3FormGroup() {
		return new FormGroup<SourceAccountV3FormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			sourceAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalPayoutCost: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface QuoteFxSummaryV3 {

		/**
		 * Timestamp of when the quote was created
		 * Required
		 */
		creationTime: Date;

		/** The timestamp for when the quote will expire */
		expiryTime?: Date | null;

		/**
		 * Current status of the funding associated with this quote. One of the following values: UNFUNDED, INSTRUCTED, FUNDED
		 * Required
		 */
		fundingStatus: string;

		/**
		 * The inverse conversion rate (from paymnent currency to source currency)
		 * Type: float
		 */
		invertedRate?: number | null;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency: string;

		/**
		 * The id of the created quote
		 * Required
		 */
		quoteId: string;

		/**
		 * The conversion rate (from the source currency to the payment currency)
		 * Required
		 * Type: float
		 */
		rate: number;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency: string;

		/**
		 * Current status of the fx quote. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED, REJECTED
		 * Required
		 */
		status: string;

		/**
		 * The amount (in minor units) that the payee will receive
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPaymentAmount: number;

		/**
		 * The amount (in minor units) that will be paid from the source account
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSourceAmount: number;
	}
	export interface QuoteFxSummaryV3FormProperties {

		/**
		 * Timestamp of when the quote was created
		 * Required
		 */
		creationTime: FormControl<Date | null | undefined>,

		/** The timestamp for when the quote will expire */
		expiryTime: FormControl<Date | null | undefined>,

		/**
		 * Current status of the funding associated with this quote. One of the following values: UNFUNDED, INSTRUCTED, FUNDED
		 * Required
		 */
		fundingStatus: FormControl<string | null | undefined>,

		/**
		 * The inverse conversion rate (from paymnent currency to source currency)
		 * Type: float
		 */
		invertedRate: FormControl<number | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		paymentCurrency: FormControl<string | null | undefined>,

		/**
		 * The id of the created quote
		 * Required
		 */
		quoteId: FormControl<string | null | undefined>,

		/**
		 * The conversion rate (from the source currency to the payment currency)
		 * Required
		 * Type: float
		 */
		rate: FormControl<number | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		sourceCurrency: FormControl<string | null | undefined>,

		/**
		 * Current status of the fx quote. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED, REJECTED
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * The amount (in minor units) that the payee will receive
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPaymentAmount: FormControl<number | null | undefined>,

		/**
		 * The amount (in minor units) that will be paid from the source account
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSourceAmount: FormControl<number | null | undefined>,
	}
	export function CreateQuoteFxSummaryV3FormGroup() {
		return new FormGroup<QuoteFxSummaryV3FormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			expiryTime: new FormControl<Date | null | undefined>(undefined),
			fundingStatus: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			invertedRate: new FormControl<number | null | undefined>(undefined),
			paymentCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			quoteId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sourceCurrency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalPaymentAmount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalSourceAmount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RejectedPaymentV3 {

		/**
		 * The amount of the payment in minor units
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		amount: number;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currencyType: string;

		/**
		 * If the payment was submitted in a csv payout then this will be the line number of the payment in the file
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lineNumber?: number | null;

		/** A more general rejection message than the reason property */
		message?: string | null;

		/**
		 * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>
		 * <p>The structure of the data will be dictated by the requirements of the payment rails</p>
		 * Min length: 0
		 * Max length: 512
		 */
		paymentMetadata?: string | null;

		/**
		 * A reference identifier for the payor for the given payee payment
		 * Required
		 * Min length: 0
		 * Max length: 40
		 */
		payorPaymentId: string;

		/**
		 * The reason for the payment being rejected
		 * Required
		 */
		reason: string;

		/** The reason code as determined by Velo */
		reasonCode?: string | null;

		/**
		 * The remoteId supplied by the payor that identifies the payee
		 * Required
		 */
		remoteId: string;

		/**
		 * <p>The identifier for the remote payments system if not Velo</p>
		 * Min length: 1
		 * Max length: 100
		 */
		remoteSystemId?: string | null;

		/**
		 * The identifier of the source account to debit the payment from
		 * Required
		 */
		sourceAccountName: string;
	}
	export interface RejectedPaymentV3FormProperties {

		/**
		 * The amount of the payment in minor units
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currencyType: FormControl<string | null | undefined>,

		/**
		 * If the payment was submitted in a csv payout then this will be the line number of the payment in the file
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lineNumber: FormControl<number | null | undefined>,

		/** A more general rejection message than the reason property */
		message: FormControl<string | null | undefined>,

		/**
		 * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>
		 * <p>The structure of the data will be dictated by the requirements of the payment rails</p>
		 * Min length: 0
		 * Max length: 512
		 */
		paymentMetadata: FormControl<string | null | undefined>,

		/**
		 * A reference identifier for the payor for the given payee payment
		 * Required
		 * Min length: 0
		 * Max length: 40
		 */
		payorPaymentId: FormControl<string | null | undefined>,

		/**
		 * The reason for the payment being rejected
		 * Required
		 */
		reason: FormControl<string | null | undefined>,

		/** The reason code as determined by Velo */
		reasonCode: FormControl<string | null | undefined>,

		/**
		 * The remoteId supplied by the payor that identifies the payee
		 * Required
		 */
		remoteId: FormControl<string | null | undefined>,

		/**
		 * <p>The identifier for the remote payments system if not Velo</p>
		 * Min length: 1
		 * Max length: 100
		 */
		remoteSystemId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the source account to debit the payment from
		 * Required
		 */
		sourceAccountName: FormControl<string | null | undefined>,
	}
	export function CreateRejectedPaymentV3FormGroup() {
		return new FormGroup<RejectedPaymentV3FormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currencyType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			lineNumber: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			paymentMetadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(512)]),
			payorPaymentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(40)]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reasonCode: new FormControl<string | null | undefined>(undefined),
			remoteId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remoteSystemId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			sourceAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Ping event for testing the webhook integration. Can be initiated via the Web UI. */
	export interface Ping {
	}

	/** Ping event for testing the webhook integration. Can be initiated via the Web UI. */
	export interface PingFormProperties {
	}
	export function CreatePingFormGroup() {
		return new FormGroup<PingFormProperties>({
		});

	}

	export interface PingResponse {
		id?: string | null;
		webhookId?: string | null;
	}
	export interface PingResponseFormProperties {
		id: FormControl<string | null | undefined>,
		webhookId: FormControl<string | null | undefined>,
	}
	export function CreatePingResponseFormGroup() {
		return new FormGroup<PingResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			webhookId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryBatchResponseV3 {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		failureCount?: string | null;
		failures?: Array<FailedSubmissionV3>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		pendingCount?: string | null;

		/** Batch Status. One of the following values: SUBMITTED, ACCEPTED */
		status?: string | null;
	}
	export interface QueryBatchResponseV3FormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		failureCount: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		pendingCount: FormControl<string | null | undefined>,

		/** Batch Status. One of the following values: SUBMITTED, ACCEPTED */
		status: FormControl<string | null | undefined>,
	}
	export function CreateQueryBatchResponseV3FormGroup() {
		return new FormGroup<QueryBatchResponseV3FormProperties>({
			failureCount: new FormControl<string | null | undefined>(undefined),
			pendingCount: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryBatchResponseV4 {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		failureCount?: string | null;
		failures?: Array<FailedSubmissionV4>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		pendingCount?: string | null;

		/** Batch Status. One of the following values: SUBMITTED, ACCEPTED */
		status?: string | null;
	}
	export interface QueryBatchResponseV4FormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		failureCount: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		pendingCount: FormControl<string | null | undefined>,

		/** Batch Status. One of the following values: SUBMITTED, ACCEPTED */
		status: FormControl<string | null | undefined>,
	}
	export function CreateQueryBatchResponseV4FormGroup() {
		return new FormGroup<QueryBatchResponseV4FormProperties>({
			failureCount: new FormControl<string | null | undefined>(undefined),
			pendingCount: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuoteResponseV3 {
		fxSummaries?: Array<QuoteFxSummaryV3>;
	}
	export interface QuoteResponseV3FormProperties {
	}
	export function CreateQuoteResponseV3FormGroup() {
		return new FormGroup<QuoteResponseV3FormProperties>({
		});

	}

	export interface RegionV2 {
		abbreviation?: string | null;
		name?: string | null;
	}
	export interface RegionV2FormProperties {
		abbreviation: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRegionV2FormGroup() {
		return new FormGroup<RegionV2FormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterSmsRequest {

		/**
		 * The phone number of a device that the user can receive sms messages on
		 * Required
		 */
		smsNumber: string;
	}
	export interface RegisterSmsRequestFormProperties {

		/**
		 * The phone number of a device that the user can receive sms messages on
		 * Required
		 */
		smsNumber: FormControl<string | null | undefined>,
	}
	export function CreateRegisterSmsRequestFormGroup() {
		return new FormGroup<RegisterSmsRequestFormProperties>({
			smsNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\+[1-9]\d{1,14}$')]),
		});

	}

	export interface ResendTokenRequest {

		/**
		 * The type of the token to resend
		 * Required
		 */
		tokenType: ResendTokenRequestTokenType;

		/**
		 * <p>Optional property that MUST be suppied when manually verifying a user</p>
		 * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
		 * Min length: 6
		 * Max length: 6
		 */
		verificationCode?: string | null;
	}
	export interface ResendTokenRequestFormProperties {

		/**
		 * The type of the token to resend
		 * Required
		 */
		tokenType: FormControl<ResendTokenRequestTokenType | null | undefined>,

		/**
		 * <p>Optional property that MUST be suppied when manually verifying a user</p>
		 * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
		 * Min length: 6
		 * Max length: 6
		 */
		verificationCode: FormControl<string | null | undefined>,
	}
	export function CreateResendTokenRequestFormGroup() {
		return new FormGroup<ResendTokenRequestFormProperties>({
			tokenType: new FormControl<ResendTokenRequestTokenType | null | undefined>(undefined, [Validators.required]),
			verificationCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(6)]),
		});

	}

	export enum ResendTokenRequestTokenType { INVITE_MFA_USER = 'INVITE_MFA_USER', MFA_REGISTRATION = 'MFA_REGISTRATION' }

	export interface ResetPasswordRequest {

		/**
		 * the email address of the user requesting the reset password
		 * Required
		 */
		email: string;
	}
	export interface ResetPasswordRequestFormProperties {

		/**
		 * the email address of the user requesting the reset password
		 * Required
		 */
		email: FormControl<string | null | undefined>,
	}
	export function CreateResetPasswordRequestFormGroup() {
		return new FormGroup<ResetPasswordRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RoleUpdateRequest {

		/**
		 * <p>The role(s) for the user</p>
		 * <p>The role must exist</p>
		 * <p>The role can be a custom role or a system role but the invoker must have the permissions to assign the role</p>
		 * <p>System roles are: backoffice.admin, payor.master_admin, payor.admin, payor.support</p>
		 * Required
		 */
		roles: Array<string>;

		/**
		 * <p>Optional property that MUST be suppied when manually verifying a user</p>
		 * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
		 * Min length: 6
		 * Max length: 6
		 */
		verificationCode?: string | null;
	}
	export interface RoleUpdateRequestFormProperties {

		/**
		 * <p>Optional property that MUST be suppied when manually verifying a user</p>
		 * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
		 * Min length: 6
		 * Max length: 6
		 */
		verificationCode: FormControl<string | null | undefined>,
	}
	export function CreateRoleUpdateRequestFormGroup() {
		return new FormGroup<RoleUpdateRequestFormProperties>({
			verificationCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(6)]),
		});

	}

	export interface SchedulePayoutRequestV3 {

		/**
		 * Flag to indicate whether to receive notifications when scheduled payout is processed
		 * Required
		 */
		notificationsEnabled: boolean;

		/**
		 * UTC timestamp for instructing the payout. Format is ISO-8601.
		 * Required
		 */
		scheduledFor: Date;
	}
	export interface SchedulePayoutRequestV3FormProperties {

		/**
		 * Flag to indicate whether to receive notifications when scheduled payout is processed
		 * Required
		 */
		notificationsEnabled: FormControl<boolean | null | undefined>,

		/**
		 * UTC timestamp for instructing the payout. Format is ISO-8601.
		 * Required
		 */
		scheduledFor: FormControl<Date | null | undefined>,
	}
	export function CreateSchedulePayoutRequestV3FormGroup() {
		return new FormGroup<SchedulePayoutRequestV3FormProperties>({
			notificationsEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scheduledFor: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SelfMFATypeUnregisterRequest {

		/**
		 * The type of the MFA device
		 * Required
		 */
		mfaType: MFADetailsMfa_type;
	}
	export interface SelfMFATypeUnregisterRequestFormProperties {

		/**
		 * The type of the MFA device
		 * Required
		 */
		mfaType: FormControl<MFADetailsMfa_type | null | undefined>,
	}
	export function CreateSelfMFATypeUnregisterRequestFormGroup() {
		return new FormGroup<SelfMFATypeUnregisterRequestFormProperties>({
			mfaType: new FormControl<MFADetailsMfa_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SelfUpdatePasswordRequest {

		/**
		 * The new password
		 * Required
		 * Min length: 8
		 * Max length: 128
		 */
		newPassword: string;

		/**
		 * The user's current password
		 * Required
		 * Min length: 8
		 * Max length: 128
		 */
		oldPassword: string;
	}
	export interface SelfUpdatePasswordRequestFormProperties {

		/**
		 * The new password
		 * Required
		 * Min length: 8
		 * Max length: 128
		 */
		newPassword: FormControl<string | null | undefined>,

		/**
		 * The user's current password
		 * Required
		 * Min length: 8
		 * Max length: 128
		 */
		oldPassword: FormControl<string | null | undefined>,
	}
	export function CreateSelfUpdatePasswordRequestFormGroup() {
		return new FormGroup<SelfUpdatePasswordRequestFormProperties>({
			newPassword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(128)]),
			oldPassword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(128)]),
		});

	}

	export interface SetNotificationsRequest {

		/**
		 * Amount to set as minimum balance in minor units
		 * Required
		 * Minimum: 0
		 * Maximum: 9999999999
		 */
		minimumBalance: string;
	}
	export interface SetNotificationsRequestFormProperties {

		/**
		 * Amount to set as minimum balance in minor units
		 * Required
		 * Minimum: 0
		 * Maximum: 9999999999
		 */
		minimumBalance: FormControl<string | null | undefined>,
	}
	export function CreateSetNotificationsRequestFormGroup() {
		return new FormGroup<SetNotificationsRequestFormProperties>({
			minimumBalance: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(9999999999)]),
		});

	}

	export interface SetNotificationsRequest_2 {

		/**
		 * Amount to set as minimum balance for notifications in minor units
		 * Required
		 * Minimum: 0
		 * Maximum: 9999999999
		 */
		minimumBalance: string;
	}
	export interface SetNotificationsRequest_2FormProperties {

		/**
		 * Amount to set as minimum balance for notifications in minor units
		 * Required
		 * Minimum: 0
		 * Maximum: 9999999999
		 */
		minimumBalance: FormControl<string | null | undefined>,
	}
	export function CreateSetNotificationsRequest_2FormGroup() {
		return new FormGroup<SetNotificationsRequest_2FormProperties>({
			minimumBalance: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(9999999999)]),
		});

	}


	/** Base type for each source event payload */
	export interface SourceEvent {

		/**
		 * ISO8601 timestamp indicating when the source event was created
		 * Required
		 */
		createdAt: Date;

		/**
		 * UUID id of the source event in the Velo platform
		 * Required
		 */
		eventId: string;

		/**
		 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
		 * Required
		 */
		sourceType: string;
	}

	/** Base type for each source event payload */
	export interface SourceEventFormProperties {

		/**
		 * ISO8601 timestamp indicating when the source event was created
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * UUID id of the source event in the Velo platform
		 * Required
		 */
		eventId: FormControl<string | null | undefined>,

		/**
		 * OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly
		 * Required
		 */
		sourceType: FormControl<string | null | undefined>,
	}
	export function CreateSourceEventFormGroup() {
		return new FormGroup<SourceEventFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SupportedCountriesResponse {
		countries?: Array<SupportedCountry>;
	}
	export interface SupportedCountriesResponseFormProperties {
	}
	export function CreateSupportedCountriesResponseFormGroup() {
		return new FormGroup<SupportedCountriesResponseFormProperties>({
		});

	}

	export interface SupportedCountry {
		currencies?: Array<string>;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		isoCountryCode?: string | null;
	}
	export interface SupportedCountryFormProperties {

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		isoCountryCode: FormControl<string | null | undefined>,
	}
	export function CreateSupportedCountryFormGroup() {
		return new FormGroup<SupportedCountryFormProperties>({
			isoCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
		});

	}

	export interface SupportedCountriesResponseV2 {
		countries?: Array<SupportedCountryV2>;
	}
	export interface SupportedCountriesResponseV2FormProperties {
	}
	export function CreateSupportedCountriesResponseV2FormGroup() {
		return new FormGroup<SupportedCountriesResponseV2FormProperties>({
		});

	}

	export interface SupportedCountryV2 {
		currencies?: Array<string>;

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		isoCountryCode?: string | null;
		regions?: Array<RegionV2>;
	}
	export interface SupportedCountryV2FormProperties {

		/**
		 * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 2
		 * Max length: 2
		 */
		isoCountryCode: FormControl<string | null | undefined>,
	}
	export function CreateSupportedCountryV2FormGroup() {
		return new FormGroup<SupportedCountryV2FormProperties>({
			isoCountryCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('^[A-Z]{2}$')]),
		});

	}

	export interface SupportedCurrencyResponseV2 {
		currencies?: Array<SupportedCurrencyV2>;
	}
	export interface SupportedCurrencyResponseV2FormProperties {
	}
	export function CreateSupportedCurrencyResponseV2FormGroup() {
		return new FormGroup<SupportedCurrencyResponseV2FormProperties>({
		});

	}

	export interface SupportedCurrencyV2 {

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 3
		 * Max length: 3
		 */
		currency?: string | null;

		/**
		 * The max amount allowed in this currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxPaymentAmount?: number | null;
	}
	export interface SupportedCurrencyV2FormProperties {

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * The max amount allowed in this currency
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxPaymentAmount: FormControl<number | null | undefined>,
	}
	export function CreateSupportedCurrencyV2FormGroup() {
		return new FormGroup<SupportedCurrencyV2FormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			maxPaymentAmount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TransferRequestV2 {

		/**
		 * Amount to transfer, in minor units
		 * Required
		 * Minimum: 1
		 * Maximum: 9999999999
		 */
		amount: string;

		/**
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: string;

		/**
		 * The 'to' source account id, which will be credited
		 * Required
		 */
		toSourceAccountId: string;
	}
	export interface TransferRequestV2FormProperties {

		/**
		 * Amount to transfer, in minor units
		 * Required
		 * Minimum: 1
		 * Maximum: 9999999999
		 */
		amount: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * The 'to' source account id, which will be credited
		 * Required
		 */
		toSourceAccountId: FormControl<string | null | undefined>,
	}
	export function CreateTransferRequestV2FormGroup() {
		return new FormGroup<TransferRequestV2FormProperties>({
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(9999999999)]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
			toSourceAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransferRequestV3 {

		/**
		 * Amount to transfer, in minor units
		 * Required
		 * Minimum: 1
		 * Maximum: 9999999999
		 */
		amount: string;

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: string;

		/**
		 * The 'to' source account id, which will be credited
		 * Required
		 */
		toSourceAccountId: string;
	}
	export interface TransferRequestV3FormProperties {

		/**
		 * Amount to transfer, in minor units
		 * Required
		 * Minimum: 1
		 * Maximum: 9999999999
		 */
		amount: FormControl<string | null | undefined>,

		/**
		 * Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.
		 * Required
		 * Min length: 3
		 * Max length: 3
		 */
		currency: FormControl<string | null | undefined>,

		/**
		 * The 'to' source account id, which will be credited
		 * Required
		 */
		toSourceAccountId: FormControl<string | null | undefined>,
	}
	export function CreateTransferRequestV3FormGroup() {
		return new FormGroup<TransferRequestV3FormProperties>({
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(9999999999)]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern('^[A-Z]{3}$')]),
			toSourceAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnregisterMFARequest {

		/**
		 * The type of the MFA device
		 * Required
		 */
		mfaType: UnregisterMFARequestMfaType;

		/**
		 * <p>Optional property that MUST be suppied when manually verifying a user</p>
		 * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
		 * Min length: 6
		 * Max length: 6
		 */
		verificationCode?: string | null;
	}
	export interface UnregisterMFARequestFormProperties {

		/**
		 * The type of the MFA device
		 * Required
		 */
		mfaType: FormControl<UnregisterMFARequestMfaType | null | undefined>,

		/**
		 * <p>Optional property that MUST be suppied when manually verifying a user</p>
		 * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
		 * Min length: 6
		 * Max length: 6
		 */
		verificationCode: FormControl<string | null | undefined>,
	}
	export function CreateUnregisterMFARequestFormGroup() {
		return new FormGroup<UnregisterMFARequestFormProperties>({
			mfaType: new FormControl<UnregisterMFARequestMfaType | null | undefined>(undefined, [Validators.required]),
			verificationCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(6)]),
		});

	}

	export enum UnregisterMFARequestMfaType { YUBIKEY = 'YUBIKEY', TOTP = 'TOTP' }

	export interface UpdatePayeeDetailsRequestV3 {
		address?: PayeeAddressV3;
		challenge?: ChallengeV3;
		company?: CompanyV3;
		email?: string | null;
		individual?: IndividualV3;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language?: string | null;

		/** The type of the payee */
		payeeType?: CreatePayeeV4Type | null;
	}
	export interface UpdatePayeeDetailsRequestV3FormProperties {
		email: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language: FormControl<string | null | undefined>,

		/** The type of the payee */
		payeeType: FormControl<CreatePayeeV4Type | null | undefined>,
	}
	export function CreateUpdatePayeeDetailsRequestV3FormGroup() {
		return new FormGroup<UpdatePayeeDetailsRequestV3FormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			payeeType: new FormControl<CreatePayeeV4Type | null | undefined>(undefined),
		});

	}

	export interface UpdatePayeeDetailsRequestV4 {
		address?: PayeeAddressV4;

		/**
		 * <p>Used to override the default challenge presented to the payee when they onboard</p>
		 * <p>Not used after the payee has onboarded</p>
		 */
		challenge?: ChallengeV4;
		company?: CompanyV4;

		/**
		 * The phone number of a device that the payee wishes to receive sms messages on
		 */
		contactSmsNumber?: string | null;
		email?: string | null;
		individual?: IndividualV4;

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language?: string | null;

		/** The type of the payee */
		payeeType?: CreatePayeeV4Type | null;
	}
	export interface UpdatePayeeDetailsRequestV4FormProperties {

		/**
		 * The phone number of a device that the payee wishes to receive sms messages on
		 */
		contactSmsNumber: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,

		/**
		 * An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
		 * See the /v1/supportedLanguages endpoint to list the available codes for an environment.
		 */
		language: FormControl<string | null | undefined>,

		/** The type of the payee */
		payeeType: FormControl<CreatePayeeV4Type | null | undefined>,
	}
	export function CreateUpdatePayeeDetailsRequestV4FormGroup() {
		return new FormGroup<UpdatePayeeDetailsRequestV4FormProperties>({
			contactSmsNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+[1-9]\d{1,14}$')]),
			email: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			payeeType: new FormControl<CreatePayeeV4Type | null | undefined>(undefined),
		});

	}

	export interface UpdateRemoteIdRequestV3 {

		/** Required */
		payorId: string;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: string;
	}
	export interface UpdateRemoteIdRequestV3FormProperties {

		/** Required */
		payorId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRemoteIdRequestV3FormGroup() {
		return new FormGroup<UpdateRemoteIdRequestV3FormProperties>({
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remoteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface UpdateRemoteIdRequestV4 {

		/** Required */
		payorId: string;

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: string;
	}
	export interface UpdateRemoteIdRequestV4FormProperties {

		/** Required */
		payorId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		remoteId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRemoteIdRequestV4FormGroup() {
		return new FormGroup<UpdateRemoteIdRequestV4FormProperties>({
			payorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			remoteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface UpdateWebhookRequest {

		/**
		 * the authorization header to include with the notification.
		 * Min length: 4
		 * Max length: 1000
		 */
		authorizationHeader?: string | null;

		/** The notification categories to enable. */
		categories?: Array<Category>;

		/** whether the webhook is enabled. */
		enabled?: boolean | null;

		/**
		 * the webhook URL to use.
		 * Min length: 6
		 * Max length: 2000
		 */
		webhookUrl?: string | null;
	}
	export interface UpdateWebhookRequestFormProperties {

		/**
		 * the authorization header to include with the notification.
		 * Min length: 4
		 * Max length: 1000
		 */
		authorizationHeader: FormControl<string | null | undefined>,

		/** whether the webhook is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * the webhook URL to use.
		 * Min length: 6
		 * Max length: 2000
		 */
		webhookUrl: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWebhookRequestFormGroup() {
		return new FormGroup<UpdateWebhookRequestFormProperties>({
			authorizationHeader: new FormControl<string | null | undefined>(undefined, [Validators.minLength(4), Validators.maxLength(1000), Validators.pattern('.*')]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			webhookUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(2000)]),
		});

	}


	/**
	 * <p>All properties are optional</p>
	 * <p>Only provided properties will be updated</p>
	 * <p>Use null to null out a property that is allowed to be nullable</p>
	 */
	export interface UserDetailsUpdateRequest {

		/** the email address of the user */
		email?: string | null;

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		firstName?: string | null;

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		lastName?: string | null;

		/** The type of the MFA device */
		mfaType?: MFADetailsMfa_type | null;

		/**
		 * The main contact number for the user
		 */
		primaryContactNumber?: string | null;

		/**
		 * The secondary contact number for the user
		 */
		secondaryContactNumber?: string | null;

		/**
		 * The phone number of a device that the user can receive sms messages on
		 */
		smsNumber?: string | null;

		/**
		 * <p>Optional property that MUST be suppied when manually verifying a user</p>
		 * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
		 * Min length: 6
		 * Max length: 6
		 */
		verificationCode?: string | null;
	}

	/**
	 * <p>All properties are optional</p>
	 * <p>Only provided properties will be updated</p>
	 * <p>Use null to null out a property that is allowed to be nullable</p>
	 */
	export interface UserDetailsUpdateRequestFormProperties {

		/** the email address of the user */
		email: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Min length: 1
		 * Max length: 128
		 */
		lastName: FormControl<string | null | undefined>,

		/** The type of the MFA device */
		mfaType: FormControl<MFADetailsMfa_type | null | undefined>,

		/**
		 * The main contact number for the user
		 */
		primaryContactNumber: FormControl<string | null | undefined>,

		/**
		 * The secondary contact number for the user
		 */
		secondaryContactNumber: FormControl<string | null | undefined>,

		/**
		 * The phone number of a device that the user can receive sms messages on
		 */
		smsNumber: FormControl<string | null | undefined>,

		/**
		 * <p>Optional property that MUST be suppied when manually verifying a user</p>
		 * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
		 * Min length: 6
		 * Max length: 6
		 */
		verificationCode: FormControl<string | null | undefined>,
	}
	export function CreateUserDetailsUpdateRequestFormGroup() {
		return new FormGroup<UserDetailsUpdateRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			mfaType: new FormControl<MFADetailsMfa_type | null | undefined>(undefined),
			primaryContactNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+[1-9]\d{1,14}$')]),
			secondaryContactNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+[1-9]\d{1,14}$')]),
			smsNumber: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\+[1-9]\d{1,14}$')]),
			verificationCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(6)]),
		});

	}


	/**
	 * The status of the user
	 * when the user has been invited but not yet enrolled they will have a PENDING status
	 */
	export enum UserStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED', PENDING = 'PENDING' }

	export enum UserType { BACKOFFICE = 'BACKOFFICE', PAYOR = 'PAYOR', PAYEE = 'PAYEE' }

	export enum UserType_2 { BACKOFFICE = 'BACKOFFICE', PAYOR = 'PAYOR', PAYEE = 'PAYEE' }

	export interface ValidatePasswordResponse {

		/**
		 * More secure passwords are given a higher score. <P>
		 * For a password to be acceptable for use in Velo, it must score at least 3
		 * Minimum: 0
		 * Maximum: 4
		 */
		score?: number | null;
		suggestions?: Array<string>;

		/** if true then the password can be accepted */
		valid?: boolean | null;

		/** Any warning message as a reason for the given score. */
		warning?: string | null;
	}
	export interface ValidatePasswordResponseFormProperties {

		/**
		 * More secure passwords are given a higher score. <P>
		 * For a password to be acceptable for use in Velo, it must score at least 3
		 * Minimum: 0
		 * Maximum: 4
		 */
		score: FormControl<number | null | undefined>,

		/** if true then the password can be accepted */
		valid: FormControl<boolean | null | undefined>,

		/** Any warning message as a reason for the given score. */
		warning: FormControl<string | null | undefined>,
	}
	export function CreateValidatePasswordResponseFormGroup() {
		return new FormGroup<ValidatePasswordResponseFormProperties>({
			score: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(4)]),
			valid: new FormControl<boolean | null | undefined>(undefined),
			warning: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebhookResponse {
		authorizationHeader?: string | null;
		categories?: Array<Category>;
		enabled?: boolean | null;
		id?: string | null;
		payorId?: string | null;
		webhookUrl?: string | null;
	}
	export interface WebhookResponseFormProperties {
		authorizationHeader: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		payorId: FormControl<string | null | undefined>,
		webhookUrl: FormControl<string | null | undefined>,
	}
	export function CreateWebhookResponseFormGroup() {
		return new FormGroup<WebhookResponseFormProperties>({
			authorizationHeader: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			payorId: new FormControl<string | null | undefined>(undefined),
			webhookUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List Webhooks Object */
	export interface WebhooksResponse {
		content?: Array<WebhookResponse>;
		links?: Array<PagedPayeeResponseV3_links>;
		page?: PagedPayeeInvitationStatusResponseV3_page;
	}

	/** List Webhooks Object */
	export interface WebhooksResponseFormProperties {
	}
	export function CreateWebhooksResponseFormGroup() {
		return new FormGroup<WebhooksResponseFormProperties>({
		});

	}

	export interface WithdrawPaymentRequest {

		/**
		 * Reason for withdrawal
		 * Required
		 * Min length: 2
		 * Max length: 256
		 */
		reason: string;
	}
	export interface WithdrawPaymentRequestFormProperties {

		/**
		 * Reason for withdrawal
		 * Required
		 * Min length: 2
		 * Max length: 256
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateWithdrawPaymentRequestFormGroup() {
		return new FormGroup<WithdrawPaymentRequestFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]),
		});

	}

	export interface Inline_response_400 {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId?: string | null;

		/**
		 * one or more errors
		 * Minimum items: 1
		 */
		errors?: Array<Error>;

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode?: number | null;
	}
	export interface Inline_response_400FormProperties {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId: FormControl<string | null | undefined>,

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode: FormControl<number | null | undefined>,
	}
	export function CreateInline_response_400FormGroup() {
		return new FormGroup<Inline_response_400FormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpStatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Inline_response_401 {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId?: string | null;

		/**
		 * one or more errors
		 * Minimum items: 1
		 */
		errors?: Array<Error>;

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode?: number | null;
	}
	export interface Inline_response_401FormProperties {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId: FormControl<string | null | undefined>,

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode: FormControl<number | null | undefined>,
	}
	export function CreateInline_response_401FormGroup() {
		return new FormGroup<Inline_response_401FormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpStatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Inline_response_403 {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId?: string | null;

		/**
		 * one or more errors
		 * Minimum items: 1
		 */
		errors?: Array<Error>;

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode?: number | null;
	}
	export interface Inline_response_403FormProperties {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId: FormControl<string | null | undefined>,

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode: FormControl<number | null | undefined>,
	}
	export function CreateInline_response_403FormGroup() {
		return new FormGroup<Inline_response_403FormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpStatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Inline_response_404 {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId?: string | null;

		/**
		 * one or more errors
		 * Minimum items: 1
		 */
		errors?: Array<Error>;

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode?: number | null;
	}
	export interface Inline_response_404FormProperties {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId: FormControl<string | null | undefined>,

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode: FormControl<number | null | undefined>,
	}
	export function CreateInline_response_404FormGroup() {
		return new FormGroup<Inline_response_404FormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpStatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Inline_response_409 {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId?: string | null;

		/**
		 * one or more errors
		 * Minimum items: 1
		 */
		errors?: Array<Error>;

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode?: number | null;
	}
	export interface Inline_response_409FormProperties {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId: FormControl<string | null | undefined>,

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode: FormControl<number | null | undefined>,
	}
	export function CreateInline_response_409FormGroup() {
		return new FormGroup<Inline_response_409FormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpStatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Inline_response_412 {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId?: string | null;

		/**
		 * one or more errors
		 * Minimum items: 1
		 */
		errors?: Array<Error>;

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode?: number | null;
	}
	export interface Inline_response_412FormProperties {

		/** a unique identifier to track a request or related sequence of requests */
		correlationId: FormControl<string | null | undefined>,

		/**
		 * this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatusCode: FormControl<number | null | undefined>,
	}
	export function CreateInline_response_412FormGroup() {
		return new FormGroup<Inline_response_412FormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpStatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Authentication endpoint
		 * <p>Use this endpoint to obtain an access token for calling Velo Payments APIs. </p>
		 * <p>You need your API key and API secret issued by Velo</p>
		 * <p>To login and get an access token the API key and API secret must be Base64 encoded by concatenating them with a colon between them</p>
		 * <p>e.g. Given an ApiKey: 44a9537d-d55d-4b47-8082-14061c2bcdd8 and ApiSecret: c396b26b-137a-44fd-87f5-34631f8fd529</p>
		 * <p>Using a Base64 encode function Base64Encoder().encode("44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529")</p>
		 * <p>Included as a Basic Authorization header: -H "Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==" </p>
		 * Post v1/authenticate
		 * @param {string} grant_type OAuth grant type. Should use 'client_credentials'
		 * @return {AuthResponse} Valid Authenication response
		 */
		V1AuthenticatePostByGrant_type(grant_type: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<AuthResponse> {
			return this.http.post<AuthResponse>(this.baseUri + 'v1/authenticate?grant_type=' + (grant_type == null ? '' : encodeURIComponent(grant_type)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Funding Audit Delta
		 * Get funding audit deltas for a payor
		 * Get v1/deltas/fundings
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @return {PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse} Funding Account Deltas
		 */
		V1DeltasFundingsGetByPayorIdAndUpdatedSinceAndPageAndPageSize(payorId: string, updatedSince: Date, page: number | null | undefined, pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse> {
			return this.http.get<PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse>(this.baseUri + 'v1/deltas/fundings?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&updatedSince=' + updatedSince.toISOString() + '&page=' + page + '&pageSize=' + pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * V1 List Payment Changes
		 * Deprecated (use /v4/payments/deltas instead)
		 * Get v1/deltas/payments
		 * @param {string} payorId The Payor ID to find associated Payments
		 * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 1000
		 * @return {PaymentDeltaResponseV1} Details of Payment Changes
		 */
		V1DeltasPaymentsGetByPayorIdAndUpdatedSinceAndPageAndPageSize(payorId: string, updatedSince: Date, page: number | null | undefined, pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PaymentDeltaResponseV1> {
			return this.http.get<PaymentDeltaResponseV1>(this.baseUri + 'v1/deltas/payments?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&updatedSince=' + updatedSince.toISOString() + '&page=' + page + '&pageSize=' + pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Funding
		 * Get Funding by Id
		 * Get v1/fundings/{fundingId}
		 * @return {FundingResponse} Funding response
		 */
		V1Fundings_fundingIdGet(fundingId: string, headersHandler?: () => HttpHeaders): Observable<FundingResponse> {
			return this.http.get<FundingResponse>(this.baseUri + 'v1/fundings/' + (fundingId == null ? '' : encodeURIComponent(fundingId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Logout
		 * <p>Given a valid access token in the header then log out the authenticated user or client </p>
		 * <p>Will revoke the token</p>
		 * Post v1/logout
		 * @return {void} 
		 */
		V1LogoutPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/logout', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset password
		 * <p>Reset password </p>
		 * <p>An email with an embedded link will be sent to the receipient of the email address </p>
		 * <p>The link will contain a token to be used for resetting the password </p>
		 * Post v1/password/reset
		 * @param {ResetPasswordRequest} requestBody An Email address to send the reset password link to
		 * @return {void} 
		 */
		V1PasswordResetPost(requestBody: ResetPasswordRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/password/reset', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Payment Channel Country Rules
		 * List the country specific payment channel rules.
		 * Get v1/paymentChannelRules
		 * @return {PaymentChannelRulesResponse} List Payment Channel Country Rules
		 */
		V1PaymentChannelRulesGet(headersHandler?: () => HttpHeaders): Observable<PaymentChannelRulesResponse> {
			return this.http.get<PaymentChannelRulesResponse>(this.baseUri + 'v1/paymentChannelRules', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * V1 Get Fundings for Payor
		 * Deprecated (use /v4/paymentaudit/fundings)
		 * Get v1/paymentaudit/fundings
		 * @param {string} payorId The account owner Payor ID
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc```
		 * Default is no sort. The supported sort fields are: dateTime and amount.
		 * @return {GetFundingsResponse} Get Fundings normal response
		 */
		V1PaymentauditFundingsGetByPayorIdAndPageAndPageSizeAndSort(payorId: string, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetFundingsResponse> {
			return this.http.get<GetFundingsResponse>(this.baseUri + 'v1/paymentaudit/fundings?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * V1 Get Payout Statistics
		 * Deprecated (Use /v4/paymentaudit/payoutStatistics)
		 * Get v1/paymentaudit/payoutStatistics
		 * @param {string} payorId The account owner Payor ID. Required for external users.
		 * @return {GetPayoutStatistics} Payout Statistics response
		 */
		V1PaymentauditPayoutStatisticsGetByPayorId(payorId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetPayoutStatistics> {
			return this.http.get<GetPayoutStatistics>(this.baseUri + 'v1/paymentaudit/payoutStatistics?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Withdraw a Payment
		 * <p>withdraw a payment </p>
		 * <p>There are a variety of reasons why this can fail</p>
		 * <ul>
		 * <li>the payment must be in a state of 'accepted' or 'unfunded'</li>
		 * <li>the payout must not be in a state of 'instructed'</li>
		 * </ul>
		 * Post v1/payments/{paymentId}/withdraw
		 * @param {string} paymentId Id of the Payment
		 * @param {WithdrawPaymentRequest} requestBody details for withdrawal
		 * @return {void} 
		 */
		V1Payments_paymentIdWithdrawPost(paymentId: string, requestBody: WithdrawPaymentRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/payments/' + (paymentId == null ? '' : encodeURIComponent(paymentId)) + '/withdraw', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Payor Links
		 * <p>If the payor is set up as part of a hierarchy you can use this API to traverse the hierarchy</p>
		 * Get v1/payorLinks
		 * @param {string} descendantsOfPayor The Payor ID from which to start the query to show all descendants
		 * @param {string} parentOfPayor Query for the parent payor details for this payor id
		 * @param {string} fields <p>List of additional Payor fields to include in the response for each Payor</p>
		 * <p>The values of payorId and payorName are always included for each Payor by default</p>
		 * <p>You can add fields to the response for each payor by including them in the fields parameter separated by commas</p>
		 * <p>The supported fields are any combination of: primaryContactEmail,kycState</p>
		 * @return {PayorLinksResponse} Details of Payor Links
		 */
		V1PayorLinksGetByDescendantsOfPayorAndParentOfPayorAndFields(descendantsOfPayor: string | null | undefined, parentOfPayor: string | null | undefined, fields: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<PayorLinksResponse> {
			return this.http.get<PayorLinksResponse>(this.baseUri + 'v1/payorLinks?descendantsOfPayor=' + (descendantsOfPayor == null ? '' : encodeURIComponent(descendantsOfPayor)) + '&parentOfPayor=' + (parentOfPayor == null ? '' : encodeURIComponent(parentOfPayor)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a Payor Link
		 * This endpoint allows you to create a payor link.
		 * Post v1/payorLinks
		 * @param {CreatePayorLinkRequest} requestBody Request to create a payor link
		 * @return {void} 
		 */
		V1PayorLinksPost(requestBody: CreatePayorLinkRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/payorLinks', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Payor
		 * <p>Get a Single Payor by Id.</p>
		 * <p>deprecated since v2.10 - Use /v2/payors
		 * Get v1/payors/{payorId}
		 * @param {string} payorId The Payor Id
		 * @return {PayorV1} Get Payor Details
		 */
		V1Payors_payorIdGet(payorId: string, headersHandler?: () => HttpHeaders): Observable<PayorV1> {
			return this.http.get<PayorV1>(this.baseUri + 'v1/payors/' + (payorId == null ? '' : encodeURIComponent(payorId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Application
		 * <p>Create an application for the given Payor ID.</p>
		 * <p>Applications provide a means to group your API Keys</p>
		 * <p>For example you might have an SAP application that you wish to integrate with Velo</p>
		 * <p>You can create an application and then create one or more API keys for the application</p>
		 * Post v1/payors/{payorId}/applications
		 * @param {string} payorId The Payor Id
		 * @param {PayorCreateApplicationRequest} requestBody Details of application to create
		 * @return {void} 
		 */
		V1Payors_payorIdApplicationsPost(payorId: string, requestBody: PayorCreateApplicationRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/payors/' + (payorId == null ? '' : encodeURIComponent(payorId)) + '/applications', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create API Key
		 * <p>Create an an API key for the given payor Id and application Id</p>
		 * <p>You can create multiple API Keys for a given application</p>
		 * <p>API Keys are programmatic users for integrating your application with the Velo platform</p>
		 * Post v1/payors/{payorId}/applications/{applicationId}/keys
		 * @param {string} payorId The Payor Id
		 * @param {string} applicationId Application ID
		 * @param {PayorCreateApiKeyRequest} requestBody Details of application API key to create
		 * @return {PayorCreateApiKeyResponse} HTTP Ok, key created
		 */
		V1Payors_payorIdApplications_applicationIdKeysPost(payorId: string, applicationId: string, requestBody: PayorCreateApiKeyRequest, headersHandler?: () => HttpHeaders): Observable<PayorCreateApiKeyResponse> {
			return this.http.post<PayorCreateApiKeyResponse>(this.baseUri + 'v1/payors/' + (payorId == null ? '' : encodeURIComponent(payorId)) + '/applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/keys', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Branding
		 * Get the payor branding details.
		 * Get v1/payors/{payorId}/branding
		 * @param {string} payorId The Payor Id
		 * @return {PayorBrandingResponse} HTTP Ok, key created
		 */
		V1Payors_payorIdBrandingGet(payorId: string, headersHandler?: () => HttpHeaders): Observable<PayorBrandingResponse> {
			return this.http.get<PayorBrandingResponse>(this.baseUri + 'v1/payors/' + (payorId == null ? '' : encodeURIComponent(payorId)) + '/branding', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Reminder Email Opt-Out
		 * Update the emailRemindersOptOut field for a Payor. This API can be used to opt out
		 * or opt into Payor Reminder emails. These emails are typically around payee events
		 * such as payees registering and onboarding.
		 * Post v1/payors/{payorId}/reminderEmailsUpdate
		 * @param {string} payorId The Payor Id
		 * @param {PayorEmailOptOutRequest} requestBody Reminder Emails Opt-Out Request
		 * @return {void} 
		 */
		V1Payors_payorIdReminderEmailsUpdatePost(payorId: string, requestBody: PayorEmailOptOutRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/payors/' + (payorId == null ? '' : encodeURIComponent(payorId)) + '/reminderEmailsUpdate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Set notifications
		 * <p>Set notifications for a given source account</p>
		 * <p>deprecated since 2.34 (use v3 version)</p>
		 * Post v1/sourceAccounts/{sourceAccountId}/notifications
		 * @param {string} sourceAccountId Source account id
		 * @param {SetNotificationsRequest} requestBody Body to included minimum balance to set
		 * @return {void} 
		 */
		V1SourceAccounts_sourceAccountIdNotificationsPost(sourceAccountId: string, requestBody: SetNotificationsRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/sourceAccounts/' + (sourceAccountId == null ? '' : encodeURIComponent(sourceAccountId)) + '/notifications', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Supported Countries
		 * <p>List the supported countries.</p>
		 * <p>This version will be retired in March 2020. Use /v2/supportedCountries</p>
		 * Get v1/supportedCountries
		 * @return {SupportedCountriesResponse} List of Supported Countries
		 */
		V1SupportedCountriesGet(headersHandler?: () => HttpHeaders): Observable<SupportedCountriesResponse> {
			return this.http.get<SupportedCountriesResponse>(this.baseUri + 'v1/supportedCountries', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * validate
		 * <p>The second part of login involves validating using an MFA device</p>
		 * <p>An access token with PRE_AUTH authorities is required</p>
		 * Post v1/validate
		 * @param {AccessTokenValidationRequest} requestBody An OTP from the user's registered MFA Device
		 * @return {AccessTokenResponse} User request has been validated
		 */
		V1ValidatePost(requestBody: AccessTokenValidationRequest, headersHandler?: () => HttpHeaders): Observable<AccessTokenResponse> {
			return this.http.post<AccessTokenResponse>(this.baseUri + 'v1/validate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List the details about the webhooks for the given payor.
		 * List the details about the webhooks for the given payor.
		 * Get v1/webhooks
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} payorId The Payor ID
		 * @return {WebhooksResponse} Webhook response
		 */
		V1WebhooksGetByPageAndPageSizeAndPayorId(page: number | null | undefined, pageSize: number | null | undefined, payorId: string, headersHandler?: () => HttpHeaders): Observable<WebhooksResponse> {
			return this.http.get<WebhooksResponse>(this.baseUri + 'v1/webhooks?page=' + page + '&pageSize=' + pageSize + '&payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Webhook
		 * Create Webhook
		 * Post v1/webhooks
		 * @return {void} 
		 */
		V1WebhooksPost(requestBody: CreateWebhookRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/webhooks', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get details about the given webhook.
		 * Get details about the given webhook.
		 * Get v1/webhooks/{webhookId}
		 * @param {string} webhookId Webhook id
		 * @return {WebhookResponse} Webhook response
		 */
		V1Webhooks_webhookIdGet(webhookId: string, headersHandler?: () => HttpHeaders): Observable<WebhookResponse> {
			return this.http.get<WebhookResponse>(this.baseUri + 'v1/webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Webhook
		 * Update Webhook
		 * Post v1/webhooks/{webhookId}
		 * @param {string} webhookId Webhook id
		 * @return {void} 
		 */
		V1Webhooks_webhookIdPost(webhookId: string, requestBody: UpdateWebhookRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/webhooks/{webhookId}/ping
		 * @param {string} webhookId Webhook id
		 * @return {void} 
		 */
		V1Webhooks_webhookIdPingPost(webhookId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/webhooks/' + (webhookId == null ? '' : encodeURIComponent(webhookId)) + '/ping', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Supported Currencies
		 * List the supported currencies.
		 * Get v2/currencies
		 * @return {SupportedCurrencyResponseV2} List Supported Currencies
		 */
		V2CurrenciesGet(headersHandler?: () => HttpHeaders): Observable<SupportedCurrencyResponseV2> {
			return this.http.get<SupportedCurrencyResponseV2>(this.baseUri + 'v2/currencies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Funding Accounts
		 * Get the funding accounts.
		 * Get v2/fundingAccounts
		 * @param {string} name The descriptive funding account name
		 * @param {string} country The 2 letter ISO 3166-1 country code (upper case)
		 * @param {string} currency The ISO 4217 currency code
		 * @param {string} type The type of funding account.
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort List of sort fields (e.g. ?sort=accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name.
		 * @return {ListFundingAccountsResponseV2} Get Funding Accounts Response
		 */
		V2FundingAccountsGetByPayorIdAndNameAndCountryAndCurrencyAndTypeAndPageAndPageSizeAndSortAndSensitive(payorId: string | null | undefined, name: string | null | undefined, country: string | null | undefined, currency: string | null | undefined, type: string | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, sensitive: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListFundingAccountsResponseV2> {
			return this.http.get<ListFundingAccountsResponseV2>(this.baseUri + 'v2/fundingAccounts?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sensitive=' + sensitive, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Funding Account
		 * Create Funding Account
		 * Post v2/fundingAccounts
		 * @return {void} 
		 */
		V2FundingAccountsPost(requestBody: CreateFundingAccountRequestV2, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/fundingAccounts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Funding Account
		 * Get Funding Account by ID
		 * Get v2/fundingAccounts/{fundingAccountId}
		 * @return {FundingAccountResponseV2} Funding Account Response
		 */
		V2FundingAccounts_fundingAccountIdGetBySensitive(fundingAccountId: string, sensitive: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<FundingAccountResponseV2> {
			return this.http.get<FundingAccountResponseV2>(this.baseUri + 'v2/fundingAccounts/' + (fundingAccountId == null ? '' : encodeURIComponent(fundingAccountId)) + '&sensitive=' + sensitive, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Payor
		 * Get a Single Payor by Id.
		 * Get v2/payors/{payorId}
		 * @param {string} payorId The Payor Id
		 * @return {PayorV2} Get Payor Details
		 */
		V2Payors_payorIdGet(payorId: string, headersHandler?: () => HttpHeaders): Observable<PayorV2> {
			return this.http.get<PayorV2>(this.baseUri + 'v2/payors/' + (payorId == null ? '' : encodeURIComponent(payorId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of source accounts
		 * List source accounts.
		 * Get v2/sourceAccounts
		 * @param {string} physicalAccountName Physical Account Name
		 * @param {string} physicalAccountId The physical account ID
		 * @param {string} payorId The account owner Payor ID
		 * @param {string} fundingAccountId The funding account ID
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort List of sort fields e.g. ?sort=name:asc
		 * Default is name:asc
		 * The supported sort fields are - fundingRef, name, balance
		 * @return {ListSourceAccountResponseV2} List Source Account response
		 */
		V2SourceAccountsGetByPhysicalAccountNameAndPhysicalAccountIdAndPayorIdAndFundingAccountIdAndPageAndPageSizeAndSort(physicalAccountName: string | null | undefined, physicalAccountId: string | null | undefined, payorId: string | null | undefined, fundingAccountId: string | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListSourceAccountResponseV2> {
			return this.http.get<ListSourceAccountResponseV2>(this.baseUri + 'v2/sourceAccounts?physicalAccountName=' + (physicalAccountName == null ? '' : encodeURIComponent(physicalAccountName)) + '&physicalAccountId=' + (physicalAccountId == null ? '' : encodeURIComponent(physicalAccountId)) + '&payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&fundingAccountId=' + (fundingAccountId == null ? '' : encodeURIComponent(fundingAccountId)) + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Source Account
		 * Get details about given source account.
		 * Get v2/sourceAccounts/{sourceAccountId}
		 * @param {string} sourceAccountId Source account id
		 * @return {SourceAccountResponseV2} Source account response
		 */
		V2SourceAccounts_sourceAccountIdGet(sourceAccountId: string, headersHandler?: () => HttpHeaders): Observable<SourceAccountResponseV2> {
			return this.http.get<SourceAccountResponseV2>(this.baseUri + 'v2/sourceAccounts/' + (sourceAccountId == null ? '' : encodeURIComponent(sourceAccountId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Funding Request
		 * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).
		 * Post v2/sourceAccounts/{sourceAccountId}/fundingRequest
		 * @param {string} sourceAccountId Source account id
		 * @param {FundingRequestV2} requestBody Body to included amount to be funded
		 * @return {void} 
		 */
		V2SourceAccounts_sourceAccountIdFundingRequestPost(sourceAccountId: string, requestBody: FundingRequestV2, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/sourceAccounts/' + (sourceAccountId == null ? '' : encodeURIComponent(sourceAccountId)) + '/fundingRequest', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Transfer Funds between source accounts
		 * Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.
		 * Post v2/sourceAccounts/{sourceAccountId}/transfers
		 * @param {string} sourceAccountId The 'from' source account id, which will be debited
		 * @param {TransferRequestV2} requestBody Body
		 * @return {void} 
		 */
		V2SourceAccounts_sourceAccountIdTransfersPost(sourceAccountId: string, requestBody: TransferRequestV2, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/sourceAccounts/' + (sourceAccountId == null ? '' : encodeURIComponent(sourceAccountId)) + '/transfers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Supported Countries
		 * List the supported countries.
		 * Get v2/supportedCountries
		 * @return {SupportedCountriesResponseV2} List of Supported Countries
		 */
		V2SupportedCountriesGet(headersHandler?: () => HttpHeaders): Observable<SupportedCountriesResponseV2> {
			return this.http.get<SupportedCountriesResponseV2>(this.baseUri + 'v2/supportedCountries', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Users
		 * Get a paginated response listing the Users
		 * Get v2/users
		 * @param {UserInfoUserType} type The Type of the User.
		 * @param {UserResponseStatus} status The status of the User.
		 * @param {string} entityId The entityId of the User.
		 * @param {PayeeType} payeeType The Type of the Payee entity. Either COMPANY or INDIVIDUAL.
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort List of sort fields (e.g. ?sort=email:asc,lastName:asc)
		 * Default is email:asc 'name'
		 * The supported sort fields are - email, lastNmae.
		 * @return {PagedUserResponse} Paginated list of Users filtered by query parameters
		 */
		V2UsersGetByTypeAndStatusAndEntityIdAndPayeeTypeAndPageAndPageSizeAndSort(type: UserInfoUserType | null | undefined, status: UserResponseStatus | null | undefined, entityId: string | null | undefined, payeeType: PayeeType | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedUserResponse> {
			return this.http.get<PagedUserResponse>(this.baseUri + 'v2/users?type=' + type + '&status=' + status + '&entityId=' + (entityId == null ? '' : encodeURIComponent(entityId)) + '&payeeType=' + payeeType + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Invite a User
		 * Create a User and invite them to the system
		 * Post v2/users/invite
		 * @param {InviteUserRequest} requestBody Details of User to invite
		 * @return {void} 
		 */
		V2UsersInvitePost(requestBody: InviteUserRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/invite', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Register SMS Number
		 * <p>Register an Sms number and send an OTP to it </p>
		 * <p>Used for manual verification of a user </p>
		 * <p>The backoffice user initiates the request to send the OTP to the user's sms </p>
		 * <p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p>
		 * Post v2/users/registration/sms
		 * @param {RegisterSmsRequest} requestBody a SMS Number to send an OTP to
		 * @return {void} 
		 */
		V2UsersRegistrationSmsPost(requestBody: RegisterSmsRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/registration/sms', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Self
		 * Get the user's details
		 * Get v2/users/self
		 * @return {UserResponse} Get User Details
		 */
		V2UsersSelfGet(headersHandler?: () => HttpHeaders): Observable<UserResponse> {
			return this.http.get<UserResponse>(this.baseUri + 'v2/users/self', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Unregister MFA for Self
		 * <p>Unregister the MFA device for the user </p>
		 * <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>
		 * Post v2/users/self/mfa/unregister
		 * @param {SelfMFATypeUnregisterRequest} requestBody The MFA Type to unregister
		 * @return {void} 
		 */
		V2UsersSelfMfaUnregisterPost(requestBody: SelfMFATypeUnregisterRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/self/mfa/unregister', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Password for self
		 * Update password for self
		 * Post v2/users/self/password
		 * @param {SelfUpdatePasswordRequest} requestBody The password
		 * @return {void} 
		 */
		V2UsersSelfPasswordPost(requestBody: SelfUpdatePasswordRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/self/password', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate the proposed password
		 * validate the password and return a score
		 * Post v2/users/self/password/validate
		 * @param {PasswordRequest} requestBody The password
		 * @return {ValidatePasswordResponse} the password was checked and a score returned
		 */
		V2UsersSelfPasswordValidatePost(requestBody: PasswordRequest, headersHandler?: () => HttpHeaders): Observable<ValidatePasswordResponse> {
			return this.http.post<ValidatePasswordResponse>(this.baseUri + 'v2/users/self/password/validate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update User Details for self
		 * <p>Update the profile details for the given user</p>
		 * <p>Only Payee user types are supported</p>
		 * Post v2/users/self/userDetailsUpdate
		 * @param {PayeeUserSelfUpdateRequest} requestBody The details of the user to update
		 * @return {void} 
		 */
		V2UsersSelfUserDetailsUpdatePost(requestBody: PayeeUserSelfUpdateRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/self/userDetailsUpdate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a User
		 * Delete User by Id.
		 * Delete v2/users/{userId}
		 * @param {string} userId The UUID of the User.
		 * @return {void} 
		 */
		V2Users_userIdDelete(userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/users/' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get User
		 * Get a Single User by Id.
		 * Get v2/users/{userId}
		 * @param {string} userId The UUID of the User.
		 * @return {UserResponse} Get User Details
		 */
		V2Users_userIdGet(userId: string, headersHandler?: () => HttpHeaders): Observable<UserResponse> {
			return this.http.get<UserResponse>(this.baseUri + 'v2/users/' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Disable a User
		 * <p>If a user is enabled this endpoint will disable them </p>
		 * <p>The invoker must have the appropriate permission </p>
		 * <p>A user cannot disable themself </p>
		 * <p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p>
		 * Post v2/users/{userId}/disable
		 * @param {string} userId The UUID of the User.
		 * @return {void} 
		 */
		V2Users_userIdDisablePost(userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/disable', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enable a User
		 * <p>If a user has been disabled this endpoints will enable them </p>
		 * <p>The invoker must have the appropriate permission </p>
		 * <p>A user cannot enable themself </p>
		 * <p>If the user is a payor user and the payor is disabled this operation is not allowed</p>
		 * <p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p>
		 * Post v2/users/{userId}/enable
		 * @param {string} userId The UUID of the User.
		 * @return {void} 
		 */
		V2Users_userIdEnablePost(userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/enable', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unregister MFA for the user
		 * <p>Unregister the MFA device for the user </p>
		 * <p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>
		 * Post v2/users/{userId}/mfa/unregister
		 * @param {string} userId The UUID of the User.
		 * @param {UnregisterMFARequest} requestBody The MFA Type to unregister
		 * @return {void} 
		 */
		V2Users_userIdMfaUnregisterPost(userId: string, requestBody: UnregisterMFARequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/mfa/unregister', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update User Role
		 * <p>Update the user's Role</p>
		 * Post v2/users/{userId}/roleUpdate
		 * @param {string} userId The UUID of the User.
		 * @param {RoleUpdateRequest} requestBody The Role to change to
		 * @return {void} 
		 */
		V2Users_userIdRoleUpdatePost(userId: string, requestBody: RoleUpdateRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/roleUpdate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Resend a token
		 * <p>Resend the specified token </p>
		 * <p>The token to resend must already exist for the user </p>
		 * <p>It will be revoked and a new one issued</p>
		 * Post v2/users/{userId}/tokens
		 * @param {string} userId The UUID of the User.
		 * @param {ResendTokenRequest} requestBody The type of token to resend
		 * @return {void} 
		 */
		V2Users_userIdTokensPost(userId: string, requestBody: ResendTokenRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/tokens', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Unlock a User
		 * If a user is locked this endpoint will unlock them
		 * Post v2/users/{userId}/unlock
		 * @param {string} userId The UUID of the User.
		 * @return {void} 
		 */
		V2Users_userIdUnlockPost(userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/unlock', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update User Details
		 * <p>Update the profile details for the given user</p>
		 * <p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p>
		 * Post v2/users/{userId}/userDetailsUpdate
		 * @param {string} userId The UUID of the User.
		 * @param {UserDetailsUpdateRequest} requestBody The details of the user to update
		 * @return {void} 
		 */
		V2Users_userIdUserDetailsUpdatePost(userId: string, requestBody: UserDetailsUpdateRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/userDetailsUpdate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Payees
		 * <p>Use v4 instead</p>
		 * Get a paginated response listing the payees for a payor.
		 * Get v3/payees
		 * @param {string} payorId The account owner Payor ID
		 * @param {string} watchlistStatus The watchlistStatus of the payees.
		 * @param {boolean} disabled Payee disabled
		 * @param {string} onboardedStatus The onboarded status of the payees.
		 * @param {string} email Email address
		 * @param {string} displayName The display name of the payees.
		 * @param {string} remoteId The remote id of the payees.
		 * @param {string} payeeType The onboarded status of the payees.
		 * @param {string} payeeCountry The country of the payee - 2 letter ISO 3166-1 country code (upper case)
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize Page size. Default is 25. Max allowable is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} sort List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.
		 * @return {PagedPayeeResponseV3} Details of Payee
		 */
		V3PayeesGetByPayorIdAndWatchlistStatusAndDisabledAndOnboardedStatusAndEmailAndDisplayNameAndRemoteIdAndPayeeTypeAndPayeeCountryAndPageAndPageSizeAndSort(payorId: string, watchlistStatus: string | null | undefined, disabled: boolean | null | undefined, onboardedStatus: string | null | undefined, email: string | null | undefined, displayName: string | null | undefined, remoteId: string | null | undefined, payeeType: string | null | undefined, payeeCountry: string | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedPayeeResponseV3> {
			return this.http.get<PagedPayeeResponseV3>(this.baseUri + 'v3/payees?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&watchlistStatus=' + (watchlistStatus == null ? '' : encodeURIComponent(watchlistStatus)) + '&disabled=' + disabled + '&onboardedStatus=' + (onboardedStatus == null ? '' : encodeURIComponent(onboardedStatus)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&displayName=' + (displayName == null ? '' : encodeURIComponent(displayName)) + '&remoteId=' + (remoteId == null ? '' : encodeURIComponent(remoteId)) + '&payeeType=' + (payeeType == null ? '' : encodeURIComponent(payeeType)) + '&payeeCountry=' + (payeeCountry == null ? '' : encodeURIComponent(payeeCountry)) + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Initiate Payee Creation
		 * <p>Use v4 instead</p>
		 * Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
		 * for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
		 * 400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
		 * within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
		 * that provided for another payee within the same batch). The validation at this stage is intra-batch only.
		 * Validation against payees who have already been invited occurs subsequently during processing of the batch.
		 * Post v3/payees
		 * @param {CreatePayeesRequestV3} requestBody Post payees to create.
		 * @return {void} 
		 */
		V3PayeesPost(requestBody: CreatePayeesRequestV3, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/payees', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Query Batch Status
		 * <p>Use v4 instead</p>
		 * Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).
		 * Get v3/payees/batch/{batchId}
		 * @param {string} batchId Batch Id
		 * @return {QueryBatchResponseV3} Get Batch Status
		 */
		V3PayeesBatch_batchIdGet(batchId: string, headersHandler?: () => HttpHeaders): Observable<QueryBatchResponseV3> {
			return this.http.get<QueryBatchResponseV3>(this.baseUri + 'v3/payees/batch/' + (batchId == null ? '' : encodeURIComponent(batchId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Payee Changes
		 * <p>Use v4 instead</p>
		 * <p>Get a paginated response listing payee changes.</p>
		 * Get v3/payees/deltas
		 * @param {string} payorId The Payor ID to find associated Payees
		 * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize Page size. Default is 100. Max allowable is 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PayeeDeltaResponseV3} Details of Payee Changes
		 */
		V3PayeesDeltasGetByPayorIdAndUpdatedSinceAndPageAndPageSize(payorId: string, updatedSince: Date, page: number | null | undefined, pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PayeeDeltaResponseV3> {
			return this.http.get<PayeeDeltaResponseV3>(this.baseUri + 'v3/payees/deltas?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&updatedSince=' + updatedSince.toISOString() + '&page=' + page + '&pageSize=' + pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Payee Invitation Status
		 * <p>Use v4 instead</p>
		 * <p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p>
		 * Get v3/payees/payors/{payorId}/invitationStatus
		 * @param {string} payorId The account owner Payor ID
		 * @param {string} payeeId The UUID of the payee.
		 * @param {string} invitationStatus The invitation status of the payees.
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize Page size. Default is 25. Max allowable is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PagedPayeeInvitationStatusResponseV3} Get Payees with Invitaion status - filters of payeeId and invitationStatus
		 */
		V3PayeesPayors_payorIdInvitationStatusGetByPayeeIdAndInvitationStatusAndPageAndPageSize(payorId: string, payeeId: string | null | undefined, invitationStatus: string | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedPayeeInvitationStatusResponseV3> {
			return this.http.get<PagedPayeeInvitationStatusResponseV3>(this.baseUri + 'v3/payees/payors/' + (payorId == null ? '' : encodeURIComponent(payorId)) + '/invitationStatus&payeeId=' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '&invitationStatus=' + (invitationStatus == null ? '' : encodeURIComponent(invitationStatus)) + '&page=' + page + '&pageSize=' + pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Payee by Id
		 * <p>Use v4 instead</p>
		 * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
		 * <p>* Payee ID is not found</p>
		 * <p>* If Payee has not been on-boarded</p>
		 * <p>* If Payee is in grace period</p>
		 * <p>* If Payee has existing payments</p>
		 * Delete v3/payees/{payeeId}
		 * @param {string} payeeId The UUID of the payee.
		 * @return {void} 
		 */
		V3Payees_payeeIdDelete(payeeId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/payees/' + (payeeId == null ? '' : encodeURIComponent(payeeId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Payee by Id
		 * <p>Use v4 instead</p>
		 * <p>Get Payee by Id</p>
		 * Get v3/payees/{payeeId}
		 * @param {string} payeeId The UUID of the payee.
		 * @param {boolean} sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
		 * If set to true, and you have permission, the PII values will be returned as their original unmasked values.
		 * @return {PayeeDetailResponseV3} Success response, request completed okay
		 */
		V3Payees_payeeIdGetBySensitive(payeeId: string, sensitive: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<PayeeDetailResponseV3> {
			return this.http.get<PayeeDetailResponseV3>(this.baseUri + 'v3/payees/' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '&sensitive=' + sensitive, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Resend Payee Invite
		 * <p>Use v4 instead</p>
		 * <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
		 * <p>Any previous invites to the payee by this Payor will be invalidated</p>
		 * Post v3/payees/{payeeId}/invite
		 * @param {string} payeeId The UUID of the payee.
		 * @param {InvitePayeeRequestV3} requestBody Provide Payor Id in body of request
		 * @return {void} the request was accepted
		 */
		V3Payees_payeeIdInvitePost(payeeId: string, requestBody: InvitePayeeRequestV3, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/payees/' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '/invite', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Payee Details
		 * <p>Use v4 instead</p>
		 * <p>Update payee details for the given Payee Id.<p>
		 * Post v3/payees/{payeeId}/payeeDetailsUpdate
		 * @param {string} payeeId The UUID of the payee.
		 * @param {UpdatePayeeDetailsRequestV3} requestBody Request to update payee details
		 * @return {void} 
		 */
		V3Payees_payeeIdPayeeDetailsUpdatePost(payeeId: string, requestBody: UpdatePayeeDetailsRequestV3, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/payees/' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '/payeeDetailsUpdate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Payee Remote Id
		 * <p>Use v4 instead</p>
		 * <p>Update the remote Id for the given Payee Id.</p>
		 * Post v3/payees/{payeeId}/remoteIdUpdate
		 * @param {string} payeeId The UUID of the payee.
		 * @param {UpdateRemoteIdRequestV3} requestBody Request to update payee remote id v3
		 * @return {void} 
		 */
		V3Payees_payeeIdRemoteIdUpdatePost(payeeId: string, requestBody: UpdateRemoteIdRequestV3, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/payees/' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '/remoteIdUpdate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * V3 Get List of Payments
		 * Deprecated (use /v4/paymentaudit/payments instead)
		 * Get v3/paymentaudit/payments
		 * @param {string} payeeId The UUID of the payee.
		 * @param {string} payorId The account owner Payor Id. Required for external users.
		 * @param {string} payorName The payor’s name. This filters via a case insensitive substring match.
		 * @param {string} remoteId The remote id of the payees.
		 * @param {V3PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndStatusAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndPageAndPageSizeAndSortAndSensitiveStatus} status Payment Status
		 * @param {string} sourceAccountName The source account name filter. This filters via a case insensitive substring match.
		 * @param {number} sourceAmountFrom The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} sourceAmountTo The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} sourceCurrency The source currency filter. Filters based on an exact match on the currency.
		 * @param {number} paymentAmountFrom The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} paymentAmountTo The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} paymentCurrency The payment currency filter. Filters based on an exact match on the currency.
		 * @param {Date} submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {Date} submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {string} paymentMemo The payment memo filter. This filters via a case insensitive substring match.
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId
		 * The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,
		 * routingNumber, accountNumber, remoteId, submittedDateTime and status
		 * @param {boolean} sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
		 * If set to true, and you have permission, the PII values will be returned as their original unmasked values.
		 * @return {ListPaymentsResponseV3} Paginated list of payments
		 */
		V3PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndStatusAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndPageAndPageSizeAndSortAndSensitive(payeeId: string | null | undefined, payorId: string | null | undefined, payorName: string | null | undefined, remoteId: string | null | undefined, status: V3PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndStatusAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndPageAndPageSizeAndSortAndSensitiveStatus | null | undefined, sourceAccountName: string | null | undefined, sourceAmountFrom: number | null | undefined, sourceAmountTo: number | null | undefined, sourceCurrency: string | null | undefined, paymentAmountFrom: number | null | undefined, paymentAmountTo: number | null | undefined, paymentCurrency: string | null | undefined, submittedDateFrom: Date | null | undefined, submittedDateTo: Date | null | undefined, paymentMemo: string | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, sensitive: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListPaymentsResponseV3> {
			return this.http.get<ListPaymentsResponseV3>(this.baseUri + 'v3/paymentaudit/payments?payeeId=' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '&payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&payorName=' + (payorName == null ? '' : encodeURIComponent(payorName)) + '&remoteId=' + (remoteId == null ? '' : encodeURIComponent(remoteId)) + '&status=' + status + '&sourceAccountName=' + (sourceAccountName == null ? '' : encodeURIComponent(sourceAccountName)) + '&sourceAmountFrom=' + sourceAmountFrom + '&sourceAmountTo=' + sourceAmountTo + '&sourceCurrency=' + (sourceCurrency == null ? '' : encodeURIComponent(sourceCurrency)) + '&paymentAmountFrom=' + paymentAmountFrom + '&paymentAmountTo=' + paymentAmountTo + '&paymentCurrency=' + (paymentCurrency == null ? '' : encodeURIComponent(paymentCurrency)) + '&submittedDateFrom=' + submittedDateFrom?.toISOString() + '&submittedDateTo=' + submittedDateTo?.toISOString() + '&paymentMemo=' + (paymentMemo == null ? '' : encodeURIComponent(paymentMemo)) + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sensitive=' + sensitive, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * V3 Get Payment
		 * Deprecated (use /v4/paymentaudit/payments/<paymentId> instead)
		 * Get v3/paymentaudit/payments/{paymentId}
		 * @param {string} paymentId Payment Id
		 * @param {boolean} sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
		 * If set to true, and you have permission, the PII values will be returned as their original unmasked values.
		 * @return {PaymentResponseV3} 200 response, request completed okay
		 */
		V3PaymentauditPayments_paymentIdGetBySensitive(paymentId: string, sensitive: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<PaymentResponseV3> {
			return this.http.get<PaymentResponseV3>(this.baseUri + 'v3/paymentaudit/payments/' + (paymentId == null ? '' : encodeURIComponent(paymentId)) + '&sensitive=' + sensitive, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * V3 Get Payouts for Payor
		 * Deprecated (use /v4/paymentaudit/payouts instead)
		 * Get v3/paymentaudit/payouts
		 * @param {string} payorId The account owner Payor ID
		 * @param {string} payoutMemo Payout Memo filter - case insensitive sub-string match
		 * @param {V3PaymentauditPayoutsGetByPayorIdAndPayoutMemoAndStatusAndSubmittedDateFromAndSubmittedDateToAndPageAndPageSizeAndSortStatus} status Payout Status
		 * @param {Date} submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {Date} submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc)
		 * Default is submittedDateTime:asc
		 * The supported sort fields are: submittedDateTime, instructedDateTime, status.
		 * @return {GetPayoutsResponseV3} Payor data found
		 */
		V3PaymentauditPayoutsGetByPayorIdAndPayoutMemoAndStatusAndSubmittedDateFromAndSubmittedDateToAndPageAndPageSizeAndSort(payorId: string, payoutMemo: string | null | undefined, status: V3PaymentauditPayoutsGetByPayorIdAndPayoutMemoAndStatusAndSubmittedDateFromAndSubmittedDateToAndPageAndPageSizeAndSortStatus | null | undefined, submittedDateFrom: Date | null | undefined, submittedDateTo: Date | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetPayoutsResponseV3> {
			return this.http.get<GetPayoutsResponseV3>(this.baseUri + 'v3/paymentaudit/payouts?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&payoutMemo=' + (payoutMemo == null ? '' : encodeURIComponent(payoutMemo)) + '&status=' + status + '&submittedDateFrom=' + submittedDateFrom?.toISOString() + '&submittedDateTo=' + submittedDateTo?.toISOString() + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * V3 Get Payments for Payout
		 * Deprecated (use /v4/paymentaudit/payouts/<payoutId> instead)
		 * Get v3/paymentaudit/payouts/{payoutId}
		 * @param {string} payoutId The id (UUID) of the payout.
		 * @param {string} remoteId The remote id of the payees.
		 * @param {V3PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndStatusAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndPageAndPageSizeAndSortAndSensitiveStatus} status Payment Status
		 * @param {number} sourceAmountFrom The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} sourceAmountTo The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} paymentAmountFrom The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} paymentAmountTo The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Date} submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {Date} submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort <p>List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId</p>
		 * <p>The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,
		 * routingNumber, accountNumber, remoteId, submittedDateTime and status</p>
		 * @param {boolean} sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
		 * If set to true, and you have permission, the PII values will be returned as their original unmasked values.
		 * @return {GetPaymentsForPayoutResponseV3} 200 response, data found okay
		 */
		V3PaymentauditPayouts_payoutIdGetByRemoteIdAndStatusAndSourceAmountFromAndSourceAmountToAndPaymentAmountFromAndPaymentAmountToAndSubmittedDateFromAndSubmittedDateToAndPageAndPageSizeAndSortAndSensitive(payoutId: string, remoteId: string | null | undefined, status: V3PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndStatusAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndPageAndPageSizeAndSortAndSensitiveStatus | null | undefined, sourceAmountFrom: number | null | undefined, sourceAmountTo: number | null | undefined, paymentAmountFrom: number | null | undefined, paymentAmountTo: number | null | undefined, submittedDateFrom: Date | null | undefined, submittedDateTo: Date | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, sensitive: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetPaymentsForPayoutResponseV3> {
			return this.http.get<GetPaymentsForPayoutResponseV3>(this.baseUri + 'v3/paymentaudit/payouts/' + (payoutId == null ? '' : encodeURIComponent(payoutId)) + '&remoteId=' + (remoteId == null ? '' : encodeURIComponent(remoteId)) + '&status=' + status + '&sourceAmountFrom=' + sourceAmountFrom + '&sourceAmountTo=' + sourceAmountTo + '&paymentAmountFrom=' + paymentAmountFrom + '&paymentAmountTo=' + paymentAmountTo + '&submittedDateFrom=' + submittedDateFrom?.toISOString() + '&submittedDateTo=' + submittedDateTo?.toISOString() + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sensitive=' + sensitive, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * V3 Export Transactions
		 * Deprecated (use /v4/paymentaudit/transactions instead)
		 * Get v3/paymentaudit/transactions
		 * @param {string} payorId The Payor ID for whom you wish to run the report.
		 * For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.
		 * @param {Date} startDate Start date, inclusive. Format is YYYY-MM-DD
		 *     Type: DateOnly
		 * @param {Date} endDate End date, inclusive. Format is YYYY-MM-DD
		 *     Type: DateOnly
		 * @return {void} Export Transactions response
		 */
		V3PaymentauditTransactionsGetByPayorIdAndStartDateAndEndDate(payorId: string | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/paymentaudit/transactions?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString(), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Submit Payout
		 * <p>Create a new payout and return a location header with a link to the payout</p>
		 * <p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p>
		 * <p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p>
		 * <p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p>
		 * Post v3/payouts
		 * @param {CreatePayoutRequestV3} requestBody Post amount to transfer using stored funding account details.
		 * @return {void} 
		 */
		V3PayoutsPost(requestBody: CreatePayoutRequestV3, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/payouts', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Withdraw Payout
		 * Withdraw Payout will remove the payout details from the rails but the payout will still be accessible in payout service in WITHDRAWN status.
		 * Delete v3/payouts/{payoutId}
		 * @param {string} payoutId Id of the payout
		 * @return {void} 
		 */
		V3Payouts_payoutIdDelete(payoutId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/payouts/' + (payoutId == null ? '' : encodeURIComponent(payoutId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Payout Summary
		 * Get payout summary - returns the current state of the payout.
		 * Get v3/payouts/{payoutId}
		 * @param {string} payoutId Id of the payout
		 * @return {PayoutSummaryResponseV3} Details of Payout
		 */
		V3Payouts_payoutIdGet(payoutId: string, headersHandler?: () => HttpHeaders): Observable<PayoutSummaryResponseV3> {
			return this.http.get<PayoutSummaryResponseV3>(this.baseUri + 'v3/payouts/' + (payoutId == null ? '' : encodeURIComponent(payoutId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Instruct Payout
		 * Instruct a payout to be made for the specified payoutId.
		 * Post v3/payouts/{payoutId}
		 * @param {string} payoutId Id of the payout
		 * @param {InstructPayoutRequestV3} requestBody Additional instruct payout parameters
		 * @return {void} 
		 */
		V3Payouts_payoutIdPost(payoutId: string, requestBody: InstructPayoutRequestV3, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/payouts/' + (payoutId == null ? '' : encodeURIComponent(payoutId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve payments for a payout
		 * Retrieve payments for a payout
		 * Get v3/payouts/{payoutId}/payments
		 * @param {string} payoutId Id of the payout
		 * @param {V3Payouts_payoutIdPaymentsGetByStatusAndRemoteIdAndPayorPaymentIdAndSourceAccountNameAndTransmissionTypeAndPaymentMemoAndPageSizeAndPageStatus} status Payment Status
		 * * ACCEPTED: any payment which was accepted at submission time (status may have changed since)
		 * * REJECTED: any payment rejected by initial submission processing
		 * * WITHDRAWN: any payment which has been withdrawn
		 * * WITHDRAWABLE: any payment eligible for withdrawal
		 * @param {string} remoteId The remote id of the payees.
		 * @param {string} payorPaymentId Payor's Id of the Payment
		 * @param {string} sourceAccountName Physical Account Name
		 * @param {V3Payouts_payoutIdPaymentsGetByStatusAndRemoteIdAndPayorPaymentIdAndSourceAccountNameAndTransmissionTypeAndPaymentMemoAndPageSizeAndPageTransmissionType} transmissionType Transmission Type
		 * * ACH
		 * * SAME_DAY_ACH
		 * * WIRE
		 * @param {string} paymentMemo Payment Memo of the Payment
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PagedPaymentsResponseV3} Payments for payout
		 */
		V3Payouts_payoutIdPaymentsGetByStatusAndRemoteIdAndPayorPaymentIdAndSourceAccountNameAndTransmissionTypeAndPaymentMemoAndPageSizeAndPage(payoutId: string, status: V3Payouts_payoutIdPaymentsGetByStatusAndRemoteIdAndPayorPaymentIdAndSourceAccountNameAndTransmissionTypeAndPaymentMemoAndPageSizeAndPageStatus | null | undefined, remoteId: string | null | undefined, payorPaymentId: string | null | undefined, sourceAccountName: string | null | undefined, transmissionType: V3Payouts_payoutIdPaymentsGetByStatusAndRemoteIdAndPayorPaymentIdAndSourceAccountNameAndTransmissionTypeAndPaymentMemoAndPageSizeAndPageTransmissionType | null | undefined, paymentMemo: string | null | undefined, pageSize: number | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedPaymentsResponseV3> {
			return this.http.get<PagedPaymentsResponseV3>(this.baseUri + 'v3/payouts/' + (payoutId == null ? '' : encodeURIComponent(payoutId)) + '/payments&status=' + status + '&remoteId=' + (remoteId == null ? '' : encodeURIComponent(remoteId)) + '&payorPaymentId=' + (payorPaymentId == null ? '' : encodeURIComponent(payorPaymentId)) + '&sourceAccountName=' + (sourceAccountName == null ? '' : encodeURIComponent(sourceAccountName)) + '&transmissionType=' + transmissionType + '&paymentMemo=' + (paymentMemo == null ? '' : encodeURIComponent(paymentMemo)) + '&pageSize=' + pageSize + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a quote for the payout
		 * Create quote for a payout
		 * Post v3/payouts/{payoutId}/quote
		 * @param {string} payoutId Id of the payout
		 * @return {QuoteResponseV3} Quote for payout
		 */
		V3Payouts_payoutIdQuotePost(payoutId: string, headersHandler?: () => HttpHeaders): Observable<QuoteResponseV3> {
			return this.http.post<QuoteResponseV3>(this.baseUri + 'v3/payouts/' + (payoutId == null ? '' : encodeURIComponent(payoutId)) + '/quote', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deschedule a payout
		 * Remove the schedule for a scheduled payout
		 * Delete v3/payouts/{payoutId}/schedule
		 * @param {string} payoutId Id of the payout
		 * @return {void} 
		 */
		V3Payouts_payoutIdScheduleDelete(payoutId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/payouts/' + (payoutId == null ? '' : encodeURIComponent(payoutId)) + '/schedule', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Schedule a payout
		 * <p>Schedule a payout for auto-instruction in the future
		 * or update existing payout schedule if the payout has been scheduled before.</p>
		 * Post v3/payouts/{payoutId}/schedule
		 * @param {string} payoutId Id of the payout
		 * @param {SchedulePayoutRequestV3} requestBody schedule payout parameters
		 * @return {void} 
		 */
		V3Payouts_payoutIdSchedulePost(payoutId: string, requestBody: SchedulePayoutRequestV3, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/payouts/' + (payoutId == null ? '' : encodeURIComponent(payoutId)) + '/schedule', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get list of source accounts
		 * List source accounts.
		 * Get v3/sourceAccounts
		 * @param {string} physicalAccountName Physical Account Name
		 * @param {string} physicalAccountId The physical account ID
		 * @param {string} payorId The account owner Payor ID
		 * @param {string} fundingAccountId The funding account ID
		 * @param {string} includeUserDeleted A filter for retrieving both active accounts and user deleted ones
		 * @param {string} type The type of source account.
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort List of sort fields e.g. ?sort=name:asc
		 * Default is name:asc
		 * The supported sort fields are - fundingRef, name, balance
		 * @return {ListSourceAccountResponseV3} List Source Account response
		 */
		V3SourceAccountsGetByPhysicalAccountNameAndPhysicalAccountIdAndPayorIdAndFundingAccountIdAndIncludeUserDeletedAndTypeAndPageAndPageSizeAndSort(physicalAccountName: string | null | undefined, physicalAccountId: string | null | undefined, payorId: string | null | undefined, fundingAccountId: string | null | undefined, includeUserDeleted: string | null | undefined, type: string | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListSourceAccountResponseV3> {
			return this.http.get<ListSourceAccountResponseV3>(this.baseUri + 'v3/sourceAccounts?physicalAccountName=' + (physicalAccountName == null ? '' : encodeURIComponent(physicalAccountName)) + '&physicalAccountId=' + (physicalAccountId == null ? '' : encodeURIComponent(physicalAccountId)) + '&payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&fundingAccountId=' + (fundingAccountId == null ? '' : encodeURIComponent(fundingAccountId)) + '&includeUserDeleted=' + (includeUserDeleted == null ? '' : encodeURIComponent(includeUserDeleted)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a source account by ID
		 * Mark a source account as deleted by ID
		 * Delete v3/sourceAccounts/{sourceAccountId}
		 * @param {string} sourceAccountId Source account id
		 * @return {void} 
		 */
		V3SourceAccounts_sourceAccountIdDelete(sourceAccountId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/sourceAccounts/' + (sourceAccountId == null ? '' : encodeURIComponent(sourceAccountId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get details about given source account.
		 * Get details about given source account.
		 * Get v3/sourceAccounts/{sourceAccountId}
		 * @param {string} sourceAccountId Source account id
		 * @return {SourceAccountResponseV3} Source account response
		 */
		V3SourceAccounts_sourceAccountIdGet(sourceAccountId: string, headersHandler?: () => HttpHeaders): Observable<SourceAccountResponseV3> {
			return this.http.get<SourceAccountResponseV3>(this.baseUri + 'v3/sourceAccounts/' + (sourceAccountId == null ? '' : encodeURIComponent(sourceAccountId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Funding Request
		 * <p>Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo</p>
		 * Post v3/sourceAccounts/{sourceAccountId}/fundingRequest
		 * @param {string} sourceAccountId Source account id
		 * @param {FundingRequestV3} requestBody Body to included amount to be funded
		 * @return {void} 
		 */
		V3SourceAccounts_sourceAccountIdFundingRequestPost(sourceAccountId: string, requestBody: FundingRequestV3, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/sourceAccounts/' + (sourceAccountId == null ? '' : encodeURIComponent(sourceAccountId)) + '/fundingRequest', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Set notifications
		 * <p>Set notifications for a given source account</p>
		 * <p>If the balance falls below the amount set in the request an email notification will be sent to the email address registered in the payor profile</p>
		 * Post v3/sourceAccounts/{sourceAccountId}/notifications
		 * @param {string} sourceAccountId Source account id
		 * @param {SetNotificationsRequest_2} requestBody Body to included minimum balance to set
		 * @return {void} 
		 */
		V3SourceAccounts_sourceAccountIdNotificationsPost(sourceAccountId: string, requestBody: SetNotificationsRequest_2, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/sourceAccounts/' + (sourceAccountId == null ? '' : encodeURIComponent(sourceAccountId)) + '/notifications', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Transfer Funds between source accounts
		 * Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.
		 * Post v3/sourceAccounts/{sourceAccountId}/transfers
		 * @param {string} sourceAccountId The 'from' source account id, which will be debited
		 * @param {TransferRequestV3} requestBody Body
		 * @return {void} 
		 */
		V3SourceAccounts_sourceAccountIdTransfersPost(sourceAccountId: string, requestBody: TransferRequestV3, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/sourceAccounts/' + (sourceAccountId == null ? '' : encodeURIComponent(sourceAccountId)) + '/transfers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Payees
		 * Get a paginated response listing the payees for a payor.
		 * Get v4/payees
		 * @param {string} payorId The account owner Payor ID
		 * @param {string} watchlistStatus The watchlistStatus of the payees.
		 * @param {boolean} disabled Payee disabled
		 * @param {string} onboardedStatus The onboarded status of the payees.
		 * @param {string} email Email address
		 * @param {string} displayName The display name of the payees.
		 * @param {string} remoteId The remote id of the payees.
		 * @param {string} payeeType The onboarded status of the payees.
		 * @param {string} payeeCountry The country of the payee - 2 letter ISO 3166-1 country code (upper case)
		 * @param {string} ofacStatus The ofacStatus of the payees.
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize Page size. Default is 25. Max allowable is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} sort List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.
		 * @return {PagedPayeeResponseV4} Details of Payee
		 */
		V4PayeesGetByPayorIdAndWatchlistStatusAndDisabledAndOnboardedStatusAndEmailAndDisplayNameAndRemoteIdAndPayeeTypeAndPayeeCountryAndOfacStatusAndPageAndPageSizeAndSort(payorId: string, watchlistStatus: string | null | undefined, disabled: boolean | null | undefined, onboardedStatus: string | null | undefined, email: string | null | undefined, displayName: string | null | undefined, remoteId: string | null | undefined, payeeType: string | null | undefined, payeeCountry: string | null | undefined, ofacStatus: string | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedPayeeResponseV4> {
			return this.http.get<PagedPayeeResponseV4>(this.baseUri + 'v4/payees?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&watchlistStatus=' + (watchlistStatus == null ? '' : encodeURIComponent(watchlistStatus)) + '&disabled=' + disabled + '&onboardedStatus=' + (onboardedStatus == null ? '' : encodeURIComponent(onboardedStatus)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&displayName=' + (displayName == null ? '' : encodeURIComponent(displayName)) + '&remoteId=' + (remoteId == null ? '' : encodeURIComponent(remoteId)) + '&payeeType=' + (payeeType == null ? '' : encodeURIComponent(payeeType)) + '&payeeCountry=' + (payeeCountry == null ? '' : encodeURIComponent(payeeCountry)) + '&ofacStatus=' + (ofacStatus == null ? '' : encodeURIComponent(ofacStatus)) + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Initiate Payee Creation
		 * <p>Initiate the process of creating 1 to 2000 payees in a batch</p>
		 * <p>Use the batchId in the response to query for status.</p>
		 * <p>In addition to standard semantic validations, a 400 will also result if: </p>
		 * <ul>
		 * <li>there is a duplicate remote id within the batch</li>
		 * <li>there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
		 * that provided for another payee within the same batch).</li>
		 * </ul>
		 * <p>The validation at this stage is intra-batch only.</p>
		 * <p>Validation against payees who have already been invited occurs subsequently during processing of the batch.</p>
		 * Post v4/payees
		 * @param {CreatePayeesRequestV4} requestBody Post payees to create.
		 * @return {void} 
		 */
		V4PayeesPost(requestBody: CreatePayeesRequestV4, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/payees', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Query Batch Status
		 * Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).
		 * Get v4/payees/batch/{batchId}
		 * @param {string} batchId Batch Id
		 * @return {QueryBatchResponseV4} Get Batch Status
		 */
		V4PayeesBatch_batchIdGet(batchId: string, headersHandler?: () => HttpHeaders): Observable<QueryBatchResponseV4> {
			return this.http.get<QueryBatchResponseV4>(this.baseUri + 'v4/payees/batch/' + (batchId == null ? '' : encodeURIComponent(batchId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Payee Changes
		 * Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields:
		 * - dbaName
		 * - displayName
		 * - email
		 * - onboardedStatus
		 * - payeeCountry
		 * - payeeId
		 * - remoteId
		 * Get v4/payees/deltas
		 * @param {string} payorId The Payor ID to find associated Payees
		 * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize Page size. Default is 100. Max allowable is 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PayeeDeltaResponseV4} Details of Payee Changes
		 */
		V4PayeesDeltasGetByPayorIdAndUpdatedSinceAndPageAndPageSize(payorId: string, updatedSince: Date, page: number | null | undefined, pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PayeeDeltaResponseV4> {
			return this.http.get<PayeeDeltaResponseV4>(this.baseUri + 'v4/payees/deltas?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&updatedSince=' + updatedSince.toISOString() + '&page=' + page + '&pageSize=' + pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Payee Invitation Status
		 * Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.
		 * Get v4/payees/payors/{payorId}/invitationStatus
		 * @param {string} payorId The account owner Payor ID
		 * @param {string} payeeId The UUID of the payee.
		 * @param {string} invitationStatus The invitation status of the payees.
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize Page size. Default is 25. Max allowable is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PagedPayeeInvitationStatusResponseV4} Get Payees with Invitaion status - filters of payeeId and invitationStatus
		 */
		V4PayeesPayors_payorIdInvitationStatusGetByPayeeIdAndInvitationStatusAndPageAndPageSize(payorId: string, payeeId: string | null | undefined, invitationStatus: string | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PagedPayeeInvitationStatusResponseV4> {
			return this.http.get<PagedPayeeInvitationStatusResponseV4>(this.baseUri + 'v4/payees/payors/' + (payorId == null ? '' : encodeURIComponent(payorId)) + '/invitationStatus&payeeId=' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '&invitationStatus=' + (invitationStatus == null ? '' : encodeURIComponent(invitationStatus)) + '&page=' + page + '&pageSize=' + pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Payee by Id
		 * <p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
		 * <p>* Payee ID is not found</p>
		 * <p>* If Payee has not been on-boarded</p>
		 * <p>* If Payee is in grace period</p>
		 * <p>* If Payee has existing payments</p>
		 * Delete v4/payees/{payeeId}
		 * @param {string} payeeId The UUID of the payee.
		 * @return {void} 
		 */
		V4Payees_payeeIdDelete(payeeId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/payees/' + (payeeId == null ? '' : encodeURIComponent(payeeId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Payee by Id
		 * Get Payee by Id
		 * Get v4/payees/{payeeId}
		 * @param {string} payeeId The UUID of the payee.
		 * @param {boolean} sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
		 * If set to true, and you have permission, the PII values will be returned as their original unmasked values.
		 * @return {PayeeDetailResponseV4} Success response, request completed okay
		 */
		V4Payees_payeeIdGetBySensitive(payeeId: string, sensitive: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<PayeeDetailResponseV4> {
			return this.http.get<PayeeDetailResponseV4>(this.baseUri + 'v4/payees/' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '&sensitive=' + sensitive, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Resend Payee Invite
		 * <p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
		 * <p>Any previous invites to the payee by this Payor will be invalidated</p>
		 * Post v4/payees/{payeeId}/invite
		 * @param {string} payeeId The UUID of the payee.
		 * @param {InvitePayeeRequestV4} requestBody Provide Payor Id in body of request
		 * @return {void} the request was accepted
		 */
		V4Payees_payeeIdInvitePost(payeeId: string, requestBody: InvitePayeeRequestV4, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/payees/' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '/invite', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Payee Details
		 * <p>Update payee details for the given Payee Id.</p>
		 * <p>Payors may only update the payee details if the payee has not yet onboarded</p>
		 * Post v4/payees/{payeeId}/payeeDetailsUpdate
		 * @param {string} payeeId The UUID of the payee.
		 * @param {UpdatePayeeDetailsRequestV4} requestBody Request to update payee details
		 * @return {void} 
		 */
		V4Payees_payeeIdPayeeDetailsUpdatePost(payeeId: string, requestBody: UpdatePayeeDetailsRequestV4, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/payees/' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '/payeeDetailsUpdate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Payee Remote Id
		 * <p>Update the remote Id for the given Payee Id.</p>
		 * Post v4/payees/{payeeId}/remoteIdUpdate
		 * @param {string} payeeId The UUID of the payee.
		 * @param {UpdateRemoteIdRequestV4} requestBody Request to update payee remote id v4
		 * @return {void} 
		 */
		V4Payees_payeeIdRemoteIdUpdatePost(payeeId: string, requestBody: UpdateRemoteIdRequestV4, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/payees/' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '/remoteIdUpdate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Fundings for Payor
		 * <p>Get a list of Fundings for a payor.</p>
		 * Get v4/paymentaudit/fundings
		 * @param {string} payorId The account owner Payor ID
		 * @param {string} sourceAccountName The source account name
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc```
		 * Default is no sort. The supported sort fields are: dateTime and amount.
		 * @return {GetFundingsResponse} Get Fundings normal response
		 */
		V4PaymentauditFundingsGetByPayorIdAndSourceAccountNameAndPageAndPageSizeAndSort(payorId: string, sourceAccountName: string | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetFundingsResponse> {
			return this.http.get<GetFundingsResponse>(this.baseUri + 'v4/paymentaudit/fundings?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&sourceAccountName=' + (sourceAccountName == null ? '' : encodeURIComponent(sourceAccountName)) + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get List of Payments
		 * Get payments for the given payor Id
		 * Get v4/paymentaudit/payments
		 * @param {string} payeeId The UUID of the payee.
		 * @param {string} payorId The account owner Payor Id. Required for external users.
		 * @param {string} payorName The payor’s name. This filters via a case insensitive substring match.
		 * @param {string} remoteId The remote id of the payees.
		 * @param {string} remoteSystemId The id of the remote system that is orchestrating payments
		 * @param {V3PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndStatusAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndPageAndPageSizeAndSortAndSensitiveStatus} status Payment Status
		 * @param {V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitiveTransmissionType} transmissionType Transmission Type
		 * * ACH
		 * * SAME_DAY_ACH
		 * * WIRE
		 * * GACHO
		 * @param {string} sourceAccountName The source account name filter. This filters via a case insensitive substring match.
		 * @param {number} sourceAmountFrom The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} sourceAmountTo The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} sourceCurrency The source currency filter. Filters based on an exact match on the currency.
		 * @param {number} paymentAmountFrom The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} paymentAmountTo The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} paymentCurrency The payment currency filter. Filters based on an exact match on the currency.
		 * @param {Date} submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {Date} submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {string} paymentMemo The payment memo filter. This filters via a case insensitive substring match.
		 * @param {string} railsId Payout Rails ID filter - case insensitive match.
		 * Any value is allowed, but you should use one of the supported railsId values.
		 * To get this list of values, you should call the 'Get Supported Rails' endpoint.
		 * @param {Date} scheduledForDateFrom Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {Date} scheduledForDateTo Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitiveScheduleStatus} scheduleStatus Payout Schedule Status
		 * @param {V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitivePostInstructFxStatus} postInstructFxStatus The status of the post instruct FX step if one was required for the payment
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by submittedDateTime:desc,paymentId:asc
		 * The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,
		 * routingNumber, accountNumber, remoteId, submittedDateTime, status and paymentId
		 * @param {boolean} sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
		 * If set to true, and you have permission, the PII values will be returned as their original unmasked values.
		 * @return {ListPaymentsResponseV4} Paginated list of payments
		 */
		V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitive(payeeId: string | null | undefined, payorId: string | null | undefined, payorName: string | null | undefined, remoteId: string | null | undefined, remoteSystemId: string | null | undefined, status: V3PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndStatusAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndPageAndPageSizeAndSortAndSensitiveStatus | null | undefined, transmissionType: V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitiveTransmissionType | null | undefined, sourceAccountName: string | null | undefined, sourceAmountFrom: number | null | undefined, sourceAmountTo: number | null | undefined, sourceCurrency: string | null | undefined, paymentAmountFrom: number | null | undefined, paymentAmountTo: number | null | undefined, paymentCurrency: string | null | undefined, submittedDateFrom: Date | null | undefined, submittedDateTo: Date | null | undefined, paymentMemo: string | null | undefined, railsId: string | null | undefined, scheduledForDateFrom: Date | null | undefined, scheduledForDateTo: Date | null | undefined, scheduleStatus: V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitiveScheduleStatus | null | undefined, postInstructFxStatus: V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitivePostInstructFxStatus | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, sensitive: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListPaymentsResponseV4> {
			return this.http.get<ListPaymentsResponseV4>(this.baseUri + 'v4/paymentaudit/payments?payeeId=' + (payeeId == null ? '' : encodeURIComponent(payeeId)) + '&payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&payorName=' + (payorName == null ? '' : encodeURIComponent(payorName)) + '&remoteId=' + (remoteId == null ? '' : encodeURIComponent(remoteId)) + '&remoteSystemId=' + (remoteSystemId == null ? '' : encodeURIComponent(remoteSystemId)) + '&status=' + status + '&transmissionType=' + transmissionType + '&sourceAccountName=' + (sourceAccountName == null ? '' : encodeURIComponent(sourceAccountName)) + '&sourceAmountFrom=' + sourceAmountFrom + '&sourceAmountTo=' + sourceAmountTo + '&sourceCurrency=' + (sourceCurrency == null ? '' : encodeURIComponent(sourceCurrency)) + '&paymentAmountFrom=' + paymentAmountFrom + '&paymentAmountTo=' + paymentAmountTo + '&paymentCurrency=' + (paymentCurrency == null ? '' : encodeURIComponent(paymentCurrency)) + '&submittedDateFrom=' + submittedDateFrom?.toISOString() + '&submittedDateTo=' + submittedDateTo?.toISOString() + '&paymentMemo=' + (paymentMemo == null ? '' : encodeURIComponent(paymentMemo)) + '&railsId=' + (railsId == null ? '' : encodeURIComponent(railsId)) + '&scheduledForDateFrom=' + scheduledForDateFrom?.toISOString() + '&scheduledForDateTo=' + scheduledForDateTo?.toISOString() + '&scheduleStatus=' + scheduleStatus + '&postInstructFxStatus=' + postInstructFxStatus + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sensitive=' + sensitive, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Payment
		 * Get the payment with the given id. This contains the payment history.
		 * Get v4/paymentaudit/payments/{paymentId}
		 * @param {string} paymentId Payment Id
		 * @param {boolean} sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
		 * If set to true, and you have permission, the PII values will be returned as their original unmasked values.
		 * @return {PaymentResponseV4} 200 response, request completed okay
		 */
		V4PaymentauditPayments_paymentIdGetBySensitive(paymentId: string, sensitive: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<PaymentResponseV4> {
			return this.http.get<PaymentResponseV4>(this.baseUri + 'v4/paymentaudit/payments/' + (paymentId == null ? '' : encodeURIComponent(paymentId)) + '&sensitive=' + sensitive, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Payout Statistics
		 * <p>Get payout statistics for a payor.</p>
		 * Get v4/paymentaudit/payoutStatistics
		 * @param {string} payorId The account owner Payor ID. Required for external users.
		 * @return {GetPayoutStatistics} Payout Statistics response
		 */
		V4PaymentauditPayoutStatisticsGetByPayorId(payorId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetPayoutStatistics> {
			return this.http.get<GetPayoutStatistics>(this.baseUri + 'v4/paymentaudit/payoutStatistics?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Payouts for Payor
		 * Get List of payouts for payor
		 * Get v4/paymentaudit/payouts
		 * @param {string} payorId The id (UUID) of the payor funding the payout or the payor whose payees are being paid.
		 * @param {string} payoutMemo Payout Memo filter - case insensitive sub-string match
		 * @param {V3PaymentauditPayoutsGetByPayorIdAndPayoutMemoAndStatusAndSubmittedDateFromAndSubmittedDateToAndPageAndPageSizeAndSortStatus} status Payout Status
		 * @param {Date} submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {Date} submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {string} fromPayorName The name of the payor whose payees are being paid. This filters via a case insensitive substring match.
		 * @param {Date} scheduledForDateFrom Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {Date} scheduledForDateTo Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitiveScheduleStatus} scheduleStatus Payout Schedule Status
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc)
		 * Default is submittedDateTime:asc
		 * The supported sort fields are: submittedDateTime, instructedDateTime, status, totalPayments, payoutId, scheduledFor
		 * @return {GetPayoutsResponse} Payor data found
		 */
		V4PaymentauditPayoutsGetByPayorIdAndPayoutMemoAndStatusAndSubmittedDateFromAndSubmittedDateToAndFromPayorNameAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPageAndPageSizeAndSort(payorId: string | null | undefined, payoutMemo: string | null | undefined, status: V3PaymentauditPayoutsGetByPayorIdAndPayoutMemoAndStatusAndSubmittedDateFromAndSubmittedDateToAndPageAndPageSizeAndSortStatus | null | undefined, submittedDateFrom: Date | null | undefined, submittedDateTo: Date | null | undefined, fromPayorName: string | null | undefined, scheduledForDateFrom: Date | null | undefined, scheduledForDateTo: Date | null | undefined, scheduleStatus: V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitiveScheduleStatus | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetPayoutsResponse> {
			return this.http.get<GetPayoutsResponse>(this.baseUri + 'v4/paymentaudit/payouts?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&payoutMemo=' + (payoutMemo == null ? '' : encodeURIComponent(payoutMemo)) + '&status=' + status + '&submittedDateFrom=' + submittedDateFrom?.toISOString() + '&submittedDateTo=' + submittedDateTo?.toISOString() + '&fromPayorName=' + (fromPayorName == null ? '' : encodeURIComponent(fromPayorName)) + '&scheduledForDateFrom=' + scheduledForDateFrom?.toISOString() + '&scheduledForDateTo=' + scheduledForDateTo?.toISOString() + '&scheduleStatus=' + scheduleStatus + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Payments for Payout
		 * Get List of payments for Payout, allowing for RETURNED status
		 * Get v4/paymentaudit/payouts/{payoutId}
		 * @param {string} railsId Payout Rails ID filter - case insensitive match.
		 * Any value is allowed, but you should use one of the supported railsId values.
		 * To get this list of values, you should call the 'Get Supported Rails' endpoint.
		 * @param {string} payoutId The id (UUID) of the payout.
		 * @param {string} remoteId The remote id of the payees.
		 * @param {string} remoteSystemId The id of the remote system that is orchestrating payments
		 * @param {V3PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndStatusAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndPageAndPageSizeAndSortAndSensitiveStatus} status Payment Status
		 * @param {number} sourceAmountFrom The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} sourceAmountTo The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} paymentAmountFrom The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} paymentAmountTo The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Date} submittedDateFrom The submitted date from range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {Date} submittedDateTo The submitted date to range filter. Format is yyyy-MM-dd.
		 *     Type: DateOnly
		 * @param {V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitiveTransmissionType} transmissionType Transmission Type
		 * * ACH
		 * * SAME_DAY_ACH
		 * * WIRE
		 * * GACHO
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 100
		 * @param {string} sort List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId
		 * The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,
		 * routingNumber, accountNumber, remoteId, submittedDateTime and status
		 * @param {boolean} sensitive Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
		 * If set to true, and you have permission, the PII values will be returned as their original unmasked values.
		 * @return {GetPaymentsForPayoutResponseV4} 200 response, data found okay
		 */
		V4PaymentauditPayouts_payoutIdGetByRailsIdAndRemoteIdAndRemoteSystemIdAndStatusAndSourceAmountFromAndSourceAmountToAndPaymentAmountFromAndPaymentAmountToAndSubmittedDateFromAndSubmittedDateToAndTransmissionTypeAndPageAndPageSizeAndSortAndSensitive(railsId: string | null | undefined, payoutId: string, remoteId: string | null | undefined, remoteSystemId: string | null | undefined, status: V3PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndStatusAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndPageAndPageSizeAndSortAndSensitiveStatus | null | undefined, sourceAmountFrom: number | null | undefined, sourceAmountTo: number | null | undefined, paymentAmountFrom: number | null | undefined, paymentAmountTo: number | null | undefined, submittedDateFrom: Date | null | undefined, submittedDateTo: Date | null | undefined, transmissionType: V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitiveTransmissionType | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, sort: string | null | undefined, sensitive: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<GetPaymentsForPayoutResponseV4> {
			return this.http.get<GetPaymentsForPayoutResponseV4>(this.baseUri + 'v4/paymentaudit/payouts/' + (payoutId == null ? '' : encodeURIComponent(payoutId)) + '?railsId=' + (railsId == null ? '' : encodeURIComponent(railsId)) + '&remoteId=' + (remoteId == null ? '' : encodeURIComponent(remoteId)) + '&remoteSystemId=' + (remoteSystemId == null ? '' : encodeURIComponent(remoteSystemId)) + '&status=' + status + '&sourceAmountFrom=' + sourceAmountFrom + '&sourceAmountTo=' + sourceAmountTo + '&paymentAmountFrom=' + paymentAmountFrom + '&paymentAmountTo=' + paymentAmountTo + '&submittedDateFrom=' + submittedDateFrom?.toISOString() + '&submittedDateTo=' + submittedDateTo?.toISOString() + '&transmissionType=' + transmissionType + '&page=' + page + '&pageSize=' + pageSize + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&sensitive=' + sensitive, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Export Transactions
		 * Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.
		 * Get v4/paymentaudit/transactions
		 * @param {string} payorId <p>The Payor ID for whom you wish to run the report.</p>
		 * <p>For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.</p>
		 * @param {Date} startDate Start date, inclusive. Format is YYYY-MM-DD
		 *     Type: DateOnly
		 * @param {Date} endDate End date, inclusive. Format is YYYY-MM-DD
		 *     Type: DateOnly
		 * @param {V4PaymentauditTransactionsGetByPayorIdAndStartDateAndEndDateAndIncludeInclude} include <p>Mode to determine whether to include other Payor's data in the results.</p>
		 * <p>May only be used if payorId is specified.</p>
		 * <p>Can be omitted or set to 'payorOnly' or 'payorAndDescendants'.</p>
		 * <p>payorOnly: Only include results for the specified Payor. This is the default if 'include' is omitted.</p>
		 * <p>payorAndDescendants: Aggregate results for all descendant Payors of the specified Payor. Should only be used if the Payor with the specified payorId has at least one child Payor.</p>
		 * <p>Note when a Payor requests the report and include=payorAndDescendants is used, the following additional columns are included in the CSV: Payor Name, Payor Id</p>
		 * @return {void} Export Transactions response
		 */
		V4PaymentauditTransactionsGetByPayorIdAndStartDateAndEndDateAndInclude(payorId: string | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, include: V4PaymentauditTransactionsGetByPayorIdAndStartDateAndEndDateAndIncludeInclude | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/paymentaudit/transactions?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&include=' + include, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Payment Changes
		 * Get a paginated response listing payment changes.
		 * Get v4/payments/deltas
		 * @param {string} payorId The Payor ID to find associated Payments
		 * @param {Date} updatedSince The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
		 * @param {number} page Page number. Default is 1.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The number of results to return in a page
		 *     Minimum: 1    Maximum: 1000
		 * @return {PaymentDeltaResponse} Details of Payment Changes
		 */
		V4PaymentsDeltasGetByPayorIdAndUpdatedSinceAndPageAndPageSize(payorId: string, updatedSince: Date, page: number | null | undefined, pageSize: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PaymentDeltaResponse> {
			return this.http.get<PaymentDeltaResponse>(this.baseUri + 'v4/payments/deltas?payorId=' + (payorId == null ? '' : encodeURIComponent(payorId)) + '&updatedSince=' + updatedSince.toISOString() + '&page=' + page + '&pageSize=' + pageSize, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum V3PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndStatusAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndPageAndPageSizeAndSortAndSensitiveStatus { ACCEPTED = 'ACCEPTED', AWAITING_FUNDS = 'AWAITING_FUNDS', FUNDED = 'FUNDED', UNFUNDED = 'UNFUNDED', BANK_PAYMENT_REQUESTED = 'BANK_PAYMENT_REQUESTED', REJECTED = 'REJECTED', ACCEPTED_BY_RAILS = 'ACCEPTED_BY_RAILS', CONFIRMED = 'CONFIRMED', FAILED = 'FAILED', RETURNED = 'RETURNED', WITHDRAWN = 'WITHDRAWN' }

	export enum V3PaymentauditPayoutsGetByPayorIdAndPayoutMemoAndStatusAndSubmittedDateFromAndSubmittedDateToAndPageAndPageSizeAndSortStatus { ACCEPTED = 'ACCEPTED', REJECTED = 'REJECTED', SUBMITTED = 'SUBMITTED', QUOTED = 'QUOTED', INSTRUCTED = 'INSTRUCTED', COMPLETED = 'COMPLETED', INCOMPLETE = 'INCOMPLETE', CONFIRMED = 'CONFIRMED', WITHDRAWN = 'WITHDRAWN' }

	export enum V3Payouts_payoutIdPaymentsGetByStatusAndRemoteIdAndPayorPaymentIdAndSourceAccountNameAndTransmissionTypeAndPaymentMemoAndPageSizeAndPageStatus { ACCEPTED = 'ACCEPTED', REJECTED = 'REJECTED', WITHDRAWN = 'WITHDRAWN', WITHDRAWABLE = 'WITHDRAWABLE' }

	export enum V3Payouts_payoutIdPaymentsGetByStatusAndRemoteIdAndPayorPaymentIdAndSourceAccountNameAndTransmissionTypeAndPaymentMemoAndPageSizeAndPageTransmissionType { ACH = 'ACH', SAME_DAY_ACH = 'SAME_DAY_ACH', WIRE = 'WIRE' }

	export enum V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitiveTransmissionType { ACH = 'ACH', SAME_DAY_ACH = 'SAME_DAY_ACH', WIRE = 'WIRE', LOCAL = 'LOCAL', GACHO = 'GACHO' }

	export enum V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitiveScheduleStatus { ANY = 'ANY', SCHEDULED = 'SCHEDULED', EXECUTED = 'EXECUTED', FAILED = 'FAILED' }

	export enum V4PaymentauditPaymentsGetByPayeeIdAndPayorIdAndPayorNameAndRemoteIdAndRemoteSystemIdAndStatusAndTransmissionTypeAndSourceAccountNameAndSourceAmountFromAndSourceAmountToAndSourceCurrencyAndPaymentAmountFromAndPaymentAmountToAndPaymentCurrencyAndSubmittedDateFromAndSubmittedDateToAndPaymentMemoAndRailsIdAndScheduledForDateFromAndScheduledForDateToAndScheduleStatusAndPostInstructFxStatusAndPageAndPageSizeAndSortAndSensitivePostInstructFxStatus { ANY = 'ANY', INITIATED = 'INITIATED', CANCELLED = 'CANCELLED', EXECUTED = 'EXECUTED', COMPLETED = 'COMPLETED', RETURNED = 'RETURNED', RESUBMITTED = 'RESUBMITTED', REFUNDED = 'REFUNDED' }

	export enum V4PaymentauditTransactionsGetByPayorIdAndStartDateAndEndDateAndIncludeInclude { payorOnly = 'payorOnly', payorAndDescendants = 'payorAndDescendants' }

}

