import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The request to activate a bidding function. */
	export interface ActivateBiddingFunctionRequest {
	}

	/** The request to activate a bidding function. */
	export interface ActivateBiddingFunctionRequestFormProperties {
	}
	export function CreateActivateBiddingFunctionRequestFormGroup() {
		return new FormGroup<ActivateBiddingFunctionRequestFormProperties>({
		});

	}


	/** A request to archive a bidding function. */
	export interface ArchiveBiddingFunctionRequest {
	}

	/** A request to archive a bidding function. */
	export interface ArchiveBiddingFunctionRequestFormProperties {
	}
	export function CreateArchiveBiddingFunctionRequestFormGroup() {
		return new FormGroup<ArchiveBiddingFunctionRequestFormProperties>({
		});

	}


	/** The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow. */
	export interface BiddingFunction {

		/** The raw Javascript source code of the bidding function. */
		biddingFunction?: string | null;

		/** The name of the bidding function that must follow the pattern: `bidders/{bidder_account_id}/biddingFunctions/{bidding_function_name}`. */
		name?: string | null;

		/** Output only. The state of the bidding function. */
		state?: BiddingFunctionState | null;

		/** The type of the bidding function to be created. */
		type?: BiddingFunctionType | null;
	}

	/** The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow. */
	export interface BiddingFunctionFormProperties {

		/** The raw Javascript source code of the bidding function. */
		biddingFunction: FormControl<string | null | undefined>,

		/** The name of the bidding function that must follow the pattern: `bidders/{bidder_account_id}/biddingFunctions/{bidding_function_name}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the bidding function. */
		state: FormControl<BiddingFunctionState | null | undefined>,

		/** The type of the bidding function to be created. */
		type: FormControl<BiddingFunctionType | null | undefined>,
	}
	export function CreateBiddingFunctionFormGroup() {
		return new FormGroup<BiddingFunctionFormProperties>({
			biddingFunction: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BiddingFunctionState | null | undefined>(undefined),
			type: new FormControl<BiddingFunctionType | null | undefined>(undefined),
		});

	}

	export enum BiddingFunctionState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', ARCHIVED = 'ARCHIVED' }

	export enum BiddingFunctionType { FUNCTION_TYPE_UNSPECIFIED = 'FUNCTION_TYPE_UNSPECIFIED', TURTLEDOVE_SIMULATION_BIDDING_FUNCTION = 'TURTLEDOVE_SIMULATION_BIDDING_FUNCTION', FLEDGE_BIDDING_FUNCTION = 'FLEDGE_BIDDING_FUNCTION' }


	/** A response containing a list of a bidder's bidding functions. */
	export interface ListBiddingFunctionsResponse {

		/** A list of a bidder's bidding functions. */
		biddingFunctions?: Array<BiddingFunction>;

		/** A token which can be passed to a subsequent call to the `ListBiddingFunctions` method to retrieve the next page of results in ListBiddingFunctionsRequest.pageToken. */
		nextPageToken?: string | null;
	}

	/** A response containing a list of a bidder's bidding functions. */
	export interface ListBiddingFunctionsResponseFormProperties {

		/** A token which can be passed to a subsequent call to the `ListBiddingFunctions` method to retrieve the next page of results in ListBiddingFunctionsRequest.pageToken. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBiddingFunctionsResponseFormGroup() {
		return new FormGroup<ListBiddingFunctionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.
		 * Post v1alpha/{name}:activate
		 * @param {string} name Required. The name of the bidding function to activate. Format: `bidders/{bidder_account_id}/biddingFunction/{bidding_function_name}`
		 * @return {BiddingFunction} Successful response
		 */
		Realtimebidding_bidders_biddingFunctions_activate(name: string, requestBody: ActivateBiddingFunctionRequest): Observable<BiddingFunction> {
			return this.http.post<BiddingFunction>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.
		 * Post v1alpha/{name}:archive
		 * @param {string} name Required. The name of the bidding function to archive. Format: `bidders/{bidder_account_id}/biddingFunction/{bidding_function_name}`
		 * @return {BiddingFunction} Successful response
		 */
		Realtimebidding_bidders_biddingFunctions_archive(name: string, requestBody: ArchiveBiddingFunctionRequest): Observable<BiddingFunction> {
			return this.http.post<BiddingFunction>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':archive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the bidding functions that a bidder currently has registered.
		 * Get v1alpha/{parent}/biddingFunctions
		 * @param {string} parent Required. Name of the bidder whose bidding functions will be listed. Format: `bidders/{bidder_account_id}`
		 * @param {number} pageSize The maximum number of bidding functions to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return. This value is received from a previous `ListBiddingFunctions` call in ListBiddingFunctionsResponse.nextPageToken.
		 * @return {ListBiddingFunctionsResponse} Successful response
		 */
		Realtimebidding_bidders_biddingFunctions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBiddingFunctionsResponse> {
			return this.http.get<ListBiddingFunctionsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/biddingFunctions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new bidding function.
		 * Post v1alpha/{parent}/biddingFunctions
		 * @param {string} parent Required. The name of the bidder for which to create the bidding function. Format: `bidders/{bidderAccountId}`
		 * @return {BiddingFunction} Successful response
		 */
		Realtimebidding_bidders_biddingFunctions_create(parent: string, requestBody: BiddingFunction): Observable<BiddingFunction> {
			return this.http.post<BiddingFunction>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/biddingFunctions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

