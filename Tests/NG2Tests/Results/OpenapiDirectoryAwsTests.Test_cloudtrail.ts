import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface AddTagsResponse {
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface AddTagsResponseFormProperties {
	}
	export function CreateAddTagsResponseFormGroup() {
		return new FormGroup<AddTagsResponseFormProperties>({
		});

	}


	/** Specifies the tags to add to a trail. */
	export interface AddTagsRequest {

		/** Required */
		ResourceId: string;

		/** A list of tags. */
		TagsList?: Array<Tag>;
	}

	/** Specifies the tags to add to a trail. */
	export interface AddTagsRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsRequestFormGroup() {
		return new FormGroup<AddTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A custom key-value pair associated with a resource such as a CloudTrail trail. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string | null;
	}

	/** A custom key-value pair associated with a resource such as a CloudTrail trail. */
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface CloudTrailARNInvalidException {
	}
	export interface CloudTrailARNInvalidExceptionFormProperties {
	}
	export function CreateCloudTrailARNInvalidExceptionFormGroup() {
		return new FormGroup<CloudTrailARNInvalidExceptionFormProperties>({
		});

	}

	export interface ResourceTypeNotSupportedException {
	}
	export interface ResourceTypeNotSupportedExceptionFormProperties {
	}
	export function CreateResourceTypeNotSupportedExceptionFormGroup() {
		return new FormGroup<ResourceTypeNotSupportedExceptionFormProperties>({
		});

	}

	export interface TagsLimitExceededException {
	}
	export interface TagsLimitExceededExceptionFormProperties {
	}
	export function CreateTagsLimitExceededExceptionFormGroup() {
		return new FormGroup<TagsLimitExceededExceptionFormProperties>({
		});

	}

	export interface InvalidTrailNameException {
	}
	export interface InvalidTrailNameExceptionFormProperties {
	}
	export function CreateInvalidTrailNameExceptionFormGroup() {
		return new FormGroup<InvalidTrailNameExceptionFormProperties>({
		});

	}

	export interface InvalidTagParameterException {
	}
	export interface InvalidTagParameterExceptionFormProperties {
	}
	export function CreateInvalidTagParameterExceptionFormGroup() {
		return new FormGroup<InvalidTagParameterExceptionFormProperties>({
		});

	}

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface OperationNotPermittedException {
	}
	export interface OperationNotPermittedExceptionFormProperties {
	}
	export function CreateOperationNotPermittedExceptionFormGroup() {
		return new FormGroup<OperationNotPermittedExceptionFormProperties>({
		});

	}

	export interface NotOrganizationMasterAccountException {
	}
	export interface NotOrganizationMasterAccountExceptionFormProperties {
	}
	export function CreateNotOrganizationMasterAccountExceptionFormGroup() {
		return new FormGroup<NotOrganizationMasterAccountExceptionFormProperties>({
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface CreateTrailResponse {
		Name?: string | null;
		S3BucketName?: string | null;
		S3KeyPrefix?: string | null;
		SnsTopicName?: string | null;
		SnsTopicARN?: string | null;
		IncludeGlobalServiceEvents?: boolean | null;
		IsMultiRegionTrail?: boolean | null;
		TrailARN?: string | null;
		LogFileValidationEnabled?: boolean | null;
		CloudWatchLogsLogGroupArn?: string | null;
		CloudWatchLogsRoleArn?: string | null;
		KmsKeyId?: string | null;
		IsOrganizationTrail?: boolean | null;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface CreateTrailResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		SnsTopicName: FormControl<string | null | undefined>,
		SnsTopicARN: FormControl<string | null | undefined>,
		IncludeGlobalServiceEvents: FormControl<boolean | null | undefined>,
		IsMultiRegionTrail: FormControl<boolean | null | undefined>,
		TrailARN: FormControl<string | null | undefined>,
		LogFileValidationEnabled: FormControl<boolean | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		IsOrganizationTrail: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateTrailResponseFormGroup() {
		return new FormGroup<CreateTrailResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SnsTopicName: new FormControl<string | null | undefined>(undefined),
			SnsTopicARN: new FormControl<string | null | undefined>(undefined),
			IncludeGlobalServiceEvents: new FormControl<boolean | null | undefined>(undefined),
			IsMultiRegionTrail: new FormControl<boolean | null | undefined>(undefined),
			TrailARN: new FormControl<string | null | undefined>(undefined),
			LogFileValidationEnabled: new FormControl<boolean | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			IsOrganizationTrail: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for each trail. */
	export interface CreateTrailRequest {

		/** Required */
		Name: string;

		/** Required */
		S3BucketName: string;
		S3KeyPrefix?: string | null;
		SnsTopicName?: string | null;
		IncludeGlobalServiceEvents?: boolean | null;
		IsMultiRegionTrail?: boolean | null;
		EnableLogFileValidation?: boolean | null;
		CloudWatchLogsLogGroupArn?: string | null;
		CloudWatchLogsRoleArn?: string | null;
		KmsKeyId?: string | null;
		IsOrganizationTrail?: boolean | null;

		/** A list of tags. */
		TagsList?: Array<Tag>;
	}

	/** Specifies the settings for each trail. */
	export interface CreateTrailRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		SnsTopicName: FormControl<string | null | undefined>,
		IncludeGlobalServiceEvents: FormControl<boolean | null | undefined>,
		IsMultiRegionTrail: FormControl<boolean | null | undefined>,
		EnableLogFileValidation: FormControl<boolean | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		IsOrganizationTrail: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateTrailRequestFormGroup() {
		return new FormGroup<CreateTrailRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SnsTopicName: new FormControl<string | null | undefined>(undefined),
			IncludeGlobalServiceEvents: new FormControl<boolean | null | undefined>(undefined),
			IsMultiRegionTrail: new FormControl<boolean | null | undefined>(undefined),
			EnableLogFileValidation: new FormControl<boolean | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			IsOrganizationTrail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MaximumNumberOfTrailsExceededException {
	}
	export interface MaximumNumberOfTrailsExceededExceptionFormProperties {
	}
	export function CreateMaximumNumberOfTrailsExceededExceptionFormGroup() {
		return new FormGroup<MaximumNumberOfTrailsExceededExceptionFormProperties>({
		});

	}

	export interface TrailAlreadyExistsException {
	}
	export interface TrailAlreadyExistsExceptionFormProperties {
	}
	export function CreateTrailAlreadyExistsExceptionFormGroup() {
		return new FormGroup<TrailAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface S3BucketDoesNotExistException {
	}
	export interface S3BucketDoesNotExistExceptionFormProperties {
	}
	export function CreateS3BucketDoesNotExistExceptionFormGroup() {
		return new FormGroup<S3BucketDoesNotExistExceptionFormProperties>({
		});

	}

	export interface InsufficientS3BucketPolicyException {
	}
	export interface InsufficientS3BucketPolicyExceptionFormProperties {
	}
	export function CreateInsufficientS3BucketPolicyExceptionFormGroup() {
		return new FormGroup<InsufficientS3BucketPolicyExceptionFormProperties>({
		});

	}

	export interface InsufficientSnsTopicPolicyException {
	}
	export interface InsufficientSnsTopicPolicyExceptionFormProperties {
	}
	export function CreateInsufficientSnsTopicPolicyExceptionFormGroup() {
		return new FormGroup<InsufficientSnsTopicPolicyExceptionFormProperties>({
		});

	}

	export interface InsufficientEncryptionPolicyException {
	}
	export interface InsufficientEncryptionPolicyExceptionFormProperties {
	}
	export function CreateInsufficientEncryptionPolicyExceptionFormGroup() {
		return new FormGroup<InsufficientEncryptionPolicyExceptionFormProperties>({
		});

	}

	export interface InvalidS3BucketNameException {
	}
	export interface InvalidS3BucketNameExceptionFormProperties {
	}
	export function CreateInvalidS3BucketNameExceptionFormGroup() {
		return new FormGroup<InvalidS3BucketNameExceptionFormProperties>({
		});

	}

	export interface InvalidS3PrefixException {
	}
	export interface InvalidS3PrefixExceptionFormProperties {
	}
	export function CreateInvalidS3PrefixExceptionFormGroup() {
		return new FormGroup<InvalidS3PrefixExceptionFormProperties>({
		});

	}

	export interface InvalidSnsTopicNameException {
	}
	export interface InvalidSnsTopicNameExceptionFormProperties {
	}
	export function CreateInvalidSnsTopicNameExceptionFormGroup() {
		return new FormGroup<InvalidSnsTopicNameExceptionFormProperties>({
		});

	}

	export interface InvalidKmsKeyIdException {
	}
	export interface InvalidKmsKeyIdExceptionFormProperties {
	}
	export function CreateInvalidKmsKeyIdExceptionFormGroup() {
		return new FormGroup<InvalidKmsKeyIdExceptionFormProperties>({
		});

	}

	export interface TrailNotProvidedException {
	}
	export interface TrailNotProvidedExceptionFormProperties {
	}
	export function CreateTrailNotProvidedExceptionFormGroup() {
		return new FormGroup<TrailNotProvidedExceptionFormProperties>({
		});

	}

	export interface InvalidParameterCombinationException {
	}
	export interface InvalidParameterCombinationExceptionFormProperties {
	}
	export function CreateInvalidParameterCombinationExceptionFormGroup() {
		return new FormGroup<InvalidParameterCombinationExceptionFormProperties>({
		});

	}

	export interface KmsKeyNotFoundException {
	}
	export interface KmsKeyNotFoundExceptionFormProperties {
	}
	export function CreateKmsKeyNotFoundExceptionFormGroup() {
		return new FormGroup<KmsKeyNotFoundExceptionFormProperties>({
		});

	}

	export interface KmsKeyDisabledException {
	}
	export interface KmsKeyDisabledExceptionFormProperties {
	}
	export function CreateKmsKeyDisabledExceptionFormGroup() {
		return new FormGroup<KmsKeyDisabledExceptionFormProperties>({
		});

	}

	export interface KmsException {
	}
	export interface KmsExceptionFormProperties {
	}
	export function CreateKmsExceptionFormGroup() {
		return new FormGroup<KmsExceptionFormProperties>({
		});

	}

	export interface InvalidCloudWatchLogsLogGroupArnException {
	}
	export interface InvalidCloudWatchLogsLogGroupArnExceptionFormProperties {
	}
	export function CreateInvalidCloudWatchLogsLogGroupArnExceptionFormGroup() {
		return new FormGroup<InvalidCloudWatchLogsLogGroupArnExceptionFormProperties>({
		});

	}

	export interface InvalidCloudWatchLogsRoleArnException {
	}
	export interface InvalidCloudWatchLogsRoleArnExceptionFormProperties {
	}
	export function CreateInvalidCloudWatchLogsRoleArnExceptionFormGroup() {
		return new FormGroup<InvalidCloudWatchLogsRoleArnExceptionFormProperties>({
		});

	}

	export interface CloudWatchLogsDeliveryUnavailableException {
	}
	export interface CloudWatchLogsDeliveryUnavailableExceptionFormProperties {
	}
	export function CreateCloudWatchLogsDeliveryUnavailableExceptionFormGroup() {
		return new FormGroup<CloudWatchLogsDeliveryUnavailableExceptionFormProperties>({
		});

	}

	export interface CloudTrailAccessNotEnabledException {
	}
	export interface CloudTrailAccessNotEnabledExceptionFormProperties {
	}
	export function CreateCloudTrailAccessNotEnabledExceptionFormGroup() {
		return new FormGroup<CloudTrailAccessNotEnabledExceptionFormProperties>({
		});

	}

	export interface InsufficientDependencyServiceAccessPermissionException {
	}
	export interface InsufficientDependencyServiceAccessPermissionExceptionFormProperties {
	}
	export function CreateInsufficientDependencyServiceAccessPermissionExceptionFormGroup() {
		return new FormGroup<InsufficientDependencyServiceAccessPermissionExceptionFormProperties>({
		});

	}

	export interface OrganizationsNotInUseException {
	}
	export interface OrganizationsNotInUseExceptionFormProperties {
	}
	export function CreateOrganizationsNotInUseExceptionFormGroup() {
		return new FormGroup<OrganizationsNotInUseExceptionFormProperties>({
		});

	}

	export interface OrganizationNotInAllFeaturesModeException {
	}
	export interface OrganizationNotInAllFeaturesModeExceptionFormProperties {
	}
	export function CreateOrganizationNotInAllFeaturesModeExceptionFormGroup() {
		return new FormGroup<OrganizationNotInAllFeaturesModeExceptionFormProperties>({
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface DeleteTrailResponse {
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface DeleteTrailResponseFormProperties {
	}
	export function CreateDeleteTrailResponseFormGroup() {
		return new FormGroup<DeleteTrailResponseFormProperties>({
		});

	}


	/** The request that specifies the name of a trail to delete. */
	export interface DeleteTrailRequest {

		/** Required */
		Name: string;
	}

	/** The request that specifies the name of a trail to delete. */
	export interface DeleteTrailRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTrailRequestFormGroup() {
		return new FormGroup<DeleteTrailRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TrailNotFoundException {
	}
	export interface TrailNotFoundExceptionFormProperties {
	}
	export function CreateTrailNotFoundExceptionFormGroup() {
		return new FormGroup<TrailNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidHomeRegionException {
	}
	export interface InvalidHomeRegionExceptionFormProperties {
	}
	export function CreateInvalidHomeRegionExceptionFormGroup() {
		return new FormGroup<InvalidHomeRegionExceptionFormProperties>({
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface DescribeTrailsResponse {
		trailList?: Array<Trail>;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface DescribeTrailsResponseFormProperties {
	}
	export function CreateDescribeTrailsResponseFormGroup() {
		return new FormGroup<DescribeTrailsResponseFormProperties>({
		});

	}


	/** The settings for a trail. */
	export interface Trail {
		Name?: string | null;
		S3BucketName?: string | null;
		S3KeyPrefix?: string | null;
		SnsTopicName?: string | null;
		SnsTopicARN?: string | null;
		IncludeGlobalServiceEvents?: boolean | null;
		IsMultiRegionTrail?: boolean | null;
		HomeRegion?: string | null;
		TrailARN?: string | null;
		LogFileValidationEnabled?: boolean | null;
		CloudWatchLogsLogGroupArn?: string | null;
		CloudWatchLogsRoleArn?: string | null;
		KmsKeyId?: string | null;
		HasCustomEventSelectors?: boolean | null;
		HasInsightSelectors?: boolean | null;
		IsOrganizationTrail?: boolean | null;
	}

	/** The settings for a trail. */
	export interface TrailFormProperties {
		Name: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		SnsTopicName: FormControl<string | null | undefined>,
		SnsTopicARN: FormControl<string | null | undefined>,
		IncludeGlobalServiceEvents: FormControl<boolean | null | undefined>,
		IsMultiRegionTrail: FormControl<boolean | null | undefined>,
		HomeRegion: FormControl<string | null | undefined>,
		TrailARN: FormControl<string | null | undefined>,
		LogFileValidationEnabled: FormControl<boolean | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		HasCustomEventSelectors: FormControl<boolean | null | undefined>,
		HasInsightSelectors: FormControl<boolean | null | undefined>,
		IsOrganizationTrail: FormControl<boolean | null | undefined>,
	}
	export function CreateTrailFormGroup() {
		return new FormGroup<TrailFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SnsTopicName: new FormControl<string | null | undefined>(undefined),
			SnsTopicARN: new FormControl<string | null | undefined>(undefined),
			IncludeGlobalServiceEvents: new FormControl<boolean | null | undefined>(undefined),
			IsMultiRegionTrail: new FormControl<boolean | null | undefined>(undefined),
			HomeRegion: new FormControl<string | null | undefined>(undefined),
			TrailARN: new FormControl<string | null | undefined>(undefined),
			LogFileValidationEnabled: new FormControl<boolean | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			HasCustomEventSelectors: new FormControl<boolean | null | undefined>(undefined),
			HasInsightSelectors: new FormControl<boolean | null | undefined>(undefined),
			IsOrganizationTrail: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Returns information about the trail. */
	export interface DescribeTrailsRequest {
		trailNameList?: Array<string>;
		includeShadowTrails?: boolean | null;
	}

	/** Returns information about the trail. */
	export interface DescribeTrailsRequestFormProperties {
		includeShadowTrails: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeTrailsRequestFormGroup() {
		return new FormGroup<DescribeTrailsRequestFormProperties>({
			includeShadowTrails: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetEventSelectorsResponse {
		TrailARN?: string | null;
		EventSelectors?: Array<EventSelector>;
	}
	export interface GetEventSelectorsResponseFormProperties {
		TrailARN: FormControl<string | null | undefined>,
	}
	export function CreateGetEventSelectorsResponseFormGroup() {
		return new FormGroup<GetEventSelectorsResponseFormProperties>({
			TrailARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> */
	export interface EventSelector {
		ReadWriteType?: EventSelectorReadWriteType | null;
		IncludeManagementEvents?: boolean | null;
		DataResources?: Array<DataResource>;
		ExcludeManagementEventSources?: Array<string>;
	}

	/** <p>Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p> */
	export interface EventSelectorFormProperties {
		ReadWriteType: FormControl<EventSelectorReadWriteType | null | undefined>,
		IncludeManagementEvents: FormControl<boolean | null | undefined>,
	}
	export function CreateEventSelectorFormGroup() {
		return new FormGroup<EventSelectorFormProperties>({
			ReadWriteType: new FormControl<EventSelectorReadWriteType | null | undefined>(undefined),
			IncludeManagementEvents: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EventSelectorReadWriteType { ReadOnly = 0, WriteOnly = 1, All = 2 }


	/** <p>The Amazon S3 buckets or AWS Lambda functions that you specify in your event selectors for your trail to log data events. Data events provide information about the resource operations performed on or within a resource itself. These are also known as data plane operations. You can specify up to 250 data resources for a trail.</p> <note> <p>The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors.</p> </note> <p>The following example demonstrates how logging works when you configure logging of all data events for an S3 bucket named <code>bucket-1</code>. In this example, the CloudTrail user specified an empty prefix, and the option to log both <code>Read</code> and <code>Write</code> data events.</p> <ol> <li> <p>A user uploads an image file to <code>bucket-1</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.</p> </li> <li> <p>A user uploads an object to an Amazon S3 bucket named <code>arn:aws:s3:::bucket-2</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.</p> </li> </ol> <p>The following example demonstrates how logging works when you configure logging of AWS Lambda data events for a Lambda function named <i>MyLambdaFunction</i>, but not for all AWS Lambda functions.</p> <ol> <li> <p>A user runs a script that includes a call to the <i>MyLambdaFunction</i> function and the <i>MyOtherLambdaFunction</i> function.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyLambdaFunction</i> is an AWS Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for <i>MyLambdaFunction</i>, any invocations of that function are logged. The trail processes and logs the event. </p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyOtherLambdaFunction</i> is an AWS Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the <code>Invoke</code> operation for <i>MyOtherLambdaFunction</i> does not match the function specified for the trail. The trail doesn’t log the event. </p> </li> </ol> */
	export interface DataResource {
		Type?: string | null;
		Values?: Array<string>;
	}

	/** <p>The Amazon S3 buckets or AWS Lambda functions that you specify in your event selectors for your trail to log data events. Data events provide information about the resource operations performed on or within a resource itself. These are also known as data plane operations. You can specify up to 250 data resources for a trail.</p> <note> <p>The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors.</p> </note> <p>The following example demonstrates how logging works when you configure logging of all data events for an S3 bucket named <code>bucket-1</code>. In this example, the CloudTrail user specified an empty prefix, and the option to log both <code>Read</code> and <code>Write</code> data events.</p> <ol> <li> <p>A user uploads an image file to <code>bucket-1</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation is an Amazon S3 object-level API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified an S3 bucket with an empty prefix, events that occur on any object in that bucket are logged. The trail processes and logs the event.</p> </li> <li> <p>A user uploads an object to an Amazon S3 bucket named <code>arn:aws:s3:::bucket-2</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation occurred for an object in an S3 bucket that the CloudTrail user didn't specify for the trail. The trail doesn’t log the event.</p> </li> </ol> <p>The following example demonstrates how logging works when you configure logging of AWS Lambda data events for a Lambda function named <i>MyLambdaFunction</i>, but not for all AWS Lambda functions.</p> <ol> <li> <p>A user runs a script that includes a call to the <i>MyLambdaFunction</i> function and the <i>MyOtherLambdaFunction</i> function.</p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyLambdaFunction</i> is an AWS Lambda API. It is recorded as a data event in CloudTrail. Because the CloudTrail user specified logging data events for <i>MyLambdaFunction</i>, any invocations of that function are logged. The trail processes and logs the event. </p> </li> <li> <p>The <code>Invoke</code> API operation on <i>MyOtherLambdaFunction</i> is an AWS Lambda API. Because the CloudTrail user did not specify logging data events for all Lambda functions, the <code>Invoke</code> operation for <i>MyOtherLambdaFunction</i> does not match the function specified for the trail. The trail doesn’t log the event. </p> </li> </ol> */
	export interface DataResourceFormProperties {
		Type: FormControl<string | null | undefined>,
	}
	export function CreateDataResourceFormGroup() {
		return new FormGroup<DataResourceFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEventSelectorsRequest {

		/** Required */
		TrailName: string;
	}
	export interface GetEventSelectorsRequestFormProperties {

		/** Required */
		TrailName: FormControl<string | null | undefined>,
	}
	export function CreateGetEventSelectorsRequestFormGroup() {
		return new FormGroup<GetEventSelectorsRequestFormProperties>({
			TrailName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInsightSelectorsResponse {
		TrailARN?: string | null;
		InsightSelectors?: Array<InsightSelector>;
	}
	export interface GetInsightSelectorsResponseFormProperties {
		TrailARN: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightSelectorsResponseFormGroup() {
		return new FormGroup<GetInsightSelectorsResponseFormProperties>({
			TrailARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A JSON string that contains a list of insight types that are logged on a trail. */
	export interface InsightSelector {
		InsightType?: InsightSelectorInsightType | null;
	}

	/** A JSON string that contains a list of insight types that are logged on a trail. */
	export interface InsightSelectorFormProperties {
		InsightType: FormControl<InsightSelectorInsightType | null | undefined>,
	}
	export function CreateInsightSelectorFormGroup() {
		return new FormGroup<InsightSelectorFormProperties>({
			InsightType: new FormControl<InsightSelectorInsightType | null | undefined>(undefined),
		});

	}

	export enum InsightSelectorInsightType { ApiCallRateInsight = 0 }

	export interface GetInsightSelectorsRequest {

		/** Required */
		TrailName: string;
	}
	export interface GetInsightSelectorsRequestFormProperties {

		/** Required */
		TrailName: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightSelectorsRequestFormGroup() {
		return new FormGroup<GetInsightSelectorsRequestFormProperties>({
			TrailName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InsightNotEnabledException {
	}
	export interface InsightNotEnabledExceptionFormProperties {
	}
	export function CreateInsightNotEnabledExceptionFormGroup() {
		return new FormGroup<InsightNotEnabledExceptionFormProperties>({
		});

	}

	export interface GetTrailResponse {

		/** The settings for a trail. */
		Trail?: Trail;
	}
	export interface GetTrailResponseFormProperties {
	}
	export function CreateGetTrailResponseFormGroup() {
		return new FormGroup<GetTrailResponseFormProperties>({
		});

	}

	export interface GetTrailRequest {

		/** Required */
		Name: string;
	}
	export interface GetTrailRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetTrailRequestFormGroup() {
		return new FormGroup<GetTrailRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface GetTrailStatusResponse {
		IsLogging?: boolean | null;
		LatestDeliveryError?: string | null;
		LatestNotificationError?: string | null;
		LatestDeliveryTime?: Date | null;
		LatestNotificationTime?: Date | null;
		StartLoggingTime?: Date | null;
		StopLoggingTime?: Date | null;
		LatestCloudWatchLogsDeliveryError?: string | null;
		LatestCloudWatchLogsDeliveryTime?: Date | null;
		LatestDigestDeliveryTime?: Date | null;
		LatestDigestDeliveryError?: string | null;
		LatestDeliveryAttemptTime?: string | null;
		LatestNotificationAttemptTime?: string | null;
		LatestNotificationAttemptSucceeded?: string | null;
		LatestDeliveryAttemptSucceeded?: string | null;
		TimeLoggingStarted?: string | null;
		TimeLoggingStopped?: string | null;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface GetTrailStatusResponseFormProperties {
		IsLogging: FormControl<boolean | null | undefined>,
		LatestDeliveryError: FormControl<string | null | undefined>,
		LatestNotificationError: FormControl<string | null | undefined>,
		LatestDeliveryTime: FormControl<Date | null | undefined>,
		LatestNotificationTime: FormControl<Date | null | undefined>,
		StartLoggingTime: FormControl<Date | null | undefined>,
		StopLoggingTime: FormControl<Date | null | undefined>,
		LatestCloudWatchLogsDeliveryError: FormControl<string | null | undefined>,
		LatestCloudWatchLogsDeliveryTime: FormControl<Date | null | undefined>,
		LatestDigestDeliveryTime: FormControl<Date | null | undefined>,
		LatestDigestDeliveryError: FormControl<string | null | undefined>,
		LatestDeliveryAttemptTime: FormControl<string | null | undefined>,
		LatestNotificationAttemptTime: FormControl<string | null | undefined>,
		LatestNotificationAttemptSucceeded: FormControl<string | null | undefined>,
		LatestDeliveryAttemptSucceeded: FormControl<string | null | undefined>,
		TimeLoggingStarted: FormControl<string | null | undefined>,
		TimeLoggingStopped: FormControl<string | null | undefined>,
	}
	export function CreateGetTrailStatusResponseFormGroup() {
		return new FormGroup<GetTrailStatusResponseFormProperties>({
			IsLogging: new FormControl<boolean | null | undefined>(undefined),
			LatestDeliveryError: new FormControl<string | null | undefined>(undefined),
			LatestNotificationError: new FormControl<string | null | undefined>(undefined),
			LatestDeliveryTime: new FormControl<Date | null | undefined>(undefined),
			LatestNotificationTime: new FormControl<Date | null | undefined>(undefined),
			StartLoggingTime: new FormControl<Date | null | undefined>(undefined),
			StopLoggingTime: new FormControl<Date | null | undefined>(undefined),
			LatestCloudWatchLogsDeliveryError: new FormControl<string | null | undefined>(undefined),
			LatestCloudWatchLogsDeliveryTime: new FormControl<Date | null | undefined>(undefined),
			LatestDigestDeliveryTime: new FormControl<Date | null | undefined>(undefined),
			LatestDigestDeliveryError: new FormControl<string | null | undefined>(undefined),
			LatestDeliveryAttemptTime: new FormControl<string | null | undefined>(undefined),
			LatestNotificationAttemptTime: new FormControl<string | null | undefined>(undefined),
			LatestNotificationAttemptSucceeded: new FormControl<string | null | undefined>(undefined),
			LatestDeliveryAttemptSucceeded: new FormControl<string | null | undefined>(undefined),
			TimeLoggingStarted: new FormControl<string | null | undefined>(undefined),
			TimeLoggingStopped: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name of a trail about which you want the current status. */
	export interface GetTrailStatusRequest {

		/** Required */
		Name: string;
	}

	/** The name of a trail about which you want the current status. */
	export interface GetTrailStatusRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetTrailStatusRequestFormGroup() {
		return new FormGroup<GetTrailStatusRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface ListPublicKeysResponse {
		PublicKeyList?: Array<PublicKey>;
		NextToken?: string | null;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface ListPublicKeysResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPublicKeysResponseFormGroup() {
		return new FormGroup<ListPublicKeysResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a returned public key. */
	export interface PublicKey {
		Value?: string | null;
		ValidityStartTime?: Date | null;
		ValidityEndTime?: Date | null;
		Fingerprint?: string | null;
	}

	/** Contains information about a returned public key. */
	export interface PublicKeyFormProperties {
		Value: FormControl<string | null | undefined>,
		ValidityStartTime: FormControl<Date | null | undefined>,
		ValidityEndTime: FormControl<Date | null | undefined>,
		Fingerprint: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeyFormGroup() {
		return new FormGroup<PublicKeyFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
			ValidityStartTime: new FormControl<Date | null | undefined>(undefined),
			ValidityEndTime: new FormControl<Date | null | undefined>(undefined),
			Fingerprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Requests the public keys for a specified time range. */
	export interface ListPublicKeysRequest {
		StartTime?: Date | null;
		EndTime?: Date | null;
		NextToken?: string | null;
	}

	/** Requests the public keys for a specified time range. */
	export interface ListPublicKeysRequestFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPublicKeysRequestFormGroup() {
		return new FormGroup<ListPublicKeysRequestFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidTimeRangeException {
	}
	export interface InvalidTimeRangeExceptionFormProperties {
	}
	export function CreateInvalidTimeRangeExceptionFormGroup() {
		return new FormGroup<InvalidTimeRangeExceptionFormProperties>({
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


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface ListTagsResponse {
		ResourceTagList?: Array<ResourceTag>;
		NextToken?: string | null;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface ListTagsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource tag. */
	export interface ResourceTag {
		ResourceId?: string | null;

		/** A list of tags. */
		TagsList?: Array<Tag>;
	}

	/** A resource tag. */
	export interface ResourceTagFormProperties {
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagFormGroup() {
		return new FormGroup<ResourceTagFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a list of trail tags to return. */
	export interface ListTagsRequest {

		/** Required */
		ResourceIdList: Array<string>;
		NextToken?: string | null;
	}

	/** Specifies a list of trail tags to return. */
	export interface ListTagsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTrailsResponse {
		Trails?: Array<TrailInfo>;
		NextToken?: string | null;
	}
	export interface ListTrailsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrailsResponseFormGroup() {
		return new FormGroup<ListTrailsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN). */
	export interface TrailInfo {
		TrailARN?: string | null;
		Name?: string | null;
		HomeRegion?: string | null;
	}

	/** Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN). */
	export interface TrailInfoFormProperties {
		TrailARN: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		HomeRegion: FormControl<string | null | undefined>,
	}
	export function CreateTrailInfoFormGroup() {
		return new FormGroup<TrailInfoFormProperties>({
			TrailARN: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			HomeRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTrailsRequest {
		NextToken?: string | null;
	}
	export interface ListTrailsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTrailsRequestFormGroup() {
		return new FormGroup<ListTrailsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a response to a LookupEvents action. */
	export interface LookupEventsResponse {
		Events?: Array<Event>;
		NextToken?: string | null;
	}

	/** Contains a response to a LookupEvents action. */
	export interface LookupEventsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateLookupEventsResponseFormGroup() {
		return new FormGroup<LookupEventsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event. */
	export interface Event {
		EventId?: string | null;
		EventName?: string | null;
		ReadOnly?: string | null;
		AccessKeyId?: string | null;
		EventTime?: Date | null;
		EventSource?: string | null;
		Username?: string | null;

		/** A list of resources referenced by the event returned. */
		Resources?: Array<Resource>;
		CloudTrailEvent?: string | null;
	}

	/** Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event. */
	export interface EventFormProperties {
		EventId: FormControl<string | null | undefined>,
		EventName: FormControl<string | null | undefined>,
		ReadOnly: FormControl<string | null | undefined>,
		AccessKeyId: FormControl<string | null | undefined>,
		EventTime: FormControl<Date | null | undefined>,
		EventSource: FormControl<string | null | undefined>,
		Username: FormControl<string | null | undefined>,
		CloudTrailEvent: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			EventId: new FormControl<string | null | undefined>(undefined),
			EventName: new FormControl<string | null | undefined>(undefined),
			ReadOnly: new FormControl<string | null | undefined>(undefined),
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			EventTime: new FormControl<Date | null | undefined>(undefined),
			EventSource: new FormControl<string | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
			CloudTrailEvent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the type and name of a resource referenced by an event. */
	export interface Resource {
		ResourceType?: string | null;
		ResourceName?: string | null;
	}

	/** Specifies the type and name of a resource referenced by an event. */
	export interface ResourceFormProperties {
		ResourceType: FormControl<string | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a request for LookupEvents. */
	export interface LookupEventsRequest {
		LookupAttributes?: Array<LookupAttribute>;
		StartTime?: Date | null;
		EndTime?: Date | null;
		EventCategory?: LookupEventsRequestEventCategory | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	/** Contains a request for LookupEvents. */
	export interface LookupEventsRequestFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		EventCategory: FormControl<LookupEventsRequestEventCategory | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateLookupEventsRequestFormGroup() {
		return new FormGroup<LookupEventsRequestFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			EventCategory: new FormControl<LookupEventsRequestEventCategory | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an attribute and value that filter the events returned. */
	export interface LookupAttribute {

		/** Required */
		AttributeKey: LookupAttributeAttributeKey;

		/** Required */
		AttributeValue: string;
	}

	/** Specifies an attribute and value that filter the events returned. */
	export interface LookupAttributeFormProperties {

		/** Required */
		AttributeKey: FormControl<LookupAttributeAttributeKey | null | undefined>,

		/** Required */
		AttributeValue: FormControl<string | null | undefined>,
	}
	export function CreateLookupAttributeFormGroup() {
		return new FormGroup<LookupAttributeFormProperties>({
			AttributeKey: new FormControl<LookupAttributeAttributeKey | null | undefined>(undefined, [Validators.required]),
			AttributeValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LookupAttributeAttributeKey { EventId = 0, EventName = 1, ReadOnly = 2, Username = 3, ResourceType = 4, ResourceName = 5, EventSource = 6, AccessKeyId = 7 }

	export enum LookupEventsRequestEventCategory { insight = 0 }

	export interface InvalidLookupAttributesException {
	}
	export interface InvalidLookupAttributesExceptionFormProperties {
	}
	export function CreateInvalidLookupAttributesExceptionFormGroup() {
		return new FormGroup<InvalidLookupAttributesExceptionFormProperties>({
		});

	}

	export interface InvalidMaxResultsException {
	}
	export interface InvalidMaxResultsExceptionFormProperties {
	}
	export function CreateInvalidMaxResultsExceptionFormGroup() {
		return new FormGroup<InvalidMaxResultsExceptionFormProperties>({
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

	export interface InvalidEventCategoryException {
	}
	export interface InvalidEventCategoryExceptionFormProperties {
	}
	export function CreateInvalidEventCategoryExceptionFormGroup() {
		return new FormGroup<InvalidEventCategoryExceptionFormProperties>({
		});

	}

	export interface PutEventSelectorsResponse {
		TrailARN?: string | null;
		EventSelectors?: Array<EventSelector>;
	}
	export interface PutEventSelectorsResponseFormProperties {
		TrailARN: FormControl<string | null | undefined>,
	}
	export function CreatePutEventSelectorsResponseFormGroup() {
		return new FormGroup<PutEventSelectorsResponseFormProperties>({
			TrailARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutEventSelectorsRequest {

		/** Required */
		TrailName: string;

		/** Required */
		EventSelectors: Array<EventSelector>;
	}
	export interface PutEventSelectorsRequestFormProperties {

		/** Required */
		TrailName: FormControl<string | null | undefined>,
	}
	export function CreatePutEventSelectorsRequestFormGroup() {
		return new FormGroup<PutEventSelectorsRequestFormProperties>({
			TrailName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidEventSelectorsException {
	}
	export interface InvalidEventSelectorsExceptionFormProperties {
	}
	export function CreateInvalidEventSelectorsExceptionFormGroup() {
		return new FormGroup<InvalidEventSelectorsExceptionFormProperties>({
		});

	}

	export interface PutInsightSelectorsResponse {
		TrailARN?: string | null;
		InsightSelectors?: Array<InsightSelector>;
	}
	export interface PutInsightSelectorsResponseFormProperties {
		TrailARN: FormControl<string | null | undefined>,
	}
	export function CreatePutInsightSelectorsResponseFormGroup() {
		return new FormGroup<PutInsightSelectorsResponseFormProperties>({
			TrailARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutInsightSelectorsRequest {

		/** Required */
		TrailName: string;

		/** Required */
		InsightSelectors: Array<InsightSelector>;
	}
	export interface PutInsightSelectorsRequestFormProperties {

		/** Required */
		TrailName: FormControl<string | null | undefined>,
	}
	export function CreatePutInsightSelectorsRequestFormGroup() {
		return new FormGroup<PutInsightSelectorsRequestFormProperties>({
			TrailName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidInsightSelectorsException {
	}
	export interface InvalidInsightSelectorsExceptionFormProperties {
	}
	export function CreateInvalidInsightSelectorsExceptionFormGroup() {
		return new FormGroup<InvalidInsightSelectorsExceptionFormProperties>({
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface RemoveTagsResponse {
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface RemoveTagsResponseFormProperties {
	}
	export function CreateRemoveTagsResponseFormGroup() {
		return new FormGroup<RemoveTagsResponseFormProperties>({
		});

	}


	/** Specifies the tags to remove from a trail. */
	export interface RemoveTagsRequest {

		/** Required */
		ResourceId: string;

		/** A list of tags. */
		TagsList?: Array<Tag>;
	}

	/** Specifies the tags to remove from a trail. */
	export interface RemoveTagsRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsRequestFormGroup() {
		return new FormGroup<RemoveTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface StartLoggingResponse {
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface StartLoggingResponseFormProperties {
	}
	export function CreateStartLoggingResponseFormGroup() {
		return new FormGroup<StartLoggingResponseFormProperties>({
		});

	}


	/** The request to CloudTrail to start logging AWS API calls for an account. */
	export interface StartLoggingRequest {

		/** Required */
		Name: string;
	}

	/** The request to CloudTrail to start logging AWS API calls for an account. */
	export interface StartLoggingRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStartLoggingRequestFormGroup() {
		return new FormGroup<StartLoggingRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface StopLoggingResponse {
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface StopLoggingResponseFormProperties {
	}
	export function CreateStopLoggingResponseFormGroup() {
		return new FormGroup<StopLoggingResponseFormProperties>({
		});

	}


	/** Passes the request to CloudTrail to stop logging AWS API calls for the specified account. */
	export interface StopLoggingRequest {

		/** Required */
		Name: string;
	}

	/** Passes the request to CloudTrail to stop logging AWS API calls for the specified account. */
	export interface StopLoggingRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStopLoggingRequestFormGroup() {
		return new FormGroup<StopLoggingRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface UpdateTrailResponse {
		Name?: string | null;
		S3BucketName?: string | null;
		S3KeyPrefix?: string | null;
		SnsTopicName?: string | null;
		SnsTopicARN?: string | null;
		IncludeGlobalServiceEvents?: boolean | null;
		IsMultiRegionTrail?: boolean | null;
		TrailARN?: string | null;
		LogFileValidationEnabled?: boolean | null;
		CloudWatchLogsLogGroupArn?: string | null;
		CloudWatchLogsRoleArn?: string | null;
		KmsKeyId?: string | null;
		IsOrganizationTrail?: boolean | null;
	}

	/** Returns the objects or data listed below if successful. Otherwise, returns an error. */
	export interface UpdateTrailResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		SnsTopicName: FormControl<string | null | undefined>,
		SnsTopicARN: FormControl<string | null | undefined>,
		IncludeGlobalServiceEvents: FormControl<boolean | null | undefined>,
		IsMultiRegionTrail: FormControl<boolean | null | undefined>,
		TrailARN: FormControl<string | null | undefined>,
		LogFileValidationEnabled: FormControl<boolean | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		IsOrganizationTrail: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTrailResponseFormGroup() {
		return new FormGroup<UpdateTrailResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SnsTopicName: new FormControl<string | null | undefined>(undefined),
			SnsTopicARN: new FormControl<string | null | undefined>(undefined),
			IncludeGlobalServiceEvents: new FormControl<boolean | null | undefined>(undefined),
			IsMultiRegionTrail: new FormControl<boolean | null | undefined>(undefined),
			TrailARN: new FormControl<string | null | undefined>(undefined),
			LogFileValidationEnabled: new FormControl<boolean | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			IsOrganizationTrail: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies settings to update for the trail. */
	export interface UpdateTrailRequest {

		/** Required */
		Name: string;
		S3BucketName?: string | null;
		S3KeyPrefix?: string | null;
		SnsTopicName?: string | null;
		IncludeGlobalServiceEvents?: boolean | null;
		IsMultiRegionTrail?: boolean | null;
		EnableLogFileValidation?: boolean | null;
		CloudWatchLogsLogGroupArn?: string | null;
		CloudWatchLogsRoleArn?: string | null;
		KmsKeyId?: string | null;
		IsOrganizationTrail?: boolean | null;
	}

	/** Specifies settings to update for the trail. */
	export interface UpdateTrailRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		S3BucketName: FormControl<string | null | undefined>,
		S3KeyPrefix: FormControl<string | null | undefined>,
		SnsTopicName: FormControl<string | null | undefined>,
		IncludeGlobalServiceEvents: FormControl<boolean | null | undefined>,
		IsMultiRegionTrail: FormControl<boolean | null | undefined>,
		EnableLogFileValidation: FormControl<boolean | null | undefined>,
		CloudWatchLogsLogGroupArn: FormControl<string | null | undefined>,
		CloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		IsOrganizationTrail: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateTrailRequestFormGroup() {
		return new FormGroup<UpdateTrailRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3BucketName: new FormControl<string | null | undefined>(undefined),
			S3KeyPrefix: new FormControl<string | null | undefined>(undefined),
			SnsTopicName: new FormControl<string | null | undefined>(undefined),
			IncludeGlobalServiceEvents: new FormControl<boolean | null | undefined>(undefined),
			IsMultiRegionTrail: new FormControl<boolean | null | undefined>(undefined),
			EnableLogFileValidation: new FormControl<boolean | null | undefined>(undefined),
			CloudWatchLogsLogGroupArn: new FormControl<string | null | undefined>(undefined),
			CloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			IsOrganizationTrail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EventCategory { insight = 0 }

	export enum ReadWriteType { ReadOnly = 0, WriteOnly = 1, All = 2 }

	export enum InsightType { ApiCallRateInsight = 0 }

	export enum LookupAttributeKey { EventId = 0, EventName = 1, ReadOnly = 2, Username = 3, ResourceType = 4, ResourceName = 5, EventSource = 6, AccessKeyId = 7 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds one or more tags to a trail, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique for a trail; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail that applies to all AWS Regions only from the Region in which the trail was created (also known as its home region).
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags
		 * @return {AddTagsResponse} Success
		 */
		AddTags(requestBody: AddTagsRequest): Observable<AddTagsResponse> {
			return this.http.post<AddTagsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail
		 * @return {CreateTrailResponse} Success
		 */
		CreateTrail(requestBody: CreateTrailRequest): Observable<CreateTrailResponse> {
			return this.http.post<CreateTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail
		 * @return {DeleteTrailResponse} Success
		 */
		DeleteTrail(requestBody: DeleteTrailRequest): Observable<DeleteTrailResponse> {
			return this.http.post<DeleteTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves settings for one or more trails associated with the current region for your account.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails
		 * @return {DescribeTrailsResponse} Success
		 */
		DescribeTrails(requestBody: DescribeTrailsRequest): Observable<DescribeTrailsResponse> {
			return this.http.post<DescribeTrailsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the Amazon S3 objects or AWS Lambda functions that you are logging for data events.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails </a> in the <i>AWS CloudTrail User Guide</i>.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors
		 * @return {GetEventSelectorsResponse} Success
		 */
		GetEventSelectors(requestBody: GetEventSelectorsRequest): Observable<GetEventSelectorsResponse> {
			return this.http.post<GetEventSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging CloudTrail Insights Events for Trails </a> in the <i>AWS CloudTrail User Guide</i>.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors
		 * @return {GetInsightSelectorsResponse} Success
		 */
		GetInsightSelectors(requestBody: GetInsightSelectorsRequest): Observable<GetInsightSelectorsResponse> {
			return this.http.post<GetInsightSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns settings information for a specified trail.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail
		 * @return {GetTrailResponse} Success
		 */
		GetTrail(requestBody: GetTrailRequest): Observable<GetTrailResponse> {
			return this.http.post<GetTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus
		 * @return {GetTrailStatusResponse} Success
		 */
		GetTrailStatus(requestBody: GetTrailStatusRequest): Observable<GetTrailStatusResponse> {
			return this.http.post<GetTrailStatusResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private/public key pairs per region. Each digest file is signed with a private key unique to its region. Therefore, when you validate a digest file from a particular region, you must look in the same region for its corresponding public key.</p> </note>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys
		 * @param {string} NextToken Pagination token
		 * @return {ListPublicKeysResponse} Success
		 */
		ListPublicKeys(NextToken: string | null | undefined, requestBody: ListPublicKeysRequest): Observable<ListPublicKeysResponse> {
			return this.http.post<ListPublicKeysResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the trail in the current region.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsResponse} Success
		 */
		ListTags(NextToken: string | null | undefined, requestBody: ListTagsRequest): Observable<ListTagsResponse> {
			return this.http.post<ListTagsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists trails that are in the current account.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails
		 * @param {string} NextToken Pagination token
		 * @return {ListTrailsResponse} Success
		 */
		ListTrails(NextToken: string | null | undefined, requestBody: ListTrailsRequest): Observable<ListTrailsResponse> {
			return this.http.post<ListTrailsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail. You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p> <ul> <li> <p>AWS access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>Lookup supports the following attributes for Insights events:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to two per second per account. If this limit is exceeded, a throttling error occurs.</p> </important>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {LookupEventsResponse} Success
		 */
		LookupEvents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: LookupEventsRequest): Observable<LookupEventsResponse> {
			return this.http.post<LookupEventsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures an event selector for your trail. Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. </p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. </p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event but it doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging Data and Management Events for Trails </a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Limits in AWS CloudTrail</a> in the <i>AWS CloudTrail User Guide</i>.</p>
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors
		 * @return {PutEventSelectorsResponse} Success
		 */
		PutEventSelectors(requestBody: PutEventSelectorsRequest): Observable<PutEventSelectorsResponse> {
			return this.http.post<PutEventSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types. In this release, only <code>ApiCallRateInsight</code> is supported as an Insights selector.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors
		 * @return {PutInsightSelectorsResponse} Success
		 */
		PutInsightSelectors(requestBody: PutInsightSelectorsRequest): Observable<PutInsightSelectorsResponse> {
			return this.http.post<PutInsightSelectorsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from a trail.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags
		 * @return {RemoveTagsResponse} Success
		 */
		RemoveTags(requestBody: RemoveTagsRequest): Observable<RemoveTagsResponse> {
			return this.http.post<RemoveTagsResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the recording of AWS API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging
		 * @return {StartLoggingResponse} Success
		 */
		StartLogging(requestBody: StartLoggingRequest): Observable<StartLoggingResponse> {
			return this.http.post<StartLoggingResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Suspends the recording of AWS API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging
		 * @return {StopLoggingResponse} Success
		 */
		StopLogging(requestBody: StopLoggingRequest): Observable<StopLoggingResponse> {
			return this.http.post<StopLoggingResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the settings that specify delivery of log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.
		 * Post #X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail
		 * @return {UpdateTrailResponse} Success
		 */
		UpdateTrail(requestBody: UpdateTrailRequest): Observable<UpdateTrailResponse> {
			return this.http.post<UpdateTrailResponse>(this.baseUri + '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AddTagsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags' = 0 }

	export enum CreateTrailX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail' = 0 }

	export enum DeleteTrailX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail' = 0 }

	export enum DescribeTrailsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails' = 0 }

	export enum GetEventSelectorsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors' = 0 }

	export enum GetInsightSelectorsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors' = 0 }

	export enum GetTrailX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail' = 0 }

	export enum GetTrailStatusX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus' = 0 }

	export enum ListPublicKeysX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys' = 0 }

	export enum ListTagsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags' = 0 }

	export enum ListTrailsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails' = 0 }

	export enum LookupEventsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents' = 0 }

	export enum PutEventSelectorsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors' = 0 }

	export enum PutInsightSelectorsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors' = 0 }

	export enum RemoveTagsX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags' = 0 }

	export enum StartLoggingX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging' = 0 }

	export enum StopLoggingX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging' = 0 }

	export enum UpdateTrailX_Amz_Target { 'com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail' = 0 }

}

