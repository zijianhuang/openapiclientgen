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
		 * Generate a chart (GET)
		 * Generate a chart based on the provided parameters.
		 * Get chart
		 * @param {string} chart The chart configuration in Chart.js format (JSON or Javascript).
		 * @param {number} width The width of the chart in pixels.
		 * @param {number} height The height of the chart in pixels.
		 * @param {string} format The output format of the chart, 'png', 'jpg', 'svg', or 'webp'.
		 * @param {string} backgroundColor The background color of the chart.
		 * @return {void} A generated chart image.
		 */
		ChartGetByChartAndWidthAndHeightAndFormatAndBackgroundColor(chart: string | null | undefined, width: number | null | undefined, height: number | null | undefined, format: string | null | undefined, backgroundColor: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'chart?chart=' + (chart == null ? '' : encodeURIComponent(chart)) + '&width=' + width + '&height=' + height + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&backgroundColor=' + (backgroundColor == null ? '' : encodeURIComponent(backgroundColor)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a chart (POST)
		 * Generate a chart based on the provided configuration in the request body.
		 * Post chart
		 * @return {void} A generated chart image.
		 */
		ChartPost(requestBody: ChartPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'chart', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a QR code (GET)
		 * Generate a QR code based on the provided parameters.
		 * Get qr
		 * @param {string} text The text to be encoded in the QR code.
		 * @param {number} width The width of the QR code in pixels.
		 * @param {number} height The height of the QR code in pixels.
		 * @param {string} format The output format of the QR code, e.g., 'png' or 'svg'.
		 * @param {number} margin The margin around the QR code in pixels.
		 * @return {void} A generated QR code image.
		 */
		QrGetByTextAndWidthAndHeightAndFormatAndMargin(text: string | null | undefined, width: number | null | undefined, height: number | null | undefined, format: string | null | undefined, margin: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'qr?text=' + (text == null ? '' : encodeURIComponent(text)) + '&width=' + width + '&height=' + height + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&margin=' + margin, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a QR code (POST)
		 * Generate a QR code based on the provided configuration in the request body.
		 * Post qr
		 * @return {void} A generated QR code image.
		 */
		QrPost(requestBody: QrPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'qr', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	export interface ChartPostPostBody {

		/** The background color of the chart. */
		backgroundColor?: string | null;

		/** The chart configuration in Chart.js format (JSON or Javascript). */
		chart?: string | null;

		/** The output format of the chart, 'png', 'jpg', 'svg', or 'webp'. */
		format?: string | null;

		/** The height of the chart in pixels. */
		height?: number | null;

		/** The width of the chart in pixels. */
		width?: number | null;
	}
	export interface ChartPostPostBodyFormProperties {

		/** The background color of the chart. */
		backgroundColor: FormControl<string | null | undefined>,

		/** The chart configuration in Chart.js format (JSON or Javascript). */
		chart: FormControl<string | null | undefined>,

		/** The output format of the chart, 'png', 'jpg', 'svg', or 'webp'. */
		format: FormControl<string | null | undefined>,

		/** The height of the chart in pixels. */
		height: FormControl<number | null | undefined>,

		/** The width of the chart in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateChartPostPostBodyFormGroup() {
		return new FormGroup<ChartPostPostBodyFormProperties>({
			backgroundColor: new FormControl<string | null | undefined>(undefined),
			chart: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QrPostPostBody {

		/** The output format of the QR code, e.g., 'png' or 'svg'. */
		format?: string | null;

		/** The height of the QR code in pixels. */
		height?: number | null;

		/** The margin around the QR code in pixels. */
		margin?: number | null;

		/** The text to be encoded in the QR code. */
		text?: string | null;

		/** The width of the QR code in pixels. */
		width?: number | null;
	}
	export interface QrPostPostBodyFormProperties {

		/** The output format of the QR code, e.g., 'png' or 'svg'. */
		format: FormControl<string | null | undefined>,

		/** The height of the QR code in pixels. */
		height: FormControl<number | null | undefined>,

		/** The margin around the QR code in pixels. */
		margin: FormControl<number | null | undefined>,

		/** The text to be encoded in the QR code. */
		text: FormControl<string | null | undefined>,

		/** The width of the QR code in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateQrPostPostBodyFormGroup() {
		return new FormGroup<QrPostPostBodyFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			margin: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

}

