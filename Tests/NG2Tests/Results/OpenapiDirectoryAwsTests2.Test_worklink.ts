import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateDomainResponse {
	}

	export interface UnauthorizedException {
	}

	export interface InternalServerErrorException {
	}

	export interface InvalidRequestException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ResourceAlreadyExistsException {
	}

	export interface TooManyRequestsException {
	}

	export interface AssociateWebsiteAuthorizationProviderResponse {
		AuthorizationProviderId?: string;
	}

	export interface AssociateWebsiteCertificateAuthorityResponse {
		WebsiteCaId?: string;
	}

	export interface CreateFleetResponse {
		FleetArn?: string;
	}

	export interface DeleteFleetResponse {
	}

	export interface DescribeAuditStreamConfigurationResponse {
		AuditStreamArn?: string;
	}

	export interface DescribeCompanyNetworkConfigurationResponse {
		VpcId?: string;
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	export interface DescribeDeviceResponse {
		Status?: DescribeDeviceResponseStatus;
		Model?: string;
		Manufacturer?: string;
		OperatingSystem?: string;
		OperatingSystemVersion?: string;
		PatchLevel?: string;
		FirstAccessedTime?: Date;
		LastAccessedTime?: Date;
		Username?: string;
	}

	export enum DescribeDeviceResponseStatus { ACTIVE = 0, SIGNED_OUT = 1 }

	export interface DescribeDevicePolicyConfigurationResponse {
		DeviceCaCertificate?: string;
	}

	export interface DescribeDomainResponse {
		DomainName?: string;
		DisplayName?: string;
		CreatedTime?: Date;
		DomainStatus?: DescribeDomainResponseDomainStatus;
		AcmCertificateArn?: string;
	}

	export enum DescribeDomainResponseDomainStatus { PENDING_VALIDATION = 0, ASSOCIATING = 1, ACTIVE = 2, INACTIVE = 3, DISASSOCIATING = 4, DISASSOCIATED = 5, FAILED_TO_ASSOCIATE = 6, FAILED_TO_DISASSOCIATE = 7 }

	export interface DescribeFleetMetadataResponse {
		CreatedTime?: Date;
		LastUpdatedTime?: Date;
		FleetName?: string;
		DisplayName?: string;
		OptimizeForEndUserLocation?: boolean;
		CompanyCode?: string;
		FleetStatus?: DescribeFleetMetadataResponseFleetStatus;
		Tags?: TagMap;
	}

	export enum DescribeFleetMetadataResponseFleetStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, DELETED = 3, FAILED_TO_CREATE = 4, FAILED_TO_DELETE = 5 }

	export interface TagMap {
	}

	export interface DescribeIdentityProviderConfigurationResponse {
		IdentityProviderType?: DescribeIdentityProviderConfigurationResponseIdentityProviderType;
		ServiceProviderSamlMetadata?: string;
		IdentityProviderSamlMetadata?: string;
	}

	export enum DescribeIdentityProviderConfigurationResponseIdentityProviderType { SAML = 0 }

	export interface DescribeWebsiteCertificateAuthorityResponse {
		Certificate?: string;
		CreatedTime?: Date;
		DisplayName?: string;
	}

	export interface DisassociateDomainResponse {
	}

	export interface DisassociateWebsiteAuthorizationProviderResponse {
	}

	export interface DisassociateWebsiteCertificateAuthorityResponse {
	}

	export interface ListDevicesResponse {
		Devices?: Array<DeviceSummary>;
		NextToken?: string;
	}


	/** The summary of devices. */
	export interface DeviceSummary {
		DeviceId?: string;
		DeviceStatus?: DescribeDeviceResponseStatus;
	}

	export interface ListDomainsResponse {
		Domains?: Array<DomainSummary>;
		NextToken?: string;
	}


	/** The summary of the domain. */
	export interface DomainSummary {
		DomainName: string;
		DisplayName?: string;
		CreatedTime: Date;
		DomainStatus: DescribeDomainResponseDomainStatus;
	}

	export interface ListFleetsResponse {
		FleetSummaryList?: Array<FleetSummary>;
		NextToken?: string;
	}


	/** The summary of the fleet. */
	export interface FleetSummary {
		FleetArn?: string;
		CreatedTime?: Date;
		LastUpdatedTime?: Date;
		FleetName?: string;
		DisplayName?: string;
		CompanyCode?: string;
		FleetStatus?: DescribeFleetMetadataResponseFleetStatus;
		Tags?: TagMap;
	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}

	export interface ListWebsiteAuthorizationProvidersResponse {
		WebsiteAuthorizationProviders?: Array<WebsiteAuthorizationProviderSummary>;
		NextToken?: string;
	}


	/** The summary of the website authorization provider. */
	export interface WebsiteAuthorizationProviderSummary {
		AuthorizationProviderId?: string;
		AuthorizationProviderType: DescribeIdentityProviderConfigurationResponseIdentityProviderType;
		DomainName?: string;
		CreatedTime?: Date;
	}

	export interface ListWebsiteCertificateAuthoritiesResponse {
		WebsiteCertificateAuthorities?: Array<WebsiteCaSummary>;
		NextToken?: string;
	}


	/** The summary of the certificate authority (CA). */
	export interface WebsiteCaSummary {
		WebsiteCaId?: string;
		CreatedTime?: Date;
		DisplayName?: string;
	}

	export interface RestoreDomainAccessResponse {
	}

	export interface RevokeDomainAccessResponse {
	}

	export interface SignOutUserResponse {
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface UpdateAuditStreamConfigurationResponse {
	}

	export interface UpdateCompanyNetworkConfigurationResponse {
	}

	export interface UpdateDevicePolicyConfigurationResponse {
	}

	export interface UpdateDomainMetadataResponse {
	}

	export interface UpdateFleetMetadataResponse {
	}

	export interface UpdateIdentityProviderConfigurationResponse {
	}

	export interface AssociateDomainRequest {
		FleetArn: string;
		DomainName: string;
		DisplayName?: string;
		AcmCertificateArn: string;
	}

	export enum AuthorizationProviderType { SAML = 0 }

	export interface AssociateWebsiteAuthorizationProviderRequest {
		FleetArn: string;
		AuthorizationProviderType: DescribeIdentityProviderConfigurationResponseIdentityProviderType;
		DomainName?: string;
	}

	export interface AssociateWebsiteCertificateAuthorityRequest {
		FleetArn: string;
		Certificate: string;
		DisplayName?: string;
	}

	export interface CreateFleetRequest {
		FleetName: string;
		DisplayName?: string;
		OptimizeForEndUserLocation?: boolean;
		Tags?: TagMap;
	}

	export interface DeleteFleetRequest {
		FleetArn: string;
	}

	export interface DescribeAuditStreamConfigurationRequest {
		FleetArn: string;
	}

	export interface DescribeCompanyNetworkConfigurationRequest {
		FleetArn: string;
	}

	export interface DescribeDevicePolicyConfigurationRequest {
		FleetArn: string;
	}

	export interface DescribeDeviceRequest {
		FleetArn: string;
		DeviceId: string;
	}

	export enum DeviceStatus { ACTIVE = 0, SIGNED_OUT = 1 }

	export interface DescribeDomainRequest {
		FleetArn: string;
		DomainName: string;
	}

	export enum DomainStatus { PENDING_VALIDATION = 0, ASSOCIATING = 1, ACTIVE = 2, INACTIVE = 3, DISASSOCIATING = 4, DISASSOCIATED = 5, FAILED_TO_ASSOCIATE = 6, FAILED_TO_DISASSOCIATE = 7 }

	export interface DescribeFleetMetadataRequest {
		FleetArn: string;
	}

	export enum FleetStatus { CREATING = 0, ACTIVE = 1, DELETING = 2, DELETED = 3, FAILED_TO_CREATE = 4, FAILED_TO_DELETE = 5 }

	export interface DescribeIdentityProviderConfigurationRequest {
		FleetArn: string;
	}

	export enum IdentityProviderType { SAML = 0 }

	export interface DescribeWebsiteCertificateAuthorityRequest {
		FleetArn: string;
		WebsiteCaId: string;
	}

	export interface DisassociateDomainRequest {
		FleetArn: string;
		DomainName: string;
	}

	export interface DisassociateWebsiteAuthorizationProviderRequest {
		FleetArn: string;
		AuthorizationProviderId: string;
	}

	export interface DisassociateWebsiteCertificateAuthorityRequest {
		FleetArn: string;
		WebsiteCaId: string;
	}

	export interface ListDevicesRequest {
		FleetArn: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListDomainsRequest {
		FleetArn: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListFleetsRequest {
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListTagsForResourceRequest {
	}

	export interface ListWebsiteAuthorizationProvidersRequest {
		FleetArn: string;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListWebsiteCertificateAuthoritiesRequest {
		FleetArn: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface RestoreDomainAccessRequest {
		FleetArn: string;
		DomainName: string;
	}

	export interface RevokeDomainAccessRequest {
		FleetArn: string;
		DomainName: string;
	}

	export interface SignOutUserRequest {
		FleetArn: string;
		Username: string;
	}

	export interface TagResourceRequest {
		Tags: TagMap;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateAuditStreamConfigurationRequest {
		FleetArn: string;
		AuditStreamArn?: string;
	}

	export interface UpdateCompanyNetworkConfigurationRequest {
		FleetArn: string;
		VpcId: string;
		SubnetIds: Array<string>;
		SecurityGroupIds: Array<string>;
	}

	export interface UpdateDevicePolicyConfigurationRequest {
		FleetArn: string;
		DeviceCaCertificate?: string;
	}

	export interface UpdateDomainMetadataRequest {
		FleetArn: string;
		DomainName: string;
		DisplayName?: string;
	}

	export interface UpdateFleetMetadataRequest {
		FleetArn: string;
		DisplayName?: string;
		OptimizeForEndUserLocation?: boolean;
	}

	export interface UpdateIdentityProviderConfigurationRequest {
		FleetArn: string;
		IdentityProviderType: DescribeIdentityProviderConfigurationResponseIdentityProviderType;
		IdentityProviderSamlMetadata?: string;
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
		ListDevices(MaxResults: string, NextToken: string, requestBody: ListDevicesPostBody): Observable<ListDevicesResponse> {
			return this.http.post<ListDevicesResponse>(this.baseUri + 'listDevices?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of domains associated to a specified fleet.
		 * Post listDomains
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDomainsResponse} Success
		 */
		ListDomains(MaxResults: string, NextToken: string, requestBody: ListDomainsPostBody): Observable<ListDomainsResponse> {
			return this.http.post<ListDomainsResponse>(this.baseUri + 'listDomains?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of fleets for the current account and Region.
		 * Post listFleets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFleetsResponse} Success
		 */
		ListFleets(MaxResults: string, NextToken: string, requestBody: ListFleetsPostBody): Observable<ListFleetsResponse> {
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
		ListWebsiteAuthorizationProviders(MaxResults: string, NextToken: string, requestBody: ListWebsiteAuthorizationProvidersPostBody): Observable<ListWebsiteAuthorizationProvidersResponse> {
			return this.http.post<ListWebsiteAuthorizationProvidersResponse>(this.baseUri + 'listWebsiteAuthorizationProviders?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of certificate authorities added for the current account and Region.
		 * Post listWebsiteCertificateAuthorities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWebsiteCertificateAuthoritiesResponse} Success
		 */
		ListWebsiteCertificateAuthorities(MaxResults: string, NextToken: string, requestBody: ListWebsiteCertificateAuthoritiesPostBody): Observable<ListWebsiteCertificateAuthoritiesResponse> {
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
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The fully qualified domain name (FQDN).
		 * Max length: 253
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$
		 */
		DomainName: string;

		/**
		 * The name to display.
		 * Max length: 100
		 */
		DisplayName?: string;

		/**
		 * The ARN of an issued ACM certificate that is valid for the domain being associated.
		 * Pattern: arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]+:[\w+=,.@-]+(/[\w+=/,.@-]+)*
		 */
		AcmCertificateArn: string;
	}

	export interface AssociateWebsiteAuthorizationProviderPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/** The authorization provider type. */
		AuthorizationProviderType: DescribeIdentityProviderConfigurationResponseIdentityProviderType;

		/**
		 * The domain name of the authorization provider. This applies only to SAML-based authorization providers.
		 * Max length: 253
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$
		 */
		DomainName?: string;
	}

	export interface AssociateWebsiteCertificateAuthorityPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The root certificate of the CA.
		 * Max length: 8192
		 * Min length: 1
		 * Pattern: -{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9/+]{64}\u000D?\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?
		 */
		Certificate: string;

		/**
		 * The certificate name to display.
		 * Max length: 100
		 */
		DisplayName?: string;
	}

	export interface CreateFleetPostBody {

		/**
		 * A unique name for the fleet.
		 * Max length: 48
		 * Min length: 1
		 * Pattern: ^[a-z0-9](?:[a-z0-9\-]{0,46}[a-z0-9])?$
		 */
		FleetName: string;

		/**
		 * The fleet name to display.
		 * Max length: 100
		 */
		DisplayName?: string;

		/** The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. */
		OptimizeForEndUserLocation?: boolean;

		/** The tags to add to the resource. A tag is a key-value pair. */
		Tags?: {[id: string]: string };
	}

	export interface DeleteFleetPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}

	export interface DescribeAuditStreamConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}

	export interface DescribeCompanyNetworkConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}

	export interface DescribeDevicePostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * A unique identifier for a registered user's device.
		 * Max length: 256
		 * Min length: 1
		 */
		DeviceId: string;
	}

	export interface DescribeDevicePolicyConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}

	export interface DescribeDomainPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the domain.
		 * Max length: 253
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$
		 */
		DomainName: string;
	}

	export interface DescribeFleetMetadataPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}

	export interface DescribeIdentityProviderConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;
	}

	export interface DescribeWebsiteCertificateAuthorityPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * A unique identifier for the certificate authority.
		 * Max length: 256
		 * Min length: 1
		 */
		WebsiteCaId: string;
	}

	export interface DisassociateDomainPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the domain.
		 * Max length: 253
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$
		 */
		DomainName: string;
	}

	export interface DisassociateWebsiteAuthorizationProviderPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * A unique identifier for the authorization provider.
		 * Max length: 256
		 * Min length: 1
		 */
		AuthorizationProviderId: string;
	}

	export interface DisassociateWebsiteCertificateAuthorityPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * A unique identifier for the CA.
		 * Max length: 256
		 * Min length: 1
		 */
		WebsiteCaId: string;
	}

	export interface ListDevicesPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 * Pattern: [\w\-]+
		 */
		NextToken?: string;

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListDomainsPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 * Pattern: [\w\-]+
		 */
		NextToken?: string;

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListFleetsPostBody {

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 * Pattern: [\w\-]+
		 */
		NextToken?: string;

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface TagResourcePostBody {

		/** The tags to add to the resource. A tag is a key-value pair. */
		Tags: {[id: string]: string };
	}

	export interface ListWebsiteAuthorizationProvidersPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 * Pattern: [\w\-]+
		 */
		NextToken?: string;

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults?: number;
	}

	export interface ListWebsiteCertificateAuthoritiesPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The maximum number of results to be included in the next page.
		 * Minimum: 1
		 */
		MaxResults?: number;

		/**
		 * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
		 * Max length: 4096
		 * Min length: 1
		 * Pattern: [\w\-]+
		 */
		NextToken?: string;
	}

	export interface RestoreDomainAccessPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the domain.
		 * Max length: 253
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$
		 */
		DomainName: string;
	}

	export interface RevokeDomainAccessPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the domain.
		 * Max length: 253
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$
		 */
		DomainName: string;
	}

	export interface SignOutUserPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the user.
		 * Max length: 256
		 * Min length: 1
		 */
		Username: string;
	}

	export interface UpdateAuditStreamConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The ARN of the Amazon Kinesis data stream that receives the audit events.
		 * Pattern: ^arn:aws:kinesis:.+:[0-9]{12}:stream/AmazonWorkLink-.*$
		 */
		AuditStreamArn?: string;
	}

	export interface UpdateCompanyNetworkConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The VPC with connectivity to associated websites.
		 * Pattern: ^vpc-([0-9a-f]{8}|[0-9a-f]{17})$
		 */
		VpcId: string;

		/** The subnets used for X-ENI connections from Amazon WorkLink rendering containers. */
		SubnetIds: Array<string>;

		/**
		 * The security groups associated with access to the provided subnets.
		 * Maximum items: 5
		 */
		SecurityGroupIds: Array<string>;
	}

	export interface UpdateDevicePolicyConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.
		 * Max length: 32768
		 * Min length: 1
		 * Pattern: (-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9/+]{64}\u000D?\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}\u000D?\u000A)*-{5}BEGIN CERTIFICATE-{5}\u000D?\u000A([A-Za-z0-9/+]{64}\u000D?\u000A)*[A-Za-z0-9/+]{1,64}={0,2}\u000D?\u000A-{5}END CERTIFICATE-{5}(\u000D?\u000A)?
		 */
		DeviceCaCertificate?: string;
	}

	export interface UpdateDomainMetadataPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The name of the domain.
		 * Max length: 253
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9]?((?!-)([A-Za-z0-9-]*[A-Za-z0-9])\.)+[a-zA-Z0-9]+$
		 */
		DomainName: string;

		/**
		 * The name to display.
		 * Max length: 100
		 */
		DisplayName?: string;
	}

	export interface UpdateFleetMetadataPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/**
		 * The fleet name to display. The existing DisplayName is unset if null is passed.
		 * Max length: 100
		 */
		DisplayName?: string;

		/** The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. */
		OptimizeForEndUserLocation?: boolean;
	}

	export interface UpdateIdentityProviderConfigurationPostBody {

		/**
		 * The ARN of the fleet.
		 * Max length: 2048
		 * Min length: 20
		 */
		FleetArn: string;

		/** The type of identity provider. */
		IdentityProviderType: DescribeIdentityProviderConfigurationResponseIdentityProviderType;

		/**
		 * The SAML metadata document provided by the customer’s identity provider. The existing IdentityProviderSamlMetadata is unset if null is passed.
		 * Max length: 204800
		 * Min length: 1
		 */
		IdentityProviderSamlMetadata?: string;
	}

}

