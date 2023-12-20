import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateCustomerGatewayResponse {

		/** Describes the association between a customer gateway, a device, and a link. */
		CustomerGatewayAssociation?: CustomerGatewayAssociation;
	}
	export interface AssociateCustomerGatewayResponseFormProperties {
	}
	export function CreateAssociateCustomerGatewayResponseFormGroup() {
		return new FormGroup<AssociateCustomerGatewayResponseFormProperties>({
		});

	}


	/** Describes the association between a customer gateway, a device, and a link. */
	export interface CustomerGatewayAssociation {
		CustomerGatewayArn?: string | null;
		GlobalNetworkId?: string | null;
		DeviceId?: string | null;
		LinkId?: string | null;
		State?: CustomerGatewayAssociationState | null;
	}

	/** Describes the association between a customer gateway, a device, and a link. */
	export interface CustomerGatewayAssociationFormProperties {
		CustomerGatewayArn: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
		State: FormControl<CustomerGatewayAssociationState | null | undefined>,
	}
	export function CreateCustomerGatewayAssociationFormGroup() {
		return new FormGroup<CustomerGatewayAssociationFormProperties>({
			CustomerGatewayArn: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LinkId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CustomerGatewayAssociationState | null | undefined>(undefined),
		});

	}

	export enum CustomerGatewayAssociationState { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3 }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface AssociateLinkResponse {

		/** Describes the association between a device and a link. */
		LinkAssociation?: LinkAssociation;
	}
	export interface AssociateLinkResponseFormProperties {
	}
	export function CreateAssociateLinkResponseFormGroup() {
		return new FormGroup<AssociateLinkResponseFormProperties>({
		});

	}


	/** Describes the association between a device and a link. */
	export interface LinkAssociation {
		GlobalNetworkId?: string | null;
		DeviceId?: string | null;
		LinkId?: string | null;
		LinkAssociationState?: CustomerGatewayAssociationState | null;
	}

	/** Describes the association between a device and a link. */
	export interface LinkAssociationFormProperties {
		GlobalNetworkId: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
		LinkAssociationState: FormControl<CustomerGatewayAssociationState | null | undefined>,
	}
	export function CreateLinkAssociationFormGroup() {
		return new FormGroup<LinkAssociationFormProperties>({
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LinkId: new FormControl<string | null | undefined>(undefined),
			LinkAssociationState: new FormControl<CustomerGatewayAssociationState | null | undefined>(undefined),
		});

	}

	export interface CreateDeviceResponse {

		/** Describes a device. */
		Device?: Device;
	}
	export interface CreateDeviceResponseFormProperties {
	}
	export function CreateCreateDeviceResponseFormGroup() {
		return new FormGroup<CreateDeviceResponseFormProperties>({
		});

	}


	/** Describes a device. */
	export interface Device {
		DeviceId?: string | null;
		DeviceArn?: string | null;
		GlobalNetworkId?: string | null;
		Description?: string | null;
		Type?: string | null;
		Vendor?: string | null;
		Model?: string | null;
		SerialNumber?: string | null;

		/** Describes a location. */
		Location?: Location;
		SiteId?: string | null;
		CreatedAt?: Date | null;
		State?: DeviceState | null;
		Tags?: Array<Tag>;
	}

	/** Describes a device. */
	export interface DeviceFormProperties {
		DeviceId: FormControl<string | null | undefined>,
		DeviceArn: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Vendor: FormControl<string | null | undefined>,
		Model: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		SiteId: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		State: FormControl<DeviceState | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined),
			DeviceArn: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Vendor: new FormControl<string | null | undefined>(undefined),
			Model: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<DeviceState | null | undefined>(undefined),
		});

	}


	/** Describes a location. */
	export interface Location {
		Address?: string | null;
		Latitude?: string | null;
		Longitude?: string | null;
	}

	/** Describes a location. */
	export interface LocationFormProperties {
		Address: FormControl<string | null | undefined>,
		Latitude: FormControl<string | null | undefined>,
		Longitude: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<string | null | undefined>(undefined),
			Longitude: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }


	/** Describes a tag. */
	export interface Tag {
		Key?: string | null;
		Value?: string | null;
	}

	/** Describes a tag. */
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

	export interface CreateGlobalNetworkResponse {

		/** Describes a global network. */
		GlobalNetwork?: GlobalNetwork;
	}
	export interface CreateGlobalNetworkResponseFormProperties {
	}
	export function CreateCreateGlobalNetworkResponseFormGroup() {
		return new FormGroup<CreateGlobalNetworkResponseFormProperties>({
		});

	}


	/** Describes a global network. */
	export interface GlobalNetwork {
		GlobalNetworkId?: string | null;
		GlobalNetworkArn?: string | null;
		Description?: string | null;
		CreatedAt?: Date | null;
		State?: DeviceState | null;
		Tags?: Array<Tag>;
	}

	/** Describes a global network. */
	export interface GlobalNetworkFormProperties {
		GlobalNetworkId: FormControl<string | null | undefined>,
		GlobalNetworkArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		State: FormControl<DeviceState | null | undefined>,
	}
	export function CreateGlobalNetworkFormGroup() {
		return new FormGroup<GlobalNetworkFormProperties>({
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<DeviceState | null | undefined>(undefined),
		});

	}

	export interface CreateLinkResponse {

		/** Describes a link. */
		Link?: Link;
	}
	export interface CreateLinkResponseFormProperties {
	}
	export function CreateCreateLinkResponseFormGroup() {
		return new FormGroup<CreateLinkResponseFormProperties>({
		});

	}


	/** Describes a link. */
	export interface Link {
		LinkId?: string | null;
		LinkArn?: string | null;
		GlobalNetworkId?: string | null;
		SiteId?: string | null;
		Description?: string | null;
		Type?: string | null;

		/** Describes bandwidth information. */
		Bandwidth?: Bandwidth;
		Provider?: string | null;
		CreatedAt?: Date | null;
		State?: DeviceState | null;
		Tags?: Array<Tag>;
	}

	/** Describes a link. */
	export interface LinkFormProperties {
		LinkId: FormControl<string | null | undefined>,
		LinkArn: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		SiteId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Provider: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		State: FormControl<DeviceState | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			LinkId: new FormControl<string | null | undefined>(undefined),
			LinkArn: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<DeviceState | null | undefined>(undefined),
		});

	}


	/** Describes bandwidth information. */
	export interface Bandwidth {
		UploadSpeed?: number | null;
		DownloadSpeed?: number | null;
	}

	/** Describes bandwidth information. */
	export interface BandwidthFormProperties {
		UploadSpeed: FormControl<number | null | undefined>,
		DownloadSpeed: FormControl<number | null | undefined>,
	}
	export function CreateBandwidthFormGroup() {
		return new FormGroup<BandwidthFormProperties>({
			UploadSpeed: new FormControl<number | null | undefined>(undefined),
			DownloadSpeed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateSiteResponse {

		/** Describes a site. */
		Site?: Site;
	}
	export interface CreateSiteResponseFormProperties {
	}
	export function CreateCreateSiteResponseFormGroup() {
		return new FormGroup<CreateSiteResponseFormProperties>({
		});

	}


	/** Describes a site. */
	export interface Site {
		SiteId?: string | null;
		SiteArn?: string | null;
		GlobalNetworkId?: string | null;
		Description?: string | null;

		/** Describes a location. */
		Location?: Location;
		CreatedAt?: Date | null;
		State?: DeviceState | null;
		Tags?: Array<Tag>;
	}

	/** Describes a site. */
	export interface SiteFormProperties {
		SiteId: FormControl<string | null | undefined>,
		SiteArn: FormControl<string | null | undefined>,
		GlobalNetworkId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		State: FormControl<DeviceState | null | undefined>,
	}
	export function CreateSiteFormGroup() {
		return new FormGroup<SiteFormProperties>({
			SiteId: new FormControl<string | null | undefined>(undefined),
			SiteArn: new FormControl<string | null | undefined>(undefined),
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<DeviceState | null | undefined>(undefined),
		});

	}

	export interface DeleteDeviceResponse {

		/** Describes a device. */
		Device?: Device;
	}
	export interface DeleteDeviceResponseFormProperties {
	}
	export function CreateDeleteDeviceResponseFormGroup() {
		return new FormGroup<DeleteDeviceResponseFormProperties>({
		});

	}

	export interface DeleteGlobalNetworkResponse {

		/** Describes a global network. */
		GlobalNetwork?: GlobalNetwork;
	}
	export interface DeleteGlobalNetworkResponseFormProperties {
	}
	export function CreateDeleteGlobalNetworkResponseFormGroup() {
		return new FormGroup<DeleteGlobalNetworkResponseFormProperties>({
		});

	}

	export interface DeleteLinkResponse {

		/** Describes a link. */
		Link?: Link;
	}
	export interface DeleteLinkResponseFormProperties {
	}
	export function CreateDeleteLinkResponseFormGroup() {
		return new FormGroup<DeleteLinkResponseFormProperties>({
		});

	}

	export interface DeleteSiteResponse {

		/** Describes a site. */
		Site?: Site;
	}
	export interface DeleteSiteResponseFormProperties {
	}
	export function CreateDeleteSiteResponseFormGroup() {
		return new FormGroup<DeleteSiteResponseFormProperties>({
		});

	}

	export interface DeregisterTransitGatewayResponse {

		/** Describes the registration of a transit gateway to a global network. */
		TransitGatewayRegistration?: TransitGatewayRegistration;
	}
	export interface DeregisterTransitGatewayResponseFormProperties {
	}
	export function CreateDeregisterTransitGatewayResponseFormGroup() {
		return new FormGroup<DeregisterTransitGatewayResponseFormProperties>({
		});

	}


	/** Describes the registration of a transit gateway to a global network. */
	export interface TransitGatewayRegistration {
		GlobalNetworkId?: string | null;
		TransitGatewayArn?: string | null;

		/** Describes the status of a transit gateway registration. */
		State?: TransitGatewayRegistrationStateReason;
	}

	/** Describes the registration of a transit gateway to a global network. */
	export interface TransitGatewayRegistrationFormProperties {
		GlobalNetworkId: FormControl<string | null | undefined>,
		TransitGatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateTransitGatewayRegistrationFormGroup() {
		return new FormGroup<TransitGatewayRegistrationFormProperties>({
			GlobalNetworkId: new FormControl<string | null | undefined>(undefined),
			TransitGatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the status of a transit gateway registration. */
	export interface TransitGatewayRegistrationStateReason {
		Code?: TransitGatewayRegistrationStateReasonCode | null;
		Message?: string | null;
	}

	/** Describes the status of a transit gateway registration. */
	export interface TransitGatewayRegistrationStateReasonFormProperties {
		Code: FormControl<TransitGatewayRegistrationStateReasonCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTransitGatewayRegistrationStateReasonFormGroup() {
		return new FormGroup<TransitGatewayRegistrationStateReasonFormProperties>({
			Code: new FormControl<TransitGatewayRegistrationStateReasonCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransitGatewayRegistrationStateReasonCode { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3, FAILED = 4 }

	export interface DescribeGlobalNetworksResponse {
		GlobalNetworks?: Array<GlobalNetwork>;
		NextToken?: string | null;
	}
	export interface DescribeGlobalNetworksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeGlobalNetworksResponseFormGroup() {
		return new FormGroup<DescribeGlobalNetworksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateCustomerGatewayResponse {

		/** Describes the association between a customer gateway, a device, and a link. */
		CustomerGatewayAssociation?: CustomerGatewayAssociation;
	}
	export interface DisassociateCustomerGatewayResponseFormProperties {
	}
	export function CreateDisassociateCustomerGatewayResponseFormGroup() {
		return new FormGroup<DisassociateCustomerGatewayResponseFormProperties>({
		});

	}

	export interface DisassociateLinkResponse {

		/** Describes the association between a device and a link. */
		LinkAssociation?: LinkAssociation;
	}
	export interface DisassociateLinkResponseFormProperties {
	}
	export function CreateDisassociateLinkResponseFormGroup() {
		return new FormGroup<DisassociateLinkResponseFormProperties>({
		});

	}

	export interface GetCustomerGatewayAssociationsResponse {
		CustomerGatewayAssociations?: Array<CustomerGatewayAssociation>;
		NextToken?: string | null;
	}
	export interface GetCustomerGatewayAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomerGatewayAssociationsResponseFormGroup() {
		return new FormGroup<GetCustomerGatewayAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDevicesResponse {
		Devices?: Array<Device>;
		NextToken?: string | null;
	}
	export interface GetDevicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDevicesResponseFormGroup() {
		return new FormGroup<GetDevicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLinkAssociationsResponse {
		LinkAssociations?: Array<LinkAssociation>;
		NextToken?: string | null;
	}
	export interface GetLinkAssociationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLinkAssociationsResponseFormGroup() {
		return new FormGroup<GetLinkAssociationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLinksResponse {
		Links?: Array<Link>;
		NextToken?: string | null;
	}
	export interface GetLinksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLinksResponseFormGroup() {
		return new FormGroup<GetLinksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSitesResponse {
		Sites?: Array<Site>;
		NextToken?: string | null;
	}
	export interface GetSitesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSitesResponseFormGroup() {
		return new FormGroup<GetSitesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransitGatewayRegistrationsResponse {
		TransitGatewayRegistrations?: Array<TransitGatewayRegistration>;
		NextToken?: string | null;
	}
	export interface GetTransitGatewayRegistrationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTransitGatewayRegistrationsResponseFormGroup() {
		return new FormGroup<GetTransitGatewayRegistrationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		TagList?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface RegisterTransitGatewayResponse {

		/** Describes the registration of a transit gateway to a global network. */
		TransitGatewayRegistration?: TransitGatewayRegistration;
	}
	export interface RegisterTransitGatewayResponseFormProperties {
	}
	export function CreateRegisterTransitGatewayResponseFormGroup() {
		return new FormGroup<RegisterTransitGatewayResponseFormProperties>({
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

	export interface UpdateDeviceResponse {

		/** Describes a device. */
		Device?: Device;
	}
	export interface UpdateDeviceResponseFormProperties {
	}
	export function CreateUpdateDeviceResponseFormGroup() {
		return new FormGroup<UpdateDeviceResponseFormProperties>({
		});

	}

	export interface UpdateGlobalNetworkResponse {

		/** Describes a global network. */
		GlobalNetwork?: GlobalNetwork;
	}
	export interface UpdateGlobalNetworkResponseFormProperties {
	}
	export function CreateUpdateGlobalNetworkResponseFormGroup() {
		return new FormGroup<UpdateGlobalNetworkResponseFormProperties>({
		});

	}

	export interface UpdateLinkResponse {

		/** Describes a link. */
		Link?: Link;
	}
	export interface UpdateLinkResponseFormProperties {
	}
	export function CreateUpdateLinkResponseFormGroup() {
		return new FormGroup<UpdateLinkResponseFormProperties>({
		});

	}

	export interface UpdateSiteResponse {

		/** Describes a site. */
		Site?: Site;
	}
	export interface UpdateSiteResponseFormProperties {
	}
	export function CreateUpdateSiteResponseFormGroup() {
		return new FormGroup<UpdateSiteResponseFormProperties>({
		});

	}

	export interface AssociateCustomerGatewayRequest {
		CustomerGatewayArn: string;
		DeviceId: string;
		LinkId?: string | null;
	}
	export interface AssociateCustomerGatewayRequestFormProperties {
		CustomerGatewayArn: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateCustomerGatewayRequestFormGroup() {
		return new FormGroup<AssociateCustomerGatewayRequestFormProperties>({
			CustomerGatewayArn: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LinkId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateLinkRequest {
		DeviceId: string;
		LinkId: string;
	}
	export interface AssociateLinkRequestFormProperties {
		DeviceId: FormControl<string | null | undefined>,
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateLinkRequestFormGroup() {
		return new FormGroup<AssociateLinkRequestFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LinkId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeviceRequest {
		Description?: string | null;
		Type?: string | null;
		Vendor?: string | null;
		Model?: string | null;
		SerialNumber?: string | null;

		/** Describes a location. */
		Location?: Location;
		SiteId?: string | null;
		Tags?: Array<Tag>;
	}
	export interface CreateDeviceRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Vendor: FormControl<string | null | undefined>,
		Model: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeviceRequestFormGroup() {
		return new FormGroup<CreateDeviceRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Vendor: new FormControl<string | null | undefined>(undefined),
			Model: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGlobalNetworkRequest {
		Description?: string | null;
		Tags?: Array<Tag>;
	}
	export interface CreateGlobalNetworkRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateGlobalNetworkRequestFormGroup() {
		return new FormGroup<CreateGlobalNetworkRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLinkRequest {
		Description?: string | null;
		Type?: string | null;

		/**
		 * Describes bandwidth information.
		 * Required
		 */
		Bandwidth: Bandwidth;
		Provider?: string | null;
		SiteId: string;
		Tags?: Array<Tag>;
	}
	export interface CreateLinkRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Provider: FormControl<string | null | undefined>,
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLinkRequestFormGroup() {
		return new FormGroup<CreateLinkRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSiteRequest {
		Description?: string | null;

		/** Describes a location. */
		Location?: Location;
		Tags?: Array<Tag>;
	}
	export interface CreateSiteRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSiteRequestFormGroup() {
		return new FormGroup<CreateSiteRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDeviceRequest {
	}
	export interface DeleteDeviceRequestFormProperties {
	}
	export function CreateDeleteDeviceRequestFormGroup() {
		return new FormGroup<DeleteDeviceRequestFormProperties>({
		});

	}

	export interface DeleteGlobalNetworkRequest {
	}
	export interface DeleteGlobalNetworkRequestFormProperties {
	}
	export function CreateDeleteGlobalNetworkRequestFormGroup() {
		return new FormGroup<DeleteGlobalNetworkRequestFormProperties>({
		});

	}

	export interface DeleteLinkRequest {
	}
	export interface DeleteLinkRequestFormProperties {
	}
	export function CreateDeleteLinkRequestFormGroup() {
		return new FormGroup<DeleteLinkRequestFormProperties>({
		});

	}

	export interface DeleteSiteRequest {
	}
	export interface DeleteSiteRequestFormProperties {
	}
	export function CreateDeleteSiteRequestFormGroup() {
		return new FormGroup<DeleteSiteRequestFormProperties>({
		});

	}

	export interface DeregisterTransitGatewayRequest {
	}
	export interface DeregisterTransitGatewayRequestFormProperties {
	}
	export function CreateDeregisterTransitGatewayRequestFormGroup() {
		return new FormGroup<DeregisterTransitGatewayRequestFormProperties>({
		});

	}

	export interface DescribeGlobalNetworksRequest {
	}
	export interface DescribeGlobalNetworksRequestFormProperties {
	}
	export function CreateDescribeGlobalNetworksRequestFormGroup() {
		return new FormGroup<DescribeGlobalNetworksRequestFormProperties>({
		});

	}

	export interface DisassociateCustomerGatewayRequest {
	}
	export interface DisassociateCustomerGatewayRequestFormProperties {
	}
	export function CreateDisassociateCustomerGatewayRequestFormGroup() {
		return new FormGroup<DisassociateCustomerGatewayRequestFormProperties>({
		});

	}

	export interface DisassociateLinkRequest {
	}
	export interface DisassociateLinkRequestFormProperties {
	}
	export function CreateDisassociateLinkRequestFormGroup() {
		return new FormGroup<DisassociateLinkRequestFormProperties>({
		});

	}

	export interface GetCustomerGatewayAssociationsRequest {
	}
	export interface GetCustomerGatewayAssociationsRequestFormProperties {
	}
	export function CreateGetCustomerGatewayAssociationsRequestFormGroup() {
		return new FormGroup<GetCustomerGatewayAssociationsRequestFormProperties>({
		});

	}

	export interface GetDevicesRequest {
	}
	export interface GetDevicesRequestFormProperties {
	}
	export function CreateGetDevicesRequestFormGroup() {
		return new FormGroup<GetDevicesRequestFormProperties>({
		});

	}

	export interface GetLinkAssociationsRequest {
	}
	export interface GetLinkAssociationsRequestFormProperties {
	}
	export function CreateGetLinkAssociationsRequestFormGroup() {
		return new FormGroup<GetLinkAssociationsRequestFormProperties>({
		});

	}

	export interface GetLinksRequest {
	}
	export interface GetLinksRequestFormProperties {
	}
	export function CreateGetLinksRequestFormGroup() {
		return new FormGroup<GetLinksRequestFormProperties>({
		});

	}

	export interface GetSitesRequest {
	}
	export interface GetSitesRequestFormProperties {
	}
	export function CreateGetSitesRequestFormGroup() {
		return new FormGroup<GetSitesRequestFormProperties>({
		});

	}

	export interface GetTransitGatewayRegistrationsRequest {
	}
	export interface GetTransitGatewayRegistrationsRequestFormProperties {
	}
	export function CreateGetTransitGatewayRegistrationsRequestFormGroup() {
		return new FormGroup<GetTransitGatewayRegistrationsRequestFormProperties>({
		});

	}

	export enum GlobalNetworkState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export enum LinkState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export enum LinkAssociationState { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3 }

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface RegisterTransitGatewayRequest {
		TransitGatewayArn: string;
	}
	export interface RegisterTransitGatewayRequestFormProperties {
		TransitGatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTransitGatewayRequestFormGroup() {
		return new FormGroup<RegisterTransitGatewayRequestFormProperties>({
			TransitGatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SiteState { PENDING = 0, AVAILABLE = 1, DELETING = 2, UPDATING = 3 }

	export interface TagResourceRequest {
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export enum TransitGatewayRegistrationState { PENDING = 0, AVAILABLE = 1, DELETING = 2, DELETED = 3, FAILED = 4 }

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateDeviceRequest {
		Description?: string | null;
		Type?: string | null;
		Vendor?: string | null;
		Model?: string | null;
		SerialNumber?: string | null;

		/** Describes a location. */
		Location?: Location;
		SiteId?: string | null;
	}
	export interface UpdateDeviceRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Vendor: FormControl<string | null | undefined>,
		Model: FormControl<string | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceRequestFormGroup() {
		return new FormGroup<UpdateDeviceRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Vendor: new FormControl<string | null | undefined>(undefined),
			Model: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGlobalNetworkRequest {
		Description?: string | null;
	}
	export interface UpdateGlobalNetworkRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalNetworkRequestFormGroup() {
		return new FormGroup<UpdateGlobalNetworkRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLinkRequest {
		Description?: string | null;
		Type?: string | null;

		/** Describes bandwidth information. */
		Bandwidth?: Bandwidth;
		Provider?: string | null;
	}
	export interface UpdateLinkRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Provider: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLinkRequestFormGroup() {
		return new FormGroup<UpdateLinkRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSiteRequest {
		Description?: string | null;

		/** Describes a location. */
		Location?: Location;
	}
	export interface UpdateSiteRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSiteRequestFormGroup() {
		return new FormGroup<UpdateSiteRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates a customer gateway with a device and optionally, with a link. If you specify a link, it must be associated with the specified device. </p> <p>You can only associate customer gateways that are connected to a VPN attachment on a transit gateway. The transit gateway must be registered in your global network. When you register a transit gateway, customer gateways that are connected to the transit gateway are automatically included in the global network. To list customer gateways that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by <code>transit-gateway-id</code>.</p> <p>You cannot associate a customer gateway with more than one device and link. </p>
		 * Post global-networks/{globalNetworkId}/customer-gateway-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {AssociateCustomerGatewayResponse} Success
		 */
		AssociateCustomerGateway(globalNetworkId: string, requestBody: AssociateCustomerGatewayPostBody): Observable<AssociateCustomerGatewayResponse> {
			return this.http.post<AssociateCustomerGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the association information for customer gateways that are associated with devices and links in your global network.
		 * Get global-networks/{globalNetworkId}/customer-gateway-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} customerGatewayArns One or more customer gateway Amazon Resource Names (ARNs). For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCustomerGatewayAssociationsResponse} Success
		 */
		GetCustomerGatewayAssociations(globalNetworkId: string, customerGatewayArns: Array<string> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetCustomerGatewayAssociationsResponse> {
			return this.http.get<GetCustomerGatewayAssociationsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations&' + customerGatewayArns?.map(z => `customerGatewayArns=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Associates a link to a device. A device can be associated to multiple links and a link can be associated to multiple devices. The device and link must be in the same global network and the same site.
		 * Post global-networks/{globalNetworkId}/link-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {AssociateLinkResponse} Success
		 */
		AssociateLink(globalNetworkId: string, requestBody: AssociateLinkPostBody): Observable<AssociateLinkResponse> {
			return this.http.post<AssociateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the link associations for a device or a link. Either the device ID or the link ID must be specified.
		 * Get global-networks/{globalNetworkId}/link-associations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @param {string} linkId The ID of the link.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetLinkAssociationsResponse} Success
		 */
		GetLinkAssociations(globalNetworkId: string, deviceId: string | null | undefined, linkId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetLinkAssociationsResponse> {
			return this.http.get<GetLinkAssociationsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&linkId=' + (linkId == null ? '' : encodeURIComponent(linkId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new device in a global network. If you specify both a site ID and a location, the location of the site is used for visualization in the Network Manager console.
		 * Post global-networks/{globalNetworkId}/devices
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateDeviceResponse} Success
		 */
		CreateDevice(globalNetworkId: string, requestBody: CreateDevicePostBody): Observable<CreateDeviceResponse> {
			return this.http.post<CreateDeviceResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more of your devices in a global network.
		 * Get global-networks/{globalNetworkId}/devices
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} deviceIds One or more device IDs. The maximum is 10.
		 * @param {string} siteId The ID of the site.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetDevicesResponse} Success
		 */
		GetDevices(globalNetworkId: string, deviceIds: Array<string> | null | undefined, siteId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetDevicesResponse> {
			return this.http.get<GetDevicesResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices&' + deviceIds?.map(z => `deviceIds=${encodeURIComponent(z)}`).join('&') + '&siteId=' + (siteId == null ? '' : encodeURIComponent(siteId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new, empty global network.
		 * Post global-networks
		 * @return {CreateGlobalNetworkResponse} Success
		 */
		CreateGlobalNetwork(requestBody: CreateGlobalNetworkPostBody): Observable<CreateGlobalNetworkResponse> {
			return this.http.post<CreateGlobalNetworkResponse>(this.baseUri + 'global-networks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more global networks. By default, all global networks are described. To describe the objects in your global network, you must use the appropriate <code>Get*</code> action. For example, to list the transit gateways in your global network, use <a>GetTransitGatewayRegistrations</a>.
		 * Get global-networks
		 * @param {Array<string>} globalNetworkIds The IDs of one or more global networks. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeGlobalNetworksResponse} Success
		 */
		DescribeGlobalNetworks(globalNetworkIds: Array<string> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<DescribeGlobalNetworksResponse> {
			return this.http.get<DescribeGlobalNetworksResponse>(this.baseUri + 'global-networks?' + globalNetworkIds?.map(z => `globalNetworkIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new link for a specified site.
		 * Post global-networks/{globalNetworkId}/links
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateLinkResponse} Success
		 */
		CreateLink(globalNetworkId: string, requestBody: CreateLinkPostBody): Observable<CreateLinkResponse> {
			return this.http.post<CreateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about one or more links in a specified global network.</p> <p>If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</p>
		 * Get global-networks/{globalNetworkId}/links
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} linkIds One or more link IDs. The maximum is 10.
		 * @param {string} siteId The ID of the site.
		 * @param {string} type The link type.
		 * @param {string} provider The link provider.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetLinksResponse} Success
		 */
		GetLinks(globalNetworkId: string, linkIds: Array<string> | null | undefined, siteId: string | null | undefined, type: string | null | undefined, provider: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetLinksResponse> {
			return this.http.get<GetLinksResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links&' + linkIds?.map(z => `linkIds=${encodeURIComponent(z)}`).join('&') + '&siteId=' + (siteId == null ? '' : encodeURIComponent(siteId)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&provider=' + (provider == null ? '' : encodeURIComponent(provider)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new site in a global network.
		 * Post global-networks/{globalNetworkId}/sites
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {CreateSiteResponse} Success
		 */
		CreateSite(globalNetworkId: string, requestBody: CreateSitePostBody): Observable<CreateSiteResponse> {
			return this.http.post<CreateSiteResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about one or more of your sites in a global network.
		 * Get global-networks/{globalNetworkId}/sites
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} siteIds One or more site IDs. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetSitesResponse} Success
		 */
		GetSites(globalNetworkId: string, siteIds: Array<string> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetSitesResponse> {
			return this.http.get<GetSitesResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites&' + siteIds?.map(z => `siteIds=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes an existing device. You must first disassociate the device from any links and customer gateways.
		 * Delete global-networks/{globalNetworkId}/devices/{deviceId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @return {DeleteDeviceResponse} Success
		 */
		DeleteDevice(globalNetworkId: string, deviceId: string): Observable<DeleteDeviceResponse> {
			return this.http.delete<DeleteDeviceResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)), {});
		}

		/**
		 * Updates the details for an existing device. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}/devices/{deviceId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @return {UpdateDeviceResponse} Success
		 */
		UpdateDevice(globalNetworkId: string, deviceId: string, requestBody: UpdateDevicePatchBody): Observable<UpdateDeviceResponse> {
			return this.http.patch<UpdateDeviceResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing global network. You must first delete all global network objects (devices, links, and sites) and deregister all transit gateways.
		 * Delete global-networks/{globalNetworkId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {DeleteGlobalNetworkResponse} Success
		 */
		DeleteGlobalNetwork(globalNetworkId: string): Observable<DeleteGlobalNetworkResponse> {
			return this.http.delete<DeleteGlobalNetworkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)), {});
		}

		/**
		 * Updates an existing global network. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}
		 * @param {string} globalNetworkId The ID of your global network.
		 * @return {UpdateGlobalNetworkResponse} Success
		 */
		UpdateGlobalNetwork(globalNetworkId: string, requestBody: UpdateGlobalNetworkPatchBody): Observable<UpdateGlobalNetworkResponse> {
			return this.http.patch<UpdateGlobalNetworkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing link. You must first disassociate the link from any devices and customer gateways.
		 * Delete global-networks/{globalNetworkId}/links/{linkId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} linkId The ID of the link.
		 * @return {DeleteLinkResponse} Success
		 */
		DeleteLink(globalNetworkId: string, linkId: string): Observable<DeleteLinkResponse> {
			return this.http.delete<DeleteLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links/' + (linkId == null ? '' : encodeURIComponent(linkId)), {});
		}

		/**
		 * Updates the details for an existing link. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}/links/{linkId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} linkId The ID of the link.
		 * @return {UpdateLinkResponse} Success
		 */
		UpdateLink(globalNetworkId: string, linkId: string, requestBody: UpdateLinkPatchBody): Observable<UpdateLinkResponse> {
			return this.http.patch<UpdateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/links/' + (linkId == null ? '' : encodeURIComponent(linkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing site. The site cannot be associated with any device or link.
		 * Delete global-networks/{globalNetworkId}/sites/{siteId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} siteId The ID of the site.
		 * @return {DeleteSiteResponse} Success
		 */
		DeleteSite(globalNetworkId: string, siteId: string): Observable<DeleteSiteResponse> {
			return this.http.delete<DeleteSiteResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites/' + (siteId == null ? '' : encodeURIComponent(siteId)), {});
		}

		/**
		 * Updates the information for an existing site. To remove information for any of the parameters, specify an empty string.
		 * Patch global-networks/{globalNetworkId}/sites/{siteId}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} siteId The ID of your site.
		 * @return {UpdateSiteResponse} Success
		 */
		UpdateSite(globalNetworkId: string, siteId: string, requestBody: UpdateSitePatchBody): Observable<UpdateSiteResponse> {
			return this.http.patch<UpdateSiteResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/sites/' + (siteId == null ? '' : encodeURIComponent(siteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregisters a transit gateway from your global network. This action does not delete your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.
		 * Delete global-networks/{globalNetworkId}/transit-gateway-registrations/{transitGatewayArn}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} transitGatewayArn The Amazon Resource Name (ARN) of the transit gateway.
		 * @return {DeregisterTransitGatewayResponse} Success
		 */
		DeregisterTransitGateway(globalNetworkId: string, transitGatewayArn: string): Observable<DeregisterTransitGatewayResponse> {
			return this.http.delete<DeregisterTransitGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations/' + (transitGatewayArn == null ? '' : encodeURIComponent(transitGatewayArn)), {});
		}

		/**
		 * Disassociates a customer gateway from a device and a link.
		 * Delete global-networks/{globalNetworkId}/customer-gateway-associations/{customerGatewayArn}
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} customerGatewayArn The Amazon Resource Name (ARN) of the customer gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.
		 * @return {DisassociateCustomerGatewayResponse} Success
		 */
		DisassociateCustomerGateway(globalNetworkId: string, customerGatewayArn: string): Observable<DisassociateCustomerGatewayResponse> {
			return this.http.delete<DisassociateCustomerGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/customer-gateway-associations/' + (customerGatewayArn == null ? '' : encodeURIComponent(customerGatewayArn)), {});
		}

		/**
		 * Disassociates an existing device from a link. You must first disassociate any customer gateways that are associated with the link.
		 * Delete global-networks/{globalNetworkId}/link-associations#deviceId&linkId
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {string} deviceId The ID of the device.
		 * @param {string} linkId The ID of the link.
		 * @return {DisassociateLinkResponse} Success
		 */
		DisassociateLink(globalNetworkId: string, deviceId: string, linkId: string): Observable<DisassociateLinkResponse> {
			return this.http.delete<DisassociateLinkResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/link-associations#deviceId&linkId&deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&linkId=' + (linkId == null ? '' : encodeURIComponent(linkId)), {});
		}

		/**
		 * Gets information about the transit gateway registrations in a specified global network.
		 * Get global-networks/{globalNetworkId}/transit-gateway-registrations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @param {Array<string>} transitGatewayArns The Amazon Resource Names (ARNs) of one or more transit gateways. The maximum is 10.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTransitGatewayRegistrationsResponse} Success
		 */
		GetTransitGatewayRegistrations(globalNetworkId: string, transitGatewayArns: Array<string> | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<GetTransitGatewayRegistrationsResponse> {
			return this.http.get<GetTransitGatewayRegistrationsResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations&' + transitGatewayArns?.map(z => `transitGatewayArns=${encodeURIComponent(z)}`).join('&') + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Registers a transit gateway in your global network. The transit gateway can be in any AWS Region, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.
		 * Post global-networks/{globalNetworkId}/transit-gateway-registrations
		 * @param {string} globalNetworkId The ID of the global network.
		 * @return {RegisterTransitGatewayResponse} Success
		 */
		RegisterTransitGateway(globalNetworkId: string, requestBody: RegisterTransitGatewayPostBody): Observable<RegisterTransitGatewayResponse> {
			return this.http.post<RegisterTransitGatewayResponse>(this.baseUri + 'global-networks/' + (globalNetworkId == null ? '' : encodeURIComponent(globalNetworkId)) + '/transit-gateway-registrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for a specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Tags a specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The tag keys to remove from the specified resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface AssociateCustomerGatewayPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the customer gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.
		 * Required
		 */
		CustomerGatewayArn: string;

		/**
		 * The ID of the device.
		 * Required
		 */
		DeviceId: string;

		/** The ID of the link. */
		LinkId?: string | null;
	}
	export interface AssociateCustomerGatewayPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the customer gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.
		 * Required
		 */
		CustomerGatewayArn: FormControl<string | null | undefined>,

		/**
		 * The ID of the device.
		 * Required
		 */
		DeviceId: FormControl<string | null | undefined>,

		/** The ID of the link. */
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateCustomerGatewayPostBodyFormGroup() {
		return new FormGroup<AssociateCustomerGatewayPostBodyFormProperties>({
			CustomerGatewayArn: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LinkId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateLinkPostBody {

		/**
		 * The ID of the device.
		 * Required
		 */
		DeviceId: string;

		/**
		 * The ID of the link.
		 * Required
		 */
		LinkId: string;
	}
	export interface AssociateLinkPostBodyFormProperties {

		/**
		 * The ID of the device.
		 * Required
		 */
		DeviceId: FormControl<string | null | undefined>,

		/**
		 * The ID of the link.
		 * Required
		 */
		LinkId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateLinkPostBodyFormGroup() {
		return new FormGroup<AssociateLinkPostBodyFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LinkId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDevicePostBody {

		/** <p>A description of the device.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string | null;

		/** The type of the device. */
		Type?: string | null;

		/** <p>The vendor of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Vendor?: string | null;

		/** <p>The model of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Model?: string | null;

		/** <p>The serial number of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		SerialNumber?: string | null;

		/** Describes a location. */
		Location?: CreateDevicePostBodyLocation;

		/** The ID of the site. */
		SiteId?: string | null;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}
	export interface CreateDevicePostBodyFormProperties {

		/** <p>A description of the device.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description: FormControl<string | null | undefined>,

		/** The type of the device. */
		Type: FormControl<string | null | undefined>,

		/** <p>The vendor of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Vendor: FormControl<string | null | undefined>,

		/** <p>The model of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Model: FormControl<string | null | undefined>,

		/** <p>The serial number of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		SerialNumber: FormControl<string | null | undefined>,

		/** The ID of the site. */
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDevicePostBodyFormGroup() {
		return new FormGroup<CreateDevicePostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Vendor: new FormControl<string | null | undefined>(undefined),
			Model: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDevicePostBodyLocation {
		Address?: string | null;
		Latitude?: string | null;
		Longitude?: string | null;
	}
	export interface CreateDevicePostBodyLocationFormProperties {
		Address: FormControl<string | null | undefined>,
		Latitude: FormControl<string | null | undefined>,
		Longitude: FormControl<string | null | undefined>,
	}
	export function CreateCreateDevicePostBodyLocationFormGroup() {
		return new FormGroup<CreateDevicePostBodyLocationFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<string | null | undefined>(undefined),
			Longitude: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGlobalNetworkPostBody {

		/** <p>A description of the global network.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string | null;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}
	export interface CreateGlobalNetworkPostBodyFormProperties {

		/** <p>A description of the global network.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateGlobalNetworkPostBodyFormGroup() {
		return new FormGroup<CreateGlobalNetworkPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLinkPostBody {

		/** <p>A description of the link.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string | null;

		/** <p>The type of the link.</p> <p>Constraints: Cannot include the following characters: | \ ^</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Type?: string | null;

		/**
		 * Describes bandwidth information.
		 * Required
		 */
		Bandwidth: CreateLinkPostBodyBandwidth;

		/** <p>The provider of the link.</p> <p>Constraints: Cannot include the following characters: | \ ^</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Provider?: string | null;

		/**
		 * The ID of the site.
		 * Required
		 */
		SiteId: string;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}
	export interface CreateLinkPostBodyFormProperties {

		/** <p>A description of the link.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description: FormControl<string | null | undefined>,

		/** <p>The type of the link.</p> <p>Constraints: Cannot include the following characters: | \ ^</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Type: FormControl<string | null | undefined>,

		/** <p>The provider of the link.</p> <p>Constraints: Cannot include the following characters: | \ ^</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Provider: FormControl<string | null | undefined>,

		/**
		 * The ID of the site.
		 * Required
		 */
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLinkPostBodyFormGroup() {
		return new FormGroup<CreateLinkPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLinkPostBodyBandwidth {
		UploadSpeed?: number | null;
		DownloadSpeed?: number | null;
	}
	export interface CreateLinkPostBodyBandwidthFormProperties {
		UploadSpeed: FormControl<number | null | undefined>,
		DownloadSpeed: FormControl<number | null | undefined>,
	}
	export function CreateCreateLinkPostBodyBandwidthFormGroup() {
		return new FormGroup<CreateLinkPostBodyBandwidthFormProperties>({
			UploadSpeed: new FormControl<number | null | undefined>(undefined),
			DownloadSpeed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateSitePostBody {

		/** <p>A description of your site.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string | null;

		/** Describes a location. */
		Location?: CreateSitePostBodyLocation;

		/** The tags to apply to the resource during creation. */
		Tags?: Array<Tag>;
	}
	export interface CreateSitePostBodyFormProperties {

		/** <p>A description of your site.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSitePostBodyFormGroup() {
		return new FormGroup<CreateSitePostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSitePostBodyLocation {
		Address?: string | null;
		Latitude?: string | null;
		Longitude?: string | null;
	}
	export interface CreateSitePostBodyLocationFormProperties {
		Address: FormControl<string | null | undefined>,
		Latitude: FormControl<string | null | undefined>,
		Longitude: FormControl<string | null | undefined>,
	}
	export function CreateCreateSitePostBodyLocationFormGroup() {
		return new FormGroup<CreateSitePostBodyLocationFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<string | null | undefined>(undefined),
			Longitude: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDevicePatchBody {

		/** <p>A description of the device.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string | null;

		/** The type of the device. */
		Type?: string | null;

		/** <p>The vendor of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Vendor?: string | null;

		/** <p>The model of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Model?: string | null;

		/** <p>The serial number of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		SerialNumber?: string | null;

		/** Describes a location. */
		Location?: UpdateDevicePatchBodyLocation;

		/** The ID of the site. */
		SiteId?: string | null;
	}
	export interface UpdateDevicePatchBodyFormProperties {

		/** <p>A description of the device.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description: FormControl<string | null | undefined>,

		/** The type of the device. */
		Type: FormControl<string | null | undefined>,

		/** <p>The vendor of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Vendor: FormControl<string | null | undefined>,

		/** <p>The model of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Model: FormControl<string | null | undefined>,

		/** <p>The serial number of the device.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		SerialNumber: FormControl<string | null | undefined>,

		/** The ID of the site. */
		SiteId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDevicePatchBodyFormGroup() {
		return new FormGroup<UpdateDevicePatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Vendor: new FormControl<string | null | undefined>(undefined),
			Model: new FormControl<string | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			SiteId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDevicePatchBodyLocation {
		Address?: string | null;
		Latitude?: string | null;
		Longitude?: string | null;
	}
	export interface UpdateDevicePatchBodyLocationFormProperties {
		Address: FormControl<string | null | undefined>,
		Latitude: FormControl<string | null | undefined>,
		Longitude: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDevicePatchBodyLocationFormGroup() {
		return new FormGroup<UpdateDevicePatchBodyLocationFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<string | null | undefined>(undefined),
			Longitude: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGlobalNetworkPatchBody {

		/** <p>A description of the global network.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string | null;
	}
	export interface UpdateGlobalNetworkPatchBodyFormProperties {

		/** <p>A description of the global network.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGlobalNetworkPatchBodyFormGroup() {
		return new FormGroup<UpdateGlobalNetworkPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLinkPatchBody {

		/** <p>A description of the link.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string | null;

		/** <p>The type of the link.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Type?: string | null;

		/** Describes bandwidth information. */
		Bandwidth?: UpdateLinkPatchBodyBandwidth;

		/** <p>The provider of the link.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Provider?: string | null;
	}
	export interface UpdateLinkPatchBodyFormProperties {

		/** <p>A description of the link.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description: FormControl<string | null | undefined>,

		/** <p>The type of the link.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Type: FormControl<string | null | undefined>,

		/** <p>The provider of the link.</p> <p>Length Constraints: Maximum length of 128 characters.</p> */
		Provider: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLinkPatchBodyFormGroup() {
		return new FormGroup<UpdateLinkPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Provider: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLinkPatchBodyBandwidth {
		UploadSpeed?: number | null;
		DownloadSpeed?: number | null;
	}
	export interface UpdateLinkPatchBodyBandwidthFormProperties {
		UploadSpeed: FormControl<number | null | undefined>,
		DownloadSpeed: FormControl<number | null | undefined>,
	}
	export function CreateUpdateLinkPatchBodyBandwidthFormGroup() {
		return new FormGroup<UpdateLinkPatchBodyBandwidthFormProperties>({
			UploadSpeed: new FormControl<number | null | undefined>(undefined),
			DownloadSpeed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSitePatchBody {

		/** <p>A description of your site.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description?: string | null;

		/** Describes a location. */
		Location?: UpdateSitePatchBodyLocation;
	}
	export interface UpdateSitePatchBodyFormProperties {

		/** <p>A description of your site.</p> <p>Length Constraints: Maximum length of 256 characters.</p> */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSitePatchBodyFormGroup() {
		return new FormGroup<UpdateSitePatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSitePatchBodyLocation {
		Address?: string | null;
		Latitude?: string | null;
		Longitude?: string | null;
	}
	export interface UpdateSitePatchBodyLocationFormProperties {
		Address: FormControl<string | null | undefined>,
		Latitude: FormControl<string | null | undefined>,
		Longitude: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSitePatchBodyLocationFormGroup() {
		return new FormGroup<UpdateSitePatchBodyLocationFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<string | null | undefined>(undefined),
			Longitude: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterTransitGatewayPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the transit gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.
		 * Required
		 */
		TransitGatewayArn: string;
	}
	export interface RegisterTransitGatewayPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the transit gateway. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonec2.html#amazonec2-resources-for-iam-policies">Resources Defined by Amazon EC2</a>.
		 * Required
		 */
		TransitGatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterTransitGatewayPostBodyFormGroup() {
		return new FormGroup<RegisterTransitGatewayPostBodyFormProperties>({
			TransitGatewayArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to apply to the specified resource.
		 * Required
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

}

