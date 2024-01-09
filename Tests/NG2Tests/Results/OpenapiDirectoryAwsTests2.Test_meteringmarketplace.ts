import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error. */
	export interface BatchMeterUsageResult {
		Results?: Array<UsageRecordResult>;

		/**
		 * Minimum items: 0
		 * Maximum items: 25
		 */
		UnprocessedRecords?: Array<UsageRecord>;
	}

	/** Contains the UsageRecords processed by BatchMeterUsage and any records that have failed due to transient error. */
	export interface BatchMeterUsageResultFormProperties {
	}
	export function CreateBatchMeterUsageResultFormGroup() {
		return new FormGroup<BatchMeterUsageResultFormProperties>({
		});

	}


	/** A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage. */
	export interface UsageRecordResult {

		/** <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p> */
		UsageRecord?: UsageRecord;
		MeteringRecordId?: string | null;
		Status?: UsageRecordResultStatus | null;
	}

	/** A UsageRecordResult indicates the status of a given UsageRecord processed by BatchMeterUsage. */
	export interface UsageRecordResultFormProperties {
		MeteringRecordId: FormControl<string | null | undefined>,
		Status: FormControl<UsageRecordResultStatus | null | undefined>,
	}
	export function CreateUsageRecordResultFormGroup() {
		return new FormGroup<UsageRecordResultFormProperties>({
			MeteringRecordId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<UsageRecordResultStatus | null | undefined>(undefined),
		});

	}


	/** <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p> */
	export interface UsageRecord {

		/** Required */
		Timestamp: Date;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CustomerIdentifier: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Dimension: string;

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		Quantity?: number | null;
	}

	/** <p>A UsageRecord indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same UsageRecords as input will be deduplicated to prevent double charges.</p> */
	export interface UsageRecordFormProperties {

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		CustomerIdentifier: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Dimension: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateUsageRecordFormGroup() {
		return new FormGroup<UsageRecordFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CustomerIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Dimension: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
		});

	}

	export enum UsageRecordResultStatus { Success = 0, CustomerNotSubscribed = 1, DuplicateRecord = 2 }


	/** A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage within your application. */
	export interface BatchMeterUsageRequest {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 25
		 */
		UsageRecords: Array<UsageRecord>;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode: string;
	}

	/** A BatchMeterUsageRequest contains UsageRecords, which indicate quantities of usage within your application. */
	export interface BatchMeterUsageRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode: FormControl<string | null | undefined>,
	}
	export function CreateBatchMeterUsageRequestFormGroup() {
		return new FormGroup<BatchMeterUsageRequestFormProperties>({
			ProductCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface InternalServiceErrorException {
	}
	export interface InternalServiceErrorExceptionFormProperties {
	}
	export function CreateInternalServiceErrorExceptionFormGroup() {
		return new FormGroup<InternalServiceErrorExceptionFormProperties>({
		});

	}

	export interface InvalidProductCodeException {
	}
	export interface InvalidProductCodeExceptionFormProperties {
	}
	export function CreateInvalidProductCodeExceptionFormGroup() {
		return new FormGroup<InvalidProductCodeExceptionFormProperties>({
		});

	}

	export interface InvalidUsageDimensionException {
	}
	export interface InvalidUsageDimensionExceptionFormProperties {
	}
	export function CreateInvalidUsageDimensionExceptionFormGroup() {
		return new FormGroup<InvalidUsageDimensionExceptionFormProperties>({
		});

	}

	export interface InvalidCustomerIdentifierException {
	}
	export interface InvalidCustomerIdentifierExceptionFormProperties {
	}
	export function CreateInvalidCustomerIdentifierExceptionFormGroup() {
		return new FormGroup<InvalidCustomerIdentifierExceptionFormProperties>({
		});

	}

	export interface TimestampOutOfBoundsException {
	}
	export interface TimestampOutOfBoundsExceptionFormProperties {
	}
	export function CreateTimestampOutOfBoundsExceptionFormGroup() {
		return new FormGroup<TimestampOutOfBoundsExceptionFormProperties>({
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

	export interface DisabledApiException {
	}
	export interface DisabledApiExceptionFormProperties {
	}
	export function CreateDisabledApiExceptionFormGroup() {
		return new FormGroup<DisabledApiExceptionFormProperties>({
		});

	}

	export interface MeterUsageResult {
		MeteringRecordId?: string | null;
	}
	export interface MeterUsageResultFormProperties {
		MeteringRecordId: FormControl<string | null | undefined>,
	}
	export function CreateMeterUsageResultFormGroup() {
		return new FormGroup<MeterUsageResultFormProperties>({
			MeteringRecordId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MeterUsageRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode: string;

		/** Required */
		Timestamp: Date;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		UsageDimension: string;

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		UsageQuantity?: number | null;
		DryRun?: boolean | null;
	}
	export interface MeterUsageRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode: FormControl<string | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		UsageDimension: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 2147483647
		 */
		UsageQuantity: FormControl<number | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateMeterUsageRequestFormGroup() {
		return new FormGroup<MeterUsageRequestFormProperties>({
			ProductCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UsageDimension: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			UsageQuantity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2147483647)]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface InvalidEndpointRegionException {
	}
	export interface InvalidEndpointRegionExceptionFormProperties {
	}
	export function CreateInvalidEndpointRegionExceptionFormGroup() {
		return new FormGroup<InvalidEndpointRegionExceptionFormProperties>({
		});

	}

	export interface DuplicateRequestException {
	}
	export interface DuplicateRequestExceptionFormProperties {
	}
	export function CreateDuplicateRequestExceptionFormGroup() {
		return new FormGroup<DuplicateRequestExceptionFormProperties>({
		});

	}

	export interface CustomerNotEntitledException {
	}
	export interface CustomerNotEntitledExceptionFormProperties {
	}
	export function CreateCustomerNotEntitledExceptionFormGroup() {
		return new FormGroup<CustomerNotEntitledExceptionFormProperties>({
		});

	}

	export interface RegisterUsageResult {
		PublicKeyRotationTimestamp?: Date | null;
		Signature?: string | null;
	}
	export interface RegisterUsageResultFormProperties {
		PublicKeyRotationTimestamp: FormControl<Date | null | undefined>,
		Signature: FormControl<string | null | undefined>,
	}
	export function CreateRegisterUsageResultFormGroup() {
		return new FormGroup<RegisterUsageResultFormProperties>({
			PublicKeyRotationTimestamp: new FormControl<Date | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterUsageRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		PublicKeyVersion: number;

		/** Max length: 255 */
		Nonce?: string | null;
	}
	export interface RegisterUsageRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		PublicKeyVersion: FormControl<number | null | undefined>,

		/** Max length: 255 */
		Nonce: FormControl<string | null | undefined>,
	}
	export function CreateRegisterUsageRequestFormGroup() {
		return new FormGroup<RegisterUsageRequestFormProperties>({
			ProductCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			PublicKeyVersion: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			Nonce: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}

	export interface InvalidRegionException {
	}
	export interface InvalidRegionExceptionFormProperties {
	}
	export function CreateInvalidRegionExceptionFormGroup() {
		return new FormGroup<InvalidRegionExceptionFormProperties>({
		});

	}

	export interface InvalidPublicKeyVersionException {
	}
	export interface InvalidPublicKeyVersionExceptionFormProperties {
	}
	export function CreateInvalidPublicKeyVersionExceptionFormGroup() {
		return new FormGroup<InvalidPublicKeyVersionExceptionFormProperties>({
		});

	}

	export interface PlatformNotSupportedException {
	}
	export interface PlatformNotSupportedExceptionFormProperties {
	}
	export function CreatePlatformNotSupportedExceptionFormGroup() {
		return new FormGroup<PlatformNotSupportedExceptionFormProperties>({
		});

	}


	/** The result of the ResolveCustomer operation. Contains the CustomerIdentifier and product code. */
	export interface ResolveCustomerResult {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CustomerIdentifier?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode?: string | null;
	}

	/** The result of the ResolveCustomer operation. Contains the CustomerIdentifier and product code. */
	export interface ResolveCustomerResultFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CustomerIdentifier: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode: FormControl<string | null | undefined>,
	}
	export function CreateResolveCustomerResultFormGroup() {
		return new FormGroup<ResolveCustomerResultFormProperties>({
			CustomerIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			ProductCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** Contains input to the ResolveCustomer operation. */
	export interface ResolveCustomerRequest {

		/** Required */
		RegistrationToken: string;
	}

	/** Contains input to the ResolveCustomer operation. */
	export interface ResolveCustomerRequestFormProperties {

		/** Required */
		RegistrationToken: FormControl<string | null | undefined>,
	}
	export function CreateResolveCustomerRequestFormGroup() {
		return new FormGroup<ResolveCustomerRequestFormProperties>({
			RegistrationToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidTokenException {
	}
	export interface InvalidTokenExceptionFormProperties {
	}
	export function CreateInvalidTokenExceptionFormGroup() {
		return new FormGroup<InvalidTokenExceptionFormProperties>({
		});

	}

	export interface ExpiredTokenException {
	}
	export interface ExpiredTokenExceptionFormProperties {
	}
	export function CreateExpiredTokenExceptionFormGroup() {
		return new FormGroup<ExpiredTokenExceptionFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>BatchMeterUsage is called from a SaaS application listed on the AWS Marketplace to post metering records for a set of customers.</p> <p>For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records.</p> <p>Every request to BatchMeterUsage is for one product. If you need to meter usage for multiple products, you must make multiple calls to BatchMeterUsage.</p> <p>BatchMeterUsage can process up to 25 UsageRecords at a time.</p>
		 * Post #X-Amz-Target=AWSMPMeteringService.BatchMeterUsage
		 * @return {BatchMeterUsageResult} Success
		 */
		BatchMeterUsage(requestBody: BatchMeterUsageRequest): Observable<BatchMeterUsageResult> {
			return this.http.post<BatchMeterUsageResult>(this.baseUri + '#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.</p> <p>MeterUsage is authenticated on the buyer's AWS account using credentials from the EC2 instance, ECS task, or EKS pod.</p>
		 * Post #X-Amz-Target=AWSMPMeteringService.MeterUsage
		 * @return {MeterUsageResult} Success
		 */
		MeterUsage(requestBody: MeterUsageRequest): Observable<MeterUsageResult> {
			return this.http.post<MeterUsageResult>(this.baseUri + '#X-Amz-Target=AWSMPMeteringService.MeterUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the RegisterUsage operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call RegisterUsage, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of RegisterUsage. RegisterUsage performs two primary functions: metering and entitlement.</p> <ul> <li> <p> <i>Entitlement</i>: RegisterUsage allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with RegisterUsage is only required to guard against unauthorized use at container startup, as such a CustomerNotSubscribedException/PlatformNotSupportedException will only be thrown on the initial call to RegisterUsage. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a CustomerNotSubscribedException, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.</p> </li> <li> <p> <i>Metering</i>: RegisterUsage meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call RegisterUsage once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks and Amazon EKS pods, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSMPMeteringService.RegisterUsage
		 * @return {RegisterUsageResult} Success
		 */
		RegisterUsage(requestBody: RegisterUsageRequest): Observable<RegisterUsageResult> {
			return this.http.post<RegisterUsageResult>(this.baseUri + '#X-Amz-Target=AWSMPMeteringService.RegisterUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ResolveCustomer is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a CustomerIdentifier and product code.
		 * Post #X-Amz-Target=AWSMPMeteringService.ResolveCustomer
		 * @return {ResolveCustomerResult} Success
		 */
		ResolveCustomer(requestBody: ResolveCustomerRequest): Observable<ResolveCustomerResult> {
			return this.http.post<ResolveCustomerResult>(this.baseUri + '#X-Amz-Target=AWSMPMeteringService.ResolveCustomer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchMeterUsageX_Amz_Target { AWSMPMeteringService_BatchMeterUsage = 0 }

	export enum MeterUsageX_Amz_Target { AWSMPMeteringService_MeterUsage = 0 }

	export enum RegisterUsageX_Amz_Target { AWSMPMeteringService_RegisterUsage = 0 }

	export enum ResolveCustomerX_Amz_Target { AWSMPMeteringService_ResolveCustomer = 0 }

}

