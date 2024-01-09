import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The GetEntitlementsRequest contains results from the GetEntitlements operation. */
	export interface GetEntitlementsResult {

		/** Minimum items: 0 */
		Entitlements?: Array<Entitlement>;
		NextToken?: string | null;
	}

	/** The GetEntitlementsRequest contains results from the GetEntitlements operation. */
	export interface GetEntitlementsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEntitlementsResultFormGroup() {
		return new FormGroup<GetEntitlementsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database. */
	export interface Entitlement {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode?: string | null;
		Dimension?: string | null;
		CustomerIdentifier?: string | null;

		/** The EntitlementValue represents the amount of capacity that the customer is entitled to for the product. */
		Value?: EntitlementValue;
		ExpirationDate?: Date | null;
	}

	/** An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database. */
	export interface EntitlementFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode: FormControl<string | null | undefined>,
		Dimension: FormControl<string | null | undefined>,
		CustomerIdentifier: FormControl<string | null | undefined>,
		ExpirationDate: FormControl<Date | null | undefined>,
	}
	export function CreateEntitlementFormGroup() {
		return new FormGroup<EntitlementFormProperties>({
			ProductCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Dimension: new FormControl<string | null | undefined>(undefined),
			CustomerIdentifier: new FormControl<string | null | undefined>(undefined),
			ExpirationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The EntitlementValue represents the amount of capacity that the customer is entitled to for the product. */
	export interface EntitlementValue {
		IntegerValue?: number | null;
		DoubleValue?: number | null;
		BooleanValue?: boolean | null;
		StringValue?: string | null;
	}

	/** The EntitlementValue represents the amount of capacity that the customer is entitled to for the product. */
	export interface EntitlementValueFormProperties {
		IntegerValue: FormControl<number | null | undefined>,
		DoubleValue: FormControl<number | null | undefined>,
		BooleanValue: FormControl<boolean | null | undefined>,
		StringValue: FormControl<string | null | undefined>,
	}
	export function CreateEntitlementValueFormGroup() {
		return new FormGroup<EntitlementValueFormProperties>({
			IntegerValue: new FormControl<number | null | undefined>(undefined),
			DoubleValue: new FormControl<number | null | undefined>(undefined),
			BooleanValue: new FormControl<boolean | null | undefined>(undefined),
			StringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The GetEntitlementsRequest contains parameters for the GetEntitlements operation. */
	export interface GetEntitlementsRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode: string;
		Filter?: GetEntitlementFilters;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	/** The GetEntitlementsRequest contains parameters for the GetEntitlements operation. */
	export interface GetEntitlementsRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ProductCode: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEntitlementsRequestFormGroup() {
		return new FormGroup<GetEntitlementsRequestFormProperties>({
			ProductCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetEntitlementFilters {
	}
	export interface GetEntitlementFiltersFormProperties {
	}
	export function CreateGetEntitlementFiltersFormGroup() {
		return new FormGroup<GetEntitlementFiltersFormProperties>({
		});

	}


	/** One or more parameters in your request was invalid. */
	export interface InvalidParameterException {
		message?: string | null;
	}

	/** One or more parameters in your request was invalid. */
	export interface InvalidParameterExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The calls to the GetEntitlements API are throttled. */
	export interface ThrottlingException {
		message?: string | null;
	}

	/** The calls to the GetEntitlements API are throttled. */
	export interface ThrottlingExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums. */
	export interface InternalServiceErrorException {
		message?: string | null;
	}

	/** An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums. */
	export interface InternalServiceErrorExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateInternalServiceErrorExceptionFormGroup() {
		return new FormGroup<InternalServiceErrorExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetEntitlementFilterName { CUSTOMER_IDENTIFIER = 0, DIMENSION = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.
		 * Post #X-Amz-Target=AWSMPEntitlementService.GetEntitlements
		 * @return {GetEntitlementsResult} Success
		 */
		GetEntitlements(requestBody: GetEntitlementsRequest): Observable<GetEntitlementsResult> {
			return this.http.post<GetEntitlementsResult>(this.baseUri + '#X-Amz-Target=AWSMPEntitlementService.GetEntitlements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GetEntitlementsX_Amz_Target { AWSMPEntitlementService_GetEntitlements = 0 }

}

