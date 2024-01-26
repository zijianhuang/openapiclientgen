import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateDomainResponse {
	}
	export interface AssociateDomainResponseFormProperties {
	}
	export function CreateAssociateDomainResponseFormGroup() {
		return new FormGroup<AssociateDomainResponseFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
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

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
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

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
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

	export interface AssociateWebsiteAuthorizationProviderResponse {
		AuthorizationProviderId?: string;
	}
	export interface AssociateWebsiteAuthorizationProviderResponseFormProperties {
		AuthorizationProviderId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWebsiteAuthorizationProviderResponseFormGroup() {
		return new FormGroup<AssociateWebsiteAuthorizationProviderResponseFormProperties>({
			AuthorizationProviderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateWebsiteCertificateAuthorityResponse {
		WebsiteCaId?: string;
	}
	export interface AssociateWebsiteCertificateAuthorityResponseFormProperties {
		WebsiteCaId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWebsiteCertificateAuthorityResponseFormGroup() {
		return new FormGroup<AssociateWebsiteCertificateAuthorityResponseFormProperties>({
			WebsiteCaId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFleetResponse {
		FleetArn?: string;
	}
	export interface CreateFleetResponseFormProperties {
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFleetResponseFormGroup() {
		return new FormGroup<CreateFleetResponseFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteFleetResponse {
	}
	export interface DeleteFleetResponseFormProperties {
	}
	export function CreateDeleteFleetResponseFormGroup() {
		return new FormGroup<DeleteFleetResponseFormProperties>({
		});

	}

	export interface DescribeAuditStreamConfigurationResponse {
		AuditStreamArn?: string;
	}
	export interface DescribeAuditStreamConfigurationResponseFormProperties {
		AuditStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAuditStreamConfigurationResponseFormGroup() {
		return new FormGroup<DescribeAuditStreamConfigurationResponseFormProperties>({
			AuditStreamArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCompanyNetworkConfigurationResponse {
		VpcId?: string;
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}
	export interface DescribeCompanyNetworkConfigurationResponseFormProperties {
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCompanyNetworkConfigurationResponseFormGroup() {
		return new FormGroup<DescribeCompanyNetworkConfigurationResponseFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDeviceResponse {
		Status?: DeviceStatus;
		Model?: string;
		Manufacturer?: string;
		OperatingSystem?: string;
		OperatingSystemVersion?: string;
		PatchLevel?: string;
		FirstAccessedTime?: Date;
		LastAccessedTime?: Date;
		Username?: string;
	}
	export interface DescribeDeviceResponseFormProperties {
		Status: FormControl<DeviceStatus | null | undefined>,
		Model: FormControl<string | null | undefined>,
		Manufacturer: FormControl<string | null | undefined>,
		OperatingSystem: FormControl<string | null | undefined>,
		OperatingSystemVersion: FormControl<string | null | undefined>,
		PatchLevel: FormControl<string | null | undefined>,
		FirstAccessedTime: FormControl<Date | null | undefined>,
		LastAccessedTime: FormControl<Date | null | undefined>,
		Username: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDeviceResponseFormGroup() {
		return new FormGroup<DescribeDeviceResponseFormProperties>({
			Status: new FormControl<DeviceStatus | null | undefined>(undefined),
			Model: new FormControl<string | null | undefined>(undefined),
			Manufacturer: new FormControl<string | null | undefined>(undefined),
			OperatingSystem: new FormControl<string | null | undefined>(undefined),
			OperatingSystemVersion: new FormControl<string | null | undefined>(undefined),
			PatchLevel: new FormControl<string | null | undefined>(undefined),
			FirstAccessedTime: new FormControl<Date | null | undefined>(undefined),
			LastAccessedTime: new FormControl<Date | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceStatus { ACTIVE = 0, SIGNED_OUT = 1 }

	export interface DescribeDevicePolicyConfigurationResponse {
		DeviceCaCertificate?: string;
	}
	export interface DescribeDevicePolicyConfigurationResponseFormProperties {
		DeviceCaCertificate: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDevicePolicyConfigurationResponseFormGroup() {
		return new FormGroup<DescribeDevicePolicyConfigurationResponseFormProperties>({
			DeviceCaCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDomainResponse {
		DomainName?: string;
		DisplayName?: string;
		CreatedTime?: Date;
		DomainStatus?: DomainStatus;
		AcmCertificateArn?: string;
	}
	export interface DescribeDomainResponseFormProperties {
		DomainName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		DomainStatus: FormControl<DomainStatus | null | undefined>,
		AcmCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainResponseFormGroup() {
		return new FormGroup<DescribeDomainResponseFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			DomainStatus: new FormControl<DomainStatus | null | undefined>(undefined),
			AcmCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DomainStatus { PENDING_VALIDATION = 0, ASSOCIATING = 1, ACTIVE = 2, INACTIVE = 3, DISASSOCIATING = 4, DISASSOCIATED = 5, FAILED_TO_ASSOCIATE = 6, FAILED_TO_DISASSOCIATE = 7 }

	export interface DescribeFleetMetadataResponse {
		CreatedTime?: Date;
		LastUpdatedTime?: Date;
		FleetName?: string;
		DisplayName?: string;
		OptimizeForEndUserLocation?: boolean | null;
		CompanyCode?: string;
		FleetStatus?: FleetStatus;
		Tags?: TagMap;
	}
	export interface DescribeFleetMetadataResponseFormProperties {
		CreatedTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		FleetName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		OptimizeForEndUserLocation: FormControl<boolean | null | undefined>,
		CompanyCode: FormControl<string | null | undefined>,
		FleetStatus: FormControl<FleetStatus | null | undefined>,
	}
	export function CreateDescribeFleetMetadataResponseFormGroup() {
		return new FormGroup<DescribeFleetMetadataResponseFormProperties>({
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			FleetName: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			OptimizeForEndUserLocation: new FormControl<boolean | null | undefined>(undefined),
			CompanyCode: new FormControl<string | null | undefined>(undefined),
			FleetStatus: new FormControl<FleetStatus | null | undefined>(undefined),
		});

	}

	export enum FleetStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, DELETED = 3, FAILED_TO_CREATE = 4, FAILED_TO_DELETE = 5 }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface DescribeIdentityProviderConfigurationResponse {
		IdentityProviderType?: IdentityProviderType;
		ServiceProviderSamlMetadata?: string;
		IdentityProviderSamlMetadata?: string;
	}
	export interface DescribeIdentityProviderConfigurationResponseFormProperties {
		IdentityProviderType: FormControl<IdentityProviderType | null | undefined>,
		ServiceProviderSamlMetadata: FormControl<string | null | undefined>,
		IdentityProviderSamlMetadata: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIdentityProviderConfigurationResponseFormGroup() {
		return new FormGroup<DescribeIdentityProviderConfigurationResponseFormProperties>({
			IdentityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined),
			ServiceProviderSamlMetadata: new FormControl<string | null | undefined>(undefined),
			IdentityProviderSamlMetadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IdentityProviderType { SAML = 0 }

	export interface DescribeWebsiteCertificateAuthorityResponse {
		Certificate?: string;
		CreatedTime?: Date;
		DisplayName?: string;
	}
	export interface DescribeWebsiteCertificateAuthorityResponseFormProperties {
		Certificate: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWebsiteCertificateAuthorityResponseFormGroup() {
		return new FormGroup<DescribeWebsiteCertificateAuthorityResponseFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateDomainResponse {
	}
	export interface DisassociateDomainResponseFormProperties {
	}
	export function CreateDisassociateDomainResponseFormGroup() {
		return new FormGroup<DisassociateDomainResponseFormProperties>({
		});

	}

	export interface DisassociateWebsiteAuthorizationProviderResponse {
	}
	export interface DisassociateWebsiteAuthorizationProviderResponseFormProperties {
	}
	export function CreateDisassociateWebsiteAuthorizationProviderResponseFormGroup() {
		return new FormGroup<DisassociateWebsiteAuthorizationProviderResponseFormProperties>({
		});

	}

	export interface DisassociateWebsiteCertificateAuthorityResponse {
	}
	export interface DisassociateWebsiteCertificateAuthorityResponseFormProperties {
	}
	export function CreateDisassociateWebsiteCertificateAuthorityResponseFormGroup() {
		return new FormGroup<DisassociateWebsiteCertificateAuthorityResponseFormProperties>({
		});

	}

	export interface ListDevicesResponse {
		Devices?: Array<DeviceSummary>;
		NextToken?: string;
	}
	export interface ListDevicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesResponseFormGroup() {
		return new FormGroup<ListDevicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of devices. */
	export interface DeviceSummary {
		DeviceId?: string;
		DeviceStatus?: DeviceStatus;
	}

	/** The summary of devices. */
	export interface DeviceSummaryFormProperties {
		DeviceId: FormControl<string | null | undefined>,
		DeviceStatus: FormControl<DeviceStatus | null | undefined>,
	}
	export function CreateDeviceSummaryFormGroup() {
		return new FormGroup<DeviceSummaryFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined),
			DeviceStatus: new FormControl<DeviceStatus | null | undefined>(undefined),
		});

	}

	export interface ListDomainsResponse {
		Domains?: Array<DomainSummary>;
		NextToken?: string;
	}
	export interface ListDomainsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResponseFormGroup() {
		return new FormGroup<ListDomainsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the domain. */
	export interface DomainSummary {

		/** Required */
		DomainName: string;
		DisplayName?: string;

		/** Required */
		CreatedTime: Date;

		/** Required */
		DomainStatus: DomainStatus;
	}

	/** The summary of the domain. */
	export interface DomainSummaryFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		DomainStatus: FormControl<DomainStatus | null | undefined>,
	}
	export function CreateDomainSummaryFormGroup() {
		return new FormGroup<DomainSummaryFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			DomainStatus: new FormControl<DomainStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListFleetsResponse {
		FleetSummaryList?: Array<FleetSummary>;
		NextToken?: string;
	}
	export interface ListFleetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFleetsResponseFormGroup() {
		return new FormGroup<ListFleetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the fleet. */
	export interface FleetSummary {
		FleetArn?: string;
		CreatedTime?: Date;
		LastUpdatedTime?: Date;
		FleetName?: string;
		DisplayName?: string;
		CompanyCode?: string;
		FleetStatus?: FleetStatus;
		Tags?: TagMap;
	}

	/** The summary of the fleet. */
	export interface FleetSummaryFormProperties {
		FleetArn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		FleetName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		CompanyCode: FormControl<string | null | undefined>,
		FleetStatus: FormControl<FleetStatus | null | undefined>,
	}
	export function CreateFleetSummaryFormGroup() {
		return new FormGroup<FleetSummaryFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			FleetName: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			CompanyCode: new FormControl<string | null | undefined>(undefined),
			FleetStatus: new FormControl<FleetStatus | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListWebsiteAuthorizationProvidersResponse {
		WebsiteAuthorizationProviders?: Array<WebsiteAuthorizationProviderSummary>;
		NextToken?: string;
	}
	export interface ListWebsiteAuthorizationProvidersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWebsiteAuthorizationProvidersResponseFormGroup() {
		return new FormGroup<ListWebsiteAuthorizationProvidersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the website authorization provider. */
	export interface WebsiteAuthorizationProviderSummary {
		AuthorizationProviderId?: string;

		/** Required */
		AuthorizationProviderType: IdentityProviderType;
		DomainName?: string;
		CreatedTime?: Date;
	}

	/** The summary of the website authorization provider. */
	export interface WebsiteAuthorizationProviderSummaryFormProperties {
		AuthorizationProviderId: FormControl<string | null | undefined>,

		/** Required */
		AuthorizationProviderType: FormControl<IdentityProviderType | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateWebsiteAuthorizationProviderSummaryFormGroup() {
		return new FormGroup<WebsiteAuthorizationProviderSummaryFormProperties>({
			AuthorizationProviderId: new FormControl<string | null | undefined>(undefined),
			AuthorizationProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListWebsiteCertificateAuthoritiesResponse {
		WebsiteCertificateAuthorities?: Array<WebsiteCaSummary>;
		NextToken?: string;
	}
	export interface ListWebsiteCertificateAuthoritiesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWebsiteCertificateAuthoritiesResponseFormGroup() {
		return new FormGroup<ListWebsiteCertificateAuthoritiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the certificate authority (CA). */
	export interface WebsiteCaSummary {
		WebsiteCaId?: string;
		CreatedTime?: Date;
		DisplayName?: string;
	}

	/** The summary of the certificate authority (CA). */
	export interface WebsiteCaSummaryFormProperties {
		WebsiteCaId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateWebsiteCaSummaryFormGroup() {
		return new FormGroup<WebsiteCaSummaryFormProperties>({
			WebsiteCaId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestoreDomainAccessResponse {
	}
	export interface RestoreDomainAccessResponseFormProperties {
	}
	export function CreateRestoreDomainAccessResponseFormGroup() {
		return new FormGroup<RestoreDomainAccessResponseFormProperties>({
		});

	}

	export interface RevokeDomainAccessResponse {
	}
	export interface RevokeDomainAccessResponseFormProperties {
	}
	export function CreateRevokeDomainAccessResponseFormGroup() {
		return new FormGroup<RevokeDomainAccessResponseFormProperties>({
		});

	}

	export interface SignOutUserResponse {
	}
	export interface SignOutUserResponseFormProperties {
	}
	export function CreateSignOutUserResponseFormGroup() {
		return new FormGroup<SignOutUserResponseFormProperties>({
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateAuditStreamConfigurationResponse {
	}
	export interface UpdateAuditStreamConfigurationResponseFormProperties {
	}
	export function CreateUpdateAuditStreamConfigurationResponseFormGroup() {
		return new FormGroup<UpdateAuditStreamConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateCompanyNetworkConfigurationResponse {
	}
	export interface UpdateCompanyNetworkConfigurationResponseFormProperties {
	}
	export function CreateUpdateCompanyNetworkConfigurationResponseFormGroup() {
		return new FormGroup<UpdateCompanyNetworkConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateDevicePolicyConfigurationResponse {
	}
	export interface UpdateDevicePolicyConfigurationResponseFormProperties {
	}
	export function CreateUpdateDevicePolicyConfigurationResponseFormGroup() {
		return new FormGroup<UpdateDevicePolicyConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateDomainMetadataResponse {
	}
	export interface UpdateDomainMetadataResponseFormProperties {
	}
	export function CreateUpdateDomainMetadataResponseFormGroup() {
		return new FormGroup<UpdateDomainMetadataResponseFormProperties>({
		});

	}

	export interface UpdateFleetMetadataResponse {
	}
	export interface UpdateFleetMetadataResponseFormProperties {
	}
	export function CreateUpdateFleetMetadataResponseFormGroup() {
		return new FormGroup<UpdateFleetMetadataResponseFormProperties>({
		});

	}

	export interface UpdateIdentityProviderConfigurationResponse {
	}
	export interface UpdateIdentityProviderConfigurationResponseFormProperties {
	}
	export function CreateUpdateIdentityProviderConfigurationResponseFormGroup() {
		return new FormGroup<UpdateIdentityProviderConfigurationResponseFormProperties>({
		});

	}

	export interface AssociateDomainRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		DomainName: string;
		DisplayName?: string;

		/** Required */
		AcmCertificateArn: string;
	}
	export interface AssociateDomainRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,

		/** Required */
		AcmCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDomainRequestFormGroup() {
		return new FormGroup<AssociateDomainRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			AcmCertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthorizationProviderType { SAML = 0 }

	export interface AssociateWebsiteAuthorizationProviderRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		AuthorizationProviderType: IdentityProviderType;
		DomainName?: string;
	}
	export interface AssociateWebsiteAuthorizationProviderRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		AuthorizationProviderType: FormControl<IdentityProviderType | null | undefined>,
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWebsiteAuthorizationProviderRequestFormGroup() {
		return new FormGroup<AssociateWebsiteAuthorizationProviderRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthorizationProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateWebsiteCertificateAuthorityRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		Certificate: string;
		DisplayName?: string;
	}
	export interface AssociateWebsiteCertificateAuthorityRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		Certificate: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWebsiteCertificateAuthorityRequestFormGroup() {
		return new FormGroup<AssociateWebsiteCertificateAuthorityRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFleetRequest {

		/** Required */
		FleetName: string;
		DisplayName?: string;
		OptimizeForEndUserLocation?: boolean | null;
		Tags?: TagMap;
	}
	export interface CreateFleetRequestFormProperties {

		/** Required */
		FleetName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		OptimizeForEndUserLocation: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateFleetRequestFormGroup() {
		return new FormGroup<CreateFleetRequestFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			OptimizeForEndUserLocation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteFleetRequest {

		/** Required */
		FleetArn: string;
	}
	export interface DeleteFleetRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetRequestFormGroup() {
		return new FormGroup<DeleteFleetRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAuditStreamConfigurationRequest {

		/** Required */
		FleetArn: string;
	}
	export interface DescribeAuditStreamConfigurationRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAuditStreamConfigurationRequestFormGroup() {
		return new FormGroup<DescribeAuditStreamConfigurationRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCompanyNetworkConfigurationRequest {

		/** Required */
		FleetArn: string;
	}
	export interface DescribeCompanyNetworkConfigurationRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCompanyNetworkConfigurationRequestFormGroup() {
		return new FormGroup<DescribeCompanyNetworkConfigurationRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDevicePolicyConfigurationRequest {

		/** Required */
		FleetArn: string;
	}
	export interface DescribeDevicePolicyConfigurationRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDevicePolicyConfigurationRequestFormGroup() {
		return new FormGroup<DescribeDevicePolicyConfigurationRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDeviceRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		DeviceId: string;
	}
	export interface DescribeDeviceRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		DeviceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDeviceRequestFormGroup() {
		return new FormGroup<DescribeDeviceRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDomainRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		DomainName: string;
	}
	export interface DescribeDomainRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainRequestFormGroup() {
		return new FormGroup<DescribeDomainRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFleetMetadataRequest {

		/** Required */
		FleetArn: string;
	}
	export interface DescribeFleetMetadataRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetMetadataRequestFormGroup() {
		return new FormGroup<DescribeFleetMetadataRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeIdentityProviderConfigurationRequest {

		/** Required */
		FleetArn: string;
	}
	export interface DescribeIdentityProviderConfigurationRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIdentityProviderConfigurationRequestFormGroup() {
		return new FormGroup<DescribeIdentityProviderConfigurationRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWebsiteCertificateAuthorityRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		WebsiteCaId: string;
	}
	export interface DescribeWebsiteCertificateAuthorityRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		WebsiteCaId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWebsiteCertificateAuthorityRequestFormGroup() {
		return new FormGroup<DescribeWebsiteCertificateAuthorityRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WebsiteCaId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateDomainRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		DomainName: string;
	}
	export interface DisassociateDomainRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateDomainRequestFormGroup() {
		return new FormGroup<DisassociateDomainRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateWebsiteAuthorizationProviderRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		AuthorizationProviderId: string;
	}
	export interface DisassociateWebsiteAuthorizationProviderRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		AuthorizationProviderId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateWebsiteAuthorizationProviderRequestFormGroup() {
		return new FormGroup<DisassociateWebsiteAuthorizationProviderRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuthorizationProviderId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateWebsiteCertificateAuthorityRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		WebsiteCaId: string;
	}
	export interface DisassociateWebsiteCertificateAuthorityRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		WebsiteCaId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateWebsiteCertificateAuthorityRequestFormGroup() {
		return new FormGroup<DisassociateWebsiteCertificateAuthorityRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WebsiteCaId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDevicesRequest {

		/** Required */
		FleetArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDevicesRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDevicesRequestFormGroup() {
		return new FormGroup<ListDevicesRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDomainsRequest {

		/** Required */
		FleetArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDomainsRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDomainsRequestFormGroup() {
		return new FormGroup<ListDomainsRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListFleetsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListFleetsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFleetsRequestFormGroup() {
		return new FormGroup<ListFleetsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface ListWebsiteAuthorizationProvidersRequest {

		/** Required */
		FleetArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListWebsiteAuthorizationProvidersRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWebsiteAuthorizationProvidersRequestFormGroup() {
		return new FormGroup<ListWebsiteAuthorizationProvidersRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWebsiteCertificateAuthoritiesRequest {

		/** Required */
		FleetArn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListWebsiteCertificateAuthoritiesRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWebsiteCertificateAuthoritiesRequestFormGroup() {
		return new FormGroup<ListWebsiteCertificateAuthoritiesRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RestoreDomainAccessRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		DomainName: string;
	}
	export interface RestoreDomainAccessRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateRestoreDomainAccessRequestFormGroup() {
		return new FormGroup<RestoreDomainAccessRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RevokeDomainAccessRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		DomainName: string;
	}
	export interface RevokeDomainAccessRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateRevokeDomainAccessRequestFormGroup() {
		return new FormGroup<RevokeDomainAccessRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SignOutUserRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		Username: string;
	}
	export interface SignOutUserRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateSignOutUserRequestFormGroup() {
		return new FormGroup<SignOutUserRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateAuditStreamConfigurationRequest {

		/** Required */
		FleetArn: string;
		AuditStreamArn?: string;
	}
	export interface UpdateAuditStreamConfigurationRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
		AuditStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuditStreamConfigurationRequestFormGroup() {
		return new FormGroup<UpdateAuditStreamConfigurationRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AuditStreamArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCompanyNetworkConfigurationRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		VpcId: string;

		/** Required */
		SubnetIds: Array<string>;

		/** Required */
		SecurityGroupIds: Array<string>;
	}
	export interface UpdateCompanyNetworkConfigurationRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCompanyNetworkConfigurationRequestFormGroup() {
		return new FormGroup<UpdateCompanyNetworkConfigurationRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDevicePolicyConfigurationRequest {

		/** Required */
		FleetArn: string;
		DeviceCaCertificate?: string;
	}
	export interface UpdateDevicePolicyConfigurationRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
		DeviceCaCertificate: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDevicePolicyConfigurationRequestFormGroup() {
		return new FormGroup<UpdateDevicePolicyConfigurationRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeviceCaCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainMetadataRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		DomainName: string;
		DisplayName?: string;
	}
	export interface UpdateDomainMetadataRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		DomainName: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainMetadataRequestFormGroup() {
		return new FormGroup<UpdateDomainMetadataRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetMetadataRequest {

		/** Required */
		FleetArn: string;
		DisplayName?: string;
		OptimizeForEndUserLocation?: boolean | null;
	}
	export interface UpdateFleetMetadataRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		OptimizeForEndUserLocation: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateFleetMetadataRequestFormGroup() {
		return new FormGroup<UpdateFleetMetadataRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			OptimizeForEndUserLocation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateIdentityProviderConfigurationRequest {

		/** Required */
		FleetArn: string;

		/** Required */
		IdentityProviderType: IdentityProviderType;
		IdentityProviderSamlMetadata?: string;
	}
	export interface UpdateIdentityProviderConfigurationRequestFormProperties {

		/** Required */
		FleetArn: FormControl<string | null | undefined>,

		/** Required */
		IdentityProviderType: FormControl<IdentityProviderType | null | undefined>,
		IdentityProviderSamlMetadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIdentityProviderConfigurationRequestFormGroup() {
		return new FormGroup<UpdateIdentityProviderConfigurationRequestFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IdentityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined, [Validators.required]),
			IdentityProviderSamlMetadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Specifies a domain to be associated to Amazon WorkLink.
		 * Post associateDomain
		 * @return {AssociateDomainResponse} Success
		 */
		AssociateDomain(requestBody: AssociateDomainPostBody): Observable<AssociateDomainResponse> {
			return this.http.post<AssociateDomainResponse>(this.baseUri + 'associateDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.
		 * Post associateWebsiteAuthorizationProvider
		 * @return {AssociateWebsiteAuthorizationProviderResponse} Success
		 */
		AssociateWebsiteAuthorizationProvider(requestBody: AssociateWebsiteAuthorizationProviderPostBody): Observable<AssociateWebsiteAuthorizationProviderResponse> {
			return this.http.post<AssociateWebsiteAuthorizationProviderResponse>(this.baseUri + 'associateWebsiteAuthorizationProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.
		 * Post associateWebsiteCertificateAuthority
		 * @return {AssociateWebsiteCertificateAuthorityResponse} Success
		 */
		AssociateWebsiteCertificateAuthority(requestBody: AssociateWebsiteCertificateAuthorityPostBody): Observable<AssociateWebsiteCertificateAuthorityResponse> {
			return this.http.post<AssociateWebsiteCertificateAuthorityResponse>(this.baseUri + 'associateWebsiteCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.
		 * Post createFleet
		 * @return {CreateFleetResponse} Success
		 */
		CreateFleet(requestBody: CreateFleetPostBody): Observable<CreateFleetResponse> {
			return this.http.post<CreateFleetResponse>(this.baseUri + 'createFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a fleet. Prevents users from accessing previously associated websites.
		 * Post deleteFleet
		 * @return {DeleteFleetResponse} Success
		 */
		DeleteFleet(requestBody: DeleteFleetPostBody): Observable<DeleteFleetResponse> {
			return this.http.post<DeleteFleetResponse>(this.baseUri + 'deleteFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the configuration for delivering audit streams to the customer account.
		 * Post describeAuditStreamConfiguration
		 * @return {DescribeAuditStreamConfigurationResponse} Success
		 */
		DescribeAuditStreamConfiguration(requestBody: DescribeAuditStreamConfigurationPostBody): Observable<DescribeAuditStreamConfigurationResponse> {
			return this.http.post<DescribeAuditStreamConfigurationResponse>(this.baseUri + 'describeAuditStreamConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the networking configuration to access the internal websites associated with the specified fleet.
		 * Post describeCompanyNetworkConfiguration
		 * @return {DescribeCompanyNetworkConfigurationResponse} Success
		 */
		DescribeCompanyNetworkConfiguration(requestBody: DescribeCompanyNetworkConfigurationPostBody): Observable<DescribeCompanyNetworkConfigurationResponse> {
			return this.http.post<DescribeCompanyNetworkConfigurationResponse>(this.baseUri + 'describeCompanyNetworkConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about a user's device.
		 * Post describeDevice
		 * @return {DescribeDeviceResponse} Success
		 */
		DescribeDevice(requestBody: DescribeDevicePostBody): Observable<DescribeDeviceResponse> {
			return this.http.post<DescribeDeviceResponse>(this.baseUri + 'describeDevice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the device policy configuration for the specified fleet.
		 * Post describeDevicePolicyConfiguration
		 * @return {DescribeDevicePolicyConfigurationResponse} Success
		 */
		DescribeDevicePolicyConfiguration(requestBody: DescribeDevicePolicyConfigurationPostBody): Observable<DescribeDevicePolicyConfigurationResponse> {
			return this.http.post<DescribeDevicePolicyConfigurationResponse>(this.baseUri + 'describeDevicePolicyConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about the domain.
		 * Post describeDomain
		 * @return {DescribeDomainResponse} Success
		 */
		DescribeDomain(requestBody: DescribeDomainPostBody): Observable<DescribeDomainResponse> {
			return this.http.post<DescribeDomainResponse>(this.baseUri + 'describeDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.
		 * Post describeFleetMetadata
		 * @return {DescribeFleetMetadataResponse} Success
		 */
		DescribeFleetMetadata(requestBody: DescribeFleetMetadataPostBody): Observable<DescribeFleetMetadataResponse> {
			return this.http.post<DescribeFleetMetadataResponse>(this.baseUri + 'describeFleetMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the identity provider configuration of the specified fleet.
		 * Post describeIdentityProviderConfiguration
		 * @return {DescribeIdentityProviderConfigurationResponse} Success
		 */
		DescribeIdentityProviderConfiguration(requestBody: DescribeIdentityProviderConfigurationPostBody): Observable<DescribeIdentityProviderConfigurationResponse> {
			return this.http.post<DescribeIdentityProviderConfigurationResponse>(this.baseUri + 'describeIdentityProviderConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about the certificate authority.
		 * Post describeWebsiteCertificateAuthority
		 * @return {DescribeWebsiteCertificateAuthorityResponse} Success
		 */
		DescribeWebsiteCertificateAuthority(requestBody: DescribeWebsiteCertificateAuthorityPostBody): Observable<DescribeWebsiteCertificateAuthorityResponse> {
			return this.http.post<DescribeWebsiteCertificateAuthorityResponse>(this.baseUri + 'describeWebsiteCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink.
		 * Post disassociateDomain
		 * @return {DisassociateDomainResponse} Success
		 */
		DisassociateDomain(requestBody: DisassociateDomainPostBody): Observable<DisassociateDomainResponse> {
			return this.http.post<DisassociateDomainResponse>(this.baseUri + 'disassociateDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.
		 * Post disassociateWebsiteAuthorizationProvider
		 * @return {DisassociateWebsiteAuthorizationProviderResponse} Success
		 */
		DisassociateWebsiteAuthorizationProvider(requestBody: DisassociateWebsiteAuthorizationProviderPostBody): Observable<DisassociateWebsiteAuthorizationProviderResponse> {
			return this.http.post<DisassociateWebsiteAuthorizationProviderResponse>(this.baseUri + 'disassociateWebsiteAuthorizationProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a certificate authority (CA).
		 * Post disassociateWebsiteCertificateAuthority
		 * @return {DisassociateWebsiteCertificateAuthorityResponse} Success
		 */
		DisassociateWebsiteCertificateAuthority(requestBody: DisassociateWebsiteCertificateAuthorityPostBody): Observable<DisassociateWebsiteCertificateAuthorityResponse> {
			return this.http.post<DisassociateWebsiteCertificateAuthorityResponse>(this.baseUri + 'disassociateWebsiteCertificateAuthority', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of devices registered with the specified fleet.
		 * Post listDevices
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDevicesResponse} Success
		 */
		ListDevices(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDevicesPostBody): Observable<ListDevicesResponse> {
			return this.http.post<ListDevicesResponse>(this.baseUri + 'listDevices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of domains associated to a specified fleet.
		 * Post listDomains
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDomainsResponse} Success
		 */
		ListDomains(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDomainsPostBody): Observable<ListDomainsResponse> {
			return this.http.post<ListDomainsResponse>(this.baseUri + 'listDomains?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of fleets for the current account and Region.
		 * Post listFleets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFleetsResponse} Success
		 */
		ListFleets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFleetsPostBody): Observable<ListFleetsResponse> {
			return this.http.post<ListFleetsResponse>(this.baseUri + 'listFleets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of tags for the specified resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the fleet.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the fleet.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of website authorization providers associated with a specified fleet.
		 * Post listWebsiteAuthorizationProviders
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWebsiteAuthorizationProvidersResponse} Success
		 */
		ListWebsiteAuthorizationProviders(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWebsiteAuthorizationProvidersPostBody): Observable<ListWebsiteAuthorizationProvidersResponse> {
			return this.http.post<ListWebsiteAuthorizationProvidersResponse>(this.baseUri + 'listWebsiteAuthorizationProviders?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of certificate authorities added for the current account and Region.
		 * Post listWebsiteCertificateAuthorities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWebsiteCertificateAuthoritiesResponse} Success
		 */
		ListWebsiteCertificateAuthorities(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWebsiteCertificateAuthoritiesPostBody): Observable<ListWebsiteCertificateAuthoritiesResponse> {
			return this.http.post<ListWebsiteCertificateAuthoritiesResponse>(this.baseUri + 'listWebsiteCertificateAuthorities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moves a domain to ACTIVE status if it was in the INACTIVE status.
		 * Post restoreDomainAccess
		 * @return {RestoreDomainAccessResponse} Success
		 */
		RestoreDomainAccess(requestBody: RestoreDomainAccessPostBody): Observable<RestoreDomainAccessResponse> {
			return this.http.post<RestoreDomainAccessResponse>(this.baseUri + 'restoreDomainAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moves a domain to INACTIVE status if it was in the ACTIVE status.
		 * Post revokeDomainAccess
		 * @return {RevokeDomainAccessResponse} Success
		 */
		RevokeDomainAccess(requestBody: RevokeDomainAccessPostBody): Observable<RevokeDomainAccessResponse> {
			return this.http.post<RevokeDomainAccessResponse>(this.baseUri + 'revokeDomainAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Signs the user out from all of their devices. The user can sign in again if they have valid credentials.
		 * Post signOutUser
		 * @return {SignOutUserResponse} Success
		 */
		SignOutUser(requestBody: SignOutUserPostBody): Observable<SignOutUserResponse> {
			return this.http.post<SignOutUserResponse>(this.baseUri + 'signOutUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the fleet.
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates the audit stream configuration for the fleet.
		 * Post updateAuditStreamConfiguration
		 * @return {UpdateAuditStreamConfigurationResponse} Success
		 */
		UpdateAuditStreamConfiguration(requestBody: UpdateAuditStreamConfigurationPostBody): Observable<UpdateAuditStreamConfigurationResponse> {
			return this.http.post<UpdateAuditStreamConfigurationResponse>(this.baseUri + 'updateAuditStreamConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the company network configuration for the fleet.
		 * Post updateCompanyNetworkConfiguration
		 * @return {UpdateCompanyNetworkConfigurationResponse} Success
		 */
		UpdateCompanyNetworkConfiguration(requestBody: UpdateCompanyNetworkConfigurationPostBody): Observable<UpdateCompanyNetworkConfigurationResponse> {
			return this.http.post<UpdateCompanyNetworkConfigurationResponse>(this.baseUri + 'updateCompanyNetworkConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the device policy configuration for the fleet.
		 * Post updateDevicePolicyConfiguration
		 * @return {UpdateDevicePolicyConfigurationResponse} Success
		 */
		UpdateDevicePolicyConfiguration(requestBody: UpdateDevicePolicyConfigurationPostBody): Observable<UpdateDevicePolicyConfigurationResponse> {
			return this.http.post<UpdateDevicePolicyConfigurationResponse>(this.baseUri + 'updateDevicePolicyConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates domain metadata, such as DisplayName.
		 * Post updateDomainMetadata
		 * @return {UpdateDomainMetadataResponse} Success
		 */
		UpdateDomainMetadata(requestBody: UpdateDomainMetadataPostBody): Observable<UpdateDomainMetadataResponse> {
			return this.http.post<UpdateDomainMetadataResponse>(this.baseUri + 'updateDomainMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates fleet metadata, such as DisplayName.
		 * Post UpdateFleetMetadata
		 * @return {UpdateFleetMetadataResponse} Success
		 */
		UpdateFleetMetadata(requestBody: UpdateFleetMetadataPostBody): Observable<UpdateFleetMetadataResponse> {
			return this.http.post<UpdateFleetMetadataResponse>(this.baseUri + 'UpdateFleetMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the identity provider configuration for the fleet.
		 * Post updateIdentityProviderConfiguration
		 * @return {UpdateIdentityProviderConfigurationResponse} Success
		 */
		UpdateIdentityProviderConfiguration(requestBody: UpdateIdentityProviderConfigurationPostBody): Observable<UpdateIdentityProviderConfigurationResponse> {
			return this.http.post<UpdateIdentityProviderConfigurationResponse>(this.baseUri + 'updateIdentityProviderConfiguration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateDomainPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The fully qualified domain name (FQDN).
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: string;

		/**
		 * The name to display.
		 * Max length: 100
		 */
		DisplayName?: string | null;

		/**
		 * The ARN of an issued ACM certificate that is valid for the domain being associated.
		 * Required
		 */
		AcmCertificateArn: string;
	}
	export interface AssociateDomainPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The fully qualified domain name (FQDN).
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * The name to display.
		 * Max length: 100
		 */
		DisplayName: FormControl<string | null | undefined>,

		/**
		 * The ARN of an issued ACM certificate that is valid for the domain being associated.
		 * Required
		 */
		AcmCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDomainPostBodyFormGroup() {
		return new FormGroup<AssociateDomainPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(253), Validators.pattern('^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			AcmCertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]+:[\w+=,.@-]+(/[\w+=/,.@-]+)*')]),
		});

	}

	export interface AssociateWebsiteAuthorizationProviderPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The authorization provider type.
		 * Required
		 */
		AuthorizationProviderType: IdentityProviderType;

		/**
		 * The domain name of the authorization provider. This applies only to SAML-based authorization providers.
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName?: string | null;
	}
	export interface AssociateWebsiteAuthorizationProviderPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The authorization provider type.
		 * Required
		 */
		AuthorizationProviderType: FormControl<IdentityProviderType | null | undefined>,

		/**
		 * The domain name of the authorization provider. This applies only to SAML-based authorization providers.
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWebsiteAuthorizationProviderPostBodyFormGroup() {
		return new FormGroup<AssociateWebsiteAuthorizationProviderPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			AuthorizationProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined, [Validators.required]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(253), Validators.pattern('^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$')]),
		});

	}

	export interface AssociateWebsiteCertificateAuthorityPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The root certificate of the CA.
		 * Required
		 * Max length: 8192
		 * Min length: 1
		 */
		Certificate: string;

		/**
		 * The certificate name to display.
		 * Max length: 100
		 */
		DisplayName?: string | null;
	}
	export interface AssociateWebsiteCertificateAuthorityPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The root certificate of the CA.
		 * Required
		 * Max length: 8192
		 * Min length: 1
		 */
		Certificate: FormControl<string | null | undefined>,

		/**
		 * The certificate name to display.
		 * Max length: 100
		 */
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateAssociateWebsiteCertificateAuthorityPostBodyFormGroup() {
		return new FormGroup<AssociateWebsiteCertificateAuthorityPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(8192), Validators.pattern('-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9/+]{64}\u000D?\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface CreateFleetPostBody {

		/**
		 * A unique name for the fleet.
		 * Required
		 * Max length: 48
		 * Min length: 1
		 */
		FleetName: string;

		/**
		 * The fleet name to display.
		 * Max length: 100
		 */
		DisplayName?: string | null;

		/** The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. */
		OptimizeForEndUserLocation?: boolean | null;

		/** The tags to add to the resource. A tag is a key-value pair. */
		Tags?: {[id: string]: string };
	}
	export interface CreateFleetPostBodyFormProperties {

		/**
		 * A unique name for the fleet.
		 * Required
		 * Max length: 48
		 * Min length: 1
		 */
		FleetName: FormControl<string | null | undefined>,

		/**
		 * The fleet name to display.
		 * Max length: 100
		 */
		DisplayName: FormControl<string | null | undefined>,

		/** The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. */
		OptimizeForEndUserLocation: FormControl<boolean | null | undefined>,

		/** The tags to add to the resource. A tag is a key-value pair. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFleetPostBodyFormGroup() {
		return new FormGroup<CreateFleetPostBodyFormProperties>({
			FleetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(48), Validators.pattern('^[a-z0-9](?:[a-z0-9\-]{0,46}[a-z0-9])?$')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			OptimizeForEndUserLocation: new FormControl<boolean | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface DeleteFleetPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}
	export interface DeleteFleetPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFleetPostBodyFormGroup() {
		return new FormGroup<DeleteFleetPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeAuditStreamConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}
	export interface DescribeAuditStreamConfigurationPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAuditStreamConfigurationPostBodyFormGroup() {
		return new FormGroup<DescribeAuditStreamConfigurationPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeCompanyNetworkConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}
	export interface DescribeCompanyNetworkConfigurationPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCompanyNetworkConfigurationPostBodyFormGroup() {
		return new FormGroup<DescribeCompanyNetworkConfigurationPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeDevicePostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * A unique identifier for a registered user's device.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		DeviceId: string;
	}
	export interface DescribeDevicePostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for a registered user's device.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		DeviceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDevicePostBodyFormGroup() {
		return new FormGroup<DescribeDevicePostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			DeviceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface DescribeDevicePolicyConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}
	export interface DescribeDevicePolicyConfigurationPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDevicePolicyConfigurationPostBodyFormGroup() {
		return new FormGroup<DescribeDevicePolicyConfigurationPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeDomainPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: string;
	}
	export interface DescribeDomainPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainPostBodyFormGroup() {
		return new FormGroup<DescribeDomainPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(253), Validators.pattern('^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$')]),
		});

	}

	export interface DescribeFleetMetadataPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}
	export interface DescribeFleetMetadataPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetMetadataPostBodyFormGroup() {
		return new FormGroup<DescribeFleetMetadataPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeIdentityProviderConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}
	export interface DescribeIdentityProviderConfigurationPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIdentityProviderConfigurationPostBodyFormGroup() {
		return new FormGroup<DescribeIdentityProviderConfigurationPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface DescribeWebsiteCertificateAuthorityPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * A unique identifier for the certificate authority.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		WebsiteCaId: string;
	}
	export interface DescribeWebsiteCertificateAuthorityPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for the certificate authority.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		WebsiteCaId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWebsiteCertificateAuthorityPostBodyFormGroup() {
		return new FormGroup<DescribeWebsiteCertificateAuthorityPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			WebsiteCaId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface DisassociateDomainPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: string;
	}
	export interface DisassociateDomainPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateDomainPostBodyFormGroup() {
		return new FormGroup<DisassociateDomainPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(253), Validators.pattern('^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$')]),
		});

	}

	export interface DisassociateWebsiteAuthorizationProviderPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * A unique identifier for the authorization provider.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AuthorizationProviderId: string;
	}
	export interface DisassociateWebsiteAuthorizationProviderPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for the authorization provider.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AuthorizationProviderId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateWebsiteAuthorizationProviderPostBodyFormGroup() {
		return new FormGroup<DisassociateWebsiteAuthorizationProviderPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			AuthorizationProviderId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface DisassociateWebsiteCertificateAuthorityPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * A unique identifier for the CA.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		WebsiteCaId: string;
	}
	export interface DisassociateWebsiteCertificateAuthorityPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * A unique identifier for the CA.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		WebsiteCaId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateWebsiteCertificateAuthorityPostBodyFormGroup() {
		return new FormGroup<DisassociateWebsiteCertificateAuthorityPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			WebsiteCaId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface ListDevicesPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListDevicesPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDevicesPostBodyFormGroup() {
		return new FormGroup<ListDevicesPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096), Validators.pattern('[\w\-]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListDomainsPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListDomainsPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDomainsPostBodyFormGroup() {
		return new FormGroup<ListDomainsPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096), Validators.pattern('[\w\-]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListFleetsPostBody {

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListFleetsPostBodyFormProperties {

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFleetsPostBodyFormGroup() {
		return new FormGroup<ListFleetsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096), Validators.pattern('[\w\-]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource. A tag is a key-value pair.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource. A tag is a key-value pair.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWebsiteAuthorizationProvidersPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults?: number | null;
	}
	export interface ListWebsiteAuthorizationProvidersPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWebsiteAuthorizationProvidersPostBodyFormGroup() {
		return new FormGroup<ListWebsiteAuthorizationProvidersPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096), Validators.pattern('[\w\-]+')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface ListWebsiteCertificateAuthoritiesPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults?: number | null;

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListWebsiteCertificateAuthoritiesPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWebsiteCertificateAuthoritiesPostBodyFormGroup() {
		return new FormGroup<ListWebsiteCertificateAuthoritiesPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096), Validators.pattern('[\w\-]+')]),
		});

	}

	export interface RestoreDomainAccessPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: string;
	}
	export interface RestoreDomainAccessPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateRestoreDomainAccessPostBodyFormGroup() {
		return new FormGroup<RestoreDomainAccessPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(253), Validators.pattern('^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$')]),
		});

	}

	export interface RevokeDomainAccessPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: string;
	}
	export interface RevokeDomainAccessPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateRevokeDomainAccessPostBodyFormGroup() {
		return new FormGroup<RevokeDomainAccessPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(253), Validators.pattern('^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$')]),
		});

	}

	export interface SignOutUserPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the user.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Username: string;
	}
	export interface SignOutUserPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The name of the user.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateSignOutUserPostBodyFormGroup() {
		return new FormGroup<SignOutUserPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface UpdateAuditStreamConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/** The ARN of the Amazon Kinesis data stream that receives the audit events. */
		AuditStreamArn?: string | null;
	}
	export interface UpdateAuditStreamConfigurationPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/** The ARN of the Amazon Kinesis data stream that receives the audit events. */
		AuditStreamArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuditStreamConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateAuditStreamConfigurationPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			AuditStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws:kinesis:.+:[0-9]{12}:stream/AmazonWorkLink-.*$')]),
		});

	}

	export interface UpdateCompanyNetworkConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The VPC with connectivity to associated websites.
		 * Required
		 */
		VpcId: string;

		/**
		 * The subnets used for X-ENI connections from Amazon WorkLink rendering containers.
		 * Required
		 */
		SubnetIds: Array<string>;

		/**
		 * The security groups associated with access to the provided subnets.
		 * Required
		 * Maximum items: 5
		 */
		SecurityGroupIds: Array<string>;
	}
	export interface UpdateCompanyNetworkConfigurationPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The VPC with connectivity to associated websites.
		 * Required
		 */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCompanyNetworkConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateCompanyNetworkConfigurationPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^vpc-([0-9a-f]{8}|[0-9a-f]{17})$')]),
		});

	}

	export interface UpdateDevicePolicyConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.
		 * Max length: 32768
		 * Min length: 1
		 */
		DeviceCaCertificate?: string | null;
	}
	export interface UpdateDevicePolicyConfigurationPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.
		 * Max length: 32768
		 * Min length: 1
		 */
		DeviceCaCertificate: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDevicePolicyConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateDevicePolicyConfigurationPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			DeviceCaCertificate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32768), Validators.pattern('(-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9/+]{64}\u000D?\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}\u000D?\u000A)*-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9/+]{64}\u000D?\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?')]),
		});

	}

	export interface UpdateDomainMetadataPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: string;

		/**
		 * The name to display.
		 * Max length: 100
		 */
		DisplayName?: string | null;
	}
	export interface UpdateDomainMetadataPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The name of the domain.
		 * Required
		 * Max length: 253
		 * Min length: 1
		 */
		DomainName: FormControl<string | null | undefined>,

		/**
		 * The name to display.
		 * Max length: 100
		 */
		DisplayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainMetadataPostBodyFormGroup() {
		return new FormGroup<UpdateDomainMetadataPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(253), Validators.pattern('^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$')]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
		});

	}

	export interface UpdateFleetMetadataPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The fleet name to display. The existing DisplayName is unset if null is passed.
		 * Max length: 100
		 */
		DisplayName?: string | null;

		/** The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. */
		OptimizeForEndUserLocation?: boolean | null;
	}
	export interface UpdateFleetMetadataPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The fleet name to display. The existing DisplayName is unset if null is passed.
		 * Max length: 100
		 */
		DisplayName: FormControl<string | null | undefined>,

		/** The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. */
		OptimizeForEndUserLocation: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateFleetMetadataPostBodyFormGroup() {
		return new FormGroup<UpdateFleetMetadataPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			OptimizeForEndUserLocation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateIdentityProviderConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The type of identity provider.
		 * Required
		 */
		IdentityProviderType: IdentityProviderType;

		/**
		 * The SAML metadata document provided by the customer’s identity provider. The existing IdentityProviderSamlMetadata is unset if null is passed.
		 * Max length: 204800
		 * Min length: 1
		 */
		IdentityProviderSamlMetadata?: string | null;
	}
	export interface UpdateIdentityProviderConfigurationPostBodyFormProperties {

		/**
		 * The ARN of the fleet.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: FormControl<string | null | undefined>,

		/**
		 * The type of identity provider.
		 * Required
		 */
		IdentityProviderType: FormControl<IdentityProviderType | null | undefined>,

		/**
		 * The SAML metadata document provided by the customer’s identity provider. The existing IdentityProviderSamlMetadata is unset if null is passed.
		 * Max length: 204800
		 * Min length: 1
		 */
		IdentityProviderSamlMetadata: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIdentityProviderConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateIdentityProviderConfigurationPostBodyFormProperties>({
			FleetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			IdentityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined, [Validators.required]),
			IdentityProviderSamlMetadata: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(204800)]),
		});

	}

}

