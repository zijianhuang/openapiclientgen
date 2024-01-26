import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Inline_response_200 {
		city?: string | null;
		city_geoname_id?: number | null;
		connection?: Inline_response_200Connection;
		continent?: string | null;
		continent_code?: string | null;
		continent_geoname_id?: number | null;
		country?: string | null;
		country_code?: string | null;
		country_geoname_id?: number | null;
		country_is_eu?: boolean | null;
		currency?: Inline_response_200Currency;
		flag?: Inline_response_200Flag;
		ip_address?: string | null;
		latitude?: number | null;
		longitude?: number | null;
		postal_code?: string | null;
		region?: string | null;
		region_geoname_id?: number | null;
		region_iso_code?: string | null;
		security?: Inline_response_200Security;
		timezone?: Inline_response_200Timezone;
	}
	export interface Inline_response_200FormProperties {
		city: FormControl<string | null | undefined>,
		city_geoname_id: FormControl<number | null | undefined>,
		continent: FormControl<string | null | undefined>,
		continent_code: FormControl<string | null | undefined>,
		continent_geoname_id: FormControl<number | null | undefined>,
		country: FormControl<string | null | undefined>,
		country_code: FormControl<string | null | undefined>,
		country_geoname_id: FormControl<number | null | undefined>,
		country_is_eu: FormControl<boolean | null | undefined>,
		ip_address: FormControl<string | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
		postal_code: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		region_geoname_id: FormControl<number | null | undefined>,
		region_iso_code: FormControl<string | null | undefined>,
	}
	export function CreateInline_response_200FormGroup() {
		return new FormGroup<Inline_response_200FormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			city_geoname_id: new FormControl<number | null | undefined>(undefined),
			continent: new FormControl<string | null | undefined>(undefined),
			continent_code: new FormControl<string | null | undefined>(undefined),
			continent_geoname_id: new FormControl<number | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			country_geoname_id: new FormControl<number | null | undefined>(undefined),
			country_is_eu: new FormControl<boolean | null | undefined>(undefined),
			ip_address: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			postal_code: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			region_geoname_id: new FormControl<number | null | undefined>(undefined),
			region_iso_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Inline_response_200Connection {
		autonomous_system_number?: number | null;
		autonomous_system_organization?: string | null;
		connection_type?: string | null;
		isp_name?: string | null;
		organization_name?: string | null;
	}
	export interface Inline_response_200ConnectionFormProperties {
		autonomous_system_number: FormControl<number | null | undefined>,
		autonomous_system_organization: FormControl<string | null | undefined>,
		connection_type: FormControl<string | null | undefined>,
		isp_name: FormControl<string | null | undefined>,
		organization_name: FormControl<string | null | undefined>,
	}
	export function CreateInline_response_200ConnectionFormGroup() {
		return new FormGroup<Inline_response_200ConnectionFormProperties>({
			autonomous_system_number: new FormControl<number | null | undefined>(undefined),
			autonomous_system_organization: new FormControl<string | null | undefined>(undefined),
			connection_type: new FormControl<string | null | undefined>(undefined),
			isp_name: new FormControl<string | null | undefined>(undefined),
			organization_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Inline_response_200Currency {
		currency_code?: string | null;
		currency_name?: string | null;
	}
	export interface Inline_response_200CurrencyFormProperties {
		currency_code: FormControl<string | null | undefined>,
		currency_name: FormControl<string | null | undefined>,
	}
	export function CreateInline_response_200CurrencyFormGroup() {
		return new FormGroup<Inline_response_200CurrencyFormProperties>({
			currency_code: new FormControl<string | null | undefined>(undefined),
			currency_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Inline_response_200Flag {
		emoji?: string | null;
		png?: string | null;
		svg?: string | null;
		unicode?: string | null;
	}
	export interface Inline_response_200FlagFormProperties {
		emoji: FormControl<string | null | undefined>,
		png: FormControl<string | null | undefined>,
		svg: FormControl<string | null | undefined>,
		unicode: FormControl<string | null | undefined>,
	}
	export function CreateInline_response_200FlagFormGroup() {
		return new FormGroup<Inline_response_200FlagFormProperties>({
			emoji: new FormControl<string | null | undefined>(undefined),
			png: new FormControl<string | null | undefined>(undefined),
			svg: new FormControl<string | null | undefined>(undefined),
			unicode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Inline_response_200Security {
		is_vpn?: boolean | null;
	}
	export interface Inline_response_200SecurityFormProperties {
		is_vpn: FormControl<boolean | null | undefined>,
	}
	export function CreateInline_response_200SecurityFormGroup() {
		return new FormGroup<Inline_response_200SecurityFormProperties>({
			is_vpn: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Inline_response_200Timezone {
		abbreviation?: string | null;
		current_time?: string | null;
		gmt_offset?: number | null;
		is_dst?: boolean | null;
		name?: string | null;
	}
	export interface Inline_response_200TimezoneFormProperties {
		abbreviation: FormControl<string | null | undefined>,
		current_time: FormControl<string | null | undefined>,
		gmt_offset: FormControl<number | null | undefined>,
		is_dst: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateInline_response_200TimezoneFormGroup() {
		return new FormGroup<Inline_response_200TimezoneFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			current_time: new FormControl<string | null | undefined>(undefined),
			gmt_offset: new FormControl<number | null | undefined>(undefined),
			is_dst: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve the location of an IP address
		 * Get v1/
		 * @return {Inline_response_200} Location of geolocated IP
		 */
		V1GetByApi_keyAndIp_addressAndFields(api_key: string, ip_address: string | null | undefined, fields: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Inline_response_200> {
			return this.http.get<Inline_response_200>(this.baseUri + 'v1/?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&ip_address=' + (ip_address == null ? '' : encodeURIComponent(ip_address)) + '&fields=' + (fields == null ? '' : encodeURIComponent(fields)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

