import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateLicenseConfigurationResponse {
		LicenseConfigurationArn?: string | null;
	}
	export interface CreateLicenseConfigurationResponseFormProperties {
		LicenseConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateLicenseConfigurationResponseFormGroup() {
		return new FormGroup<CreateLicenseConfigurationResponseFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLicenseConfigurationRequest {

		/** Required */
		Name: string;
		Description?: string | null;

		/** Required */
		LicenseCountingType: CreateLicenseConfigurationRequestLicenseCountingType;
		LicenseCount?: number | null;
		LicenseCountHardLimit?: boolean | null;
		LicenseRules?: Array<string>;
		Tags?: Array<Tag>;
		ProductInformationList?: Array<ProductInformation>;
	}
	export interface CreateLicenseConfigurationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		LicenseCountingType: FormControl<CreateLicenseConfigurationRequestLicenseCountingType | null | undefined>,
		LicenseCount: FormControl<number | null | undefined>,
		LicenseCountHardLimit: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateLicenseConfigurationRequestFormGroup() {
		return new FormGroup<CreateLicenseConfigurationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			LicenseCountingType: new FormControl<CreateLicenseConfigurationRequestLicenseCountingType | null | undefined>(undefined, [Validators.required]),
			LicenseCount: new FormControl<number | null | undefined>(undefined),
			LicenseCountHardLimit: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CreateLicenseConfigurationRequestLicenseCountingType { vCPU = 0, Instance = 1, Core = 2, Socket = 3 }


	/** Details about a tag for a license configuration. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** Details about a tag for a license configuration. */
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


	/** Describes product information for a license configuration. */
	export interface ProductInformation {

		/** Required */
		ResourceType: string;

		/** Required */
		ProductInformationFilterList: Array<ProductInformationFilter>;
	}

	/** Describes product information for a license configuration. */
	export interface ProductInformationFormProperties {

		/** Required */
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateProductInformationFormGroup() {
		return new FormGroup<ProductInformationFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes product information filters. */
	export interface ProductInformationFilter {

		/** Required */
		ProductInformationFilterName: string;

		/** Required */
		ProductInformationFilterValue: Array<string>;

		/** Required */
		ProductInformationFilterComparator: string;
	}

	/** Describes product information filters. */
	export interface ProductInformationFilterFormProperties {

		/** Required */
		ProductInformationFilterName: FormControl<string | null | undefined>,

		/** Required */
		ProductInformationFilterComparator: FormControl<string | null | undefined>,
	}
	export function CreateProductInformationFilterFormGroup() {
		return new FormGroup<ProductInformationFilterFormProperties>({
			ProductInformationFilterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductInformationFilterComparator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
		});

	}

	export interface ServerInternalException {
	}
	export interface ServerInternalExceptionFormProperties {
	}
	export function CreateServerInternalExceptionFormGroup() {
		return new FormGroup<ServerInternalExceptionFormProperties>({
		});

	}

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
		});

	}

	export interface AuthorizationException {
	}
	export interface AuthorizationExceptionFormProperties {
	}
	export function CreateAuthorizationExceptionFormGroup() {
		return new FormGroup<AuthorizationExceptionFormProperties>({
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

	export interface RateLimitExceededException {
	}
	export interface RateLimitExceededExceptionFormProperties {
	}
	export function CreateRateLimitExceededExceptionFormGroup() {
		return new FormGroup<RateLimitExceededExceptionFormProperties>({
		});

	}

	export interface DeleteLicenseConfigurationResponse {
	}
	export interface DeleteLicenseConfigurationResponseFormProperties {
	}
	export function CreateDeleteLicenseConfigurationResponseFormGroup() {
		return new FormGroup<DeleteLicenseConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteLicenseConfigurationRequest {

		/** Required */
		LicenseConfigurationArn: string;
	}
	export interface DeleteLicenseConfigurationRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLicenseConfigurationRequestFormGroup() {
		return new FormGroup<DeleteLicenseConfigurationRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLicenseConfigurationResponse {
		LicenseConfigurationId?: string | null;
		LicenseConfigurationArn?: string | null;
		Name?: string | null;
		Description?: string | null;
		LicenseCountingType?: CreateLicenseConfigurationRequestLicenseCountingType | null;
		LicenseRules?: Array<string>;
		LicenseCount?: number | null;
		LicenseCountHardLimit?: boolean | null;
		ConsumedLicenses?: number | null;
		Status?: string | null;
		OwnerAccountId?: string | null;
		ConsumedLicenseSummaryList?: Array<ConsumedLicenseSummary>;
		ManagedResourceSummaryList?: Array<ManagedResourceSummary>;
		Tags?: Array<Tag>;
		ProductInformationList?: Array<ProductInformation>;

		/** Describes automated discovery. */
		AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
	}
	export interface GetLicenseConfigurationResponseFormProperties {
		LicenseConfigurationId: FormControl<string | null | undefined>,
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LicenseCountingType: FormControl<CreateLicenseConfigurationRequestLicenseCountingType | null | undefined>,
		LicenseCount: FormControl<number | null | undefined>,
		LicenseCountHardLimit: FormControl<boolean | null | undefined>,
		ConsumedLicenses: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
	}
	export function CreateGetLicenseConfigurationResponseFormGroup() {
		return new FormGroup<GetLicenseConfigurationResponseFormProperties>({
			LicenseConfigurationId: new FormControl<string | null | undefined>(undefined),
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LicenseCountingType: new FormControl<CreateLicenseConfigurationRequestLicenseCountingType | null | undefined>(undefined),
			LicenseCount: new FormControl<number | null | undefined>(undefined),
			LicenseCountHardLimit: new FormControl<boolean | null | undefined>(undefined),
			ConsumedLicenses: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about license consumption. */
	export interface ConsumedLicenseSummary {
		ResourceType?: ConsumedLicenseSummaryResourceType | null;
		ConsumedLicenses?: number | null;
	}

	/** Details about license consumption. */
	export interface ConsumedLicenseSummaryFormProperties {
		ResourceType: FormControl<ConsumedLicenseSummaryResourceType | null | undefined>,
		ConsumedLicenses: FormControl<number | null | undefined>,
	}
	export function CreateConsumedLicenseSummaryFormGroup() {
		return new FormGroup<ConsumedLicenseSummaryFormProperties>({
			ResourceType: new FormControl<ConsumedLicenseSummaryResourceType | null | undefined>(undefined),
			ConsumedLicenses: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ConsumedLicenseSummaryResourceType { EC2_INSTANCE = 0, EC2_HOST = 1, EC2_AMI = 2, RDS = 3, SYSTEMS_MANAGER_MANAGED_INSTANCE = 4 }


	/** Summary information about a managed resource. */
	export interface ManagedResourceSummary {
		ResourceType?: ConsumedLicenseSummaryResourceType | null;
		AssociationCount?: number | null;
	}

	/** Summary information about a managed resource. */
	export interface ManagedResourceSummaryFormProperties {
		ResourceType: FormControl<ConsumedLicenseSummaryResourceType | null | undefined>,
		AssociationCount: FormControl<number | null | undefined>,
	}
	export function CreateManagedResourceSummaryFormGroup() {
		return new FormGroup<ManagedResourceSummaryFormProperties>({
			ResourceType: new FormControl<ConsumedLicenseSummaryResourceType | null | undefined>(undefined),
			AssociationCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes automated discovery. */
	export interface AutomatedDiscoveryInformation {
		LastRunTime?: Date | null;
	}

	/** Describes automated discovery. */
	export interface AutomatedDiscoveryInformationFormProperties {
		LastRunTime: FormControl<Date | null | undefined>,
	}
	export function CreateAutomatedDiscoveryInformationFormGroup() {
		return new FormGroup<AutomatedDiscoveryInformationFormProperties>({
			LastRunTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetLicenseConfigurationRequest {

		/** Required */
		LicenseConfigurationArn: string;
	}
	export interface GetLicenseConfigurationRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateGetLicenseConfigurationRequestFormGroup() {
		return new FormGroup<GetLicenseConfigurationRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceSettingsResponse {
		S3BucketArn?: string | null;
		SnsTopicArn?: string | null;

		/** Configuration information for AWS Organizations. */
		OrganizationConfiguration?: OrganizationConfiguration;
		EnableCrossAccountsDiscovery?: boolean | null;
		LicenseManagerResourceShareArn?: string | null;
	}
	export interface GetServiceSettingsResponseFormProperties {
		S3BucketArn: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		EnableCrossAccountsDiscovery: FormControl<boolean | null | undefined>,
		LicenseManagerResourceShareArn: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceSettingsResponseFormGroup() {
		return new FormGroup<GetServiceSettingsResponseFormProperties>({
			S3BucketArn: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			EnableCrossAccountsDiscovery: new FormControl<boolean | null | undefined>(undefined),
			LicenseManagerResourceShareArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration information for AWS Organizations. */
	export interface OrganizationConfiguration {

		/** Required */
		EnableIntegration: boolean;
	}

	/** Configuration information for AWS Organizations. */
	export interface OrganizationConfigurationFormProperties {

		/** Required */
		EnableIntegration: FormControl<boolean | null | undefined>,
	}
	export function CreateOrganizationConfigurationFormGroup() {
		return new FormGroup<OrganizationConfigurationFormProperties>({
			EnableIntegration: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetServiceSettingsRequest {
	}
	export interface GetServiceSettingsRequestFormProperties {
	}
	export function CreateGetServiceSettingsRequestFormGroup() {
		return new FormGroup<GetServiceSettingsRequestFormProperties>({
		});

	}

	export interface ListAssociationsForLicenseConfigurationResponse {
		LicenseConfigurationAssociations?: Array<LicenseConfigurationAssociation>;
		NextToken?: string | null;
	}
	export interface ListAssociationsForLicenseConfigurationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociationsForLicenseConfigurationResponseFormGroup() {
		return new FormGroup<ListAssociationsForLicenseConfigurationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an association with a license configuration. */
	export interface LicenseConfigurationAssociation {
		ResourceArn?: string | null;
		ResourceType?: ConsumedLicenseSummaryResourceType | null;
		ResourceOwnerId?: string | null;
		AssociationTime?: Date | null;
	}

	/** Describes an association with a license configuration. */
	export interface LicenseConfigurationAssociationFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<ConsumedLicenseSummaryResourceType | null | undefined>,
		ResourceOwnerId: FormControl<string | null | undefined>,
		AssociationTime: FormControl<Date | null | undefined>,
	}
	export function CreateLicenseConfigurationAssociationFormGroup() {
		return new FormGroup<LicenseConfigurationAssociationFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ConsumedLicenseSummaryResourceType | null | undefined>(undefined),
			ResourceOwnerId: new FormControl<string | null | undefined>(undefined),
			AssociationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAssociationsForLicenseConfigurationRequest {

		/** Required */
		LicenseConfigurationArn: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListAssociationsForLicenseConfigurationRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociationsForLicenseConfigurationRequestFormGroup() {
		return new FormGroup<ListAssociationsForLicenseConfigurationRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilterLimitExceededException {
	}
	export interface FilterLimitExceededExceptionFormProperties {
	}
	export function CreateFilterLimitExceededExceptionFormGroup() {
		return new FormGroup<FilterLimitExceededExceptionFormProperties>({
		});

	}

	export interface ListFailuresForLicenseConfigurationOperationsResponse {
		LicenseOperationFailureList?: Array<LicenseOperationFailure>;
		NextToken?: string | null;
	}
	export interface ListFailuresForLicenseConfigurationOperationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFailuresForLicenseConfigurationOperationsResponseFormGroup() {
		return new FormGroup<ListFailuresForLicenseConfigurationOperationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the failure of a license operation. */
	export interface LicenseOperationFailure {
		ResourceArn?: string | null;
		ResourceType?: ConsumedLicenseSummaryResourceType | null;
		ErrorMessage?: string | null;
		FailureTime?: Date | null;
		OperationName?: string | null;
		ResourceOwnerId?: string | null;
		OperationRequestedBy?: string | null;
		MetadataList?: Array<Metadata>;
	}

	/** Describes the failure of a license operation. */
	export interface LicenseOperationFailureFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<ConsumedLicenseSummaryResourceType | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		FailureTime: FormControl<Date | null | undefined>,
		OperationName: FormControl<string | null | undefined>,
		ResourceOwnerId: FormControl<string | null | undefined>,
		OperationRequestedBy: FormControl<string | null | undefined>,
	}
	export function CreateLicenseOperationFailureFormGroup() {
		return new FormGroup<LicenseOperationFailureFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ConsumedLicenseSummaryResourceType | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			FailureTime: new FormControl<Date | null | undefined>(undefined),
			OperationName: new FormControl<string | null | undefined>(undefined),
			ResourceOwnerId: new FormControl<string | null | undefined>(undefined),
			OperationRequestedBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved. */
	export interface Metadata {
		Name?: string | null;
		Value?: string | null;
	}

	/** Reserved. */
	export interface MetadataFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFailuresForLicenseConfigurationOperationsRequest {

		/** Required */
		LicenseConfigurationArn: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListFailuresForLicenseConfigurationOperationsRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFailuresForLicenseConfigurationOperationsRequestFormGroup() {
		return new FormGroup<ListFailuresForLicenseConfigurationOperationsRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLicenseConfigurationsResponse {
		LicenseConfigurations?: Array<LicenseConfiguration>;
		NextToken?: string | null;
	}
	export interface ListLicenseConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicenseConfigurationsResponseFormGroup() {
		return new FormGroup<ListLicenseConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used. */
	export interface LicenseConfiguration {
		LicenseConfigurationId?: string | null;
		LicenseConfigurationArn?: string | null;
		Name?: string | null;
		Description?: string | null;
		LicenseCountingType?: CreateLicenseConfigurationRequestLicenseCountingType | null;
		LicenseRules?: Array<string>;
		LicenseCount?: number | null;
		LicenseCountHardLimit?: boolean | null;
		ConsumedLicenses?: number | null;
		Status?: string | null;
		OwnerAccountId?: string | null;
		ConsumedLicenseSummaryList?: Array<ConsumedLicenseSummary>;
		ManagedResourceSummaryList?: Array<ManagedResourceSummary>;
		ProductInformationList?: Array<ProductInformation>;

		/** Describes automated discovery. */
		AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
	}

	/** A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM must be associated with a host), and the number of licenses purchased and used. */
	export interface LicenseConfigurationFormProperties {
		LicenseConfigurationId: FormControl<string | null | undefined>,
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LicenseCountingType: FormControl<CreateLicenseConfigurationRequestLicenseCountingType | null | undefined>,
		LicenseCount: FormControl<number | null | undefined>,
		LicenseCountHardLimit: FormControl<boolean | null | undefined>,
		ConsumedLicenses: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
	}
	export function CreateLicenseConfigurationFormGroup() {
		return new FormGroup<LicenseConfigurationFormProperties>({
			LicenseConfigurationId: new FormControl<string | null | undefined>(undefined),
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LicenseCountingType: new FormControl<CreateLicenseConfigurationRequestLicenseCountingType | null | undefined>(undefined),
			LicenseCount: new FormControl<number | null | undefined>(undefined),
			LicenseCountHardLimit: new FormControl<boolean | null | undefined>(undefined),
			ConsumedLicenses: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLicenseConfigurationsRequest {
		LicenseConfigurationArns?: Array<string>;
		MaxResults?: number | null;
		NextToken?: string | null;
		Filters?: Array<Filter>;
	}
	export interface ListLicenseConfigurationsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicenseConfigurationsRequestFormGroup() {
		return new FormGroup<ListLicenseConfigurationsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
	export interface Filter {
		Name?: string | null;
		Values?: Array<string>;
	}

	/** A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. */
	export interface FilterFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLicenseSpecificationsForResourceResponse {
		LicenseSpecifications?: Array<LicenseSpecification>;
		NextToken?: string | null;
	}
	export interface ListLicenseSpecificationsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicenseSpecificationsForResourceResponseFormGroup() {
		return new FormGroup<ListLicenseSpecificationsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for associating a license configuration with a resource. */
	export interface LicenseSpecification {

		/** Required */
		LicenseConfigurationArn: string;
	}

	/** Details for associating a license configuration with a resource. */
	export interface LicenseSpecificationFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateLicenseSpecificationFormGroup() {
		return new FormGroup<LicenseSpecificationFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListLicenseSpecificationsForResourceRequest {

		/** Required */
		ResourceArn: string;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListLicenseSpecificationsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLicenseSpecificationsForResourceRequestFormGroup() {
		return new FormGroup<ListLicenseSpecificationsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceInventoryResponse {
		ResourceInventoryList?: Array<ResourceInventory>;
		NextToken?: string | null;
	}
	export interface ListResourceInventoryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceInventoryResponseFormGroup() {
		return new FormGroup<ListResourceInventoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a resource. */
	export interface ResourceInventory {
		ResourceId?: string | null;
		ResourceType?: ConsumedLicenseSummaryResourceType | null;
		ResourceArn?: string | null;
		Platform?: string | null;
		PlatformVersion?: string | null;
		ResourceOwningAccountId?: string | null;
	}

	/** Details about a resource. */
	export interface ResourceInventoryFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		ResourceType: FormControl<ConsumedLicenseSummaryResourceType | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		Platform: FormControl<string | null | undefined>,
		PlatformVersion: FormControl<string | null | undefined>,
		ResourceOwningAccountId: FormControl<string | null | undefined>,
	}
	export function CreateResourceInventoryFormGroup() {
		return new FormGroup<ResourceInventoryFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ConsumedLicenseSummaryResourceType | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined),
			PlatformVersion: new FormControl<string | null | undefined>(undefined),
			ResourceOwningAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourceInventoryRequest {
		MaxResults?: number | null;
		NextToken?: string | null;
		Filters?: Array<InventoryFilter>;
	}
	export interface ListResourceInventoryRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourceInventoryRequestFormGroup() {
		return new FormGroup<ListResourceInventoryRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An inventory filter. */
	export interface InventoryFilter {

		/** Required */
		Name: string;

		/** Required */
		Condition: InventoryFilterCondition;
		Value?: string | null;
	}

	/** An inventory filter. */
	export interface InventoryFilterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Condition: FormControl<InventoryFilterCondition | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateInventoryFilterFormGroup() {
		return new FormGroup<InventoryFilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Condition: new FormControl<InventoryFilterCondition | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InventoryFilterCondition { EQUALS = 0, NOT_EQUALS = 1, BEGINS_WITH = 2, CONTAINS = 3 }

	export interface FailedDependencyException {
	}
	export interface FailedDependencyExceptionFormProperties {
	}
	export function CreateFailedDependencyExceptionFormGroup() {
		return new FormGroup<FailedDependencyExceptionFormProperties>({
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListUsageForLicenseConfigurationResponse {
		LicenseConfigurationUsageList?: Array<LicenseConfigurationUsage>;
		NextToken?: string | null;
	}
	export interface ListUsageForLicenseConfigurationResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsageForLicenseConfigurationResponseFormGroup() {
		return new FormGroup<ListUsageForLicenseConfigurationResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the usage of a resource associated with a license configuration. */
	export interface LicenseConfigurationUsage {
		ResourceArn?: string | null;
		ResourceType?: ConsumedLicenseSummaryResourceType | null;
		ResourceStatus?: string | null;
		ResourceOwnerId?: string | null;
		AssociationTime?: Date | null;
		ConsumedLicenses?: number | null;
	}

	/** Details about the usage of a resource associated with a license configuration. */
	export interface LicenseConfigurationUsageFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<ConsumedLicenseSummaryResourceType | null | undefined>,
		ResourceStatus: FormControl<string | null | undefined>,
		ResourceOwnerId: FormControl<string | null | undefined>,
		AssociationTime: FormControl<Date | null | undefined>,
		ConsumedLicenses: FormControl<number | null | undefined>,
	}
	export function CreateLicenseConfigurationUsageFormGroup() {
		return new FormGroup<LicenseConfigurationUsageFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ConsumedLicenseSummaryResourceType | null | undefined>(undefined),
			ResourceStatus: new FormControl<string | null | undefined>(undefined),
			ResourceOwnerId: new FormControl<string | null | undefined>(undefined),
			AssociationTime: new FormControl<Date | null | undefined>(undefined),
			ConsumedLicenses: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListUsageForLicenseConfigurationRequest {

		/** Required */
		LicenseConfigurationArn: string;
		MaxResults?: number | null;
		NextToken?: string | null;
		Filters?: Array<Filter>;
	}
	export interface ListUsageForLicenseConfigurationRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsageForLicenseConfigurationRequestFormGroup() {
		return new FormGroup<ListUsageForLicenseConfigurationRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateLicenseConfigurationResponse {
	}
	export interface UpdateLicenseConfigurationResponseFormProperties {
	}
	export function CreateUpdateLicenseConfigurationResponseFormGroup() {
		return new FormGroup<UpdateLicenseConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateLicenseConfigurationRequest {

		/** Required */
		LicenseConfigurationArn: string;
		LicenseConfigurationStatus?: UpdateLicenseConfigurationRequestLicenseConfigurationStatus | null;
		LicenseRules?: Array<string>;
		LicenseCount?: number | null;
		LicenseCountHardLimit?: boolean | null;
		Name?: string | null;
		Description?: string | null;
		ProductInformationList?: Array<ProductInformation>;
	}
	export interface UpdateLicenseConfigurationRequestFormProperties {

		/** Required */
		LicenseConfigurationArn: FormControl<string | null | undefined>,
		LicenseConfigurationStatus: FormControl<UpdateLicenseConfigurationRequestLicenseConfigurationStatus | null | undefined>,
		LicenseCount: FormControl<number | null | undefined>,
		LicenseCountHardLimit: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLicenseConfigurationRequestFormGroup() {
		return new FormGroup<UpdateLicenseConfigurationRequestFormProperties>({
			LicenseConfigurationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LicenseConfigurationStatus: new FormControl<UpdateLicenseConfigurationRequestLicenseConfigurationStatus | null | undefined>(undefined),
			LicenseCount: new FormControl<number | null | undefined>(undefined),
			LicenseCountHardLimit: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateLicenseConfigurationRequestLicenseConfigurationStatus { AVAILABLE = 0, DISABLED = 1 }

	export interface UpdateLicenseSpecificationsForResourceResponse {
	}
	export interface UpdateLicenseSpecificationsForResourceResponseFormProperties {
	}
	export function CreateUpdateLicenseSpecificationsForResourceResponseFormGroup() {
		return new FormGroup<UpdateLicenseSpecificationsForResourceResponseFormProperties>({
		});

	}

	export interface UpdateLicenseSpecificationsForResourceRequest {

		/** Required */
		ResourceArn: string;
		AddLicenseSpecifications?: Array<LicenseSpecification>;
		RemoveLicenseSpecifications?: Array<LicenseSpecification>;
	}
	export interface UpdateLicenseSpecificationsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLicenseSpecificationsForResourceRequestFormGroup() {
		return new FormGroup<UpdateLicenseSpecificationsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidResourceStateException {
	}
	export interface InvalidResourceStateExceptionFormProperties {
	}
	export function CreateInvalidResourceStateExceptionFormGroup() {
		return new FormGroup<InvalidResourceStateExceptionFormProperties>({
		});

	}

	export interface LicenseUsageException {
	}
	export interface LicenseUsageExceptionFormProperties {
	}
	export function CreateLicenseUsageExceptionFormGroup() {
		return new FormGroup<LicenseUsageExceptionFormProperties>({
		});

	}

	export interface UpdateServiceSettingsResponse {
	}
	export interface UpdateServiceSettingsResponseFormProperties {
	}
	export function CreateUpdateServiceSettingsResponseFormGroup() {
		return new FormGroup<UpdateServiceSettingsResponseFormProperties>({
		});

	}

	export interface UpdateServiceSettingsRequest {
		S3BucketArn?: string | null;
		SnsTopicArn?: string | null;

		/** Configuration information for AWS Organizations. */
		OrganizationConfiguration?: OrganizationConfiguration;
		EnableCrossAccountsDiscovery?: boolean | null;
	}
	export interface UpdateServiceSettingsRequestFormProperties {
		S3BucketArn: FormControl<string | null | undefined>,
		SnsTopicArn: FormControl<string | null | undefined>,
		EnableCrossAccountsDiscovery: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateServiceSettingsRequestFormGroup() {
		return new FormGroup<UpdateServiceSettingsRequestFormProperties>({
			S3BucketArn: new FormControl<string | null | undefined>(undefined),
			SnsTopicArn: new FormControl<string | null | undefined>(undefined),
			EnableCrossAccountsDiscovery: new FormControl<boolean | null | undefined>(undefined),
		});

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

