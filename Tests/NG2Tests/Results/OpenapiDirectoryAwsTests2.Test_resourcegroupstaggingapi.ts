import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DescribeReportCreationOutput {
		Status?: string | null;
		S3Location?: string | null;
		ErrorMessage?: string | null;
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
		PaginationToken?: string | null;
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
		LastUpdated?: string | null;
		TargetId?: string | null;
		TargetIdType?: SummaryTargetIdType | null;
		Region?: string | null;
		ResourceType?: string | null;
		NonCompliantResources?: number | null;
	}

	/** A count of noncompliant resources. */
	export interface SummaryFormProperties {
		LastUpdated: FormControl<string | null | undefined>,
		TargetId: FormControl<string | null | undefined>,
		TargetIdType: FormControl<SummaryTargetIdType | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		NonCompliantResources: FormControl<number | null | undefined>,
	}
	export function CreateSummaryFormGroup() {
		return new FormGroup<SummaryFormProperties>({
			LastUpdated: new FormControl<string | null | undefined>(undefined),
			TargetId: new FormControl<string | null | undefined>(undefined),
			TargetIdType: new FormControl<SummaryTargetIdType | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			NonCompliantResources: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SummaryTargetIdType { ACCOUNT = 0, OU = 1, ROOT = 2 }

	export interface GetComplianceSummaryInput {
		TargetIdFilters?: Array<string>;
		RegionFilters?: Array<string>;
		ResourceTypeFilters?: Array<string>;
		TagKeyFilters?: Array<string>;
		GroupBy?: Array<GroupByAttribute>;
		MaxResults?: number | null;
		PaginationToken?: string | null;
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
		PaginationToken?: string | null;
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
		ResourceARN?: string | null;
		Tags?: Array<Tag>;

		/** Information that shows whether a resource is compliant with the effective tag policy, including details on any noncompliant tag keys. */
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


	/** The metadata that you apply to AWS resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the <i>AWS General Reference</i>. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	/** The metadata that you apply to AWS resources to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the <i>AWS General Reference</i>. */
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
		PaginationToken?: string | null;
		TagFilters?: Array<TagFilter>;
		ResourcesPerPage?: number | null;
		TagsPerPage?: number | null;
		ResourceTypeFilters?: Array<string>;
		IncludeComplianceDetails?: boolean | null;
		ExcludeCompliantResources?: boolean | null;
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
		Key?: string | null;
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
		PaginationToken?: string | null;
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
		PaginationToken?: string | null;
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
		PaginationToken?: string | null;
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
		PaginationToken?: string | null;
		Key: string;
	}
	export interface GetTagValuesInputFormProperties {
		PaginationToken: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
	}
	export function CreateGetTagValuesInputFormGroup() {
		return new FormGroup<GetTagValuesInputFormProperties>({
			PaginationToken: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
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
		S3Bucket: string;
	}
	export interface StartReportCreationInputFormProperties {
		S3Bucket: FormControl<string | null | undefined>,
	}
	export function CreateStartReportCreationInputFormGroup() {
		return new FormGroup<StartReportCreationInputFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined),
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
		ResourceARNList: Array<string>;
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
		ResourceARNList: Array<string>;
		TagKeys: Array<string>;
	}
	export interface UntagResourcesInputFormProperties {
	}
	export function CreateUntagResourcesInputFormGroup() {
		return new FormGroup<UntagResourcesInputFormProperties>({
		});

	}

	export enum ErrorCode { InternalServiceException = 0, InvalidParameterException = 1 }


	/** <p>Information about the errors that are returned for each failed resource. This information can include <code>InternalServiceException</code> and <code>InvalidParameterException</code> errors. It can also include any valid error code returned by the AWS service that hosts the resource that the ARN key represents.</p> <p>The following are common error codes that you might receive from other AWS services:</p> <ul> <li> <p> <b>InternalServiceException</b> – This can mean that the Resource Groups Tagging API didn't receive a response from another AWS service. It can also mean the the resource type in the request is not supported by the Resource Groups Tagging API. In these cases, it's safe to retry the request and then call <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p> </li> <li> <p> <b>AccessDeniedException</b> – This can mean that you need permission to calling tagging operations in the AWS service that contains the resource. For example, to use the Resource Groups Tagging API to tag a CloudWatch alarm resource, you need permission to call <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html"> <code>TagResources</code> </a> <i>and</i> <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html"> <code>TagResource</code> </a> in the CloudWatch API. </p> </li> </ul> <p>For more information on errors that are generated from other AWS services, see the documentation for that service. </p> */
	export interface FailureInfo {
		StatusCode?: number | null;
		ErrorCode?: ErrorCode | null;
		ErrorMessage?: string | null;
	}

	/** <p>Information about the errors that are returned for each failed resource. This information can include <code>InternalServiceException</code> and <code>InvalidParameterException</code> errors. It can also include any valid error code returned by the AWS service that hosts the resource that the ARN key represents.</p> <p>The following are common error codes that you might receive from other AWS services:</p> <ul> <li> <p> <b>InternalServiceException</b> – This can mean that the Resource Groups Tagging API didn't receive a response from another AWS service. It can also mean the the resource type in the request is not supported by the Resource Groups Tagging API. In these cases, it's safe to retry the request and then call <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_GetResources.html">GetResources</a> to verify the changes.</p> </li> <li> <p> <b>AccessDeniedException</b> – This can mean that you need permission to calling tagging operations in the AWS service that contains the resource. For example, to use the Resource Groups Tagging API to tag a CloudWatch alarm resource, you need permission to call <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/API_TagResources.html"> <code>TagResources</code> </a> <i>and</i> <a href="http://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html"> <code>TagResource</code> </a> in the CloudWatch API. </p> </li> </ul> <p>For more information on errors that are generated from other AWS services, see the documentation for that service. </p> */
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

	export enum TargetIdType { ACCOUNT = 0, OU = 1, ROOT = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Describes the status of the <code>StartReportCreation</code> operation. </p> <p>You can call this operation only from the organization's master account and from the us-east-1 Region.</p>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation
		 * @return {DescribeReportCreationOutput} Success
		 */
		DescribeReportCreation(requestBody: DescribeReportCreationInput): Observable<DescribeReportCreationOutput> {
			return this.http.post<DescribeReportCreationOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.DescribeReportCreation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a table that shows counts of resources that are noncompliant with their tag policies.</p> <p>For more information on tag policies, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>AWS Organizations User Guide.</i> </p> <p>You can call this operation only from the organization's master account and from the us-east-1 Region.</p>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary
		 * @param {string} MaxResults Pagination limit
		 * @param {string} PaginationToken Pagination token
		 * @return {GetComplianceSummaryOutput} Success
		 */
		GetComplianceSummary(MaxResults: string | null | undefined, PaginationToken: string | null | undefined, requestBody: GetComplianceSummaryInput): Observable<GetComplianceSummaryOutput> {
			return this.http.post<GetComplianceSummaryOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetComplianceSummary?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all the tagged or previously tagged resources that are located in the specified Region for the AWS account.</p> <p>Depending on what information you want returned, you can also specify the following:</p> <ul> <li> <p> <i>Filters</i> that specify what tags and resource types you want returned. The response includes all tags that are associated with the requested resources.</p> </li> <li> <p>Information about compliance with the account's effective tag policy. For more information on tag policies, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html">Tag Policies</a> in the <i>AWS Organizations User Guide.</i> </p> </li> </ul> <note> <p>You can check the <code>PaginationToken</code> response parameter to determine if a query is complete. Queries occasionally return fewer results on a page than allowed. The <code>PaginationToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display. </p> </note>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources
		 * @param {string} ResourcesPerPage Pagination limit
		 * @param {string} PaginationToken Pagination token
		 * @return {GetResourcesOutput} Success
		 */
		GetResources(ResourcesPerPage: string | null | undefined, PaginationToken: string | null | undefined, requestBody: GetResourcesInput): Observable<GetResourcesOutput> {
			return this.http.post<GetResourcesOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetResources?ResourcesPerPage=' + (ResourcesPerPage == null ? '' : encodeURIComponent(ResourcesPerPage)) + '&PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all tag keys in the specified Region for the AWS account.
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys
		 * @param {string} PaginationToken Pagination token
		 * @return {GetTagKeysOutput} Success
		 */
		GetTagKeys(PaginationToken: string | null | undefined, requestBody: GetTagKeysInput): Observable<GetTagKeysOutput> {
			return this.http.post<GetTagKeysOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagKeys?PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all tag values for the specified key in the specified Region for the AWS account.
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues
		 * @param {string} PaginationToken Pagination token
		 * @return {GetTagValuesOutput} Success
		 */
		GetTagValues(PaginationToken: string | null | undefined, requestBody: GetTagValuesInput): Observable<GetTagValuesOutput> {
			return this.http.post<GetTagValuesOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.GetTagValues?PaginationToken=' + (PaginationToken == null ? '' : encodeURIComponent(PaginationToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a report that lists all tagged resources in accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. </p> <p>The generated report is saved to the following location:</p> <p> <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code> </p> <p>You can call this operation only from the organization's master account and from the us-east-1 Region.</p>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation
		 * @return {StartReportCreationOutput} Success
		 */
		StartReportCreation(requestBody: StartReportCreationInput): Observable<StartReportCreationOutput> {
			return this.http.post<StartReportCreationOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.StartReportCreation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Applies one or more tags to the specified resources. Note the following:</p> <ul> <li> <p>Not all resources can have tags. For a list of services that support tagging, see <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html">this list</a>.</p> </li> <li> <p>Each resource can have up to 50 tags. For other limits, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag Naming and Usage Conventions</a> in the <i>AWS General Reference.</i> </p> </li> <li> <p>You can only tag resources that are located in the specified Region for the AWS account.</p> </li> <li> <p>To add tags to a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for adding tags. For more information, see <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html">this list</a>.</p> </li> </ul>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources
		 * @return {TagResourcesOutput} Success
		 */
		TagResources(requestBody: TagResourcesInput): Observable<TagResourcesOutput> {
			return this.http.post<TagResourcesOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.TagResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified tags from the specified resources. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from a resource that were already removed. Note the following:</p> <ul> <li> <p>To remove tags from a resource, you need the necessary permissions for the service that the resource belongs to as well as permissions for removing tags. For more information, see <a href="http://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html">this list</a>.</p> </li> <li> <p>You can only tag resources that are located in the specified Region for the AWS account.</p> </li> </ul>
		 * Post #X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources
		 * @return {UntagResourcesOutput} Success
		 */
		UntagResources(requestBody: UntagResourcesInput): Observable<UntagResourcesOutput> {
			return this.http.post<UntagResourcesOutput>(this.baseUri + '#X-Amz-Target=ResourceGroupsTaggingAPI_20170126.UntagResources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DescribeReportCreationX_Amz_Target { ResourceGroupsTaggingAPI_20170126_DescribeReportCreation = 0 }

	export enum GetComplianceSummaryX_Amz_Target { ResourceGroupsTaggingAPI_20170126_GetComplianceSummary = 0 }

	export enum GetResourcesX_Amz_Target { ResourceGroupsTaggingAPI_20170126_GetResources = 0 }

	export enum GetTagKeysX_Amz_Target { ResourceGroupsTaggingAPI_20170126_GetTagKeys = 0 }

	export enum GetTagValuesX_Amz_Target { ResourceGroupsTaggingAPI_20170126_GetTagValues = 0 }

	export enum StartReportCreationX_Amz_Target { ResourceGroupsTaggingAPI_20170126_StartReportCreation = 0 }

	export enum TagResourcesX_Amz_Target { ResourceGroupsTaggingAPI_20170126_TagResources = 0 }

	export enum UntagResourcesX_Amz_Target { ResourceGroupsTaggingAPI_20170126_UntagResources = 0 }

}

