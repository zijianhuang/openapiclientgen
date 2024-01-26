import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeServicesResponse {
		Services?: Array<Service>;
		FormatVersion?: string;
		NextToken?: string;
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

		/** Required */
		ServiceCode: string;
		AttributeNames?: Array<string>;
	}

	/** The metadata for a service, such as the service code and available attribute names. */
	export interface ServiceFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeServicesRequest {
		ServiceCode?: string;
		FormatVersion?: string;
		NextToken?: string;
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

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface InternalErrorException {
	}
	export interface InternalErrorExceptionFormProperties {
	}
	export function CreateInternalErrorExceptionFormGroup() {
		return new FormGroup<InternalErrorExceptionFormProperties>({
		});

	}

	export interface ExpiredNextTokenException {
	}
	export interface ExpiredNextTokenExceptionFormProperties {
	}
	export function CreateExpiredNextTokenExceptionFormGroup() {
		return new FormGroup<ExpiredNextTokenExceptionFormProperties>({
		});

	}

	export interface GetAttributeValuesResponse {
		AttributeValues?: Array<AttributeValue>;
		NextToken?: string;
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
		Value?: string;
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

		/** Required */
		ServiceCode: string;

		/** Required */
		AttributeName: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetAttributeValuesRequestFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,

		/** Required */
		AttributeName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetAttributeValuesRequestFormGroup() {
		return new FormGroup<GetAttributeValuesRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetPriceListFileUrlResponse {
		Url?: string;
	}
	export interface GetPriceListFileUrlResponseFormProperties {
		Url: FormControl<string | null | undefined>,
	}
	export function CreateGetPriceListFileUrlResponseFormGroup() {
		return new FormGroup<GetPriceListFileUrlResponseFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPriceListFileUrlRequest {

		/** Required */
		PriceListArn: string;

		/** Required */
		FileFormat: string;
	}
	export interface GetPriceListFileUrlRequestFormProperties {

		/** Required */
		PriceListArn: FormControl<string | null | undefined>,

		/** Required */
		FileFormat: FormControl<string | null | undefined>,
	}
	export function CreateGetPriceListFileUrlRequestFormGroup() {
		return new FormGroup<GetPriceListFileUrlRequestFormProperties>({
			PriceListArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FileFormat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface GetProductsResponse {
		FormatVersion?: string;
		PriceList?: Array<string>;
		NextToken?: string;
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

		/** Required */
		ServiceCode: string;
		Filters?: Array<Filter>;
		FormatVersion?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetProductsRequestFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,
		FormatVersion: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetProductsRequestFormGroup() {
		return new FormGroup<GetProductsRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FormatVersion: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The constraints that you want all returned products to match. */
	export interface Filter {

		/** Required */
		Type: FilterType;

		/** Required */
		Field: string;

		/** Required */
		Value: string;
	}

	/** The constraints that you want all returned products to match. */
	export interface FilterFormProperties {

		/** Required */
		Type: FormControl<FilterType | null | undefined>,

		/** Required */
		Field: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Type: new FormControl<FilterType | null | undefined>(undefined, [Validators.required]),
			Field: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FilterType { TERM_MATCH = 0 }

	export interface ListPriceListsResponse {
		PriceLists?: Array<PriceList>;
		NextToken?: string;
	}
	export interface ListPriceListsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPriceListsResponseFormGroup() {
		return new FormGroup<ListPriceListsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This is the type of price list references that match your request. </p> */
	export interface PriceList {
		PriceListArn?: string;
		RegionCode?: string;
		CurrencyCode?: string;
		FileFormats?: Array<string>;
	}

	/** <p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This is the type of price list references that match your request. </p> */
	export interface PriceListFormProperties {
		PriceListArn: FormControl<string | null | undefined>,
		RegionCode: FormControl<string | null | undefined>,
		CurrencyCode: FormControl<string | null | undefined>,
	}
	export function CreatePriceListFormGroup() {
		return new FormGroup<PriceListFormProperties>({
			PriceListArn: new FormControl<string | null | undefined>(undefined),
			RegionCode: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPriceListsRequest {

		/** Required */
		ServiceCode: string;

		/** Required */
		EffectiveDate: Date;
		RegionCode?: string;

		/** Required */
		CurrencyCode: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPriceListsRequestFormProperties {

		/** Required */
		ServiceCode: FormControl<string | null | undefined>,

		/** Required */
		EffectiveDate: FormControl<Date | null | undefined>,
		RegionCode: FormControl<string | null | undefined>,

		/** Required */
		CurrencyCode: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPriceListsRequestFormGroup() {
		return new FormGroup<ListPriceListsRequestFormProperties>({
			ServiceCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EffectiveDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			RegionCode: new FormControl<string | null | undefined>(undefined),
			CurrencyCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

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
		 * Returns a list of attribute values. Attributes are similar to the details in a Price List API offer file. For a list of available attributes, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a> in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">Billing and Cost Management User Guide</a>.
		 * Post #X-Amz-Target=AWSPriceListService.GetAttributeValues
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetAttributeValuesResponse} Success
		 */
		GetAttributeValues(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetAttributeValuesRequest): Observable<GetAttributeValuesResponse> {
			return this.http.post<GetAttributeValuesResponse>(this.baseUri + '#X-Amz-Target=AWSPriceListService.GetAttributeValues?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns the URL that you can retrieve your Price List file from. This URL is based on the <code>PriceListArn</code> and <code>FileFormat</code> that you retrieve from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html"> <code>ListPriceLists</code> </a> response. </p>
		 * Post #X-Amz-Target=AWSPriceListService.GetPriceListFileUrl
		 * @return {GetPriceListFileUrlResponse} Success
		 */
		GetPriceListFileUrl(requestBody: GetPriceListFileUrlRequest): Observable<GetPriceListFileUrlResponse> {
			return this.http.post<GetPriceListFileUrlResponse>(this.baseUri + '#X-Amz-Target=AWSPriceListService.GetPriceListFileUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

		/**
		 * <p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns a list of Price List references that the requester if authorized to view, given a <code>ServiceCode</code>, <code>CurrencyCode</code>, and an <code>EffectiveDate</code>. Use without a <code>RegionCode</code> filter to list Price List references from all available Amazon Web Services Regions. Use with a <code>RegionCode</code> filter to get the Price List reference that's specific to a specific Amazon Web Services Region. You can use the <code>PriceListArn</code> from the response to get your preferred Price List files through the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html"> <code>GetPriceListFileUrl</code> </a> API.</p>
		 * Post #X-Amz-Target=AWSPriceListService.ListPriceLists
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPriceListsResponse} Success
		 */
		ListPriceLists(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPriceListsRequest): Observable<ListPriceListsResponse> {
			return this.http.post<ListPriceListsResponse>(this.baseUri + '#X-Amz-Target=AWSPriceListService.ListPriceLists?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DescribeServicesX_Amz_Target { 'AWSPriceListService.DescribeServices' = 0 }

	export enum GetAttributeValuesX_Amz_Target { 'AWSPriceListService.GetAttributeValues' = 0 }

	export enum GetPriceListFileUrlX_Amz_Target { 'AWSPriceListService.GetPriceListFileUrl' = 0 }

	export enum GetProductsX_Amz_Target { 'AWSPriceListService.GetProducts' = 0 }

	export enum ListPriceListsX_Amz_Target { 'AWSPriceListService.ListPriceLists' = 0 }

}

