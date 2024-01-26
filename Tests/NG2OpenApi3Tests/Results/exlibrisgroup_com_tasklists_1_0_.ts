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
		 * Retrieve Printouts
		 * This API returns a list of Printouts.
		 * Get almaws/v1/task-lists/printouts
		 * @param {string} letter Printout Name. Optional. 
		 * @param {string} status Printout status. Optional. Valid values are: Printed, Pending, Canceled.
		 * @param {string} printer_id Printout Printer
		 * @param {string} printout_id A list of Printout IDs (for example: 123,456,778) from 1 to the limit of 100 Optional. Use of this option overrides all of the filtering parameters
		 * @param {number} limit Limits the number of results. Optional. Valid values are 0-100. Default value: 10.
		 * @param {number} offset Offset of the results returned. Optional. Default value: 0, which means that the first results will be returned.
		 * @return {GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturn} OK - This method returns an object based on rest_printouts.xsd. See [here](/alma/apis/docs/xsd/rest_printouts.xsd)
		 */
		GetSlashalmawsSlashv1Slashtask_listsSlashprintouts(letter: string | null | undefined, status: string | null | undefined, printer_id: string | null | undefined, printout_id: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturn> {
			return this.http.get<GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturn>(this.baseUri + 'almaws/v1/task-lists/printouts?letter=' + (letter == null ? '' : encodeURIComponent(letter)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&printer_id=' + (printer_id == null ? '' : encodeURIComponent(printer_id)) + '&printout_id=' + (printout_id == null ? '' : encodeURIComponent(printout_id)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Act on Printouts
		 * This API performs an action on printouts: mark as printed or canceled. 10,000 records can be handled in one requests. Only printouts which were updated will be returned.
		 * Post almaws/v1/task-lists/printouts
		 * @param {string} letter Printout Name. Optional. 
		 * @param {string} status Printout status. Optional. Valid values are: Printed, Pending, Canceled.
		 * @param {string} printer_id Printout Printer
		 * @param {string} printout_id A list of Printout IDs (for example: 123,456,778) from 1 to the limit of 100 Optional. Use of this option overrides all of the filtering parameters
		 * @param {string} op The operation to perform on the printout. Currently, the options are: 'mark_as_printed','mark_as_canceled'
		 * @return {void} OK - This method returns an object based on rest_printouts.xsd. See [here](/alma/apis/docs/xsd/rest_printouts.xsd)
		 */
		PostSlashalmawsSlashv1Slashtask_listsSlashprintouts(letter: string | null | undefined, status: string | null | undefined, printer_id: string | null | undefined, printout_id: string | null | undefined, op: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'almaws/v1/task-lists/printouts?letter=' + (letter == null ? '' : encodeURIComponent(letter)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&printer_id=' + (printer_id == null ? '' : encodeURIComponent(printer_id)) + '&printout_id=' + (printout_id == null ? '' : encodeURIComponent(printout_id)) + '&op=' + (op == null ? '' : encodeURIComponent(op)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a Printout
		 * This Web service returns a Printout given a Printout ID.
		 * Get almaws/v1/task-lists/printouts/{printout_id}
		 * @param {string} printout_id The Printout ID
		 * @return {void} OK - This method returns an object based on rest_printout.xsd. See [here](/alma/apis/docs/xsd/rest_printout.xsd)
		 */
		GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsSlashprintout_id(printout_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'almaws/v1/task-lists/printouts/' + (printout_id == null ? '' : encodeURIComponent(printout_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Printout Service
		 * This API operates on an printout. given a Printout ID.
		 * Post almaws/v1/task-lists/printouts/{printout_id}
		 * @param {string} printout_id The Printout ID
		 * @param {string} op The operation to perform on the printout. Currently, the options are 'mark_as_printed','mark_as_canceled'
		 * @return {void} OK - This method returns an object based on rest_printout.xsd. See [here](/alma/apis/docs/xsd/rest_printout.xsd)
		 */
		PostSlashalmawsSlashv1Slashtask_listsSlashprintoutsSlashprintout_id(printout_id: string, op: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'almaws/v1/task-lists/printouts/' + (printout_id == null ? '' : encodeURIComponent(printout_id)) + '&op=' + (op == null ? '' : encodeURIComponent(op)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Requested Resources
		 * This API returns a list of requested resources to be picked from the shelf in Alma
		 * Get almaws/v1/task-lists/requested-resources
		 * @param {string} library The library of the given circulation desk or department where the resources are located. Mandatory.
		 * @param {string} circ_desk The circulation desk where the action is being performed. Mandatory.
		 * @param {string} location The location code. Optional.
		 * @param {string} order_by The order in which to retrieve the results: location/call_number (default).
		 * @param {string} direction The order direction in which to retrieve the results. Optional.
		 * @param {string} pickup_inst The pickup institution. Optional.
		 * @param {string} reported Show reported results: Y/N. Optional.
		 * @param {string} printed Show printed results: Y/N. Optional.
		 * @param {number} limit Limits the number of results. Optional. Valid values are 0-100. Default value: 10.
		 * @param {number} offset Offset of the results returned. Optional. Default value: 0, which means that the first results will be returned.
		 * @return {GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturn} OK - This method returns an object based on rest_requested_resources.xsd. See [here](/alma/apis/docs/xsd/rest_requested_resources.xsd)
		 */
		GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resources(library: string, circ_desk: string, location: string | null | undefined, order_by: string | null | undefined, direction: string | null | undefined, pickup_inst: string | null | undefined, reported: string | null | undefined, printed: string | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturn> {
			return this.http.get<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturn>(this.baseUri + 'almaws/v1/task-lists/requested-resources?library=' + (library == null ? '' : encodeURIComponent(library)) + '&circ_desk=' + (circ_desk == null ? '' : encodeURIComponent(circ_desk)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&order_by=' + (order_by == null ? '' : encodeURIComponent(order_by)) + '&direction=' + (direction == null ? '' : encodeURIComponent(direction)) + '&pickup_inst=' + (pickup_inst == null ? '' : encodeURIComponent(pickup_inst)) + '&reported=' + (reported == null ? '' : encodeURIComponent(reported)) + '&printed=' + (printed == null ? '' : encodeURIComponent(printed)) + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Act on Requested Resources
		 * This API performs an action on requested resources that are on the shelf in Alma
		 * Post almaws/v1/task-lists/requested-resources
		 * @param {string} library The library of the given circulation desk or department where the resources are located. Mandatory.
		 * @param {string} circ_desk The circulation desk where the action is being performed. Mandatory.
		 * @param {string} op Operation to be preformed on the list of given requests. Currently the only supported action is 'mark_reported'. Mandatory.
		 * @param {string} location The location code. Optional.
		 * @param {string} pickup_inst The pickup institution. Optional.
		 * @param {string} reported Show reported results: Y/N. Optional.
		 * @param {string} printed Show printed results: Y/N. Optional.
		 * @return {void} OK - This method returns an object based on rest_requested_resources.xsd. See [here](/alma/apis/docs/xsd/rest_requested_resources.xsd)
		 */
		PostSlashalmawsSlashv1Slashtask_listsSlashrequested_resources(library: string | null | undefined, circ_desk: string | null | undefined, op: string | null | undefined, location: string | null | undefined, pickup_inst: string | null | undefined, reported: string | null | undefined, printed: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'almaws/v1/task-lists/requested-resources?library=' + (library == null ? '' : encodeURIComponent(library)) + '&circ_desk=' + (circ_desk == null ? '' : encodeURIComponent(circ_desk)) + '&op=' + (op == null ? '' : encodeURIComponent(op)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&pickup_inst=' + (pickup_inst == null ? '' : encodeURIComponent(pickup_inst)) + '&reported=' + (reported == null ? '' : encodeURIComponent(reported)) + '&printed=' + (printed == null ? '' : encodeURIComponent(printed)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Lending Requests
		 * This API returns a list of lending requests in Alma
		 * Get almaws/v1/task-lists/rs/lending-requests
		 * @param {string} library The resource sharing library for which lending requests should be retrieved. Mandatory. List of possible libraries can be retrieved using the [GET /almaws/v1/conf/libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
		 * @param {string} status The status of lending requests to retrieve. Optional. List of possible statuses can be retrieved using the [GET almaws/v1/conf/code-tables/MandatoryLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed) and the  [GET almaws/v1/conf/code-tables/OptionalLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
		 * @param {string} printed The 'printed' value of lending requests to retrieve. Optional. Possible values: Y, N.
		 * @param {string} reported The 'reported' value of lending requests to retrieve. Optional. Possible values: Y, N.
		 * @param {string} partner The partner value. Only lending requests from this partner should be retrieved. Optional. List of possible partners can be retrieved using the [GET almaws/v1/partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07).
		 * @param {string} requested_format Requested format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
		 * @param {string} supplied_format Supplied Format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
		 * @return {GetSlashalmawsSlashv1Slashtask_listsSlashrsSlashlending_requestsReturn} OK - This method returns an object based on rest_user_resource_sharing_requests.xsd. See [here](/alma/apis/docs/xsd/rest_user_resource_sharing_requests.xsd)
		 */
		GetSlashalmawsSlashv1Slashtask_listsSlashrsSlashlending_requests(library: string | null | undefined, status: string | null | undefined, printed: string | null | undefined, reported: string | null | undefined, partner: string | null | undefined, requested_format: string | null | undefined, supplied_format: string | null | undefined): Observable<GetSlashalmawsSlashv1Slashtask_listsSlashrsSlashlending_requestsReturn> {
			return this.http.get<GetSlashalmawsSlashv1Slashtask_listsSlashrsSlashlending_requestsReturn>(this.baseUri + 'almaws/v1/task-lists/rs/lending-requests?library=' + (library == null ? '' : encodeURIComponent(library)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&printed=' + (printed == null ? '' : encodeURIComponent(printed)) + '&reported=' + (reported == null ? '' : encodeURIComponent(reported)) + '&partner=' + (partner == null ? '' : encodeURIComponent(partner)) + '&requested_format=' + (requested_format == null ? '' : encodeURIComponent(requested_format)) + '&supplied_format=' + (supplied_format == null ? '' : encodeURIComponent(supplied_format)), {});
		}

		/**
		 * Act on Lending Requests
		 * This API preforms the requested action on a list (specified by given filters) of lending requests in Alma
		 * Post almaws/v1/task-lists/rs/lending-requests
		 * @param {string} library The resource sharing library from which lending requests should be retrieved. Mandatory. List of possible libraries can be retrieved using the [GET /almaws/v1/conf/libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
		 * @param {string} op Operation to be preformed on the list of given requests. Currently the only supported action is 'mark_reported'. Mandatory.
		 * @param {string} status The status of lending requests to retrieve. Optional. List of possible statuses can be retrieved using the [GET almaws/v1/conf/code-tables/MandatoryLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).and the  [GET almaws/v1/conf/code-tables/OptionalLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
		 * @param {string} printed The 'printed' value of lending requests to retrieve. Optional. Possible values: Y, N.
		 * @param {string} reported The 'reported' value of lending requests to retrieve. Optional. Possible values: Y, N.
		 * @param {string} partner The partner value. Only lending requests from this partner should be. Optional. List of possible partners can be retrieved using the [GET almaws/v1/partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07).
		 * @param {string} requested_format Requested format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
		 * @param {string} supplied_format Supplied Format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
		 * @return {void} OK - This method returns an object based on rest_user_resource_sharing_request.xsd. See [here](/alma/apis/docs/xsd/rest_user_resource_sharing_request.xsd)
		 */
		PostSlashalmawsSlashv1Slashtask_listsSlashrsSlashlending_requests(library: string | null | undefined, op: string | null | undefined, status: string | null | undefined, printed: string | null | undefined, reported: string | null | undefined, partner: string | null | undefined, requested_format: string | null | undefined, supplied_format: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'almaws/v1/task-lists/rs/lending-requests?library=' + (library == null ? '' : encodeURIComponent(library)) + '&op=' + (op == null ? '' : encodeURIComponent(op)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&printed=' + (printed == null ? '' : encodeURIComponent(printed)) + '&reported=' + (reported == null ? '' : encodeURIComponent(reported)) + '&partner=' + (partner == null ? '' : encodeURIComponent(partner)) + '&requested_format=' + (requested_format == null ? '' : encodeURIComponent(requested_format)) + '&supplied_format=' + (supplied_format == null ? '' : encodeURIComponent(supplied_format)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * GET Task-lists Test API
		 * This API is used to test if the API key was configured correctly.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>GET - OK - institutionCode: 01ABC_INST</test>
		 * Get almaws/v1/task-lists/test
		 * @return {string} OK
		 */
		GetSlashalmawsSlashv1Slashtask_listsSlashtest(): Observable<string> {
			return this.http.get(this.baseUri + 'almaws/v1/task-lists/test', { responseType: 'text' });
		}

		/**
		 * POST Task-lists Test API
		 * This API is used to test if the API key was configured correctly, including read/write permissions.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>POST - OK</test>
		 * Post almaws/v1/task-lists/test
		 * @return {string} OK
		 */
		PostSlashalmawsSlashv1Slashtask_listsSlashtest(): Observable<string> {
			return this.http.post(this.baseUri + 'almaws/v1/task-lists/test', null, { responseType: 'text' });
		}
	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturn {

		/** printout object. */
		GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintout?: Array<GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintout>;

		/** The total number of printouts. */
		total_record_count?: number | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnFormProperties {

		/** The total number of printouts. */
		total_record_count: FormControl<number | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnFormProperties>({
			total_record_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintout {

		/** The time that the letter has been send to the Printout Queue. */
		date?: Date | null;

		/** The printout id. */
		id?: string | null;

		/** Letter Html body. */
		letter?: string | null;
		link?: string | null;

		/** The printer. */
		printer?: GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutPrinter;

		/** The printout name. */
		printout?: string | null;

		/** The size of the letter. */
		size?: string | null;

		/** The user who printed the letter. */
		source?: string | null;

		/** Status of the printout (Pending/Printed/Canceled). */
		status?: GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutStatus;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutFormProperties {

		/** The time that the letter has been send to the Printout Queue. */
		date: FormControl<Date | null | undefined>,

		/** The printout id. */
		id: FormControl<string | null | undefined>,

		/** Letter Html body. */
		letter: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,

		/** The printout name. */
		printout: FormControl<string | null | undefined>,

		/** The size of the letter. */
		size: FormControl<string | null | undefined>,

		/** The user who printed the letter. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			letter: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			printout: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutPrinter {
		desc?: string | null;
		value?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutPrinterFormProperties {
		desc: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutPrinterFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutPrinterFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutStatus {
		desc?: string | null;
		value?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutStatusFormProperties {
		desc: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutStatusFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashprintoutsReturnPrintoutStatusFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturn {

		/** Requested resource object. */
		GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resource?: Array<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resource>;

		/** The total number of requested resources. */
		total_record_count?: number | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnFormProperties {

		/** The total number of requested resources. */
		total_record_count: FormControl<number | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnFormProperties>({
			total_record_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resource {

		/** Location of the requested resource. */
		location?: GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocation;

		/** Requests for resource. */
		GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequest?: Array<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequest>;

		/** Metadata about the requested resource. */
		resource_metadata?: GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceResource_metadata;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceFormProperties {
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceFormProperties>({
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocation {

		/** Call number of the item. */
		call_number?: string | null;

		/** Copies of resource in a specific location. */
		GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationCopy?: Array<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationCopy>;

		/** Holding pid, a unique holding id that the resource is associated with. */
		holding_id?: GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationHolding_id;

		/** Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed). */
		library?: GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationLibrary;

		/** The location. */
		shelving_location?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationFormProperties {

		/** Call number of the item. */
		call_number: FormControl<string | null | undefined>,

		/** The location. */
		shelving_location: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationFormProperties>({
			call_number: new FormControl<string | null | undefined>(undefined),
			shelving_location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationCopy {

		/** Alternative call number. */
		alternative_call_number?: string | null;

		/** The item's barcode. */
		barcode?: string | null;
		base_status?: GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationCopyBase_status;
		link?: string | null;

		/** The resource's pid. */
		pid?: string | null;

		/** The item's storage location id. */
		storage_location_id?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationCopyFormProperties {

		/** Alternative call number. */
		alternative_call_number: FormControl<string | null | undefined>,

		/** The item's barcode. */
		barcode: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,

		/** The resource's pid. */
		pid: FormControl<string | null | undefined>,

		/** The item's storage location id. */
		storage_location_id: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationCopyFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationCopyFormProperties>({
			alternative_call_number: new FormControl<string | null | undefined>(undefined),
			barcode: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			storage_location_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationCopyBase_status {
		desc?: string | null;
		value?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationCopyBase_statusFormProperties {
		desc: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationCopyBase_statusFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationCopyBase_statusFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationHolding_id {
		link?: string | null;
		value?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationHolding_idFormProperties {
		link: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationHolding_idFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationHolding_idFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationLibrary {
		desc?: string | null;
		value?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationLibraryFormProperties {
		desc: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationLibraryFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceLocationLibraryFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequest {

		/** The related note of the request. */
		comment?: string | null;

		/** The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department */
		destination?: GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestDestination;

		/** The identifier of the request in Alma. */
		id?: string | null;
		link?: string | null;

		/** Indication whether the request is printed. */
		printed?: boolean | null;

		/** Indication whether the request is reported. */
		reported?: boolean | null;

		/** Deprecated - use request_time instead. The request date. */
		request_date?: Date | null;

		/** The sub type of the request. */
		request_sub_type?: GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequest_sub_type;

		/** The creation date and exact time of the request. Output parameter. */
		request_time?: Date | null;

		/** Required */
		request_type: GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequest_type;

		/** A description of the requester. */
		requester?: GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequester;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestFormProperties {

		/** The related note of the request. */
		comment: FormControl<string | null | undefined>,

		/** The identifier of the request in Alma. */
		id: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,

		/** Indication whether the request is printed. */
		printed: FormControl<boolean | null | undefined>,

		/** Indication whether the request is reported. */
		reported: FormControl<boolean | null | undefined>,

		/** Deprecated - use request_time instead. The request date. */
		request_date: FormControl<Date | null | undefined>,

		/** The creation date and exact time of the request. Output parameter. */
		request_time: FormControl<Date | null | undefined>,

		/** Required */
		request_type: FormControl<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequest_type | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			printed: new FormControl<boolean | null | undefined>(undefined),
			reported: new FormControl<boolean | null | undefined>(undefined),
			request_date: new FormControl<Date | null | undefined>(undefined),
			request_time: new FormControl<Date | null | undefined>(undefined),
			request_type: new FormControl<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequest_type | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestDestination {
		desc?: string | null;
		value?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestDestinationFormProperties {
		desc: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestDestinationFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestDestinationFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequest_sub_type {
		desc?: string | null;
		value?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequest_sub_typeFormProperties {
		desc: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequest_sub_typeFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequest_sub_typeFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequest_type { BOOKING = 0, DIGITIZATION = 1, HOLD = 2, MOVE = 3, WORK_ORDER = 4 }

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequester {
		desc?: string | null;
		value?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequesterFormProperties {
		desc: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequesterFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceRequestRequesterFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceResource_metadata {

		/** An entity primarily responsible for making the resource. */
		author?: string | null;

		/** ISBN */
		isbn?: string | null;

		/** ISSN */
		issn?: string | null;

		/** The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e). */
		mms_id?: GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceResource_metadataMms_id;

		/** Place of publication. */
		publication_place?: string | null;

		/** The year associated with the publication of the resource. */
		publication_year?: string | null;

		/** An entity responsible for making the resource available. */
		publisher?: string | null;

		/** The resource title. */
		title?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceResource_metadataFormProperties {

		/** An entity primarily responsible for making the resource. */
		author: FormControl<string | null | undefined>,

		/** ISBN */
		isbn: FormControl<string | null | undefined>,

		/** ISSN */
		issn: FormControl<string | null | undefined>,

		/** Place of publication. */
		publication_place: FormControl<string | null | undefined>,

		/** The year associated with the publication of the resource. */
		publication_year: FormControl<string | null | undefined>,

		/** An entity responsible for making the resource available. */
		publisher: FormControl<string | null | undefined>,

		/** The resource title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceResource_metadataFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceResource_metadataFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			isbn: new FormControl<string | null | undefined>(undefined),
			issn: new FormControl<string | null | undefined>(undefined),
			publication_place: new FormControl<string | null | undefined>(undefined),
			publication_year: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceResource_metadataMms_id {
		link?: string | null;
		value?: string | null;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceResource_metadataMms_idFormProperties {
		link: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceResource_metadataMms_idFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrequested_resourcesReturnRequested_resourceResource_metadataMms_idFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrsSlashlending_requestsReturn {

		/** The total number of resource sharing requests in the given list. */
		total_record_count?: number | null;

		/** UserResourceSharingRequest object. */
		user_resource_sharing_request?: Array<string>;
	}
	export interface GetSlashalmawsSlashv1Slashtask_listsSlashrsSlashlending_requestsReturnFormProperties {

		/** The total number of resource sharing requests in the given list. */
		total_record_count: FormControl<number | null | undefined>,
	}
	export function CreateGetSlashalmawsSlashv1Slashtask_listsSlashrsSlashlending_requestsReturnFormGroup() {
		return new FormGroup<GetSlashalmawsSlashv1Slashtask_listsSlashrsSlashlending_requestsReturnFormProperties>({
			total_record_count: new FormControl<number | null | undefined>(undefined),
		});

	}

}

