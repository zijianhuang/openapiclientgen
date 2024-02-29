import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error {

		/** The provided code. */
		code?: string | null;

		/** The type of code provided. */
		codeType?: any;

		/**
		 * A human readable error message.
		 * Required
		 */
		error: string;
	}
	export interface ErrorFormProperties {

		/** The provided code. */
		code: FormControl<string | null | undefined>,

		/** The type of code provided. */
		codeType: FormControl<any | null | undefined>,

		/**
		 * A human readable error message.
		 * Required
		 */
		error: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			codeType: new FormControl<any | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).
		 * Get code/{code}
		 * @return {GetProductInfoReturn} The product corresponding to the provided `code`
		 */
		GetProductInfo(code: string): Observable<GetProductInfoReturn> {
			return this.http.get<GetProductInfoReturn>(this.baseUri + 'code/' + (code == null ? '' : encodeURIComponent(code)), {});
		}
	}

	export interface GetProductInfoReturn {

		/** The URL to the scannable barcode image. */
		barcodeUrl?: string | null;

		/** The type of product code (UPC/EAN/ISBN). */
		codeType?: GetProductInfoReturnCodeType | null;

		/** all matching product details. */
		product?: GetProductInfoReturnProduct;
	}
	export interface GetProductInfoReturnFormProperties {

		/** The URL to the scannable barcode image. */
		barcodeUrl: FormControl<string | null | undefined>,

		/** The type of product code (UPC/EAN/ISBN). */
		codeType: FormControl<GetProductInfoReturnCodeType | null | undefined>,
	}
	export function CreateGetProductInfoReturnFormGroup() {
		return new FormGroup<GetProductInfoReturnFormProperties>({
			barcodeUrl: new FormControl<string | null | undefined>(undefined),
			codeType: new FormControl<GetProductInfoReturnCodeType | null | undefined>(undefined),
		});

	}

	export enum GetProductInfoReturnCodeType { UPC = 'UPC', EAN = 'EAN', ISBN = 'ISBN' }

	export interface GetProductInfoReturnProduct {

		/** The brand of the product (if available). */
		brand?: string | null;

		/** The category of the product (if available). */
		category?: string | null;

		/** A description of the product (if available). */
		description?: string | null;

		/**
		 * The EAN code of the product.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ean?: number | null;

		/** The URL for the product image. */
		imageUrl?: string | null;

		/** The name of the product. */
		name?: string | null;

		/** The region of the product. */
		region?: string | null;

		/** A list of additional item specifications (if available). */
		specs?: Array<string>;

		/**
		 * The UPC code of the product.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upc?: number | null;
	}
	export interface GetProductInfoReturnProductFormProperties {

		/** The brand of the product (if available). */
		brand: FormControl<string | null | undefined>,

		/** The category of the product (if available). */
		category: FormControl<string | null | undefined>,

		/** A description of the product (if available). */
		description: FormControl<string | null | undefined>,

		/**
		 * The EAN code of the product.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ean: FormControl<number | null | undefined>,

		/** The URL for the product image. */
		imageUrl: FormControl<string | null | undefined>,

		/** The name of the product. */
		name: FormControl<string | null | undefined>,

		/** The region of the product. */
		region: FormControl<string | null | undefined>,

		/**
		 * The UPC code of the product.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upc: FormControl<number | null | undefined>,
	}
	export function CreateGetProductInfoReturnProductFormGroup() {
		return new FormGroup<GetProductInfoReturnProductFormProperties>({
			brand: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ean: new FormControl<number | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			upc: new FormControl<number | null | undefined>(undefined),
		});

	}

}

