import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateContainerOutput {

		/** Required */
		Container: Container;
	}
	export interface CreateContainerOutputFormProperties {
	}
	export function CreateCreateContainerOutputFormGroup() {
		return new FormGroup<CreateContainerOutputFormProperties>({
		});

	}


	/** This section describes operations that you can perform on an AWS Elemental MediaStore container. */
	export interface Container {
		Endpoint?: string;
		CreationTime?: Date;
		ARN?: string;
		Name?: string;
		Status?: ContainerStatus;
		AccessLoggingEnabled?: boolean | null;
	}

	/** This section describes operations that you can perform on an AWS Elemental MediaStore container. */
	export interface ContainerFormProperties {
		Endpoint: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<ContainerStatus | null | undefined>,
		AccessLoggingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			Endpoint: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ContainerStatus | null | undefined>(undefined),
			AccessLoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ContainerStatus { ACTIVE = 0, CREATING = 1, DELETING = 2 }

	export interface CreateContainerInput {

		/** Required */
		ContainerName: string;
		Tags?: Array<Tag>;
	}
	export interface CreateContainerInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateCreateContainerInputFormGroup() {
		return new FormGroup<CreateContainerInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A collection of tags associated with a container. Each tag consists of a key:value pair, which can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** A collection of tags associated with a container. Each tag consists of a key:value pair, which can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainerInUseException {
	}
	export interface ContainerInUseExceptionFormProperties {
	}
	export function CreateContainerInUseExceptionFormGroup() {
		return new FormGroup<ContainerInUseExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}

	export interface DeleteContainerOutput {
	}
	export interface DeleteContainerOutputFormProperties {
	}
	export function CreateDeleteContainerOutputFormGroup() {
		return new FormGroup<DeleteContainerOutputFormProperties>({
		});

	}

	export interface DeleteContainerInput {

		/** Required */
		ContainerName: string;
	}
	export interface DeleteContainerInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteContainerInputFormGroup() {
		return new FormGroup<DeleteContainerInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ContainerNotFoundException {
	}
	export interface ContainerNotFoundExceptionFormProperties {
	}
	export function CreateContainerNotFoundExceptionFormGroup() {
		return new FormGroup<ContainerNotFoundExceptionFormProperties>({
		});

	}

	export interface DeleteContainerPolicyOutput {
	}
	export interface DeleteContainerPolicyOutputFormProperties {
	}
	export function CreateDeleteContainerPolicyOutputFormGroup() {
		return new FormGroup<DeleteContainerPolicyOutputFormProperties>({
		});

	}

	export interface DeleteContainerPolicyInput {

		/** Required */
		ContainerName: string;
	}
	export interface DeleteContainerPolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteContainerPolicyInputFormGroup() {
		return new FormGroup<DeleteContainerPolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PolicyNotFoundException {
	}
	export interface PolicyNotFoundExceptionFormProperties {
	}
	export function CreatePolicyNotFoundExceptionFormGroup() {
		return new FormGroup<PolicyNotFoundExceptionFormProperties>({
		});

	}

	export interface DeleteCorsPolicyOutput {
	}
	export interface DeleteCorsPolicyOutputFormProperties {
	}
	export function CreateDeleteCorsPolicyOutputFormGroup() {
		return new FormGroup<DeleteCorsPolicyOutputFormProperties>({
		});

	}

	export interface DeleteCorsPolicyInput {

		/** Required */
		ContainerName: string;
	}
	export interface DeleteCorsPolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCorsPolicyInputFormGroup() {
		return new FormGroup<DeleteCorsPolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CorsPolicyNotFoundException {
	}
	export interface CorsPolicyNotFoundExceptionFormProperties {
	}
	export function CreateCorsPolicyNotFoundExceptionFormGroup() {
		return new FormGroup<CorsPolicyNotFoundExceptionFormProperties>({
		});

	}

	export interface DeleteLifecyclePolicyOutput {
	}
	export interface DeleteLifecyclePolicyOutputFormProperties {
	}
	export function CreateDeleteLifecyclePolicyOutputFormGroup() {
		return new FormGroup<DeleteLifecyclePolicyOutputFormProperties>({
		});

	}

	export interface DeleteLifecyclePolicyInput {

		/** Required */
		ContainerName: string;
	}
	export interface DeleteLifecyclePolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLifecyclePolicyInputFormGroup() {
		return new FormGroup<DeleteLifecyclePolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMetricPolicyOutput {
	}
	export interface DeleteMetricPolicyOutputFormProperties {
	}
	export function CreateDeleteMetricPolicyOutputFormGroup() {
		return new FormGroup<DeleteMetricPolicyOutputFormProperties>({
		});

	}

	export interface DeleteMetricPolicyInput {

		/** Required */
		ContainerName: string;
	}
	export interface DeleteMetricPolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMetricPolicyInputFormGroup() {
		return new FormGroup<DeleteMetricPolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeContainerOutput {
		Container?: Container;
	}
	export interface DescribeContainerOutputFormProperties {
	}
	export function CreateDescribeContainerOutputFormGroup() {
		return new FormGroup<DescribeContainerOutputFormProperties>({
		});

	}

	export interface DescribeContainerInput {
		ContainerName?: string;
	}
	export interface DescribeContainerInputFormProperties {
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeContainerInputFormGroup() {
		return new FormGroup<DescribeContainerInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetContainerPolicyOutput {

		/** Required */
		Policy: string;
	}
	export interface GetContainerPolicyOutputFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetContainerPolicyOutputFormGroup() {
		return new FormGroup<GetContainerPolicyOutputFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetContainerPolicyInput {

		/** Required */
		ContainerName: string;
	}
	export interface GetContainerPolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateGetContainerPolicyInputFormGroup() {
		return new FormGroup<GetContainerPolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCorsPolicyOutput {

		/** Required */
		CorsPolicy: Array<CorsRule>;
	}
	export interface GetCorsPolicyOutputFormProperties {
	}
	export function CreateGetCorsPolicyOutputFormGroup() {
		return new FormGroup<GetCorsPolicyOutputFormProperties>({
		});

	}


	/** A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed. */
	export interface CorsRule {

		/** Required */
		AllowedOrigins: Array<string>;
		AllowedMethods?: Array<MethodName>;

		/** Required */
		AllowedHeaders: Array<string>;
		MaxAgeSeconds?: number | null;
		ExposeHeaders?: Array<string>;
	}

	/** A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed. */
	export interface CorsRuleFormProperties {
		MaxAgeSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCorsRuleFormGroup() {
		return new FormGroup<CorsRuleFormProperties>({
			MaxAgeSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MethodName { PUT = 0, GET = 1, DELETE = 2, HEAD = 3 }

	export interface GetCorsPolicyInput {

		/** Required */
		ContainerName: string;
	}
	export interface GetCorsPolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateGetCorsPolicyInputFormGroup() {
		return new FormGroup<GetCorsPolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLifecyclePolicyOutput {

		/** Required */
		LifecyclePolicy: string;
	}
	export interface GetLifecyclePolicyOutputFormProperties {

		/** Required */
		LifecyclePolicy: FormControl<string | null | undefined>,
	}
	export function CreateGetLifecyclePolicyOutputFormGroup() {
		return new FormGroup<GetLifecyclePolicyOutputFormProperties>({
			LifecyclePolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLifecyclePolicyInput {

		/** Required */
		ContainerName: string;
	}
	export interface GetLifecyclePolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateGetLifecyclePolicyInputFormGroup() {
		return new FormGroup<GetLifecyclePolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMetricPolicyOutput {

		/** Required */
		MetricPolicy: MetricPolicy;
	}
	export interface GetMetricPolicyOutputFormProperties {
	}
	export function CreateGetMetricPolicyOutputFormGroup() {
		return new FormGroup<GetMetricPolicyOutputFormProperties>({
		});

	}


	/** <p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p> <p>To view examples of how to construct a metric policy for your use case, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html">Example Metric Policies</a>.</p> */
	export interface MetricPolicy {

		/** Required */
		ContainerLevelMetrics: ContainerLevelMetrics;
		MetricPolicyRules?: Array<MetricPolicyRule>;
	}

	/** <p>The metric policy that is associated with the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. In the policy, you must indicate whether you want MediaStore to send container-level metrics. You can also include rules to define groups of objects that you want MediaStore to send object-level metrics for.</p> <p>To view examples of how to construct a metric policy for your use case, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-metric-examples.html">Example Metric Policies</a>.</p> */
	export interface MetricPolicyFormProperties {

		/** Required */
		ContainerLevelMetrics: FormControl<ContainerLevelMetrics | null | undefined>,
	}
	export function CreateMetricPolicyFormGroup() {
		return new FormGroup<MetricPolicyFormProperties>({
			ContainerLevelMetrics: new FormControl<ContainerLevelMetrics | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContainerLevelMetrics { ENABLED = 0, DISABLED = 1 }


	/** A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also <a href="https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas">request a quota increase</a> to allow up to 300 rules per policy. */
	export interface MetricPolicyRule {

		/** Required */
		ObjectGroup: string;

		/** Required */
		ObjectGroupName: string;
	}

	/** A setting that enables metrics at the object level. Each rule contains an object group and an object group name. If the policy includes the MetricPolicyRules parameter, you must include at least one rule. Each metric policy can include up to five rules by default. You can also <a href="https://console.aws.amazon.com/servicequotas/home?region=us-east-1#!/services/mediastore/quotas">request a quota increase</a> to allow up to 300 rules per policy. */
	export interface MetricPolicyRuleFormProperties {

		/** Required */
		ObjectGroup: FormControl<string | null | undefined>,

		/** Required */
		ObjectGroupName: FormControl<string | null | undefined>,
	}
	export function CreateMetricPolicyRuleFormGroup() {
		return new FormGroup<MetricPolicyRuleFormProperties>({
			ObjectGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMetricPolicyInput {

		/** Required */
		ContainerName: string;
	}
	export interface GetMetricPolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateGetMetricPolicyInputFormGroup() {
		return new FormGroup<GetMetricPolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListContainersOutput {

		/** Required */
		Containers: Array<Container>;
		NextToken?: string;
	}
	export interface ListContainersOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListContainersOutputFormGroup() {
		return new FormGroup<ListContainersOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListContainersInput {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListContainersInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListContainersInputFormGroup() {
		return new FormGroup<ListContainersInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {

		/** Required */
		Resource: string;
	}
	export interface ListTagsForResourceInputFormProperties {

		/** Required */
		Resource: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			Resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutContainerPolicyOutput {
	}
	export interface PutContainerPolicyOutputFormProperties {
	}
	export function CreatePutContainerPolicyOutputFormGroup() {
		return new FormGroup<PutContainerPolicyOutputFormProperties>({
		});

	}

	export interface PutContainerPolicyInput {

		/** Required */
		ContainerName: string;

		/** Required */
		Policy: string;
	}
	export interface PutContainerPolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutContainerPolicyInputFormGroup() {
		return new FormGroup<PutContainerPolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutCorsPolicyOutput {
	}
	export interface PutCorsPolicyOutputFormProperties {
	}
	export function CreatePutCorsPolicyOutputFormGroup() {
		return new FormGroup<PutCorsPolicyOutputFormProperties>({
		});

	}

	export interface PutCorsPolicyInput {

		/** Required */
		ContainerName: string;

		/** Required */
		CorsPolicy: Array<CorsRule>;
	}
	export interface PutCorsPolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreatePutCorsPolicyInputFormGroup() {
		return new FormGroup<PutCorsPolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutLifecyclePolicyOutput {
	}
	export interface PutLifecyclePolicyOutputFormProperties {
	}
	export function CreatePutLifecyclePolicyOutputFormGroup() {
		return new FormGroup<PutLifecyclePolicyOutputFormProperties>({
		});

	}

	export interface PutLifecyclePolicyInput {

		/** Required */
		ContainerName: string;

		/** Required */
		LifecyclePolicy: string;
	}
	export interface PutLifecyclePolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,

		/** Required */
		LifecyclePolicy: FormControl<string | null | undefined>,
	}
	export function CreatePutLifecyclePolicyInputFormGroup() {
		return new FormGroup<PutLifecyclePolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LifecyclePolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutMetricPolicyOutput {
	}
	export interface PutMetricPolicyOutputFormProperties {
	}
	export function CreatePutMetricPolicyOutputFormGroup() {
		return new FormGroup<PutMetricPolicyOutputFormProperties>({
		});

	}

	export interface PutMetricPolicyInput {

		/** Required */
		ContainerName: string;

		/** Required */
		MetricPolicy: MetricPolicy;
	}
	export interface PutMetricPolicyInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreatePutMetricPolicyInputFormGroup() {
		return new FormGroup<PutMetricPolicyInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartAccessLoggingOutput {
	}
	export interface StartAccessLoggingOutputFormProperties {
	}
	export function CreateStartAccessLoggingOutputFormGroup() {
		return new FormGroup<StartAccessLoggingOutputFormProperties>({
		});

	}

	export interface StartAccessLoggingInput {

		/** Required */
		ContainerName: string;
	}
	export interface StartAccessLoggingInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateStartAccessLoggingInputFormGroup() {
		return new FormGroup<StartAccessLoggingInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopAccessLoggingOutput {
	}
	export interface StopAccessLoggingOutputFormProperties {
	}
	export function CreateStopAccessLoggingOutputFormGroup() {
		return new FormGroup<StopAccessLoggingOutputFormProperties>({
		});

	}

	export interface StopAccessLoggingInput {

		/** Required */
		ContainerName: string;
	}
	export interface StopAccessLoggingInputFormProperties {

		/** Required */
		ContainerName: FormControl<string | null | undefined>,
	}
	export function CreateStopAccessLoggingInputFormGroup() {
		return new FormGroup<StopAccessLoggingInputFormProperties>({
			ContainerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface TagResourceInput {

		/** Required */
		Resource: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		Resource: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			Resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceInput {

		/** Required */
		Resource: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		Resource: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			Resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a storage container to hold objects. A container is similar to a bucket in the Amazon S3 service.
		 * Post #X-Amz-Target=MediaStore_20170901.CreateContainer
		 * @return {CreateContainerOutput} Success
		 */
		CreateContainer(requestBody: CreateContainerInput): Observable<CreateContainerOutput> {
			return this.http.post<CreateContainerOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.CreateContainer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified container. Before you make a <code>DeleteContainer</code> request, delete any objects in the container or in any folders in the container. You can delete only empty containers.
		 * Post #X-Amz-Target=MediaStore_20170901.DeleteContainer
		 * @return {DeleteContainerOutput} Success
		 */
		DeleteContainer(requestBody: DeleteContainerInput): Observable<DeleteContainerOutput> {
			return this.http.post<DeleteContainerOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.DeleteContainer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the access policy that is associated with the specified container.
		 * Post #X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy
		 * @return {DeleteContainerPolicyOutput} Success
		 */
		DeleteContainerPolicy(requestBody: DeleteContainerPolicyInput): Observable<DeleteContainerPolicyOutput> {
			return this.http.post<DeleteContainerPolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.DeleteContainerPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:DeleteCorsPolicy</code> action. The container owner has this permission by default and can grant this permission to others.</p>
		 * Post #X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy
		 * @return {DeleteCorsPolicyOutput} Success
		 */
		DeleteCorsPolicy(requestBody: DeleteCorsPolicyInput): Observable<DeleteCorsPolicyOutput> {
			return this.http.post<DeleteCorsPolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.DeleteCorsPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.
		 * Post #X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy
		 * @return {DeleteLifecyclePolicyOutput} Success
		 */
		DeleteLifecyclePolicy(requestBody: DeleteLifecyclePolicyInput): Observable<DeleteLifecyclePolicyOutput> {
			return this.http.post<DeleteLifecyclePolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.DeleteLifecyclePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the metric policy that is associated with the specified container. If there is no metric policy associated with the container, MediaStore doesn't send metrics to CloudWatch.
		 * Post #X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy
		 * @return {DeleteMetricPolicyOutput} Success
		 */
		DeleteMetricPolicy(requestBody: DeleteMetricPolicyInput): Observable<DeleteMetricPolicyOutput> {
			return this.http.post<DeleteMetricPolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.DeleteMetricPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the properties of the requested container. This request is commonly used to retrieve the endpoint of a container. An endpoint is a value assigned by the service when a new container is created. A container's endpoint does not change after it has been assigned. The <code>DescribeContainer</code> request returns a single <code>Container</code> object based on <code>ContainerName</code>. To return all <code>Container</code> objects that are associated with a specified AWS account, use <a>ListContainers</a>.
		 * Post #X-Amz-Target=MediaStore_20170901.DescribeContainer
		 * @return {DescribeContainerOutput} Success
		 */
		DescribeContainer(requestBody: DescribeContainerInput): Observable<DescribeContainerOutput> {
			return this.http.post<DescribeContainerOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.DescribeContainer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the access policy for the specified container. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.
		 * Post #X-Amz-Target=MediaStore_20170901.GetContainerPolicy
		 * @return {GetContainerPolicyOutput} Success
		 */
		GetContainerPolicy(requestBody: GetContainerPolicyInput): Observable<GetContainerPolicyOutput> {
			return this.http.post<GetContainerPolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.GetContainerPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the cross-origin resource sharing (CORS) configuration information that is set for the container.</p> <p>To use this operation, you must have permission to perform the <code>MediaStore:GetCorsPolicy</code> action. By default, the container owner has this permission and can grant it to others.</p>
		 * Post #X-Amz-Target=MediaStore_20170901.GetCorsPolicy
		 * @return {GetCorsPolicyOutput} Success
		 */
		GetCorsPolicy(requestBody: GetCorsPolicyInput): Observable<GetCorsPolicyOutput> {
			return this.http.post<GetCorsPolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.GetCorsPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the object lifecycle policy that is assigned to a container.
		 * Post #X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy
		 * @return {GetLifecyclePolicyOutput} Success
		 */
		GetLifecyclePolicy(requestBody: GetLifecyclePolicyInput): Observable<GetLifecyclePolicyOutput> {
			return this.http.post<GetLifecyclePolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.GetLifecyclePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the metric policy for the specified container.
		 * Post #X-Amz-Target=MediaStore_20170901.GetMetricPolicy
		 * @return {GetMetricPolicyOutput} Success
		 */
		GetMetricPolicy(requestBody: GetMetricPolicyInput): Observable<GetMetricPolicyOutput> {
			return this.http.post<GetMetricPolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.GetMetricPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the properties of all containers in AWS Elemental MediaStore. </p> <p>You can query to receive all the containers in one response. Or you can include the <code>MaxResults</code> parameter to receive a limited number of containers in each response. In this case, the response includes a token. To get the next set of containers, send the command again, this time with the <code>NextToken</code> parameter (with the returned token as its value). The next set of responses appears, with a token if there are still more containers to receive. </p> <p>See also <a>DescribeContainer</a>, which gets the properties of one container. </p>
		 * Post #X-Amz-Target=MediaStore_20170901.ListContainers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListContainersOutput} Success
		 */
		ListContainers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListContainersInput): Observable<ListContainersOutput> {
			return this.http.post<ListContainersOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.ListContainers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the tags assigned to the specified container.
		 * Post #X-Amz-Target=MediaStore_20170901.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an access policy for the specified container to restrict the users and clients that can access it. For information about the data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User Guide</a>.</p> <p>For this release of the REST API, you can create only one policy for a container. If you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing policy. </p>
		 * Post #X-Amz-Target=MediaStore_20170901.PutContainerPolicy
		 * @return {PutContainerPolicyOutput} Success
		 */
		PutContainerPolicy(requestBody: PutContainerPolicyInput): Observable<PutContainerPolicyOutput> {
			return this.http.post<PutContainerPolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.PutContainerPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that the container can service cross-origin requests. For example, you might want to enable a request whose origin is http://www.example.com to access your AWS Elemental MediaStore container at my.example.container.com by using the browser's XMLHttpRequest capability.</p> <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS policy, you configure rules that identify origins and the HTTP methods that can be executed on your container. The policy can contain up to 398,000 characters. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.</p> <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
		 * Post #X-Amz-Target=MediaStore_20170901.PutCorsPolicy
		 * @return {PutCorsPolicyOutput} Success
		 */
		PutCorsPolicy(requestBody: PutCorsPolicyInput): Observable<PutCorsPolicyOutput> {
			return this.http.post<PutCorsPolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.PutCorsPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Writes an object lifecycle policy to a container. If the container already has an object lifecycle policy, the service replaces the existing policy with the new policy. It takes up to 20 minutes for the change to take effect.</p> <p>For information about how to construct an object lifecycle policy, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/policies-object-lifecycle-components.html">Components of an Object Lifecycle Policy</a>.</p>
		 * Post #X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy
		 * @return {PutLifecyclePolicyOutput} Success
		 */
		PutLifecyclePolicy(requestBody: PutLifecyclePolicyInput): Observable<PutLifecyclePolicyOutput> {
			return this.http.post<PutLifecyclePolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.PutLifecyclePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The metric policy that you want to add to the container. A metric policy allows AWS Elemental MediaStore to send metrics to Amazon CloudWatch. It takes up to 20 minutes for the new policy to take effect.
		 * Post #X-Amz-Target=MediaStore_20170901.PutMetricPolicy
		 * @return {PutMetricPolicyOutput} Success
		 */
		PutMetricPolicy(requestBody: PutMetricPolicyInput): Observable<PutMetricPolicyOutput> {
			return this.http.post<PutMetricPolicyOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.PutMetricPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts access logging on the specified container. When you enable access logging on a container, MediaStore delivers access logs for objects stored in that container to Amazon CloudWatch Logs.
		 * Post #X-Amz-Target=MediaStore_20170901.StartAccessLogging
		 * @return {StartAccessLoggingOutput} Success
		 */
		StartAccessLogging(requestBody: StartAccessLoggingInput): Observable<StartAccessLoggingOutput> {
			return this.http.post<StartAccessLoggingOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.StartAccessLogging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops access logging on the specified container. When you stop access logging on a container, MediaStore stops sending access logs to Amazon CloudWatch Logs. These access logs are not saved and are not retrievable.
		 * Post #X-Amz-Target=MediaStore_20170901.StopAccessLogging
		 * @return {StopAccessLoggingOutput} Success
		 */
		StopAccessLogging(requestBody: StopAccessLoggingInput): Observable<StopAccessLoggingOutput> {
			return this.http.post<StopAccessLoggingOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.StopAccessLogging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds tags to the specified AWS Elemental MediaStore container. Tags are key:value pairs that you can associate with AWS resources. For example, the tag key might be "customer" and the tag value might be "companyA." You can specify one or more tags to add to each container. You can add up to 50 tags to each container. For more information about tagging, including naming and usage conventions, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/tagging.html">Tagging Resources in MediaStore</a>.
		 * Post #X-Amz-Target=MediaStore_20170901.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from the specified container. You can specify one or more tags to remove.
		 * Post #X-Amz-Target=MediaStore_20170901.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=MediaStore_20170901.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateContainerX_Amz_Target { 'MediaStore_20170901.CreateContainer' = 0 }

	export enum DeleteContainerX_Amz_Target { 'MediaStore_20170901.DeleteContainer' = 0 }

	export enum DeleteContainerPolicyX_Amz_Target { 'MediaStore_20170901.DeleteContainerPolicy' = 0 }

	export enum DeleteCorsPolicyX_Amz_Target { 'MediaStore_20170901.DeleteCorsPolicy' = 0 }

	export enum DeleteLifecyclePolicyX_Amz_Target { 'MediaStore_20170901.DeleteLifecyclePolicy' = 0 }

	export enum DeleteMetricPolicyX_Amz_Target { 'MediaStore_20170901.DeleteMetricPolicy' = 0 }

	export enum DescribeContainerX_Amz_Target { 'MediaStore_20170901.DescribeContainer' = 0 }

	export enum GetContainerPolicyX_Amz_Target { 'MediaStore_20170901.GetContainerPolicy' = 0 }

	export enum GetCorsPolicyX_Amz_Target { 'MediaStore_20170901.GetCorsPolicy' = 0 }

	export enum GetLifecyclePolicyX_Amz_Target { 'MediaStore_20170901.GetLifecyclePolicy' = 0 }

	export enum GetMetricPolicyX_Amz_Target { 'MediaStore_20170901.GetMetricPolicy' = 0 }

	export enum ListContainersX_Amz_Target { 'MediaStore_20170901.ListContainers' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'MediaStore_20170901.ListTagsForResource' = 0 }

	export enum PutContainerPolicyX_Amz_Target { 'MediaStore_20170901.PutContainerPolicy' = 0 }

	export enum PutCorsPolicyX_Amz_Target { 'MediaStore_20170901.PutCorsPolicy' = 0 }

	export enum PutLifecyclePolicyX_Amz_Target { 'MediaStore_20170901.PutLifecyclePolicy' = 0 }

	export enum PutMetricPolicyX_Amz_Target { 'MediaStore_20170901.PutMetricPolicy' = 0 }

	export enum StartAccessLoggingX_Amz_Target { 'MediaStore_20170901.StartAccessLogging' = 0 }

	export enum StopAccessLoggingX_Amz_Target { 'MediaStore_20170901.StopAccessLogging' = 0 }

	export enum TagResourceX_Amz_Target { 'MediaStore_20170901.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'MediaStore_20170901.UntagResource' = 0 }

}

