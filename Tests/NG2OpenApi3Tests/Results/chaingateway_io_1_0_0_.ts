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
		 * getLastBlockNumber
		 * Get the latest block number
		 * Get v2/bitcoin/blocks/number
		 * @return {Getlastblocknumber4Return} getBlockNumber
		 */
		Getlastblocknumber4(): Observable<Getlastblocknumber4Return> {
			return this.http.get<Getlastblocknumber4Return>(this.baseUri + 'v2/bitcoin/blocks/number', {});
		}

		/**
		 * getBlock
		 * getBlock
		 * Get v2/bitcoin/blocks/{block}
		 * @return {Getblock4Return} getBlock
		 */
		Getblock4(): Observable<Getblock4Return> {
			return this.http.get<Getblock4Return>(this.baseUri + 'v2/bitcoin/blocks/{block}', {});
		}

		/**
		 * getFees
		 * The fees are parted into three categroies
		 * fast (10min / 1 block)
		 * medium (30 min / 3 blocks)
		 * slow (60 min / 6 blocks)
		 * this tells you in wich block distance your transaction get confirmed. A block is around \~10 minutes.
		 * Please note that fees are dynamic by transaction size. This is only an estimation!
		 * Get v2/bitcoin/fees
		 * @return {GetfeesReturn} getFees
		 */
		Getfees(): Observable<GetfeesReturn> {
			return this.http.get<GetfeesReturn>(this.baseUri + 'v2/bitcoin/fees', {});
		}

		/**
		 * getBlockchaIninfo
		 * getBlockchaIninfo
		 * Get v2/bitcoin/info
		 * @return {GetblockchaininfoReturn} getBlockchaIninfo
		 */
		Getblockchaininfo(): Observable<GetblockchaininfoReturn> {
			return this.http.get<GetblockchaininfoReturn>(this.baseUri + 'v2/bitcoin/info', {});
		}

		/**
		 * sendTransaction
		 * sendTransaction
		 * Post v2/bitcoin/transactions
		 * @return {void} 
		 */
		Sendtransaction4(requestBody: Sendtransaction4PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/bitcoin/transactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * getTransaction
		 * You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part
		 * Get v2/bitcoin/transactions/{id}/decoded
		 * @return {Gettransaction4Return} getTransaction (decoded)
		 */
		Gettransaction4(): Observable<Gettransaction4Return> {
			return this.http.get<Gettransaction4Return>(this.baseUri + 'v2/bitcoin/transactions/{id}/decoded', {});
		}

		/**
		 * getWallet
		 * getWallet
		 * Get v2/bitcoin/wallets
		 * @return {GetwalletReturn} getWallets
		 */
		Getwallet(): Observable<GetwalletReturn> {
			return this.http.get<GetwalletReturn>(this.baseUri + 'v2/bitcoin/wallets', {});
		}

		/**
		 * createWallet
		 * createWallet
		 * Post v2/bitcoin/wallets
		 * @return {CreatewalletReturn} 200
		 */
		Createwallet(requestBody: CreatewalletPostBody): Observable<CreatewalletReturn> {
			return this.http.post<CreatewalletReturn>(this.baseUri + 'v2/bitcoin/wallets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * exportAddressPrivateKey
		 * exportAddressPrivateKey
		 * Post v2/bitcoin/wallets/{name}/addresses/{address}/export
		 * @return {ExportaddressprivatekeyReturn} 200
		 */
		Exportaddressprivatekey(requestBody: ExportaddressprivatekeyPostBody): Observable<ExportaddressprivatekeyReturn> {
			return this.http.post<ExportaddressprivatekeyReturn>(this.baseUri + 'v2/bitcoin/wallets/{name}/addresses/{address}/export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * getWalletAddresses
		 * getWalletAddresses
		 * Get v2/bitcoin/wallets/{wallet_name}/addresses
		 * @return {GetwalletaddressesReturn} 200
		 */
		Getwalletaddresses(): Observable<GetwalletaddressesReturn> {
			return this.http.get<GetwalletaddressesReturn>(this.baseUri + 'v2/bitcoin/wallets/{wallet_name}/addresses', {});
		}

		/**
		 * createWalletAddress
		 * createWalletAddress
		 * Post v2/bitcoin/wallets/{wallet_name}/addresses
		 * @return {CreatewalletaddressReturn} 200
		 */
		Createwalletaddress(requestBody: string): Observable<CreatewalletaddressReturn> {
			return this.http.post<CreatewalletaddressReturn>(this.baseUri + 'v2/bitcoin/wallets/{wallet_name}/addresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * deleteWallet
		 * deleteWallet
		 * Delete v2/bitcoin/wallets/{walletname}
		 * @return {DeletewalletReturn} deleteWallet
		 */
		Deletewallet(): Observable<DeletewalletReturn> {
			return this.http.delete<DeletewalletReturn>(this.baseUri + 'v2/bitcoin/wallets/{walletname}', {});
		}

		/**
		 * listSubscribedAddresses
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/bitcoin/webhooks
		 * @return {Listsubscribedaddresses4Return} listSubscribedAddresses
		 */
		Listsubscribedaddresses4(): Observable<Listsubscribedaddresses4Return> {
			return this.http.get<Listsubscribedaddresses4Return>(this.baseUri + 'v2/bitcoin/webhooks', {});
		}

		/**
		 * subscribeAddress
		 * Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.
		 * Post v2/bitcoin/webhooks
		 * @return {Subscribeaddress4Return} subscribeAddress
		 */
		Subscribeaddress4(requestBody: Subscribeaddress4PostBody): Observable<Subscribeaddress4Return> {
			return this.http.post<Subscribeaddress4Return>(this.baseUri + 'v2/bitcoin/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * listFailedIPNs
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/bitcoin/webhooks/notifications/failed
		 * @return {Listfailedipns4Return} listFailedIPNs
		 */
		Listfailedipns4(): Observable<Listfailedipns4Return> {
			return this.http.get<Listfailedipns4Return>(this.baseUri + 'v2/bitcoin/webhooks/notifications/failed', {});
		}

		/**
		 * resendFailedIPN
		 * Returns all subscriptions/IPNs created with an account.
		 * Post v2/bitcoin/webhooks/notifications/failed/{notification_id}
		 * @return {Resendfailedipn4Return} resendFailedIPN
		 */
		Resendfailedipn4(requestBody: string): Observable<Resendfailedipn4Return> {
			return this.http.post<Resendfailedipn4Return>(this.baseUri + 'v2/bitcoin/webhooks/notifications/failed/{notification_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * unsubscribeAddress
		 * Deletes an existing subscription/IPN for the given address (and contractaddress).
		 * Delete v2/bitcoin/webhooks/{id}
		 * @return {Unsubscribeaddress4Return} unsubscribeAddress
		 */
		Unsubscribeaddress4(): Observable<Unsubscribeaddress4Return> {
			return this.http.delete<Unsubscribeaddress4Return>(this.baseUri + 'v2/bitcoin/webhooks/{id}', {});
		}

		/**
		 * listAddress
		 * listAddress
		 * Get v2/bsc/addresses
		 * @return {ListaddressReturn} listAddress
		 */
		Listaddress(): Observable<ListaddressReturn> {
			return this.http.get<ListaddressReturn>(this.baseUri + 'v2/bsc/addresses', {});
		}

		/**
		 * newAddress
		 * newAddress
		 * Post v2/bsc/addresses
		 * @return {Newaddress2Return} newAddress
		 */
		Newaddress2(requestBody: Newaddress2PostBody): Observable<Newaddress2Return> {
			return this.http.post<Newaddress2Return>(this.baseUri + 'v2/bsc/addresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * exportAddress
		 * exportAddress
		 * Post v2/bsc/addresses/export/{address}
		 * @return {Exportaddress2Return} exportAddress
		 */
		Exportaddress2(requestBody: Exportaddress2PostBody): Observable<Exportaddress2Return> {
			return this.http.post<Exportaddress2Return>(this.baseUri + 'v2/bsc/addresses/export/{address}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * importAddress
		 * importAddress
		 * Post v2/bsc/addresses/import
		 * @return {Importaddress2Return} importAddress
		 */
		Importaddress2(requestBody: Importaddress2PostBody): Observable<Importaddress2Return> {
			return this.http.post<Importaddress2Return>(this.baseUri + 'v2/bsc/addresses/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * deleteAddress
		 * deleteAddress
		 * Delete v2/bsc/addresses/{address}
		 * @return {Deleteaddress2Return} deleteAddress
		 */
		Deleteaddress2(): Observable<Deleteaddress2Return> {
			return this.http.delete<Deleteaddress2Return>(this.baseUri + 'v2/bsc/addresses/{address}', {});
		}

		/**
		 * ListTransactionsByAddress
		 * Our API provides an endpoint for retrieving all transactions associated with a particular blockchain address. To use this endpoint, you will need to provide the wallet address as a parameter in the request.
		 * Each page of results returned by this endpoint contains up to 100 entries, and you can use a paginator to navigate through the pages of results.
		 * To use the paginator, you can include parameter in your request: "page" . The "page" parameter specifies which page of results to retrieve,
		 * For example, to retrieve the first 100 transactions associated with a particular blockchain address, you would make a request to the following URL:
		 * ```
		 * /addresses//transactions/1
		 * ```
		 * If there are more than 100 transactions associated with the blockchain address, you can retrieve additional pages of results by incrementing the "page" parameter in your request. For example, to retrieve the next 100 transactions, you would make a request to the following URL:
		 * ```
		 * /addresses//transactions/2
		 * ```
		 * By using the paginator, you can retrieve all transactions associated with a particular blockchain address, regardless of the total number of transactions in the blockchain.
		 * each request tells you the max pages within the Request in the **max_pages** field
		 * `"max_pages": 515`
		 * Get v2/bsc/addresses/{address}/transactions/{page}
		 * @return {Listtransactionsbyaddress2Return} 200
		 */
		Listtransactionsbyaddress2(): Observable<Listtransactionsbyaddress2Return> {
			return this.http.get<Listtransactionsbyaddress2Return>(this.baseUri + 'v2/bsc/addresses/{address}/transactions/{page}', {});
		}

		/**
		 * getBinanceCoinBalance
		 * Get the balance of an address
		 * Get v2/bsc/balances/{address}
		 * @return {GetbinancecoinbalanceReturn} getBinanceCoinBalance
		 */
		Getbinancecoinbalance(): Observable<GetbinancecoinbalanceReturn> {
			return this.http.get<GetbinancecoinbalanceReturn>(this.baseUri + 'v2/bsc/balances/{address}', {});
		}

		/**
		 * getBEP20Balance
		 * Get the balance of a BEP20 address
		 * Get v2/bsc/balances/{contract}/bep20/{token_id}
		 * @return {Getbep20balanceReturn} getBEP20Balance
		 */
		Getbep20balance(): Observable<Getbep20balanceReturn> {
			return this.http.get<Getbep20balanceReturn>(this.baseUri + 'v2/bsc/balances/{contract}/bep20/{token_id}', {});
		}

		/**
		 * getBEP20
		 * Receive information of a BEP20 address
		 * Get v2/bsc/bep20/{contract}
		 * @return {Getbep20Return} getBEP20
		 */
		Getbep20(): Observable<Getbep20Return> {
			return this.http.get<Getbep20Return>(this.baseUri + 'v2/bsc/bep20/{contract}', {});
		}

		/**
		 * getLastBlocknumber
		 * Get the latest block number
		 * Get v2/bsc/blocks/number
		 * @return {Getlastblocknumber2Return} getBlocknumber
		 */
		Getlastblocknumber2(): Observable<Getlastblocknumber2Return> {
			return this.http.get<Getlastblocknumber2Return>(this.baseUri + 'v2/bsc/blocks/number', {});
		}

		/**
		 * getBlock
		 * Get information of a specific block
		 * Get v2/bsc/blocks/{block}
		 * @return {Getblock2Return} getBlock
		 */
		Getblock2(): Observable<Getblock2Return> {
			return this.http.get<Getblock2Return>(this.baseUri + 'v2/bsc/blocks/{block}', {});
		}

		/**
		 * getGasPrice
		 * Get gas price
		 * Get v2/bsc/gasprice
		 * @return {Getgasprice2Return} getGasPrice
		 */
		Getgasprice2(): Observable<Getgasprice2Return> {
			return this.http.get<Getgasprice2Return>(this.baseUri + 'v2/bsc/gasprice', {});
		}

		/**
		 * getNFTOwner
		 * Get the Owner of an NFT
		 * Get v2/bsc/nfts/{contract}/owner/{token_id}
		 * @return {Getnftowner2Return} getNFTOwner
		 */
		Getnftowner2(): Observable<Getnftowner2Return> {
			return this.http.get<Getnftowner2Return>(this.baseUri + 'v2/bsc/nfts/{contract}/owner/{token_id}', {});
		}

		/**
		 * getNFTUri
		 * Get the URI of an NFT
		 * Get v2/bsc/nfts/{contract}/uri/{token_id}
		 * @return {Getnfturi2Return} getNFTUri
		 */
		Getnfturi2(): Observable<Getnfturi2Return> {
			return this.http.get<Getnfturi2Return>(this.baseUri + 'v2/bsc/nfts/{contract}/uri/{token_id}', {});
		}

		/**
		 * sendTransaction
		 * sendTransaction
		 * Post v2/bsc/transactions
		 * @return {void} 
		 */
		Sendtransaction2(requestBody: Sendtransaction2PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/bsc/transactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * sendBEP20
		 * sendBEP20
		 * Post v2/bsc/transactions/bep20
		 * @return {void} 
		 */
		Sendbep20(requestBody: Sendbep20PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/bsc/transactions/bep20', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * sendBEP721
		 * sendBEP721
		 * Post v2/bsc/transactions/bep721
		 * @return {void} 
		 */
		Sendbep721(requestBody: Sendbep721PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/bsc/transactions/bep721', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * broadcastTransaction
		 * Broadcast raw transactions
		 * Post v2/bsc/transactions/broadcast
		 * @return {Broadcasttransaction2Return} broadcastTransaction
		 */
		Broadcasttransaction2(requestBody: Broadcasttransaction2PostBody): Observable<Broadcasttransaction2Return> {
			return this.http.post<Broadcasttransaction2Return>(this.baseUri + 'v2/bsc/transactions/broadcast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * getTransaction
		 * Get info about a transaction
		 * You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part
		 * Get v2/bsc/transactions/{transaction}/decoded
		 * @return {Gettransaction2Return} getTransaction (encoded)
		 */
		Gettransaction2(): Observable<Gettransaction2Return> {
			return this.http.get<Gettransaction2Return>(this.baseUri + 'v2/bsc/transactions/{transaction}/decoded', {});
		}

		/**
		 * getTransactionReceipt
		 * Get info about a transaction receipt
		 * You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part
		 * Get v2/bsc/transactions/{transaction}/receipt/decoded
		 * @return {Gettransactionreceipt2Return} getTransactionReceipt (encoded)
		 */
		Gettransactionreceipt2(): Observable<Gettransactionreceipt2Return> {
			return this.http.get<Gettransactionreceipt2Return>(this.baseUri + 'v2/bsc/transactions/{transaction}/receipt/decoded', {});
		}

		/**
		 * listSubscribedAddresses
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/bsc/webhooks
		 * @return {Listsubscribedaddresses2Return} listSubscribedAddresses
		 */
		Listsubscribedaddresses2(): Observable<Listsubscribedaddresses2Return> {
			return this.http.get<Listsubscribedaddresses2Return>(this.baseUri + 'v2/bsc/webhooks', {});
		}

		/**
		 * subscribeAddress
		 * Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.
		 * Post v2/bsc/webhooks
		 * @return {Subscribeaddress2Return} subscribeAddress
		 */
		Subscribeaddress2(requestBody: Subscribeaddress2PostBody): Observable<Subscribeaddress2Return> {
			return this.http.post<Subscribeaddress2Return>(this.baseUri + 'v2/bsc/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * listFailedIPNs
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/bsc/webhooks/notifications/failed
		 * @return {Listfailedipns2Return} listFailedIPNs
		 */
		Listfailedipns2(): Observable<Listfailedipns2Return> {
			return this.http.get<Listfailedipns2Return>(this.baseUri + 'v2/bsc/webhooks/notifications/failed', {});
		}

		/**
		 * resendFailedIPN
		 * Returns all subscriptions/IPNs created with an account.
		 * Post v2/bsc/webhooks/notifications/failed/{notification_id}
		 * @return {Resendfailedipn2Return} resendFailedIPN
		 */
		Resendfailedipn2(requestBody: string): Observable<Resendfailedipn2Return> {
			return this.http.post<Resendfailedipn2Return>(this.baseUri + 'v2/bsc/webhooks/notifications/failed/{notification_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * unsubscribeAddress
		 * Deletes an existing subscription/IPN for the given address (and contractaddress).
		 * Delete v2/bsc/webhooks/{webhook}
		 * @return {Unsubscribeaddress2Return} unsubscribeAddress
		 */
		Unsubscribeaddress2(): Observable<Unsubscribeaddress2Return> {
			return this.http.delete<Unsubscribeaddress2Return>(this.baseUri + 'v2/bsc/webhooks/{webhook}', {});
		}

		/**
		 * broadcastTransaction
		 * Broadcast raw transactions
		 * Post v2/eth/transactions/broadcast
		 * @return {BroadcasttransactionReturn} broadcastTransaction
		 */
		Broadcasttransaction(requestBody: BroadcasttransactionPostBody): Observable<BroadcasttransactionReturn> {
			return this.http.post<BroadcasttransactionReturn>(this.baseUri + 'v2/eth/transactions/broadcast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * listAddresses
		 * listAddresses
		 * Get v2/ethereum/addresses
		 * @return {ListaddressesReturn} listAddresses
		 */
		Listaddresses(): Observable<ListaddressesReturn> {
			return this.http.get<ListaddressesReturn>(this.baseUri + 'v2/ethereum/addresses', {});
		}

		/**
		 * newAddress
		 * newAddress
		 * Post v2/ethereum/addresses
		 * @return {NewaddressReturn} newAddress
		 */
		Newaddress(requestBody: NewaddressPostBody): Observable<NewaddressReturn> {
			return this.http.post<NewaddressReturn>(this.baseUri + 'v2/ethereum/addresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * exportAddress
		 * exportAddress
		 * Post v2/ethereum/addresses/export/{address}
		 * @return {ExportaddressReturn} exportAddress
		 */
		Exportaddress(requestBody: ExportaddressPostBody): Observable<ExportaddressReturn> {
			return this.http.post<ExportaddressReturn>(this.baseUri + 'v2/ethereum/addresses/export/{address}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * importAddress
		 * importAddress
		 * Post v2/ethereum/addresses/import
		 * @return {ImportaddressReturn} importAddress
		 */
		Importaddress(requestBody: ImportaddressPostBody): Observable<ImportaddressReturn> {
			return this.http.post<ImportaddressReturn>(this.baseUri + 'v2/ethereum/addresses/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * deleteAddress
		 * deleteAddress
		 * Delete v2/ethereum/addresses/{address}
		 * @return {DeleteaddressReturn} deleteAddress
		 */
		Deleteaddress(): Observable<DeleteaddressReturn> {
			return this.http.delete<DeleteaddressReturn>(this.baseUri + 'v2/ethereum/addresses/{address}', {});
		}

		/**
		 * ListTransactionsByAddress
		 * Our API provides an endpoint for retrieving all transactions associated with a particular blockchain address. To use this endpoint, you will need to provide the wallet address as a parameter in the request.
		 * Each page of results returned by this endpoint contains up to 100 entries, and you can use a paginator to navigate through the pages of results.
		 * To use the paginator, you can include parameter in your request: "page" . The "page" parameter specifies which page of results to retrieve,
		 * For example, to retrieve the first 100 transactions associated with a particular blockchain address, you would make a request to the following URL:
		 * ```
		 * /addresses//transactions/1
		 * ```
		 * If there are more than 100 transactions associated with the blockchain address, you can retrieve additional pages of results by incrementing the "page" parameter in your request. For example, to retrieve the next 100 transactions, you would make a request to the following URL:
		 * ```
		 * /addresses//transactions/2
		 * ```
		 * By using the paginator, you can retrieve all transactions associated with a particular blockchain address, regardless of the total number of transactions in the blockchain.
		 * each request tells you the max pages within the Request in the **max_pages** field
		 * `"max_pages": 515`
		 * Get v2/ethereum/addresses/{address}/transactions/{page}
		 * @return {ListtransactionsbyaddressReturn} ListTransactionsByAddress
		 */
		Listtransactionsbyaddress(): Observable<ListtransactionsbyaddressReturn> {
			return this.http.get<ListtransactionsbyaddressReturn>(this.baseUri + 'v2/ethereum/addresses/{address}/transactions/{page}', {});
		}

		/**
		 * getEthereumBalance
		 * Get the balance of an address
		 * Get v2/ethereum/balances/{address}
		 * @return {GetethereumbalanceReturn} getEthereumBalance
		 */
		Getethereumbalance(): Observable<GetethereumbalanceReturn> {
			return this.http.get<GetethereumbalanceReturn>(this.baseUri + 'v2/ethereum/balances/{address}', {});
		}

		/**
		 * getAllERC20Balance
		 * Get the balance of an ERC20 address
		 * Get v2/ethereum/balances/{address}/erc20/{erc20_token}
		 * @return {Getallerc20balanceReturn} getERC20Balance
		 */
		Getallerc20balance(): Observable<Getallerc20balanceReturn> {
			return this.http.get<Getallerc20balanceReturn>(this.baseUri + 'v2/ethereum/balances/{address}/erc20/{erc20_token}', {});
		}

		/**
		 * getLastBlockNumber
		 * Get the latest block number
		 * Get v2/ethereum/blocks/number
		 * @return {GetlastblocknumberReturn} getLastBlockNumber
		 */
		Getlastblocknumber(): Observable<GetlastblocknumberReturn> {
			return this.http.get<GetlastblocknumberReturn>(this.baseUri + 'v2/ethereum/blocks/number', {});
		}

		/**
		 * getBlock
		 * Get information of a specific block
		 * Get v2/ethereum/blocks/{block}
		 * @return {GetblockReturn} getBlock
		 */
		Getblock(): Observable<GetblockReturn> {
			return this.http.get<GetblockReturn>(this.baseUri + 'v2/ethereum/blocks/{block}', {});
		}

		/**
		 * getERC20
		 * Get information about an ERC20 token
		 * Get v2/ethereum/erc20/{erc20_token}
		 * @return {Geterc20Return} getERC20
		 */
		Geterc20(): Observable<Geterc20Return> {
			return this.http.get<Geterc20Return>(this.baseUri + 'v2/ethereum/erc20/{erc20_token}', {});
		}

		/**
		 * getGasPrice
		 * Get gas price
		 * Get v2/ethereum/gasprice
		 * @return {GetgaspriceReturn} getGasPrice
		 */
		Getgasprice(): Observable<GetgaspriceReturn> {
			return this.http.get<GetgaspriceReturn>(this.baseUri + 'v2/ethereum/gasprice', {});
		}

		/**
		 * getNFTOwner
		 * Get the Owner of an NFT
		 * Get v2/ethereum/nfts/{contract}/owner/{token_id}
		 * @return {GetnftownerReturn} getNFTOwner
		 */
		Getnftowner(): Observable<GetnftownerReturn> {
			return this.http.get<GetnftownerReturn>(this.baseUri + 'v2/ethereum/nfts/{contract}/owner/{token_id}', {});
		}

		/**
		 * getNFTUri
		 * Get the URI of an NFT
		 * Get v2/ethereum/nfts/{contract}/uri/{token_id}
		 * @return {GetnfturiReturn} getNFTUri
		 */
		Getnfturi(): Observable<GetnfturiReturn> {
			return this.http.get<GetnfturiReturn>(this.baseUri + 'v2/ethereum/nfts/{contract}/uri/{token_id}', {});
		}

		/**
		 * sendTransaction
		 * sendTransaction
		 * Post v2/ethereum/transactions
		 * @return {void} 
		 */
		Sendtransaction(requestBody: SendtransactionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/ethereum/transactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * sendERC20
		 * sendERC20
		 * Post v2/ethereum/transactions/erc20
		 * @return {void} 
		 */
		Senderc20(requestBody: Senderc20PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/ethereum/transactions/erc20', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * sendERC721
		 * sendERC721
		 * Post v2/ethereum/transactions/erc721
		 * @return {void} 
		 */
		Senderc721(requestBody: Senderc721PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/ethereum/transactions/erc721', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * getTransaction
		 * Get info about a transaction
		 * You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details
		 * Get v2/ethereum/transactions/{transaction}/decoded
		 * @return {GettransactionReturn} getTransactionReceipt (encoded)
		 */
		Gettransaction(): Observable<GettransactionReturn> {
			return this.http.get<GettransactionReturn>(this.baseUri + 'v2/ethereum/transactions/{transaction}/decoded', {});
		}

		/**
		 * getTransactionReceipt
		 * Get info about a transaction receipt
		 * You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details
		 * Get v2/ethereum/transactions/{transaction}/receipt/decoded
		 * @return {GettransactionreceiptReturn} getTransactionReceipt (encoded)
		 */
		Gettransactionreceipt(): Observable<GettransactionreceiptReturn> {
			return this.http.get<GettransactionreceiptReturn>(this.baseUri + 'v2/ethereum/transactions/{transaction}/receipt/decoded', {});
		}

		/**
		 * listSubscribedAddresses
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/ethereum/webhooks
		 * @return {ListsubscribedaddressesReturn} listSubscribedAddresses
		 */
		Listsubscribedaddresses(): Observable<ListsubscribedaddressesReturn> {
			return this.http.get<ListsubscribedaddressesReturn>(this.baseUri + 'v2/ethereum/webhooks', {});
		}

		/**
		 * subscribeAddress
		 * Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.
		 * You can choose one or more from following filter criterias
		 * | **Parameter** | **Description** |
		 * | --- | --- |
		 * | from | ethereum address |
		 * | to | ethereum address |
		 * | contractaddress | contract address |
		 * | tokenid | token id |
		 * You also need to dpecify the parameter "type". you can choose between \['ETH', 'ERC20', 'ERC721', null\]
		 * Post v2/ethereum/webhooks
		 * @return {SubscribeaddressReturn} subscribeAddress
		 */
		Subscribeaddress(requestBody: SubscribeaddressPostBody): Observable<SubscribeaddressReturn> {
			return this.http.post<SubscribeaddressReturn>(this.baseUri + 'v2/ethereum/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * resendFailedIPN
		 * Returns all subscriptions/IPNs created with an account.
		 * Post v2/ethereum/webhooks/notifications/failed/{notification}
		 * @return {ResendfailedipnReturn} resendFailedIPN
		 */
		Resendfailedipn(requestBody: string): Observable<ResendfailedipnReturn> {
			return this.http.post<ResendfailedipnReturn>(this.baseUri + 'v2/ethereum/webhooks/notifications/failed/{notification}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * unsubscribeAddress
		 * Deletes an existing subscription/IPN for the given address (and contractaddress).
		 * Delete v2/ethereum/webhooks/{webhook}
		 * @return {UnsubscribeaddressReturn} unsubscribeAddress
		 */
		Unsubscribeaddress(): Observable<UnsubscribeaddressReturn> {
			return this.http.delete<UnsubscribeaddressReturn>(this.baseUri + 'v2/ethereum/webhooks/{webhook}', {});
		}

		/**
		 * listIPNsByWebhookId
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/ethereum/webkhooks/notifications/failed
		 * @return {ListipnsbywebhookidReturn} listFailedIPNs
		 */
		Listipnsbywebhookid(): Observable<ListipnsbywebhookidReturn> {
			return this.http.get<ListipnsbywebhookidReturn>(this.baseUri + 'v2/ethereum/webkhooks/notifications/failed', {});
		}

		/**
		 * listFailedIPNs
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/ethereum/webkhooks/{webhook}/notifications/failed
		 * @return {ListfailedipnsReturn} listFailedIPNs
		 */
		Listfailedipns(): Observable<ListfailedipnsReturn> {
			return this.http.get<ListfailedipnsReturn>(this.baseUri + 'v2/ethereum/webkhooks/{webhook}/notifications/failed', {});
		}

		/**
		 * getCurrencies
		 * getCurrencies
		 * Get v2/markets/currencies
		 * @return {GetcurrenciesReturn} getCurrencies
		 */
		Getcurrencies(): Observable<GetcurrenciesReturn> {
			return this.http.get<GetcurrenciesReturn>(this.baseUri + 'v2/markets/currencies', {});
		}

		/**
		 * getPriceDataByCurrency
		 * getPriceDataByCurrency
		 * Get v2/markets/data/{currency1}/{currency2}
		 * @return {GetpricedatabycurrencyReturn} getPriceDataByCurrency
		 */
		Getpricedatabycurrency(): Observable<GetpricedatabycurrencyReturn> {
			return this.http.get<GetpricedatabycurrencyReturn>(this.baseUri + 'v2/markets/data/{currency1}/{currency2}', {});
		}

		/**
		 * getRateByCurrency
		 * getRateByCurrency
		 * Get v2/markets/prices/{currency1}/{currency2}
		 * @return {GetratebycurrencyReturn} getRateByCurrency
		 */
		Getratebycurrency(): Observable<GetratebycurrencyReturn> {
			return this.http.get<GetratebycurrencyReturn>(this.baseUri + 'v2/markets/prices/{currency1}/{currency2}', {});
		}

		/**
		 * getAllTimeLow
		 * getAllTimeLow
		 * Get v2/markets/prices/{currency1}/{currency2}/atl
		 * @return {GetalltimelowReturn} getAllTimeLow
		 */
		Getalltimelow(): Observable<GetalltimelowReturn> {
			return this.http.get<GetalltimelowReturn>(this.baseUri + 'v2/markets/prices/{currency1}/{currency2}/atl', {});
		}

		/**
		 * getAllTimeHigh
		 * getAllTimeHigh
		 * Get v2/markets/prices/{currency1}/{currenty2}/ath
		 * @return {GetalltimehighReturn} getAllTimeHigh
		 */
		Getalltimehigh(): Observable<GetalltimehighReturn> {
			return this.http.get<GetalltimehighReturn>(this.baseUri + 'v2/markets/prices/{currency1}/{currenty2}/ath', {});
		}

		/**
		 * listAddresses
		 * listAddresses
		 * Get v2/polygon/addresses
		 * @return {Listaddresses1Return} listAddresses
		 */
		Listaddresses1(): Observable<Listaddresses1Return> {
			return this.http.get<Listaddresses1Return>(this.baseUri + 'v2/polygon/addresses', {});
		}

		/**
		 * newAddress
		 * newAddress
		 * Post v2/polygon/addresses
		 * @return {Newaddress1Return} newAddress
		 */
		Newaddress1(requestBody: Newaddress1PostBody): Observable<Newaddress1Return> {
			return this.http.post<Newaddress1Return>(this.baseUri + 'v2/polygon/addresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * importAddress
		 * importAddress
		 * Post v2/polygon/addresses/import
		 * @return {Importaddress1Return} importAddress
		 */
		Importaddress1(requestBody: Importaddress1PostBody): Observable<Importaddress1Return> {
			return this.http.post<Importaddress1Return>(this.baseUri + 'v2/polygon/addresses/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * deleteAddress
		 * deleteAddress
		 * Delete v2/polygon/addresses/{address}
		 * @return {Deleteaddress1Return} deleteAddress
		 */
		Deleteaddress1(): Observable<Deleteaddress1Return> {
			return this.http.delete<Deleteaddress1Return>(this.baseUri + 'v2/polygon/addresses/{address}', {});
		}

		/**
		 * ListTransactionsByAddress
		 * Our API provides an endpoint for retrieving all transactions associated with a particular blockchain address. To use this endpoint, you will need to provide the wallet address as a parameter in the request.
		 * Each page of results returned by this endpoint contains up to 100 entries, and you can use a paginator to navigate through the pages of results.
		 * To use the paginator, you can include parameter in your request: "page" . The "page" parameter specifies which page of results to retrieve,
		 * For example, to retrieve the first 100 transactions associated with a particular blockchain address, you would make a request to the following URL:
		 * ```
		 * /addresses//transactions/1
		 * ```
		 * If there are more than 100 transactions associated with the blockchain address, you can retrieve additional pages of results by incrementing the "page" parameter in your request. For example, to retrieve the next 100 transactions, you would make a request to the following URL:
		 * ```
		 * /addresses//transactions/2
		 * ```
		 * By using the paginator, you can retrieve all transactions associated with a particular blockchain address, regardless of the total number of transactions in the blockchain.
		 * each request tells you the max pages within the Request in the **max_pages** field
		 * `"max_pages": 515`
		 * Get v2/polygon/addresses/{address}/transactions/{page}
		 * @return {Listtransactionsbyaddress1Return} 200
		 */
		Listtransactionsbyaddress1(): Observable<Listtransactionsbyaddress1Return> {
			return this.http.get<Listtransactionsbyaddress1Return>(this.baseUri + 'v2/polygon/addresses/{address}/transactions/{page}', {});
		}

		/**
		 * getPolygonBalance
		 * Get the balance of an address
		 * Get v2/polygon/balances/{address}
		 * @return {GetpolygonbalanceReturn} getEthereumBalance
		 */
		Getpolygonbalance(): Observable<GetpolygonbalanceReturn> {
			return this.http.get<GetpolygonbalanceReturn>(this.baseUri + 'v2/polygon/balances/{address}', {});
		}

		/**
		 * getERC20Balance
		 * Get the balance of an ERC20 address
		 * Get v2/polygon/balances/{address}/erc20/{erc20_token}
		 * @return {Geterc20balance1Return} getERC20Balance
		 */
		Geterc20balance1(): Observable<Geterc20balance1Return> {
			return this.http.get<Geterc20balance1Return>(this.baseUri + 'v2/polygon/balances/{address}/erc20/{erc20_token}', {});
		}

		/**
		 * getLastBlockNumber
		 * Get the latest block number
		 * Get v2/polygon/blocks/number
		 * @return {Getlastblocknumber1Return} getLastBlockNumber
		 */
		Getlastblocknumber1(): Observable<Getlastblocknumber1Return> {
			return this.http.get<Getlastblocknumber1Return>(this.baseUri + 'v2/polygon/blocks/number', {});
		}

		/**
		 * getBlock
		 * Get information of a specific block
		 * Get v2/polygon/blocks/{block}
		 * @return {Getblock1Return} getBlock
		 */
		Getblock1(): Observable<Getblock1Return> {
			return this.http.get<Getblock1Return>(this.baseUri + 'v2/polygon/blocks/{block}', {});
		}

		/**
		 * getERC20
		 * Get information about an ERC20 token
		 * Get v2/polygon/erc20/{erc20_token}
		 * @return {Geterc201Return} getERC20
		 */
		Geterc201(): Observable<Geterc201Return> {
			return this.http.get<Geterc201Return>(this.baseUri + 'v2/polygon/erc20/{erc20_token}', {});
		}

		/**
		 * getGasPrice
		 * Get gas price
		 * Get v2/polygon/gasprice
		 * @return {Getgasprice1Return} getGasPrice
		 */
		Getgasprice1(): Observable<Getgasprice1Return> {
			return this.http.get<Getgasprice1Return>(this.baseUri + 'v2/polygon/gasprice', {});
		}

		/**
		 * getNFTOwner
		 * Get the Owner of an NFT
		 * Get v2/polygon/nfts/{contract}/owner/{token_id}
		 * @return {Getnftowner1Return} getNFTOwner
		 */
		Getnftowner1(): Observable<Getnftowner1Return> {
			return this.http.get<Getnftowner1Return>(this.baseUri + 'v2/polygon/nfts/{contract}/owner/{token_id}', {});
		}

		/**
		 * getNFTUri
		 * Get the URI of an NFT
		 * Get v2/polygon/nfts/{ft_contract}/uri/{token_id}
		 * @return {Getnfturi1Return} getNFTUri
		 */
		Getnfturi1(): Observable<Getnfturi1Return> {
			return this.http.get<Getnfturi1Return>(this.baseUri + 'v2/polygon/nfts/{ft_contract}/uri/{token_id}', {});
		}

		/**
		 * sendTransaction
		 * sendTransaction
		 * Post v2/polygon/transactions
		 * @return {void} 
		 */
		Sendtransaction1(requestBody: Sendtransaction1PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/polygon/transactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * broadcastTransaction
		 * Broadcast raw transactions
		 * Post v2/polygon/transactions/broadcast
		 * @return {Broadcasttransaction1Return} broadcastTransaction
		 */
		Broadcasttransaction1(requestBody: Broadcasttransaction1PostBody): Observable<Broadcasttransaction1Return> {
			return this.http.post<Broadcasttransaction1Return>(this.baseUri + 'v2/polygon/transactions/broadcast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * sendERC20
		 * sendERC20
		 * Post v2/polygon/transactions/erc20
		 * @return {void} 
		 */
		Senderc201(requestBody: Senderc201PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/polygon/transactions/erc20', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * sendERC721
		 * sendERC721
		 * Post v2/polygon/transactions/erc721
		 * @return {void} 
		 */
		Senderc7211(requestBody: Senderc7211PostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/polygon/transactions/erc721', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * getTransaction
		 * Get info about a transaction
		 * You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details
		 * Get v2/polygon/transactions/{transaction}/decoded
		 * @return {Gettransaction1Return} getTransactionReceipt (encoded)
		 */
		Gettransaction1(): Observable<Gettransaction1Return> {
			return this.http.get<Gettransaction1Return>(this.baseUri + 'v2/polygon/transactions/{transaction}/decoded', {});
		}

		/**
		 * getTransactionReceipt
		 * Get info about a transaction receipt
		 * You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details
		 * Get v2/polygon/transactions/{transaction}/receipt/decoded
		 * @return {Gettransactionreceipt1Return} getTransactionReceipt (encoded)
		 */
		Gettransactionreceipt1(): Observable<Gettransactionreceipt1Return> {
			return this.http.get<Gettransactionreceipt1Return>(this.baseUri + 'v2/polygon/transactions/{transaction}/receipt/decoded', {});
		}

		/**
		 * listSubscribedAddresses
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/polygon/webhooks
		 * @return {Listsubscribedaddresses1Return} listSubscribedAddresses
		 */
		Listsubscribedaddresses1(): Observable<Listsubscribedaddresses1Return> {
			return this.http.get<Listsubscribedaddresses1Return>(this.baseUri + 'v2/polygon/webhooks', {});
		}

		/**
		 * subscribeAddress
		 * Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.
		 * You can choose one or more from following filter criterias
		 * | **Parameter** | **Description** |
		 * | --- | --- |
		 * | from | ethereum address |
		 * | to | ethereum address |
		 * | contractaddress | contract address |
		 * | tokenid | token id |
		 * You also need to dpecify the parameter "type". you can choose between \['ETH', 'ERC20', 'ERC721', null\]
		 * Post v2/polygon/webhooks
		 * @return {Subscribeaddress1Return} subscribeAddress
		 */
		Subscribeaddress1(requestBody: Subscribeaddress1PostBody): Observable<Subscribeaddress1Return> {
			return this.http.post<Subscribeaddress1Return>(this.baseUri + 'v2/polygon/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * resendFailedIPN
		 * Returns all subscriptions/IPNs created with an account.
		 * Post v2/polygon/webhooks/notifications/failed/{notification_id}
		 * @return {Resendfailedipn1Return} resendFailedIPN
		 */
		Resendfailedipn1(requestBody: string): Observable<Resendfailedipn1Return> {
			return this.http.post<Resendfailedipn1Return>(this.baseUri + 'v2/polygon/webhooks/notifications/failed/{notification_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * unsubscribeAddress
		 * Deletes an existing subscription/IPN for the given address (and contractaddress).
		 * Delete v2/polygon/webhooks/{webhook}
		 * @return {Unsubscribeaddress1Return} unsubscribeAddress
		 */
		Unsubscribeaddress1(): Observable<Unsubscribeaddress1Return> {
			return this.http.delete<Unsubscribeaddress1Return>(this.baseUri + 'v2/polygon/webhooks/{webhook}', {});
		}

		/**
		 * listIPNsByWebhookId
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/polygon/webkhooks/notifications/failed
		 * @return {Listipnsbywebhookid1Return} listFailedIPNs
		 */
		Listipnsbywebhookid1(): Observable<Listipnsbywebhookid1Return> {
			return this.http.get<Listipnsbywebhookid1Return>(this.baseUri + 'v2/polygon/webkhooks/notifications/failed', {});
		}

		/**
		 * listFailedIPNs
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/polygon/webkhooks/{webhook}/notifications/failed
		 * @return {Listfailedipns1Return} listFailedIPNs
		 */
		Listfailedipns1(): Observable<Listfailedipns1Return> {
			return this.http.get<Listfailedipns1Return>(this.baseUri + 'v2/polygon/webkhooks/{webhook}/notifications/failed', {});
		}

		/**
		 * getAccountResources
		 * getAccountResources
		 * Get v2/tron/account/{address}/resources
		 * @return {GetaccountresourcesReturn} getAccountResources
		 */
		Getaccountresources(): Observable<GetaccountresourcesReturn> {
			return this.http.get<GetaccountresourcesReturn>(this.baseUri + 'v2/tron/account/{address}/resources', {});
		}

		/**
		 * newAddress
		 * newAddress
		 * Post v2/tron/addresses
		 * @return {Newaddress3Return} newAddress
		 */
		Newaddress3(requestBody: Newaddress3PostBody): Observable<Newaddress3Return> {
			return this.http.post<Newaddress3Return>(this.baseUri + 'v2/tron/addresses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ListTransactionsByAddress
		 * Our API provides an endpoint for retrieving all transactions associated with a particular blockchain address. To use this endpoint, you will need to provide the wallet address as a parameter in the request.
		 * Each page of results returned by this endpoint contains up to 100 entries, and you can use a paginator to navigate through the pages of results.
		 * To use the paginator, you can include parameter in your request: "page" . The "page" parameter specifies which page of results to retrieve,
		 * For example, to retrieve the first 100 transactions associated with a particular blockchain address, you would make a request to the following URL:
		 * ```
		 * /addresses//transactions/1
		 * ```
		 * If there are more than 100 transactions associated with the blockchain address, you can retrieve additional pages of results by incrementing the "page" parameter in your request. For example, to retrieve the next 100 transactions, you would make a request to the following URL:
		 * ```
		 * /addresses//transactions/2
		 * ```
		 * By using the paginator, you can retrieve all transactions associated with a particular blockchain address, regardless of the total number of transactions in the blockchain.
		 * each request tells you the max pages within the Request in the **max_pages** field
		 * `"max_pages": 515`
		 * Get v2/tron/addresses/{address}/transactions/{page}
		 * @return {Listtransactionsbyaddress3Return} 200
		 */
		Listtransactionsbyaddress3(): Observable<Listtransactionsbyaddress3Return> {
			return this.http.get<Listtransactionsbyaddress3Return>(this.baseUri + 'v2/tron/addresses/{address}/transactions/{page}', {});
		}

		/**
		 * getTRC10Balance
		 * getTRC10Balance
		 * Get v2/tron/balances/{account}/trc10/{tokenId}
		 * @return {Gettrc10balanceReturn} getTRC10Balance
		 */
		Gettrc10balance(): Observable<Gettrc10balanceReturn> {
			return this.http.get<Gettrc10balanceReturn>(this.baseUri + 'v2/tron/balances/{account}/trc10/{tokenId}', {});
		}

		/**
		 * getTRC20Balance
		 * getTRC20Balance
		 * Get v2/tron/balances/{account}/trc20/{token}
		 * @return {Gettrc20balanceReturn} getTRC20Balance
		 */
		Gettrc20balance(): Observable<Gettrc20balanceReturn> {
			return this.http.get<Gettrc20balanceReturn>(this.baseUri + 'v2/tron/balances/{account}/trc20/{token}', {});
		}

		/**
		 * getTronBalance
		 * getTronBalance
		 * Get v2/tron/balances/{address}
		 * @return {GettronbalanceReturn} getTronBalance
		 */
		Gettronbalance(): Observable<GettronbalanceReturn> {
			return this.http.get<GettronbalanceReturn>(this.baseUri + 'v2/tron/balances/{address}', {});
		}

		/**
		 * getLastBlockNumber
		 * Get the latest block number
		 * Get v2/tron/blocks/number
		 * @return {Getlastblocknumber3Return} getBlockNumber
		 */
		Getlastblocknumber3(): Observable<Getlastblocknumber3Return> {
			return this.http.get<Getlastblocknumber3Return>(this.baseUri + 'v2/tron/blocks/number', {});
		}

		/**
		 * getBlock
		 * getBlock
		 * Get v2/tron/blocks/{block}
		 * @return {Getblock3Return} getBlock
		 */
		Getblock3(): Observable<Getblock3Return> {
			return this.http.get<Getblock3Return>(this.baseUri + 'v2/tron/blocks/{block}', {});
		}

		/**
		 * getChainParameters
		 * getChainParameters
		 * Get v2/tron/chainparameters
		 * @return {GetchainparametersReturn} getChainParameters
		 */
		Getchainparameters(): Observable<GetchainparametersReturn> {
			return this.http.get<GetchainparametersReturn>(this.baseUri + 'v2/tron/chainparameters', {});
		}

		/**
		 * sendTransaction
		 * sendTransaction
		 * Post v2/tron/transactions
		 * @return {Sendtransaction3Return} sendTransaction
		 */
		Sendtransaction3(requestBody: Sendtransaction3PostBody): Observable<Sendtransaction3Return> {
			return this.http.post<Sendtransaction3Return>(this.baseUri + 'v2/tron/transactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * sendTRC10
		 * sendTRC10
		 * Post v2/tron/transactions/trc10
		 * @return {Sendtrc10Return} sendTRC10
		 */
		Sendtrc10(requestBody: Sendtrc10PostBody): Observable<Sendtrc10Return> {
			return this.http.post<Sendtrc10Return>(this.baseUri + 'v2/tron/transactions/trc10', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * sendTRC20
		 * sendTRC20
		 * Post v2/tron/transactions/trc20
		 * @return {Sendtrc20Return} sendTRC20
		 */
		Sendtrc20(requestBody: Sendtrc20PostBody): Observable<Sendtrc20Return> {
			return this.http.post<Sendtrc20Return>(this.baseUri + 'v2/tron/transactions/trc20', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * getTransaction
		 * You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part
		 * Get v2/tron/transactions/{transaction}/decoded
		 * @return {Gettransaction3Return} getTransaction (encoded)
		 */
		Gettransaction3(): Observable<Gettransaction3Return> {
			return this.http.get<Gettransaction3Return>(this.baseUri + 'v2/tron/transactions/{transaction}/decoded', {});
		}

		/**
		 * getTransactionReceipt
		 * You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part
		 * Get v2/tron/transactions/{transaction}/receipt/decoded
		 * @return {Gettransactionreceipt3Return} getTransactionReceipt (encoded)
		 */
		Gettransactionreceipt3(): Observable<Gettransactionreceipt3Return> {
			return this.http.get<Gettransactionreceipt3Return>(this.baseUri + 'v2/tron/transactions/{transaction}/receipt/decoded', {});
		}

		/**
		 * listSubscribedAddresses
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/tron/webhooks
		 * @return {Listsubscribedaddresses3Return} listSubscribedAddresses
		 */
		Listsubscribedaddresses3(): Observable<Listsubscribedaddresses3Return> {
			return this.http.get<Listsubscribedaddresses3Return>(this.baseUri + 'v2/tron/webhooks', {});
		}

		/**
		 * subscribeAddress
		 * Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.
		 * Post v2/tron/webhooks
		 * @return {Subscribeaddress3Return} subscribeAddress
		 */
		Subscribeaddress3(requestBody: Subscribeaddress3PostBody): Observable<Subscribeaddress3Return> {
			return this.http.post<Subscribeaddress3Return>(this.baseUri + 'v2/tron/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * listFailedIPNs
		 * Returns all subscriptions/IPNs created with an account.
		 * Get v2/tron/webhooks/notifications/failed
		 * @return {Listfailedipns3Return} listFailedIPNs
		 */
		Listfailedipns3(): Observable<Listfailedipns3Return> {
			return this.http.get<Listfailedipns3Return>(this.baseUri + 'v2/tron/webhooks/notifications/failed', {});
		}

		/**
		 * resendFailedIPN
		 * Returns all subscriptions/IPNs created with an account.
		 * Post v2/tron/webhooks/notifications/failed/62640817eb594da78c7bee00
		 * @return {Resendfailedipn3Return} resendFailedIPN
		 */
		Resendfailedipn3(requestBody: string): Observable<Resendfailedipn3Return> {
			return this.http.post<Resendfailedipn3Return>(this.baseUri + 'v2/tron/webhooks/notifications/failed/62640817eb594da78c7bee00', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * unsubscribeAddress
		 * Deletes an existing subscription/IPN for the given address (and contractaddress).
		 * Delete v2/tron/webhooks/{webhookid}
		 * @return {Unsubscribeaddress3Return} unsubscribeAddress
		 */
		Unsubscribeaddress3(): Observable<Unsubscribeaddress3Return> {
			return this.http.delete<Unsubscribeaddress3Return>(this.baseUri + 'v2/tron/webhooks/{webhookid}', {});
		}
	}

	export interface Getlastblocknumber4Return {
		data?: Getlastblocknumber4ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getlastblocknumber4ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetlastblocknumber4ReturnFormGroup() {
		return new FormGroup<Getlastblocknumber4ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getlastblocknumber4ReturnData {
		blocknumber?: number | null;
	}
	export interface Getlastblocknumber4ReturnDataFormProperties {
		blocknumber: FormControl<number | null | undefined>,
	}
	export function CreateGetlastblocknumber4ReturnDataFormGroup() {
		return new FormGroup<Getlastblocknumber4ReturnDataFormProperties>({
			blocknumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getblock4Return {
		Getblock4ReturnData?: Array<Getblock4ReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getblock4ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetblock4ReturnFormGroup() {
		return new FormGroup<Getblock4ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getblock4ReturnData {
		error?: any;
		id?: number | null;
		result?: Getblock4ReturnDataResult;
	}
	export interface Getblock4ReturnDataFormProperties {
		error: FormControl<any | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateGetblock4ReturnDataFormGroup() {
		return new FormGroup<Getblock4ReturnDataFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getblock4ReturnDataResult {
		bits?: string | null;
		chainwork?: string | null;
		confirmations?: number | null;
		difficulty?: number | null;
		hash?: string | null;
		height?: number | null;
		mediantime?: number | null;
		merkleroot?: string | null;
		nTx?: number | null;
		nextblockhash?: string | null;
		nonce?: number | null;
		previousblockhash?: string | null;
		size?: number | null;
		strippedsize?: number | null;
		time?: number | null;
		tx?: Array<string>;
		version?: number | null;
		versionHex?: string | null;
		weight?: number | null;
	}
	export interface Getblock4ReturnDataResultFormProperties {
		bits: FormControl<string | null | undefined>,
		chainwork: FormControl<string | null | undefined>,
		confirmations: FormControl<number | null | undefined>,
		difficulty: FormControl<number | null | undefined>,
		hash: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		mediantime: FormControl<number | null | undefined>,
		merkleroot: FormControl<string | null | undefined>,
		nTx: FormControl<number | null | undefined>,
		nextblockhash: FormControl<string | null | undefined>,
		nonce: FormControl<number | null | undefined>,
		previousblockhash: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
		strippedsize: FormControl<number | null | undefined>,
		time: FormControl<number | null | undefined>,
		version: FormControl<number | null | undefined>,
		versionHex: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
	}
	export function CreateGetblock4ReturnDataResultFormGroup() {
		return new FormGroup<Getblock4ReturnDataResultFormProperties>({
			bits: new FormControl<string | null | undefined>(undefined),
			chainwork: new FormControl<string | null | undefined>(undefined),
			confirmations: new FormControl<number | null | undefined>(undefined),
			difficulty: new FormControl<number | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			mediantime: new FormControl<number | null | undefined>(undefined),
			merkleroot: new FormControl<string | null | undefined>(undefined),
			nTx: new FormControl<number | null | undefined>(undefined),
			nextblockhash: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<number | null | undefined>(undefined),
			previousblockhash: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			strippedsize: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			versionHex: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetfeesReturn {
		data?: GetfeesReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetfeesReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetfeesReturnFormGroup() {
		return new FormGroup<GetfeesReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetfeesReturnData {
		blocks?: number | null;
		feerate?: string | null;
	}
	export interface GetfeesReturnDataFormProperties {
		blocks: FormControl<number | null | undefined>,
		feerate: FormControl<string | null | undefined>,
	}
	export function CreateGetfeesReturnDataFormGroup() {
		return new FormGroup<GetfeesReturnDataFormProperties>({
			blocks: new FormControl<number | null | undefined>(undefined),
			feerate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetblockchaininfoReturn {
		data?: GetblockchaininfoReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetblockchaininfoReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetblockchaininfoReturnFormGroup() {
		return new FormGroup<GetblockchaininfoReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetblockchaininfoReturnData {
		bestblockhash?: string | null;
		blocks?: number | null;
		chain?: string | null;
		chainwork?: string | null;
		difficulty?: number | null;
		headers?: number | null;
		initialblockdownload?: boolean | null;
		mediantime?: number | null;
		pruned?: boolean | null;
		size_on_disk?: number | null;
		time?: number | null;
		verificationprogress?: number | null;
		warnings?: string | null;
	}
	export interface GetblockchaininfoReturnDataFormProperties {
		bestblockhash: FormControl<string | null | undefined>,
		blocks: FormControl<number | null | undefined>,
		chain: FormControl<string | null | undefined>,
		chainwork: FormControl<string | null | undefined>,
		difficulty: FormControl<number | null | undefined>,
		headers: FormControl<number | null | undefined>,
		initialblockdownload: FormControl<boolean | null | undefined>,
		mediantime: FormControl<number | null | undefined>,
		pruned: FormControl<boolean | null | undefined>,
		size_on_disk: FormControl<number | null | undefined>,
		time: FormControl<number | null | undefined>,
		verificationprogress: FormControl<number | null | undefined>,
		warnings: FormControl<string | null | undefined>,
	}
	export function CreateGetblockchaininfoReturnDataFormGroup() {
		return new FormGroup<GetblockchaininfoReturnDataFormProperties>({
			bestblockhash: new FormControl<string | null | undefined>(undefined),
			blocks: new FormControl<number | null | undefined>(undefined),
			chain: new FormControl<string | null | undefined>(undefined),
			chainwork: new FormControl<string | null | undefined>(undefined),
			difficulty: new FormControl<number | null | undefined>(undefined),
			headers: new FormControl<number | null | undefined>(undefined),
			initialblockdownload: new FormControl<boolean | null | undefined>(undefined),
			mediantime: new FormControl<number | null | undefined>(undefined),
			pruned: new FormControl<boolean | null | undefined>(undefined),
			size_on_disk: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			verificationprogress: new FormControl<number | null | undefined>(undefined),
			warnings: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sendtransaction4PostBody {
		amount?: string | null;
		password?: string | null;
		speed?: string | null;
		subtractfee?: boolean | null;
		to?: string | null;
		walletname?: string | null;
	}
	export interface Sendtransaction4PostBodyFormProperties {
		amount: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		speed: FormControl<string | null | undefined>,
		subtractfee: FormControl<boolean | null | undefined>,
		to: FormControl<string | null | undefined>,
		walletname: FormControl<string | null | undefined>,
	}
	export function CreateSendtransaction4PostBodyFormGroup() {
		return new FormGroup<Sendtransaction4PostBodyFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			speed: new FormControl<string | null | undefined>(undefined),
			subtractfee: new FormControl<boolean | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			walletname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransaction4Return {
		data?: Gettransaction4ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Gettransaction4ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettransaction4ReturnFormGroup() {
		return new FormGroup<Gettransaction4ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettransaction4ReturnData {
		blockhash?: string | null;
		confirmations?: number | null;
		hash?: string | null;
		hex?: string | null;
		Gettransaction4ReturnDataReceivers?: Array<Gettransaction4ReturnDataReceivers>;
		senders?: Array<string>;
		time?: number | null;
		txid?: string | null;
	}
	export interface Gettransaction4ReturnDataFormProperties {
		blockhash: FormControl<string | null | undefined>,
		confirmations: FormControl<number | null | undefined>,
		hash: FormControl<string | null | undefined>,
		hex: FormControl<string | null | undefined>,
		time: FormControl<number | null | undefined>,
		txid: FormControl<string | null | undefined>,
	}
	export function CreateGettransaction4ReturnDataFormGroup() {
		return new FormGroup<Gettransaction4ReturnDataFormProperties>({
			blockhash: new FormControl<string | null | undefined>(undefined),
			confirmations: new FormControl<number | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			hex: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransaction4ReturnDataReceivers {
		address?: string | null;
		n?: number | null;
		value?: number | null;
	}
	export interface Gettransaction4ReturnDataReceiversFormProperties {
		address: FormControl<string | null | undefined>,
		n: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateGettransaction4ReturnDataReceiversFormGroup() {
		return new FormGroup<Gettransaction4ReturnDataReceiversFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetwalletReturn {
		data?: GetwalletReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetwalletReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetwalletReturnFormGroup() {
		return new FormGroup<GetwalletReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetwalletReturnData {
		wallets?: Array<string>;
	}
	export interface GetwalletReturnDataFormProperties {
	}
	export function CreateGetwalletReturnDataFormGroup() {
		return new FormGroup<GetwalletReturnDataFormProperties>({
		});

	}

	export interface CreatewalletPostBody {
		password?: string | null;
	}
	export interface CreatewalletPostBodyFormProperties {
		password: FormControl<string | null | undefined>,
	}
	export function CreateCreatewalletPostBodyFormGroup() {
		return new FormGroup<CreatewalletPostBodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatewalletReturn {
		data?: CreatewalletReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface CreatewalletReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateCreatewalletReturnFormGroup() {
		return new FormGroup<CreatewalletReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreatewalletReturnData {
		bitcoinwallet?: string | null;
	}
	export interface CreatewalletReturnDataFormProperties {
		bitcoinwallet: FormControl<string | null | undefined>,
	}
	export function CreateCreatewalletReturnDataFormGroup() {
		return new FormGroup<CreatewalletReturnDataFormProperties>({
			bitcoinwallet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportaddressprivatekeyPostBody {
		password?: string | null;
	}
	export interface ExportaddressprivatekeyPostBodyFormProperties {
		password: FormControl<string | null | undefined>,
	}
	export function CreateExportaddressprivatekeyPostBodyFormGroup() {
		return new FormGroup<ExportaddressprivatekeyPostBodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportaddressprivatekeyReturn {
		data?: ExportaddressprivatekeyReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface ExportaddressprivatekeyReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateExportaddressprivatekeyReturnFormGroup() {
		return new FormGroup<ExportaddressprivatekeyReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExportaddressprivatekeyReturnData {
		private_key?: string | null;
	}
	export interface ExportaddressprivatekeyReturnDataFormProperties {
		private_key: FormControl<string | null | undefined>,
	}
	export function CreateExportaddressprivatekeyReturnDataFormGroup() {
		return new FormGroup<ExportaddressprivatekeyReturnDataFormProperties>({
			private_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetwalletaddressesReturn {
		data?: Array<string>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetwalletaddressesReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetwalletaddressesReturnFormGroup() {
		return new FormGroup<GetwalletaddressesReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreatewalletaddressReturn {
		data?: CreatewalletaddressReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface CreatewalletaddressReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateCreatewalletaddressReturnFormGroup() {
		return new FormGroup<CreatewalletaddressReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreatewalletaddressReturnData {
		address?: string | null;
	}
	export interface CreatewalletaddressReturnDataFormProperties {
		address: FormControl<string | null | undefined>,
	}
	export function CreateCreatewalletaddressReturnDataFormGroup() {
		return new FormGroup<CreatewalletaddressReturnDataFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletewalletReturn {
		data?: DeletewalletReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface DeletewalletReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateDeletewalletReturnFormGroup() {
		return new FormGroup<DeletewalletReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeletewalletReturnData {
		deleted?: boolean | null;
		walletname?: string | null;
	}
	export interface DeletewalletReturnDataFormProperties {
		deleted: FormControl<boolean | null | undefined>,
		walletname: FormControl<string | null | undefined>,
	}
	export function CreateDeletewalletReturnDataFormGroup() {
		return new FormGroup<DeletewalletReturnDataFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			walletname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listsubscribedaddresses4Return {
		data?: Listsubscribedaddresses4ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Listsubscribedaddresses4ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListsubscribedaddresses4ReturnFormGroup() {
		return new FormGroup<Listsubscribedaddresses4ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listsubscribedaddresses4ReturnData {
		Listsubscribedaddresses4ReturnDataIpns?: Array<Listsubscribedaddresses4ReturnDataIpns>;
	}
	export interface Listsubscribedaddresses4ReturnDataFormProperties {
	}
	export function CreateListsubscribedaddresses4ReturnDataFormGroup() {
		return new FormGroup<Listsubscribedaddresses4ReturnDataFormProperties>({
		});

	}

	export interface Listsubscribedaddresses4ReturnDataIpns {
		contractaddress?: any;
		from?: any;
		id?: string | null;
		to?: any;
		tokenid?: any;
		type?: any;
		url?: string | null;
	}
	export interface Listsubscribedaddresses4ReturnDataIpnsFormProperties {
		contractaddress: FormControl<any | null | undefined>,
		from: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		to: FormControl<any | null | undefined>,
		tokenid: FormControl<any | null | undefined>,
		type: FormControl<any | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListsubscribedaddresses4ReturnDataIpnsFormGroup() {
		return new FormGroup<Listsubscribedaddresses4ReturnDataIpnsFormProperties>({
			contractaddress: new FormControl<any | null | undefined>(undefined),
			from: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<any | null | undefined>(undefined),
			tokenid: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subscribeaddress4PostBody {
		from?: string | null;
		url?: string | null;
	}
	export interface Subscribeaddress4PostBodyFormProperties {
		from: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeaddress4PostBodyFormGroup() {
		return new FormGroup<Subscribeaddress4PostBodyFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subscribeaddress4Return {
		data?: Subscribeaddress4ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Subscribeaddress4ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateSubscribeaddress4ReturnFormGroup() {
		return new FormGroup<Subscribeaddress4ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Subscribeaddress4ReturnData {
		contractaddress?: any;
		from?: any;
		id?: string | null;
		to?: string | null;
		tokenid?: any;
		type?: any;
		url?: string | null;
	}
	export interface Subscribeaddress4ReturnDataFormProperties {
		contractaddress: FormControl<any | null | undefined>,
		from: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		tokenid: FormControl<any | null | undefined>,
		type: FormControl<any | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeaddress4ReturnDataFormGroup() {
		return new FormGroup<Subscribeaddress4ReturnDataFormProperties>({
			contractaddress: new FormControl<any | null | undefined>(undefined),
			from: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			tokenid: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listfailedipns4Return {
		Listfailedipns4ReturnFailed_ipns?: Array<Listfailedipns4ReturnFailed_ipns>;
		ok?: boolean | null;
	}
	export interface Listfailedipns4ReturnFormProperties {
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateListfailedipns4ReturnFormGroup() {
		return new FormGroup<Listfailedipns4ReturnFormProperties>({
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Listfailedipns4ReturnFailed_ipns {
		action?: string | null;
		amount?: string | null;
		contractaddress?: string | null;
		ethereumaddress?: string | null;
		id?: string | null;
		timestamp?: string | null;
		url?: string | null;
	}
	export interface Listfailedipns4ReturnFailed_ipnsFormProperties {
		action: FormControl<string | null | undefined>,
		amount: FormControl<string | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		ethereumaddress: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListfailedipns4ReturnFailed_ipnsFormGroup() {
		return new FormGroup<Listfailedipns4ReturnFailed_ipnsFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<string | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Resendfailedipn4Return {
		id?: number | null;
		ok?: boolean | null;
	}
	export interface Resendfailedipn4ReturnFormProperties {
		id: FormControl<number | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateResendfailedipn4ReturnFormGroup() {
		return new FormGroup<Resendfailedipn4ReturnFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Unsubscribeaddress4Return {
		data?: Unsubscribeaddress4ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Unsubscribeaddress4ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateUnsubscribeaddress4ReturnFormGroup() {
		return new FormGroup<Unsubscribeaddress4ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Unsubscribeaddress4ReturnData {
		id?: string | null;
	}
	export interface Unsubscribeaddress4ReturnDataFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeaddress4ReturnDataFormGroup() {
		return new FormGroup<Unsubscribeaddress4ReturnDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListaddressReturn {
		data?: ListaddressReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface ListaddressReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListaddressReturnFormGroup() {
		return new FormGroup<ListaddressReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListaddressReturnData {
		addresses?: Array<string>;
	}
	export interface ListaddressReturnDataFormProperties {
	}
	export function CreateListaddressReturnDataFormGroup() {
		return new FormGroup<ListaddressReturnDataFormProperties>({
		});

	}

	export interface Newaddress2PostBody {
		password?: string | null;
	}
	export interface Newaddress2PostBodyFormProperties {
		password: FormControl<string | null | undefined>,
	}
	export function CreateNewaddress2PostBodyFormGroup() {
		return new FormGroup<Newaddress2PostBodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Newaddress2Return {
		data?: Newaddress2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Newaddress2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateNewaddress2ReturnFormGroup() {
		return new FormGroup<Newaddress2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Newaddress2ReturnData {
		bscaddress?: string | null;
	}
	export interface Newaddress2ReturnDataFormProperties {
		bscaddress: FormControl<string | null | undefined>,
	}
	export function CreateNewaddress2ReturnDataFormGroup() {
		return new FormGroup<Newaddress2ReturnDataFormProperties>({
			bscaddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Exportaddress2PostBody {
		password?: string | null;
	}
	export interface Exportaddress2PostBodyFormProperties {
		password: FormControl<string | null | undefined>,
	}
	export function CreateExportaddress2PostBodyFormGroup() {
		return new FormGroup<Exportaddress2PostBodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Exportaddress2Return {
		data?: Exportaddress2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Exportaddress2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateExportaddress2ReturnFormGroup() {
		return new FormGroup<Exportaddress2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Exportaddress2ReturnData {
		address?: string | null;
		content?: Exportaddress2ReturnDataContent;
		filename?: string | null;
	}
	export interface Exportaddress2ReturnDataFormProperties {
		address: FormControl<string | null | undefined>,
		filename: FormControl<string | null | undefined>,
	}
	export function CreateExportaddress2ReturnDataFormGroup() {
		return new FormGroup<Exportaddress2ReturnDataFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Exportaddress2ReturnDataContent {
		address?: string | null;
		crypto?: Exportaddress2ReturnDataContentCrypto;
		id?: string | null;
		version?: number | null;
	}
	export interface Exportaddress2ReturnDataContentFormProperties {
		address: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateExportaddress2ReturnDataContentFormGroup() {
		return new FormGroup<Exportaddress2ReturnDataContentFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Exportaddress2ReturnDataContentCrypto {
		cipher?: string | null;
		cipherparams?: Exportaddress2ReturnDataContentCryptoCipherparams;
		ciphertext?: string | null;
		kdf?: string | null;
		kdfparams?: Exportaddress2ReturnDataContentCryptoKdfparams;
		mac?: string | null;
	}
	export interface Exportaddress2ReturnDataContentCryptoFormProperties {
		cipher: FormControl<string | null | undefined>,
		ciphertext: FormControl<string | null | undefined>,
		kdf: FormControl<string | null | undefined>,
		mac: FormControl<string | null | undefined>,
	}
	export function CreateExportaddress2ReturnDataContentCryptoFormGroup() {
		return new FormGroup<Exportaddress2ReturnDataContentCryptoFormProperties>({
			cipher: new FormControl<string | null | undefined>(undefined),
			ciphertext: new FormControl<string | null | undefined>(undefined),
			kdf: new FormControl<string | null | undefined>(undefined),
			mac: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Exportaddress2ReturnDataContentCryptoCipherparams {
		iv?: string | null;
	}
	export interface Exportaddress2ReturnDataContentCryptoCipherparamsFormProperties {
		iv: FormControl<string | null | undefined>,
	}
	export function CreateExportaddress2ReturnDataContentCryptoCipherparamsFormGroup() {
		return new FormGroup<Exportaddress2ReturnDataContentCryptoCipherparamsFormProperties>({
			iv: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Exportaddress2ReturnDataContentCryptoKdfparams {
		dklen?: number | null;
		n?: number | null;
		p?: number | null;
		r?: number | null;
		salt?: string | null;
	}
	export interface Exportaddress2ReturnDataContentCryptoKdfparamsFormProperties {
		dklen: FormControl<number | null | undefined>,
		n: FormControl<number | null | undefined>,
		p: FormControl<number | null | undefined>,
		r: FormControl<number | null | undefined>,
		salt: FormControl<string | null | undefined>,
	}
	export function CreateExportaddress2ReturnDataContentCryptoKdfparamsFormGroup() {
		return new FormGroup<Exportaddress2ReturnDataContentCryptoKdfparamsFormProperties>({
			dklen: new FormControl<number | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			p: new FormControl<number | null | undefined>(undefined),
			r: new FormControl<number | null | undefined>(undefined),
			salt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Importaddress2PostBody {
		content?: Importaddress2PostBodyContent;
		filename?: string | null;
		password?: string | null;
	}
	export interface Importaddress2PostBodyFormProperties {
		filename: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
	}
	export function CreateImportaddress2PostBodyFormGroup() {
		return new FormGroup<Importaddress2PostBodyFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Importaddress2PostBodyContent {
		address?: string | null;
		crypto?: Importaddress2PostBodyContentCrypto;
		id?: string | null;
		version?: number | null;
	}
	export interface Importaddress2PostBodyContentFormProperties {
		address: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateImportaddress2PostBodyContentFormGroup() {
		return new FormGroup<Importaddress2PostBodyContentFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Importaddress2PostBodyContentCrypto {
		cipher?: string | null;
		cipherparams?: Importaddress2PostBodyContentCryptoCipherparams;
		ciphertext?: string | null;
		kdf?: string | null;
		kdfparams?: Importaddress2PostBodyContentCryptoKdfparams;
		mac?: string | null;
	}
	export interface Importaddress2PostBodyContentCryptoFormProperties {
		cipher: FormControl<string | null | undefined>,
		ciphertext: FormControl<string | null | undefined>,
		kdf: FormControl<string | null | undefined>,
		mac: FormControl<string | null | undefined>,
	}
	export function CreateImportaddress2PostBodyContentCryptoFormGroup() {
		return new FormGroup<Importaddress2PostBodyContentCryptoFormProperties>({
			cipher: new FormControl<string | null | undefined>(undefined),
			ciphertext: new FormControl<string | null | undefined>(undefined),
			kdf: new FormControl<string | null | undefined>(undefined),
			mac: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Importaddress2PostBodyContentCryptoCipherparams {
		iv?: string | null;
	}
	export interface Importaddress2PostBodyContentCryptoCipherparamsFormProperties {
		iv: FormControl<string | null | undefined>,
	}
	export function CreateImportaddress2PostBodyContentCryptoCipherparamsFormGroup() {
		return new FormGroup<Importaddress2PostBodyContentCryptoCipherparamsFormProperties>({
			iv: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Importaddress2PostBodyContentCryptoKdfparams {
		dklen?: number | null;
		n?: number | null;
		p?: number | null;
		r?: number | null;
		salt?: string | null;
	}
	export interface Importaddress2PostBodyContentCryptoKdfparamsFormProperties {
		dklen: FormControl<number | null | undefined>,
		n: FormControl<number | null | undefined>,
		p: FormControl<number | null | undefined>,
		r: FormControl<number | null | undefined>,
		salt: FormControl<string | null | undefined>,
	}
	export function CreateImportaddress2PostBodyContentCryptoKdfparamsFormGroup() {
		return new FormGroup<Importaddress2PostBodyContentCryptoKdfparamsFormProperties>({
			dklen: new FormControl<number | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			p: new FormControl<number | null | undefined>(undefined),
			r: new FormControl<number | null | undefined>(undefined),
			salt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Importaddress2Return {
		data?: Importaddress2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Importaddress2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateImportaddress2ReturnFormGroup() {
		return new FormGroup<Importaddress2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Importaddress2ReturnData {
		address?: string | null;
	}
	export interface Importaddress2ReturnDataFormProperties {
		address: FormControl<string | null | undefined>,
	}
	export function CreateImportaddress2ReturnDataFormGroup() {
		return new FormGroup<Importaddress2ReturnDataFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Deleteaddress2Return {
		data?: Deleteaddress2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Deleteaddress2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteaddress2ReturnFormGroup() {
		return new FormGroup<Deleteaddress2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Deleteaddress2ReturnData {
		binancecoinaddress?: string | null;
		deleted?: boolean | null;
	}
	export interface Deleteaddress2ReturnDataFormProperties {
		binancecoinaddress: FormControl<string | null | undefined>,
		deleted: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteaddress2ReturnDataFormGroup() {
		return new FormGroup<Deleteaddress2ReturnDataFormProperties>({
			binancecoinaddress: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress2Return {
		data?: Listtransactionsbyaddress2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Listtransactionsbyaddress2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress2ReturnFormGroup() {
		return new FormGroup<Listtransactionsbyaddress2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress2ReturnData {
		current_page?: number | null;
		max_pages?: number | null;
		meta?: Listtransactionsbyaddress2ReturnDataMeta;
		Listtransactionsbyaddress2ReturnDataTransactions?: Array<Listtransactionsbyaddress2ReturnDataTransactions>;
	}
	export interface Listtransactionsbyaddress2ReturnDataFormProperties {
		current_page: FormControl<number | null | undefined>,
		max_pages: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress2ReturnDataFormGroup() {
		return new FormGroup<Listtransactionsbyaddress2ReturnDataFormProperties>({
			current_page: new FormControl<number | null | undefined>(undefined),
			max_pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress2ReturnDataMeta {
		accountedFor?: Listtransactionsbyaddress2ReturnDataMetaAccountedFor;
		chain?: string | null;
		client?: number | null;
		clientId?: number | null;
		finalized?: number | null;
		first_block?: number | null;
		last_block?: string | null;
		namedFrom?: Array<string>;
		namedTo?: Listtransactionsbyaddress2ReturnDataMetaNamedTo;
		networkId?: number | null;
		ripe?: number | null;
		staging?: number | null;
		unNamedFrom?: Listtransactionsbyaddress2ReturnDataMetaUnNamedFrom;
		unNamedTo?: Listtransactionsbyaddress2ReturnDataMetaUnNamedTo;
		unripe?: number | null;
	}
	export interface Listtransactionsbyaddress2ReturnDataMetaFormProperties {
		chain: FormControl<string | null | undefined>,
		client: FormControl<number | null | undefined>,
		clientId: FormControl<number | null | undefined>,
		finalized: FormControl<number | null | undefined>,
		first_block: FormControl<number | null | undefined>,
		last_block: FormControl<string | null | undefined>,
		networkId: FormControl<number | null | undefined>,
		ripe: FormControl<number | null | undefined>,
		staging: FormControl<number | null | undefined>,
		unripe: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress2ReturnDataMetaFormGroup() {
		return new FormGroup<Listtransactionsbyaddress2ReturnDataMetaFormProperties>({
			chain: new FormControl<string | null | undefined>(undefined),
			client: new FormControl<number | null | undefined>(undefined),
			clientId: new FormControl<number | null | undefined>(undefined),
			finalized: new FormControl<number | null | undefined>(undefined),
			first_block: new FormControl<number | null | undefined>(undefined),
			last_block: new FormControl<string | null | undefined>(undefined),
			networkId: new FormControl<number | null | undefined>(undefined),
			ripe: new FormControl<number | null | undefined>(undefined),
			staging: new FormControl<number | null | undefined>(undefined),
			unripe: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress2ReturnDataMetaAccountedFor {
		address?: string | null;
		decimals?: number | null;
		name?: string | null;
		petname?: string | null;
		source?: string | null;
		symbol?: string | null;
		tags?: string | null;
	}
	export interface Listtransactionsbyaddress2ReturnDataMetaAccountedForFormProperties {
		address: FormControl<string | null | undefined>,
		decimals: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		petname: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateListtransactionsbyaddress2ReturnDataMetaAccountedForFormGroup() {
		return new FormGroup<Listtransactionsbyaddress2ReturnDataMetaAccountedForFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			decimals: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			petname: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress2ReturnDataMetaNamedTo {
		'0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf'?: Listtransactionsbyaddress2ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_;
	}
	export interface Listtransactionsbyaddress2ReturnDataMetaNamedToFormProperties {
	}
	export function CreateListtransactionsbyaddress2ReturnDataMetaNamedToFormGroup() {
		return new FormGroup<Listtransactionsbyaddress2ReturnDataMetaNamedToFormProperties>({
		});

	}

	export interface Listtransactionsbyaddress2ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_ {
		count?: number | null;
		isContract?: boolean | null;
		name?: string | null;
		tags?: string | null;
	}
	export interface Listtransactionsbyaddress2ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormProperties {
		count: FormControl<number | null | undefined>,
		isContract: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateListtransactionsbyaddress2ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormGroup() {
		return new FormGroup<Listtransactionsbyaddress2ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			isContract: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress2ReturnDataMetaUnNamedFrom {
		'0x0039b625b1d8632c7a0057c964ec58a9f39789d3'?: number | null;
		'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c'?: number | null;
		'0x006e920000ec97e58900b61e00800010005aa831'?: number | null;
		'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd'?: number | null;
		'0x00dee1f836998bcc736022f314df906588d44808'?: number | null;
		'0x042523db4f3effc33d2742022b2490258494f8b3'?: number | null;
		'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1'?: number | null;
		'0x09e0781a47e9fd2b6258be09bd074f42022b9760'?: number | null;
		'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4'?: number | null;
		'0x177b8ebe208cb71da818b6b8814c946c027240cd'?: number | null;
		'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a'?: number | null;
		'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e'?: number | null;
		'0x26fd09c8b44af53df38a9bad41d5abc55a1786af'?: number | null;
		'0x30a1b724c9dfe2e12a19ed84878312d199d1519e'?: number | null;
		'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388'?: number | null;
		'0x3443006ed920730005d88267c49f77abcde749af'?: number | null;
		'0x346c802df3404bec2f265603db28b815321251ee'?: number | null;
		'0x34ec9e3a1ac200ea58744ced891015152130e400'?: number | null;
		'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb'?: number | null;
		'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6'?: number | null;
		'0x3fbaea01b228368e67ca40d8cb195018fd095318'?: number | null;
		'0x431b5a84acc1297eda88259f300262f1bc3a74f3'?: number | null;
		'0x479bc00624e58398f4cf59d78884d12fb515790a'?: number | null;
		'0x50efbf12580138bc263c95757826df4e24eb81c9'?: number | null;
		'0x5a243879d1a43f48042c33bbc8051c69756f67d4'?: number | null;
		'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7'?: number | null;
		'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f'?: number | null;
		'0x72bb8c608c4ea4a887266985e680a04c056f5b2a'?: number | null;
		'0x76dd32063b2899a59f6e15dbc474a160cc922751'?: number | null;
		'0x76e40d0a69fd81826b5eb7d18145626d46eafdef'?: number | null;
		'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c'?: number | null;
		'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8'?: number | null;
		'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9'?: number | null;
		'0x91aae0aafd9d2d730111b395c6871f248d7bd728'?: number | null;
		'0x92824d144c6543f70a649b2c3e7596612375fd4d'?: number | null;
		'0x93f635372008b7c5d770aaa6ff313454c8dc498c'?: number | null;
		'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee'?: number | null;
		'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0'?: number | null;
		'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979'?: number | null;
		'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde'?: number | null;
		'0xb0804b228c1c1449cdc94dd16fc8910421f45df1'?: number | null;
		'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78'?: number | null;
		'0xb30b1dabe7451fe6646a15631d7537df64b193ce'?: number | null;
		'0xba4ff5f9d6508000b7fd0035bd616aaec070384f'?: number | null;
		'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef'?: number | null;
		'0xc11099d3cd9686158db0a40e88267e7b1740958c'?: number | null;
		'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64'?: number | null;
		'0xe58e5ed4544f58831a84c18178b911a5957ada08'?: number | null;
		'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456'?: number | null;
		'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0'?: number | null;
		'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7'?: number | null;
		'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700'?: number | null;
		'0xff82bf5238637b7e5e345888bab9cd99f5ebe331'?: number | null;
	}
	export interface Listtransactionsbyaddress2ReturnDataMetaUnNamedFromFormProperties {
		'0x0039b625b1d8632c7a0057c964ec58a9f39789d3': FormControl<number | null | undefined>,
		'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c': FormControl<number | null | undefined>,
		'0x006e920000ec97e58900b61e00800010005aa831': FormControl<number | null | undefined>,
		'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd': FormControl<number | null | undefined>,
		'0x00dee1f836998bcc736022f314df906588d44808': FormControl<number | null | undefined>,
		'0x042523db4f3effc33d2742022b2490258494f8b3': FormControl<number | null | undefined>,
		'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1': FormControl<number | null | undefined>,
		'0x09e0781a47e9fd2b6258be09bd074f42022b9760': FormControl<number | null | undefined>,
		'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4': FormControl<number | null | undefined>,
		'0x177b8ebe208cb71da818b6b8814c946c027240cd': FormControl<number | null | undefined>,
		'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a': FormControl<number | null | undefined>,
		'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e': FormControl<number | null | undefined>,
		'0x26fd09c8b44af53df38a9bad41d5abc55a1786af': FormControl<number | null | undefined>,
		'0x30a1b724c9dfe2e12a19ed84878312d199d1519e': FormControl<number | null | undefined>,
		'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388': FormControl<number | null | undefined>,
		'0x3443006ed920730005d88267c49f77abcde749af': FormControl<number | null | undefined>,
		'0x346c802df3404bec2f265603db28b815321251ee': FormControl<number | null | undefined>,
		'0x34ec9e3a1ac200ea58744ced891015152130e400': FormControl<number | null | undefined>,
		'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb': FormControl<number | null | undefined>,
		'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6': FormControl<number | null | undefined>,
		'0x3fbaea01b228368e67ca40d8cb195018fd095318': FormControl<number | null | undefined>,
		'0x431b5a84acc1297eda88259f300262f1bc3a74f3': FormControl<number | null | undefined>,
		'0x479bc00624e58398f4cf59d78884d12fb515790a': FormControl<number | null | undefined>,
		'0x50efbf12580138bc263c95757826df4e24eb81c9': FormControl<number | null | undefined>,
		'0x5a243879d1a43f48042c33bbc8051c69756f67d4': FormControl<number | null | undefined>,
		'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7': FormControl<number | null | undefined>,
		'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f': FormControl<number | null | undefined>,
		'0x72bb8c608c4ea4a887266985e680a04c056f5b2a': FormControl<number | null | undefined>,
		'0x76dd32063b2899a59f6e15dbc474a160cc922751': FormControl<number | null | undefined>,
		'0x76e40d0a69fd81826b5eb7d18145626d46eafdef': FormControl<number | null | undefined>,
		'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c': FormControl<number | null | undefined>,
		'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8': FormControl<number | null | undefined>,
		'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9': FormControl<number | null | undefined>,
		'0x91aae0aafd9d2d730111b395c6871f248d7bd728': FormControl<number | null | undefined>,
		'0x92824d144c6543f70a649b2c3e7596612375fd4d': FormControl<number | null | undefined>,
		'0x93f635372008b7c5d770aaa6ff313454c8dc498c': FormControl<number | null | undefined>,
		'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee': FormControl<number | null | undefined>,
		'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0': FormControl<number | null | undefined>,
		'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979': FormControl<number | null | undefined>,
		'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde': FormControl<number | null | undefined>,
		'0xb0804b228c1c1449cdc94dd16fc8910421f45df1': FormControl<number | null | undefined>,
		'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78': FormControl<number | null | undefined>,
		'0xb30b1dabe7451fe6646a15631d7537df64b193ce': FormControl<number | null | undefined>,
		'0xba4ff5f9d6508000b7fd0035bd616aaec070384f': FormControl<number | null | undefined>,
		'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef': FormControl<number | null | undefined>,
		'0xc11099d3cd9686158db0a40e88267e7b1740958c': FormControl<number | null | undefined>,
		'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64': FormControl<number | null | undefined>,
		'0xe58e5ed4544f58831a84c18178b911a5957ada08': FormControl<number | null | undefined>,
		'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456': FormControl<number | null | undefined>,
		'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0': FormControl<number | null | undefined>,
		'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7': FormControl<number | null | undefined>,
		'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700': FormControl<number | null | undefined>,
		'0xff82bf5238637b7e5e345888bab9cd99f5ebe331': FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress2ReturnDataMetaUnNamedFromFormGroup() {
		return new FormGroup<Listtransactionsbyaddress2ReturnDataMetaUnNamedFromFormProperties>({
			'0x0039b625b1d8632c7a0057c964ec58a9f39789d3': new FormControl<number | null | undefined>(undefined),
			'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c': new FormControl<number | null | undefined>(undefined),
			'0x006e920000ec97e58900b61e00800010005aa831': new FormControl<number | null | undefined>(undefined),
			'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd': new FormControl<number | null | undefined>(undefined),
			'0x00dee1f836998bcc736022f314df906588d44808': new FormControl<number | null | undefined>(undefined),
			'0x042523db4f3effc33d2742022b2490258494f8b3': new FormControl<number | null | undefined>(undefined),
			'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1': new FormControl<number | null | undefined>(undefined),
			'0x09e0781a47e9fd2b6258be09bd074f42022b9760': new FormControl<number | null | undefined>(undefined),
			'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4': new FormControl<number | null | undefined>(undefined),
			'0x177b8ebe208cb71da818b6b8814c946c027240cd': new FormControl<number | null | undefined>(undefined),
			'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a': new FormControl<number | null | undefined>(undefined),
			'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e': new FormControl<number | null | undefined>(undefined),
			'0x26fd09c8b44af53df38a9bad41d5abc55a1786af': new FormControl<number | null | undefined>(undefined),
			'0x30a1b724c9dfe2e12a19ed84878312d199d1519e': new FormControl<number | null | undefined>(undefined),
			'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388': new FormControl<number | null | undefined>(undefined),
			'0x3443006ed920730005d88267c49f77abcde749af': new FormControl<number | null | undefined>(undefined),
			'0x346c802df3404bec2f265603db28b815321251ee': new FormControl<number | null | undefined>(undefined),
			'0x34ec9e3a1ac200ea58744ced891015152130e400': new FormControl<number | null | undefined>(undefined),
			'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb': new FormControl<number | null | undefined>(undefined),
			'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6': new FormControl<number | null | undefined>(undefined),
			'0x3fbaea01b228368e67ca40d8cb195018fd095318': new FormControl<number | null | undefined>(undefined),
			'0x431b5a84acc1297eda88259f300262f1bc3a74f3': new FormControl<number | null | undefined>(undefined),
			'0x479bc00624e58398f4cf59d78884d12fb515790a': new FormControl<number | null | undefined>(undefined),
			'0x50efbf12580138bc263c95757826df4e24eb81c9': new FormControl<number | null | undefined>(undefined),
			'0x5a243879d1a43f48042c33bbc8051c69756f67d4': new FormControl<number | null | undefined>(undefined),
			'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7': new FormControl<number | null | undefined>(undefined),
			'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f': new FormControl<number | null | undefined>(undefined),
			'0x72bb8c608c4ea4a887266985e680a04c056f5b2a': new FormControl<number | null | undefined>(undefined),
			'0x76dd32063b2899a59f6e15dbc474a160cc922751': new FormControl<number | null | undefined>(undefined),
			'0x76e40d0a69fd81826b5eb7d18145626d46eafdef': new FormControl<number | null | undefined>(undefined),
			'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c': new FormControl<number | null | undefined>(undefined),
			'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8': new FormControl<number | null | undefined>(undefined),
			'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9': new FormControl<number | null | undefined>(undefined),
			'0x91aae0aafd9d2d730111b395c6871f248d7bd728': new FormControl<number | null | undefined>(undefined),
			'0x92824d144c6543f70a649b2c3e7596612375fd4d': new FormControl<number | null | undefined>(undefined),
			'0x93f635372008b7c5d770aaa6ff313454c8dc498c': new FormControl<number | null | undefined>(undefined),
			'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee': new FormControl<number | null | undefined>(undefined),
			'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0': new FormControl<number | null | undefined>(undefined),
			'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979': new FormControl<number | null | undefined>(undefined),
			'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde': new FormControl<number | null | undefined>(undefined),
			'0xb0804b228c1c1449cdc94dd16fc8910421f45df1': new FormControl<number | null | undefined>(undefined),
			'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78': new FormControl<number | null | undefined>(undefined),
			'0xb30b1dabe7451fe6646a15631d7537df64b193ce': new FormControl<number | null | undefined>(undefined),
			'0xba4ff5f9d6508000b7fd0035bd616aaec070384f': new FormControl<number | null | undefined>(undefined),
			'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef': new FormControl<number | null | undefined>(undefined),
			'0xc11099d3cd9686158db0a40e88267e7b1740958c': new FormControl<number | null | undefined>(undefined),
			'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64': new FormControl<number | null | undefined>(undefined),
			'0xe58e5ed4544f58831a84c18178b911a5957ada08': new FormControl<number | null | undefined>(undefined),
			'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456': new FormControl<number | null | undefined>(undefined),
			'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0': new FormControl<number | null | undefined>(undefined),
			'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7': new FormControl<number | null | undefined>(undefined),
			'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700': new FormControl<number | null | undefined>(undefined),
			'0xff82bf5238637b7e5e345888bab9cd99f5ebe331': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress2ReturnDataMetaUnNamedTo {
		'0x0000000000007f150bd6f54c40a34d7c3d5e9f56'?: number | null;
		'0x000000000035b5e5ad9019092c665357240f594e'?: number | null;
		'0x0000000000a84d1a9b0063a910315c7ffa9cd248'?: number | null;
		'0x0077732907bfc6208933cfd2a51afb8f33ca5958'?: number | null;
		'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074'?: number | null;
		'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d'?: number | null;
		'0x388c818ca8b9251b393131c08a736a67ccb19297'?: number | null;
		'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06'?: number | null;
		'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6'?: number | null;
		'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf'?: number | null;
		'0x535b918f3724001fd6fb52fcc6cbc220592990a3'?: number | null;
		'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94'?: number | null;
		'0x665179031a86561ac845f43d6b6341cffbcea040'?: number | null;
		'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0'?: number | null;
		'0x81153f0889ab398c4acb42cb58b565a5392bba95'?: number | null;
		'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671'?: number | null;
		'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7'?: number | null;
		'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e'?: number | null;
		'0xa69babef1ca67a37ffaf7a485dfff3382056e78c'?: number | null;
		'0xbeefbabeea323f07c59926295205d3b7a17e8638'?: number | null;
		'0xcfc7e96be27d836b034b37132052549611341108'?: number | null;
		'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c'?: number | null;
		'0xeb00c80f00ca1585000000b84f00940000ed40e5'?: number | null;
		'0xebec795c9c8bbd61ffc14a6662944748f299cacf'?: number | null;
		'0xeee27662c2b8eba3cd936a23f039f3189633e4c8'?: number | null;
		'0xf828add1619bfb64712654076490b2609ae6d774'?: number | null;
		'0xffd22b84fb1d46ef74ed6530b2635be61340f347'?: number | null;
	}
	export interface Listtransactionsbyaddress2ReturnDataMetaUnNamedToFormProperties {
		'0x0000000000007f150bd6f54c40a34d7c3d5e9f56': FormControl<number | null | undefined>,
		'0x000000000035b5e5ad9019092c665357240f594e': FormControl<number | null | undefined>,
		'0x0000000000a84d1a9b0063a910315c7ffa9cd248': FormControl<number | null | undefined>,
		'0x0077732907bfc6208933cfd2a51afb8f33ca5958': FormControl<number | null | undefined>,
		'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074': FormControl<number | null | undefined>,
		'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d': FormControl<number | null | undefined>,
		'0x388c818ca8b9251b393131c08a736a67ccb19297': FormControl<number | null | undefined>,
		'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06': FormControl<number | null | undefined>,
		'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6': FormControl<number | null | undefined>,
		'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf': FormControl<number | null | undefined>,
		'0x535b918f3724001fd6fb52fcc6cbc220592990a3': FormControl<number | null | undefined>,
		'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94': FormControl<number | null | undefined>,
		'0x665179031a86561ac845f43d6b6341cffbcea040': FormControl<number | null | undefined>,
		'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0': FormControl<number | null | undefined>,
		'0x81153f0889ab398c4acb42cb58b565a5392bba95': FormControl<number | null | undefined>,
		'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671': FormControl<number | null | undefined>,
		'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7': FormControl<number | null | undefined>,
		'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e': FormControl<number | null | undefined>,
		'0xa69babef1ca67a37ffaf7a485dfff3382056e78c': FormControl<number | null | undefined>,
		'0xbeefbabeea323f07c59926295205d3b7a17e8638': FormControl<number | null | undefined>,
		'0xcfc7e96be27d836b034b37132052549611341108': FormControl<number | null | undefined>,
		'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c': FormControl<number | null | undefined>,
		'0xeb00c80f00ca1585000000b84f00940000ed40e5': FormControl<number | null | undefined>,
		'0xebec795c9c8bbd61ffc14a6662944748f299cacf': FormControl<number | null | undefined>,
		'0xeee27662c2b8eba3cd936a23f039f3189633e4c8': FormControl<number | null | undefined>,
		'0xf828add1619bfb64712654076490b2609ae6d774': FormControl<number | null | undefined>,
		'0xffd22b84fb1d46ef74ed6530b2635be61340f347': FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress2ReturnDataMetaUnNamedToFormGroup() {
		return new FormGroup<Listtransactionsbyaddress2ReturnDataMetaUnNamedToFormProperties>({
			'0x0000000000007f150bd6f54c40a34d7c3d5e9f56': new FormControl<number | null | undefined>(undefined),
			'0x000000000035b5e5ad9019092c665357240f594e': new FormControl<number | null | undefined>(undefined),
			'0x0000000000a84d1a9b0063a910315c7ffa9cd248': new FormControl<number | null | undefined>(undefined),
			'0x0077732907bfc6208933cfd2a51afb8f33ca5958': new FormControl<number | null | undefined>(undefined),
			'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074': new FormControl<number | null | undefined>(undefined),
			'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d': new FormControl<number | null | undefined>(undefined),
			'0x388c818ca8b9251b393131c08a736a67ccb19297': new FormControl<number | null | undefined>(undefined),
			'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06': new FormControl<number | null | undefined>(undefined),
			'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6': new FormControl<number | null | undefined>(undefined),
			'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf': new FormControl<number | null | undefined>(undefined),
			'0x535b918f3724001fd6fb52fcc6cbc220592990a3': new FormControl<number | null | undefined>(undefined),
			'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94': new FormControl<number | null | undefined>(undefined),
			'0x665179031a86561ac845f43d6b6341cffbcea040': new FormControl<number | null | undefined>(undefined),
			'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0': new FormControl<number | null | undefined>(undefined),
			'0x81153f0889ab398c4acb42cb58b565a5392bba95': new FormControl<number | null | undefined>(undefined),
			'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671': new FormControl<number | null | undefined>(undefined),
			'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7': new FormControl<number | null | undefined>(undefined),
			'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e': new FormControl<number | null | undefined>(undefined),
			'0xa69babef1ca67a37ffaf7a485dfff3382056e78c': new FormControl<number | null | undefined>(undefined),
			'0xbeefbabeea323f07c59926295205d3b7a17e8638': new FormControl<number | null | undefined>(undefined),
			'0xcfc7e96be27d836b034b37132052549611341108': new FormControl<number | null | undefined>(undefined),
			'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c': new FormControl<number | null | undefined>(undefined),
			'0xeb00c80f00ca1585000000b84f00940000ed40e5': new FormControl<number | null | undefined>(undefined),
			'0xebec795c9c8bbd61ffc14a6662944748f299cacf': new FormControl<number | null | undefined>(undefined),
			'0xeee27662c2b8eba3cd936a23f039f3189633e4c8': new FormControl<number | null | undefined>(undefined),
			'0xf828add1619bfb64712654076490b2609ae6d774': new FormControl<number | null | undefined>(undefined),
			'0xffd22b84fb1d46ef74ed6530b2635be61340f347': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress2ReturnDataTransactions {
		blockHash?: string | null;
		blockNumber?: number | null;
		compressedTx?: string | null;
		date?: string | null;
		encoding?: string | null;
		ether?: number | null;
		etherGasCost?: number | null;
		from?: string | null;
		function?: string | null;
		gas?: number | null;
		gasCost?: number | null;
		gasPrice?: number | null;
		gasUsed?: number | null;
		hasToken?: number | null;
		hash?: string | null;
		input?: string | null;
		isError?: number | null;
		maxFeePerGas?: number | null;
		maxPriorityFeePerGas?: number | null;
		receipt?: Listtransactionsbyaddress2ReturnDataTransactionsReceipt;
		timestamp?: number | null;
		to?: string | null;
		traces?: Array<string>;
		transactionIndex?: number | null;
		value?: number | null;
	}
	export interface Listtransactionsbyaddress2ReturnDataTransactionsFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<number | null | undefined>,
		compressedTx: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		encoding: FormControl<string | null | undefined>,
		ether: FormControl<number | null | undefined>,
		etherGasCost: FormControl<number | null | undefined>,
		from: FormControl<string | null | undefined>,
		function: FormControl<string | null | undefined>,
		gas: FormControl<number | null | undefined>,
		gasCost: FormControl<number | null | undefined>,
		gasPrice: FormControl<number | null | undefined>,
		gasUsed: FormControl<number | null | undefined>,
		hasToken: FormControl<number | null | undefined>,
		hash: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		isError: FormControl<number | null | undefined>,
		maxFeePerGas: FormControl<number | null | undefined>,
		maxPriorityFeePerGas: FormControl<number | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
		to: FormControl<string | null | undefined>,
		transactionIndex: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress2ReturnDataTransactionsFormGroup() {
		return new FormGroup<Listtransactionsbyaddress2ReturnDataTransactionsFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<number | null | undefined>(undefined),
			compressedTx: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			ether: new FormControl<number | null | undefined>(undefined),
			etherGasCost: new FormControl<number | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			gas: new FormControl<number | null | undefined>(undefined),
			gasCost: new FormControl<number | null | undefined>(undefined),
			gasPrice: new FormControl<number | null | undefined>(undefined),
			gasUsed: new FormControl<number | null | undefined>(undefined),
			hasToken: new FormControl<number | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			isError: new FormControl<number | null | undefined>(undefined),
			maxFeePerGas: new FormControl<number | null | undefined>(undefined),
			maxPriorityFeePerGas: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress2ReturnDataTransactionsReceipt {
		contractAddress?: string | null;
		effectiveGasPrice?: number | null;
		gasUsed?: number | null;
		logs?: Array<string>;
		status?: number | null;
	}
	export interface Listtransactionsbyaddress2ReturnDataTransactionsReceiptFormProperties {
		contractAddress: FormControl<string | null | undefined>,
		effectiveGasPrice: FormControl<number | null | undefined>,
		gasUsed: FormControl<number | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress2ReturnDataTransactionsReceiptFormGroup() {
		return new FormGroup<Listtransactionsbyaddress2ReturnDataTransactionsReceiptFormProperties>({
			contractAddress: new FormControl<string | null | undefined>(undefined),
			effectiveGasPrice: new FormControl<number | null | undefined>(undefined),
			gasUsed: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetbinancecoinbalanceReturn {
		data?: GetbinancecoinbalanceReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetbinancecoinbalanceReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetbinancecoinbalanceReturnFormGroup() {
		return new FormGroup<GetbinancecoinbalanceReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetbinancecoinbalanceReturnData {
		balance?: string | null;
	}
	export interface GetbinancecoinbalanceReturnDataFormProperties {
		balance: FormControl<string | null | undefined>,
	}
	export function CreateGetbinancecoinbalanceReturnDataFormGroup() {
		return new FormGroup<GetbinancecoinbalanceReturnDataFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getbep20balanceReturn {
		data?: Getbep20balanceReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getbep20balanceReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetbep20balanceReturnFormGroup() {
		return new FormGroup<Getbep20balanceReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getbep20balanceReturnData {
		balance?: string | null;
	}
	export interface Getbep20balanceReturnDataFormProperties {
		balance: FormControl<string | null | undefined>,
	}
	export function CreateGetbep20balanceReturnDataFormGroup() {
		return new FormGroup<Getbep20balanceReturnDataFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getbep20Return {
		data?: Getbep20ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getbep20ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetbep20ReturnFormGroup() {
		return new FormGroup<Getbep20ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getbep20ReturnData {
		contractaddress?: string | null;
		decimals?: number | null;
		name?: string | null;
		symbol?: string | null;
		totalSupply?: string | null;
	}
	export interface Getbep20ReturnDataFormProperties {
		contractaddress: FormControl<string | null | undefined>,
		decimals: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		totalSupply: FormControl<string | null | undefined>,
	}
	export function CreateGetbep20ReturnDataFormGroup() {
		return new FormGroup<Getbep20ReturnDataFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined),
			decimals: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			totalSupply: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getlastblocknumber2Return {
		data?: Getlastblocknumber2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getlastblocknumber2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetlastblocknumber2ReturnFormGroup() {
		return new FormGroup<Getlastblocknumber2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getlastblocknumber2ReturnData {
		blocknumber?: number | null;
	}
	export interface Getlastblocknumber2ReturnDataFormProperties {
		blocknumber: FormControl<number | null | undefined>,
	}
	export function CreateGetlastblocknumber2ReturnDataFormGroup() {
		return new FormGroup<Getlastblocknumber2ReturnDataFormProperties>({
			blocknumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getblock2Return {
		Getblock2ReturnData?: Array<Getblock2ReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getblock2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetblock2ReturnFormGroup() {
		return new FormGroup<Getblock2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getblock2ReturnData {
		difficulty?: number | null;
		extraData?: string | null;
		gasLimit?: number | null;
		gasUsed?: string | null;
		hash?: string | null;
		logsBloom?: string | null;
		miner?: string | null;
		mixHash?: string | null;
		nonce?: string | null;
		number?: number | null;
		parentHash?: string | null;
		receiptsRoot?: string | null;
		sha3Uncles?: string | null;
		size?: number | null;
		stateRoot?: string | null;
		timestamp?: string | null;
		totalDifficulty?: number | null;
		transactions?: Array<string>;
		transactionsRoot?: string | null;
		uncles?: Array<string>;
	}
	export interface Getblock2ReturnDataFormProperties {
		difficulty: FormControl<number | null | undefined>,
		extraData: FormControl<string | null | undefined>,
		gasLimit: FormControl<number | null | undefined>,
		gasUsed: FormControl<string | null | undefined>,
		hash: FormControl<string | null | undefined>,
		logsBloom: FormControl<string | null | undefined>,
		miner: FormControl<string | null | undefined>,
		mixHash: FormControl<string | null | undefined>,
		nonce: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
		parentHash: FormControl<string | null | undefined>,
		receiptsRoot: FormControl<string | null | undefined>,
		sha3Uncles: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
		stateRoot: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		totalDifficulty: FormControl<number | null | undefined>,
		transactionsRoot: FormControl<string | null | undefined>,
	}
	export function CreateGetblock2ReturnDataFormGroup() {
		return new FormGroup<Getblock2ReturnDataFormProperties>({
			difficulty: new FormControl<number | null | undefined>(undefined),
			extraData: new FormControl<string | null | undefined>(undefined),
			gasLimit: new FormControl<number | null | undefined>(undefined),
			gasUsed: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			logsBloom: new FormControl<string | null | undefined>(undefined),
			miner: new FormControl<string | null | undefined>(undefined),
			mixHash: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			parentHash: new FormControl<string | null | undefined>(undefined),
			receiptsRoot: new FormControl<string | null | undefined>(undefined),
			sha3Uncles: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			stateRoot: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			totalDifficulty: new FormControl<number | null | undefined>(undefined),
			transactionsRoot: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getgasprice2Return {
		data?: Getgasprice2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getgasprice2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetgasprice2ReturnFormGroup() {
		return new FormGroup<Getgasprice2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getgasprice2ReturnData {
		gasPrice?: string | null;
	}
	export interface Getgasprice2ReturnDataFormProperties {
		gasPrice: FormControl<string | null | undefined>,
	}
	export function CreateGetgasprice2ReturnDataFormGroup() {
		return new FormGroup<Getgasprice2ReturnDataFormProperties>({
			gasPrice: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getnftowner2Return {
		data?: Getnftowner2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getnftowner2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetnftowner2ReturnFormGroup() {
		return new FormGroup<Getnftowner2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getnftowner2ReturnData {
		owner?: string | null;
	}
	export interface Getnftowner2ReturnDataFormProperties {
		owner: FormControl<string | null | undefined>,
	}
	export function CreateGetnftowner2ReturnDataFormGroup() {
		return new FormGroup<Getnftowner2ReturnDataFormProperties>({
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getnfturi2Return {
		data?: Getnfturi2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getnfturi2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetnfturi2ReturnFormGroup() {
		return new FormGroup<Getnfturi2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getnfturi2ReturnData {
		uri?: string | null;
	}
	export interface Getnfturi2ReturnDataFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGetnfturi2ReturnDataFormGroup() {
		return new FormGroup<Getnfturi2ReturnDataFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sendtransaction2PostBody {
		amount?: string | null;
		from?: string | null;
		password?: string | null;
		to?: string | null;
	}
	export interface Sendtransaction2PostBodyFormProperties {
		amount: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateSendtransaction2PostBodyFormGroup() {
		return new FormGroup<Sendtransaction2PostBodyFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sendbep20PostBody {
		amount?: string | null;
		contractaddress?: string | null;
		from?: string | null;
		gas?: number | null;
		password?: string | null;
		to?: string | null;
	}
	export interface Sendbep20PostBodyFormProperties {
		amount: FormControl<string | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		gas: FormControl<number | null | undefined>,
		password: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateSendbep20PostBodyFormGroup() {
		return new FormGroup<Sendbep20PostBodyFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			gas: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sendbep721PostBody {
		contractaddress?: string | null;
		from?: string | null;
		password?: string | null;
		to?: string | null;
		tokenid?: number | null;
	}
	export interface Sendbep721PostBodyFormProperties {
		contractaddress: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		tokenid: FormControl<number | null | undefined>,
	}
	export function CreateSendbep721PostBodyFormGroup() {
		return new FormGroup<Sendbep721PostBodyFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			tokenid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Broadcasttransaction2PostBody {
		data?: string | null;
	}
	export interface Broadcasttransaction2PostBodyFormProperties {
		data: FormControl<string | null | undefined>,
	}
	export function CreateBroadcasttransaction2PostBodyFormGroup() {
		return new FormGroup<Broadcasttransaction2PostBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Broadcasttransaction2Return {
		data?: Broadcasttransaction2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Broadcasttransaction2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateBroadcasttransaction2ReturnFormGroup() {
		return new FormGroup<Broadcasttransaction2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Broadcasttransaction2ReturnData {
		txid?: string | null;
	}
	export interface Broadcasttransaction2ReturnDataFormProperties {
		txid: FormControl<string | null | undefined>,
	}
	export function CreateBroadcasttransaction2ReturnDataFormGroup() {
		return new FormGroup<Broadcasttransaction2ReturnDataFormProperties>({
			txid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransaction2Return {
		Gettransaction2ReturnData?: Array<Gettransaction2ReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Gettransaction2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettransaction2ReturnFormGroup() {
		return new FormGroup<Gettransaction2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettransaction2ReturnData {
		blockHash?: string | null;
		blockNumber?: string | null;
		from?: string | null;
		gas?: string | null;
		gasPrice?: string | null;
		hash?: string | null;
		input?: string | null;
		nonce?: string | null;
		r?: string | null;
		s?: string | null;
		to?: string | null;
		transactionIndex?: string | null;
		type?: string | null;
		v?: string | null;
		value?: string | null;
	}
	export interface Gettransaction2ReturnDataFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		gas: FormControl<string | null | undefined>,
		gasPrice: FormControl<string | null | undefined>,
		hash: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		nonce: FormControl<string | null | undefined>,
		r: FormControl<string | null | undefined>,
		s: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		transactionIndex: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		v: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGettransaction2ReturnDataFormGroup() {
		return new FormGroup<Gettransaction2ReturnDataFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			gas: new FormControl<string | null | undefined>(undefined),
			gasPrice: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
			r: new FormControl<string | null | undefined>(undefined),
			s: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			v: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt2Return {
		Gettransactionreceipt2ReturnData?: Array<Gettransactionreceipt2ReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Gettransactionreceipt2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettransactionreceipt2ReturnFormGroup() {
		return new FormGroup<Gettransactionreceipt2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt2ReturnData {
		blockHash?: string | null;
		blockNumber?: string | null;
		cumulativeGasUsed?: string | null;
		effectiveGasPrice?: string | null;
		from?: string | null;
		gasUsed?: string | null;
		logs?: Array<string>;
		logsBloom?: string | null;
		status?: boolean | null;
		to?: string | null;
		transactionHash?: string | null;
		transactionIndex?: string | null;
		type?: string | null;
	}
	export interface Gettransactionreceipt2ReturnDataFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<string | null | undefined>,
		cumulativeGasUsed: FormControl<string | null | undefined>,
		effectiveGasPrice: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		gasUsed: FormControl<string | null | undefined>,
		logsBloom: FormControl<string | null | undefined>,
		status: FormControl<boolean | null | undefined>,
		to: FormControl<string | null | undefined>,
		transactionHash: FormControl<string | null | undefined>,
		transactionIndex: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionreceipt2ReturnDataFormGroup() {
		return new FormGroup<Gettransactionreceipt2ReturnDataFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<string | null | undefined>(undefined),
			cumulativeGasUsed: new FormControl<string | null | undefined>(undefined),
			effectiveGasPrice: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			gasUsed: new FormControl<string | null | undefined>(undefined),
			logsBloom: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			transactionHash: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listsubscribedaddresses2Return {
		data?: Listsubscribedaddresses2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Listsubscribedaddresses2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListsubscribedaddresses2ReturnFormGroup() {
		return new FormGroup<Listsubscribedaddresses2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listsubscribedaddresses2ReturnData {
		ipns?: Array<string>;
	}
	export interface Listsubscribedaddresses2ReturnDataFormProperties {
	}
	export function CreateListsubscribedaddresses2ReturnDataFormGroup() {
		return new FormGroup<Listsubscribedaddresses2ReturnDataFormProperties>({
		});

	}

	export interface Subscribeaddress2PostBody {
		contractaddress?: string | null;
		ethereumaddress?: string | null;
		url?: string | null;
	}
	export interface Subscribeaddress2PostBodyFormProperties {
		contractaddress: FormControl<string | null | undefined>,
		ethereumaddress: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeaddress2PostBodyFormGroup() {
		return new FormGroup<Subscribeaddress2PostBodyFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined),
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subscribeaddress2Return {
		data?: Subscribeaddress2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Subscribeaddress2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateSubscribeaddress2ReturnFormGroup() {
		return new FormGroup<Subscribeaddress2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Subscribeaddress2ReturnData {
		contractaddress?: string | null;
		from?: any;
		id?: string | null;
		to?: any;
		tokenid?: any;
		type?: any;
		url?: string | null;
	}
	export interface Subscribeaddress2ReturnDataFormProperties {
		contractaddress: FormControl<string | null | undefined>,
		from: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		to: FormControl<any | null | undefined>,
		tokenid: FormControl<any | null | undefined>,
		type: FormControl<any | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeaddress2ReturnDataFormGroup() {
		return new FormGroup<Subscribeaddress2ReturnDataFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<any | null | undefined>(undefined),
			tokenid: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listfailedipns2Return {
		data?: Listfailedipns2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Listfailedipns2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListfailedipns2ReturnFormGroup() {
		return new FormGroup<Listfailedipns2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listfailedipns2ReturnData {
		ipns?: Array<string>;
	}
	export interface Listfailedipns2ReturnDataFormProperties {
	}
	export function CreateListfailedipns2ReturnDataFormGroup() {
		return new FormGroup<Listfailedipns2ReturnDataFormProperties>({
		});

	}

	export interface Resendfailedipn2Return {
		id?: number | null;
		ok?: boolean | null;
	}
	export interface Resendfailedipn2ReturnFormProperties {
		id: FormControl<number | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateResendfailedipn2ReturnFormGroup() {
		return new FormGroup<Resendfailedipn2ReturnFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Unsubscribeaddress2Return {
		data?: Unsubscribeaddress2ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Unsubscribeaddress2ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateUnsubscribeaddress2ReturnFormGroup() {
		return new FormGroup<Unsubscribeaddress2ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Unsubscribeaddress2ReturnData {
		id?: string | null;
	}
	export interface Unsubscribeaddress2ReturnDataFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeaddress2ReturnDataFormGroup() {
		return new FormGroup<Unsubscribeaddress2ReturnDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BroadcasttransactionPostBody {
		data?: string | null;
	}
	export interface BroadcasttransactionPostBodyFormProperties {
		data: FormControl<string | null | undefined>,
	}
	export function CreateBroadcasttransactionPostBodyFormGroup() {
		return new FormGroup<BroadcasttransactionPostBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BroadcasttransactionReturn {
		data?: BroadcasttransactionReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface BroadcasttransactionReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateBroadcasttransactionReturnFormGroup() {
		return new FormGroup<BroadcasttransactionReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BroadcasttransactionReturnData {
		txid?: string | null;
	}
	export interface BroadcasttransactionReturnDataFormProperties {
		txid: FormControl<string | null | undefined>,
	}
	export function CreateBroadcasttransactionReturnDataFormGroup() {
		return new FormGroup<BroadcasttransactionReturnDataFormProperties>({
			txid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListaddressesReturn {
		data?: ListaddressesReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface ListaddressesReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListaddressesReturnFormGroup() {
		return new FormGroup<ListaddressesReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListaddressesReturnData {
		addresses?: Array<string>;
	}
	export interface ListaddressesReturnDataFormProperties {
	}
	export function CreateListaddressesReturnDataFormGroup() {
		return new FormGroup<ListaddressesReturnDataFormProperties>({
		});

	}

	export interface NewaddressPostBody {
		password?: string | null;
	}
	export interface NewaddressPostBodyFormProperties {
		password: FormControl<string | null | undefined>,
	}
	export function CreateNewaddressPostBodyFormGroup() {
		return new FormGroup<NewaddressPostBodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewaddressReturn {
		data?: NewaddressReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface NewaddressReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateNewaddressReturnFormGroup() {
		return new FormGroup<NewaddressReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NewaddressReturnData {
		ethereumaddress?: string | null;
	}
	export interface NewaddressReturnDataFormProperties {
		ethereumaddress: FormControl<string | null | undefined>,
	}
	export function CreateNewaddressReturnDataFormGroup() {
		return new FormGroup<NewaddressReturnDataFormProperties>({
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportaddressPostBody {
		password?: string | null;
	}
	export interface ExportaddressPostBodyFormProperties {
		password: FormControl<string | null | undefined>,
	}
	export function CreateExportaddressPostBodyFormGroup() {
		return new FormGroup<ExportaddressPostBodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportaddressReturn {
		data?: ExportaddressReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface ExportaddressReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateExportaddressReturnFormGroup() {
		return new FormGroup<ExportaddressReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExportaddressReturnData {
		address?: string | null;
		content?: ExportaddressReturnDataContent;
		filename?: string | null;
	}
	export interface ExportaddressReturnDataFormProperties {
		address: FormControl<string | null | undefined>,
		filename: FormControl<string | null | undefined>,
	}
	export function CreateExportaddressReturnDataFormGroup() {
		return new FormGroup<ExportaddressReturnDataFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportaddressReturnDataContent {
		address?: string | null;
		crypto?: ExportaddressReturnDataContentCrypto;
		id?: string | null;
		version?: number | null;
	}
	export interface ExportaddressReturnDataContentFormProperties {
		address: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateExportaddressReturnDataContentFormGroup() {
		return new FormGroup<ExportaddressReturnDataContentFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExportaddressReturnDataContentCrypto {
		cipher?: string | null;
		cipherparams?: ExportaddressReturnDataContentCryptoCipherparams;
		ciphertext?: string | null;
		kdf?: string | null;
		kdfparams?: ExportaddressReturnDataContentCryptoKdfparams;
		mac?: string | null;
	}
	export interface ExportaddressReturnDataContentCryptoFormProperties {
		cipher: FormControl<string | null | undefined>,
		ciphertext: FormControl<string | null | undefined>,
		kdf: FormControl<string | null | undefined>,
		mac: FormControl<string | null | undefined>,
	}
	export function CreateExportaddressReturnDataContentCryptoFormGroup() {
		return new FormGroup<ExportaddressReturnDataContentCryptoFormProperties>({
			cipher: new FormControl<string | null | undefined>(undefined),
			ciphertext: new FormControl<string | null | undefined>(undefined),
			kdf: new FormControl<string | null | undefined>(undefined),
			mac: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportaddressReturnDataContentCryptoCipherparams {
		iv?: string | null;
	}
	export interface ExportaddressReturnDataContentCryptoCipherparamsFormProperties {
		iv: FormControl<string | null | undefined>,
	}
	export function CreateExportaddressReturnDataContentCryptoCipherparamsFormGroup() {
		return new FormGroup<ExportaddressReturnDataContentCryptoCipherparamsFormProperties>({
			iv: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportaddressReturnDataContentCryptoKdfparams {
		dklen?: number | null;
		n?: number | null;
		p?: number | null;
		r?: number | null;
		salt?: string | null;
	}
	export interface ExportaddressReturnDataContentCryptoKdfparamsFormProperties {
		dklen: FormControl<number | null | undefined>,
		n: FormControl<number | null | undefined>,
		p: FormControl<number | null | undefined>,
		r: FormControl<number | null | undefined>,
		salt: FormControl<string | null | undefined>,
	}
	export function CreateExportaddressReturnDataContentCryptoKdfparamsFormGroup() {
		return new FormGroup<ExportaddressReturnDataContentCryptoKdfparamsFormProperties>({
			dklen: new FormControl<number | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			p: new FormControl<number | null | undefined>(undefined),
			r: new FormControl<number | null | undefined>(undefined),
			salt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportaddressPostBody {
		content?: ImportaddressPostBodyContent;
		filename?: string | null;
		password?: string | null;
	}
	export interface ImportaddressPostBodyFormProperties {
		filename: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
	}
	export function CreateImportaddressPostBodyFormGroup() {
		return new FormGroup<ImportaddressPostBodyFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportaddressPostBodyContent {
		address?: string | null;
		crypto?: ImportaddressPostBodyContentCrypto;
		id?: string | null;
		version?: number | null;
	}
	export interface ImportaddressPostBodyContentFormProperties {
		address: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateImportaddressPostBodyContentFormGroup() {
		return new FormGroup<ImportaddressPostBodyContentFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImportaddressPostBodyContentCrypto {
		cipher?: string | null;
		cipherparams?: ImportaddressPostBodyContentCryptoCipherparams;
		ciphertext?: string | null;
		kdf?: string | null;
		kdfparams?: ImportaddressPostBodyContentCryptoKdfparams;
		mac?: string | null;
	}
	export interface ImportaddressPostBodyContentCryptoFormProperties {
		cipher: FormControl<string | null | undefined>,
		ciphertext: FormControl<string | null | undefined>,
		kdf: FormControl<string | null | undefined>,
		mac: FormControl<string | null | undefined>,
	}
	export function CreateImportaddressPostBodyContentCryptoFormGroup() {
		return new FormGroup<ImportaddressPostBodyContentCryptoFormProperties>({
			cipher: new FormControl<string | null | undefined>(undefined),
			ciphertext: new FormControl<string | null | undefined>(undefined),
			kdf: new FormControl<string | null | undefined>(undefined),
			mac: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportaddressPostBodyContentCryptoCipherparams {
		iv?: string | null;
	}
	export interface ImportaddressPostBodyContentCryptoCipherparamsFormProperties {
		iv: FormControl<string | null | undefined>,
	}
	export function CreateImportaddressPostBodyContentCryptoCipherparamsFormGroup() {
		return new FormGroup<ImportaddressPostBodyContentCryptoCipherparamsFormProperties>({
			iv: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportaddressPostBodyContentCryptoKdfparams {
		dklen?: number | null;
		n?: number | null;
		p?: number | null;
		r?: number | null;
		salt?: string | null;
	}
	export interface ImportaddressPostBodyContentCryptoKdfparamsFormProperties {
		dklen: FormControl<number | null | undefined>,
		n: FormControl<number | null | undefined>,
		p: FormControl<number | null | undefined>,
		r: FormControl<number | null | undefined>,
		salt: FormControl<string | null | undefined>,
	}
	export function CreateImportaddressPostBodyContentCryptoKdfparamsFormGroup() {
		return new FormGroup<ImportaddressPostBodyContentCryptoKdfparamsFormProperties>({
			dklen: new FormControl<number | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			p: new FormControl<number | null | undefined>(undefined),
			r: new FormControl<number | null | undefined>(undefined),
			salt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportaddressReturn {
		data?: ImportaddressReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface ImportaddressReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateImportaddressReturnFormGroup() {
		return new FormGroup<ImportaddressReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImportaddressReturnData {
		address?: string | null;
	}
	export interface ImportaddressReturnDataFormProperties {
		address: FormControl<string | null | undefined>,
	}
	export function CreateImportaddressReturnDataFormGroup() {
		return new FormGroup<ImportaddressReturnDataFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteaddressReturn {
		data?: DeleteaddressReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface DeleteaddressReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteaddressReturnFormGroup() {
		return new FormGroup<DeleteaddressReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteaddressReturnData {
		deleted?: boolean | null;
		ethereumaddress?: string | null;
	}
	export interface DeleteaddressReturnDataFormProperties {
		deleted: FormControl<boolean | null | undefined>,
		ethereumaddress: FormControl<string | null | undefined>,
	}
	export function CreateDeleteaddressReturnDataFormGroup() {
		return new FormGroup<DeleteaddressReturnDataFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListtransactionsbyaddressReturn {
		data?: ListtransactionsbyaddressReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface ListtransactionsbyaddressReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddressReturnFormGroup() {
		return new FormGroup<ListtransactionsbyaddressReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListtransactionsbyaddressReturnData {
		current_page?: number | null;
		max_pages?: number | null;
		meta?: ListtransactionsbyaddressReturnDataMeta;
		ListtransactionsbyaddressReturnDataTransactions?: Array<ListtransactionsbyaddressReturnDataTransactions>;
	}
	export interface ListtransactionsbyaddressReturnDataFormProperties {
		current_page: FormControl<number | null | undefined>,
		max_pages: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddressReturnDataFormGroup() {
		return new FormGroup<ListtransactionsbyaddressReturnDataFormProperties>({
			current_page: new FormControl<number | null | undefined>(undefined),
			max_pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListtransactionsbyaddressReturnDataMeta {
		accountedFor?: ListtransactionsbyaddressReturnDataMetaAccountedFor;
		chain?: string | null;
		client?: number | null;
		clientId?: number | null;
		finalized?: number | null;
		first_block?: number | null;
		last_block?: string | null;
		namedFrom?: Array<string>;
		namedTo?: ListtransactionsbyaddressReturnDataMetaNamedTo;
		networkId?: number | null;
		ripe?: number | null;
		staging?: number | null;
		unNamedFrom?: ListtransactionsbyaddressReturnDataMetaUnNamedFrom;
		unNamedTo?: ListtransactionsbyaddressReturnDataMetaUnNamedTo;
		unripe?: number | null;
	}
	export interface ListtransactionsbyaddressReturnDataMetaFormProperties {
		chain: FormControl<string | null | undefined>,
		client: FormControl<number | null | undefined>,
		clientId: FormControl<number | null | undefined>,
		finalized: FormControl<number | null | undefined>,
		first_block: FormControl<number | null | undefined>,
		last_block: FormControl<string | null | undefined>,
		networkId: FormControl<number | null | undefined>,
		ripe: FormControl<number | null | undefined>,
		staging: FormControl<number | null | undefined>,
		unripe: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddressReturnDataMetaFormGroup() {
		return new FormGroup<ListtransactionsbyaddressReturnDataMetaFormProperties>({
			chain: new FormControl<string | null | undefined>(undefined),
			client: new FormControl<number | null | undefined>(undefined),
			clientId: new FormControl<number | null | undefined>(undefined),
			finalized: new FormControl<number | null | undefined>(undefined),
			first_block: new FormControl<number | null | undefined>(undefined),
			last_block: new FormControl<string | null | undefined>(undefined),
			networkId: new FormControl<number | null | undefined>(undefined),
			ripe: new FormControl<number | null | undefined>(undefined),
			staging: new FormControl<number | null | undefined>(undefined),
			unripe: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListtransactionsbyaddressReturnDataMetaAccountedFor {
		address?: string | null;
		decimals?: number | null;
		name?: string | null;
		petname?: string | null;
		source?: string | null;
		symbol?: string | null;
		tags?: string | null;
	}
	export interface ListtransactionsbyaddressReturnDataMetaAccountedForFormProperties {
		address: FormControl<string | null | undefined>,
		decimals: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		petname: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateListtransactionsbyaddressReturnDataMetaAccountedForFormGroup() {
		return new FormGroup<ListtransactionsbyaddressReturnDataMetaAccountedForFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			decimals: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			petname: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListtransactionsbyaddressReturnDataMetaNamedTo {
		'0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf'?: ListtransactionsbyaddressReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_;
	}
	export interface ListtransactionsbyaddressReturnDataMetaNamedToFormProperties {
	}
	export function CreateListtransactionsbyaddressReturnDataMetaNamedToFormGroup() {
		return new FormGroup<ListtransactionsbyaddressReturnDataMetaNamedToFormProperties>({
		});

	}

	export interface ListtransactionsbyaddressReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_ {
		count?: number | null;
		isContract?: boolean | null;
		name?: string | null;
		tags?: string | null;
	}
	export interface ListtransactionsbyaddressReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormProperties {
		count: FormControl<number | null | undefined>,
		isContract: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateListtransactionsbyaddressReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormGroup() {
		return new FormGroup<ListtransactionsbyaddressReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			isContract: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListtransactionsbyaddressReturnDataMetaUnNamedFrom {
		'0x0039b625b1d8632c7a0057c964ec58a9f39789d3'?: number | null;
		'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c'?: number | null;
		'0x006e920000ec97e58900b61e00800010005aa831'?: number | null;
		'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd'?: number | null;
		'0x00dee1f836998bcc736022f314df906588d44808'?: number | null;
		'0x042523db4f3effc33d2742022b2490258494f8b3'?: number | null;
		'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1'?: number | null;
		'0x09e0781a47e9fd2b6258be09bd074f42022b9760'?: number | null;
		'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4'?: number | null;
		'0x177b8ebe208cb71da818b6b8814c946c027240cd'?: number | null;
		'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a'?: number | null;
		'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e'?: number | null;
		'0x26fd09c8b44af53df38a9bad41d5abc55a1786af'?: number | null;
		'0x30a1b724c9dfe2e12a19ed84878312d199d1519e'?: number | null;
		'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388'?: number | null;
		'0x3443006ed920730005d88267c49f77abcde749af'?: number | null;
		'0x346c802df3404bec2f265603db28b815321251ee'?: number | null;
		'0x34ec9e3a1ac200ea58744ced891015152130e400'?: number | null;
		'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb'?: number | null;
		'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6'?: number | null;
		'0x3fbaea01b228368e67ca40d8cb195018fd095318'?: number | null;
		'0x431b5a84acc1297eda88259f300262f1bc3a74f3'?: number | null;
		'0x479bc00624e58398f4cf59d78884d12fb515790a'?: number | null;
		'0x50efbf12580138bc263c95757826df4e24eb81c9'?: number | null;
		'0x5a243879d1a43f48042c33bbc8051c69756f67d4'?: number | null;
		'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7'?: number | null;
		'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f'?: number | null;
		'0x72bb8c608c4ea4a887266985e680a04c056f5b2a'?: number | null;
		'0x76dd32063b2899a59f6e15dbc474a160cc922751'?: number | null;
		'0x76e40d0a69fd81826b5eb7d18145626d46eafdef'?: number | null;
		'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c'?: number | null;
		'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8'?: number | null;
		'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9'?: number | null;
		'0x91aae0aafd9d2d730111b395c6871f248d7bd728'?: number | null;
		'0x92824d144c6543f70a649b2c3e7596612375fd4d'?: number | null;
		'0x93f635372008b7c5d770aaa6ff313454c8dc498c'?: number | null;
		'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee'?: number | null;
		'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0'?: number | null;
		'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979'?: number | null;
		'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde'?: number | null;
		'0xb0804b228c1c1449cdc94dd16fc8910421f45df1'?: number | null;
		'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78'?: number | null;
		'0xb30b1dabe7451fe6646a15631d7537df64b193ce'?: number | null;
		'0xba4ff5f9d6508000b7fd0035bd616aaec070384f'?: number | null;
		'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef'?: number | null;
		'0xc11099d3cd9686158db0a40e88267e7b1740958c'?: number | null;
		'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64'?: number | null;
		'0xe58e5ed4544f58831a84c18178b911a5957ada08'?: number | null;
		'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456'?: number | null;
		'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0'?: number | null;
		'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7'?: number | null;
		'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700'?: number | null;
		'0xff82bf5238637b7e5e345888bab9cd99f5ebe331'?: number | null;
	}
	export interface ListtransactionsbyaddressReturnDataMetaUnNamedFromFormProperties {
		'0x0039b625b1d8632c7a0057c964ec58a9f39789d3': FormControl<number | null | undefined>,
		'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c': FormControl<number | null | undefined>,
		'0x006e920000ec97e58900b61e00800010005aa831': FormControl<number | null | undefined>,
		'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd': FormControl<number | null | undefined>,
		'0x00dee1f836998bcc736022f314df906588d44808': FormControl<number | null | undefined>,
		'0x042523db4f3effc33d2742022b2490258494f8b3': FormControl<number | null | undefined>,
		'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1': FormControl<number | null | undefined>,
		'0x09e0781a47e9fd2b6258be09bd074f42022b9760': FormControl<number | null | undefined>,
		'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4': FormControl<number | null | undefined>,
		'0x177b8ebe208cb71da818b6b8814c946c027240cd': FormControl<number | null | undefined>,
		'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a': FormControl<number | null | undefined>,
		'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e': FormControl<number | null | undefined>,
		'0x26fd09c8b44af53df38a9bad41d5abc55a1786af': FormControl<number | null | undefined>,
		'0x30a1b724c9dfe2e12a19ed84878312d199d1519e': FormControl<number | null | undefined>,
		'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388': FormControl<number | null | undefined>,
		'0x3443006ed920730005d88267c49f77abcde749af': FormControl<number | null | undefined>,
		'0x346c802df3404bec2f265603db28b815321251ee': FormControl<number | null | undefined>,
		'0x34ec9e3a1ac200ea58744ced891015152130e400': FormControl<number | null | undefined>,
		'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb': FormControl<number | null | undefined>,
		'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6': FormControl<number | null | undefined>,
		'0x3fbaea01b228368e67ca40d8cb195018fd095318': FormControl<number | null | undefined>,
		'0x431b5a84acc1297eda88259f300262f1bc3a74f3': FormControl<number | null | undefined>,
		'0x479bc00624e58398f4cf59d78884d12fb515790a': FormControl<number | null | undefined>,
		'0x50efbf12580138bc263c95757826df4e24eb81c9': FormControl<number | null | undefined>,
		'0x5a243879d1a43f48042c33bbc8051c69756f67d4': FormControl<number | null | undefined>,
		'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7': FormControl<number | null | undefined>,
		'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f': FormControl<number | null | undefined>,
		'0x72bb8c608c4ea4a887266985e680a04c056f5b2a': FormControl<number | null | undefined>,
		'0x76dd32063b2899a59f6e15dbc474a160cc922751': FormControl<number | null | undefined>,
		'0x76e40d0a69fd81826b5eb7d18145626d46eafdef': FormControl<number | null | undefined>,
		'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c': FormControl<number | null | undefined>,
		'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8': FormControl<number | null | undefined>,
		'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9': FormControl<number | null | undefined>,
		'0x91aae0aafd9d2d730111b395c6871f248d7bd728': FormControl<number | null | undefined>,
		'0x92824d144c6543f70a649b2c3e7596612375fd4d': FormControl<number | null | undefined>,
		'0x93f635372008b7c5d770aaa6ff313454c8dc498c': FormControl<number | null | undefined>,
		'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee': FormControl<number | null | undefined>,
		'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0': FormControl<number | null | undefined>,
		'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979': FormControl<number | null | undefined>,
		'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde': FormControl<number | null | undefined>,
		'0xb0804b228c1c1449cdc94dd16fc8910421f45df1': FormControl<number | null | undefined>,
		'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78': FormControl<number | null | undefined>,
		'0xb30b1dabe7451fe6646a15631d7537df64b193ce': FormControl<number | null | undefined>,
		'0xba4ff5f9d6508000b7fd0035bd616aaec070384f': FormControl<number | null | undefined>,
		'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef': FormControl<number | null | undefined>,
		'0xc11099d3cd9686158db0a40e88267e7b1740958c': FormControl<number | null | undefined>,
		'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64': FormControl<number | null | undefined>,
		'0xe58e5ed4544f58831a84c18178b911a5957ada08': FormControl<number | null | undefined>,
		'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456': FormControl<number | null | undefined>,
		'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0': FormControl<number | null | undefined>,
		'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7': FormControl<number | null | undefined>,
		'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700': FormControl<number | null | undefined>,
		'0xff82bf5238637b7e5e345888bab9cd99f5ebe331': FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddressReturnDataMetaUnNamedFromFormGroup() {
		return new FormGroup<ListtransactionsbyaddressReturnDataMetaUnNamedFromFormProperties>({
			'0x0039b625b1d8632c7a0057c964ec58a9f39789d3': new FormControl<number | null | undefined>(undefined),
			'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c': new FormControl<number | null | undefined>(undefined),
			'0x006e920000ec97e58900b61e00800010005aa831': new FormControl<number | null | undefined>(undefined),
			'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd': new FormControl<number | null | undefined>(undefined),
			'0x00dee1f836998bcc736022f314df906588d44808': new FormControl<number | null | undefined>(undefined),
			'0x042523db4f3effc33d2742022b2490258494f8b3': new FormControl<number | null | undefined>(undefined),
			'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1': new FormControl<number | null | undefined>(undefined),
			'0x09e0781a47e9fd2b6258be09bd074f42022b9760': new FormControl<number | null | undefined>(undefined),
			'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4': new FormControl<number | null | undefined>(undefined),
			'0x177b8ebe208cb71da818b6b8814c946c027240cd': new FormControl<number | null | undefined>(undefined),
			'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a': new FormControl<number | null | undefined>(undefined),
			'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e': new FormControl<number | null | undefined>(undefined),
			'0x26fd09c8b44af53df38a9bad41d5abc55a1786af': new FormControl<number | null | undefined>(undefined),
			'0x30a1b724c9dfe2e12a19ed84878312d199d1519e': new FormControl<number | null | undefined>(undefined),
			'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388': new FormControl<number | null | undefined>(undefined),
			'0x3443006ed920730005d88267c49f77abcde749af': new FormControl<number | null | undefined>(undefined),
			'0x346c802df3404bec2f265603db28b815321251ee': new FormControl<number | null | undefined>(undefined),
			'0x34ec9e3a1ac200ea58744ced891015152130e400': new FormControl<number | null | undefined>(undefined),
			'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb': new FormControl<number | null | undefined>(undefined),
			'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6': new FormControl<number | null | undefined>(undefined),
			'0x3fbaea01b228368e67ca40d8cb195018fd095318': new FormControl<number | null | undefined>(undefined),
			'0x431b5a84acc1297eda88259f300262f1bc3a74f3': new FormControl<number | null | undefined>(undefined),
			'0x479bc00624e58398f4cf59d78884d12fb515790a': new FormControl<number | null | undefined>(undefined),
			'0x50efbf12580138bc263c95757826df4e24eb81c9': new FormControl<number | null | undefined>(undefined),
			'0x5a243879d1a43f48042c33bbc8051c69756f67d4': new FormControl<number | null | undefined>(undefined),
			'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7': new FormControl<number | null | undefined>(undefined),
			'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f': new FormControl<number | null | undefined>(undefined),
			'0x72bb8c608c4ea4a887266985e680a04c056f5b2a': new FormControl<number | null | undefined>(undefined),
			'0x76dd32063b2899a59f6e15dbc474a160cc922751': new FormControl<number | null | undefined>(undefined),
			'0x76e40d0a69fd81826b5eb7d18145626d46eafdef': new FormControl<number | null | undefined>(undefined),
			'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c': new FormControl<number | null | undefined>(undefined),
			'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8': new FormControl<number | null | undefined>(undefined),
			'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9': new FormControl<number | null | undefined>(undefined),
			'0x91aae0aafd9d2d730111b395c6871f248d7bd728': new FormControl<number | null | undefined>(undefined),
			'0x92824d144c6543f70a649b2c3e7596612375fd4d': new FormControl<number | null | undefined>(undefined),
			'0x93f635372008b7c5d770aaa6ff313454c8dc498c': new FormControl<number | null | undefined>(undefined),
			'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee': new FormControl<number | null | undefined>(undefined),
			'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0': new FormControl<number | null | undefined>(undefined),
			'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979': new FormControl<number | null | undefined>(undefined),
			'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde': new FormControl<number | null | undefined>(undefined),
			'0xb0804b228c1c1449cdc94dd16fc8910421f45df1': new FormControl<number | null | undefined>(undefined),
			'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78': new FormControl<number | null | undefined>(undefined),
			'0xb30b1dabe7451fe6646a15631d7537df64b193ce': new FormControl<number | null | undefined>(undefined),
			'0xba4ff5f9d6508000b7fd0035bd616aaec070384f': new FormControl<number | null | undefined>(undefined),
			'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef': new FormControl<number | null | undefined>(undefined),
			'0xc11099d3cd9686158db0a40e88267e7b1740958c': new FormControl<number | null | undefined>(undefined),
			'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64': new FormControl<number | null | undefined>(undefined),
			'0xe58e5ed4544f58831a84c18178b911a5957ada08': new FormControl<number | null | undefined>(undefined),
			'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456': new FormControl<number | null | undefined>(undefined),
			'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0': new FormControl<number | null | undefined>(undefined),
			'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7': new FormControl<number | null | undefined>(undefined),
			'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700': new FormControl<number | null | undefined>(undefined),
			'0xff82bf5238637b7e5e345888bab9cd99f5ebe331': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListtransactionsbyaddressReturnDataMetaUnNamedTo {
		'0x0000000000007f150bd6f54c40a34d7c3d5e9f56'?: number | null;
		'0x000000000035b5e5ad9019092c665357240f594e'?: number | null;
		'0x0000000000a84d1a9b0063a910315c7ffa9cd248'?: number | null;
		'0x0077732907bfc6208933cfd2a51afb8f33ca5958'?: number | null;
		'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074'?: number | null;
		'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d'?: number | null;
		'0x388c818ca8b9251b393131c08a736a67ccb19297'?: number | null;
		'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06'?: number | null;
		'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6'?: number | null;
		'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf'?: number | null;
		'0x535b918f3724001fd6fb52fcc6cbc220592990a3'?: number | null;
		'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94'?: number | null;
		'0x665179031a86561ac845f43d6b6341cffbcea040'?: number | null;
		'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0'?: number | null;
		'0x81153f0889ab398c4acb42cb58b565a5392bba95'?: number | null;
		'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671'?: number | null;
		'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7'?: number | null;
		'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e'?: number | null;
		'0xa69babef1ca67a37ffaf7a485dfff3382056e78c'?: number | null;
		'0xbeefbabeea323f07c59926295205d3b7a17e8638'?: number | null;
		'0xcfc7e96be27d836b034b37132052549611341108'?: number | null;
		'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c'?: number | null;
		'0xeb00c80f00ca1585000000b84f00940000ed40e5'?: number | null;
		'0xebec795c9c8bbd61ffc14a6662944748f299cacf'?: number | null;
		'0xeee27662c2b8eba3cd936a23f039f3189633e4c8'?: number | null;
		'0xf828add1619bfb64712654076490b2609ae6d774'?: number | null;
		'0xffd22b84fb1d46ef74ed6530b2635be61340f347'?: number | null;
	}
	export interface ListtransactionsbyaddressReturnDataMetaUnNamedToFormProperties {
		'0x0000000000007f150bd6f54c40a34d7c3d5e9f56': FormControl<number | null | undefined>,
		'0x000000000035b5e5ad9019092c665357240f594e': FormControl<number | null | undefined>,
		'0x0000000000a84d1a9b0063a910315c7ffa9cd248': FormControl<number | null | undefined>,
		'0x0077732907bfc6208933cfd2a51afb8f33ca5958': FormControl<number | null | undefined>,
		'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074': FormControl<number | null | undefined>,
		'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d': FormControl<number | null | undefined>,
		'0x388c818ca8b9251b393131c08a736a67ccb19297': FormControl<number | null | undefined>,
		'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06': FormControl<number | null | undefined>,
		'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6': FormControl<number | null | undefined>,
		'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf': FormControl<number | null | undefined>,
		'0x535b918f3724001fd6fb52fcc6cbc220592990a3': FormControl<number | null | undefined>,
		'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94': FormControl<number | null | undefined>,
		'0x665179031a86561ac845f43d6b6341cffbcea040': FormControl<number | null | undefined>,
		'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0': FormControl<number | null | undefined>,
		'0x81153f0889ab398c4acb42cb58b565a5392bba95': FormControl<number | null | undefined>,
		'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671': FormControl<number | null | undefined>,
		'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7': FormControl<number | null | undefined>,
		'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e': FormControl<number | null | undefined>,
		'0xa69babef1ca67a37ffaf7a485dfff3382056e78c': FormControl<number | null | undefined>,
		'0xbeefbabeea323f07c59926295205d3b7a17e8638': FormControl<number | null | undefined>,
		'0xcfc7e96be27d836b034b37132052549611341108': FormControl<number | null | undefined>,
		'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c': FormControl<number | null | undefined>,
		'0xeb00c80f00ca1585000000b84f00940000ed40e5': FormControl<number | null | undefined>,
		'0xebec795c9c8bbd61ffc14a6662944748f299cacf': FormControl<number | null | undefined>,
		'0xeee27662c2b8eba3cd936a23f039f3189633e4c8': FormControl<number | null | undefined>,
		'0xf828add1619bfb64712654076490b2609ae6d774': FormControl<number | null | undefined>,
		'0xffd22b84fb1d46ef74ed6530b2635be61340f347': FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddressReturnDataMetaUnNamedToFormGroup() {
		return new FormGroup<ListtransactionsbyaddressReturnDataMetaUnNamedToFormProperties>({
			'0x0000000000007f150bd6f54c40a34d7c3d5e9f56': new FormControl<number | null | undefined>(undefined),
			'0x000000000035b5e5ad9019092c665357240f594e': new FormControl<number | null | undefined>(undefined),
			'0x0000000000a84d1a9b0063a910315c7ffa9cd248': new FormControl<number | null | undefined>(undefined),
			'0x0077732907bfc6208933cfd2a51afb8f33ca5958': new FormControl<number | null | undefined>(undefined),
			'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074': new FormControl<number | null | undefined>(undefined),
			'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d': new FormControl<number | null | undefined>(undefined),
			'0x388c818ca8b9251b393131c08a736a67ccb19297': new FormControl<number | null | undefined>(undefined),
			'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06': new FormControl<number | null | undefined>(undefined),
			'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6': new FormControl<number | null | undefined>(undefined),
			'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf': new FormControl<number | null | undefined>(undefined),
			'0x535b918f3724001fd6fb52fcc6cbc220592990a3': new FormControl<number | null | undefined>(undefined),
			'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94': new FormControl<number | null | undefined>(undefined),
			'0x665179031a86561ac845f43d6b6341cffbcea040': new FormControl<number | null | undefined>(undefined),
			'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0': new FormControl<number | null | undefined>(undefined),
			'0x81153f0889ab398c4acb42cb58b565a5392bba95': new FormControl<number | null | undefined>(undefined),
			'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671': new FormControl<number | null | undefined>(undefined),
			'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7': new FormControl<number | null | undefined>(undefined),
			'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e': new FormControl<number | null | undefined>(undefined),
			'0xa69babef1ca67a37ffaf7a485dfff3382056e78c': new FormControl<number | null | undefined>(undefined),
			'0xbeefbabeea323f07c59926295205d3b7a17e8638': new FormControl<number | null | undefined>(undefined),
			'0xcfc7e96be27d836b034b37132052549611341108': new FormControl<number | null | undefined>(undefined),
			'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c': new FormControl<number | null | undefined>(undefined),
			'0xeb00c80f00ca1585000000b84f00940000ed40e5': new FormControl<number | null | undefined>(undefined),
			'0xebec795c9c8bbd61ffc14a6662944748f299cacf': new FormControl<number | null | undefined>(undefined),
			'0xeee27662c2b8eba3cd936a23f039f3189633e4c8': new FormControl<number | null | undefined>(undefined),
			'0xf828add1619bfb64712654076490b2609ae6d774': new FormControl<number | null | undefined>(undefined),
			'0xffd22b84fb1d46ef74ed6530b2635be61340f347': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListtransactionsbyaddressReturnDataTransactions {
		blockHash?: string | null;
		blockNumber?: number | null;
		compressedTx?: string | null;
		date?: string | null;
		encoding?: string | null;
		ether?: number | null;
		etherGasCost?: number | null;
		from?: string | null;
		function?: string | null;
		gas?: number | null;
		gasCost?: number | null;
		gasPrice?: number | null;
		gasUsed?: number | null;
		hasToken?: number | null;
		hash?: string | null;
		input?: string | null;
		isError?: number | null;
		maxFeePerGas?: number | null;
		maxPriorityFeePerGas?: number | null;
		receipt?: ListtransactionsbyaddressReturnDataTransactionsReceipt;
		timestamp?: number | null;
		to?: string | null;
		traces?: Array<string>;
		transactionIndex?: number | null;
		value?: number | null;
	}
	export interface ListtransactionsbyaddressReturnDataTransactionsFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<number | null | undefined>,
		compressedTx: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		encoding: FormControl<string | null | undefined>,
		ether: FormControl<number | null | undefined>,
		etherGasCost: FormControl<number | null | undefined>,
		from: FormControl<string | null | undefined>,
		function: FormControl<string | null | undefined>,
		gas: FormControl<number | null | undefined>,
		gasCost: FormControl<number | null | undefined>,
		gasPrice: FormControl<number | null | undefined>,
		gasUsed: FormControl<number | null | undefined>,
		hasToken: FormControl<number | null | undefined>,
		hash: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		isError: FormControl<number | null | undefined>,
		maxFeePerGas: FormControl<number | null | undefined>,
		maxPriorityFeePerGas: FormControl<number | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
		to: FormControl<string | null | undefined>,
		transactionIndex: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddressReturnDataTransactionsFormGroup() {
		return new FormGroup<ListtransactionsbyaddressReturnDataTransactionsFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<number | null | undefined>(undefined),
			compressedTx: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			ether: new FormControl<number | null | undefined>(undefined),
			etherGasCost: new FormControl<number | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			gas: new FormControl<number | null | undefined>(undefined),
			gasCost: new FormControl<number | null | undefined>(undefined),
			gasPrice: new FormControl<number | null | undefined>(undefined),
			gasUsed: new FormControl<number | null | undefined>(undefined),
			hasToken: new FormControl<number | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			isError: new FormControl<number | null | undefined>(undefined),
			maxFeePerGas: new FormControl<number | null | undefined>(undefined),
			maxPriorityFeePerGas: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListtransactionsbyaddressReturnDataTransactionsReceipt {
		contractAddress?: string | null;
		effectiveGasPrice?: number | null;
		gasUsed?: number | null;
		logs?: Array<string>;
		status?: number | null;
	}
	export interface ListtransactionsbyaddressReturnDataTransactionsReceiptFormProperties {
		contractAddress: FormControl<string | null | undefined>,
		effectiveGasPrice: FormControl<number | null | undefined>,
		gasUsed: FormControl<number | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddressReturnDataTransactionsReceiptFormGroup() {
		return new FormGroup<ListtransactionsbyaddressReturnDataTransactionsReceiptFormProperties>({
			contractAddress: new FormControl<string | null | undefined>(undefined),
			effectiveGasPrice: new FormControl<number | null | undefined>(undefined),
			gasUsed: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetethereumbalanceReturn {
		data?: GetethereumbalanceReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetethereumbalanceReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetethereumbalanceReturnFormGroup() {
		return new FormGroup<GetethereumbalanceReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetethereumbalanceReturnData {
		balance?: string | null;
	}
	export interface GetethereumbalanceReturnDataFormProperties {
		balance: FormControl<string | null | undefined>,
	}
	export function CreateGetethereumbalanceReturnDataFormGroup() {
		return new FormGroup<GetethereumbalanceReturnDataFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getallerc20balanceReturn {
		data?: Getallerc20balanceReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getallerc20balanceReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetallerc20balanceReturnFormGroup() {
		return new FormGroup<Getallerc20balanceReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getallerc20balanceReturnData {
		balance?: string | null;
	}
	export interface Getallerc20balanceReturnDataFormProperties {
		balance: FormControl<string | null | undefined>,
	}
	export function CreateGetallerc20balanceReturnDataFormGroup() {
		return new FormGroup<Getallerc20balanceReturnDataFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetlastblocknumberReturn {
		data?: GetlastblocknumberReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetlastblocknumberReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetlastblocknumberReturnFormGroup() {
		return new FormGroup<GetlastblocknumberReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetlastblocknumberReturnData {
		blocknumber?: number | null;
	}
	export interface GetlastblocknumberReturnDataFormProperties {
		blocknumber: FormControl<number | null | undefined>,
	}
	export function CreateGetlastblocknumberReturnDataFormGroup() {
		return new FormGroup<GetlastblocknumberReturnDataFormProperties>({
			blocknumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetblockReturn {
		data?: Array<string>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetblockReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetblockReturnFormGroup() {
		return new FormGroup<GetblockReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Geterc20Return {
		data?: Geterc20ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Geterc20ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGeterc20ReturnFormGroup() {
		return new FormGroup<Geterc20ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Geterc20ReturnData {
		contractaddress?: string | null;
		decimals?: number | null;
		name?: string | null;
		symbol?: string | null;
		totalSupply?: string | null;
	}
	export interface Geterc20ReturnDataFormProperties {
		contractaddress: FormControl<string | null | undefined>,
		decimals: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		totalSupply: FormControl<string | null | undefined>,
	}
	export function CreateGeterc20ReturnDataFormGroup() {
		return new FormGroup<Geterc20ReturnDataFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined),
			decimals: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			totalSupply: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetgaspriceReturn {
		data?: GetgaspriceReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetgaspriceReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetgaspriceReturnFormGroup() {
		return new FormGroup<GetgaspriceReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetgaspriceReturnData {
		gasPrice?: string | null;
	}
	export interface GetgaspriceReturnDataFormProperties {
		gasPrice: FormControl<string | null | undefined>,
	}
	export function CreateGetgaspriceReturnDataFormGroup() {
		return new FormGroup<GetgaspriceReturnDataFormProperties>({
			gasPrice: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetnftownerReturn {
		data?: GetnftownerReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetnftownerReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetnftownerReturnFormGroup() {
		return new FormGroup<GetnftownerReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetnftownerReturnData {
		owner?: string | null;
	}
	export interface GetnftownerReturnDataFormProperties {
		owner: FormControl<string | null | undefined>,
	}
	export function CreateGetnftownerReturnDataFormGroup() {
		return new FormGroup<GetnftownerReturnDataFormProperties>({
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetnfturiReturn {
		data?: GetnfturiReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetnfturiReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetnfturiReturnFormGroup() {
		return new FormGroup<GetnfturiReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetnfturiReturnData {
		uri?: string | null;
	}
	export interface GetnfturiReturnDataFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGetnfturiReturnDataFormGroup() {
		return new FormGroup<GetnfturiReturnDataFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendtransactionPostBody {
		amount?: string | null;
		from?: string | null;
		gas?: number | null;
		password?: string | null;
		to?: string | null;
	}
	export interface SendtransactionPostBodyFormProperties {
		amount: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		gas: FormControl<number | null | undefined>,
		password: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateSendtransactionPostBodyFormGroup() {
		return new FormGroup<SendtransactionPostBodyFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			gas: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Senderc20PostBody {
		amount?: number | null;
		contractaddress?: string | null;
		from?: string | null;
		gas?: number | null;
		password?: string | null;
		to?: string | null;
	}
	export interface Senderc20PostBodyFormProperties {
		amount: FormControl<number | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		gas: FormControl<number | null | undefined>,
		password: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateSenderc20PostBodyFormGroup() {
		return new FormGroup<Senderc20PostBodyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			gas: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Senderc721PostBody {
		contractaddress?: string | null;
		from?: string | null;
		password?: string | null;
		to?: string | null;
		tokenid?: number | null;
	}
	export interface Senderc721PostBodyFormProperties {
		contractaddress: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		tokenid: FormControl<number | null | undefined>,
	}
	export function CreateSenderc721PostBodyFormGroup() {
		return new FormGroup<Senderc721PostBodyFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			tokenid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GettransactionReturn {
		GettransactionReturnData?: Array<GettransactionReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GettransactionReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettransactionReturnFormGroup() {
		return new FormGroup<GettransactionReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GettransactionReturnData {
		blockHash?: string | null;
		blockNumber?: string | null;
		cumulativeGasUsed?: string | null;
		effectiveGasPrice?: string | null;
		from?: string | null;
		gasUsed?: string | null;
		GettransactionReturnDataLogs?: Array<GettransactionReturnDataLogs>;
		logsBloom?: string | null;
		status?: boolean | null;
		to?: string | null;
		transactionHash?: string | null;
		transactionIndex?: string | null;
		type?: string | null;
	}
	export interface GettransactionReturnDataFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<string | null | undefined>,
		cumulativeGasUsed: FormControl<string | null | undefined>,
		effectiveGasPrice: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		gasUsed: FormControl<string | null | undefined>,
		logsBloom: FormControl<string | null | undefined>,
		status: FormControl<boolean | null | undefined>,
		to: FormControl<string | null | undefined>,
		transactionHash: FormControl<string | null | undefined>,
		transactionIndex: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionReturnDataFormGroup() {
		return new FormGroup<GettransactionReturnDataFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<string | null | undefined>(undefined),
			cumulativeGasUsed: new FormControl<string | null | undefined>(undefined),
			effectiveGasPrice: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			gasUsed: new FormControl<string | null | undefined>(undefined),
			logsBloom: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			transactionHash: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GettransactionReturnDataLogs {
		address?: string | null;
		blockHash?: string | null;
		blockNumber?: string | null;
		data?: string | null;
		logIndex?: string | null;
		removed?: boolean | null;
		topics?: Array<string>;
		transactionHash?: string | null;
		transactionIndex?: string | null;
	}
	export interface GettransactionReturnDataLogsFormProperties {
		address: FormControl<string | null | undefined>,
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<string | null | undefined>,
		data: FormControl<string | null | undefined>,
		logIndex: FormControl<string | null | undefined>,
		removed: FormControl<boolean | null | undefined>,
		transactionHash: FormControl<string | null | undefined>,
		transactionIndex: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionReturnDataLogsFormGroup() {
		return new FormGroup<GettransactionReturnDataLogsFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			logIndex: new FormControl<string | null | undefined>(undefined),
			removed: new FormControl<boolean | null | undefined>(undefined),
			transactionHash: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GettransactionreceiptReturn {
		GettransactionreceiptReturnData?: Array<GettransactionreceiptReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GettransactionreceiptReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettransactionreceiptReturnFormGroup() {
		return new FormGroup<GettransactionreceiptReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GettransactionreceiptReturnData {
		blockHash?: string | null;
		blockNumber?: string | null;
		cumulativeGasUsed?: string | null;
		effectiveGasPrice?: string | null;
		from?: string | null;
		gasUsed?: string | null;
		GettransactionreceiptReturnDataLogs?: Array<GettransactionreceiptReturnDataLogs>;
		logsBloom?: string | null;
		status?: boolean | null;
		to?: string | null;
		transactionHash?: string | null;
		transactionIndex?: string | null;
		type?: string | null;
	}
	export interface GettransactionreceiptReturnDataFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<string | null | undefined>,
		cumulativeGasUsed: FormControl<string | null | undefined>,
		effectiveGasPrice: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		gasUsed: FormControl<string | null | undefined>,
		logsBloom: FormControl<string | null | undefined>,
		status: FormControl<boolean | null | undefined>,
		to: FormControl<string | null | undefined>,
		transactionHash: FormControl<string | null | undefined>,
		transactionIndex: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionreceiptReturnDataFormGroup() {
		return new FormGroup<GettransactionreceiptReturnDataFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<string | null | undefined>(undefined),
			cumulativeGasUsed: new FormControl<string | null | undefined>(undefined),
			effectiveGasPrice: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			gasUsed: new FormControl<string | null | undefined>(undefined),
			logsBloom: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			transactionHash: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GettransactionreceiptReturnDataLogs {
		address?: string | null;
		blockHash?: string | null;
		blockNumber?: string | null;
		data?: string | null;
		logIndex?: string | null;
		removed?: boolean | null;
		topics?: Array<string>;
		transactionHash?: string | null;
		transactionIndex?: string | null;
	}
	export interface GettransactionreceiptReturnDataLogsFormProperties {
		address: FormControl<string | null | undefined>,
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<string | null | undefined>,
		data: FormControl<string | null | undefined>,
		logIndex: FormControl<string | null | undefined>,
		removed: FormControl<boolean | null | undefined>,
		transactionHash: FormControl<string | null | undefined>,
		transactionIndex: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionreceiptReturnDataLogsFormGroup() {
		return new FormGroup<GettransactionreceiptReturnDataLogsFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			logIndex: new FormControl<string | null | undefined>(undefined),
			removed: new FormControl<boolean | null | undefined>(undefined),
			transactionHash: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListsubscribedaddressesReturn {
		data?: ListsubscribedaddressesReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface ListsubscribedaddressesReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListsubscribedaddressesReturnFormGroup() {
		return new FormGroup<ListsubscribedaddressesReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListsubscribedaddressesReturnData {
		ListsubscribedaddressesReturnDataIpns?: Array<ListsubscribedaddressesReturnDataIpns>;
	}
	export interface ListsubscribedaddressesReturnDataFormProperties {
	}
	export function CreateListsubscribedaddressesReturnDataFormGroup() {
		return new FormGroup<ListsubscribedaddressesReturnDataFormProperties>({
		});

	}

	export interface ListsubscribedaddressesReturnDataIpns {
		bbid?: number | null;
		contractaddress?: string | null;
		from?: any;
		id?: string | null;
		to?: string | null;
		tokenId?: any;
		type?: string | null;
		url?: string | null;
	}
	export interface ListsubscribedaddressesReturnDataIpnsFormProperties {
		bbid: FormControl<number | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		from: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		tokenId: FormControl<any | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListsubscribedaddressesReturnDataIpnsFormGroup() {
		return new FormGroup<ListsubscribedaddressesReturnDataIpnsFormProperties>({
			bbid: new FormControl<number | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscribeaddressPostBody {
		to?: string | null;
		type?: string | null;
		url?: string | null;
	}
	export interface SubscribeaddressPostBodyFormProperties {
		to: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeaddressPostBodyFormGroup() {
		return new FormGroup<SubscribeaddressPostBodyFormProperties>({
			to: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscribeaddressReturn {
		data?: SubscribeaddressReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface SubscribeaddressReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateSubscribeaddressReturnFormGroup() {
		return new FormGroup<SubscribeaddressReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SubscribeaddressReturnData {
		ipn?: SubscribeaddressReturnDataIpn;
	}
	export interface SubscribeaddressReturnDataFormProperties {
	}
	export function CreateSubscribeaddressReturnDataFormGroup() {
		return new FormGroup<SubscribeaddressReturnDataFormProperties>({
		});

	}

	export interface SubscribeaddressReturnDataIpn {
		bbid?: number | null;
		contractaddress?: any;
		from?: any;
		id?: string | null;
		to?: string | null;
		tokenId?: any;
		type?: string | null;
		url?: string | null;
	}
	export interface SubscribeaddressReturnDataIpnFormProperties {
		bbid: FormControl<number | null | undefined>,
		contractaddress: FormControl<any | null | undefined>,
		from: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		tokenId: FormControl<any | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeaddressReturnDataIpnFormGroup() {
		return new FormGroup<SubscribeaddressReturnDataIpnFormProperties>({
			bbid: new FormControl<number | null | undefined>(undefined),
			contractaddress: new FormControl<any | null | undefined>(undefined),
			from: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResendfailedipnReturn {
		data?: ResendfailedipnReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface ResendfailedipnReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateResendfailedipnReturnFormGroup() {
		return new FormGroup<ResendfailedipnReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResendfailedipnReturnData {
		notification_id?: string | null;
	}
	export interface ResendfailedipnReturnDataFormProperties {
		notification_id: FormControl<string | null | undefined>,
	}
	export function CreateResendfailedipnReturnDataFormGroup() {
		return new FormGroup<ResendfailedipnReturnDataFormProperties>({
			notification_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnsubscribeaddressReturn {
		data?: UnsubscribeaddressReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface UnsubscribeaddressReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateUnsubscribeaddressReturnFormGroup() {
		return new FormGroup<UnsubscribeaddressReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UnsubscribeaddressReturnData {
		webhook_id?: string | null;
	}
	export interface UnsubscribeaddressReturnDataFormProperties {
		webhook_id: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeaddressReturnDataFormGroup() {
		return new FormGroup<UnsubscribeaddressReturnDataFormProperties>({
			webhook_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListipnsbywebhookidReturn {
		ListipnsbywebhookidReturnFailed_ipns?: Array<ListipnsbywebhookidReturnFailed_ipns>;
		ok?: boolean | null;
	}
	export interface ListipnsbywebhookidReturnFormProperties {
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateListipnsbywebhookidReturnFormGroup() {
		return new FormGroup<ListipnsbywebhookidReturnFormProperties>({
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListipnsbywebhookidReturnFailed_ipns {
		action?: string | null;
		amount?: string | null;
		contractaddress?: string | null;
		ethereumaddress?: string | null;
		id?: string | null;
		timestamp?: string | null;
		url?: string | null;
	}
	export interface ListipnsbywebhookidReturnFailed_ipnsFormProperties {
		action: FormControl<string | null | undefined>,
		amount: FormControl<string | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		ethereumaddress: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListipnsbywebhookidReturnFailed_ipnsFormGroup() {
		return new FormGroup<ListipnsbywebhookidReturnFailed_ipnsFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<string | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListfailedipnsReturn {
		ListfailedipnsReturnFailed_ipns?: Array<ListfailedipnsReturnFailed_ipns>;
		ok?: boolean | null;
	}
	export interface ListfailedipnsReturnFormProperties {
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateListfailedipnsReturnFormGroup() {
		return new FormGroup<ListfailedipnsReturnFormProperties>({
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListfailedipnsReturnFailed_ipns {
		action?: string | null;
		amount?: string | null;
		contractaddress?: string | null;
		ethereumaddress?: string | null;
		id?: string | null;
		timestamp?: string | null;
		url?: string | null;
	}
	export interface ListfailedipnsReturnFailed_ipnsFormProperties {
		action: FormControl<string | null | undefined>,
		amount: FormControl<string | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		ethereumaddress: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListfailedipnsReturnFailed_ipnsFormGroup() {
		return new FormGroup<ListfailedipnsReturnFailed_ipnsFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<string | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetcurrenciesReturn {
		data?: GetcurrenciesReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetcurrenciesReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetcurrenciesReturnFormGroup() {
		return new FormGroup<GetcurrenciesReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetcurrenciesReturnData {
		Aave?: string | null;
		Algorand?: string | null;
		Amp?: string | null;
		ApeCoin?: string | null;
		Arweave?: string | null;
		Avalanche?: string | null;
		'Axie Infinity'?: string | null;
		BNB?: string | null;
		'Basic Attention Token'?: string | null;
		'Binance USD'?: string | null;
		BitDAO?: string | null;
		BitTorrent?: string | null;
		Bitcoin?: string | null;
		'Bitcoin Cash'?: string | null;
		'Bitcoin SV'?: string | null;
		'Bonded Luna'?: string | null;
		Cardano?: string | null;
		Celo?: string | null;
		Chain?: string | null;
		Chainlink?: string | null;
		Chiliz?: string | null;
		'Convex Finance'?: string | null;
		'Cosmos Hub'?: string | null;
		Cronos?: string | null;
		'Curve DAO Token'?: string | null;
		Dai?: string | null;
		Dash?: string | null;
		DeFiChain?: string | null;
		Decentraland?: string | null;
		Dogecoin?: string | null;
		EOS?: string | null;
		Elrond?: string | null;
		'Enjin Coin'?: string | null;
		Ethereum?: string | null;
		'Ethereum Classic'?: string | null;
		'FTX Token'?: string | null;
		Fantom?: string | null;
		Filecoin?: string | null;
		Flow?: string | null;
		Frax?: string | null;
		'Frax Share'?: string | null;
		Gala?: string | null;
		Harmony?: string | null;
		Hedera?: string | null;
		Helium?: string | null;
		'Huobi BTC'?: string | null;
		'Huobi Token'?: string | null;
		IOTA?: string | null;
		'Internet Computer'?: string | null;
		Klaytn?: string | null;
		'KuCoin Token'?: string | null;
		Kusama?: string | null;
		'LEO Token'?: string | null;
		'Lido Staked Ether'?: string | null;
		Litecoin?: string | null;
		Loopring?: string | null;
		'Magic Internet Money'?: string | null;
		Maker?: string | null;
		'Mina Protocol'?: string | null;
		Monero?: string | null;
		'NEAR Protocol'?: string | null;
		NEO?: string | null;
		NEXO?: string | null;
		OKB?: string | null;
		Osmosis?: string | null;
		PancakeSwap?: string | null;
		'Pax Dollar'?: string | null;
		Polkadot?: string | null;
		Polygon?: string | null;
		Quant?: string | null;
		Radix?: string | null;
		STEPN?: string | null;
		'Shiba Inu'?: string | null;
		Solana?: string | null;
		Stacks?: string | null;
		Stellar?: string | null;
		'Synthetix Network Token'?: string | null;
		THORChain?: string | null;
		TRON?: string | null;
		Terra?: string | null;
		TerraUSD?: string | null;
		Tether?: string | null;
		Tezos?: string | null;
		'The Graph'?: string | null;
		'The Sandbox'?: string | null;
		'Theta Fuel'?: string | null;
		'Theta Network'?: string | null;
		TrueUSD?: string | null;
		'USD Coin'?: string | null;
		Uniswap?: string | null;
		VeChain?: string | null;
		Waves?: string | null;
		'Wrapped Bitcoin'?: string | null;
		XRP?: string | null;
		Zcash?: string | null;
		Zilliqa?: string | null;
		cDAI?: string | null;
		cETH?: string | null;
		cUSDC?: string | null;
		eCash?: string | null;
	}
	export interface GetcurrenciesReturnDataFormProperties {
		Aave: FormControl<string | null | undefined>,
		Algorand: FormControl<string | null | undefined>,
		Amp: FormControl<string | null | undefined>,
		ApeCoin: FormControl<string | null | undefined>,
		Arweave: FormControl<string | null | undefined>,
		Avalanche: FormControl<string | null | undefined>,
		'Axie Infinity': FormControl<string | null | undefined>,
		BNB: FormControl<string | null | undefined>,
		'Basic Attention Token': FormControl<string | null | undefined>,
		'Binance USD': FormControl<string | null | undefined>,
		BitDAO: FormControl<string | null | undefined>,
		BitTorrent: FormControl<string | null | undefined>,
		Bitcoin: FormControl<string | null | undefined>,
		'Bitcoin Cash': FormControl<string | null | undefined>,
		'Bitcoin SV': FormControl<string | null | undefined>,
		'Bonded Luna': FormControl<string | null | undefined>,
		Cardano: FormControl<string | null | undefined>,
		Celo: FormControl<string | null | undefined>,
		Chain: FormControl<string | null | undefined>,
		Chainlink: FormControl<string | null | undefined>,
		Chiliz: FormControl<string | null | undefined>,
		'Convex Finance': FormControl<string | null | undefined>,
		'Cosmos Hub': FormControl<string | null | undefined>,
		Cronos: FormControl<string | null | undefined>,
		'Curve DAO Token': FormControl<string | null | undefined>,
		Dai: FormControl<string | null | undefined>,
		Dash: FormControl<string | null | undefined>,
		DeFiChain: FormControl<string | null | undefined>,
		Decentraland: FormControl<string | null | undefined>,
		Dogecoin: FormControl<string | null | undefined>,
		EOS: FormControl<string | null | undefined>,
		Elrond: FormControl<string | null | undefined>,
		'Enjin Coin': FormControl<string | null | undefined>,
		Ethereum: FormControl<string | null | undefined>,
		'Ethereum Classic': FormControl<string | null | undefined>,
		'FTX Token': FormControl<string | null | undefined>,
		Fantom: FormControl<string | null | undefined>,
		Filecoin: FormControl<string | null | undefined>,
		Flow: FormControl<string | null | undefined>,
		Frax: FormControl<string | null | undefined>,
		'Frax Share': FormControl<string | null | undefined>,
		Gala: FormControl<string | null | undefined>,
		Harmony: FormControl<string | null | undefined>,
		Hedera: FormControl<string | null | undefined>,
		Helium: FormControl<string | null | undefined>,
		'Huobi BTC': FormControl<string | null | undefined>,
		'Huobi Token': FormControl<string | null | undefined>,
		IOTA: FormControl<string | null | undefined>,
		'Internet Computer': FormControl<string | null | undefined>,
		Klaytn: FormControl<string | null | undefined>,
		'KuCoin Token': FormControl<string | null | undefined>,
		Kusama: FormControl<string | null | undefined>,
		'LEO Token': FormControl<string | null | undefined>,
		'Lido Staked Ether': FormControl<string | null | undefined>,
		Litecoin: FormControl<string | null | undefined>,
		Loopring: FormControl<string | null | undefined>,
		'Magic Internet Money': FormControl<string | null | undefined>,
		Maker: FormControl<string | null | undefined>,
		'Mina Protocol': FormControl<string | null | undefined>,
		Monero: FormControl<string | null | undefined>,
		'NEAR Protocol': FormControl<string | null | undefined>,
		NEO: FormControl<string | null | undefined>,
		NEXO: FormControl<string | null | undefined>,
		OKB: FormControl<string | null | undefined>,
		Osmosis: FormControl<string | null | undefined>,
		PancakeSwap: FormControl<string | null | undefined>,
		'Pax Dollar': FormControl<string | null | undefined>,
		Polkadot: FormControl<string | null | undefined>,
		Polygon: FormControl<string | null | undefined>,
		Quant: FormControl<string | null | undefined>,
		Radix: FormControl<string | null | undefined>,
		STEPN: FormControl<string | null | undefined>,
		'Shiba Inu': FormControl<string | null | undefined>,
		Solana: FormControl<string | null | undefined>,
		Stacks: FormControl<string | null | undefined>,
		Stellar: FormControl<string | null | undefined>,
		'Synthetix Network Token': FormControl<string | null | undefined>,
		THORChain: FormControl<string | null | undefined>,
		TRON: FormControl<string | null | undefined>,
		Terra: FormControl<string | null | undefined>,
		TerraUSD: FormControl<string | null | undefined>,
		Tether: FormControl<string | null | undefined>,
		Tezos: FormControl<string | null | undefined>,
		'The Graph': FormControl<string | null | undefined>,
		'The Sandbox': FormControl<string | null | undefined>,
		'Theta Fuel': FormControl<string | null | undefined>,
		'Theta Network': FormControl<string | null | undefined>,
		TrueUSD: FormControl<string | null | undefined>,
		'USD Coin': FormControl<string | null | undefined>,
		Uniswap: FormControl<string | null | undefined>,
		VeChain: FormControl<string | null | undefined>,
		Waves: FormControl<string | null | undefined>,
		'Wrapped Bitcoin': FormControl<string | null | undefined>,
		XRP: FormControl<string | null | undefined>,
		Zcash: FormControl<string | null | undefined>,
		Zilliqa: FormControl<string | null | undefined>,
		cDAI: FormControl<string | null | undefined>,
		cETH: FormControl<string | null | undefined>,
		cUSDC: FormControl<string | null | undefined>,
		eCash: FormControl<string | null | undefined>,
	}
	export function CreateGetcurrenciesReturnDataFormGroup() {
		return new FormGroup<GetcurrenciesReturnDataFormProperties>({
			Aave: new FormControl<string | null | undefined>(undefined),
			Algorand: new FormControl<string | null | undefined>(undefined),
			Amp: new FormControl<string | null | undefined>(undefined),
			ApeCoin: new FormControl<string | null | undefined>(undefined),
			Arweave: new FormControl<string | null | undefined>(undefined),
			Avalanche: new FormControl<string | null | undefined>(undefined),
			'Axie Infinity': new FormControl<string | null | undefined>(undefined),
			BNB: new FormControl<string | null | undefined>(undefined),
			'Basic Attention Token': new FormControl<string | null | undefined>(undefined),
			'Binance USD': new FormControl<string | null | undefined>(undefined),
			BitDAO: new FormControl<string | null | undefined>(undefined),
			BitTorrent: new FormControl<string | null | undefined>(undefined),
			Bitcoin: new FormControl<string | null | undefined>(undefined),
			'Bitcoin Cash': new FormControl<string | null | undefined>(undefined),
			'Bitcoin SV': new FormControl<string | null | undefined>(undefined),
			'Bonded Luna': new FormControl<string | null | undefined>(undefined),
			Cardano: new FormControl<string | null | undefined>(undefined),
			Celo: new FormControl<string | null | undefined>(undefined),
			Chain: new FormControl<string | null | undefined>(undefined),
			Chainlink: new FormControl<string | null | undefined>(undefined),
			Chiliz: new FormControl<string | null | undefined>(undefined),
			'Convex Finance': new FormControl<string | null | undefined>(undefined),
			'Cosmos Hub': new FormControl<string | null | undefined>(undefined),
			Cronos: new FormControl<string | null | undefined>(undefined),
			'Curve DAO Token': new FormControl<string | null | undefined>(undefined),
			Dai: new FormControl<string | null | undefined>(undefined),
			Dash: new FormControl<string | null | undefined>(undefined),
			DeFiChain: new FormControl<string | null | undefined>(undefined),
			Decentraland: new FormControl<string | null | undefined>(undefined),
			Dogecoin: new FormControl<string | null | undefined>(undefined),
			EOS: new FormControl<string | null | undefined>(undefined),
			Elrond: new FormControl<string | null | undefined>(undefined),
			'Enjin Coin': new FormControl<string | null | undefined>(undefined),
			Ethereum: new FormControl<string | null | undefined>(undefined),
			'Ethereum Classic': new FormControl<string | null | undefined>(undefined),
			'FTX Token': new FormControl<string | null | undefined>(undefined),
			Fantom: new FormControl<string | null | undefined>(undefined),
			Filecoin: new FormControl<string | null | undefined>(undefined),
			Flow: new FormControl<string | null | undefined>(undefined),
			Frax: new FormControl<string | null | undefined>(undefined),
			'Frax Share': new FormControl<string | null | undefined>(undefined),
			Gala: new FormControl<string | null | undefined>(undefined),
			Harmony: new FormControl<string | null | undefined>(undefined),
			Hedera: new FormControl<string | null | undefined>(undefined),
			Helium: new FormControl<string | null | undefined>(undefined),
			'Huobi BTC': new FormControl<string | null | undefined>(undefined),
			'Huobi Token': new FormControl<string | null | undefined>(undefined),
			IOTA: new FormControl<string | null | undefined>(undefined),
			'Internet Computer': new FormControl<string | null | undefined>(undefined),
			Klaytn: new FormControl<string | null | undefined>(undefined),
			'KuCoin Token': new FormControl<string | null | undefined>(undefined),
			Kusama: new FormControl<string | null | undefined>(undefined),
			'LEO Token': new FormControl<string | null | undefined>(undefined),
			'Lido Staked Ether': new FormControl<string | null | undefined>(undefined),
			Litecoin: new FormControl<string | null | undefined>(undefined),
			Loopring: new FormControl<string | null | undefined>(undefined),
			'Magic Internet Money': new FormControl<string | null | undefined>(undefined),
			Maker: new FormControl<string | null | undefined>(undefined),
			'Mina Protocol': new FormControl<string | null | undefined>(undefined),
			Monero: new FormControl<string | null | undefined>(undefined),
			'NEAR Protocol': new FormControl<string | null | undefined>(undefined),
			NEO: new FormControl<string | null | undefined>(undefined),
			NEXO: new FormControl<string | null | undefined>(undefined),
			OKB: new FormControl<string | null | undefined>(undefined),
			Osmosis: new FormControl<string | null | undefined>(undefined),
			PancakeSwap: new FormControl<string | null | undefined>(undefined),
			'Pax Dollar': new FormControl<string | null | undefined>(undefined),
			Polkadot: new FormControl<string | null | undefined>(undefined),
			Polygon: new FormControl<string | null | undefined>(undefined),
			Quant: new FormControl<string | null | undefined>(undefined),
			Radix: new FormControl<string | null | undefined>(undefined),
			STEPN: new FormControl<string | null | undefined>(undefined),
			'Shiba Inu': new FormControl<string | null | undefined>(undefined),
			Solana: new FormControl<string | null | undefined>(undefined),
			Stacks: new FormControl<string | null | undefined>(undefined),
			Stellar: new FormControl<string | null | undefined>(undefined),
			'Synthetix Network Token': new FormControl<string | null | undefined>(undefined),
			THORChain: new FormControl<string | null | undefined>(undefined),
			TRON: new FormControl<string | null | undefined>(undefined),
			Terra: new FormControl<string | null | undefined>(undefined),
			TerraUSD: new FormControl<string | null | undefined>(undefined),
			Tether: new FormControl<string | null | undefined>(undefined),
			Tezos: new FormControl<string | null | undefined>(undefined),
			'The Graph': new FormControl<string | null | undefined>(undefined),
			'The Sandbox': new FormControl<string | null | undefined>(undefined),
			'Theta Fuel': new FormControl<string | null | undefined>(undefined),
			'Theta Network': new FormControl<string | null | undefined>(undefined),
			TrueUSD: new FormControl<string | null | undefined>(undefined),
			'USD Coin': new FormControl<string | null | undefined>(undefined),
			Uniswap: new FormControl<string | null | undefined>(undefined),
			VeChain: new FormControl<string | null | undefined>(undefined),
			Waves: new FormControl<string | null | undefined>(undefined),
			'Wrapped Bitcoin': new FormControl<string | null | undefined>(undefined),
			XRP: new FormControl<string | null | undefined>(undefined),
			Zcash: new FormControl<string | null | undefined>(undefined),
			Zilliqa: new FormControl<string | null | undefined>(undefined),
			cDAI: new FormControl<string | null | undefined>(undefined),
			cETH: new FormControl<string | null | undefined>(undefined),
			cUSDC: new FormControl<string | null | undefined>(undefined),
			eCash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetpricedatabycurrencyReturn {
		data?: GetpricedatabycurrencyReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetpricedatabycurrencyReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetpricedatabycurrencyReturnFormGroup() {
		return new FormGroup<GetpricedatabycurrencyReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetpricedatabycurrencyReturnData {
		bitcoin?: GetpricedatabycurrencyReturnDataBitcoin;
	}
	export interface GetpricedatabycurrencyReturnDataFormProperties {
	}
	export function CreateGetpricedatabycurrencyReturnDataFormGroup() {
		return new FormGroup<GetpricedatabycurrencyReturnDataFormProperties>({
		});

	}

	export interface GetpricedatabycurrencyReturnDataBitcoin {
		currentPrice?: number | null;
		high24h?: number | null;
		low24h?: number | null;
		name?: string | null;
		priceChange24h?: number | null;
		priceChangePercentage24h?: number | null;
		symbol?: string | null;
	}
	export interface GetpricedatabycurrencyReturnDataBitcoinFormProperties {
		currentPrice: FormControl<number | null | undefined>,
		high24h: FormControl<number | null | undefined>,
		low24h: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		priceChange24h: FormControl<number | null | undefined>,
		priceChangePercentage24h: FormControl<number | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateGetpricedatabycurrencyReturnDataBitcoinFormGroup() {
		return new FormGroup<GetpricedatabycurrencyReturnDataBitcoinFormProperties>({
			currentPrice: new FormControl<number | null | undefined>(undefined),
			high24h: new FormControl<number | null | undefined>(undefined),
			low24h: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priceChange24h: new FormControl<number | null | undefined>(undefined),
			priceChangePercentage24h: new FormControl<number | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetratebycurrencyReturn {
		data?: GetratebycurrencyReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetratebycurrencyReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetratebycurrencyReturnFormGroup() {
		return new FormGroup<GetratebycurrencyReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetratebycurrencyReturnData {
		currency?: string | null;
		name?: string | null;
		price?: number | null;
	}
	export interface GetratebycurrencyReturnDataFormProperties {
		currency: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
	}
	export function CreateGetratebycurrencyReturnDataFormGroup() {
		return new FormGroup<GetratebycurrencyReturnDataFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetalltimelowReturn {
		data?: GetalltimelowReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetalltimelowReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetalltimelowReturnFormGroup() {
		return new FormGroup<GetalltimelowReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetalltimelowReturnData {
		bitcoin?: GetalltimelowReturnDataBitcoin;
	}
	export interface GetalltimelowReturnDataFormProperties {
	}
	export function CreateGetalltimelowReturnDataFormGroup() {
		return new FormGroup<GetalltimelowReturnDataFormProperties>({
		});

	}

	export interface GetalltimelowReturnDataBitcoin {
		atl?: number | null;
		atlPercentage?: number | null;
		name?: string | null;
		symbol?: string | null;
	}
	export interface GetalltimelowReturnDataBitcoinFormProperties {
		atl: FormControl<number | null | undefined>,
		atlPercentage: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateGetalltimelowReturnDataBitcoinFormGroup() {
		return new FormGroup<GetalltimelowReturnDataBitcoinFormProperties>({
			atl: new FormControl<number | null | undefined>(undefined),
			atlPercentage: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetalltimehighReturn {
		data?: GetalltimehighReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetalltimehighReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetalltimehighReturnFormGroup() {
		return new FormGroup<GetalltimehighReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetalltimehighReturnData {
		bitcoin?: GetalltimehighReturnDataBitcoin;
	}
	export interface GetalltimehighReturnDataFormProperties {
	}
	export function CreateGetalltimehighReturnDataFormGroup() {
		return new FormGroup<GetalltimehighReturnDataFormProperties>({
		});

	}

	export interface GetalltimehighReturnDataBitcoin {
		ath?: number | null;
		athDate?: GetalltimehighReturnDataBitcoinAthDate;
		athPercentage?: number | null;
		name?: string | null;
		symbol?: string | null;
	}
	export interface GetalltimehighReturnDataBitcoinFormProperties {
		ath: FormControl<number | null | undefined>,
		athPercentage: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateGetalltimehighReturnDataBitcoinFormGroup() {
		return new FormGroup<GetalltimehighReturnDataBitcoinFormProperties>({
			ath: new FormControl<number | null | undefined>(undefined),
			athPercentage: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetalltimehighReturnDataBitcoinAthDate {
		offset?: number | null;
		timestamp?: number | null;
		timezone?: GetalltimehighReturnDataBitcoinAthDateTimezone;
	}
	export interface GetalltimehighReturnDataBitcoinAthDateFormProperties {
		offset: FormControl<number | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGetalltimehighReturnDataBitcoinAthDateFormGroup() {
		return new FormGroup<GetalltimehighReturnDataBitcoinAthDateFormProperties>({
			offset: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetalltimehighReturnDataBitcoinAthDateTimezone {
		location?: GetalltimehighReturnDataBitcoinAthDateTimezoneLocation;
		name?: string | null;
		GetalltimehighReturnDataBitcoinAthDateTimezoneTransitions?: Array<GetalltimehighReturnDataBitcoinAthDateTimezoneTransitions>;
	}
	export interface GetalltimehighReturnDataBitcoinAthDateTimezoneFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetalltimehighReturnDataBitcoinAthDateTimezoneFormGroup() {
		return new FormGroup<GetalltimehighReturnDataBitcoinAthDateTimezoneFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetalltimehighReturnDataBitcoinAthDateTimezoneLocation {
		comments?: string | null;
		country_code?: string | null;
		latitude?: number | null;
		longitude?: number | null;
	}
	export interface GetalltimehighReturnDataBitcoinAthDateTimezoneLocationFormProperties {
		comments: FormControl<string | null | undefined>,
		country_code: FormControl<string | null | undefined>,
		latitude: FormControl<number | null | undefined>,
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateGetalltimehighReturnDataBitcoinAthDateTimezoneLocationFormGroup() {
		return new FormGroup<GetalltimehighReturnDataBitcoinAthDateTimezoneLocationFormProperties>({
			comments: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetalltimehighReturnDataBitcoinAthDateTimezoneTransitions {
		abbr?: string | null;
		isdst?: boolean | null;
		offset?: number | null;
		time?: string | null;
		ts?: number | null;
	}
	export interface GetalltimehighReturnDataBitcoinAthDateTimezoneTransitionsFormProperties {
		abbr: FormControl<string | null | undefined>,
		isdst: FormControl<boolean | null | undefined>,
		offset: FormControl<number | null | undefined>,
		time: FormControl<string | null | undefined>,
		ts: FormControl<number | null | undefined>,
	}
	export function CreateGetalltimehighReturnDataBitcoinAthDateTimezoneTransitionsFormGroup() {
		return new FormGroup<GetalltimehighReturnDataBitcoinAthDateTimezoneTransitionsFormProperties>({
			abbr: new FormControl<string | null | undefined>(undefined),
			isdst: new FormControl<boolean | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listaddresses1Return {
		data?: Listaddresses1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Listaddresses1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListaddresses1ReturnFormGroup() {
		return new FormGroup<Listaddresses1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listaddresses1ReturnData {
		addresses?: Array<string>;
	}
	export interface Listaddresses1ReturnDataFormProperties {
	}
	export function CreateListaddresses1ReturnDataFormGroup() {
		return new FormGroup<Listaddresses1ReturnDataFormProperties>({
		});

	}

	export interface Newaddress1PostBody {
		password?: string | null;
	}
	export interface Newaddress1PostBodyFormProperties {
		password: FormControl<string | null | undefined>,
	}
	export function CreateNewaddress1PostBodyFormGroup() {
		return new FormGroup<Newaddress1PostBodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Newaddress1Return {
		data?: Newaddress1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Newaddress1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateNewaddress1ReturnFormGroup() {
		return new FormGroup<Newaddress1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Newaddress1ReturnData {
		ethereumaddress?: string | null;
	}
	export interface Newaddress1ReturnDataFormProperties {
		ethereumaddress: FormControl<string | null | undefined>,
	}
	export function CreateNewaddress1ReturnDataFormGroup() {
		return new FormGroup<Newaddress1ReturnDataFormProperties>({
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Importaddress1PostBody {
		content?: Importaddress1PostBodyContent;
		filename?: string | null;
		password?: string | null;
	}
	export interface Importaddress1PostBodyFormProperties {
		filename: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
	}
	export function CreateImportaddress1PostBodyFormGroup() {
		return new FormGroup<Importaddress1PostBodyFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Importaddress1PostBodyContent {
		address?: string | null;
		crypto?: Importaddress1PostBodyContentCrypto;
		id?: string | null;
		version?: number | null;
	}
	export interface Importaddress1PostBodyContentFormProperties {
		address: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateImportaddress1PostBodyContentFormGroup() {
		return new FormGroup<Importaddress1PostBodyContentFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Importaddress1PostBodyContentCrypto {
		cipher?: string | null;
		cipherparams?: Importaddress1PostBodyContentCryptoCipherparams;
		ciphertext?: string | null;
		kdf?: string | null;
		kdfparams?: Importaddress1PostBodyContentCryptoKdfparams;
		mac?: string | null;
	}
	export interface Importaddress1PostBodyContentCryptoFormProperties {
		cipher: FormControl<string | null | undefined>,
		ciphertext: FormControl<string | null | undefined>,
		kdf: FormControl<string | null | undefined>,
		mac: FormControl<string | null | undefined>,
	}
	export function CreateImportaddress1PostBodyContentCryptoFormGroup() {
		return new FormGroup<Importaddress1PostBodyContentCryptoFormProperties>({
			cipher: new FormControl<string | null | undefined>(undefined),
			ciphertext: new FormControl<string | null | undefined>(undefined),
			kdf: new FormControl<string | null | undefined>(undefined),
			mac: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Importaddress1PostBodyContentCryptoCipherparams {
		iv?: string | null;
	}
	export interface Importaddress1PostBodyContentCryptoCipherparamsFormProperties {
		iv: FormControl<string | null | undefined>,
	}
	export function CreateImportaddress1PostBodyContentCryptoCipherparamsFormGroup() {
		return new FormGroup<Importaddress1PostBodyContentCryptoCipherparamsFormProperties>({
			iv: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Importaddress1PostBodyContentCryptoKdfparams {
		dklen?: number | null;
		n?: number | null;
		p?: number | null;
		r?: number | null;
		salt?: string | null;
	}
	export interface Importaddress1PostBodyContentCryptoKdfparamsFormProperties {
		dklen: FormControl<number | null | undefined>,
		n: FormControl<number | null | undefined>,
		p: FormControl<number | null | undefined>,
		r: FormControl<number | null | undefined>,
		salt: FormControl<string | null | undefined>,
	}
	export function CreateImportaddress1PostBodyContentCryptoKdfparamsFormGroup() {
		return new FormGroup<Importaddress1PostBodyContentCryptoKdfparamsFormProperties>({
			dklen: new FormControl<number | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			p: new FormControl<number | null | undefined>(undefined),
			r: new FormControl<number | null | undefined>(undefined),
			salt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Importaddress1Return {
		data?: Importaddress1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Importaddress1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateImportaddress1ReturnFormGroup() {
		return new FormGroup<Importaddress1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Importaddress1ReturnData {
		address?: string | null;
	}
	export interface Importaddress1ReturnDataFormProperties {
		address: FormControl<string | null | undefined>,
	}
	export function CreateImportaddress1ReturnDataFormGroup() {
		return new FormGroup<Importaddress1ReturnDataFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Deleteaddress1Return {
		data?: Deleteaddress1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Deleteaddress1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteaddress1ReturnFormGroup() {
		return new FormGroup<Deleteaddress1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Deleteaddress1ReturnData {
		deleted?: boolean | null;
		ethereumaddress?: string | null;
	}
	export interface Deleteaddress1ReturnDataFormProperties {
		deleted: FormControl<boolean | null | undefined>,
		ethereumaddress: FormControl<string | null | undefined>,
	}
	export function CreateDeleteaddress1ReturnDataFormGroup() {
		return new FormGroup<Deleteaddress1ReturnDataFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined),
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress1Return {
		data?: Listtransactionsbyaddress1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Listtransactionsbyaddress1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress1ReturnFormGroup() {
		return new FormGroup<Listtransactionsbyaddress1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress1ReturnData {
		current_page?: number | null;
		max_pages?: number | null;
		meta?: Listtransactionsbyaddress1ReturnDataMeta;
		Listtransactionsbyaddress1ReturnDataTransactions?: Array<Listtransactionsbyaddress1ReturnDataTransactions>;
	}
	export interface Listtransactionsbyaddress1ReturnDataFormProperties {
		current_page: FormControl<number | null | undefined>,
		max_pages: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress1ReturnDataFormGroup() {
		return new FormGroup<Listtransactionsbyaddress1ReturnDataFormProperties>({
			current_page: new FormControl<number | null | undefined>(undefined),
			max_pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress1ReturnDataMeta {
		accountedFor?: Listtransactionsbyaddress1ReturnDataMetaAccountedFor;
		chain?: string | null;
		client?: number | null;
		clientId?: number | null;
		finalized?: number | null;
		first_block?: number | null;
		last_block?: string | null;
		namedFrom?: Array<string>;
		namedTo?: Listtransactionsbyaddress1ReturnDataMetaNamedTo;
		networkId?: number | null;
		ripe?: number | null;
		staging?: number | null;
		unNamedFrom?: Listtransactionsbyaddress1ReturnDataMetaUnNamedFrom;
		unNamedTo?: Listtransactionsbyaddress1ReturnDataMetaUnNamedTo;
		unripe?: number | null;
	}
	export interface Listtransactionsbyaddress1ReturnDataMetaFormProperties {
		chain: FormControl<string | null | undefined>,
		client: FormControl<number | null | undefined>,
		clientId: FormControl<number | null | undefined>,
		finalized: FormControl<number | null | undefined>,
		first_block: FormControl<number | null | undefined>,
		last_block: FormControl<string | null | undefined>,
		networkId: FormControl<number | null | undefined>,
		ripe: FormControl<number | null | undefined>,
		staging: FormControl<number | null | undefined>,
		unripe: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress1ReturnDataMetaFormGroup() {
		return new FormGroup<Listtransactionsbyaddress1ReturnDataMetaFormProperties>({
			chain: new FormControl<string | null | undefined>(undefined),
			client: new FormControl<number | null | undefined>(undefined),
			clientId: new FormControl<number | null | undefined>(undefined),
			finalized: new FormControl<number | null | undefined>(undefined),
			first_block: new FormControl<number | null | undefined>(undefined),
			last_block: new FormControl<string | null | undefined>(undefined),
			networkId: new FormControl<number | null | undefined>(undefined),
			ripe: new FormControl<number | null | undefined>(undefined),
			staging: new FormControl<number | null | undefined>(undefined),
			unripe: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress1ReturnDataMetaAccountedFor {
		address?: string | null;
		decimals?: number | null;
		name?: string | null;
		petname?: string | null;
		source?: string | null;
		symbol?: string | null;
		tags?: string | null;
	}
	export interface Listtransactionsbyaddress1ReturnDataMetaAccountedForFormProperties {
		address: FormControl<string | null | undefined>,
		decimals: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		petname: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateListtransactionsbyaddress1ReturnDataMetaAccountedForFormGroup() {
		return new FormGroup<Listtransactionsbyaddress1ReturnDataMetaAccountedForFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			decimals: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			petname: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress1ReturnDataMetaNamedTo {
		'0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf'?: Listtransactionsbyaddress1ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_;
	}
	export interface Listtransactionsbyaddress1ReturnDataMetaNamedToFormProperties {
	}
	export function CreateListtransactionsbyaddress1ReturnDataMetaNamedToFormGroup() {
		return new FormGroup<Listtransactionsbyaddress1ReturnDataMetaNamedToFormProperties>({
		});

	}

	export interface Listtransactionsbyaddress1ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_ {
		count?: number | null;
		isContract?: boolean | null;
		name?: string | null;
		tags?: string | null;
	}
	export interface Listtransactionsbyaddress1ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormProperties {
		count: FormControl<number | null | undefined>,
		isContract: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateListtransactionsbyaddress1ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormGroup() {
		return new FormGroup<Listtransactionsbyaddress1ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			isContract: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress1ReturnDataMetaUnNamedFrom {
		'0x0039b625b1d8632c7a0057c964ec58a9f39789d3'?: number | null;
		'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c'?: number | null;
		'0x006e920000ec97e58900b61e00800010005aa831'?: number | null;
		'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd'?: number | null;
		'0x00dee1f836998bcc736022f314df906588d44808'?: number | null;
		'0x042523db4f3effc33d2742022b2490258494f8b3'?: number | null;
		'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1'?: number | null;
		'0x09e0781a47e9fd2b6258be09bd074f42022b9760'?: number | null;
		'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4'?: number | null;
		'0x177b8ebe208cb71da818b6b8814c946c027240cd'?: number | null;
		'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a'?: number | null;
		'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e'?: number | null;
		'0x26fd09c8b44af53df38a9bad41d5abc55a1786af'?: number | null;
		'0x30a1b724c9dfe2e12a19ed84878312d199d1519e'?: number | null;
		'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388'?: number | null;
		'0x3443006ed920730005d88267c49f77abcde749af'?: number | null;
		'0x346c802df3404bec2f265603db28b815321251ee'?: number | null;
		'0x34ec9e3a1ac200ea58744ced891015152130e400'?: number | null;
		'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb'?: number | null;
		'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6'?: number | null;
		'0x3fbaea01b228368e67ca40d8cb195018fd095318'?: number | null;
		'0x431b5a84acc1297eda88259f300262f1bc3a74f3'?: number | null;
		'0x479bc00624e58398f4cf59d78884d12fb515790a'?: number | null;
		'0x50efbf12580138bc263c95757826df4e24eb81c9'?: number | null;
		'0x5a243879d1a43f48042c33bbc8051c69756f67d4'?: number | null;
		'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7'?: number | null;
		'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f'?: number | null;
		'0x72bb8c608c4ea4a887266985e680a04c056f5b2a'?: number | null;
		'0x76dd32063b2899a59f6e15dbc474a160cc922751'?: number | null;
		'0x76e40d0a69fd81826b5eb7d18145626d46eafdef'?: number | null;
		'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c'?: number | null;
		'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8'?: number | null;
		'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9'?: number | null;
		'0x91aae0aafd9d2d730111b395c6871f248d7bd728'?: number | null;
		'0x92824d144c6543f70a649b2c3e7596612375fd4d'?: number | null;
		'0x93f635372008b7c5d770aaa6ff313454c8dc498c'?: number | null;
		'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee'?: number | null;
		'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0'?: number | null;
		'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979'?: number | null;
		'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde'?: number | null;
		'0xb0804b228c1c1449cdc94dd16fc8910421f45df1'?: number | null;
		'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78'?: number | null;
		'0xb30b1dabe7451fe6646a15631d7537df64b193ce'?: number | null;
		'0xba4ff5f9d6508000b7fd0035bd616aaec070384f'?: number | null;
		'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef'?: number | null;
		'0xc11099d3cd9686158db0a40e88267e7b1740958c'?: number | null;
		'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64'?: number | null;
		'0xe58e5ed4544f58831a84c18178b911a5957ada08'?: number | null;
		'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456'?: number | null;
		'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0'?: number | null;
		'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7'?: number | null;
		'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700'?: number | null;
		'0xff82bf5238637b7e5e345888bab9cd99f5ebe331'?: number | null;
	}
	export interface Listtransactionsbyaddress1ReturnDataMetaUnNamedFromFormProperties {
		'0x0039b625b1d8632c7a0057c964ec58a9f39789d3': FormControl<number | null | undefined>,
		'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c': FormControl<number | null | undefined>,
		'0x006e920000ec97e58900b61e00800010005aa831': FormControl<number | null | undefined>,
		'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd': FormControl<number | null | undefined>,
		'0x00dee1f836998bcc736022f314df906588d44808': FormControl<number | null | undefined>,
		'0x042523db4f3effc33d2742022b2490258494f8b3': FormControl<number | null | undefined>,
		'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1': FormControl<number | null | undefined>,
		'0x09e0781a47e9fd2b6258be09bd074f42022b9760': FormControl<number | null | undefined>,
		'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4': FormControl<number | null | undefined>,
		'0x177b8ebe208cb71da818b6b8814c946c027240cd': FormControl<number | null | undefined>,
		'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a': FormControl<number | null | undefined>,
		'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e': FormControl<number | null | undefined>,
		'0x26fd09c8b44af53df38a9bad41d5abc55a1786af': FormControl<number | null | undefined>,
		'0x30a1b724c9dfe2e12a19ed84878312d199d1519e': FormControl<number | null | undefined>,
		'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388': FormControl<number | null | undefined>,
		'0x3443006ed920730005d88267c49f77abcde749af': FormControl<number | null | undefined>,
		'0x346c802df3404bec2f265603db28b815321251ee': FormControl<number | null | undefined>,
		'0x34ec9e3a1ac200ea58744ced891015152130e400': FormControl<number | null | undefined>,
		'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb': FormControl<number | null | undefined>,
		'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6': FormControl<number | null | undefined>,
		'0x3fbaea01b228368e67ca40d8cb195018fd095318': FormControl<number | null | undefined>,
		'0x431b5a84acc1297eda88259f300262f1bc3a74f3': FormControl<number | null | undefined>,
		'0x479bc00624e58398f4cf59d78884d12fb515790a': FormControl<number | null | undefined>,
		'0x50efbf12580138bc263c95757826df4e24eb81c9': FormControl<number | null | undefined>,
		'0x5a243879d1a43f48042c33bbc8051c69756f67d4': FormControl<number | null | undefined>,
		'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7': FormControl<number | null | undefined>,
		'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f': FormControl<number | null | undefined>,
		'0x72bb8c608c4ea4a887266985e680a04c056f5b2a': FormControl<number | null | undefined>,
		'0x76dd32063b2899a59f6e15dbc474a160cc922751': FormControl<number | null | undefined>,
		'0x76e40d0a69fd81826b5eb7d18145626d46eafdef': FormControl<number | null | undefined>,
		'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c': FormControl<number | null | undefined>,
		'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8': FormControl<number | null | undefined>,
		'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9': FormControl<number | null | undefined>,
		'0x91aae0aafd9d2d730111b395c6871f248d7bd728': FormControl<number | null | undefined>,
		'0x92824d144c6543f70a649b2c3e7596612375fd4d': FormControl<number | null | undefined>,
		'0x93f635372008b7c5d770aaa6ff313454c8dc498c': FormControl<number | null | undefined>,
		'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee': FormControl<number | null | undefined>,
		'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0': FormControl<number | null | undefined>,
		'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979': FormControl<number | null | undefined>,
		'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde': FormControl<number | null | undefined>,
		'0xb0804b228c1c1449cdc94dd16fc8910421f45df1': FormControl<number | null | undefined>,
		'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78': FormControl<number | null | undefined>,
		'0xb30b1dabe7451fe6646a15631d7537df64b193ce': FormControl<number | null | undefined>,
		'0xba4ff5f9d6508000b7fd0035bd616aaec070384f': FormControl<number | null | undefined>,
		'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef': FormControl<number | null | undefined>,
		'0xc11099d3cd9686158db0a40e88267e7b1740958c': FormControl<number | null | undefined>,
		'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64': FormControl<number | null | undefined>,
		'0xe58e5ed4544f58831a84c18178b911a5957ada08': FormControl<number | null | undefined>,
		'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456': FormControl<number | null | undefined>,
		'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0': FormControl<number | null | undefined>,
		'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7': FormControl<number | null | undefined>,
		'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700': FormControl<number | null | undefined>,
		'0xff82bf5238637b7e5e345888bab9cd99f5ebe331': FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress1ReturnDataMetaUnNamedFromFormGroup() {
		return new FormGroup<Listtransactionsbyaddress1ReturnDataMetaUnNamedFromFormProperties>({
			'0x0039b625b1d8632c7a0057c964ec58a9f39789d3': new FormControl<number | null | undefined>(undefined),
			'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c': new FormControl<number | null | undefined>(undefined),
			'0x006e920000ec97e58900b61e00800010005aa831': new FormControl<number | null | undefined>(undefined),
			'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd': new FormControl<number | null | undefined>(undefined),
			'0x00dee1f836998bcc736022f314df906588d44808': new FormControl<number | null | undefined>(undefined),
			'0x042523db4f3effc33d2742022b2490258494f8b3': new FormControl<number | null | undefined>(undefined),
			'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1': new FormControl<number | null | undefined>(undefined),
			'0x09e0781a47e9fd2b6258be09bd074f42022b9760': new FormControl<number | null | undefined>(undefined),
			'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4': new FormControl<number | null | undefined>(undefined),
			'0x177b8ebe208cb71da818b6b8814c946c027240cd': new FormControl<number | null | undefined>(undefined),
			'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a': new FormControl<number | null | undefined>(undefined),
			'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e': new FormControl<number | null | undefined>(undefined),
			'0x26fd09c8b44af53df38a9bad41d5abc55a1786af': new FormControl<number | null | undefined>(undefined),
			'0x30a1b724c9dfe2e12a19ed84878312d199d1519e': new FormControl<number | null | undefined>(undefined),
			'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388': new FormControl<number | null | undefined>(undefined),
			'0x3443006ed920730005d88267c49f77abcde749af': new FormControl<number | null | undefined>(undefined),
			'0x346c802df3404bec2f265603db28b815321251ee': new FormControl<number | null | undefined>(undefined),
			'0x34ec9e3a1ac200ea58744ced891015152130e400': new FormControl<number | null | undefined>(undefined),
			'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb': new FormControl<number | null | undefined>(undefined),
			'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6': new FormControl<number | null | undefined>(undefined),
			'0x3fbaea01b228368e67ca40d8cb195018fd095318': new FormControl<number | null | undefined>(undefined),
			'0x431b5a84acc1297eda88259f300262f1bc3a74f3': new FormControl<number | null | undefined>(undefined),
			'0x479bc00624e58398f4cf59d78884d12fb515790a': new FormControl<number | null | undefined>(undefined),
			'0x50efbf12580138bc263c95757826df4e24eb81c9': new FormControl<number | null | undefined>(undefined),
			'0x5a243879d1a43f48042c33bbc8051c69756f67d4': new FormControl<number | null | undefined>(undefined),
			'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7': new FormControl<number | null | undefined>(undefined),
			'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f': new FormControl<number | null | undefined>(undefined),
			'0x72bb8c608c4ea4a887266985e680a04c056f5b2a': new FormControl<number | null | undefined>(undefined),
			'0x76dd32063b2899a59f6e15dbc474a160cc922751': new FormControl<number | null | undefined>(undefined),
			'0x76e40d0a69fd81826b5eb7d18145626d46eafdef': new FormControl<number | null | undefined>(undefined),
			'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c': new FormControl<number | null | undefined>(undefined),
			'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8': new FormControl<number | null | undefined>(undefined),
			'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9': new FormControl<number | null | undefined>(undefined),
			'0x91aae0aafd9d2d730111b395c6871f248d7bd728': new FormControl<number | null | undefined>(undefined),
			'0x92824d144c6543f70a649b2c3e7596612375fd4d': new FormControl<number | null | undefined>(undefined),
			'0x93f635372008b7c5d770aaa6ff313454c8dc498c': new FormControl<number | null | undefined>(undefined),
			'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee': new FormControl<number | null | undefined>(undefined),
			'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0': new FormControl<number | null | undefined>(undefined),
			'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979': new FormControl<number | null | undefined>(undefined),
			'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde': new FormControl<number | null | undefined>(undefined),
			'0xb0804b228c1c1449cdc94dd16fc8910421f45df1': new FormControl<number | null | undefined>(undefined),
			'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78': new FormControl<number | null | undefined>(undefined),
			'0xb30b1dabe7451fe6646a15631d7537df64b193ce': new FormControl<number | null | undefined>(undefined),
			'0xba4ff5f9d6508000b7fd0035bd616aaec070384f': new FormControl<number | null | undefined>(undefined),
			'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef': new FormControl<number | null | undefined>(undefined),
			'0xc11099d3cd9686158db0a40e88267e7b1740958c': new FormControl<number | null | undefined>(undefined),
			'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64': new FormControl<number | null | undefined>(undefined),
			'0xe58e5ed4544f58831a84c18178b911a5957ada08': new FormControl<number | null | undefined>(undefined),
			'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456': new FormControl<number | null | undefined>(undefined),
			'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0': new FormControl<number | null | undefined>(undefined),
			'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7': new FormControl<number | null | undefined>(undefined),
			'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700': new FormControl<number | null | undefined>(undefined),
			'0xff82bf5238637b7e5e345888bab9cd99f5ebe331': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress1ReturnDataMetaUnNamedTo {
		'0x0000000000007f150bd6f54c40a34d7c3d5e9f56'?: number | null;
		'0x000000000035b5e5ad9019092c665357240f594e'?: number | null;
		'0x0000000000a84d1a9b0063a910315c7ffa9cd248'?: number | null;
		'0x0077732907bfc6208933cfd2a51afb8f33ca5958'?: number | null;
		'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074'?: number | null;
		'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d'?: number | null;
		'0x388c818ca8b9251b393131c08a736a67ccb19297'?: number | null;
		'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06'?: number | null;
		'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6'?: number | null;
		'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf'?: number | null;
		'0x535b918f3724001fd6fb52fcc6cbc220592990a3'?: number | null;
		'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94'?: number | null;
		'0x665179031a86561ac845f43d6b6341cffbcea040'?: number | null;
		'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0'?: number | null;
		'0x81153f0889ab398c4acb42cb58b565a5392bba95'?: number | null;
		'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671'?: number | null;
		'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7'?: number | null;
		'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e'?: number | null;
		'0xa69babef1ca67a37ffaf7a485dfff3382056e78c'?: number | null;
		'0xbeefbabeea323f07c59926295205d3b7a17e8638'?: number | null;
		'0xcfc7e96be27d836b034b37132052549611341108'?: number | null;
		'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c'?: number | null;
		'0xeb00c80f00ca1585000000b84f00940000ed40e5'?: number | null;
		'0xebec795c9c8bbd61ffc14a6662944748f299cacf'?: number | null;
		'0xeee27662c2b8eba3cd936a23f039f3189633e4c8'?: number | null;
		'0xf828add1619bfb64712654076490b2609ae6d774'?: number | null;
		'0xffd22b84fb1d46ef74ed6530b2635be61340f347'?: number | null;
	}
	export interface Listtransactionsbyaddress1ReturnDataMetaUnNamedToFormProperties {
		'0x0000000000007f150bd6f54c40a34d7c3d5e9f56': FormControl<number | null | undefined>,
		'0x000000000035b5e5ad9019092c665357240f594e': FormControl<number | null | undefined>,
		'0x0000000000a84d1a9b0063a910315c7ffa9cd248': FormControl<number | null | undefined>,
		'0x0077732907bfc6208933cfd2a51afb8f33ca5958': FormControl<number | null | undefined>,
		'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074': FormControl<number | null | undefined>,
		'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d': FormControl<number | null | undefined>,
		'0x388c818ca8b9251b393131c08a736a67ccb19297': FormControl<number | null | undefined>,
		'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06': FormControl<number | null | undefined>,
		'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6': FormControl<number | null | undefined>,
		'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf': FormControl<number | null | undefined>,
		'0x535b918f3724001fd6fb52fcc6cbc220592990a3': FormControl<number | null | undefined>,
		'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94': FormControl<number | null | undefined>,
		'0x665179031a86561ac845f43d6b6341cffbcea040': FormControl<number | null | undefined>,
		'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0': FormControl<number | null | undefined>,
		'0x81153f0889ab398c4acb42cb58b565a5392bba95': FormControl<number | null | undefined>,
		'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671': FormControl<number | null | undefined>,
		'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7': FormControl<number | null | undefined>,
		'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e': FormControl<number | null | undefined>,
		'0xa69babef1ca67a37ffaf7a485dfff3382056e78c': FormControl<number | null | undefined>,
		'0xbeefbabeea323f07c59926295205d3b7a17e8638': FormControl<number | null | undefined>,
		'0xcfc7e96be27d836b034b37132052549611341108': FormControl<number | null | undefined>,
		'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c': FormControl<number | null | undefined>,
		'0xeb00c80f00ca1585000000b84f00940000ed40e5': FormControl<number | null | undefined>,
		'0xebec795c9c8bbd61ffc14a6662944748f299cacf': FormControl<number | null | undefined>,
		'0xeee27662c2b8eba3cd936a23f039f3189633e4c8': FormControl<number | null | undefined>,
		'0xf828add1619bfb64712654076490b2609ae6d774': FormControl<number | null | undefined>,
		'0xffd22b84fb1d46ef74ed6530b2635be61340f347': FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress1ReturnDataMetaUnNamedToFormGroup() {
		return new FormGroup<Listtransactionsbyaddress1ReturnDataMetaUnNamedToFormProperties>({
			'0x0000000000007f150bd6f54c40a34d7c3d5e9f56': new FormControl<number | null | undefined>(undefined),
			'0x000000000035b5e5ad9019092c665357240f594e': new FormControl<number | null | undefined>(undefined),
			'0x0000000000a84d1a9b0063a910315c7ffa9cd248': new FormControl<number | null | undefined>(undefined),
			'0x0077732907bfc6208933cfd2a51afb8f33ca5958': new FormControl<number | null | undefined>(undefined),
			'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074': new FormControl<number | null | undefined>(undefined),
			'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d': new FormControl<number | null | undefined>(undefined),
			'0x388c818ca8b9251b393131c08a736a67ccb19297': new FormControl<number | null | undefined>(undefined),
			'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06': new FormControl<number | null | undefined>(undefined),
			'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6': new FormControl<number | null | undefined>(undefined),
			'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf': new FormControl<number | null | undefined>(undefined),
			'0x535b918f3724001fd6fb52fcc6cbc220592990a3': new FormControl<number | null | undefined>(undefined),
			'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94': new FormControl<number | null | undefined>(undefined),
			'0x665179031a86561ac845f43d6b6341cffbcea040': new FormControl<number | null | undefined>(undefined),
			'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0': new FormControl<number | null | undefined>(undefined),
			'0x81153f0889ab398c4acb42cb58b565a5392bba95': new FormControl<number | null | undefined>(undefined),
			'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671': new FormControl<number | null | undefined>(undefined),
			'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7': new FormControl<number | null | undefined>(undefined),
			'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e': new FormControl<number | null | undefined>(undefined),
			'0xa69babef1ca67a37ffaf7a485dfff3382056e78c': new FormControl<number | null | undefined>(undefined),
			'0xbeefbabeea323f07c59926295205d3b7a17e8638': new FormControl<number | null | undefined>(undefined),
			'0xcfc7e96be27d836b034b37132052549611341108': new FormControl<number | null | undefined>(undefined),
			'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c': new FormControl<number | null | undefined>(undefined),
			'0xeb00c80f00ca1585000000b84f00940000ed40e5': new FormControl<number | null | undefined>(undefined),
			'0xebec795c9c8bbd61ffc14a6662944748f299cacf': new FormControl<number | null | undefined>(undefined),
			'0xeee27662c2b8eba3cd936a23f039f3189633e4c8': new FormControl<number | null | undefined>(undefined),
			'0xf828add1619bfb64712654076490b2609ae6d774': new FormControl<number | null | undefined>(undefined),
			'0xffd22b84fb1d46ef74ed6530b2635be61340f347': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress1ReturnDataTransactions {
		blockHash?: string | null;
		blockNumber?: number | null;
		compressedTx?: string | null;
		date?: string | null;
		encoding?: string | null;
		ether?: number | null;
		etherGasCost?: number | null;
		from?: string | null;
		function?: string | null;
		gas?: number | null;
		gasCost?: number | null;
		gasPrice?: number | null;
		gasUsed?: number | null;
		hasToken?: number | null;
		hash?: string | null;
		input?: string | null;
		isError?: number | null;
		maxFeePerGas?: number | null;
		maxPriorityFeePerGas?: number | null;
		receipt?: Listtransactionsbyaddress1ReturnDataTransactionsReceipt;
		timestamp?: number | null;
		to?: string | null;
		traces?: Array<string>;
		transactionIndex?: number | null;
		value?: number | null;
	}
	export interface Listtransactionsbyaddress1ReturnDataTransactionsFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<number | null | undefined>,
		compressedTx: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		encoding: FormControl<string | null | undefined>,
		ether: FormControl<number | null | undefined>,
		etherGasCost: FormControl<number | null | undefined>,
		from: FormControl<string | null | undefined>,
		function: FormControl<string | null | undefined>,
		gas: FormControl<number | null | undefined>,
		gasCost: FormControl<number | null | undefined>,
		gasPrice: FormControl<number | null | undefined>,
		gasUsed: FormControl<number | null | undefined>,
		hasToken: FormControl<number | null | undefined>,
		hash: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		isError: FormControl<number | null | undefined>,
		maxFeePerGas: FormControl<number | null | undefined>,
		maxPriorityFeePerGas: FormControl<number | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
		to: FormControl<string | null | undefined>,
		transactionIndex: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress1ReturnDataTransactionsFormGroup() {
		return new FormGroup<Listtransactionsbyaddress1ReturnDataTransactionsFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<number | null | undefined>(undefined),
			compressedTx: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			ether: new FormControl<number | null | undefined>(undefined),
			etherGasCost: new FormControl<number | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			gas: new FormControl<number | null | undefined>(undefined),
			gasCost: new FormControl<number | null | undefined>(undefined),
			gasPrice: new FormControl<number | null | undefined>(undefined),
			gasUsed: new FormControl<number | null | undefined>(undefined),
			hasToken: new FormControl<number | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			isError: new FormControl<number | null | undefined>(undefined),
			maxFeePerGas: new FormControl<number | null | undefined>(undefined),
			maxPriorityFeePerGas: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress1ReturnDataTransactionsReceipt {
		contractAddress?: string | null;
		effectiveGasPrice?: number | null;
		gasUsed?: number | null;
		logs?: Array<string>;
		status?: number | null;
	}
	export interface Listtransactionsbyaddress1ReturnDataTransactionsReceiptFormProperties {
		contractAddress: FormControl<string | null | undefined>,
		effectiveGasPrice: FormControl<number | null | undefined>,
		gasUsed: FormControl<number | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress1ReturnDataTransactionsReceiptFormGroup() {
		return new FormGroup<Listtransactionsbyaddress1ReturnDataTransactionsReceiptFormProperties>({
			contractAddress: new FormControl<string | null | undefined>(undefined),
			effectiveGasPrice: new FormControl<number | null | undefined>(undefined),
			gasUsed: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetpolygonbalanceReturn {
		data?: GetpolygonbalanceReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetpolygonbalanceReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetpolygonbalanceReturnFormGroup() {
		return new FormGroup<GetpolygonbalanceReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetpolygonbalanceReturnData {
		balance?: string | null;
	}
	export interface GetpolygonbalanceReturnDataFormProperties {
		balance: FormControl<string | null | undefined>,
	}
	export function CreateGetpolygonbalanceReturnDataFormGroup() {
		return new FormGroup<GetpolygonbalanceReturnDataFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Geterc20balance1Return {
		data?: Geterc20balance1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Geterc20balance1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGeterc20balance1ReturnFormGroup() {
		return new FormGroup<Geterc20balance1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Geterc20balance1ReturnData {
		balance?: string | null;
	}
	export interface Geterc20balance1ReturnDataFormProperties {
		balance: FormControl<string | null | undefined>,
	}
	export function CreateGeterc20balance1ReturnDataFormGroup() {
		return new FormGroup<Geterc20balance1ReturnDataFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getlastblocknumber1Return {
		data?: Getlastblocknumber1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getlastblocknumber1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetlastblocknumber1ReturnFormGroup() {
		return new FormGroup<Getlastblocknumber1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getlastblocknumber1ReturnData {
		blocknumber?: number | null;
	}
	export interface Getlastblocknumber1ReturnDataFormProperties {
		blocknumber: FormControl<number | null | undefined>,
	}
	export function CreateGetlastblocknumber1ReturnDataFormGroup() {
		return new FormGroup<Getlastblocknumber1ReturnDataFormProperties>({
			blocknumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getblock1Return {
		data?: Array<string>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getblock1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetblock1ReturnFormGroup() {
		return new FormGroup<Getblock1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Geterc201Return {
		data?: Geterc201ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Geterc201ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGeterc201ReturnFormGroup() {
		return new FormGroup<Geterc201ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Geterc201ReturnData {
		contractaddress?: string | null;
		decimals?: number | null;
		name?: string | null;
		symbol?: string | null;
		totalSupply?: string | null;
	}
	export interface Geterc201ReturnDataFormProperties {
		contractaddress: FormControl<string | null | undefined>,
		decimals: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		totalSupply: FormControl<string | null | undefined>,
	}
	export function CreateGeterc201ReturnDataFormGroup() {
		return new FormGroup<Geterc201ReturnDataFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined),
			decimals: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			totalSupply: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getgasprice1Return {
		data?: Getgasprice1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getgasprice1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetgasprice1ReturnFormGroup() {
		return new FormGroup<Getgasprice1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getgasprice1ReturnData {
		gasPrice?: string | null;
	}
	export interface Getgasprice1ReturnDataFormProperties {
		gasPrice: FormControl<string | null | undefined>,
	}
	export function CreateGetgasprice1ReturnDataFormGroup() {
		return new FormGroup<Getgasprice1ReturnDataFormProperties>({
			gasPrice: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getnftowner1Return {
		data?: Getnftowner1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getnftowner1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetnftowner1ReturnFormGroup() {
		return new FormGroup<Getnftowner1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getnftowner1ReturnData {
		owner?: string | null;
	}
	export interface Getnftowner1ReturnDataFormProperties {
		owner: FormControl<string | null | undefined>,
	}
	export function CreateGetnftowner1ReturnDataFormGroup() {
		return new FormGroup<Getnftowner1ReturnDataFormProperties>({
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getnfturi1Return {
		data?: Getnfturi1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getnfturi1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetnfturi1ReturnFormGroup() {
		return new FormGroup<Getnfturi1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getnfturi1ReturnData {
		uri?: string | null;
	}
	export interface Getnfturi1ReturnDataFormProperties {
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGetnfturi1ReturnDataFormGroup() {
		return new FormGroup<Getnfturi1ReturnDataFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sendtransaction1PostBody {
		amount?: string | null;
		from?: string | null;
		gas?: number | null;
		password?: string | null;
		to?: string | null;
	}
	export interface Sendtransaction1PostBodyFormProperties {
		amount: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		gas: FormControl<number | null | undefined>,
		password: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateSendtransaction1PostBodyFormGroup() {
		return new FormGroup<Sendtransaction1PostBodyFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			gas: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Broadcasttransaction1PostBody {
		data?: string | null;
	}
	export interface Broadcasttransaction1PostBodyFormProperties {
		data: FormControl<string | null | undefined>,
	}
	export function CreateBroadcasttransaction1PostBodyFormGroup() {
		return new FormGroup<Broadcasttransaction1PostBodyFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Broadcasttransaction1Return {
		data?: Broadcasttransaction1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Broadcasttransaction1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateBroadcasttransaction1ReturnFormGroup() {
		return new FormGroup<Broadcasttransaction1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Broadcasttransaction1ReturnData {
		txid?: string | null;
	}
	export interface Broadcasttransaction1ReturnDataFormProperties {
		txid: FormControl<string | null | undefined>,
	}
	export function CreateBroadcasttransaction1ReturnDataFormGroup() {
		return new FormGroup<Broadcasttransaction1ReturnDataFormProperties>({
			txid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Senderc201PostBody {
		amount?: number | null;
		contractaddress?: string | null;
		from?: string | null;
		gas?: number | null;
		password?: string | null;
		to?: string | null;
	}
	export interface Senderc201PostBodyFormProperties {
		amount: FormControl<number | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		gas: FormControl<number | null | undefined>,
		password: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateSenderc201PostBodyFormGroup() {
		return new FormGroup<Senderc201PostBodyFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			gas: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Senderc7211PostBody {
		contractaddress?: string | null;
		from?: string | null;
		password?: string | null;
		to?: string | null;
		tokenid?: number | null;
	}
	export interface Senderc7211PostBodyFormProperties {
		contractaddress: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		tokenid: FormControl<number | null | undefined>,
	}
	export function CreateSenderc7211PostBodyFormGroup() {
		return new FormGroup<Senderc7211PostBodyFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			tokenid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettransaction1Return {
		Gettransaction1ReturnData?: Array<Gettransaction1ReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Gettransaction1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettransaction1ReturnFormGroup() {
		return new FormGroup<Gettransaction1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettransaction1ReturnData {
		blockHash?: string | null;
		blockNumber?: string | null;
		cumulativeGasUsed?: string | null;
		effectiveGasPrice?: string | null;
		from?: string | null;
		gasUsed?: string | null;
		Gettransaction1ReturnDataLogs?: Array<Gettransaction1ReturnDataLogs>;
		logsBloom?: string | null;
		status?: boolean | null;
		to?: string | null;
		transactionHash?: string | null;
		transactionIndex?: string | null;
		type?: string | null;
	}
	export interface Gettransaction1ReturnDataFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<string | null | undefined>,
		cumulativeGasUsed: FormControl<string | null | undefined>,
		effectiveGasPrice: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		gasUsed: FormControl<string | null | undefined>,
		logsBloom: FormControl<string | null | undefined>,
		status: FormControl<boolean | null | undefined>,
		to: FormControl<string | null | undefined>,
		transactionHash: FormControl<string | null | undefined>,
		transactionIndex: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGettransaction1ReturnDataFormGroup() {
		return new FormGroup<Gettransaction1ReturnDataFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<string | null | undefined>(undefined),
			cumulativeGasUsed: new FormControl<string | null | undefined>(undefined),
			effectiveGasPrice: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			gasUsed: new FormControl<string | null | undefined>(undefined),
			logsBloom: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			transactionHash: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransaction1ReturnDataLogs {
		address?: string | null;
		blockHash?: string | null;
		blockNumber?: string | null;
		data?: string | null;
		logIndex?: string | null;
		removed?: boolean | null;
		topics?: Array<string>;
		transactionHash?: string | null;
		transactionIndex?: string | null;
	}
	export interface Gettransaction1ReturnDataLogsFormProperties {
		address: FormControl<string | null | undefined>,
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<string | null | undefined>,
		data: FormControl<string | null | undefined>,
		logIndex: FormControl<string | null | undefined>,
		removed: FormControl<boolean | null | undefined>,
		transactionHash: FormControl<string | null | undefined>,
		transactionIndex: FormControl<string | null | undefined>,
	}
	export function CreateGettransaction1ReturnDataLogsFormGroup() {
		return new FormGroup<Gettransaction1ReturnDataLogsFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			logIndex: new FormControl<string | null | undefined>(undefined),
			removed: new FormControl<boolean | null | undefined>(undefined),
			transactionHash: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt1Return {
		Gettransactionreceipt1ReturnData?: Array<Gettransactionreceipt1ReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Gettransactionreceipt1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettransactionreceipt1ReturnFormGroup() {
		return new FormGroup<Gettransactionreceipt1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt1ReturnData {
		blockHash?: string | null;
		blockNumber?: string | null;
		cumulativeGasUsed?: string | null;
		effectiveGasPrice?: string | null;
		from?: string | null;
		gasUsed?: string | null;
		Gettransactionreceipt1ReturnDataLogs?: Array<Gettransactionreceipt1ReturnDataLogs>;
		logsBloom?: string | null;
		status?: boolean | null;
		to?: string | null;
		transactionHash?: string | null;
		transactionIndex?: string | null;
		type?: string | null;
	}
	export interface Gettransactionreceipt1ReturnDataFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<string | null | undefined>,
		cumulativeGasUsed: FormControl<string | null | undefined>,
		effectiveGasPrice: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		gasUsed: FormControl<string | null | undefined>,
		logsBloom: FormControl<string | null | undefined>,
		status: FormControl<boolean | null | undefined>,
		to: FormControl<string | null | undefined>,
		transactionHash: FormControl<string | null | undefined>,
		transactionIndex: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionreceipt1ReturnDataFormGroup() {
		return new FormGroup<Gettransactionreceipt1ReturnDataFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<string | null | undefined>(undefined),
			cumulativeGasUsed: new FormControl<string | null | undefined>(undefined),
			effectiveGasPrice: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			gasUsed: new FormControl<string | null | undefined>(undefined),
			logsBloom: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			transactionHash: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt1ReturnDataLogs {
		address?: string | null;
		blockHash?: string | null;
		blockNumber?: string | null;
		data?: string | null;
		logIndex?: string | null;
		removed?: boolean | null;
		topics?: Array<string>;
		transactionHash?: string | null;
		transactionIndex?: string | null;
	}
	export interface Gettransactionreceipt1ReturnDataLogsFormProperties {
		address: FormControl<string | null | undefined>,
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<string | null | undefined>,
		data: FormControl<string | null | undefined>,
		logIndex: FormControl<string | null | undefined>,
		removed: FormControl<boolean | null | undefined>,
		transactionHash: FormControl<string | null | undefined>,
		transactionIndex: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionreceipt1ReturnDataLogsFormGroup() {
		return new FormGroup<Gettransactionreceipt1ReturnDataLogsFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			logIndex: new FormControl<string | null | undefined>(undefined),
			removed: new FormControl<boolean | null | undefined>(undefined),
			transactionHash: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listsubscribedaddresses1Return {
		data?: Listsubscribedaddresses1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Listsubscribedaddresses1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListsubscribedaddresses1ReturnFormGroup() {
		return new FormGroup<Listsubscribedaddresses1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listsubscribedaddresses1ReturnData {
		Listsubscribedaddresses1ReturnDataIpns?: Array<Listsubscribedaddresses1ReturnDataIpns>;
	}
	export interface Listsubscribedaddresses1ReturnDataFormProperties {
	}
	export function CreateListsubscribedaddresses1ReturnDataFormGroup() {
		return new FormGroup<Listsubscribedaddresses1ReturnDataFormProperties>({
		});

	}

	export interface Listsubscribedaddresses1ReturnDataIpns {
		bbid?: number | null;
		contractaddress?: string | null;
		from?: any;
		id?: string | null;
		to?: string | null;
		tokenId?: any;
		type?: string | null;
		url?: string | null;
	}
	export interface Listsubscribedaddresses1ReturnDataIpnsFormProperties {
		bbid: FormControl<number | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		from: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		tokenId: FormControl<any | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListsubscribedaddresses1ReturnDataIpnsFormGroup() {
		return new FormGroup<Listsubscribedaddresses1ReturnDataIpnsFormProperties>({
			bbid: new FormControl<number | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subscribeaddress1PostBody {
		to?: string | null;
		type?: string | null;
		url?: string | null;
	}
	export interface Subscribeaddress1PostBodyFormProperties {
		to: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeaddress1PostBodyFormGroup() {
		return new FormGroup<Subscribeaddress1PostBodyFormProperties>({
			to: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subscribeaddress1Return {
		data?: Subscribeaddress1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Subscribeaddress1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateSubscribeaddress1ReturnFormGroup() {
		return new FormGroup<Subscribeaddress1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Subscribeaddress1ReturnData {
		ipn?: Subscribeaddress1ReturnDataIpn;
	}
	export interface Subscribeaddress1ReturnDataFormProperties {
	}
	export function CreateSubscribeaddress1ReturnDataFormGroup() {
		return new FormGroup<Subscribeaddress1ReturnDataFormProperties>({
		});

	}

	export interface Subscribeaddress1ReturnDataIpn {
		bbid?: number | null;
		contractaddress?: any;
		from?: any;
		id?: string | null;
		to?: string | null;
		tokenId?: any;
		type?: string | null;
		url?: string | null;
	}
	export interface Subscribeaddress1ReturnDataIpnFormProperties {
		bbid: FormControl<number | null | undefined>,
		contractaddress: FormControl<any | null | undefined>,
		from: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		tokenId: FormControl<any | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeaddress1ReturnDataIpnFormGroup() {
		return new FormGroup<Subscribeaddress1ReturnDataIpnFormProperties>({
			bbid: new FormControl<number | null | undefined>(undefined),
			contractaddress: new FormControl<any | null | undefined>(undefined),
			from: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Resendfailedipn1Return {
		data?: Resendfailedipn1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Resendfailedipn1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateResendfailedipn1ReturnFormGroup() {
		return new FormGroup<Resendfailedipn1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Resendfailedipn1ReturnData {
		notification_id?: string | null;
	}
	export interface Resendfailedipn1ReturnDataFormProperties {
		notification_id: FormControl<string | null | undefined>,
	}
	export function CreateResendfailedipn1ReturnDataFormGroup() {
		return new FormGroup<Resendfailedipn1ReturnDataFormProperties>({
			notification_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Unsubscribeaddress1Return {
		data?: Unsubscribeaddress1ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Unsubscribeaddress1ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateUnsubscribeaddress1ReturnFormGroup() {
		return new FormGroup<Unsubscribeaddress1ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Unsubscribeaddress1ReturnData {
		webhook_id?: string | null;
	}
	export interface Unsubscribeaddress1ReturnDataFormProperties {
		webhook_id: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeaddress1ReturnDataFormGroup() {
		return new FormGroup<Unsubscribeaddress1ReturnDataFormProperties>({
			webhook_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listipnsbywebhookid1Return {
		Listipnsbywebhookid1ReturnFailed_ipns?: Array<Listipnsbywebhookid1ReturnFailed_ipns>;
		ok?: boolean | null;
	}
	export interface Listipnsbywebhookid1ReturnFormProperties {
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateListipnsbywebhookid1ReturnFormGroup() {
		return new FormGroup<Listipnsbywebhookid1ReturnFormProperties>({
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Listipnsbywebhookid1ReturnFailed_ipns {
		action?: string | null;
		amount?: string | null;
		contractaddress?: string | null;
		ethereumaddress?: string | null;
		id?: string | null;
		timestamp?: string | null;
		url?: string | null;
	}
	export interface Listipnsbywebhookid1ReturnFailed_ipnsFormProperties {
		action: FormControl<string | null | undefined>,
		amount: FormControl<string | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		ethereumaddress: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListipnsbywebhookid1ReturnFailed_ipnsFormGroup() {
		return new FormGroup<Listipnsbywebhookid1ReturnFailed_ipnsFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<string | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listfailedipns1Return {
		Listfailedipns1ReturnFailed_ipns?: Array<Listfailedipns1ReturnFailed_ipns>;
		ok?: boolean | null;
	}
	export interface Listfailedipns1ReturnFormProperties {
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateListfailedipns1ReturnFormGroup() {
		return new FormGroup<Listfailedipns1ReturnFormProperties>({
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Listfailedipns1ReturnFailed_ipns {
		action?: string | null;
		amount?: string | null;
		contractaddress?: string | null;
		ethereumaddress?: string | null;
		id?: string | null;
		timestamp?: string | null;
		url?: string | null;
	}
	export interface Listfailedipns1ReturnFailed_ipnsFormProperties {
		action: FormControl<string | null | undefined>,
		amount: FormControl<string | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		ethereumaddress: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListfailedipns1ReturnFailed_ipnsFormGroup() {
		return new FormGroup<Listfailedipns1ReturnFailed_ipnsFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<string | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetaccountresourcesReturn {
		GetaccountresourcesReturnData?: Array<GetaccountresourcesReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetaccountresourcesReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetaccountresourcesReturnFormGroup() {
		return new FormGroup<GetaccountresourcesReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetaccountresourcesReturnData {
		TotalEnergyLimit?: number | null;
		TotalEnergyWeight?: number | null;
		TotalNetLimit?: number | null;
		TotalNetWeight?: number | null;
		GetaccountresourcesReturnDataAssetNetLimit?: Array<GetaccountresourcesReturnDataAssetNetLimit>;
		GetaccountresourcesReturnDataAssetNetUsed?: Array<GetaccountresourcesReturnDataAssetNetUsed>;
		freeNetLimit?: number | null;
	}
	export interface GetaccountresourcesReturnDataFormProperties {
		TotalEnergyLimit: FormControl<number | null | undefined>,
		TotalEnergyWeight: FormControl<number | null | undefined>,
		TotalNetLimit: FormControl<number | null | undefined>,
		TotalNetWeight: FormControl<number | null | undefined>,
		freeNetLimit: FormControl<number | null | undefined>,
	}
	export function CreateGetaccountresourcesReturnDataFormGroup() {
		return new FormGroup<GetaccountresourcesReturnDataFormProperties>({
			TotalEnergyLimit: new FormControl<number | null | undefined>(undefined),
			TotalEnergyWeight: new FormControl<number | null | undefined>(undefined),
			TotalNetLimit: new FormControl<number | null | undefined>(undefined),
			TotalNetWeight: new FormControl<number | null | undefined>(undefined),
			freeNetLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetaccountresourcesReturnDataAssetNetLimit {
		key?: string | null;
		value?: number | null;
	}
	export interface GetaccountresourcesReturnDataAssetNetLimitFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateGetaccountresourcesReturnDataAssetNetLimitFormGroup() {
		return new FormGroup<GetaccountresourcesReturnDataAssetNetLimitFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetaccountresourcesReturnDataAssetNetUsed {
		key?: string | null;
		value?: number | null;
	}
	export interface GetaccountresourcesReturnDataAssetNetUsedFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateGetaccountresourcesReturnDataAssetNetUsedFormGroup() {
		return new FormGroup<GetaccountresourcesReturnDataAssetNetUsedFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Newaddress3PostBody {
		password?: string | null;
	}
	export interface Newaddress3PostBodyFormProperties {
		password: FormControl<string | null | undefined>,
	}
	export function CreateNewaddress3PostBodyFormGroup() {
		return new FormGroup<Newaddress3PostBodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Newaddress3Return {
		data?: Newaddress3ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Newaddress3ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateNewaddress3ReturnFormGroup() {
		return new FormGroup<Newaddress3ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Newaddress3ReturnData {
		ethereumaddress?: string | null;
	}
	export interface Newaddress3ReturnDataFormProperties {
		ethereumaddress: FormControl<string | null | undefined>,
	}
	export function CreateNewaddress3ReturnDataFormGroup() {
		return new FormGroup<Newaddress3ReturnDataFormProperties>({
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress3Return {
		data?: Listtransactionsbyaddress3ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Listtransactionsbyaddress3ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress3ReturnFormGroup() {
		return new FormGroup<Listtransactionsbyaddress3ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress3ReturnData {
		current_page?: number | null;
		max_pages?: number | null;
		meta?: Listtransactionsbyaddress3ReturnDataMeta;
		Listtransactionsbyaddress3ReturnDataTransactions?: Array<Listtransactionsbyaddress3ReturnDataTransactions>;
	}
	export interface Listtransactionsbyaddress3ReturnDataFormProperties {
		current_page: FormControl<number | null | undefined>,
		max_pages: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress3ReturnDataFormGroup() {
		return new FormGroup<Listtransactionsbyaddress3ReturnDataFormProperties>({
			current_page: new FormControl<number | null | undefined>(undefined),
			max_pages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress3ReturnDataMeta {
		accountedFor?: Listtransactionsbyaddress3ReturnDataMetaAccountedFor;
		chain?: string | null;
		client?: number | null;
		clientId?: number | null;
		finalized?: number | null;
		first_block?: number | null;
		last_block?: string | null;
		namedFrom?: Array<string>;
		namedTo?: Listtransactionsbyaddress3ReturnDataMetaNamedTo;
		networkId?: number | null;
		ripe?: number | null;
		staging?: number | null;
		unNamedFrom?: Listtransactionsbyaddress3ReturnDataMetaUnNamedFrom;
		unNamedTo?: Listtransactionsbyaddress3ReturnDataMetaUnNamedTo;
		unripe?: number | null;
	}
	export interface Listtransactionsbyaddress3ReturnDataMetaFormProperties {
		chain: FormControl<string | null | undefined>,
		client: FormControl<number | null | undefined>,
		clientId: FormControl<number | null | undefined>,
		finalized: FormControl<number | null | undefined>,
		first_block: FormControl<number | null | undefined>,
		last_block: FormControl<string | null | undefined>,
		networkId: FormControl<number | null | undefined>,
		ripe: FormControl<number | null | undefined>,
		staging: FormControl<number | null | undefined>,
		unripe: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress3ReturnDataMetaFormGroup() {
		return new FormGroup<Listtransactionsbyaddress3ReturnDataMetaFormProperties>({
			chain: new FormControl<string | null | undefined>(undefined),
			client: new FormControl<number | null | undefined>(undefined),
			clientId: new FormControl<number | null | undefined>(undefined),
			finalized: new FormControl<number | null | undefined>(undefined),
			first_block: new FormControl<number | null | undefined>(undefined),
			last_block: new FormControl<string | null | undefined>(undefined),
			networkId: new FormControl<number | null | undefined>(undefined),
			ripe: new FormControl<number | null | undefined>(undefined),
			staging: new FormControl<number | null | undefined>(undefined),
			unripe: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress3ReturnDataMetaAccountedFor {
		address?: string | null;
		decimals?: number | null;
		name?: string | null;
		petname?: string | null;
		source?: string | null;
		symbol?: string | null;
		tags?: string | null;
	}
	export interface Listtransactionsbyaddress3ReturnDataMetaAccountedForFormProperties {
		address: FormControl<string | null | undefined>,
		decimals: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		petname: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateListtransactionsbyaddress3ReturnDataMetaAccountedForFormGroup() {
		return new FormGroup<Listtransactionsbyaddress3ReturnDataMetaAccountedForFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			decimals: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			petname: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress3ReturnDataMetaNamedTo {
		'0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf'?: Listtransactionsbyaddress3ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_;
	}
	export interface Listtransactionsbyaddress3ReturnDataMetaNamedToFormProperties {
	}
	export function CreateListtransactionsbyaddress3ReturnDataMetaNamedToFormGroup() {
		return new FormGroup<Listtransactionsbyaddress3ReturnDataMetaNamedToFormProperties>({
		});

	}

	export interface Listtransactionsbyaddress3ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_ {
		count?: number | null;
		isContract?: boolean | null;
		name?: string | null;
		tags?: string | null;
	}
	export interface Listtransactionsbyaddress3ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormProperties {
		count: FormControl<number | null | undefined>,
		isContract: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateListtransactionsbyaddress3ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormGroup() {
		return new FormGroup<Listtransactionsbyaddress3ReturnDataMetaNamedTo_0xa57bd00134b2850b2a1c55860c9e9ea100fdd6cf_FormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			isContract: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress3ReturnDataMetaUnNamedFrom {
		'0x0039b625b1d8632c7a0057c964ec58a9f39789d3'?: number | null;
		'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c'?: number | null;
		'0x006e920000ec97e58900b61e00800010005aa831'?: number | null;
		'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd'?: number | null;
		'0x00dee1f836998bcc736022f314df906588d44808'?: number | null;
		'0x042523db4f3effc33d2742022b2490258494f8b3'?: number | null;
		'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1'?: number | null;
		'0x09e0781a47e9fd2b6258be09bd074f42022b9760'?: number | null;
		'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4'?: number | null;
		'0x177b8ebe208cb71da818b6b8814c946c027240cd'?: number | null;
		'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a'?: number | null;
		'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e'?: number | null;
		'0x26fd09c8b44af53df38a9bad41d5abc55a1786af'?: number | null;
		'0x30a1b724c9dfe2e12a19ed84878312d199d1519e'?: number | null;
		'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388'?: number | null;
		'0x3443006ed920730005d88267c49f77abcde749af'?: number | null;
		'0x346c802df3404bec2f265603db28b815321251ee'?: number | null;
		'0x34ec9e3a1ac200ea58744ced891015152130e400'?: number | null;
		'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb'?: number | null;
		'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6'?: number | null;
		'0x3fbaea01b228368e67ca40d8cb195018fd095318'?: number | null;
		'0x431b5a84acc1297eda88259f300262f1bc3a74f3'?: number | null;
		'0x479bc00624e58398f4cf59d78884d12fb515790a'?: number | null;
		'0x50efbf12580138bc263c95757826df4e24eb81c9'?: number | null;
		'0x5a243879d1a43f48042c33bbc8051c69756f67d4'?: number | null;
		'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7'?: number | null;
		'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f'?: number | null;
		'0x72bb8c608c4ea4a887266985e680a04c056f5b2a'?: number | null;
		'0x76dd32063b2899a59f6e15dbc474a160cc922751'?: number | null;
		'0x76e40d0a69fd81826b5eb7d18145626d46eafdef'?: number | null;
		'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c'?: number | null;
		'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8'?: number | null;
		'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9'?: number | null;
		'0x91aae0aafd9d2d730111b395c6871f248d7bd728'?: number | null;
		'0x92824d144c6543f70a649b2c3e7596612375fd4d'?: number | null;
		'0x93f635372008b7c5d770aaa6ff313454c8dc498c'?: number | null;
		'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee'?: number | null;
		'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0'?: number | null;
		'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979'?: number | null;
		'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde'?: number | null;
		'0xb0804b228c1c1449cdc94dd16fc8910421f45df1'?: number | null;
		'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78'?: number | null;
		'0xb30b1dabe7451fe6646a15631d7537df64b193ce'?: number | null;
		'0xba4ff5f9d6508000b7fd0035bd616aaec070384f'?: number | null;
		'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef'?: number | null;
		'0xc11099d3cd9686158db0a40e88267e7b1740958c'?: number | null;
		'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64'?: number | null;
		'0xe58e5ed4544f58831a84c18178b911a5957ada08'?: number | null;
		'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456'?: number | null;
		'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0'?: number | null;
		'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7'?: number | null;
		'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700'?: number | null;
		'0xff82bf5238637b7e5e345888bab9cd99f5ebe331'?: number | null;
	}
	export interface Listtransactionsbyaddress3ReturnDataMetaUnNamedFromFormProperties {
		'0x0039b625b1d8632c7a0057c964ec58a9f39789d3': FormControl<number | null | undefined>,
		'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c': FormControl<number | null | undefined>,
		'0x006e920000ec97e58900b61e00800010005aa831': FormControl<number | null | undefined>,
		'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd': FormControl<number | null | undefined>,
		'0x00dee1f836998bcc736022f314df906588d44808': FormControl<number | null | undefined>,
		'0x042523db4f3effc33d2742022b2490258494f8b3': FormControl<number | null | undefined>,
		'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1': FormControl<number | null | undefined>,
		'0x09e0781a47e9fd2b6258be09bd074f42022b9760': FormControl<number | null | undefined>,
		'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4': FormControl<number | null | undefined>,
		'0x177b8ebe208cb71da818b6b8814c946c027240cd': FormControl<number | null | undefined>,
		'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a': FormControl<number | null | undefined>,
		'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e': FormControl<number | null | undefined>,
		'0x26fd09c8b44af53df38a9bad41d5abc55a1786af': FormControl<number | null | undefined>,
		'0x30a1b724c9dfe2e12a19ed84878312d199d1519e': FormControl<number | null | undefined>,
		'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388': FormControl<number | null | undefined>,
		'0x3443006ed920730005d88267c49f77abcde749af': FormControl<number | null | undefined>,
		'0x346c802df3404bec2f265603db28b815321251ee': FormControl<number | null | undefined>,
		'0x34ec9e3a1ac200ea58744ced891015152130e400': FormControl<number | null | undefined>,
		'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb': FormControl<number | null | undefined>,
		'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6': FormControl<number | null | undefined>,
		'0x3fbaea01b228368e67ca40d8cb195018fd095318': FormControl<number | null | undefined>,
		'0x431b5a84acc1297eda88259f300262f1bc3a74f3': FormControl<number | null | undefined>,
		'0x479bc00624e58398f4cf59d78884d12fb515790a': FormControl<number | null | undefined>,
		'0x50efbf12580138bc263c95757826df4e24eb81c9': FormControl<number | null | undefined>,
		'0x5a243879d1a43f48042c33bbc8051c69756f67d4': FormControl<number | null | undefined>,
		'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7': FormControl<number | null | undefined>,
		'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f': FormControl<number | null | undefined>,
		'0x72bb8c608c4ea4a887266985e680a04c056f5b2a': FormControl<number | null | undefined>,
		'0x76dd32063b2899a59f6e15dbc474a160cc922751': FormControl<number | null | undefined>,
		'0x76e40d0a69fd81826b5eb7d18145626d46eafdef': FormControl<number | null | undefined>,
		'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c': FormControl<number | null | undefined>,
		'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8': FormControl<number | null | undefined>,
		'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9': FormControl<number | null | undefined>,
		'0x91aae0aafd9d2d730111b395c6871f248d7bd728': FormControl<number | null | undefined>,
		'0x92824d144c6543f70a649b2c3e7596612375fd4d': FormControl<number | null | undefined>,
		'0x93f635372008b7c5d770aaa6ff313454c8dc498c': FormControl<number | null | undefined>,
		'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee': FormControl<number | null | undefined>,
		'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0': FormControl<number | null | undefined>,
		'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979': FormControl<number | null | undefined>,
		'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde': FormControl<number | null | undefined>,
		'0xb0804b228c1c1449cdc94dd16fc8910421f45df1': FormControl<number | null | undefined>,
		'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78': FormControl<number | null | undefined>,
		'0xb30b1dabe7451fe6646a15631d7537df64b193ce': FormControl<number | null | undefined>,
		'0xba4ff5f9d6508000b7fd0035bd616aaec070384f': FormControl<number | null | undefined>,
		'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef': FormControl<number | null | undefined>,
		'0xc11099d3cd9686158db0a40e88267e7b1740958c': FormControl<number | null | undefined>,
		'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64': FormControl<number | null | undefined>,
		'0xe58e5ed4544f58831a84c18178b911a5957ada08': FormControl<number | null | undefined>,
		'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456': FormControl<number | null | undefined>,
		'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0': FormControl<number | null | undefined>,
		'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7': FormControl<number | null | undefined>,
		'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700': FormControl<number | null | undefined>,
		'0xff82bf5238637b7e5e345888bab9cd99f5ebe331': FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress3ReturnDataMetaUnNamedFromFormGroup() {
		return new FormGroup<Listtransactionsbyaddress3ReturnDataMetaUnNamedFromFormProperties>({
			'0x0039b625b1d8632c7a0057c964ec58a9f39789d3': new FormControl<number | null | undefined>(undefined),
			'0x005fde5294199d5c3eb5eb7a6e51954123b74b1c': new FormControl<number | null | undefined>(undefined),
			'0x006e920000ec97e58900b61e00800010005aa831': new FormControl<number | null | undefined>(undefined),
			'0x00a2aebc7e233cd2ffe5ab5856f90f0ad2fa3ccd': new FormControl<number | null | undefined>(undefined),
			'0x00dee1f836998bcc736022f314df906588d44808': new FormControl<number | null | undefined>(undefined),
			'0x042523db4f3effc33d2742022b2490258494f8b3': new FormControl<number | null | undefined>(undefined),
			'0x065e3dbafcb2c26a978720f9eb4bce6ad9d644a1': new FormControl<number | null | undefined>(undefined),
			'0x09e0781a47e9fd2b6258be09bd074f42022b9760': new FormControl<number | null | undefined>(undefined),
			'0x0d0b3f21d7c90d0b957aa6acbc993621311208e4': new FormControl<number | null | undefined>(undefined),
			'0x177b8ebe208cb71da818b6b8814c946c027240cd': new FormControl<number | null | undefined>(undefined),
			'0x1c8f6a5f009e051cab9c3851ca2da2c936b2775a': new FormControl<number | null | undefined>(undefined),
			'0x26bce6ecb5b10138e4bf14ac0ffcc8727fef3b2e': new FormControl<number | null | undefined>(undefined),
			'0x26fd09c8b44af53df38a9bad41d5abc55a1786af': new FormControl<number | null | undefined>(undefined),
			'0x30a1b724c9dfe2e12a19ed84878312d199d1519e': new FormControl<number | null | undefined>(undefined),
			'0x33cef21eb6068ebfcf70c7404efb8aaa08cad388': new FormControl<number | null | undefined>(undefined),
			'0x3443006ed920730005d88267c49f77abcde749af': new FormControl<number | null | undefined>(undefined),
			'0x346c802df3404bec2f265603db28b815321251ee': new FormControl<number | null | undefined>(undefined),
			'0x34ec9e3a1ac200ea58744ced891015152130e400': new FormControl<number | null | undefined>(undefined),
			'0x3b25d8e0801df1264a3d3a5f0bb79bbc292a09fb': new FormControl<number | null | undefined>(undefined),
			'0x3fb530b53036b5d8de892ad1eda14a576a22e6d6': new FormControl<number | null | undefined>(undefined),
			'0x3fbaea01b228368e67ca40d8cb195018fd095318': new FormControl<number | null | undefined>(undefined),
			'0x431b5a84acc1297eda88259f300262f1bc3a74f3': new FormControl<number | null | undefined>(undefined),
			'0x479bc00624e58398f4cf59d78884d12fb515790a': new FormControl<number | null | undefined>(undefined),
			'0x50efbf12580138bc263c95757826df4e24eb81c9': new FormControl<number | null | undefined>(undefined),
			'0x5a243879d1a43f48042c33bbc8051c69756f67d4': new FormControl<number | null | undefined>(undefined),
			'0x6046945c5b5ef5933b8e73a98a6ad7bf3e031df7': new FormControl<number | null | undefined>(undefined),
			'0x60b86af869f23aeb552fb7f3cabd11b829f6ab2f': new FormControl<number | null | undefined>(undefined),
			'0x72bb8c608c4ea4a887266985e680a04c056f5b2a': new FormControl<number | null | undefined>(undefined),
			'0x76dd32063b2899a59f6e15dbc474a160cc922751': new FormControl<number | null | undefined>(undefined),
			'0x76e40d0a69fd81826b5eb7d18145626d46eafdef': new FormControl<number | null | undefined>(undefined),
			'0x77eb9084ce8168901bcb11f14f02a7aab36fcd0c': new FormControl<number | null | undefined>(undefined),
			'0x8e2400a8822fe2da5a8c52b7f7b412acb49813c8': new FormControl<number | null | undefined>(undefined),
			'0x8e8f818d3371f797a2db7edb32803607c8b3c6a9': new FormControl<number | null | undefined>(undefined),
			'0x91aae0aafd9d2d730111b395c6871f248d7bd728': new FormControl<number | null | undefined>(undefined),
			'0x92824d144c6543f70a649b2c3e7596612375fd4d': new FormControl<number | null | undefined>(undefined),
			'0x93f635372008b7c5d770aaa6ff313454c8dc498c': new FormControl<number | null | undefined>(undefined),
			'0x9aab3f81604c683a1a0d14019fbfe15bef7aa1ee': new FormControl<number | null | undefined>(undefined),
			'0xa5a13f62ce1113838e0d9b4559b8caf5f76463c0': new FormControl<number | null | undefined>(undefined),
			'0xa6807d794411d9a80bc435dfc4cda0ba0ddde979': new FormControl<number | null | undefined>(undefined),
			'0xa855d1198c67839e596b9a5d7c46f8ea31cfefde': new FormControl<number | null | undefined>(undefined),
			'0xb0804b228c1c1449cdc94dd16fc8910421f45df1': new FormControl<number | null | undefined>(undefined),
			'0xb2088e2ec5e3599554a70cbb17c0ef1aac70dc78': new FormControl<number | null | undefined>(undefined),
			'0xb30b1dabe7451fe6646a15631d7537df64b193ce': new FormControl<number | null | undefined>(undefined),
			'0xba4ff5f9d6508000b7fd0035bd616aaec070384f': new FormControl<number | null | undefined>(undefined),
			'0xbbad96336943a36e3e292d973b3382dd0ba4d1ef': new FormControl<number | null | undefined>(undefined),
			'0xc11099d3cd9686158db0a40e88267e7b1740958c': new FormControl<number | null | undefined>(undefined),
			'0xd03154dbc4ae6beafa79f7ae6d99c12ce58f5b64': new FormControl<number | null | undefined>(undefined),
			'0xe58e5ed4544f58831a84c18178b911a5957ada08': new FormControl<number | null | undefined>(undefined),
			'0xeca2e2d894d19778939bd4dfc34d2a3c45e96456': new FormControl<number | null | undefined>(undefined),
			'0xf0475a1f184f062d1eee88f0d79ec4eb2795d4f0': new FormControl<number | null | undefined>(undefined),
			'0xf5e322fd6fadbef5d14eaf0f45a809c00739d1e7': new FormControl<number | null | undefined>(undefined),
			'0xfb9779477e5b4834bf2bc02dd29b97b344d0f700': new FormControl<number | null | undefined>(undefined),
			'0xff82bf5238637b7e5e345888bab9cd99f5ebe331': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress3ReturnDataMetaUnNamedTo {
		'0x0000000000007f150bd6f54c40a34d7c3d5e9f56'?: number | null;
		'0x000000000035b5e5ad9019092c665357240f594e'?: number | null;
		'0x0000000000a84d1a9b0063a910315c7ffa9cd248'?: number | null;
		'0x0077732907bfc6208933cfd2a51afb8f33ca5958'?: number | null;
		'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074'?: number | null;
		'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d'?: number | null;
		'0x388c818ca8b9251b393131c08a736a67ccb19297'?: number | null;
		'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06'?: number | null;
		'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6'?: number | null;
		'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf'?: number | null;
		'0x535b918f3724001fd6fb52fcc6cbc220592990a3'?: number | null;
		'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94'?: number | null;
		'0x665179031a86561ac845f43d6b6341cffbcea040'?: number | null;
		'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0'?: number | null;
		'0x81153f0889ab398c4acb42cb58b565a5392bba95'?: number | null;
		'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671'?: number | null;
		'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7'?: number | null;
		'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e'?: number | null;
		'0xa69babef1ca67a37ffaf7a485dfff3382056e78c'?: number | null;
		'0xbeefbabeea323f07c59926295205d3b7a17e8638'?: number | null;
		'0xcfc7e96be27d836b034b37132052549611341108'?: number | null;
		'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c'?: number | null;
		'0xeb00c80f00ca1585000000b84f00940000ed40e5'?: number | null;
		'0xebec795c9c8bbd61ffc14a6662944748f299cacf'?: number | null;
		'0xeee27662c2b8eba3cd936a23f039f3189633e4c8'?: number | null;
		'0xf828add1619bfb64712654076490b2609ae6d774'?: number | null;
		'0xffd22b84fb1d46ef74ed6530b2635be61340f347'?: number | null;
	}
	export interface Listtransactionsbyaddress3ReturnDataMetaUnNamedToFormProperties {
		'0x0000000000007f150bd6f54c40a34d7c3d5e9f56': FormControl<number | null | undefined>,
		'0x000000000035b5e5ad9019092c665357240f594e': FormControl<number | null | undefined>,
		'0x0000000000a84d1a9b0063a910315c7ffa9cd248': FormControl<number | null | undefined>,
		'0x0077732907bfc6208933cfd2a51afb8f33ca5958': FormControl<number | null | undefined>,
		'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074': FormControl<number | null | undefined>,
		'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d': FormControl<number | null | undefined>,
		'0x388c818ca8b9251b393131c08a736a67ccb19297': FormControl<number | null | undefined>,
		'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06': FormControl<number | null | undefined>,
		'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6': FormControl<number | null | undefined>,
		'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf': FormControl<number | null | undefined>,
		'0x535b918f3724001fd6fb52fcc6cbc220592990a3': FormControl<number | null | undefined>,
		'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94': FormControl<number | null | undefined>,
		'0x665179031a86561ac845f43d6b6341cffbcea040': FormControl<number | null | undefined>,
		'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0': FormControl<number | null | undefined>,
		'0x81153f0889ab398c4acb42cb58b565a5392bba95': FormControl<number | null | undefined>,
		'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671': FormControl<number | null | undefined>,
		'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7': FormControl<number | null | undefined>,
		'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e': FormControl<number | null | undefined>,
		'0xa69babef1ca67a37ffaf7a485dfff3382056e78c': FormControl<number | null | undefined>,
		'0xbeefbabeea323f07c59926295205d3b7a17e8638': FormControl<number | null | undefined>,
		'0xcfc7e96be27d836b034b37132052549611341108': FormControl<number | null | undefined>,
		'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c': FormControl<number | null | undefined>,
		'0xeb00c80f00ca1585000000b84f00940000ed40e5': FormControl<number | null | undefined>,
		'0xebec795c9c8bbd61ffc14a6662944748f299cacf': FormControl<number | null | undefined>,
		'0xeee27662c2b8eba3cd936a23f039f3189633e4c8': FormControl<number | null | undefined>,
		'0xf828add1619bfb64712654076490b2609ae6d774': FormControl<number | null | undefined>,
		'0xffd22b84fb1d46ef74ed6530b2635be61340f347': FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress3ReturnDataMetaUnNamedToFormGroup() {
		return new FormGroup<Listtransactionsbyaddress3ReturnDataMetaUnNamedToFormProperties>({
			'0x0000000000007f150bd6f54c40a34d7c3d5e9f56': new FormControl<number | null | undefined>(undefined),
			'0x000000000035b5e5ad9019092c665357240f594e': new FormControl<number | null | undefined>(undefined),
			'0x0000000000a84d1a9b0063a910315c7ffa9cd248': new FormControl<number | null | undefined>(undefined),
			'0x0077732907bfc6208933cfd2a51afb8f33ca5958': new FormControl<number | null | undefined>(undefined),
			'0x1cedc0f3af8f9841b0a1f5c1a4ddc6e1a1629074': new FormControl<number | null | undefined>(undefined),
			'0x26c541f5e1c8eab0f6f0943bb1c8843ab18c4b0d': new FormControl<number | null | undefined>(undefined),
			'0x388c818ca8b9251b393131c08a736a67ccb19297': new FormControl<number | null | undefined>(undefined),
			'0x3e2766167aa2acb097c311d5a2e9eb17cad38b06': new FormControl<number | null | undefined>(undefined),
			'0x4a137fd5e7a256ef08a7de531a17d0be0cc7b6b6': new FormControl<number | null | undefined>(undefined),
			'0x5050e08626c499411b5d0e0b5af0e83d3fd82edf': new FormControl<number | null | undefined>(undefined),
			'0x535b918f3724001fd6fb52fcc6cbc220592990a3': new FormControl<number | null | undefined>(undefined),
			'0x57c1e0c2adf6eecdb135bcf9ec5f23b319be2c94': new FormControl<number | null | undefined>(undefined),
			'0x665179031a86561ac845f43d6b6341cffbcea040': new FormControl<number | null | undefined>(undefined),
			'0x7d9da47e83b82a52a2b45353cdad735afb43e6f0': new FormControl<number | null | undefined>(undefined),
			'0x81153f0889ab398c4acb42cb58b565a5392bba95': new FormControl<number | null | undefined>(undefined),
			'0x87b3f3c934a13c779e100a5d6e6d7ef577e86671': new FormControl<number | null | undefined>(undefined),
			'0x87d9da48db6e1f925cb67d3b7d2a292846c24cf7': new FormControl<number | null | undefined>(undefined),
			'0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e': new FormControl<number | null | undefined>(undefined),
			'0xa69babef1ca67a37ffaf7a485dfff3382056e78c': new FormControl<number | null | undefined>(undefined),
			'0xbeefbabeea323f07c59926295205d3b7a17e8638': new FormControl<number | null | undefined>(undefined),
			'0xcfc7e96be27d836b034b37132052549611341108': new FormControl<number | null | undefined>(undefined),
			'0xe94f1fa4f27d9d288ffea234bb62e1fbc086ca0c': new FormControl<number | null | undefined>(undefined),
			'0xeb00c80f00ca1585000000b84f00940000ed40e5': new FormControl<number | null | undefined>(undefined),
			'0xebec795c9c8bbd61ffc14a6662944748f299cacf': new FormControl<number | null | undefined>(undefined),
			'0xeee27662c2b8eba3cd936a23f039f3189633e4c8': new FormControl<number | null | undefined>(undefined),
			'0xf828add1619bfb64712654076490b2609ae6d774': new FormControl<number | null | undefined>(undefined),
			'0xffd22b84fb1d46ef74ed6530b2635be61340f347': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress3ReturnDataTransactions {
		blockHash?: string | null;
		blockNumber?: number | null;
		compressedTx?: string | null;
		date?: string | null;
		encoding?: string | null;
		ether?: number | null;
		etherGasCost?: number | null;
		from?: string | null;
		function?: string | null;
		gas?: number | null;
		gasCost?: number | null;
		gasPrice?: number | null;
		gasUsed?: number | null;
		hasToken?: number | null;
		hash?: string | null;
		input?: string | null;
		isError?: number | null;
		maxFeePerGas?: number | null;
		maxPriorityFeePerGas?: number | null;
		receipt?: Listtransactionsbyaddress3ReturnDataTransactionsReceipt;
		timestamp?: number | null;
		to?: string | null;
		traces?: Array<string>;
		transactionIndex?: number | null;
		value?: number | null;
	}
	export interface Listtransactionsbyaddress3ReturnDataTransactionsFormProperties {
		blockHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<number | null | undefined>,
		compressedTx: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		encoding: FormControl<string | null | undefined>,
		ether: FormControl<number | null | undefined>,
		etherGasCost: FormControl<number | null | undefined>,
		from: FormControl<string | null | undefined>,
		function: FormControl<string | null | undefined>,
		gas: FormControl<number | null | undefined>,
		gasCost: FormControl<number | null | undefined>,
		gasPrice: FormControl<number | null | undefined>,
		gasUsed: FormControl<number | null | undefined>,
		hasToken: FormControl<number | null | undefined>,
		hash: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		isError: FormControl<number | null | undefined>,
		maxFeePerGas: FormControl<number | null | undefined>,
		maxPriorityFeePerGas: FormControl<number | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
		to: FormControl<string | null | undefined>,
		transactionIndex: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress3ReturnDataTransactionsFormGroup() {
		return new FormGroup<Listtransactionsbyaddress3ReturnDataTransactionsFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
			blockNumber: new FormControl<number | null | undefined>(undefined),
			compressedTx: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			ether: new FormControl<number | null | undefined>(undefined),
			etherGasCost: new FormControl<number | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			gas: new FormControl<number | null | undefined>(undefined),
			gasCost: new FormControl<number | null | undefined>(undefined),
			gasPrice: new FormControl<number | null | undefined>(undefined),
			gasUsed: new FormControl<number | null | undefined>(undefined),
			hasToken: new FormControl<number | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			isError: new FormControl<number | null | undefined>(undefined),
			maxFeePerGas: new FormControl<number | null | undefined>(undefined),
			maxPriorityFeePerGas: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			transactionIndex: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listtransactionsbyaddress3ReturnDataTransactionsReceipt {
		contractAddress?: string | null;
		effectiveGasPrice?: number | null;
		gasUsed?: number | null;
		logs?: Array<string>;
		status?: number | null;
	}
	export interface Listtransactionsbyaddress3ReturnDataTransactionsReceiptFormProperties {
		contractAddress: FormControl<string | null | undefined>,
		effectiveGasPrice: FormControl<number | null | undefined>,
		gasUsed: FormControl<number | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListtransactionsbyaddress3ReturnDataTransactionsReceiptFormGroup() {
		return new FormGroup<Listtransactionsbyaddress3ReturnDataTransactionsReceiptFormProperties>({
			contractAddress: new FormControl<string | null | undefined>(undefined),
			effectiveGasPrice: new FormControl<number | null | undefined>(undefined),
			gasUsed: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettrc10balanceReturn {
		data?: Gettrc10balanceReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Gettrc10balanceReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettrc10balanceReturnFormGroup() {
		return new FormGroup<Gettrc10balanceReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettrc10balanceReturnData {
		balance?: string | null;
		decimals?: number | null;
		tokenid?: string | null;
		tronaddress?: string | null;
	}
	export interface Gettrc10balanceReturnDataFormProperties {
		balance: FormControl<string | null | undefined>,
		decimals: FormControl<number | null | undefined>,
		tokenid: FormControl<string | null | undefined>,
		tronaddress: FormControl<string | null | undefined>,
	}
	export function CreateGettrc10balanceReturnDataFormGroup() {
		return new FormGroup<Gettrc10balanceReturnDataFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined),
			decimals: new FormControl<number | null | undefined>(undefined),
			tokenid: new FormControl<string | null | undefined>(undefined),
			tronaddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettrc20balanceReturn {
		data?: Gettrc20balanceReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Gettrc20balanceReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettrc20balanceReturnFormGroup() {
		return new FormGroup<Gettrc20balanceReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettrc20balanceReturnData {
		balance?: string | null;
		contractaddress?: string | null;
		decimals?: string | null;
		tronaddress?: string | null;
	}
	export interface Gettrc20balanceReturnDataFormProperties {
		balance: FormControl<string | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		decimals: FormControl<string | null | undefined>,
		tronaddress: FormControl<string | null | undefined>,
	}
	export function CreateGettrc20balanceReturnDataFormGroup() {
		return new FormGroup<Gettrc20balanceReturnDataFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			decimals: new FormControl<string | null | undefined>(undefined),
			tronaddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GettronbalanceReturn {
		data?: GettronbalanceReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GettronbalanceReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettronbalanceReturnFormGroup() {
		return new FormGroup<GettronbalanceReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GettronbalanceReturnData {
		balance?: string | null;
	}
	export interface GettronbalanceReturnDataFormProperties {
		balance: FormControl<string | null | undefined>,
	}
	export function CreateGettronbalanceReturnDataFormGroup() {
		return new FormGroup<GettronbalanceReturnDataFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getlastblocknumber3Return {
		data?: Getlastblocknumber3ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getlastblocknumber3ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetlastblocknumber3ReturnFormGroup() {
		return new FormGroup<Getlastblocknumber3ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getlastblocknumber3ReturnData {
		blocknumber?: number | null;
	}
	export interface Getlastblocknumber3ReturnDataFormProperties {
		blocknumber: FormControl<number | null | undefined>,
	}
	export function CreateGetlastblocknumber3ReturnDataFormGroup() {
		return new FormGroup<Getlastblocknumber3ReturnDataFormProperties>({
			blocknumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getblock3Return {
		Getblock3ReturnData?: Array<Getblock3ReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Getblock3ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetblock3ReturnFormGroup() {
		return new FormGroup<Getblock3ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Getblock3ReturnData {
		blockID?: string | null;
		block_header?: Getblock3ReturnDataBlock_header;
	}
	export interface Getblock3ReturnDataFormProperties {
		blockID: FormControl<string | null | undefined>,
	}
	export function CreateGetblock3ReturnDataFormGroup() {
		return new FormGroup<Getblock3ReturnDataFormProperties>({
			blockID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getblock3ReturnDataBlock_header {
		raw_data?: Getblock3ReturnDataBlock_headerRaw_data;
		witness_signature?: string | null;
	}
	export interface Getblock3ReturnDataBlock_headerFormProperties {
		witness_signature: FormControl<string | null | undefined>,
	}
	export function CreateGetblock3ReturnDataBlock_headerFormGroup() {
		return new FormGroup<Getblock3ReturnDataBlock_headerFormProperties>({
			witness_signature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Getblock3ReturnDataBlock_headerRaw_data {
		number?: number | null;
		parentHash?: string | null;
		timestamp?: number | null;
		txTrieRoot?: string | null;
		witness_address?: string | null;
	}
	export interface Getblock3ReturnDataBlock_headerRaw_dataFormProperties {
		number: FormControl<number | null | undefined>,
		parentHash: FormControl<string | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
		txTrieRoot: FormControl<string | null | undefined>,
		witness_address: FormControl<string | null | undefined>,
	}
	export function CreateGetblock3ReturnDataBlock_headerRaw_dataFormGroup() {
		return new FormGroup<Getblock3ReturnDataBlock_headerRaw_dataFormProperties>({
			number: new FormControl<number | null | undefined>(undefined),
			parentHash: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			txTrieRoot: new FormControl<string | null | undefined>(undefined),
			witness_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetchainparametersReturn {
		GetchainparametersReturnData?: Array<GetchainparametersReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface GetchainparametersReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGetchainparametersReturnFormGroup() {
		return new FormGroup<GetchainparametersReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetchainparametersReturnData {
		GetchainparametersReturnDataChainParameter?: Array<GetchainparametersReturnDataChainParameter>;
	}
	export interface GetchainparametersReturnDataFormProperties {
	}
	export function CreateGetchainparametersReturnDataFormGroup() {
		return new FormGroup<GetchainparametersReturnDataFormProperties>({
		});

	}

	export interface GetchainparametersReturnDataChainParameter {
		key?: string | null;
		value?: number | null;
	}
	export interface GetchainparametersReturnDataChainParameterFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateGetchainparametersReturnDataChainParameterFormGroup() {
		return new FormGroup<GetchainparametersReturnDataChainParameterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Sendtransaction3PostBody {
		amount?: string | null;
		privatekey?: string | null;
		to?: string | null;
	}
	export interface Sendtransaction3PostBodyFormProperties {
		amount: FormControl<string | null | undefined>,
		privatekey: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateSendtransaction3PostBodyFormGroup() {
		return new FormGroup<Sendtransaction3PostBodyFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			privatekey: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sendtransaction3Return {
		Sendtransaction3ReturnData?: Array<Sendtransaction3ReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Sendtransaction3ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateSendtransaction3ReturnFormGroup() {
		return new FormGroup<Sendtransaction3ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Sendtransaction3ReturnData {
		txid?: string | null;
	}
	export interface Sendtransaction3ReturnDataFormProperties {
		txid: FormControl<string | null | undefined>,
	}
	export function CreateSendtransaction3ReturnDataFormGroup() {
		return new FormGroup<Sendtransaction3ReturnDataFormProperties>({
			txid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sendtrc10PostBody {
		amount?: string | null;
		privatekey?: string | null;
		to?: string | null;
		tokenId?: number | null;
	}
	export interface Sendtrc10PostBodyFormProperties {
		amount: FormControl<string | null | undefined>,
		privatekey: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		tokenId: FormControl<number | null | undefined>,
	}
	export function CreateSendtrc10PostBodyFormGroup() {
		return new FormGroup<Sendtrc10PostBodyFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			privatekey: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Sendtrc10Return {
		Sendtrc10ReturnData?: Array<Sendtrc10ReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Sendtrc10ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateSendtrc10ReturnFormGroup() {
		return new FormGroup<Sendtrc10ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Sendtrc10ReturnData {
		txid?: string | null;
	}
	export interface Sendtrc10ReturnDataFormProperties {
		txid: FormControl<string | null | undefined>,
	}
	export function CreateSendtrc10ReturnDataFormGroup() {
		return new FormGroup<Sendtrc10ReturnDataFormProperties>({
			txid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sendtrc20PostBody {
		amount?: string | null;
		contractaddress?: string | null;
		from?: string | null;
		privatekey?: string | null;
		to?: string | null;
	}
	export interface Sendtrc20PostBodyFormProperties {
		amount: FormControl<string | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		privatekey: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateSendtrc20PostBodyFormGroup() {
		return new FormGroup<Sendtrc20PostBodyFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			privatekey: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sendtrc20Return {
		Sendtrc20ReturnData?: Array<Sendtrc20ReturnData>;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Sendtrc20ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateSendtrc20ReturnFormGroup() {
		return new FormGroup<Sendtrc20ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Sendtrc20ReturnData {
		txid?: string | null;
	}
	export interface Sendtrc20ReturnDataFormProperties {
		txid: FormControl<string | null | undefined>,
	}
	export function CreateSendtrc20ReturnDataFormGroup() {
		return new FormGroup<Sendtrc20ReturnDataFormProperties>({
			txid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransaction3Return {
		data?: Gettransaction3ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Gettransaction3ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettransaction3ReturnFormGroup() {
		return new FormGroup<Gettransaction3ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettransaction3ReturnData {
		raw_data?: Gettransaction3ReturnDataRaw_data;
		raw_data_hex?: string | null;
		Gettransaction3ReturnDataRet?: Array<Gettransaction3ReturnDataRet>;
		signature?: Array<string>;
		txID?: string | null;
	}
	export interface Gettransaction3ReturnDataFormProperties {
		raw_data_hex: FormControl<string | null | undefined>,
		txID: FormControl<string | null | undefined>,
	}
	export function CreateGettransaction3ReturnDataFormGroup() {
		return new FormGroup<Gettransaction3ReturnDataFormProperties>({
			raw_data_hex: new FormControl<string | null | undefined>(undefined),
			txID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransaction3ReturnDataRaw_data {
		Gettransaction3ReturnDataRaw_dataContract?: Array<Gettransaction3ReturnDataRaw_dataContract>;
		expiration?: number | null;
		ref_block_bytes?: string | null;
		ref_block_hash?: string | null;
		timestamp?: number | null;
	}
	export interface Gettransaction3ReturnDataRaw_dataFormProperties {
		expiration: FormControl<number | null | undefined>,
		ref_block_bytes: FormControl<string | null | undefined>,
		ref_block_hash: FormControl<string | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGettransaction3ReturnDataRaw_dataFormGroup() {
		return new FormGroup<Gettransaction3ReturnDataRaw_dataFormProperties>({
			expiration: new FormControl<number | null | undefined>(undefined),
			ref_block_bytes: new FormControl<string | null | undefined>(undefined),
			ref_block_hash: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettransaction3ReturnDataRaw_dataContract {
		parameter?: Gettransaction3ReturnDataRaw_dataContractParameter;
		type?: string | null;
	}
	export interface Gettransaction3ReturnDataRaw_dataContractFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateGettransaction3ReturnDataRaw_dataContractFormGroup() {
		return new FormGroup<Gettransaction3ReturnDataRaw_dataContractFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransaction3ReturnDataRaw_dataContractParameter {
		type_url?: string | null;
		value?: Gettransaction3ReturnDataRaw_dataContractParameterValue;
	}
	export interface Gettransaction3ReturnDataRaw_dataContractParameterFormProperties {
		type_url: FormControl<string | null | undefined>,
	}
	export function CreateGettransaction3ReturnDataRaw_dataContractParameterFormGroup() {
		return new FormGroup<Gettransaction3ReturnDataRaw_dataContractParameterFormProperties>({
			type_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransaction3ReturnDataRaw_dataContractParameterValue {
		amount?: number | null;
		asset_name?: string | null;
		owner_address?: string | null;
		to_address?: string | null;
	}
	export interface Gettransaction3ReturnDataRaw_dataContractParameterValueFormProperties {
		amount: FormControl<number | null | undefined>,
		asset_name: FormControl<string | null | undefined>,
		owner_address: FormControl<string | null | undefined>,
		to_address: FormControl<string | null | undefined>,
	}
	export function CreateGettransaction3ReturnDataRaw_dataContractParameterValueFormGroup() {
		return new FormGroup<Gettransaction3ReturnDataRaw_dataContractParameterValueFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			asset_name: new FormControl<string | null | undefined>(undefined),
			owner_address: new FormControl<string | null | undefined>(undefined),
			to_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransaction3ReturnDataRet {
		contractRet?: string | null;
	}
	export interface Gettransaction3ReturnDataRetFormProperties {
		contractRet: FormControl<string | null | undefined>,
	}
	export function CreateGettransaction3ReturnDataRetFormGroup() {
		return new FormGroup<Gettransaction3ReturnDataRetFormProperties>({
			contractRet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt3Return {
		data?: Gettransactionreceipt3ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Gettransactionreceipt3ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateGettransactionreceipt3ReturnFormGroup() {
		return new FormGroup<Gettransactionreceipt3ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt3ReturnData {
		raw_data?: Gettransactionreceipt3ReturnDataRaw_data;
		raw_data_hex?: string | null;
		Gettransactionreceipt3ReturnDataRet?: Array<Gettransactionreceipt3ReturnDataRet>;
		signature?: Array<string>;
		txID?: string | null;
	}
	export interface Gettransactionreceipt3ReturnDataFormProperties {
		raw_data_hex: FormControl<string | null | undefined>,
		txID: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionreceipt3ReturnDataFormGroup() {
		return new FormGroup<Gettransactionreceipt3ReturnDataFormProperties>({
			raw_data_hex: new FormControl<string | null | undefined>(undefined),
			txID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt3ReturnDataRaw_data {
		Gettransactionreceipt3ReturnDataRaw_dataContract?: Array<Gettransactionreceipt3ReturnDataRaw_dataContract>;
		expiration?: number | null;
		ref_block_bytes?: string | null;
		ref_block_hash?: string | null;
		timestamp?: number | null;
	}
	export interface Gettransactionreceipt3ReturnDataRaw_dataFormProperties {
		expiration: FormControl<number | null | undefined>,
		ref_block_bytes: FormControl<string | null | undefined>,
		ref_block_hash: FormControl<string | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateGettransactionreceipt3ReturnDataRaw_dataFormGroup() {
		return new FormGroup<Gettransactionreceipt3ReturnDataRaw_dataFormProperties>({
			expiration: new FormControl<number | null | undefined>(undefined),
			ref_block_bytes: new FormControl<string | null | undefined>(undefined),
			ref_block_hash: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt3ReturnDataRaw_dataContract {
		parameter?: Gettransactionreceipt3ReturnDataRaw_dataContractParameter;
		type?: string | null;
	}
	export interface Gettransactionreceipt3ReturnDataRaw_dataContractFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionreceipt3ReturnDataRaw_dataContractFormGroup() {
		return new FormGroup<Gettransactionreceipt3ReturnDataRaw_dataContractFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt3ReturnDataRaw_dataContractParameter {
		type_url?: string | null;
		value?: Gettransactionreceipt3ReturnDataRaw_dataContractParameterValue;
	}
	export interface Gettransactionreceipt3ReturnDataRaw_dataContractParameterFormProperties {
		type_url: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionreceipt3ReturnDataRaw_dataContractParameterFormGroup() {
		return new FormGroup<Gettransactionreceipt3ReturnDataRaw_dataContractParameterFormProperties>({
			type_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt3ReturnDataRaw_dataContractParameterValue {
		amount?: number | null;
		asset_name?: string | null;
		owner_address?: string | null;
		to_address?: string | null;
	}
	export interface Gettransactionreceipt3ReturnDataRaw_dataContractParameterValueFormProperties {
		amount: FormControl<number | null | undefined>,
		asset_name: FormControl<string | null | undefined>,
		owner_address: FormControl<string | null | undefined>,
		to_address: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionreceipt3ReturnDataRaw_dataContractParameterValueFormGroup() {
		return new FormGroup<Gettransactionreceipt3ReturnDataRaw_dataContractParameterValueFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			asset_name: new FormControl<string | null | undefined>(undefined),
			owner_address: new FormControl<string | null | undefined>(undefined),
			to_address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Gettransactionreceipt3ReturnDataRet {
		contractRet?: string | null;
	}
	export interface Gettransactionreceipt3ReturnDataRetFormProperties {
		contractRet: FormControl<string | null | undefined>,
	}
	export function CreateGettransactionreceipt3ReturnDataRetFormGroup() {
		return new FormGroup<Gettransactionreceipt3ReturnDataRetFormProperties>({
			contractRet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listsubscribedaddresses3Return {
		data?: Listsubscribedaddresses3ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Listsubscribedaddresses3ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateListsubscribedaddresses3ReturnFormGroup() {
		return new FormGroup<Listsubscribedaddresses3ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Listsubscribedaddresses3ReturnData {
		Listsubscribedaddresses3ReturnDataIpns?: Array<Listsubscribedaddresses3ReturnDataIpns>;
	}
	export interface Listsubscribedaddresses3ReturnDataFormProperties {
	}
	export function CreateListsubscribedaddresses3ReturnDataFormGroup() {
		return new FormGroup<Listsubscribedaddresses3ReturnDataFormProperties>({
		});

	}

	export interface Listsubscribedaddresses3ReturnDataIpns {
		contractaddress?: any;
		from?: any;
		id?: string | null;
		to?: any;
		tokenid?: any;
		type?: any;
		url?: string | null;
	}
	export interface Listsubscribedaddresses3ReturnDataIpnsFormProperties {
		contractaddress: FormControl<any | null | undefined>,
		from: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		to: FormControl<any | null | undefined>,
		tokenid: FormControl<any | null | undefined>,
		type: FormControl<any | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListsubscribedaddresses3ReturnDataIpnsFormGroup() {
		return new FormGroup<Listsubscribedaddresses3ReturnDataIpnsFormProperties>({
			contractaddress: new FormControl<any | null | undefined>(undefined),
			from: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<any | null | undefined>(undefined),
			tokenid: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subscribeaddress3PostBody {
		from?: string | null;
		url?: string | null;
	}
	export interface Subscribeaddress3PostBodyFormProperties {
		from: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeaddress3PostBodyFormGroup() {
		return new FormGroup<Subscribeaddress3PostBodyFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subscribeaddress3Return {
		data?: Subscribeaddress3ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Subscribeaddress3ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateSubscribeaddress3ReturnFormGroup() {
		return new FormGroup<Subscribeaddress3ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Subscribeaddress3ReturnData {
		contractaddress?: any;
		from?: any;
		id?: string | null;
		to?: string | null;
		tokenid?: any;
		type?: any;
		url?: string | null;
	}
	export interface Subscribeaddress3ReturnDataFormProperties {
		contractaddress: FormControl<any | null | undefined>,
		from: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		tokenid: FormControl<any | null | undefined>,
		type: FormControl<any | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeaddress3ReturnDataFormGroup() {
		return new FormGroup<Subscribeaddress3ReturnDataFormProperties>({
			contractaddress: new FormControl<any | null | undefined>(undefined),
			from: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			tokenid: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<any | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Listfailedipns3Return {
		Listfailedipns3ReturnFailed_ipns?: Array<Listfailedipns3ReturnFailed_ipns>;
		ok?: boolean | null;
	}
	export interface Listfailedipns3ReturnFormProperties {
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateListfailedipns3ReturnFormGroup() {
		return new FormGroup<Listfailedipns3ReturnFormProperties>({
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Listfailedipns3ReturnFailed_ipns {
		action?: string | null;
		amount?: string | null;
		contractaddress?: string | null;
		ethereumaddress?: string | null;
		id?: string | null;
		timestamp?: string | null;
		url?: string | null;
	}
	export interface Listfailedipns3ReturnFailed_ipnsFormProperties {
		action: FormControl<string | null | undefined>,
		amount: FormControl<string | null | undefined>,
		contractaddress: FormControl<string | null | undefined>,
		ethereumaddress: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListfailedipns3ReturnFailed_ipnsFormGroup() {
		return new FormGroup<Listfailedipns3ReturnFailed_ipnsFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<string | null | undefined>(undefined),
			contractaddress: new FormControl<string | null | undefined>(undefined),
			ethereumaddress: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Resendfailedipn3Return {
		id?: number | null;
		ok?: boolean | null;
	}
	export interface Resendfailedipn3ReturnFormProperties {
		id: FormControl<number | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateResendfailedipn3ReturnFormGroup() {
		return new FormGroup<Resendfailedipn3ReturnFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Unsubscribeaddress3Return {
		data?: Unsubscribeaddress3ReturnData;
		message?: string | null;
		ok?: boolean | null;
		status?: number | null;
	}
	export interface Unsubscribeaddress3ReturnFormProperties {
		message: FormControl<string | null | undefined>,
		ok: FormControl<boolean | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateUnsubscribeaddress3ReturnFormGroup() {
		return new FormGroup<Unsubscribeaddress3ReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			ok: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Unsubscribeaddress3ReturnData {
		id?: string | null;
	}
	export interface Unsubscribeaddress3ReturnDataFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeaddress3ReturnDataFormGroup() {
		return new FormGroup<Unsubscribeaddress3ReturnDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

}

