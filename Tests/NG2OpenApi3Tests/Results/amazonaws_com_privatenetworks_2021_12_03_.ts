import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcknowledgeOrderReceiptResponse {

		/** Required */
		order: Order;
	}
	export interface AcknowledgeOrderReceiptResponseFormProperties {
	}
	export function CreateAcknowledgeOrderReceiptResponseFormGroup() {
		return new FormGroup<AcknowledgeOrderReceiptResponseFormProperties>({
		});

	}


	/** Information about an order. */
	export interface Order {
		acknowledgmentStatus?: AcknowledgmentStatus;
		createdAt?: Date;
		networkArn?: string;
		networkSiteArn?: string;
		orderArn?: string;
		orderedResources?: Array<OrderedResourceDefinition>;
		shippingAddress?: Address;
		trackingInformation?: Array<TrackingInformation>;
	}

	/** Information about an order. */
	export interface OrderFormProperties {
		acknowledgmentStatus: FormControl<AcknowledgmentStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		networkArn: FormControl<string | null | undefined>,
		networkSiteArn: FormControl<string | null | undefined>,
		orderArn: FormControl<string | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			acknowledgmentStatus: new FormControl<AcknowledgmentStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			networkArn: new FormControl<string | null | undefined>(undefined),
			networkSiteArn: new FormControl<string | null | undefined>(undefined),
			orderArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AcknowledgmentStatus { ACKNOWLEDGING = 'ACKNOWLEDGING', ACKNOWLEDGED = 'ACKNOWLEDGED', UNACKNOWLEDGED = 'UNACKNOWLEDGED' }


	/** Details of the network resources in the order. */
	export interface OrderedResourceDefinition {
		commitmentConfiguration?: CommitmentConfiguration;

		/** Required */
		count: number;

		/** Required */
		type: NetworkResourceDefinitionType;
	}

	/** Details of the network resources in the order. */
	export interface OrderedResourceDefinitionFormProperties {

		/** Required */
		count: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<NetworkResourceDefinitionType | null | undefined>,
	}
	export function CreateOrderedResourceDefinitionFormGroup() {
		return new FormGroup<OrderedResourceDefinitionFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<NetworkResourceDefinitionType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Determines the duration and renewal status of the commitment period for a radio unit.</p> <p>For pricing, see <a href="http://aws.amazon.com/private5g/pricing">Amazon Web Services Private 5G Pricing</a>.</p> */
	export interface CommitmentConfiguration {

		/** Required */
		automaticRenewal: boolean;

		/** Required */
		commitmentLength: CommitmentLength;
	}

	/** <p>Determines the duration and renewal status of the commitment period for a radio unit.</p> <p>For pricing, see <a href="http://aws.amazon.com/private5g/pricing">Amazon Web Services Private 5G Pricing</a>.</p> */
	export interface CommitmentConfigurationFormProperties {

		/** Required */
		automaticRenewal: FormControl<boolean | null | undefined>,

		/** Required */
		commitmentLength: FormControl<CommitmentLength | null | undefined>,
	}
	export function CreateCommitmentConfigurationFormGroup() {
		return new FormGroup<CommitmentConfigurationFormProperties>({
			automaticRenewal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			commitmentLength: new FormControl<CommitmentLength | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CommitmentLength { SIXTY_DAYS = 'SIXTY_DAYS', ONE_YEAR = 'ONE_YEAR', THREE_YEARS = 'THREE_YEARS' }

	export enum NetworkResourceDefinitionType { RADIO_UNIT = 'RADIO_UNIT', DEVICE_IDENTIFIER = 'DEVICE_IDENTIFIER' }


	/** Information about an address. */
	export interface Address {

		/** Required */
		city: string;
		company?: string;

		/** Required */
		country: string;
		emailAddress?: string;

		/** Required */
		name: string;
		phoneNumber?: string;

		/** Required */
		postalCode: string;

		/** Required */
		stateOrProvince: string;

		/** Required */
		street1: string;
		street2?: string;
		street3?: string;
	}

	/** Information about an address. */
	export interface AddressFormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,
		company: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,

		/** Required */
		postalCode: FormControl<string | null | undefined>,

		/** Required */
		stateOrProvince: FormControl<string | null | undefined>,

		/** Required */
		street1: FormControl<string | null | undefined>,
		street2: FormControl<string | null | undefined>,
		street3: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			company: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateOrProvince: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street2: new FormControl<string | null | undefined>(undefined),
			street3: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about tracking a shipment. */
	export interface TrackingInformation {
		trackingNumber?: string;
	}

	/** Information about tracking a shipment. */
	export interface TrackingInformationFormProperties {
		trackingNumber: FormControl<string | null | undefined>,
	}
	export function CreateTrackingInformationFormGroup() {
		return new FormGroup<TrackingInformationFormProperties>({
			trackingNumber: new FormControl<string | null | undefined>(undefined),
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface ActivateDeviceIdentifierResponse {

		/** Required */
		deviceIdentifier: DeviceIdentifier;
		tags?: TagMap;
	}
	export interface ActivateDeviceIdentifierResponseFormProperties {
	}
	export function CreateActivateDeviceIdentifierResponseFormGroup() {
		return new FormGroup<ActivateDeviceIdentifierResponseFormProperties>({
		});

	}


	/** Information about a subscriber of a device that can use a network. */
	export interface DeviceIdentifier {
		createdAt?: Date;
		deviceIdentifierArn?: string;
		iccid?: string;
		imsi?: string;
		networkArn?: string;
		orderArn?: string;
		status?: DeviceIdentifierStatus;
		trafficGroupArn?: string;
		vendor?: string;
	}

	/** Information about a subscriber of a device that can use a network. */
	export interface DeviceIdentifierFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		deviceIdentifierArn: FormControl<string | null | undefined>,
		iccid: FormControl<string | null | undefined>,
		imsi: FormControl<string | null | undefined>,
		networkArn: FormControl<string | null | undefined>,
		orderArn: FormControl<string | null | undefined>,
		status: FormControl<DeviceIdentifierStatus | null | undefined>,
		trafficGroupArn: FormControl<string | null | undefined>,
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateDeviceIdentifierFormGroup() {
		return new FormGroup<DeviceIdentifierFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			deviceIdentifierArn: new FormControl<string | null | undefined>(undefined),
			iccid: new FormControl<string | null | undefined>(undefined),
			imsi: new FormControl<string | null | undefined>(undefined),
			networkArn: new FormControl<string | null | undefined>(undefined),
			orderArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DeviceIdentifierStatus | null | undefined>(undefined),
			trafficGroupArn: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceIdentifierStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface ActivateNetworkSiteResponse {
		networkSite?: NetworkSite;
	}
	export interface ActivateNetworkSiteResponseFormProperties {
	}
	export function CreateActivateNetworkSiteResponseFormGroup() {
		return new FormGroup<ActivateNetworkSiteResponseFormProperties>({
		});

	}


	/** Information about a network site. */
	export interface NetworkSite {
		availabilityZone?: string;
		availabilityZoneId?: string;
		createdAt?: Date;
		currentPlan?: SitePlan;
		description?: string;

		/** Required */
		networkArn: string;

		/** Required */
		networkSiteArn: string;

		/** Required */
		networkSiteName: string;
		pendingPlan?: SitePlan;

		/** Required */
		status: NetworkSiteStatus;
		statusReason?: string;
	}

	/** Information about a network site. */
	export interface NetworkSiteFormProperties {
		availabilityZone: FormControl<string | null | undefined>,
		availabilityZoneId: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		networkArn: FormControl<string | null | undefined>,

		/** Required */
		networkSiteArn: FormControl<string | null | undefined>,

		/** Required */
		networkSiteName: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<NetworkSiteStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateNetworkSiteFormGroup() {
		return new FormGroup<NetworkSiteFormProperties>({
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			availabilityZoneId: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			networkSiteArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			networkSiteName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<NetworkSiteStatus | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a site plan. */
	export interface SitePlan {
		options?: Array<NameValuePair>;
		resourceDefinitions?: Array<NetworkResourceDefinition>;
	}

	/** Information about a site plan. */
	export interface SitePlanFormProperties {
	}
	export function CreateSitePlanFormGroup() {
		return new FormGroup<SitePlanFormProperties>({
		});

	}


	/** Information about a name/value pair. */
	export interface NameValuePair {

		/** Required */
		name: string;
		value?: string;
	}

	/** Information about a name/value pair. */
	export interface NameValuePairFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateNameValuePairFormGroup() {
		return new FormGroup<NameValuePairFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a network resource definition. */
	export interface NetworkResourceDefinition {

		/** Required */
		count: number;
		options?: Array<NameValuePair>;

		/** Required */
		type: NetworkResourceDefinitionType;
	}

	/** Information about a network resource definition. */
	export interface NetworkResourceDefinitionFormProperties {

		/** Required */
		count: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<NetworkResourceDefinitionType | null | undefined>,
	}
	export function CreateNetworkResourceDefinitionFormGroup() {
		return new FormGroup<NetworkResourceDefinitionFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<NetworkResourceDefinitionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NetworkSiteStatus { CREATED = 'CREATED', PROVISIONING = 'PROVISIONING', AVAILABLE = 'AVAILABLE', DEPROVISIONING = 'DEPROVISIONING', DELETED = 'DELETED' }

	export interface ConfigureAccessPointResponse {

		/** Required */
		accessPoint: NetworkResource;
	}
	export interface ConfigureAccessPointResponseFormProperties {
	}
	export function CreateConfigureAccessPointResponseFormGroup() {
		return new FormGroup<ConfigureAccessPointResponseFormProperties>({
		});

	}


	/** Information about a network resource. */
	export interface NetworkResource {
		attributes?: Array<NameValuePair>;
		commitmentInformation?: CommitmentInformation;
		createdAt?: Date;
		description?: string;
		health?: HealthStatus;
		model?: string;
		networkArn?: string;
		networkResourceArn?: string;
		networkSiteArn?: string;
		orderArn?: string;
		position?: Position;
		returnInformation?: ReturnInformation;
		serialNumber?: string;
		status?: NetworkResourceStatus;
		statusReason?: string;
		type?: NetworkResourceType;
		vendor?: string;
	}

	/** Information about a network resource. */
	export interface NetworkResourceFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		health: FormControl<HealthStatus | null | undefined>,
		model: FormControl<string | null | undefined>,
		networkArn: FormControl<string | null | undefined>,
		networkResourceArn: FormControl<string | null | undefined>,
		networkSiteArn: FormControl<string | null | undefined>,
		orderArn: FormControl<string | null | undefined>,
		serialNumber: FormControl<string | null | undefined>,
		status: FormControl<NetworkResourceStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
		type: FormControl<NetworkResourceType | null | undefined>,
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateNetworkResourceFormGroup() {
		return new FormGroup<NetworkResourceFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			health: new FormControl<HealthStatus | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			networkArn: new FormControl<string | null | undefined>(undefined),
			networkResourceArn: new FormControl<string | null | undefined>(undefined),
			networkSiteArn: new FormControl<string | null | undefined>(undefined),
			orderArn: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<NetworkResourceStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<NetworkResourceType | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Shows the duration, the date and time that the contract started and ends, and the renewal status of the commitment period for the radio unit. */
	export interface CommitmentInformation {

		/** Required */
		commitmentConfiguration: CommitmentConfiguration;
		expiresOn?: Date;
		startAt?: Date;
	}

	/** Shows the duration, the date and time that the contract started and ends, and the renewal status of the commitment period for the radio unit. */
	export interface CommitmentInformationFormProperties {
		expiresOn: FormControl<Date | null | undefined>,
		startAt: FormControl<Date | null | undefined>,
	}
	export function CreateCommitmentInformationFormGroup() {
		return new FormGroup<CommitmentInformationFormProperties>({
			expiresOn: new FormControl<Date | null | undefined>(undefined),
			startAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum HealthStatus { INITIAL = 'INITIAL', HEALTHY = 'HEALTHY', UNHEALTHY = 'UNHEALTHY' }


	/** Information about a position. */
	export interface Position {
		elevation?: number | null;
		elevationReference?: ElevationReference;
		elevationUnit?: ElevationUnit;
		latitude?: number | null;
		longitude?: number | null;
	}

	/** Information about a position. */
	export interface PositionFormProperties {
		elevation: FormControl<number | null | undefined>,
		elevationReference: FormControl<ElevationReference | null | undefined>,
		elevationUnit: FormControl<ElevationUnit | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
	}
	export function CreatePositionFormGroup() {
		return new FormGroup<PositionFormProperties>({
			elevation: new FormControl<number | null | undefined>(undefined),
			elevationReference: new FormControl<ElevationReference | null | undefined>(undefined),
			elevationUnit: new FormControl<ElevationUnit | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ElevationReference { AGL = 'AGL', AMSL = 'AMSL' }

	export enum ElevationUnit { FEET = 'FEET' }


	/** Information about a request to return a network resource. */
	export interface ReturnInformation {
		replacementOrderArn?: string;
		returnReason?: string;
		shippingAddress?: Address;
		shippingLabel?: string;
	}

	/** Information about a request to return a network resource. */
	export interface ReturnInformationFormProperties {
		replacementOrderArn: FormControl<string | null | undefined>,
		returnReason: FormControl<string | null | undefined>,
		shippingLabel: FormControl<string | null | undefined>,
	}
	export function CreateReturnInformationFormGroup() {
		return new FormGroup<ReturnInformationFormProperties>({
			replacementOrderArn: new FormControl<string | null | undefined>(undefined),
			returnReason: new FormControl<string | null | undefined>(undefined),
			shippingLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkResourceStatus { PENDING = 'PENDING', SHIPPED = 'SHIPPED', PROVISIONING = 'PROVISIONING', PROVISIONED = 'PROVISIONED', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', PENDING_RETURN = 'PENDING_RETURN', DELETED = 'DELETED', CREATING_SHIPPING_LABEL = 'CREATING_SHIPPING_LABEL' }

	export enum NetworkResourceType { RADIO_UNIT = 'RADIO_UNIT' }

	export interface CreateNetworkResponse {

		/** Required */
		network: Network;
		tags?: TagMap;
	}
	export interface CreateNetworkResponseFormProperties {
	}
	export function CreateCreateNetworkResponseFormGroup() {
		return new FormGroup<CreateNetworkResponseFormProperties>({
		});

	}


	/** Information about a network. */
	export interface Network {
		createdAt?: Date;
		description?: string;

		/** Required */
		networkArn: string;

		/** Required */
		networkName: string;

		/** Required */
		status: NetworkSiteStatus;
		statusReason?: string;
	}

	/** Information about a network. */
	export interface NetworkFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		networkArn: FormControl<string | null | undefined>,

		/** Required */
		networkName: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<NetworkSiteStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			networkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<NetworkSiteStatus | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateNetworkSiteResponse {
		networkSite?: NetworkSite;
		tags?: TagMap;
	}
	export interface CreateNetworkSiteResponseFormProperties {
	}
	export function CreateCreateNetworkSiteResponseFormGroup() {
		return new FormGroup<CreateNetworkSiteResponseFormProperties>({
		});

	}

	export interface DeactivateDeviceIdentifierResponse {

		/** Required */
		deviceIdentifier: DeviceIdentifier;
	}
	export interface DeactivateDeviceIdentifierResponseFormProperties {
	}
	export function CreateDeactivateDeviceIdentifierResponseFormGroup() {
		return new FormGroup<DeactivateDeviceIdentifierResponseFormProperties>({
		});

	}

	export interface DeleteNetworkResponse {

		/** Required */
		network: Network;
	}
	export interface DeleteNetworkResponseFormProperties {
	}
	export function CreateDeleteNetworkResponseFormGroup() {
		return new FormGroup<DeleteNetworkResponseFormProperties>({
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

	export interface DeleteNetworkSiteResponse {
		networkSite?: NetworkSite;
	}
	export interface DeleteNetworkSiteResponseFormProperties {
	}
	export function CreateDeleteNetworkSiteResponseFormGroup() {
		return new FormGroup<DeleteNetworkSiteResponseFormProperties>({
		});

	}

	export interface GetDeviceIdentifierResponse {
		deviceIdentifier?: DeviceIdentifier;
		tags?: TagMap;
	}
	export interface GetDeviceIdentifierResponseFormProperties {
	}
	export function CreateGetDeviceIdentifierResponseFormGroup() {
		return new FormGroup<GetDeviceIdentifierResponseFormProperties>({
		});

	}

	export interface GetNetworkResponse {

		/** Required */
		network: Network;
		tags?: TagMap;
	}
	export interface GetNetworkResponseFormProperties {
	}
	export function CreateGetNetworkResponseFormGroup() {
		return new FormGroup<GetNetworkResponseFormProperties>({
		});

	}

	export interface GetNetworkResourceResponse {

		/** Required */
		networkResource: NetworkResource;
		tags?: TagMap;
	}
	export interface GetNetworkResourceResponseFormProperties {
	}
	export function CreateGetNetworkResourceResponseFormGroup() {
		return new FormGroup<GetNetworkResourceResponseFormProperties>({
		});

	}

	export interface GetNetworkSiteResponse {
		networkSite?: NetworkSite;
		tags?: TagMap;
	}
	export interface GetNetworkSiteResponseFormProperties {
	}
	export function CreateGetNetworkSiteResponseFormGroup() {
		return new FormGroup<GetNetworkSiteResponseFormProperties>({
		});

	}

	export interface GetOrderResponse {

		/** Required */
		order: Order;
		tags?: TagMap;
	}
	export interface GetOrderResponseFormProperties {
	}
	export function CreateGetOrderResponseFormGroup() {
		return new FormGroup<GetOrderResponseFormProperties>({
		});

	}

	export interface ListDeviceIdentifiersResponse {
		deviceIdentifiers?: Array<DeviceIdentifier>;
		nextToken?: string;
	}
	export interface ListDeviceIdentifiersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceIdentifiersResponseFormGroup() {
		return new FormGroup<ListDeviceIdentifiersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNetworkResourcesResponse {
		networkResources?: Array<NetworkResource>;
		nextToken?: string;
	}
	export interface ListNetworkResourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkResourcesResponseFormGroup() {
		return new FormGroup<ListNetworkResourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNetworkSitesResponse {
		networkSites?: Array<NetworkSite>;
		nextToken?: string;
	}
	export interface ListNetworkSitesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkSitesResponseFormGroup() {
		return new FormGroup<ListNetworkSitesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNetworksResponse {
		networks?: Array<Network>;
		nextToken?: string;
	}
	export interface ListNetworksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworksResponseFormGroup() {
		return new FormGroup<ListNetworksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrdersResponse {
		nextToken?: string;
		orders?: Array<Order>;
	}
	export interface ListOrdersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrdersResponseFormGroup() {
		return new FormGroup<ListOrdersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface PingResponse {
		status?: string;
	}
	export interface PingResponseFormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreatePingResponseFormGroup() {
		return new FormGroup<PingResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartNetworkResourceUpdateResponse {
		networkResource?: NetworkResource;
	}
	export interface StartNetworkResourceUpdateResponseFormProperties {
	}
	export function CreateStartNetworkResourceUpdateResponseFormGroup() {
		return new FormGroup<StartNetworkResourceUpdateResponseFormProperties>({
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

	export interface UpdateNetworkSiteResponse {
		networkSite?: NetworkSite;
		tags?: TagMap;
	}
	export interface UpdateNetworkSiteResponseFormProperties {
	}
	export function CreateUpdateNetworkSiteResponseFormGroup() {
		return new FormGroup<UpdateNetworkSiteResponseFormProperties>({
		});

	}

	export interface AcknowledgeOrderReceiptRequest {

		/** Required */
		orderArn: string;
	}
	export interface AcknowledgeOrderReceiptRequestFormProperties {

		/** Required */
		orderArn: FormControl<string | null | undefined>,
	}
	export function CreateAcknowledgeOrderReceiptRequestFormGroup() {
		return new FormGroup<AcknowledgeOrderReceiptRequestFormProperties>({
			orderArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActivateDeviceIdentifierRequest {
		clientToken?: string;

		/** Required */
		deviceIdentifierArn: string;
	}
	export interface ActivateDeviceIdentifierRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		deviceIdentifierArn: FormControl<string | null | undefined>,
	}
	export function CreateActivateDeviceIdentifierRequestFormGroup() {
		return new FormGroup<ActivateDeviceIdentifierRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			deviceIdentifierArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActivateNetworkSiteRequest {
		clientToken?: string;
		commitmentConfiguration?: CommitmentConfiguration;

		/** Required */
		networkSiteArn: string;

		/** Required */
		shippingAddress: Address;
	}
	export interface ActivateNetworkSiteRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		networkSiteArn: FormControl<string | null | undefined>,
	}
	export function CreateActivateNetworkSiteRequestFormGroup() {
		return new FormGroup<ActivateNetworkSiteRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			networkSiteArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConfigureAccessPointRequest {

		/** Required */
		accessPointArn: string;
		cpiSecretKey?: string;
		cpiUserId?: string;
		cpiUserPassword?: string;
		cpiUsername?: string;
		position?: Position;
	}
	export interface ConfigureAccessPointRequestFormProperties {

		/** Required */
		accessPointArn: FormControl<string | null | undefined>,
		cpiSecretKey: FormControl<string | null | undefined>,
		cpiUserId: FormControl<string | null | undefined>,
		cpiUserPassword: FormControl<string | null | undefined>,
		cpiUsername: FormControl<string | null | undefined>,
	}
	export function CreateConfigureAccessPointRequestFormGroup() {
		return new FormGroup<ConfigureAccessPointRequestFormProperties>({
			accessPointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cpiSecretKey: new FormControl<string | null | undefined>(undefined),
			cpiUserId: new FormControl<string | null | undefined>(undefined),
			cpiUserPassword: new FormControl<string | null | undefined>(undefined),
			cpiUsername: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		networkName: string;
		tags?: TagMap;
	}
	export interface CreateNetworkRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		networkName: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkRequestFormGroup() {
		return new FormGroup<CreateNetworkRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			networkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNetworkSiteRequest {
		availabilityZone?: string;
		availabilityZoneId?: string;
		clientToken?: string;
		description?: string;

		/** Required */
		networkArn: string;

		/** Required */
		networkSiteName: string;
		pendingPlan?: SitePlan;
		tags?: TagMap;
	}
	export interface CreateNetworkSiteRequestFormProperties {
		availabilityZone: FormControl<string | null | undefined>,
		availabilityZoneId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		networkArn: FormControl<string | null | undefined>,

		/** Required */
		networkSiteName: FormControl<string | null | undefined>,
	}
	export function CreateCreateNetworkSiteRequestFormGroup() {
		return new FormGroup<CreateNetworkSiteRequestFormProperties>({
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			availabilityZoneId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			networkSiteName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeactivateDeviceIdentifierRequest {
		clientToken?: string;

		/** Required */
		deviceIdentifierArn: string;
	}
	export interface DeactivateDeviceIdentifierRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		deviceIdentifierArn: FormControl<string | null | undefined>,
	}
	export function CreateDeactivateDeviceIdentifierRequestFormGroup() {
		return new FormGroup<DeactivateDeviceIdentifierRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			deviceIdentifierArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteNetworkRequest {
	}
	export interface DeleteNetworkRequestFormProperties {
	}
	export function CreateDeleteNetworkRequestFormGroup() {
		return new FormGroup<DeleteNetworkRequestFormProperties>({
		});

	}

	export interface DeleteNetworkSiteRequest {
	}
	export interface DeleteNetworkSiteRequestFormProperties {
	}
	export function CreateDeleteNetworkSiteRequestFormGroup() {
		return new FormGroup<DeleteNetworkSiteRequestFormProperties>({
		});

	}

	export enum DeviceIdentifierFilterKeys { STATUS = 'STATUS', ORDER = 'ORDER', TRAFFIC_GROUP = 'TRAFFIC_GROUP' }

	export interface DeviceIdentifierFilters {
	}
	export interface DeviceIdentifierFiltersFormProperties {
	}
	export function CreateDeviceIdentifierFiltersFormGroup() {
		return new FormGroup<DeviceIdentifierFiltersFormProperties>({
		});

	}

	export interface GetDeviceIdentifierRequest {
	}
	export interface GetDeviceIdentifierRequestFormProperties {
	}
	export function CreateGetDeviceIdentifierRequestFormGroup() {
		return new FormGroup<GetDeviceIdentifierRequestFormProperties>({
		});

	}

	export interface GetNetworkRequest {
	}
	export interface GetNetworkRequestFormProperties {
	}
	export function CreateGetNetworkRequestFormGroup() {
		return new FormGroup<GetNetworkRequestFormProperties>({
		});

	}

	export interface GetNetworkResourceRequest {
	}
	export interface GetNetworkResourceRequestFormProperties {
	}
	export function CreateGetNetworkResourceRequestFormGroup() {
		return new FormGroup<GetNetworkResourceRequestFormProperties>({
		});

	}

	export interface GetNetworkSiteRequest {
	}
	export interface GetNetworkSiteRequestFormProperties {
	}
	export function CreateGetNetworkSiteRequestFormGroup() {
		return new FormGroup<GetNetworkSiteRequestFormProperties>({
		});

	}

	export interface GetOrderRequest {
	}
	export interface GetOrderRequestFormProperties {
	}
	export function CreateGetOrderRequestFormGroup() {
		return new FormGroup<GetOrderRequestFormProperties>({
		});

	}

	export interface ListDeviceIdentifiersRequest {
		filters?: DeviceIdentifierFilters;
		maxResults?: number | null;

		/** Required */
		networkArn: string;
		startToken?: string;
	}
	export interface ListDeviceIdentifiersRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,

		/** Required */
		networkArn: FormControl<string | null | undefined>,
		startToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceIdentifiersRequestFormGroup() {
		return new FormGroup<ListDeviceIdentifiersRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkResourceFilters {
	}
	export interface NetworkResourceFiltersFormProperties {
	}
	export function CreateNetworkResourceFiltersFormGroup() {
		return new FormGroup<NetworkResourceFiltersFormProperties>({
		});

	}

	export interface ListNetworkResourcesRequest {
		filters?: NetworkResourceFilters;
		maxResults?: number | null;

		/** Required */
		networkArn: string;
		startToken?: string;
	}
	export interface ListNetworkResourcesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,

		/** Required */
		networkArn: FormControl<string | null | undefined>,
		startToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkResourcesRequestFormGroup() {
		return new FormGroup<ListNetworkResourcesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkSiteFilters {
	}
	export interface NetworkSiteFiltersFormProperties {
	}
	export function CreateNetworkSiteFiltersFormGroup() {
		return new FormGroup<NetworkSiteFiltersFormProperties>({
		});

	}

	export interface ListNetworkSitesRequest {
		filters?: NetworkSiteFilters;
		maxResults?: number | null;

		/** Required */
		networkArn: string;
		startToken?: string;
	}
	export interface ListNetworkSitesRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,

		/** Required */
		networkArn: FormControl<string | null | undefined>,
		startToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkSitesRequestFormGroup() {
		return new FormGroup<ListNetworkSitesRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkFilters {
	}
	export interface NetworkFiltersFormProperties {
	}
	export function CreateNetworkFiltersFormGroup() {
		return new FormGroup<NetworkFiltersFormProperties>({
		});

	}

	export interface ListNetworksRequest {
		filters?: NetworkFilters;
		maxResults?: number | null;
		startToken?: string;
	}
	export interface ListNetworksRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		startToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworksRequestFormGroup() {
		return new FormGroup<ListNetworksRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			startToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderFilters {
	}
	export interface OrderFiltersFormProperties {
	}
	export function CreateOrderFiltersFormGroup() {
		return new FormGroup<OrderFiltersFormProperties>({
		});

	}

	export interface ListOrdersRequest {
		filters?: OrderFilters;
		maxResults?: number | null;

		/** Required */
		networkArn: string;
		startToken?: string;
	}
	export interface ListOrdersRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,

		/** Required */
		networkArn: FormControl<string | null | undefined>,
		startToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrdersRequestFormGroup() {
		return new FormGroup<ListOrdersRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startToken: new FormControl<string | null | undefined>(undefined),
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

	export enum NetworkStatus { CREATED = 'CREATED', PROVISIONING = 'PROVISIONING', AVAILABLE = 'AVAILABLE', DEPROVISIONING = 'DEPROVISIONING', DELETED = 'DELETED' }

	export enum NetworkFilterKeys { STATUS = 'STATUS' }

	export enum NetworkResourceFilterKeys { ORDER = 'ORDER', STATUS = 'STATUS' }

	export enum NetworkSiteFilterKeys { STATUS = 'STATUS' }

	export enum OrderFilterKeys { STATUS = 'STATUS', NETWORK_SITE = 'NETWORK_SITE' }

	export enum UpdateType { REPLACE = 'REPLACE', RETURN = 'RETURN', COMMITMENT = 'COMMITMENT' }

	export interface StartNetworkResourceUpdateRequest {
		commitmentConfiguration?: CommitmentConfiguration;

		/** Required */
		networkResourceArn: string;
		returnReason?: string;
		shippingAddress?: Address;

		/** Required */
		updateType: UpdateType;
	}
	export interface StartNetworkResourceUpdateRequestFormProperties {

		/** Required */
		networkResourceArn: FormControl<string | null | undefined>,
		returnReason: FormControl<string | null | undefined>,

		/** Required */
		updateType: FormControl<UpdateType | null | undefined>,
	}
	export function CreateStartNetworkResourceUpdateRequestFormGroup() {
		return new FormGroup<StartNetworkResourceUpdateRequestFormProperties>({
			networkResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			returnReason: new FormControl<string | null | undefined>(undefined),
			updateType: new FormControl<UpdateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
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

	export interface UpdateNetworkSitePlanRequest {
		clientToken?: string;

		/** Required */
		networkSiteArn: string;

		/** Required */
		pendingPlan: SitePlan;
	}
	export interface UpdateNetworkSitePlanRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		networkSiteArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSitePlanRequestFormGroup() {
		return new FormGroup<UpdateNetworkSitePlanRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			networkSiteArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateNetworkSiteRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		networkSiteArn: string;
	}
	export interface UpdateNetworkSiteRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		networkSiteArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSiteRequestFormGroup() {
		return new FormGroup<UpdateNetworkSiteRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			networkSiteArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Acknowledges that the specified network order was received.
		 * Post v1/orders/acknowledge
		 * @return {AcknowledgeOrderReceiptResponse} Success
		 */
		AcknowledgeOrderReceipt(requestBody: AcknowledgeOrderReceiptPostBody): Observable<AcknowledgeOrderReceiptResponse> {
			return this.http.post<AcknowledgeOrderReceiptResponse>(this.baseUri + 'v1/orders/acknowledge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates the specified device identifier.
		 * Post v1/device-identifiers/activate
		 * @return {ActivateDeviceIdentifierResponse} Success
		 */
		ActivateDeviceIdentifier(requestBody: ActivateDeviceIdentifierPostBody): Observable<ActivateDeviceIdentifierResponse> {
			return this.http.post<ActivateDeviceIdentifierResponse>(this.baseUri + 'v1/device-identifiers/activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates the specified network site.
		 * Post v1/network-sites/activate
		 * @return {ActivateNetworkSiteResponse} Success
		 */
		ActivateNetworkSite(requestBody: ActivateNetworkSitePostBody): Observable<ActivateNetworkSiteResponse> {
			return this.http.post<ActivateNetworkSiteResponse>(this.baseUri + 'v1/network-sites/activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Configures the specified network resource. </p> <p> Use this action to specify the geographic position of the hardware. You must provide Certified Professional Installer (CPI) credentials in the request so that we can obtain spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>
		 * Post v1/network-resources/configure
		 * @return {ConfigureAccessPointResponse} Success
		 */
		ConfigureAccessPoint(requestBody: ConfigureAccessPointPostBody): Observable<ConfigureAccessPointResponse> {
			return this.http.post<ConfigureAccessPointResponse>(this.baseUri + 'v1/network-resources/configure', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a network.
		 * Post v1/networks
		 * @return {CreateNetworkResponse} Success
		 */
		CreateNetwork(requestBody: CreateNetworkPostBody): Observable<CreateNetworkResponse> {
			return this.http.post<CreateNetworkResponse>(this.baseUri + 'v1/networks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a network site.
		 * Post v1/network-sites
		 * @return {CreateNetworkSiteResponse} Success
		 */
		CreateNetworkSite(requestBody: CreateNetworkSitePostBody): Observable<CreateNetworkSiteResponse> {
			return this.http.post<CreateNetworkSiteResponse>(this.baseUri + 'v1/network-sites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deactivates the specified device identifier.
		 * Post v1/device-identifiers/deactivate
		 * @return {DeactivateDeviceIdentifierResponse} Success
		 */
		DeactivateDeviceIdentifier(requestBody: DeactivateDeviceIdentifierPostBody): Observable<DeactivateDeviceIdentifierResponse> {
			return this.http.post<DeactivateDeviceIdentifierResponse>(this.baseUri + 'v1/device-identifiers/deactivate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified network. You must delete network sites before you delete the network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private 5G</i>.
		 * Delete v1/networks/{networkArn}
		 * @param {string} clientToken Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * @param {string} networkArn The Amazon Resource Name (ARN) of the network.
		 * @return {DeleteNetworkResponse} Success
		 */
		DeleteNetwork(clientToken: string | null | undefined, networkArn: string): Observable<DeleteNetworkResponse> {
			return this.http.delete<DeleteNetworkResponse>(this.baseUri + 'v1/networks/' + (networkArn == null ? '' : encodeURIComponent(networkArn)) + '?clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * Gets the specified network.
		 * Get v1/networks/{networkArn}
		 * @param {string} networkArn The Amazon Resource Name (ARN) of the network.
		 * @return {GetNetworkResponse} Success
		 */
		GetNetwork(networkArn: string): Observable<GetNetworkResponse> {
			return this.http.get<GetNetworkResponse>(this.baseUri + 'v1/networks/' + (networkArn == null ? '' : encodeURIComponent(networkArn)), {});
		}

		/**
		 * Deletes the specified network site. Return the hardware after you delete the network site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware returns</a> in the <i>Amazon Web Services Private 5G User Guide</i>.
		 * Delete v1/network-sites/{networkSiteArn}
		 * @param {string} clientToken Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * @param {string} networkSiteArn The Amazon Resource Name (ARN) of the network site.
		 * @return {DeleteNetworkSiteResponse} Success
		 */
		DeleteNetworkSite(clientToken: string | null | undefined, networkSiteArn: string): Observable<DeleteNetworkSiteResponse> {
			return this.http.delete<DeleteNetworkSiteResponse>(this.baseUri + 'v1/network-sites/' + (networkSiteArn == null ? '' : encodeURIComponent(networkSiteArn)) + '?clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * Gets the specified network site.
		 * Get v1/network-sites/{networkSiteArn}
		 * @param {string} networkSiteArn The Amazon Resource Name (ARN) of the network site.
		 * @return {GetNetworkSiteResponse} Success
		 */
		GetNetworkSite(networkSiteArn: string): Observable<GetNetworkSiteResponse> {
			return this.http.get<GetNetworkSiteResponse>(this.baseUri + 'v1/network-sites/' + (networkSiteArn == null ? '' : encodeURIComponent(networkSiteArn)), {});
		}

		/**
		 * Gets the specified device identifier.
		 * Get v1/device-identifiers/{deviceIdentifierArn}
		 * @param {string} deviceIdentifierArn The Amazon Resource Name (ARN) of the device identifier.
		 * @return {GetDeviceIdentifierResponse} Success
		 */
		GetDeviceIdentifier(deviceIdentifierArn: string): Observable<GetDeviceIdentifierResponse> {
			return this.http.get<GetDeviceIdentifierResponse>(this.baseUri + 'v1/device-identifiers/' + (deviceIdentifierArn == null ? '' : encodeURIComponent(deviceIdentifierArn)), {});
		}

		/**
		 * Gets the specified network resource.
		 * Get v1/network-resources/{networkResourceArn}
		 * @param {string} networkResourceArn The Amazon Resource Name (ARN) of the network resource.
		 * @return {GetNetworkResourceResponse} Success
		 */
		GetNetworkResource(networkResourceArn: string): Observable<GetNetworkResourceResponse> {
			return this.http.get<GetNetworkResourceResponse>(this.baseUri + 'v1/network-resources/' + (networkResourceArn == null ? '' : encodeURIComponent(networkResourceArn)), {});
		}

		/**
		 * Gets the specified order.
		 * Get v1/orders/{orderArn}
		 * @param {string} orderArn The Amazon Resource Name (ARN) of the order.
		 * @return {GetOrderResponse} Success
		 */
		GetOrder(orderArn: string): Observable<GetOrderResponse> {
			return this.http.get<GetOrderResponse>(this.baseUri + 'v1/orders/' + (orderArn == null ? '' : encodeURIComponent(orderArn)), {});
		}

		/**
		 * <p>Lists device identifiers. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status of device identifiers, or the ARN of the traffic group.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
		 * Post v1/device-identifiers/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} startToken Pagination token
		 * @return {ListDeviceIdentifiersResponse} Success
		 */
		ListDeviceIdentifiers(maxResults: string | null | undefined, startToken: string | null | undefined, requestBody: ListDeviceIdentifiersPostBody): Observable<ListDeviceIdentifiersResponse> {
			return this.http.post<ListDeviceIdentifiersResponse>(this.baseUri + 'v1/device-identifiers/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&startToken=' + (startToken == null ? '' : encodeURIComponent(startToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists network resources. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or the status of network resources.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
		 * Post v1/network-resources
		 * @param {string} maxResults Pagination limit
		 * @param {string} startToken Pagination token
		 * @return {ListNetworkResourcesResponse} Success
		 */
		ListNetworkResources(maxResults: string | null | undefined, startToken: string | null | undefined, requestBody: ListNetworkResourcesPostBody): Observable<ListNetworkResourcesResponse> {
			return this.http.post<ListNetworkResourcesResponse>(this.baseUri + 'v1/network-resources?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&startToken=' + (startToken == null ? '' : encodeURIComponent(startToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists network sites. Add filters to your request to return a more specific list of results. Use filters to match the status of the network site.
		 * Post v1/network-sites/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} startToken Pagination token
		 * @return {ListNetworkSitesResponse} Success
		 */
		ListNetworkSites(maxResults: string | null | undefined, startToken: string | null | undefined, requestBody: ListNetworkSitesPostBody): Observable<ListNetworkSitesResponse> {
			return this.http.post<ListNetworkSitesResponse>(this.baseUri + 'v1/network-sites/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&startToken=' + (startToken == null ? '' : encodeURIComponent(startToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists networks. Add filters to your request to return a more specific list of results. Use filters to match the status of the network.
		 * Post v1/networks/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} startToken Pagination token
		 * @return {ListNetworksResponse} Success
		 */
		ListNetworks(maxResults: string | null | undefined, startToken: string | null | undefined, requestBody: ListNetworksPostBody): Observable<ListNetworksResponse> {
			return this.http.post<ListNetworksResponse>(this.baseUri + 'v1/networks/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&startToken=' + (startToken == null ? '' : encodeURIComponent(startToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists orders. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or the status of the order.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
		 * Post v1/orders/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} startToken Pagination token
		 * @return {ListOrdersResponse} Success
		 */
		ListOrders(maxResults: string | null | undefined, startToken: string | null | undefined, requestBody: ListOrdersPostBody): Observable<ListOrdersResponse> {
			return this.http.post<ListOrdersResponse>(this.baseUri + 'v1/orders/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&startToken=' + (startToken == null ? '' : encodeURIComponent(startToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds tags to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn  The Amazon Resource Name (ARN) of the resource. 
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks the health of the service.
		 * Get ping
		 * @return {PingResponse} Success
		 */
		Ping(): Observable<PingResponse> {
			return this.http.get<PingResponse>(this.baseUri + 'ping', {});
		}

		/**
		 * <p>Use this action to do the following tasks:</p> <ul> <li> <p>Update the duration and renewal status of the commitment period for a radio unit. The update goes into effect immediately.</p> </li> <li> <p>Request a replacement for a network resource.</p> </li> <li> <p>Request that you return a network resource.</p> </li> </ul> <p>After you submit a request to replace or return a network resource, the status of the network resource changes to <code>CREATING_SHIPPING_LABEL</code>. The shipping label is available when the status of the network resource is <code>PENDING_RETURN</code>. After the network resource is successfully returned, its status changes to <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>
		 * Post v1/network-resources/update
		 * @return {StartNetworkResourceUpdateResponse} Success
		 */
		StartNetworkResourceUpdate(requestBody: StartNetworkResourceUpdatePostBody): Observable<StartNetworkResourceUpdateResponse> {
			return this.http.post<StartNetworkResourceUpdateResponse>(this.baseUri + 'v1/network-resources/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The tag keys.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates the specified network site.
		 * Put v1/network-sites/site
		 * @return {UpdateNetworkSiteResponse} Success
		 */
		UpdateNetworkSite(requestBody: UpdateNetworkSitePutBody): Observable<UpdateNetworkSiteResponse> {
			return this.http.put<UpdateNetworkSiteResponse>(this.baseUri + 'v1/network-sites/site', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified network site plan.
		 * Put v1/network-sites/plan
		 * @return {UpdateNetworkSiteResponse} Success
		 */
		UpdateNetworkSitePlan(requestBody: UpdateNetworkSitePlanPutBody): Observable<UpdateNetworkSiteResponse> {
			return this.http.put<UpdateNetworkSiteResponse>(this.baseUri + 'v1/network-sites/plan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AcknowledgeOrderReceiptPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the order.
		 * Required
		 */
		orderArn: string;
	}
	export interface AcknowledgeOrderReceiptPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the order.
		 * Required
		 */
		orderArn: FormControl<string | null | undefined>,
	}
	export function CreateAcknowledgeOrderReceiptPostBodyFormGroup() {
		return new FormGroup<AcknowledgeOrderReceiptPostBodyFormProperties>({
			orderArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
		});

	}

	export interface ActivateDeviceIdentifierPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the device identifier.
		 * Required
		 */
		deviceIdentifierArn: string;
	}
	export interface ActivateDeviceIdentifierPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the device identifier.
		 * Required
		 */
		deviceIdentifierArn: FormControl<string | null | undefined>,
	}
	export function CreateActivateDeviceIdentifierPostBodyFormGroup() {
		return new FormGroup<ActivateDeviceIdentifierPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			deviceIdentifierArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
		});

	}

	export interface ActivateNetworkSitePostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** <p>Determines the duration and renewal status of the commitment period for a radio unit.</p> <p>For pricing, see <a href="http://aws.amazon.com/private5g/pricing">Amazon Web Services Private 5G Pricing</a>.</p> */
		commitmentConfiguration?: ActivateNetworkSitePostBodyCommitmentConfiguration;

		/**
		 * The Amazon Resource Name (ARN) of the network site.
		 * Required
		 */
		networkSiteArn: string;

		/**
		 * Information about an address.
		 * Required
		 */
		shippingAddress: ActivateNetworkSitePostBodyShippingAddress;
	}
	export interface ActivateNetworkSitePostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the network site.
		 * Required
		 */
		networkSiteArn: FormControl<string | null | undefined>,
	}
	export function CreateActivateNetworkSitePostBodyFormGroup() {
		return new FormGroup<ActivateNetworkSitePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			networkSiteArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
		});

	}

	export interface ActivateNetworkSitePostBodyCommitmentConfiguration {
		automaticRenewal?: boolean | null;
		commitmentLength?: CommitmentLength;
	}
	export interface ActivateNetworkSitePostBodyCommitmentConfigurationFormProperties {
		automaticRenewal: FormControl<boolean | null | undefined>,
		commitmentLength: FormControl<CommitmentLength | null | undefined>,
	}
	export function CreateActivateNetworkSitePostBodyCommitmentConfigurationFormGroup() {
		return new FormGroup<ActivateNetworkSitePostBodyCommitmentConfigurationFormProperties>({
			automaticRenewal: new FormControl<boolean | null | undefined>(undefined),
			commitmentLength: new FormControl<CommitmentLength | null | undefined>(undefined),
		});

	}

	export interface ActivateNetworkSitePostBodyShippingAddress {
		city?: string;
		company?: string;
		country?: string;
		emailAddress?: string;
		name?: string;
		phoneNumber?: string;
		postalCode?: string;
		stateOrProvince?: string;
		street1?: string;
		street2?: string;
		street3?: string;
	}
	export interface ActivateNetworkSitePostBodyShippingAddressFormProperties {
		city: FormControl<string | null | undefined>,
		company: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		stateOrProvince: FormControl<string | null | undefined>,
		street1: FormControl<string | null | undefined>,
		street2: FormControl<string | null | undefined>,
		street3: FormControl<string | null | undefined>,
	}
	export function CreateActivateNetworkSitePostBodyShippingAddressFormGroup() {
		return new FormGroup<ActivateNetworkSitePostBodyShippingAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			company: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			stateOrProvince: new FormControl<string | null | undefined>(undefined),
			street1: new FormControl<string | null | undefined>(undefined),
			street2: new FormControl<string | null | undefined>(undefined),
			street3: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigureAccessPointPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the network resource.
		 * Required
		 */
		accessPointArn: string;

		/**
		 * A Base64 encoded string of the CPI certificate associated with the CPI user who is certifying the coordinates of the network resource.
		 * Max length: 100000
		 * Min length: 1
		 */
		cpiSecretKey?: string | null;

		/**
		 * The CPI user ID of the CPI user who is certifying the coordinates of the network resource.
		 * Max length: 4096
		 * Min length: 1
		 */
		cpiUserId?: string | null;

		/**
		 * The CPI password associated with the CPI certificate in <code>cpiSecretKey</code>.
		 * Max length: 4096
		 * Min length: 1
		 */
		cpiUserPassword?: string | null;

		/**
		 * The CPI user name of the CPI user who is certifying the coordinates of the radio unit.
		 * Max length: 4096
		 * Min length: 1
		 */
		cpiUsername?: string | null;

		/** Information about a position. */
		position?: ConfigureAccessPointPostBodyPosition;
	}
	export interface ConfigureAccessPointPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the network resource.
		 * Required
		 */
		accessPointArn: FormControl<string | null | undefined>,

		/**
		 * A Base64 encoded string of the CPI certificate associated with the CPI user who is certifying the coordinates of the network resource.
		 * Max length: 100000
		 * Min length: 1
		 */
		cpiSecretKey: FormControl<string | null | undefined>,

		/**
		 * The CPI user ID of the CPI user who is certifying the coordinates of the network resource.
		 * Max length: 4096
		 * Min length: 1
		 */
		cpiUserId: FormControl<string | null | undefined>,

		/**
		 * The CPI password associated with the CPI certificate in <code>cpiSecretKey</code>.
		 * Max length: 4096
		 * Min length: 1
		 */
		cpiUserPassword: FormControl<string | null | undefined>,

		/**
		 * The CPI user name of the CPI user who is certifying the coordinates of the radio unit.
		 * Max length: 4096
		 * Min length: 1
		 */
		cpiUsername: FormControl<string | null | undefined>,
	}
	export function CreateConfigureAccessPointPostBodyFormGroup() {
		return new FormGroup<ConfigureAccessPointPostBodyFormProperties>({
			accessPointArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
			cpiSecretKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100000)]),
			cpiUserId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			cpiUserPassword: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			cpiUsername: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
		});

	}

	export interface ConfigureAccessPointPostBodyPosition {
		elevation?: number | null;
		elevationReference?: ElevationReference;
		elevationUnit?: ElevationUnit;
		latitude?: number | null;
		longitude?: number | null;
	}
	export interface ConfigureAccessPointPostBodyPositionFormProperties {
		elevation: FormControl<number | null | undefined>,
		elevationReference: FormControl<ElevationReference | null | undefined>,
		elevationUnit: FormControl<ElevationUnit | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateConfigureAccessPointPostBodyPositionFormGroup() {
		return new FormGroup<ConfigureAccessPointPostBodyPositionFormProperties>({
			elevation: new FormControl<number | null | undefined>(undefined),
			elevationReference: new FormControl<ElevationReference | null | undefined>(undefined),
			elevationUnit: new FormControl<ElevationUnit | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The description of the network.
		 * Max length: 100
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The name of the network. You can't change the name after you create the network.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		networkName: string;

		/** The tags to apply to the network. */
		tags?: {[id: string]: string };
	}
	export interface CreateNetworkPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the network.
		 * Max length: 100
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the network. You can't change the name after you create the network.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		networkName: FormControl<string | null | undefined>,

		/** The tags to apply to the network. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateNetworkPostBodyFormGroup() {
		return new FormGroup<CreateNetworkPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			networkName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-zA-Z-]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkSitePostBody {

		/** The Availability Zone that is the parent of this site. You can't change the Availability Zone after you create the site. */
		availabilityZone?: string | null;

		/** The ID of the Availability Zone that is the parent of this site. You can't change the Availability Zone after you create the site. */
		availabilityZoneId?: string | null;

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The description of the site.
		 * Max length: 100
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the network.
		 * Required
		 */
		networkArn: string;

		/**
		 * The name of the site. You can't change the name after you create the site.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		networkSiteName: string;

		/** Information about a site plan. */
		pendingPlan?: CreateNetworkSitePostBodyPendingPlan;

		/** The tags to apply to the network site. */
		tags?: {[id: string]: string };
	}
	export interface CreateNetworkSitePostBodyFormProperties {

		/** The Availability Zone that is the parent of this site. You can't change the Availability Zone after you create the site. */
		availabilityZone: FormControl<string | null | undefined>,

		/** The ID of the Availability Zone that is the parent of this site. You can't change the Availability Zone after you create the site. */
		availabilityZoneId: FormControl<string | null | undefined>,

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the site.
		 * Max length: 100
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the network.
		 * Required
		 */
		networkArn: FormControl<string | null | undefined>,

		/**
		 * The name of the site. You can't change the name after you create the site.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		networkSiteName: FormControl<string | null | undefined>,

		/** The tags to apply to the network site. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateNetworkSitePostBodyFormGroup() {
		return new FormGroup<CreateNetworkSitePostBodyFormProperties>({
			availabilityZone: new FormControl<string | null | undefined>(undefined),
			availabilityZoneId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
			networkSiteName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-zA-Z-]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateNetworkSitePostBodyPendingPlan {
		options?: Array<NameValuePair>;
		resourceDefinitions?: Array<NetworkResourceDefinition>;
	}
	export interface CreateNetworkSitePostBodyPendingPlanFormProperties {
	}
	export function CreateCreateNetworkSitePostBodyPendingPlanFormGroup() {
		return new FormGroup<CreateNetworkSitePostBodyPendingPlanFormProperties>({
		});

	}

	export interface DeactivateDeviceIdentifierPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the device identifier.
		 * Required
		 */
		deviceIdentifierArn: string;
	}
	export interface DeactivateDeviceIdentifierPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the device identifier.
		 * Required
		 */
		deviceIdentifierArn: FormControl<string | null | undefined>,
	}
	export function CreateDeactivateDeviceIdentifierPostBodyFormGroup() {
		return new FormGroup<DeactivateDeviceIdentifierPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			deviceIdentifierArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
		});

	}

	export interface ListDeviceIdentifiersPostBody {

		/** <p>The filters.</p> <ul> <li> <p> <code>ORDER</code> - The Amazon Resource Name (ARN) of the order.</p> </li> <li> <p> <code>STATUS</code> - The status (<code>ACTIVE</code> | <code>INACTIVE</code>).</p> </li> <li> <p> <code>TRAFFIC_GROUP</code> - The Amazon Resource Name (ARN) of the traffic group.</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p> */
		filters?: {[id: string]: Array<string> };

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		maxResults?: number | null;

		/**
		 * The Amazon Resource Name (ARN) of the network.
		 * Required
		 */
		networkArn: string;

		/** The token for the next page of results. */
		startToken?: string | null;
	}
	export interface ListDeviceIdentifiersPostBodyFormProperties {

		/** <p>The filters.</p> <ul> <li> <p> <code>ORDER</code> - The Amazon Resource Name (ARN) of the order.</p> </li> <li> <p> <code>STATUS</code> - The status (<code>ACTIVE</code> | <code>INACTIVE</code>).</p> </li> <li> <p> <code>TRAFFIC_GROUP</code> - The Amazon Resource Name (ARN) of the traffic group.</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p> */
		filters: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the network.
		 * Required
		 */
		networkArn: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		startToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceIdentifiersPostBodyFormGroup() {
		return new FormGroup<ListDeviceIdentifiersPostBodyFormProperties>({
			filters: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
			startToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNetworkResourcesPostBody {

		/** <p>The filters.</p> <ul> <li> <p> <code>ORDER</code> - The Amazon Resource Name (ARN) of the order.</p> </li> <li> <p> <code>STATUS</code> - The status (<code>AVAILABLE</code> | <code>DELETED</code> | <code>DELETING</code> | <code>PENDING</code> | <code>PENDING_RETURN</code> | <code>PROVISIONING</code> | <code>SHIPPED</code>).</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p> */
		filters?: {[id: string]: Array<string> };

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		maxResults?: number | null;

		/**
		 * The Amazon Resource Name (ARN) of the network.
		 * Required
		 */
		networkArn: string;

		/** The token for the next page of results. */
		startToken?: string | null;
	}
	export interface ListNetworkResourcesPostBodyFormProperties {

		/** <p>The filters.</p> <ul> <li> <p> <code>ORDER</code> - The Amazon Resource Name (ARN) of the order.</p> </li> <li> <p> <code>STATUS</code> - The status (<code>AVAILABLE</code> | <code>DELETED</code> | <code>DELETING</code> | <code>PENDING</code> | <code>PENDING_RETURN</code> | <code>PROVISIONING</code> | <code>SHIPPED</code>).</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p> */
		filters: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the network.
		 * Required
		 */
		networkArn: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		startToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkResourcesPostBodyFormGroup() {
		return new FormGroup<ListNetworkResourcesPostBodyFormProperties>({
			filters: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
			startToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNetworkSitesPostBody {

		/** <p>The filters. Add filters to your request to return a more specific list of results. Use filters to match the status of the network sites.</p> <ul> <li> <p> <code>STATUS</code> - The status (<code>AVAILABLE</code> | <code>CREATED</code> | <code>DELETED</code> | <code>DEPROVISIONING</code> | <code>PROVISIONING</code>).</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p> */
		filters?: {[id: string]: Array<string> };

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		maxResults?: number | null;

		/**
		 * The Amazon Resource Name (ARN) of the network.
		 * Required
		 */
		networkArn: string;

		/** The token for the next page of results. */
		startToken?: string | null;
	}
	export interface ListNetworkSitesPostBodyFormProperties {

		/** <p>The filters. Add filters to your request to return a more specific list of results. Use filters to match the status of the network sites.</p> <ul> <li> <p> <code>STATUS</code> - The status (<code>AVAILABLE</code> | <code>CREATED</code> | <code>DELETED</code> | <code>DEPROVISIONING</code> | <code>PROVISIONING</code>).</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p> */
		filters: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the network.
		 * Required
		 */
		networkArn: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		startToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkSitesPostBodyFormGroup() {
		return new FormGroup<ListNetworkSitesPostBodyFormProperties>({
			filters: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
			startToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListNetworksPostBody {

		/** <p>The filters.</p> <ul> <li> <p> <code>STATUS</code> - The status (<code>AVAILABLE</code> | <code>CREATED</code> | <code>DELETED</code> | <code>DEPROVISIONING</code> | <code>PROVISIONING</code>).</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p> */
		filters?: {[id: string]: Array<string> };

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		maxResults?: number | null;

		/** The token for the next page of results. */
		startToken?: string | null;
	}
	export interface ListNetworksPostBodyFormProperties {

		/** <p>The filters.</p> <ul> <li> <p> <code>STATUS</code> - The status (<code>AVAILABLE</code> | <code>CREATED</code> | <code>DELETED</code> | <code>DEPROVISIONING</code> | <code>PROVISIONING</code>).</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p> */
		filters: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		maxResults: FormControl<number | null | undefined>,

		/** The token for the next page of results. */
		startToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworksPostBodyFormGroup() {
		return new FormGroup<ListNetworksPostBodyFormProperties>({
			filters: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			startToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListOrdersPostBody {

		/** <p>The filters.</p> <ul> <li> <p> <code>NETWORK_SITE</code> - The Amazon Resource Name (ARN) of the network site.</p> </li> <li> <p> <code>STATUS</code> - The status (<code>ACKNOWLEDGING</code> | <code>ACKNOWLEDGED</code> | <code>UNACKNOWLEDGED</code>).</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p> */
		filters?: {[id: string]: Array<string> };

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		maxResults?: number | null;

		/**
		 * The Amazon Resource Name (ARN) of the network.
		 * Required
		 */
		networkArn: string;

		/** The token for the next page of results. */
		startToken?: string | null;
	}
	export interface ListOrdersPostBodyFormProperties {

		/** <p>The filters.</p> <ul> <li> <p> <code>NETWORK_SITE</code> - The Amazon Resource Name (ARN) of the network site.</p> </li> <li> <p> <code>STATUS</code> - The status (<code>ACKNOWLEDGING</code> | <code>ACKNOWLEDGED</code> | <code>UNACKNOWLEDGED</code>).</p> </li> </ul> <p>Filter values are case sensitive. If you specify multiple values for a filter, the values are joined with an <code>OR</code>, and the request returns all results that match any of the specified values.</p> */
		filters: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 20
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the network.
		 * Required
		 */
		networkArn: FormControl<string | null | undefined>,

		/** The token for the next page of results. */
		startToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrdersPostBodyFormGroup() {
		return new FormGroup<ListOrdersPostBodyFormProperties>({
			filters: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			networkArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
			startToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartNetworkResourceUpdatePostBody {

		/** <p>Determines the duration and renewal status of the commitment period for a radio unit.</p> <p>For pricing, see <a href="http://aws.amazon.com/private5g/pricing">Amazon Web Services Private 5G Pricing</a>.</p> */
		commitmentConfiguration?: StartNetworkResourceUpdatePostBodyCommitmentConfiguration;

		/**
		 * The Amazon Resource Name (ARN) of the network resource.
		 * Required
		 */
		networkResourceArn: string;

		/**
		 * The reason for the return. Providing a reason for a return is optional.
		 * Max length: 1000
		 * Min length: 0
		 */
		returnReason?: string | null;

		/** Information about an address. */
		shippingAddress?: StartNetworkResourceUpdatePostBodyShippingAddress;

		/**
		 * <p>The update type.</p> <ul> <li> <p> <code>REPLACE</code> - Submits a request to replace a defective radio unit. We provide a shipping label that you can use for the return process and we ship a replacement radio unit to you.</p> </li> <li> <p> <code>RETURN</code> - Submits a request to return a radio unit that you no longer need. We provide a shipping label that you can use for the return process.</p> </li> <li> <p> <code>COMMITMENT</code> - Submits a request to change or renew the commitment period. If you choose this value, then you must set <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_StartNetworkResourceUpdate.html#privatenetworks-StartNetworkResourceUpdate-request-commitmentConfiguration"> <code>commitmentConfiguration</code> </a>.</p> </li> </ul>
		 * Required
		 */
		updateType: UpdateType;
	}
	export interface StartNetworkResourceUpdatePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the network resource.
		 * Required
		 */
		networkResourceArn: FormControl<string | null | undefined>,

		/**
		 * The reason for the return. Providing a reason for a return is optional.
		 * Max length: 1000
		 * Min length: 0
		 */
		returnReason: FormControl<string | null | undefined>,

		/**
		 * <p>The update type.</p> <ul> <li> <p> <code>REPLACE</code> - Submits a request to replace a defective radio unit. We provide a shipping label that you can use for the return process and we ship a replacement radio unit to you.</p> </li> <li> <p> <code>RETURN</code> - Submits a request to return a radio unit that you no longer need. We provide a shipping label that you can use for the return process.</p> </li> <li> <p> <code>COMMITMENT</code> - Submits a request to change or renew the commitment period. If you choose this value, then you must set <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_StartNetworkResourceUpdate.html#privatenetworks-StartNetworkResourceUpdate-request-commitmentConfiguration"> <code>commitmentConfiguration</code> </a>.</p> </li> </ul>
		 * Required
		 */
		updateType: FormControl<UpdateType | null | undefined>,
	}
	export function CreateStartNetworkResourceUpdatePostBodyFormGroup() {
		return new FormGroup<StartNetworkResourceUpdatePostBodyFormProperties>({
			networkResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
			returnReason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			updateType: new FormControl<UpdateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartNetworkResourceUpdatePostBodyCommitmentConfiguration {
		automaticRenewal?: boolean | null;
		commitmentLength?: CommitmentLength;
	}
	export interface StartNetworkResourceUpdatePostBodyCommitmentConfigurationFormProperties {
		automaticRenewal: FormControl<boolean | null | undefined>,
		commitmentLength: FormControl<CommitmentLength | null | undefined>,
	}
	export function CreateStartNetworkResourceUpdatePostBodyCommitmentConfigurationFormGroup() {
		return new FormGroup<StartNetworkResourceUpdatePostBodyCommitmentConfigurationFormProperties>({
			automaticRenewal: new FormControl<boolean | null | undefined>(undefined),
			commitmentLength: new FormControl<CommitmentLength | null | undefined>(undefined),
		});

	}

	export interface StartNetworkResourceUpdatePostBodyShippingAddress {
		city?: string;
		company?: string;
		country?: string;
		emailAddress?: string;
		name?: string;
		phoneNumber?: string;
		postalCode?: string;
		stateOrProvince?: string;
		street1?: string;
		street2?: string;
		street3?: string;
	}
	export interface StartNetworkResourceUpdatePostBodyShippingAddressFormProperties {
		city: FormControl<string | null | undefined>,
		company: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		stateOrProvince: FormControl<string | null | undefined>,
		street1: FormControl<string | null | undefined>,
		street2: FormControl<string | null | undefined>,
		street3: FormControl<string | null | undefined>,
	}
	export function CreateStartNetworkResourceUpdatePostBodyShippingAddressFormGroup() {
		return new FormGroup<StartNetworkResourceUpdatePostBodyShippingAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			company: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			stateOrProvince: new FormControl<string | null | undefined>(undefined),
			street1: new FormControl<string | null | undefined>(undefined),
			street2: new FormControl<string | null | undefined>(undefined),
			street3: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateNetworkSitePutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The description.
		 * Max length: 100
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the network site.
		 * Required
		 */
		networkSiteArn: string;
	}
	export interface UpdateNetworkSitePutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The description.
		 * Max length: 100
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the network site.
		 * Required
		 */
		networkSiteArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSitePutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSitePutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
			networkSiteArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
		});

	}

	export interface UpdateNetworkSitePlanPutBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the network site.
		 * Required
		 */
		networkSiteArn: string;

		/**
		 * Information about a site plan.
		 * Required
		 */
		pendingPlan: UpdateNetworkSitePlanPutBodyPendingPlan;
	}
	export interface UpdateNetworkSitePlanPutBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
		 * Max length: 100
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the network site.
		 * Required
		 */
		networkSiteArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNetworkSitePlanPutBodyFormGroup() {
		return new FormGroup<UpdateNetworkSitePlanPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
			networkSiteArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^arn:aws:private-networks:[a-z0-9-]+:[^:]*:.*$')]),
		});

	}

	export interface UpdateNetworkSitePlanPutBodyPendingPlan {
		options?: Array<NameValuePair>;
		resourceDefinitions?: Array<NetworkResourceDefinition>;
	}
	export interface UpdateNetworkSitePlanPutBodyPendingPlanFormProperties {
	}
	export function CreateUpdateNetworkSitePlanPutBodyPendingPlanFormGroup() {
		return new FormGroup<UpdateNetworkSitePlanPutBodyPendingPlanFormProperties>({
		});

	}

}

