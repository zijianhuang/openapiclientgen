import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Action {
		id?: string | null;
	}
	export interface ActionFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddRequestResponse {

		/** Required */
		ergoPayUrl: string;

		/** Required */
		requestId: string;
	}
	export interface AddRequestResponseFormProperties {

		/** Required */
		ergoPayUrl: FormControl<string | null | undefined>,

		/** Required */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateAddRequestResponseFormGroup() {
		return new FormGroup<AddRequestResponseFormProperties>({
			ergoPayUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AgeUsdExchangeInfo {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		bankFeeAmount: string;

		/** Required */
		bankFeeDescription: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		ergAmount: string;

		/** Required */
		ergAmountDescription: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		exchangeRate: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		jayFeeAmount: string;

		/** Required */
		jayFeeDescription: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalAmount: string;
	}
	export interface AgeUsdExchangeInfoFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		bankFeeAmount: FormControl<string | null | undefined>,

		/** Required */
		bankFeeDescription: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		ergAmount: FormControl<string | null | undefined>,

		/** Required */
		ergAmountDescription: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		exchangeRate: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		jayFeeAmount: FormControl<string | null | undefined>,

		/** Required */
		jayFeeDescription: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalAmount: FormControl<string | null | undefined>,
	}
	export function CreateAgeUsdExchangeInfoFormGroup() {
		return new FormGroup<AgeUsdExchangeInfoFormProperties>({
			bankFeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bankFeeDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ergAmount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ergAmountDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			exchangeRate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jayFeeAmount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jayFeeDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			totalAmount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AgeUsdInfo {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		reserveRatio: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sigRsvPrice: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sigUsdPrice: string;
	}
	export interface AgeUsdInfoFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		reserveRatio: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sigRsvPrice: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		sigUsdPrice: FormControl<string | null | undefined>,
	}
	export function CreateAgeUsdInfoFormGroup() {
		return new FormGroup<AgeUsdInfoFormProperties>({
			reserveRatio: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sigRsvPrice: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sigUsdPrice: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CheckResponse {

		/**
		 * Flag with 0 unknown, 1 verified, 2 suspicious, 3 blocked (see EIP-21)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		genuine: number;
		token?: GenuineToken;
	}
	export interface CheckResponseFormProperties {

		/**
		 * Flag with 0 unknown, 1 verified, 2 suspicious, 3 blocked (see EIP-21)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		genuine: FormControl<number | null | undefined>,
	}
	export function CreateCheckResponseFormGroup() {
		return new FormGroup<CheckResponseFormProperties>({
			genuine: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GenuineToken {
		issuer?: string | null;

		/** Required */
		tokenId: string;

		/** Required */
		tokenName: string;

		/** Required */
		uniqueName: boolean;
	}
	export interface GenuineTokenFormProperties {
		issuer: FormControl<string | null | undefined>,

		/** Required */
		tokenId: FormControl<string | null | undefined>,

		/** Required */
		tokenName: FormControl<string | null | undefined>,

		/** Required */
		uniqueName: FormControl<boolean | null | undefined>,
	}
	export function CreateGenuineTokenFormGroup() {
		return new FormGroup<GenuineTokenFormProperties>({
			issuer: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tokenName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uniqueName: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePaymentRequest {
		message?: string | null;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nanoErg: string;

		/** Required */
		receiverAddress: string;
		senderAddress?: string | null;
		tokenId?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		tokenRawAmount?: string | null;
	}
	export interface CreatePaymentRequestFormProperties {
		message: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		nanoErg: FormControl<string | null | undefined>,

		/** Required */
		receiverAddress: FormControl<string | null | undefined>,
		senderAddress: FormControl<string | null | undefined>,
		tokenId: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		tokenRawAmount: FormControl<string | null | undefined>,
	}
	export function CreateCreatePaymentRequestFormGroup() {
		return new FormGroup<CreatePaymentRequestFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nanoErg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			receiverAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			senderAddress: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
			tokenRawAmount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErgoPayResponse {
		address?: string | null;
		addresses?: Array<string>;
		message?: string | null;
		messageSeverity?: ErgoPayResponseMessageSeverity | null;
		reducedTx?: string | null;
		reducedTxList?: Array<string>;
		replyTo?: string | null;
	}
	export interface ErgoPayResponseFormProperties {
		address: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		messageSeverity: FormControl<ErgoPayResponseMessageSeverity | null | undefined>,
		reducedTx: FormControl<string | null | undefined>,
		replyTo: FormControl<string | null | undefined>,
	}
	export function CreateErgoPayResponseFormGroup() {
		return new FormGroup<ErgoPayResponseFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			messageSeverity: new FormControl<ErgoPayResponseMessageSeverity | null | undefined>(undefined),
			reducedTx: new FormControl<string | null | undefined>(undefined),
			replyTo: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErgoPayResponseMessageSeverity { NONE = 'NONE', INFORMATION = 'INFORMATION', WARNING = 'WARNING', ERROR = 'ERROR' }

	export interface FetchActionResponse {
		action?: Action;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		appVersion?: number | null;
	}
	export interface FetchActionResponseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		appVersion: FormControl<number | null | undefined>,
	}
	export function CreateFetchActionResponseFormGroup() {
		return new FormGroup<FetchActionResponseFormProperties>({
			appVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MosaikApp {
		actions?: Array<Action>;
		manifest?: MosaikManifest;
		view?: ViewElement;
	}
	export interface MosaikAppFormProperties {
	}
	export function CreateMosaikAppFormGroup() {
		return new FormGroup<MosaikAppFormProperties>({
		});

	}

	export interface MosaikManifest {
		appDescription?: string | null;
		appName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		appVersion?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheLifetime?: number | null;
		errorReportUrl?: string | null;
		iconUrl?: string | null;
		notificationCheckUrl?: string | null;
		onAppLoadedAction?: string | null;
		onResizeAction?: string | null;
		targetCanvasDimension?: MosaikManifestTargetCanvasDimension | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		targetMosaikVersion?: number | null;
	}
	export interface MosaikManifestFormProperties {
		appDescription: FormControl<string | null | undefined>,
		appName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		appVersion: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		cacheLifetime: FormControl<number | null | undefined>,
		errorReportUrl: FormControl<string | null | undefined>,
		iconUrl: FormControl<string | null | undefined>,
		notificationCheckUrl: FormControl<string | null | undefined>,
		onAppLoadedAction: FormControl<string | null | undefined>,
		onResizeAction: FormControl<string | null | undefined>,
		targetCanvasDimension: FormControl<MosaikManifestTargetCanvasDimension | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		targetMosaikVersion: FormControl<number | null | undefined>,
	}
	export function CreateMosaikManifestFormGroup() {
		return new FormGroup<MosaikManifestFormProperties>({
			appDescription: new FormControl<string | null | undefined>(undefined),
			appName: new FormControl<string | null | undefined>(undefined),
			appVersion: new FormControl<number | null | undefined>(undefined),
			cacheLifetime: new FormControl<number | null | undefined>(undefined),
			errorReportUrl: new FormControl<string | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			notificationCheckUrl: new FormControl<string | null | undefined>(undefined),
			onAppLoadedAction: new FormControl<string | null | undefined>(undefined),
			onResizeAction: new FormControl<string | null | undefined>(undefined),
			targetCanvasDimension: new FormControl<MosaikManifestTargetCanvasDimension | null | undefined>(undefined),
			targetMosaikVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MosaikManifestTargetCanvasDimension { COMPACT_WIDTH = 'COMPACT_WIDTH', MEDIUM_WIDTH = 'MEDIUM_WIDTH', FULL_WIDTH = 'FULL_WIDTH' }

	export interface ViewElement {
		id?: string | null;
		onClickAction?: string | null;
		onLongPressAction?: string | null;
		visible?: boolean | null;
	}
	export interface ViewElementFormProperties {
		id: FormControl<string | null | undefined>,
		onClickAction: FormControl<string | null | undefined>,
		onLongPressAction: FormControl<string | null | undefined>,
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateViewElementFormGroup() {
		return new FormGroup<ViewElementFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			onClickAction: new FormControl<string | null | undefined>(undefined),
			onLongPressAction: new FormControl<string | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NodePeer {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		blockHeight: string;

		/** Required */
		blockchainApi: boolean;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		headerHeight: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastSeen: string;

		/** Required */
		name: string;

		/** Required */
		openRestApi: boolean;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		responseTime: string;

		/** Required */
		url: string;
	}
	export interface NodePeerFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		blockHeight: FormControl<string | null | undefined>,

		/** Required */
		blockchainApi: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		headerHeight: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastSeen: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		openRestApi: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		responseTime: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNodePeerFormGroup() {
		return new FormGroup<NodePeerFormProperties>({
			blockHeight: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			blockchainApi: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			headerHeight: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastSeen: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			openRestApi: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			responseTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NotificationCheckResponse {
		message?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		messageTs?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		nextCheck?: number | null;
	}
	export interface NotificationCheckResponseFormProperties {
		message: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		messageTs: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		nextCheck: FormControl<number | null | undefined>,
	}
	export function CreateNotificationCheckResponseFormGroup() {
		return new FormGroup<NotificationCheckResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			messageTs: new FormControl<string | null | undefined>(undefined),
			nextCheck: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PaymentRequestStateResponse {

		/** Required */
		paymentRequestState: PaymentRequestStateResponsePaymentRequestState;

		/** Required */
		requestId: string;
		txId?: string | null;
	}
	export interface PaymentRequestStateResponseFormProperties {

		/** Required */
		paymentRequestState: FormControl<PaymentRequestStateResponsePaymentRequestState | null | undefined>,

		/** Required */
		requestId: FormControl<string | null | undefined>,
		txId: FormControl<string | null | undefined>,
	}
	export function CreatePaymentRequestStateResponseFormGroup() {
		return new FormGroup<PaymentRequestStateResponseFormProperties>({
			paymentRequestState: new FormControl<PaymentRequestStateResponsePaymentRequestState | null | undefined>(undefined, [Validators.required]),
			requestId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			txId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PaymentRequestStateResponsePaymentRequestState { CREATED = 'CREATED', WAITING = 'WAITING', EXECUTED = 'EXECUTED', INVALID = 'INVALID' }

	export interface TokenPrice {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		available: string;

		/** Required */
		displayName: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastUpdated: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		price: string;

		/** Required */
		tokenId: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		volumeLastDay: string;
	}
	export interface TokenPriceFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		available: FormControl<string | null | undefined>,

		/** Required */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		lastUpdated: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		price: FormControl<string | null | undefined>,

		/** Required */
		tokenId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		volumeLastDay: FormControl<string | null | undefined>,
	}
	export function CreateTokenPriceFormGroup() {
		return new FormGroup<TokenPriceFormProperties>({
			available: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastUpdated: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tokenId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			volumeLastDay: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns state of AgeUSD at this moment
		 * Get ageusd/info
		 * @return {void} OK
		 */
		GetAgeUsdInfo(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ageusd/info', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get cancelbabel/{boxId}
		 * @return {void} OK
		 */
		ErgoPayCreateBabelBox_1(boxId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cancelbabel/' + (boxId == null ? '' : encodeURIComponent(boxId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get createbabel/{address}
		 * @param {string} ergAmount Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} tokenAmount Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} OK
		 */
		ErgoPayCreateBabelBox(address: string, tokenId: string, ergAmount: string, tokenAmount: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'createbabel/' + (address == null ? '' : encodeURIComponent(address)) + '&tokenId=' + (tokenId == null ? '' : encodeURIComponent(tokenId)) + '&ergAmount=' + ergAmount + '&tokenAmount=' + tokenAmount, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mosaik/babelfee/
		 * @return {void} OK
		 */
		GetBabelFeeOverview(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mosaik/babelfee/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mosaik/babelfee/newoffer
		 * @return {void} OK
		 */
		GetBabelFeeNewOffer(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mosaik/babelfee/newoffer', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post mosaik/babelfee/newoffer/doit
		 * @return {void} OK
		 */
		DoCreateBabelBox(requestBody: {[id: string]: string }): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mosaik/babelfee/newoffer/doit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post mosaik/babelfee/newoffer/new-input
		 * @return {void} OK
		 */
		ReplaceTokenAmountInputFields(requestBody: {[id: string]: string }): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mosaik/babelfee/newoffer/new-input', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mosaik/babelfee/notificationcheck
		 * @return {void} OK
		 */
		CheckForNotifications(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mosaik/babelfee/notificationcheck', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mosaik/boxconsolidation/
		 * @return {void} OK
		 */
		MainApp_1(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mosaik/boxconsolidation/', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mosaik/boxconsolidation/consolidate/{p2pkaddress}
		 * @return {void} OK
		 */
		EpConsolidate(p2pkaddress: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mosaik/boxconsolidation/consolidate/' + (p2pkaddress == null ? '' : encodeURIComponent(p2pkaddress)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mosaik/tokenburn
		 * @return {void} OK
		 */
		MainApp(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mosaik/tokenburn', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get mosaik/tokenburn/get/{uuid}
		 * @return {void} OK
		 */
		GetBurningTransaction(uuid: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'mosaik/tokenburn/get/' + (uuid == null ? '' : encodeURIComponent(uuid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post mosaik/tokenburn/prepare
		 * @return {void} OK
		 */
		PrepareTransaction(requestBody: {[id: string]: string }): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'mosaik/tokenburn/prepare', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code
		 * Post payment/addrequest
		 * @return {void} OK
		 */
		AddPaymentRequest(requestBody: CreatePaymentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'payment/addrequest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed
		 * Get payment/state/{requestId}
		 * @return {void} OK
		 */
		GetPaymentState(requestId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'payment/state/' + (requestId == null ? '' : encodeURIComponent(requestId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists known peers sorted by block height
		 * Get peers/list
		 * @param {boolean} unreachable Set to true to show unreachable peers in the list
		 * @param {boolean} closedApi Set to true to show peers not open to be connected
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		GetPeersList(unreachable: boolean | null | undefined, closedApi: boolean | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'peers/list?unreachable=' + unreachable + '&closedApi=' + closedApi + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Builds ErgoPayRequest for SigRSV exchange
		 * Get sigrsv/exchange/
		 * @param {string} amount Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} checkRate Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} executionFee Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} OK
		 */
		DoSigmaRsvExchange(amount: string, address: string, checkRate: string | null | undefined, executionFee: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sigrsv/exchange/?amount=' + amount + '&address=' + (address == null ? '' : encodeURIComponent(address)) + '&checkRate=' + checkRate + '&executionFee=' + executionFee, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculates SigRSV exchange
		 * Get sigrsv/exchange/{amount}/info
		 * @param {string} amount Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} OK
		 */
		CalcSigmaRsvExchange(amount: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sigrsv/exchange/' + amount + '/info', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists price and available volume for SigmaRSV
		 * Get sigrsv/price
		 * @return {void} OK
		 */
		GetSigmaRsvPrice(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sigrsv/price', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Builds ErgoPayRequest for SigUSD exchange
		 * Get sigusd/exchange/
		 * @param {string} amount Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} checkRate Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} executionFee Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} OK
		 */
		DoSigmaUsdExchange(amount: string, address: string, checkRate: string | null | undefined, executionFee: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sigusd/exchange/?amount=' + amount + '&address=' + (address == null ? '' : encodeURIComponent(address)) + '&checkRate=' + checkRate + '&executionFee=' + executionFee, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Calculates SigUSD exchange
		 * Get sigusd/exchange/{amount}/info
		 * @param {string} amount Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} OK
		 */
		CalcSigmaUsdExchange(amount: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sigusd/exchange/' + amount + '/info', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists price and available volume for SigmaUSD
		 * Get sigusd/price
		 * @return {void} OK
		 */
		GetSigmaUsdPrice(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sigusd/price', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check a token verification
		 * Get tokens/check/{tokenId}/{tokenName}
		 * @return {void} OK
		 */
		CheckToken(tokenId: string, tokenName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tokens/check/' + (tokenId == null ? '' : encodeURIComponent(tokenId)) + '/' + (tokenName == null ? '' : encodeURIComponent(tokenName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all blocked tokens
		 * Get tokens/listBlocked
		 * @return {void} OK
		 */
		ListBlocked(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tokens/listBlocked', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all genuine tokens known
		 * Get tokens/listGenuine
		 * @return {void} OK
		 */
		ListGenuine(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tokens/listGenuine', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all token prices and available volume
		 * Get tokens/prices/all
		 * @return {void} OK
		 */
		GetTokenPrices(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tokens/prices/all', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists price and available volume for a certain token
		 * Get tokens/prices/{tokenId}
		 * @return {void} OK
		 */
		GetTokenPrice(tokenId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tokens/prices/' + (tokenId == null ? '' : encodeURIComponent(tokenId)), { observe: 'response', responseType: 'text' });
		}
	}

}

