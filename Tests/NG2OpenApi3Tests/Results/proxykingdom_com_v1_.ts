import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Continent {
		code?: string | null;
		name?: string | null;
	}
	export interface ContinentFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateContinentFormGroup() {
		return new FormGroup<ContinentFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Country {
		code?: string | null;
		name?: string | null;
	}
	export interface CountryFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Isp {
		id?: number | null;
		name?: string | null;
	}
	export interface IspFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateIspFormGroup() {
		return new FormGroup<IspFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Location {
		accuracyRadius?: number | null;
		cityName?: string | null;
		continent?: Continent;
		country?: Country;
		latitude?: number | null;
		longitude?: number | null;
		postalCode?: string | null;
		subdivisions?: Array<Subdivision>;
		timezone?: string | null;
	}
	export interface LocationFormProperties {
		accuracyRadius: FormControl<number | null | undefined>,
		cityName: FormControl<string | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			accuracyRadius: new FormControl<number | null | undefined>(undefined),
			cityName: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subdivision {
		code?: string | null;
		name?: string | null;
	}
	export interface SubdivisionFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSubdivisionFormGroup() {
		return new FormGroup<SubdivisionFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Proxy {
		accessType?: string | null;
		address?: string | null;
		isSsl?: boolean | null;
		isp?: Isp;
		lastTested?: string | null;
		location?: Location;
		port?: number | null;
		protocol?: string | null;
		timings?: Timings;
		uptime?: number | null;
	}
	export interface ProxyFormProperties {
		accessType: FormControl<string | null | undefined>,
		address: FormControl<string | null | undefined>,
		isSsl: FormControl<boolean | null | undefined>,
		lastTested: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		protocol: FormControl<string | null | undefined>,
		uptime: FormControl<number | null | undefined>,
	}
	export function CreateProxyFormGroup() {
		return new FormGroup<ProxyFormProperties>({
			accessType: new FormControl<string | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			isSsl: new FormControl<boolean | null | undefined>(undefined),
			lastTested: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			uptime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Timings {
		connectTime?: number | null;
		firstByteTime?: number | null;
		responseTime?: number | null;
	}
	export interface TimingsFormProperties {
		connectTime: FormControl<number | null | undefined>,
		firstByteTime: FormControl<number | null | undefined>,
		responseTime: FormControl<number | null | undefined>,
	}
	export function CreateTimingsFormGroup() {
		return new FormGroup<TimingsFormProperties>({
			connectTime: new FormControl<number | null | undefined>(undefined),
			firstByteTime: new FormControl<number | null | undefined>(undefined),
			responseTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a random proxy for chosen parameters.
		 * Get proxy
		 * @return {Proxy} Success
		 */
		ProxyGetByTokenAndAddressAndPortAndProtocolAndAccessTypeAndResponseTimeAndIsSslAndUptimeAndCountryAndContinentAndTimezoneAndLastTested(Token: string | null | undefined, Address: string | null | undefined, Port: string | null | undefined, Protocol: string | null | undefined, AccessType: string | null | undefined, ResponseTime: string | null | undefined, IsSsl: string | null | undefined, Uptime: string | null | undefined, Country: string | null | undefined, Continent: string | null | undefined, Timezone: string | null | undefined, LastTested: string | null | undefined): Observable<Proxy> {
			return this.http.get<Proxy>(this.baseUri + 'proxy?Token=' + (Token == null ? '' : encodeURIComponent(Token)) + '&Address=' + (Address == null ? '' : encodeURIComponent(Address)) + '&Port=' + (Port == null ? '' : encodeURIComponent(Port)) + '&Protocol=' + (Protocol == null ? '' : encodeURIComponent(Protocol)) + '&AccessType=' + (AccessType == null ? '' : encodeURIComponent(AccessType)) + '&ResponseTime=' + (ResponseTime == null ? '' : encodeURIComponent(ResponseTime)) + '&IsSsl=' + (IsSsl == null ? '' : encodeURIComponent(IsSsl)) + '&Uptime=' + (Uptime == null ? '' : encodeURIComponent(Uptime)) + '&Country=' + (Country == null ? '' : encodeURIComponent(Country)) + '&Continent=' + (Continent == null ? '' : encodeURIComponent(Continent)) + '&Timezone=' + (Timezone == null ? '' : encodeURIComponent(Timezone)) + '&LastTested=' + (LastTested == null ? '' : encodeURIComponent(LastTested)), {});
		}
	}

}

