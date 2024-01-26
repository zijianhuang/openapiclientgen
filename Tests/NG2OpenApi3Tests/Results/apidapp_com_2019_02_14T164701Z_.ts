import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Empty {
	}
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create new account
		 * Post account
		 * @return {Empty} 200 response
		 */
		AccountPost(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'account', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get account balance
		 * Get account/{id}
		 * @return {Empty} 200 response
		 */
		Account_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'account/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Access detailed block information
		 * Get block
		 * @return {Empty} 200 response
		 */
		BlockGet(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'block', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about particular block
		 * Get block/{id}
		 * @return {Empty} 200 response
		 */
		Block_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'block/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get transaction count within block
		 * Get block/{id}/transaction
		 * @return {Empty} 200 response
		 */
		Block_idTransactionGet(id: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'block/' + (id == null ? '' : encodeURIComponent(id)) + '/transaction', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about particular transaction within block
		 * Get block/{id}/transaction/{index}
		 * @return {Empty} 200 response
		 */
		Block_idTransaction_indexGet(index: string, id: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'block/' + (id == null ? '' : encodeURIComponent(id)) + '/transaction/' + (index == null ? '' : encodeURIComponent(index)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a list of supported blockchains
		 * Get blockchain
		 * @return {Empty} 200 response
		 */
		BlockchainGet(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'blockchain', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about blockchain woth given id
		 * Get blockchain/{id}
		 * @return {Empty} 200 response
		 */
		Blockchain_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'blockchain/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new smart contract
		 * Post contract
		 * @return {Empty} 200 response
		 */
		ContractPost(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'contract', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get contract balance
		 * Get contract/{id}
		 * @return {Empty} 200 response
		 */
		Contract_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'contract/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Call the contract
		 * Post contract/{id}
		 * @return {Empty} 200 response
		 */
		Contract_idPost(id: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'contract/' + (id == null ? '' : encodeURIComponent(id)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get token information such as name, total amount in circulation, etc
		 * Get erc20
		 * @return {Empty} 200 response
		 */
		Erc20Get(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'erc20', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post erc20
		 * @return {Empty} 200 response
		 */
		Erc20Post(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'erc20', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information amout token balance in the account
		 * Get erc20/{address}
		 * @return {Empty} 200 response
		 */
		Erc20_addressGet(address: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'erc20/' + (address == null ? '' : encodeURIComponent(address)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Transfer tokens to another account
		 * Post erc20/{address}
		 * @return {Empty} 200 response
		 */
		Erc20_addressPost(address: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'erc20/' + (address == null ? '' : encodeURIComponent(address)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get key
		 * @return {Empty} 200 response
		 */
		KeyGetByToken(token: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'key?token=' + (token == null ? '' : encodeURIComponent(token)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post key
		 * @return {Empty} 200 response
		 */
		KeyPost(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'key', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete key/{key}
		 * @return {Empty} 200 response
		 */
		Key_keyDelete(key: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'key/' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new transaction. Transfer Ether between accounts
		 * Post transaction
		 * @return {Empty} 200 response
		 */
		TransactionPost(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'transaction', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get information about transaction by the transaction hash value
		 * Get transaction/{hash}
		 * @return {Empty} 200 response
		 */
		Transaction_hashGet(hash: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'transaction/' + (hash == null ? '' : encodeURIComponent(hash)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get receipt detail information
		 * Get transaction/{hash}/receipt
		 * @return {Empty} 200 response
		 */
		Transaction_hashReceiptGet(hash: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'transaction/' + (hash == null ? '' : encodeURIComponent(hash)) + '/receipt', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get API version info
		 * Get version
		 * @return {Empty} 200 response
		 */
		VersionGet(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'version', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get current account balance
		 * Get wallet
		 * @return {Empty} 200 response
		 */
		WalletGet(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'wallet', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create personal wallet
		 * Post wallet
		 * @return {Empty} 200 response
		 */
		WalletPost(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'wallet', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get wallet/account
		 * @return {Empty} 200 response
		 */
		WalletAccountGet(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'wallet/account', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post wallet/account
		 * @return {Empty} 200 response
		 */
		WalletAccountPost(headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'wallet/account', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get account balance
		 * Get wallet/account/{id}
		 * @return {Empty} 200 response
		 */
		WalletAccount_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.get<Empty>(this.baseUri + 'wallet/account/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post wallet/account/{id}/contract
		 * @return {Empty} 200 response
		 */
		WalletAccount_idContractPost(id: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'wallet/account/' + (id == null ? '' : encodeURIComponent(id)) + '/contract', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post wallet/account/{id}/erc20
		 * @return {Empty} 200 response
		 */
		WalletAccount_idErc20Post(id: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'wallet/account/' + (id == null ? '' : encodeURIComponent(id)) + '/erc20', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Send payment from the account held within the wallet
		 * Post wallet/account/{id}/pay
		 * @return {Empty} 200 response
		 */
		WalletAccount_idPayPost(id: string, headersHandler?: () => HttpHeaders): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'wallet/account/' + (id == null ? '' : encodeURIComponent(id)) + '/pay', null, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

