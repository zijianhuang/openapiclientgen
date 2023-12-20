import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeServicesResponse {
		Services?: Array<Service>;
		FormatVersion?: string | null;
		NextToken?: string | null;
	}
	export interface DescribeServicesResponseFormProperties {
		FormatVersion: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServicesResponseFormGroup() {
		return new FormGroup<DescribeServicesResponseFormProperties>({
			FormatVersion: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata for a service, such as the service code and available attribute names. */
	export interface Service {
		ServiceCode?: string | null;
		AttributeNames?: Array<string>;
	}

	/** The metadata for a service, such as the service code and available attribute names. */
	export interface ServiceFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeServicesRequest {
		ServiceCode?: string | null;
		FormatVersion?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface DescribeServicesRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		FormatVersion: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeServicesRequestFormGroup() {
		return new FormGroup<DescribeServicesRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			FormatVersion: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An error on the server occurred during the processing of your request. Try again later. */
	export interface InternalErrorException {
		Message?: string | null;
	}

	/** An error on the server occurred during the processing of your request. Try again later. */
	export interface InternalErrorExceptionFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInternalErrorExceptionFormGroup() {
		return new FormGroup<InternalErrorExceptionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One or more parameters had an invalid value. */
	export interface InvalidParameterException {
		Message?: string | null;
	}

	/** One or more parameters had an invalid value. */
	export interface InvalidParameterExceptionFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The requested resource can't be found. */
	export interface NotFoundException {
		Message?: string | null;
	}

	/** The requested resource can't be found. */
	export interface NotFoundExceptionFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The pagination token is invalid. Try again without a pagination token. */
	export interface InvalidNextTokenException {
		Message?: string | null;
	}

	/** The pagination token is invalid. Try again without a pagination token. */
	export interface InvalidNextTokenExceptionFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The pagination token expired. Try again without a pagination token. */
	export interface ExpiredNextTokenException {
		Message?: string | null;
	}

	/** The pagination token expired. Try again without a pagination token. */
	export interface ExpiredNextTokenExceptionFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateExpiredNextTokenExceptionFormGroup() {
		return new FormGroup<ExpiredNextTokenExceptionFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAttributeValuesResponse {
		AttributeValues?: Array<AttributeValue>;
		NextToken?: string | null;
	}
	export interface GetAttributeValuesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAttributeValuesResponseFormGroup() {
		return new FormGroup<GetAttributeValuesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned IOPS</code> for the <code>Amazon EC2</code> <code>volumeType</code> attribute. */
	export interface AttributeValue {
		Value?: string | null;
	}

	/** The values of a given attribute, such as <code>Throughput Optimized HDD</code> or <code>Provisioned IOPS</code> for the <code>Amazon EC2</code> <code>volumeType</code> attribute. */
	export interface AttributeValueFormProperties {
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeValueFormGroup() {
		return new FormGroup<AttributeValueFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAttributeValuesRequest {
		ServiceCode: string;
		AttributeName: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface GetAttributeValuesRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		AttributeName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetAttributeValuesRequestFormGroup() {
		return new FormGroup<GetAttributeValuesRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			AttributeName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetProductsResponse {
		FormatVersion?: string | null;
		PriceList?: Array<string>;
		NextToken?: string | null;
	}
	export interface GetProductsResponseFormProperties {
		FormatVersion: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetProductsResponseFormGroup() {
		return new FormGroup<GetProductsResponseFormProperties>({
			FormatVersion: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetProductsRequest {
		ServiceCode?: string | null;
		Filters?: Array<Filter>;
		FormatVersion?: string | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}
	export interface GetProductsRequestFormProperties {
		ServiceCode: FormControl<string | null | undefined>,
		FormatVersion: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetProductsRequestFormGroup() {
		return new FormGroup<GetProductsRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined),
			FormatVersion: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The constraints that you want all returned products to match. */
	export interface Filter {
		Type: FilterType;
		Field: string;
		Value: string;
	}

	/** The constraints that you want all returned products to match. */
	export interface FilterFormProperties {
		Type: FormControl<FilterType | null | undefined>,
		Field: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Type: new FormControl<FilterType | null | undefined>(undefined),
			Field: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

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
		DescribeServices(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeServicesRequest): Observable<DescribeServicesResponse> {
			return this.http.post<DescribeServicesResponse>(this.baseUri + '#X-Amz-Target=AWSPriceListService.DescribeServices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of attribute values. Attibutes are similar to the details in a Price List API offer file. For a list of available attributes, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a> in the <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">AWS Billing and Cost Management User Guide</a>.
		 * Post #X-Amz-Target=AWSPriceListService.GetAttributeValues
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetAttributeValuesResponse} Success
		 */
		GetAttributeValues(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetAttributeValuesRequest): Observable<GetAttributeValuesResponse> {
			return this.http.post<GetAttributeValuesResponse>(this.baseUri + '#X-Amz-Target=AWSPriceListService.GetAttributeValues?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all products that match the filter criteria.
		 * Post #X-Amz-Target=AWSPriceListService.GetProducts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetProductsResponse} Success
		 */
		GetProducts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetProductsRequest): Observable<GetProductsResponse> {
			return this.http.post<GetProductsResponse>(this.baseUri + '#X-Amz-Target=AWSPriceListService.GetProducts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DescribeServicesX_Amz_Target { AWSPriceListService_DescribeServices = 0 }

	export enum GetAttributeValuesX_Amz_Target { AWSPriceListService_GetAttributeValues = 0 }

	export enum GetProductsX_Amz_Target { AWSPriceListService_GetProducts = 0 }

}

