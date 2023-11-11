import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The GetEntitlementsRequest contains results from the GetEntitlements operation. */
	export interface GetEntitlementsResult {
		Entitlements?: Array<Entitlement> | null;
		NextToken?: string | null;
	}


	/** An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database. */
	export interface Entitlement {
		ProductCode?: string | null;
		Dimension?: string | null;
		CustomerIdentifier?: string | null;

		/** The EntitlementValue represents the amount of capacity that the customer is entitled to for the product. */
		Value?: EntitlementValue | null;
		ExpirationDate?: Date | null;
	}


	/** The EntitlementValue represents the amount of capacity that the customer is entitled to for the product. */
	export interface EntitlementValue {
		IntegerValue?: number | null;
		DoubleValue?: number | null;
		BooleanValue?: boolean | null;
		StringValue?: string | null;
	}


	/** The GetEntitlementsRequest contains parameters for the GetEntitlements operation. */
	export interface GetEntitlementsRequest {
		ProductCode: string;
		Filter?: GetEntitlementFilters | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface GetEntitlementFilters {
	}


	/** One or more parameters in your request was invalid. */
	export interface InvalidParameterException {
		message?: string | null;
	}


	/** The calls to the GetEntitlements API are throttled. */
	export interface ThrottlingException {
		message?: string | null;
	}


	/** An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums. */
	export interface InternalServiceErrorException {
		message?: string | null;
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

