import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelOrderOutput {
	}
	export interface CancelOrderOutputFormProperties {
	}
	export function CreateCancelOrderOutputFormGroup() {
		return new FormGroup<CancelOrderOutputFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
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

	export interface CreateOrderOutput {
		Order?: Order;
	}
	export interface CreateOrderOutputFormProperties {
	}
	export function CreateCreateOrderOutputFormGroup() {
		return new FormGroup<CreateOrderOutputFormProperties>({
		});

	}


	/** Information about an order. */
	export interface Order {
		OutpostId?: string;
		OrderId?: string;
		Status?: OrderStatus;
		LineItems?: Array<LineItem>;
		PaymentOption?: PaymentOption;
		OrderSubmissionDate?: Date;
		OrderFulfilledDate?: Date;
		PaymentTerm?: PaymentTerm;
		OrderType?: OrderType;
	}

	/** Information about an order. */
	export interface OrderFormProperties {
		OutpostId: FormControl<string | null | undefined>,
		OrderId: FormControl<string | null | undefined>,
		Status: FormControl<OrderStatus | null | undefined>,
		PaymentOption: FormControl<PaymentOption | null | undefined>,
		OrderSubmissionDate: FormControl<Date | null | undefined>,
		OrderFulfilledDate: FormControl<Date | null | undefined>,
		PaymentTerm: FormControl<PaymentTerm | null | undefined>,
		OrderType: FormControl<OrderType | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			OutpostId: new FormControl<string | null | undefined>(undefined),
			OrderId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<OrderStatus | null | undefined>(undefined),
			PaymentOption: new FormControl<PaymentOption | null | undefined>(undefined),
			OrderSubmissionDate: new FormControl<Date | null | undefined>(undefined),
			OrderFulfilledDate: new FormControl<Date | null | undefined>(undefined),
			PaymentTerm: new FormControl<PaymentTerm | null | undefined>(undefined),
			OrderType: new FormControl<OrderType | null | undefined>(undefined),
		});

	}

	export enum OrderStatus { RECEIVED = 'RECEIVED', PENDING = 'PENDING', PROCESSING = 'PROCESSING', INSTALLING = 'INSTALLING', FULFILLED = 'FULFILLED', CANCELLED = 'CANCELLED', PREPARING = 'PREPARING', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', ERROR = 'ERROR' }


	/** Information about a line item. */
	export interface LineItem {
		CatalogItemId?: string;
		LineItemId?: string;
		Quantity?: number | null;
		Status?: LineItemStatus;
		ShipmentInformation?: ShipmentInformation;
		AssetInformationList?: Array<LineItemAssetInformation>;
		PreviousLineItemId?: string;
		PreviousOrderId?: string;
	}

	/** Information about a line item. */
	export interface LineItemFormProperties {
		CatalogItemId: FormControl<string | null | undefined>,
		LineItemId: FormControl<string | null | undefined>,
		Quantity: FormControl<number | null | undefined>,
		Status: FormControl<LineItemStatus | null | undefined>,
		PreviousLineItemId: FormControl<string | null | undefined>,
		PreviousOrderId: FormControl<string | null | undefined>,
	}
	export function CreateLineItemFormGroup() {
		return new FormGroup<LineItemFormProperties>({
			CatalogItemId: new FormControl<string | null | undefined>(undefined),
			LineItemId: new FormControl<string | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<LineItemStatus | null | undefined>(undefined),
			PreviousLineItemId: new FormControl<string | null | undefined>(undefined),
			PreviousOrderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LineItemStatus { PREPARING = 'PREPARING', BUILDING = 'BUILDING', SHIPPED = 'SHIPPED', DELIVERED = 'DELIVERED', INSTALLING = 'INSTALLING', INSTALLED = 'INSTALLED', ERROR = 'ERROR', CANCELLED = 'CANCELLED', REPLACED = 'REPLACED' }


	/**  Information about a line item shipment.  */
	export interface ShipmentInformation {
		ShipmentTrackingNumber?: string;
		ShipmentCarrier?: ShipmentCarrier;
	}

	/**  Information about a line item shipment.  */
	export interface ShipmentInformationFormProperties {
		ShipmentTrackingNumber: FormControl<string | null | undefined>,
		ShipmentCarrier: FormControl<ShipmentCarrier | null | undefined>,
	}
	export function CreateShipmentInformationFormGroup() {
		return new FormGroup<ShipmentInformationFormProperties>({
			ShipmentTrackingNumber: new FormControl<string | null | undefined>(undefined),
			ShipmentCarrier: new FormControl<ShipmentCarrier | null | undefined>(undefined),
		});

	}

	export enum ShipmentCarrier { DHL = 'DHL', DBS = 'DBS', FEDEX = 'FEDEX', UPS = 'UPS' }


	/**  Information about a line item asset.  */
	export interface LineItemAssetInformation {
		AssetId?: string;
		MacAddressList?: Array<string>;
	}

	/**  Information about a line item asset.  */
	export interface LineItemAssetInformationFormProperties {
		AssetId: FormControl<string | null | undefined>,
	}
	export function CreateLineItemAssetInformationFormGroup() {
		return new FormGroup<LineItemAssetInformationFormProperties>({
			AssetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PaymentOption { ALL_UPFRONT = 'ALL_UPFRONT', NO_UPFRONT = 'NO_UPFRONT', PARTIAL_UPFRONT = 'PARTIAL_UPFRONT' }

	export enum PaymentTerm { THREE_YEARS = 'THREE_YEARS', ONE_YEAR = 'ONE_YEAR' }

	export enum OrderType { OUTPOST = 'OUTPOST', REPLACEMENT = 'REPLACEMENT' }


	/** Information about a line item request. */
	export interface LineItemRequest {
		CatalogItemId?: string;
		Quantity?: number | null;
	}

	/** Information about a line item request. */
	export interface LineItemRequestFormProperties {
		CatalogItemId: FormControl<string | null | undefined>,
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateLineItemRequestFormGroup() {
		return new FormGroup<LineItemRequestFormProperties>({
			CatalogItemId: new FormControl<string | null | undefined>(undefined),
			Quantity: new FormControl<number | null | undefined>(undefined),
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

	export interface CreateOutpostOutput {

		/** Information about an Outpost. */
		Outpost?: Outpost;
	}
	export interface CreateOutpostOutputFormProperties {
	}
	export function CreateCreateOutpostOutputFormGroup() {
		return new FormGroup<CreateOutpostOutputFormProperties>({
		});

	}


	/** Information about an Outpost. */
	export interface Outpost {
		OutpostId?: string;

		/**
		 * The Amazon Web Services account ID of the Outpost owner.
		 * Min length: 12
		 * Max length: 12
		 */
		OwnerId?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the Outpost.
		 * Min length: 1
		 * Max length: 255
		 */
		OutpostArn?: string | null;

		/**
		 * The ID of the site.
		 * Min length: 1
		 * Max length: 255
		 */
		SiteId?: string | null;

		/**
		 * The name of the Outpost.
		 * Min length: 1
		 * Max length: 255
		 */
		Name?: string | null;

		/**
		 * The description of the Outpost.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/**
		 * The life cycle status.
		 * Min length: 1
		 * Max length: 20
		 */
		LifeCycleStatus?: string | null;

		/**
		 * The Availability Zone.
		 * Min length: 1
		 * Max length: 1000
		 */
		AvailabilityZone?: string | null;

		/**
		 * The ID of the Availability Zone.
		 * Min length: 1
		 * Max length: 255
		 */
		AvailabilityZoneId?: string | null;
		Tags?: TagMap;

		/**
		 * The Amazon Resource Name (ARN) of the site.
		 * Min length: 1
		 * Max length: 255
		 */
		SiteArn?: string | null;
		SupportedHardwareType?: SupportedHardwareType;
	}

	/** Information about an Outpost. */
	export interface OutpostFormProperties {
		OutpostId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Services account ID of the Outpost owner.
		 * Min length: 12
		 * Max length: 12
		 */
		OwnerId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Outpost.
		 * Min length: 1
		 * Max length: 255
		 */
		OutpostArn: FormControl<string | null | undefined>,

		/**
		 * The ID of the site.
		 * Min length: 1
		 * Max length: 255
		 */
		SiteId: FormControl<string | null | undefined>,

		/**
		 * The name of the Outpost.
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the Outpost.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The life cycle status.
		 * Min length: 1
		 * Max length: 20
		 */
		LifeCycleStatus: FormControl<string | null | undefined>,

		/**
		 * The Availability Zone.
		 * Min length: 1
		 * Max length: 1000
		 */
		AvailabilityZone: FormControl<string | null | undefined>,

		/**
		 * The ID of the Availability Zone.
		 * Min length: 1
		 * Max length: 255
		 */
		AvailabilityZoneId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the site.
		 * Min length: 1
		 * Max length: 255
		 */
		SiteArn: FormControl<string | null | undefined>,
		SupportedHardwareType: FormControl<SupportedHardwareType | null | undefined>,
	}
	export function CreateOutpostFormGroup() {
		return new FormGroup<OutpostFormProperties>({
			OutpostId: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			OutpostArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/op-[a-f0-9]{17}$')]),
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site/)?(os-[a-f0-9]{17})$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\S ]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^[\S ]*$')]),
			LifeCycleStatus: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(20), Validators.pattern('^[ A-Za-z]+$')]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^([a-zA-Z]+-){1,3}([a-zA-Z]+)?(\d+[a-zA-Z]?)?$')]),
			AvailabilityZoneId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+\d-[a-zA-Z]+\d$')]),
			SiteArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site/(os-[a-f0-9]{17})$')]),
			SupportedHardwareType: new FormControl<SupportedHardwareType | null | undefined>(undefined),
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

	export enum SupportedHardwareType { RACK = 'RACK', SERVER = 'SERVER' }

	export interface CreateSiteOutput {

		/** Information about a site. */
		Site?: Site;
	}
	export interface CreateSiteOutputFormProperties {
	}
	export function CreateCreateSiteOutputFormGroup() {
		return new FormGroup<CreateSiteOutputFormProperties>({
		});

	}


	/** Information about a site. */
	export interface Site {

		/**
		 * The ID of the site.
		 * Min length: 1
		 * Max length: 255
		 */
		SiteId?: string | null;

		/**
		 * The ID of the Amazon Web Services account.
		 * Min length: 12
		 * Max length: 12
		 */
		AccountId?: string | null;

		/**
		 * The name of the site.
		 * Min length: 1
		 * Max length: 1000
		 */
		Name?: string | null;

		/**
		 * The description of the site.
		 * Min length: 1
		 * Max length: 1001
		 */
		Description?: string | null;
		Tags?: TagMap;

		/**
		 * The Amazon Resource Name (ARN) of the site.
		 * Min length: 1
		 * Max length: 255
		 */
		SiteArn?: string | null;
		Notes?: string;
		OperatingAddressCountryCode?: string;
		OperatingAddressStateOrRegion?: string;
		OperatingAddressCity?: string;
		RackPhysicalProperties?: RackPhysicalProperties;
	}

	/** Information about a site. */
	export interface SiteFormProperties {

		/**
		 * The ID of the site.
		 * Min length: 1
		 * Max length: 255
		 */
		SiteId: FormControl<string | null | undefined>,

		/**
		 * The ID of the Amazon Web Services account.
		 * Min length: 12
		 * Max length: 12
		 */
		AccountId: FormControl<string | null | undefined>,

		/**
		 * The name of the site.
		 * Min length: 1
		 * Max length: 1000
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the site.
		 * Min length: 1
		 * Max length: 1001
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the site.
		 * Min length: 1
		 * Max length: 255
		 */
		SiteArn: FormControl<string | null | undefined>,
		Notes: FormControl<string | null | undefined>,
		OperatingAddressCountryCode: FormControl<string | null | undefined>,
		OperatingAddressStateOrRegion: FormControl<string | null | undefined>,
		OperatingAddressCity: FormControl<string | null | undefined>,
	}
	export function CreateSiteFormGroup() {
		return new FormGroup<SiteFormProperties>({
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site/)?(os-[a-f0-9]{17})$')]),
			AccountId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('\d{12}')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[\S ]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1001), Validators.pattern('^[\S ]+$')]),
			SiteArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site/(os-[a-f0-9]{17})$')]),
			Notes: new FormControl<string | null | undefined>(undefined),
			OperatingAddressCountryCode: new FormControl<string | null | undefined>(undefined),
			OperatingAddressStateOrRegion: new FormControl<string | null | undefined>(undefined),
			OperatingAddressCity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide.  */
	export interface RackPhysicalProperties {
		PowerDrawKva?: PowerDrawKva;
		PowerPhase?: PowerPhase;
		PowerConnector?: PowerConnector;
		PowerFeedDrop?: PowerFeedDrop;
		UplinkGbps?: UplinkGbps;
		UplinkCount?: UplinkCount;
		FiberOpticCableType?: FiberOpticCableType;
		OpticalStandard?: OpticalStandard;
		MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs;
	}

	/**  Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide.  */
	export interface RackPhysicalPropertiesFormProperties {
		PowerDrawKva: FormControl<PowerDrawKva | null | undefined>,
		PowerPhase: FormControl<PowerPhase | null | undefined>,
		PowerConnector: FormControl<PowerConnector | null | undefined>,
		PowerFeedDrop: FormControl<PowerFeedDrop | null | undefined>,
		UplinkGbps: FormControl<UplinkGbps | null | undefined>,
		UplinkCount: FormControl<UplinkCount | null | undefined>,
		FiberOpticCableType: FormControl<FiberOpticCableType | null | undefined>,
		OpticalStandard: FormControl<OpticalStandard | null | undefined>,
		MaximumSupportedWeightLbs: FormControl<MaximumSupportedWeightLbs | null | undefined>,
	}
	export function CreateRackPhysicalPropertiesFormGroup() {
		return new FormGroup<RackPhysicalPropertiesFormProperties>({
			PowerDrawKva: new FormControl<PowerDrawKva | null | undefined>(undefined),
			PowerPhase: new FormControl<PowerPhase | null | undefined>(undefined),
			PowerConnector: new FormControl<PowerConnector | null | undefined>(undefined),
			PowerFeedDrop: new FormControl<PowerFeedDrop | null | undefined>(undefined),
			UplinkGbps: new FormControl<UplinkGbps | null | undefined>(undefined),
			UplinkCount: new FormControl<UplinkCount | null | undefined>(undefined),
			FiberOpticCableType: new FormControl<FiberOpticCableType | null | undefined>(undefined),
			OpticalStandard: new FormControl<OpticalStandard | null | undefined>(undefined),
			MaximumSupportedWeightLbs: new FormControl<MaximumSupportedWeightLbs | null | undefined>(undefined),
		});

	}

	export enum PowerDrawKva { POWER_5_KVA = 'POWER_5_KVA', POWER_10_KVA = 'POWER_10_KVA', POWER_15_KVA = 'POWER_15_KVA', POWER_30_KVA = 'POWER_30_KVA' }

	export enum PowerPhase { SINGLE_PHASE = 'SINGLE_PHASE', THREE_PHASE = 'THREE_PHASE' }

	export enum PowerConnector { L6_30P = 'L6_30P', IEC309 = 'IEC309', AH530P7W = 'AH530P7W', AH532P6W = 'AH532P6W' }

	export enum PowerFeedDrop { ABOVE_RACK = 'ABOVE_RACK', BELOW_RACK = 'BELOW_RACK' }

	export enum UplinkGbps { UPLINK_1G = 'UPLINK_1G', UPLINK_10G = 'UPLINK_10G', UPLINK_40G = 'UPLINK_40G', UPLINK_100G = 'UPLINK_100G' }

	export enum UplinkCount { UPLINK_COUNT_1 = 'UPLINK_COUNT_1', UPLINK_COUNT_2 = 'UPLINK_COUNT_2', UPLINK_COUNT_3 = 'UPLINK_COUNT_3', UPLINK_COUNT_4 = 'UPLINK_COUNT_4', UPLINK_COUNT_5 = 'UPLINK_COUNT_5', UPLINK_COUNT_6 = 'UPLINK_COUNT_6', UPLINK_COUNT_7 = 'UPLINK_COUNT_7', UPLINK_COUNT_8 = 'UPLINK_COUNT_8', UPLINK_COUNT_12 = 'UPLINK_COUNT_12', UPLINK_COUNT_16 = 'UPLINK_COUNT_16' }

	export enum FiberOpticCableType { SINGLE_MODE = 'SINGLE_MODE', MULTI_MODE = 'MULTI_MODE' }

	export enum OpticalStandard { OPTIC_10GBASE_SR = 'OPTIC_10GBASE_SR', OPTIC_10GBASE_IR = 'OPTIC_10GBASE_IR', OPTIC_10GBASE_LR = 'OPTIC_10GBASE_LR', OPTIC_40GBASE_SR = 'OPTIC_40GBASE_SR', OPTIC_40GBASE_ESR = 'OPTIC_40GBASE_ESR', OPTIC_40GBASE_IR4_LR4L = 'OPTIC_40GBASE_IR4_LR4L', OPTIC_40GBASE_LR4 = 'OPTIC_40GBASE_LR4', OPTIC_100GBASE_SR4 = 'OPTIC_100GBASE_SR4', OPTIC_100GBASE_CWDM4 = 'OPTIC_100GBASE_CWDM4', OPTIC_100GBASE_LR4 = 'OPTIC_100GBASE_LR4', OPTIC_100G_PSM4_MSA = 'OPTIC_100G_PSM4_MSA', OPTIC_1000BASE_LX = 'OPTIC_1000BASE_LX', OPTIC_1000BASE_SX = 'OPTIC_1000BASE_SX' }

	export enum MaximumSupportedWeightLbs { NO_LIMIT = 'NO_LIMIT', MAX_1400_LBS = 'MAX_1400_LBS', MAX_1600_LBS = 'MAX_1600_LBS', MAX_1800_LBS = 'MAX_1800_LBS', MAX_2000_LBS = 'MAX_2000_LBS' }

	export interface DeleteOutpostOutput {
	}
	export interface DeleteOutpostOutputFormProperties {
	}
	export function CreateDeleteOutpostOutputFormGroup() {
		return new FormGroup<DeleteOutpostOutputFormProperties>({
		});

	}

	export interface DeleteSiteOutput {
	}
	export interface DeleteSiteOutputFormProperties {
	}
	export function CreateDeleteSiteOutputFormGroup() {
		return new FormGroup<DeleteSiteOutputFormProperties>({
		});

	}

	export interface GetCatalogItemOutput {
		CatalogItem?: CatalogItem;
	}
	export interface GetCatalogItemOutputFormProperties {
	}
	export function CreateGetCatalogItemOutputFormGroup() {
		return new FormGroup<GetCatalogItemOutputFormProperties>({
		});

	}


	/**  Information about a catalog item.  */
	export interface CatalogItem {
		CatalogItemId?: string;
		ItemStatus?: CatalogItemStatus;
		EC2Capacities?: Array<EC2Capacity>;
		PowerKva?: number;
		WeightLbs?: number | null;
		SupportedUplinkGbps?: Array<number> | null;
		SupportedStorage?: Array<SupportedStorageEnum>;
	}

	/**  Information about a catalog item.  */
	export interface CatalogItemFormProperties {
		CatalogItemId: FormControl<string | null | undefined>,
		ItemStatus: FormControl<CatalogItemStatus | null | undefined>,
		PowerKva: FormControl<number | null | undefined>,
		WeightLbs: FormControl<number | null | undefined>,
	}
	export function CreateCatalogItemFormGroup() {
		return new FormGroup<CatalogItemFormProperties>({
			CatalogItemId: new FormControl<string | null | undefined>(undefined),
			ItemStatus: new FormControl<CatalogItemStatus | null | undefined>(undefined),
			PowerKva: new FormControl<number | null | undefined>(undefined),
			WeightLbs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CatalogItemStatus { AVAILABLE = 'AVAILABLE', DISCONTINUED = 'DISCONTINUED' }


	/**  Information about EC2 capacity.  */
	export interface EC2Capacity {
		Family?: string;
		MaxSize?: string;
		Quantity?: string;
	}

	/**  Information about EC2 capacity.  */
	export interface EC2CapacityFormProperties {
		Family: FormControl<string | null | undefined>,
		MaxSize: FormControl<string | null | undefined>,
		Quantity: FormControl<string | null | undefined>,
	}
	export function CreateEC2CapacityFormGroup() {
		return new FormGroup<EC2CapacityFormProperties>({
			Family: new FormControl<string | null | undefined>(undefined),
			MaxSize: new FormControl<string | null | undefined>(undefined),
			Quantity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SupportedStorageEnum { EBS = 'EBS', S3 = 'S3' }

	export interface GetConnectionResponse {
		ConnectionId?: string;
		ConnectionDetails?: ConnectionDetails;
	}
	export interface GetConnectionResponseFormProperties {
		ConnectionId: FormControl<string | null | undefined>,
	}
	export function CreateGetConnectionResponseFormGroup() {
		return new FormGroup<GetConnectionResponseFormProperties>({
			ConnectionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about a connection.  */
	export interface ConnectionDetails {
		ClientPublicKey?: string;
		ServerPublicKey?: string;
		ServerEndpoint?: string;
		ClientTunnelAddress?: string;
		ServerTunnelAddress?: string;
		AllowedIps?: Array<string>;
	}

	/**  Information about a connection.  */
	export interface ConnectionDetailsFormProperties {
		ClientPublicKey: FormControl<string | null | undefined>,
		ServerPublicKey: FormControl<string | null | undefined>,
		ServerEndpoint: FormControl<string | null | undefined>,
		ClientTunnelAddress: FormControl<string | null | undefined>,
		ServerTunnelAddress: FormControl<string | null | undefined>,
	}
	export function CreateConnectionDetailsFormGroup() {
		return new FormGroup<ConnectionDetailsFormProperties>({
			ClientPublicKey: new FormControl<string | null | undefined>(undefined),
			ServerPublicKey: new FormControl<string | null | undefined>(undefined),
			ServerEndpoint: new FormControl<string | null | undefined>(undefined),
			ClientTunnelAddress: new FormControl<string | null | undefined>(undefined),
			ServerTunnelAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOrderOutput {

		/** Information about an order. */
		Order?: Order;
	}
	export interface GetOrderOutputFormProperties {
	}
	export function CreateGetOrderOutputFormGroup() {
		return new FormGroup<GetOrderOutputFormProperties>({
		});

	}

	export interface GetOutpostOutput {

		/** Information about an Outpost. */
		Outpost?: Outpost;
	}
	export interface GetOutpostOutputFormProperties {
	}
	export function CreateGetOutpostOutputFormGroup() {
		return new FormGroup<GetOutpostOutputFormProperties>({
		});

	}

	export interface GetOutpostInstanceTypesOutput {

		/** Information about the instance types. */
		InstanceTypes?: Array<InstanceTypeItem>;

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken?: string | null;
		OutpostId?: string;

		/**
		 * The Amazon Resource Name (ARN) of the Outpost.
		 * Min length: 1
		 * Max length: 255
		 */
		OutpostArn?: string | null;
	}
	export interface GetOutpostInstanceTypesOutputFormProperties {

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken: FormControl<string | null | undefined>,
		OutpostId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Outpost.
		 * Min length: 1
		 * Max length: 255
		 */
		OutpostArn: FormControl<string | null | undefined>,
	}
	export function CreateGetOutpostInstanceTypesOutputFormGroup() {
		return new FormGroup<GetOutpostInstanceTypesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^(\d+)##(\S+)$')]),
			OutpostId: new FormControl<string | null | undefined>(undefined),
			OutpostArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/op-[a-f0-9]{17}$')]),
		});

	}


	/** Information about an instance type. */
	export interface InstanceTypeItem {

		/** The instance type. */
		InstanceType?: string | null;
	}

	/** Information about an instance type. */
	export interface InstanceTypeItemFormProperties {

		/** The instance type. */
		InstanceType: FormControl<string | null | undefined>,
	}
	export function CreateInstanceTypeItemFormGroup() {
		return new FormGroup<InstanceTypeItemFormProperties>({
			InstanceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSiteOutput {

		/** Information about a site. */
		Site?: Site;
	}
	export interface GetSiteOutputFormProperties {
	}
	export function CreateGetSiteOutputFormGroup() {
		return new FormGroup<GetSiteOutputFormProperties>({
		});

	}

	export interface GetSiteAddressOutput {

		/**
		 * The ID of the site.
		 * Min length: 1
		 * Max length: 255
		 */
		SiteId?: string | null;
		AddressType?: AddressType;
		Address?: Address;
	}
	export interface GetSiteAddressOutputFormProperties {

		/**
		 * The ID of the site.
		 * Min length: 1
		 * Max length: 255
		 */
		SiteId: FormControl<string | null | undefined>,
		AddressType: FormControl<AddressType | null | undefined>,
	}
	export function CreateGetSiteAddressOutputFormGroup() {
		return new FormGroup<GetSiteAddressOutputFormProperties>({
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site/)?(os-[a-f0-9]{17})$')]),
			AddressType: new FormControl<AddressType | null | undefined>(undefined),
		});

	}

	export enum AddressType { SHIPPING_ADDRESS = 'SHIPPING_ADDRESS', OPERATING_ADDRESS = 'OPERATING_ADDRESS' }


	/**  Information about an address.  */
	export interface Address {
		ContactName?: string;
		ContactPhoneNumber?: string;

		/** Required */
		AddressLine1: string;
		AddressLine2?: string;
		AddressLine3?: string;

		/** Required */
		City: string;

		/** Required */
		StateOrRegion: string;
		DistrictOrCounty?: string;

		/** Required */
		PostalCode: string;

		/** Required */
		CountryCode: string;
		Municipality?: string;
	}

	/**  Information about an address.  */
	export interface AddressFormProperties {
		ContactName: FormControl<string | null | undefined>,
		ContactPhoneNumber: FormControl<string | null | undefined>,

		/** Required */
		AddressLine1: FormControl<string | null | undefined>,
		AddressLine2: FormControl<string | null | undefined>,
		AddressLine3: FormControl<string | null | undefined>,

		/** Required */
		City: FormControl<string | null | undefined>,

		/** Required */
		StateOrRegion: FormControl<string | null | undefined>,
		DistrictOrCounty: FormControl<string | null | undefined>,

		/** Required */
		PostalCode: FormControl<string | null | undefined>,

		/** Required */
		CountryCode: FormControl<string | null | undefined>,
		Municipality: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			ContactName: new FormControl<string | null | undefined>(undefined),
			ContactPhoneNumber: new FormControl<string | null | undefined>(undefined),
			AddressLine1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AddressLine2: new FormControl<string | null | undefined>(undefined),
			AddressLine3: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StateOrRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DistrictOrCounty: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Municipality: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssetsOutput {
		Assets?: Array<AssetInfo>;

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken?: string | null;
	}
	export interface ListAssetsOutputFormProperties {

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssetsOutputFormGroup() {
		return new FormGroup<ListAssetsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^(\d+)##(\S+)$')]),
		});

	}


	/**  Information about hardware assets.  */
	export interface AssetInfo {
		AssetId?: string;
		RackId?: string;
		AssetType?: AssetType;
		ComputeAttributes?: ComputeAttributes;
		AssetLocation?: AssetLocation;
	}

	/**  Information about hardware assets.  */
	export interface AssetInfoFormProperties {
		AssetId: FormControl<string | null | undefined>,
		RackId: FormControl<string | null | undefined>,
		AssetType: FormControl<AssetType | null | undefined>,
	}
	export function CreateAssetInfoFormGroup() {
		return new FormGroup<AssetInfoFormProperties>({
			AssetId: new FormControl<string | null | undefined>(undefined),
			RackId: new FormControl<string | null | undefined>(undefined),
			AssetType: new FormControl<AssetType | null | undefined>(undefined),
		});

	}

	export enum AssetType { COMPUTE = 'COMPUTE' }


	/**  Information about compute hardware assets.  */
	export interface ComputeAttributes {
		HostId?: string;
		State?: ComputeAssetState;
	}

	/**  Information about compute hardware assets.  */
	export interface ComputeAttributesFormProperties {
		HostId: FormControl<string | null | undefined>,
		State: FormControl<ComputeAssetState | null | undefined>,
	}
	export function CreateComputeAttributesFormGroup() {
		return new FormGroup<ComputeAttributesFormProperties>({
			HostId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ComputeAssetState | null | undefined>(undefined),
		});

	}

	export enum ComputeAssetState { ACTIVE = 'ACTIVE', ISOLATED = 'ISOLATED', RETIRING = 'RETIRING' }


	/**  Information about the position of the asset in a rack.  */
	export interface AssetLocation {
		RackElevation?: number;
	}

	/**  Information about the position of the asset in a rack.  */
	export interface AssetLocationFormProperties {
		RackElevation: FormControl<number | null | undefined>,
	}
	export function CreateAssetLocationFormGroup() {
		return new FormGroup<AssetLocationFormProperties>({
			RackElevation: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AssetState { ACTIVE = 'ACTIVE', RETIRING = 'RETIRING', ISOLATED = 'ISOLATED' }

	export interface ListCatalogItemsOutput {
		CatalogItems?: Array<CatalogItem>;

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken?: string | null;
	}
	export interface ListCatalogItemsOutputFormProperties {

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCatalogItemsOutputFormGroup() {
		return new FormGroup<ListCatalogItemsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^(\d+)##(\S+)$')]),
		});

	}

	export enum CatalogItemClass { RACK = 'RACK', SERVER = 'SERVER' }

	export interface ListOrdersOutput {
		Orders?: Array<OrderSummary>;

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken?: string | null;
	}
	export interface ListOrdersOutputFormProperties {

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrdersOutputFormGroup() {
		return new FormGroup<ListOrdersOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^(\d+)##(\S+)$')]),
		});

	}


	/**  A summary of line items in your order.  */
	export interface OrderSummary {
		OutpostId?: string;
		OrderId?: string;
		OrderType?: OrderType;
		Status?: OrderStatus;
		LineItemCountsByStatus?: LineItemStatusCounts;
		OrderSubmissionDate?: Date;
		OrderFulfilledDate?: Date;
	}

	/**  A summary of line items in your order.  */
	export interface OrderSummaryFormProperties {
		OutpostId: FormControl<string | null | undefined>,
		OrderId: FormControl<string | null | undefined>,
		OrderType: FormControl<OrderType | null | undefined>,
		Status: FormControl<OrderStatus | null | undefined>,
		OrderSubmissionDate: FormControl<Date | null | undefined>,
		OrderFulfilledDate: FormControl<Date | null | undefined>,
	}
	export function CreateOrderSummaryFormGroup() {
		return new FormGroup<OrderSummaryFormProperties>({
			OutpostId: new FormControl<string | null | undefined>(undefined),
			OrderId: new FormControl<string | null | undefined>(undefined),
			OrderType: new FormControl<OrderType | null | undefined>(undefined),
			Status: new FormControl<OrderStatus | null | undefined>(undefined),
			OrderSubmissionDate: new FormControl<Date | null | undefined>(undefined),
			OrderFulfilledDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface LineItemStatusCounts {
	}
	export interface LineItemStatusCountsFormProperties {
	}
	export function CreateLineItemStatusCountsFormGroup() {
		return new FormGroup<LineItemStatusCountsFormProperties>({
		});

	}

	export interface ListOutpostsOutput {

		/** Information about the Outposts. */
		Outposts?: Array<Outpost>;

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken?: string | null;
	}
	export interface ListOutpostsOutputFormProperties {

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOutpostsOutputFormGroup() {
		return new FormGroup<ListOutpostsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^(\d+)##(\S+)$')]),
		});

	}

	export interface ListSitesOutput {

		/** Information about the sites. */
		Sites?: Array<Site>;

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken?: string | null;
	}
	export interface ListSitesOutputFormProperties {

		/**
		 * The pagination token.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSitesOutputFormGroup() {
		return new FormGroup<ListSitesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^(\d+)##(\S+)$')]),
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

	export interface StartConnectionResponse {
		ConnectionId?: string;
		UnderlayIpAddress?: string;
	}
	export interface StartConnectionResponseFormProperties {
		ConnectionId: FormControl<string | null | undefined>,
		UnderlayIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateStartConnectionResponseFormGroup() {
		return new FormGroup<StartConnectionResponseFormProperties>({
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			UnderlayIpAddress: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateOutpostOutput {

		/** Information about an Outpost. */
		Outpost?: Outpost;
	}
	export interface UpdateOutpostOutputFormProperties {
	}
	export function CreateUpdateOutpostOutputFormGroup() {
		return new FormGroup<UpdateOutpostOutputFormProperties>({
		});

	}

	export interface UpdateSiteOutput {

		/** Information about a site. */
		Site?: Site;
	}
	export interface UpdateSiteOutputFormProperties {
	}
	export function CreateUpdateSiteOutputFormGroup() {
		return new FormGroup<UpdateSiteOutputFormProperties>({
		});

	}

	export interface UpdateSiteAddressOutput {
		AddressType?: AddressType;
		Address?: Address;
	}
	export interface UpdateSiteAddressOutputFormProperties {
		AddressType: FormControl<AddressType | null | undefined>,
	}
	export function CreateUpdateSiteAddressOutputFormGroup() {
		return new FormGroup<UpdateSiteAddressOutputFormProperties>({
			AddressType: new FormControl<AddressType | null | undefined>(undefined),
		});

	}

	export interface UpdateSiteRackPhysicalPropertiesOutput {

		/** Information about a site. */
		Site?: Site;
	}
	export interface UpdateSiteRackPhysicalPropertiesOutputFormProperties {
	}
	export function CreateUpdateSiteRackPhysicalPropertiesOutputFormGroup() {
		return new FormGroup<UpdateSiteRackPhysicalPropertiesOutputFormProperties>({
		});

	}

	export interface CancelOrderInput {
	}
	export interface CancelOrderInputFormProperties {
	}
	export function CreateCancelOrderInputFormGroup() {
		return new FormGroup<CancelOrderInputFormProperties>({
		});

	}

	export interface CreateOrderInput {

		/** Required */
		OutpostIdentifier: string;

		/** Required */
		LineItems: Array<LineItemRequest>;

		/** Required */
		PaymentOption: PaymentOption;
		PaymentTerm?: PaymentTerm;
	}
	export interface CreateOrderInputFormProperties {

		/** Required */
		OutpostIdentifier: FormControl<string | null | undefined>,

		/** Required */
		PaymentOption: FormControl<PaymentOption | null | undefined>,
		PaymentTerm: FormControl<PaymentTerm | null | undefined>,
	}
	export function CreateCreateOrderInputFormGroup() {
		return new FormGroup<CreateOrderInputFormProperties>({
			OutpostIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PaymentOption: new FormControl<PaymentOption | null | undefined>(undefined, [Validators.required]),
			PaymentTerm: new FormControl<PaymentTerm | null | undefined>(undefined),
		});

	}

	export interface CreateOutpostInput {

		/**
		 * The name of the Outpost.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Name: string;

		/**
		 * The description of the Outpost.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/** Required */
		SiteId: string;

		/**
		 * The Availability Zone.
		 * Min length: 1
		 * Max length: 1000
		 */
		AvailabilityZone?: string | null;

		/**
		 * The ID of the Availability Zone.
		 * Min length: 1
		 * Max length: 255
		 */
		AvailabilityZoneId?: string | null;
		Tags?: TagMap;
		SupportedHardwareType?: SupportedHardwareType;
	}
	export interface CreateOutpostInputFormProperties {

		/**
		 * The name of the Outpost.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the Outpost.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/** Required */
		SiteId: FormControl<string | null | undefined>,

		/**
		 * The Availability Zone.
		 * Min length: 1
		 * Max length: 1000
		 */
		AvailabilityZone: FormControl<string | null | undefined>,

		/**
		 * The ID of the Availability Zone.
		 * Min length: 1
		 * Max length: 255
		 */
		AvailabilityZoneId: FormControl<string | null | undefined>,
		SupportedHardwareType: FormControl<SupportedHardwareType | null | undefined>,
	}
	export function CreateCreateOutpostInputFormGroup() {
		return new FormGroup<CreateOutpostInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\S ]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^[\S ]*$')]),
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^([a-zA-Z]+-){1,3}([a-zA-Z]+)?(\d+[a-zA-Z]?)?$')]),
			AvailabilityZoneId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+\d-[a-zA-Z]+\d$')]),
			SupportedHardwareType: new FormControl<SupportedHardwareType | null | undefined>(undefined),
		});

	}

	export interface CreateSiteInput {

		/**
		 * The name of the site.
		 * Required
		 * Min length: 1
		 * Max length: 1000
		 */
		Name: string;

		/**
		 * The description of the site.
		 * Min length: 1
		 * Max length: 1001
		 */
		Description?: string | null;
		Notes?: string;
		Tags?: TagMap;
		OperatingAddress?: Address;
		ShippingAddress?: Address;
		RackPhysicalProperties?: RackPhysicalProperties;
	}
	export interface CreateSiteInputFormProperties {

		/**
		 * The name of the site.
		 * Required
		 * Min length: 1
		 * Max length: 1000
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the site.
		 * Min length: 1
		 * Max length: 1001
		 */
		Description: FormControl<string | null | undefined>,
		Notes: FormControl<string | null | undefined>,
	}
	export function CreateCreateSiteInputFormGroup() {
		return new FormGroup<CreateSiteInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[\S ]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1001), Validators.pattern('^[\S ]+$')]),
			Notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteOutpostInput {
	}
	export interface DeleteOutpostInputFormProperties {
	}
	export function CreateDeleteOutpostInputFormGroup() {
		return new FormGroup<DeleteOutpostInputFormProperties>({
		});

	}

	export interface DeleteSiteInput {
	}
	export interface DeleteSiteInputFormProperties {
	}
	export function CreateDeleteSiteInputFormGroup() {
		return new FormGroup<DeleteSiteInputFormProperties>({
		});

	}

	export interface GetCatalogItemInput {
	}
	export interface GetCatalogItemInputFormProperties {
	}
	export function CreateGetCatalogItemInputFormGroup() {
		return new FormGroup<GetCatalogItemInputFormProperties>({
		});

	}

	export interface GetConnectionRequest {
	}
	export interface GetConnectionRequestFormProperties {
	}
	export function CreateGetConnectionRequestFormGroup() {
		return new FormGroup<GetConnectionRequestFormProperties>({
		});

	}

	export interface GetOrderInput {
	}
	export interface GetOrderInputFormProperties {
	}
	export function CreateGetOrderInputFormGroup() {
		return new FormGroup<GetOrderInputFormProperties>({
		});

	}

	export interface GetOutpostInput {
	}
	export interface GetOutpostInputFormProperties {
	}
	export function CreateGetOutpostInputFormGroup() {
		return new FormGroup<GetOutpostInputFormProperties>({
		});

	}

	export interface GetOutpostInstanceTypesInput {
	}
	export interface GetOutpostInstanceTypesInputFormProperties {
	}
	export function CreateGetOutpostInstanceTypesInputFormGroup() {
		return new FormGroup<GetOutpostInstanceTypesInputFormProperties>({
		});

	}

	export interface GetSiteAddressInput {
	}
	export interface GetSiteAddressInputFormProperties {
	}
	export function CreateGetSiteAddressInputFormGroup() {
		return new FormGroup<GetSiteAddressInputFormProperties>({
		});

	}

	export interface GetSiteInput {
	}
	export interface GetSiteInputFormProperties {
	}
	export function CreateGetSiteInputFormGroup() {
		return new FormGroup<GetSiteInputFormProperties>({
		});

	}

	export interface ListAssetsInput {
	}
	export interface ListAssetsInputFormProperties {
	}
	export function CreateListAssetsInputFormGroup() {
		return new FormGroup<ListAssetsInputFormProperties>({
		});

	}

	export interface ListCatalogItemsInput {
	}
	export interface ListCatalogItemsInputFormProperties {
	}
	export function CreateListCatalogItemsInputFormGroup() {
		return new FormGroup<ListCatalogItemsInputFormProperties>({
		});

	}

	export interface ListOrdersInput {
	}
	export interface ListOrdersInputFormProperties {
	}
	export function CreateListOrdersInputFormGroup() {
		return new FormGroup<ListOrdersInputFormProperties>({
		});

	}

	export interface ListOutpostsInput {
	}
	export interface ListOutpostsInputFormProperties {
	}
	export function CreateListOutpostsInputFormGroup() {
		return new FormGroup<ListOutpostsInputFormProperties>({
		});

	}

	export interface ListSitesInput {
	}
	export interface ListSitesInputFormProperties {
	}
	export function CreateListSitesInputFormGroup() {
		return new FormGroup<ListSitesInputFormProperties>({
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

	export interface StartConnectionRequest {

		/** Required */
		DeviceSerialNumber: string;

		/** Required */
		AssetId: string;

		/** Required */
		ClientPublicKey: string;

		/** Required */
		NetworkInterfaceDeviceIndex: number;
	}
	export interface StartConnectionRequestFormProperties {

		/** Required */
		DeviceSerialNumber: FormControl<string | null | undefined>,

		/** Required */
		AssetId: FormControl<string | null | undefined>,

		/** Required */
		ClientPublicKey: FormControl<string | null | undefined>,

		/** Required */
		NetworkInterfaceDeviceIndex: FormControl<number | null | undefined>,
	}
	export function CreateStartConnectionRequestFormGroup() {
		return new FormGroup<StartConnectionRequestFormProperties>({
			DeviceSerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AssetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientPublicKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkInterfaceDeviceIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateOutpostInput {

		/**
		 * The name of the Outpost.
		 * Min length: 1
		 * Max length: 255
		 */
		Name?: string | null;

		/**
		 * The description of the Outpost.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;
		SupportedHardwareType?: SupportedHardwareType;
	}
	export interface UpdateOutpostInputFormProperties {

		/**
		 * The name of the Outpost.
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the Outpost.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,
		SupportedHardwareType: FormControl<SupportedHardwareType | null | undefined>,
	}
	export function CreateUpdateOutpostInputFormGroup() {
		return new FormGroup<UpdateOutpostInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\S ]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^[\S ]*$')]),
			SupportedHardwareType: new FormControl<SupportedHardwareType | null | undefined>(undefined),
		});

	}

	export interface UpdateSiteAddressInput {

		/** Required */
		AddressType: AddressType;

		/** Required */
		Address: Address;
	}
	export interface UpdateSiteAddressInputFormProperties {

		/** Required */
		AddressType: FormControl<AddressType | null | undefined>,
	}
	export function CreateUpdateSiteAddressInputFormGroup() {
		return new FormGroup<UpdateSiteAddressInputFormProperties>({
			AddressType: new FormControl<AddressType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSiteInput {

		/**
		 * The name of the site.
		 * Min length: 1
		 * Max length: 1000
		 */
		Name?: string | null;

		/**
		 * The description of the site.
		 * Min length: 1
		 * Max length: 1001
		 */
		Description?: string | null;
		Notes?: string;
	}
	export interface UpdateSiteInputFormProperties {

		/**
		 * The name of the site.
		 * Min length: 1
		 * Max length: 1000
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the site.
		 * Min length: 1
		 * Max length: 1001
		 */
		Description: FormControl<string | null | undefined>,
		Notes: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSiteInputFormGroup() {
		return new FormGroup<UpdateSiteInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[\S ]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1001), Validators.pattern('^[\S ]+$')]),
			Notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSiteRackPhysicalPropertiesInput {
		PowerDrawKva?: PowerDrawKva;
		PowerPhase?: PowerPhase;
		PowerConnector?: PowerConnector;
		PowerFeedDrop?: PowerFeedDrop;
		UplinkGbps?: UplinkGbps;
		UplinkCount?: UplinkCount;
		FiberOpticCableType?: FiberOpticCableType;
		OpticalStandard?: OpticalStandard;
		MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs;
	}
	export interface UpdateSiteRackPhysicalPropertiesInputFormProperties {
		PowerDrawKva: FormControl<PowerDrawKva | null | undefined>,
		PowerPhase: FormControl<PowerPhase | null | undefined>,
		PowerConnector: FormControl<PowerConnector | null | undefined>,
		PowerFeedDrop: FormControl<PowerFeedDrop | null | undefined>,
		UplinkGbps: FormControl<UplinkGbps | null | undefined>,
		UplinkCount: FormControl<UplinkCount | null | undefined>,
		FiberOpticCableType: FormControl<FiberOpticCableType | null | undefined>,
		OpticalStandard: FormControl<OpticalStandard | null | undefined>,
		MaximumSupportedWeightLbs: FormControl<MaximumSupportedWeightLbs | null | undefined>,
	}
	export function CreateUpdateSiteRackPhysicalPropertiesInputFormGroup() {
		return new FormGroup<UpdateSiteRackPhysicalPropertiesInputFormProperties>({
			PowerDrawKva: new FormControl<PowerDrawKva | null | undefined>(undefined),
			PowerPhase: new FormControl<PowerPhase | null | undefined>(undefined),
			PowerConnector: new FormControl<PowerConnector | null | undefined>(undefined),
			PowerFeedDrop: new FormControl<PowerFeedDrop | null | undefined>(undefined),
			UplinkGbps: new FormControl<UplinkGbps | null | undefined>(undefined),
			UplinkCount: new FormControl<UplinkCount | null | undefined>(undefined),
			FiberOpticCableType: new FormControl<FiberOpticCableType | null | undefined>(undefined),
			OpticalStandard: new FormControl<OpticalStandard | null | undefined>(undefined),
			MaximumSupportedWeightLbs: new FormControl<MaximumSupportedWeightLbs | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancels the specified order for an Outpost.
		 * Post orders/{OrderId}/cancel
		 * @param {string} OrderId  The ID of the order. 
		 *     Min length: 1    Max length: 20
		 * @return {CancelOrderOutput} Success
		 */
		CancelOrder(OrderId: string): Observable<CancelOrderOutput> {
			return this.http.post<CancelOrderOutput>(this.baseUri + 'orders/' + (OrderId == null ? '' : encodeURIComponent(OrderId)) + '/cancel', null, {});
		}

		/**
		 * Creates an order for an Outpost.
		 * Post orders
		 * @return {CreateOrderOutput} Success
		 */
		CreateOrder(requestBody: CreateOrderPostBody): Observable<CreateOrderOutput> {
			return this.http.post<CreateOrderOutput>(this.baseUri + 'orders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>
		 * Post outposts
		 * @return {CreateOutpostOutput} Success
		 */
		CreateOutpost(requestBody: CreateOutpostPostBody): Observable<CreateOutpostOutput> {
			return this.http.post<CreateOutpostOutput>(this.baseUri + 'outposts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
		 * Get outposts
		 * @param {string} NextToken Min length: 1
		 *     Max length: 2048
		 * @param {number} MaxResults Minimum: 1
		 *     Maximum: 1000
		 * @param {Array<string>} LifeCycleStatusFilter Filters the results by the lifecycle status.
		 *     Minimum items: 1    Maximum items: 5
		 * @param {Array<string>} AvailabilityZoneFilter Filters the results by Availability Zone (for example, <code>us-east-1a</code>).
		 *     Minimum items: 1    Maximum items: 5
		 * @param {Array<string>} AvailabilityZoneIdFilter Filters the results by AZ ID (for example, <code>use1-az1</code>).
		 *     Minimum items: 1    Maximum items: 5
		 * @return {ListOutpostsOutput} Success
		 */
		ListOutposts(NextToken: string | null | undefined, MaxResults: number | null | undefined, LifeCycleStatusFilter: Array<string> | null | undefined, AvailabilityZoneFilter: Array<string> | null | undefined, AvailabilityZoneIdFilter: Array<string> | null | undefined): Observable<ListOutpostsOutput> {
			return this.http.get<ListOutpostsOutput>(this.baseUri + 'outposts?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&' + LifeCycleStatusFilter?.map(z => `LifeCycleStatusFilter=${encodeURIComponent(z)}`).join('&') + '&' + AvailabilityZoneFilter?.map(z => `AvailabilityZoneFilter=${encodeURIComponent(z)}`).join('&') + '&' + AvailabilityZoneIdFilter?.map(z => `AvailabilityZoneIdFilter=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Creates a site for an Outpost.
		 * Post sites
		 * @return {CreateSiteOutput} Success
		 */
		CreateSite(requestBody: CreateSitePostBody): Observable<CreateSiteOutput> {
			return this.http.post<CreateSiteOutput>(this.baseUri + 'sites', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
		 * Get sites
		 * @param {string} NextToken Min length: 1
		 *     Max length: 2048
		 * @param {number} MaxResults Minimum: 1
		 *     Maximum: 1000
		 * @param {Array<string>} OperatingAddressCountryCodeFilter Filters the results by country code.
		 * @param {Array<string>} OperatingAddressStateOrRegionFilter Filters the results by state or region.
		 * @param {Array<string>} OperatingAddressCityFilter Filters the results by city.
		 * @return {ListSitesOutput} Success
		 */
		ListSites(NextToken: string | null | undefined, MaxResults: number | null | undefined, OperatingAddressCountryCodeFilter: Array<string> | null | undefined, OperatingAddressStateOrRegionFilter: Array<string> | null | undefined, OperatingAddressCityFilter: Array<string> | null | undefined): Observable<ListSitesOutput> {
			return this.http.get<ListSitesOutput>(this.baseUri + 'sites?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&' + OperatingAddressCountryCodeFilter?.map(z => `OperatingAddressCountryCodeFilter=${encodeURIComponent(z)}`).join('&') + '&' + OperatingAddressStateOrRegionFilter?.map(z => `OperatingAddressStateOrRegionFilter=${encodeURIComponent(z)}`).join('&') + '&' + OperatingAddressCityFilter?.map(z => `OperatingAddressCityFilter=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Deletes the specified Outpost.
		 * Delete outposts/{OutpostId}
		 * @param {string} OutpostId  The ID or the Amazon Resource Name (ARN) of the Outpost. 
		 *     Min length: 1    Max length: 180
		 * @return {DeleteOutpostOutput} Success
		 */
		DeleteOutpost(OutpostId: string): Observable<DeleteOutpostOutput> {
			return this.http.delete<DeleteOutpostOutput>(this.baseUri + 'outposts/' + (OutpostId == null ? '' : encodeURIComponent(OutpostId)), {});
		}

		/**
		 * Gets information about the specified Outpost.
		 * Get outposts/{OutpostId}
		 * @param {string} OutpostId  The ID or the Amazon Resource Name (ARN) of the Outpost. 
		 *     Min length: 1    Max length: 180
		 * @return {GetOutpostOutput} Success
		 */
		GetOutpost(OutpostId: string): Observable<GetOutpostOutput> {
			return this.http.get<GetOutpostOutput>(this.baseUri + 'outposts/' + (OutpostId == null ? '' : encodeURIComponent(OutpostId)), {});
		}

		/**
		 * Updates an Outpost.
		 * Patch outposts/{OutpostId}
		 * @param {string} OutpostId  The ID or the Amazon Resource Name (ARN) of the Outpost. 
		 *     Min length: 1    Max length: 180
		 * @return {UpdateOutpostOutput} Success
		 */
		UpdateOutpost(OutpostId: string, requestBody: UpdateOutpostPatchBody): Observable<UpdateOutpostOutput> {
			return this.http.patch<UpdateOutpostOutput>(this.baseUri + 'outposts/' + (OutpostId == null ? '' : encodeURIComponent(OutpostId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified site.
		 * Delete sites/{SiteId}
		 * @param {string} SiteId  The ID or the Amazon Resource Name (ARN) of the site. 
		 *     Min length: 1    Max length: 255
		 * @return {DeleteSiteOutput} Success
		 */
		DeleteSite(SiteId: string): Observable<DeleteSiteOutput> {
			return this.http.delete<DeleteSiteOutput>(this.baseUri + 'sites/' + (SiteId == null ? '' : encodeURIComponent(SiteId)), {});
		}

		/**
		 * Gets information about the specified Outpost site.
		 * Get sites/{SiteId}
		 * @param {string} SiteId  The ID or the Amazon Resource Name (ARN) of the site. 
		 *     Min length: 1    Max length: 255
		 * @return {GetSiteOutput} Success
		 */
		GetSite(SiteId: string): Observable<GetSiteOutput> {
			return this.http.get<GetSiteOutput>(this.baseUri + 'sites/' + (SiteId == null ? '' : encodeURIComponent(SiteId)), {});
		}

		/**
		 * Updates the specified site.
		 * Patch sites/{SiteId}
		 * @param {string} SiteId  The ID or the Amazon Resource Name (ARN) of the site. 
		 *     Min length: 1    Max length: 255
		 * @return {UpdateSiteOutput} Success
		 */
		UpdateSite(SiteId: string, requestBody: UpdateSitePatchBody): Observable<UpdateSiteOutput> {
			return this.http.patch<UpdateSiteOutput>(this.baseUri + 'sites/' + (SiteId == null ? '' : encodeURIComponent(SiteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified catalog item.
		 * Get catalog/item/{CatalogItemId}
		 * @param {string} CatalogItemId The ID of the catalog item.
		 *     Min length: 1    Max length: 10
		 * @return {GetCatalogItemOutput} Success
		 */
		GetCatalogItem(CatalogItemId: string): Observable<GetCatalogItemOutput> {
			return this.http.get<GetCatalogItemOutput>(this.baseUri + 'catalog/item/' + (CatalogItemId == null ? '' : encodeURIComponent(CatalogItemId)), {});
		}

		/**
		 * <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
		 * Get connections/{ConnectionId}
		 * @param {string} ConnectionId  The ID of the connection. 
		 *     Min length: 1    Max length: 1024
		 * @return {GetConnectionResponse} Success
		 */
		GetConnection(ConnectionId: string): Observable<GetConnectionResponse> {
			return this.http.get<GetConnectionResponse>(this.baseUri + 'connections/' + (ConnectionId == null ? '' : encodeURIComponent(ConnectionId)), {});
		}

		/**
		 * Gets information about the specified order.
		 * Get orders/{OrderId}
		 * @param {string} OrderId The ID of the order.
		 *     Min length: 1    Max length: 20
		 * @return {GetOrderOutput} Success
		 */
		GetOrder(OrderId: string): Observable<GetOrderOutput> {
			return this.http.get<GetOrderOutput>(this.baseUri + 'orders/' + (OrderId == null ? '' : encodeURIComponent(OrderId)), {});
		}

		/**
		 * Gets the instance types for the specified Outpost.
		 * Get outposts/{OutpostId}/instanceTypes
		 * @param {string} OutpostId  The ID or the Amazon Resource Name (ARN) of the Outpost. 
		 *     Min length: 1    Max length: 180
		 * @param {string} NextToken Min length: 1
		 *     Max length: 2048
		 * @param {number} MaxResults Minimum: 1
		 *     Maximum: 1000
		 * @return {GetOutpostInstanceTypesOutput} Success
		 */
		GetOutpostInstanceTypes(OutpostId: string, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<GetOutpostInstanceTypesOutput> {
			return this.http.get<GetOutpostInstanceTypesOutput>(this.baseUri + 'outposts/' + (OutpostId == null ? '' : encodeURIComponent(OutpostId)) + '/instanceTypes&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Gets the site address of the specified site.
		 * Get sites/{SiteId}/address#AddressType
		 * @param {string} SiteId  The ID or the Amazon Resource Name (ARN) of the site. 
		 *     Min length: 1    Max length: 255
		 * @param {AddressType} AddressType The type of the address you request. 
		 * @return {GetSiteAddressOutput} Success
		 */
		GetSiteAddress(SiteId: string, AddressType: AddressType): Observable<GetSiteAddressOutput> {
			return this.http.get<GetSiteAddressOutput>(this.baseUri + 'sites/' + (SiteId == null ? '' : encodeURIComponent(SiteId)) + '/address#AddressType&AddressType=' + AddressType, {});
		}

		/**
		 * <p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
		 * Get outposts/{OutpostId}/assets
		 * @param {string} OutpostId  The ID or the Amazon Resource Name (ARN) of the Outpost. 
		 *     Min length: 1    Max length: 180
		 * @param {Array<string>} HostIdFilter Filters the results by the host ID of a Dedicated Host.
		 * @param {number} MaxResults Minimum: 1
		 *     Maximum: 1000
		 * @param {string} NextToken Min length: 1
		 *     Max length: 2048
		 * @param {Array<AssetState>} StatusFilter Filters the results by state.
		 *     Minimum items: 1    Maximum items: 3
		 * @return {ListAssetsOutput} Success
		 */
		ListAssets(OutpostId: string, HostIdFilter: Array<string> | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined, StatusFilter: Array<AssetState> | null | undefined): Observable<ListAssetsOutput> {
			return this.http.get<ListAssetsOutput>(this.baseUri + 'outposts/' + (OutpostId == null ? '' : encodeURIComponent(OutpostId)) + '/assets&' + HostIdFilter?.map(z => `HostIdFilter=${encodeURIComponent(z)}`).join('&') + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&' + StatusFilter?.map(z => `StatusFilter=${z}`).join('&'), {});
		}

		/**
		 * <p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
		 * Get catalog/items
		 * @param {string} NextToken Min length: 1
		 *     Max length: 2048
		 * @param {number} MaxResults Minimum: 1
		 *     Maximum: 1000
		 * @param {Array<CatalogItemClass>} ItemClassFilter Filters the results by item class.
		 * @param {Array<SupportedStorageEnum>} SupportedStorageFilter Filters the results by storage option.
		 * @param {Array<string>} EC2FamilyFilter Filters the results by EC2 family (for example, M5).
		 * @return {ListCatalogItemsOutput} Success
		 */
		ListCatalogItems(NextToken: string | null | undefined, MaxResults: number | null | undefined, ItemClassFilter: Array<CatalogItemClass> | null | undefined, SupportedStorageFilter: Array<SupportedStorageEnum> | null | undefined, EC2FamilyFilter: Array<string> | null | undefined): Observable<ListCatalogItemsOutput> {
			return this.http.get<ListCatalogItemsOutput>(this.baseUri + 'catalog/items?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults + '&' + ItemClassFilter?.map(z => `ItemClassFilter=${z}`).join('&') + '&' + SupportedStorageFilter?.map(z => `SupportedStorageFilter=${z}`).join('&') + '&' + EC2FamilyFilter?.map(z => `EC2FamilyFilter=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Lists the Outpost orders for your Amazon Web Services account.
		 * Get list-orders
		 * @param {string} OutpostIdentifierFilter  The ID or the Amazon Resource Name (ARN) of the Outpost. 
		 *     Min length: 1    Max length: 180
		 * @param {string} NextToken Min length: 1
		 *     Max length: 2048
		 * @param {number} MaxResults Minimum: 1
		 *     Maximum: 1000
		 * @return {ListOrdersOutput} Success
		 */
		ListOrders(OutpostIdentifierFilter: string | null | undefined, NextToken: string | null | undefined, MaxResults: number | null | undefined): Observable<ListOrdersOutput> {
			return this.http.get<ListOrdersOutput>(this.baseUri + 'list-orders?OutpostIdentifierFilter=' + (OutpostIdentifierFilter == null ? '' : encodeURIComponent(OutpostIdentifierFilter)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&MaxResults=' + MaxResults, {});
		}

		/**
		 * Lists the tags for the specified resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource.
		 *     Max length: 1011
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Adds tags to the specified resource.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource.
		 *     Max length: 1011
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
		 * Post connections
		 * @return {StartConnectionResponse} Success
		 */
		StartConnection(requestBody: StartConnectionPostBody): Observable<StartConnectionResponse> {
			return this.http.post<StartConnectionResponse>(this.baseUri + 'connections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from the specified resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource.
		 *     Max length: 1011
		 * @param {Array<string>} tagKeys The tag keys.
		 *     Minimum items: 1    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>
		 * Put sites/{SiteId}/address
		 * @param {string} SiteId  The ID or the Amazon Resource Name (ARN) of the site. 
		 *     Min length: 1    Max length: 255
		 * @return {UpdateSiteAddressOutput} Success
		 */
		UpdateSiteAddress(SiteId: string, requestBody: UpdateSiteAddressPutBody): Observable<UpdateSiteAddressOutput> {
			return this.http.put<UpdateSiteAddressOutput>(this.baseUri + 'sites/' + (SiteId == null ? '' : encodeURIComponent(SiteId)) + '/address', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>
		 * Patch sites/{SiteId}/rackPhysicalProperties
		 * @param {string} SiteId  The ID or the Amazon Resource Name (ARN) of the site. 
		 *     Min length: 1    Max length: 255
		 * @return {UpdateSiteRackPhysicalPropertiesOutput} Success
		 */
		UpdateSiteRackPhysicalProperties(SiteId: string, requestBody: UpdateSiteRackPhysicalPropertiesPatchBody): Observable<UpdateSiteRackPhysicalPropertiesOutput> {
			return this.http.patch<UpdateSiteRackPhysicalPropertiesOutput>(this.baseUri + 'sites/' + (SiteId == null ? '' : encodeURIComponent(SiteId)) + '/rackPhysicalProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateOrderPostBody {

		/**
		 * The ID or the Amazon Resource Name (ARN) of the Outpost.
		 * Required
		 * Min length: 1
		 * Max length: 180
		 */
		OutpostIdentifier: string;

		/**
		 * The line items that make up the order.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		LineItems: Array<LineItemRequest>;

		/**
		 * The payment option.
		 * Required
		 */
		PaymentOption: PaymentOption;

		/** The payment terms. */
		PaymentTerm?: PaymentTerm | null;
	}
	export interface CreateOrderPostBodyFormProperties {

		/**
		 * The ID or the Amazon Resource Name (ARN) of the Outpost.
		 * Required
		 * Min length: 1
		 * Max length: 180
		 */
		OutpostIdentifier: FormControl<string | null | undefined>,

		/**
		 * The payment option.
		 * Required
		 */
		PaymentOption: FormControl<PaymentOption | null | undefined>,

		/** The payment terms. */
		PaymentTerm: FormControl<PaymentTerm | null | undefined>,
	}
	export function CreateCreateOrderPostBodyFormGroup() {
		return new FormGroup<CreateOrderPostBodyFormProperties>({
			OutpostIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(180), Validators.pattern('^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:outpost/)?op-[a-f0-9]{17}$')]),
			PaymentOption: new FormControl<PaymentOption | null | undefined>(undefined, [Validators.required]),
			PaymentTerm: new FormControl<PaymentTerm | null | undefined>(undefined),
		});

	}

	export interface CreateOutpostPostBody {

		/**
		 * The name of the Outpost.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Name: string;

		/**
		 * The description of the Outpost.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/**
		 * The ID of the site.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		SiteId: string;

		/**
		 * The Availability Zone.
		 * Min length: 1
		 * Max length: 1000
		 */
		AvailabilityZone?: string | null;

		/**
		 * The ID of the Availability Zone.
		 * Min length: 1
		 * Max length: 255
		 */
		AvailabilityZoneId?: string | null;

		/** The tags to apply to the Outpost. */
		Tags?: {[id: string]: string };

		/** The type of hardware for this Outpost. */
		SupportedHardwareType?: SupportedHardwareType | null;
	}
	export interface CreateOutpostPostBodyFormProperties {

		/**
		 * The name of the Outpost.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the Outpost.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The ID of the site.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		SiteId: FormControl<string | null | undefined>,

		/**
		 * The Availability Zone.
		 * Min length: 1
		 * Max length: 1000
		 */
		AvailabilityZone: FormControl<string | null | undefined>,

		/**
		 * The ID of the Availability Zone.
		 * Min length: 1
		 * Max length: 255
		 */
		AvailabilityZoneId: FormControl<string | null | undefined>,

		/** The tags to apply to the Outpost. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of hardware for this Outpost. */
		SupportedHardwareType: FormControl<SupportedHardwareType | null | undefined>,
	}
	export function CreateCreateOutpostPostBodyFormGroup() {
		return new FormGroup<CreateOutpostPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\S ]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^[\S ]*$')]),
			SiteId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^(arn:aws([a-z-]+)?:outposts:[a-z\d-]+:\d{12}:site/)?(os-[a-f0-9]{17})$')]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^([a-zA-Z]+-){1,3}([a-zA-Z]+)?(\d+[a-zA-Z]?)?$')]),
			AvailabilityZoneId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+\d-[a-zA-Z]+\d$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			SupportedHardwareType: new FormControl<SupportedHardwareType | null | undefined>(undefined),
		});

	}

	export interface CreateSitePostBody {

		/**
		 * The name of the site.
		 * Required
		 * Min length: 1
		 * Max length: 1000
		 */
		Name: string;

		/**
		 * The description of the site.
		 * Min length: 1
		 * Max length: 1001
		 */
		Description?: string | null;

		/**
		 * Additional information that you provide about site access requirements, electrician scheduling, personal protective equipment, or regulation of equipment materials that could affect your installation process.
		 * Min length: 1
		 * Max length: 2000
		 */
		Notes?: string | null;

		/** The tags to apply to a site. */
		Tags?: {[id: string]: string };

		/** Information about an address. */
		OperatingAddress?: CreateSitePostBodyOperatingAddress;

		/** Information about an address. */
		ShippingAddress?: CreateSitePostBodyShippingAddress;

		/** Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. */
		RackPhysicalProperties?: CreateSitePostBodyRackPhysicalProperties;
	}
	export interface CreateSitePostBodyFormProperties {

		/**
		 * The name of the site.
		 * Required
		 * Min length: 1
		 * Max length: 1000
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the site.
		 * Min length: 1
		 * Max length: 1001
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Additional information that you provide about site access requirements, electrician scheduling, personal protective equipment, or regulation of equipment materials that could affect your installation process.
		 * Min length: 1
		 * Max length: 2000
		 */
		Notes: FormControl<string | null | undefined>,

		/** The tags to apply to a site. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSitePostBodyFormGroup() {
		return new FormGroup<CreateSitePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[\S ]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1001), Validators.pattern('^[\S ]+$')]),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000), Validators.pattern('^[\S \n]+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSitePostBodyOperatingAddress {
		ContactName?: string;
		ContactPhoneNumber?: string;
		AddressLine1?: string;
		AddressLine2?: string;
		AddressLine3?: string;
		City?: string;
		StateOrRegion?: string;
		DistrictOrCounty?: string;
		PostalCode?: string;
		CountryCode?: string;
		Municipality?: string;
	}
	export interface CreateSitePostBodyOperatingAddressFormProperties {
		ContactName: FormControl<string | null | undefined>,
		ContactPhoneNumber: FormControl<string | null | undefined>,
		AddressLine1: FormControl<string | null | undefined>,
		AddressLine2: FormControl<string | null | undefined>,
		AddressLine3: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		StateOrRegion: FormControl<string | null | undefined>,
		DistrictOrCounty: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
		CountryCode: FormControl<string | null | undefined>,
		Municipality: FormControl<string | null | undefined>,
	}
	export function CreateCreateSitePostBodyOperatingAddressFormGroup() {
		return new FormGroup<CreateSitePostBodyOperatingAddressFormProperties>({
			ContactName: new FormControl<string | null | undefined>(undefined),
			ContactPhoneNumber: new FormControl<string | null | undefined>(undefined),
			AddressLine1: new FormControl<string | null | undefined>(undefined),
			AddressLine2: new FormControl<string | null | undefined>(undefined),
			AddressLine3: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			StateOrRegion: new FormControl<string | null | undefined>(undefined),
			DistrictOrCounty: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
			CountryCode: new FormControl<string | null | undefined>(undefined),
			Municipality: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSitePostBodyShippingAddress {
		ContactName?: string;
		ContactPhoneNumber?: string;
		AddressLine1?: string;
		AddressLine2?: string;
		AddressLine3?: string;
		City?: string;
		StateOrRegion?: string;
		DistrictOrCounty?: string;
		PostalCode?: string;
		CountryCode?: string;
		Municipality?: string;
	}
	export interface CreateSitePostBodyShippingAddressFormProperties {
		ContactName: FormControl<string | null | undefined>,
		ContactPhoneNumber: FormControl<string | null | undefined>,
		AddressLine1: FormControl<string | null | undefined>,
		AddressLine2: FormControl<string | null | undefined>,
		AddressLine3: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		StateOrRegion: FormControl<string | null | undefined>,
		DistrictOrCounty: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
		CountryCode: FormControl<string | null | undefined>,
		Municipality: FormControl<string | null | undefined>,
	}
	export function CreateCreateSitePostBodyShippingAddressFormGroup() {
		return new FormGroup<CreateSitePostBodyShippingAddressFormProperties>({
			ContactName: new FormControl<string | null | undefined>(undefined),
			ContactPhoneNumber: new FormControl<string | null | undefined>(undefined),
			AddressLine1: new FormControl<string | null | undefined>(undefined),
			AddressLine2: new FormControl<string | null | undefined>(undefined),
			AddressLine3: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			StateOrRegion: new FormControl<string | null | undefined>(undefined),
			DistrictOrCounty: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
			CountryCode: new FormControl<string | null | undefined>(undefined),
			Municipality: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSitePostBodyRackPhysicalProperties {
		PowerDrawKva?: PowerDrawKva;
		PowerPhase?: PowerPhase;
		PowerConnector?: PowerConnector;
		PowerFeedDrop?: PowerFeedDrop;
		UplinkGbps?: UplinkGbps;
		UplinkCount?: UplinkCount;
		FiberOpticCableType?: FiberOpticCableType;
		OpticalStandard?: OpticalStandard;
		MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs;
	}
	export interface CreateSitePostBodyRackPhysicalPropertiesFormProperties {
		PowerDrawKva: FormControl<PowerDrawKva | null | undefined>,
		PowerPhase: FormControl<PowerPhase | null | undefined>,
		PowerConnector: FormControl<PowerConnector | null | undefined>,
		PowerFeedDrop: FormControl<PowerFeedDrop | null | undefined>,
		UplinkGbps: FormControl<UplinkGbps | null | undefined>,
		UplinkCount: FormControl<UplinkCount | null | undefined>,
		FiberOpticCableType: FormControl<FiberOpticCableType | null | undefined>,
		OpticalStandard: FormControl<OpticalStandard | null | undefined>,
		MaximumSupportedWeightLbs: FormControl<MaximumSupportedWeightLbs | null | undefined>,
	}
	export function CreateCreateSitePostBodyRackPhysicalPropertiesFormGroup() {
		return new FormGroup<CreateSitePostBodyRackPhysicalPropertiesFormProperties>({
			PowerDrawKva: new FormControl<PowerDrawKva | null | undefined>(undefined),
			PowerPhase: new FormControl<PowerPhase | null | undefined>(undefined),
			PowerConnector: new FormControl<PowerConnector | null | undefined>(undefined),
			PowerFeedDrop: new FormControl<PowerFeedDrop | null | undefined>(undefined),
			UplinkGbps: new FormControl<UplinkGbps | null | undefined>(undefined),
			UplinkCount: new FormControl<UplinkCount | null | undefined>(undefined),
			FiberOpticCableType: new FormControl<FiberOpticCableType | null | undefined>(undefined),
			OpticalStandard: new FormControl<OpticalStandard | null | undefined>(undefined),
			MaximumSupportedWeightLbs: new FormControl<MaximumSupportedWeightLbs | null | undefined>(undefined),
		});

	}

	export interface UpdateOutpostPatchBody {

		/**
		 * The name of the Outpost.
		 * Min length: 1
		 * Max length: 255
		 */
		Name?: string | null;

		/**
		 * The description of the Outpost.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description?: string | null;

		/** The type of hardware for this Outpost. */
		SupportedHardwareType?: SupportedHardwareType | null;
	}
	export interface UpdateOutpostPatchBodyFormProperties {

		/**
		 * The name of the Outpost.
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the Outpost.
		 * Min length: 0
		 * Max length: 1000
		 */
		Description: FormControl<string | null | undefined>,

		/** The type of hardware for this Outpost. */
		SupportedHardwareType: FormControl<SupportedHardwareType | null | undefined>,
	}
	export function CreateUpdateOutpostPatchBodyFormGroup() {
		return new FormGroup<UpdateOutpostPatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[\S ]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000), Validators.pattern('^[\S ]*$')]),
			SupportedHardwareType: new FormControl<SupportedHardwareType | null | undefined>(undefined),
		});

	}

	export interface UpdateSitePatchBody {

		/**
		 * The name of the site.
		 * Min length: 1
		 * Max length: 1000
		 */
		Name?: string | null;

		/**
		 * The description of the site.
		 * Min length: 1
		 * Max length: 1001
		 */
		Description?: string | null;

		/**
		 * Notes about a site.
		 * Min length: 1
		 * Max length: 2000
		 */
		Notes?: string | null;
	}
	export interface UpdateSitePatchBodyFormProperties {

		/**
		 * The name of the site.
		 * Min length: 1
		 * Max length: 1000
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the site.
		 * Min length: 1
		 * Max length: 1001
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Notes about a site.
		 * Min length: 1
		 * Max length: 2000
		 */
		Notes: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSitePatchBodyFormGroup() {
		return new FormGroup<UpdateSitePatchBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000), Validators.pattern('^[\S ]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1001), Validators.pattern('^[\S ]+$')]),
			Notes: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000), Validators.pattern('^[\S \n]+$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartConnectionPostBody {

		/**
		 * The serial number of the dongle.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		DeviceSerialNumber: string;

		/**
		 * The ID of the Outpost server.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		AssetId: string;

		/**
		 * The public key of the client.
		 * Required
		 * Min length: 44
		 * Max length: 44
		 */
		ClientPublicKey: string;

		/**
		 * The device index of the network interface on the Outpost server.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		NetworkInterfaceDeviceIndex: number;
	}
	export interface StartConnectionPostBodyFormProperties {

		/**
		 * The serial number of the dongle.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		DeviceSerialNumber: FormControl<string | null | undefined>,

		/**
		 * The ID of the Outpost server.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		AssetId: FormControl<string | null | undefined>,

		/**
		 * The public key of the client.
		 * Required
		 * Min length: 44
		 * Max length: 44
		 */
		ClientPublicKey: FormControl<string | null | undefined>,

		/**
		 * The device index of the network interface on the Outpost server.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		NetworkInterfaceDeviceIndex: FormControl<number | null | undefined>,
	}
	export function CreateStartConnectionPostBodyFormGroup() {
		return new FormGroup<StartConnectionPostBodyFormProperties>({
			DeviceSerialNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(\w+)$')]),
			AssetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^(\w+)$')]),
			ClientPublicKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(44), Validators.maxLength(44), Validators.pattern('^[a-zA-Z0-9/+]{43}=$')]),
			NetworkInterfaceDeviceIndex: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
		});

	}

	export interface UpdateSiteAddressPutBody {

		/**
		 * The type of the address.
		 * Required
		 */
		AddressType: AddressType;

		/**
		 * Information about an address.
		 * Required
		 */
		Address: UpdateSiteAddressPutBodyAddress;
	}
	export interface UpdateSiteAddressPutBodyFormProperties {

		/**
		 * The type of the address.
		 * Required
		 */
		AddressType: FormControl<AddressType | null | undefined>,
	}
	export function CreateUpdateSiteAddressPutBodyFormGroup() {
		return new FormGroup<UpdateSiteAddressPutBodyFormProperties>({
			AddressType: new FormControl<AddressType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSiteAddressPutBodyAddress {
		ContactName?: string;
		ContactPhoneNumber?: string;
		AddressLine1?: string;
		AddressLine2?: string;
		AddressLine3?: string;
		City?: string;
		StateOrRegion?: string;
		DistrictOrCounty?: string;
		PostalCode?: string;
		CountryCode?: string;
		Municipality?: string;
	}
	export interface UpdateSiteAddressPutBodyAddressFormProperties {
		ContactName: FormControl<string | null | undefined>,
		ContactPhoneNumber: FormControl<string | null | undefined>,
		AddressLine1: FormControl<string | null | undefined>,
		AddressLine2: FormControl<string | null | undefined>,
		AddressLine3: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		StateOrRegion: FormControl<string | null | undefined>,
		DistrictOrCounty: FormControl<string | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
		CountryCode: FormControl<string | null | undefined>,
		Municipality: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSiteAddressPutBodyAddressFormGroup() {
		return new FormGroup<UpdateSiteAddressPutBodyAddressFormProperties>({
			ContactName: new FormControl<string | null | undefined>(undefined),
			ContactPhoneNumber: new FormControl<string | null | undefined>(undefined),
			AddressLine1: new FormControl<string | null | undefined>(undefined),
			AddressLine2: new FormControl<string | null | undefined>(undefined),
			AddressLine3: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			StateOrRegion: new FormControl<string | null | undefined>(undefined),
			DistrictOrCounty: new FormControl<string | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
			CountryCode: new FormControl<string | null | undefined>(undefined),
			Municipality: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSiteRackPhysicalPropertiesPatchBody {

		/** The power draw, in kVA, available at the hardware placement position for the rack. */
		PowerDrawKva?: PowerDrawKva | null;

		/** <p>The power option that you can provide for hardware. </p> <ul> <li> <p>Single-phase AC feed: 200 V to 277 V, 50 Hz or 60 Hz</p> </li> <li> <p>Three-phase AC feed: 346 V to 480 V, 50 Hz or 60 Hz</p> </li> </ul> */
		PowerPhase?: PowerPhase | null;

		/** <p>The power connector that Amazon Web Services should plan to provide for connections to the hardware. Note the correlation between <code>PowerPhase</code> and <code>PowerConnector</code>. </p> <ul> <li> <p>Single-phase AC feed</p> <ul> <li> <p> <b>L6-30P</b> – (common in US); 30A; single phase</p> </li> <li> <p> <b>IEC309 (blue)</b> – P+N+E, 6hr; 32 A; single phase</p> </li> </ul> </li> <li> <p>Three-phase AC feed</p> <ul> <li> <p> <b>AH530P7W (red)</b> – 3P+N+E, 7hr; 30A; three phase</p> </li> <li> <p> <b>AH532P6W (red)</b> – 3P+N+E, 6hr; 32A; three phase</p> </li> </ul> </li> </ul> */
		PowerConnector?: PowerConnector | null;

		/** Indicates whether the power feed comes above or below the rack. */
		PowerFeedDrop?: PowerFeedDrop | null;

		/** The uplink speed the rack should support for the connection to the Region. */
		UplinkGbps?: UplinkGbps | null;

		/** <p>Racks come with two Outpost network devices. Depending on the supported uplink speed at the site, the Outpost network devices provide a variable number of uplinks. Specify the number of uplinks for each Outpost network device that you intend to use to connect the rack to your network. Note the correlation between <code>UplinkGbps</code> and <code>UplinkCount</code>. </p> <ul> <li> <p>1Gbps - Uplinks available: 1, 2, 4, 6, 8</p> </li> <li> <p>10Gbps - Uplinks available: 1, 2, 4, 8, 12, 16</p> </li> <li> <p>40 and 100 Gbps- Uplinks available: 1, 2, 4</p> </li> </ul> */
		UplinkCount?: UplinkCount | null;

		/** The type of fiber that you will use to attach the Outpost to your network. */
		FiberOpticCableType?: FiberOpticCableType | null;

		/** <p>The type of optical standard that you will use to attach the Outpost to your network. This field is dependent on uplink speed, fiber type, and distance to the upstream device. For more information about networking requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking">Network</a> in the Amazon Web Services Outposts User Guide. </p> <ul> <li> <p> <code>OPTIC_10GBASE_SR</code>: 10GBASE-SR</p> </li> <li> <p> <code>OPTIC_10GBASE_IR</code>: 10GBASE-IR</p> </li> <li> <p> <code>OPTIC_10GBASE_LR</code>: 10GBASE-LR</p> </li> <li> <p> <code>OPTIC_40GBASE_SR</code>: 40GBASE-SR</p> </li> <li> <p> <code>OPTIC_40GBASE_ESR</code>: 40GBASE-ESR</p> </li> <li> <p> <code>OPTIC_40GBASE_IR4_LR4L</code>: 40GBASE-IR (LR4L)</p> </li> <li> <p> <code>OPTIC_40GBASE_LR4</code>: 40GBASE-LR4</p> </li> <li> <p> <code>OPTIC_100GBASE_SR4</code>: 100GBASE-SR4</p> </li> <li> <p> <code>OPTIC_100GBASE_CWDM4</code>: 100GBASE-CWDM4</p> </li> <li> <p> <code>OPTIC_100GBASE_LR4</code>: 100GBASE-LR4</p> </li> <li> <p> <code>OPTIC_100G_PSM4_MSA</code>: 100G PSM4 MSA</p> </li> <li> <p> <code>OPTIC_1000BASE_LX</code>: 1000Base-LX</p> </li> <li> <p> <code>OPTIC_1000BASE_SX</code> : 1000Base-SX</p> </li> </ul> */
		OpticalStandard?: OpticalStandard | null;

		/** The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over 2000lbs. */
		MaximumSupportedWeightLbs?: MaximumSupportedWeightLbs | null;
	}
	export interface UpdateSiteRackPhysicalPropertiesPatchBodyFormProperties {

		/** The power draw, in kVA, available at the hardware placement position for the rack. */
		PowerDrawKva: FormControl<PowerDrawKva | null | undefined>,

		/** <p>The power option that you can provide for hardware. </p> <ul> <li> <p>Single-phase AC feed: 200 V to 277 V, 50 Hz or 60 Hz</p> </li> <li> <p>Three-phase AC feed: 346 V to 480 V, 50 Hz or 60 Hz</p> </li> </ul> */
		PowerPhase: FormControl<PowerPhase | null | undefined>,

		/** <p>The power connector that Amazon Web Services should plan to provide for connections to the hardware. Note the correlation between <code>PowerPhase</code> and <code>PowerConnector</code>. </p> <ul> <li> <p>Single-phase AC feed</p> <ul> <li> <p> <b>L6-30P</b> – (common in US); 30A; single phase</p> </li> <li> <p> <b>IEC309 (blue)</b> – P+N+E, 6hr; 32 A; single phase</p> </li> </ul> </li> <li> <p>Three-phase AC feed</p> <ul> <li> <p> <b>AH530P7W (red)</b> – 3P+N+E, 7hr; 30A; three phase</p> </li> <li> <p> <b>AH532P6W (red)</b> – 3P+N+E, 6hr; 32A; three phase</p> </li> </ul> </li> </ul> */
		PowerConnector: FormControl<PowerConnector | null | undefined>,

		/** Indicates whether the power feed comes above or below the rack. */
		PowerFeedDrop: FormControl<PowerFeedDrop | null | undefined>,

		/** The uplink speed the rack should support for the connection to the Region. */
		UplinkGbps: FormControl<UplinkGbps | null | undefined>,

		/** <p>Racks come with two Outpost network devices. Depending on the supported uplink speed at the site, the Outpost network devices provide a variable number of uplinks. Specify the number of uplinks for each Outpost network device that you intend to use to connect the rack to your network. Note the correlation between <code>UplinkGbps</code> and <code>UplinkCount</code>. </p> <ul> <li> <p>1Gbps - Uplinks available: 1, 2, 4, 6, 8</p> </li> <li> <p>10Gbps - Uplinks available: 1, 2, 4, 8, 12, 16</p> </li> <li> <p>40 and 100 Gbps- Uplinks available: 1, 2, 4</p> </li> </ul> */
		UplinkCount: FormControl<UplinkCount | null | undefined>,

		/** The type of fiber that you will use to attach the Outpost to your network. */
		FiberOpticCableType: FormControl<FiberOpticCableType | null | undefined>,

		/** <p>The type of optical standard that you will use to attach the Outpost to your network. This field is dependent on uplink speed, fiber type, and distance to the upstream device. For more information about networking requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#facility-networking">Network</a> in the Amazon Web Services Outposts User Guide. </p> <ul> <li> <p> <code>OPTIC_10GBASE_SR</code>: 10GBASE-SR</p> </li> <li> <p> <code>OPTIC_10GBASE_IR</code>: 10GBASE-IR</p> </li> <li> <p> <code>OPTIC_10GBASE_LR</code>: 10GBASE-LR</p> </li> <li> <p> <code>OPTIC_40GBASE_SR</code>: 40GBASE-SR</p> </li> <li> <p> <code>OPTIC_40GBASE_ESR</code>: 40GBASE-ESR</p> </li> <li> <p> <code>OPTIC_40GBASE_IR4_LR4L</code>: 40GBASE-IR (LR4L)</p> </li> <li> <p> <code>OPTIC_40GBASE_LR4</code>: 40GBASE-LR4</p> </li> <li> <p> <code>OPTIC_100GBASE_SR4</code>: 100GBASE-SR4</p> </li> <li> <p> <code>OPTIC_100GBASE_CWDM4</code>: 100GBASE-CWDM4</p> </li> <li> <p> <code>OPTIC_100GBASE_LR4</code>: 100GBASE-LR4</p> </li> <li> <p> <code>OPTIC_100G_PSM4_MSA</code>: 100G PSM4 MSA</p> </li> <li> <p> <code>OPTIC_1000BASE_LX</code>: 1000Base-LX</p> </li> <li> <p> <code>OPTIC_1000BASE_SX</code> : 1000Base-SX</p> </li> </ul> */
		OpticalStandard: FormControl<OpticalStandard | null | undefined>,

		/** The maximum rack weight that this site can support. <code>NO_LIMIT</code> is over 2000lbs. */
		MaximumSupportedWeightLbs: FormControl<MaximumSupportedWeightLbs | null | undefined>,
	}
	export function CreateUpdateSiteRackPhysicalPropertiesPatchBodyFormGroup() {
		return new FormGroup<UpdateSiteRackPhysicalPropertiesPatchBodyFormProperties>({
			PowerDrawKva: new FormControl<PowerDrawKva | null | undefined>(undefined),
			PowerPhase: new FormControl<PowerPhase | null | undefined>(undefined),
			PowerConnector: new FormControl<PowerConnector | null | undefined>(undefined),
			PowerFeedDrop: new FormControl<PowerFeedDrop | null | undefined>(undefined),
			UplinkGbps: new FormControl<UplinkGbps | null | undefined>(undefined),
			UplinkCount: new FormControl<UplinkCount | null | undefined>(undefined),
			FiberOpticCableType: new FormControl<FiberOpticCableType | null | undefined>(undefined),
			OpticalStandard: new FormControl<OpticalStandard | null | undefined>(undefined),
			MaximumSupportedWeightLbs: new FormControl<MaximumSupportedWeightLbs | null | undefined>(undefined),
		});

	}

}

