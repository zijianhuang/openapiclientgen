import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateGroupOutput {
		Group?: Group;
		ResourceQuery?: ResourceQuery;
		Tags?: Tags;
		GroupConfiguration?: GroupConfiguration;
	}
	export interface CreateGroupOutputFormProperties {
	}
	export function CreateCreateGroupOutputFormGroup() {
		return new FormGroup<CreateGroupOutputFormProperties>({
		});

	}


	/** <p>A resource group that contains Amazon Web Services resources. You can assign resources to the group by associating either of the following elements with the group:</p> <ul> <li> <p> <a>ResourceQuery</a> - Use a resource query to specify a set of tag keys and values. All resources in the same Amazon Web Services Region and Amazon Web Services account that have those keys with the same values are included in the group. You can add a resource query when you create the group, or later by using the <a>PutGroupConfiguration</a> operation.</p> </li> <li> <p> <a>GroupConfiguration</a> - Use a service configuration to associate the group with an Amazon Web Services service. The configuration specifies which resource types can be included in the group.</p> </li> </ul> */
	export interface Group {

		/** Required */
		GroupArn: string;

		/** Required */
		Name: string;
		Description?: string;
	}

	/** <p>A resource group that contains Amazon Web Services resources. You can assign resources to the group by associating either of the following elements with the group:</p> <ul> <li> <p> <a>ResourceQuery</a> - Use a resource query to specify a set of tag keys and values. All resources in the same Amazon Web Services Region and Amazon Web Services account that have those keys with the same values are included in the group. You can add a resource query when you create the group, or later by using the <a>PutGroupConfiguration</a> operation.</p> </li> <li> <p> <a>GroupConfiguration</a> - Use a service configuration to associate the group with an Amazon Web Services service. The configuration specifies which resource types can be included in the group.</p> </li> </ul> */
	export interface GroupFormProperties {

		/** Required */
		GroupArn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			GroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query '{"Type":"TAG_FILTERS_1_0","Query":"{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[{\"Key\":\"Stage\",\"Values\":[\"Test\"]}]}"}'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p> */
	export interface ResourceQuery {

		/** Required */
		Type: QueryType;

		/** Required */
		Query: string;
	}

	/** <p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query '{"Type":"TAG_FILTERS_1_0","Query":"{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[{\"Key\":\"Stage\",\"Values\":[\"Test\"]}]}"}'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p> */
	export interface ResourceQueryFormProperties {

		/** Required */
		Type: FormControl<QueryType | null | undefined>,

		/** Required */
		Query: FormControl<string | null | undefined>,
	}
	export function CreateResourceQueryFormGroup() {
		return new FormGroup<ResourceQueryFormProperties>({
			Type: new FormControl<QueryType | null | undefined>(undefined, [Validators.required]),
			Query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum QueryType { TAG_FILTERS_1_0 = 'TAG_FILTERS_1_0', CLOUDFORMATION_STACK_1_0 = 'CLOUDFORMATION_STACK_1_0' }

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}


	/** A service configuration associated with a resource group. The configuration options are determined by the Amazon Web Services service that defines the <code>Type</code>, and specifies which resources can be included in the group. You can add a service configuration when you create the group by using <a>CreateGroup</a>, or later by using the <a>PutGroupConfiguration</a> operation. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>. */
	export interface GroupConfiguration {
		Configuration?: Array<GroupConfigurationItem>;
		ProposedConfiguration?: Array<GroupConfigurationItem>;
		Status?: GroupConfigurationStatus;
		FailureReason?: string;
	}

	/** A service configuration associated with a resource group. The configuration options are determined by the Amazon Web Services service that defines the <code>Type</code>, and specifies which resources can be included in the group. You can add a service configuration when you create the group by using <a>CreateGroup</a>, or later by using the <a>PutGroupConfiguration</a> operation. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>. */
	export interface GroupConfigurationFormProperties {
		Status: FormControl<GroupConfigurationStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateGroupConfigurationFormGroup() {
		return new FormGroup<GroupConfigurationFormProperties>({
			Status: new FormControl<GroupConfigurationStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An item in a group configuration. A group service configuration can have one or more items. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>. */
	export interface GroupConfigurationItem {

		/** Required */
		Type: string;
		Parameters?: Array<GroupConfigurationParameter>;
	}

	/** An item in a group configuration. A group service configuration can have one or more items. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>. */
	export interface GroupConfigurationItemFormProperties {

		/** Required */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateGroupConfigurationItemFormGroup() {
		return new FormGroup<GroupConfigurationItemFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A parameter for a group configuration item. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>. */
	export interface GroupConfigurationParameter {

		/** Required */
		Name: string;
		Values?: Array<string>;
	}

	/** A parameter for a group configuration item. For details about group service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for resource groups</a>. */
	export interface GroupConfigurationParameterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGroupConfigurationParameterFormGroup() {
		return new FormGroup<GroupConfigurationParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GroupConfigurationStatus { UPDATING = 'UPDATING', UPDATE_COMPLETE = 'UPDATE_COMPLETE', UPDATE_FAILED = 'UPDATE_FAILED' }

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface MethodNotAllowedException {
	}
	export interface MethodNotAllowedExceptionFormProperties {
	}
	export function CreateMethodNotAllowedExceptionFormGroup() {
		return new FormGroup<MethodNotAllowedExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
		});

	}

	export interface DeleteGroupOutput {
		Group?: Group;
	}
	export interface DeleteGroupOutputFormProperties {
	}
	export function CreateDeleteGroupOutputFormGroup() {
		return new FormGroup<DeleteGroupOutputFormProperties>({
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

	export interface GetAccountSettingsOutput {
		AccountSettings?: AccountSettings;
	}
	export interface GetAccountSettingsOutputFormProperties {
	}
	export function CreateGetAccountSettingsOutputFormGroup() {
		return new FormGroup<GetAccountSettingsOutputFormProperties>({
		});

	}


	/** The Resource Groups settings for this Amazon Web Services account. */
	export interface AccountSettings {
		GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus;
		GroupLifecycleEventsStatus?: GroupLifecycleEventsStatus;
		GroupLifecycleEventsStatusMessage?: string;
	}

	/** The Resource Groups settings for this Amazon Web Services account. */
	export interface AccountSettingsFormProperties {
		GroupLifecycleEventsDesiredStatus: FormControl<GroupLifecycleEventsDesiredStatus | null | undefined>,
		GroupLifecycleEventsStatus: FormControl<GroupLifecycleEventsStatus | null | undefined>,
		GroupLifecycleEventsStatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateAccountSettingsFormGroup() {
		return new FormGroup<AccountSettingsFormProperties>({
			GroupLifecycleEventsDesiredStatus: new FormControl<GroupLifecycleEventsDesiredStatus | null | undefined>(undefined),
			GroupLifecycleEventsStatus: new FormControl<GroupLifecycleEventsStatus | null | undefined>(undefined),
			GroupLifecycleEventsStatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GroupLifecycleEventsDesiredStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }

	export enum GroupLifecycleEventsStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', IN_PROGRESS = 'IN_PROGRESS', ERROR = 'ERROR' }

	export interface GetGroupOutput {
		Group?: Group;
	}
	export interface GetGroupOutputFormProperties {
	}
	export function CreateGetGroupOutputFormGroup() {
		return new FormGroup<GetGroupOutputFormProperties>({
		});

	}

	export interface GetGroupConfigurationOutput {
		GroupConfiguration?: GroupConfiguration;
	}
	export interface GetGroupConfigurationOutputFormProperties {
	}
	export function CreateGetGroupConfigurationOutputFormGroup() {
		return new FormGroup<GetGroupConfigurationOutputFormProperties>({
		});

	}

	export interface GetGroupQueryOutput {
		GroupQuery?: GroupQuery;
	}
	export interface GetGroupQueryOutputFormProperties {
	}
	export function CreateGetGroupQueryOutputFormGroup() {
		return new FormGroup<GetGroupQueryOutputFormProperties>({
		});

	}


	/** A mapping of a query attached to a resource group that determines the Amazon Web Services resources that are members of the group. */
	export interface GroupQuery {

		/** Required */
		GroupName: string;

		/** Required */
		ResourceQuery: ResourceQuery;
	}

	/** A mapping of a query attached to a resource group that determines the Amazon Web Services resources that are members of the group. */
	export interface GroupQueryFormProperties {

		/** Required */
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateGroupQueryFormGroup() {
		return new FormGroup<GroupQueryFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTagsOutput {
		Arn?: string;
		Tags?: Tags;
	}
	export interface GetTagsOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateGetTagsOutputFormGroup() {
		return new FormGroup<GetTagsOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GroupResourcesOutput {
		Succeeded?: Array<string>;
		Failed?: Array<FailedResource>;
		Pending?: Array<PendingResource>;
	}
	export interface GroupResourcesOutputFormProperties {
	}
	export function CreateGroupResourcesOutputFormGroup() {
		return new FormGroup<GroupResourcesOutputFormProperties>({
		});

	}


	/** A resource that failed to be added to or removed from a group. */
	export interface FailedResource {
		ResourceArn?: string;
		ErrorMessage?: string;
		ErrorCode?: string;
	}

	/** A resource that failed to be added to or removed from a group. */
	export interface FailedResourceFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
	}
	export function CreateFailedResourceFormGroup() {
		return new FormGroup<FailedResourceFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that identifies a resource that is currently pending addition to the group as a member. Adding a resource to a resource group happens asynchronously as a background task and this one isn't completed yet. */
	export interface PendingResource {
		ResourceArn?: string;
	}

	/** A structure that identifies a resource that is currently pending addition to the group as a member. Adding a resource to a resource group happens asynchronously as a background task and this one isn't completed yet. */
	export interface PendingResourceFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePendingResourceFormGroup() {
		return new FormGroup<PendingResourceFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupResourcesOutput {
		Resources?: Array<ListGroupResourcesItem>;
		ResourceIdentifiers?: Array<ResourceIdentifier>;
		NextToken?: string;
		QueryErrors?: Array<QueryError>;
	}
	export interface ListGroupResourcesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupResourcesOutputFormGroup() {
		return new FormGroup<ListGroupResourcesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure returned by the <a>ListGroupResources</a> operation that contains identity and group membership status information for one of the resources in the group. */
	export interface ListGroupResourcesItem {

		/** A structure that contains the ARN of a resource and its resource type. */
		Identifier?: ResourceIdentifier;
		Status?: ResourceStatus;
	}

	/** A structure returned by the <a>ListGroupResources</a> operation that contains identity and group membership status information for one of the resources in the group. */
	export interface ListGroupResourcesItemFormProperties {
	}
	export function CreateListGroupResourcesItemFormGroup() {
		return new FormGroup<ListGroupResourcesItemFormProperties>({
		});

	}


	/** A structure that contains the ARN of a resource and its resource type. */
	export interface ResourceIdentifier {
		ResourceArn?: string;
		ResourceType?: string;
	}

	/** A structure that contains the ARN of a resource and its resource type. */
	export interface ResourceIdentifierFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdentifierFormGroup() {
		return new FormGroup<ResourceIdentifierFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that identifies the current group membership status for a resource. Adding a resource to a resource group is performed asynchronously as a background task. A <code>PENDING</code> status indicates, for this resource, that the process isn't completed yet. */
	export interface ResourceStatus {
		Name?: ResourceStatusValue;
	}

	/** A structure that identifies the current group membership status for a resource. Adding a resource to a resource group is performed asynchronously as a background task. A <code>PENDING</code> status indicates, for this resource, that the process isn't completed yet. */
	export interface ResourceStatusFormProperties {
		Name: FormControl<ResourceStatusValue | null | undefined>,
	}
	export function CreateResourceStatusFormGroup() {
		return new FormGroup<ResourceStatusFormProperties>({
			Name: new FormControl<ResourceStatusValue | null | undefined>(undefined),
		});

	}

	export enum ResourceStatusValue { PENDING = 'PENDING' }


	/** A two-part error structure that can occur in <code>ListGroupResources</code> or <code>SearchResources</code> operations on CloudFront stack-based queries. The error occurs if the CloudFront stack on which the query is based either does not exist, or has a status that renders the stack inactive. A <code>QueryError</code> occurrence does not necessarily mean that Resource Groups could not complete the operation, but the resulting group might have no member resources. */
	export interface QueryError {
		ErrorCode?: QueryErrorCode;
		Message?: string;
	}

	/** A two-part error structure that can occur in <code>ListGroupResources</code> or <code>SearchResources</code> operations on CloudFront stack-based queries. The error occurs if the CloudFront stack on which the query is based either does not exist, or has a status that renders the stack inactive. A <code>QueryError</code> occurrence does not necessarily mean that Resource Groups could not complete the operation, but the resulting group might have no member resources. */
	export interface QueryErrorFormProperties {
		ErrorCode: FormControl<QueryErrorCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateQueryErrorFormGroup() {
		return new FormGroup<QueryErrorFormProperties>({
			ErrorCode: new FormControl<QueryErrorCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryErrorCode { CLOUDFORMATION_STACK_INACTIVE = 'CLOUDFORMATION_STACK_INACTIVE', CLOUDFORMATION_STACK_NOT_EXISTING = 'CLOUDFORMATION_STACK_NOT_EXISTING', CLOUDFORMATION_STACK_UNASSUMABLE_ROLE = 'CLOUDFORMATION_STACK_UNASSUMABLE_ROLE' }


	/** A filter name and value pair that is used to obtain more specific results from a list of resources. */
	export interface ResourceFilter {

		/** Required */
		Name: ResourceFilterName;

		/** Required */
		Values: Array<string>;
	}

	/** A filter name and value pair that is used to obtain more specific results from a list of resources. */
	export interface ResourceFilterFormProperties {

		/** Required */
		Name: FormControl<ResourceFilterName | null | undefined>,
	}
	export function CreateResourceFilterFormGroup() {
		return new FormGroup<ResourceFilterFormProperties>({
			Name: new FormControl<ResourceFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceFilterName { 'resource-type' = 'resource-type' }

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface ListGroupsOutput {
		GroupIdentifiers?: Array<GroupIdentifier>;
		Groups?: Array<Group>;
		NextToken?: string;
	}
	export interface ListGroupsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsOutputFormGroup() {
		return new FormGroup<ListGroupsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The unique identifiers for a resource group. */
	export interface GroupIdentifier {
		GroupName?: string;
		GroupArn?: string;
	}

	/** The unique identifiers for a resource group. */
	export interface GroupIdentifierFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupArn: FormControl<string | null | undefined>,
	}
	export function CreateGroupIdentifierFormGroup() {
		return new FormGroup<GroupIdentifierFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter collection that you can use to restrict the results from a <code>List</code> operation to only those you want to include. */
	export interface GroupFilter {

		/** Required */
		Name: GroupFilterName;

		/** Required */
		Values: Array<string>;
	}

	/** A filter collection that you can use to restrict the results from a <code>List</code> operation to only those you want to include. */
	export interface GroupFilterFormProperties {

		/** Required */
		Name: FormControl<GroupFilterName | null | undefined>,
	}
	export function CreateGroupFilterFormGroup() {
		return new FormGroup<GroupFilterFormProperties>({
			Name: new FormControl<GroupFilterName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GroupFilterName { 'resource-type' = 'resource-type', 'configuration-type' = 'configuration-type' }

	export interface PutGroupConfigurationOutput {
	}
	export interface PutGroupConfigurationOutputFormProperties {
	}
	export function CreatePutGroupConfigurationOutputFormGroup() {
		return new FormGroup<PutGroupConfigurationOutputFormProperties>({
		});

	}

	export interface SearchResourcesOutput {
		ResourceIdentifiers?: Array<ResourceIdentifier>;
		NextToken?: string;
		QueryErrors?: Array<QueryError>;
	}
	export interface SearchResourcesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesOutputFormGroup() {
		return new FormGroup<SearchResourcesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagOutput {
		Arn?: string;
		Tags?: Tags;
	}
	export interface TagOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTagOutputFormGroup() {
		return new FormGroup<TagOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UngroupResourcesOutput {
		Succeeded?: Array<string>;
		Failed?: Array<FailedResource>;
		Pending?: Array<PendingResource>;
	}
	export interface UngroupResourcesOutputFormProperties {
	}
	export function CreateUngroupResourcesOutputFormGroup() {
		return new FormGroup<UngroupResourcesOutputFormProperties>({
		});

	}

	export interface UntagOutput {
		Arn?: string;
		Keys?: Array<string>;
	}
	export interface UntagOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUntagOutputFormGroup() {
		return new FormGroup<UntagOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAccountSettingsOutput {
		AccountSettings?: AccountSettings;
	}
	export interface UpdateAccountSettingsOutputFormProperties {
	}
	export function CreateUpdateAccountSettingsOutputFormGroup() {
		return new FormGroup<UpdateAccountSettingsOutputFormProperties>({
		});

	}

	export interface UpdateGroupOutput {
		Group?: Group;
	}
	export interface UpdateGroupOutputFormProperties {
	}
	export function CreateUpdateGroupOutputFormGroup() {
		return new FormGroup<UpdateGroupOutputFormProperties>({
		});

	}

	export interface UpdateGroupQueryOutput {
		GroupQuery?: GroupQuery;
	}
	export interface UpdateGroupQueryOutputFormProperties {
	}
	export function CreateUpdateGroupQueryOutputFormGroup() {
		return new FormGroup<UpdateGroupQueryOutputFormProperties>({
		});

	}

	export interface CreateGroupInput {

		/** Required */
		Name: string;
		Description?: string;
		ResourceQuery?: ResourceQuery;
		Tags?: Tags;
		Configuration?: Array<GroupConfigurationItem>;
	}
	export interface CreateGroupInputFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupInputFormGroup() {
		return new FormGroup<CreateGroupInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupInput {
		GroupName?: string;
		Group?: string;
	}
	export interface DeleteGroupInputFormProperties {
		GroupName: FormControl<string | null | undefined>,
		Group: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupInputFormGroup() {
		return new FormGroup<DeleteGroupInputFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupConfigurationInput {
		Group?: string;
	}
	export interface GetGroupConfigurationInputFormProperties {
		Group: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupConfigurationInputFormGroup() {
		return new FormGroup<GetGroupConfigurationInputFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupInput {
		GroupName?: string;
		Group?: string;
	}
	export interface GetGroupInputFormProperties {
		GroupName: FormControl<string | null | undefined>,
		Group: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupInputFormGroup() {
		return new FormGroup<GetGroupInputFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupQueryInput {
		GroupName?: string;
		Group?: string;
	}
	export interface GetGroupQueryInputFormProperties {
		GroupName: FormControl<string | null | undefined>,
		Group: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupQueryInputFormGroup() {
		return new FormGroup<GetGroupQueryInputFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTagsInput {
	}
	export interface GetTagsInputFormProperties {
	}
	export function CreateGetTagsInputFormGroup() {
		return new FormGroup<GetTagsInputFormProperties>({
		});

	}

	export interface GroupResourcesInput {

		/** Required */
		Group: string;

		/** Required */
		ResourceArns: Array<string>;
	}
	export interface GroupResourcesInputFormProperties {

		/** Required */
		Group: FormControl<string | null | undefined>,
	}
	export function CreateGroupResourcesInputFormGroup() {
		return new FormGroup<GroupResourcesInputFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListGroupResourcesInput {
		GroupName?: string;
		Group?: string;
		Filters?: Array<ResourceFilter>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListGroupResourcesInputFormProperties {
		GroupName: FormControl<string | null | undefined>,
		Group: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupResourcesInputFormGroup() {
		return new FormGroup<ListGroupResourcesInputFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupsInput {
		Filters?: Array<GroupFilter>;
	}
	export interface ListGroupsInputFormProperties {
	}
	export function CreateListGroupsInputFormGroup() {
		return new FormGroup<ListGroupsInputFormProperties>({
		});

	}

	export interface PutGroupConfigurationInput {
		Group?: string;
		Configuration?: Array<GroupConfigurationItem>;
	}
	export interface PutGroupConfigurationInputFormProperties {
		Group: FormControl<string | null | undefined>,
	}
	export function CreatePutGroupConfigurationInputFormGroup() {
		return new FormGroup<PutGroupConfigurationInputFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchResourcesInput {

		/** Required */
		ResourceQuery: ResourceQuery;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface SearchResourcesInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesInputFormGroup() {
		return new FormGroup<SearchResourcesInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagInput {

		/** Required */
		Tags: Tags;
	}
	export interface TagInputFormProperties {
	}
	export function CreateTagInputFormGroup() {
		return new FormGroup<TagInputFormProperties>({
		});

	}

	export interface UngroupResourcesInput {

		/** Required */
		Group: string;

		/** Required */
		ResourceArns: Array<string>;
	}
	export interface UngroupResourcesInputFormProperties {

		/** Required */
		Group: FormControl<string | null | undefined>,
	}
	export function CreateUngroupResourcesInputFormGroup() {
		return new FormGroup<UngroupResourcesInputFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagInput {

		/** Required */
		Keys: Array<string>;
	}
	export interface UntagInputFormProperties {
	}
	export function CreateUntagInputFormGroup() {
		return new FormGroup<UntagInputFormProperties>({
		});

	}

	export interface UpdateAccountSettingsInput {
		GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus;
	}
	export interface UpdateAccountSettingsInputFormProperties {
		GroupLifecycleEventsDesiredStatus: FormControl<GroupLifecycleEventsDesiredStatus | null | undefined>,
	}
	export function CreateUpdateAccountSettingsInputFormGroup() {
		return new FormGroup<UpdateAccountSettingsInputFormProperties>({
			GroupLifecycleEventsDesiredStatus: new FormControl<GroupLifecycleEventsDesiredStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupInput {
		GroupName?: string;
		Group?: string;
		Description?: string;
	}
	export interface UpdateGroupInputFormProperties {
		GroupName: FormControl<string | null | undefined>,
		Group: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupInputFormGroup() {
		return new FormGroup<UpdateGroupInputFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupQueryInput {
		GroupName?: string;
		Group?: string;

		/** Required */
		ResourceQuery: ResourceQuery;
	}
	export interface UpdateGroupQueryInputFormProperties {
		GroupName: FormControl<string | null | undefined>,
		Group: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupQueryInputFormGroup() {
		return new FormGroup<UpdateGroupQueryInputFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a resource group with the specified name and description. You can optionally include either a resource query or a service configuration. For more information about constructing a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/getting_started-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i>. For more information about service-linked groups and service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:CreateGroup</code> </p> </li> </ul>
		 * Post groups
		 * @return {CreateGroupOutput} Success
		 */
		CreateGroup(requestBody: CreateGroupPostBody): Observable<CreateGroupOutput> {
			return this.http.post<CreateGroupOutput>(this.baseUri + 'groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified resource group. Deleting a resource group does not delete any resources that are members of the group; it only deletes the group structure.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:DeleteGroup</code> </p> </li> </ul>
		 * Post delete-group
		 * @return {DeleteGroupOutput} Success
		 */
		DeleteGroup(requestBody: DeleteGroupPostBody): Observable<DeleteGroupOutput> {
			return this.http.post<DeleteGroupOutput>(this.baseUri + 'delete-group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the current status of optional features in Resource Groups.
		 * Post get-account-settings
		 * @return {GetAccountSettingsOutput} Success
		 */
		GetAccountSettings(): Observable<GetAccountSettingsOutput> {
			return this.http.post<GetAccountSettingsOutput>(this.baseUri + 'get-account-settings', null, {});
		}

		/**
		 * <p>Returns information about a specified resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetGroup</code> </p> </li> </ul>
		 * Post get-group
		 * @return {GetGroupOutput} Success
		 */
		GetGroup(requestBody: GetGroupPostBody): Observable<GetGroupOutput> {
			return this.http.post<GetGroupOutput>(this.baseUri + 'get-group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the service configuration associated with the specified resource group. For details about the service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetGroupConfiguration</code> </p> </li> </ul>
		 * Post get-group-configuration
		 * @return {GetGroupConfigurationOutput} Success
		 */
		GetGroupConfiguration(requestBody: GetGroupConfigurationPostBody): Observable<GetGroupConfigurationOutput> {
			return this.http.post<GetGroupConfigurationOutput>(this.baseUri + 'get-group-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the resource query associated with the specified resource group. For more information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetGroupQuery</code> </p> </li> </ul>
		 * Post get-group-query
		 * @return {GetGroupQueryOutput} Success
		 */
		GetGroupQuery(requestBody: GetGroupQueryPostBody): Observable<GetGroupQueryOutput> {
			return this.http.post<GetGroupQueryOutput>(this.baseUri + 'get-group-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of tags that are associated with a resource group, specified by an ARN.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GetTags</code> </p> </li> </ul>
		 * Get resources/{Arn}/tags
		 * @param {string} Arn The ARN of the resource group whose tags you want to retrieve.
		 *     Min length: 12    Max length: 1600
		 * @return {GetTagsOutput} Success
		 */
		GetTags(Arn: string): Observable<GetTagsOutput> {
			return this.http.get<GetTagsOutput>(this.baseUri + 'resources/' + (Arn == null ? '' : encodeURIComponent(Arn)) + '/tags', {});
		}

		/**
		 * <p>Adds tags to a resource group with the specified ARN. Existing tags on a resource group are not changed if they are not specified in the request parameters.</p> <important> <p>Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.</p> </important> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:Tag</code> </p> </li> </ul>
		 * Put resources/{Arn}/tags
		 * @param {string} Arn The ARN of the resource group to which to add tags.
		 *     Min length: 12    Max length: 1600
		 * @return {TagOutput} Success
		 */
		Tag(Arn: string, requestBody: TagPutBody): Observable<TagOutput> {
			return this.http.put<TagOutput>(this.baseUri + 'resources/' + (Arn == null ? '' : encodeURIComponent(Arn)) + '/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes tags from a specified resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:Untag</code> </p> </li> </ul>
		 * Patch resources/{Arn}/tags
		 * @param {string} Arn The ARN of the resource group from which to remove tags. The command removed both the specified keys and any values associated with those keys.
		 *     Min length: 12    Max length: 1600
		 * @return {UntagOutput} Success
		 */
		Untag(Arn: string, requestBody: UntagPatchBody): Observable<UntagOutput> {
			return this.http.patch<UntagOutput>(this.baseUri + 'resources/' + (Arn == null ? '' : encodeURIComponent(Arn)) + '/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds the specified resources to the specified group.</p> <important> <p>You can use this operation with only resource groups that are configured with the following types:</p> <ul> <li> <p> <code>AWS::EC2::HostManagement</code> </p> </li> <li> <p> <code>AWS::EC2::CapacityReservationPool</code> </p> </li> </ul> <p>Other resource group type and resource types aren't currently supported by this operation.</p> </important> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:GroupResources</code> </p> </li> </ul>
		 * Post group-resources
		 * @return {GroupResourcesOutput} Success
		 */
		GroupResources(requestBody: GroupResourcesPostBody): Observable<GroupResourcesOutput> {
			return this.http.post<GroupResourcesOutput>(this.baseUri + 'group-resources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of ARNs of the resources that are members of a specified resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:ListGroupResources</code> </p> </li> <li> <p> <code>cloudformation:DescribeStacks</code> </p> </li> <li> <p> <code>cloudformation:ListStackResources</code> </p> </li> <li> <p> <code>tag:GetResources</code> </p> </li> </ul>
		 * Post list-group-resources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupResourcesOutput} Success
		 */
		ListGroupResources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupResourcesPostBody): Observable<ListGroupResourcesOutput> {
			return this.http.post<ListGroupResourcesOutput>(this.baseUri + 'list-group-resources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of existing Resource Groups in your account.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:ListGroups</code> </p> </li> </ul>
		 * Post groups-list
		 * @param {number} maxResults The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} nextToken The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.
		 *     Min length: 0    Max length: 8192
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsOutput} Success
		 */
		ListGroups(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupsPostBody): Observable<ListGroupsOutput> {
			return this.http.post<ListGroupsOutput>(this.baseUri + 'groups-list?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a service configuration to the specified group. This occurs asynchronously, and can take time to complete. You can use <a>GetGroupConfiguration</a> to check the status of the update.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:PutGroupConfiguration</code> </p> </li> </ul>
		 * Post put-group-configuration
		 * @return {void} 
		 */
		PutGroupConfiguration(requestBody: PutGroupConfigurationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'put-group-configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns a list of Amazon Web Services resource identifiers that matches the specified query. The query uses the same format as a resource query in a <a>CreateGroup</a> or <a>UpdateGroupQuery</a> operation.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:SearchResources</code> </p> </li> <li> <p> <code>cloudformation:DescribeStacks</code> </p> </li> <li> <p> <code>cloudformation:ListStackResources</code> </p> </li> <li> <p> <code>tag:GetResources</code> </p> </li> </ul>
		 * Post resources/search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchResourcesOutput} Success
		 */
		SearchResources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchResourcesPostBody): Observable<SearchResourcesOutput> {
			return this.http.post<SearchResourcesOutput>(this.baseUri + 'resources/search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified resources from the specified group. This operation works only with static groups that you populated using the <a>GroupResources</a> operation. It doesn't work with any resource groups that are automatically populated by tag-based or CloudFormation stack-based queries.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:UngroupResources</code> </p> </li> </ul>
		 * Post ungroup-resources
		 * @return {UngroupResourcesOutput} Success
		 */
		UngroupResources(requestBody: UngroupResourcesPostBody): Observable<UngroupResourcesOutput> {
			return this.http.post<UngroupResourcesOutput>(this.baseUri + 'ungroup-resources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Turns on or turns off optional features in Resource Groups.</p> <p>The preceding example shows that the request to turn on group lifecycle events is <code>IN_PROGRESS</code>. You can call the <a>GetAccountSettings</a> operation to check for completion by looking for <code>GroupLifecycleEventsStatus</code> to change to <code>ACTIVE</code>.</p>
		 * Post update-account-settings
		 * @return {UpdateAccountSettingsOutput} Success
		 */
		UpdateAccountSettings(requestBody: UpdateAccountSettingsPostBody): Observable<UpdateAccountSettingsOutput> {
			return this.http.post<UpdateAccountSettingsOutput>(this.baseUri + 'update-account-settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the description for an existing group. You cannot update the name of a resource group.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:UpdateGroup</code> </p> </li> </ul>
		 * Post update-group
		 * @return {UpdateGroupOutput} Success
		 */
		UpdateGroup(requestBody: UpdateGroupPostBody): Observable<UpdateGroupOutput> {
			return this.http.post<UpdateGroupOutput>(this.baseUri + 'update-group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the resource query of a group. For more information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.</p> <p> <b>Minimum permissions</b> </p> <p>To run this command, you must have the following permissions:</p> <ul> <li> <p> <code>resource-groups:UpdateGroupQuery</code> </p> </li> </ul>
		 * Post update-group-query
		 * @return {UpdateGroupQueryOutput} Success
		 */
		UpdateGroupQuery(requestBody: UpdateGroupQueryPostBody): Observable<UpdateGroupQueryOutput> {
			return this.http.post<UpdateGroupQueryOutput>(this.baseUri + 'update-group-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateGroupPostBody {

		/**
		 * The name of the group, which is the identifier of the group in other operations. You can't change the name of a resource group after you create it. A resource group name can consist of letters, numbers, hyphens, periods, and underscores. The name cannot start with <code>AWS</code> or <code>aws</code>; these are reserved. A resource group name must be unique within each Amazon Web Services Region in your Amazon Web Services account.
		 * Required
		 * Min length: 1
		 * Max length: 300
		 */
		Name: string;

		/**
		 * The description of the resource group. Descriptions can consist of letters, numbers, hyphens, underscores, periods, and spaces.
		 * Max length: 1024
		 */
		Description?: string | null;

		/** <p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query '{"Type":"TAG_FILTERS_1_0","Query":"{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[{\"Key\":\"Stage\",\"Values\":[\"Test\"]}]}"}'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p> */
		ResourceQuery?: CreateGroupPostBodyResourceQuery;

		/** The tags to add to the group. A tag is key-value pair string. */
		Tags?: {[id: string]: string };

		/**
		 * <p>A configuration associates the resource group with an Amazon Web Services service and specifies how the service can interact with the resources in the group. A configuration is an array of <a>GroupConfigurationItem</a> elements. For details about the syntax of service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <note> <p>A resource group can contain either a <code>Configuration</code> or a <code>ResourceQuery</code>, but not both.</p> </note>
		 * Maximum items: 2
		 */
		Configuration?: Array<GroupConfigurationItem>;
	}
	export interface CreateGroupPostBodyFormProperties {

		/**
		 * The name of the group, which is the identifier of the group in other operations. You can't change the name of a resource group after you create it. A resource group name can consist of letters, numbers, hyphens, periods, and underscores. The name cannot start with <code>AWS</code> or <code>aws</code>; these are reserved. A resource group name must be unique within each Amazon Web Services Region in your Amazon Web Services account.
		 * Required
		 * Min length: 1
		 * Max length: 300
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the resource group. Descriptions can consist of letters, numbers, hyphens, underscores, periods, and spaces.
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/** The tags to add to the group. A tag is key-value pair string. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateGroupPostBodyFormGroup() {
		return new FormGroup<CreateGroupPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300), Validators.pattern('[a-zA-Z0-9_\.-]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\sa-zA-Z0-9_\.-]*')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateGroupPostBodyResourceQuery {
		Type?: QueryType;
		Query?: string;
	}
	export interface CreateGroupPostBodyResourceQueryFormProperties {
		Type: FormControl<QueryType | null | undefined>,
		Query: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupPostBodyResourceQueryFormGroup() {
		return new FormGroup<CreateGroupPostBodyResourceQueryFormProperties>({
			Type: new FormControl<QueryType | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupPostBody {

		/**
		 * Deprecated - don't use this parameter. Use <code>Group</code> instead.
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName?: string | null;

		/**
		 * The name or the ARN of the resource group to delete.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group?: string | null;
	}
	export interface DeleteGroupPostBodyFormProperties {

		/**
		 * Deprecated - don't use this parameter. Use <code>Group</code> instead.
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The name or the ARN of the resource group to delete.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupPostBodyFormGroup() {
		return new FormGroup<DeleteGroupPostBodyFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300), Validators.pattern('[a-zA-Z0-9_\.-]+')]),
			Group: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group/)?[a-zA-Z0-9_\.-]{1,300}')]),
		});

	}

	export interface GetGroupPostBody {

		/**
		 * Deprecated - don't use this parameter. Use <code>Group</code> instead.
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName?: string | null;

		/**
		 * The name or the ARN of the resource group to retrieve.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group?: string | null;
	}
	export interface GetGroupPostBodyFormProperties {

		/**
		 * Deprecated - don't use this parameter. Use <code>Group</code> instead.
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The name or the ARN of the resource group to retrieve.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupPostBodyFormGroup() {
		return new FormGroup<GetGroupPostBodyFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300), Validators.pattern('[a-zA-Z0-9_\.-]+')]),
			Group: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group/)?[a-zA-Z0-9_\.-]{1,300}')]),
		});

	}

	export interface GetGroupConfigurationPostBody {

		/**
		 * The name or the ARN of the resource group for which you want to retrive the service configuration.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group?: string | null;
	}
	export interface GetGroupConfigurationPostBodyFormProperties {

		/**
		 * The name or the ARN of the resource group for which you want to retrive the service configuration.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupConfigurationPostBodyFormGroup() {
		return new FormGroup<GetGroupConfigurationPostBodyFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group/)?[a-zA-Z0-9_\.-]{1,300}')]),
		});

	}

	export interface GetGroupQueryPostBody {

		/**
		 * Don't use this parameter. Use <code>Group</code> instead.
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName?: string | null;

		/**
		 * The name or the ARN of the resource group to query.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group?: string | null;
	}
	export interface GetGroupQueryPostBodyFormProperties {

		/**
		 * Don't use this parameter. Use <code>Group</code> instead.
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The name or the ARN of the resource group to query.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupQueryPostBodyFormGroup() {
		return new FormGroup<GetGroupQueryPostBodyFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300), Validators.pattern('[a-zA-Z0-9_\.-]+')]),
			Group: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group/)?[a-zA-Z0-9_\.-]{1,300}')]),
		});

	}

	export interface TagPutBody {

		/**
		 * The tags to add to the specified resource group. A tag is a string-to-string map of key-value pairs.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagPutBodyFormProperties {

		/**
		 * The tags to add to the specified resource group. A tag is a string-to-string map of key-value pairs.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagPutBodyFormGroup() {
		return new FormGroup<TagPutBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagPatchBody {

		/**
		 * The keys of the tags to be removed.
		 * Required
		 */
		Keys: Array<string>;
	}
	export interface UntagPatchBodyFormProperties {
	}
	export function CreateUntagPatchBodyFormGroup() {
		return new FormGroup<UntagPatchBodyFormProperties>({
		});

	}

	export interface GroupResourcesPostBody {

		/**
		 * The name or the ARN of the resource group to add resources to.
		 * Required
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: string;

		/**
		 * The list of ARNs of the resources to be added to the group.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		ResourceArns: Array<string>;
	}
	export interface GroupResourcesPostBodyFormProperties {

		/**
		 * The name or the ARN of the resource group to add resources to.
		 * Required
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: FormControl<string | null | undefined>,
	}
	export function CreateGroupResourcesPostBodyFormGroup() {
		return new FormGroup<GroupResourcesPostBodyFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group/)?[a-zA-Z0-9_\.-]{1,300}')]),
		});

	}

	export interface ListGroupResourcesPostBody {

		/**
		 * <important> <p> <i> <b>Deprecated - don't use this parameter. Use the <code>Group</code> request field instead.</b> </i> </p> </important>
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName?: string | null;

		/**
		 * The name or the ARN of the resource group
		 * Min length: 1
		 * Max length: 1600
		 */
		Group?: string | null;

		/** <p>Filters, formatted as <a>ResourceFilter</a> objects, that you want to apply to a <code>ListGroupResources</code> operation. Filters the results to include only those of the specified resource types.</p> <ul> <li> <p> <code>resource-type</code> - Filter resources by their type. Specify up to five resource types in the format <code>AWS::ServiceCode::ResourceType</code>. For example, <code>AWS::EC2::Instance</code>, or <code>AWS::S3::Bucket</code>. </p> </li> </ul> <p>When you specify a <code>resource-type</code> filter for <code>ListGroupResources</code>, Resource Groups validates your filter resource types against the types that are defined in the query associated with the group. For example, if a group contains only S3 buckets because its query specifies only that resource type, but your <code>resource-type</code> filter includes EC2 instances, AWS Resource Groups does not filter for EC2 instances. In this case, a <code>ListGroupResources</code> request returns a <code>BadRequestException</code> error with a message similar to the following:</p> <p> <code>The resource types specified as filters in the request are not valid.</code> </p> <p>The error includes a list of resource types that failed the validation because they are not part of the query associated with the group. This validation doesn't occur when the group query specifies <code>AWS::AllSupported</code>, because a group based on such a query can contain any of the allowed resource types for the query type (tag-based or Amazon CloudFront stack-based queries).</p> */
		Filters?: Array<ResourceFilter>;

		/**
		 * The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/**
		 * The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.
		 * Min length: 0
		 * Max length: 8192
		 */
		NextToken?: string | null;
	}
	export interface ListGroupResourcesPostBodyFormProperties {

		/**
		 * <important> <p> <i> <b>Deprecated - don't use this parameter. Use the <code>Group</code> request field instead.</b> </i> </p> </important>
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The name or the ARN of the resource group
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: FormControl<string | null | undefined>,

		/**
		 * The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.
		 * Min length: 0
		 * Max length: 8192
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupResourcesPostBodyFormGroup() {
		return new FormGroup<ListGroupResourcesPostBodyFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300), Validators.pattern('[a-zA-Z0-9_\.-]+')]),
			Group: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group/)?[a-zA-Z0-9_\.-]{1,300}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(8192), Validators.pattern('^[a-zA-Z0-9+/]*={0,2}$')]),
		});

	}

	export interface ListGroupsPostBody {

		/** <p>Filters, formatted as <a>GroupFilter</a> objects, that you want to apply to a <code>ListGroups</code> operation.</p> <ul> <li> <p> <code>resource-type</code> - Filter the results to include only those of the specified resource types. Specify up to five resource types in the format <code>AWS::<i>ServiceCode</i>::<i>ResourceType</i> </code>. For example, <code>AWS::EC2::Instance</code>, or <code>AWS::S3::Bucket</code>.</p> </li> <li> <p> <code>configuration-type</code> - Filter the results to include only those groups that have the specified configuration types attached. The current supported values are:</p> <ul> <li> <p> <code>AWS::EC2::CapacityReservationPool</code> </p> </li> <li> <p> <code>AWS::EC2::HostManagement</code> </p> </li> </ul> </li> </ul> */
		Filters?: Array<GroupFilter>;
	}
	export interface ListGroupsPostBodyFormProperties {
	}
	export function CreateListGroupsPostBodyFormGroup() {
		return new FormGroup<ListGroupsPostBodyFormProperties>({
		});

	}

	export interface PutGroupConfigurationPostBody {

		/**
		 * The name or ARN of the resource group with the configuration that you want to update.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group?: string | null;

		/**
		 * <p>The new configuration to associate with the specified group. A configuration associates the resource group with an Amazon Web Services service and specifies how the service can interact with the resources in the group. A configuration is an array of <a>GroupConfigurationItem</a> elements.</p> <p>For information about the syntax of a service configuration, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p> <note> <p>A resource group can contain either a <code>Configuration</code> or a <code>ResourceQuery</code>, but not both.</p> </note>
		 * Maximum items: 2
		 */
		Configuration?: Array<GroupConfigurationItem>;
	}
	export interface PutGroupConfigurationPostBodyFormProperties {

		/**
		 * The name or ARN of the resource group with the configuration that you want to update.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: FormControl<string | null | undefined>,
	}
	export function CreatePutGroupConfigurationPostBodyFormGroup() {
		return new FormGroup<PutGroupConfigurationPostBodyFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group/)?[a-zA-Z0-9_\.-]{1,300}')]),
		});

	}

	export interface SearchResourcesPostBody {

		/**
		 * <p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query '{"Type":"TAG_FILTERS_1_0","Query":"{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[{\"Key\":\"Stage\",\"Values\":[\"Test\"]}]}"}'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p>
		 * Required
		 */
		ResourceQuery: SearchResourcesPostBodyResourceQuery;

		/**
		 * The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/**
		 * The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.
		 * Min length: 0
		 * Max length: 8192
		 */
		NextToken?: string | null;
	}
	export interface SearchResourcesPostBodyFormProperties {

		/**
		 * The total number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value that is specific to the operation. If additional items exist beyond the maximum you specify, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results. Note that the service might return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value provided by a previous call's <code>NextToken</code> response to indicate where the output should continue from.
		 * Min length: 0
		 * Max length: 8192
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesPostBodyFormGroup() {
		return new FormGroup<SearchResourcesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(8192), Validators.pattern('^[a-zA-Z0-9+/]*={0,2}$')]),
		});

	}

	export interface SearchResourcesPostBodyResourceQuery {
		Type?: QueryType;
		Query?: string;
	}
	export interface SearchResourcesPostBodyResourceQueryFormProperties {
		Type: FormControl<QueryType | null | undefined>,
		Query: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesPostBodyResourceQueryFormGroup() {
		return new FormGroup<SearchResourcesPostBodyResourceQueryFormProperties>({
			Type: new FormControl<QueryType | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UngroupResourcesPostBody {

		/**
		 * The name or the ARN of the resource group from which to remove the resources.
		 * Required
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: string;

		/**
		 * The ARNs of the resources to be removed from the group.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		ResourceArns: Array<string>;
	}
	export interface UngroupResourcesPostBodyFormProperties {

		/**
		 * The name or the ARN of the resource group from which to remove the resources.
		 * Required
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: FormControl<string | null | undefined>,
	}
	export function CreateUngroupResourcesPostBodyFormGroup() {
		return new FormGroup<UngroupResourcesPostBodyFormProperties>({
			Group: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group/)?[a-zA-Z0-9_\.-]{1,300}')]),
		});

	}

	export interface UpdateAccountSettingsPostBody {

		/** Specifies whether you want to turn <a href="https://docs.aws.amazon.com/ARG/latest/userguide/monitor-groups.html">group lifecycle events</a> on or off. */
		GroupLifecycleEventsDesiredStatus?: GroupLifecycleEventsDesiredStatus | null;
	}
	export interface UpdateAccountSettingsPostBodyFormProperties {

		/** Specifies whether you want to turn <a href="https://docs.aws.amazon.com/ARG/latest/userguide/monitor-groups.html">group lifecycle events</a> on or off. */
		GroupLifecycleEventsDesiredStatus: FormControl<GroupLifecycleEventsDesiredStatus | null | undefined>,
	}
	export function CreateUpdateAccountSettingsPostBodyFormGroup() {
		return new FormGroup<UpdateAccountSettingsPostBodyFormProperties>({
			GroupLifecycleEventsDesiredStatus: new FormControl<GroupLifecycleEventsDesiredStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupPostBody {

		/**
		 * Don't use this parameter. Use <code>Group</code> instead.
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName?: string | null;

		/**
		 * The name or the ARN of the resource group to modify.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group?: string | null;

		/**
		 * The new description that you want to update the resource group with. Descriptions can contain letters, numbers, hyphens, underscores, periods, and spaces.
		 * Max length: 1024
		 */
		Description?: string | null;
	}
	export interface UpdateGroupPostBodyFormProperties {

		/**
		 * Don't use this parameter. Use <code>Group</code> instead.
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The name or the ARN of the resource group to modify.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: FormControl<string | null | undefined>,

		/**
		 * The new description that you want to update the resource group with. Descriptions can contain letters, numbers, hyphens, underscores, periods, and spaces.
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupPostBodyFormGroup() {
		return new FormGroup<UpdateGroupPostBodyFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300), Validators.pattern('[a-zA-Z0-9_\.-]+')]),
			Group: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group/)?[a-zA-Z0-9_\.-]{1,300}')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\sa-zA-Z0-9_\.-]*')]),
		});

	}

	export interface UpdateGroupQueryPostBody {

		/**
		 * Don't use this parameter. Use <code>Group</code> instead.
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName?: string | null;

		/**
		 * The name or the ARN of the resource group to query.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group?: string | null;

		/**
		 * <p>The query you can use to define a resource group or a search for resources. A <code>ResourceQuery</code> specifies both a query <code>Type</code> and a <code>Query</code> string as JSON string objects. See the examples section for example JSON strings. For more information about creating a resource group with a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html">Build queries and groups in Resource Groups</a> in the <i>Resource Groups User Guide</i> </p> <p>When you combine all of the elements together into a single string, any double quotes that are embedded inside another double quote pair must be escaped by preceding the embedded double quote with a backslash character (\). For example, a complete <code>ResourceQuery</code> parameter must be formatted like the following CLI parameter example:</p> <p> <code>--resource-query '{"Type":"TAG_FILTERS_1_0","Query":"{\"ResourceTypeFilters\":[\"AWS::AllSupported\"],\"TagFilters\":[{\"Key\":\"Stage\",\"Values\":[\"Test\"]}]}"}'</code> </p> <p>In the preceding example, all of the double quote characters in the value part of the <code>Query</code> element must be escaped because the value itself is surrounded by double quotes. For more information, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters-quoting-strings.html">Quoting strings</a> in the <i>Command Line Interface User Guide</i>.</p> <p>For the complete list of resource types that you can use in the array value for <code>ResourceTypeFilters</code>, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html">Resources you can use with Resource Groups and Tag Editor</a> in the <i>Resource Groups User Guide</i>. For example:</p> <p> <code>"ResourceTypeFilters":["AWS::S3::Bucket", "AWS::EC2::Instance"]</code> </p>
		 * Required
		 */
		ResourceQuery: UpdateGroupQueryPostBodyResourceQuery;
	}
	export interface UpdateGroupQueryPostBodyFormProperties {

		/**
		 * Don't use this parameter. Use <code>Group</code> instead.
		 * Min length: 1
		 * Max length: 300
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The name or the ARN of the resource group to query.
		 * Min length: 1
		 * Max length: 1600
		 */
		Group: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupQueryPostBodyFormGroup() {
		return new FormGroup<UpdateGroupQueryPostBodyFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(300), Validators.pattern('[a-zA-Z0-9_\.-]+')]),
			Group: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('(arn:aws(-[a-z]+)*:resource-groups:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group/)?[a-zA-Z0-9_\.-]{1,300}')]),
		});

	}

	export interface UpdateGroupQueryPostBodyResourceQuery {
		Type?: QueryType;
		Query?: string;
	}
	export interface UpdateGroupQueryPostBodyResourceQueryFormProperties {
		Type: FormControl<QueryType | null | undefined>,
		Query: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupQueryPostBodyResourceQueryFormGroup() {
		return new FormGroup<UpdateGroupQueryPostBodyResourceQueryFormProperties>({
			Type: new FormControl<QueryType | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
		});

	}

}

