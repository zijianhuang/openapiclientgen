import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BreadcrumbsAPIModelsAddressAddressResponse {
		address?: string | null;
	}
	export interface BreadcrumbsAPIModelsAddressAddressResponseFormProperties {
		address: FormControl<string | null | undefined>,
	}
	export function CreateBreadcrumbsAPIModelsAddressAddressResponseFormGroup() {
		return new FormGroup<BreadcrumbsAPIModelsAddressAddressResponseFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BreadcrumbsAPIModelsAddressAddressRiskResponse {
		address?: string | null;
		entity_tags?: Array<string>;
		risk_score?: string | null;
	}
	export interface BreadcrumbsAPIModelsAddressAddressRiskResponseFormProperties {
		address: FormControl<string | null | undefined>,
		risk_score: FormControl<string | null | undefined>,
	}
	export function CreateBreadcrumbsAPIModelsAddressAddressRiskResponseFormGroup() {
		return new FormGroup<BreadcrumbsAPIModelsAddressAddressRiskResponseFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			risk_score: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BreadcrumbsAPIModelsAddressExposureResponse {
		entity_attributes?: Array<string>;
		hop?: number | null;
	}
	export interface BreadcrumbsAPIModelsAddressExposureResponseFormProperties {
		hop: FormControl<number | null | undefined>,
	}
	export function CreateBreadcrumbsAPIModelsAddressExposureResponseFormGroup() {
		return new FormGroup<BreadcrumbsAPIModelsAddressExposureResponseFormProperties>({
			hop: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BreadcrumbsAPIModelsAddressRiskExposureResponse {
		closest_incoming_exposure?: BreadcrumbsAPIModelsAddressExposureResponse;
		closest_outgoing_exposure?: BreadcrumbsAPIModelsAddressExposureResponse;
		entity_tags?: Array<string>;
		risk_score?: string | null;
	}
	export interface BreadcrumbsAPIModelsAddressRiskExposureResponseFormProperties {
		risk_score: FormControl<string | null | undefined>,
	}
	export function CreateBreadcrumbsAPIModelsAddressRiskExposureResponseFormGroup() {
		return new FormGroup<BreadcrumbsAPIModelsAddressRiskExposureResponseFormProperties>({
			risk_score: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BreadcrumbsAPIModelsNodeNodeRequest {

		/**
		 * Blockchain address
		 * Required
		 * Min length: 1
		 */
		address: string;

		/**
		 * Blockchain eg: ETH, BTC, MATIC, RON, SOL, TRX
		 * Required
		 * Min length: 1
		 */
		chain: BreadcrumbsAPIModelsNodeNodeRequestChain;

		/** If set, will only show transactions from this token */
		token_address?: string | null;
	}
	export interface BreadcrumbsAPIModelsNodeNodeRequestFormProperties {

		/**
		 * Blockchain address
		 * Required
		 * Min length: 1
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * Blockchain eg: ETH, BTC, MATIC, RON, SOL, TRX
		 * Required
		 * Min length: 1
		 */
		chain: FormControl<BreadcrumbsAPIModelsNodeNodeRequestChain | null | undefined>,

		/** If set, will only show transactions from this token */
		token_address: FormControl<string | null | undefined>,
	}
	export function CreateBreadcrumbsAPIModelsNodeNodeRequestFormGroup() {
		return new FormGroup<BreadcrumbsAPIModelsNodeNodeRequestFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			chain: new FormControl<BreadcrumbsAPIModelsNodeNodeRequestChain | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			token_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BreadcrumbsAPIModelsNodeNodeRequestChain { ETH = 'ETH', BTC = 'BTC', MATIC = 'MATIC', RON = 'RON', SOL = 'SOL', TRX = 'TRX' }

	export interface BreadcrumbsAPIModelsNodeNodeResponse {
		entity_tags?: Array<string>;
		incoming?: Array<BreadcrumbsAPIModelsAddressAddressResponse>;
		outgoing?: Array<BreadcrumbsAPIModelsAddressAddressResponse>;
	}
	export interface BreadcrumbsAPIModelsNodeNodeResponseFormProperties {
	}
	export function CreateBreadcrumbsAPIModelsNodeNodeResponseFormGroup() {
		return new FormGroup<BreadcrumbsAPIModelsNodeNodeResponseFormProperties>({
		});

	}

	export interface BreadcrumbsAPIModelsPathfinderPathfinderRequest {

		/**
		 * Blockchain eg: ETH, BTC, SOL
		 * Required
		 * Min length: 1
		 */
		chain: BreadcrumbsAPIModelsPathfinderPathfinderRequestChain;

		/**
		 * Required if search_type is either Shortest/Multiple Path.
		 * If you know where did the money went or come from.
		 */
		destination_addresses?: Array<string>;

		/**
		 * Direction type is what direction it should go. Accepts: 0 = Incoming and 1 = Outgoing only
		 * Required
		 */
		direction_type: BreadcrumbsAPIModelsPathfinderPathfinderRequestDirection_type;

		/**
		 * Required if search_type is Closest Entity.
		 * Available values are: Exchange, DEX, Mining, ICO, Mixer
		 */
		entity_tags?: Array<string>;

		/**
		 * Search type values: 1 = Shortest Path, 2 = Multiple Path, 3 = Closest Entity and 4 = Closest Illicit
		 * Required
		 */
		search_type: BreadcrumbsAPIModelsPathfinderPathfinderRequestSearch_type;

		/**
		 * Source address is where you want to start your search
		 * Required
		 * Min length: 1
		 */
		source_address: string;
	}
	export interface BreadcrumbsAPIModelsPathfinderPathfinderRequestFormProperties {

		/**
		 * Blockchain eg: ETH, BTC, SOL
		 * Required
		 * Min length: 1
		 */
		chain: FormControl<BreadcrumbsAPIModelsPathfinderPathfinderRequestChain | null | undefined>,

		/**
		 * Direction type is what direction it should go. Accepts: 0 = Incoming and 1 = Outgoing only
		 * Required
		 */
		direction_type: FormControl<BreadcrumbsAPIModelsPathfinderPathfinderRequestDirection_type | null | undefined>,

		/**
		 * Search type values: 1 = Shortest Path, 2 = Multiple Path, 3 = Closest Entity and 4 = Closest Illicit
		 * Required
		 */
		search_type: FormControl<BreadcrumbsAPIModelsPathfinderPathfinderRequestSearch_type | null | undefined>,

		/**
		 * Source address is where you want to start your search
		 * Required
		 * Min length: 1
		 */
		source_address: FormControl<string | null | undefined>,
	}
	export function CreateBreadcrumbsAPIModelsPathfinderPathfinderRequestFormGroup() {
		return new FormGroup<BreadcrumbsAPIModelsPathfinderPathfinderRequestFormProperties>({
			chain: new FormControl<BreadcrumbsAPIModelsPathfinderPathfinderRequestChain | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			direction_type: new FormControl<BreadcrumbsAPIModelsPathfinderPathfinderRequestDirection_type | null | undefined>(undefined, [Validators.required]),
			search_type: new FormControl<BreadcrumbsAPIModelsPathfinderPathfinderRequestSearch_type | null | undefined>(undefined, [Validators.required]),
			source_address: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum BreadcrumbsAPIModelsPathfinderPathfinderRequestChain { ETH = 'ETH', BTC = 'BTC', SOL = 'SOL' }

	export enum BreadcrumbsAPIModelsPathfinderPathfinderRequestDirection_type { Incoming = 'Incoming', Outgoing = 'Outgoing' }

	export enum BreadcrumbsAPIModelsPathfinderPathfinderRequestSearch_type { ShortestPath = 'ShortestPath', MultiplePath = 'MultiplePath', ClosestEntity = 'ClosestEntity', ClosestIllicit = 'ClosestIllicit' }

	export interface BreadcrumbsAPIModelsPathfinderPathfinderResponse {
		path_found?: boolean | null;
		result_hops?: number | null;
		result_paths?: Array<string>;
	}
	export interface BreadcrumbsAPIModelsPathfinderPathfinderResponseFormProperties {
		path_found: FormControl<boolean | null | undefined>,
		result_hops: FormControl<number | null | undefined>,
	}
	export function CreateBreadcrumbsAPIModelsPathfinderPathfinderResponseFormGroup() {
		return new FormGroup<BreadcrumbsAPIModelsPathfinderPathfinderResponseFormProperties>({
			path_found: new FormControl<boolean | null | undefined>(undefined),
			result_hops: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BreadcrumbsAPIModelsSanctionSanctionedRequest {

		/**
		 * Blockchain address
		 * Required
		 * Min length: 1
		 */
		address: string;

		/**
		 * Blockchain eg: ETH, BTC, MATIC, RON, SOL, TRX
		 * Required
		 * Min length: 1
		 */
		chain: BreadcrumbsAPIModelsNodeNodeRequestChain;
	}
	export interface BreadcrumbsAPIModelsSanctionSanctionedRequestFormProperties {

		/**
		 * Blockchain address
		 * Required
		 * Min length: 1
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * Blockchain eg: ETH, BTC, MATIC, RON, SOL, TRX
		 * Required
		 * Min length: 1
		 */
		chain: FormControl<BreadcrumbsAPIModelsNodeNodeRequestChain | null | undefined>,
	}
	export function CreateBreadcrumbsAPIModelsSanctionSanctionedRequestFormGroup() {
		return new FormGroup<BreadcrumbsAPIModelsSanctionSanctionedRequestFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			chain: new FormControl<BreadcrumbsAPIModelsNodeNodeRequestChain | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface BreadcrumbsAPIModelsSanctionSanctionedResponse {
		address?: string | null;
		chain?: BreadcrumbsAPIModelsNodeNodeRequestChain | null;
		isSanctioned?: boolean | null;
	}
	export interface BreadcrumbsAPIModelsSanctionSanctionedResponseFormProperties {
		address: FormControl<string | null | undefined>,
		chain: FormControl<BreadcrumbsAPIModelsNodeNodeRequestChain | null | undefined>,
		isSanctioned: FormControl<boolean | null | undefined>,
	}
	export function CreateBreadcrumbsAPIModelsSanctionSanctionedResponseFormGroup() {
		return new FormGroup<BreadcrumbsAPIModelsSanctionSanctionedResponseFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			chain: new FormControl<BreadcrumbsAPIModelsNodeNodeRequestChain | null | undefined>(undefined),
			isSanctioned: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BreadcrumbsAPIModelsTransactionRiskResponse {
		addresses?: Array<BreadcrumbsAPIModelsAddressAddressRiskResponse>;
	}
	export interface BreadcrumbsAPIModelsTransactionRiskResponseFormProperties {
	}
	export function CreateBreadcrumbsAPIModelsTransactionRiskResponseFormGroup() {
		return new FormGroup<BreadcrumbsAPIModelsTransactionRiskResponseFormProperties>({
		});

	}

	export interface BreadcrumbsResponseUnauthorizedResponse {
		error?: string | null;
		status?: number | null;
	}
	export interface BreadcrumbsResponseUnauthorizedResponseFormProperties {
		error: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateBreadcrumbsResponseUnauthorizedResponseFormGroup() {
		return new FormGroup<BreadcrumbsResponseUnauthorizedResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BreadcrumbsResponseUnprocessableResponse {
		error?: string | null;
		status?: number | null;
	}
	export interface BreadcrumbsResponseUnprocessableResponseFormProperties {
		error: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateBreadcrumbsResponseUnprocessableResponseFormGroup() {
		return new FormGroup<BreadcrumbsResponseUnprocessableResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Shows the incoming and outgoing transactions from blockchain address
		 * Post node
		 * @return {BreadcrumbsAPIModelsNodeNodeResponse} Success
		 */
		NodePost(requestBody: BreadcrumbsAPIModelsNodeNodeRequest): Observable<BreadcrumbsAPIModelsNodeNodeResponse> {
			return this.http.post<BreadcrumbsAPIModelsNodeNodeResponse>(this.baseUri + 'node', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Automatically find path between crypto addresses
		 * Post pathfinder
		 * @return {BreadcrumbsAPIModelsPathfinderPathfinderResponse} Success
		 */
		PathfinderPost(requestBody: BreadcrumbsAPIModelsPathfinderPathfinderRequest): Observable<BreadcrumbsAPIModelsPathfinderPathfinderResponse> {
			return this.http.post<BreadcrumbsAPIModelsPathfinderPathfinderResponse>(this.baseUri + 'pathfinder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Will check the risk score for single address
		 * Get risk/address
		 * @param {BreadcrumbsAPIModelsNodeNodeRequestChain} chain Blockchain eg: ETH, BTC, MATIC, RON, SOL, TRX
		 * @param {string} address Blockchain address
		 * @param {boolean} include_exposure If set to `true`, will search the one nearest illicit address (incoming and outgoing) from the specified address
		 * @return {BreadcrumbsAPIModelsAddressRiskExposureResponse} Success
		 */
		RiskGetByChainAndAddressAndInclude_exposure(chain: BreadcrumbsAPIModelsNodeNodeRequestChain, address: string, include_exposure: boolean | null | undefined): Observable<BreadcrumbsAPIModelsAddressRiskExposureResponse> {
			return this.http.get<BreadcrumbsAPIModelsAddressRiskExposureResponse>(this.baseUri + 'risk/address?chain=' + chain + '&address=' + (address == null ? '' : encodeURIComponent(address)) + '&include_exposure=' + include_exposure, {});
		}

		/**
		 * Will check the risk score for every addresses in a transaction
		 * Get risk/transaction
		 * @param {BreadcrumbsAPIModelsNodeNodeRequestChain} chain Blockchain eg: ETH, BTC, MATIC, RON, SOL, TRX
		 * @param {string} hash Blockchain hash
		 * @return {BreadcrumbsAPIModelsTransactionRiskResponse} Success
		 */
		RiskGetByChainAndHash(chain: BreadcrumbsAPIModelsNodeNodeRequestChain, hash: string): Observable<BreadcrumbsAPIModelsTransactionRiskResponse> {
			return this.http.get<BreadcrumbsAPIModelsTransactionRiskResponse>(this.baseUri + 'risk/transaction?chain=' + chain + '&hash=' + (hash == null ? '' : encodeURIComponent(hash)), {});
		}

		/**
		 * Verify if the addresses provided are in our sanctioned lists
		 * Post sanctioned_address
		 * @return {BreadcrumbsAPIModelsSanctionSanctionedResponse} Success
		 */
		SanctionPost(requestBody: Array<BreadcrumbsAPIModelsSanctionSanctionedRequest>): Observable<BreadcrumbsAPIModelsSanctionSanctionedResponse> {
			return this.http.post<BreadcrumbsAPIModelsSanctionSanctionedResponse>(this.baseUri + 'sanctioned_address', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

