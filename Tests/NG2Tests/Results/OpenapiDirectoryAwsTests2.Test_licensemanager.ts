import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateLicenseConfigurationResponse {
		LicenseConfigurationArn?: string;
	}

	export interface CreateLicenseConfigurationRequest {
		Name: string;
		Description?: string;
		LicenseCountingType: CreateLicenseConfigurationRequestLicenseCountingType;
		LicenseCount?: number;
		LicenseCountHardLimit?: boolean;
		LicenseRules?: Array<string>;
		Tags?: Array<Tag>;
		ProductInformationList?: Array<ProductInformation>;
	}

	export enum CreateLicenseConfigurationRequestLicenseCountingType { vCPU = 0, Instance = 1, Core = 2, Socket = 3 }


	/** Details about a tag for a license configuration. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}


	/** Describes product information for a license configuration. */
	export interface ProductInformation {
		ResourceType: string;
		ProductInformationFilterList: Array<ProductInformationFilter>;
	}


	/** Describes product information filters. */
	export interface ProductInformationFilter {
		ProductInformationFilterName: string;
		ProductInformationFilterValue: Array<string>;
		ProductInformationFilterComparator: string;
	}

	export interface InvalidParameterValueException {
	}

	export interface ServerInternalException {
	}

	export interface ResourceLimitExceededException {
	}

	export interface AuthorizationException {
	}

	export interface AccessDeniedException {
	}

	export interface RateLimitExceededException {
	}

	export interface DeleteLicenseConfigurationResponse {
	}

	export interface DeleteLicenseConfigurationRequest {
		LicenseConfigurationArn: string;
	}

	export interface GetLicenseConfigurationResponse {
		LicenseConfigurationId?: string;
		LicenseConfigurationArn?: string;
		Name?: string;
		Description?: string;
		LicenseCountingType?: CreateLicenseConfigurationRequestLicenseCountingType;
		LicenseRules?: Array<string>;
		LicenseCount?: number;
		LicenseCountHardLimit?: boolean;
		ConsumedLicenses?: number;
		Status?: string;
		OwnerAccountId?: string;
		ConsumedLicenseSummaryList?: Array<ConsumedLicenseSummary>;
		ManagedResourceSummaryList?: Array<ManagedResourceSummary>;
		Tags?: Array<Tag>;
		ProductInformationList?: Array<ProductInformation>;

		/** Describes automated discovery. */
		AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
	}


	/** Details about license consumption. */
	export interface ConsumedLicenseSummary {
		ResourceType?: ConsumedLicenseSummaryResourceType;
		ConsumedLicenses?: number;
	}

	export enum ConsumedLicenseSummaryResourceType { EC2_INSTANCE = 0, EC2_HOST = 1, EC2_AMI = 2, RDS = 3, SYSTEMS_MANAGER_MANAGED_INSTANCE = 4 }


	/** Summary information about a managed resource. */
	export interface ManagedResourceSummary {
		ResourceType?: ConsumedLicenseSummaryResourceType;
		AssociationCount?: number;
	}


	/** Describes automated discovery. */
	export interface AutomatedDiscoveryInformation {
		LastRunTime?: Date;
	}

	export interface GetLicenseConfigurationRequest {
		LicenseConfigurationArn: string;
	}

	export interface GetServiceSettingsResponse {
		S3BucketArn?: string;
		SnsTopicArn?: string;

		/** Configuration information for AWS Organizations. */
		OrganizationConfiguration?: OrganizationConfiguration;
		EnableCrossAccountsDiscovery?: boolean;
		LicenseManagerResourceShareArn?: string;
	}


	/** Configuration information for AWS Organizations. */
	export interface OrganizationConfiguration {
		EnableIntegration: boolean;
	}

	export interface GetServiceSettingsRequest {
	}

	export interface ListAssociationsForLicenseConfigurationResponse {
		LicenseConfigurationAssociations?: Array<LicenseConfigurationAssociation>;
		NextToken?: string;
	}


	/** Describes an association with a license configuration. */
	export interface LicenseConfigurationAssociation {
		ResourceArn?: string;
		ResourceType?: ConsumedLicenseSummaryResourceType;
		ResourceOwnerId?: string;
		AssociationTime?: Date;
	}

	export interface ListAssociationsForLicenseConfigurationRequest {
		LicenseConfigurationArn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface FilterLimitExceededException {
	}

	export interface ListFailuresForLicenseConfigurationOperationsResponse {
		LicenseOperationFailureList?: Array<LicenseOperationFailure>;
		NextToken?: string;
	}


	/** Describes the failure of a license operation. */
	export interface LicenseOperationFailure {
		ResourceArn?: string;
		ResourceType?: ConsumedLicenseSummaryResourceType;
		ErrorMessage?: string;
		FailureTime?: Date;
		OperationName?: string;
		ResourceOwnerId?: string;
		OperationRequestedBy?: string;
		MetadataList?: Array<Metadata>;
	}


	/** Reserved. */
	export interface Metadata {
		Name?: string;
		Value?: string;
	}

	export interface ListFailuresForLicenseConfigurationOperationsRequest {
		LicenseConfigurationArn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListLicenseConfigurationsResponse {
		LicenseConfigurations?: Array<LicenseConfiguration>;
		NextToken?: string;
	}


	/** A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used. */
	export interface LicenseConfiguration {
		LicenseConfigurationId?: string;
		LicenseConfigurationArn?: string;
		Name?: string;
		Description?: string;
		LicenseCountingType?: CreateLicenseConfigurationRequestLicenseCountingType;
		LicenseRules?: Array<string>;
		LicenseCount?: number;
		LicenseCountHardLimit?: boolean;
		ConsumedLicenses?: number;
		Status?: string;
		OwnerAccountId?: string;
		ConsumedLicenseSummaryList?: Array<ConsumedLicenseSummary>;
		ManagedResourceSummaryList?: Array<ManagedResourceSummary>;
		ProductInformationList?: Array<ProductInformation>;

		/** Describes automated discovery. */
		AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
	}

	export interface ListLicenseConfigurationsRequest {
		LicenseConfigurationArns?: Array<string>;
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<Filter>;
	}


	/** A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
	export interface Filter {
		Name?: string;
		Values?: Array<string>;
	}

	export interface ListLicenseSpecificationsForResourceResponse {
		LicenseSpecifications?: Array<LicenseSpecification>;
		NextToken?: string;
	}


	/** Details for associating a license configuration with a resource. */
	export interface LicenseSpecification {
		LicenseConfigurationArn: string;
	}

	export interface ListLicenseSpecificationsForResourceRequest {
		ResourceArn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface ListResourceInventoryResponse {
		ResourceInventoryList?: Array<ResourceInventory>;
		NextToken?: string;
	}


	/** Details about a resource. */
	export interface ResourceInventory {
		ResourceId?: string;
		ResourceType?: ConsumedLicenseSummaryResourceType;
		ResourceArn?: string;
		Platform?: string;
		PlatformVersion?: string;
		ResourceOwningAccountId?: string;
	}

	export interface ListResourceInventoryRequest {
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<InventoryFilter>;
	}


	/** An inventory filter. */
	export interface InventoryFilter {
		Name: string;
		Condition: InventoryFilterCondition;
		Value?: string;
	}

	export enum InventoryFilterCondition { EQUALS = 0, NOT_EQUALS = 1, BEGINS_WITH = 2, CONTAINS = 3 }

	export interface FailedDependencyException {
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		ResourceArn: string;
	}

	export interface ListUsageForLicenseConfigurationResponse {
		LicenseConfigurationUsageList?: Array<LicenseConfigurationUsage>;
		NextToken?: string;
	}


	/** Details about the usage of a resource associated with a license configuration. */
	export interface LicenseConfigurationUsage {
		ResourceArn?: string;
		ResourceType?: ConsumedLicenseSummaryResourceType;
		ResourceStatus?: string;
		ResourceOwnerId?: string;
		AssociationTime?: Date;
		ConsumedLicenses?: number;
	}

	export interface ListUsageForLicenseConfigurationRequest {
		LicenseConfigurationArn: string;
		MaxResults?: number;
		NextToken?: string;
		Filters?: Array<Filter>;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceArn: string;
		Tags: Array<Tag>;
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceArn: string;
		TagKeys: Array<string>;
	}

	export interface UpdateLicenseConfigurationResponse {
	}

	export interface UpdateLicenseConfigurationRequest {
		LicenseConfigurationArn: string;
		LicenseConfigurationStatus?: UpdateLicenseConfigurationRequestLicenseConfigurationStatus;
		LicenseRules?: Array<string>;
		LicenseCount?: number;
		LicenseCountHardLimit?: boolean;
		Name?: string;
		Description?: string;
		ProductInformationList?: Array<ProductInformation>;
	}

	export enum UpdateLicenseConfigurationRequestLicenseConfigurationStatus { AVAILABLE = 0, DISABLED = 1 }

	export interface UpdateLicenseSpecificationsForResourceResponse {
	}

	export interface UpdateLicenseSpecificationsForResourceRequest {
		ResourceArn: string;
		AddLicenseSpecifications?: Array<LicenseSpecification>;
		RemoveLicenseSpecifications?: Array<LicenseSpecification>;
	}

	export interface InvalidResourceStateException {
	}

	export interface LicenseUsageException {
	}

	export interface UpdateServiceSettingsResponse {
	}

	export interface UpdateServiceSettingsRequest {
		S3BucketArn?: string;
		SnsTopicArn?: string;

		/** Configuration information for AWS Organizations. */
		OrganizationConfiguration?: OrganizationConfiguration;
		EnableCrossAccountsDiscovery?: boolean;
	}

	export enum ResourceType { EC2_INSTANCE = 0, EC2_HOST = 1, EC2_AMI = 2, RDS = 3, SYSTEMS_MANAGER_MANAGED_INSTANCE = 4 }

	export enum LicenseCountingType { vCPU = 0, Instance = 1, Core = 2, Socket = 3 }

	export enum LicenseConfigurationStatus { AVAILABLE = 0, DISABLED = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used.</p>
		 * Post #X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration
		 * @return {CreateLicenseConfigurationResponse} Success
		 */
		CreateLicenseConfiguration(requestBody: CreateLicenseConfigurationRequest): Observable<CreateLicenseConfigurationResponse> {
			return this.http.post<CreateLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.CreateLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
		 * Post #X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration
		 * @return {DeleteLicenseConfigurationResponse} Success
		 */
		DeleteLicenseConfiguration(requestBody: DeleteLicenseConfigurationRequest): Observable<DeleteLicenseConfigurationResponse> {
			return this.http.post<DeleteLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.DeleteLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets detailed information about the specified license configuration.
		 * Post #X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration
		 * @return {GetLicenseConfigurationResponse} Success
		 */
		GetLicenseConfiguration(requestBody: GetLicenseConfigurationRequest): Observable<GetLicenseConfigurationResponse> {
			return this.http.post<GetLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.GetLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the License Manager settings for the current Region.
		 * Post #X-Amz-Target=AWSLicenseManager.GetServiceSettings
		 * @return {GetServiceSettingsResponse} Success
		 */
		GetServiceSettings(requestBody: GetServiceSettingsRequest): Observable<GetServiceSettingsResponse> {
			return this.http.post<GetServiceSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.GetServiceSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
		 * Post #X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration
		 * @return {ListAssociationsForLicenseConfigurationResponse} Success
		 */
		ListAssociationsForLicenseConfiguration(requestBody: ListAssociationsForLicenseConfigurationRequest): Observable<ListAssociationsForLicenseConfigurationResponse> {
			return this.http.post<ListAssociationsForLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListAssociationsForLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the license configuration operations that failed.
		 * Post #X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations
		 * @return {ListFailuresForLicenseConfigurationOperationsResponse} Success
		 */
		ListFailuresForLicenseConfigurationOperations(requestBody: ListFailuresForLicenseConfigurationOperationsRequest): Observable<ListFailuresForLicenseConfigurationOperationsResponse> {
			return this.http.post<ListFailuresForLicenseConfigurationOperationsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListFailuresForLicenseConfigurationOperations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the license configurations for your account.
		 * Post #X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations
		 * @return {ListLicenseConfigurationsResponse} Success
		 */
		ListLicenseConfigurations(requestBody: ListLicenseConfigurationsRequest): Observable<ListLicenseConfigurationsResponse> {
			return this.http.post<ListLicenseConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListLicenseConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the license configurations for the specified resource.
		 * Post #X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource
		 * @return {ListLicenseSpecificationsForResourceResponse} Success
		 */
		ListLicenseSpecificationsForResource(requestBody: ListLicenseSpecificationsForResourceRequest): Observable<ListLicenseSpecificationsForResourceResponse> {
			return this.http.post<ListLicenseSpecificationsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListLicenseSpecificationsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists resources managed using Systems Manager inventory.
		 * Post #X-Amz-Target=AWSLicenseManager.ListResourceInventory
		 * @return {ListResourceInventoryResponse} Success
		 */
		ListResourceInventory(requestBody: ListResourceInventoryRequest): Observable<ListResourceInventoryResponse> {
			return this.http.post<ListResourceInventoryResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListResourceInventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the specified license configuration.
		 * Post #X-Amz-Target=AWSLicenseManager.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
		 * Post #X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration
		 * @return {ListUsageForLicenseConfigurationResponse} Success
		 */
		ListUsageForLicenseConfiguration(requestBody: ListUsageForLicenseConfigurationRequest): Observable<ListUsageForLicenseConfigurationResponse> {
			return this.http.post<ListUsageForLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.ListUsageForLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds the specified tags to the specified license configuration.
		 * Post #X-Amz-Target=AWSLicenseManager.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified license configuration.
		 * Post #X-Amz-Target=AWSLicenseManager.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the attributes of an existing license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used.</p>
		 * Post #X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration
		 * @return {UpdateLicenseConfigurationResponse} Success
		 */
		UpdateLicenseConfiguration(requestBody: UpdateLicenseConfigurationRequest): Observable<UpdateLicenseConfigurationResponse> {
			return this.http.post<UpdateLicenseConfigurationResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.UpdateLicenseConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or removes the specified license configurations for the specified AWS resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and AWS CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
		 * Post #X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource
		 * @return {UpdateLicenseSpecificationsForResourceResponse} Success
		 */
		UpdateLicenseSpecificationsForResource(requestBody: UpdateLicenseSpecificationsForResourceRequest): Observable<UpdateLicenseSpecificationsForResourceResponse> {
			return this.http.post<UpdateLicenseSpecificationsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.UpdateLicenseSpecificationsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates License Manager settings for the current Region.
		 * Post #X-Amz-Target=AWSLicenseManager.UpdateServiceSettings
		 * @return {UpdateServiceSettingsResponse} Success
		 */
		UpdateServiceSettings(requestBody: UpdateServiceSettingsRequest): Observable<UpdateServiceSettingsResponse> {
			return this.http.post<UpdateServiceSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSLicenseManager.UpdateServiceSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateLicenseConfigurationX_Amz_Target { AWSLicenseManager_CreateLicenseConfiguration = 0 }

	export enum DeleteLicenseConfigurationX_Amz_Target { AWSLicenseManager_DeleteLicenseConfiguration = 0 }

	export enum GetLicenseConfigurationX_Amz_Target { AWSLicenseManager_GetLicenseConfiguration = 0 }

	export enum GetServiceSettingsX_Amz_Target { AWSLicenseManager_GetServiceSettings = 0 }

	export enum ListAssociationsForLicenseConfigurationX_Amz_Target { AWSLicenseManager_ListAssociationsForLicenseConfiguration = 0 }

	export enum ListFailuresForLicenseConfigurationOperationsX_Amz_Target { AWSLicenseManager_ListFailuresForLicenseConfigurationOperations = 0 }

	export enum ListLicenseConfigurationsX_Amz_Target { AWSLicenseManager_ListLicenseConfigurations = 0 }

	export enum ListLicenseSpecificationsForResourceX_Amz_Target { AWSLicenseManager_ListLicenseSpecificationsForResource = 0 }

	export enum ListResourceInventoryX_Amz_Target { AWSLicenseManager_ListResourceInventory = 0 }

	export enum ListTagsForResourceX_Amz_Target { AWSLicenseManager_ListTagsForResource = 0 }

	export enum ListUsageForLicenseConfigurationX_Amz_Target { AWSLicenseManager_ListUsageForLicenseConfiguration = 0 }

	export enum TagResourceX_Amz_Target { AWSLicenseManager_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AWSLicenseManager_UntagResource = 0 }

	export enum UpdateLicenseConfigurationX_Amz_Target { AWSLicenseManager_UpdateLicenseConfiguration = 0 }

	export enum UpdateLicenseSpecificationsForResourceX_Amz_Target { AWSLicenseManager_UpdateLicenseSpecificationsForResource = 0 }

	export enum UpdateServiceSettingsX_Amz_Target { AWSLicenseManager_UpdateServiceSettings = 0 }

}

