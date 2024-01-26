import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the supported barcode types for the decoding process.
		 * Get barcode/decode/types
		 * @return {void} 200  response
		 */
		BarcodeDecodeTypesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'barcode/decode/types', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Bar Code image for the given barcode number
		 * Get barcode/encode
		 * @param {string} number Barcode number
		 * @param {string} barcodeformat Barcode format default C39. Valid values are the keys to those returned from /barcode/encode/types.
		 * @param {string} outputformat Output image format. Must be one of png/html/jpg/svg
		 * @param {string} widthfactor Width factor of the image
		 * @param {string} totalheight Total height of the image
		 * @return {void} 200  response
		 */
		BarcodeEncodeGetByNumberAndBarcodeformatAndOutputformatAndWidthfactorAndTotalheight(number: string, barcodeformat: string | null | undefined, outputformat: string | null | undefined, widthfactor: string | null | undefined, totalheight: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'barcode/encode?number=' + (number == null ? '' : encodeURIComponent(number)) + '&barcodeformat=' + (barcodeformat == null ? '' : encodeURIComponent(barcodeformat)) + '&outputformat=' + (outputformat == null ? '' : encodeURIComponent(outputformat)) + '&widthfactor=' + (widthfactor == null ? '' : encodeURIComponent(widthfactor)) + '&totalheight=' + (totalheight == null ? '' : encodeURIComponent(totalheight)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the supported barcode types for encoding / image generation.
		 * Get barcode/encode/types
		 * @return {void} 200  response
		 */
		BarcodeEncodeTypesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'barcode/encode/types', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

