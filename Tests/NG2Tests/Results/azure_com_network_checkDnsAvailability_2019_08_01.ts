import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response for the CheckDnsNameAvailability API service call. */
	export interface DnsNameAvailabilityResult {

		/** Domain availability (True/False). */
		available?: boolean | null;
	}

	/** Response for the CheckDnsNameAvailability API service call. */
	export interface DnsNameAvailabilityResultFormProperties {

		/** Domain availability (True/False). */
		available: FormControl<boolean | null | undefined>,
	}
	export function CreateDnsNameAvailabilityResultFormGroup() {
		return new FormGroup<DnsNameAvailabilityResultFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Checks whether a domain name in the cloudapp.azure.com zone is available for use.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/CheckDnsNameAvailability
		 * @param {string} location The location of the domain name.
		 * @param {string} domainNameLabel The domain name to be verified. It must conform to the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {DnsNameAvailabilityResult} Request successful. Returns whether the DNS name is available.
		 */
		CheckDnsNameAvailability(location: string, domainNameLabel: string, api_version: string, subscriptionId: string): Observable<DnsNameAvailabilityResult> {
			return this.http.get<DnsNameAvailabilityResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/CheckDnsNameAvailability&domainNameLabel=' + (domainNameLabel == null ? '' : encodeURIComponent(domainNameLabel)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

