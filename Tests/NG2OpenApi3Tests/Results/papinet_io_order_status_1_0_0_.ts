import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetOrder extends OrderHeader {
		links?: PaginationLinks;
		orderLineItems?: Array<OrderLineItem>;
	}
	export interface GetOrderFormProperties extends OrderHeaderFormProperties {
	}
	export function CreateGetOrderFormGroup() {
		return new FormGroup<GetOrderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberOfLineItems: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			orderNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orderStatus: new FormControl<OrderHeaderOrderStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaginationLinks {
		first?: PaginationLinksFirst;
		last?: PaginationLinksLast;

		/** Required */
		next: PaginationLinksNext;
		prev?: PaginationLinksPrev;
	}
	export interface PaginationLinksFormProperties {
	}
	export function CreatePaginationLinksFormGroup() {
		return new FormGroup<PaginationLinksFormProperties>({
		});

	}

	export interface PaginationLinksFirst {
		href?: string | null;
	}
	export interface PaginationLinksFirstFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreatePaginationLinksFirstFormGroup() {
		return new FormGroup<PaginationLinksFirstFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaginationLinksLast {
		href?: string | null;
	}
	export interface PaginationLinksLastFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreatePaginationLinksLastFormGroup() {
		return new FormGroup<PaginationLinksLastFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaginationLinksNext {
		href?: string | null;
	}
	export interface PaginationLinksNextFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreatePaginationLinksNextFormGroup() {
		return new FormGroup<PaginationLinksNextFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaginationLinksPrev {
		href?: string | null;
	}
	export interface PaginationLinksPrevFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreatePaginationLinksPrevFormGroup() {
		return new FormGroup<PaginationLinksPrevFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrderLineItem {
		changeable?: boolean | null;

		/** Required */
		id: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		orderLineItemNumber: number;

		/** Required */
		orderLineItemStatus: OrderLineItemOrderLineItemStatus;
		OrderLineItemQuantities?: Array<OrderLineItemQuantities>;
	}
	export interface OrderLineItemFormProperties {
		changeable: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		orderLineItemNumber: FormControl<number | null | undefined>,

		/** Required */
		orderLineItemStatus: FormControl<OrderLineItemOrderLineItemStatus | null | undefined>,
	}
	export function CreateOrderLineItemFormGroup() {
		return new FormGroup<OrderLineItemFormProperties>({
			changeable: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orderLineItemNumber: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			orderLineItemStatus: new FormControl<OrderLineItemOrderLineItemStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OrderLineItemOrderLineItemStatus { Cancelled = 'Cancelled', Completed = 'Completed', Confirmed = 'Confirmed', Pending = 'Pending', ProductionCompleted = 'ProductionCompleted', ShipmentCompleted = 'ShipmentCompleted' }

	export interface OrderLineItemQuantities {
		quantityContext?: OrderLineItemQuantitiesQuantityContext | null;
		quantityType?: OrderLineItemQuantitiesQuantityType | null;
		quantityUOM?: OrderLineItemQuantitiesQuantityUOM | null;
		quantityValue?: number | null;
	}
	export interface OrderLineItemQuantitiesFormProperties {
		quantityContext: FormControl<OrderLineItemQuantitiesQuantityContext | null | undefined>,
		quantityType: FormControl<OrderLineItemQuantitiesQuantityType | null | undefined>,
		quantityUOM: FormControl<OrderLineItemQuantitiesQuantityUOM | null | undefined>,
		quantityValue: FormControl<number | null | undefined>,
	}
	export function CreateOrderLineItemQuantitiesFormGroup() {
		return new FormGroup<OrderLineItemQuantitiesFormProperties>({
			quantityContext: new FormControl<OrderLineItemQuantitiesQuantityContext | null | undefined>(undefined),
			quantityType: new FormControl<OrderLineItemQuantitiesQuantityType | null | undefined>(undefined),
			quantityUOM: new FormControl<OrderLineItemQuantitiesQuantityUOM | null | undefined>(undefined),
			quantityValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OrderLineItemQuantitiesQuantityContext { Confirmed = 'Confirmed', Invoiced = 'Invoiced', Ordered = 'Ordered', Produced = 'Produced', Shipped = 'Shipped' }

	export enum OrderLineItemQuantitiesQuantityType { Area = 'Area', Count = 'Count', GrossWeight = 'GrossWeight', Length = 'Length', NetNetWeight = 'NetNetWeight', NetWeight = 'NetWeight', NominalWeight = 'NominalWeight', TareWeight = 'TareWeight' }

	export enum OrderLineItemQuantitiesQuantityUOM { Bale = 'Bale', Box = 'Box', Centimeter = 'Centimeter', Decimeter = 'Decimeter', Foot = 'Foot', Gram = 'Gram', HundredPounds = 'HundredPounds', Inch = 'Inch', Kilogram = 'Kilogram', Kilometer = 'Kilometer', Meter = 'Meter', MetricTon = 'MetricTon', Millimeter = 'Millimeter', Package = 'Package', PalletUnit = 'PalletUnit', Piece = 'Piece', Pound = 'Pound', PulpUnit = 'PulpUnit', Ream = 'Ream', Reel = 'Reel', Sheet = 'Sheet', ShortTon = 'ShortTon', Skid = 'Skid', SquareDecimeter = 'SquareDecimeter', SquareFoot = 'SquareFoot', SquareInch = 'SquareInch', SquareMeter = 'SquareMeter', ThousandPieces = 'ThousandPieces', ThousandSquareCentimeters = 'ThousandSquareCentimeters', ThousandSquareFeet = 'ThousandSquareFeet', ThousandSquareInches = 'ThousandSquareInches', Yard = 'Yard' }

	export interface ListOfOrders {
		links?: PaginationLinks;
		orders?: Array<OrderHeader>;
	}
	export interface ListOfOrdersFormProperties {
	}
	export function CreateListOfOrdersFormGroup() {
		return new FormGroup<ListOfOrdersFormProperties>({
		});

	}

	export interface OrderHeader {

		/** Required */
		id: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfLineItems: number;

		/** Required */
		orderNumber: string;

		/** Required */
		orderStatus: OrderHeaderOrderStatus;
	}
	export interface OrderHeaderFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfLineItems: FormControl<number | null | undefined>,

		/** Required */
		orderNumber: FormControl<string | null | undefined>,

		/** Required */
		orderStatus: FormControl<OrderHeaderOrderStatus | null | undefined>,
	}
	export function CreateOrderHeaderFormGroup() {
		return new FormGroup<OrderHeaderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberOfLineItems: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			orderNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orderStatus: new FormControl<OrderHeaderOrderStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OrderHeaderOrderStatus { Active = 'Active', Cancelled = 'Cancelled', Completed = 'Completed' }

	export interface Order extends OrderHeader {
		links?: PaginationLinks;
		orderLineItems?: Array<OrderLineItem>;
	}
	export interface OrderFormProperties extends OrderHeaderFormProperties {
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberOfLineItems: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			orderNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orderStatus: new FormControl<OrderHeaderOrderStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List `orders`
		 * Gets a paginated list of all `orders`.
		 * Get orders
		 * @param {OrderHeaderOrderStatus} orderStatus Filter by status
		 * @param {string} offset The number of items to skip before starting to collect the result set.
		 * @param {string} limit The maximum number of items to return. If the value exceeds the maximum, then the maximum value will be used.
		 * @return {ListOfOrders} OK
		 */
		OrdersGetByOrderStatusAndOffsetAndLimit(orderStatus: OrderHeaderOrderStatus | null | undefined, offset: string | null | undefined, limit: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ListOfOrders> {
			return this.http.get<ListOfOrders>(this.baseUri + 'orders?orderStatus=' + orderStatus + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get an `order`
		 * Gets the details of a specific `order`, including a paginated list of all its lines.
		 * Get orders/{orderId}
		 * @param {string} orderId UUID of the `order` to get
		 * @return {Order} OK
		 */
		Orders_orderIdGet(orderId: string, headersHandler?: () => HttpHeaders): Observable<Order> {
			return this.http.get<Order>(this.baseUri + 'orders/' + (orderId == null ? '' : encodeURIComponent(orderId)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

