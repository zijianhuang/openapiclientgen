import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptGrantResponse {
		GrantArn?: string;
		Status?: GrantStatus;
		Version?: string;
	}
	export interface AcceptGrantResponseFormProperties {
		GrantArn: FormControl<string | null | undefined>,
		Status: FormControl<GrantStatus | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateAcceptGrantResponseFormGroup() {
		return new FormGroup<AcceptGrantResponseFormProperties>({
			GrantArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GrantStatus | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GrantStatus { PENDING_WORKFLOW = 'PENDING_WORKFLOW', PENDING_ACCEPT = 'PENDING_ACCEPT', REJECTED = 'REJECTED', ACTIVE = 'ACTIVE', FAILED_WORKFLOW = 'FAILED_WORKFLOW', DELETED = 'DELETED', PENDING_DELETE = 'PENDING_DELETE', DISABLED = 'DISABLED', WORKFLOW_COMPLETED = 'WORKFLOW_COMPLETED' }

	export interface AcceptGrantRequest {

		/** Required */
		GrantArn: string;
	}
	export interface AcceptGrantRequestFormProperties {

		/** Required */
		GrantArn: FormControl<string | null | undefined>,
	}
	export function CreateAcceptGrantRequestFormGroup() {
		return new FormGroup<AcceptGrantRequestFormProperties>({
			GrantArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
		});

	}

	export interface AuthorizationException {
	}
	export interface AuthorizationExceptionFormProperties {
	}
	export function CreateAuthorizationExceptionFormGroup() {
		return new FormGroup<AuthorizationExceptionFormProperties>({
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

	export interface RateLimitExceededException {
	}
	export interface RateLimitExceededExceptionFormProperties {
	}
	export function CreateRateLimitExceededExceptionFormGroup() {
		return new FormGroup<RateLimitExceededExceptionFormProperties>({
		});

	}

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
		});

	}

	export interface ServerInternalException {
	}
	export interface ServerInternalExceptionFormProperties {
	}
	export function CreateServerInternalExceptionFormGroup() {
		return new FormGroup<ServerInternalExceptionFormProperties>({
		});

	}

	export interface CheckInLicenseResponse {
	}
	export interface CheckInLicenseResponseFormProperties {
	}
	export function CreateCheckInLicenseResponseFormGroup() {
		return new FormGroup<CheckInLicenseResponseFormProperties>({
		});

	}

	export interface CheckInLicenseRequest {

		/** Required */
		LicenseConsumptionToken: string;
		Beneficiary?: string;
	}
	export interface CheckInLicenseRequestFormProperties {

		/** Required */
		LicenseConsumptionToken: FormControl<string | null | undefined>,
		Beneficiary: FormControl<string | null | undefined>,
	}
	export function CreateCheckInLicenseRequestFormGroup() {
		return new FormGroup<CheckInLicenseRequestFormProperties>({
			LicenseConsumptionToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Beneficiary: new FormControl<string | null | undefined>(undefined),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CheckoutBorrowLicenseResponse {
		LicenseArn?: string;
		LicenseConsumptionToken?: string;
		EntitlementsAllowed?: Array<EntitlementData>;
		NodeId?: string;
		SignedToken?: string;
		IssuedAt?: string;
		Expiration?: string;
		CheckoutMetadata?: Array<Metadata>;
	}
	export interface CheckoutBorrowLicenseResponseFormProperties {
		LicenseArn: FormControl<string | null | undefined>,
		LicenseConsumptionToken: FormControl<string | null | undefined>,
		NodeId: FormControl<string | null | undefined>,
		SignedToken: FormControl<string | null | undefined>,
		IssuedAt: FormControl<string | null | undefined>,
		Expiration: FormControl<string | null | undefined>,
	}
	export function CreateCheckoutBorrowLicenseResponseFormGroup() {
		return new FormGroup<CheckoutBorrowLicenseResponseFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined),
			LicenseConsumptionToken: new FormControl<string | null | undefined>(undefined),
			NodeId: new FormControl<string | null | undefined>(undefined),
			SignedToken: new FormControl<string | null | undefined>(undefined),
			IssuedAt: new FormControl<string | null | undefined>(undefined),
			Expiration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data associated with an entitlement resource. */
	export interface EntitlementData {

		/** Required */
		Name: string;
		Value?: string;

		/** Required */
		Unit: EntitlementDataUnit;
	}

	/** Data associated with an entitlement resource. */
	export interface EntitlementDataFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,

		/** Required */
		Unit: FormControl<EntitlementDataUnit | null | undefined>,
	}
	export function CreateEntitlementDataFormGroup() {
		return new FormGroup<EntitlementDataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
			Unit: new FormControl<EntitlementDataUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EntitlementDataUnit { Count = 'Count', None = 'None', Seconds = 'Seconds', Microseconds = 'Microseconds', Milliseconds = 'Milliseconds', Bytes = 'Bytes', Kilobytes = 'Kilobytes', Megabytes = 'Megabytes', Gigabytes = 'Gigabytes', Terabytes = 'Terabytes', Bits = 'Bits', Kilobits = 'Kilobits', Megabits = 'Megabits', Gigabits = 'Gigabits', Terabits = 'Terabits', Percent = 'Percent', 'Bytes/Second' = 'Bytes/Second', 'Kilobytes/Second' = 'Kilobytes/Second', 'Megabytes/Second' = 'Megabytes/Second', 'Gigabytes/Second' = 'Gigabytes/Second', 'Terabytes/Second' = 'Terabytes/Second', 'Bits/Second' = 'Bits/Second', 'Kilobits/Second' = 'Kilobits/Second', 'Megabits/Second' = 'Megabits/Second', 'Gigabits/Second' = 'Gigabits/Second', 'Terabits/Second' = 'Terabits/Second', 'Count/Second' = 'Count/Second' }


	/** Describes key/value pairs. */
	export interface Metadata {
		Name?: string;
		Value?: string;
	}

	/** Describes key/value pairs. */
	export interface MetadataFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CheckoutBorrowLicenseRequest {

		/** Required */
		LicenseArn: string;

		/** Required */
		Entitlements: Array<EntitlementData>;

		/** Required */
		DigitalSignatureMethod: DigitalSignatureMethod;
		NodeId?: string;
		CheckoutMetadata?: Array<Metadata>;

		/** Required */
		ClientToken: string;
	}
	export interface CheckoutBorrowLicenseRequestFormProperties {

		/** Required */
		LicenseArn: FormControl<string | null | undefined>,

		/** Required */
		DigitalSignatureMethod: FormControl<DigitalSignatureMethod | null | undefined>,
		NodeId: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCheckoutBorrowLicenseRequestFormGroup() {
		return new FormGroup<CheckoutBorrowLicenseRequestFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DigitalSignatureMethod: new FormControl<DigitalSignatureMethod | null | undefined>(undefined, [Validators.required]),
			NodeId: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DigitalSignatureMethod { JWT_PS384 = 'JWT_PS384' }

	export interface NoEntitlementsAllowedException {
	}
	export interface NoEntitlementsAllowedExceptionFormProperties {
	}
	export function CreateNoEntitlementsAllowedExceptionFormGroup() {
		return new FormGroup<NoEntitlementsAllowedExceptionFormProperties>({
		});

	}

	export interface EntitlementNotAllowedException {
	}
	export interface EntitlementNotAllowedExceptionFormProperties {
	}
	export function CreateEntitlementNotAllowedExceptionFormGroup() {
		return new FormGroup<EntitlementNotAllowedExceptionFormProperties>({
		});

	}

	export interface UnsupportedDigitalSignatureMethodException {
	}
	export interface UnsupportedDigitalSignatureMethodExceptionFormProperties {
	}
	export function CreateUnsupportedDigitalSignatureMethodExceptionFormGroup() {
		return new FormGroup<UnsupportedDigitalSignatureMethodExceptionFormProperties>({
		});

	}

	export interface RedirectException {
	}
	export interface RedirectExceptionFormProperties {
	}
	export function CreateRedirectExceptionFormGroup() {
		return new FormGroup<RedirectExceptionFormProperties>({
		});

	}

	export interface CheckoutLicenseResponse {
		CheckoutType?: CheckoutType;
		LicenseConsumptionToken?: string;
		EntitlementsAllowed?: Array<EntitlementData>;
		SignedToken?: string;
		NodeId?: string;
		IssuedAt?: string;
		Expiration?: string;
		LicenseArn?: string;
	}
	export interface CheckoutLicenseResponseFormProperties {
		CheckoutType: FormControl<CheckoutType | null | undefined>,
		LicenseConsumptionToken: FormControl<string | null | undefined>,
		SignedToken: FormControl<string | null | undefined>,
		NodeId: FormControl<string | null | undefined>,
		IssuedAt: FormControl<string | null | undefined>,
		Expiration: FormControl<string | null | undefined>,
		LicenseArn: FormControl<string | null | undefined>,
	}
	export function CreateCheckoutLicenseResponseFormGroup() {
		return new FormGroup<CheckoutLicenseResponseFormProperties>({
			CheckoutType: new FormControl<CheckoutType | null | undefined>(undefined),
			LicenseConsumptionToken: new FormControl<string | null | undefined>(undefined),
			SignedToken: new FormControl<string | null | undefined>(undefined),
			NodeId: new FormControl<string | null | undefined>(undefined),
			IssuedAt: new FormControl<string | null | undefined>(undefined),
			Expiration: new FormControl<string | null | undefined>(undefined),
			LicenseArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CheckoutType { PROVISIONAL = 'PROVISIONAL', PERPETUAL = 'PERPETUAL' }

	export interface CheckoutLicenseRequest {

		/** Required */
		ProductSKU: string;

		/** Required */
		CheckoutType: CheckoutType;

		/** Required */
		KeyFingerprint: string;

		/** Required */
		Entitlements: Array<EntitlementData>;

		/** Required */
		ClientToken: string;
		Beneficiary?: string;
		NodeId?: string;
	}
	export interface CheckoutLicenseRequestFormProperties {

		/** Required */
		ProductSKU: FormControl<string | null | undefined>,

		/** Required */
		CheckoutType: FormControl<CheckoutType | null | undefined>,

		/** Required */
		KeyFingerprint: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
		Beneficiary: FormControl<string | null | undefined>,
		NodeId: FormControl<string | null | undefined>,
	}
	export function CreateCheckoutLicenseRequestFormGroup() {
		return new FormGroup<CheckoutLicenseRequestFormProperties>({
			ProductSKU: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CheckoutType: new FormControl<CheckoutType | null | undefined>(undefined, [Validators.required]),
			KeyFingerprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Beneficiary: new FormControl<string | null | undefined>(undefined),
			NodeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGrantResponse {
		GrantArn?: string;
		Status?: GrantStatus;
		Version?: string;
	}
	export interface CreateGrantResponseFormProperties {
		GrantArn: FormControl<string | null | undefined>,
		Status: FormControl<GrantStatus | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateGrantResponseFormGroup() {
		return new FormGroup<CreateGrantResponseFormProperties>({
			GrantArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GrantStatus | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGrantRequest {

		/** Required */
		ClientToken: string;

		/** Required */
		GrantName: string;

		/** Required */
		LicenseArn: string;

		/** Required */
		Principals: Array<string>;

		/** Required */
		HomeRegion: string;

		/** Required */
		AllowedOperations: Array<AllowedOperation>;
	}
	export interface CreateGrantRequestFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		GrantName: FormControl<string | null | undefined>,

		/** Required */
		LicenseArn: FormControl<string | null | undefined>,

		/** Required */
		HomeRegion: FormControl<string | null | undefined>,
	}
	export function CreateCreateGrantRequestFormGroup() {
		return new FormGroup<CreateGrantRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GrantName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LicenseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HomeRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AllowedOperation { CreateGrant = 'CreateGrant', CheckoutLicense = 'CheckoutLicense', CheckoutBorrowLicense = 'CheckoutBorrowLicense', CheckInLicense = 'CheckInLicense', ExtendConsumptionLicense = 'ExtendConsumptionLicense', ListPurchasedLicenses = 'ListPurchasedLicenses', CreateToken = 'CreateToken' }

	export interface CreateGrantVersionResponse {
		GrantArn?: string;
		Status?: GrantStatus;
		Version?: string;
	}
	export interface CreateGrantVersionResponseFormProperties {
		GrantArn: FormControl<string | null | undefined>,
		Status: FormControl<GrantStatus | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateGrantVersionResponseFormGroup() {
		return new FormGroup<CreateGrantVersionResponseFormProperties>({
			GrantArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GrantStatus | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGrantVersionRequest {

		/** Required */
		ClientToken: string;

		/** Required */
		GrantArn: string;
		GrantName?: string;
		AllowedOperations?: Array<AllowedOperation>;
		Status?: GrantStatus;
		StatusReason?: string;
		SourceVersion?: string;
		Options?: Options;
	}
	export interface CreateGrantVersionRequestFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		GrantArn: FormControl<string | null | undefined>,
		GrantName: FormControl<string | null | undefined>,
		Status: FormControl<GrantStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		SourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateGrantVersionRequestFormGroup() {
		return new FormGroup<CreateGrantVersionRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GrantArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GrantName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GrantStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			SourceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The options you can specify when you create a new version of a grant, such as activation override behavior. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>. */
	export interface Options {
		ActivationOverrideBehavior?: ActivationOverrideBehavior;
	}

	/** The options you can specify when you create a new version of a grant, such as activation override behavior. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>. */
	export interface OptionsFormProperties {
		ActivationOverrideBehavior: FormControl<ActivationOverrideBehavior | null | undefined>,
	}
	export function CreateOptionsFormGroup() {
		return new FormGroup<OptionsFormProperties>({
			ActivationOverrideBehavior: new FormControl<ActivationOverrideBehavior | null | undefined>(undefined),
		});

	}

	export enum ActivationOverrideBehavior { DISTRIBUTED_GRANTS_ONLY = 'DISTRIBUTED_GRANTS_ONLY', ALL_GRANTS_PERMITTED_BY_ISSUER = 'ALL_GRANTS_PERMITTED_BY_ISSUER' }

	export interface CreateLicenseResponse {
		LicenseArn?: string;
		Status?: LicenseStatus;
		Version?: string;
	}
	export interface CreateLicenseResponseFormProperties {
		LicenseArn: FormControl<string | null | undefined>,
		Status: FormControl<LicenseStatus | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateLicenseResponseFormGroup() {
		return new FormGroup<CreateLicenseResponseFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<LicenseStatus | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LicenseStatus { AVAILABLE = 'AVAILABLE', PENDING_AVAILABLE = 'PENDING_AVAILABLE', DEACTIVATED = 'DEACTIVATED', SUSPENDED = 'SUSPENDED', EXPIRED = 'EXPIRED', PENDING_DELETE = 'PENDING_DELETE', DELETED = 'DELETED' }

	export interface CreateLicenseRequest {

		/** Required */
		LicenseName: string;

		/** Required */
		ProductName: string;

		/** Required */
		ProductSKU: string;

		/** Required */
		Issuer: Issuer;

		/** Required */
		HomeRegion: string;

		/** Required */
		Validity: DatetimeRange;

		/** Required */
		Entitlements: Array<Entitlement>;

		/** Required */
		Beneficiary: string;

		/** Required */
		ConsumptionConfiguration: ConsumptionConfiguration;
		LicenseMetadata?: Array<Metadata>;

		/** Required */
		ClientToken: string;
	}
	export interface CreateLicenseRequestFormProperties {

		/** Required */
		LicenseName: FormControl<string | null | undefined>,

		/** Required */
		ProductName: FormControl<string | null | undefined>,

		/** Required */
		ProductSKU: FormControl<string | null | undefined>,

		/** Required */
		HomeRegion: FormControl<string | null | undefined>,

		/** Required */
		Beneficiary: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateLicenseRequestFormGroup() {
		return new FormGroup<CreateLicenseRequestFormProperties>({
			LicenseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductSKU: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HomeRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Beneficiary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about the issuer of a license. */
	export interface Issuer {

		/** Required */
		Name: string;
		SignKey?: string;
	}

	/** Details about the issuer of a license. */
	export interface IssuerFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		SignKey: FormControl<string | null | undefined>,
	}
	export function CreateIssuerFormGroup() {
		return new FormGroup<IssuerFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SignKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a time range, in ISO8601-UTC format. */
	export interface DatetimeRange {

		/** Required */
		Begin: string;
		End?: string;
	}

	/** Describes a time range, in ISO8601-UTC format. */
	export interface DatetimeRangeFormProperties {

		/** Required */
		Begin: FormControl<string | null | undefined>,
		End: FormControl<string | null | undefined>,
	}
	export function CreateDatetimeRangeFormGroup() {
		return new FormGroup<DatetimeRangeFormProperties>({
			Begin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			End: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a resource entitled for use with a license. */
	export interface Entitlement {

		/** Required */
		Name: string;
		Value?: string;
		MaxCount?: number | null;
		Overage?: boolean | null;

		/** Required */
		Unit: EntitlementDataUnit;
		AllowCheckIn?: boolean | null;
	}

	/** Describes a resource entitled for use with a license. */
	export interface EntitlementFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		MaxCount: FormControl<number | null | undefined>,
		Overage: FormControl<boolean | null | undefined>,

		/** Required */
		Unit: FormControl<EntitlementDataUnit | null | undefined>,
		AllowCheckIn: FormControl<boolean | null | undefined>,
	}
	export function CreateEntitlementFormGroup() {
		return new FormGroup<EntitlementFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
			MaxCount: new FormControl<number | null | undefined>(undefined),
			Overage: new FormControl<boolean | null | undefined>(undefined),
			Unit: new FormControl<EntitlementDataUnit | null | undefined>(undefined, [Validators.required]),
			AllowCheckIn: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about a consumption configuration. */
	export interface ConsumptionConfiguration {
		RenewType?: RenewType;
		ProvisionalConfiguration?: ProvisionalConfiguration;
		BorrowConfiguration?: BorrowConfiguration;
	}

	/** Details about a consumption configuration. */
	export interface ConsumptionConfigurationFormProperties {
		RenewType: FormControl<RenewType | null | undefined>,
	}
	export function CreateConsumptionConfigurationFormGroup() {
		return new FormGroup<ConsumptionConfigurationFormProperties>({
			RenewType: new FormControl<RenewType | null | undefined>(undefined),
		});

	}

	export enum RenewType { None = 'None', Weekly = 'Weekly', Monthly = 'Monthly' }


	/** Details about a provisional configuration. */
	export interface ProvisionalConfiguration {

		/** Required */
		MaxTimeToLiveInMinutes: number;
	}

	/** Details about a provisional configuration. */
	export interface ProvisionalConfigurationFormProperties {

		/** Required */
		MaxTimeToLiveInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateProvisionalConfigurationFormGroup() {
		return new FormGroup<ProvisionalConfigurationFormProperties>({
			MaxTimeToLiveInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about a borrow configuration. */
	export interface BorrowConfiguration {

		/** Required */
		AllowEarlyCheckIn: boolean;

		/** Required */
		MaxTimeToLiveInMinutes: number;
	}

	/** Details about a borrow configuration. */
	export interface BorrowConfigurationFormProperties {

		/** Required */
		AllowEarlyCheckIn: FormControl<boolean | null | undefined>,

		/** Required */
		MaxTimeToLiveInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateBorrowConfigurationFormGroup() {
		return new FormGroup<BorrowConfigurationFormProperties>({
			AllowEarlyCheckIn: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			MaxTimeToLiveInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLicenseConfigurationResponse {
		LicenseConfigurationArn?: string;
	}
	export interface CreateLicenseConfigurationResponseFormProperties {
		LicenseConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLicenseConfigurationResponseFormGroup() {
		return new FormGroup<CreateLicenseConfigurationResponseFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLicenseConfigurationRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		LicenseCountingType: LicenseCountingType;
		LicenseCount?: number | null;
		LicenseCountHardLimit?: boolean | null;
		LicenseRules?: Array<string>;
		Tags?: Array<Tag>;
		DisassociateWhenNotFound?: boolean | null;
		ProductInformationList?: Array<ProductInformation>;
	}
	export interface CreateLicenseConfigurationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		LicenseCountingType: FormControl<LicenseCountingType | null | undefined>,
		LicenseCount: FormControl<number | null | undefined>,
		LicenseCountHardLimit: FormControl<boolean | null | undefined>,
		DisassociateWhenNotFound: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateLicenseConfigurationRequestFormGroup() {
		return new FormGroup<CreateLicenseConfigurationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LicenseCountingType: new FormControl<LicenseCountingType | null | undefined>(undefined, [Validators.required]),
			LicenseCount: new FormControl<number | null | undefined>(undefined),
			LicenseCountHardLimit: new FormControl<boolean | null | undefined>(undefined),
			DisassociateWhenNotFound: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LicenseCountingType { vCPU = 'vCPU', Instance = 'Instance', Core = 'Core', Socket = 'Socket' }


	/** Details about a tag for a license configuration. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** Details about a tag for a license configuration. */
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


	/** Describes product information for a license configuration. */
	export interface ProductInformation {

		/** Required */
		ResourceType: string;

		/** Required */
		ProductInformationFilterList: Array<ProductInformationFilter>;
	}

	/** Describes product information for a license configuration. */
	export interface ProductInformationFormProperties {

		/** Required */
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateProductInformationFormGroup() {
		return new FormGroup<ProductInformationFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes product information filters. */
	export interface ProductInformationFilter {

		/** Required */
		ProductInformationFilterName: string;
		ProductInformationFilterValue?: Array<string>;

		/** Required */
		ProductInformationFilterComparator: string;
	}

	/** Describes product information filters. */
	export interface ProductInformationFilterFormProperties {

		/** Required */
		ProductInformationFilterName: FormControl<string | null | undefined>,

		/** Required */
		ProductInformationFilterComparator: FormControl<string | null | undefined>,
	}
	export function CreateProductInformationFilterFormGroup() {
		return new FormGroup<ProductInformationFilterFormProperties>({
			ProductInformationFilterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductInformationFilterComparator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLicenseConversionTaskForResourceResponse {
		LicenseConversionTaskId?: string;
	}
	export interface CreateLicenseConversionTaskForResourceResponseFormProperties {
		LicenseConversionTaskId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLicenseConversionTaskForResourceResponseFormGroup() {
		return new FormGroup<CreateLicenseConversionTaskForResourceResponseFormProperties>({
			LicenseConversionTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLicenseConversionTaskForResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		SourceLicenseContext: LicenseConversionContext;

		/** Required */
		DestinationLicenseContext: LicenseConversionContext;
	}
	export interface CreateLicenseConversionTaskForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLicenseConversionTaskForResourceRequestFormGroup() {
		return new FormGroup<CreateLicenseConversionTaskForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a license type conversion task. */
	export interface LicenseConversionContext {
		UsageOperation?: string;
	}

	/** Information about a license type conversion task. */
	export interface LicenseConversionContextFormProperties {
		UsageOperation: FormControl<string | null | undefined>,
	}
	export function CreateLicenseConversionContextFormGroup() {
		return new FormGroup<LicenseConversionContextFormProperties>({
			UsageOperation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLicenseManagerReportGeneratorResponse {
		LicenseManagerReportGeneratorArn?: string;
	}
	export interface CreateLicenseManagerReportGeneratorResponseFormProperties {
		LicenseManagerReportGeneratorArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLicenseManagerReportGeneratorResponseFormGroup() {
		return new FormGroup<CreateLicenseManagerReportGeneratorResponseFormProperties>({
			LicenseManagerReportGeneratorArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLicenseManagerReportGeneratorRequest {

		/** Required */
		ReportGeneratorName: string;

		/** Required */
		Type: Array<ReportType>;

		/** Required */
		ReportContext: ReportContext;

		/** Required */
		ReportFrequency: ReportFrequency;

		/** Required */
		ClientToken: string;
		Description?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateLicenseManagerReportGeneratorRequestFormProperties {

		/** Required */
		ReportGeneratorName: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateLicenseManagerReportGeneratorRequestFormGroup() {
		return new FormGroup<CreateLicenseManagerReportGeneratorRequestFormProperties>({
			ReportGeneratorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportType { LicenseConfigurationSummaryReport = 'LicenseConfigurationSummaryReport', LicenseConfigurationUsageReport = 'LicenseConfigurationUsageReport' }


	/** Details of the license configuration that this generator reports on. */
	export interface ReportContext {

		/** Required */
		licenseConfigurationArns: Array<string>;
	}

	/** Details of the license configuration that this generator reports on. */
	export interface ReportContextFormProperties {
	}
	export function CreateReportContextFormGroup() {
		return new FormGroup<ReportContextFormProperties>({
		});

	}


	/** Details about how frequently reports are generated. */
	export interface ReportFrequency {
		value?: number | null;
		period?: ReportFrequencyType;
	}

	/** Details about how frequently reports are generated. */
	export interface ReportFrequencyFormProperties {
		value: FormControl<number | null | undefined>,
		period: FormControl<ReportFrequencyType | null | undefined>,
	}
	export function CreateReportFrequencyFormGroup() {
		return new FormGroup<ReportFrequencyFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
			period: new FormControl<ReportFrequencyType | null | undefined>(undefined),
		});

	}

	export enum ReportFrequencyType { DAY = 'DAY', WEEK = 'WEEK', MONTH = 'MONTH' }

	export interface CreateLicenseVersionResponse {
		LicenseArn?: string;
		Version?: string;
		Status?: LicenseStatus;
	}
	export interface CreateLicenseVersionResponseFormProperties {
		LicenseArn: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
		Status: FormControl<LicenseStatus | null | undefined>,
	}
	export function CreateCreateLicenseVersionResponseFormGroup() {
		return new FormGroup<CreateLicenseVersionResponseFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<LicenseStatus | null | undefined>(undefined),
		});

	}

	export interface CreateLicenseVersionRequest {

		/** Required */
		LicenseArn: string;

		/** Required */
		LicenseName: string;

		/** Required */
		ProductName: string;

		/** Required */
		Issuer: Issuer;

		/** Required */
		HomeRegion: string;

		/** Required */
		Validity: DatetimeRange;
		LicenseMetadata?: Array<Metadata>;

		/** Required */
		Entitlements: Array<Entitlement>;

		/** Required */
		ConsumptionConfiguration: ConsumptionConfiguration;

		/** Required */
		Status: LicenseStatus;

		/** Required */
		ClientToken: string;
		SourceVersion?: string;
	}
	export interface CreateLicenseVersionRequestFormProperties {

		/** Required */
		LicenseArn: FormControl<string | null | undefined>,

		/** Required */
		LicenseName: FormControl<string | null | undefined>,

		/** Required */
		ProductName: FormControl<string | null | undefined>,

		/** Required */
		HomeRegion: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<LicenseStatus | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
		SourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateLicenseVersionRequestFormGroup() {
		return new FormGroup<CreateLicenseVersionRequestFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LicenseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HomeRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<LicenseStatus | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTokenResponse {
		TokenId?: string;
		TokenType?: TokenType;
		Token?: string;
	}
	export interface CreateTokenResponseFormProperties {
		TokenId: FormControl<string | null | undefined>,
		TokenType: FormControl<TokenType | null | undefined>,
		Token: FormControl<string | null | undefined>,
	}
	export function CreateCreateTokenResponseFormGroup() {
		return new FormGroup<CreateTokenResponseFormProperties>({
			TokenId: new FormControl<string | null | undefined>(undefined),
			TokenType: new FormControl<TokenType | null | undefined>(undefined),
			Token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TokenType { REFRESH_TOKEN = 'REFRESH_TOKEN' }

	export interface CreateTokenRequest {

		/** Required */
		LicenseArn: string;
		RoleArns?: Array<string>;
		ExpirationInDays?: number | null;
		TokenProperties?: Array<string>;

		/** Required */
		ClientToken: string;
	}
	export interface CreateTokenRequestFormProperties {

		/** Required */
		LicenseArn: FormControl<string | null | undefined>,
		ExpirationInDays: FormControl<number | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateTokenRequestFormGroup() {
		return new FormGroup<CreateTokenRequestFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExpirationInDays: new FormControl<number | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGrantResponse {
		GrantArn?: string;
		Status?: GrantStatus;
		Version?: string;
	}
	export interface DeleteGrantResponseFormProperties {
		GrantArn: FormControl<string | null | undefined>,
		Status: FormControl<GrantStatus | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGrantResponseFormGroup() {
		return new FormGroup<DeleteGrantResponseFormProperties>({
			GrantArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GrantStatus | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGrantRequest {

		/** Required */
		GrantArn: string;
		StatusReason?: string;

		/** Required */
		Version: string;
	}
	export interface DeleteGrantRequestFormProperties {

		/** Required */
		GrantArn: FormControl<string | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,

		/** Required */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGrantRequestFormGroup() {
		return new FormGroup<DeleteGrantRequestFormProperties>({
			GrantArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLicenseResponse {
		Status?: LicenseDeletionStatus;
		DeletionDate?: string;
	}
	export interface DeleteLicenseResponseFormProperties {
		Status: FormControl<LicenseDeletionStatus | null | undefined>,
		DeletionDate: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLicenseResponseFormGroup() {
		return new FormGroup<DeleteLicenseResponseFormProperties>({
			Status: new FormControl<LicenseDeletionStatus | null | undefined>(undefined),
			DeletionDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LicenseDeletionStatus { PENDING_DELETE = 'PENDING_DELETE', DELETED = 'DELETED' }

	export interface DeleteLicenseRequest {

		/** Required */
		LicenseArn: string;

		/** Required */
		SourceVersion: string;
	}
	export interface DeleteLicenseRequestFormProperties {

		/** Required */
		LicenseArn: FormControl<string | null | undefined>,

		/** Required */
		SourceVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLicenseRequestFormGroup() {
		return new FormGroup<DeleteLicenseRequestFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLicenseConfigurationResponse {
	}
	export interface DeleteLicenseConfigurationResponseFormProperties {
	}
	export function CreateDeleteLicenseConfigurationResponseFormGroup() {
		return new FormGroup<DeleteLicenseConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteLicenseConfigurationRequest {

		/** Required */
		LicenseConfigurationArn: string;
	}
	export interface DeleteLicenseConfigurationRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLicenseConfigurationRequestFormGroup() {
		return new FormGroup<DeleteLicenseConfigurationRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLicenseManagerReportGeneratorResponse {
	}
	export interface DeleteLicenseManagerReportGeneratorResponseFormProperties {
	}
	export function CreateDeleteLicenseManagerReportGeneratorResponseFormGroup() {
		return new FormGroup<DeleteLicenseManagerReportGeneratorResponseFormProperties>({
		});

	}

	export interface DeleteLicenseManagerReportGeneratorRequest {

		/** Required */
		LicenseManagerReportGeneratorArn: string;
	}
	export interface DeleteLicenseManagerReportGeneratorRequestFormProperties {

		/** Required */
		LicenseManagerReportGeneratorArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLicenseManagerReportGeneratorRequestFormGroup() {
		return new FormGroup<DeleteLicenseManagerReportGeneratorRequestFormProperties>({
			LicenseManagerReportGeneratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTokenResponse {
	}
	export interface DeleteTokenResponseFormProperties {
	}
	export function CreateDeleteTokenResponseFormGroup() {
		return new FormGroup<DeleteTokenResponseFormProperties>({
		});

	}

	export interface DeleteTokenRequest {

		/** Required */
		TokenId: string;
	}
	export interface DeleteTokenRequestFormProperties {

		/** Required */
		TokenId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTokenRequestFormGroup() {
		return new FormGroup<DeleteTokenRequestFormProperties>({
			TokenId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExtendLicenseConsumptionResponse {
		LicenseConsumptionToken?: string;
		Expiration?: string;
	}
	export interface ExtendLicenseConsumptionResponseFormProperties {
		LicenseConsumptionToken: FormControl<string | null | undefined>,
		Expiration: FormControl<string | null | undefined>,
	}
	export function CreateExtendLicenseConsumptionResponseFormGroup() {
		return new FormGroup<ExtendLicenseConsumptionResponseFormProperties>({
			LicenseConsumptionToken: new FormControl<string | null | undefined>(undefined),
			Expiration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExtendLicenseConsumptionRequest {

		/** Required */
		LicenseConsumptionToken: string;
		DryRun?: boolean | null;
	}
	export interface ExtendLicenseConsumptionRequestFormProperties {

		/** Required */
		LicenseConsumptionToken: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateExtendLicenseConsumptionRequestFormGroup() {
		return new FormGroup<ExtendLicenseConsumptionRequestFormProperties>({
			LicenseConsumptionToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetAccessTokenResponse {
		AccessToken?: string;
	}
	export interface GetAccessTokenResponseFormProperties {
		AccessToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessTokenResponseFormGroup() {
		return new FormGroup<GetAccessTokenResponseFormProperties>({
			AccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAccessTokenRequest {

		/** Required */
		Token: string;
		TokenProperties?: Array<string>;
	}
	export interface GetAccessTokenRequestFormProperties {

		/** Required */
		Token: FormControl<string | null | undefined>,
	}
	export function CreateGetAccessTokenRequestFormGroup() {
		return new FormGroup<GetAccessTokenRequestFormProperties>({
			Token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGrantResponse {
		Grant?: Grant;
	}
	export interface GetGrantResponseFormProperties {
	}
	export function CreateGetGrantResponseFormGroup() {
		return new FormGroup<GetGrantResponseFormProperties>({
		});

	}


	/** Describes a grant. */
	export interface Grant {

		/** Required */
		GrantArn: string;

		/** Required */
		GrantName: string;

		/** Required */
		ParentArn: string;

		/** Required */
		LicenseArn: string;

		/** Required */
		GranteePrincipalArn: string;

		/** Required */
		HomeRegion: string;

		/** Required */
		GrantStatus: GrantStatus;
		StatusReason?: string;

		/** Required */
		Version: string;

		/** Required */
		GrantedOperations: Array<AllowedOperation>;
		Options?: Options;
	}

	/** Describes a grant. */
	export interface GrantFormProperties {

		/** Required */
		GrantArn: FormControl<string | null | undefined>,

		/** Required */
		GrantName: FormControl<string | null | undefined>,

		/** Required */
		ParentArn: FormControl<string | null | undefined>,

		/** Required */
		LicenseArn: FormControl<string | null | undefined>,

		/** Required */
		GranteePrincipalArn: FormControl<string | null | undefined>,

		/** Required */
		HomeRegion: FormControl<string | null | undefined>,

		/** Required */
		GrantStatus: FormControl<GrantStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,

		/** Required */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGrantFormGroup() {
		return new FormGroup<GrantFormProperties>({
			GrantArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GrantName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ParentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LicenseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GranteePrincipalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HomeRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GrantStatus: new FormControl<GrantStatus | null | undefined>(undefined, [Validators.required]),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGrantRequest {

		/** Required */
		GrantArn: string;
		Version?: string;
	}
	export interface GetGrantRequestFormProperties {

		/** Required */
		GrantArn: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetGrantRequestFormGroup() {
		return new FormGroup<GetGrantRequestFormProperties>({
			GrantArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLicenseResponse {
		License?: License;
	}
	export interface GetLicenseResponseFormProperties {
	}
	export function CreateGetLicenseResponseFormGroup() {
		return new FormGroup<GetLicenseResponseFormProperties>({
		});

	}


	/** Software license that is managed in License Manager. */
	export interface License {
		LicenseArn?: string;
		LicenseName?: string;
		ProductName?: string;
		ProductSKU?: string;
		Issuer?: IssuerDetails;
		HomeRegion?: string;
		Status?: LicenseStatus;
		Validity?: DatetimeRange;
		Beneficiary?: string;
		Entitlements?: Array<Entitlement>;
		ConsumptionConfiguration?: ConsumptionConfiguration;
		LicenseMetadata?: Array<Metadata>;
		CreateTime?: string;
		Version?: string;
	}

	/** Software license that is managed in License Manager. */
	export interface LicenseFormProperties {
		LicenseArn: FormControl<string | null | undefined>,
		LicenseName: FormControl<string | null | undefined>,
		ProductName: FormControl<string | null | undefined>,
		ProductSKU: FormControl<string | null | undefined>,
		HomeRegion: FormControl<string | null | undefined>,
		Status: FormControl<LicenseStatus | null | undefined>,
		Beneficiary: FormControl<string | null | undefined>,
		CreateTime: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateLicenseFormGroup() {
		return new FormGroup<LicenseFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined),
			LicenseName: new FormControl<string | null | undefined>(undefined),
			ProductName: new FormControl<string | null | undefined>(undefined),
			ProductSKU: new FormControl<string | null | undefined>(undefined),
			HomeRegion: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<LicenseStatus | null | undefined>(undefined),
			Beneficiary: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details associated with the issuer of a license. */
	export interface IssuerDetails {
		Name?: string;
		SignKey?: string;
		KeyFingerprint?: string;
	}

	/** Details associated with the issuer of a license. */
	export interface IssuerDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		SignKey: FormControl<string | null | undefined>,
		KeyFingerprint: FormControl<string | null | undefined>,
	}
	export function CreateIssuerDetailsFormGroup() {
		return new FormGroup<IssuerDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SignKey: new FormControl<string | null | undefined>(undefined),
			KeyFingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLicenseRequest {

		/** Required */
		LicenseArn: string;
		Version?: string;
	}
	export interface GetLicenseRequestFormProperties {

		/** Required */
		LicenseArn: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetLicenseRequestFormGroup() {
		return new FormGroup<GetLicenseRequestFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLicenseConfigurationResponse {
		LicenseConfigurationId?: string;
		LicenseConfigurationArn?: string;
		Name?: string;
		Description?: string;
		LicenseCountingType?: LicenseCountingType;
		LicenseRules?: Array<string>;
		LicenseCount?: number | null;
		LicenseCountHardLimit?: boolean | null;
		ConsumedLicenses?: number | null;
		Status?: string;
		OwnerAccountId?: string;
		ConsumedLicenseSummaryList?: Array<ConsumedLicenseSummary>;
		ManagedResourceSummaryList?: Array<ManagedResourceSummary>;
		Tags?: Array<Tag>;
		ProductInformationList?: Array<ProductInformation>;
		AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
		DisassociateWhenNotFound?: boolean | null;
	}
	export interface GetLicenseConfigurationResponseFormProperties {
		LicenseConfigurationId: FormControl<string | null | undefined>,
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LicenseCountingType: FormControl<LicenseCountingType | null | undefined>,
		LicenseCount: FormControl<number | null | undefined>,
		LicenseCountHardLimit: FormControl<boolean | null | undefined>,
		ConsumedLicenses: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		DisassociateWhenNotFound: FormControl<boolean | null | undefined>,
	}
	export function CreateGetLicenseConfigurationResponseFormGroup() {
		return new FormGroup<GetLicenseConfigurationResponseFormProperties>({
			LicenseConfigurationId: new FormControl<string | null | undefined>(undefined),
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LicenseCountingType: new FormControl<LicenseCountingType | null | undefined>(undefined),
			LicenseCount: new FormControl<number | null | undefined>(undefined),
			LicenseCountHardLimit: new FormControl<boolean | null | undefined>(undefined),
			ConsumedLicenses: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			DisassociateWhenNotFound: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details about license consumption. */
	export interface ConsumedLicenseSummary {
		ResourceType?: ResourceType;
		ConsumedLicenses?: number | null;
	}

	/** Details about license consumption. */
	export interface ConsumedLicenseSummaryFormProperties {
		ResourceType: FormControl<ResourceType | null | undefined>,
		ConsumedLicenses: FormControl<number | null | undefined>,
	}
	export function CreateConsumedLicenseSummaryFormGroup() {
		return new FormGroup<ConsumedLicenseSummaryFormProperties>({
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			ConsumedLicenses: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ResourceType { EC2_INSTANCE = 'EC2_INSTANCE', EC2_HOST = 'EC2_HOST', EC2_AMI = 'EC2_AMI', RDS = 'RDS', SYSTEMS_MANAGER_MANAGED_INSTANCE = 'SYSTEMS_MANAGER_MANAGED_INSTANCE' }


	/** Summary information about a managed resource. */
	export interface ManagedResourceSummary {
		ResourceType?: ResourceType;
		AssociationCount?: number | null;
	}

	/** Summary information about a managed resource. */
	export interface ManagedResourceSummaryFormProperties {
		ResourceType: FormControl<ResourceType | null | undefined>,
		AssociationCount: FormControl<number | null | undefined>,
	}
	export function CreateManagedResourceSummaryFormGroup() {
		return new FormGroup<ManagedResourceSummaryFormProperties>({
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			AssociationCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes automated discovery. */
	export interface AutomatedDiscoveryInformation {
		LastRunTime?: Date;
	}

	/** Describes automated discovery. */
	export interface AutomatedDiscoveryInformationFormProperties {
		LastRunTime: FormControl<Date | null | undefined>,
	}
	export function CreateAutomatedDiscoveryInformationFormGroup() {
		return new FormGroup<AutomatedDiscoveryInformationFormProperties>({
			LastRunTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetLicenseConfigurationRequest {

		/** Required */
		LicenseConfigurationArn: string;
	}
	export interface GetLicenseConfigurationRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateGetLicenseConfigurationRequestFormGroup() {
		return new FormGroup<GetLicenseConfigurationRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLicenseConversionTaskResponse {
		LicenseConversionTaskId?: string;
		ResourceArn?: string;
		SourceLicenseContext?: LicenseConversionContext;
		DestinationLicenseContext?: LicenseConversionContext;
		StatusMessage?: string;
		Status?: LicenseConversionTaskStatus;
		StartTime?: Date;
		LicenseConversionTime?: Date;
		EndTime?: Date;
	}
	export interface GetLicenseConversionTaskResponseFormProperties {
		LicenseConversionTaskId: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		Status: FormControl<LicenseConversionTaskStatus | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		LicenseConversionTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetLicenseConversionTaskResponseFormGroup() {
		return new FormGroup<GetLicenseConversionTaskResponseFormProperties>({
			LicenseConversionTaskId: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<LicenseConversionTaskStatus | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			LicenseConversionTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum LicenseConversionTaskStatus { IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }

	export interface GetLicenseConversionTaskRequest {

		/** Required */
		LicenseConversionTaskId: string;
	}
	export interface GetLicenseConversionTaskRequestFormProperties {

		/** Required */
		LicenseConversionTaskId: FormControl<string | null | undefined>,
	}
	export function CreateGetLicenseConversionTaskRequestFormGroup() {
		return new FormGroup<GetLicenseConversionTaskRequestFormProperties>({
			LicenseConversionTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLicenseManagerReportGeneratorResponse {
		ReportGenerator?: ReportGenerator;
	}
	export interface GetLicenseManagerReportGeneratorResponseFormProperties {
	}
	export function CreateGetLicenseManagerReportGeneratorResponseFormGroup() {
		return new FormGroup<GetLicenseManagerReportGeneratorResponseFormProperties>({
		});

	}


	/** Describe the details of a report generator. */
	export interface ReportGenerator {
		ReportGeneratorName?: string;
		ReportType?: Array<ReportType>;
		ReportContext?: ReportContext;
		ReportFrequency?: ReportFrequency;
		LicenseManagerReportGeneratorArn?: string;
		LastRunStatus?: string;
		LastRunFailureReason?: string;
		LastReportGenerationTime?: string;
		ReportCreatorAccount?: string;
		Description?: string;
		S3Location?: S3Location;
		CreateTime?: string;
		Tags?: Array<Tag>;
	}

	/** Describe the details of a report generator. */
	export interface ReportGeneratorFormProperties {
		ReportGeneratorName: FormControl<string | null | undefined>,
		LicenseManagerReportGeneratorArn: FormControl<string | null | undefined>,
		LastRunStatus: FormControl<string | null | undefined>,
		LastRunFailureReason: FormControl<string | null | undefined>,
		LastReportGenerationTime: FormControl<string | null | undefined>,
		ReportCreatorAccount: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreateTime: FormControl<string | null | undefined>,
	}
	export function CreateReportGeneratorFormGroup() {
		return new FormGroup<ReportGeneratorFormProperties>({
			ReportGeneratorName: new FormControl<string | null | undefined>(undefined),
			LicenseManagerReportGeneratorArn: new FormControl<string | null | undefined>(undefined),
			LastRunStatus: new FormControl<string | null | undefined>(undefined),
			LastRunFailureReason: new FormControl<string | null | undefined>(undefined),
			LastReportGenerationTime: new FormControl<string | null | undefined>(undefined),
			ReportCreatorAccount: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the S3 bucket that report generator reports are published to. */
	export interface S3Location {
		bucket?: string;
		keyPrefix?: string;
	}

	/** Details of the S3 bucket that report generator reports are published to. */
	export interface S3LocationFormProperties {
		bucket: FormControl<string | null | undefined>,
		keyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLicenseManagerReportGeneratorRequest {

		/** Required */
		LicenseManagerReportGeneratorArn: string;
	}
	export interface GetLicenseManagerReportGeneratorRequestFormProperties {

		/** Required */
		LicenseManagerReportGeneratorArn: FormControl<string | null | undefined>,
	}
	export function CreateGetLicenseManagerReportGeneratorRequestFormGroup() {
		return new FormGroup<GetLicenseManagerReportGeneratorRequestFormProperties>({
			LicenseManagerReportGeneratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLicenseUsageResponse {
		LicenseUsage?: LicenseUsage;
	}
	export interface GetLicenseUsageResponseFormProperties {
	}
	export function CreateGetLicenseUsageResponseFormGroup() {
		return new FormGroup<GetLicenseUsageResponseFormProperties>({
		});

	}


	/** Describes the entitlement usage associated with a license. */
	export interface LicenseUsage {
		EntitlementUsages?: Array<EntitlementUsage>;
	}

	/** Describes the entitlement usage associated with a license. */
	export interface LicenseUsageFormProperties {
	}
	export function CreateLicenseUsageFormGroup() {
		return new FormGroup<LicenseUsageFormProperties>({
		});

	}


	/** Usage associated with an entitlement resource. */
	export interface EntitlementUsage {

		/** Required */
		Name: string;

		/** Required */
		ConsumedValue: string;
		MaxCount?: string;

		/** Required */
		Unit: EntitlementDataUnit;
	}

	/** Usage associated with an entitlement resource. */
	export interface EntitlementUsageFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ConsumedValue: FormControl<string | null | undefined>,
		MaxCount: FormControl<string | null | undefined>,

		/** Required */
		Unit: FormControl<EntitlementDataUnit | null | undefined>,
	}
	export function CreateEntitlementUsageFormGroup() {
		return new FormGroup<EntitlementUsageFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConsumedValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxCount: new FormControl<string | null | undefined>(undefined),
			Unit: new FormControl<EntitlementDataUnit | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLicenseUsageRequest {

		/** Required */
		LicenseArn: string;
	}
	export interface GetLicenseUsageRequestFormProperties {

		/** Required */
		LicenseArn: FormControl<string | null | undefined>,
	}
	export function CreateGetLicenseUsageRequestFormGroup() {
		return new FormGroup<GetLicenseUsageRequestFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceSettingsResponse {
		S3BucketArn?: string;
		SnsTopicArn?: string;
		OrganizationConfiguration?: OrganizationConfiguration;
		EnableCrossAccountsDiscovery?: boolean | null;
		LicenseManagerResourceShareArn?: string;
	}
	export interface GetServiceSettingsResponseFormProperties {
		S3BucketArn: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		EnableCrossAccountsDiscovery: FormControl<boolean | null | undefined>,
		LicenseManagerResourceShareArn: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceSettingsResponseFormGroup() {
		return new FormGroup<GetServiceSettingsResponseFormProperties>({
			S3BucketArn: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			EnableCrossAccountsDiscovery: new FormControl<boolean | null | undefined>(undefined),
			LicenseManagerResourceShareArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration information for Organizations. */
	export interface OrganizationConfiguration {

		/** Required */
		EnableIntegration: boolean;
	}

	/** Configuration information for Organizations. */
	export interface OrganizationConfigurationFormProperties {

		/** Required */
		EnableIntegration: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationConfigurationFormGroup() {
		return new FormGroup<OrganizationConfigurationFormProperties>({
			EnableIntegration: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceSettingsRequest {
	}
	export interface GetServiceSettingsRequestFormProperties {
	}
	export function CreateGetServiceSettingsRequestFormGroup() {
		return new FormGroup<GetServiceSettingsRequestFormProperties>({
		});

	}

	export interface ListAssociationsForLicenseConfigurationResponse {
		LicenseConfigurationAssociations?: Array<LicenseConfigurationAssociation>;
		NextToken?: string;
	}
	export interface ListAssociationsForLicenseConfigurationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociationsForLicenseConfigurationResponseFormGroup() {
		return new FormGroup<ListAssociationsForLicenseConfigurationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an association with a license configuration. */
	export interface LicenseConfigurationAssociation {
		ResourceArn?: string;
		ResourceType?: ResourceType;
		ResourceOwnerId?: string;
		AssociationTime?: Date;
		AmiAssociationScope?: string;
	}

	/** Describes an association with a license configuration. */
	export interface LicenseConfigurationAssociationFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
		ResourceOwnerId: FormControl<string | null | undefined>,
		AssociationTime: FormControl<Date | null | undefined>,
		AmiAssociationScope: FormControl<string | null | undefined>,
	}
	export function CreateLicenseConfigurationAssociationFormGroup() {
		return new FormGroup<LicenseConfigurationAssociationFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			ResourceOwnerId: new FormControl<string | null | undefined>(undefined),
			AssociationTime: new FormControl<Date | null | undefined>(undefined),
			AmiAssociationScope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociationsForLicenseConfigurationRequest {

		/** Required */
		LicenseConfigurationArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAssociationsForLicenseConfigurationRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociationsForLicenseConfigurationRequestFormGroup() {
		return new FormGroup<ListAssociationsForLicenseConfigurationRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilterLimitExceededException {
	}
	export interface FilterLimitExceededExceptionFormProperties {
	}
	export function CreateFilterLimitExceededExceptionFormGroup() {
		return new FormGroup<FilterLimitExceededExceptionFormProperties>({
		});

	}

	export interface ListDistributedGrantsResponse {
		Grants?: Array<Grant>;
		NextToken?: string;
	}
	export interface ListDistributedGrantsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDistributedGrantsResponseFormGroup() {
		return new FormGroup<ListDistributedGrantsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDistributedGrantsRequest {
		GrantArns?: Array<string>;
		Filters?: Array<Filter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDistributedGrantsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDistributedGrantsRequestFormGroup() {
		return new FormGroup<ListDistributedGrantsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
	export interface Filter {
		Name?: string;
		Values?: Array<string>;
	}

	/** A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
	export interface FilterFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFailuresForLicenseConfigurationOperationsResponse {
		LicenseOperationFailureList?: Array<LicenseOperationFailure>;
		NextToken?: string;
	}
	export interface ListFailuresForLicenseConfigurationOperationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFailuresForLicenseConfigurationOperationsResponseFormGroup() {
		return new FormGroup<ListFailuresForLicenseConfigurationOperationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the failure of a license operation. */
	export interface LicenseOperationFailure {
		ResourceArn?: string;
		ResourceType?: ResourceType;
		ErrorMessage?: string;
		FailureTime?: Date;
		OperationName?: string;
		ResourceOwnerId?: string;
		OperationRequestedBy?: string;
		MetadataList?: Array<Metadata>;
	}

	/** Describes the failure of a license operation. */
	export interface LicenseOperationFailureFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		FailureTime: FormControl<Date | null | undefined>,
		OperationName: FormControl<string | null | undefined>,
		ResourceOwnerId: FormControl<string | null | undefined>,
		OperationRequestedBy: FormControl<string | null | undefined>,
	}
	export function CreateLicenseOperationFailureFormGroup() {
		return new FormGroup<LicenseOperationFailureFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			FailureTime: new FormControl<Date | null | undefined>(undefined),
			OperationName: new FormControl<string | null | undefined>(undefined),
			ResourceOwnerId: new FormControl<string | null | undefined>(undefined),
			OperationRequestedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFailuresForLicenseConfigurationOperationsRequest {

		/** Required */
		LicenseConfigurationArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListFailuresForLicenseConfigurationOperationsRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFailuresForLicenseConfigurationOperationsRequestFormGroup() {
		return new FormGroup<ListFailuresForLicenseConfigurationOperationsRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLicenseConfigurationsResponse {
		LicenseConfigurations?: Array<LicenseConfiguration>;
		NextToken?: string;
	}
	export interface ListLicenseConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicenseConfigurationsResponseFormGroup() {
		return new FormGroup<ListLicenseConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used. */
	export interface LicenseConfiguration {
		LicenseConfigurationId?: string;
		LicenseConfigurationArn?: string;
		Name?: string;
		Description?: string;
		LicenseCountingType?: LicenseCountingType;
		LicenseRules?: Array<string>;
		LicenseCount?: number | null;
		LicenseCountHardLimit?: boolean | null;
		DisassociateWhenNotFound?: boolean | null;
		ConsumedLicenses?: number | null;
		Status?: string;
		OwnerAccountId?: string;
		ConsumedLicenseSummaryList?: Array<ConsumedLicenseSummary>;
		ManagedResourceSummaryList?: Array<ManagedResourceSummary>;
		ProductInformationList?: Array<ProductInformation>;
		AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
	}

	/** A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used. */
	export interface LicenseConfigurationFormProperties {
		LicenseConfigurationId: FormControl<string | null | undefined>,
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LicenseCountingType: FormControl<LicenseCountingType | null | undefined>,
		LicenseCount: FormControl<number | null | undefined>,
		LicenseCountHardLimit: FormControl<boolean | null | undefined>,
		DisassociateWhenNotFound: FormControl<boolean | null | undefined>,
		ConsumedLicenses: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
	}
	export function CreateLicenseConfigurationFormGroup() {
		return new FormGroup<LicenseConfigurationFormProperties>({
			LicenseConfigurationId: new FormControl<string | null | undefined>(undefined),
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LicenseCountingType: new FormControl<LicenseCountingType | null | undefined>(undefined),
			LicenseCount: new FormControl<number | null | undefined>(undefined),
			LicenseCountHardLimit: new FormControl<boolean | null | undefined>(undefined),
			DisassociateWhenNotFound: new FormControl<boolean | null | undefined>(undefined),
			ConsumedLicenses: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLicenseConfigurationsRequest {
		LicenseConfigurationArns?: Array<string>;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
	}
	export interface ListLicenseConfigurationsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicenseConfigurationsRequestFormGroup() {
		return new FormGroup<ListLicenseConfigurationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLicenseConversionTasksResponse {
		LicenseConversionTasks?: Array<LicenseConversionTask>;
		NextToken?: string;
	}
	export interface ListLicenseConversionTasksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicenseConversionTasksResponseFormGroup() {
		return new FormGroup<ListLicenseConversionTasksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a license type conversion task. */
	export interface LicenseConversionTask {
		LicenseConversionTaskId?: string;
		ResourceArn?: string;
		SourceLicenseContext?: LicenseConversionContext;
		DestinationLicenseContext?: LicenseConversionContext;
		Status?: LicenseConversionTaskStatus;
		StatusMessage?: string;
		StartTime?: Date;
		LicenseConversionTime?: Date;
		EndTime?: Date;
	}

	/** Information about a license type conversion task. */
	export interface LicenseConversionTaskFormProperties {
		LicenseConversionTaskId: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		Status: FormControl<LicenseConversionTaskStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		LicenseConversionTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateLicenseConversionTaskFormGroup() {
		return new FormGroup<LicenseConversionTaskFormProperties>({
			LicenseConversionTaskId: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<LicenseConversionTaskStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			LicenseConversionTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListLicenseConversionTasksRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Array<Filter>;
	}
	export interface ListLicenseConversionTasksRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListLicenseConversionTasksRequestFormGroup() {
		return new FormGroup<ListLicenseConversionTasksRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListLicenseManagerReportGeneratorsResponse {
		ReportGenerators?: Array<ReportGenerator>;
		NextToken?: string;
	}
	export interface ListLicenseManagerReportGeneratorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicenseManagerReportGeneratorsResponseFormGroup() {
		return new FormGroup<ListLicenseManagerReportGeneratorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLicenseManagerReportGeneratorsRequest {
		Filters?: Array<Filter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListLicenseManagerReportGeneratorsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListLicenseManagerReportGeneratorsRequestFormGroup() {
		return new FormGroup<ListLicenseManagerReportGeneratorsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListLicenseSpecificationsForResourceResponse {
		LicenseSpecifications?: Array<LicenseSpecification>;
		NextToken?: string;
	}
	export interface ListLicenseSpecificationsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicenseSpecificationsForResourceResponseFormGroup() {
		return new FormGroup<ListLicenseSpecificationsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for associating a license configuration with a resource. */
	export interface LicenseSpecification {

		/** Required */
		LicenseConfigurationArn: string;
		AmiAssociationScope?: string;
	}

	/** Details for associating a license configuration with a resource. */
	export interface LicenseSpecificationFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		AmiAssociationScope: FormControl<string | null | undefined>,
	}
	export function CreateLicenseSpecificationFormGroup() {
		return new FormGroup<LicenseSpecificationFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AmiAssociationScope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLicenseSpecificationsForResourceRequest {

		/** Required */
		ResourceArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListLicenseSpecificationsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicenseSpecificationsForResourceRequestFormGroup() {
		return new FormGroup<ListLicenseSpecificationsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLicenseVersionsResponse {
		Licenses?: Array<License>;
		NextToken?: string;
	}
	export interface ListLicenseVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicenseVersionsResponseFormGroup() {
		return new FormGroup<ListLicenseVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLicenseVersionsRequest {

		/** Required */
		LicenseArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListLicenseVersionsRequestFormProperties {

		/** Required */
		LicenseArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListLicenseVersionsRequestFormGroup() {
		return new FormGroup<ListLicenseVersionsRequestFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListLicensesResponse {
		Licenses?: Array<License>;
		NextToken?: string;
	}
	export interface ListLicensesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicensesResponseFormGroup() {
		return new FormGroup<ListLicensesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLicensesRequest {
		LicenseArns?: Array<string>;
		Filters?: Array<Filter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListLicensesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListLicensesRequestFormGroup() {
		return new FormGroup<ListLicensesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListReceivedGrantsResponse {
		Grants?: Array<Grant>;
		NextToken?: string;
	}
	export interface ListReceivedGrantsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReceivedGrantsResponseFormGroup() {
		return new FormGroup<ListReceivedGrantsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReceivedGrantsRequest {
		GrantArns?: Array<string>;
		Filters?: Array<Filter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListReceivedGrantsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReceivedGrantsRequestFormGroup() {
		return new FormGroup<ListReceivedGrantsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListReceivedGrantsForOrganizationResponse {
		Grants?: Array<Grant>;
		NextToken?: string;
	}
	export interface ListReceivedGrantsForOrganizationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReceivedGrantsForOrganizationResponseFormGroup() {
		return new FormGroup<ListReceivedGrantsForOrganizationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReceivedGrantsForOrganizationRequest {

		/** Required */
		LicenseArn: string;
		Filters?: Array<Filter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListReceivedGrantsForOrganizationRequestFormProperties {

		/** Required */
		LicenseArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReceivedGrantsForOrganizationRequestFormGroup() {
		return new FormGroup<ListReceivedGrantsForOrganizationRequestFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListReceivedLicensesResponse {
		Licenses?: Array<GrantedLicense>;
		NextToken?: string;
	}
	export interface ListReceivedLicensesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReceivedLicensesResponseFormGroup() {
		return new FormGroup<ListReceivedLicensesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a license that is granted to a grantee. */
	export interface GrantedLicense {
		LicenseArn?: string;
		LicenseName?: string;
		ProductName?: string;
		ProductSKU?: string;
		Issuer?: IssuerDetails;
		HomeRegion?: string;
		Status?: LicenseStatus;
		Validity?: DatetimeRange;
		Beneficiary?: string;
		Entitlements?: Array<Entitlement>;
		ConsumptionConfiguration?: ConsumptionConfiguration;
		LicenseMetadata?: Array<Metadata>;
		CreateTime?: string;
		Version?: string;
		ReceivedMetadata?: ReceivedMetadata;
	}

	/** Describes a license that is granted to a grantee. */
	export interface GrantedLicenseFormProperties {
		LicenseArn: FormControl<string | null | undefined>,
		LicenseName: FormControl<string | null | undefined>,
		ProductName: FormControl<string | null | undefined>,
		ProductSKU: FormControl<string | null | undefined>,
		HomeRegion: FormControl<string | null | undefined>,
		Status: FormControl<LicenseStatus | null | undefined>,
		Beneficiary: FormControl<string | null | undefined>,
		CreateTime: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGrantedLicenseFormGroup() {
		return new FormGroup<GrantedLicenseFormProperties>({
			LicenseArn: new FormControl<string | null | undefined>(undefined),
			LicenseName: new FormControl<string | null | undefined>(undefined),
			ProductName: new FormControl<string | null | undefined>(undefined),
			ProductSKU: new FormControl<string | null | undefined>(undefined),
			HomeRegion: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<LicenseStatus | null | undefined>(undefined),
			Beneficiary: new FormControl<string | null | undefined>(undefined),
			CreateTime: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata associated with received licenses and grants. */
	export interface ReceivedMetadata {
		ReceivedStatus?: ReceivedStatus;
		ReceivedStatusReason?: string;
		AllowedOperations?: Array<AllowedOperation>;
	}

	/** Metadata associated with received licenses and grants. */
	export interface ReceivedMetadataFormProperties {
		ReceivedStatus: FormControl<ReceivedStatus | null | undefined>,
		ReceivedStatusReason: FormControl<string | null | undefined>,
	}
	export function CreateReceivedMetadataFormGroup() {
		return new FormGroup<ReceivedMetadataFormProperties>({
			ReceivedStatus: new FormControl<ReceivedStatus | null | undefined>(undefined),
			ReceivedStatusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReceivedStatus { PENDING_WORKFLOW = 'PENDING_WORKFLOW', PENDING_ACCEPT = 'PENDING_ACCEPT', REJECTED = 'REJECTED', ACTIVE = 'ACTIVE', FAILED_WORKFLOW = 'FAILED_WORKFLOW', DELETED = 'DELETED', DISABLED = 'DISABLED', WORKFLOW_COMPLETED = 'WORKFLOW_COMPLETED' }

	export interface ListReceivedLicensesRequest {
		LicenseArns?: Array<string>;
		Filters?: Array<Filter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListReceivedLicensesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReceivedLicensesRequestFormGroup() {
		return new FormGroup<ListReceivedLicensesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListReceivedLicensesForOrganizationResponse {
		Licenses?: Array<GrantedLicense>;
		NextToken?: string;
	}
	export interface ListReceivedLicensesForOrganizationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReceivedLicensesForOrganizationResponseFormGroup() {
		return new FormGroup<ListReceivedLicensesForOrganizationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListReceivedLicensesForOrganizationRequest {
		Filters?: Array<Filter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListReceivedLicensesForOrganizationRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListReceivedLicensesForOrganizationRequestFormGroup() {
		return new FormGroup<ListReceivedLicensesForOrganizationRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResourceInventoryResponse {
		ResourceInventoryList?: Array<ResourceInventory>;
		NextToken?: string;
	}
	export interface ListResourceInventoryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceInventoryResponseFormGroup() {
		return new FormGroup<ListResourceInventoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a resource. */
	export interface ResourceInventory {
		ResourceId?: string;
		ResourceType?: ResourceType;
		ResourceArn?: string;
		Platform?: string;
		PlatformVersion?: string;
		ResourceOwningAccountId?: string;
	}

	/** Details about a resource. */
	export interface ResourceInventoryFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		Platform: FormControl<string | null | undefined>,
		PlatformVersion: FormControl<string | null | undefined>,
		ResourceOwningAccountId: FormControl<string | null | undefined>,
	}
	export function CreateResourceInventoryFormGroup() {
		return new FormGroup<ResourceInventoryFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined),
			PlatformVersion: new FormControl<string | null | undefined>(undefined),
			ResourceOwningAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceInventoryRequest {
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<InventoryFilter>;
	}
	export interface ListResourceInventoryRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceInventoryRequestFormGroup() {
		return new FormGroup<ListResourceInventoryRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An inventory filter. */
	export interface InventoryFilter {

		/** Required */
		Name: string;

		/** Required */
		Condition: InventoryFilterCondition;
		Value?: string;
	}

	/** An inventory filter. */
	export interface InventoryFilterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Condition: FormControl<InventoryFilterCondition | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateInventoryFilterFormGroup() {
		return new FormGroup<InventoryFilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Condition: new FormControl<InventoryFilterCondition | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InventoryFilterCondition { EQUALS = 'EQUALS', NOT_EQUALS = 'NOT_EQUALS', BEGINS_WITH = 'BEGINS_WITH', CONTAINS = 'CONTAINS' }

	export interface FailedDependencyException {
	}
	export interface FailedDependencyExceptionFormProperties {
	}
	export function CreateFailedDependencyExceptionFormGroup() {
		return new FormGroup<FailedDependencyExceptionFormProperties>({
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

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTokensResponse {
		Tokens?: Array<TokenData>;
		NextToken?: string;
	}
	export interface ListTokensResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTokensResponseFormGroup() {
		return new FormGroup<ListTokensResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a token. */
	export interface TokenData {
		TokenId?: string;
		TokenType?: string;
		LicenseArn?: string;
		ExpirationTime?: string;
		TokenProperties?: Array<string>;
		RoleArns?: Array<string>;
		Status?: string;
	}

	/** Describes a token. */
	export interface TokenDataFormProperties {
		TokenId: FormControl<string | null | undefined>,
		TokenType: FormControl<string | null | undefined>,
		LicenseArn: FormControl<string | null | undefined>,
		ExpirationTime: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateTokenDataFormGroup() {
		return new FormGroup<TokenDataFormProperties>({
			TokenId: new FormControl<string | null | undefined>(undefined),
			TokenType: new FormControl<string | null | undefined>(undefined),
			LicenseArn: new FormControl<string | null | undefined>(undefined),
			ExpirationTime: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTokensRequest {
		TokenIds?: Array<string>;
		Filters?: Array<Filter>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTokensRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTokensRequestFormGroup() {
		return new FormGroup<ListTokensRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListUsageForLicenseConfigurationResponse {
		LicenseConfigurationUsageList?: Array<LicenseConfigurationUsage>;
		NextToken?: string;
	}
	export interface ListUsageForLicenseConfigurationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsageForLicenseConfigurationResponseFormGroup() {
		return new FormGroup<ListUsageForLicenseConfigurationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the usage of a resource associated with a license configuration. */
	export interface LicenseConfigurationUsage {
		ResourceArn?: string;
		ResourceType?: ResourceType;
		ResourceStatus?: string;
		ResourceOwnerId?: string;
		AssociationTime?: Date;
		ConsumedLicenses?: number | null;
	}

	/** Details about the usage of a resource associated with a license configuration. */
	export interface LicenseConfigurationUsageFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<ResourceType | null | undefined>,
		ResourceStatus: FormControl<string | null | undefined>,
		ResourceOwnerId: FormControl<string | null | undefined>,
		AssociationTime: FormControl<Date | null | undefined>,
		ConsumedLicenses: FormControl<number | null | undefined>,
	}
	export function CreateLicenseConfigurationUsageFormGroup() {
		return new FormGroup<LicenseConfigurationUsageFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined),
			ResourceStatus: new FormControl<string | null | undefined>(undefined),
			ResourceOwnerId: new FormControl<string | null | undefined>(undefined),
			AssociationTime: new FormControl<Date | null | undefined>(undefined),
			ConsumedLicenses: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListUsageForLicenseConfigurationRequest {

		/** Required */
		LicenseConfigurationArn: string;
		MaxResults?: number | null;
		NextToken?: string;
		Filters?: Array<Filter>;
	}
	export interface ListUsageForLicenseConfigurationRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsageForLicenseConfigurationRequestFormGroup() {
		return new FormGroup<ListUsageForLicenseConfigurationRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RejectGrantResponse {
		GrantArn?: string;
		Status?: GrantStatus;
		Version?: string;
	}
	export interface RejectGrantResponseFormProperties {
		GrantArn: FormControl<string | null | undefined>,
		Status: FormControl<GrantStatus | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateRejectGrantResponseFormGroup() {
		return new FormGroup<RejectGrantResponseFormProperties>({
			GrantArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GrantStatus | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RejectGrantRequest {

		/** Required */
		GrantArn: string;
	}
	export interface RejectGrantRequestFormProperties {

		/** Required */
		GrantArn: FormControl<string | null | undefined>,
	}
	export function CreateRejectGrantRequestFormGroup() {
		return new FormGroup<RejectGrantRequestFormProperties>({
			GrantArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLicenseConfigurationResponse {
	}
	export interface UpdateLicenseConfigurationResponseFormProperties {
	}
	export function CreateUpdateLicenseConfigurationResponseFormGroup() {
		return new FormGroup<UpdateLicenseConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateLicenseConfigurationRequest {

		/** Required */
		LicenseConfigurationArn: string;
		LicenseConfigurationStatus?: LicenseConfigurationStatus;
		LicenseRules?: Array<string>;
		LicenseCount?: number | null;
		LicenseCountHardLimit?: boolean | null;
		Name?: string;
		Description?: string;
		ProductInformationList?: Array<ProductInformation>;
		DisassociateWhenNotFound?: boolean | null;
	}
	export interface UpdateLicenseConfigurationRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		LicenseConfigurationStatus: FormControl<LicenseConfigurationStatus | null | undefined>,
		LicenseCount: FormControl<number | null | undefined>,
		LicenseCountHardLimit: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisassociateWhenNotFound: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateLicenseConfigurationRequestFormGroup() {
		return new FormGroup<UpdateLicenseConfigurationRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LicenseConfigurationStatus: new FormControl<LicenseConfigurationStatus | null | undefined>(undefined),
			LicenseCount: new FormControl<number | null | undefined>(undefined),
			LicenseCountHardLimit: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisassociateWhenNotFound: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LicenseConfigurationStatus { AVAILABLE = 'AVAILABLE', DISABLED = 'DISABLED' }

	export interface UpdateLicenseManagerReportGeneratorResponse {
	}
	export interface UpdateLicenseManagerReportGeneratorResponseFormProperties {
	}
	export function CreateUpdateLicenseManagerReportGeneratorResponseFormGroup() {
		return new FormGroup<UpdateLicenseManagerReportGeneratorResponseFormProperties>({
		});

	}

	export interface UpdateLicenseManagerReportGeneratorRequest {

		/** Required */
		LicenseManagerReportGeneratorArn: string;

		/** Required */
		ReportGeneratorName: string;

		/** Required */
		Type: Array<ReportType>;

		/** Required */
		ReportContext: ReportContext;

		/** Required */
		ReportFrequency: ReportFrequency;

		/** Required */
		ClientToken: string;
		Description?: string;
	}
	export interface UpdateLicenseManagerReportGeneratorRequestFormProperties {

		/** Required */
		LicenseManagerReportGeneratorArn: FormControl<string | null | undefined>,

		/** Required */
		ReportGeneratorName: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLicenseManagerReportGeneratorRequestFormGroup() {
		return new FormGroup<UpdateLicenseManagerReportGeneratorRequestFormProperties>({
			LicenseManagerReportGeneratorArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReportGeneratorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLicenseSpecificationsForResourceResponse {
	}
	export interface UpdateLicenseSpecificationsForResourceResponseFormProperties {
	}
	export function CreateUpdateLicenseSpecificationsForResourceResponseFormGroup() {
		return new FormGroup<UpdateLicenseSpecificationsForResourceResponseFormProperties>({
		});

	}

	export interface UpdateLicenseSpecificationsForResourceRequest {

		/** Required */
		ResourceArn: string;
		AddLicenseSpecifications?: Array<LicenseSpecification>;
		RemoveLicenseSpecifications?: Array<LicenseSpecification>;
	}
	export interface UpdateLicenseSpecificationsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLicenseSpecificationsForResourceRequestFormGroup() {
		return new FormGroup<UpdateLicenseSpecificationsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidResourceStateException {
	}
	export interface InvalidResourceStateExceptionFormProperties {
	}
	export function CreateInvalidResourceStateExceptionFormGroup() {
		return new FormGroup<InvalidResourceStateExceptionFormProperties>({
		});

	}

	export interface LicenseUsageException {
	}
	export interface LicenseUsageExceptionFormProperties {
	}
	export function CreateLicenseUsageExceptionFormGroup() {
		return new FormGroup<LicenseUsageExceptionFormProperties>({
		});

	}

	export interface UpdateServiceSettingsResponse {
	}
	export interface UpdateServiceSettingsResponseFormProperties {
	}
	export function CreateUpdateServiceSettingsResponseFormGroup() {
		return new FormGroup<UpdateServiceSettingsResponseFormProperties>({
		});

	}

	export interface UpdateServiceSettingsRequest {
		S3BucketArn?: string;
		SnsTopicArn?: string;
		OrganizationConfiguration?: OrganizationConfiguration;
		EnableCrossAccountsDiscovery?: boolean | null;
	}
	export interface UpdateServiceSettingsRequestFormProperties {
		S3BucketArn: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		EnableCrossAccountsDiscovery: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateServiceSettingsRequestFormGroup() {
		return new FormGroup<UpdateServiceSettingsRequestFormProperties>({
			S3BucketArn: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			EnableCrossAccountsDiscovery: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EntitlementUnit { Count = 'Count', None = 'None', Seconds = 'Seconds', Microseconds = 'Microseconds', Milliseconds = 'Milliseconds', Bytes = 'Bytes', Kilobytes = 'Kilobytes', Megabytes = 'Megabytes', Gigabytes = 'Gigabytes', Terabytes = 'Terabytes', Bits = 'Bits', Kilobits = 'Kilobits', Megabits = 'Megabits', Gigabits = 'Gigabits', Terabits = 'Terabits', Percent = 'Percent', 'Bytes/Second' = 'Bytes/Second', 'Kilobytes/Second' = 'Kilobytes/Second', 'Megabytes/Second' = 'Megabytes/Second', 'Gigabytes/Second' = 'Gigabytes/Second', 'Terabytes/Second' = 'Terabytes/Second', 'Bits/Second' = 'Bits/Second', 'Kilobits/Second' = 'Kilobits/Second', 'Megabits/Second' = 'Megabits/Second', 'Gigabits/Second' = 'Gigabits/Second', 'Terabits/Second' = 'Terabits/Second', 'Count/Second' = 'Count/Second' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts the specified grant.
		 * Post #X-Amz-Target=AWSLicenseManager.AcceptGrant
		 * @return {AcceptGrantResponse} Success
		 */
		AcceptGrant(requestBody: AcceptGrantRequest): Observable<AcceptGrantResponse> {
			return this.http.post<AcceptGrantResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.AcceptGrant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks in the specified license. Check in a license when it is no longer in use.
		 * Post #X-Amz-Target=AWSLicenseManager.CheckInLicense
		 * @return {CheckInLicenseResponse} Success
		 */
		CheckInLicense(requestBody: CheckInLicenseRequest): Observable<CheckInLicenseResponse> {
			return this.http.post<CheckInLicenseResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CheckInLicense', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks out the specified license for offline use.
		 * Post #X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense
		 * @return {CheckoutBorrowLicenseResponse} Success
		 */
		CheckoutBorrowLicense(requestBody: CheckoutBorrowLicenseRequest): Observable<CheckoutBorrowLicenseResponse> {
			return this.http.post<CheckoutBorrowLicenseResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CheckoutBorrowLicense', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Checks out the specified license.</p> <note> <p>If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.</p> </note>
		 * Post #X-Amz-Target=AWSLicenseManager.CheckoutLicense
		 * @return {CheckoutLicenseResponse} Success
		 */
		CheckoutLicense(requestBody: CheckoutLicenseRequest): Observable<CheckoutLicenseResponse> {
			return this.http.post<CheckoutLicenseResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CheckoutLicense', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.
		 * Post #X-Amz-Target=AWSLicenseManager.CreateGrant
		 * @return {CreateGrantResponse} Success
		 */
		CreateGrant(requestBody: CreateGrantRequest): Observable<CreateGrantResponse> {
			return this.http.post<CreateGrantResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CreateGrant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new version of the specified grant. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.
		 * Post #X-Amz-Target=AWSLicenseManager.CreateGrantVersion
		 * @return {CreateGrantVersionResponse} Success
		 */
		CreateGrantVersion(requestBody: CreateGrantVersionRequest): Observable<CreateGrantVersionResponse> {
			return this.http.post<CreateGrantVersionResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CreateGrantVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a license.
		 * Post #X-Amz-Target=AWSLicenseManager.CreateLicense
		 * @return {CreateLicenseResponse} Success
		 */
		CreateLicense(requestBody: CreateLicenseRequest): Observable<CreateLicenseResponse> {
			return this.http.post<CreateLicenseResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CreateLicense', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>
		 * Post #X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration
		 * @return {CreateLicenseConfigurationResponse} Success
		 */
		CreateLicenseConfiguration(requestBody: CreateLicenseConfigurationRequest): Observable<CreateLicenseConfigurationResponse> {
			return this.http.post<CreateLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new license conversion task.
		 * Post #X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource
		 * @return {CreateLicenseConversionTaskForResourceResponse} Success
		 */
		CreateLicenseConversionTaskForResource(requestBody: CreateLicenseConversionTaskForResourceRequest): Observable<CreateLicenseConversionTaskForResourceResponse> {
			return this.http.post<CreateLicenseConversionTaskForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CreateLicenseConversionTaskForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a report generator.
		 * Post #X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator
		 * @return {CreateLicenseManagerReportGeneratorResponse} Success
		 */
		CreateLicenseManagerReportGenerator(requestBody: CreateLicenseManagerReportGeneratorRequest): Observable<CreateLicenseManagerReportGeneratorResponse> {
			return this.http.post<CreateLicenseManagerReportGeneratorResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CreateLicenseManagerReportGenerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new version of the specified license.
		 * Post #X-Amz-Target=AWSLicenseManager.CreateLicenseVersion
		 * @return {CreateLicenseVersionResponse} Success
		 */
		CreateLicenseVersion(requestBody: CreateLicenseVersionRequest): Observable<CreateLicenseVersionResponse> {
			return this.http.post<CreateLicenseVersionResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CreateLicenseVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>
		 * Post #X-Amz-Target=AWSLicenseManager.CreateToken
		 * @return {CreateTokenResponse} Success
		 */
		CreateToken(requestBody: CreateTokenRequest): Observable<CreateTokenResponse> {
			return this.http.post<CreateTokenResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CreateToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified grant.
		 * Post #X-Amz-Target=AWSLicenseManager.DeleteGrant
		 * @return {DeleteGrantResponse} Success
		 */
		DeleteGrant(requestBody: DeleteGrantRequest): Observable<DeleteGrantResponse> {
			return this.http.post<DeleteGrantResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.DeleteGrant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified license.
		 * Post #X-Amz-Target=AWSLicenseManager.DeleteLicense
		 * @return {DeleteLicenseResponse} Success
		 */
		DeleteLicense(requestBody: DeleteLicenseRequest): Observable<DeleteLicenseResponse> {
			return this.http.post<DeleteLicenseResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.DeleteLicense', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
		 * Post #X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration
		 * @return {DeleteLicenseConfigurationResponse} Success
		 */
		DeleteLicenseConfiguration(requestBody: DeleteLicenseConfigurationRequest): Observable<DeleteLicenseConfigurationResponse> {
			return this.http.post<DeleteLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</p>
		 * Post #X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator
		 * @return {DeleteLicenseManagerReportGeneratorResponse} Success
		 */
		DeleteLicenseManagerReportGenerator(requestBody: DeleteLicenseManagerReportGeneratorRequest): Observable<DeleteLicenseManagerReportGeneratorResponse> {
			return this.http.post<DeleteLicenseManagerReportGeneratorResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.DeleteLicenseManagerReportGenerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified token. Must be called in the license home Region.
		 * Post #X-Amz-Target=AWSLicenseManager.DeleteToken
		 * @return {DeleteTokenResponse} Success
		 */
		DeleteToken(requestBody: DeleteTokenRequest): Observable<DeleteTokenResponse> {
			return this.http.post<DeleteTokenResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.DeleteToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Extends the expiration date for license consumption.
		 * Post #X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption
		 * @return {ExtendLicenseConsumptionResponse} Success
		 */
		ExtendLicenseConsumption(requestBody: ExtendLicenseConsumptionRequest): Observable<ExtendLicenseConsumptionResponse> {
			return this.http.post<ExtendLicenseConsumptionResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ExtendLicenseConsumption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.
		 * Post #X-Amz-Target=AWSLicenseManager.GetAccessToken
		 * @return {GetAccessTokenResponse} Success
		 */
		GetAccessToken(requestBody: GetAccessTokenRequest): Observable<GetAccessTokenResponse> {
			return this.http.post<GetAccessTokenResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.GetAccessToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets detailed information about the specified grant.
		 * Post #X-Amz-Target=AWSLicenseManager.GetGrant
		 * @return {GetGrantResponse} Success
		 */
		GetGrant(requestBody: GetGrantRequest): Observable<GetGrantResponse> {
			return this.http.post<GetGrantResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.GetGrant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets detailed information about the specified license.
		 * Post #X-Amz-Target=AWSLicenseManager.GetLicense
		 * @return {GetLicenseResponse} Success
		 */
		GetLicense(requestBody: GetLicenseRequest): Observable<GetLicenseResponse> {
			return this.http.post<GetLicenseResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.GetLicense', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets detailed information about the specified license configuration.
		 * Post #X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration
		 * @return {GetLicenseConfigurationResponse} Success
		 */
		GetLicenseConfiguration(requestBody: GetLicenseConfigurationRequest): Observable<GetLicenseConfigurationResponse> {
			return this.http.post<GetLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified license type conversion task.
		 * Post #X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask
		 * @return {GetLicenseConversionTaskResponse} Success
		 */
		GetLicenseConversionTask(requestBody: GetLicenseConversionTaskRequest): Observable<GetLicenseConversionTaskResponse> {
			return this.http.post<GetLicenseConversionTaskResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.GetLicenseConversionTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified report generator.
		 * Post #X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator
		 * @return {GetLicenseManagerReportGeneratorResponse} Success
		 */
		GetLicenseManagerReportGenerator(requestBody: GetLicenseManagerReportGeneratorRequest): Observable<GetLicenseManagerReportGeneratorResponse> {
			return this.http.post<GetLicenseManagerReportGeneratorResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.GetLicenseManagerReportGenerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets detailed information about the usage of the specified license.
		 * Post #X-Amz-Target=AWSLicenseManager.GetLicenseUsage
		 * @return {GetLicenseUsageResponse} Success
		 */
		GetLicenseUsage(requestBody: GetLicenseUsageRequest): Observable<GetLicenseUsageResponse> {
			return this.http.post<GetLicenseUsageResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.GetLicenseUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the License Manager settings for the current Region.
		 * Post #X-Amz-Target=AWSLicenseManager.GetServiceSettings
		 * @return {GetServiceSettingsResponse} Success
		 */
		GetServiceSettings(requestBody: GetServiceSettingsRequest): Observable<GetServiceSettingsResponse> {
			return this.http.post<GetServiceSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.GetServiceSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
		 * Post #X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration
		 * @return {ListAssociationsForLicenseConfigurationResponse} Success
		 */
		ListAssociationsForLicenseConfiguration(requestBody: ListAssociationsForLicenseConfigurationRequest): Observable<ListAssociationsForLicenseConfigurationResponse> {
			return this.http.post<ListAssociationsForLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the grants distributed for the specified license.
		 * Post #X-Amz-Target=AWSLicenseManager.ListDistributedGrants
		 * @return {ListDistributedGrantsResponse} Success
		 */
		ListDistributedGrants(requestBody: ListDistributedGrantsRequest): Observable<ListDistributedGrantsResponse> {
			return this.http.post<ListDistributedGrantsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListDistributedGrants', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the license configuration operations that failed.
		 * Post #X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations
		 * @return {ListFailuresForLicenseConfigurationOperationsResponse} Success
		 */
		ListFailuresForLicenseConfigurationOperations(requestBody: ListFailuresForLicenseConfigurationOperationsRequest): Observable<ListFailuresForLicenseConfigurationOperationsResponse> {
			return this.http.post<ListFailuresForLicenseConfigurationOperationsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the license configurations for your account.
		 * Post #X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations
		 * @return {ListLicenseConfigurationsResponse} Success
		 */
		ListLicenseConfigurations(requestBody: ListLicenseConfigurationsRequest): Observable<ListLicenseConfigurationsResponse> {
			return this.http.post<ListLicenseConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the license type conversion tasks for your account.
		 * Post #X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks
		 * @return {ListLicenseConversionTasksResponse} Success
		 */
		ListLicenseConversionTasks(requestBody: ListLicenseConversionTasksRequest): Observable<ListLicenseConversionTasksResponse> {
			return this.http.post<ListLicenseConversionTasksResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListLicenseConversionTasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the report generators for your account.
		 * Post #X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators
		 * @return {ListLicenseManagerReportGeneratorsResponse} Success
		 */
		ListLicenseManagerReportGenerators(requestBody: ListLicenseManagerReportGeneratorsRequest): Observable<ListLicenseManagerReportGeneratorsResponse> {
			return this.http.post<ListLicenseManagerReportGeneratorsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListLicenseManagerReportGenerators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the license configurations for the specified resource.
		 * Post #X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource
		 * @return {ListLicenseSpecificationsForResourceResponse} Success
		 */
		ListLicenseSpecificationsForResource(requestBody: ListLicenseSpecificationsForResourceRequest): Observable<ListLicenseSpecificationsForResourceResponse> {
			return this.http.post<ListLicenseSpecificationsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all versions of the specified license.
		 * Post #X-Amz-Target=AWSLicenseManager.ListLicenseVersions
		 * @return {ListLicenseVersionsResponse} Success
		 */
		ListLicenseVersions(requestBody: ListLicenseVersionsRequest): Observable<ListLicenseVersionsResponse> {
			return this.http.post<ListLicenseVersionsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListLicenseVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the licenses for your account.
		 * Post #X-Amz-Target=AWSLicenseManager.ListLicenses
		 * @return {ListLicensesResponse} Success
		 */
		ListLicenses(requestBody: ListLicensesRequest): Observable<ListLicensesResponse> {
			return this.http.post<ListLicensesResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListLicenses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists grants that are received. Received grants are grants created while specifying the recipient as this Amazon Web Services account, your organization, or an organizational unit (OU) to which this member account belongs.
		 * Post #X-Amz-Target=AWSLicenseManager.ListReceivedGrants
		 * @return {ListReceivedGrantsResponse} Success
		 */
		ListReceivedGrants(requestBody: ListReceivedGrantsRequest): Observable<ListReceivedGrantsResponse> {
			return this.http.post<ListReceivedGrantsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListReceivedGrants', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the grants received for all accounts in the organization.
		 * Post #X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization
		 * @return {ListReceivedGrantsForOrganizationResponse} Success
		 */
		ListReceivedGrantsForOrganization(requestBody: ListReceivedGrantsForOrganizationRequest): Observable<ListReceivedGrantsForOrganizationResponse> {
			return this.http.post<ListReceivedGrantsForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListReceivedGrantsForOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists received licenses.
		 * Post #X-Amz-Target=AWSLicenseManager.ListReceivedLicenses
		 * @return {ListReceivedLicensesResponse} Success
		 */
		ListReceivedLicenses(requestBody: ListReceivedLicensesRequest): Observable<ListReceivedLicensesResponse> {
			return this.http.post<ListReceivedLicensesResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListReceivedLicenses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the licenses received for all accounts in the organization.
		 * Post #X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization
		 * @return {ListReceivedLicensesForOrganizationResponse} Success
		 */
		ListReceivedLicensesForOrganization(requestBody: ListReceivedLicensesForOrganizationRequest): Observable<ListReceivedLicensesForOrganizationResponse> {
			return this.http.post<ListReceivedLicensesForOrganizationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListReceivedLicensesForOrganization', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists resources managed using Systems Manager inventory.
		 * Post #X-Amz-Target=AWSLicenseManager.ListResourceInventory
		 * @return {ListResourceInventoryResponse} Success
		 */
		ListResourceInventory(requestBody: ListResourceInventoryRequest): Observable<ListResourceInventoryResponse> {
			return this.http.post<ListResourceInventoryResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListResourceInventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the specified license configuration.
		 * Post #X-Amz-Target=AWSLicenseManager.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists your tokens.
		 * Post #X-Amz-Target=AWSLicenseManager.ListTokens
		 * @return {ListTokensResponse} Success
		 */
		ListTokens(requestBody: ListTokensRequest): Observable<ListTokensResponse> {
			return this.http.post<ListTokensResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListTokens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
		 * Post #X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration
		 * @return {ListUsageForLicenseConfigurationResponse} Success
		 */
		ListUsageForLicenseConfiguration(requestBody: ListUsageForLicenseConfigurationRequest): Observable<ListUsageForLicenseConfigurationResponse> {
			return this.http.post<ListUsageForLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rejects the specified grant.
		 * Post #X-Amz-Target=AWSLicenseManager.RejectGrant
		 * @return {RejectGrantResponse} Success
		 */
		RejectGrant(requestBody: RejectGrantRequest): Observable<RejectGrantResponse> {
			return this.http.post<RejectGrantResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.RejectGrant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds the specified tags to the specified license configuration.
		 * Post #X-Amz-Target=AWSLicenseManager.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified license configuration.
		 * Post #X-Amz-Target=AWSLicenseManager.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the attributes of an existing license configuration.
		 * Post #X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration
		 * @return {UpdateLicenseConfigurationResponse} Success
		 */
		UpdateLicenseConfiguration(requestBody: UpdateLicenseConfigurationRequest): Observable<UpdateLicenseConfigurationResponse> {
			return this.http.post<UpdateLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a report generator.</p> <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>
		 * Post #X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator
		 * @return {UpdateLicenseManagerReportGeneratorResponse} Success
		 */
		UpdateLicenseManagerReportGenerator(requestBody: UpdateLicenseManagerReportGeneratorRequest): Observable<UpdateLicenseManagerReportGeneratorResponse> {
			return this.http.post<UpdateLicenseManagerReportGeneratorResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.UpdateLicenseManagerReportGenerator', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
		 * Post #X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource
		 * @return {UpdateLicenseSpecificationsForResourceResponse} Success
		 */
		UpdateLicenseSpecificationsForResource(requestBody: UpdateLicenseSpecificationsForResourceRequest): Observable<UpdateLicenseSpecificationsForResourceResponse> {
			return this.http.post<UpdateLicenseSpecificationsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates License Manager settings for the current Region.
		 * Post #X-Amz-Target=AWSLicenseManager.UpdateServiceSettings
		 * @return {UpdateServiceSettingsResponse} Success
		 */
		UpdateServiceSettings(requestBody: UpdateServiceSettingsRequest): Observable<UpdateServiceSettingsResponse> {
			return this.http.post<UpdateServiceSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptGrantX_Amz_Target { 'AWSLicenseManager.AcceptGrant' = 'AWSLicenseManager.AcceptGrant' }

	export enum CheckInLicenseX_Amz_Target { 'AWSLicenseManager.CheckInLicense' = 'AWSLicenseManager.CheckInLicense' }

	export enum CheckoutBorrowLicenseX_Amz_Target { 'AWSLicenseManager.CheckoutBorrowLicense' = 'AWSLicenseManager.CheckoutBorrowLicense' }

	export enum CheckoutLicenseX_Amz_Target { 'AWSLicenseManager.CheckoutLicense' = 'AWSLicenseManager.CheckoutLicense' }

	export enum CreateGrantX_Amz_Target { 'AWSLicenseManager.CreateGrant' = 'AWSLicenseManager.CreateGrant' }

	export enum CreateGrantVersionX_Amz_Target { 'AWSLicenseManager.CreateGrantVersion' = 'AWSLicenseManager.CreateGrantVersion' }

	export enum CreateLicenseX_Amz_Target { 'AWSLicenseManager.CreateLicense' = 'AWSLicenseManager.CreateLicense' }

	export enum CreateLicenseConfigurationX_Amz_Target { 'AWSLicenseManager.CreateLicenseConfiguration' = 'AWSLicenseManager.CreateLicenseConfiguration' }

	export enum CreateLicenseConversionTaskForResourceX_Amz_Target { 'AWSLicenseManager.CreateLicenseConversionTaskForResource' = 'AWSLicenseManager.CreateLicenseConversionTaskForResource' }

	export enum CreateLicenseManagerReportGeneratorX_Amz_Target { 'AWSLicenseManager.CreateLicenseManagerReportGenerator' = 'AWSLicenseManager.CreateLicenseManagerReportGenerator' }

	export enum CreateLicenseVersionX_Amz_Target { 'AWSLicenseManager.CreateLicenseVersion' = 'AWSLicenseManager.CreateLicenseVersion' }

	export enum CreateTokenX_Amz_Target { 'AWSLicenseManager.CreateToken' = 'AWSLicenseManager.CreateToken' }

	export enum DeleteGrantX_Amz_Target { 'AWSLicenseManager.DeleteGrant' = 'AWSLicenseManager.DeleteGrant' }

	export enum DeleteLicenseX_Amz_Target { 'AWSLicenseManager.DeleteLicense' = 'AWSLicenseManager.DeleteLicense' }

	export enum DeleteLicenseConfigurationX_Amz_Target { 'AWSLicenseManager.DeleteLicenseConfiguration' = 'AWSLicenseManager.DeleteLicenseConfiguration' }

	export enum DeleteLicenseManagerReportGeneratorX_Amz_Target { 'AWSLicenseManager.DeleteLicenseManagerReportGenerator' = 'AWSLicenseManager.DeleteLicenseManagerReportGenerator' }

	export enum DeleteTokenX_Amz_Target { 'AWSLicenseManager.DeleteToken' = 'AWSLicenseManager.DeleteToken' }

	export enum ExtendLicenseConsumptionX_Amz_Target { 'AWSLicenseManager.ExtendLicenseConsumption' = 'AWSLicenseManager.ExtendLicenseConsumption' }

	export enum GetAccessTokenX_Amz_Target { 'AWSLicenseManager.GetAccessToken' = 'AWSLicenseManager.GetAccessToken' }

	export enum GetGrantX_Amz_Target { 'AWSLicenseManager.GetGrant' = 'AWSLicenseManager.GetGrant' }

	export enum GetLicenseX_Amz_Target { 'AWSLicenseManager.GetLicense' = 'AWSLicenseManager.GetLicense' }

	export enum GetLicenseConfigurationX_Amz_Target { 'AWSLicenseManager.GetLicenseConfiguration' = 'AWSLicenseManager.GetLicenseConfiguration' }

	export enum GetLicenseConversionTaskX_Amz_Target { 'AWSLicenseManager.GetLicenseConversionTask' = 'AWSLicenseManager.GetLicenseConversionTask' }

	export enum GetLicenseManagerReportGeneratorX_Amz_Target { 'AWSLicenseManager.GetLicenseManagerReportGenerator' = 'AWSLicenseManager.GetLicenseManagerReportGenerator' }

	export enum GetLicenseUsageX_Amz_Target { 'AWSLicenseManager.GetLicenseUsage' = 'AWSLicenseManager.GetLicenseUsage' }

	export enum GetServiceSettingsX_Amz_Target { 'AWSLicenseManager.GetServiceSettings' = 'AWSLicenseManager.GetServiceSettings' }

	export enum ListAssociationsForLicenseConfigurationX_Amz_Target { 'AWSLicenseManager.ListAssociationsForLicenseConfiguration' = 'AWSLicenseManager.ListAssociationsForLicenseConfiguration' }

	export enum ListDistributedGrantsX_Amz_Target { 'AWSLicenseManager.ListDistributedGrants' = 'AWSLicenseManager.ListDistributedGrants' }

	export enum ListFailuresForLicenseConfigurationOperationsX_Amz_Target { 'AWSLicenseManager.ListFailuresForLicenseConfigurationOperations' = 'AWSLicenseManager.ListFailuresForLicenseConfigurationOperations' }

	export enum ListLicenseConfigurationsX_Amz_Target { 'AWSLicenseManager.ListLicenseConfigurations' = 'AWSLicenseManager.ListLicenseConfigurations' }

	export enum ListLicenseConversionTasksX_Amz_Target { 'AWSLicenseManager.ListLicenseConversionTasks' = 'AWSLicenseManager.ListLicenseConversionTasks' }

	export enum ListLicenseManagerReportGeneratorsX_Amz_Target { 'AWSLicenseManager.ListLicenseManagerReportGenerators' = 'AWSLicenseManager.ListLicenseManagerReportGenerators' }

	export enum ListLicenseSpecificationsForResourceX_Amz_Target { 'AWSLicenseManager.ListLicenseSpecificationsForResource' = 'AWSLicenseManager.ListLicenseSpecificationsForResource' }

	export enum ListLicenseVersionsX_Amz_Target { 'AWSLicenseManager.ListLicenseVersions' = 'AWSLicenseManager.ListLicenseVersions' }

	export enum ListLicensesX_Amz_Target { 'AWSLicenseManager.ListLicenses' = 'AWSLicenseManager.ListLicenses' }

	export enum ListReceivedGrantsX_Amz_Target { 'AWSLicenseManager.ListReceivedGrants' = 'AWSLicenseManager.ListReceivedGrants' }

	export enum ListReceivedGrantsForOrganizationX_Amz_Target { 'AWSLicenseManager.ListReceivedGrantsForOrganization' = 'AWSLicenseManager.ListReceivedGrantsForOrganization' }

	export enum ListReceivedLicensesX_Amz_Target { 'AWSLicenseManager.ListReceivedLicenses' = 'AWSLicenseManager.ListReceivedLicenses' }

	export enum ListReceivedLicensesForOrganizationX_Amz_Target { 'AWSLicenseManager.ListReceivedLicensesForOrganization' = 'AWSLicenseManager.ListReceivedLicensesForOrganization' }

	export enum ListResourceInventoryX_Amz_Target { 'AWSLicenseManager.ListResourceInventory' = 'AWSLicenseManager.ListResourceInventory' }

	export enum ListTagsForResourceX_Amz_Target { 'AWSLicenseManager.ListTagsForResource' = 'AWSLicenseManager.ListTagsForResource' }

	export enum ListTokensX_Amz_Target { 'AWSLicenseManager.ListTokens' = 'AWSLicenseManager.ListTokens' }

	export enum ListUsageForLicenseConfigurationX_Amz_Target { 'AWSLicenseManager.ListUsageForLicenseConfiguration' = 'AWSLicenseManager.ListUsageForLicenseConfiguration' }

	export enum RejectGrantX_Amz_Target { 'AWSLicenseManager.RejectGrant' = 'AWSLicenseManager.RejectGrant' }

	export enum TagResourceX_Amz_Target { 'AWSLicenseManager.TagResource' = 'AWSLicenseManager.TagResource' }

	export enum UntagResourceX_Amz_Target { 'AWSLicenseManager.UntagResource' = 'AWSLicenseManager.UntagResource' }

	export enum UpdateLicenseConfigurationX_Amz_Target { 'AWSLicenseManager.UpdateLicenseConfiguration' = 'AWSLicenseManager.UpdateLicenseConfiguration' }

	export enum UpdateLicenseManagerReportGeneratorX_Amz_Target { 'AWSLicenseManager.UpdateLicenseManagerReportGenerator' = 'AWSLicenseManager.UpdateLicenseManagerReportGenerator' }

	export enum UpdateLicenseSpecificationsForResourceX_Amz_Target { 'AWSLicenseManager.UpdateLicenseSpecificationsForResource' = 'AWSLicenseManager.UpdateLicenseSpecificationsForResource' }

	export enum UpdateServiceSettingsX_Amz_Target { 'AWSLicenseManager.UpdateServiceSettings' = 'AWSLicenseManager.UpdateServiceSettings' }

}

