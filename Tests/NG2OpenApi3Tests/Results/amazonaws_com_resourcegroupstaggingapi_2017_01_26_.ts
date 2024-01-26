import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeReportCreationOutput {
		Status?: string;
		S3Location?: string;
		ErrorMessage?: string;
	}
	export interface DescribeReportCreationOutputFormProperties {
		Status: FormControl<string | null | undefined>,
		S3Location: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReportCreationOutputFormGroup() {
		return new FormGroup<DescribeReportCreationOutputFormProperties>({
			Status: new FormControl<string | null | undefined>(undefined),
			S3Location: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeReportCreationInput {
	}
	export interface DescribeReportCreationInputFormProperties {
	}
	export function CreateDescribeReportCreationInputFormGroup() {
		return new FormGroup<DescribeReportCreationInputFormProperties>({
		});

	}

	export interface ConstraintViolationException {
	}
	export interface ConstraintViolationExceptionFormProperties {
	}
	export function CreateConstraintViolationExceptionFormGroup() {
		return new FormGroup<ConstraintViolationExceptionFormProperties>({
		});

	}

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
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

	export interface ThrottledException {
	}
	export interface ThrottledExceptionFormProperties {
	}
	export function CreateThrottledExceptionFormGroup() {
		return new FormGroup<ThrottledExceptionFormProperties>({
		});

	}

	export interface GetComplianceSummaryOutput {
		SummaryList?: Array<Summary>;
		PaginationToken?: string;
	}
	export interface GetComplianceSummaryOutputFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateGetComplianceSummaryOutputFormGroup() {
		return new FormGroup<GetComplianceSummaryOutputFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A count of noncompliant resources. */
	export interface Summary {
		LastUpdated?: string;
		TargetId?: string;
		TargetIdType?: TargetIdType;
		Region?: string;
		ResourceType?: string;
		NonCompliantResources?: number | null;
	}

	/** A count of noncompliant resources. */
	export interface SummaryFormProperties {
		LastUpdated: FormControl<string | null | undefined>,
		TargetId: FormControl<string | null | undefined>,
		TargetIdType: FormControl<TargetIdType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		NonCompliantResources: FormControl<number | null | undefined>,
	}
	export function CreateSummaryFormGroup() {
		return new FormGroup<SummaryFormProperties>({
			LastUpdated: new FormControl<string | null | undefined>(undefined),
			TargetId: new FormControl<string | null | undefined>(undefined),
			TargetIdType: new FormControl<TargetIdType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			NonCompliantResources: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TargetIdType { ACCOUNT = 0, OU = 1, ROOT = 2 }

	export interface GetComplianceSummaryInput {
		TargetIdFilters?: Array<string>;
		RegionFilters?: Array<string>;
		ResourceTypeFilters?: Array<string>;
		TagKeyFilters?: Array<string>;
		GroupBy?: Array<GroupByAttribute>;
		MaxResults?: number | null;
		PaginationToken?: string;
	}
	export interface GetComplianceSummaryInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateGetComplianceSummaryInputFormGroup() {
		return new FormGroup<GetComplianceSummaryInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GroupByAttribute { TARGET_ID = 0, REGION = 1, RESOURCE_TYPE = 2 }

	export interface GetResourcesOutput {
		PaginationToken?: string;
		ResourceTagMappingList?: Array<ResourceTagMapping>;
	}
	export interface GetResourcesOutputFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcesOutputFormGroup() {
		return new FormGroup<GetResourcesOutputFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of resource ARNs and the tags (keys and values) that are associated with each. */
	export interface ResourceTagMapping {
		ResourceARN?: string;
		Tags?: Array<Tag>;
		ComplianceDetails?: ComplianceDetails;
	}

	/** A list of resource ARNs and the tags (keys and values) that are associated with each. */
	export interface ResourceTagMappingFormProperties {
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagMappingFormGroup() {
		return new FormGroup<ResourceTagMappingFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** The metadata that you apply to Amazon Web Services resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> in the <i>Amazon Web Services General Reference</i>. */
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


	/** Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys. */
	export interface ComplianceDetails {
		NoncompliantKeys?: Array<string>;
		KeysWithNoncompliantValues?: Array<string>;
		ComplianceStatus?: boolean | null;
	}

	/** Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys. */
	export interface ComplianceDetailsFormProperties {
		ComplianceStatus: FormControl<boolean | null | undefined>,
	}
	export function CreateComplianceDetailsFormGroup() {
		return new FormGroup<ComplianceDetailsFormProperties>({
			ComplianceStatus: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetResourcesInput {
		PaginationToken?: string;
		TagFilters?: Array<TagFilter>;
		ResourcesPerPage?: number | null;
		TagsPerPage?: number | null;
		ResourceTypeFilters?: Array<string>;
		IncludeComplianceDetails?: boolean | null;
		ExcludeCompliantResources?: boolean | null;
		ResourceARNList?: Array<string>;
	}
	export interface GetResourcesInputFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
		ResourcesPerPage: FormControl<number | null | undefined>,
		TagsPerPage: FormControl<number | null | undefined>,
		IncludeComplianceDetails: FormControl<boolean | null | undefined>,
		ExcludeCompliantResources: FormControl<boolean | null | undefined>,
	}
	export function CreateGetResourcesInputFormGroup() {
		return new FormGroup<GetResourcesInputFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			ResourcesPerPage: new FormControl<number | null | undefined>(undefined),
			TagsPerPage: new FormControl<number | null | undefined>(undefined),
			IncludeComplianceDetails: new FormControl<boolean | null | undefined>(undefined),
			ExcludeCompliantResources: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of tags (keys and values) that are used to specify the associated resources. */
	export interface TagFilter {
		Key?: string;
		Values?: Array<string>;
	}

	/** A list of tags (keys and values) that are used to specify the associated resources. */
	export interface TagFilterFormProperties {
		Key: FormControl<string | null | undefined>,
	}
	export function CreateTagFilterFormGroup() {
		return new FormGroup<TagFilterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaginationTokenExpiredException {
	}
	export interface PaginationTokenExpiredExceptionFormProperties {
	}
	export function CreatePaginationTokenExpiredExceptionFormGroup() {
		return new FormGroup<PaginationTokenExpiredExceptionFormProperties>({
		});

	}

	export interface GetTagKeysOutput {
		PaginationToken?: string;
		TagKeys?: Array<string>;
	}
	export interface GetTagKeysOutputFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTagKeysOutputFormGroup() {
		return new FormGroup<GetTagKeysOutputFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTagKeysInput {
		PaginationToken?: string;
	}
	export interface GetTagKeysInputFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTagKeysInputFormGroup() {
		return new FormGroup<GetTagKeysInputFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTagValuesOutput {
		PaginationToken?: string;
		TagValues?: Array<string>;
	}
	export interface GetTagValuesOutputFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTagValuesOutputFormGroup() {
		return new FormGroup<GetTagValuesOutputFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTagValuesInput {
		PaginationToken?: string;

		/** Required */
		Key: string;
	}
	export interface GetTagValuesInputFormProperties {
		PaginationToken: FormControl<string | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateGetTagValuesInputFormGroup() {
		return new FormGroup<GetTagValuesInputFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartReportCreationOutput {
	}
	export interface StartReportCreationOutputFormProperties {
	}
	export function CreateStartReportCreationOutputFormGroup() {
		return new FormGroup<StartReportCreationOutputFormProperties>({
		});

	}

	export interface StartReportCreationInput {

		/** Required */
		S3Bucket: string;
	}
	export interface StartReportCreationInputFormProperties {

		/** Required */
		S3Bucket: FormControl<string | null | undefined>,
	}
	export function CreateStartReportCreationInputFormGroup() {
		return new FormGroup<StartReportCreationInputFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface TagResourcesOutput {
		FailedResourcesMap?: FailedResourcesMap;
	}
	export interface TagResourcesOutputFormProperties {
	}
	export function CreateTagResourcesOutputFormGroup() {
		return new FormGroup<TagResourcesOutputFormProperties>({
		});

	}

	export interface FailedResourcesMap {
	}
	export interface FailedResourcesMapFormProperties {
	}
	export function CreateFailedResourcesMapFormGroup() {
		return new FormGroup<FailedResourcesMapFormProperties>({
		});

	}

	export interface TagResourcesInput {

		/** Required */
		ResourceARNList: Array<string>;

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourcesInputFormProperties {
	}
	export function CreateTagResourcesInputFormGroup() {
		return new FormGroup<TagResourcesInputFormProperties>({
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface UntagResourcesOutput {
		FailedResourcesMap?: FailedResourcesMap;
	}
	export interface UntagResourcesOutputFormProperties {
	}
	export function CreateUntagResourcesOutputFormGroup() {
		return new FormGroup<UntagResourcesOutputFormProperties>({
		});

	}

	export interface UntagResourcesInput {

		/** Required */
		ResourceARNList: Array<string>;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourcesInputFormProperties {
	}
	export function CreateUntagResourcesInputFormGroup() {
		return new FormGroup<UntagResourcesInputFormProperties>({
		});

	}

	export enum ErrorCode { InternalServiceException = 0, InvalidParameterException = 1 }


	/** <p>Information about the errors that are returned for each failed resource. This information can include <code>InternalServiceException</code> and <code>InvalidParameterException</code> errors. It can also include any valid error code returned by the Amazon Web Services service that hosts the resource that the ARN key represents.</p> <p>The following are common error codes that you might receive from other Amazon Web Services services:</p> <ul> <li> <p> <b>InternalServiceException</b> – This can mean that the Resource Groups Tagging API didn't receive a response from another Amazon Web Services service. It can also mean that the resource type in the request is not supported by the Resource Groups Tagging API. In these cases, it's safe to retry the request and then call <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p> </li> <li> <p> <b>AccessDeniedException</b> – This can mean that you need permission to call the tagging operations in the Amazon Web Services service that contains the resource. For example, to use the Resource Groups Tagging API to tag a Amazon CloudWatch alarm resource, you need permission to call both <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html"> <code>TagResources</code> </a> <i>and</i> <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html"> <code>TagResource</code> </a> in the CloudWatch API. </p> </li> </ul> <p>For more information on errors that are generated from other Amazon Web Services services, see the documentation for that service. </p> */
	export interface FailureInfo {
		StatusCode?: number | null;
		ErrorCode?: ErrorCode;
		ErrorMessage?: string;
	}

	/** <p>Information about the errors that are returned for each failed resource. This information can include <code>InternalServiceException</code> and <code>InvalidParameterException</code> errors. It can also include any valid error code returned by the Amazon Web Services service that hosts the resource that the ARN key represents.</p> <p>The following are common error codes that you might receive from other Amazon Web Services services:</p> <ul> <li> <p> <b>InternalServiceException</b> – This can mean that the Resource Groups Tagging API didn't receive a response from another Amazon Web Services service. It can also mean that the resource type in the request is not supported by the Resource Groups Tagging API. In these cases, it's safe to retry the request and then call <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p> </li> <li> <p> <b>AccessDeniedException</b> – This can mean that you need permission to call the tagging operations in the Amazon Web Services service that contains the resource. For example, to use the Resource Groups Tagging API to tag a Amazon CloudWatch alarm resource, you need permission to call both <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html"> <code>TagResources</code> </a> <i>and</i> <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html"> <code>TagResource</code> </a> in the CloudWatch API. </p> </li> </ul> <p>For more information on errors that are generated from other Amazon Web Services services, see the documentation for that service. </p> */
	export interface FailureInfoFormProperties {
		StatusCode: FormControl<number | null | undefined>,
		ErrorCode: FormControl<ErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailureInfoFormGroup() {
		return new FormGroup<FailureInfoFormProperties>({
			StatusCode: new FormControl<number | null | undefined>(undefined),
			ErrorCode: new FormControl<ErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Describes the status of the <code>StartReportCreation</code> operation. </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation
		 * @return {DescribeReportCreationOutput} Success
		 */
		DescribeReportCreation(requestBody: DescribeReportCreationInput): Observable<DescribeReportCreationOutput> {
			return this.http.post<DescribeReportCreationOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a table that shows counts of resources that are noncompliant with their tag policies.</p> <p>For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary
		 * @param {string} MaxResults Pagination limit
		 * @param {string} PaginationToken Pagination token
		 * @return {GetComplianceSummaryOutput} Success
		 */
		GetComplianceSummary(MaxResults: string | null | undefined, PaginationToken: string | null | undefined, requestBody: GetComplianceSummaryInput): Observable<GetComplianceSummaryOutput> {
			return this.http.post<GetComplianceSummaryOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all the tagged or previously tagged resources that are located in the specified Amazon Web Services Region for the account.</p> <p>Depending on what information you want returned, you can also specify the following:</p> <ul> <li> <p> <i>Filters</i> that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.</p> </li> <li> <p>Information about compliance with the account's effective tag policy. For more information on tag policies, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>Organizations User Guide.</i> </p> </li> </ul> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources
		 * @param {string} ResourcesPerPage Pagination limit
		 * @param {string} PaginationToken Pagination token
		 * @return {GetResourcesOutput} Success
		 */
		GetResources(ResourcesPerPage: string | null | undefined, PaginationToken: string | null | undefined, requestBody: GetResourcesInput): Observable<GetResourcesOutput> {
			return this.http.post<GetResourcesOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources?ResourcesPerPage=' + (ResourcesPerPage == null ? '' : encodeURIComponent(ResourcesPerPage)) + '&PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all tag keys currently in use in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys
		 * @param {string} PaginationToken Pagination token
		 * @return {GetTagKeysOutput} Success
		 */
		GetTagKeys(PaginationToken: string | null | undefined, requestBody: GetTagKeysInput): Observable<GetTagKeysOutput> {
			return this.http.post<GetTagKeysOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys?PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all tag values for the specified key that are used in the specified Amazon Web Services Region for the calling account.</p> <p>This operation supports pagination, where the response can be sent in multiple pages. You should check the <code>PaginationToken</code> response parameter to determine if there are additional results available to return. Repeat the query, passing the <code>PaginationToken</code> response parameter value as an input to the next request until you recieve a <code>null</code> value. A null value for <code>PaginationToken</code> indicates that there are no more results waiting to be returned.</p>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues
		 * @param {string} PaginationToken Pagination token
		 * @return {GetTagValuesOutput} Success
		 */
		GetTagValues(PaginationToken: string | null | undefined, requestBody: GetTagValuesInput): Observable<GetTagValuesOutput> {
			return this.http.post<GetTagValuesOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues?PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a report that lists all tagged resources in the accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. The report is generated asynchronously.</p> <p>The generated report is saved to the following location:</p> <p> <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code> </p> <p>You can call this operation only from the organization's management account and from the us-east-1 Region.</p>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation
		 * @return {StartReportCreationOutput} Success
		 */
		StartReportCreation(requestBody: StartReportCreationInput): Observable<StartReportCreationOutput> {
			return this.http.post<StartReportCreationOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Applies one or more tags to the specified resources. Note the following:</p> <ul> <li> <p>Not all resources can have tags. For a list of services with resources that support tagging using this operation, see <a href="https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/supported-services.html">Services that support the Resource Groups Tagging API</a>. If the resource doesn't yet support this operation, the resource's service might support tagging using its own API operations. For more information, refer to the documentation for that service.</p> </li> <li> <p>Each resource can have up to 50 tags. For other limits, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>Amazon Web Services General Reference.</i> </p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the Amazon Web Services account.</p> </li> <li> <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see the documentation for each service.</p> </li> </ul> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:TagResources</code> permission required by this operation, you must also have the tagging permission defined by the service that created the resource. For example, to tag an Amazon EC2 instance using the <code>TagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:TagResource</code> </p> </li> <li> <p> <code>ec2:CreateTags</code> </p> </li> </ul>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources
		 * @return {TagResourcesOutput} Success
		 */
		TagResources(requestBody: TagResourcesInput): Observable<TagResourcesOutput> {
			return this.http.post<TagResourcesOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:</p> <ul> <li> <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see the documentation for the service whose resource you want to untag.</p> </li> <li> <p>You can only tag resources that are located in the specified Amazon Web Services Region for the calling Amazon Web Services account.</p> </li> </ul> <p> <b>Minimum permissions</b> </p> <p>In addition to the <code>tag:UntagResources</code> permission required by this operation, you must also have the remove tags permission defined by the service that created the resource. For example, to remove the tags from an Amazon EC2 instance using the <code>UntagResources</code> operation, you must have both of the following permissions:</p> <ul> <li> <p> <code>tag:UntagResource</code> </p> </li> <li> <p> <code>ec2:DeleteTags</code> </p> </li> </ul>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources
		 * @return {UntagResourcesOutput} Success
		 */
		UntagResources(requestBody: UntagResourcesInput): Observable<UntagResourcesOutput> {
			return this.http.post<UntagResourcesOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DescribeReportCreationX_Amz_Target { 'ResourceGroupsTaggingAPI_20170126.DescribeReportCreation' = 0 }

	export enum GetComplianceSummaryX_Amz_Target { 'ResourceGroupsTaggingAPI_20170126.GetComplianceSummary' = 0 }

	export enum GetResourcesX_Amz_Target { 'ResourceGroupsTaggingAPI_20170126.GetResources' = 0 }

	export enum GetTagKeysX_Amz_Target { 'ResourceGroupsTaggingAPI_20170126.GetTagKeys' = 0 }

	export enum GetTagValuesX_Amz_Target { 'ResourceGroupsTaggingAPI_20170126.GetTagValues' = 0 }

	export enum StartReportCreationX_Amz_Target { 'ResourceGroupsTaggingAPI_20170126.StartReportCreation' = 0 }

	export enum TagResourcesX_Amz_Target { 'ResourceGroupsTaggingAPI_20170126.TagResources' = 0 }

	export enum UntagResourcesX_Amz_Target { 'ResourceGroupsTaggingAPI_20170126.UntagResources' = 0 }

}

