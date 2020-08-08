import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface DescribeServicesResponse {
		Services?: Array<Service>;
		FormatVersion?: string;
		NextToken?: string;
	}


	/** The metadata for a service, such as the service code and available attribute names. */
	export interface Service {
		ServiceCode?: string;
		AttributeNames?: Array<string>;
	}

	export interface DescribeServicesRequest {
		ServiceCode?: string;
		FormatVersion?: string;
		NextToken?: string;
		MaxResults?: number;
	}


	/** An error on the server occurred during the processing of your request. Try again later. */
	export interface InternalErrorException {
		Message?: string;
	}


	/** One or more parameters had an invalid value. */
	export interface InvalidParameterException {
		Message?: string;
	}


	/** The requested resource can't be found. */
	export interface NotFoundException {
		Message?: string;
	}


	/** The pagination token is invalid. Try again without a pagination token. */
	export interface InvalidNextTokenException {
		Message?: string;
	}


	/** The pagination token expired. Try again without a pagination token. */
	export interface ExpiredNextTokenException {
		Message?: string;
	}

	export interface GetAttributeValuesResponse {
		AttributeValues?: Array<AttributeValue>;
		NextToken?: string;
	}


	/** The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned IOPS</code> for the <code>Amazon EC2</code> <code>volumeType</code> attribute. */
	export interface AttributeValue {
		Value?: string;
	}

	export interface GetAttributeValuesRequest {
		ServiceCode: string;
		AttributeName: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface GetProductsResponse {
		FormatVersion?: string;
		PriceList?: Array<string>;
		NextToken?: string;
	}

	export interface GetProductsRequest {
		ServiceCode?: string;
		Filters?: Array<Filter>;
		FormatVersion?: string;
		NextToken?: string;
		MaxResults?: number;
	}


	/** The constraints that you want all returned products to match. */
	export interface Filter {
		Type: FilterType;
		Field: string;
		Value: string;
	}

	export enum FilterType { TERM_MATCH = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the metadata for one service or a list of the metadata for all services. Use this without a service code to get the service codes for all services. Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to that service, such as the attribute names available for that service. For example, some of the attribute names available for EC2 are <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>, <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.
		 * Post #X-Amz-Target=AWSPriceListService.DescribeServices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeServicesResponse} Success
		 */
		DescribeServices(MaxResults: string, NextToken: string, requestBody: DescribeServicesRequest): Observable<DescribeServicesResponse> {
			return this.http.post<DescribeServicesResponse>(this.baseUri + '#X-Amz-Target=AWSPriceListService.DescribeServices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of attribute values. Attibutes are similar to the details in a Price List API offer file. For a list of available attributes, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a> in the <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">AWS Billing and Cost Management User Guide</a>.
		 * Post #X-Amz-Target=AWSPriceListService.GetAttributeValues
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetAttributeValuesResponse} Success
		 */
		GetAttributeValues(MaxResults: string, NextToken: string, requestBody: GetAttributeValuesRequest): Observable<GetAttributeValuesResponse> {
			return this.http.post<GetAttributeValuesResponse>(this.baseUri + '#X-Amz-Target=AWSPriceListService.GetAttributeValues?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all products that match the filter criteria.
		 * Post #X-Amz-Target=AWSPriceListService.GetProducts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetProductsResponse} Success
		 */
		GetProducts(MaxResults: string, NextToken: string, requestBody: GetProductsRequest): Observable<GetProductsResponse> {
			return this.http.post<GetProductsResponse>(this.baseUri + '#X-Amz-Target=AWSPriceListService.GetProducts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DescribeServicesX_Amz_Target { AWSPriceListService_DescribeServices = 0 }

	export enum GetAttributeValuesX_Amz_Target { AWSPriceListService_GetAttributeValues = 0 }

	export enum GetProductsX_Amz_Target { AWSPriceListService_GetProducts = 0 }

}

