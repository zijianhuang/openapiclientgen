import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptSellerLeadRequest {

		/**
		 * Marketplace's account ID
		 * Required
		 */
		accountId: string;

		/** Required */
		accountable: Accountable;

		/** Required */
		address: Address;

		/**
		 * Company's legal document code.
		 * Required
		 */
		document: string;

		/**
		 * email of the admin responsible for the seller.
		 * Required
		 */
		email: string;

		/**
		 * Indicates if the seller has accepted the platform's legal terms and conditions.
		 * Required
		 */
		hasAcceptedLegalTerms: boolean;

		/**
		 * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.
		 * Required
		 */
		salesChannel: string;

		/**
		 * Name of the seller's account, part of the url of their VTEX Admin.
		 * Required
		 */
		sellerAccountName: string;

		/**
		 * Seller's contact email.
		 * Required
		 */
		sellerEmail: string;

		/**
		 * Seller's store's name.
		 * Required
		 */
		sellerName: string;

		/**
		 * Type of seller, including:
		 * `1`: regular seller
		 * `2`: whitelabel seller
		 * Required
		 */
		sellerType: number;
	}
	export interface AcceptSellerLeadRequestFormProperties {

		/**
		 * Marketplace's account ID
		 * Required
		 */
		accountId: FormControl<string | null | undefined>,

		/**
		 * Company's legal document code.
		 * Required
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * email of the admin responsible for the seller.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Indicates if the seller has accepted the platform's legal terms and conditions.
		 * Required
		 */
		hasAcceptedLegalTerms: FormControl<boolean | null | undefined>,

		/**
		 * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.
		 * Required
		 */
		salesChannel: FormControl<string | null | undefined>,

		/**
		 * Name of the seller's account, part of the url of their VTEX Admin.
		 * Required
		 */
		sellerAccountName: FormControl<string | null | undefined>,

		/**
		 * Seller's contact email.
		 * Required
		 */
		sellerEmail: FormControl<string | null | undefined>,

		/**
		 * Seller's store's name.
		 * Required
		 */
		sellerName: FormControl<string | null | undefined>,

		/**
		 * Type of seller, including:
		 * `1`: regular seller
		 * `2`: whitelabel seller
		 * Required
		 */
		sellerType: FormControl<number | null | undefined>,
	}
	export function CreateAcceptSellerLeadRequestFormGroup() {
		return new FormGroup<AcceptSellerLeadRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hasAcceptedLegalTerms: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerEmail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerType: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Accountable {

		/**
		 * Email address of the person responsible for the seller.
		 * Required
		 */
		email: string;

		/**
		 * Name of the person responsible for the seller.
		 * Required
		 */
		name: string;

		/**
		 * Phone number of the person responsible for the seller.
		 * Required
		 */
		phone: string;
	}
	export interface AccountableFormProperties {

		/**
		 * Email address of the person responsible for the seller.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Name of the person responsible for the seller.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Phone number of the person responsible for the seller.
		 * Required
		 */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateAccountableFormGroup() {
		return new FormGroup<AccountableFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Address {

		/**
		 * City name, from the seller's address.
		 * Required
		 */
		city: string;

		/**
		 * Seller's address complement.
		 * Required
		 */
		complement: string;

		/**
		 * Seller's address neighborhood.
		 * Required
		 */
		neighborhood: string;

		/**
		 * Street's number, from the seller's address.
		 * Required
		 */
		number: string;

		/**
		 * Postal code from the seller's address.
		 * Required
		 */
		postalcode: string;

		/**
		 * State, from the seller's address.
		 * Required
		 */
		state: string;

		/**
		 * Street information, from the seller's address.
		 * Required
		 */
		street: string;
	}
	export interface AddressFormProperties {

		/**
		 * City name, from the seller's address.
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * Seller's address complement.
		 * Required
		 */
		complement: FormControl<string | null | undefined>,

		/**
		 * Seller's address neighborhood.
		 * Required
		 */
		neighborhood: FormControl<string | null | undefined>,

		/**
		 * Street's number, from the seller's address.
		 * Required
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * Postal code from the seller's address.
		 * Required
		 */
		postalcode: FormControl<string | null | undefined>,

		/**
		 * State, from the seller's address.
		 * Required
		 */
		state: FormControl<string | null | undefined>,

		/**
		 * Street information, from the seller's address.
		 * Required
		 */
		street: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			complement: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			neighborhood: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postalcode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			street: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AvailableSalesChannel {

		/**
		 * Sales Channel's ID.
		 * Required
		 */
		id: number;

		/**
		 * Flag defining if the sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) is selected or not.
		 * Required
		 */
		isSelected: boolean;

		/**
		 * Name of the Sales Channel.
		 * Required
		 */
		name: string;
	}
	export interface AvailableSalesChannelFormProperties {

		/**
		 * Sales Channel's ID.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Flag defining if the sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) is selected or not.
		 * Required
		 */
		isSelected: FormControl<boolean | null | undefined>,

		/**
		 * Name of the Sales Channel.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAvailableSalesChannelFormGroup() {
		return new FormGroup<AvailableSalesChannelFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isSelected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BulkUpsertSellerCommissionsRequest {

		/**
		 * Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.
		 * Required
		 */
		categoryFullPath: string;

		/**
		 * Marketplace's Category ID that the product belongs to, configured in the Catalog.
		 * Required
		 */
		categoryId: string;

		/**
		 * Percentage of the comission applied to the freight in decimals.
		 * Required
		 */
		freightCommissionPercentage: number;

		/**
		 * Percentage of the comission applied to the product in decimals.
		 * Required
		 */
		productCommissionPercentage: number;
	}
	export interface BulkUpsertSellerCommissionsRequestFormProperties {

		/**
		 * Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.
		 * Required
		 */
		categoryFullPath: FormControl<string | null | undefined>,

		/**
		 * Marketplace's Category ID that the product belongs to, configured in the Catalog.
		 * Required
		 */
		categoryId: FormControl<string | null | undefined>,

		/**
		 * Percentage of the comission applied to the freight in decimals.
		 * Required
		 */
		freightCommissionPercentage: FormControl<number | null | undefined>,

		/**
		 * Percentage of the comission applied to the product in decimals.
		 * Required
		 */
		productCommissionPercentage: FormControl<number | null | undefined>,
	}
	export function CreateBulkUpsertSellerCommissionsRequestFormGroup() {
		return new FormGroup<BulkUpsertSellerCommissionsRequestFormProperties>({
			categoryFullPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			categoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			freightCommissionPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productCommissionPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSellerLeadRequest {

		/**
		 * Marketplace's account ID
		 * Required
		 */
		accountId: string;

		/** Required */
		accountable: Accountable;

		/** Required */
		address: Address;

		/**
		 * Company's legal document code.
		 * Required
		 */
		document: string;

		/** Required */
		email: string;

		/**
		 * Indicates if the seller has accepted the platform's legal terms and conditions.
		 * Required
		 */
		hasAcceptedLegalTerms: boolean;

		/**
		 * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.
		 * Required
		 */
		salesChannel: string;

		/**
		 * Name of the seller's account, part of the url of their VTEX Admin.
		 * Required
		 */
		sellerAccountName: string;

		/**
		 * Seller's contact email;
		 * Required
		 */
		sellerEmail: string;

		/**
		 * Seller's store's name.
		 * Required
		 */
		sellerName: string;

		/**
		 * Type of seller, including:
		 * `1`: regular seller
		 * `2`: whitelabel seller
		 * Required
		 */
		sellerType: number;
	}
	export interface CreateSellerLeadRequestFormProperties {

		/**
		 * Marketplace's account ID
		 * Required
		 */
		accountId: FormControl<string | null | undefined>,

		/**
		 * Company's legal document code.
		 * Required
		 */
		document: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/**
		 * Indicates if the seller has accepted the platform's legal terms and conditions.
		 * Required
		 */
		hasAcceptedLegalTerms: FormControl<boolean | null | undefined>,

		/**
		 * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) associated to the seller account created.
		 * Required
		 */
		salesChannel: FormControl<string | null | undefined>,

		/**
		 * Name of the seller's account, part of the url of their VTEX Admin.
		 * Required
		 */
		sellerAccountName: FormControl<string | null | undefined>,

		/**
		 * Seller's contact email;
		 * Required
		 */
		sellerEmail: FormControl<string | null | undefined>,

		/**
		 * Seller's store's name.
		 * Required
		 */
		sellerName: FormControl<string | null | undefined>,

		/**
		 * Type of seller, including:
		 * `1`: regular seller
		 * `2`: whitelabel seller
		 * Required
		 */
		sellerType: FormControl<number | null | undefined>,
	}
	export function CreateCreateSellerLeadRequestFormGroup() {
		return new FormGroup<CreateSellerLeadRequestFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hasAcceptedLegalTerms: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerAccountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerEmail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerType: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation. */
	export interface Groups {

		/** Group's unique identifier code. */
		id?: string | null;

		/** Name of the tag chosen to identify the group. */
		name?: string | null;
	}

	/** Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation. */
	export interface GroupsFormProperties {

		/** Group's unique identifier code. */
		id: FormControl<string | null | undefined>,

		/** Name of the tag chosen to identify the group. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGroupsFormGroup() {
		return new FormGroup<GroupsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MainImage {

		/**
		 * Code identifying the image's file.
		 * Required
		 */
		ImageId: string;

		/**
		 * Image's label.
		 * Required
		 */
		ImageLabel: string;

		/**
		 * Path for the image's file.
		 * Required
		 */
		ImagePath: string;

		/**
		 * HTML tag for the selected image.
		 * Required
		 */
		ImageTag: string;

		/**
		 * Alt text for the image.
		 * Required
		 */
		ImageText: string;

		/**
		 * Whether the image is the main one or not.
		 * Required
		 */
		IsMain: boolean;

		/**
		 * If zoom can be applied to the image.
		 * Required
		 */
		IsZoomSize: boolean;

		/**
		 * Date of the last changed made to the offer.
		 * Required
		 */
		LastModified: string;
	}
	export interface MainImageFormProperties {

		/**
		 * Code identifying the image's file.
		 * Required
		 */
		ImageId: FormControl<string | null | undefined>,

		/**
		 * Image's label.
		 * Required
		 */
		ImageLabel: FormControl<string | null | undefined>,

		/**
		 * Path for the image's file.
		 * Required
		 */
		ImagePath: FormControl<string | null | undefined>,

		/**
		 * HTML tag for the selected image.
		 * Required
		 */
		ImageTag: FormControl<string | null | undefined>,

		/**
		 * Alt text for the image.
		 * Required
		 */
		ImageText: FormControl<string | null | undefined>,

		/**
		 * Whether the image is the main one or not.
		 * Required
		 */
		IsMain: FormControl<boolean | null | undefined>,

		/**
		 * If zoom can be applied to the image.
		 * Required
		 */
		IsZoomSize: FormControl<boolean | null | undefined>,

		/**
		 * Date of the last changed made to the offer.
		 * Required
		 */
		LastModified: FormControl<string | null | undefined>,
	}
	export function CreateMainImageFormGroup() {
		return new FormGroup<MainImageFormProperties>({
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

	export interface Offer {

		/**
		 * The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) ID in which the SKU is available.
		 * Required
		 */
		AvailableSalesChannels: string;

		/** Required */
		OffersPerSalesChannel: Array<OffersPerSalesChannel>;

		/**
		 * ID of the seller in the marketplace. This ID must be created by the marketplace.
		 * Required
		 */
		SellerId: string;

		/**
		 * A string that identifies the SKU in the seller. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.
		 * Required
		 */
		SellerSkuId: string;
	}
	export interface OfferFormProperties {

		/**
		 * The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) ID in which the SKU is available.
		 * Required
		 */
		AvailableSalesChannels: FormControl<string | null | undefined>,

		/**
		 * ID of the seller in the marketplace. This ID must be created by the marketplace.
		 * Required
		 */
		SellerId: FormControl<string | null | undefined>,

		/**
		 * A string that identifies the SKU in the seller. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.
		 * Required
		 */
		SellerSkuId: FormControl<string | null | undefined>,
	}
	export function CreateOfferFormGroup() {
		return new FormGroup<OfferFormProperties>({
			AvailableSalesChannels: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SellerSkuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OffersPerSalesChannel {

		/**
		 * Available SKU stock quantity
		 * Required
		 */
		AvailableQuantity: number;

		/**
		 * SKU's suggested selling price
		 * Required
		 */
		ListPrice: number;

		/**
		 * SKU's price.
		 * Required
		 */
		Price: number;

		/**
		 * SKU's price without discount applied.
		 * Required
		 */
		PriceWithoutDiscount: number;

		/**
		 * The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) of the SKU.
		 * Required
		 */
		SaleChannel: number;
	}
	export interface OffersPerSalesChannelFormProperties {

		/**
		 * Available SKU stock quantity
		 * Required
		 */
		AvailableQuantity: FormControl<number | null | undefined>,

		/**
		 * SKU's suggested selling price
		 * Required
		 */
		ListPrice: FormControl<number | null | undefined>,

		/**
		 * SKU's price.
		 * Required
		 */
		Price: FormControl<number | null | undefined>,

		/**
		 * SKU's price without discount applied.
		 * Required
		 */
		PriceWithoutDiscount: FormControl<number | null | undefined>,

		/**
		 * The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) of the SKU.
		 * Required
		 */
		SaleChannel: FormControl<number | null | undefined>,
	}
	export function CreateOffersPerSalesChannelFormGroup() {
		return new FormGroup<OffersPerSalesChannelFormProperties>({
			AvailableQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ListPrice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PriceWithoutDiscount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SaleChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResendSellerLeadRequestRequest {

		/**
		 * Seller Lead's status. Includes `accepted`, `connected` or `invited`.
		 * Required
		 */
		status: string;
	}
	export interface ResendSellerLeadRequestRequestFormProperties {

		/**
		 * Seller Lead's status. Includes `accepted`, `connected` or `invited`.
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateResendSellerLeadRequestRequestFormGroup() {
		return new FormGroup<ResendSellerLeadRequestRequestFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SellerCommissionConfiguration {

		/**
		 * Array with percentage of the comission applied to categories in decimals.
		 * Required
		 */
		categoriesCommissionConfiguration: Array<string>;

		/**
		 * Percentage of the comission applied to the freight in decimals.
		 * Required
		 */
		freightCommissionPercentage: number;

		/**
		 * Percentage of the comission applied to the product in decimals.
		 * Required
		 */
		productCommissionPercentage: number;
	}
	export interface SellerCommissionConfigurationFormProperties {

		/**
		 * Percentage of the comission applied to the freight in decimals.
		 * Required
		 */
		freightCommissionPercentage: FormControl<number | null | undefined>,

		/**
		 * Percentage of the comission applied to the product in decimals.
		 * Required
		 */
		productCommissionPercentage: FormControl<number | null | undefined>,
	}
	export function CreateSellerCommissionConfigurationFormGroup() {
		return new FormGroup<SellerCommissionConfigurationFormProperties>({
			freightCommissionPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productCommissionPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sku2 {

		/**
		 * EAN's unique identifier number
		 * Required
		 */
		EanId: string;

		/**
		 * Whether the SKU is active in the sales channel (true), or not (false).
		 * Required
		 */
		IsActive: boolean;

		/**
		 * Main image's information.
		 * Required
		 */
		MainImage: string;

		/**
		 * Summarized name of the SKU
		 * Required
		 */
		Name: string;

		/**
		 * Complete name of the SKU
		 * Required
		 */
		NameComplete: string;

		/**
		 * Array with offers
		 * Required
		 */
		Offers: Array<Offer>;

		/**
		 * SKU's Reference ID
		 * Required
		 */
		RefId: string;

		/**
		 * SKU's unique identifier number
		 * Required
		 */
		SkuId: string;
	}
	export interface Sku2FormProperties {

		/**
		 * EAN's unique identifier number
		 * Required
		 */
		EanId: FormControl<string | null | undefined>,

		/**
		 * Whether the SKU is active in the sales channel (true), or not (false).
		 * Required
		 */
		IsActive: FormControl<boolean | null | undefined>,

		/**
		 * Main image's information.
		 * Required
		 */
		MainImage: FormControl<string | null | undefined>,

		/**
		 * Summarized name of the SKU
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Complete name of the SKU
		 * Required
		 */
		NameComplete: FormControl<string | null | undefined>,

		/**
		 * SKU's Reference ID
		 * Required
		 */
		RefId: FormControl<string | null | undefined>,

		/**
		 * SKU's unique identifier number
		 * Required
		 */
		SkuId: FormControl<string | null | undefined>,
	}
	export function CreateSku2FormGroup() {
		return new FormGroup<Sku2FormProperties>({
			EanId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			MainImage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NameComplete: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RefId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SkuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpsertMappingRequest {

		/**
		 * Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).
		 * Required
		 */
		marketplaceSalesChannel: number;

		/**
		 * Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.
		 * Required
		 */
		sellerChannel: string;
	}
	export interface UpsertMappingRequestFormProperties {

		/**
		 * Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).
		 * Required
		 */
		marketplaceSalesChannel: FormControl<number | null | undefined>,

		/**
		 * Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.
		 * Required
		 */
		sellerChannel: FormControl<string | null | undefined>,
	}
	export function CreateUpsertMappingRequestFormGroup() {
		return new FormGroup<UpsertMappingRequestFormProperties>({
			marketplaceSalesChannel: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sellerChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpsertSellerCommissionsRequest {

		/**
		 * Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.
		 * Required
		 */
		categoryFullPath: string;

		/**
		 * Marketplace's Category ID that the product belongs to, configured in the Catalog.
		 * Required
		 */
		categoryId: string;

		/**
		 * Percentage of the comission applied to the freight in decimals.
		 * Required
		 */
		freightCommissionPercentage: number;

		/**
		 * Percentage of the comission applied to the product in decimals.
		 * Required
		 */
		productCommissionPercentage: number;
	}
	export interface UpsertSellerCommissionsRequestFormProperties {

		/**
		 * Full path to the SKU's category. It should be written as {department}/{category}. For example: if the department is **Appliances** and the category is **Oven**, the full path should be 'Appliances/Oven'.
		 * Required
		 */
		categoryFullPath: FormControl<string | null | undefined>,

		/**
		 * Marketplace's Category ID that the product belongs to, configured in the Catalog.
		 * Required
		 */
		categoryId: FormControl<string | null | undefined>,

		/**
		 * Percentage of the comission applied to the freight in decimals.
		 * Required
		 */
		freightCommissionPercentage: FormControl<number | null | undefined>,

		/**
		 * Percentage of the comission applied to the product in decimals.
		 * Required
		 */
		productCommissionPercentage: FormControl<number | null | undefined>,
	}
	export function CreateUpsertSellerCommissionsRequestFormGroup() {
		return new FormGroup<UpsertSellerCommissionsRequestFormProperties>({
			categoryFullPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			categoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			freightCommissionPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			productCommissionPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpsertSellerRequest {

		/**
		 * SKU Seller Identification
		 * Required
		 */
		CSCIdentification: string;

		/**
		 * Seller's account name
		 * Required
		 */
		account: string;

		/**
		 * Flag that allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.
		 * Required
		 */
		allowHybridPayments: boolean;

		/**
		 * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) available.
		 * Required
		 */
		availableSalesChannels: Array<AvailableSalesChannel>;

		/**
		 * URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `https://{sellerName}.vtexcommercestable.com.br/api/catalog_system/.`
		 * Required
		 */
		catalogSystemEndpoint: string;

		/**
		 * Channel's name.
		 * Required
		 */
		channel: string;

		/**
		 * Text describing the delivery policy previously agreed between the marketplace and the seller.
		 * Required
		 */
		deliveryPolicy: string;

		/**
		 * String describing the seller
		 * Required
		 */
		description: string;

		/**
		 * email of the admin responsible for the seller.
		 * Required
		 */
		email: string;

		/**
		 * Text describing the exchange and return policy previously agreed between the marketplace and the seller.
		 * Required
		 */
		exchangeReturnPolicy: string;

		/**
		 * URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller.
		 * For **external sellers**, please include the URL of the seller's endpoint. External sellers have different endpoint standards. The seller must inform this endpoint to the marketplace so that the marketplace can complete the configuration process.
		 * For **VTEX Stores**, the field format will be as follows: `https://{SellerName}.vtexcommercestable.com.br/api/fulfillment?&sc={TradePolicyID}`.
		 * The value `SellerName` corresponds to the store name if the seller is a VTEX store.
		 * The value `TradePolicyID` corresponds to the [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV#master-data) created by the seller in their own VTEX environment. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process.
		 * The value `AffiliateID` corresponds to the 3-digit affiliate identification code created by the seller. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process.
		 * To configure the [Multilevel Omnichannel Inventory](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory) feature, fill in this field with the checkout endpoint following this example: `https://{{sellerAccount}}.vtexcommercestable.com.br/api/checkout?affiliateid={{affiliateId}}&sc={{salesChannel`
		 * Required
		 */
		fulfillmentEndpoint: string;

		/**
		 * Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be nulled.
		 * Required
		 */
		fulfillmentSellerId: string;

		/** Array of groups attached to the seller. Groups are defined by key-words that group sellers into categories defined by the marketplace when adding a new seller through the [Configure Seller Account](https://developers.vtex.com/vtex-rest-api/reference/sellers#putupsertseller) endpoint. It is possible to filter sellers by group in the Seller Management page in your VTEX Admin. Know more about groups through our [Seller Management](https://help.vtex.com/en/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv#groups) documentation. */
		groups?: Array<Groups>;

		/**
		 * Seller ID assigned by the marketplace. We recommend filling it in with the seller's account name.
		 * Required
		 */
		id: string;

		/**
		 * Whether the seller is active on the marketplace or not.
		 * Required
		 */
		isActive: boolean;

		/**
		 * Flag used by the VTEX Checkout to simmulate shopping carts, products and shipping only in sellers with the boolean set as `true`, avoiding performance issues.
		 * Required
		 */
		isBetterScope: boolean;

		/**
		 * Flag determining whether the seller configured is a VTEX store or not.
		 * Required
		 */
		isVtex: boolean;

		/**
		 * Name of the seller's store, configured in the seller's environment.
		 * Required
		 */
		name: string;

		/**
		 * User password, if you are using a hub to integrate with the external seller.
		 * Required
		 */
		password: string;

		/**
		 * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. If no value is specified, the system will automatically use the sales channel configured in the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) ID.
		 * Required
		 */
		salesChannel: string;

		/**
		 * Score attributed to this seller.
		 * Required
		 */
		score: number;

		/**
		 * Text describing the security policy previously agreed between the marketplace and the seller.
		 * Required
		 */
		securityPrivacyPolicy: string;

		/** Required */
		sellerCommissionConfiguration: string;

		/**
		 * Type of seller, including:
		 * `1`: regular seller
		 * `2`: whitelabel seller
		 * Required
		 */
		sellerType: number;

		/**
		 * This code is the Identity Number for the legal entity and is linked to information in its base country.
		 * Required
		 */
		taxCode: string;

		/**
		 * the marketplace must first allow VTEX to share clients’ email addresses with the seller. To do so, it is necessary to set 'AllowEmailSharing' as the value for the TrustPolicy field
		 * Required
		 */
		trustPolicy: string;

		/**
		 * Username, if you are using a hub to integrate with the external seller.
		 * Required
		 */
		user: string;
	}
	export interface UpsertSellerRequestFormProperties {

		/**
		 * SKU Seller Identification
		 * Required
		 */
		CSCIdentification: FormControl<string | null | undefined>,

		/**
		 * Seller's account name
		 * Required
		 */
		account: FormControl<string | null | undefined>,

		/**
		 * Flag that allows customers to use gift cards from the seller to buy their products on the marketplace. It identifies purchases made with a gift card so that only the final price (with discounts applied) is paid to the seller.
		 * Required
		 */
		allowHybridPayments: FormControl<boolean | null | undefined>,

		/**
		 * URL of the endpoint of the seller's catalog. This field will only be displayed if the seller type is VTEX Store. The field format will be as follows: `https://{sellerName}.vtexcommercestable.com.br/api/catalog_system/.`
		 * Required
		 */
		catalogSystemEndpoint: FormControl<string | null | undefined>,

		/**
		 * Channel's name.
		 * Required
		 */
		channel: FormControl<string | null | undefined>,

		/**
		 * Text describing the delivery policy previously agreed between the marketplace and the seller.
		 * Required
		 */
		deliveryPolicy: FormControl<string | null | undefined>,

		/**
		 * String describing the seller
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * email of the admin responsible for the seller.
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Text describing the exchange and return policy previously agreed between the marketplace and the seller.
		 * Required
		 */
		exchangeReturnPolicy: FormControl<string | null | undefined>,

		/**
		 * URL of the endpoint for fulfillment of seller's orders, which the marketplace will use to communicate with the seller.
		 * For **external sellers**, please include the URL of the seller's endpoint. External sellers have different endpoint standards. The seller must inform this endpoint to the marketplace so that the marketplace can complete the configuration process.
		 * For **VTEX Stores**, the field format will be as follows: `https://{SellerName}.vtexcommercestable.com.br/api/fulfillment?&sc={TradePolicyID}`.
		 * The value `SellerName` corresponds to the store name if the seller is a VTEX store.
		 * The value `TradePolicyID` corresponds to the [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV#master-data) created by the seller in their own VTEX environment. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process.
		 * The value `AffiliateID` corresponds to the 3-digit affiliate identification code created by the seller. The seller must inform this ID to the marketplace so that the marketplace can complete the configuration process.
		 * To configure the [Multilevel Omnichannel Inventory](https://developers.vtex.com/vtex-rest-api/docs/multilevel-omnichannel-inventory) feature, fill in this field with the checkout endpoint following this example: `https://{{sellerAccount}}.vtexcommercestable.com.br/api/checkout?affiliateid={{affiliateId}}&sc={{salesChannel`
		 * Required
		 */
		fulfillmentEndpoint: FormControl<string | null | undefined>,

		/**
		 * Identification code of the seller responsible for fulfilling the order. This is an optional field used when a seller sells SKUs from another seller. If the seller sells their own SKUs, it must be nulled.
		 * Required
		 */
		fulfillmentSellerId: FormControl<string | null | undefined>,

		/**
		 * Seller ID assigned by the marketplace. We recommend filling it in with the seller's account name.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Whether the seller is active on the marketplace or not.
		 * Required
		 */
		isActive: FormControl<boolean | null | undefined>,

		/**
		 * Flag used by the VTEX Checkout to simmulate shopping carts, products and shipping only in sellers with the boolean set as `true`, avoiding performance issues.
		 * Required
		 */
		isBetterScope: FormControl<boolean | null | undefined>,

		/**
		 * Flag determining whether the seller configured is a VTEX store or not.
		 * Required
		 */
		isVtex: FormControl<boolean | null | undefined>,

		/**
		 * Name of the seller's store, configured in the seller's environment.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * User password, if you are using a hub to integrate with the external seller.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created. If no value is specified, the system will automatically use the sales channel configured in the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) ID.
		 * Required
		 */
		salesChannel: FormControl<string | null | undefined>,

		/**
		 * Score attributed to this seller.
		 * Required
		 */
		score: FormControl<number | null | undefined>,

		/**
		 * Text describing the security policy previously agreed between the marketplace and the seller.
		 * Required
		 */
		securityPrivacyPolicy: FormControl<string | null | undefined>,

		/** Required */
		sellerCommissionConfiguration: FormControl<string | null | undefined>,

		/**
		 * Type of seller, including:
		 * `1`: regular seller
		 * `2`: whitelabel seller
		 * Required
		 */
		sellerType: FormControl<number | null | undefined>,

		/**
		 * This code is the Identity Number for the legal entity and is linked to information in its base country.
		 * Required
		 */
		taxCode: FormControl<string | null | undefined>,

		/**
		 * the marketplace must first allow VTEX to share clients’ email addresses with the seller. To do so, it is necessary to set 'AllowEmailSharing' as the value for the TrustPolicy field
		 * Required
		 */
		trustPolicy: FormControl<string | null | undefined>,

		/**
		 * Username, if you are using a hub to integrate with the external seller.
		 * Required
		 */
		user: FormControl<string | null | undefined>,
	}
	export function CreateUpsertSellerRequestFormGroup() {
		return new FormGroup<UpsertSellerRequestFormProperties>({
			CSCIdentification: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			account: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			allowHybridPayments: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			catalogSystemEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			exchangeReturnPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fulfillmentEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fulfillmentSellerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isActive: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isBetterScope: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isVtex: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			salesChannel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			securityPrivacyPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerCommissionConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sellerType: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			taxCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trustPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Notify marketplace of inventory update
		 * This endpoint is used by *sellers* to notify marketplaces that the inventory level has changed for one of their SKUs.
		 * There is no request body in this call, indicating the new inventory level, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the inventory level of an SKU (`skuId`).
		 * *Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated inventory  information.
		 * Post notificator/{sellerId}/changenotification/{skuId}/inventory
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerId A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.
		 * @param {string} skuId A string that identifies the SKU in the seller, that suffered the change. This is the ID that the marketplace will use for all  references to this SKU, such as price and inventory notifications.
		 * @return {void} 
		 */
		InventoryNotification(accountName: string, environment: string, sellerId: string, skuId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'notificator/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/changenotification/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/inventory?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Notify marketplace of price update
		 * This endpoint is used by *sellers* to notify marketplaces that the price has changed for one of their SKUs.
		 * There is no request body in this call, indicating the new price value, for instance. It only notifies a specific marketplace (`accountName`) that a seller (`sellerId`) has changed the price of an SKU (`skuId`).
		 * *Marketplaces* will then call the [fulfillment endpoint](https://developers.vtex.com/vtex-rest-api/reference/fulfillment-simulation) provided in the seller registration form to get the updated price information.
		 * Post notificator/{sellerId}/changenotification/{skuId}/price
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerId A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.
		 * @param {string} skuId A string that identifies the seller's SKU that suffered the change. This is the ID that the marketplace will use for all  references to this SKU, such as price and inventory notifications.
		 * @return {void} 
		 */
		PriceNotification(accountName: string, environment: string, sellerId: string, skuId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'notificator/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/changenotification/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '/price?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Matched Offers List
		 * Offers are seller's products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.
		 * This endpoint retrieves the available offers in a marketplace. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace, and are currently in its catalog.
		 * It is possible to filter the search through the following parameters:
		 * - rows
		 * - sort
		 * - start
		 * - fq
		 * Get offer-manager/pvt/offers
		 * @param {string} sort Criteria used to sort the list of offers. For sorting values in ascending order, use `asc`, while for descending order, use `desc`. To fill in the field, insert the sorting criteria, followed by 'asc', or 'desc', separated by a comma. You can sort by the following criteria: 
		 * - **price:** sorts offers by price. *Ascending* goes from lowest to highest price, while *Descending* goes from highest to lowest price. 
		 * - **name:** sorts offers by *productName*, in alphabetical order. *Ascending* goes from *A* to *Z*, while *Descending* goes from *Z* to *A*. 
		 * - **availability:** availability in the sales channel (sc). The default value is 1. 
		 * Ex. sort=availability,desc 
		 * Ex. sort=name,asc 
		 * Ex. price,desc
		 * @param {number} rows Number of rows included in the response. Each row corresponds to a single offer. The default amount of rows in the response is 1, and the maximum amount is 50. To have more than one offer listed in the response, please add the `rows` parameter with a number greater than 1.
		 * @param {number} start Number corresponding to the row from which the offer list will begin, used for pagination. Filters the list of offers by retrieving the offers starting from the row defined. The default value is 0, if the param is not included in the call.
		 * @param {string} fq This filter query can be used to filter offers by the criteria described below. It should be filled in by following the format: `fq={{criteriaName}}:{{criteriaValue}}`. 
		 * - **productId:** integer of the product ID 
		 * - **productName:** string of the product's name 
		 * - **skuId:** integer of the SKU ID 
		 * - **eanId:** string of the EAN ID 
		 * - **refId:** string of the Ref ID 
		 * - **categoryId:** integer of the category ID 
		 * - **brandId:** integer of the brand ID 
		 * - **sellerId:** string of the seller ID 
		 * - **sc:** integer of the sales channel's ID (trade policy in VTEX) 
		 * Ex: skuId:172 
		 * Ex: categoryId:13 
		 * Ex. productName:Product example-123
		 * @param {string} accountName Name of the VTEX account. Used as part of the URL
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @return {Array<GetofferslistReturn>} OK
		 */
		Getofferslist(sort: string | null | undefined, rows: number | null | undefined, start: number | null | undefined, fq: string | null | undefined, accountName: string, environment: string): Observable<Array<GetofferslistReturn>> {
			return this.http.get<Array<GetofferslistReturn>>(this.baseUri + 'offer-manager/pvt/offers?sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&rows=' + rows + '&start=' + start + '&fq=' + (fq == null ? '' : encodeURIComponent(fq)) + '&accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), {});
		}

		/**
		 * Get Matched Offer's Data by Product ID
		 * Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.
		 * This endpoint retrieves the available offers for a speciic Product ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog.
		 * The call returns a list of offers for that ID, that contain the following data:
		 * - Seller that sells the SKU
		 * - Correspondent SKU ID
		 * - SKU's price value
		 * - Inventory level
		 * - Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.
		 * Get offer-manager/pvt/product/{productId}
		 * @param {string} accountName Name of the VTEX account. Used as part of the URL.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} productId A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product, such as price and inventory notifications.
		 * @return {void} OK
		 */
		GetProductoffers(accountName: string, environment: string, productId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'offer-manager/pvt/product/' + (productId == null ? '' : encodeURIComponent(productId)) + '?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Matched Offer's Data by SKU ID
		 * Offers are seller products and SKUs that were sent to the marketplace, and already have their price and inventory level configured.
		 * This endpoint retrieves the available offers for a speciic SKU ID in the marketplace's catalog. It differs from the Get Suggestions endpoints, since it retrieves products that were already matched by the marketplace operator, and are currently active in its catalog.
		 * The call returns a list of offers for that ID, that contain the following data:
		 * - Seller that sells the SKU
		 * - Correspondent SKU ID
		 * - SKU's price value
		 * - Inventory level
		 * - Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) that it is available at.
		 * Get offer-manager/pvt/product/{productId}/sku/{skuId}
		 * @param {string} accountName Name of the VTEX account. Used as part of the URL.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} productId A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product, such as price and inventory notifications.
		 * @param {string} skuId A string that identifies the seller's SKU. This is the ID that the marketplace will use for all references to this SKU, such as price and inventory notifications.
		 * @return {void} OK
		 */
		GetSKUoffers(accountName: string, environment: string, productId: string, skuId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'offer-manager/pvt/product/' + (productId == null ? '' : encodeURIComponent(productId)) + '/sku/' + (skuId == null ? '' : encodeURIComponent(skuId)) + '?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Seller Leads
		 * This call's response includes a list of all sellers invited by the marketplace operator to join them. Retrieved results can be filtered by adding optional query fields to the request. Each seller listed includes the following information:
		 * - `id`
		 * - `createdAt`
		 * - `status`
		 * - `isConnected`
		 * - `sellerEmail`
		 * - `sellerName`
		 * - `salesChannel`
		 * - `email`
		 * Get seller-register/pvt/seller-leads
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {number} offset This field determines the limit used to retrieve the list of sellers. The response includes objects starting `from` the value inputted here.
		 * @param {number} limit This field determines the limit used to retrieve the list of sellers. The response includes objects until the value inputted here.            
		 * @param {string} isConnected Query param that enables results to be filter by whether the seller lead is already connected to the marketplace or not.
		 * @param {string} search Custom search field, that filters sellers invited by specific marketplace operator's  email.
		 * @param {string} status Seller Lead's status. Includes `accepted`, `connected` or `invited`.
		 * @param {string} orderBy Query param determining how data will be ordered in the response, ordering by name or ID in descending our ascending order. Includes the following values: 
		 * `namesort` = desc/asc 
		 * `idsort` = desc/asc
		 * @return {void} OK
		 */
		ListSellerLeads(accountName: string, environment: string, offset: number, limit: number, isConnected: string, search: string, status: string, orderBy: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'seller-register/pvt/seller-leads?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)) + '&offset=' + offset + '&limit=' + limit + '&isConnected=' + (isConnected == null ? '' : encodeURIComponent(isConnected)) + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Invite Seller Lead
		 * This API is used by marketplace operators to invite sellers to join their marketplace. The request sends an email to the seller, inviting sellers to activate their store. The invitation's link in the email is unique per user, and available for only seven days for the seller to click and begin activating their store.
		 * The email template is completely customizable. All email templates that VTEX sends to seller leads can be found and edited in the marketplace's VTEX Admin, on the Message Center section.
		 * Post seller-register/pvt/seller-leads
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @return {void} OK
		 */
		CreateSellerLead(accountName: string, environment: string, requestBody: CreateSellerLeadRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'seller-register/pvt/seller-leads?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Seller Lead
		 * This endpoint permanently deletes a seller previously invited to the marketplace, if the seller has not already accepted the invitation.
		 * Delete seller-register/pvt/seller-leads/{sellerLeadId}
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerLeadId ID of the Seller Lead invited to the marketplace.
		 * @return {void} OK
		 */
		RemoveSellerLead(accountName: string, environment: string, sellerLeadId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'seller-register/pvt/seller-leads/' + (sellerLeadId == null ? '' : encodeURIComponent(sellerLeadId)) + '?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Seller Lead's Data by Id
		 * Marketplace operators may call this endpoint to retrieve information about a specific seller invited to the Seller Portal, by searching through their `Seller Lead Id`. To know the chosen seller's `sellerLeadId`, marketplace operators can count on the *List Sellers* endpoint's response as well. Each seller listed includes the following information:
		 * - `id`
		 * - `createdAt`
		 * - `status`
		 * - `isConnected`
		 * - `sellerEmail`
		 * - `sellerName`
		 * - `salesChannel`
		 * - `email`
		 * Get seller-register/pvt/seller-leads/{sellerLeadId}
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerLeadId ID of the Seller Lead invited to the marketplace.
		 * @return {void} OK
		 */
		RetrieveSellerLead(accountName: string, environment: string, sellerLeadId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'seller-register/pvt/seller-leads/' + (sellerLeadId == null ? '' : encodeURIComponent(sellerLeadId)) + '?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Accept Seller Lead
		 * This endpoint is triggered by the seller onboarding wizard, once the seller confirms their invitation. It can be used by marketplace operators to manually accept seller leads, and carry on with their onboarding process.
		 * Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward:
		 * From `invite` > to `Accept` > closing on `Create Seller`.
		 * If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.
		 * Put seller-register/pvt/seller-leads/{sellerLeadId}
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerLeadId ID of the Seller Lead invited to the marketplace.
		 * @return {void} OK
		 */
		AcceptSellerLead(accountName: string, environment: string, sellerLeadId: string, requestBody: AcceptSellerLeadRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'seller-register/pvt/seller-leads/' + (sellerLeadId == null ? '' : encodeURIComponent(sellerLeadId)) + '?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Seller From Lead
		 * This endpoint is used by marketplace operators to create seller accounts. The request will only accept Seller Leads whose status is `accepted`. If they are already `connected` or `invited`, the call will not be fulfilled.
		 * The creation of the account at VTEX is done by an internal Billing service. There is no seller account and marketplace affiliation if you do not go through this step.
		 * Note that there's no specific API call that allows status changes. The operations only allow the seller lead to move forward:
		 * From `invite` > to `Accept` > closing on `Create Seller`.
		 * If you want to change the status, you can start the process again, by deleting that lead through the *Delete Seller Lead* endpoint, and resending the invite through the *Resend Seller Lead's Invite* endpoint.
		 * Put seller-register/pvt/seller-leads/{sellerLeadId}/seller
		 * @param {string} accountName Marketplace's account name, the same one inputted on the endpoint's path.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {boolean} isActive Whether the Seller Lead is `active` or not in Seller Portal. This request only supports the value `false` in this field. If that´s not the case, the request will respond with an internal error.
		 * @param {string} sellerLeadId ID of the Seller Lead invited to the marketplace.
		 * @return {void} OK
		 */
		CreateSellerFromSellerLead(accountName: string, environment: string, isActive: boolean, sellerLeadId: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'seller-register/pvt/seller-leads/' + (sellerLeadId == null ? '' : encodeURIComponent(sellerLeadId)) + '/seller?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)) + '&isActive=' + isActive, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resend Seller Lead Invite
		 * This endpoint allows marketplace operators to resend an invitation to a seller lead, previously invited to join their marketplace. The request will only accept Seller Leads whose status is `invited`. If they are already `connected` or `accepted`, the call will not be fulfilled.
		 * Put seller-register/pvt/seller-leads/{sellerLeadId}/status
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerLeadId ID of the Seller Lead invited to the marketplace.
		 * @return {void} OK
		 */
		ResendSellerLeadRequest(accountName: string, environment: string, sellerLeadId: string, requestBody: ResendSellerLeadRequestRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'seller-register/pvt/seller-leads/' + (sellerLeadId == null ? '' : encodeURIComponent(sellerLeadId)) + '/status?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Sellers
		 * This endpoint lists all Sellers. This call's results can be filtered by [trade policies](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data) through the `sc` query param.
		 * Get seller-register/pvt/sellers
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {number} from The start number of pagination, being `0` the default value.
		 * @param {number} to The end number of pagination, being `100` the default value.
		 * @param {string} keyword Search sellers by a keyword in `sellerId` or `sellerName`.
		 * @param {string} integration Filters sellers by the name of who made the integration, if VTEX or an external hub. The possible values for VTEX integrations are: `vtex-sellerportal`, `vtex-seller` and `vtex-franchise`.
		 * @param {string} group  Groups are defined by keywords that group sellers into categories defined by the marketplace.
		 * @param {boolean} isActive Enables to filter sellers that are active (`true`) or unactive (`false`) in the marketplace.
		 * @param {boolean} isBetterScope The flag `isBetterScope` is used by the VTEX Checkout to simulate shopping carts, products, and shipping only in sellers with the field set as `true`, avoiding performance issues. When used as a query param, `isBetterScope` filters sellers that have the flag set as `true` or `false`.
		 * @param {boolean} isVtex When set as `true`, the list returned will be of sellers who have a VTEX store configured. When set as `false`, the list will be of sellers who do not have a VTEX store configured.
		 * @param {string} sc Filters sellers available for the marketplace's sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) indicated in this field.
		 * @param {number} sellerType Filters sellers by their type, which can be regular seller (`1`) or whitelabel seller (`2`).
		 * @param {string} sort Narrow the search filtering by the fields: `id`, `name` or `pendingoffers`. The list retrieved can be organized in an ascending (`asc`) or descending (`desc`) order. The standardized format is `{field}:{order}`, and the default value is `id:asc`.
		 * @return {void} OK
		 */
		GetListSellers(accountName: string, environment: string, from: number | null | undefined, to: number | null | undefined, keyword: string | null | undefined, integration: string | null | undefined, group : string | null | undefined, isActive: boolean | null | undefined, isBetterScope: boolean | null | undefined, isVtex: boolean | null | undefined, sc: string | null | undefined, sellerType: number | null | undefined, sort: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'seller-register/pvt/sellers?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)) + '&from=' + from + '&to=' + to + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)) + '&integration=' + (integration == null ? '' : encodeURIComponent(integration)) + '&group =' + (group  == null ? '' : encodeURIComponent(group )) + '&isActive=' + isActive + '&isBetterScope=' + isBetterScope + '&isVtex=' + isVtex + '&sc=' + (sc == null ? '' : encodeURIComponent(sc)) + '&sellerType=' + sellerType + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configure Seller Account
		 * This endpoint is used by marketplace operators to configure the accounts of sellers that have already accepted the invitation to join their marketplaces.
		 * For marketplaces to [add sellers](https://help.vtex.com/en/tutorial/adding-a-seller--tutorials_392) without the [Seller Invite](https://help.vtex.com/en/tutorial/marketplace-invited-sellers--6rb2FkcslmDueJ689Ulb9A) feature, call this endpoint directly.
		 * This call includes all the information a seller needs to activate their account.
		 * Post seller-register/pvt/sellers
		 * @param {string} accountName Marketplace's account name, the same one inputted on the endpoint's path.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @return {void} OK
		 */
		UpsertSellerRequest(accountName: string, environment: string, requestBody: UpsertSellerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'seller-register/pvt/sellers?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Seller data by ID
		 * Marketplace operator may call this endpoint to retrieve information about a specific seller by filtering by ID. It is also possible to filter results by sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) through the `sc` query param.
		 * Get seller-register/pvt/sellers/{sellerId}
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sc Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created.
		 * @param {string} sellerId A string that identifies the seller in the marketplace. This ID must be created by the marketplace
		 * @return {void} OK
		 */
		GetRetrieveSeller(accountName: string, environment: string, sc: string | null | undefined, sellerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'seller-register/pvt/sellers/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)) + '&sc=' + (sc == null ? '' : encodeURIComponent(sc)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Seller by Seller ID
		 * This endpoint allows marketplace operators to update the information of sellers connected to their account. You can replace a path's value with another value in order to update that single information. There is no need to fill all the body params available, only the one you wish to update.
		 * Patch seller-register/pvt/sellers/{sellerId}
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerId A string that identifies the seller in the marketplace. This ID must be created by the marketplace
		 * @param {Array<UpdateSellerPatchBody>} requestBody array of objects
		 * @return {void} OK
		 */
		UpdateSeller(accountName: string, environment: string, sellerId: string, requestBody: Array<UpdateSellerPatchBody>): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'seller-register/pvt/sellers/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Seller Commissions by seller ID
		 * This endpoint retrieves all comissions configured for a specific seller.
		 * Get seller-register/pvt/sellers/{sellerId}/commissions
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerId A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
		 * @return {void} OK
		 */
		ListSellerCommissions(accountName: string, environment: string, sellerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'seller-register/pvt/sellers/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/commissions?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Upsert Seller Commissions in Bulk
		 * This endpoint is used by marketplace operators to define comissions for multiple categories.
		 * Put seller-register/pvt/sellers/{sellerId}/commissions/categories
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerId A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
		 * @return {void} OK
		 */
		BulkUpsertSellerCommissions(accountName: string, environment: string, sellerId: string, requestBody: Array<BulkUpsertSellerCommissionsRequest>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'seller-register/pvt/sellers/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/commissions/categories?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove Seller Commissions by Category ID
		 * This endpoint removes a seller comission on the selected category.
		 * Delete seller-register/pvt/sellers/{sellerId}/commissions/{categoryId}
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerId A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
		 * @param {string} categoryId ID of the category in which the comission was applied
		 * @return {void} OK
		 */
		RemoveSellerCommissions(accountName: string, environment: string, sellerId: string, categoryId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'seller-register/pvt/sellers/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/commissions/' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Seller Commissions by Category ID
		 * This endpoint retrieves seller comissions applied to the selected category.
		 * Get seller-register/pvt/sellers/{sellerId}/commissions/{categoryId}
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerId A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
		 * @param {string} categoryId ID of the category in which the comission was applied
		 * @return {void} OK
		 */
		RetrieveSellerCommissions(accountName: string, environment: string, sellerId: string, categoryId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'seller-register/pvt/sellers/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/commissions/' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Upsert Seller Commissions by Category ID
		 * This endpoint is used by marketplace operators to define comissions for a single category, by ID.
		 * Put seller-register/pvt/sellers/{sellerId}/commissions/{categoryId}
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} sellerId A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
		 * @param {string} categoryId ID of the category in which the comission will be applied.
		 * @return {void} OK
		 */
		UpsertSellerCommissions(accountName: string, environment: string, sellerId: string, categoryId: string, requestBody: UpsertSellerCommissionsRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'seller-register/pvt/sellers/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/commissions/' + (categoryId == null ? '' : encodeURIComponent(categoryId)) + '?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Sales Channel Mapping Data
		 * Retrieves information about the mapping between marketplace's sales channels and a specific seller.
		 * Get seller-register/pvt/sellers/{sellerId}/sales-channel/mapping
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. Used as part of the URL
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} an Marketplace's account name, the same one inputted on the endpoint's path.
		 * @param {string} sellerId A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
		 * @return {Array<RetrieveMappingReturn>} OK
		 */
		RetrieveMapping(accountName: string, environment: string, an: string, sellerId: string): Observable<Array<RetrieveMappingReturn>> {
			return this.http.get<Array<RetrieveMappingReturn>>(this.baseUri + 'seller-register/pvt/sellers/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/sales-channel/mapping?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)) + '&an=' + (an == null ? '' : encodeURIComponent(an)), {});
		}

		/**
		 * Upsert Sales Channel Mapping
		 * This endpoint allows the marketplace to map its sales channels with a seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). The seller can have multiple sales channels associated with the same marketplace, by creating different affiliates. The mapping enables the seller to segment catalog, prices, inventory, logistics, and payments in the marketplace.
		 * Put seller-register/pvt/sellers/{sellerId}/sales-channel/mapping
		 * @param {string} accountName Name of the VTEX account that belongs to the marketplace. Used as part of the URL.
		 * @param {string} environment Environment to use. Used as part of the URL.
		 * @param {string} an Marketplace's account name, the same one inputted on the endpoint's path.
		 * @param {string} sellerId A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
		 * @return {Array<UpsertMappingReturn>} OK
		 */
		UpsertMapping(accountName: string, environment: string, an: string, sellerId: string, requestBody: Array<UpsertMappingRequest>): Observable<Array<UpsertMappingReturn>> {
			return this.http.put<Array<UpsertMappingReturn>>(this.baseUri + 'seller-register/pvt/sellers/' + (sellerId == null ? '' : encodeURIComponent(sellerId)) + '/sales-channel/mapping?accountName=' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&environment=' + (environment == null ? '' : encodeURIComponent(environment)) + '&an=' + (an == null ? '' : encodeURIComponent(an)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface GetofferslistReturn {

		/**
		 * Offer's brand ID that the product belongs to, configured in the Catalog. It should be the marketplace's brand chosen for the offer to be matched with.
		 * Required
		 */
		BrandId: number;

		/**
		 * Offer's Category ID that the product belongs to, configured in the Catalog. It should be the marketplace's category chosen for the offer to be matched with.
		 * Required
		 */
		CategoryId: number;

		/**
		 * Last date the offer was modified.
		 * Required
		 */
		LastModified: string;

		/**
		 * A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product.
		 * Required
		 */
		ProductId: string;

		/**
		 * Name of the offer's product.
		 * Required
		 */
		ProductName: string;

		/**
		 * Array of SKUs in the offer.
		 * Required
		 */
		Skus: Array<Sku2>;
	}
	export interface GetofferslistReturnFormProperties {

		/**
		 * Offer's brand ID that the product belongs to, configured in the Catalog. It should be the marketplace's brand chosen for the offer to be matched with.
		 * Required
		 */
		BrandId: FormControl<number | null | undefined>,

		/**
		 * Offer's Category ID that the product belongs to, configured in the Catalog. It should be the marketplace's category chosen for the offer to be matched with.
		 * Required
		 */
		CategoryId: FormControl<number | null | undefined>,

		/**
		 * Last date the offer was modified.
		 * Required
		 */
		LastModified: FormControl<string | null | undefined>,

		/**
		 * A string that identifies the seller's product. This is the ID that the marketplace will use for all references to this product.
		 * Required
		 */
		ProductId: FormControl<string | null | undefined>,

		/**
		 * Name of the offer's product.
		 * Required
		 */
		ProductName: FormControl<string | null | undefined>,
	}
	export function CreateGetofferslistReturnFormGroup() {
		return new FormGroup<GetofferslistReturnFormProperties>({
			BrandId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			CategoryId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			LastModified: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProductName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSellerPatchBody {

		/**
		 * The action being performed, which is always going to be `replace`.
		 * Required
		 */
		operation: string;

		/**
		 * The path in which the value is being updated. It follows the standardized format `/{field}`, where `{field}` is the path's name.
		 * Required
		 */
		path: string;

		/**
		 * The value that is being updated. Notice that the type will depend on the path that is being updated.
		 * Required
		 */
		value: boolean;
	}
	export interface UpdateSellerPatchBodyFormProperties {

		/**
		 * The action being performed, which is always going to be `replace`.
		 * Required
		 */
		operation: FormControl<string | null | undefined>,

		/**
		 * The path in which the value is being updated. It follows the standardized format `/{field}`, where `{field}` is the path's name.
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/**
		 * The value that is being updated. Notice that the type will depend on the path that is being updated.
		 * Required
		 */
		value: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSellerPatchBodyFormGroup() {
		return new FormGroup<UpdateSellerPatchBodyFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RetrieveMappingReturn {

		/** Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). */
		marketplaceSalesChannel?: string | null;

		/** Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping. */
		sellerChannel?: string | null;
	}
	export interface RetrieveMappingReturnFormProperties {

		/** Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). */
		marketplaceSalesChannel: FormControl<string | null | undefined>,

		/** Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping. */
		sellerChannel: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveMappingReturnFormGroup() {
		return new FormGroup<RetrieveMappingReturnFormProperties>({
			marketplaceSalesChannel: new FormControl<string | null | undefined>(undefined),
			sellerChannel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpsertMappingReturn {

		/** Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). */
		marketplaceSalesChannel?: string | null;

		/** Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping. */
		sellerChannel?: string | null;
	}
	export interface UpsertMappingReturnFormProperties {

		/** Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187). */
		marketplaceSalesChannel: FormControl<string | null | undefined>,

		/** Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping. */
		sellerChannel: FormControl<string | null | undefined>,
	}
	export function CreateUpsertMappingReturnFormGroup() {
		return new FormGroup<UpsertMappingReturnFormProperties>({
			marketplaceSalesChannel: new FormControl<string | null | undefined>(undefined),
			sellerChannel: new FormControl<string | null | undefined>(undefined),
		});

	}

}

