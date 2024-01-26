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
		 * List available blockchains
		 * Get an array of active blockchains
		 * Get 
		 * @return {Array<string>} OK
		 */
		GetAvailableBlockchains(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + '', {});
		}

		/**
		 * Blockchain Info Summary
		 * Get basic summary of info relating to the currently selected blockchain
		 * Get {blockchain}
		 * @return {GetBlockchainReturn} OK
		 */
		GetBlockchain(): Observable<GetBlockchainReturn> {
			return this.http.get<GetBlockchainReturn>(this.baseUri + '{blockchain}', {});
		}

		/**
		 * Get address V2
		 * Returns balances and transactions of an address. The returned transactions are sorted by block height, newest blocks first.
		 * The **details** query parameter can specify the level of details returned by the request (default: "txids").
		 * Possible values are:
		 * **basic**: return only xpub balances, without any derived addresses and transactions
		 * **tokens**: basic + tokens (addresses) derived from the xpub, subject to tokens parameter
		 * **tokenBalances**: basic + tokens (addresses) derived from the xpub with balances, subject to tokens parameter
		 * **txids**: tokenBalances + list of txids, subject to from, to filter and paging
		 * **txs**: tokenBalances + list of transaction with details, subject to from, to filter and paging
		 * Get {blockchain}/v2/address/{address}
		 * @param {number} page specifies page of returned transactions, starting from 1. If out of range, Blockbook returns the closest possible page.
		 * @param {number} pageSize number of transactions returned by call (default and maximum 1000)
		 * @param {number} fromBlock filter of the returned transactions from block height to block height (default no filter)
		 * @param {number} toBlock filter of the returned transactions from block height to block height (default no filter)
		 * @param {GetAddressV2Details} details specifies level of details returned by request
		 * @param {string} contract return only transactions which affect specified contract (applicable only to coins which support contracts)
		 * @param {string} secondary specifies secondary (fiat) currency in which the token and total balances are returned in addition to crypto values
		 * @return {string} OK
		 */
		GetAddressV2(page: number | null | undefined, pageSize: number | null | undefined, fromBlock: number | null | undefined, toBlock: number | null | undefined, details: GetAddressV2Details | null | undefined, contract: string | null | undefined, secondary: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + '{blockchain}/v2/address/{address}?page=' + page + '&pageSize=' + pageSize + '&fromBlock=' + fromBlock + '&toBlock=' + toBlock + '&details=' + details + '&contract=' + (contract == null ? '' : encodeURIComponent(contract)) + '&secondary=' + (secondary == null ? '' : encodeURIComponent(secondary)), { responseType: 'text' });
		}

		/**
		 * Get Balance History V2
		 * Returns a balance history for the specified XPUB or address
		 * The value of sentToSelf is the amount sent from the same address to the same address or within addresses of xpub.
		 * Get {blockchain}/v2/balancehistory/{addressOrXpub}
		 * @param {string} fromDate specifies a start date as a Unix timestamp
		 * @param {string} toDate specifies an end date as a Unix timestamp
		 * @param {string} fiatcurrency if specified, the response will contain secondary (fiat) rate at the time of transaction. If not, all available currencies will be returned
		 * @param {number} groupBy an interval in seconds, to group results by. Default is 3600 seconds
		 * @return {Array<GetBalanceHistoryV2Return>} OK
		 */
		GetBalanceHistoryV2(fromDate: string | null | undefined, toDate: string | null | undefined, fiatcurrency: string | null | undefined, groupBy: number | null | undefined): Observable<Array<GetBalanceHistoryV2Return>> {
			return this.http.get<Array<GetBalanceHistoryV2Return>>(this.baseUri + '{blockchain}/v2/balancehistory/{addressOrXpub}?fromDate=' + (fromDate == null ? '' : encodeURIComponent(fromDate)) + '&toDate=' + (toDate == null ? '' : encodeURIComponent(toDate)) + '&fiatcurrency=' + (fiatcurrency == null ? '' : encodeURIComponent(fiatcurrency)) + '&groupBy=' + groupBy, {});
		}

		/**
		 * Get block hash V2
		 * Get block hash by its height
		 * Note: Blockbook always follows the main chain of the backend it is attached to.
		 * Get {blockchain}/v2/block-index/{blockHeight}
		 * @return {GetBlockHashV2Return} OK
		 */
		GetBlockHashV2(): Observable<GetBlockHashV2Return> {
			return this.http.get<GetBlockHashV2Return>(this.baseUri + '{blockchain}/v2/block-index/{blockHeight}', {});
		}

		/**
		 * Get Block V2
		 * Returns information about block with transactions, subject to paging.
		 * Note: Blockbook always follows the main chain of the backend it is attached to. If there is a rollback-reorg in the backend, Blockbook will also do rollback. When you ask for block by height, you will always get the main chain block. If you ask for block by hash, you may get the block from another fork but it is not guaranteed (backend may not keep it)
		 * Get {blockchain}/v2/block/{blockHashOrHeight}
		 * @param {number} page specifies page of returned transactions, starting from 1. If out of range, Blockbook returns the closest possible page.
		 * @param {number} pageSize number of transactions returned by call (default and maximum 1000)
		 * @return {GetBlockV2Return} OK
		 */
		GetBlockV2(page: number | null | undefined, pageSize: number | null | undefined): Observable<GetBlockV2Return> {
			return this.http.get<GetBlockV2Return>(this.baseUri + '{blockchain}/v2/block/{blockHashOrHeight}?page=' + page + '&pageSize=' + pageSize, {});
		}

		/**
		 * Estimate transaction fee V2
		 * Returns an estimated transaction fee for a specific confirmation target.
		 * If you want your transaction to be included in the next block, then you give 1 as parameter. If it is not urgent, then you can wait a bit longer and get an estimation for the fifth next block.
		 * Get {blockchain}/v2/estimatefee/{confirmationTarget}
		 * @return {GetEstimateFeeV2Return} OK
		 */
		GetEstimateFeeV2(): Observable<GetEstimateFeeV2Return> {
			return this.http.get<GetEstimateFeeV2Return>(this.baseUri + '{blockchain}/v2/estimatefee/{confirmationTarget}', {});
		}

		/**
		 * Get Mempool V2
		 * Get a list of transaction IDs currently in the mempool of the node (meaning unconfirmed transactions not included in any block yet)
		 * Note: this route was implemented by us and is therefore not yet supported by existing blockbook clients.
		 * Get {blockchain}/v2/mempool/
		 * @param {number} page specifies page of returned transactions, starting from 1. If out of range, Blockbook returns the closest possible page.
		 * @param {number} pageSize number of transactions returned by call (default and maximum 1000)
		 * @return {GetMempoolV2Return} OK
		 */
		GetMempoolV2(page: number | null | undefined, pageSize: number | null | undefined): Observable<GetMempoolV2Return> {
			return this.http.get<GetMempoolV2Return>(this.baseUri + '{blockchain}/v2/mempool/?page=' + page + '&pageSize=' + pageSize, {});
		}

		/**
		 * Get NFT metadata V2
		 * Only works on Ethereum-like blockchains (currently ethereum and bsc)
		 * Get metadata like name or description for a specified contract and token ID.
		 * The resulting data contains a link which can then be used to request the IPFS link for the actual image to display in a block explorer for example.
		 * Note: this route was implemented by us and is therefore not yet supported by existing blockbook clients.
		 * Get {blockchain}/v2/nft/{nftContract}/{nftTokenId}
		 * @return {GetNFTMetaV2Return} OK
		 */
		GetNFTMetaV2(): Observable<GetNFTMetaV2Return> {
			return this.http.get<GetNFTMetaV2Return>(this.baseUri + '{blockchain}/v2/nft/{nftContract}/{nftTokenId}', {});
		}

		/**
		 * Get raw block data V2
		 * Returns the raw hex-encoded block data for a given block hash or height
		 * Get {blockchain}/v2/rawblock/{blockHashOrHeight}
		 * @return {GetRawBlockV2Return} OK
		 */
		GetRawBlockV2(): Observable<GetRawBlockV2Return> {
			return this.http.get<GetRawBlockV2Return>(this.baseUri + '{blockchain}/v2/rawblock/{blockHashOrHeight}', {});
		}

		/**
		 * Send transaction (in URL) V2
		 * Sends new transaction to backend
		 * It is recommended to use POST for sending transactions as there is a limit on how much data can be sent in the URL itself.
		 * Get {blockchain}/v2/sendtx/{hex}
		 * @return {GetSendTxV2Return} OK
		 */
		GetSendTxV2(): Observable<GetSendTxV2Return> {
			return this.http.get<GetSendTxV2Return>(this.baseUri + '{blockchain}/v2/sendtx/{hex}', {});
		}

		/**
		 * Get Tickers list V2
		 * Returns a list of available currency rate tickers (secondary currencies) for the specified date, along with an actual data timestamp.
		 * Trailing slash '/' is mandatory
		 * Get {blockchain}/v2/tickers-list/
		 * @param {string} timestamp specifies a Unix timestamp to (/tickers-list) return available tickers for or (/tickers) that specifies a date to return currency rates for. If not specified, the last available rate will be returned.
		 * @return {GetTickersListV2Return} OK
		 */
		GetTickersListV2(timestamp: string | null | undefined): Observable<GetTickersListV2Return> {
			return this.http.get<GetTickersListV2Return>(this.baseUri + '{blockchain}/v2/tickers-list/?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)), {});
		}

		/**
		 * Get Tickers V2
		 * Returns currency rate for the specified currency and date. If the currency is not available for that specific timestamp, the next closest rate will be returned. All responses contain an actual rate timestamp.
		 * Get {blockchain}/v2/tickers/
		 * @param {string} timestamp specifies a Unix timestamp to (/tickers-list) return available tickers for or (/tickers) that specifies a date to return currency rates for. If not specified, the last available rate will be returned.
		 * @param {string} currency specifies a currency of returned rate ("usd", "eur", "eth"...). If not specified, all available currencies will be returned
		 * @return {GetTickersV2Return} OK
		 */
		GetTickersV2(timestamp: string | null | undefined, currency: string | null | undefined): Observable<GetTickersV2Return> {
			return this.http.get<GetTickersV2Return>(this.baseUri + '{blockchain}/v2/tickers/?timestamp=' + (timestamp == null ? '' : encodeURIComponent(timestamp)) + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)), {});
		}

		/**
		 * Get transaction (as is from Backend) V2
		 * Returns transaction data in the exact format as returned by backend, including all coin specific fields
		 * Get {blockchain}/v2/tx-specific/{txId}
		 * @return {string} OK
		 */
		GetTxSpecificV2(): Observable<string> {
			return this.http.get(this.baseUri + '{blockchain}/v2/tx-specific/{txId}', { responseType: 'text' });
		}

		/**
		 * Get transaction V2
		 * Get transaction returns "normalized" data about transaction, which has the same general structure for all supported coins. It does not return coin specific fields (for example information about Zcash shielded addresses).
		 * A note about the blockTime field:
		 * for already mined transaction (confirmations > 0), the field blockTime contains time of the block
		 * for transactions in mempool (confirmations == 0), the field contains time when the running instance of Blockbook was first time notified about the transaction. This time may be different in different instances of Blockbook.
		 * Get {blockchain}/v2/tx/{txId}
		 * @return {GetTransactionV2Return} OK
		 */
		GetTransactionV2(): Observable<GetTransactionV2Return> {
			return this.http.get<GetTransactionV2Return>(this.baseUri + '{blockchain}/v2/tx/{txId}', {});
		}

		/**
		 * Get UTXO V2
		 * Returns array of unspent transaction outputs of address or xpub, applicable only for Bitcoin-type coins. By default, the list contains both confirmed and unconfirmed transactions. The query parameter confirmed=true disables return of unconfirmed transactions. The returned utxos are sorted by block height, newest blocks first. For xpubs or output descriptors, the response also contains address and derivation path of the utxo.
		 * Unconfirmed utxos do not have field height, the field confirmations has value 0 and may contain field lockTime, if not zero.
		 * Coinbase utxos have field coinbase set to true, however due to performance reasons only up to minimum coinbase confirmations limit (100). After this limit, utxos are not detected as coinbase.
		 * Get {blockchain}/v2/utxo/{addressOrXpub}
		 * @param {boolean} confirmed confirmed=true disables return of unconfirmed transactions
		 * @return {Array<string>} OK
		 */
		GetUTXOV2(confirmed: boolean | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + '{blockchain}/v2/utxo/{addressOrXpub}?confirmed=' + confirmed, {});
		}

		/**
		 * Get xpub V2
		 * Returns balances and transactions of an xpub or output descriptor, applicable only for Bitcoin-type coins.
		 * Blockbook supports BIP44, BIP49, BIP84 and BIP86 (Taproot) derivation schemes, using either xpubs or output descriptors (see https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md)
		 * Note: usedTokens always returns total number of used addresses of xpub.
		 * Detailed documentation found here: https://github.com/trezor/blockbook/blob/master/docs/api.md#get-xpub
		 * Get {blockchain}/v2/xpub/{xpub}
		 * @param {number} page specifies page of returned transactions, starting from 1. If out of range, Blockbook returns the closest possible page.
		 * @param {number} pageSize number of transactions returned by call (default and maximum 1000)
		 * @param {number} fromBlock filter of the returned transactions from block height to block height (default no filter)
		 * @param {number} toBlock filter of the returned transactions from block height to block height (default no filter)
		 * @param {GetAddressV2Details} details specifies level of details returned by request
		 * @param {GetXpubV2Tokens} tokens specifies what tokens (xpub addresses) are returned by the request (default nonzero)
		 * @param {string} secondary specifies secondary (fiat) currency in which the token and total balances are returned in addition to crypto values
		 * @return {GetXpubV2Return} OK
		 */
		GetXpubV2(page: number | null | undefined, pageSize: number | null | undefined, fromBlock: number | null | undefined, toBlock: number | null | undefined, details: GetAddressV2Details | null | undefined, tokens: GetXpubV2Tokens | null | undefined, secondary: string | null | undefined): Observable<GetXpubV2Return> {
			return this.http.get<GetXpubV2Return>(this.baseUri + '{blockchain}/v2/xpub/{xpub}?page=' + page + '&pageSize=' + pageSize + '&fromBlock=' + fromBlock + '&toBlock=' + toBlock + '&details=' + details + '&tokens=' + tokens + '&secondary=' + (secondary == null ? '' : encodeURIComponent(secondary)), {});
		}
	}

	export interface GetBlockchainReturn {
		backend?: GetBlockchainReturnBackend;
		blockbook?: GetBlockchainReturnBlockbook;
	}
	export interface GetBlockchainReturnFormProperties {
	}
	export function CreateGetBlockchainReturnFormGroup() {
		return new FormGroup<GetBlockchainReturnFormProperties>({
		});

	}

	export interface GetBlockchainReturnBackend {
		bestBlockHash?: string | null;
		blocks?: number | null;
		chain?: string | null;
		difficulty?: string | null;
		headers?: number | null;
		protocolVersion?: string | null;
		sizeOnDisk?: number | null;
		subversion?: string | null;
		version?: string | null;
	}
	export interface GetBlockchainReturnBackendFormProperties {
		bestBlockHash: FormControl<string | null | undefined>,
		blocks: FormControl<number | null | undefined>,
		chain: FormControl<string | null | undefined>,
		difficulty: FormControl<string | null | undefined>,
		headers: FormControl<number | null | undefined>,
		protocolVersion: FormControl<string | null | undefined>,
		sizeOnDisk: FormControl<number | null | undefined>,
		subversion: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateGetBlockchainReturnBackendFormGroup() {
		return new FormGroup<GetBlockchainReturnBackendFormProperties>({
			bestBlockHash: new FormControl<string | null | undefined>(undefined),
			blocks: new FormControl<number | null | undefined>(undefined),
			chain: new FormControl<string | null | undefined>(undefined),
			difficulty: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<number | null | undefined>(undefined),
			protocolVersion: new FormControl<string | null | undefined>(undefined),
			sizeOnDisk: new FormControl<number | null | undefined>(undefined),
			subversion: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBlockchainReturnBlockbook {
		about?: string | null;
		bestHeight?: number | null;
		buildTime?: string | null;
		coin?: string | null;
		currentFiatRatesTime?: string | null;
		dbSize?: number | null;
		decimals?: number | null;
		gitCommit?: string | null;
		hasFiatRates?: boolean | null;
		historicalFiatRatesTime?: string | null;
		host?: string | null;
		inSync?: boolean | null;
		inSyncMempool?: boolean | null;
		initialSync?: boolean | null;
		lastBlockTime?: string | null;
		lastMempoolTime?: string | null;
		mempoolSize?: number | null;
		syncMode?: boolean | null;
		version?: string | null;
	}
	export interface GetBlockchainReturnBlockbookFormProperties {
		about: FormControl<string | null | undefined>,
		bestHeight: FormControl<number | null | undefined>,
		buildTime: FormControl<string | null | undefined>,
		coin: FormControl<string | null | undefined>,
		currentFiatRatesTime: FormControl<string | null | undefined>,
		dbSize: FormControl<number | null | undefined>,
		decimals: FormControl<number | null | undefined>,
		gitCommit: FormControl<string | null | undefined>,
		hasFiatRates: FormControl<boolean | null | undefined>,
		historicalFiatRatesTime: FormControl<string | null | undefined>,
		host: FormControl<string | null | undefined>,
		inSync: FormControl<boolean | null | undefined>,
		inSyncMempool: FormControl<boolean | null | undefined>,
		initialSync: FormControl<boolean | null | undefined>,
		lastBlockTime: FormControl<string | null | undefined>,
		lastMempoolTime: FormControl<string | null | undefined>,
		mempoolSize: FormControl<number | null | undefined>,
		syncMode: FormControl<boolean | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateGetBlockchainReturnBlockbookFormGroup() {
		return new FormGroup<GetBlockchainReturnBlockbookFormProperties>({
			about: new FormControl<string | null | undefined>(undefined),
			bestHeight: new FormControl<number | null | undefined>(undefined),
			buildTime: new FormControl<string | null | undefined>(undefined),
			coin: new FormControl<string | null | undefined>(undefined),
			currentFiatRatesTime: new FormControl<string | null | undefined>(undefined),
			dbSize: new FormControl<number | null | undefined>(undefined),
			decimals: new FormControl<number | null | undefined>(undefined),
			gitCommit: new FormControl<string | null | undefined>(undefined),
			hasFiatRates: new FormControl<boolean | null | undefined>(undefined),
			historicalFiatRatesTime: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			inSync: new FormControl<boolean | null | undefined>(undefined),
			inSyncMempool: new FormControl<boolean | null | undefined>(undefined),
			initialSync: new FormControl<boolean | null | undefined>(undefined),
			lastBlockTime: new FormControl<string | null | undefined>(undefined),
			lastMempoolTime: new FormControl<string | null | undefined>(undefined),
			mempoolSize: new FormControl<number | null | undefined>(undefined),
			syncMode: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetAddressV2Details { basic = 0, tokens = 1, tokenBalances = 2, txids = 3, txslight = 4, txs = 5 }

	export interface GetBalanceHistoryV2Return {
		rates?: string | null;
		received?: string | null;
		sent?: string | null;
		sentToSelf?: string | null;
		time?: number | null;
		txs?: number | null;
	}
	export interface GetBalanceHistoryV2ReturnFormProperties {
		rates: FormControl<string | null | undefined>,
		received: FormControl<string | null | undefined>,
		sent: FormControl<string | null | undefined>,
		sentToSelf: FormControl<string | null | undefined>,
		time: FormControl<number | null | undefined>,
		txs: FormControl<number | null | undefined>,
	}
	export function CreateGetBalanceHistoryV2ReturnFormGroup() {
		return new FormGroup<GetBalanceHistoryV2ReturnFormProperties>({
			rates: new FormControl<string | null | undefined>(undefined),
			received: new FormControl<string | null | undefined>(undefined),
			sent: new FormControl<string | null | undefined>(undefined),
			sentToSelf: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			txs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetBlockHashV2Return {
		blockHash?: string | null;
	}
	export interface GetBlockHashV2ReturnFormProperties {
		blockHash: FormControl<string | null | undefined>,
	}
	export function CreateGetBlockHashV2ReturnFormGroup() {
		return new FormGroup<GetBlockHashV2ReturnFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBlockV2Return {
		bits?: string | null;
		confirmations?: number | null;
		difficulty?: string | null;
		hash?: string | null;
		height?: number | null;
		itemsOnPage?: number | null;
		merkleRoot?: string | null;
		nextBlockHash?: string | null;
		nonce?: string | null;
		page?: number | null;
		previousBlockHash?: string | null;
		size?: number | null;
		time?: number | null;
		totalPages?: number | null;
		txCount?: number | null;
		GetBlockV2ReturnTxs?: Array<GetBlockV2ReturnTxs>;
		version?: number | null;
	}
	export interface GetBlockV2ReturnFormProperties {
		bits: FormControl<string | null | undefined>,
		confirmations: FormControl<number | null | undefined>,
		difficulty: FormControl<string | null | undefined>,
		hash: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		itemsOnPage: FormControl<number | null | undefined>,
		merkleRoot: FormControl<string | null | undefined>,
		nextBlockHash: FormControl<string | null | undefined>,
		nonce: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		previousBlockHash: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
		time: FormControl<number | null | undefined>,
		totalPages: FormControl<number | null | undefined>,
		txCount: FormControl<number | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateGetBlockV2ReturnFormGroup() {
		return new FormGroup<GetBlockV2ReturnFormProperties>({
			bits: new FormControl<string | null | undefined>(undefined),
			confirmations: new FormControl<number | null | undefined>(undefined),
			difficulty: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			itemsOnPage: new FormControl<number | null | undefined>(undefined),
			merkleRoot: new FormControl<string | null | undefined>(undefined),
			nextBlockHash: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			previousBlockHash: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
			txCount: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetBlockV2ReturnTxs {
		blockHash?: string | null;
		blockHeight?: number | null;
		blockTime?: number | null;
		confirmations?: number | null;
		fees?: string | null;
		txid?: string | null;
		value?: string | null;
		valueIn?: string | null;
		GetBlockV2ReturnTxsVin?: Array<GetBlockV2ReturnTxsVin>;
		GetBlockV2ReturnTxsVout?: Array<GetBlockV2ReturnTxsVout>;
	}
	export interface GetBlockV2ReturnTxsFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockHeight: FormControl<number | null | undefined>,
		blockTime: FormControl<number | null | undefined>,
		confirmations: FormControl<number | null | undefined>,
		fees: FormControl<string | null | undefined>,
		txid: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		valueIn: FormControl<string | null | undefined>,
	}
	export function CreateGetBlockV2ReturnTxsFormGroup() {
		return new FormGroup<GetBlockV2ReturnTxsFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockHeight: new FormControl<number | null | undefined>(undefined),
			blockTime: new FormControl<number | null | undefined>(undefined),
			confirmations: new FormControl<number | null | undefined>(undefined),
			fees: new FormControl<string | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			valueIn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBlockV2ReturnTxsVin {
		isAddress?: boolean | null;
		n?: number | null;
		value?: string | null;
	}
	export interface GetBlockV2ReturnTxsVinFormProperties {
		isAddress: FormControl<boolean | null | undefined>,
		n: FormControl<number | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetBlockV2ReturnTxsVinFormGroup() {
		return new FormGroup<GetBlockV2ReturnTxsVinFormProperties>({
			isAddress: new FormControl<boolean | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBlockV2ReturnTxsVout {
		addresses?: Array<string>;
		isAddress?: boolean | null;
		n?: number | null;
		value?: string | null;
	}
	export interface GetBlockV2ReturnTxsVoutFormProperties {
		isAddress: FormControl<boolean | null | undefined>,
		n: FormControl<number | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetBlockV2ReturnTxsVoutFormGroup() {
		return new FormGroup<GetBlockV2ReturnTxsVoutFormProperties>({
			isAddress: new FormControl<boolean | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEstimateFeeV2Return {
		result?: string | null;
	}
	export interface GetEstimateFeeV2ReturnFormProperties {
		result: FormControl<string | null | undefined>,
	}
	export function CreateGetEstimateFeeV2ReturnFormGroup() {
		return new FormGroup<GetEstimateFeeV2ReturnFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetMempoolV2Return {
		itemsOnPage?: number | null;
		GetMempoolV2ReturnMempool?: Array<GetMempoolV2ReturnMempool>;
		mempoolSize?: number | null;
		page?: number | null;
		totalPages?: number | null;
	}
	export interface GetMempoolV2ReturnFormProperties {
		itemsOnPage: FormControl<number | null | undefined>,
		mempoolSize: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		totalPages: FormControl<number | null | undefined>,
	}
	export function CreateGetMempoolV2ReturnFormGroup() {
		return new FormGroup<GetMempoolV2ReturnFormProperties>({
			itemsOnPage: new FormControl<number | null | undefined>(undefined),
			mempoolSize: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetMempoolV2ReturnMempool {
		time?: number | null;
		txid?: string | null;
	}
	export interface GetMempoolV2ReturnMempoolFormProperties {
		time: FormControl<number | null | undefined>,
		txid: FormControl<string | null | undefined>,
	}
	export function CreateGetMempoolV2ReturnMempoolFormGroup() {
		return new FormGroup<GetMempoolV2ReturnMempoolFormProperties>({
			time: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetNFTMetaV2Return {
		contractInfo?: GetNFTMetaV2ReturnContractInfo;
		tokenId?: string | null;
		uri?: string | null;
	}
	export interface GetNFTMetaV2ReturnFormProperties {
		tokenId: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGetNFTMetaV2ReturnFormGroup() {
		return new FormGroup<GetNFTMetaV2ReturnFormProperties>({
			tokenId: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetNFTMetaV2ReturnContractInfo {
		contract?: string | null;
		decimals?: number | null;
		name?: string | null;
		symbol?: string | null;
		type?: string | null;
	}
	export interface GetNFTMetaV2ReturnContractInfoFormProperties {
		contract: FormControl<string | null | undefined>,
		decimals: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetNFTMetaV2ReturnContractInfoFormGroup() {
		return new FormGroup<GetNFTMetaV2ReturnContractInfoFormProperties>({
			contract: new FormControl<string | null | undefined>(undefined),
			decimals: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRawBlockV2Return {
		hex?: string | null;
	}
	export interface GetRawBlockV2ReturnFormProperties {
		hex: FormControl<string | null | undefined>,
	}
	export function CreateGetRawBlockV2ReturnFormGroup() {
		return new FormGroup<GetRawBlockV2ReturnFormProperties>({
			hex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSendTxV2Return {
		result?: string | null;
	}
	export interface GetSendTxV2ReturnFormProperties {
		result: FormControl<string | null | undefined>,
	}
	export function CreateGetSendTxV2ReturnFormGroup() {
		return new FormGroup<GetSendTxV2ReturnFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTickersListV2Return {
		available_currencies?: Array<string>;
		ts?: number | null;
	}
	export interface GetTickersListV2ReturnFormProperties {
		ts: FormControl<number | null | undefined>,
	}
	export function CreateGetTickersListV2ReturnFormGroup() {
		return new FormGroup<GetTickersListV2ReturnFormProperties>({
			ts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTickersV2Return {
		rates?: string | null;
		ts?: number | null;
	}
	export interface GetTickersV2ReturnFormProperties {
		rates: FormControl<string | null | undefined>,
		ts: FormControl<number | null | undefined>,
	}
	export function CreateGetTickersV2ReturnFormGroup() {
		return new FormGroup<GetTickersV2ReturnFormProperties>({
			rates: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTransactionV2Return {
		blockHash?: string | null;
		blockHeight?: number | null;
		blockTime?: number | null;
		confirmations?: number | null;
		fees?: string | null;
		hex?: string | null;
		size?: number | null;
		txid?: string | null;
		value?: string | null;
		valueIn?: string | null;
		version?: number | null;
		GetTransactionV2ReturnVin?: Array<GetTransactionV2ReturnVin>;
		GetTransactionV2ReturnVout?: Array<GetTransactionV2ReturnVout>;
		vsize?: number | null;
	}
	export interface GetTransactionV2ReturnFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockHeight: FormControl<number | null | undefined>,
		blockTime: FormControl<number | null | undefined>,
		confirmations: FormControl<number | null | undefined>,
		fees: FormControl<string | null | undefined>,
		hex: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
		txid: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		valueIn: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
		vsize: FormControl<number | null | undefined>,
	}
	export function CreateGetTransactionV2ReturnFormGroup() {
		return new FormGroup<GetTransactionV2ReturnFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockHeight: new FormControl<number | null | undefined>(undefined),
			blockTime: new FormControl<number | null | undefined>(undefined),
			confirmations: new FormControl<number | null | undefined>(undefined),
			fees: new FormControl<string | null | undefined>(undefined),
			hex: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			valueIn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			vsize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTransactionV2ReturnVin {
		addresses?: Array<string>;
		hex?: string | null;
		isAddress?: boolean | null;
		n?: number | null;
		sequence?: number | null;
		txid?: string | null;
		value?: string | null;
		vout?: number | null;
	}
	export interface GetTransactionV2ReturnVinFormProperties {
		hex: FormControl<string | null | undefined>,
		isAddress: FormControl<boolean | null | undefined>,
		n: FormControl<number | null | undefined>,
		sequence: FormControl<number | null | undefined>,
		txid: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		vout: FormControl<number | null | undefined>,
	}
	export function CreateGetTransactionV2ReturnVinFormGroup() {
		return new FormGroup<GetTransactionV2ReturnVinFormProperties>({
			hex: new FormControl<string | null | undefined>(undefined),
			isAddress: new FormControl<boolean | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			vout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTransactionV2ReturnVout {
		addresses?: Array<string>;
		hex?: string | null;
		isAddress?: boolean | null;
		n?: number | null;
		value?: string | null;
	}
	export interface GetTransactionV2ReturnVoutFormProperties {
		hex: FormControl<string | null | undefined>,
		isAddress: FormControl<boolean | null | undefined>,
		n: FormControl<number | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionV2ReturnVoutFormGroup() {
		return new FormGroup<GetTransactionV2ReturnVoutFormProperties>({
			hex: new FormControl<string | null | undefined>(undefined),
			isAddress: new FormControl<boolean | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetXpubV2Tokens { nonzero = 0, used = 1, derived = 2 }

	export interface GetXpubV2Return {
		address?: string | null;
		balance?: string | null;
		itemsOnPage?: number | null;
		page?: number | null;
		secondaryValue?: number | null;
		GetXpubV2ReturnTokens?: Array<GetXpubV2ReturnTokens>;
		totalPages?: number | null;
		totalReceived?: string | null;
		totalSent?: string | null;
		txids?: Array<string>;
		txs?: number | null;
		unconfirmedBalance?: string | null;
		unconfirmedTxs?: number | null;
		usedTokens?: number | null;
	}
	export interface GetXpubV2ReturnFormProperties {
		address: FormControl<string | null | undefined>,
		balance: FormControl<string | null | undefined>,
		itemsOnPage: FormControl<number | null | undefined>,
		page: FormControl<number | null | undefined>,
		secondaryValue: FormControl<number | null | undefined>,
		totalPages: FormControl<number | null | undefined>,
		totalReceived: FormControl<string | null | undefined>,
		totalSent: FormControl<string | null | undefined>,
		txs: FormControl<number | null | undefined>,
		unconfirmedBalance: FormControl<string | null | undefined>,
		unconfirmedTxs: FormControl<number | null | undefined>,
		usedTokens: FormControl<number | null | undefined>,
	}
	export function CreateGetXpubV2ReturnFormGroup() {
		return new FormGroup<GetXpubV2ReturnFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			balance: new FormControl<string | null | undefined>(undefined),
			itemsOnPage: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			secondaryValue: new FormControl<number | null | undefined>(undefined),
			totalPages: new FormControl<number | null | undefined>(undefined),
			totalReceived: new FormControl<string | null | undefined>(undefined),
			totalSent: new FormControl<string | null | undefined>(undefined),
			txs: new FormControl<number | null | undefined>(undefined),
			unconfirmedBalance: new FormControl<string | null | undefined>(undefined),
			unconfirmedTxs: new FormControl<number | null | undefined>(undefined),
			usedTokens: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetXpubV2ReturnTokens {
		balance?: string | null;
		decimals?: number | null;
		name?: string | null;
		path?: string | null;
		totalReceived?: string | null;
		totalSent?: string | null;
		transfers?: number | null;
		type?: string | null;
	}
	export interface GetXpubV2ReturnTokensFormProperties {
		balance: FormControl<string | null | undefined>,
		decimals: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		totalReceived: FormControl<string | null | undefined>,
		totalSent: FormControl<string | null | undefined>,
		transfers: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetXpubV2ReturnTokensFormGroup() {
		return new FormGroup<GetXpubV2ReturnTokensFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined),
			decimals: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			totalReceived: new FormControl<string | null | undefined>(undefined),
			totalSent: new FormControl<string | null | undefined>(undefined),
			transfers: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

}

