import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AplicativosDeTV {

		/** Required */
		Link: string;

		/** Required */
		Name: string;

		/** Required */
		Quantity: number;
	}
	export interface AplicativosDeTVFormProperties {

		/** Required */
		Link: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateAplicativosDeTVFormGroup() {
		return new FormGroup<AplicativosDeTVFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Brand {

		/** Required */
		Link: string;

		/** Required */
		Name: string;

		/** Required */
		Quantity: number;
	}
	export interface BrandFormProperties {

		/** Required */
		Link: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateBrandFormGroup() {
		return new FormGroup<BrandFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategoriesTree {

		/** Required */
		Children: Array<Child>;

		/** Required */
		Link: string;

		/** Required */
		Name: string;

		/** Required */
		Quantity: number;
	}
	export interface CategoriesTreeFormProperties {

		/** Required */
		Link: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateCategoriesTreeFormGroup() {
		return new FormGroup<CategoriesTreeFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Child {

		/** Required */
		Children: Array<Child1>;

		/** Required */
		Link: string;

		/** Required */
		Name: string;

		/** Required */
		Quantity: number;
	}
	export interface ChildFormProperties {

		/** Required */
		Link: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateChildFormGroup() {
		return new FormGroup<ChildFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Child1 {

		/** Required */
		Children: Array<string>;

		/** Required */
		Link: string;

		/** Required */
		Name: string;

		/** Required */
		Quantity: number;
	}
	export interface Child1FormProperties {

		/** Required */
		Link: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateChild1FormGroup() {
		return new FormGroup<Child1FormProperties>({
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CommertialOffer {

		/** Required */
		AvailableQuantity: number;

		/** Required */
		BuyTogether: Array<string>;

		/** Required */
		CacheVersionUsedToCallCheckout: string;

		/** Required */
		DeliverySlaSamples: Array<DeliverySlaSample>;

		/** Required */
		DeliverySlaSamplesPerRegion: {[id: string]: GeneratedObject };

		/** Required */
		DiscountHighLight: Array<string>;

		/** Required */
		GetInfoErrorMessage: string;

		/** Required */
		GiftSkuIds: Array<string>;

		/** Required */
		Installments: Array<Installment>;

		/** Required */
		ListPrice: number;

		/** Required */
		Price: number;

		/** Required */
		PriceValidUntil: string;

		/** Required */
		Tax: number;

		/** Required */
		Teasers: Array<string>;
	}
	export interface CommertialOfferFormProperties {

		/** Required */
		AvailableQuantity: FormControl<number | null | undefined>,

		/** Required */
		CacheVersionUsedToCallCheckout: FormControl<string | null | undefined>,

		/** Required */
		DeliverySlaSamplesPerRegion: FormControl<{[id: string]: GeneratedObject } | null | undefined>,

		/** Required */
		GetInfoErrorMessage: FormControl<string | null | undefined>,

		/** Required */
		ListPrice: FormControl<number | null | undefined>,

		/** Required */
		Price: FormControl<number | null | undefined>,

		/** Required */
		PriceValidUntil: FormControl<string | null | undefined>,

		/** Required */
		Tax: FormControl<number | null | undefined>,
	}
	export function CreateCommertialOfferFormGroup() {
		return new FormGroup<CommertialOfferFormProperties>({
			AvailableQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CacheVersionUsedToCallCheckout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeliverySlaSamplesPerRegion: new FormControl<{[id: string]: GeneratedObject } | null | undefined>(undefined, [Validators.required]),
			GetInfoErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ListPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PriceValidUntil: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Tax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeliverySlaSample {

		/** Required */
		DeliverySlaPerTypes: Array<DeliverySlaPerType2>;

		/** Required */
		Region: Region2;
	}
	export interface DeliverySlaSampleFormProperties {
	}
	export function CreateDeliverySlaSampleFormGroup() {
		return new FormGroup<DeliverySlaSampleFormProperties>({
		});

	}

	export interface DeliverySlaPerType2 {
		EstimatedTimeSpanToDelivery?: string | null;
		Price?: number | null;
		TypeName?: string | null;
	}
	export interface DeliverySlaPerType2FormProperties {
		EstimatedTimeSpanToDelivery: FormControl<string | null | undefined>,
		Price: FormControl<number | null | undefined>,
		TypeName: FormControl<string | null | undefined>,
	}
	export function CreateDeliverySlaPerType2FormGroup() {
		return new FormGroup<DeliverySlaPerType2FormProperties>({
			EstimatedTimeSpanToDelivery: new FormControl<string | null | undefined>(undefined),
			Price: new FormControl<number | null | undefined>(undefined),
			TypeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Region2 {
		CountryCode?: string | null;
		CultureInfoName?: string | null;
		Id?: number | null;
		IsPersisted?: boolean | null;
		IsRemoved?: boolean | null;
		Name?: string | null;
		ZipCode?: string | null;
	}
	export interface Region2FormProperties {
		CountryCode: FormControl<string | null | undefined>,
		CultureInfoName: FormControl<string | null | undefined>,
		Id: FormControl<number | null | undefined>,
		IsPersisted: FormControl<boolean | null | undefined>,
		IsRemoved: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ZipCode: FormControl<string | null | undefined>,
	}
	export function CreateRegion2FormGroup() {
		return new FormGroup<Region2FormProperties>({
			CountryCode: new FormControl<string | null | undefined>(undefined),
			CultureInfoName: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			IsPersisted: new FormControl<boolean | null | undefined>(undefined),
			IsRemoved: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ZipCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeneratedObject {

		/** Required */
		DeliverySlaPerTypes: Array<DeliverySlaPerType>;

		/** Required */
		Region: Region;
	}
	export interface GeneratedObjectFormProperties {
	}
	export function CreateGeneratedObjectFormGroup() {
		return new FormGroup<GeneratedObjectFormProperties>({
		});

	}

	export interface DeliverySlaPerType {

		/** Required */
		EstimatedTimeSpanToDelivery: string;

		/** Required */
		Price: number;

		/** Required */
		TypeName: string;
	}
	export interface DeliverySlaPerTypeFormProperties {

		/** Required */
		EstimatedTimeSpanToDelivery: FormControl<string | null | undefined>,

		/** Required */
		Price: FormControl<number | null | undefined>,

		/** Required */
		TypeName: FormControl<string | null | undefined>,
	}
	export function CreateDeliverySlaPerTypeFormGroup() {
		return new FormGroup<DeliverySlaPerTypeFormProperties>({
			EstimatedTimeSpanToDelivery: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Region {

		/** Required */
		CountryCode: string;

		/** Required */
		CultureInfoName: string;

		/** Required */
		Id: number;

		/** Required */
		IsPersisted: boolean;

		/** Required */
		IsRemoved: boolean;

		/** Required */
		Name: string;

		/** Required */
		ZipCode: string;
	}
	export interface RegionFormProperties {

		/** Required */
		CountryCode: FormControl<string | null | undefined>,

		/** Required */
		CultureInfoName: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<number | null | undefined>,

		/** Required */
		IsPersisted: FormControl<boolean | null | undefined>,

		/** Required */
		IsRemoved: FormControl<boolean | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ZipCode: FormControl<string | null | undefined>,
	}
	export function CreateRegionFormGroup() {
		return new FormGroup<RegionFormProperties>({
			CountryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CultureInfoName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IsPersisted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			IsRemoved: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ZipCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Installment {

		/** Required */
		InterestRate: number;

		/** Required */
		Name: string;

		/** Required */
		NumberOfInstallments: number;

		/** Required */
		PaymentSystemGroupName: string;

		/** Required */
		PaymentSystemName: string;

		/** Required */
		TotalValuePlusInterestRate: number;

		/** Required */
		Value: number;
	}
	export interface InstallmentFormProperties {

		/** Required */
		InterestRate: FormControl<number | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		NumberOfInstallments: FormControl<number | null | undefined>,

		/** Required */
		PaymentSystemGroupName: FormControl<string | null | undefined>,

		/** Required */
		PaymentSystemName: FormControl<string | null | undefined>,

		/** Required */
		TotalValuePlusInterestRate: FormControl<number | null | undefined>,

		/** Required */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateInstallmentFormGroup() {
		return new FormGroup<InstallmentFormProperties>({
			InterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfInstallments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PaymentSystemGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PaymentSystemName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TotalValuePlusInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Department {

		/** Required */
		Link: string;

		/** Required */
		Name: string;

		/** Required */
		Quantity: number;
	}
	export interface DepartmentFormProperties {

		/** Required */
		Link: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateDepartmentFormGroup() {
		return new FormGroup<DepartmentFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example {

		/** Required */
		brand: string;

		/** Required */
		categories: Array<string>;

		/** Required */
		description: string;

		/** Required */
		items: Array<Item>;

		/** Required */
		link: string;

		/** Required */
		linkText: string;

		/** Required */
		productId: string;

		/** Required */
		productName: string;

		/** Required */
		productReference: string;
	}
	export interface ExampleFormProperties {

		/** Required */
		brand: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		link: FormControl<string | null | undefined>,

		/** Required */
		linkText: FormControl<string | null | undefined>,

		/** Required */
		productId: FormControl<string | null | undefined>,

		/** Required */
		productName: FormControl<string | null | undefined>,

		/** Required */
		productReference: FormControl<string | null | undefined>,
	}
	export function CreateExampleFormGroup() {
		return new FormGroup<ExampleFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Item {
		COR?: Array<string>;
		TAMANHO?: Array<string>;

		/** Required */
		complementName: string;

		/** Required */
		ean: string;

		/** Required */
		images: Array<Image>;

		/** Required */
		itemId: string;

		/** Required */
		measurementUnit: string;

		/** Required */
		name: string;

		/** Required */
		nameComplete: string;
		referenceId?: Array<ReferenceId>;

		/** Required */
		sellers: Array<Seller>;

		/** Required */
		unitMultiplier: number;
		variations?: Array<string>;
	}
	export interface ItemFormProperties {

		/** Required */
		complementName: FormControl<string | null | undefined>,

		/** Required */
		ean: FormControl<string | null | undefined>,

		/** Required */
		itemId: FormControl<string | null | undefined>,

		/** Required */
		measurementUnit: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		nameComplete: FormControl<string | null | undefined>,

		/** Required */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			complementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ean: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			measurementUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameComplete: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unitMultiplier: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Image {

		/** Required */
		imageId: string;

		/** Required */
		imageLabel: string;

		/** Required */
		imageTag: string;

		/** Required */
		imageText: string;

		/** Required */
		imageUrl: string;
	}
	export interface ImageFormProperties {

		/** Required */
		imageId: FormControl<string | null | undefined>,

		/** Required */
		imageLabel: FormControl<string | null | undefined>,

		/** Required */
		imageTag: FormControl<string | null | undefined>,

		/** Required */
		imageText: FormControl<string | null | undefined>,

		/** Required */
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			imageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReferenceId {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}
	export interface ReferenceIdFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateReferenceIdFormGroup() {
		return new FormGroup<ReferenceIdFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Seller {

		/** Required */
		addToCartLink: string;

		/** Required */
		commertialOffer: CommertialOffer;

		/** Required */
		sellerDefault: boolean;

		/** Required */
		sellerId: string;

		/** Required */
		sellerName: string;
	}
	export interface SellerFormProperties {

		/** Required */
		addToCartLink: FormControl<string | null | undefined>,

		/** Required */
		sellerDefault: FormControl<boolean | null | undefined>,

		/** Required */
		sellerId: FormControl<string | null | undefined>,

		/** Required */
		sellerName: FormControl<string | null | undefined>,
	}
	export function CreateSellerFormGroup() {
		return new FormGroup<SellerFormProperties>({
			addToCartLink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerDefault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example2 {

		/** Required */
		Brands: Array<Brand>;

		/** Required */
		CategoriesTrees: Array<CategoriesTree>;

		/** Required */
		Departments: Array<Department>;

		/** Required */
		SpecificationFilters: SpecificationFilters;
	}
	export interface Example2FormProperties {
	}
	export function CreateExample2FormGroup() {
		return new FormGroup<Example2FormProperties>({
		});

	}

	export interface SpecificationFilters {

		/** Required */
		'Aplicativos de TV': Array<AplicativosDeTV>;

		/** Required */
		Resolução: Array<ResoluO>;

		/** Required */
		'Tamanho da Tela': Array<TamanhoDaTela>;
	}
	export interface SpecificationFiltersFormProperties {
	}
	export function CreateSpecificationFiltersFormGroup() {
		return new FormGroup<SpecificationFiltersFormProperties>({
		});

	}

	export interface ResoluO {

		/** Required */
		Link: string;

		/** Required */
		Name: string;

		/** Required */
		Quantity: number;
	}
	export interface ResoluOFormProperties {

		/** Required */
		Link: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateResoluOFormGroup() {
		return new FormGroup<ResoluOFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TamanhoDaTela {

		/** Required */
		Link: string;

		/** Required */
		Name: string;

		/** Required */
		Quantity: number;
	}
	export interface TamanhoDaTelaFormProperties {

		/** Required */
		Link: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Quantity: FormControl<number | null | undefined>,
	}
	export function CreateTamanhoDaTelaFormGroup() {
		return new FormGroup<TamanhoDaTelaFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example3 {

		/** Required */
		itemsReturned: Array<ItemsReturned>;
	}
	export interface Example3FormProperties {
	}
	export function CreateExample3FormGroup() {
		return new FormGroup<Example3FormProperties>({
		});

	}

	export interface ItemsReturned {

		/** Required */
		criteria: string;

		/** Required */
		href: string;

		/** Required */
		name: string;

		/** Required */
		thumb: string;
	}
	export interface ItemsReturnedFormProperties {

		/** Required */
		criteria: FormControl<string | null | undefined>,

		/** Required */
		href: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		thumb: FormControl<string | null | undefined>,
	}
	export function CreateItemsReturnedFormGroup() {
		return new FormGroup<ItemsReturnedFormProperties>({
			criteria: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thumb: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Category Facets
		 * Retrieves the names and IDs of the categories facets.
		 * >⚠️ This endpoint returns a maximum of 50 items per response, so the difference between `_from` and `_to` should not exceed this number. The result order is descending, from the highest product ID to the lowest.
		 * ## Response body example:
		 * ```json
		 * [
		 * [
		 * {
		 * "Name":"Tamanho Global",
		 * "Id":45
		 * },
		 * {
		 * "Name":"Percentuals",
		 * "Id":25
		 * }
		 * ]
		 * ]
		 * ```
		 * Get api/catalog_system/pub/facets/category/{categoryId}
		 * @param {string} categoryId Category unique number identifier.
		 * @param {string} _from Starter page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
		 * @param {string} _to Finisher page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
		 * @return {Array<FacetsGetByCategoryIdAnd_fromAnd_toReturn>} OK
		 */
		FacetsGetByCategoryIdAnd_fromAnd_to(categoryId: string, _from: string | null | undefined, _to: string | null | undefined): Observable<Array<FacetsGetByCategoryIdAnd_fromAnd_toReturn>> {
			return this.http.get<Array<FacetsGetByCategoryIdAnd_fromAnd_toReturn>>(this.baseUri + 'api/catalog_system/pub/facets/category/' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '&_from=' + (_from == null ? '' : encodeURIComponent(_from)) + '&_to=' + (_to == null ? '' : encodeURIComponent(_to)), {});
		}

		/**
		 * Search by Store Facets
		 * Retrieves products by store facets.
		 * >⚠️ This endpoint returns a maximum of 50 items per response, so the difference between `_from` and `_to` should not exceed this number. The result order is descending, from the highest product ID to the lowest.
		 * ## Response body example:
		 * ```json
		 * {
		 * "Departments": [
		 * {
		 * "Quantity": 2,
		 * "Position": null,
		 * "Name": "Beers Beers Mesmo",
		 * "Link": "/Beers-Beers-Mesmo/1?map=c,b",
		 * "LinkEncoded": "/Beers-Beers-Mesmo/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Beers-Beers-Mesmo"
		 * },
		 * {
		 * "Quantity": 2,
		 * "Position": null,
		 * "Name": "Merch Integration Category ||",
		 * "Link": "/Merch-Integration-Category-||/1?map=c,b",
		 * "LinkEncoded": "/Merch-Integration-Category-%7C%7C/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Merch-Integration-Category-||"
		 * },
		 * {
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Jogos",
		 * "Link": "/Jogos/1?map=c,b",
		 * "LinkEncoded": "/Jogos/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Jogos"
		 * },
		 * {
		 * "Quantity": 3,
		 * "Position": null,
		 * "Name": "189",
		 * "Link": "/189/1?map=c,b",
		 * "LinkEncoded": "/189/1?map=c,b",
		 * "Map": "c",
		 * "Value": "189"
		 * },
		 * {
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Tests",
		 * "Link": "/Tests/1?map=c,b",
		 * "LinkEncoded": "/Tests/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Tests"
		 * },
		 * {
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Accessories",
		 * "Link": "/Accessories/1?map=c,b",
		 * "LinkEncoded": "/Accessories/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Accessories"
		 * },
		 * {
		 * "Quantity": 2,
		 * "Position": null,
		 * "Name": "Bars",
		 * "Link": "/Bars/1?map=c,b",
		 * "LinkEncoded": "/Bars/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Bars"
		 * },
		 * {
		 * "Quantity": 5,
		 * "Position": null,
		 * "Name": "Categoria Teste Timeout",
		 * "Link": "/Categoria-Teste-Timeout/1?map=c,b",
		 * "LinkEncoded": "/Categoria-Teste-Timeout/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Categoria-Teste-Timeout"
		 * }
		 * ],
		 * "Brands": [
		 * {
		 * "Quantity": 2,
		 * "Position": null,
		 * "Name": "Merch XP",
		 * "Link": "/1/1234600/1/Merch-XP?map=c,c,b,b",
		 * "LinkEncoded": "/1/1234600/1/Merch-XP?map=c,c,b,b",
		 * "Map": "b",
		 * "Value": "Merch-XP"
		 * },
		 * {
		 * "Quantity": 2,
		 * "Position": null,
		 * "Name": "Zé",
		 * "Link": "/1/1234600/1/Ze?map=c,c,b,b",
		 * "LinkEncoded": "/1/1234600/1/Ze?map=c,c,b,b",
		 * "Map": "b",
		 * "Value": "Ze"
		 * },
		 * {
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Odin",
		 * "Link": "/1/1234600/1/Odin?map=c,c,b,b",
		 * "LinkEncoded": "/1/1234600/1/Odin?map=c,c,b,b",
		 * "Map": "b",
		 * "Value": "Odin"
		 * },
		 * {
		 * "Quantity": 2,
		 * "Position": null,
		 * "Name": "Hoegaarden",
		 * "Link": "/1/1234600/1/Hoegaarden?map=c,c,b,b",
		 * "LinkEncoded": "/1/1234600/1/Hoegaarden?map=c,c,b,b",
		 * "Map": "b",
		 * "Value": "Hoegaarden"
		 * },
		 * {
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Teste marcas",
		 * "Link": "/1/1234600/1/Teste-marcas?map=c,c,b,b",
		 * "LinkEncoded": "/1/1234600/1/Teste-marcas?map=c,c,b,b",
		 * "Map": "b",
		 * "Value": "Teste-marcas"
		 * },
		 * {
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Bitmap Bureau",
		 * "Link": "/1/1234600/1/Bitmap-Bureau?map=c,c,b,b",
		 * "LinkEncoded": "/1/1234600/1/Bitmap-Bureau?map=c,c,b,b",
		 * "Map": "b",
		 * "Value": "Bitmap-Bureau"
		 * },
		 * {
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Sega",
		 * "Link": "/1/1234600/1/Sega?map=c,c,b,b",
		 * "LinkEncoded": "/1/1234600/1/Sega?map=c,c,b,b",
		 * "Map": "b",
		 * "Value": "Sega"
		 * },
		 * {
		 * "Quantity": 3,
		 * "Position": null,
		 * "Name": "Technogym",
		 * "Link": "/1/1234600/1/Technogym?map=c,c,b,b",
		 * "LinkEncoded": "/1/1234600/1/Technogym?map=c,c,b,b",
		 * "Map": "b",
		 * "Value": "Technogym"
		 * },
		 * {
		 * "Quantity": 3,
		 * "Position": null,
		 * "Name": "Aptany",
		 * "Link": "/1/1234600/1/Aptany?map=c,c,b,b",
		 * "LinkEncoded": "/1/1234600/1/Aptany?map=c,c,b,b",
		 * "Map": "b",
		 * "Value": "Aptany"
		 * },
		 * {
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Tectoy",
		 * "Link": "/1/1234600/1/Tectoy?map=c,c,b,b",
		 * "LinkEncoded": "/1/1234600/1/Tectoy?map=c,c,b,b",
		 * "Map": "b",
		 * "Value": "Tectoy"
		 * }
		 * ],
		 * "SpecificationFilters": {},
		 * "CategoriesTrees": [
		 * {
		 * "Id": 1,
		 * "Quantity": 4,
		 * "Position": null,
		 * "Name": "Beers Beers Mesmo",
		 * "Link": "/Beers-Beers-Mesmo/1?map=c,b",
		 * "LinkEncoded": "/Beers-Beers-Mesmo/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Beers-Beers-Mesmo",
		 * "Children": [
		 * {
		 * "Id": 2,
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Lager Beers",
		 * "Link": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
		 * "LinkEncoded": "/Beers-Beers-Mesmo/Lager-Beers/1?map=c,c,b",
		 * "Map": "c",
		 * "Value": "Lager-Beers",
		 * "Children": []
		 * }
		 * ]
		 * },
		 * {
		 * "Id": 1234571,
		 * "Quantity": 2,
		 * "Position": null,
		 * "Name": "Jogos",
		 * "Link": "/Jogos/1?map=c,b",
		 * "LinkEncoded": "/Jogos/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Jogos",
		 * "Children": []
		 * },
		 * {
		 * "Id": 1234579,
		 * "Quantity": 3,
		 * "Position": null,
		 * "Name": "189",
		 * "Link": "/189/1?map=c,b",
		 * "LinkEncoded": "/189/1?map=c,b",
		 * "Map": "c",
		 * "Value": "189",
		 * "Children": []
		 * },
		 * {
		 * "Id": 1234587,
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Tests",
		 * "Link": "/Tests/1?map=c,b",
		 * "LinkEncoded": "/Tests/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Tests",
		 * "Children": []
		 * },
		 * {
		 * "Id": 1234595,
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Accessories",
		 * "Link": "/Accessories/1?map=c,b",
		 * "LinkEncoded": "/Accessories/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Accessories",
		 * "Children": [
		 * {
		 * "Id": 1234596,
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Foam rollers",
		 * "Link": "/Accessories/Foam-rollers/1?map=c,c,b",
		 * "LinkEncoded": "/Accessories/Foam-rollers/1?map=c,c,b",
		 * "Map": "c",
		 * "Value": "Foam-rollers",
		 * "Children": []
		 * }
		 * ]
		 * },
		 * {
		 * "Id": 1234597,
		 * "Quantity": 2,
		 * "Position": null,
		 * "Name": "Bars",
		 * "Link": "/Bars/1?map=c,b",
		 * "LinkEncoded": "/Bars/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Bars",
		 * "Children": [
		 * {
		 * "Id": 1234598,
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Training Bars",
		 * "Link": "/Bars/Training-Bars/1?map=c,c,b",
		 * "LinkEncoded": "/Bars/Training-Bars/1?map=c,c,b",
		 * "Map": "c",
		 * "Value": "Training-Bars",
		 * "Children": []
		 * },
		 * {
		 * "Id": 1234599,
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Curl Bars",
		 * "Link": "/Bars/Curl-Bars/1?map=c,c,b",
		 * "LinkEncoded": "/Bars/Curl-Bars/1?map=c,c,b",
		 * "Map": "c",
		 * "Value": "Curl-Bars",
		 * "Children": []
		 * }
		 * ]
		 * },
		 * {
		 * "Id": 15,
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "Coronas",
		 * "Link": "/Coronas/1?map=c,b",
		 * "LinkEncoded": "/Coronas/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Coronas",
		 * "Children": [
		 * {
		 * "Id": 13,
		 * "Quantity": 1,
		 * "Position": null,
		 * "Name": "não tem limite!",
		 * "Link": "/Coronas/nao-tem-limite-/1?map=c,c,b",
		 * "LinkEncoded": "/Coronas/nao-tem-limite-/1?map=c,c,b",
		 * "Map": "c",
		 * "Value": "nao-tem-limite-",
		 * "Children": []
		 * }
		 * ]
		 * },
		 * {
		 * "Id": 4,
		 * "Quantity": 4,
		 * "Position": null,
		 * "Name": "Merch Integration Category ||",
		 * "Link": "/Merch-Integration-Category-||/1?map=c,b",
		 * "LinkEncoded": "/Merch-Integration-Category-%7C%7C/1?map=c,b",
		 * "Map": "c",
		 * "Value": "Merch-Integration-Category-||",
		 * "Children": []
		 * }
		 * ],
		 * "PriceRanges": [],
		 * "Summary": {
		 * "Departments": {
		 * "DisplayedItems": 8,
		 * "TotalItems": 8
		 * },
		 * "CategoriesTrees": {
		 * "DisplayedItems": 13,
		 * "TotalItems": 13
		 * },
		 * "Brands": {
		 * "DisplayedItems": 10,
		 * "TotalItems": 10
		 * },
		 * "PriceRanges": {
		 * "DisplayedItems": 0,
		 * "TotalItems": 0
		 * },
		 * "SpecificationFilters": {}
		 * }
		 * }
		 * ```
		 * Get api/catalog_system/pub/facets/search/{term}
		 * @param {string} map Mapping of the term. It can be `c` for a category, `b` for a brand, or `specificationFilter_{specificationId}` for a specification. You need to include a map for each term you are searching for in the same term's order.
		 * @param {string} term Term used for the facet's search. You can search for as much term as you want. The term can be: `categoryId`, `brandId`, `specificationId`.
		 * @param {string} _from Starter page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
		 * @param {string} _to Finisher page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
		 * @return {FacetscategoryReturn} OK
		 */
		Facetscategory(map: string, term: string, _from: string | null | undefined, _to: string | null | undefined): Observable<FacetscategoryReturn> {
			return this.http.get<FacetscategoryReturn>(this.baseUri + 'api/catalog_system/pub/facets/search/' + (term == null ? '' : encodeURIComponent(term)) + '?map=' + (map == null ? '' : encodeURIComponent(map)) + '&_from=' + (_from == null ? '' : encodeURIComponent(_from)) + '&_to=' + (_to == null ? '' : encodeURIComponent(_to)), {});
		}

		/**
		 * Get Product Search of Accessories
		 * Retrieves general information about the product's accessories.
		 * Get api/catalog_system/pub/products/crossselling/accessories/{productId}
		 * @param {number} productId Product's unique identifier
		 * @return {void} OK
		 */
		ProductSearchAccessories(productId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/catalog_system/pub/products/crossselling/accessories/' + productId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Product Search of Show Together
		 * Retrieves general information about the products that are show together with the product in question.
		 * Get api/catalog_system/pub/products/crossselling/showtogether/{productId}
		 * @param {number} productId Product's unique identifier
		 * @return {void} OK
		 */
		ProductSearchShowTogether(productId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/catalog_system/pub/products/crossselling/showtogether/' + productId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Product Search of Similars
		 * Retrieves general information about related product searches.
		 * Get api/catalog_system/pub/products/crossselling/similars/{productId}
		 * @param {number} productId Product's unique identifier
		 * @return {void} OK
		 */
		ProductSearchSimilars(productId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/catalog_system/pub/products/crossselling/similars/' + productId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Product Search of Suggestions
		 * Retrieves general information about other product suggestions related to the product.
		 * Get api/catalog_system/pub/products/crossselling/suggestions/{productId}
		 * @param {number} productId Product's unique identifier
		 * @return {void} OK
		 */
		ProductSearchSuggestions(productId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/catalog_system/pub/products/crossselling/suggestions/' + productId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Product Search of Who Bought Also Bought
		 * Retrieves general information about other related products that the user also bought.
		 * Get api/catalog_system/pub/products/crossselling/whoboughtalsobought/{productId}
		 * @param {string} productId Product unique identifier.
		 * @return {Array<ProductSearchWhoBoughtAlsoBoughtReturn>} OK
		 */
		ProductSearchWhoBoughtAlsoBought(productId: string): Observable<Array<ProductSearchWhoBoughtAlsoBoughtReturn>> {
			return this.http.get<Array<ProductSearchWhoBoughtAlsoBoughtReturn>>(this.baseUri + 'api/catalog_system/pub/products/crossselling/whoboughtalsobought/' + (productId == null ? '' : encodeURIComponent(productId)), {});
		}

		/**
		 * Get Product Search of Who Saw Also Bought
		 * Retrieves general information about other related products that the users saw and also bought.
		 * Get api/catalog_system/pub/products/crossselling/whosawalsobought/{productId}
		 * @param {string} productId Product unique identifier.
		 * @return {Array<ProductSearchWhoSawAlsoBoughtReturn>} OK
		 */
		ProductSearchWhoSawAlsoBought(productId: string): Observable<Array<ProductSearchWhoSawAlsoBoughtReturn>> {
			return this.http.get<Array<ProductSearchWhoSawAlsoBoughtReturn>>(this.baseUri + 'api/catalog_system/pub/products/crossselling/whosawalsobought/' + (productId == null ? '' : encodeURIComponent(productId)), {});
		}

		/**
		 * Get Product Search of Who Saw Also Saw
		 * Retrieves general information about other related products that the users also saw.
		 * Get api/catalog_system/pub/products/crossselling/whosawalsosaw/{productId}
		 * @param {number} productId Product unique identifier.
		 * @return {Array<ProductSearchWhoSawAlsoSawReturn>} OK
		 */
		ProductSearchWhoSawAlsoSaw(productId: number): Observable<Array<ProductSearchWhoSawAlsoSawReturn>> {
			return this.http.get<Array<ProductSearchWhoSawAlsoSawReturn>>(this.baseUri + 'api/catalog_system/pub/products/crossselling/whosawalsosaw/' + productId, {});
		}

		/**
		 * Search Product offers
		 * Retrieves existing offers of a specific product.
		 * Get api/catalog_system/pub/products/offers/{productId}
		 * @param {string} productId Product unique number identifier.
		 * @return {Array<OffersGetByProductIdReturn>} OK
		 */
		OffersGetByProductId(productId: string): Observable<Array<OffersGetByProductIdReturn>> {
			return this.http.get<Array<OffersGetByProductIdReturn>>(this.baseUri + 'api/catalog_system/pub/products/offers/' + (productId == null ? '' : encodeURIComponent(productId)), {});
		}

		/**
		 * Search SKU offers
		 * Retrieves existing offers of a specific SKU.
		 * Get api/catalog_system/pub/products/offers/{productId}/sku/{skuId}
		 * @param {string} productId Product unique number identifier.
		 * @param {string} skuId Product unique number identifier.
		 * @return {Array<OffersGetByProductIdAndSkuIdReturn>} OK
		 */
		OffersGetByProductIdAndSkuId(productId: string, skuId: string): Observable<Array<OffersGetByProductIdAndSkuIdReturn>> {
			return this.http.get<Array<OffersGetByProductIdAndSkuIdReturn>>(this.baseUri + 'api/catalog_system/pub/products/offers/' + (productId == null ? '' : encodeURIComponent(productId)) + '/sku/' + (skuId == null ? '' : encodeURIComponent(skuId)), {});
		}

		/**
		 * Search for Products with Filter, Order and Pagination
		 * Retrieves general information about the store products. This information can be filtered and ordered by a number of options. It also can be paginated, filtered and ordered.
		 * ## Filters
		 * - **Filter by full text** - `ft={searchWord}`
		 * E.g.: `ft=television`
		 * - **Filter by category** - `fq=C:/{a}/{b}`
		 * `{a}` and `{b}` are Category IDs
		 * E.g.: `fq=C:/1000041/1000049/`
		 * - **Filter by brand** - `fq=B:/{a}/{b}`
		 * `{a}` and `{b}` are Brand IDs
		 * E.g.: `fq=B:/189385/189387/`
		 * - **Filter by specification** - `fq=specificationFilter_{a}:{b}`
		 * `{a}` is the specification ID
		 * `{b}` is the specification value
		 * E.g.: To filter products where the color is Blue, find the specification ID for color. Suppose it is 123, then the query will be: `fq=specificationFilter_123:Blue`
		 * - **Filter by price range** - `fq=P:[{a} TO {b}]`
		 * `{a}`  is the minimum price "from"
		 * `{b}` is the highest price "to"
		 * E.g.: `fq=P:[0 TO 20]` will search products between 0.00 and 20.00.
		 * - **Filter by collection** - `fq=productClusterIds:{{productClusterId}}`
		 * `productClusterId` is the same as `collectionId`
		 * For more information about collections, read [Creating a product collection](https://help.vtex.com/en/tutorial/creating-a-product-collection).
		 * - **Filter by product ID** - `fq=productId:{{productId}}`
		 * - **Filter by SKU ID** - `fq=skuId:{{skuId}}`
		 * - **Filter by referenceId** - `fq=alternateIds_RefId:{{referenceId}}`
		 * - **Filter by EAN13** - `fq=alternateIds_Ean:{{ean13}}`
		 * - **Filter by availability at a specific sales channel** - `fq=isAvailablePerSalesChannel_{{sc}}:{{bool}}`
		 * `{{sc}}` is the desired sales channel
		 * `{{bool}}` is true ou false, 1 or 0.
		 * E.g.: seaching available products for the sales channel 4 would be `fq=isAvailablePerSalesChannel_4:1`
		 * - **Filter by available at a specific seller** - `fq=sellerId:{{sellerId}}`
		 * The search does not include White Label Sellers.
		 * ## Pagination
		 * - **Initial item number** - `_from={{first}}`
		 * - **Final item number** - `_to={{last}}`
		 * >⚠️ This endpoint returns a maximum of 50 items per response, so the difference between `_from` and `_to` should not exceed this number. The result order is descending, from the highest product ID to the lowest.
		 * ## Sorting
		 * - **Price**
		 * `O=OrderByPriceDESC`
		 * `O=OrderByPriceASC`
		 * - **Top Selling Products**
		 * `O=OrderByTopSaleDESC`
		 * - **Best Reviews**
		 * `O=OrderByReviewRateDESC`
		 * - **Name**
		 * `O=OrderByNameASC`
		 * `O=OrderByNameDESC`
		 * - **Release Date**
		 * `O=OrderByReleaseDateDESC`
		 * - **Best Discounts**
		 * `O=OrderByBestDiscountDESC`
		 * - **Score**
		 * `O=OrderByScoreDESC`
		 * Get api/catalog_system/pub/products/search
		 * @param {string} _from Starter page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
		 * @param {string} _to Finisher page range. These parameters allow the API to be paginated. Take into account that the initial and final pages cannot have a separation superior to 50 pages. Thus, it will be displayed 50 items per page.
		 * @param {string} ft Filter by full text. The form is`ft={searchWord}`
		 * @param {string} fq General filter. It can be by category (`fq=C:/{a}/{b}`), by specification (`fq=specificationFilter_{a}:{b}`),  by price range (`fq=P:[{a} TO {b}]`), by collection (`fq=productClusterIds:{{productClusterId}}`), by product ID (`fq=productId:{{productId}}`),  by SKU ID (`fq=skuId:{{skuId}}`), by Reference ID (`fq=alternateIds_RefId:{{referenceId}}`), by EAN13 (`fq=alternateIds_Ean:{{ean13}}`), by availability at a specific sales channel (`fq=isAvailablePerSalesChannel_{{sc}}:{{bool}}`), by available at a specific seller (`fq=sellerId:{{sellerId}}`)
		 * @param {string} O Sorting method. It can be by Price (`O=OrderByPriceDESC` or `O=OrderByPriceASC`), by Top Selling Products (`O=OrderByTopSaleDESC`), by Best Reviews (`O=OrderByReviewRateDESC`), by Name (`O=OrderByNameASC` or `O=OrderByNameDESC`), by Release Date (`O=OrderByReleaseDateDESC`), by Best Discounts (`O=OrderByBestDiscountDESC`), by Score (`O=OrderByScoreDESC`)
		 * @return {Array<ProductSearchFilteredandOrderedReturn>} OK
		 */
		ProductSearchFilteredandOrdered(_from: string | null | undefined, _to: string | null | undefined, ft: string | null | undefined, fq: string | null | undefined, O: string | null | undefined): Observable<Array<ProductSearchFilteredandOrderedReturn>> {
			return this.http.get<Array<ProductSearchFilteredandOrderedReturn>>(this.baseUri + 'api/catalog_system/pub/products/search?_from=' + (_from == null ? '' : encodeURIComponent(_from)) + '&_to=' + (_to == null ? '' : encodeURIComponent(_to)) + '&ft=' + (ft == null ? '' : encodeURIComponent(ft)) + '&fq=' + (fq == null ? '' : encodeURIComponent(fq)) + '&O=' + (O == null ? '' : encodeURIComponent(O)), {});
		}

		/**
		 * Search Product by Product URL
		 * Retrieves general information about the product of the URL you searched for.
		 * Get api/catalog_system/pub/products/search/{product_text_link}/p
		 * @param {string} product_text_link Product URL
		 * @return {Array<SearchbyproducturlReturn>} 
		 */
		Searchbyproducturl(product_text_link: string): Observable<Array<SearchbyproducturlReturn>> {
			return this.http.get<Array<SearchbyproducturlReturn>>(this.baseUri + 'api/catalog_system/pub/products/search/{product_text_link}/p', {});
		}

		/**
		 * Search for Products
		 * Retrieves general information about the products related to the term searched.
		 * This is the main search used by the store. The user can type anything to be searched.
		 * For example, if they search for a "decanter", this is the URL: `https://{{accountName}}.{{environment}}.com.br/api/catalog_system/pub/products/search/decanter`.
		 * Note that maybe the response can be HTTP 200 or 206, 206 means that it's a partial content response.
		 * If it is a 206 take a look at the Headers, will be an entry called resources. E.g.: resources → 0-9/19. This means that the response is showing items from 0 to 9, 10 items, but there were 19 items found. See more information at the paging route example.
		 * Get api/catalog_system/pub/products/search/{search}
		 * @param {string} search Term used to search products
		 * @return {Array<ProductSearchReturn>} OK
		 */
		ProductSearch(search: string): Observable<Array<ProductSearchReturn>> {
			return this.http.get<Array<ProductSearchReturn>>(this.baseUri + 'api/catalog_system/pub/products/search/' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Product Search Autocomplete
		 * Retrieves product's information related to the searched string.
		 * `{{searchString}} is the part of string the user is looking for.
		 * E.g.: `ref` | `refrig` | `refrigerator`
		 * Get buscaautocomplete
		 * @param {string} productNameContains Part of the string that will be searched.
		 * @return {AutoCompleteReturn} 
		 */
		AutoComplete(productNameContains: string): Observable<AutoCompleteReturn> {
			return this.http.get<AutoCompleteReturn>(this.baseUri + 'buscaautocomplete?productNameContains=' + (productNameContains == null ? '' : encodeURIComponent(productNameContains)), {});
		}
	}

	export interface FacetsGetByCategoryIdAnd_fromAnd_toReturn {

		/**
		 * Category's facet ID.
		 * Required
		 */
		Id: number;

		/**
		 * Category's facet name.
		 * Required
		 */
		Name: string;
	}
	export interface FacetsGetByCategoryIdAnd_fromAnd_toReturnFormProperties {

		/**
		 * Category's facet ID.
		 * Required
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Category's facet name.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFacetsGetByCategoryIdAnd_fromAnd_toReturnFormGroup() {
		return new FormGroup<FacetsGetByCategoryIdAnd_fromAnd_toReturnFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FacetscategoryReturn {

		/**
		 * Array of general information about the brands.
		 * Required
		 */
		FacetscategoryReturnBrands: Array<FacetscategoryReturnBrands>;

		/**
		 * Array of the category tree.
		 * Required
		 */
		FacetscategoryReturnCategoriesTrees: Array<FacetscategoryReturnCategoriesTrees>;

		/**
		 * Array of general information about the categories.
		 * Required
		 */
		FacetscategoryReturnDepartments: Array<FacetscategoryReturnDepartments>;

		/**
		 * Array with general information of the price ranges.
		 * Required
		 */
		PriceRanges: Array<string>;

		/**
		 * Object with general information of specifications.
		 * Required
		 */
		SpecificationFilters: string;

		/**
		 * Summary of the facets.
		 * Required
		 */
		Summary: FacetscategoryReturnSummary;
	}
	export interface FacetscategoryReturnFormProperties {

		/**
		 * Object with general information of specifications.
		 * Required
		 */
		SpecificationFilters: FormControl<string | null | undefined>,
	}
	export function CreateFacetscategoryReturnFormGroup() {
		return new FormGroup<FacetscategoryReturnFormProperties>({
			SpecificationFilters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FacetscategoryReturnBrands {

		/**
		 * Link of the facet.
		 * Required
		 */
		Link: string;

		/**
		 * Enconded link of the facet.
		 * Required
		 */
		LinkEncoded: string;

		/**
		 * Mapping of the facet.
		 * Required
		 */
		Map: string;

		/**
		 * Brand name.
		 * Required
		 */
		Name: string;

		/**
		 * Position of the facet.
		 * Required
		 */
		Position: number;

		/**
		 * Quantity of facets.
		 * Required
		 */
		Quantity: number;

		/**
		 * Value of the facet.
		 * Required
		 */
		Value: string;
	}
	export interface FacetscategoryReturnBrandsFormProperties {

		/**
		 * Link of the facet.
		 * Required
		 */
		Link: FormControl<string | null | undefined>,

		/**
		 * Enconded link of the facet.
		 * Required
		 */
		LinkEncoded: FormControl<string | null | undefined>,

		/**
		 * Mapping of the facet.
		 * Required
		 */
		Map: FormControl<string | null | undefined>,

		/**
		 * Brand name.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Position of the facet.
		 * Required
		 */
		Position: FormControl<number | null | undefined>,

		/**
		 * Quantity of facets.
		 * Required
		 */
		Quantity: FormControl<number | null | undefined>,

		/**
		 * Value of the facet.
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateFacetscategoryReturnBrandsFormGroup() {
		return new FormGroup<FacetscategoryReturnBrandsFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LinkEncoded: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Map: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Position: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FacetscategoryReturnCategoriesTrees {

		/**
		 * Category children.
		 * Required
		 */
		FacetscategoryReturnCategoriesTreesChildren: Array<FacetscategoryReturnCategoriesTreesChildren>;

		/**
		 * Category ID.
		 * Required
		 */
		Id: number;

		/**
		 * Link of the facet.
		 * Required
		 */
		Link: string;

		/**
		 * Encoded link of the facet.
		 * Required
		 */
		LinkEncoded: string;

		/**
		 * Mapping of the facet.
		 * Required
		 */
		Map: string;

		/**
		 * Category name.
		 * Required
		 */
		Name: string;

		/**
		 * Position of the facet.
		 * Required
		 */
		Position: number;

		/**
		 * Quantity of the facets.
		 * Required
		 */
		Quantity: number;

		/**
		 * Value of the facet.
		 * Required
		 */
		Value: string;
	}
	export interface FacetscategoryReturnCategoriesTreesFormProperties {

		/**
		 * Category ID.
		 * Required
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Link of the facet.
		 * Required
		 */
		Link: FormControl<string | null | undefined>,

		/**
		 * Encoded link of the facet.
		 * Required
		 */
		LinkEncoded: FormControl<string | null | undefined>,

		/**
		 * Mapping of the facet.
		 * Required
		 */
		Map: FormControl<string | null | undefined>,

		/**
		 * Category name.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Position of the facet.
		 * Required
		 */
		Position: FormControl<number | null | undefined>,

		/**
		 * Quantity of the facets.
		 * Required
		 */
		Quantity: FormControl<number | null | undefined>,

		/**
		 * Value of the facet.
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateFacetscategoryReturnCategoriesTreesFormGroup() {
		return new FormGroup<FacetscategoryReturnCategoriesTreesFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LinkEncoded: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Map: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Position: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FacetscategoryReturnCategoriesTreesChildren {

		/**
		 * Category children.
		 * Required
		 */
		Children: Array<string>;

		/**
		 * Category ID.
		 * Required
		 */
		Id: number;

		/**
		 * Link of the facet.
		 * Required
		 */
		Link: string;

		/**
		 * Encoded link of the facet.
		 * Required
		 */
		LinkEncoded: string;

		/**
		 * Mapping of the facet.
		 * Required
		 */
		Map: string;

		/**
		 * Category name.
		 * Required
		 */
		Name: string;

		/**
		 * Position of the facet.
		 * Required
		 */
		Position: number;

		/**
		 * Quantity of the facets.
		 * Required
		 */
		Quantity: number;

		/**
		 * Value of the facet.
		 * Required
		 */
		Value: string;
	}
	export interface FacetscategoryReturnCategoriesTreesChildrenFormProperties {

		/**
		 * Category ID.
		 * Required
		 */
		Id: FormControl<number | null | undefined>,

		/**
		 * Link of the facet.
		 * Required
		 */
		Link: FormControl<string | null | undefined>,

		/**
		 * Encoded link of the facet.
		 * Required
		 */
		LinkEncoded: FormControl<string | null | undefined>,

		/**
		 * Mapping of the facet.
		 * Required
		 */
		Map: FormControl<string | null | undefined>,

		/**
		 * Category name.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Position of the facet.
		 * Required
		 */
		Position: FormControl<number | null | undefined>,

		/**
		 * Quantity of the facets.
		 * Required
		 */
		Quantity: FormControl<number | null | undefined>,

		/**
		 * Value of the facet.
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateFacetscategoryReturnCategoriesTreesChildrenFormGroup() {
		return new FormGroup<FacetscategoryReturnCategoriesTreesChildrenFormProperties>({
			Id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LinkEncoded: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Map: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Position: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FacetscategoryReturnDepartments {

		/**
		 * Link of the facet.
		 * Required
		 */
		Link: string;

		/**
		 * Encoded link of the facet.
		 * Required
		 */
		LinkEncoded: string;

		/**
		 * Mapping of the facet.
		 * Required
		 */
		Map: string;

		/**
		 * Category name.
		 * Required
		 */
		Name: string;

		/**
		 * Position of the facets.
		 * Required
		 */
		Position: number;

		/**
		 * Quantity of facets.
		 * Required
		 */
		Quantity: number;

		/**
		 * Value of the facet.
		 * Required
		 */
		Value: string;
	}
	export interface FacetscategoryReturnDepartmentsFormProperties {

		/**
		 * Link of the facet.
		 * Required
		 */
		Link: FormControl<string | null | undefined>,

		/**
		 * Encoded link of the facet.
		 * Required
		 */
		LinkEncoded: FormControl<string | null | undefined>,

		/**
		 * Mapping of the facet.
		 * Required
		 */
		Map: FormControl<string | null | undefined>,

		/**
		 * Category name.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Position of the facets.
		 * Required
		 */
		Position: FormControl<number | null | undefined>,

		/**
		 * Quantity of facets.
		 * Required
		 */
		Quantity: FormControl<number | null | undefined>,

		/**
		 * Value of the facet.
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateFacetscategoryReturnDepartmentsFormGroup() {
		return new FormGroup<FacetscategoryReturnDepartmentsFormProperties>({
			Link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LinkEncoded: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Map: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Position: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Quantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FacetscategoryReturnSummary {

		/**
		 * Brands' quantity of displayed and total items.
		 * Required
		 */
		Brands: FacetscategoryReturnSummaryBrands;

		/**
		 * Category tree's quantity of displayed and total items.
		 * Required
		 */
		CategoriesTrees: FacetscategoryReturnSummaryCategoriesTrees;

		/**
		 * Departments' quantity of displayed and total items.
		 * Required
		 */
		Departments: FacetscategoryReturnSummaryDepartments;

		/**
		 * Price ranges' quantity of displayed and total items.
		 * Required
		 */
		PriceRanges: FacetscategoryReturnSummaryPriceRanges;

		/**
		 * Specification filters' quantity of displayed and total items.
		 * Required
		 */
		SpecificationFilters: string;
	}
	export interface FacetscategoryReturnSummaryFormProperties {

		/**
		 * Specification filters' quantity of displayed and total items.
		 * Required
		 */
		SpecificationFilters: FormControl<string | null | undefined>,
	}
	export function CreateFacetscategoryReturnSummaryFormGroup() {
		return new FormGroup<FacetscategoryReturnSummaryFormProperties>({
			SpecificationFilters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FacetscategoryReturnSummaryBrands {

		/**
		 * Quantity of displayed items.
		 * Required
		 */
		DisplayedItems: number;

		/**
		 * Quantity of total items.
		 * Required
		 */
		TotalItems: number;
	}
	export interface FacetscategoryReturnSummaryBrandsFormProperties {

		/**
		 * Quantity of displayed items.
		 * Required
		 */
		DisplayedItems: FormControl<number | null | undefined>,

		/**
		 * Quantity of total items.
		 * Required
		 */
		TotalItems: FormControl<number | null | undefined>,
	}
	export function CreateFacetscategoryReturnSummaryBrandsFormGroup() {
		return new FormGroup<FacetscategoryReturnSummaryBrandsFormProperties>({
			DisplayedItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FacetscategoryReturnSummaryCategoriesTrees {

		/**
		 * Quantity of displayed items.
		 * Required
		 */
		DisplayedItems: number;

		/**
		 * Quantity of total items.
		 * Required
		 */
		TotalItems: number;
	}
	export interface FacetscategoryReturnSummaryCategoriesTreesFormProperties {

		/**
		 * Quantity of displayed items.
		 * Required
		 */
		DisplayedItems: FormControl<number | null | undefined>,

		/**
		 * Quantity of total items.
		 * Required
		 */
		TotalItems: FormControl<number | null | undefined>,
	}
	export function CreateFacetscategoryReturnSummaryCategoriesTreesFormGroup() {
		return new FormGroup<FacetscategoryReturnSummaryCategoriesTreesFormProperties>({
			DisplayedItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FacetscategoryReturnSummaryDepartments {

		/**
		 * Quantity of displayed items.
		 * Required
		 */
		DisplayedItems: number;

		/**
		 * Quantity of total items.
		 * Required
		 */
		TotalItems: number;
	}
	export interface FacetscategoryReturnSummaryDepartmentsFormProperties {

		/**
		 * Quantity of displayed items.
		 * Required
		 */
		DisplayedItems: FormControl<number | null | undefined>,

		/**
		 * Quantity of total items.
		 * Required
		 */
		TotalItems: FormControl<number | null | undefined>,
	}
	export function CreateFacetscategoryReturnSummaryDepartmentsFormGroup() {
		return new FormGroup<FacetscategoryReturnSummaryDepartmentsFormProperties>({
			DisplayedItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FacetscategoryReturnSummaryPriceRanges {

		/**
		 * Quantity of displayed items.
		 * Required
		 */
		DisplayedItems: number;

		/**
		 * Quantity of total items.
		 * Required
		 */
		TotalItems: number;
	}
	export interface FacetscategoryReturnSummaryPriceRangesFormProperties {

		/**
		 * Quantity of displayed items.
		 * Required
		 */
		DisplayedItems: FormControl<number | null | undefined>,

		/**
		 * Quantity of total items.
		 * Required
		 */
		TotalItems: FormControl<number | null | undefined>,
	}
	export function CreateFacetscategoryReturnSummaryPriceRangesFormGroup() {
		return new FormGroup<FacetscategoryReturnSummaryPriceRangesFormProperties>({
			DisplayedItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TotalItems: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturn {

		/**
		 * Array of the product's specifications.
		 * Required
		 */
		allSpecifications: Array<string>;

		/**
		 * Array of the product's specifications groups.
		 * Required
		 */
		allSpecificationsGroups: Array<string>;

		/**
		 * Brand name.
		 * Required
		 */
		brand: string;

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: number;

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: string;

		/**
		 * Array of the product's categories URLs.
		 * Required
		 */
		categories: Array<string>;

		/**
		 * Array of the product's categories IDs.
		 * Required
		 */
		categoriesIds: Array<string>;

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: string;

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: string;

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: string;

		/**
		 * Array containing the product SKU general information.
		 * Required
		 */
		ProductSearchWhoBoughtAlsoBoughtReturnItems: Array<ProductSearchWhoBoughtAlsoBoughtReturnItems>;

		/**
		 * Product URL.
		 * Required
		 */
		link: string;

		/**
		 * Product URL.
		 * Required
		 */
		linkText: string;

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: string;

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: string;

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: string;

		/**
		 * Product name.
		 * Required
		 */
		productName: string;

		/**
		 * Product reference.
		 * Required
		 */
		productReference: string;

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: number;

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: string;

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: string;

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: string;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnFormProperties {

		/**
		 * Brand name.
		 * Required
		 */
		brand: FormControl<string | null | undefined>,

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: FormControl<number | null | undefined>,

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: FormControl<string | null | undefined>,

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: FormControl<string | null | undefined>,

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: FormControl<string | null | undefined>,

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		linkText: FormControl<string | null | undefined>,

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: FormControl<string | null | undefined>,

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: FormControl<string | null | undefined>,

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: FormControl<string | null | undefined>,

		/**
		 * Product name.
		 * Required
		 */
		productName: FormControl<string | null | undefined>,

		/**
		 * Product reference.
		 * Required
		 */
		productReference: FormControl<string | null | undefined>,

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: FormControl<number | null | undefined>,

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: FormControl<string | null | undefined>,

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: FormControl<string | null | undefined>,

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			brandId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			brandImageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			categoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterHighlights: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metaTagDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReferenceCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productTitle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			searchableClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItems {

		/**
		 * Videos.
		 * Required
		 */
		Videos: Array<string>;

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: string;

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: string;

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: string;

		/**
		 * Array of information about the SKU image.
		 * Required
		 */
		ProductSearchWhoBoughtAlsoBoughtReturnItemsImages: Array<ProductSearchWhoBoughtAlsoBoughtReturnItemsImages>;

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: boolean;

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: string;

		/**
		 * Array with information of SKUs components from a Kit.
		 * Required
		 */
		ProductSearchWhoBoughtAlsoBoughtReturnItemsKitItems: Array<ProductSearchWhoBoughtAlsoBoughtReturnItemsKitItems>;

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: string;

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: string;

		/**
		 * SKU name.
		 * Required
		 */
		name: string;

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: string;

		/**
		 * Reference code ID.
		 * Required
		 */
		ProductSearchWhoBoughtAlsoBoughtReturnItemsReferenceId: Array<ProductSearchWhoBoughtAlsoBoughtReturnItemsReferenceId>;

		/**
		 * Array of SKU sellers.
		 * Required
		 */
		ProductSearchWhoBoughtAlsoBoughtReturnItemsSellers: Array<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellers>;

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: number;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsFormProperties {

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: FormControl<string | null | undefined>,

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: FormControl<string | null | undefined>,

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: FormControl<string | null | undefined>,

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: FormControl<boolean | null | undefined>,

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: FormControl<string | null | undefined>,

		/**
		 * SKU name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: FormControl<string | null | undefined>,

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsFormProperties>({
			complementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ean: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			estimatedDateArrival: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isKit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			measurementUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modalType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameComplete: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unitMultiplier: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsImages {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: string;

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: string;

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: string;

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: string;

		/**
		 * Image text.
		 * Required
		 */
		imageText: string;

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: string;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsImagesFormProperties {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: FormControl<string | null | undefined>,

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: FormControl<string | null | undefined>,

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: FormControl<string | null | undefined>,

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: FormControl<string | null | undefined>,

		/**
		 * Image text.
		 * Required
		 */
		imageText: FormControl<string | null | undefined>,

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsImagesFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsImagesFormProperties>({
			imageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsKitItems {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: number;

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: string;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsKitItemsFormProperties {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsKitItemsFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsKitItemsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsReferenceId {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: string;

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: string;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsReferenceIdFormProperties {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsReferenceIdFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsReferenceIdFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellers {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: string;

		/**
		 * AKA Commertial Condition.
		 * Required
		 */
		commertialOffer: ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOffer;

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: boolean;

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: string;

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: string;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersFormProperties {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: FormControl<string | null | undefined>,

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: FormControl<boolean | null | undefined>,

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: FormControl<string | null | undefined>,

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsSellersFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersFormProperties>({
			addToCartLink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerDefault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOffer {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: number;

		/**
		 * Array of other products that can be bought together with the product in question.
		 * Required
		 */
		BuyTogether: Array<string>;

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: string;

		/**
		 * Delivery SLA samples.
		 * Required
		 */
		ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamples: Array<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamples>;

		/**
		 * Delivery SLA samples per region.
		 * Required
		 */
		DeliverySlaSamplesPerRegion: ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion;

		/**
		 * Discount hightlight.
		 * Required
		 */
		DiscountHighLight: Array<string>;

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: string;

		/**
		 * Array of SKU gifts IDs.
		 * Required
		 */
		GiftSkuIds: Array<string>;

		/**
		 * Installments options.
		 * Required
		 */
		ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferInstallments: Array<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferInstallments>;

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: boolean;

		/**
		 * Item metadata attachment.
		 * Required
		 */
		ItemMetadataAttachment: Array<string>;

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: number;

		/**
		 * Payment options.
		 * Required
		 */
		PaymentOptions: ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptions;

		/**
		 * Price of the product.
		 * Required
		 */
		Price: number;

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: string;

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: number;

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: number;

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: number;

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: number;

		/**
		 * Teasers.
		 * Required
		 */
		Teasers: Array<string>;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferFormProperties {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: FormControl<number | null | undefined>,

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: FormControl<string | null | undefined>,

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: FormControl<string | null | undefined>,

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: FormControl<boolean | null | undefined>,

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: FormControl<number | null | undefined>,

		/**
		 * Price of the product.
		 * Required
		 */
		Price: FormControl<number | null | undefined>,

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: FormControl<string | null | undefined>,

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: FormControl<number | null | undefined>,

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: FormControl<number | null | undefined>,

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: FormControl<number | null | undefined>,

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferFormProperties>({
			AvailableQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CacheVersionUsedToCallCheckout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GetInfoErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ListPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PriceValidUntil: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceWithoutDiscount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RewardValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SaleChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Tax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamples {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion {

		/** Delivery SLA ID. */
		'0'?: ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties {
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties>({
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_ {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferInstallments {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: number;

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: string;

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: number;

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: string;

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: string;

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: number;

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: number;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferInstallmentsFormProperties {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: FormControl<number | null | undefined>,

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: FormControl<number | null | undefined>,

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: FormControl<string | null | undefined>,

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: FormControl<number | null | undefined>,

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferInstallmentsFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferInstallmentsFormProperties>({
			InterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfInstallments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PaymentSystemGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PaymentSystemName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TotalValuePlusInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptions {

		/**
		 * Available accounts.
		 * Required
		 */
		availableAccounts: Array<string>;

		/**
		 * Available tokens.
		 * Required
		 */
		availableTokens: Array<string>;

		/**
		 * GiftCardMessages.
		 * Required
		 */
		giftCardMessages: Array<string>;

		/**
		 * GiftCards.
		 * Required
		 */
		giftCards: Array<string>;

		/**
		 * installment options.
		 * Required
		 */
		ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions: Array<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions>;

		/**
		 * Payment systems.
		 * Required
		 */
		ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems: Array<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems>;

		/**
		 * Payments.
		 * Required
		 */
		payments: Array<string>;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsFormProperties {
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsFormProperties>({
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions {

		/**
		 * Bin.
		 * Required
		 */
		bin: string;

		/**
		 * Installments.
		 * Required
		 */
		ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments: Array<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments>;

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: string;

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: string;

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: string;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties {

		/**
		 * Bin.
		 * Required
		 */
		bin: FormControl<string | null | undefined>,

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: FormControl<string | null | undefined>,

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties>({
			bin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Seller merchant installments.
		 * Required
		 */
		ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments: Array<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments>;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * ID.
		 * Required
		 */
		id: string;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: string;

		/**
		 * Description.
		 * Required
		 */
		description: string;

		/**
		 * Due date.
		 * Required
		 */
		dueDate: string;

		/**
		 * Group name.
		 * Required
		 */
		groupName: string;

		/**
		 * ID.
		 * Required
		 */
		id: number;

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: boolean;

		/**
		 * Name.
		 * Required
		 */
		name: string;

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: boolean;

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: boolean;

		/**
		 * String ID.
		 * Required
		 */
		stringId: string;

		/**
		 * Template.
		 * Required
		 */
		template: string;

		/**
		 * Validator.
		 * Required
		 */
		validator: string;
	}
	export interface ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: FormControl<string | null | undefined>,

		/**
		 * Description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Due date.
		 * Required
		 */
		dueDate: FormControl<string | null | undefined>,

		/**
		 * Group name.
		 * Required
		 */
		groupName: FormControl<string | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: FormControl<boolean | null | undefined>,

		/**
		 * Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: FormControl<boolean | null | undefined>,

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: FormControl<boolean | null | undefined>,

		/**
		 * String ID.
		 * Required
		 */
		stringId: FormControl<string | null | undefined>,

		/**
		 * Template.
		 * Required
		 */
		template: FormControl<string | null | undefined>,

		/**
		 * Validator.
		 * Required
		 */
		validator: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormGroup() {
		return new FormGroup<ProductSearchWhoBoughtAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties>({
			availablePayments: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isCustom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requiresAuthentication: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			requiresDocument: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			stringId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturn {

		/**
		 * Array of the product's specifications.
		 * Required
		 */
		allSpecifications: Array<string>;

		/**
		 * Array of the product's specifications groups.
		 * Required
		 */
		allSpecificationsGroups: Array<string>;

		/**
		 * Brand name.
		 * Required
		 */
		brand: string;

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: number;

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: string;

		/**
		 * Array of the product's categories URLs.
		 * Required
		 */
		categories: Array<string>;

		/**
		 * Array of the product's categories IDs.
		 * Required
		 */
		categoriesIds: Array<string>;

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: string;

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: string;

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: string;

		/**
		 * Array containing the product SKU general information.
		 * Required
		 */
		ProductSearchWhoSawAlsoBoughtReturnItems: Array<ProductSearchWhoSawAlsoBoughtReturnItems>;

		/**
		 * Product URL.
		 * Required
		 */
		link: string;

		/**
		 * Product URL.
		 * Required
		 */
		linkText: string;

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: string;

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: string;

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: string;

		/**
		 * Product name.
		 * Required
		 */
		productName: string;

		/**
		 * Product reference.
		 * Required
		 */
		productReference: string;

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: number;

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: string;

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: string;

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: string;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnFormProperties {

		/**
		 * Brand name.
		 * Required
		 */
		brand: FormControl<string | null | undefined>,

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: FormControl<number | null | undefined>,

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: FormControl<string | null | undefined>,

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: FormControl<string | null | undefined>,

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: FormControl<string | null | undefined>,

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		linkText: FormControl<string | null | undefined>,

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: FormControl<string | null | undefined>,

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: FormControl<string | null | undefined>,

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: FormControl<string | null | undefined>,

		/**
		 * Product name.
		 * Required
		 */
		productName: FormControl<string | null | undefined>,

		/**
		 * Product reference.
		 * Required
		 */
		productReference: FormControl<string | null | undefined>,

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: FormControl<number | null | undefined>,

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: FormControl<string | null | undefined>,

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: FormControl<string | null | undefined>,

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			brandId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			brandImageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			categoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterHighlights: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metaTagDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReferenceCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productTitle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			searchableClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItems {

		/**
		 * Videos.
		 * Required
		 */
		Videos: Array<string>;

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: string;

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: string;

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: string;

		/**
		 * Array of information about the SKU image.
		 * Required
		 */
		ProductSearchWhoSawAlsoBoughtReturnItemsImages: Array<ProductSearchWhoSawAlsoBoughtReturnItemsImages>;

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: boolean;

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: string;

		/**
		 * Array with information of SKUs components from a Kit.
		 * Required
		 */
		ProductSearchWhoSawAlsoBoughtReturnItemsKitItems: Array<ProductSearchWhoSawAlsoBoughtReturnItemsKitItems>;

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: string;

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: string;

		/**
		 * SKU name.
		 * Required
		 */
		name: string;

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: string;

		/**
		 * Reference code ID.
		 * Required
		 */
		ProductSearchWhoSawAlsoBoughtReturnItemsReferenceId: Array<ProductSearchWhoSawAlsoBoughtReturnItemsReferenceId>;

		/**
		 * Array of SKU sellers.
		 * Required
		 */
		ProductSearchWhoSawAlsoBoughtReturnItemsSellers: Array<ProductSearchWhoSawAlsoBoughtReturnItemsSellers>;

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: number;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsFormProperties {

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: FormControl<string | null | undefined>,

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: FormControl<string | null | undefined>,

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: FormControl<string | null | undefined>,

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: FormControl<boolean | null | undefined>,

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: FormControl<string | null | undefined>,

		/**
		 * SKU name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: FormControl<string | null | undefined>,

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsFormProperties>({
			complementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ean: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			estimatedDateArrival: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isKit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			measurementUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modalType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameComplete: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unitMultiplier: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsImages {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: string;

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: string;

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: string;

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: string;

		/**
		 * Image text.
		 * Required
		 */
		imageText: string;

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: string;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsImagesFormProperties {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: FormControl<string | null | undefined>,

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: FormControl<string | null | undefined>,

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: FormControl<string | null | undefined>,

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: FormControl<string | null | undefined>,

		/**
		 * Image text.
		 * Required
		 */
		imageText: FormControl<string | null | undefined>,

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsImagesFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsImagesFormProperties>({
			imageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsKitItems {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: number;

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: string;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsKitItemsFormProperties {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsKitItemsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsKitItemsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsReferenceId {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: string;

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: string;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsReferenceIdFormProperties {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsReferenceIdFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsReferenceIdFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellers {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: string;

		/**
		 * AKA Commertial Condition.
		 * Required
		 */
		commertialOffer: ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOffer;

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: boolean;

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: string;

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: string;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersFormProperties {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: FormControl<string | null | undefined>,

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: FormControl<boolean | null | undefined>,

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: FormControl<string | null | undefined>,

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsSellersFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsSellersFormProperties>({
			addToCartLink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerDefault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOffer {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: number;

		/**
		 * Array of other products that can be bought together with the product in question.
		 * Required
		 */
		BuyTogether: Array<string>;

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: string;

		/**
		 * Delivery SLA samples.
		 * Required
		 */
		ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamples: Array<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamples>;

		/**
		 * Delivery SLA samples per region.
		 * Required
		 */
		DeliverySlaSamplesPerRegion: ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion;

		/**
		 * Discount hightlight.
		 * Required
		 */
		DiscountHighLight: Array<string>;

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: string;

		/**
		 * Array of SKU gifts IDs.
		 * Required
		 */
		GiftSkuIds: Array<string>;

		/**
		 * Installments options.
		 * Required
		 */
		ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferInstallments: Array<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferInstallments>;

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: boolean;

		/**
		 * Item metadata attachment.
		 * Required
		 */
		ItemMetadataAttachment: Array<string>;

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: number;

		/**
		 * Payment options.
		 * Required
		 */
		PaymentOptions: ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptions;

		/**
		 * Price of the product.
		 * Required
		 */
		Price: number;

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: string;

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: number;

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: number;

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: number;

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: number;

		/**
		 * Teasers.
		 * Required
		 */
		Teasers: Array<string>;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferFormProperties {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: FormControl<number | null | undefined>,

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: FormControl<string | null | undefined>,

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: FormControl<string | null | undefined>,

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: FormControl<boolean | null | undefined>,

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: FormControl<number | null | undefined>,

		/**
		 * Price of the product.
		 * Required
		 */
		Price: FormControl<number | null | undefined>,

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: FormControl<string | null | undefined>,

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: FormControl<number | null | undefined>,

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: FormControl<number | null | undefined>,

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: FormControl<number | null | undefined>,

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferFormProperties>({
			AvailableQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CacheVersionUsedToCallCheckout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GetInfoErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ListPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PriceValidUntil: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceWithoutDiscount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RewardValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SaleChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Tax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamples {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion {

		/** Delivery SLA ID. */
		'0'?: ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties {
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties>({
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_ {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferInstallments {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: number;

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: string;

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: number;

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: string;

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: string;

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: number;

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: number;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferInstallmentsFormProperties {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: FormControl<number | null | undefined>,

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: FormControl<number | null | undefined>,

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: FormControl<string | null | undefined>,

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: FormControl<number | null | undefined>,

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferInstallmentsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferInstallmentsFormProperties>({
			InterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfInstallments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PaymentSystemGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PaymentSystemName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TotalValuePlusInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptions {

		/**
		 * Available accounts.
		 * Required
		 */
		availableAccounts: Array<string>;

		/**
		 * Available tokens.
		 * Required
		 */
		availableTokens: Array<string>;

		/**
		 * GiftCardMessages.
		 * Required
		 */
		giftCardMessages: Array<string>;

		/**
		 * GiftCards.
		 * Required
		 */
		giftCards: Array<string>;

		/**
		 * installment options.
		 * Required
		 */
		ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions: Array<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions>;

		/**
		 * Payment systems.
		 * Required
		 */
		ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems: Array<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems>;

		/**
		 * Payments.
		 * Required
		 */
		payments: Array<string>;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsFormProperties {
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsFormProperties>({
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions {

		/**
		 * Bin.
		 * Required
		 */
		bin: string;

		/**
		 * Installments.
		 * Required
		 */
		ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments: Array<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments>;

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: string;

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: string;

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: string;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties {

		/**
		 * Bin.
		 * Required
		 */
		bin: FormControl<string | null | undefined>,

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: FormControl<string | null | undefined>,

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties>({
			bin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Seller merchant installments.
		 * Required
		 */
		ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments: Array<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments>;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * ID.
		 * Required
		 */
		id: string;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: string;

		/**
		 * Description.
		 * Required
		 */
		description: string;

		/**
		 * Due date.
		 * Required
		 */
		dueDate: string;

		/**
		 * Group name.
		 * Required
		 */
		groupName: string;

		/**
		 * ID.
		 * Required
		 */
		id: number;

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: boolean;

		/**
		 * Name.
		 * Required
		 */
		name: string;

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: boolean;

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: boolean;

		/**
		 * String ID.
		 * Required
		 */
		stringId: string;

		/**
		 * Template.
		 * Required
		 */
		template: string;

		/**
		 * Validator.
		 * Required
		 */
		validator: string;
	}
	export interface ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: FormControl<string | null | undefined>,

		/**
		 * Description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Due date.
		 * Required
		 */
		dueDate: FormControl<string | null | undefined>,

		/**
		 * Group name.
		 * Required
		 */
		groupName: FormControl<string | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: FormControl<boolean | null | undefined>,

		/**
		 * Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: FormControl<boolean | null | undefined>,

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: FormControl<boolean | null | undefined>,

		/**
		 * String ID.
		 * Required
		 */
		stringId: FormControl<string | null | undefined>,

		/**
		 * Template.
		 * Required
		 */
		template: FormControl<string | null | undefined>,

		/**
		 * Validator.
		 * Required
		 */
		validator: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoBoughtReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties>({
			availablePayments: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isCustom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requiresAuthentication: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			requiresDocument: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			stringId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturn {

		/**
		 * Array of the product's specifications.
		 * Required
		 */
		allSpecifications: Array<string>;

		/**
		 * Array of the product's specifications groups.
		 * Required
		 */
		allSpecificationsGroups: Array<string>;

		/**
		 * Brand name.
		 * Required
		 */
		brand: string;

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: number;

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: string;

		/**
		 * Array of the product's categories URLs.
		 * Required
		 */
		categories: Array<string>;

		/**
		 * Array of the product's categories IDs.
		 * Required
		 */
		categoriesIds: Array<string>;

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: string;

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: string;

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: string;

		/**
		 * Array containing the product SKU general information.
		 * Required
		 */
		ProductSearchWhoSawAlsoSawReturnItems: Array<ProductSearchWhoSawAlsoSawReturnItems>;

		/**
		 * Product URL.
		 * Required
		 */
		link: string;

		/**
		 * Product URL.
		 * Required
		 */
		linkText: string;

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: string;

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: string;

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: string;

		/**
		 * Product name.
		 * Required
		 */
		productName: string;

		/**
		 * Product reference.
		 * Required
		 */
		productReference: string;

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: number;

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: string;

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: string;

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: string;
	}
	export interface ProductSearchWhoSawAlsoSawReturnFormProperties {

		/**
		 * Brand name.
		 * Required
		 */
		brand: FormControl<string | null | undefined>,

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: FormControl<number | null | undefined>,

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: FormControl<string | null | undefined>,

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: FormControl<string | null | undefined>,

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: FormControl<string | null | undefined>,

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		linkText: FormControl<string | null | undefined>,

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: FormControl<string | null | undefined>,

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: FormControl<string | null | undefined>,

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: FormControl<string | null | undefined>,

		/**
		 * Product name.
		 * Required
		 */
		productName: FormControl<string | null | undefined>,

		/**
		 * Product reference.
		 * Required
		 */
		productReference: FormControl<string | null | undefined>,

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: FormControl<number | null | undefined>,

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: FormControl<string | null | undefined>,

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: FormControl<string | null | undefined>,

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			brandId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			brandImageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			categoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterHighlights: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metaTagDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReferenceCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productTitle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			searchableClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItems {

		/**
		 * Videos.
		 * Required
		 */
		Videos: Array<string>;

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: string;

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: string;

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: string;

		/**
		 * Array of information about the SKU image.
		 * Required
		 */
		ProductSearchWhoSawAlsoSawReturnItemsImages: Array<ProductSearchWhoSawAlsoSawReturnItemsImages>;

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: boolean;

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: string;

		/**
		 * Array with information of SKUs components from a Kit.
		 * Required
		 */
		ProductSearchWhoSawAlsoSawReturnItemsKitItems: Array<ProductSearchWhoSawAlsoSawReturnItemsKitItems>;

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: string;

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: string;

		/**
		 * SKU name.
		 * Required
		 */
		name: string;

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: string;

		/**
		 * Reference code ID.
		 * Required
		 */
		ProductSearchWhoSawAlsoSawReturnItemsReferenceId: Array<ProductSearchWhoSawAlsoSawReturnItemsReferenceId>;

		/**
		 * Array of SKU sellers.
		 * Required
		 */
		ProductSearchWhoSawAlsoSawReturnItemsSellers: Array<ProductSearchWhoSawAlsoSawReturnItemsSellers>;

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: number;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsFormProperties {

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: FormControl<string | null | undefined>,

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: FormControl<string | null | undefined>,

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: FormControl<string | null | undefined>,

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: FormControl<boolean | null | undefined>,

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: FormControl<string | null | undefined>,

		/**
		 * SKU name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: FormControl<string | null | undefined>,

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsFormProperties>({
			complementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ean: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			estimatedDateArrival: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isKit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			measurementUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modalType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameComplete: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unitMultiplier: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsImages {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: string;

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: string;

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: string;

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: string;

		/**
		 * Image text.
		 * Required
		 */
		imageText: string;

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: string;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsImagesFormProperties {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: FormControl<string | null | undefined>,

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: FormControl<string | null | undefined>,

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: FormControl<string | null | undefined>,

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: FormControl<string | null | undefined>,

		/**
		 * Image text.
		 * Required
		 */
		imageText: FormControl<string | null | undefined>,

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsImagesFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsImagesFormProperties>({
			imageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsKitItems {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: number;

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: string;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsKitItemsFormProperties {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsKitItemsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsKitItemsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsReferenceId {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: string;

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: string;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsReferenceIdFormProperties {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsReferenceIdFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsReferenceIdFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsSellers {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: string;

		/**
		 * AKA Commertial Condition.
		 * Required
		 */
		commertialOffer: ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOffer;

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: boolean;

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: string;

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: string;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersFormProperties {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: FormControl<string | null | undefined>,

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: FormControl<boolean | null | undefined>,

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: FormControl<string | null | undefined>,

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsSellersFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsSellersFormProperties>({
			addToCartLink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerDefault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOffer {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: number;

		/**
		 * Array of other products that can be bought together with the product in question.
		 * Required
		 */
		BuyTogether: Array<string>;

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: string;

		/**
		 * Delivery SLA samples.
		 * Required
		 */
		ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamples: Array<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamples>;

		/**
		 * Delivery SLA samples per region.
		 * Required
		 */
		DeliverySlaSamplesPerRegion: ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion;

		/**
		 * Discount hightlight.
		 * Required
		 */
		DiscountHighLight: Array<string>;

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: string;

		/**
		 * Array of SKU gifts IDs.
		 * Required
		 */
		GiftSkuIds: Array<string>;

		/**
		 * Installments options.
		 * Required
		 */
		ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferInstallments: Array<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferInstallments>;

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: boolean;

		/**
		 * Item metadata attachment.
		 * Required
		 */
		ItemMetadataAttachment: Array<string>;

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: number;

		/**
		 * Payment options.
		 * Required
		 */
		PaymentOptions: ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptions;

		/**
		 * Price of the product.
		 * Required
		 */
		Price: number;

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: string;

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: number;

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: number;

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: number;

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: number;

		/**
		 * Teasers.
		 * Required
		 */
		Teasers: Array<string>;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferFormProperties {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: FormControl<number | null | undefined>,

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: FormControl<string | null | undefined>,

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: FormControl<string | null | undefined>,

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: FormControl<boolean | null | undefined>,

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: FormControl<number | null | undefined>,

		/**
		 * Price of the product.
		 * Required
		 */
		Price: FormControl<number | null | undefined>,

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: FormControl<string | null | undefined>,

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: FormControl<number | null | undefined>,

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: FormControl<number | null | undefined>,

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: FormControl<number | null | undefined>,

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferFormProperties>({
			AvailableQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CacheVersionUsedToCallCheckout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GetInfoErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ListPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PriceValidUntil: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceWithoutDiscount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RewardValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SaleChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Tax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamples {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion {

		/** Delivery SLA ID. */
		'0'?: ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties {
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties>({
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_ {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferInstallments {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: number;

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: string;

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: number;

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: string;

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: string;

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: number;

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: number;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferInstallmentsFormProperties {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: FormControl<number | null | undefined>,

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: FormControl<number | null | undefined>,

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: FormControl<string | null | undefined>,

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: FormControl<number | null | undefined>,

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferInstallmentsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferInstallmentsFormProperties>({
			InterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfInstallments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PaymentSystemGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PaymentSystemName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TotalValuePlusInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptions {

		/**
		 * Available accounts.
		 * Required
		 */
		availableAccounts: Array<string>;

		/**
		 * Available tokens.
		 * Required
		 */
		availableTokens: Array<string>;

		/**
		 * GiftCardMessages.
		 * Required
		 */
		giftCardMessages: Array<string>;

		/**
		 * GiftCards.
		 * Required
		 */
		giftCards: Array<string>;

		/**
		 * installment options.
		 * Required
		 */
		ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions: Array<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions>;

		/**
		 * Payment systems.
		 * Required
		 */
		ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems: Array<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems>;

		/**
		 * Payments.
		 * Required
		 */
		payments: Array<string>;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsFormProperties {
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsFormProperties>({
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions {

		/**
		 * Bin.
		 * Required
		 */
		bin: string;

		/**
		 * Installments.
		 * Required
		 */
		ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments: Array<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments>;

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: string;

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: string;

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: string;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties {

		/**
		 * Bin.
		 * Required
		 */
		bin: FormControl<string | null | undefined>,

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: FormControl<string | null | undefined>,

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties>({
			bin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Seller merchant installments.
		 * Required
		 */
		ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments: Array<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments>;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * ID.
		 * Required
		 */
		id: string;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: string;

		/**
		 * Description.
		 * Required
		 */
		description: string;

		/**
		 * Due date.
		 * Required
		 */
		dueDate: string;

		/**
		 * Group name.
		 * Required
		 */
		groupName: string;

		/**
		 * ID.
		 * Required
		 */
		id: number;

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: boolean;

		/**
		 * Name.
		 * Required
		 */
		name: string;

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: boolean;

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: boolean;

		/**
		 * String ID.
		 * Required
		 */
		stringId: string;

		/**
		 * Template.
		 * Required
		 */
		template: string;

		/**
		 * Validator.
		 * Required
		 */
		validator: string;
	}
	export interface ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: FormControl<string | null | undefined>,

		/**
		 * Description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Due date.
		 * Required
		 */
		dueDate: FormControl<string | null | undefined>,

		/**
		 * Group name.
		 * Required
		 */
		groupName: FormControl<string | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: FormControl<boolean | null | undefined>,

		/**
		 * Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: FormControl<boolean | null | undefined>,

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: FormControl<boolean | null | undefined>,

		/**
		 * String ID.
		 * Required
		 */
		stringId: FormControl<string | null | undefined>,

		/**
		 * Template.
		 * Required
		 */
		template: FormControl<string | null | undefined>,

		/**
		 * Validator.
		 * Required
		 */
		validator: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormGroup() {
		return new FormGroup<ProductSearchWhoSawAlsoSawReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties>({
			availablePayments: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isCustom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requiresAuthentication: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			requiresDocument: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			stringId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OffersGetByProductIdReturn {

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		EanId: string;

		/**
		 * If the SKU is active or not.
		 * Required
		 */
		IsActive: boolean;

		/**
		 * Time that the offer was last modified.
		 * Required
		 */
		LastModified: string;

		/**
		 * General information of the main image of the SKU.
		 * Required
		 */
		MainImage: OffersGetByProductIdReturnMainImage;

		/**
		 * SKU name.
		 * Required
		 */
		Name: string;

		/**
		 * SKU complete name.
		 * Required
		 */
		NameComplete: string;

		/**
		 * AKA Commertial Condition.
		 * Required
		 */
		OffersGetByProductIdReturnOffers: Array<OffersGetByProductIdReturnOffers>;

		/**
		 * Product ID.
		 * Required
		 */
		ProductId: string;

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		RefId: string;

		/**
		 * SKU ID.
		 * Required
		 */
		SkuId: string;
	}
	export interface OffersGetByProductIdReturnFormProperties {

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		EanId: FormControl<string | null | undefined>,

		/**
		 * If the SKU is active or not.
		 * Required
		 */
		IsActive: FormControl<boolean | null | undefined>,

		/**
		 * Time that the offer was last modified.
		 * Required
		 */
		LastModified: FormControl<string | null | undefined>,

		/**
		 * SKU name.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * SKU complete name.
		 * Required
		 */
		NameComplete: FormControl<string | null | undefined>,

		/**
		 * Product ID.
		 * Required
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		RefId: FormControl<string | null | undefined>,

		/**
		 * SKU ID.
		 * Required
		 */
		SkuId: FormControl<string | null | undefined>,
	}
	export function CreateOffersGetByProductIdReturnFormGroup() {
		return new FormGroup<OffersGetByProductIdReturnFormProperties>({
			EanId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NameComplete: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RefId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SkuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OffersGetByProductIdReturnMainImage {

		/**
		 * Unique identifier of the association of the Image to the SKU.
		 * Required
		 */
		ImageId: string;

		/**
		 * Image Label.
		 * Required
		 */
		ImageLabel: string;

		/**
		 * Image file path.
		 * Required
		 */
		ImagePath: string;

		/**
		 * Image HTML tag.
		 * Required
		 */
		ImageTag: string;

		/**
		 * General text of the image.
		 * Required
		 */
		ImageText: string;

		/**
		 * If the image is the main image of the SKU or not.
		 * Required
		 */
		IsMain: boolean;

		/**
		 * If the image has zoom applied.
		 * Required
		 */
		IsZoomSize: boolean;

		/**
		 * Time that the image was last modified.
		 * Required
		 */
		LastModified: string;
	}
	export interface OffersGetByProductIdReturnMainImageFormProperties {

		/**
		 * Unique identifier of the association of the Image to the SKU.
		 * Required
		 */
		ImageId: FormControl<string | null | undefined>,

		/**
		 * Image Label.
		 * Required
		 */
		ImageLabel: FormControl<string | null | undefined>,

		/**
		 * Image file path.
		 * Required
		 */
		ImagePath: FormControl<string | null | undefined>,

		/**
		 * Image HTML tag.
		 * Required
		 */
		ImageTag: FormControl<string | null | undefined>,

		/**
		 * General text of the image.
		 * Required
		 */
		ImageText: FormControl<string | null | undefined>,

		/**
		 * If the image is the main image of the SKU or not.
		 * Required
		 */
		IsMain: FormControl<boolean | null | undefined>,

		/**
		 * If the image has zoom applied.
		 * Required
		 */
		IsZoomSize: FormControl<boolean | null | undefined>,

		/**
		 * Time that the image was last modified.
		 * Required
		 */
		LastModified: FormControl<string | null | undefined>,
	}
	export function CreateOffersGetByProductIdReturnMainImageFormGroup() {
		return new FormGroup<OffersGetByProductIdReturnMainImageFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImagePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsMain: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			IsZoomSize: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OffersGetByProductIdReturnOffers {

		/**
		 * Trade policy that the SKU in contained.
		 * Required
		 */
		AvailableSalesChannels: string;

		/**
		 * Offers per trade policy.
		 * Required
		 */
		OffersGetByProductIdReturnOffersOffersPerSalesChannel: Array<OffersGetByProductIdReturnOffersOffersPerSalesChannel>;

		/**
		 * Seller ID.
		 * Required
		 */
		SellerId: string;

		/**
		 * ID of the association of the SKU with the seller.
		 * Required
		 */
		SellerSkuId: string;
	}
	export interface OffersGetByProductIdReturnOffersFormProperties {

		/**
		 * Trade policy that the SKU in contained.
		 * Required
		 */
		AvailableSalesChannels: FormControl<string | null | undefined>,

		/**
		 * Seller ID.
		 * Required
		 */
		SellerId: FormControl<string | null | undefined>,

		/**
		 * ID of the association of the SKU with the seller.
		 * Required
		 */
		SellerSkuId: FormControl<string | null | undefined>,
	}
	export function CreateOffersGetByProductIdReturnOffersFormGroup() {
		return new FormGroup<OffersGetByProductIdReturnOffersFormProperties>({
			AvailableSalesChannels: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SellerSkuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OffersGetByProductIdReturnOffersOffersPerSalesChannel {

		/**
		 * SKU available quantity.
		 * Required
		 */
		AvailableQuantity: number;

		/**
		 * If the SKU is available or not.
		 * Required
		 */
		IsAvailable: boolean;

		/**
		 * SKU list price.
		 * Required
		 */
		ListPrice: number;

		/**
		 * SKU price.
		 * Required
		 */
		Price: number;

		/**
		 * SKU precie without discount.
		 * Required
		 */
		PriceWithoutDiscount: number;

		/**
		 * SKU trade policy.
		 * Required
		 */
		SaleChannel: number;
	}
	export interface OffersGetByProductIdReturnOffersOffersPerSalesChannelFormProperties {

		/**
		 * SKU available quantity.
		 * Required
		 */
		AvailableQuantity: FormControl<number | null | undefined>,

		/**
		 * If the SKU is available or not.
		 * Required
		 */
		IsAvailable: FormControl<boolean | null | undefined>,

		/**
		 * SKU list price.
		 * Required
		 */
		ListPrice: FormControl<number | null | undefined>,

		/**
		 * SKU price.
		 * Required
		 */
		Price: FormControl<number | null | undefined>,

		/**
		 * SKU precie without discount.
		 * Required
		 */
		PriceWithoutDiscount: FormControl<number | null | undefined>,

		/**
		 * SKU trade policy.
		 * Required
		 */
		SaleChannel: FormControl<number | null | undefined>,
	}
	export function CreateOffersGetByProductIdReturnOffersOffersPerSalesChannelFormGroup() {
		return new FormGroup<OffersGetByProductIdReturnOffersOffersPerSalesChannelFormProperties>({
			AvailableQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IsAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ListPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PriceWithoutDiscount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SaleChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OffersGetByProductIdAndSkuIdReturn {

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		EanId: string;

		/**
		 * If the SKU is active or not.
		 * Required
		 */
		IsActive: boolean;

		/**
		 * Time that the offer was last modified.
		 * Required
		 */
		LastModified: string;

		/**
		 * General information of the main image of the SKU.
		 * Required
		 */
		MainImage: OffersGetByProductIdAndSkuIdReturnMainImage;

		/**
		 * SKU name.
		 * Required
		 */
		Name: string;

		/**
		 * SKU complete name.
		 * Required
		 */
		NameComplete: string;

		/**
		 * AKA Commertial Condition.
		 * Required
		 */
		OffersGetByProductIdAndSkuIdReturnOffers: Array<OffersGetByProductIdAndSkuIdReturnOffers>;

		/**
		 * Product ID.
		 * Required
		 */
		ProductId: string;

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		RefId: string;

		/**
		 * SKU ID.
		 * Required
		 */
		SkuId: string;
	}
	export interface OffersGetByProductIdAndSkuIdReturnFormProperties {

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		EanId: FormControl<string | null | undefined>,

		/**
		 * If the SKU is active or not.
		 * Required
		 */
		IsActive: FormControl<boolean | null | undefined>,

		/**
		 * Time that the offer was last modified.
		 * Required
		 */
		LastModified: FormControl<string | null | undefined>,

		/**
		 * SKU name.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * SKU complete name.
		 * Required
		 */
		NameComplete: FormControl<string | null | undefined>,

		/**
		 * Product ID.
		 * Required
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		RefId: FormControl<string | null | undefined>,

		/**
		 * SKU ID.
		 * Required
		 */
		SkuId: FormControl<string | null | undefined>,
	}
	export function CreateOffersGetByProductIdAndSkuIdReturnFormGroup() {
		return new FormGroup<OffersGetByProductIdAndSkuIdReturnFormProperties>({
			EanId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NameComplete: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RefId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SkuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OffersGetByProductIdAndSkuIdReturnMainImage {

		/**
		 * Unique identifier of the association of the Image to the SKU.
		 * Required
		 */
		ImageId: string;

		/**
		 * Image Label.
		 * Required
		 */
		ImageLabel: string;

		/**
		 * Image file path.
		 * Required
		 */
		ImagePath: string;

		/**
		 * Image HTML tag.
		 * Required
		 */
		ImageTag: string;

		/**
		 * General text of the image.
		 * Required
		 */
		ImageText: string;

		/**
		 * If the image is the main image of the SKU or not.
		 * Required
		 */
		IsMain: boolean;

		/**
		 * If the image has zoom applied.
		 * Required
		 */
		IsZoomSize: boolean;

		/**
		 * Time that the image was last modified.
		 * Required
		 */
		LastModified: string;
	}
	export interface OffersGetByProductIdAndSkuIdReturnMainImageFormProperties {

		/**
		 * Unique identifier of the association of the Image to the SKU.
		 * Required
		 */
		ImageId: FormControl<string | null | undefined>,

		/**
		 * Image Label.
		 * Required
		 */
		ImageLabel: FormControl<string | null | undefined>,

		/**
		 * Image file path.
		 * Required
		 */
		ImagePath: FormControl<string | null | undefined>,

		/**
		 * Image HTML tag.
		 * Required
		 */
		ImageTag: FormControl<string | null | undefined>,

		/**
		 * General text of the image.
		 * Required
		 */
		ImageText: FormControl<string | null | undefined>,

		/**
		 * If the image is the main image of the SKU or not.
		 * Required
		 */
		IsMain: FormControl<boolean | null | undefined>,

		/**
		 * If the image has zoom applied.
		 * Required
		 */
		IsZoomSize: FormControl<boolean | null | undefined>,

		/**
		 * Time that the image was last modified.
		 * Required
		 */
		LastModified: FormControl<string | null | undefined>,
	}
	export function CreateOffersGetByProductIdAndSkuIdReturnMainImageFormGroup() {
		return new FormGroup<OffersGetByProductIdAndSkuIdReturnMainImageFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImagePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsMain: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			IsZoomSize: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OffersGetByProductIdAndSkuIdReturnOffers {

		/**
		 * Trade policy that the SKU in contained.
		 * Required
		 */
		AvailableSalesChannels: string;

		/**
		 * Offers per trade policy.
		 * Required
		 */
		OffersGetByProductIdAndSkuIdReturnOffersOffersPerSalesChannel: Array<OffersGetByProductIdAndSkuIdReturnOffersOffersPerSalesChannel>;

		/**
		 * Seller ID.
		 * Required
		 */
		SellerId: string;

		/**
		 * ID of the association of the SKU with the seller.
		 * Required
		 */
		SellerSkuId: string;
	}
	export interface OffersGetByProductIdAndSkuIdReturnOffersFormProperties {

		/**
		 * Trade policy that the SKU in contained.
		 * Required
		 */
		AvailableSalesChannels: FormControl<string | null | undefined>,

		/**
		 * Seller ID.
		 * Required
		 */
		SellerId: FormControl<string | null | undefined>,

		/**
		 * ID of the association of the SKU with the seller.
		 * Required
		 */
		SellerSkuId: FormControl<string | null | undefined>,
	}
	export function CreateOffersGetByProductIdAndSkuIdReturnOffersFormGroup() {
		return new FormGroup<OffersGetByProductIdAndSkuIdReturnOffersFormProperties>({
			AvailableSalesChannels: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SellerSkuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OffersGetByProductIdAndSkuIdReturnOffersOffersPerSalesChannel {

		/**
		 * SKU available quantity.
		 * Required
		 */
		AvailableQuantity: number;

		/**
		 * If the SKU is available or not.
		 * Required
		 */
		IsAvailable: boolean;

		/**
		 * SKU list price.
		 * Required
		 */
		ListPrice: number;

		/**
		 * SKU price.
		 * Required
		 */
		Price: number;

		/**
		 * SKU precie without discount.
		 * Required
		 */
		PriceWithoutDiscount: number;

		/**
		 * SKU trade policy.
		 * Required
		 */
		SaleChannel: number;
	}
	export interface OffersGetByProductIdAndSkuIdReturnOffersOffersPerSalesChannelFormProperties {

		/**
		 * SKU available quantity.
		 * Required
		 */
		AvailableQuantity: FormControl<number | null | undefined>,

		/**
		 * If the SKU is available or not.
		 * Required
		 */
		IsAvailable: FormControl<boolean | null | undefined>,

		/**
		 * SKU list price.
		 * Required
		 */
		ListPrice: FormControl<number | null | undefined>,

		/**
		 * SKU price.
		 * Required
		 */
		Price: FormControl<number | null | undefined>,

		/**
		 * SKU precie without discount.
		 * Required
		 */
		PriceWithoutDiscount: FormControl<number | null | undefined>,

		/**
		 * SKU trade policy.
		 * Required
		 */
		SaleChannel: FormControl<number | null | undefined>,
	}
	export function CreateOffersGetByProductIdAndSkuIdReturnOffersOffersPerSalesChannelFormGroup() {
		return new FormGroup<OffersGetByProductIdAndSkuIdReturnOffersOffersPerSalesChannelFormProperties>({
			AvailableQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			IsAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ListPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PriceWithoutDiscount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SaleChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturn {

		/**
		 * Array of the product's specifications.
		 * Required
		 */
		allSpecifications: Array<string>;

		/**
		 * Array of the product's specifications groups.
		 * Required
		 */
		allSpecificationsGroups: Array<string>;

		/**
		 * Brand name.
		 * Required
		 */
		brand: string;

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: number;

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: string;

		/**
		 * Array of the product's categories URLs.
		 * Required
		 */
		categories: Array<string>;

		/**
		 * Array of the product's categories IDs.
		 * Required
		 */
		categoriesIds: Array<string>;

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: string;

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: string;

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: string;

		/**
		 * Array containing the product SKU general information.
		 * Required
		 */
		ProductSearchFilteredandOrderedReturnItems: Array<ProductSearchFilteredandOrderedReturnItems>;

		/**
		 * Product URL.
		 * Required
		 */
		link: string;

		/**
		 * Product URL.
		 * Required
		 */
		linkText: string;

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: string;

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: string;

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: string;

		/**
		 * Product name.
		 * Required
		 */
		productName: string;

		/**
		 * Product reference.
		 * Required
		 */
		productReference: string;

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: number;

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: string;

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: string;

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: string;
	}
	export interface ProductSearchFilteredandOrderedReturnFormProperties {

		/**
		 * Brand name.
		 * Required
		 */
		brand: FormControl<string | null | undefined>,

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: FormControl<number | null | undefined>,

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: FormControl<string | null | undefined>,

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: FormControl<string | null | undefined>,

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: FormControl<string | null | undefined>,

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		linkText: FormControl<string | null | undefined>,

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: FormControl<string | null | undefined>,

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: FormControl<string | null | undefined>,

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: FormControl<string | null | undefined>,

		/**
		 * Product name.
		 * Required
		 */
		productName: FormControl<string | null | undefined>,

		/**
		 * Product reference.
		 * Required
		 */
		productReference: FormControl<string | null | undefined>,

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: FormControl<number | null | undefined>,

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: FormControl<string | null | undefined>,

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: FormControl<string | null | undefined>,

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			brandId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			brandImageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			categoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterHighlights: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metaTagDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReferenceCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productTitle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			searchableClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItems {

		/**
		 * Videos.
		 * Required
		 */
		Videos: Array<string>;

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: string;

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: string;

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: string;

		/**
		 * Array of information about the SKU image.
		 * Required
		 */
		ProductSearchFilteredandOrderedReturnItemsImages: Array<ProductSearchFilteredandOrderedReturnItemsImages>;

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: boolean;

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: string;

		/**
		 * Array with information of SKUs components from a Kit.
		 * Required
		 */
		ProductSearchFilteredandOrderedReturnItemsKitItems: Array<ProductSearchFilteredandOrderedReturnItemsKitItems>;

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: string;

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: string;

		/**
		 * SKU name.
		 * Required
		 */
		name: string;

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: string;

		/**
		 * Reference code ID.
		 * Required
		 */
		ProductSearchFilteredandOrderedReturnItemsReferenceId: Array<ProductSearchFilteredandOrderedReturnItemsReferenceId>;

		/**
		 * Array of SKU sellers.
		 * Required
		 */
		ProductSearchFilteredandOrderedReturnItemsSellers: Array<ProductSearchFilteredandOrderedReturnItemsSellers>;

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: number;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsFormProperties {

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: FormControl<string | null | undefined>,

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: FormControl<string | null | undefined>,

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: FormControl<string | null | undefined>,

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: FormControl<boolean | null | undefined>,

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: FormControl<string | null | undefined>,

		/**
		 * SKU name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: FormControl<string | null | undefined>,

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsFormProperties>({
			complementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ean: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			estimatedDateArrival: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isKit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			measurementUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modalType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameComplete: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unitMultiplier: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsImages {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: string;

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: string;

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: string;

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: string;

		/**
		 * Image text.
		 * Required
		 */
		imageText: string;

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: string;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsImagesFormProperties {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: FormControl<string | null | undefined>,

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: FormControl<string | null | undefined>,

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: FormControl<string | null | undefined>,

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: FormControl<string | null | undefined>,

		/**
		 * Image text.
		 * Required
		 */
		imageText: FormControl<string | null | undefined>,

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsImagesFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsImagesFormProperties>({
			imageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsKitItems {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: number;

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: string;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsKitItemsFormProperties {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsKitItemsFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsKitItemsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsReferenceId {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: string;

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: string;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsReferenceIdFormProperties {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsReferenceIdFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsReferenceIdFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsSellers {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: string;

		/**
		 * AKA Commertial Condition.
		 * Required
		 */
		commertialOffer: ProductSearchFilteredandOrderedReturnItemsSellersCommertialOffer;

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: boolean;

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: string;

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: string;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsSellersFormProperties {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: FormControl<string | null | undefined>,

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: FormControl<boolean | null | undefined>,

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: FormControl<string | null | undefined>,

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsSellersFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsSellersFormProperties>({
			addToCartLink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerDefault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOffer {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: number;

		/**
		 * Array of other products that can be bought together with the product in question.
		 * Required
		 */
		BuyTogether: Array<string>;

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: string;

		/**
		 * Delivery SLA samples.
		 * Required
		 */
		ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamples: Array<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamples>;

		/**
		 * Delivery SLA samples per region.
		 * Required
		 */
		DeliverySlaSamplesPerRegion: ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion;

		/**
		 * Discount hightlight.
		 * Required
		 */
		DiscountHighLight: Array<string>;

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: string;

		/**
		 * Array of SKU gifts IDs.
		 * Required
		 */
		GiftSkuIds: Array<string>;

		/**
		 * Installments options.
		 * Required
		 */
		ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferInstallments: Array<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferInstallments>;

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: boolean;

		/**
		 * Item metadata attachment.
		 * Required
		 */
		ItemMetadataAttachment: Array<string>;

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: number;

		/**
		 * Payment options.
		 * Required
		 */
		PaymentOptions: ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptions;

		/**
		 * Price of the product.
		 * Required
		 */
		Price: number;

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: string;

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: number;

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: number;

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: number;

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: number;

		/**
		 * Teasers.
		 * Required
		 */
		Teasers: Array<string>;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferFormProperties {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: FormControl<number | null | undefined>,

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: FormControl<string | null | undefined>,

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: FormControl<string | null | undefined>,

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: FormControl<boolean | null | undefined>,

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: FormControl<number | null | undefined>,

		/**
		 * Price of the product.
		 * Required
		 */
		Price: FormControl<number | null | undefined>,

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: FormControl<string | null | undefined>,

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: FormControl<number | null | undefined>,

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: FormControl<number | null | undefined>,

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: FormControl<number | null | undefined>,

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferFormProperties>({
			AvailableQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CacheVersionUsedToCallCheckout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GetInfoErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ListPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PriceValidUntil: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceWithoutDiscount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RewardValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SaleChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Tax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamples {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion {

		/** Delivery SLA ID. */
		'0'?: ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties {
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties>({
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_ {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferInstallments {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: number;

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: string;

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: number;

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: string;

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: string;

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: number;

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: number;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferInstallmentsFormProperties {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: FormControl<number | null | undefined>,

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: FormControl<number | null | undefined>,

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: FormControl<string | null | undefined>,

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: FormControl<number | null | undefined>,

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferInstallmentsFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferInstallmentsFormProperties>({
			InterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfInstallments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PaymentSystemGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PaymentSystemName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TotalValuePlusInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptions {

		/**
		 * Available accounts.
		 * Required
		 */
		availableAccounts: Array<string>;

		/**
		 * Available tokens.
		 * Required
		 */
		availableTokens: Array<string>;

		/**
		 * GiftCardMessages.
		 * Required
		 */
		giftCardMessages: Array<string>;

		/**
		 * GiftCards.
		 * Required
		 */
		giftCards: Array<string>;

		/**
		 * installment options.
		 * Required
		 */
		ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions: Array<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions>;

		/**
		 * Payment systems.
		 * Required
		 */
		ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems: Array<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems>;

		/**
		 * Payments.
		 * Required
		 */
		payments: Array<string>;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsFormProperties {
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsFormProperties>({
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions {

		/**
		 * Bin.
		 * Required
		 */
		bin: string;

		/**
		 * Installments.
		 * Required
		 */
		ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments: Array<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments>;

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: string;

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: string;

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: string;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties {

		/**
		 * Bin.
		 * Required
		 */
		bin: FormControl<string | null | undefined>,

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: FormControl<string | null | undefined>,

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties>({
			bin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Seller merchant installments.
		 * Required
		 */
		ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments: Array<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments>;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * ID.
		 * Required
		 */
		id: string;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: string;

		/**
		 * Description.
		 * Required
		 */
		description: string;

		/**
		 * Due date.
		 * Required
		 */
		dueDate: string;

		/**
		 * Group name.
		 * Required
		 */
		groupName: string;

		/**
		 * ID.
		 * Required
		 */
		id: number;

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: boolean;

		/**
		 * Name.
		 * Required
		 */
		name: string;

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: boolean;

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: boolean;

		/**
		 * String ID.
		 * Required
		 */
		stringId: string;

		/**
		 * Template.
		 * Required
		 */
		template: string;

		/**
		 * Validator.
		 * Required
		 */
		validator: string;
	}
	export interface ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: FormControl<string | null | undefined>,

		/**
		 * Description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Due date.
		 * Required
		 */
		dueDate: FormControl<string | null | undefined>,

		/**
		 * Group name.
		 * Required
		 */
		groupName: FormControl<string | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: FormControl<boolean | null | undefined>,

		/**
		 * Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: FormControl<boolean | null | undefined>,

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: FormControl<boolean | null | undefined>,

		/**
		 * String ID.
		 * Required
		 */
		stringId: FormControl<string | null | undefined>,

		/**
		 * Template.
		 * Required
		 */
		template: FormControl<string | null | undefined>,

		/**
		 * Validator.
		 * Required
		 */
		validator: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormGroup() {
		return new FormGroup<ProductSearchFilteredandOrderedReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties>({
			availablePayments: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isCustom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requiresAuthentication: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			requiresDocument: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			stringId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturn {

		/**
		 * Array of the product's specifications.
		 * Required
		 */
		allSpecifications: Array<string>;

		/**
		 * Array of the product's specifications groups.
		 * Required
		 */
		allSpecificationsGroups: Array<string>;

		/**
		 * Brand name.
		 * Required
		 */
		brand: string;

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: number;

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: string;

		/**
		 * Array of the product's categories URLs.
		 * Required
		 */
		categories: Array<string>;

		/**
		 * Array of the product's categories IDs.
		 * Required
		 */
		categoriesIds: Array<string>;

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: string;

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: string;

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: string;

		/**
		 * Array containing the product SKU general information.
		 * Required
		 */
		SearchbyproducturlReturnItems: Array<SearchbyproducturlReturnItems>;

		/**
		 * Product URL.
		 * Required
		 */
		link: string;

		/**
		 * Product URL.
		 * Required
		 */
		linkText: string;

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: string;

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: string;

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: string;

		/**
		 * Product name.
		 * Required
		 */
		productName: string;

		/**
		 * Product reference.
		 * Required
		 */
		productReference: string;

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: number;

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: string;

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: string;

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: string;
	}
	export interface SearchbyproducturlReturnFormProperties {

		/**
		 * Brand name.
		 * Required
		 */
		brand: FormControl<string | null | undefined>,

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: FormControl<number | null | undefined>,

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: FormControl<string | null | undefined>,

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: FormControl<string | null | undefined>,

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: FormControl<string | null | undefined>,

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		linkText: FormControl<string | null | undefined>,

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: FormControl<string | null | undefined>,

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: FormControl<string | null | undefined>,

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: FormControl<string | null | undefined>,

		/**
		 * Product name.
		 * Required
		 */
		productName: FormControl<string | null | undefined>,

		/**
		 * Product reference.
		 * Required
		 */
		productReference: FormControl<string | null | undefined>,

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: FormControl<number | null | undefined>,

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: FormControl<string | null | undefined>,

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: FormControl<string | null | undefined>,

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: FormControl<string | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnFormGroup() {
		return new FormGroup<SearchbyproducturlReturnFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			brandId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			brandImageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			categoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterHighlights: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metaTagDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReferenceCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productTitle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			searchableClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItems {

		/**
		 * Videos.
		 * Required
		 */
		Videos: Array<string>;

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: string;

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: string;

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: string;

		/**
		 * Array of information about the SKU image.
		 * Required
		 */
		SearchbyproducturlReturnItemsImages: Array<SearchbyproducturlReturnItemsImages>;

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: boolean;

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: string;

		/**
		 * Array with information of SKUs components from a Kit.
		 * Required
		 */
		SearchbyproducturlReturnItemsKitItems: Array<SearchbyproducturlReturnItemsKitItems>;

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: string;

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: string;

		/**
		 * SKU name.
		 * Required
		 */
		name: string;

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: string;

		/**
		 * Reference code ID.
		 * Required
		 */
		SearchbyproducturlReturnItemsReferenceId: Array<SearchbyproducturlReturnItemsReferenceId>;

		/**
		 * Array of SKU sellers.
		 * Required
		 */
		SearchbyproducturlReturnItemsSellers: Array<SearchbyproducturlReturnItemsSellers>;

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: number;
	}
	export interface SearchbyproducturlReturnItemsFormProperties {

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: FormControl<string | null | undefined>,

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: FormControl<string | null | undefined>,

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: FormControl<string | null | undefined>,

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: FormControl<boolean | null | undefined>,

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: FormControl<string | null | undefined>,

		/**
		 * SKU name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: FormControl<string | null | undefined>,

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsFormProperties>({
			complementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ean: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			estimatedDateArrival: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isKit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			measurementUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modalType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameComplete: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unitMultiplier: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsImages {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: string;

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: string;

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: string;

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: string;

		/**
		 * Image text.
		 * Required
		 */
		imageText: string;

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: string;
	}
	export interface SearchbyproducturlReturnItemsImagesFormProperties {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: FormControl<string | null | undefined>,

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: FormControl<string | null | undefined>,

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: FormControl<string | null | undefined>,

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: FormControl<string | null | undefined>,

		/**
		 * Image text.
		 * Required
		 */
		imageText: FormControl<string | null | undefined>,

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsImagesFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsImagesFormProperties>({
			imageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsKitItems {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: number;

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: string;
	}
	export interface SearchbyproducturlReturnItemsKitItemsFormProperties {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsKitItemsFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsKitItemsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsReferenceId {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: string;

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: string;
	}
	export interface SearchbyproducturlReturnItemsReferenceIdFormProperties {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsReferenceIdFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsReferenceIdFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsSellers {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: string;

		/**
		 * AKA Commertial Condition.
		 * Required
		 */
		commertialOffer: SearchbyproducturlReturnItemsSellersCommertialOffer;

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: boolean;

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: string;

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: string;
	}
	export interface SearchbyproducturlReturnItemsSellersFormProperties {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: FormControl<string | null | undefined>,

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: FormControl<boolean | null | undefined>,

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: FormControl<string | null | undefined>,

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: FormControl<string | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsSellersFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsSellersFormProperties>({
			addToCartLink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerDefault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsSellersCommertialOffer {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: number;

		/**
		 * Array of other products that can be bought together with the product in question.
		 * Required
		 */
		BuyTogether: Array<string>;

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: string;

		/**
		 * Delivery SLA samples.
		 * Required
		 */
		SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamples: Array<SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamples>;

		/**
		 * Delivery SLA samples per region.
		 * Required
		 */
		DeliverySlaSamplesPerRegion: SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion;

		/**
		 * Discount hightlight.
		 * Required
		 */
		DiscountHighLight: Array<string>;

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: string;

		/**
		 * Array of SKU gifts IDs.
		 * Required
		 */
		GiftSkuIds: Array<string>;

		/**
		 * Installments options.
		 * Required
		 */
		SearchbyproducturlReturnItemsSellersCommertialOfferInstallments: Array<SearchbyproducturlReturnItemsSellersCommertialOfferInstallments>;

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: boolean;

		/**
		 * Item metadata attachment.
		 * Required
		 */
		ItemMetadataAttachment: Array<string>;

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: number;

		/**
		 * Payment options.
		 * Required
		 */
		PaymentOptions: SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptions;

		/**
		 * Price of the product.
		 * Required
		 */
		Price: number;

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: string;

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: number;

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: number;

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: number;

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: number;

		/**
		 * Teasers.
		 * Required
		 */
		Teasers: Array<string>;
	}
	export interface SearchbyproducturlReturnItemsSellersCommertialOfferFormProperties {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: FormControl<number | null | undefined>,

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: FormControl<string | null | undefined>,

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: FormControl<string | null | undefined>,

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: FormControl<boolean | null | undefined>,

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: FormControl<number | null | undefined>,

		/**
		 * Price of the product.
		 * Required
		 */
		Price: FormControl<number | null | undefined>,

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: FormControl<string | null | undefined>,

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: FormControl<number | null | undefined>,

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: FormControl<number | null | undefined>,

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: FormControl<number | null | undefined>,

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: FormControl<number | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsSellersCommertialOfferFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsSellersCommertialOfferFormProperties>({
			AvailableQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CacheVersionUsedToCallCheckout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GetInfoErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ListPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PriceValidUntil: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceWithoutDiscount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RewardValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SaleChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Tax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamples {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion {

		/** Delivery SLA ID. */
		'0'?: SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_;
	}
	export interface SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties {
	}
	export function CreateSearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties>({
		});

	}

	export interface SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_ {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsSellersCommertialOfferInstallments {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: number;

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: string;

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: number;

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: string;

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: string;

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: number;

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: number;
	}
	export interface SearchbyproducturlReturnItemsSellersCommertialOfferInstallmentsFormProperties {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: FormControl<number | null | undefined>,

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: FormControl<number | null | undefined>,

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: FormControl<string | null | undefined>,

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: FormControl<number | null | undefined>,

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsSellersCommertialOfferInstallmentsFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsSellersCommertialOfferInstallmentsFormProperties>({
			InterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfInstallments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PaymentSystemGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PaymentSystemName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TotalValuePlusInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptions {

		/**
		 * Available accounts.
		 * Required
		 */
		availableAccounts: Array<string>;

		/**
		 * Available tokens.
		 * Required
		 */
		availableTokens: Array<string>;

		/**
		 * GiftCardMessages.
		 * Required
		 */
		giftCardMessages: Array<string>;

		/**
		 * GiftCards.
		 * Required
		 */
		giftCards: Array<string>;

		/**
		 * installment options.
		 * Required
		 */
		SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions: Array<SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions>;

		/**
		 * Payment systems.
		 * Required
		 */
		SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems: Array<SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems>;

		/**
		 * Payments.
		 * Required
		 */
		payments: Array<string>;
	}
	export interface SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsFormProperties {
	}
	export function CreateSearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsFormProperties>({
		});

	}

	export interface SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions {

		/**
		 * Bin.
		 * Required
		 */
		bin: string;

		/**
		 * Installments.
		 * Required
		 */
		SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments: Array<SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments>;

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: string;

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: string;

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: string;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties {

		/**
		 * Bin.
		 * Required
		 */
		bin: FormControl<string | null | undefined>,

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: FormControl<string | null | undefined>,

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties>({
			bin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Seller merchant installments.
		 * Required
		 */
		SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments: Array<SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments>;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * ID.
		 * Required
		 */
		id: string;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: string;

		/**
		 * Description.
		 * Required
		 */
		description: string;

		/**
		 * Due date.
		 * Required
		 */
		dueDate: string;

		/**
		 * Group name.
		 * Required
		 */
		groupName: string;

		/**
		 * ID.
		 * Required
		 */
		id: number;

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: boolean;

		/**
		 * Name.
		 * Required
		 */
		name: string;

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: boolean;

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: boolean;

		/**
		 * String ID.
		 * Required
		 */
		stringId: string;

		/**
		 * Template.
		 * Required
		 */
		template: string;

		/**
		 * Validator.
		 * Required
		 */
		validator: string;
	}
	export interface SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: FormControl<string | null | undefined>,

		/**
		 * Description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Due date.
		 * Required
		 */
		dueDate: FormControl<string | null | undefined>,

		/**
		 * Group name.
		 * Required
		 */
		groupName: FormControl<string | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: FormControl<boolean | null | undefined>,

		/**
		 * Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: FormControl<boolean | null | undefined>,

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: FormControl<boolean | null | undefined>,

		/**
		 * String ID.
		 * Required
		 */
		stringId: FormControl<string | null | undefined>,

		/**
		 * Template.
		 * Required
		 */
		template: FormControl<string | null | undefined>,

		/**
		 * Validator.
		 * Required
		 */
		validator: FormControl<string | null | undefined>,
	}
	export function CreateSearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormGroup() {
		return new FormGroup<SearchbyproducturlReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties>({
			availablePayments: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isCustom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requiresAuthentication: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			requiresDocument: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			stringId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturn {

		/**
		 * Array of the product's specifications.
		 * Required
		 */
		allSpecifications: Array<string>;

		/**
		 * Array of the product's specifications groups.
		 * Required
		 */
		allSpecificationsGroups: Array<string>;

		/**
		 * Brand name.
		 * Required
		 */
		brand: string;

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: number;

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: string;

		/**
		 * Array of the product's categories URLs.
		 * Required
		 */
		categories: Array<string>;

		/**
		 * Array of the product's categories IDs.
		 * Required
		 */
		categoriesIds: Array<string>;

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: string;

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: string;

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: string;

		/**
		 * Array containing the product SKU general information.
		 * Required
		 */
		ProductSearchReturnItems: Array<ProductSearchReturnItems>;

		/**
		 * Product URL.
		 * Required
		 */
		link: string;

		/**
		 * Product URL.
		 * Required
		 */
		linkText: string;

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: string;

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: string;

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: string;

		/**
		 * Product name.
		 * Required
		 */
		productName: string;

		/**
		 * Product reference.
		 * Required
		 */
		productReference: string;

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: number;

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: string;

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: string;

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: string;
	}
	export interface ProductSearchReturnFormProperties {

		/**
		 * Brand name.
		 * Required
		 */
		brand: FormControl<string | null | undefined>,

		/**
		 * Product brand ID.
		 * Required
		 */
		brandId: FormControl<number | null | undefined>,

		/**
		 * Product's brand image URL.
		 * Required
		 */
		brandImageUrl: FormControl<string | null | undefined>,

		/**
		 * Product category ID.
		 * Required
		 */
		categoryId: FormControl<string | null | undefined>,

		/**
		 * Cluster highlight ID and name.
		 * Required
		 */
		clusterHighlights: FormControl<string | null | undefined>,

		/**
		 * Description of the main information related to the product. A simple and easy to understand summary for the customer.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * Product URL.
		 * Required
		 */
		linkText: FormControl<string | null | undefined>,

		/**
		 * Brief description of the category. It's recommended that you don't exceed 150 characters so that the search engines can display it correctly in the results page.
		 * Required
		 */
		metaTagDescription: FormControl<string | null | undefined>,

		/**
		 * Product clusters' IDs and names.
		 * Required
		 */
		productClusters: FormControl<string | null | undefined>,

		/**
		 * Product unique identifier.
		 * Required
		 */
		productId: FormControl<string | null | undefined>,

		/**
		 * Product name.
		 * Required
		 */
		productName: FormControl<string | null | undefined>,

		/**
		 * Product reference.
		 * Required
		 */
		productReference: FormControl<string | null | undefined>,

		/**
		 * Product reference ID.
		 * Required
		 */
		productReferenceCode: FormControl<number | null | undefined>,

		/**
		 * Text that is in the browser tab and corresponds to the title of the product page. This field is important for SEO.
		 * Required
		 */
		productTitle: FormControl<string | null | undefined>,

		/**
		 * Product release date.
		 * Required
		 */
		releaseDate: FormControl<string | null | undefined>,

		/**
		 * Searchable clusters IDs and names
		 * Required
		 */
		searchableClusters: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchReturnFormGroup() {
		return new FormGroup<ProductSearchReturnFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			brandId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			brandImageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			categoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterHighlights: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linkText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metaTagDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReference: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			productReferenceCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productTitle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			releaseDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			searchableClusters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItems {

		/**
		 * Videos.
		 * Required
		 */
		Videos: Array<string>;

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: string;

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: string;

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: string;

		/**
		 * Array of information about the SKU image.
		 * Required
		 */
		ProductSearchReturnItemsImages: Array<ProductSearchReturnItemsImages>;

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: boolean;

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: string;

		/**
		 * Array with information of SKUs components from a Kit.
		 * Required
		 */
		ProductSearchReturnItemsKitItems: Array<ProductSearchReturnItemsKitItems>;

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: string;

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: string;

		/**
		 * SKU name.
		 * Required
		 */
		name: string;

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: string;

		/**
		 * Reference code ID.
		 * Required
		 */
		ProductSearchReturnItemsReferenceId: Array<ProductSearchReturnItemsReferenceId>;

		/**
		 * Array of SKU sellers.
		 * Required
		 */
		ProductSearchReturnItemsSellers: Array<ProductSearchReturnItemsSellers>;

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: number;
	}
	export interface ProductSearchReturnItemsFormProperties {

		/**
		 * SKU complement name.
		 * Required
		 */
		complementName: FormControl<string | null | undefined>,

		/**
		 * SKU unique identification code (barcode), accepts up to 13 numerical characters.
		 * Required
		 */
		ean: FormControl<string | null | undefined>,

		/**
		 * Estimated date arrival.
		 * Required
		 */
		estimatedDateArrival: FormControl<string | null | undefined>,

		/**
		 * If the SKU is part of a kit.
		 * Required
		 */
		isKit: FormControl<boolean | null | undefined>,

		/**
		 * SKU ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,

		/**
		 * Used only in cases when you need to convert the unit of measure for sale. In common cases, use 'un'.
		 * Required
		 */
		measurementUnit: FormControl<string | null | undefined>,

		/**
		 * Modal Type.
		 * Required
		 */
		modalType: FormControl<string | null | undefined>,

		/**
		 * SKU name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * SKU complete name.
		 * Required
		 */
		nameComplete: FormControl<string | null | undefined>,

		/**
		 * numerical unit that multiplies the selected quantity of the product when it is inserted in the cart.
		 * Required
		 */
		unitMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchReturnItemsFormGroup() {
		return new FormGroup<ProductSearchReturnItemsFormProperties>({
			complementName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ean: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			estimatedDateArrival: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isKit: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			measurementUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modalType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nameComplete: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unitMultiplier: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsImages {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: string;

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: string;

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: string;

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: string;

		/**
		 * Image text.
		 * Required
		 */
		imageText: string;

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: string;
	}
	export interface ProductSearchReturnItemsImagesFormProperties {

		/**
		 * Image ID.
		 * Required
		 */
		imageId: FormControl<string | null | undefined>,

		/**
		 * Image label.
		 * Required
		 */
		imageLabel: FormControl<string | null | undefined>,

		/**
		 * Date and time of the last update of the image.
		 * Required
		 */
		imageLastModified: FormControl<string | null | undefined>,

		/**
		 * Image tag.
		 * Required
		 */
		imageTag: FormControl<string | null | undefined>,

		/**
		 * Image text.
		 * Required
		 */
		imageText: FormControl<string | null | undefined>,

		/**
		 * Image URL.
		 * Required
		 */
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchReturnItemsImagesFormGroup() {
		return new FormGroup<ProductSearchReturnItemsImagesFormProperties>({
			imageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageLastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageTag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageText: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsKitItems {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: number;

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: string;
	}
	export interface ProductSearchReturnItemsKitItemsFormProperties {

		/**
		 * Amount of the SKU component in the kit.
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * SKU kit component ID.
		 * Required
		 */
		itemId: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchReturnItemsKitItemsFormGroup() {
		return new FormGroup<ProductSearchReturnItemsKitItemsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsReferenceId {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: string;

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: string;
	}
	export interface ProductSearchReturnItemsReferenceIdFormProperties {

		/**
		 * Reference Code.
		 * Required
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Unique reference code used internally for organizational purposes.
		 * Required
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchReturnItemsReferenceIdFormGroup() {
		return new FormGroup<ProductSearchReturnItemsReferenceIdFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsSellers {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: string;

		/**
		 * AKA Commertial Condition.
		 * Required
		 */
		commertialOffer: ProductSearchReturnItemsSellersCommertialOffer;

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: boolean;

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: string;

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: string;
	}
	export interface ProductSearchReturnItemsSellersFormProperties {

		/**
		 * URL to add the product to the cart.
		 * Required
		 */
		addToCartLink: FormControl<string | null | undefined>,

		/**
		 * If the seller is default or not.
		 * Required
		 */
		sellerDefault: FormControl<boolean | null | undefined>,

		/**
		 * SKU seller ID.
		 * Required
		 */
		sellerId: FormControl<string | null | undefined>,

		/**
		 * SKU seller name.
		 * Required
		 */
		sellerName: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchReturnItemsSellersFormGroup() {
		return new FormGroup<ProductSearchReturnItemsSellersFormProperties>({
			addToCartLink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerDefault: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsSellersCommertialOffer {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: number;

		/**
		 * Array of other products that can be bought together with the product in question.
		 * Required
		 */
		BuyTogether: Array<string>;

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: string;

		/**
		 * Delivery SLA samples.
		 * Required
		 */
		ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamples: Array<ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamples>;

		/**
		 * Delivery SLA samples per region.
		 * Required
		 */
		DeliverySlaSamplesPerRegion: ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion;

		/**
		 * Discount hightlight.
		 * Required
		 */
		DiscountHighLight: Array<string>;

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: string;

		/**
		 * Array of SKU gifts IDs.
		 * Required
		 */
		GiftSkuIds: Array<string>;

		/**
		 * Installments options.
		 * Required
		 */
		ProductSearchReturnItemsSellersCommertialOfferInstallments: Array<ProductSearchReturnItemsSellersCommertialOfferInstallments>;

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: boolean;

		/**
		 * Item metadata attachment.
		 * Required
		 */
		ItemMetadataAttachment: Array<string>;

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: number;

		/**
		 * Payment options.
		 * Required
		 */
		PaymentOptions: ProductSearchReturnItemsSellersCommertialOfferPaymentOptions;

		/**
		 * Price of the product.
		 * Required
		 */
		Price: number;

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: string;

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: number;

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: number;

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: number;

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: number;

		/**
		 * Teasers.
		 * Required
		 */
		Teasers: Array<string>;
	}
	export interface ProductSearchReturnItemsSellersCommertialOfferFormProperties {

		/**
		 * Use the `IsAvailable` field instead.
		 * Required
		 */
		AvailableQuantity: FormControl<number | null | undefined>,

		/**
		 * Cache version used to call checkout.
		 * Required
		 */
		CacheVersionUsedToCallCheckout: FormControl<string | null | undefined>,

		/**
		 * Get info error message.
		 * Required
		 */
		GetInfoErrorMessage: FormControl<string | null | undefined>,

		/**
		 * If the product is available or not.
		 * Required
		 */
		IsAvailable: FormControl<boolean | null | undefined>,

		/**
		 * List price of the product.
		 * Required
		 */
		ListPrice: FormControl<number | null | undefined>,

		/**
		 * Price of the product.
		 * Required
		 */
		Price: FormControl<number | null | undefined>,

		/**
		 * Price of the product valid until a certain date.
		 * Required
		 */
		PriceValidUntil: FormControl<string | null | undefined>,

		/**
		 * Price of the product without discount.
		 * Required
		 */
		PriceWithoutDiscount: FormControl<number | null | undefined>,

		/**
		 * Reward value of the product.
		 * Required
		 */
		RewardValue: FormControl<number | null | undefined>,

		/**
		 * Trade policy which the product is contained.
		 * Required
		 */
		SaleChannel: FormControl<number | null | undefined>,

		/**
		 * Tax of the product.
		 * Required
		 */
		Tax: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchReturnItemsSellersCommertialOfferFormGroup() {
		return new FormGroup<ProductSearchReturnItemsSellersCommertialOfferFormProperties>({
			AvailableQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CacheVersionUsedToCallCheckout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GetInfoErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsAvailable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ListPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PriceValidUntil: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PriceWithoutDiscount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			RewardValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SaleChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Tax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamples {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesFormGroup() {
		return new FormGroup<ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion {

		/** Delivery SLA ID. */
		'0'?: ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_;
	}
	export interface ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties {
	}
	export function CreateProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormGroup() {
		return new FormGroup<ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegionFormProperties>({
		});

	}

	export interface ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_ {

		/**
		 * Delivery SLA per types.
		 * Required
		 */
		DeliverySlaPerTypes: Array<string>;

		/**
		 * Region.
		 * Required
		 */
		Region: string;
	}
	export interface ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties {

		/**
		 * Region.
		 * Required
		 */
		Region: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormGroup() {
		return new FormGroup<ProductSearchReturnItemsSellersCommertialOfferDeliverySlaSamplesPerRegion_0_FormProperties>({
			Region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsSellersCommertialOfferInstallments {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: number;

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: string;

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: number;

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: string;

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: string;

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: number;

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: number;
	}
	export interface ProductSearchReturnItemsSellersCommertialOfferInstallmentsFormProperties {

		/**
		 * Interest rate of the installment.
		 * Required
		 */
		InterestRate: FormControl<number | null | undefined>,

		/**
		 * Name of the installment.
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Number of the installment.
		 * Required
		 */
		NumberOfInstallments: FormControl<number | null | undefined>,

		/**
		 * Payment system group name of the installment.
		 * Required
		 */
		PaymentSystemGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment system name of the installment.
		 * Required
		 */
		PaymentSystemName: FormControl<string | null | undefined>,

		/**
		 * Total value plus interest rate of the installment.
		 * Required
		 */
		TotalValuePlusInterestRate: FormControl<number | null | undefined>,

		/**
		 * Value of the installment.
		 * Required
		 */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchReturnItemsSellersCommertialOfferInstallmentsFormGroup() {
		return new FormGroup<ProductSearchReturnItemsSellersCommertialOfferInstallmentsFormProperties>({
			InterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NumberOfInstallments: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PaymentSystemGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PaymentSystemName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TotalValuePlusInterestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsSellersCommertialOfferPaymentOptions {

		/**
		 * Available accounts.
		 * Required
		 */
		availableAccounts: Array<string>;

		/**
		 * Available tokens.
		 * Required
		 */
		availableTokens: Array<string>;

		/**
		 * GiftCardMessages.
		 * Required
		 */
		giftCardMessages: Array<string>;

		/**
		 * GiftCards.
		 * Required
		 */
		giftCards: Array<string>;

		/**
		 * installment options.
		 * Required
		 */
		ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions: Array<ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions>;

		/**
		 * Payment systems.
		 * Required
		 */
		ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems: Array<ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems>;

		/**
		 * Payments.
		 * Required
		 */
		payments: Array<string>;
	}
	export interface ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsFormProperties {
	}
	export function CreateProductSearchReturnItemsSellersCommertialOfferPaymentOptionsFormGroup() {
		return new FormGroup<ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsFormProperties>({
		});

	}

	export interface ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptions {

		/**
		 * Bin.
		 * Required
		 */
		bin: string;

		/**
		 * Installments.
		 * Required
		 */
		ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments: Array<ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments>;

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: string;

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: string;

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: string;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties {

		/**
		 * Bin.
		 * Required
		 */
		bin: FormControl<string | null | undefined>,

		/**
		 * Payment group name.
		 * Required
		 */
		paymentGroupName: FormControl<string | null | undefined>,

		/**
		 * Payment name.
		 * Required
		 */
		paymentName: FormControl<string | null | undefined>,

		/**
		 * Payment system.
		 * Required
		 */
		paymentSystem: FormControl<string | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormGroup() {
		return new FormGroup<ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsFormProperties>({
			bin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			paymentSystem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Seller merchant installments.
		 * Required
		 */
		ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments: Array<ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments>;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormGroup() {
		return new FormGroup<ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallments {

		/**
		 * Count.
		 * Required
		 */
		count: number;

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: boolean;

		/**
		 * ID.
		 * Required
		 */
		id: string;

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: number;

		/**
		 * Total.
		 * Required
		 */
		total: number;

		/**
		 * Value.
		 * Required
		 */
		value: number;
	}
	export interface ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties {

		/**
		 * Count.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * Has interest rate.
		 * Required
		 */
		hasInterestRate: FormControl<boolean | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Interest rate.
		 * Required
		 */
		interestRate: FormControl<number | null | undefined>,

		/**
		 * Total.
		 * Required
		 */
		total: FormControl<number | null | undefined>,

		/**
		 * Value.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormGroup() {
		return new FormGroup<ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsInstallmentOptionsInstallmentsSellerMerchantInstallmentsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			hasInterestRate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interestRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystems {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: string;

		/**
		 * Description.
		 * Required
		 */
		description: string;

		/**
		 * Due date.
		 * Required
		 */
		dueDate: string;

		/**
		 * Group name.
		 * Required
		 */
		groupName: string;

		/**
		 * ID.
		 * Required
		 */
		id: number;

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: boolean;

		/**
		 * Name.
		 * Required
		 */
		name: string;

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: boolean;

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: boolean;

		/**
		 * String ID.
		 * Required
		 */
		stringId: string;

		/**
		 * Template.
		 * Required
		 */
		template: string;

		/**
		 * Validator.
		 * Required
		 */
		validator: string;
	}
	export interface ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties {

		/**
		 * Available payments.
		 * Required
		 */
		availablePayments: FormControl<string | null | undefined>,

		/**
		 * Description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Due date.
		 * Required
		 */
		dueDate: FormControl<string | null | undefined>,

		/**
		 * Group name.
		 * Required
		 */
		groupName: FormControl<string | null | undefined>,

		/**
		 * ID.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * If is custom or not.
		 * Required
		 */
		isCustom: FormControl<boolean | null | undefined>,

		/**
		 * Name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * If requires authentication.
		 * Required
		 */
		requiresAuthentication: FormControl<boolean | null | undefined>,

		/**
		 * If requires document or not.
		 * Required
		 */
		requiresDocument: FormControl<boolean | null | undefined>,

		/**
		 * String ID.
		 * Required
		 */
		stringId: FormControl<string | null | undefined>,

		/**
		 * Template.
		 * Required
		 */
		template: FormControl<string | null | undefined>,

		/**
		 * Validator.
		 * Required
		 */
		validator: FormControl<string | null | undefined>,
	}
	export function CreateProductSearchReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormGroup() {
		return new FormGroup<ProductSearchReturnItemsSellersCommertialOfferPaymentOptionsPaymentSystemsFormProperties>({
			availablePayments: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isCustom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requiresAuthentication: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			requiresDocument: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			stringId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutoCompleteReturn {

		/**
		 * Autocomplete returned items.
		 * Required
		 */
		AutoCompleteReturnItemsReturned: Array<AutoCompleteReturnItemsReturned>;
	}
	export interface AutoCompleteReturnFormProperties {
	}
	export function CreateAutoCompleteReturnFormGroup() {
		return new FormGroup<AutoCompleteReturnFormProperties>({
		});

	}

	export interface AutoCompleteReturnItemsReturned {

		/**
		 * Item criteria.
		 * Required
		 */
		criteria: string;

		/**
		 * Item URL.
		 * Required
		 */
		href: string;

		/**
		 * Array of products.
		 * Required
		 */
		items: Array<string>;

		/**
		 * Item name.
		 * Required
		 */
		name: string;

		/**
		 * Item thumbnail.
		 * Required
		 */
		thumb: string;

		/**
		 * Item thumbnail URL.
		 * Required
		 */
		thumbUrl: string;
	}
	export interface AutoCompleteReturnItemsReturnedFormProperties {

		/**
		 * Item criteria.
		 * Required
		 */
		criteria: FormControl<string | null | undefined>,

		/**
		 * Item URL.
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * Item name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Item thumbnail.
		 * Required
		 */
		thumb: FormControl<string | null | undefined>,

		/**
		 * Item thumbnail URL.
		 * Required
		 */
		thumbUrl: FormControl<string | null | undefined>,
	}
	export function CreateAutoCompleteReturnItemsReturnedFormGroup() {
		return new FormGroup<AutoCompleteReturnItemsReturnedFormProperties>({
			criteria: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thumb: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thumbUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

