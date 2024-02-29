import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The type that defines the columns returned in the <b>Item</b> feed file. */
	export interface Item {

		/** This field is returned empty. For a list of payment methods available for a marketplace, see eBay help pages or the actual View Item page. */
		acceptedPaymentMethods?: string | null;

		/** A pipe separated (<code>|</code>) list of URLs for the additional images of the item. These images are in addition to the primary image, which is returned in the <b>imageUrl</b> column. <b>Note: </b> This column can contain multiple values. */
		additionalImageUrls?: string | null;

		/** Any per item additional shipping costs for a multi-item purchase. For example, let's say the shipping cost for a power cord is $3. But for an additional cord, the shipping cost is only $1. So if you bought 3 cords, the <b> shippingCost</b> would be $3 and this value would be $2 ($1 for each additional item). */
		additionalShippingCostPerUnit?: string | null;

		/** The age group that the product is recommended for. <br><br><b>Valid values:</b> <code>newborn</code>, <code>infant</code>, <code>toddler</code>, <code>kids</code>, <code>adult</code>. */
		ageGroup?: string | null;

		/** A pipe-separated list of alerts available for the item.<br><br>For example, if the <code>DELAYED_DELIVERY</code> alert was returned for an item, it would indicate a delay in shipping by the seller. */
		alerts?: string | null;

		/** An enumeration value representing the item's availability (possibility of being purchased). <br><br><b>Values: </b>    <ul>  <li>AVAILABLE</li>    <li>TEMPORARILY_UNAVAILABLE</li>     <li>UNAVAILABLE</li> </ul>  Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:AvailabilityEnum'>eBay API documentation</a> */
		availability?: string | null;

		/**
		 * This column has a value only when the seller sets their '<a href="#display-item-quantity">display item quantity</a>' preference to <b> Display "More than 10 available" in your listing (if applicable)</b>. The value of this column will be "10", which is the threshold value. <br><br>Code so that your app gracefully handles any future changes to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availabilityThreshold?: number | null;

		/** <a name="display-item-quantity"></a> This column has a value only when the seller sets their <b>Display Item Quantity</b> preference to <b> Display "More than 10 available" in your listing (if applicable)</b>. The value of this column will be <code> MORE_THAN</code>. This indicates that the seller has more than the 'Display Item Quantity', which is 10, in stock for this item.    <br><br> The following are the <b>Display Item Quantity</b> preferences the seller can set. <br><ul><li> <b> Display "More than 10 available" in your listing (if applicable)</b> <br>If the seller enables this preference, this column will have a value as long as there are more than 10 of this item in inventory. If the quantity is equal to 10 or drops below 10, this column will be null and the estimated quantity of the item is returned in the <b> estimatedAvailableQuantity</b> column. </li> <li> <b> Display the exact quantity in your items</b> <br>If the seller enables this preference, the <b> availabilityThresholdType</b> and <b> availabilityThreshold</b> columns will be null  and the estimated quantity of the item is returned in the <b> estimatedAvailableQuantity</b> column.<br><br><b>Note: </b> Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. </li></ul>   <br>Code so that your app gracefully handles any future changes to these preferences. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:AvailabilityThresholdEnum'>eBay API documentation</a> */
		availabilityThresholdType?: string | null;

		/** The name brand of the item, such as Nike, Apple, etc. */
		brand?: string | null;

		/** A comma separated list of the purchase options available for the item. Currently the only supported option is <code>FIXED_PRICE</code>. */
		buyingOptions?: string | null;

		/** The label of the category. For example: <b> Toys & Hobbies|Action Figures|Comic Book Heroes </b> */
		category?: string | null;

		/** The ID of the category of the item. For example: The ID for Toys & Hobbies|Action Figures|Comic Book Heroes is <code>158671</code>. */
		categoryId?: string | null;

		/** The color of the item. */
		color?: string | null;

		/** The text describing the condition of the item. For a list of condition names, see <a href="https://developer.ebay.com/devzone/finding/callref/enums/conditionIdList.html " target="_blank">Item Condition IDs and Names</a>. */
		condition?: string | null;

		/** The identifier of the condition of the item. For example, 1000 is the identifier for NEW. For a list of condition names and IDs, see <a href="https://developer.ebay.com/devzone/finding/callref/enums/conditionIdList.html " target="_blank">Item Condition IDs and Names</a>.<br><br>Code so that your app gracefully handles any future changes to this list. */
		conditionId?: string | null;

		/** URL to the gallery or default image of the item. The other images of the item are returned in the <b>additionalImageUrls</b> field.<br><br><b>For example</b><br><br><code>https://i.ebayimg.com/00/s/M********w/z/W********p/$_1.JPG?set_id=8********F</code> */
		defaultImageUrl?: string | null;

		/** A comma-separated list of available delivery options. This column lets you filter out items than cannot be shipped to the buyer. <br><br><b>Valid Values</b>: SHIP_TO_HOME, SELLER_ARRANGED_LOCAL_PICKUP, IN_STORE_PICKUP, and PICKUP_DROP_OFF. <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:DeliveryOptionsEnum'>eBay API documentation</a> */
		deliveryOptions?: string | null;

		/** The calculated amount of the discount (<b>originalPriceValue</b> - <b>priceValue</b>). For example,  if <b>originalPriceValue</b> is 70 and <b>priceValue</b> is 56, this value would be 14. <p><span class="tablenote"><b>Note: </b> The currency shown in <b>originalPriceCurrency</b> is used for both <b>discountAmount</b> and <b>originalPriceCurrency</b>.</span></p> */
		discountAmount?: string | null;

		/** The calculated discount percentage. For example, if <b> originalPriceValue</b> is 70 and <b> discountAmount</b> is 14, this value will be 20. */
		discountPercentage?: string | null;

		/** The currency in which the Eco Participation Fee for the item is paid. */
		ecoParticipationFeeCurrency?: string | null;

		/** The amount of the Eco Participation Fee, a fee paid toward the eventual disposal of the purchased item. */
		ecoParticipationFeeValue?: string | null;

		/** Indicates the <a href="https://en.wikipedia.org/wiki/European_Union_energy_label">European energy efficiency</a> rating (EEK) of the item. Data is returned in this column only if the seller specified the energy efficiency rating. <br><br>The rating is a set of energy efficiency classes from A to G, where 'A' is the most energy efficient and 'G' is the least efficient. This rating helps buyers choose between various models. <br><br>To retrieve the manufacturer's specifications for this item, when they are available, use the <a href="/api-docs/buy/browse/resources/item/methods/getItem">getItem</a> method in the Browse API. The information is returned in the <b> productFicheWebUrl</b> field. */
		energyEfficiencyClass?: string | null;

		/** The eBay product identifier of a product from the eBay product catalog. You can use this value in the Browse API <a href="/api-docs/buy/browse/resources/item_summary/methods/search">search</a> method to retrieve items for this product and in the <a href="/api-docs/buy/marketing/resources/methods">Marketing API</a> methods to retrieve 'also viewed' and 'also bought' products to encourage up-selling and cross-selling. */
		epid?: string | null;

		/**
		 * The estimated number of this item that are available for purchase. Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. So instead of returning quantity, the estimated availability of the item is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		estimatedAvailableQuantity?: number | null;

		/** In cases where items could vary by gender, this specifies for which gender the product is intended. Possible values include male, female, and unisex. */
		gender?: string | null;

		/** The unique Global Trade Item Number of the item as defined by <a href="https://www.gtin.info " target="_blank">https://www.gtin.info</a>. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value. */
		gtin?: string | null;

		/** Base64 encoded additional information about the hazardous material. */
		hazmatAdditionalInformation?: string | null;

		/** The base64 encoded descriptions of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>encoded(exploding bomb)|encoded(flame)</code> */
		hazmatPictogramDescriptions?: string | null;

		/** The IDs of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>SGH01|SGH02</code> */
		hazmatPictogramIds?: string | null;

		/** The image URLs of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>https:&#47;&#47;img1|https:&#47;&#47;img2</code> */
		hazmatPictogramImageUrls?: string | null;

		/** The localized signal word for the hazardous material, such as 'Danger'. */
		hazmatSignalWord?: string | null;

		/** The ID of the signal word for the hazardous material. */
		hazmatSignalWordId?: string | null;

		/** The base64 encoded descriptions of hazardous material statements, separated by the pipe symbol. For example: <br /><br /><code>encoded(Unstable explosives)|encoded(Flammable gas)</code> */
		hazmatStatementDescriptions?: string | null;

		/** The IDs of hazardous material statements, separated by the pipe symbol. For example: <br /><br /><code>H200|H221</code> */
		hazmatStatementIds?: string | null;

		/** A boolean that indicates whether the images can be altered. If the value is <code>true</code>, you cannot modify the image. <p><span class="tablenote"><b>Note: </b> Due to image licensing agreements and other legal concerns, modification (including resizing) of some images is strictly prohibited. These images are for display as-is only. </span></p> */
		imageAlteringProhibited?: boolean | null;

		/** The URL to the primary image of the item.  This is the URL of the largest image available based on what the seller submitted. */
		imageUrl?: string | null;

		/** The name brand for the item, such as Nike or Apple, which has been programmatically determined by eBay. To identify the product, this is always used along with <b> MPN</b>. <br><br>If the seller provided a brand for the item, the seller's value is returned in the <b> brand</b> column. */
		inferredBrand?: string | null;

		/** The ePID (eBay Product ID of a product in the eBay product catalog) for the item, which has been programmatically determined by eBay using the item's title, aspects, and other data. <br><br>If the seller actually provided an ePID at listing time for the item, the ePID value is returned in the <b>epid</b> column instead. */
		inferredEpid?: string | null;

		/** The GTIN (Global Trade Item Number) of the product as defined by <a href="https://www.gtin.info">https://www.gtin.info</a>, which as been programmatically determined by eBay. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value. <br><br>If the seller provided a GTIN for the item, the seller's value is returned in the <b> gtin</b> column. */
		inferredGtin?: string | null;

		/** A semicolon separated list of the name/value pairs for the aspects of the item, which are BASE64 encoded. These aspects have been programmatically determined by eBay. If the seller provided aspects for the item, the seller's values are returned in the <b>localizedAspects</b> column.  <br><br>The aspect label is separated by a pipe (|), the aspect name and value are separated by a colon (:) and the name/value pairs are separated by a semicolon (;). <p><b> Example without Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b> <br>&nbsp;&nbsp;&nbsp;<code><em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em></code> </p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):    <br>&nbsp;&nbsp;&nbsp;<code>U2l6ZQ==<b style="font-family: 'Arial Black';">:</b>WEw=<b style="font-family: 'Arial Black';">;</b>Q29sb3I=<b style="font-family: 'Arial Black';">:</b>UmVk<b style="font-family: 'Arial Black';">;</b>U2xlZXZlcw==<b style="font-family: 'Arial Black';">:</b>TG9uZw==</code> </p>    <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Size:XL;Color:Red;Sleeves:Long </p>        <p><br><b> Example with Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b>   <br>&nbsp;&nbsp;&nbsp;<code><em>encodedLabel</em>|<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedLabel</em>|</code></p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):  <br>&nbsp;&nbsp;&nbsp;<code>UHJvZHVjdCBJZGVudGlmaWVycw==<b style="font-family: 'Arial Black';">|</b>R1RJTg==<b style="font-family: 'Arial Black';">:</b>MDE5MDE5ODA2NjYzMw==<b style="font-family: 'Arial Black';">;</b>QlJBTkQ=<b style="font-family: 'Arial Black';">:</b>QXBwbGU=<b style="font-family: 'Arial Black';">;</b>UHJvZHVjdCBLZXkgRmVhdHVyZXM=<b style="font-family: 'Arial Black';">|</b>TW9kZWw=<b style="font-family: 'Arial Black';">:</b>aVBob25lIDc=</code> </p>        <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Product Identifiers|GTIN:0190198066633;BRAND:Apple;Product Key Features|Model:iPhone 7</p>        <p><span class="tablenote"><b>Note: </b> The separators (<code> |  :  ; </code>) are <i> not</i> encoded. You must decode each label, name, and value separately. You cannot decode the entire string.</b></p> <p>For more information, see <a href="/api-docs/buy/static/api-feed.html#encoded-aspects">Encoded Aspects</a> in the Buying Integration Guide.</p> */
		inferredLocalizedAspects?: string | null;

		/** The MPN (Manufacturer's Part Number) for the item, which has been programmatically determined by eBay. To identify the product, this is always used along with <b> brand</b>. <br><br>If the seller provided a MPN for the item, the seller's value is returned in the <b> mpn</b> column. */
		inferredMpn?: string | null;

		/** The URL of the View Item page of the item, with the affiliate tracking ID appended to it.<br><br><b>For example</b><br><br><code>https://www.ebay.de/itm/2********0?mkevt=1&mkcid=1&mkrid=707-53477-19255-0&campid=CAMPAIGNID&toolid=2***6&customid=CUSTOMID</code> */
		itemAffiliateWebUrl?: string | null;

		/** A timestamp indicating when the item was created. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		itemCreationDate?: string | null;

		/** A timestamp indicating when the item's sale period will end based on its start date and duration. For Good 'Til Cancelled items, no value is returned in this column. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		itemEndDate?: string | null;

		/** The unique identifier of an item in eBay RESTful format. An example would be <code>v1|1**********2|4**********2</code>. */
		itemId?: string | null;

		/** The country where the item is physically located. */
		itemLocationCountry?: string | null;

		/** The URL of the View Item page of the item. <br/><br><b>For example:</b><br><br><b>Single SKU:</b><br><code>https://www.ebay.de/itm/2********0</code><br><br><b>MSKU:</b><br><code>https://www.ebay.com/itm/2********9?var=5********2</code> */
		itemWebUrl?: string | null;

		/** The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page. */
		legacyItemId?: string | null;

		/** The unit of measurement used for the package dimensions, such as INCH, FEET, CENTIMETER, or METER. <br><br>Code so that your app gracefully handles any future changes to this list.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:LengthUnitOfMeasureEnum'>eBay API documentation</a> */
		lengthUnitOfMeasure?: string | null;

		/** A semicolon separated list of the name/value pairs for the aspects of the item, which are BASE64 encoded. The aspect label is separated by a pipe (|), the aspect name and value are separated by a colon (:) and the name/value pairs are separated by a semicolon (;). <p><b> Example without Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b> <br>&nbsp;&nbsp;&nbsp;<code><em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em></code> </p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):    <br>&nbsp;&nbsp;&nbsp;<code>U2l6ZQ==<b style="font-family: 'Arial Black';">:</b>WEw=<b style="font-family: 'Arial Black';">;</b>Q29sb3I=<b style="font-family: 'Arial Black';">:</b>UmVk<b style="font-family: 'Arial Black';">;</b>U2xlZXZlcw==<b style="font-family: 'Arial Black';">:</b>TG9uZw==</code> </p>    <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Size:XL;Color:Red;Sleeves:Long </p>        <p><br><b> Example with Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b>   <br>&nbsp;&nbsp;&nbsp;<code><em>encodedLabel</em>|<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedLabel</em>|</code></p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):  <br>&nbsp;&nbsp;&nbsp;<code>UHJvZHVjdCBJZGVudGlmaWVycw==<b style="font-family: 'Arial Black';">|</b>R1RJTg==<b style="font-family: 'Arial Black';">:</b>MDE5MDE5ODA2NjYzMw==<b style="font-family: 'Arial Black';">;</b>QlJBTkQ=<b style="font-family: 'Arial Black';">:</b>QXBwbGU=<b style="font-family: 'Arial Black';">;</b>UHJvZHVjdCBLZXkgRmVhdHVyZXM=<b style="font-family: 'Arial Black';">|</b>TW9kZWw=<b style="font-family: 'Arial Black';">:</b>aVBob25lIDc=</code> </p>        <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Product Identifiers|GTIN:0190198066633;BRAND:Apple;Product Key Features|Model:iPhone 7</p>        <p><span class="tablenote"><b>Note: </b> The separators (<code> |  :  ; </code>) are <i> not</i> encoded. You must decode each label, name, and value separately. You cannot decode the entire string.</b></p> <p>For more information, see <a href="/api-docs/buy/static/api-feed.html#encoded-aspects">Encoded Aspects</a> in the Buying Integration Guide.</p> */
		localizedAspects?: string | null;

		/**
		 * The number of items in a lot. In other words, a lot size is the number of items that are being sold together.  <br><br>A lot is a set of two or more items included in a single listing that must be purchased together in a single order line item. All the items in the lot are the same but there can be multiple items in a single lot,  such as the package of batteries shown in the example below.  <br><br><b>For example:</b> <br><br><table border="1"> <tr> <tr>  <th>Item</th>  <th>Lot Definition</th> <th>Lot Size</th></tr>  <tr>  <td>A package of 24 AA batteries</td>  <td>A box of 10 packages</td>  <td>10  </td> </tr>  <tr>  <td>A P235/75-15 Goodyear tire </td>  <td>4 tires  </td>  <td>4  </td> </tr> <tr> <td>Fashion Jewelry Rings  </td> <td>Package of 100 assorted rings  </td> <td>100 </td> </tr></table>  <br><br><span class="tablenote"><b>Note: </b>  Lots are not supported in all categories.  </span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lotSize?: number | null;

		/** The material that the item is made of. */
		material?: string | null;

		/** The manufacturer part number, which is a number that is used in combination with <b> brand</b> to identify a product. */
		mpn?: string | null;

		/** The currency of the <b> originalPriceValue</b> of the item and the <b> discountAmount</b>.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		originalPriceCurrency?: string | null;

		/** The original selling price of the item. This lets you surface a strikethrough price for the item. */
		originalPriceValue?: string | null;

		/** The height of the shipping package that contains the item. */
		packageHeight?: string | null;

		/** The length of the shipping package that contains the item. */
		packageLength?: string | null;

		/** The weight of the package that contains the item. */
		packageWeight?: string | null;

		/** The width of the shipping package that contains the item. */
		packageWidth?: string | null;

		/** Text describing the pattern used on the item. For example, paisley.<br><br><b>Note:</b> All the item aspects, including this aspect, are returned in the localizedAspects container. */
		pattern?: string | null;

		/** The currency used for the price of the item. Generally, this is the currency used by the country of the eBay site offering the item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		priceCurrency?: string | null;

		/** The price of the item, which can be a discounted price. If it is discounted, information about the discount is returned in the <b>originalPriceValue</b>, <b>originalPriceCurrency</b>, <b>discountAmount</b>, and <b>discountPercentage</b> columns.<br><br><span class="tablenote"><b> Note: </b>The price includes the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the <a href="/api-docs/static/rest-request-components.html#HTTP"><code>X-EBAY-C-MARKETPLACE-ID</code></a> request header specifying the supported marketplace (such as <code>EBAY_GB</code>) to see the VAT-inclusive pricing. For more information on VAT, refer to <a href="https://www.ebay.co.uk/help/listings/default/vat-obligations-eu?id=4650&st=12&pos=1&query=Your%20VAT%20obligations%20in%20the%20EU&intent=VAT">VAT Obligations in the EU</a>.</span> */
		priceValue?: string | null;

		/** The unique identifier for the item group that contains this item. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. */
		primaryItemGroupId?: string | null;

		/** The item group type. Supported value: <code>SELLER_DEFINED_VARIATIONS</code>, indicates that the item group was created by the seller. <br><br>Code so that your app gracefully handles any future changes to this list. */
		primaryItemGroupType?: string | null;

		/** EPN (eBay Partner Network) publishers append this value to their affiliate tracking URL when using an EPN tracking link to track changes that occur to Priority Listing items. <br><br><b>Example:</b><code>amdata=enc%3AAQAFAAAAkB1DmsmXf%2BqZ%2BCEMGdebW6oR75GCMdBmc4MCQ%2FCEPqgKHbT0jdWhPwfY5LdUs6HTaP0eBlwKE7Smy2eDslewF7l3xjwWxjqwzNAnsYgxn2PiGkTKbiQSQytFUiymdtANpk1qOnBOoMGMK%2BWsji7jYlvySSs9o9s24TxD6RqWZpNrltzOU7mfnv3H40SZ3YESzg%3D%3D</code><br/><br>See <a  href="https://developer.ebay.com/api-docs/buy/static/ref-epn-link.html ">Creating an EPN Tracking Link</a> for information on EPN tracking links. */
		priorityListingPayload?: string | null;

		/** A pipe separated list of the qualified programs available for the item, such as EBAY_PLUS and AUTHENTICITY_GUARANTEE.  <br><br>eBay Plus is a premium account option for buyers, which provides benefits such as fast free domestic shipping and free returns on selected items. Top-Rated eBay sellers must opt in to eBay Plus to be able to offer the program on qualifying listings. Sellers must commit to next-day delivery of those items.  <span class="tablenote"><b>Note: </b> eBay Plus is available only to buyers in Germany, Austria, and Australia marketplaces. </span><br><br>The eBay Authenticity Guarantee program enables third-party authenticators to perform authentication verification inspections on items such as watches and sneakers. */
		qualifiedPrograms?: string | null;

		/**
		 * The number of items used when calculating the estimation information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantityUsedForEstimate?: number | null;

		/** An enumeration value that indicates how a buyer is refunded when an item is returned. <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:RefundMethodEnum'>eBay API documentation</a> */
		refundMethod?: string | null;

		/** A score that describes how easy it is to repair the product. Score values range from 0.1 (hardest to repair) to 10.0 (easiest), always including a single decimal place.<br><br><span class="tablenote"><b>Note:</b> Support for this field is currently limited to the France marketplace.</span> */
		repairScore?: string | null;

		/** An enumeration value that indicates the alternative methods for a full refund when an item is returned. This column will have data if the seller offers the buyer an item replacement or exchange instead of a monetary refund. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod?: string | null;

		/** An enumeration value that indicates the period of time being used to measure the duration, such as business days, months, or years. <br><br><b>TimeDurationUnitEnum</b> is a common type shared by multiple eBay APIs and fields to express the time unit, but for return period duration, this value will always be <code>DAY</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:TimeDurationUnitEnum'>eBay API documentation</a> */
		returnPeriodUnit?: string | null;

		/**
		 * The amount of days that the buyer has to return the item after the purchase date. For example, if this value is '30', the return period is 30 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		returnPeriodValue?: number | null;

		/** The party responsible for the return shipping costs when an item is returned. <br><br><b>Valid Values: </b> <code>BUYER</code> or <code>SELLER</code>  <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer?: string | null;

		/** Indicates whether the seller accepts returns for the item. */
		returnsAccepted?: boolean | null;

		/** A string value that specifies whether the seller is a business or an individual. This is determined when the seller registers with eBay. If the seller registers for a business account, the value returned in this field will be <code>BUSINESS</code>. If the seller registers for a private account, the value returned in this field will be <code>INDIVIDUAL</code>.<br><br><span class="tablenote"><b>Note:</b> This designation is required by the tax laws in some countries.</span><br><br>This field is returned only on the following sites: EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, and EBAY_PL.<br><br>Code so that your app gracefully handles any future changes to this list.<br><br><b>Valid Values:</b> <code>BUSINESS</code> or <code>INDIVIDUAL</code> */
		sellerAccountType?: string | null;

		/** The percentage of the seller's total positive feedback. */
		sellerFeedbackPercentage?: string | null;

		/** The feedback score of the seller. This value is based on the ratings from eBay members that bought items from this seller. */
		sellerFeedbackScore?: string | null;

		/** An identifier generated/incremented when a seller revises the item. There are two types of item revisions: <ul><li>Seller changes, such as changing the title</li>  <li>eBay system changes, such as changing the quantity when an item is purchased</li></ul> This ID is changed <i> only</i> when the seller makes a change to the item. */
		sellerItemRevision?: string | null;

		/** An enumeration value representing the eBay status of the seller. <br><br><b>Valid Values:</b> <code>TOP_RATED</code>, <code>ABOVE_STANDARD</code>, or an empty value. <br><br>An empty value indicates a return of anything other than <code>TOP_RATED</code> or <code>ABOVE_STANDARD</code>.<br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:SellerTrustLevelEnum'>eBay API documentation</a> */
		sellerTrustLevel?: string | null;

		/** The seller's eBay user name. */
		sellerUsername?: string | null;

		/** A pipe (<code>|</code>) separated alphabetical list of the geographic countries and regions where the item cannot be shipped. <br><br>These countries and regions refine (restrict) the <b> shipToIncludedRegions</b> list.  The COUNTRY: list is separated from the REGION: list with a semicolon (<code>;</code>).       <br><br><b> Format Example: </b> <br> <code>COUNTRY:US|BM|GL|MX|PM;REGION:AFRICA|ASIA|CENTRAL_AMERICA_AND_CARIBBEAN|EUROPE|MIDDLE_EAST|OCEANIA|SOUTH_AMERICA|SOUTHEAST_ASIA;</code>  <br><br><b> Country Values: </b> The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> standard code of the country.       <br><br><b> Region Values: </b> AFRICA, AMERICAS, ANTARCTIC, ARCTIC, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EURO_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, REST_OF_ASIA, SOUTHEAST_ASIA, SOUTH_AMERICA, WORLDWIDE <br><br>Code so that your app gracefully handles any future changes to this list. */
		shipToExcludedRegions?: string | null;

		/** A pipe (<code>|</code>) separated alphabetical list of the geographic countries and regions where the seller will ship the item. <br><br>If a region is specified, you will need to subtract any countries and regions returned in the <b> shipToExcludedRegions</b> column to fully understand where the seller will ship. <br><br>The COUNTRY: list is separated from the REGION: list with a semicolon (<code>;</code>).       <br><br><b> Format Example: </b> <br> <code>COUNTRY:US|BM|GL|MX|PM;REGION:AFRICA|ASIA|CENTRAL_AMERICA_AND_CARIBBEAN|EUROPE|MIDDLE_EAST|OCEANIA|SOUTH_AMERICA|SOUTHEAST_ASIA;</code>  <br><br><b> Country Values: </b> The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> standard code of the country.       <br><br><b> Region Values: </b> AFRICA, AMERICAS, ANTARCTIC, ARCTIC, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EURO_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, REST_OF_ASIA, SOUTHEAST_ASIA, SOUTH_AMERICA, WORLDWIDE <br><br>Code so that your app gracefully handles any future changes to this list. */
		shipToIncludedRegions?: string | null;

		/** The name of the shipping provider, such as FedEx, or USPS. */
		shippingCarrierCode?: string | null;

		/** The final shipping cost for all the items after all discounts are applied.<br><br><span class="tablenote"><b> Note: </b>The price includes the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the <a href="/api-docs/static/rest-request-components.html#HTTP"><code>X-EBAY-C-MARKETPLACE-ID</code></a> request header specifying the supported marketplace (such as <code>EBAY_GB</code>) to see the VAT-inclusive pricing. For more information on VAT, refer to <a href="https://www.ebay.co.uk/help/listings/default/vat-obligations-eu?id=4650&st=12&pos=1&query=Your%20VAT%20obligations%20in%20the%20EU&intent=VAT">VAT Obligations in the EU</a>.</span> */
		shippingCost?: string | null;

		/** Indicates the class of the shipping cost. <br><br><b> Valid Values: </b> FIXED or CALCULATED. */
		shippingCostType?: string | null;

		/** The type of shipping service. For example, USPS First Class. */
		shippingServiceCode?: string | null;

		/** The type of a shipping option, such as EXPEDITED, ONE_DAY, STANDARD, ECONOMY, PICKUP, etc. */
		shippingType?: string | null;

		/** The size of the item. */
		size?: string | null;

		/** The seller-defined description of the TAKE_BACK custom policy for the item. */
		takeBackPolicyDescription?: string | null;

		/** The seller-defined label of the TAKE_BACK custom policy for the item. A TAKE_BACK policy describes the seller's regulatory responsibility to take back a purchased item for disposal when the buyer purchases a new one. */
		takeBackPolicyLabel?: string | null;

		/** The seller created title of the item. This text is an escaped string when special characters are present, using the following rules:</p>   <ul>      <li>Double quotes (&#34;) and backslashes (&#92;) in the Title are escaped with a backslash (&#92;) character</li>      <li>If there are any tabs (&#92;t), double quotes (&#34;), or backslashes (&#92;) in the Title, the entire Title will be wrapped in double quotes.</li>   </ul>   <p><b>For example</b></p>   <p>Before:</p>   <p><code>Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;</b>Tracking</code>   </p>   <p><code>Marvel Legends HULK 8<b>&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#34;</b> Series</code>   </p>   <p>After:</p>   <p><code>&#34;Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;&#92;</b> Tracking&#34;</code>   </p>   <p><code>&#34;Marvel Legends HULK 8<b>&#92;&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#92;&#34;</b> Series<b>&#34;</b> </code>   </p> */
		title?: string | null;

		/** For an item that is priced by the unit, the total number of units that are on offer. For example, if the item is priced by the meter and 50 cm is on offer, the <b>totalUnits</b> would be 0.5 m. */
		totalUnits?: string | null;

		/** The URL to the image that shows the information on the tyre label. */
		tyreLabelImageUrl?: string | null;

		/** This is the price per unit for the item. Some European countries require listings for certain types of products to include the price per unit so buyers can accurately compare prices.   <br><br>For example: <br><br><code>"unitPricingMeasure": "100g",<br> "unitPrice": {<br>&nbsp;&nbsp;"value": "7.99",<br>&nbsp;&nbsp;"currency": "GBP"</code> */
		unitPrice?: string | null;

		/** The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item.  This helps buyers compare prices. <br><br>For example, the following tells the buyer that the item is 7.99 per 100 grams. <br><br><code>"unitPricingMeasure": "100g",<br> "unitPrice": {<br>&nbsp;&nbsp;"value": "7.99",<br>&nbsp;&nbsp;"currency": "GBP"</code> */
		unitPricingMeasure?: string | null;

		/** The unit of measurement used for the package weight, such as POUND, KILOGRAM, OUNCE, or GRAM. <br><br>Code so that your app gracefully handles any future changes to this list.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:WeightUnitOfMeasureEnum'>eBay API documentation</a> */
		weightUnitOfMeasure?: string | null;
	}

	/** The type that defines the columns returned in the <b>Item</b> feed file. */
	export interface ItemFormProperties {

		/** This field is returned empty. For a list of payment methods available for a marketplace, see eBay help pages or the actual View Item page. */
		acceptedPaymentMethods: FormControl<string | null | undefined>,

		/** A pipe separated (<code>|</code>) list of URLs for the additional images of the item. These images are in addition to the primary image, which is returned in the <b>imageUrl</b> column. <b>Note: </b> This column can contain multiple values. */
		additionalImageUrls: FormControl<string | null | undefined>,

		/** Any per item additional shipping costs for a multi-item purchase. For example, let's say the shipping cost for a power cord is $3. But for an additional cord, the shipping cost is only $1. So if you bought 3 cords, the <b> shippingCost</b> would be $3 and this value would be $2 ($1 for each additional item). */
		additionalShippingCostPerUnit: FormControl<string | null | undefined>,

		/** The age group that the product is recommended for. <br><br><b>Valid values:</b> <code>newborn</code>, <code>infant</code>, <code>toddler</code>, <code>kids</code>, <code>adult</code>. */
		ageGroup: FormControl<string | null | undefined>,

		/** A pipe-separated list of alerts available for the item.<br><br>For example, if the <code>DELAYED_DELIVERY</code> alert was returned for an item, it would indicate a delay in shipping by the seller. */
		alerts: FormControl<string | null | undefined>,

		/** An enumeration value representing the item's availability (possibility of being purchased). <br><br><b>Values: </b>    <ul>  <li>AVAILABLE</li>    <li>TEMPORARILY_UNAVAILABLE</li>     <li>UNAVAILABLE</li> </ul>  Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:AvailabilityEnum'>eBay API documentation</a> */
		availability: FormControl<string | null | undefined>,

		/**
		 * This column has a value only when the seller sets their '<a href="#display-item-quantity">display item quantity</a>' preference to <b> Display "More than 10 available" in your listing (if applicable)</b>. The value of this column will be "10", which is the threshold value. <br><br>Code so that your app gracefully handles any future changes to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availabilityThreshold: FormControl<number | null | undefined>,

		/** <a name="display-item-quantity"></a> This column has a value only when the seller sets their <b>Display Item Quantity</b> preference to <b> Display "More than 10 available" in your listing (if applicable)</b>. The value of this column will be <code> MORE_THAN</code>. This indicates that the seller has more than the 'Display Item Quantity', which is 10, in stock for this item.    <br><br> The following are the <b>Display Item Quantity</b> preferences the seller can set. <br><ul><li> <b> Display "More than 10 available" in your listing (if applicable)</b> <br>If the seller enables this preference, this column will have a value as long as there are more than 10 of this item in inventory. If the quantity is equal to 10 or drops below 10, this column will be null and the estimated quantity of the item is returned in the <b> estimatedAvailableQuantity</b> column. </li> <li> <b> Display the exact quantity in your items</b> <br>If the seller enables this preference, the <b> availabilityThresholdType</b> and <b> availabilityThreshold</b> columns will be null  and the estimated quantity of the item is returned in the <b> estimatedAvailableQuantity</b> column.<br><br><b>Note: </b> Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. </li></ul>   <br>Code so that your app gracefully handles any future changes to these preferences. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:AvailabilityThresholdEnum'>eBay API documentation</a> */
		availabilityThresholdType: FormControl<string | null | undefined>,

		/** The name brand of the item, such as Nike, Apple, etc. */
		brand: FormControl<string | null | undefined>,

		/** A comma separated list of the purchase options available for the item. Currently the only supported option is <code>FIXED_PRICE</code>. */
		buyingOptions: FormControl<string | null | undefined>,

		/** The label of the category. For example: <b> Toys & Hobbies|Action Figures|Comic Book Heroes </b> */
		category: FormControl<string | null | undefined>,

		/** The ID of the category of the item. For example: The ID for Toys & Hobbies|Action Figures|Comic Book Heroes is <code>158671</code>. */
		categoryId: FormControl<string | null | undefined>,

		/** The color of the item. */
		color: FormControl<string | null | undefined>,

		/** The text describing the condition of the item. For a list of condition names, see <a href="https://developer.ebay.com/devzone/finding/callref/enums/conditionIdList.html " target="_blank">Item Condition IDs and Names</a>. */
		condition: FormControl<string | null | undefined>,

		/** The identifier of the condition of the item. For example, 1000 is the identifier for NEW. For a list of condition names and IDs, see <a href="https://developer.ebay.com/devzone/finding/callref/enums/conditionIdList.html " target="_blank">Item Condition IDs and Names</a>.<br><br>Code so that your app gracefully handles any future changes to this list. */
		conditionId: FormControl<string | null | undefined>,

		/** URL to the gallery or default image of the item. The other images of the item are returned in the <b>additionalImageUrls</b> field.<br><br><b>For example</b><br><br><code>https://i.ebayimg.com/00/s/M********w/z/W********p/$_1.JPG?set_id=8********F</code> */
		defaultImageUrl: FormControl<string | null | undefined>,

		/** A comma-separated list of available delivery options. This column lets you filter out items than cannot be shipped to the buyer. <br><br><b>Valid Values</b>: SHIP_TO_HOME, SELLER_ARRANGED_LOCAL_PICKUP, IN_STORE_PICKUP, and PICKUP_DROP_OFF. <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:DeliveryOptionsEnum'>eBay API documentation</a> */
		deliveryOptions: FormControl<string | null | undefined>,

		/** The calculated amount of the discount (<b>originalPriceValue</b> - <b>priceValue</b>). For example,  if <b>originalPriceValue</b> is 70 and <b>priceValue</b> is 56, this value would be 14. <p><span class="tablenote"><b>Note: </b> The currency shown in <b>originalPriceCurrency</b> is used for both <b>discountAmount</b> and <b>originalPriceCurrency</b>.</span></p> */
		discountAmount: FormControl<string | null | undefined>,

		/** The calculated discount percentage. For example, if <b> originalPriceValue</b> is 70 and <b> discountAmount</b> is 14, this value will be 20. */
		discountPercentage: FormControl<string | null | undefined>,

		/** The currency in which the Eco Participation Fee for the item is paid. */
		ecoParticipationFeeCurrency: FormControl<string | null | undefined>,

		/** The amount of the Eco Participation Fee, a fee paid toward the eventual disposal of the purchased item. */
		ecoParticipationFeeValue: FormControl<string | null | undefined>,

		/** Indicates the <a href="https://en.wikipedia.org/wiki/European_Union_energy_label">European energy efficiency</a> rating (EEK) of the item. Data is returned in this column only if the seller specified the energy efficiency rating. <br><br>The rating is a set of energy efficiency classes from A to G, where 'A' is the most energy efficient and 'G' is the least efficient. This rating helps buyers choose between various models. <br><br>To retrieve the manufacturer's specifications for this item, when they are available, use the <a href="/api-docs/buy/browse/resources/item/methods/getItem">getItem</a> method in the Browse API. The information is returned in the <b> productFicheWebUrl</b> field. */
		energyEfficiencyClass: FormControl<string | null | undefined>,

		/** The eBay product identifier of a product from the eBay product catalog. You can use this value in the Browse API <a href="/api-docs/buy/browse/resources/item_summary/methods/search">search</a> method to retrieve items for this product and in the <a href="/api-docs/buy/marketing/resources/methods">Marketing API</a> methods to retrieve 'also viewed' and 'also bought' products to encourage up-selling and cross-selling. */
		epid: FormControl<string | null | undefined>,

		/**
		 * The estimated number of this item that are available for purchase. Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. So instead of returning quantity, the estimated availability of the item is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		estimatedAvailableQuantity: FormControl<number | null | undefined>,

		/** In cases where items could vary by gender, this specifies for which gender the product is intended. Possible values include male, female, and unisex. */
		gender: FormControl<string | null | undefined>,

		/** The unique Global Trade Item Number of the item as defined by <a href="https://www.gtin.info " target="_blank">https://www.gtin.info</a>. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value. */
		gtin: FormControl<string | null | undefined>,

		/** Base64 encoded additional information about the hazardous material. */
		hazmatAdditionalInformation: FormControl<string | null | undefined>,

		/** The base64 encoded descriptions of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>encoded(exploding bomb)|encoded(flame)</code> */
		hazmatPictogramDescriptions: FormControl<string | null | undefined>,

		/** The IDs of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>SGH01|SGH02</code> */
		hazmatPictogramIds: FormControl<string | null | undefined>,

		/** The image URLs of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>https:&#47;&#47;img1|https:&#47;&#47;img2</code> */
		hazmatPictogramImageUrls: FormControl<string | null | undefined>,

		/** The localized signal word for the hazardous material, such as 'Danger'. */
		hazmatSignalWord: FormControl<string | null | undefined>,

		/** The ID of the signal word for the hazardous material. */
		hazmatSignalWordId: FormControl<string | null | undefined>,

		/** The base64 encoded descriptions of hazardous material statements, separated by the pipe symbol. For example: <br /><br /><code>encoded(Unstable explosives)|encoded(Flammable gas)</code> */
		hazmatStatementDescriptions: FormControl<string | null | undefined>,

		/** The IDs of hazardous material statements, separated by the pipe symbol. For example: <br /><br /><code>H200|H221</code> */
		hazmatStatementIds: FormControl<string | null | undefined>,

		/** A boolean that indicates whether the images can be altered. If the value is <code>true</code>, you cannot modify the image. <p><span class="tablenote"><b>Note: </b> Due to image licensing agreements and other legal concerns, modification (including resizing) of some images is strictly prohibited. These images are for display as-is only. </span></p> */
		imageAlteringProhibited: FormControl<boolean | null | undefined>,

		/** The URL to the primary image of the item.  This is the URL of the largest image available based on what the seller submitted. */
		imageUrl: FormControl<string | null | undefined>,

		/** The name brand for the item, such as Nike or Apple, which has been programmatically determined by eBay. To identify the product, this is always used along with <b> MPN</b>. <br><br>If the seller provided a brand for the item, the seller's value is returned in the <b> brand</b> column. */
		inferredBrand: FormControl<string | null | undefined>,

		/** The ePID (eBay Product ID of a product in the eBay product catalog) for the item, which has been programmatically determined by eBay using the item's title, aspects, and other data. <br><br>If the seller actually provided an ePID at listing time for the item, the ePID value is returned in the <b>epid</b> column instead. */
		inferredEpid: FormControl<string | null | undefined>,

		/** The GTIN (Global Trade Item Number) of the product as defined by <a href="https://www.gtin.info">https://www.gtin.info</a>, which as been programmatically determined by eBay. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value. <br><br>If the seller provided a GTIN for the item, the seller's value is returned in the <b> gtin</b> column. */
		inferredGtin: FormControl<string | null | undefined>,

		/** A semicolon separated list of the name/value pairs for the aspects of the item, which are BASE64 encoded. These aspects have been programmatically determined by eBay. If the seller provided aspects for the item, the seller's values are returned in the <b>localizedAspects</b> column.  <br><br>The aspect label is separated by a pipe (|), the aspect name and value are separated by a colon (:) and the name/value pairs are separated by a semicolon (;). <p><b> Example without Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b> <br>&nbsp;&nbsp;&nbsp;<code><em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em></code> </p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):    <br>&nbsp;&nbsp;&nbsp;<code>U2l6ZQ==<b style="font-family: 'Arial Black';">:</b>WEw=<b style="font-family: 'Arial Black';">;</b>Q29sb3I=<b style="font-family: 'Arial Black';">:</b>UmVk<b style="font-family: 'Arial Black';">;</b>U2xlZXZlcw==<b style="font-family: 'Arial Black';">:</b>TG9uZw==</code> </p>    <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Size:XL;Color:Red;Sleeves:Long </p>        <p><br><b> Example with Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b>   <br>&nbsp;&nbsp;&nbsp;<code><em>encodedLabel</em>|<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedLabel</em>|</code></p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):  <br>&nbsp;&nbsp;&nbsp;<code>UHJvZHVjdCBJZGVudGlmaWVycw==<b style="font-family: 'Arial Black';">|</b>R1RJTg==<b style="font-family: 'Arial Black';">:</b>MDE5MDE5ODA2NjYzMw==<b style="font-family: 'Arial Black';">;</b>QlJBTkQ=<b style="font-family: 'Arial Black';">:</b>QXBwbGU=<b style="font-family: 'Arial Black';">;</b>UHJvZHVjdCBLZXkgRmVhdHVyZXM=<b style="font-family: 'Arial Black';">|</b>TW9kZWw=<b style="font-family: 'Arial Black';">:</b>aVBob25lIDc=</code> </p>        <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Product Identifiers|GTIN:0190198066633;BRAND:Apple;Product Key Features|Model:iPhone 7</p>        <p><span class="tablenote"><b>Note: </b> The separators (<code> |  :  ; </code>) are <i> not</i> encoded. You must decode each label, name, and value separately. You cannot decode the entire string.</b></p> <p>For more information, see <a href="/api-docs/buy/static/api-feed.html#encoded-aspects">Encoded Aspects</a> in the Buying Integration Guide.</p> */
		inferredLocalizedAspects: FormControl<string | null | undefined>,

		/** The MPN (Manufacturer's Part Number) for the item, which has been programmatically determined by eBay. To identify the product, this is always used along with <b> brand</b>. <br><br>If the seller provided a MPN for the item, the seller's value is returned in the <b> mpn</b> column. */
		inferredMpn: FormControl<string | null | undefined>,

		/** The URL of the View Item page of the item, with the affiliate tracking ID appended to it.<br><br><b>For example</b><br><br><code>https://www.ebay.de/itm/2********0?mkevt=1&mkcid=1&mkrid=707-53477-19255-0&campid=CAMPAIGNID&toolid=2***6&customid=CUSTOMID</code> */
		itemAffiliateWebUrl: FormControl<string | null | undefined>,

		/** A timestamp indicating when the item was created. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		itemCreationDate: FormControl<string | null | undefined>,

		/** A timestamp indicating when the item's sale period will end based on its start date and duration. For Good 'Til Cancelled items, no value is returned in this column. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		itemEndDate: FormControl<string | null | undefined>,

		/** The unique identifier of an item in eBay RESTful format. An example would be <code>v1|1**********2|4**********2</code>. */
		itemId: FormControl<string | null | undefined>,

		/** The country where the item is physically located. */
		itemLocationCountry: FormControl<string | null | undefined>,

		/** The URL of the View Item page of the item. <br/><br><b>For example:</b><br><br><b>Single SKU:</b><br><code>https://www.ebay.de/itm/2********0</code><br><br><b>MSKU:</b><br><code>https://www.ebay.com/itm/2********9?var=5********2</code> */
		itemWebUrl: FormControl<string | null | undefined>,

		/** The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page. */
		legacyItemId: FormControl<string | null | undefined>,

		/** The unit of measurement used for the package dimensions, such as INCH, FEET, CENTIMETER, or METER. <br><br>Code so that your app gracefully handles any future changes to this list.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:LengthUnitOfMeasureEnum'>eBay API documentation</a> */
		lengthUnitOfMeasure: FormControl<string | null | undefined>,

		/** A semicolon separated list of the name/value pairs for the aspects of the item, which are BASE64 encoded. The aspect label is separated by a pipe (|), the aspect name and value are separated by a colon (:) and the name/value pairs are separated by a semicolon (;). <p><b> Example without Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b> <br>&nbsp;&nbsp;&nbsp;<code><em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em></code> </p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):    <br>&nbsp;&nbsp;&nbsp;<code>U2l6ZQ==<b style="font-family: 'Arial Black';">:</b>WEw=<b style="font-family: 'Arial Black';">;</b>Q29sb3I=<b style="font-family: 'Arial Black';">:</b>UmVk<b style="font-family: 'Arial Black';">;</b>U2xlZXZlcw==<b style="font-family: 'Arial Black';">:</b>TG9uZw==</code> </p>    <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Size:XL;Color:Red;Sleeves:Long </p>        <p><br><b> Example with Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b>   <br>&nbsp;&nbsp;&nbsp;<code><em>encodedLabel</em>|<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedLabel</em>|</code></p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):  <br>&nbsp;&nbsp;&nbsp;<code>UHJvZHVjdCBJZGVudGlmaWVycw==<b style="font-family: 'Arial Black';">|</b>R1RJTg==<b style="font-family: 'Arial Black';">:</b>MDE5MDE5ODA2NjYzMw==<b style="font-family: 'Arial Black';">;</b>QlJBTkQ=<b style="font-family: 'Arial Black';">:</b>QXBwbGU=<b style="font-family: 'Arial Black';">;</b>UHJvZHVjdCBLZXkgRmVhdHVyZXM=<b style="font-family: 'Arial Black';">|</b>TW9kZWw=<b style="font-family: 'Arial Black';">:</b>aVBob25lIDc=</code> </p>        <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Product Identifiers|GTIN:0190198066633;BRAND:Apple;Product Key Features|Model:iPhone 7</p>        <p><span class="tablenote"><b>Note: </b> The separators (<code> |  :  ; </code>) are <i> not</i> encoded. You must decode each label, name, and value separately. You cannot decode the entire string.</b></p> <p>For more information, see <a href="/api-docs/buy/static/api-feed.html#encoded-aspects">Encoded Aspects</a> in the Buying Integration Guide.</p> */
		localizedAspects: FormControl<string | null | undefined>,

		/**
		 * The number of items in a lot. In other words, a lot size is the number of items that are being sold together.  <br><br>A lot is a set of two or more items included in a single listing that must be purchased together in a single order line item. All the items in the lot are the same but there can be multiple items in a single lot,  such as the package of batteries shown in the example below.  <br><br><b>For example:</b> <br><br><table border="1"> <tr> <tr>  <th>Item</th>  <th>Lot Definition</th> <th>Lot Size</th></tr>  <tr>  <td>A package of 24 AA batteries</td>  <td>A box of 10 packages</td>  <td>10  </td> </tr>  <tr>  <td>A P235/75-15 Goodyear tire </td>  <td>4 tires  </td>  <td>4  </td> </tr> <tr> <td>Fashion Jewelry Rings  </td> <td>Package of 100 assorted rings  </td> <td>100 </td> </tr></table>  <br><br><span class="tablenote"><b>Note: </b>  Lots are not supported in all categories.  </span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lotSize: FormControl<number | null | undefined>,

		/** The material that the item is made of. */
		material: FormControl<string | null | undefined>,

		/** The manufacturer part number, which is a number that is used in combination with <b> brand</b> to identify a product. */
		mpn: FormControl<string | null | undefined>,

		/** The currency of the <b> originalPriceValue</b> of the item and the <b> discountAmount</b>.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		originalPriceCurrency: FormControl<string | null | undefined>,

		/** The original selling price of the item. This lets you surface a strikethrough price for the item. */
		originalPriceValue: FormControl<string | null | undefined>,

		/** The height of the shipping package that contains the item. */
		packageHeight: FormControl<string | null | undefined>,

		/** The length of the shipping package that contains the item. */
		packageLength: FormControl<string | null | undefined>,

		/** The weight of the package that contains the item. */
		packageWeight: FormControl<string | null | undefined>,

		/** The width of the shipping package that contains the item. */
		packageWidth: FormControl<string | null | undefined>,

		/** Text describing the pattern used on the item. For example, paisley.<br><br><b>Note:</b> All the item aspects, including this aspect, are returned in the localizedAspects container. */
		pattern: FormControl<string | null | undefined>,

		/** The currency used for the price of the item. Generally, this is the currency used by the country of the eBay site offering the item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		priceCurrency: FormControl<string | null | undefined>,

		/** The price of the item, which can be a discounted price. If it is discounted, information about the discount is returned in the <b>originalPriceValue</b>, <b>originalPriceCurrency</b>, <b>discountAmount</b>, and <b>discountPercentage</b> columns.<br><br><span class="tablenote"><b> Note: </b>The price includes the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the <a href="/api-docs/static/rest-request-components.html#HTTP"><code>X-EBAY-C-MARKETPLACE-ID</code></a> request header specifying the supported marketplace (such as <code>EBAY_GB</code>) to see the VAT-inclusive pricing. For more information on VAT, refer to <a href="https://www.ebay.co.uk/help/listings/default/vat-obligations-eu?id=4650&st=12&pos=1&query=Your%20VAT%20obligations%20in%20the%20EU&intent=VAT">VAT Obligations in the EU</a>.</span> */
		priceValue: FormControl<string | null | undefined>,

		/** The unique identifier for the item group that contains this item. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. */
		primaryItemGroupId: FormControl<string | null | undefined>,

		/** The item group type. Supported value: <code>SELLER_DEFINED_VARIATIONS</code>, indicates that the item group was created by the seller. <br><br>Code so that your app gracefully handles any future changes to this list. */
		primaryItemGroupType: FormControl<string | null | undefined>,

		/** EPN (eBay Partner Network) publishers append this value to their affiliate tracking URL when using an EPN tracking link to track changes that occur to Priority Listing items. <br><br><b>Example:</b><code>amdata=enc%3AAQAFAAAAkB1DmsmXf%2BqZ%2BCEMGdebW6oR75GCMdBmc4MCQ%2FCEPqgKHbT0jdWhPwfY5LdUs6HTaP0eBlwKE7Smy2eDslewF7l3xjwWxjqwzNAnsYgxn2PiGkTKbiQSQytFUiymdtANpk1qOnBOoMGMK%2BWsji7jYlvySSs9o9s24TxD6RqWZpNrltzOU7mfnv3H40SZ3YESzg%3D%3D</code><br/><br>See <a  href="https://developer.ebay.com/api-docs/buy/static/ref-epn-link.html ">Creating an EPN Tracking Link</a> for information on EPN tracking links. */
		priorityListingPayload: FormControl<string | null | undefined>,

		/** A pipe separated list of the qualified programs available for the item, such as EBAY_PLUS and AUTHENTICITY_GUARANTEE.  <br><br>eBay Plus is a premium account option for buyers, which provides benefits such as fast free domestic shipping and free returns on selected items. Top-Rated eBay sellers must opt in to eBay Plus to be able to offer the program on qualifying listings. Sellers must commit to next-day delivery of those items.  <span class="tablenote"><b>Note: </b> eBay Plus is available only to buyers in Germany, Austria, and Australia marketplaces. </span><br><br>The eBay Authenticity Guarantee program enables third-party authenticators to perform authentication verification inspections on items such as watches and sneakers. */
		qualifiedPrograms: FormControl<string | null | undefined>,

		/**
		 * The number of items used when calculating the estimation information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantityUsedForEstimate: FormControl<number | null | undefined>,

		/** An enumeration value that indicates how a buyer is refunded when an item is returned. <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:RefundMethodEnum'>eBay API documentation</a> */
		refundMethod: FormControl<string | null | undefined>,

		/** A score that describes how easy it is to repair the product. Score values range from 0.1 (hardest to repair) to 10.0 (easiest), always including a single decimal place.<br><br><span class="tablenote"><b>Note:</b> Support for this field is currently limited to the France marketplace.</span> */
		repairScore: FormControl<string | null | undefined>,

		/** An enumeration value that indicates the alternative methods for a full refund when an item is returned. This column will have data if the seller offers the buyer an item replacement or exchange instead of a monetary refund. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod: FormControl<string | null | undefined>,

		/** An enumeration value that indicates the period of time being used to measure the duration, such as business days, months, or years. <br><br><b>TimeDurationUnitEnum</b> is a common type shared by multiple eBay APIs and fields to express the time unit, but for return period duration, this value will always be <code>DAY</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:TimeDurationUnitEnum'>eBay API documentation</a> */
		returnPeriodUnit: FormControl<string | null | undefined>,

		/**
		 * The amount of days that the buyer has to return the item after the purchase date. For example, if this value is '30', the return period is 30 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		returnPeriodValue: FormControl<number | null | undefined>,

		/** The party responsible for the return shipping costs when an item is returned. <br><br><b>Valid Values: </b> <code>BUYER</code> or <code>SELLER</code>  <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer: FormControl<string | null | undefined>,

		/** Indicates whether the seller accepts returns for the item. */
		returnsAccepted: FormControl<boolean | null | undefined>,

		/** A string value that specifies whether the seller is a business or an individual. This is determined when the seller registers with eBay. If the seller registers for a business account, the value returned in this field will be <code>BUSINESS</code>. If the seller registers for a private account, the value returned in this field will be <code>INDIVIDUAL</code>.<br><br><span class="tablenote"><b>Note:</b> This designation is required by the tax laws in some countries.</span><br><br>This field is returned only on the following sites: EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, and EBAY_PL.<br><br>Code so that your app gracefully handles any future changes to this list.<br><br><b>Valid Values:</b> <code>BUSINESS</code> or <code>INDIVIDUAL</code> */
		sellerAccountType: FormControl<string | null | undefined>,

		/** The percentage of the seller's total positive feedback. */
		sellerFeedbackPercentage: FormControl<string | null | undefined>,

		/** The feedback score of the seller. This value is based on the ratings from eBay members that bought items from this seller. */
		sellerFeedbackScore: FormControl<string | null | undefined>,

		/** An identifier generated/incremented when a seller revises the item. There are two types of item revisions: <ul><li>Seller changes, such as changing the title</li>  <li>eBay system changes, such as changing the quantity when an item is purchased</li></ul> This ID is changed <i> only</i> when the seller makes a change to the item. */
		sellerItemRevision: FormControl<string | null | undefined>,

		/** An enumeration value representing the eBay status of the seller. <br><br><b>Valid Values:</b> <code>TOP_RATED</code>, <code>ABOVE_STANDARD</code>, or an empty value. <br><br>An empty value indicates a return of anything other than <code>TOP_RATED</code> or <code>ABOVE_STANDARD</code>.<br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:SellerTrustLevelEnum'>eBay API documentation</a> */
		sellerTrustLevel: FormControl<string | null | undefined>,

		/** The seller's eBay user name. */
		sellerUsername: FormControl<string | null | undefined>,

		/** A pipe (<code>|</code>) separated alphabetical list of the geographic countries and regions where the item cannot be shipped. <br><br>These countries and regions refine (restrict) the <b> shipToIncludedRegions</b> list.  The COUNTRY: list is separated from the REGION: list with a semicolon (<code>;</code>).       <br><br><b> Format Example: </b> <br> <code>COUNTRY:US|BM|GL|MX|PM;REGION:AFRICA|ASIA|CENTRAL_AMERICA_AND_CARIBBEAN|EUROPE|MIDDLE_EAST|OCEANIA|SOUTH_AMERICA|SOUTHEAST_ASIA;</code>  <br><br><b> Country Values: </b> The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> standard code of the country.       <br><br><b> Region Values: </b> AFRICA, AMERICAS, ANTARCTIC, ARCTIC, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EURO_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, REST_OF_ASIA, SOUTHEAST_ASIA, SOUTH_AMERICA, WORLDWIDE <br><br>Code so that your app gracefully handles any future changes to this list. */
		shipToExcludedRegions: FormControl<string | null | undefined>,

		/** A pipe (<code>|</code>) separated alphabetical list of the geographic countries and regions where the seller will ship the item. <br><br>If a region is specified, you will need to subtract any countries and regions returned in the <b> shipToExcludedRegions</b> column to fully understand where the seller will ship. <br><br>The COUNTRY: list is separated from the REGION: list with a semicolon (<code>;</code>).       <br><br><b> Format Example: </b> <br> <code>COUNTRY:US|BM|GL|MX|PM;REGION:AFRICA|ASIA|CENTRAL_AMERICA_AND_CARIBBEAN|EUROPE|MIDDLE_EAST|OCEANIA|SOUTH_AMERICA|SOUTHEAST_ASIA;</code>  <br><br><b> Country Values: </b> The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> standard code of the country.       <br><br><b> Region Values: </b> AFRICA, AMERICAS, ANTARCTIC, ARCTIC, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EURO_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, REST_OF_ASIA, SOUTHEAST_ASIA, SOUTH_AMERICA, WORLDWIDE <br><br>Code so that your app gracefully handles any future changes to this list. */
		shipToIncludedRegions: FormControl<string | null | undefined>,

		/** The name of the shipping provider, such as FedEx, or USPS. */
		shippingCarrierCode: FormControl<string | null | undefined>,

		/** The final shipping cost for all the items after all discounts are applied.<br><br><span class="tablenote"><b> Note: </b>The price includes the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the <a href="/api-docs/static/rest-request-components.html#HTTP"><code>X-EBAY-C-MARKETPLACE-ID</code></a> request header specifying the supported marketplace (such as <code>EBAY_GB</code>) to see the VAT-inclusive pricing. For more information on VAT, refer to <a href="https://www.ebay.co.uk/help/listings/default/vat-obligations-eu?id=4650&st=12&pos=1&query=Your%20VAT%20obligations%20in%20the%20EU&intent=VAT">VAT Obligations in the EU</a>.</span> */
		shippingCost: FormControl<string | null | undefined>,

		/** Indicates the class of the shipping cost. <br><br><b> Valid Values: </b> FIXED or CALCULATED. */
		shippingCostType: FormControl<string | null | undefined>,

		/** The type of shipping service. For example, USPS First Class. */
		shippingServiceCode: FormControl<string | null | undefined>,

		/** The type of a shipping option, such as EXPEDITED, ONE_DAY, STANDARD, ECONOMY, PICKUP, etc. */
		shippingType: FormControl<string | null | undefined>,

		/** The size of the item. */
		size: FormControl<string | null | undefined>,

		/** The seller-defined description of the TAKE_BACK custom policy for the item. */
		takeBackPolicyDescription: FormControl<string | null | undefined>,

		/** The seller-defined label of the TAKE_BACK custom policy for the item. A TAKE_BACK policy describes the seller's regulatory responsibility to take back a purchased item for disposal when the buyer purchases a new one. */
		takeBackPolicyLabel: FormControl<string | null | undefined>,

		/** The seller created title of the item. This text is an escaped string when special characters are present, using the following rules:</p>   <ul>      <li>Double quotes (&#34;) and backslashes (&#92;) in the Title are escaped with a backslash (&#92;) character</li>      <li>If there are any tabs (&#92;t), double quotes (&#34;), or backslashes (&#92;) in the Title, the entire Title will be wrapped in double quotes.</li>   </ul>   <p><b>For example</b></p>   <p>Before:</p>   <p><code>Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;</b>Tracking</code>   </p>   <p><code>Marvel Legends HULK 8<b>&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#34;</b> Series</code>   </p>   <p>After:</p>   <p><code>&#34;Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;&#92;</b> Tracking&#34;</code>   </p>   <p><code>&#34;Marvel Legends HULK 8<b>&#92;&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#92;&#34;</b> Series<b>&#34;</b> </code>   </p> */
		title: FormControl<string | null | undefined>,

		/** For an item that is priced by the unit, the total number of units that are on offer. For example, if the item is priced by the meter and 50 cm is on offer, the <b>totalUnits</b> would be 0.5 m. */
		totalUnits: FormControl<string | null | undefined>,

		/** The URL to the image that shows the information on the tyre label. */
		tyreLabelImageUrl: FormControl<string | null | undefined>,

		/** This is the price per unit for the item. Some European countries require listings for certain types of products to include the price per unit so buyers can accurately compare prices.   <br><br>For example: <br><br><code>"unitPricingMeasure": "100g",<br> "unitPrice": {<br>&nbsp;&nbsp;"value": "7.99",<br>&nbsp;&nbsp;"currency": "GBP"</code> */
		unitPrice: FormControl<string | null | undefined>,

		/** The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item.  This helps buyers compare prices. <br><br>For example, the following tells the buyer that the item is 7.99 per 100 grams. <br><br><code>"unitPricingMeasure": "100g",<br> "unitPrice": {<br>&nbsp;&nbsp;"value": "7.99",<br>&nbsp;&nbsp;"currency": "GBP"</code> */
		unitPricingMeasure: FormControl<string | null | undefined>,

		/** The unit of measurement used for the package weight, such as POUND, KILOGRAM, OUNCE, or GRAM. <br><br>Code so that your app gracefully handles any future changes to this list.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:WeightUnitOfMeasureEnum'>eBay API documentation</a> */
		weightUnitOfMeasure: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			acceptedPaymentMethods: new FormControl<string | null | undefined>(undefined),
			additionalImageUrls: new FormControl<string | null | undefined>(undefined),
			additionalShippingCostPerUnit: new FormControl<string | null | undefined>(undefined),
			ageGroup: new FormControl<string | null | undefined>(undefined),
			alerts: new FormControl<string | null | undefined>(undefined),
			availability: new FormControl<string | null | undefined>(undefined),
			availabilityThreshold: new FormControl<number | null | undefined>(undefined),
			availabilityThresholdType: new FormControl<string | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined),
			buyingOptions: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			categoryId: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			conditionId: new FormControl<string | null | undefined>(undefined),
			defaultImageUrl: new FormControl<string | null | undefined>(undefined),
			deliveryOptions: new FormControl<string | null | undefined>(undefined),
			discountAmount: new FormControl<string | null | undefined>(undefined),
			discountPercentage: new FormControl<string | null | undefined>(undefined),
			ecoParticipationFeeCurrency: new FormControl<string | null | undefined>(undefined),
			ecoParticipationFeeValue: new FormControl<string | null | undefined>(undefined),
			energyEfficiencyClass: new FormControl<string | null | undefined>(undefined),
			epid: new FormControl<string | null | undefined>(undefined),
			estimatedAvailableQuantity: new FormControl<number | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			hazmatAdditionalInformation: new FormControl<string | null | undefined>(undefined),
			hazmatPictogramDescriptions: new FormControl<string | null | undefined>(undefined),
			hazmatPictogramIds: new FormControl<string | null | undefined>(undefined),
			hazmatPictogramImageUrls: new FormControl<string | null | undefined>(undefined),
			hazmatSignalWord: new FormControl<string | null | undefined>(undefined),
			hazmatSignalWordId: new FormControl<string | null | undefined>(undefined),
			hazmatStatementDescriptions: new FormControl<string | null | undefined>(undefined),
			hazmatStatementIds: new FormControl<string | null | undefined>(undefined),
			imageAlteringProhibited: new FormControl<boolean | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			inferredBrand: new FormControl<string | null | undefined>(undefined),
			inferredEpid: new FormControl<string | null | undefined>(undefined),
			inferredGtin: new FormControl<string | null | undefined>(undefined),
			inferredLocalizedAspects: new FormControl<string | null | undefined>(undefined),
			inferredMpn: new FormControl<string | null | undefined>(undefined),
			itemAffiliateWebUrl: new FormControl<string | null | undefined>(undefined),
			itemCreationDate: new FormControl<string | null | undefined>(undefined),
			itemEndDate: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			itemLocationCountry: new FormControl<string | null | undefined>(undefined),
			itemWebUrl: new FormControl<string | null | undefined>(undefined),
			legacyItemId: new FormControl<string | null | undefined>(undefined),
			lengthUnitOfMeasure: new FormControl<string | null | undefined>(undefined),
			localizedAspects: new FormControl<string | null | undefined>(undefined),
			lotSize: new FormControl<number | null | undefined>(undefined),
			material: new FormControl<string | null | undefined>(undefined),
			mpn: new FormControl<string | null | undefined>(undefined),
			originalPriceCurrency: new FormControl<string | null | undefined>(undefined),
			originalPriceValue: new FormControl<string | null | undefined>(undefined),
			packageHeight: new FormControl<string | null | undefined>(undefined),
			packageLength: new FormControl<string | null | undefined>(undefined),
			packageWeight: new FormControl<string | null | undefined>(undefined),
			packageWidth: new FormControl<string | null | undefined>(undefined),
			pattern: new FormControl<string | null | undefined>(undefined),
			priceCurrency: new FormControl<string | null | undefined>(undefined),
			priceValue: new FormControl<string | null | undefined>(undefined),
			primaryItemGroupId: new FormControl<string | null | undefined>(undefined),
			primaryItemGroupType: new FormControl<string | null | undefined>(undefined),
			priorityListingPayload: new FormControl<string | null | undefined>(undefined),
			qualifiedPrograms: new FormControl<string | null | undefined>(undefined),
			quantityUsedForEstimate: new FormControl<number | null | undefined>(undefined),
			refundMethod: new FormControl<string | null | undefined>(undefined),
			repairScore: new FormControl<string | null | undefined>(undefined),
			returnMethod: new FormControl<string | null | undefined>(undefined),
			returnPeriodUnit: new FormControl<string | null | undefined>(undefined),
			returnPeriodValue: new FormControl<number | null | undefined>(undefined),
			returnShippingCostPayer: new FormControl<string | null | undefined>(undefined),
			returnsAccepted: new FormControl<boolean | null | undefined>(undefined),
			sellerAccountType: new FormControl<string | null | undefined>(undefined),
			sellerFeedbackPercentage: new FormControl<string | null | undefined>(undefined),
			sellerFeedbackScore: new FormControl<string | null | undefined>(undefined),
			sellerItemRevision: new FormControl<string | null | undefined>(undefined),
			sellerTrustLevel: new FormControl<string | null | undefined>(undefined),
			sellerUsername: new FormControl<string | null | undefined>(undefined),
			shipToExcludedRegions: new FormControl<string | null | undefined>(undefined),
			shipToIncludedRegions: new FormControl<string | null | undefined>(undefined),
			shippingCarrierCode: new FormControl<string | null | undefined>(undefined),
			shippingCost: new FormControl<string | null | undefined>(undefined),
			shippingCostType: new FormControl<string | null | undefined>(undefined),
			shippingServiceCode: new FormControl<string | null | undefined>(undefined),
			shippingType: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			takeBackPolicyDescription: new FormControl<string | null | undefined>(undefined),
			takeBackPolicyLabel: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			totalUnits: new FormControl<string | null | undefined>(undefined),
			tyreLabelImageUrl: new FormControl<string | null | undefined>(undefined),
			unitPrice: new FormControl<string | null | undefined>(undefined),
			unitPricingMeasure: new FormControl<string | null | undefined>(undefined),
			weightUnitOfMeasure: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the columns returned in the <b>Item Group</b> feed file. */
	export interface ItemGroup {

		/** A pipe separated (<code>|</code>) list of URLs for the additional images for the item group. These images are in addition to the primary image, which is returned in the <b>imageUrl</b> column. <b>Note: </b> This column can contain multiple values. */
		additionalImageUrls?: string | null;

		/** A boolean that indicates whether the images can be altered. If the value is <code>true</code>, you cannot modify the image. <p><span class="tablenote"><b>Note: </b> Due to image licensing agreements and other legal concerns, modification (including resizing) of some images is strictly prohibited. These images are for display as-is only. </span></p> */
		imageAlteringProhibited?: boolean | null;

		/** The URL to the primary image of the item. The other images of the item group are returned in the <b> additionalImageUrls</b> column. */
		imageUrl?: string | null;

		/** The unique identifier for the item group. This ID is returned in the <b> primaryItemGroupId</b> column of the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed">Item Feed</a> file. */
		itemGroupId?: string | null;

		/** The item group type. For example:<code> SELLER_DEFINED_VARIATIONS</code>, indicates that the item group was created by the seller. <br><br>Code so that your app gracefully handles any future changes to this list. */
		itemGroupType?: string | null;

		/** The seller created title of the item group. This text is an escaped string when special characters are present, using the following rules:</p>   <ul>     <li>Double quotes (&#34;) and backslashes (&#92;) in the Title are escaped with a backslash (&#92;) character</li>      <li>If there are any tabs (&#92;t), double quotes (&#34;), or backslashes (&#92;) in the Title, the entire Title will be wrapped in double quotes.</li>   </ul>   <p><b>For example</b></p>   <p>Before:</p>   <p><code>Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;</b>Tracking</code>   </p>   <p><code>Marvel Legends HULK 8<b>&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#34;</b> Series</code>   </p>   <p>After:</p>   <p><code>&#34;Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;&#92;</b> Tracking&#34;</code>   </p>   <p><code>&#34;Marvel Legends HULK 8<b>&#92;&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#92;&#34;</b> Series<b>&#34;</b> </code>   </p> */
		title?: string | null;

		/** A pipe separated (<code>|</code>) list of the aspect (variation) names for this item group. The aspect name is BASE64 encoded. <b>Note: </b> This column can contain multiple values.  <p>&nbsp;&nbsp;<b> Encoded Format:</b> <br>&nbsp;&nbsp;&nbsp;<code><em>aspectName</em>|<em>aspectName</em></code> </p>   <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>): <br>&nbsp;&nbsp;&nbsp;<code>Q29sb3I=<b style="font-family: 'Arial Black';">|</b>U2l6ZQ==</code> </p>      <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Color|Size </p> */
		variesByLocalizedAspects?: string | null;
	}

	/** The type that defines the columns returned in the <b>Item Group</b> feed file. */
	export interface ItemGroupFormProperties {

		/** A pipe separated (<code>|</code>) list of URLs for the additional images for the item group. These images are in addition to the primary image, which is returned in the <b>imageUrl</b> column. <b>Note: </b> This column can contain multiple values. */
		additionalImageUrls: FormControl<string | null | undefined>,

		/** A boolean that indicates whether the images can be altered. If the value is <code>true</code>, you cannot modify the image. <p><span class="tablenote"><b>Note: </b> Due to image licensing agreements and other legal concerns, modification (including resizing) of some images is strictly prohibited. These images are for display as-is only. </span></p> */
		imageAlteringProhibited: FormControl<boolean | null | undefined>,

		/** The URL to the primary image of the item. The other images of the item group are returned in the <b> additionalImageUrls</b> column. */
		imageUrl: FormControl<string | null | undefined>,

		/** The unique identifier for the item group. This ID is returned in the <b> primaryItemGroupId</b> column of the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed">Item Feed</a> file. */
		itemGroupId: FormControl<string | null | undefined>,

		/** The item group type. For example:<code> SELLER_DEFINED_VARIATIONS</code>, indicates that the item group was created by the seller. <br><br>Code so that your app gracefully handles any future changes to this list. */
		itemGroupType: FormControl<string | null | undefined>,

		/** The seller created title of the item group. This text is an escaped string when special characters are present, using the following rules:</p>   <ul>     <li>Double quotes (&#34;) and backslashes (&#92;) in the Title are escaped with a backslash (&#92;) character</li>      <li>If there are any tabs (&#92;t), double quotes (&#34;), or backslashes (&#92;) in the Title, the entire Title will be wrapped in double quotes.</li>   </ul>   <p><b>For example</b></p>   <p>Before:</p>   <p><code>Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;</b>Tracking</code>   </p>   <p><code>Marvel Legends HULK 8<b>&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#34;</b> Series</code>   </p>   <p>After:</p>   <p><code>&#34;Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;&#92;</b> Tracking&#34;</code>   </p>   <p><code>&#34;Marvel Legends HULK 8<b>&#92;&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#92;&#34;</b> Series<b>&#34;</b> </code>   </p> */
		title: FormControl<string | null | undefined>,

		/** A pipe separated (<code>|</code>) list of the aspect (variation) names for this item group. The aspect name is BASE64 encoded. <b>Note: </b> This column can contain multiple values.  <p>&nbsp;&nbsp;<b> Encoded Format:</b> <br>&nbsp;&nbsp;&nbsp;<code><em>aspectName</em>|<em>aspectName</em></code> </p>   <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>): <br>&nbsp;&nbsp;&nbsp;<code>Q29sb3I=<b style="font-family: 'Arial Black';">|</b>U2l6ZQ==</code> </p>      <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Color|Size </p> */
		variesByLocalizedAspects: FormControl<string | null | undefined>,
	}
	export function CreateItemGroupFormGroup() {
		return new FormGroup<ItemGroupFormProperties>({
			additionalImageUrls: new FormControl<string | null | undefined>(undefined),
			imageAlteringProhibited: new FormControl<boolean | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			itemGroupId: new FormControl<string | null | undefined>(undefined),
			itemGroupType: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			variesByLocalizedAspects: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the array for the items returned in the <b>Item Group</b> feed file. */
	export interface ItemGroupResponse {

		/** The container for the array of items groups returned by the <b> getItemGroupFeed</b> method. The data in the file is tab separated and the first row is the header, which labels the columns and indicates the order of the values for each item. The header labels match the fields that are described in the <a href="/api-docs/buy/feed/resources/item_group/methods/getItemGroupFeed#h3-response-fields">Response fields</a> section. */
		itemGroups?: Array<ItemGroup>;
	}

	/** The type that defines the array for the items returned in the <b>Item Group</b> feed file. */
	export interface ItemGroupResponseFormProperties {
	}
	export function CreateItemGroupResponseFormGroup() {
		return new FormGroup<ItemGroupResponseFormProperties>({
		});

	}

	export interface ItemPriority {

		/** Status change indicator of the listing.<br><br><b>Values:</b> <ul><li><code>ADDED_TO_CAMPAIGN</code></li><li><code>REMOVED_FROM_CAMPAIGN</code></li><li><code>TRACKING_PAYLOAD_REFRESHED</code></li></ul><span class="tablenote"><b>Note:</b> When a listing is removed from the campaign, <b>PriorityListingPayload</b> will be empty.</span><br><br>When multiple status changes are returned for a listing, the <b>changeMetadata</b> value will be a pipe-separated string (e.g., <code>ADDED_TO_CAMPAIGN|TRACKING_PAYLOAD_REFRESHED</code>).<br ><br >To use the returned value, you will need to separate the string by pipe (|). */
		changeMetadata?: string | null;

		/** The unique identifier of an item in eBay RESTful format. An example would be <code>v1|1********2|4********2</code>. */
		itemId?: string | null;

		/** EPN (eBay Partner Network) publishers append this value to their affiliate tracking URL when using an EPN tracking link to track changes that occur to Priority Listing items. <br><br><b>Example:</b><code>_trkparms=ispr%3D1&amdata=enc%3AAQAFAAAAkB1DmsmXf%2BqZ%2BCEMGdebW6oR75GCMdBmc4MCQ%2FCEPqgKHbT0jdWhPwfY5LdUs6HTaP0eBlwKE7Smy2eDslewF7l3xjwWxjqwzNAnsYgxn2PiGkTKbiQSQytFUiymdtANpk1qOnBOoMGMK%2BWsji7jYlvySSs9o9s24TxD6RqWZpNrltzOU7mfnv3H40SZ3YESzg%3D%3D</code><br/><br>See <a  href="https://developer.ebay.com/api-docs/buy/static/ref-epn-link.html">Creating an EPN Tracking Link</a> for information on EPN tracking links. */
		priorityListingPayload?: string | null;
	}
	export interface ItemPriorityFormProperties {

		/** Status change indicator of the listing.<br><br><b>Values:</b> <ul><li><code>ADDED_TO_CAMPAIGN</code></li><li><code>REMOVED_FROM_CAMPAIGN</code></li><li><code>TRACKING_PAYLOAD_REFRESHED</code></li></ul><span class="tablenote"><b>Note:</b> When a listing is removed from the campaign, <b>PriorityListingPayload</b> will be empty.</span><br><br>When multiple status changes are returned for a listing, the <b>changeMetadata</b> value will be a pipe-separated string (e.g., <code>ADDED_TO_CAMPAIGN|TRACKING_PAYLOAD_REFRESHED</code>).<br ><br >To use the returned value, you will need to separate the string by pipe (|). */
		changeMetadata: FormControl<string | null | undefined>,

		/** The unique identifier of an item in eBay RESTful format. An example would be <code>v1|1********2|4********2</code>. */
		itemId: FormControl<string | null | undefined>,

		/** EPN (eBay Partner Network) publishers append this value to their affiliate tracking URL when using an EPN tracking link to track changes that occur to Priority Listing items. <br><br><b>Example:</b><code>_trkparms=ispr%3D1&amdata=enc%3AAQAFAAAAkB1DmsmXf%2BqZ%2BCEMGdebW6oR75GCMdBmc4MCQ%2FCEPqgKHbT0jdWhPwfY5LdUs6HTaP0eBlwKE7Smy2eDslewF7l3xjwWxjqwzNAnsYgxn2PiGkTKbiQSQytFUiymdtANpk1qOnBOoMGMK%2BWsji7jYlvySSs9o9s24TxD6RqWZpNrltzOU7mfnv3H40SZ3YESzg%3D%3D</code><br/><br>See <a  href="https://developer.ebay.com/api-docs/buy/static/ref-epn-link.html">Creating an EPN Tracking Link</a> for information on EPN tracking links. */
		priorityListingPayload: FormControl<string | null | undefined>,
	}
	export function CreateItemPriorityFormGroup() {
		return new FormGroup<ItemPriorityFormProperties>({
			changeMetadata: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			priorityListingPayload: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemPriorityResponse {

		/** The container for the array of items returned by the <b>getItemPriorityFeed</b> method. The data in the file is tab separated and the first row is the header, which labels the columns and indicates the order of the values on each line. The header labels match the fields that are described in the <a href="/api-docs/buy/feed/resources/item/methods/getItemPriorityFeed#h3-response-fields">Response fields</a> section. */
		itemDelta?: Array<ItemPriority>;
	}
	export interface ItemPriorityResponseFormProperties {
	}
	export function CreateItemPriorityResponseFormGroup() {
		return new FormGroup<ItemPriorityResponseFormProperties>({
		});

	}


	/** The type that defines the array for the items returned in the <b>Item</b> feed file.  */
	export interface ItemResponse {

		/** The container for the array of items returned by the <b> getItemFeed</b> method. The data in the file is tab separated and the first row is the header, which labels the columns and indicates the order of the values on each line. The header labels match the fields that are described in the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed#h3-response-fields">Response fields</a> section. */
		items?: Array<Item>;
	}

	/** The type that defines the array for the items returned in the <b>Item</b> feed file.  */
	export interface ItemResponseFormProperties {
	}
	export function CreateItemResponseFormGroup() {
		return new FormGroup<ItemResponseFormProperties>({
		});

	}


	/** The type that defines the columns returned in the <b>Hourly Snapshot</b> feed file.  <p>  <b>Note: </b> When the value of the <b> availability</b> column is <code>UNAVAILABLE</code>, only the <b>itemId</b> and <b> availability</b> columns are populated.  </p>  */
	export interface ItemSnapshot {

		/** This field is returned empty. For a list of payment methods available for a marketplace, see eBay help pages or the actual View Item page. */
		acceptedPaymentMethods?: string | null;

		/** A pipe separated (<code>|</code>) list of URLs for the additional images of the item. These images are in addition to the primary image, which is returned in the <b>imageUrl</b> column. <b>Note: </b> This column can contain multiple values. */
		additionalImageUrls?: string | null;

		/** Any per item additional shipping costs for a multi-item purchase. For example, let's say the shipping cost for a power cord is $3. But for an additional cord, the shipping cost is only $1. So if you bought 3 cords, the <b> shippingCost</b> would be $3 and this value would be $2 ($1 for each additional item). */
		additionalShippingCostPerUnit?: string | null;

		/** The age group that the product is recommended for. <br><br><b>Valid values:</b> <code>newborn</code>, <code>infant</code>, <code>toddler</code>, <code>kids</code>, <code>adult</code>. */
		ageGroup?: string | null;

		/** A pipe-separated list of alerts available for the item.<br><br>For example, if the <code>DELAYED_DELIVERY</code> alert was returned for an item, it would indicate a delay in shipping by the seller. */
		alerts?: string | null;

		/** The currency used for the Authenticity Guarantee service fee. */
		authenticityGuaranteeFeeCurrency?: string | null;

		/** The price of the Authenticity Guarantee service for the item.<br><br><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The price returned in this field indicates the service fee for a single item quantity.</span> */
		authenticityGuaranteeFeeValue?: string | null;

		/** An indication of whether the Authenticity Guarantee service is optional or mandatory for the item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:OptionalityEnum'>eBay API documentation</a> */
		authenticityGuaranteeSelection?: string | null;

		/** The unique identifier for the Authenticity Guarantee service associated with the item. */
		authenticityGuaranteeServiceId?: string | null;

		/** An enumeration value representing the item's availability (possibility of being purchased). <br><br><b>Values: </b>    <ul>  <li>AVAILABLE</li>    <li>TEMPORARILY_UNAVAILABLE</li>     <li>UNAVAILABLE</li> </ul>  Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:AvailabilityEnum'>eBay API documentation</a> */
		availability?: string | null;

		/**
		 * This column has a value only when the seller sets their '<a href="#display-item-quantity">display item quantity</a>' preference to <b> Display "More than 10 available" in your listing (if applicable)</b>. The value of this column will be "10", which is the threshold value. <br><br>Code so that your app gracefully handles any future changes to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availabilityThreshold?: number | null;

		/** <a name="display-item-quantity"></a> This column has a value only when the seller sets their <b>Display Item Quantity</b> preference to <b> Display "More than 10 available" in your listing (if applicable)</b>. The value of this column will be <code> MORE_THAN</code>. This indicates that the seller has more than the 'Display Item Quantity', which is 10, in stock for this item.    <br><br> The following are the <b>Display Item Quantity</b> preferences the seller can set. <br><ul><li> <b> Display "More than 10 available" in your listing (if applicable)</b> <br>If the seller enables this preference, this column will have a value as long as there are more than 10 of this item in inventory. If the quantity is equal to 10 or drops below 10, this column will be null and the estimated quantity of the item is returned in the <b> estimatedAvailableQuantity</b> column. </li> <li> <b> Display the exact quantity in your items</b> <br>If the seller enables this preference, the <b> availabilityThresholdType</b> and <b> availabilityThreshold</b> columns will be null  and the estimated quantity of the item is returned in the <b> estimatedAvailableQuantity</b> column.<br><br><b>Note: </b> Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. </li></ul>   <br>Code so that your app gracefully handles any future changes to these preferences. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:AvailabilityThresholdEnum'>eBay API documentation</a> */
		availabilityThresholdType?: string | null;

		/** The name brand of the item, such as Nike, Apple, etc. */
		brand?: string | null;

		/** A comma separated list of the purchase options available for the item. Currently the only supported option is <code>FIXED_PRICE</code>. */
		buyingOptions?: string | null;

		/** The label of the category of the item. For example: <b> Toys & Hobbies|Action Figures|Comic Book Heroes </b>. */
		category?: string | null;

		/** The ID of the category of the item. For example: The ID for Toys & Hobbies|Action Figures|Comic Book Heroes is <code>158671</code>. */
		categoryId?: string | null;

		/** Status change indicator of the listing.<br><br><b>Values:</b> <ul><li><code>PRICE_CHANGE</code></li><li><code>QUANTITY_CHANGE</code></li><li><code>TITLE_CHANGE</code></li><li><code>DELETED</code></li><li><code>NEW</code></li><li><code>ENDED</code></li></ul> */
		changeMetadata?: string | null;

		/** The color of the item. */
		color?: string | null;

		/** The text describing the condition of the item, such as New or Used. For a list of condition names, see <a href="https://developer.ebay.com/devzone/finding/callref/enums/conditionIdList.html " target="_blank">Item Condition IDs and Names</a>. */
		condition?: string | null;

		/** The identifier of the condition of the item. For example, 1000 is the identifier for NEW. For a list of condition names and IDs, see <a href="https://developer.ebay.com/devzone/finding/callref/enums/conditionIdList.html " target="_blank">Item Condition IDs and Names</a>.<br><br>Code so that your app gracefully handles any future changes to this list. */
		conditionId?: string | null;

		/** The currency used to specify the coupon discount value. */
		couponDiscountCurrency?: string | null;

		/** The type of discount that the coupon applies.<br><br><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> If all coupon fields return null values, it indicates that the item never had a coupon, or that the coupon has been removed. Please ensure that you update your inventory accordingly.</span> */
		couponDiscountType?: string | null;

		/** The discount amount after the coupon is applied. */
		couponDiscountValue?: string | null;

		/** The expiration date for the coupon. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		couponExpirationDate?: string | null;

		/** A description of the coupon. */
		couponMessage?: string | null;

		/** The redemption code for the coupon. */
		couponRedemptionCode?: string | null;

		/** The URL to the coupon terms of use. */
		couponTermsWebUrl?: string | null;

		/** URL to the gallery or default image of the item. The other images of the item are returned in the <b>additionalImageUrls</b> field.<br><br><b>For example</b><br><br><code>https://i.ebayimg.com/00/s/M********w/z/W********p/$_1.JPG?set_id=8********F</code> */
		defaultImageUrl?: string | null;

		/** A comma-separated list of available delivery options. This column lets you filter out items than cannot be shipped to the buyer. <br><br><b>Valid Values</b>: SHIP_TO_HOME, SELLER_ARRANGED_LOCAL_PICKUP, IN_STORE_PICKUP, and PICKUP_DROP_OFF. <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:DeliveryOptionsEnum'>eBay API documentation</a> */
		deliveryOptions?: string | null;

		/** The seller created description of the item.<br><br><b>For example:</b><br><br><code>Brand-new, unused, and unworn. Not in original packaging.</code> */
		description?: string | null;

		/** The calculated amount of the discount (<b>originalPriceValue</b> - <b>priceValue</b>). For example,  if <b>originalPriceValue</b> is 70 and <b>priceValue</b> is 56, this value would be 14. <br><br><b>Note:</b> The currency shown in <b>originalPriceCurrency</b> is used for both <b>discountAmount</b> and <b>originalPriceCurrency</b>. */
		discountAmount?: string | null;

		/** The calculated discount percentage. For example, if <b> originalPriceValue</b> is 70 and <b> discountAmount</b> is 14, this value will be 20. */
		discountPercentage?: string | null;

		/** The currency in which the Eco Participation Fee for the item is paid. */
		ecoParticipationFeeCurrency?: string | null;

		/** The amount of the Eco Participation Fee, a fee paid toward the eventual disposal of the purchased item. */
		ecoParticipationFeeValue?: string | null;

		/** Indicates the <a href="https://en.wikipedia.org/wiki/European_Union_energy_label">European energy efficiency</a> rating (EEK) of the item. This field is returned only if the seller specified the energy efficiency rating. <br><br>The rating is a set of energy efficiency classes from A to G, where 'A' is the most energy efficient and 'G' is the least efficient. This rating helps buyers choose between various models. <br><br>To retrieve the manufacturer's specifications for this item, when they are available, use the <a href="/api-docs/buy/browse/resources/item/methods/getItem">getItem</a> method in the Browse API. The information is returned in the <b> productFicheWebUrl</b> field. */
		energyEfficiencyClass?: string | null;

		/** The eBay product identifier of a product from the eBay product catalog. You can use this value in the Browse API <a href="/api-docs/buy/browse/resources/item_summary/methods/search">search</a> method to retrieve items for this product and in the <a href="/api-docs/buy/marketing/resources/methods">Marketing API</a> methods to retrieve 'also viewed' and 'also bought' products to encourage up-selling and cross-selling. */
		epid?: string | null;

		/**
		 * The estimated number of this item that are available for purchase. Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. So instead of returning quantity, the estimated availability of the item is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		estimatedAvailableQuantity?: number | null;

		/** In cases where items could vary by gender, this specifies for which gender the product is intended. Possible values include male, female, and unisex. */
		gender?: string | null;

		/** The unique Global Trade Item Number of the item as defined by <a href="https://www.gtin.info " target="_blank">https://www.gtin.info</a>. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value. */
		gtin?: string | null;

		/** Base64 encoded additional information about the hazardous material. */
		hazmatAdditionalInformation?: string | null;

		/** The base64 encoded descriptions of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>encoded(exploding bomb)|encoded(flame)</code> */
		hazmatPictogramDescriptions?: string | null;

		/** The IDs of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>SGH01|SGH02</code> */
		hazmatPictogramIds?: string | null;

		/** The image URLs of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>https:&#47;&#47;img1|https:&#47;&#47;img2</code> */
		hazmatPictogramImageUrls?: string | null;

		/** The localized signal word for the hazardous material, such as 'Danger'. */
		hazmatSignalWord?: string | null;

		/** The ID of the signal word for the hazardous material. */
		hazmatSignalWordId?: string | null;

		/** The base64 encoded descriptions of hazardous material statements, separated by the pipe symbol. For example: <br /><br /><code>encoded(Unstable explosives)|encoded(Flammable gas)</code> */
		hazmatStatementDescriptions?: string | null;

		/** The IDs of hazardous material statements, separated by the pipe symbol. For example: <br /><br /><code>H200|H221</code> */
		hazmatStatementIds?: string | null;

		/** A boolean that indicates whether the images can be altered. If the value is <code>true</code>, you cannot modify the image. <p><span class="tablenote"><b>Note: </b> Due to image licensing agreements and other legal concerns, modification (including resizing) of some images is strictly prohibited. These images are for display as-is only. </span></p> */
		imageAlteringProhibited?: boolean | null;

		/** The URL to the primary image of the item.  This is the URL of the largest image available based on what the seller submitted. */
		imageUrl?: string | null;

		/** The ePID (eBay Product ID of a product in the eBay product catalog) for the item, which has been programmatically determined by eBay using the item's title, aspects, and other data. <br><br>If the seller actually provided an ePID at listing time for the item, the ePID value is returned in the <b>epid</b> column instead. */
		inferredEpid?: string | null;

		/** The URL of the View Item page of the item, with the affiliate tracking ID appended to it.<br><br><b>For example</b><br><br><code>https://www.ebay.de/itm/2********0?mkevt=1&mkcid=1&mkrid=707-53477-19255-0&campid=CAMPAIGNID&toolid=2***6&customid=CUSTOMID</code> */
		itemAffiliateWebUrl?: string | null;

		/** A timestamp indicating when the item was created. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		itemCreationDate?: string | null;

		/** A timestamp indicating when the item's sale period will end based on its start date and duration. For Good 'Til Cancelled items, no value is returned in this column. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		itemEndDate?: string | null;

		/** The unique identifier of an item in eBay RESTful format. An example would be <code>v1|1**********2|4**********2</code>. */
		itemId?: string | null;

		/** The country where the item is physically located. */
		itemLocationCountry?: string | null;

		/** This timestamp denotes the date and time the changes for that item were picked up and added to the snapshot feed file. <br><br>For example, let's say you have a snapshot feed file and also ran the <b> getItem</b> method. When you compare the same item information from the two sources, you see that the price in the <b> getItem</b> method response is different from the price in the snapshot feed file. By knowing the date and time you submitted the <b> getItem</b> method, you can use the <b> itemSnapshotDate</b> data to determine which price is the most current for this item. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		itemSnapshotDate?: string | null;

		/** The URL of the View Item page of the item. <br/><br><b>For example:</b><br><br><b>Single SKU:</b><br><code>https://www.ebay.de/itm/2********0</code><br><br><b>MSKU:</b><br><code>https://www.ebay.com/itm/2********9?var=5********2</code> */
		itemWebUrl?: string | null;

		/** The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page. */
		legacyItemId?: string | null;

		/** A semicolon separated list of the name/value pairs for the aspects of the item, which are BASE64 encoded. The aspect label is separated by a pipe (|), the aspect name and value are separated by a colon (:) and the name/value pairs are separated by a semicolon (;). <p><b> Example without Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b> <br>&nbsp;&nbsp;&nbsp;<code><em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em></code> </p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):    <br>&nbsp;&nbsp;&nbsp;<code>U2l6ZQ==<b style="font-family: 'Arial Black';">:</b>WEw=<b style="font-family: 'Arial Black';">;</b>Q29sb3I=<b style="font-family: 'Arial Black';">:</b>UmVk<b style="font-family: 'Arial Black';">;</b>U2xlZXZlcw==<b style="font-family: 'Arial Black';">:</b>TG9uZw==</code> </p>    <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Size:XL;Color:Red;Sleeves:Long </p>        <p><br><b> Example with Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b>   <br>&nbsp;&nbsp;&nbsp;<code><em>encodedLabel</em>|<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedLabel</em>|</code></p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):  <br>&nbsp;&nbsp;&nbsp;<code>UHJvZHVjdCBJZGVudGlmaWVycw==<b style="font-family: 'Arial Black';">|</b>R1RJTg==<b style="font-family: 'Arial Black';">:</b>MDE5MDE5ODA2NjYzMw==<b style="font-family: 'Arial Black';">;</b>QlJBTkQ=<b style="font-family: 'Arial Black';">:</b>QXBwbGU=<b style="font-family: 'Arial Black';">;</b>UHJvZHVjdCBLZXkgRmVhdHVyZXM=<b style="font-family: 'Arial Black';">|</b>TW9kZWw=<b style="font-family: 'Arial Black';">:</b>aVBob25lIDc=</code> </p>        <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Product Identifiers|GTIN:0190198066633;BRAND:Apple;Product Key Features|Model:iPhone 7</p>        <p><span class="tablenote"><b>Note: </b> The separators (<code> |  :  ; </code>) are <i> not</i> encoded. You must decode each label, name, and value separately. You cannot decode the entire string.</b></p> <p>For more information, see <a href="/api-docs/buy/static/api-feed.html#encoded-aspects">Encoded Aspects</a> in the Buying Integration Guide.</p> */
		localizedAspects?: string | null;

		/**
		 * The number of items in a lot. In other words, a lot size is the number of items that are being sold together.  <br><br>A lot is a set of two or more items included in a single listing that must be purchased together in a single order line item. All the items in the lot are the same but there can be multiple items in a single lot,  such as the package of batteries shown in the example below.   <br><br><table border="1"> <tr> <tr>  <th>Item</th>  <th>Lot Definition</th> <th>Lot Size</th></tr>  <tr>  <td>A package of 24 AA batteries</td>  <td>A box of 10 packages</td>  <td>10  </td> </tr>  <tr>  <td>A P235/75-15 Goodyear tire </td>  <td>4 tires  </td>  <td>4  </td> </tr> <tr> <td>Fashion Jewelry Rings  </td> <td>Package of 100 assorted rings  </td> <td>100 </td> </tr></table>  <br><br><span class="tablenote"><b>Note: </b>  Lots are not supported in all categories.  </span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lotSize?: number | null;

		/** The material that the item is made of. */
		material?: string | null;

		/** The manufacturer part number, which is a number that is used in combination with <b> brand</b> to identify a product. */
		mpn?: string | null;

		/** The currency of the <b> originalPriceValue</b> of the item and the <b> discountAmount</b>.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		originalPriceCurrency?: string | null;

		/** The original selling price of the item. This lets you surface a strikethrough price for the item. */
		originalPriceValue?: string | null;

		/** (Primary Item Aspect) Text describing the pattern used on the item. For example, paisley.<br><br><b>Note:</b> All the item aspects, including this aspect, are returned in the localizedAspects container. */
		pattern?: string | null;

		/** The currency used for the price of the item. Generally, this is the currency used by the country of the eBay site offering the item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		priceCurrency?: string | null;

		/** The price of the item, which can be a discounted price. <br><br><span class="tablenote"><b> Note: </b>The price includes the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the <a href="/api-docs/static/rest-request-components.html#HTTP"><code>X-EBAY-C-MARKETPLACE-ID</code></a> request header specifying the supported marketplace (such as <code>EBAY_GB</code>) to see the VAT-inclusive pricing. For more information on VAT, refer to <a href="https://www.ebay.co.uk/help/listings/default/vat-obligations-eu?id=4650&st=12&pos=1&query=Your%20VAT%20obligations%20in%20the%20EU&intent=VAT">VAT Obligations in the EU</a>.</span> */
		priceValue?: string | null;

		/** The unique identifier for the item group that contains this item. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. */
		primaryItemGroupId?: string | null;

		/** The item group type. Supported value: <code>SELLER_DEFINED_VARIATIONS</code>, indicates that the item group was created by the seller. <br><br>Code so that your app gracefully handles any future changes to this list. */
		primaryItemGroupType?: string | null;

		/** A pipe separated list of the qualified programs available for the item, such as EBAY_PLUS and AUTHENTICITY_GUARANTEE.  <br><br>eBay Plus is a premium account option for buyers, which provides benefits such as fast free domestic shipping and free returns on selected items. Top-Rated eBay sellers must opt in to eBay Plus to be able to offer the program on qualifying listings. Sellers must commit to next-day delivery of those items.  <span class="tablenote"><b>Note: </b> eBay Plus is available only to buyers in Germany, Austria, and Australia marketplaces. </span><br><br>The eBay Authenticity Guarantee program enables third-party authenticators to perform authentication verification inspections on items such as watches and sneakers. */
		qualifiedPrograms?: string | null;

		/**
		 * The number of items used when calculating the shipping estimation information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantityUsedForEstimate?: number | null;

		/** An enumeration value representing how a buyer is refunded when an item is returned. <br><br>Code so that your app gracefully handles any future changes to this list.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:RefundMethodEnum'>eBay API documentation</a> */
		refundMethod?: string | null;

		/** A score that describes how easy it is to repair the product. Score values range from 0.1 (hardest to repair) to 10.0 (easiest), always including a single decimal place.<br><br><span class="tablenote"><b>Note:</b> Support for this field is currently limited to the France marketplace.</span> */
		repairScore?: string | null;

		/** An enumeration value that indicates the alternative methods for a full refund when an item is returned. This column will have data if the seller offers the buyer an item replacement or exchange instead of a monetary refund. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod?: string | null;

		/** An enumeration value that indicates the period of time being used to measure the duration, such as business days, months, or years. <br><br><b>TimeDurationUnitEnum</b> is a common type shared by multiple eBay APIs and fields to express the time unit, but for return period duration, this value will always be <code>DAY</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:TimeDurationUnitEnum'>eBay API documentation</a> */
		returnPeriodUnit?: string | null;

		/**
		 * The amount of days that the buyer has to return the item after the purchase date. For example, if this value is <code>30</code>, the return period is 30 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		returnPeriodValue?: number | null;

		/** An enumeration value that indicates the party responsible for the return shipping costs when an item is returned. <br><br><b>Valid Values: </b> <code>BUYER</code> or <code>SELLER</code> <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer?: string | null;

		/** Indicates whether the seller accepts returns for the item. */
		returnsAccepted?: boolean | null;

		/** A string value that specifies whether the seller is a business or an individual. This is determined when the seller registers with eBay. If the seller registers for a business account, the value returned in this field will be <code>BUSINESS</code>. If the seller registers for a private account, the value returned in this field will be <code>INDIVIDUAL</code>.<br><br><span class="tablenote"><b>Note:</b> This designation is required by the tax laws in some countries.</span><br><br>This field is returned only on the following sites: EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, and EBAY_PL.<br><br>Code so that your app gracefully handles any future changes to this list.<br><br><b>Valid Values:</b> <code>BUSINESS</code> or <code>INDIVIDUAL</code> */
		sellerAccountType?: string | null;

		/** The percentage of the seller's total positive feedback. */
		sellerFeedbackPercentage?: string | null;

		/** The feedback score of the seller. This value is based on the ratings from eBay members that bought items from this seller. */
		sellerFeedbackScore?: string | null;

		/** An identifier generated/incremented when a seller revises the item. There are two types of item revisions: <ul><li>Seller changes, such as changing the title</li>  <li>eBay system changes, such as changing the quantity when an item is purchased</li></ul> This ID is changed <i> only</i> when the seller makes a change to the item. */
		sellerItemRevision?: string | null;

		/** An enumeration value representing the eBay status of the seller. <br><br><b>Valid Values:</b> <code>TOP_RATED</code>, <code>ABOVE_STANDARD</code>, or an empty value. <br><br>An empty value indicates a return of anything other than <code>TOP_RATED</code> or <code>ABOVE_STANDARD</code>.<br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:SellerTrustLevelEnum'>eBay API documentation</a> */
		sellerTrustLevel?: string | null;

		/** The seller's eBay user name. */
		sellerUsername?: string | null;

		/** A pipe (<code>|</code>) separated alphabetical list of the geographic countries and regions where the item cannot be shipped. These countries and regions refine (restrict) the <b> shipToIncludedRegions</b> list.  <br><br>The COUNTRY: list is separated from the REGION: list with a semicolon (<code>;</code>).       <br><br><b> Format Example: </b> <br> <code>COUNTRY:US|BM|GL|MX|PM;REGION:AFRICA|ASIA|CENTRAL_AMERICA_AND_CARIBBEAN|EUROPE|MIDDLE_EAST|OCEANIA|SOUTH_AMERICA|SOUTHEAST_ASIA;</code>  <br><br><b> Country Values: </b> The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> standard code of the country.       <br><br><b> Region Values: </b> AFRICA, AMERICAS, ANTARCTIC, ARCTIC, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EURO_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, REST_OF_ASIA, SOUTHEAST_ASIA, SOUTH_AMERICA, WORLDWIDE <br><br>Code so that your app gracefully handles any future changes to this list. */
		shipToExcludedRegions?: string | null;

		/** A pipe (<code>|</code>) separated alphabetical list of the geographic countries and regions where the seller will ship the item. <br><br>If a region is specified, you will need to subtract any countries and regions returned in the <b> shipToExcludedRegions</b> column to fully understand where the seller will ship. <br><br>The COUNTRY: list is separated from the REGION: list with a semicolon (<code>;</code>).       <br><br><b> Format Example: </b> <br> <code>COUNTRY:US|BM|GL|MX|PM;REGION:AFRICA|ASIA|CENTRAL_AMERICA_AND_CARIBBEAN|EUROPE|MIDDLE_EAST|OCEANIA|SOUTH_AMERICA|SOUTHEAST_ASIA;</code>  <br><br><b> Country Values: </b> The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> standard code of the country.       <br><br><b> Region Values: </b> AFRICA, AMERICAS, ANTARCTIC, ARCTIC, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EURO_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, REST_OF_ASIA, SOUTHEAST_ASIA, SOUTH_AMERICA, WORLDWIDE <br><br>Code so that your app gracefully handles any future changes to this list. */
		shipToIncludedRegions?: string | null;

		/** The name of the shipping provider, such as FedEx, or USPS. */
		shippingCarrierCode?: string | null;

		/** The final shipping cost for all the items after all discounts are applied.<br><br><span class="tablenote"><b> Note: </b>The price includes the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the <a href="/api-docs/static/rest-request-components.html#HTTP"><code>X-EBAY-C-MARKETPLACE-ID</code></a> request header specifying the supported marketplace (such as <code>EBAY_GB</code>) to see the VAT-inclusive pricing. For more information on VAT, refer to <a href="https://www.ebay.co.uk/help/listings/default/vat-obligations-eu?id=4650&st=12&pos=1&query=Your%20VAT%20obligations%20in%20the%20EU&intent=VAT">VAT Obligations in the EU</a>.</span> */
		shippingCost?: string | null;

		/** Indicates the class of the shipping cost. <br><br><b> Valid Values: </b> FIXED or CALCULATED <br><br>Code so that your app gracefully handles any future changes to this list. */
		shippingCostType?: string | null;

		/** The type of shipping service. For example, USPS First Class. */
		shippingServiceCode?: string | null;

		/** The type of a shipping option, such as EXPEDITED, ONE_DAY, STANDARD, ECONOMY, PICKUP, etc. */
		shippingType?: string | null;

		/** The size of the item. */
		size?: string | null;

		/** The seller-defined description of the TAKE_BACK custom policy for the item. */
		takeBackPolicyDescription?: string | null;

		/** The seller-defined label of the TAKE_BACK custom policy for the item. A TAKE_BACK policy describes the seller's regulatory responsibility to take back a purchased item for disposal when the buyer purchases a new one. */
		takeBackPolicyLabel?: string | null;

		/** The seller created title of the item. This text is an escaped string when special characters are present, using the following rules:</p>   <ul>       <li>Double quotes (&#34;) and backslashes (&#92;) in the Title are escaped with a backslash (&#92;) character</li>      <li>If there are any tabs (&#92;t), double quotes (&#34;), or backslashes (&#92;) in the Title, the entire Title will be wrapped in double quotes.</li>   </ul>   <p><b>For example</b></p>   <p>Before:</p>   <p><code>Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;</b>Tracking</code>   </p>   <p><code>Marvel Legends HULK 8<b>&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#34;</b> Series</code>   </p>   <p>After:</p>   <p><code>&#34;Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;&#92;</b> Tracking&#34;</code>   </p>   <p><code>&#34;Marvel Legends HULK 8<b>&#92;&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#92;&#34;</b> Series<b>&#34;</b> </code>   </p> */
		title?: string | null;

		/** For an item that is priced by the unit, the total number of units that are on offer. For example, if the item is priced by the meter and 50 cm is on offer, the <b>totalUnits</b> would be 0.5 m. */
		totalUnits?: string | null;

		/** The URL to the image that shows the information on the tyre label. */
		tyreLabelImageUrl?: string | null;

		/** This is the price per unit for the item. Some European countries require listings for certain types of products to include the price per unit so buyers can accurately compare prices.   <br><br>For example: <br><br><code>"unitPricingMeasure": "100g",<br> "unitPrice": {<br>&nbsp;&nbsp;"value": "7.99",<br>&nbsp;&nbsp;"currency": "GBP"</code> */
		unitPrice?: string | null;

		/** The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item.  This helps buyers compare prices. <br><br>For example, the following tells the buyer that the item is 7.99 per 100 grams. <br><br><code>"unitPricingMeasure": "100g",<br> "unitPrice": {<br>&nbsp;&nbsp;"value": "7.99",<br>&nbsp;&nbsp;"currency": "GBP"</code> */
		unitPricingMeasure?: string | null;
	}

	/** The type that defines the columns returned in the <b>Hourly Snapshot</b> feed file.  <p>  <b>Note: </b> When the value of the <b> availability</b> column is <code>UNAVAILABLE</code>, only the <b>itemId</b> and <b> availability</b> columns are populated.  </p>  */
	export interface ItemSnapshotFormProperties {

		/** This field is returned empty. For a list of payment methods available for a marketplace, see eBay help pages or the actual View Item page. */
		acceptedPaymentMethods: FormControl<string | null | undefined>,

		/** A pipe separated (<code>|</code>) list of URLs for the additional images of the item. These images are in addition to the primary image, which is returned in the <b>imageUrl</b> column. <b>Note: </b> This column can contain multiple values. */
		additionalImageUrls: FormControl<string | null | undefined>,

		/** Any per item additional shipping costs for a multi-item purchase. For example, let's say the shipping cost for a power cord is $3. But for an additional cord, the shipping cost is only $1. So if you bought 3 cords, the <b> shippingCost</b> would be $3 and this value would be $2 ($1 for each additional item). */
		additionalShippingCostPerUnit: FormControl<string | null | undefined>,

		/** The age group that the product is recommended for. <br><br><b>Valid values:</b> <code>newborn</code>, <code>infant</code>, <code>toddler</code>, <code>kids</code>, <code>adult</code>. */
		ageGroup: FormControl<string | null | undefined>,

		/** A pipe-separated list of alerts available for the item.<br><br>For example, if the <code>DELAYED_DELIVERY</code> alert was returned for an item, it would indicate a delay in shipping by the seller. */
		alerts: FormControl<string | null | undefined>,

		/** The currency used for the Authenticity Guarantee service fee. */
		authenticityGuaranteeFeeCurrency: FormControl<string | null | undefined>,

		/** The price of the Authenticity Guarantee service for the item.<br><br><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> The price returned in this field indicates the service fee for a single item quantity.</span> */
		authenticityGuaranteeFeeValue: FormControl<string | null | undefined>,

		/** An indication of whether the Authenticity Guarantee service is optional or mandatory for the item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:OptionalityEnum'>eBay API documentation</a> */
		authenticityGuaranteeSelection: FormControl<string | null | undefined>,

		/** The unique identifier for the Authenticity Guarantee service associated with the item. */
		authenticityGuaranteeServiceId: FormControl<string | null | undefined>,

		/** An enumeration value representing the item's availability (possibility of being purchased). <br><br><b>Values: </b>    <ul>  <li>AVAILABLE</li>    <li>TEMPORARILY_UNAVAILABLE</li>     <li>UNAVAILABLE</li> </ul>  Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:AvailabilityEnum'>eBay API documentation</a> */
		availability: FormControl<string | null | undefined>,

		/**
		 * This column has a value only when the seller sets their '<a href="#display-item-quantity">display item quantity</a>' preference to <b> Display "More than 10 available" in your listing (if applicable)</b>. The value of this column will be "10", which is the threshold value. <br><br>Code so that your app gracefully handles any future changes to this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availabilityThreshold: FormControl<number | null | undefined>,

		/** <a name="display-item-quantity"></a> This column has a value only when the seller sets their <b>Display Item Quantity</b> preference to <b> Display "More than 10 available" in your listing (if applicable)</b>. The value of this column will be <code> MORE_THAN</code>. This indicates that the seller has more than the 'Display Item Quantity', which is 10, in stock for this item.    <br><br> The following are the <b>Display Item Quantity</b> preferences the seller can set. <br><ul><li> <b> Display "More than 10 available" in your listing (if applicable)</b> <br>If the seller enables this preference, this column will have a value as long as there are more than 10 of this item in inventory. If the quantity is equal to 10 or drops below 10, this column will be null and the estimated quantity of the item is returned in the <b> estimatedAvailableQuantity</b> column. </li> <li> <b> Display the exact quantity in your items</b> <br>If the seller enables this preference, the <b> availabilityThresholdType</b> and <b> availabilityThreshold</b> columns will be null  and the estimated quantity of the item is returned in the <b> estimatedAvailableQuantity</b> column.<br><br><b>Note: </b> Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. </li></ul>   <br>Code so that your app gracefully handles any future changes to these preferences. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:AvailabilityThresholdEnum'>eBay API documentation</a> */
		availabilityThresholdType: FormControl<string | null | undefined>,

		/** The name brand of the item, such as Nike, Apple, etc. */
		brand: FormControl<string | null | undefined>,

		/** A comma separated list of the purchase options available for the item. Currently the only supported option is <code>FIXED_PRICE</code>. */
		buyingOptions: FormControl<string | null | undefined>,

		/** The label of the category of the item. For example: <b> Toys & Hobbies|Action Figures|Comic Book Heroes </b>. */
		category: FormControl<string | null | undefined>,

		/** The ID of the category of the item. For example: The ID for Toys & Hobbies|Action Figures|Comic Book Heroes is <code>158671</code>. */
		categoryId: FormControl<string | null | undefined>,

		/** Status change indicator of the listing.<br><br><b>Values:</b> <ul><li><code>PRICE_CHANGE</code></li><li><code>QUANTITY_CHANGE</code></li><li><code>TITLE_CHANGE</code></li><li><code>DELETED</code></li><li><code>NEW</code></li><li><code>ENDED</code></li></ul> */
		changeMetadata: FormControl<string | null | undefined>,

		/** The color of the item. */
		color: FormControl<string | null | undefined>,

		/** The text describing the condition of the item, such as New or Used. For a list of condition names, see <a href="https://developer.ebay.com/devzone/finding/callref/enums/conditionIdList.html " target="_blank">Item Condition IDs and Names</a>. */
		condition: FormControl<string | null | undefined>,

		/** The identifier of the condition of the item. For example, 1000 is the identifier for NEW. For a list of condition names and IDs, see <a href="https://developer.ebay.com/devzone/finding/callref/enums/conditionIdList.html " target="_blank">Item Condition IDs and Names</a>.<br><br>Code so that your app gracefully handles any future changes to this list. */
		conditionId: FormControl<string | null | undefined>,

		/** The currency used to specify the coupon discount value. */
		couponDiscountCurrency: FormControl<string | null | undefined>,

		/** The type of discount that the coupon applies.<br><br><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> If all coupon fields return null values, it indicates that the item never had a coupon, or that the coupon has been removed. Please ensure that you update your inventory accordingly.</span> */
		couponDiscountType: FormControl<string | null | undefined>,

		/** The discount amount after the coupon is applied. */
		couponDiscountValue: FormControl<string | null | undefined>,

		/** The expiration date for the coupon. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		couponExpirationDate: FormControl<string | null | undefined>,

		/** A description of the coupon. */
		couponMessage: FormControl<string | null | undefined>,

		/** The redemption code for the coupon. */
		couponRedemptionCode: FormControl<string | null | undefined>,

		/** The URL to the coupon terms of use. */
		couponTermsWebUrl: FormControl<string | null | undefined>,

		/** URL to the gallery or default image of the item. The other images of the item are returned in the <b>additionalImageUrls</b> field.<br><br><b>For example</b><br><br><code>https://i.ebayimg.com/00/s/M********w/z/W********p/$_1.JPG?set_id=8********F</code> */
		defaultImageUrl: FormControl<string | null | undefined>,

		/** A comma-separated list of available delivery options. This column lets you filter out items than cannot be shipped to the buyer. <br><br><b>Valid Values</b>: SHIP_TO_HOME, SELLER_ARRANGED_LOCAL_PICKUP, IN_STORE_PICKUP, and PICKUP_DROP_OFF. <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:DeliveryOptionsEnum'>eBay API documentation</a> */
		deliveryOptions: FormControl<string | null | undefined>,

		/** The seller created description of the item.<br><br><b>For example:</b><br><br><code>Brand-new, unused, and unworn. Not in original packaging.</code> */
		description: FormControl<string | null | undefined>,

		/** The calculated amount of the discount (<b>originalPriceValue</b> - <b>priceValue</b>). For example,  if <b>originalPriceValue</b> is 70 and <b>priceValue</b> is 56, this value would be 14. <br><br><b>Note:</b> The currency shown in <b>originalPriceCurrency</b> is used for both <b>discountAmount</b> and <b>originalPriceCurrency</b>. */
		discountAmount: FormControl<string | null | undefined>,

		/** The calculated discount percentage. For example, if <b> originalPriceValue</b> is 70 and <b> discountAmount</b> is 14, this value will be 20. */
		discountPercentage: FormControl<string | null | undefined>,

		/** The currency in which the Eco Participation Fee for the item is paid. */
		ecoParticipationFeeCurrency: FormControl<string | null | undefined>,

		/** The amount of the Eco Participation Fee, a fee paid toward the eventual disposal of the purchased item. */
		ecoParticipationFeeValue: FormControl<string | null | undefined>,

		/** Indicates the <a href="https://en.wikipedia.org/wiki/European_Union_energy_label">European energy efficiency</a> rating (EEK) of the item. This field is returned only if the seller specified the energy efficiency rating. <br><br>The rating is a set of energy efficiency classes from A to G, where 'A' is the most energy efficient and 'G' is the least efficient. This rating helps buyers choose between various models. <br><br>To retrieve the manufacturer's specifications for this item, when they are available, use the <a href="/api-docs/buy/browse/resources/item/methods/getItem">getItem</a> method in the Browse API. The information is returned in the <b> productFicheWebUrl</b> field. */
		energyEfficiencyClass: FormControl<string | null | undefined>,

		/** The eBay product identifier of a product from the eBay product catalog. You can use this value in the Browse API <a href="/api-docs/buy/browse/resources/item_summary/methods/search">search</a> method to retrieve items for this product and in the <a href="/api-docs/buy/marketing/resources/methods">Marketing API</a> methods to retrieve 'also viewed' and 'also bought' products to encourage up-selling and cross-selling. */
		epid: FormControl<string | null | undefined>,

		/**
		 * The estimated number of this item that are available for purchase. Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. So instead of returning quantity, the estimated availability of the item is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		estimatedAvailableQuantity: FormControl<number | null | undefined>,

		/** In cases where items could vary by gender, this specifies for which gender the product is intended. Possible values include male, female, and unisex. */
		gender: FormControl<string | null | undefined>,

		/** The unique Global Trade Item Number of the item as defined by <a href="https://www.gtin.info " target="_blank">https://www.gtin.info</a>. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value. */
		gtin: FormControl<string | null | undefined>,

		/** Base64 encoded additional information about the hazardous material. */
		hazmatAdditionalInformation: FormControl<string | null | undefined>,

		/** The base64 encoded descriptions of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>encoded(exploding bomb)|encoded(flame)</code> */
		hazmatPictogramDescriptions: FormControl<string | null | undefined>,

		/** The IDs of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>SGH01|SGH02</code> */
		hazmatPictogramIds: FormControl<string | null | undefined>,

		/** The image URLs of hazardous material pictograms, separated by the pipe symbol. For example: <br /><br /><code>https:&#47;&#47;img1|https:&#47;&#47;img2</code> */
		hazmatPictogramImageUrls: FormControl<string | null | undefined>,

		/** The localized signal word for the hazardous material, such as 'Danger'. */
		hazmatSignalWord: FormControl<string | null | undefined>,

		/** The ID of the signal word for the hazardous material. */
		hazmatSignalWordId: FormControl<string | null | undefined>,

		/** The base64 encoded descriptions of hazardous material statements, separated by the pipe symbol. For example: <br /><br /><code>encoded(Unstable explosives)|encoded(Flammable gas)</code> */
		hazmatStatementDescriptions: FormControl<string | null | undefined>,

		/** The IDs of hazardous material statements, separated by the pipe symbol. For example: <br /><br /><code>H200|H221</code> */
		hazmatStatementIds: FormControl<string | null | undefined>,

		/** A boolean that indicates whether the images can be altered. If the value is <code>true</code>, you cannot modify the image. <p><span class="tablenote"><b>Note: </b> Due to image licensing agreements and other legal concerns, modification (including resizing) of some images is strictly prohibited. These images are for display as-is only. </span></p> */
		imageAlteringProhibited: FormControl<boolean | null | undefined>,

		/** The URL to the primary image of the item.  This is the URL of the largest image available based on what the seller submitted. */
		imageUrl: FormControl<string | null | undefined>,

		/** The ePID (eBay Product ID of a product in the eBay product catalog) for the item, which has been programmatically determined by eBay using the item's title, aspects, and other data. <br><br>If the seller actually provided an ePID at listing time for the item, the ePID value is returned in the <b>epid</b> column instead. */
		inferredEpid: FormControl<string | null | undefined>,

		/** The URL of the View Item page of the item, with the affiliate tracking ID appended to it.<br><br><b>For example</b><br><br><code>https://www.ebay.de/itm/2********0?mkevt=1&mkcid=1&mkrid=707-53477-19255-0&campid=CAMPAIGNID&toolid=2***6&customid=CUSTOMID</code> */
		itemAffiliateWebUrl: FormControl<string | null | undefined>,

		/** A timestamp indicating when the item was created. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		itemCreationDate: FormControl<string | null | undefined>,

		/** A timestamp indicating when the item's sale period will end based on its start date and duration. For Good 'Til Cancelled items, no value is returned in this column. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		itemEndDate: FormControl<string | null | undefined>,

		/** The unique identifier of an item in eBay RESTful format. An example would be <code>v1|1**********2|4**********2</code>. */
		itemId: FormControl<string | null | undefined>,

		/** The country where the item is physically located. */
		itemLocationCountry: FormControl<string | null | undefined>,

		/** This timestamp denotes the date and time the changes for that item were picked up and added to the snapshot feed file. <br><br>For example, let's say you have a snapshot feed file and also ran the <b> getItem</b> method. When you compare the same item information from the two sources, you see that the price in the <b> getItem</b> method response is different from the price in the snapshot feed file. By knowing the date and time you submitted the <b> getItem</b> method, you can use the <b> itemSnapshotDate</b> data to determine which price is the most current for this item. <br><br><b> Format: </b> UTC <code>yyyy-MM-ddThh:mm:ss.sssZ</code> */
		itemSnapshotDate: FormControl<string | null | undefined>,

		/** The URL of the View Item page of the item. <br/><br><b>For example:</b><br><br><b>Single SKU:</b><br><code>https://www.ebay.de/itm/2********0</code><br><br><b>MSKU:</b><br><code>https://www.ebay.com/itm/2********9?var=5********2</code> */
		itemWebUrl: FormControl<string | null | undefined>,

		/** The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page. */
		legacyItemId: FormControl<string | null | undefined>,

		/** A semicolon separated list of the name/value pairs for the aspects of the item, which are BASE64 encoded. The aspect label is separated by a pipe (|), the aspect name and value are separated by a colon (:) and the name/value pairs are separated by a semicolon (;). <p><b> Example without Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b> <br>&nbsp;&nbsp;&nbsp;<code><em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em></code> </p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):    <br>&nbsp;&nbsp;&nbsp;<code>U2l6ZQ==<b style="font-family: 'Arial Black';">:</b>WEw=<b style="font-family: 'Arial Black';">;</b>Q29sb3I=<b style="font-family: 'Arial Black';">:</b>UmVk<b style="font-family: 'Arial Black';">;</b>U2xlZXZlcw==<b style="font-family: 'Arial Black';">:</b>TG9uZw==</code> </p>    <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Size:XL;Color:Red;Sleeves:Long </p>        <p><br><b> Example with Label</b></p>    <p>&nbsp;&nbsp;<b> Encoded Format:</b>   <br>&nbsp;&nbsp;&nbsp;<code><em>encodedLabel</em>|<em>encodedName</em>:<em>encodedValue</em>;<em>encodedName</em>:<em>encodedValue</em>;<em>encodedLabel</em>|</code></p>       <p>&nbsp;&nbsp;<b> Encoded Example</b> (The delimiters are <b style="font-family: 'Arial Black';">emphasized</b>):  <br>&nbsp;&nbsp;&nbsp;<code>UHJvZHVjdCBJZGVudGlmaWVycw==<b style="font-family: 'Arial Black';">|</b>R1RJTg==<b style="font-family: 'Arial Black';">:</b>MDE5MDE5ODA2NjYzMw==<b style="font-family: 'Arial Black';">;</b>QlJBTkQ=<b style="font-family: 'Arial Black';">:</b>QXBwbGU=<b style="font-family: 'Arial Black';">;</b>UHJvZHVjdCBLZXkgRmVhdHVyZXM=<b style="font-family: 'Arial Black';">|</b>TW9kZWw=<b style="font-family: 'Arial Black';">:</b>aVBob25lIDc=</code> </p>        <p>&nbsp;&nbsp;<b> Decoded: </b> <br>&nbsp;&nbsp;&nbsp;Product Identifiers|GTIN:0190198066633;BRAND:Apple;Product Key Features|Model:iPhone 7</p>        <p><span class="tablenote"><b>Note: </b> The separators (<code> |  :  ; </code>) are <i> not</i> encoded. You must decode each label, name, and value separately. You cannot decode the entire string.</b></p> <p>For more information, see <a href="/api-docs/buy/static/api-feed.html#encoded-aspects">Encoded Aspects</a> in the Buying Integration Guide.</p> */
		localizedAspects: FormControl<string | null | undefined>,

		/**
		 * The number of items in a lot. In other words, a lot size is the number of items that are being sold together.  <br><br>A lot is a set of two or more items included in a single listing that must be purchased together in a single order line item. All the items in the lot are the same but there can be multiple items in a single lot,  such as the package of batteries shown in the example below.   <br><br><table border="1"> <tr> <tr>  <th>Item</th>  <th>Lot Definition</th> <th>Lot Size</th></tr>  <tr>  <td>A package of 24 AA batteries</td>  <td>A box of 10 packages</td>  <td>10  </td> </tr>  <tr>  <td>A P235/75-15 Goodyear tire </td>  <td>4 tires  </td>  <td>4  </td> </tr> <tr> <td>Fashion Jewelry Rings  </td> <td>Package of 100 assorted rings  </td> <td>100 </td> </tr></table>  <br><br><span class="tablenote"><b>Note: </b>  Lots are not supported in all categories.  </span>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		lotSize: FormControl<number | null | undefined>,

		/** The material that the item is made of. */
		material: FormControl<string | null | undefined>,

		/** The manufacturer part number, which is a number that is used in combination with <b> brand</b> to identify a product. */
		mpn: FormControl<string | null | undefined>,

		/** The currency of the <b> originalPriceValue</b> of the item and the <b> discountAmount</b>.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		originalPriceCurrency: FormControl<string | null | undefined>,

		/** The original selling price of the item. This lets you surface a strikethrough price for the item. */
		originalPriceValue: FormControl<string | null | undefined>,

		/** (Primary Item Aspect) Text describing the pattern used on the item. For example, paisley.<br><br><b>Note:</b> All the item aspects, including this aspect, are returned in the localizedAspects container. */
		pattern: FormControl<string | null | undefined>,

		/** The currency used for the price of the item. Generally, this is the currency used by the country of the eBay site offering the item. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:CurrencyCodeEnum'>eBay API documentation</a> */
		priceCurrency: FormControl<string | null | undefined>,

		/** The price of the item, which can be a discounted price. <br><br><span class="tablenote"><b> Note: </b>The price includes the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the <a href="/api-docs/static/rest-request-components.html#HTTP"><code>X-EBAY-C-MARKETPLACE-ID</code></a> request header specifying the supported marketplace (such as <code>EBAY_GB</code>) to see the VAT-inclusive pricing. For more information on VAT, refer to <a href="https://www.ebay.co.uk/help/listings/default/vat-obligations-eu?id=4650&st=12&pos=1&query=Your%20VAT%20obligations%20in%20the%20EU&intent=VAT">VAT Obligations in the EU</a>.</span> */
		priceValue: FormControl<string | null | undefined>,

		/** The unique identifier for the item group that contains this item. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. */
		primaryItemGroupId: FormControl<string | null | undefined>,

		/** The item group type. Supported value: <code>SELLER_DEFINED_VARIATIONS</code>, indicates that the item group was created by the seller. <br><br>Code so that your app gracefully handles any future changes to this list. */
		primaryItemGroupType: FormControl<string | null | undefined>,

		/** A pipe separated list of the qualified programs available for the item, such as EBAY_PLUS and AUTHENTICITY_GUARANTEE.  <br><br>eBay Plus is a premium account option for buyers, which provides benefits such as fast free domestic shipping and free returns on selected items. Top-Rated eBay sellers must opt in to eBay Plus to be able to offer the program on qualifying listings. Sellers must commit to next-day delivery of those items.  <span class="tablenote"><b>Note: </b> eBay Plus is available only to buyers in Germany, Austria, and Australia marketplaces. </span><br><br>The eBay Authenticity Guarantee program enables third-party authenticators to perform authentication verification inspections on items such as watches and sneakers. */
		qualifiedPrograms: FormControl<string | null | undefined>,

		/**
		 * The number of items used when calculating the shipping estimation information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantityUsedForEstimate: FormControl<number | null | undefined>,

		/** An enumeration value representing how a buyer is refunded when an item is returned. <br><br>Code so that your app gracefully handles any future changes to this list.  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:RefundMethodEnum'>eBay API documentation</a> */
		refundMethod: FormControl<string | null | undefined>,

		/** A score that describes how easy it is to repair the product. Score values range from 0.1 (hardest to repair) to 10.0 (easiest), always including a single decimal place.<br><br><span class="tablenote"><b>Note:</b> Support for this field is currently limited to the France marketplace.</span> */
		repairScore: FormControl<string | null | undefined>,

		/** An enumeration value that indicates the alternative methods for a full refund when an item is returned. This column will have data if the seller offers the buyer an item replacement or exchange instead of a monetary refund. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:ReturnMethodEnum'>eBay API documentation</a> */
		returnMethod: FormControl<string | null | undefined>,

		/** An enumeration value that indicates the period of time being used to measure the duration, such as business days, months, or years. <br><br><b>TimeDurationUnitEnum</b> is a common type shared by multiple eBay APIs and fields to express the time unit, but for return period duration, this value will always be <code>DAY</code>. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/bas:TimeDurationUnitEnum'>eBay API documentation</a> */
		returnPeriodUnit: FormControl<string | null | undefined>,

		/**
		 * The amount of days that the buyer has to return the item after the purchase date. For example, if this value is <code>30</code>, the return period is 30 days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		returnPeriodValue: FormControl<number | null | undefined>,

		/** An enumeration value that indicates the party responsible for the return shipping costs when an item is returned. <br><br><b>Valid Values: </b> <code>BUYER</code> or <code>SELLER</code> <br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:ReturnShippingCostPayerEnum'>eBay API documentation</a> */
		returnShippingCostPayer: FormControl<string | null | undefined>,

		/** Indicates whether the seller accepts returns for the item. */
		returnsAccepted: FormControl<boolean | null | undefined>,

		/** A string value that specifies whether the seller is a business or an individual. This is determined when the seller registers with eBay. If the seller registers for a business account, the value returned in this field will be <code>BUSINESS</code>. If the seller registers for a private account, the value returned in this field will be <code>INDIVIDUAL</code>.<br><br><span class="tablenote"><b>Note:</b> This designation is required by the tax laws in some countries.</span><br><br>This field is returned only on the following sites: EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, and EBAY_PL.<br><br>Code so that your app gracefully handles any future changes to this list.<br><br><b>Valid Values:</b> <code>BUSINESS</code> or <code>INDIVIDUAL</code> */
		sellerAccountType: FormControl<string | null | undefined>,

		/** The percentage of the seller's total positive feedback. */
		sellerFeedbackPercentage: FormControl<string | null | undefined>,

		/** The feedback score of the seller. This value is based on the ratings from eBay members that bought items from this seller. */
		sellerFeedbackScore: FormControl<string | null | undefined>,

		/** An identifier generated/incremented when a seller revises the item. There are two types of item revisions: <ul><li>Seller changes, such as changing the title</li>  <li>eBay system changes, such as changing the quantity when an item is purchased</li></ul> This ID is changed <i> only</i> when the seller makes a change to the item. */
		sellerItemRevision: FormControl<string | null | undefined>,

		/** An enumeration value representing the eBay status of the seller. <br><br><b>Valid Values:</b> <code>TOP_RATED</code>, <code>ABOVE_STANDARD</code>, or an empty value. <br><br>An empty value indicates a return of anything other than <code>TOP_RATED</code> or <code>ABOVE_STANDARD</code>.<br><br>Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/feed/types/api:SellerTrustLevelEnum'>eBay API documentation</a> */
		sellerTrustLevel: FormControl<string | null | undefined>,

		/** The seller's eBay user name. */
		sellerUsername: FormControl<string | null | undefined>,

		/** A pipe (<code>|</code>) separated alphabetical list of the geographic countries and regions where the item cannot be shipped. These countries and regions refine (restrict) the <b> shipToIncludedRegions</b> list.  <br><br>The COUNTRY: list is separated from the REGION: list with a semicolon (<code>;</code>).       <br><br><b> Format Example: </b> <br> <code>COUNTRY:US|BM|GL|MX|PM;REGION:AFRICA|ASIA|CENTRAL_AMERICA_AND_CARIBBEAN|EUROPE|MIDDLE_EAST|OCEANIA|SOUTH_AMERICA|SOUTHEAST_ASIA;</code>  <br><br><b> Country Values: </b> The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> standard code of the country.       <br><br><b> Region Values: </b> AFRICA, AMERICAS, ANTARCTIC, ARCTIC, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EURO_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, REST_OF_ASIA, SOUTHEAST_ASIA, SOUTH_AMERICA, WORLDWIDE <br><br>Code so that your app gracefully handles any future changes to this list. */
		shipToExcludedRegions: FormControl<string | null | undefined>,

		/** A pipe (<code>|</code>) separated alphabetical list of the geographic countries and regions where the seller will ship the item. <br><br>If a region is specified, you will need to subtract any countries and regions returned in the <b> shipToExcludedRegions</b> column to fully understand where the seller will ship. <br><br>The COUNTRY: list is separated from the REGION: list with a semicolon (<code>;</code>).       <br><br><b> Format Example: </b> <br> <code>COUNTRY:US|BM|GL|MX|PM;REGION:AFRICA|ASIA|CENTRAL_AMERICA_AND_CARIBBEAN|EUROPE|MIDDLE_EAST|OCEANIA|SOUTH_AMERICA|SOUTHEAST_ASIA;</code>  <br><br><b> Country Values: </b> The two-letter <a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a> standard code of the country.       <br><br><b> Region Values: </b> AFRICA, AMERICAS, ANTARCTIC, ARCTIC, ASIA, AUSTRALIA, CENTRAL_AMERICA_AND_CARIBBEAN, EUROPE, EURO_UNION, GREATER_CHINA, MIDDLE_EAST, NORTH_AMERICA, OCEANIA, REST_OF_ASIA, SOUTHEAST_ASIA, SOUTH_AMERICA, WORLDWIDE <br><br>Code so that your app gracefully handles any future changes to this list. */
		shipToIncludedRegions: FormControl<string | null | undefined>,

		/** The name of the shipping provider, such as FedEx, or USPS. */
		shippingCarrierCode: FormControl<string | null | undefined>,

		/** The final shipping cost for all the items after all discounts are applied.<br><br><span class="tablenote"><b> Note: </b>The price includes the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the <a href="/api-docs/static/rest-request-components.html#HTTP"><code>X-EBAY-C-MARKETPLACE-ID</code></a> request header specifying the supported marketplace (such as <code>EBAY_GB</code>) to see the VAT-inclusive pricing. For more information on VAT, refer to <a href="https://www.ebay.co.uk/help/listings/default/vat-obligations-eu?id=4650&st=12&pos=1&query=Your%20VAT%20obligations%20in%20the%20EU&intent=VAT">VAT Obligations in the EU</a>.</span> */
		shippingCost: FormControl<string | null | undefined>,

		/** Indicates the class of the shipping cost. <br><br><b> Valid Values: </b> FIXED or CALCULATED <br><br>Code so that your app gracefully handles any future changes to this list. */
		shippingCostType: FormControl<string | null | undefined>,

		/** The type of shipping service. For example, USPS First Class. */
		shippingServiceCode: FormControl<string | null | undefined>,

		/** The type of a shipping option, such as EXPEDITED, ONE_DAY, STANDARD, ECONOMY, PICKUP, etc. */
		shippingType: FormControl<string | null | undefined>,

		/** The size of the item. */
		size: FormControl<string | null | undefined>,

		/** The seller-defined description of the TAKE_BACK custom policy for the item. */
		takeBackPolicyDescription: FormControl<string | null | undefined>,

		/** The seller-defined label of the TAKE_BACK custom policy for the item. A TAKE_BACK policy describes the seller's regulatory responsibility to take back a purchased item for disposal when the buyer purchases a new one. */
		takeBackPolicyLabel: FormControl<string | null | undefined>,

		/** The seller created title of the item. This text is an escaped string when special characters are present, using the following rules:</p>   <ul>       <li>Double quotes (&#34;) and backslashes (&#92;) in the Title are escaped with a backslash (&#92;) character</li>      <li>If there are any tabs (&#92;t), double quotes (&#34;), or backslashes (&#92;) in the Title, the entire Title will be wrapped in double quotes.</li>   </ul>   <p><b>For example</b></p>   <p>Before:</p>   <p><code>Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;</b>Tracking</code>   </p>   <p><code>Marvel Legends HULK 8<b>&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#34;</b> Series</code>   </p>   <p>After:</p>   <p><code>&#34;Misty Rainforest Modern Masters 2017 MTG Magic Fetch Land Free Ship W<b>&#92;&#92;</b> Tracking&#34;</code>   </p>   <p><code>&#34;Marvel Legends HULK 8<b>&#92;&#34;</b> Figure Avengers Age of Ultron Studios 6<b>&#92;&#34;</b> Series<b>&#34;</b> </code>   </p> */
		title: FormControl<string | null | undefined>,

		/** For an item that is priced by the unit, the total number of units that are on offer. For example, if the item is priced by the meter and 50 cm is on offer, the <b>totalUnits</b> would be 0.5 m. */
		totalUnits: FormControl<string | null | undefined>,

		/** The URL to the image that shows the information on the tyre label. */
		tyreLabelImageUrl: FormControl<string | null | undefined>,

		/** This is the price per unit for the item. Some European countries require listings for certain types of products to include the price per unit so buyers can accurately compare prices.   <br><br>For example: <br><br><code>"unitPricingMeasure": "100g",<br> "unitPrice": {<br>&nbsp;&nbsp;"value": "7.99",<br>&nbsp;&nbsp;"currency": "GBP"</code> */
		unitPrice: FormControl<string | null | undefined>,

		/** The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item.  This helps buyers compare prices. <br><br>For example, the following tells the buyer that the item is 7.99 per 100 grams. <br><br><code>"unitPricingMeasure": "100g",<br> "unitPrice": {<br>&nbsp;&nbsp;"value": "7.99",<br>&nbsp;&nbsp;"currency": "GBP"</code> */
		unitPricingMeasure: FormControl<string | null | undefined>,
	}
	export function CreateItemSnapshotFormGroup() {
		return new FormGroup<ItemSnapshotFormProperties>({
			acceptedPaymentMethods: new FormControl<string | null | undefined>(undefined),
			additionalImageUrls: new FormControl<string | null | undefined>(undefined),
			additionalShippingCostPerUnit: new FormControl<string | null | undefined>(undefined),
			ageGroup: new FormControl<string | null | undefined>(undefined),
			alerts: new FormControl<string | null | undefined>(undefined),
			authenticityGuaranteeFeeCurrency: new FormControl<string | null | undefined>(undefined),
			authenticityGuaranteeFeeValue: new FormControl<string | null | undefined>(undefined),
			authenticityGuaranteeSelection: new FormControl<string | null | undefined>(undefined),
			authenticityGuaranteeServiceId: new FormControl<string | null | undefined>(undefined),
			availability: new FormControl<string | null | undefined>(undefined),
			availabilityThreshold: new FormControl<number | null | undefined>(undefined),
			availabilityThresholdType: new FormControl<string | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined),
			buyingOptions: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			categoryId: new FormControl<string | null | undefined>(undefined),
			changeMetadata: new FormControl<string | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			conditionId: new FormControl<string | null | undefined>(undefined),
			couponDiscountCurrency: new FormControl<string | null | undefined>(undefined),
			couponDiscountType: new FormControl<string | null | undefined>(undefined),
			couponDiscountValue: new FormControl<string | null | undefined>(undefined),
			couponExpirationDate: new FormControl<string | null | undefined>(undefined),
			couponMessage: new FormControl<string | null | undefined>(undefined),
			couponRedemptionCode: new FormControl<string | null | undefined>(undefined),
			couponTermsWebUrl: new FormControl<string | null | undefined>(undefined),
			defaultImageUrl: new FormControl<string | null | undefined>(undefined),
			deliveryOptions: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discountAmount: new FormControl<string | null | undefined>(undefined),
			discountPercentage: new FormControl<string | null | undefined>(undefined),
			ecoParticipationFeeCurrency: new FormControl<string | null | undefined>(undefined),
			ecoParticipationFeeValue: new FormControl<string | null | undefined>(undefined),
			energyEfficiencyClass: new FormControl<string | null | undefined>(undefined),
			epid: new FormControl<string | null | undefined>(undefined),
			estimatedAvailableQuantity: new FormControl<number | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			hazmatAdditionalInformation: new FormControl<string | null | undefined>(undefined),
			hazmatPictogramDescriptions: new FormControl<string | null | undefined>(undefined),
			hazmatPictogramIds: new FormControl<string | null | undefined>(undefined),
			hazmatPictogramImageUrls: new FormControl<string | null | undefined>(undefined),
			hazmatSignalWord: new FormControl<string | null | undefined>(undefined),
			hazmatSignalWordId: new FormControl<string | null | undefined>(undefined),
			hazmatStatementDescriptions: new FormControl<string | null | undefined>(undefined),
			hazmatStatementIds: new FormControl<string | null | undefined>(undefined),
			imageAlteringProhibited: new FormControl<boolean | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			inferredEpid: new FormControl<string | null | undefined>(undefined),
			itemAffiliateWebUrl: new FormControl<string | null | undefined>(undefined),
			itemCreationDate: new FormControl<string | null | undefined>(undefined),
			itemEndDate: new FormControl<string | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			itemLocationCountry: new FormControl<string | null | undefined>(undefined),
			itemSnapshotDate: new FormControl<string | null | undefined>(undefined),
			itemWebUrl: new FormControl<string | null | undefined>(undefined),
			legacyItemId: new FormControl<string | null | undefined>(undefined),
			localizedAspects: new FormControl<string | null | undefined>(undefined),
			lotSize: new FormControl<number | null | undefined>(undefined),
			material: new FormControl<string | null | undefined>(undefined),
			mpn: new FormControl<string | null | undefined>(undefined),
			originalPriceCurrency: new FormControl<string | null | undefined>(undefined),
			originalPriceValue: new FormControl<string | null | undefined>(undefined),
			pattern: new FormControl<string | null | undefined>(undefined),
			priceCurrency: new FormControl<string | null | undefined>(undefined),
			priceValue: new FormControl<string | null | undefined>(undefined),
			primaryItemGroupId: new FormControl<string | null | undefined>(undefined),
			primaryItemGroupType: new FormControl<string | null | undefined>(undefined),
			qualifiedPrograms: new FormControl<string | null | undefined>(undefined),
			quantityUsedForEstimate: new FormControl<number | null | undefined>(undefined),
			refundMethod: new FormControl<string | null | undefined>(undefined),
			repairScore: new FormControl<string | null | undefined>(undefined),
			returnMethod: new FormControl<string | null | undefined>(undefined),
			returnPeriodUnit: new FormControl<string | null | undefined>(undefined),
			returnPeriodValue: new FormControl<number | null | undefined>(undefined),
			returnShippingCostPayer: new FormControl<string | null | undefined>(undefined),
			returnsAccepted: new FormControl<boolean | null | undefined>(undefined),
			sellerAccountType: new FormControl<string | null | undefined>(undefined),
			sellerFeedbackPercentage: new FormControl<string | null | undefined>(undefined),
			sellerFeedbackScore: new FormControl<string | null | undefined>(undefined),
			sellerItemRevision: new FormControl<string | null | undefined>(undefined),
			sellerTrustLevel: new FormControl<string | null | undefined>(undefined),
			sellerUsername: new FormControl<string | null | undefined>(undefined),
			shipToExcludedRegions: new FormControl<string | null | undefined>(undefined),
			shipToIncludedRegions: new FormControl<string | null | undefined>(undefined),
			shippingCarrierCode: new FormControl<string | null | undefined>(undefined),
			shippingCost: new FormControl<string | null | undefined>(undefined),
			shippingCostType: new FormControl<string | null | undefined>(undefined),
			shippingServiceCode: new FormControl<string | null | undefined>(undefined),
			shippingType: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			takeBackPolicyDescription: new FormControl<string | null | undefined>(undefined),
			takeBackPolicyLabel: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			totalUnits: new FormControl<string | null | undefined>(undefined),
			tyreLabelImageUrl: new FormControl<string | null | undefined>(undefined),
			unitPrice: new FormControl<string | null | undefined>(undefined),
			unitPricingMeasure: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type that defines the array for the items returned in the <b>Hourly Snapshot</b> feed file. */
	export interface ItemSnapshotResponse {

		/** The container for the array of items returned by the <b> getItemSnapshotFeed</b> method. <p><b>Note: </b> When the value of the <b> availability</b> column is <code>UNAVAILABLE</code>, only the <b>itemId</b> and <b> availability</b> columns are populated.  </p> */
		items?: Array<ItemSnapshot>;
	}

	/** The type that defines the array for the items returned in the <b>Hourly Snapshot</b> feed file. */
	export interface ItemSnapshotResponseFormProperties {
	}
	export function CreateItemSnapshotResponseFormGroup() {
		return new FormGroup<ItemSnapshotResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>This method lets you download a TSV_GZIP (tab separated value gzip) <b> Item</b> feed file. The feed file contains all the items from <b> all</b> the child categories of the specified category.  The first line of the file is the header, which labels the columns and indicates the order of the values on each line.  Each header is described in the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed#h3-response-fields">Response fields</a> section.  </p> <p> There are two types of item feed files generated: <ul> <li>A daily <b>Item</b> feed file containing all the newly listed items for a specific category, date, and marketplace (<b>feed_scope</b> = <code>NEWLY_LISTED</code>)</li>  <li>A weekly <b>Item Bootstrap</b> feed file containing <i> all</i> the items in a specific category and marketplace (<b>feed_scope</b> = <code>ALL_ACTIVE</code>)</li>  </ul>  </p>   <p><span class="tablenote"><b>Note: </b>  Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed_beta.html#Feed2">Feed File Filters</a>. When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p><h3><b>Downloading feed files </b></h3>             <p>Item feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs  and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.    </p>    <p>In addition to the API, there is an open source <a href="https://github.com/eBay/FeedSDK" target="_blank">Feed SDK</a> written in Java that downloads, combines files into a single file when needed, and unzips the entire feed file. It also lets you specify field filters to curate the items in the file.</p>              <p><span class="tablenote">  <b> Note:</b> A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span>  </p>                <h3><b>Restrictions </b></h3>                <p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>
		 * Get item
		 * @param {string} feed_scope Specifies the type of feed file to return. <br><br><b>Valid Values: </b>   <ul> <li><b> NEWLY_LISTED</b> - Returns the daily <b>Item</b> feed file containing all Good 'Til Cancelled items that were listed on the day specified by the <b> date</b> parameter in the category specified by the <b> category_id</b> parameter.<br><br><code>/item?feed_scope=NEWLY_LISTED&category_id=15032&date=20170925</code></li><li><b>ALL_ACTIVE</b> - Returns the weekly <b>Item Bootstrap</b> feed file containing all the Good 'Til Cancelled items in the category specified by the <b>category_id</b> parameter.<br><br><span class="tablenote"><b>Note:</b> Bootstrap files are generated every Tuesday and the file is available on Wednesday. However, the exact time the file is available can vary so we recommend you download the Bootstrap file on Thursday. The items in the file are the items that were in the specified category on Sunday.</span> <br><br><code>/item?feed_scope=ALL_ACTIVE&category_id=15032</code>  </ul>
		 * @param {string} category_id An eBay top-level category ID of the items to be returned in the feed file. <br> <br>The list of eBay category IDs changes over time and category IDs are not the same across all the eBay marketplaces. To get a list of the top-level categories for a marketplace, you can use the Taxonomy API <a href="/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategoryTree">getCategoryTree</a> method. This method retrieves the complete category tree for the marketplace. The top-level categories are identified by the <b>categoryTreeNodeLevel</b> field. <br><br><b>For example:</b><br>&nbsp;&nbsp;<code>"categoryTreeNodeLevel": 1</code> <br><br>For details see <a href="/api-docs/buy/buy-categories.html">Get Categories for Buy APIs</a>. </li>  </ul> <br><br>   <b>Restriction:</b> Must be a top-level (L1) category other than Real Estate. Items listed under Real Estate L1 categories are excluded from all feeds in all marketplaces.
		 * @param {string} date The date of the daily <b>Item</b> feed file (<b>feed_scope</b>=<code>NEWLY_LISTED</code>) you want. <p>The <b> date</b> is required only for the daily <b>Item</b> feed file. If you specify a date for the <b>Item Bootstrap</b> file (<b>feed_scope</b>=<code>ALL_ACTIVE</code>), the date is ignored and the latest file is returned. The date the <b>Item Bootstrap</b> feed file was generated is returned in the <b>Last-Modified</b> response header.</code></p>    <p>The <b> Item</b> feed files are generated every day and there are 14 daily files available.</p>  <span class="tablenote"> <b>Note: </b><ul>  <li>The daily <b>Item</b> feed files are available each day after 9AM MST (US Mountain Standard Time), which is -7 hours UTC time.</li>    <li>There is a 48 hour latency when generating the <b> Item</b> feed files. This means you can download the file for July 10th on July 12 after 9AM MST. <br><br><b>Note: </b> For categories with a large number of items, the latency can be up to 72 hours.</li> </ul></span> <p><b> Format: </b><code>yyyyMMdd</code><br><br><b> Requirements: </b> <ul>  <li>Required when <b>feed_scope</b>=<code>NEWLY_LISTED</code> </li>  <li>Must be within 3-14 days in the past</li></ul>
		 * @return {ItemResponse} Partial Content
		 */
		GetItemFeed(feed_scope: string, category_id: string, date: string | null | undefined): Observable<ItemResponse> {
			return this.http.get<ItemResponse>(this.baseUri + 'item?feed_scope=' + (feed_scope == null ? '' : encodeURIComponent(feed_scope)) + '&category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&date=' + (date == null ? '' : encodeURIComponent(date)), {});
		}

		/**
		 * <p>This method lets you download a TSV_GZIP (tab separated value gzip) <b> Item Group</b> feed file. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. </p> <p>There are two types of item group feed files generated: <ul> <li>A daily <b>Item Group</b> feed file containing the item group variation information associated with items returned in the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed">Item</a> feed file for a specific day, category, and marketplace. (<b>feed_scope</b> = <code>NEWLY_LISTED</code>)</li>  <li>A weekly <b>Item Group Bootstrap</b> feed file containing all the item group variation information associated with items returned in the <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed">Item Bootstrap</a> feed file for all the items in a specific category.  (<b>feed_scope</b> = <code>ALL_ACTIVE</code>)</li>  </ul></p>  <p><span class="tablenote"><b>Note: </b>  Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed.html#feed-filters">Feed File Filters</a>.  When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p>    <p>The contents of these feed files are based on the contents of the corresponding daily <b> Item</b> or <b>Item Bootstrap</b> feed file. When a new <b> Item</b> or <b>Item Bootstrap</b> feed file is generated, the service reads the file and if an item in the file has a <b> primaryItemGroupId</b> value, which indicates the item is part of an item group, it uses that value to return the item group (parent item) information for that item in the corresponding <b> Item Group</b> or <b> Item Group Bootstrap</b> feed file.</p>  <p>  This information includes the  name/value pair of the aspects of the items in this group returned in the <b> variesByLocalizedAspects </b> column. For example, if the item was a shirt some of the variation names could be Size, Color, etc. Also the images for the various aspects are returned in the <b>additionalImageUrls</b> column.</p>              <p>The first line in any feed file is the header, which labels the columns and indicates the order of the values on each line.  Each header is described in the <a href="/api-docs/buy/feed/resources/item_group/methods/getItemGroupFeed#h3-response-fields">Response fields</a> section.</p>                                  <h3><b>Combining the Item Group and Item feed files</b></h3>              <p>The <b> Item Group</b> or <b> Item Group Bootstrap</b> feed file contains details about the item group (parent item), including the item group ID <b> itemGroupId</b>.  You match the value of <b> itemGroupId</b> from the <b> Item Group</b> feed file with the value of <b> primaryItemGroupId</b> from the corresponding daily <b> Item</b> or <b>Item Bootstrap</b> feed file.</p><h3><b>Downloading feed files </b></h3>                          <p>Item Group feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">content-range</a> response header indicates where in the full resource this partial chunk of data belongs  and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/{swift-folder}/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>. </p>                 <p><span class="tablenote">  <b> Note:</b>  A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span>          </p>                        <h3><b>Restrictions </b></h3>                        <p>For a list of supported sites and other restrictions, see <a href="/api-docs/{swift-folder}/buy/feed/overview.html#API">API Restrictions</a>.  </p>
		 * Get item_group
		 * @param {string} feed_scope Specifies the type of file to return. <br><br><b>Valid Values: </b>   <ul> <li><b> NEWLY_LISTED</b> - Returns the <b>Item Group</b> feed file containing the  item group variation information for items in the daily <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed">Item</a> feed file that were associated with an item group. <br><br>The items in this type of <b>Item</b> feed file are items that were listed on the day specified by the <b> date</b> parameter in the category specified by the <b>category_id</b> parameter. <br><br><code>/item_group?feed_scope=NEWLY_LISTED&category_id=15032&date=20170925</code></li> <li><b>ALL_ACTIVE</b> - Returns the weekly <b>Item Group Bootstrap</b> file containing the item group  variation information for items in the weekly <a href="/api-docs/buy/feed/resources/item/methods/getItemFeed">Item Bootstrap</a> feed file that were associated with an item group. The items are Good 'Til Cancelled items in the category specified by the <b> category_id</b> parameter.  <br><br>  <span class="tablenote"><b>Note: </b> Bootstrap files are generated every Tuesday and the file is available on Wednesday. However, the exact time the file is available can vary so we recommend you download the Bootstrap file on Thursday. The item groups in the file are for the items that were in the specified category on Sunday.</span><br><br><code>/item_group?feed_scope=ALL_ACTIVE&category_id=15032</code> <br><br> 
		 * @param {string} category_id An eBay top-level category ID of the items to be returned in the feed file.<br> <br>The list of eBay category IDs changes over time and category IDs are not the same across all the eBay marketplaces. To get a list of the top-level categories for a marketplaces, you can use the Taxonomy API <a href="/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategoryTree">getCategoryTree</a> method. This method retrieves the complete category tree for the marketplace. The top-level categories are identified by the <b>categoryTreeNodeLevel</b> field. <br><br><b>For example:</b><br>&nbsp;&nbsp;<code>"categoryTreeNodeLevel": 1</code> <br><br>For details see <a href="/api-docs/buy/buy-categories.html">Get Categories for Buy APIs</a>. </li>  </ul> <br><br>   <b>Restriction:</b> Must be a top-level category other than Real Estate. Items listed under Real Estate L1 categories are excluded from all feeds in all marketplaces.
		 * @param {string} date  The date of the daily <b>Item Group</b> feed file (<b>feed_scope</b>=<code>NEWLY_LISTED</code>) you want. <p>The <b> date</b> is required only for the daily <b>Item Group</b> feed file. If you specify a date for the <b>Item Group Bootstrap</b> file (<b>feed_scope</b>=<code>ALL_ACTIVE</code>), the date is ignored and the latest file is returned. The date the <b>Item Group Bootstrap</b> feed file was generated is returned in the <b>Last-Modified</b> response header.</code></p>    <p>The <b> Item Group</b> feed files are generated every day and there are 14 daily files available.</p> <p>There is a 48 hour latency when generating the files. This means on July 10, the latest feed file you can download is July 8.</p>  <span class="tablenote"><b>Note: </b> The generated files are stored using MST (US Mountain Standard Time), which is -7 hours UTC time.</span><br> <br><b> Format: </b><code>yyyyMMdd</code><br><br><b> Requirements: </b> <ul>  <li>Required only when <b>feed_scope</b>=<code>NEWLY_LISTED</code> </li>   <li>Must be within 3-14 days in the past</li>    </ul>  
		 * @return {ItemGroupResponse} Partial Content
		 */
		GetItemGroupFeed(feed_scope: string, category_id: string, date: string | null | undefined): Observable<ItemGroupResponse> {
			return this.http.get<ItemGroupResponse>(this.baseUri + 'item_group?feed_scope=' + (feed_scope == null ? '' : encodeURIComponent(feed_scope)) + '&category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&date=' + (date == null ? '' : encodeURIComponent(date)), {});
		}

		/**
		 * <p>Using this method, you can download a TSV_GZIP (tab separated value gzip) <b>Item Priority</b> feed file, which allows you to track changes (deltas) in the status of your priority items, such as when an item is added or removed from a campaign.  The delta feed tracks the changes to the status of items within a category you specify in the input URI. You can also specify a specific date for the feed you want returned.</p><p><span class="tablenote"><span style="color:#FF0000"> <b> Important:</b> </span> You must consume the daily feeds (<b>Item</b>, <b>Item Group</b>) before consuming the <b>Item Priority</b> feed. This ensures that your inventory is up to date.</span></p><h3><b>Downloading feed files </b></h3>             <p><span class="tablenote"><b>Note: </b> Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed.html#feed-filters">Feed File Filters</a>. When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p><p>Priority Item feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs  and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.    </p>    <p>In addition to the API, there is an open source <a href="https://github.com/eBay/FeedSDK" target="_blank">Feed SDK</a> written in Java that downloads, combines files into a single file when needed, and unzips the entire feed file. It also lets you specify field filters to curate the items in the file.</p>              <p><span class="tablenote">  <b> Note:</b>  A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span>  </p>                <h3><b>Restrictions </b></h3>                <p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>
		 * Get item_priority
		 * @param {string} category_id An eBay top-level category ID of the items to be returned in the feed file.<br> <br>The list of eBay category IDs changes over time and category IDs are not the same across all the eBay marketplaces. To get a list of the top-level categories for a marketplaces, you can use the Taxonomy API <a href="/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategoryTree">getCategoryTree</a> method. This method retrieves the complete category tree for the marketplace. The top-level categories are identified by the <b>categoryTreeNodeLevel</b> field.<br><br><b>For example:</b><br>&nbsp;&nbsp;<code>"categoryTreeNodeLevel": 1</code> <br><br>For details see <a href="/api-docs/buy/api-feed.html#Getcat">Get the eBay categories of a marketplace</a>.</li></ul><br><br><b>Restriction:</b> Must be a top-level category other than Real Estate. Items listed under Real Estate L1 categories are excluded from all feeds in all marketplaces.
		 * @param {string} date The date of the feed you want returned. This can be up to 14 days in the past but cannot be set to a date in the future.<br> <br><b>Format:</b> <code>yyyyMMdd</code><br ><br><span class="tablenote"> <b>Note: </b><ul>  <li>The daily <b>Item</b> feed files are available each day after 9AM MST (US Mountain Standard Time), which is -7 hours UTC time.</li>    <li>There is a 48 hour latency when generating the <b> Item</b> feed files. This means you can download the file for July 10th on July 12 after 9AM MST. <br><br><b>Note: </b> For categories with a large number of items, the latency can be up to 72 hours.</li> </ul></span>
		 * @return {ItemPriorityResponse} Partial Content
		 */
		GetItemPriorityFeed(category_id: string, date: string): Observable<ItemPriorityResponse> {
			return this.http.get<ItemPriorityResponse>(this.baseUri + 'item_priority?category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&date=' + (date == null ? '' : encodeURIComponent(date)), {});
		}

		/**
		 * <p>The <b> Hourly Snapshot</b> feed file is generated each hour every day for most categories. This method lets you download an <b> Hourly Snapshot</b> TSV_GZIP (tab-separated value gzip) feed file containing the details of all the items that have <a href="/api-docs/buy/static/api-feed.html#changed-items">changed</a> <i> within</i> the specified day and hour for a specific category.  This means to generate the 8AM file of items that have changed from 8AM and 8:59AM, the service starts at 9AM. You can retrieve the 8AM snapshot file at 10AM.</p>    <p>Snapshot feeds now include new listings. You can check <a href="/api-docs/buy/feed/resources/item_snapshot/methods/getItemSnapshotFeed#response.items.itemCreationDate">itemCreationDate</a> to identify listings that were newly created within the specified hour.</p>     <p><span class="tablenote"><b>Note: </b>  Filters are applied to the feed files. For details, see <a href="/api-docs/buy/static/api-feed.html#feed-filters">Feed File Filters</a>.  When curating the items returned, be sure to code as if these filters are not applied as they can be changed or removed in the future.</span></p>                  <p>You can use the response from this method to update the item details of items stored in your database. By looking at the value of <a href="/api-docs/buy/feed/resources/item_snapshot/methods/getItemSnapshotFeed#response.items.itemSnapshotDate">itemSnapshotDate</a> for a given item, you will be able to tell which information is the latest.</p>   <p><span class="tablenote"><span style="color:#FF0000"> <b> Important:</b> </span> When the value of the <b> availability</b> column is <code>UNAVAILABLE</code>, only the <b>itemId</b> and <b> availability</b> columns are populated. </span></p><h3><b>Downloading feed files </b></h3><p>Hourly snapshot feed files are binary gzip files. If the file is larger than 100 MB, the download must be streamed in chunks. You specify the size of the chunks in bytes using the <a href="#range-header">Range</a> request header. The <a href="#content-range">Content-range</a> response header indicates where in the full resource this partial chunk of data belongs and the total number of bytes in the file.       For more information about using these headers, see <a href="/api-docs/buy/static/api-feed_beta.html#retrv-gzip">Retrieving a gzip feed file</a>.  </p>                                <p><span class="tablenote">  <b> Note:</b> A successful call will always return a TSV.GZIP file; however, unsuccessful calls generate errors that are returned in JSON format. For documentation purposes, the successful call response is shown below as JSON fields so that the value returned in each column can be explained. The order of the response fields shows the order of the columns in the feed file.</span></p><h3><b>Restrictions </b></h3><p>For a list of supported sites and other restrictions, see <a href="/api-docs/buy/feed/overview.html#API">API Restrictions</a>.</p>
		 * Get item_snapshot
		 * @param {string} category_id An eBay top-level category ID  of the items to be returned in the feed file.<br> <br>The list of eBay category IDs changes over time and category IDs are not the same across all the eBay marketplaces. To get a list of the top-level categories for a marketplace, you can use the Taxonomy API <a href="/api-docs/commerce/taxonomy/resources/category_tree/methods/getCategoryTree">getCategoryTree</a> method. This method retrieves the complete category tree for the marketplace. The top-level categories are identified by the <b>categoryTreeNodeLevel</b> field.<br><br><b>For example:</b><br>&nbsp;&nbsp;<code>"categoryTreeNodeLevel": 1</code> <br><br>For details see <a href="/api-docs/buy/buy-categories.html">Get Categories for Buy APIs</a>.</li>  </ul> <br><br>   <b>Restriction:</b> Must be a top-level category other than Real Estate. Items listed under Real Estate L1 categories are excluded from all feeds in all marketplaces.
		 * @param {string} snapshot_date The date and hour of the snapshot feed file you want. Each file contains the items that changed within the hour in the specified category. So, the 9AM file contains the items that changed between 9AM and 9:59AM on the day specified.  It takes 2 hours to generate a snapshot file, which means to get the file for 9AM the earliest you could submit the call is at 11AM.<br><br>There are 7 days of <b> Hourly Snapshot</b> feed files available.<p><span class="tablenote"><b>Note: </b> The Feed API uses GMT, so you must convert your local time to GMT. For example, if you lived in California and wanted the September 15th 7pm file, you would submit the following call: <br> <br><code>item_snapshot?category_id=625&snapshot_date=2017-09-16T02:00:00.000Z</code> </span></p>  <b>Format: </b>UTC <code>yyyy-MM-ddThh:00:00.000Z</code> <br><br>Files are generated on the hour, so minutes and seconds are <em> always</em> zeros.
		 * @return {ItemSnapshotResponse} Partial Content
		 */
		GetItemSnapshotFeed(category_id: string, snapshot_date: string): Observable<ItemSnapshotResponse> {
			return this.http.get<ItemSnapshotResponse>(this.baseUri + 'item_snapshot?category_id=' + (category_id == null ? '' : encodeURIComponent(category_id)) + '&snapshot_date=' + (snapshot_date == null ? '' : encodeURIComponent(snapshot_date)), {});
		}
	}

}

