import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the <code>UsageRecords</code> processed by <code>BatchMeterUsage</code> and any records that have failed due to transient error. */
	export interface BatchMeterUsageResult {
		Results?: Array<UsageRecordResult>;
		UnprocessedRecords?: Array<UsageRecord>;
	}

	/** Contains the <code>UsageRecords</code> processed by <code>BatchMeterUsage</code> and any records that have failed due to transient error. */
	export interface BatchMeterUsageResultFormProperties {
	}
	export function CreateBatchMeterUsageResultFormGroup() {
		return new FormGroup<BatchMeterUsageResultFormProperties>({
		});

	}


	/** A <code>UsageRecordResult</code> indicates the status of a given <code>UsageRecord</code> processed by <code>BatchMeterUsage</code>. */
	export interface UsageRecordResult {
		UsageRecord?: UsageRecord;
		MeteringRecordId?: string;
		Status?: UsageRecordResultStatus;
	}

	/** A <code>UsageRecordResult</code> indicates the status of a given <code>UsageRecord</code> processed by <code>BatchMeterUsage</code>. */
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


	/** <p>A <code>UsageRecord</code> indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same <code>UsageRecords</code> as input will be de-duplicated to prevent double charges.</p> */
	export interface UsageRecord {

		/** Required */
		Timestamp: Date;

		/** Required */
		CustomerIdentifier: string;

		/** Required */
		Dimension: string;
		Quantity?: number | null;
		UsageAllocations?: Array<UsageAllocation>;
	}

	/** <p>A <code>UsageRecord</code> indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same <code>UsageRecords</code> as input will be de-duplicated to prevent double charges.</p> */
	export interface UsageRecordFormProperties {

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,

		/** Required */
		CustomerIdentifier: FormControl<string | null | undefined>,

		/** Required */
		Dimension: FormControl<string | null | undefined>,
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateUsageRecordFormGroup() {
		return new FormGroup<UsageRecordFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			CustomerIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Dimension: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each <code>UsageAllocation</code> indicates the usage quantity for a specific set of tags.</p> */
	export interface UsageAllocation {

		/** Required */
		AllocatedUsageQuantity: number;
		Tags?: Array<Tag>;
	}

	/** <p>Usage allocations allow you to split usage into buckets by tags.</p> <p>Each <code>UsageAllocation</code> indicates the usage quantity for a specific set of tags.</p> */
	export interface UsageAllocationFormProperties {

		/** Required */
		AllocatedUsageQuantity: FormControl<number | null | undefined>,
	}
	export function CreateUsageAllocationFormGroup() {
		return new FormGroup<UsageAllocationFormProperties>({
			AllocatedUsageQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata assigned to an allocation. Each tag is made up of a <code>key</code> and a <code>value</code>. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Metadata assigned to an allocation. Each tag is made up of a <code>key</code> and a <code>value</code>. */
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

	export enum UsageRecordResultStatus { Success = 'Success', CustomerNotSubscribed = 'CustomerNotSubscribed', DuplicateRecord = 'DuplicateRecord' }


	/** A <code>BatchMeterUsageRequest</code> contains <code>UsageRecords</code>, which indicate quantities of usage within your application. */
	export interface BatchMeterUsageRequest {

		/** Required */
		UsageRecords: Array<UsageRecord>;

		/** Required */
		ProductCode: string;
	}

	/** A <code>BatchMeterUsageRequest</code> contains <code>UsageRecords</code>, which indicate quantities of usage within your application. */
	export interface BatchMeterUsageRequestFormProperties {

		/** Required */
		ProductCode: FormControl<string | null | undefined>,
	}
	export function CreateBatchMeterUsageRequestFormGroup() {
		return new FormGroup<BatchMeterUsageRequestFormProperties>({
			ProductCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InvalidTagException {
	}
	export interface InvalidTagExceptionFormProperties {
	}
	export function CreateInvalidTagExceptionFormGroup() {
		return new FormGroup<InvalidTagExceptionFormProperties>({
		});

	}

	export interface InvalidUsageAllocationsException {
	}
	export interface InvalidUsageAllocationsExceptionFormProperties {
	}
	export function CreateInvalidUsageAllocationsExceptionFormGroup() {
		return new FormGroup<InvalidUsageAllocationsExceptionFormProperties>({
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
		MeteringRecordId?: string;
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

		/** Required */
		ProductCode: string;

		/** Required */
		Timestamp: Date;

		/** Required */
		UsageDimension: string;
		UsageQuantity?: number | null;
		DryRun?: boolean | null;
		UsageAllocations?: Array<UsageAllocation>;
	}
	export interface MeterUsageRequestFormProperties {

		/** Required */
		ProductCode: FormControl<string | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,

		/** Required */
		UsageDimension: FormControl<string | null | undefined>,
		UsageQuantity: FormControl<number | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateMeterUsageRequestFormGroup() {
		return new FormGroup<MeterUsageRequestFormProperties>({
			ProductCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			UsageDimension: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UsageQuantity: new FormControl<number | null | undefined>(undefined),
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
		PublicKeyRotationTimestamp?: Date;
		Signature?: string;
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

		/** Required */
		ProductCode: string;

		/** Required */
		PublicKeyVersion: number;
		Nonce?: string;
	}
	export interface RegisterUsageRequestFormProperties {

		/** Required */
		ProductCode: FormControl<string | null | undefined>,

		/** Required */
		PublicKeyVersion: FormControl<number | null | undefined>,
		Nonce: FormControl<string | null | undefined>,
	}
	export function CreateRegisterUsageRequestFormGroup() {
		return new FormGroup<RegisterUsageRequestFormProperties>({
			ProductCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PublicKeyVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Nonce: new FormControl<string | null | undefined>(undefined),
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


	/** The result of the <code>ResolveCustomer</code> operation. Contains the <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>. */
	export interface ResolveCustomerResult {
		CustomerIdentifier?: string;
		ProductCode?: string;
		CustomerAWSAccountId?: string;
	}

	/** The result of the <code>ResolveCustomer</code> operation. Contains the <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>. */
	export interface ResolveCustomerResultFormProperties {
		CustomerIdentifier: FormControl<string | null | undefined>,
		ProductCode: FormControl<string | null | undefined>,
		CustomerAWSAccountId: FormControl<string | null | undefined>,
	}
	export function CreateResolveCustomerResultFormGroup() {
		return new FormGroup<ResolveCustomerResultFormProperties>({
			CustomerIdentifier: new FormControl<string | null | undefined>(undefined),
			ProductCode: new FormControl<string | null | undefined>(undefined),
			CustomerAWSAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains input to the <code>ResolveCustomer</code> operation. */
	export interface ResolveCustomerRequest {

		/** Required */
		RegistrationToken: string;
	}

	/** Contains input to the <code>ResolveCustomer</code> operation. */
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
		 * <p> <code>BatchMeterUsage</code> is called from a SaaS application listed on AWS Marketplace to post metering records for a set of customers.</p> <p>For identical requests, the API is idempotent; requests can be retried with the same records or a subset of the input records.</p> <p>Every request to <code>BatchMeterUsage</code> is for one product. If you need to meter usage for multiple products, you must make multiple calls to <code>BatchMeterUsage</code>.</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p> <p> <code>BatchMeterUsage</code> can process up to 25 <code>UsageRecords</code> at a time.</p> <p>A <code>UsageRecord</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p> <code>BatchMeterUsage</code> returns a list of <code>UsageRecordResult</code> objects, showing the result for each <code>UsageRecord</code>, as well as a list of <code>UnprocessedRecords</code>, indicating errors in the service side that you should retry.</p> <p> <code>BatchMeterUsage</code> requests must be less than 1MB in size.</p> <note> <p>For an example of using <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSMPMeteringService.BatchMeterUsage
		 * @return {BatchMeterUsageResult} Success
		 */
		BatchMeterUsage(requestBody: BatchMeterUsageRequest): Observable<BatchMeterUsageResult> {
			return this.http.post<BatchMeterUsageResult>(this.baseUri + '#X-Amz-Target=AWSMPMeteringService.BatchMeterUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>API to emit metering records. For identical requests, the API is idempotent. It simply returns the metering record ID.</p> <p> <code>MeterUsage</code> is authenticated on the buyer's AWS account using credentials from the EC2 instance, ECS task, or EKS pod.</p> <p> <code>MeterUsage</code> can optionally include multiple usage allocations, to provide customers with usage data split into buckets by tags that you define (or allow the customer to define).</p> <p>Usage records are expected to be submitted as quickly as possible after the event that is being recorded, and are not accepted more than 6 hours after the event.</p>
		 * Post #X-Amz-Target=AWSMPMeteringService.MeterUsage
		 * @return {MeterUsageResult} Success
		 */
		MeterUsage(requestBody: MeterUsageRequest): Observable<MeterUsageResult> {
			return this.http.post<MeterUsageResult>(this.baseUri + '#X-Amz-Target=AWSMPMeteringService.MeterUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Paid container software products sold through AWS Marketplace must integrate with the AWS Marketplace Metering Service and call the <code>RegisterUsage</code> operation for software entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't required to call <code>RegisterUsage</code>, but you may choose to do so if you would like to receive usage data in your seller reports. The sections below explain the behavior of <code>RegisterUsage</code>. <code>RegisterUsage</code> performs two primary functions: metering and entitlement.</p> <ul> <li> <p> <i>Entitlement</i>: <code>RegisterUsage</code> allows you to verify that the customer running your paid software is subscribed to your product on AWS Marketplace, enabling you to guard against unauthorized use. Your container image that integrates with <code>RegisterUsage</code> is only required to guard against unauthorized use at container startup, as such a <code>CustomerNotSubscribedException</code> or <code>PlatformNotSupportedException</code> will only be thrown on the initial call to <code>RegisterUsage</code>. Subsequent calls from the same Amazon ECS task instance (e.g. task-id) or Amazon EKS pod will not throw a <code>CustomerNotSubscribedException</code>, even if the customer unsubscribes while the Amazon ECS task or Amazon EKS pod is still running.</p> </li> <li> <p> <i>Metering</i>: <code>RegisterUsage</code> meters software use per ECS task, per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum of 1 minute of usage applies to tasks that are short lived. For example, if a customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10 cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for software use is automatically handled by the AWS Marketplace Metering Control Plane -- your software is not required to perform any metering specific actions, other than call <code>RegisterUsage</code> once for metering of software use to commence. The AWS Marketplace Metering Control Plane will also continue to bill customers for running ECS tasks and Amazon EKS pods, regardless of the customers subscription state, removing the need for your software to perform entitlement checks at runtime.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSMPMeteringService.RegisterUsage
		 * @return {RegisterUsageResult} Success
		 */
		RegisterUsage(requestBody: RegisterUsageRequest): Observable<RegisterUsageResult> {
			return this.http.post<RegisterUsageResult>(this.baseUri + '#X-Amz-Target=AWSMPMeteringService.RegisterUsage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>ResolveCustomer</code> is called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a registration token through their browser. The registration token is resolved through this API to obtain a <code>CustomerIdentifier</code> along with the <code>CustomerAWSAccountId</code> and <code>ProductCode</code>.</p> <note> <p>The API needs to called from the seller account id used to publish the SaaS application to successfully resolve the token.</p> <p>For an example of using <code>ResolveCustomer</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-resolvecustomer-example"> ResolveCustomer code example</a> in the <i>AWS Marketplace Seller Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSMPMeteringService.ResolveCustomer
		 * @return {ResolveCustomerResult} Success
		 */
		ResolveCustomer(requestBody: ResolveCustomerRequest): Observable<ResolveCustomerResult> {
			return this.http.post<ResolveCustomerResult>(this.baseUri + '#X-Amz-Target=AWSMPMeteringService.ResolveCustomer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchMeterUsageX_Amz_Target { 'AWSMPMeteringService.BatchMeterUsage' = 'AWSMPMeteringService.BatchMeterUsage' }

	export enum MeterUsageX_Amz_Target { 'AWSMPMeteringService.MeterUsage' = 'AWSMPMeteringService.MeterUsage' }

	export enum RegisterUsageX_Amz_Target { 'AWSMPMeteringService.RegisterUsage' = 'AWSMPMeteringService.RegisterUsage' }

	export enum ResolveCustomerX_Amz_Target { 'AWSMPMeteringService.ResolveCustomer' = 'AWSMPMeteringService.ResolveCustomer' }

}

