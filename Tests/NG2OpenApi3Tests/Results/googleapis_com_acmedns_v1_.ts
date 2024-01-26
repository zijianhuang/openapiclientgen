import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The up-to-date ACME challenge set on a domain for an RPC. This contains all of the ACME TXT records that exist on the domain. */
	export interface AcmeChallengeSet {

		/** The ACME challenges on the requested domain represented as individual TXT records. */
		record?: Array<AcmeTxtRecord>;
	}

	/** The up-to-date ACME challenge set on a domain for an RPC. This contains all of the ACME TXT records that exist on the domain. */
	export interface AcmeChallengeSetFormProperties {
	}
	export function CreateAcmeChallengeSetFormGroup() {
		return new FormGroup<AcmeChallengeSetFormProperties>({
		});

	}


	/** The TXT record message that represents an ACME DNS-01 challenge. */
	export interface AcmeTxtRecord {

		/** Holds the ACME challenge data put in the TXT record. This will be checked to be a valid TXT record data entry. */
		digest?: string | null;

		/** The domain/subdomain for the record. In a request, this MAY be Unicode or Punycode. In a response, this will be in Unicode. The fqdn MUST contain the root_domain field on the request. */
		fqdn?: string | null;

		/** Output only. The time when this record was last updated. This will be in UTC time. */
		updateTime?: string | null;
	}

	/** The TXT record message that represents an ACME DNS-01 challenge. */
	export interface AcmeTxtRecordFormProperties {

		/** Holds the ACME challenge data put in the TXT record. This will be checked to be a valid TXT record data entry. */
		digest: FormControl<string | null | undefined>,

		/** The domain/subdomain for the record. In a request, this MAY be Unicode or Punycode. In a response, this will be in Unicode. The fqdn MUST contain the root_domain field on the request. */
		fqdn: FormControl<string | null | undefined>,

		/** Output only. The time when this record was last updated. This will be in UTC time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAcmeTxtRecordFormGroup() {
		return new FormGroup<AcmeTxtRecordFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for the RotateChallenges RPC. Requires an access token, a root domain, and either records_to_add or records_to_remove to be populated. Records may be set for multiple subdomains at once to support SAN requests for multiple subdomains in a single domain. By default, ACME TXT record challenges that are older than 30 days will be removed. Set `keep_expired_records` to false if this behavior is undesired. There is a record maximum of 100 records per domain including expired records. Any request sent that would exceed this maximum will result in a FAILED_PRECONDITION error. NEXT ID: 6 */
	export interface RotateChallengesRequest {

		/** Required. ACME DNS access token. This is a base64 token secret that is procured from the Google Domains website. It authorizes ACME TXT record updates for a domain. */
		accessToken?: string | null;

		/** Keep records older than 30 days that were used for previous requests. */
		keepExpiredRecords?: boolean | null;

		/** ACME TXT record challenges to add. Supports multiple challenges on the same FQDN. */
		recordsToAdd?: Array<AcmeTxtRecord>;

		/** ACME TXT record challenges to remove. */
		recordsToRemove?: Array<AcmeTxtRecord>;
	}

	/** The request message for the RotateChallenges RPC. Requires an access token, a root domain, and either records_to_add or records_to_remove to be populated. Records may be set for multiple subdomains at once to support SAN requests for multiple subdomains in a single domain. By default, ACME TXT record challenges that are older than 30 days will be removed. Set `keep_expired_records` to false if this behavior is undesired. There is a record maximum of 100 records per domain including expired records. Any request sent that would exceed this maximum will result in a FAILED_PRECONDITION error. NEXT ID: 6 */
	export interface RotateChallengesRequestFormProperties {

		/** Required. ACME DNS access token. This is a base64 token secret that is procured from the Google Domains website. It authorizes ACME TXT record updates for a domain. */
		accessToken: FormControl<string | null | undefined>,

		/** Keep records older than 30 days that were used for previous requests. */
		keepExpiredRecords: FormControl<boolean | null | undefined>,
	}
	export function CreateRotateChallengesRequestFormGroup() {
		return new FormGroup<RotateChallengesRequestFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			keepExpiredRecords: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.
		 * Get v1/acmeChallengeSets/{rootDomain}
		 * @param {string} rootDomain Required. SLD + TLD domain name to list challenges. For example, this would be "google.com" for any FQDN under "google.com". That includes challenges for "subdomain.google.com". This MAY be Unicode or Punycode.
		 * @return {AcmeChallengeSet} Successful response
		 */
		Acmedns_acmeChallengeSets_get(rootDomain: string): Observable<AcmeChallengeSet> {
			return this.http.get<AcmeChallengeSet>(this.baseUri + 'v1/acmeChallengeSets/' + (rootDomain == null ? '' : encodeURIComponent(rootDomain)), {});
		}

		/**
		 * Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.
		 * Post v1/acmeChallengeSets/{rootDomain}:rotateChallenges
		 * @param {string} rootDomain Required. SLD + TLD domain name to update records for. For example, this would be "google.com" for any FQDN under "google.com". That includes challenges for "subdomain.google.com". This MAY be Unicode or Punycode.
		 * @return {AcmeChallengeSet} Successful response
		 */
		Acmedns_acmeChallengeSets_rotateChallenges(rootDomain: string, requestBody: RotateChallengesRequest): Observable<AcmeChallengeSet> {
			return this.http.post<AcmeChallengeSet>(this.baseUri + 'v1/acmeChallengeSets/' + (rootDomain == null ? '' : encodeURIComponent(rootDomain)) + ':rotateChallenges', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

