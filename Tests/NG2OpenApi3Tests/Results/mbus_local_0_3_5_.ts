import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Baudrate to use for the communication - valid values 300, 600, 1200, 2400, 4800, 9600 */
	export enum Baudrate { _300 = 0, _600 = 1, _1200 = 2, _2400 = 3, _4800 = 4, _9600 = 5 }


	/** Raspberry Pi Hat Information */
	export interface Hat {

		/** Product */
		product?: string | null;

		/** Product ID */
		productId?: string | null;

		/** Product Version */
		productVer?: string | null;

		/** Hat UUID */
		uuid?: string | null;

		/** Hat Vendor */
		vendor?: string | null;
	}

	/** Raspberry Pi Hat Information */
	export interface HatFormProperties {

		/** Product */
		product: FormControl<string | null | undefined>,

		/** Product ID */
		productId: FormControl<string | null | undefined>,

		/** Product Version */
		productVer: FormControl<string | null | undefined>,

		/** Hat UUID */
		uuid: FormControl<string | null | undefined>,

		/** Hat Vendor */
		vendor: FormControl<string | null | undefined>,
	}
	export function CreateHatFormGroup() {
		return new FormGroup<HatFormProperties>({
			product: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productVer: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
			vendor: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns this API specification
		 * Get mbus/api
		 * @return {void} OK
		 */
		Mbus_api(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mbus/api', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets data from the slave identified by {address}
		 * Post mbus/get/{device}/{baudrate}/{address}
		 * @param {string} device The serial device to scan - /dev/ is pre-pended to {device} by M-Bus HTTPD before scanning
		 * @param {Baudrate} baudrate Baudrate to communicate with M-Bus devices
		 * @param {string} address The slave device to get data from
		 * @return {void} OK
		 */
		Get(device: string, baudrate: Baudrate, address: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mbus/get/' + (device == null ? '' : encodeURIComponent(device)) + '/' + baudrate + '/' + (address == null ? '' : encodeURIComponent(address)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets data from the slave identified by {address}, and supports multiple responses from the slave
		 * Post mbus/getMulti/{device}/{baudrate}/{address}/{maxframes}
		 * @param {string} device The serial device to scan - /dev/ is pre-pended to {device} by M-Bus HTTPD before scanning
		 * @param {Baudrate} baudrate Baudrate to communicate with M-Bus devices
		 * @param {string} address The slave device to get data from
		 * @param {number} maxframes The slave device to get data from
		 * @return {void} OK
		 */
		GetMulti(device: string, baudrate: Baudrate, address: string, maxframes: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mbus/getMulti/' + (device == null ? '' : encodeURIComponent(device)) + '/' + baudrate + '/' + (address == null ? '' : encodeURIComponent(address)) + '/' + maxframes, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets Raspberry Pi Hat information
		 * Get mbus/hat
		 * @return {Hat} OK
		 */
		Hat(): Observable<Hat> {
			return this.http.get<Hat>(this.baseUri + 'mbus/hat', {});
		}

		/**
		 * Turns off power to the M-Bus
		 * Post mbus/hat/off
		 * @return {void} OK
		 */
		HatOff(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mbus/hat/off', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Turns on power to the M-Bus
		 * Post mbus/hat/on
		 * @return {void} OK
		 */
		HatOn(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mbus/hat/on', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Scan the specified device for slaves
		 * Post mbus/scan/{device}/{baudrate}
		 * @param {string} device The serial device to scan - /dev/ is pre-pended to {device} by M-Bus HTTPD before scanning
		 * @param {Baudrate} baudrate Baudrate to communicate with M-Bus devices
		 * @return {string} OK
		 */
		Scan(device: string, baudrate: Baudrate): Observable<string> {
			return this.http.post(this.baseUri + 'mbus/scan/' + (device == null ? '' : encodeURIComponent(device)) + '/' + baudrate, null, { responseType: 'text' });
		}
	}

}

