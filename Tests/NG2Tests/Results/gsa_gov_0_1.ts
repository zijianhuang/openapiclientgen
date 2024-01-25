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
		 * This endpoint returns contract history from FPDS for a specific vendor
		 * <p>This endpoint returns contract history from FPDS for a specific vendor. The vendor's DUNS number is a required parameter. You can also filter contracts by their NAICS code to find contracts relevant to a particular category.</p>
		 * Get api/contracts/
		 * @param {string} duns A 9-digit DUNS number that uniquely identifies a vendor (required).
		 * @param {string} naics a six digit NAICS code used to filter by contracts with a certain NAICS
		 * @param {string} sort a field to sort on. Choices are date, status, agency, and amount
		 * @param {string} direction The sort direction of the results. Choices are asc or desc.
		 * @param {string} page the page to start on. Results are paginated in increments of 100. Begins at page=1.
		 * @return {void} No response was specified
		 */
		List_Contracts_GET(duns: string, naics: string | null | undefined, sort: string | null | undefined, direction: string | null | undefined, page: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/contracts/?duns=' + (duns == null ? '' : encodeURIComponent(duns)) + '&naics=' + (naics == null ? '' : encodeURIComponent(naics)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&direction=' + (direction == null ? '' : encodeURIComponent(direction)) + '&page=' + (page == null ? '' : encodeURIComponent(page)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This endpoint returns metadata for the most recent data loads of SAM and FPDS data
		 * <p>This endpoint returns metadata for the most recent data loads of SAM and FPDS data. It takes no parameters.</p>
		 * Get api/metadata/
		 * @return {void} No response was specified
		 */
		Metadata_GET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/metadata/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * This endpoint lists all of the NAICS codes that are relevant to the OASIS family of vehicles
		 * <p>This endpoint lists all of the NAICS codes that are relevant to the OASIS family of vehicles. It takes no parameters.</p>
		 * Get api/naics/
		 * @return {void} No response was specified
		 */
		List_Naics_GET(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/naics/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * This endpoint returns a single vendor by their 9 digit DUNS number
		 * <p>This endpoint returns a single vendor by their 9 digit DUNS number. DUNS numbers can be looked up in the <a href="https://www.sam.gov">System for Award Management</a> by vendor name.</p>
		 * Get api/vendor/{duns}
		 * @param {string} duns a nine digit DUNS number that uniquely identifies the vendor (required)
		 * @return {void} No response was specified
		 */
		Get_Vendor_GET(duns: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/vendor/' + (duns == null ? '' : encodeURIComponent(duns)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * This endpoint returns a list of vendors filtered by a NAICS code
		 * <p>This endpoint returns a list of vendors filtered by a NAICS code. The NAICS code maps to an OASIS pool and is used to retrieve vendors in that pool only.</p>
		 * <p>OASIS pools are groupings of NAICS codes that have the same small business size standard. Because contracts solicited to OASIS vendors can only be issued to one pool, much of the data is presented as part of a pool grouping. Using the NAICS code is a shortcut, so that you don't have to explicitly map the NAICS code to a pool in OASIS yourself.</p>
		 * <p>Vendors can also be filtered by a particular setaside. Valid values for the setasides are two-character codes which include:</p>
		 * <ul>
		 * <li>A6 (8(a))</li>
		 * <li>XX (Hubzone)</li>
		 * <li>QF (service disabled veteran owned)</li>
		 * <li>A2 (women owned)</li>
		 * <li>A5 (veteran owned)</li>
		 * <li>27 (small disadvantaged business).</li>
		 * </ul>
		 * Get api/vendors/
		 * @param {string} naics a six digit NAICS code (required)
		 * @param {Array<string>} setasides a comma delimited list of two character setaside codes to filter by.  Ex. setasides=A6,A5  will filter by 8a and veteran owned business.
		 * @param {string} vehicle Choices are either oasis or oasissb. Will filter vendors by their presence in either the OASIS unrestricted vehicle or the OASIS Small Business vehicle.
		 * @return {void} No response was specified
		 */
		List_Vendors_GET(naics: string, setasides: Array<string> | null | undefined, vehicle: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/vendors/?naics=' + (naics == null ? '' : encodeURIComponent(naics)) + '&' + setasides?.map(z => `setasides=${encodeURIComponent(z)}`).join('&') + '&vehicle=' + (vehicle == null ? '' : encodeURIComponent(vehicle)), { observe: 'response', responseType: 'text' });
		}
	}

}

