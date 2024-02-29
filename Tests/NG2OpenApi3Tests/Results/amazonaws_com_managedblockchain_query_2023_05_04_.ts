import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetTokenBalanceOutput {

		/** Required */
		tokenBalances: Array<BatchGetTokenBalanceOutputItem>;

		/** Required */
		errors: Array<BatchGetTokenBalanceErrorItem>;
	}
	export interface BatchGetTokenBalanceOutputFormProperties {
	}
	export function CreateBatchGetTokenBalanceOutputFormGroup() {
		return new FormGroup<BatchGetTokenBalanceOutputFormProperties>({
		});

	}


	/** The container for the properties of a token balance output. */
	export interface BatchGetTokenBalanceOutputItem {

		/** The container for the identifier of the owner. */
		ownerIdentifier?: OwnerIdentifier;

		/** <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p> <note> <p>Only the native tokens BTC,ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</p> </note> */
		tokenIdentifier?: TokenIdentifier;

		/** Required */
		balance: string;

		/**
		 * The container for time.
		 * Required
		 */
		atBlockchainInstant: BlockchainInstant;

		/** The container for time. */
		lastUpdatedTime?: BlockchainInstant;
	}

	/** The container for the properties of a token balance output. */
	export interface BatchGetTokenBalanceOutputItemFormProperties {

		/** Required */
		balance: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetTokenBalanceOutputItemFormGroup() {
		return new FormGroup<BatchGetTokenBalanceOutputItemFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The container for the identifier of the owner. */
	export interface OwnerIdentifier {

		/** Required */
		address: string;
	}

	/** The container for the identifier of the owner. */
	export interface OwnerIdentifierFormProperties {

		/** Required */
		address: FormControl<string | null | undefined>,
	}
	export function CreateOwnerIdentifierFormGroup() {
		return new FormGroup<OwnerIdentifierFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p> <note> <p>Only the native tokens BTC,ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</p> </note> */
	export interface TokenIdentifier {

		/** Required */
		network: QueryNetwork;
		contractAddress?: string;
		tokenId?: string;
	}

	/** <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p> <note> <p>Only the native tokens BTC,ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</p> </note> */
	export interface TokenIdentifierFormProperties {

		/** Required */
		network: FormControl<QueryNetwork | null | undefined>,
		contractAddress: FormControl<string | null | undefined>,
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateTokenIdentifierFormGroup() {
		return new FormGroup<TokenIdentifierFormProperties>({
			network: new FormControl<QueryNetwork | null | undefined>(undefined, [Validators.required]),
			contractAddress: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryNetwork { ETHEREUM_MAINNET = 'ETHEREUM_MAINNET', BITCOIN_MAINNET = 'BITCOIN_MAINNET' }


	/** The container for time. */
	export interface BlockchainInstant {
		time?: Date;
	}

	/** The container for time. */
	export interface BlockchainInstantFormProperties {
		time: FormControl<Date | null | undefined>,
	}
	export function CreateBlockchainInstantFormGroup() {
		return new FormGroup<BlockchainInstantFormProperties>({
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Error generated from a failed <code>BatchGetTokenBalance</code> request. */
	export interface BatchGetTokenBalanceErrorItem {

		/** <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p> <note> <p>Only the native tokens BTC,ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</p> </note> */
		tokenIdentifier?: TokenIdentifier;

		/** The container for the identifier of the owner. */
		ownerIdentifier?: OwnerIdentifier;

		/** The container for time. */
		atBlockchainInstant?: BlockchainInstant;

		/** Required */
		errorCode: string;

		/** Required */
		errorMessage: string;

		/** Required */
		errorType: ErrorType;
	}

	/** Error generated from a failed <code>BatchGetTokenBalance</code> request. */
	export interface BatchGetTokenBalanceErrorItemFormProperties {

		/** Required */
		errorCode: FormControl<string | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,

		/** Required */
		errorType: FormControl<ErrorType | null | undefined>,
	}
	export function CreateBatchGetTokenBalanceErrorItemFormGroup() {
		return new FormGroup<BatchGetTokenBalanceErrorItemFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorType: new FormControl<ErrorType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ErrorType { VALIDATION_EXCEPTION = 'VALIDATION_EXCEPTION', RESOURCE_NOT_FOUND_EXCEPTION = 'RESOURCE_NOT_FOUND_EXCEPTION' }


	/** The container for the input for getting a token balance. */
	export interface BatchGetTokenBalanceInputItem {

		/**
		 * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p> <note> <p>Only the native tokens BTC,ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</p> </note>
		 * Required
		 */
		tokenIdentifier: TokenIdentifier;

		/**
		 * The container for the identifier of the owner.
		 * Required
		 */
		ownerIdentifier: OwnerIdentifier;

		/** The container for time. */
		atBlockchainInstant?: BlockchainInstant;
	}

	/** The container for the input for getting a token balance. */
	export interface BatchGetTokenBalanceInputItemFormProperties {
	}
	export function CreateBatchGetTokenBalanceInputItemFormGroup() {
		return new FormGroup<BatchGetTokenBalanceInputItemFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface GetTokenBalanceOutput {

		/** The container for the identifier of the owner. */
		ownerIdentifier?: OwnerIdentifier;

		/** <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p> <note> <p>Only the native tokens BTC,ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</p> </note> */
		tokenIdentifier?: TokenIdentifier;

		/** Required */
		balance: string;

		/**
		 * The container for time.
		 * Required
		 */
		atBlockchainInstant: BlockchainInstant;

		/** The container for time. */
		lastUpdatedTime?: BlockchainInstant;
	}
	export interface GetTokenBalanceOutputFormProperties {

		/** Required */
		balance: FormControl<string | null | undefined>,
	}
	export function CreateGetTokenBalanceOutputFormGroup() {
		return new FormGroup<GetTokenBalanceOutputFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTransactionOutput {

		/** Required */
		transaction: Transaction;
	}
	export interface GetTransactionOutputFormProperties {
	}
	export function CreateGetTransactionOutputFormGroup() {
		return new FormGroup<GetTransactionOutputFormProperties>({
		});

	}


	/** <p>There are two possible types of transactions used for this data type:</p> <ul> <li> <p>A Bitcoin transaction is a movement of BTC from one address to another.</p> </li> <li> <p>An Ethereum transaction refers to an action initiated by an externally owned account, which is an account managed by a human, not a contract. For example, if Bob sends Alice 1 ETH, Bob's account must be debited and Alice's must be credited. This state-changing action occurs within a transaction.</p> </li> </ul> */
	export interface Transaction {

		/** Required */
		network: QueryNetwork;
		blockHash?: string;

		/** Required */
		transactionHash: string;
		blockNumber?: string;

		/** Required */
		transactionTimestamp: Date;

		/** Required */
		transactionIndex: number;

		/** Required */
		numberOfTransactions: number;

		/** Required */
		status: QueryTransactionStatus;

		/** Required */
		to: string;
		from?: string;
		contractAddress?: string;
		gasUsed?: string;
		cumulativeGasUsed?: string;
		effectiveGasPrice?: string;
		signatureV?: number | null;
		signatureR?: string;
		signatureS?: string;
		transactionFee?: string;
		transactionId?: string;
	}

	/** <p>There are two possible types of transactions used for this data type:</p> <ul> <li> <p>A Bitcoin transaction is a movement of BTC from one address to another.</p> </li> <li> <p>An Ethereum transaction refers to an action initiated by an externally owned account, which is an account managed by a human, not a contract. For example, if Bob sends Alice 1 ETH, Bob's account must be debited and Alice's must be credited. This state-changing action occurs within a transaction.</p> </li> </ul> */
	export interface TransactionFormProperties {

		/** Required */
		network: FormControl<QueryNetwork | null | undefined>,
		blockHash: FormControl<string | null | undefined>,

		/** Required */
		transactionHash: FormControl<string | null | undefined>,
		blockNumber: FormControl<string | null | undefined>,

		/** Required */
		transactionTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		transactionIndex: FormControl<number | null | undefined>,

		/** Required */
		numberOfTransactions: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<QueryTransactionStatus | null | undefined>,

		/** Required */
		to: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
		contractAddress: FormControl<string | null | undefined>,
		gasUsed: FormControl<string | null | undefined>,
		cumulativeGasUsed: FormControl<string | null | undefined>,
		effectiveGasPrice: FormControl<string | null | undefined>,
		signatureV: FormControl<number | null | undefined>,
		signatureR: FormControl<string | null | undefined>,
		signatureS: FormControl<string | null | undefined>,
		transactionFee: FormControl<string | null | undefined>,
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			network: new FormControl<QueryNetwork | null | undefined>(undefined, [Validators.required]),
			blockHash: new FormControl<string | null | undefined>(undefined),
			transactionHash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			blockNumber: new FormControl<string | null | undefined>(undefined),
			transactionTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			transactionIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			numberOfTransactions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<QueryTransactionStatus | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined),
			contractAddress: new FormControl<string | null | undefined>(undefined),
			gasUsed: new FormControl<string | null | undefined>(undefined),
			cumulativeGasUsed: new FormControl<string | null | undefined>(undefined),
			effectiveGasPrice: new FormControl<string | null | undefined>(undefined),
			signatureV: new FormControl<number | null | undefined>(undefined),
			signatureR: new FormControl<string | null | undefined>(undefined),
			signatureS: new FormControl<string | null | undefined>(undefined),
			transactionFee: new FormControl<string | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryTransactionStatus { FINAL = 'FINAL', FAILED = 'FAILED' }

	export interface ListTokenBalancesOutput {

		/** Required */
		tokenBalances: Array<TokenBalance>;
		nextToken?: string;
	}
	export interface ListTokenBalancesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTokenBalancesOutputFormGroup() {
		return new FormGroup<ListTokenBalancesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The balance of the token. */
	export interface TokenBalance {
		ownerIdentifier?: OwnerIdentifier;
		tokenIdentifier?: TokenIdentifier;

		/** Required */
		balance: string;

		/** Required */
		atBlockchainInstant: BlockchainInstant;
		lastUpdatedTime?: BlockchainInstant;
	}

	/** The balance of the token. */
	export interface TokenBalanceFormProperties {

		/** Required */
		balance: FormControl<string | null | undefined>,
	}
	export function CreateTokenBalanceFormGroup() {
		return new FormGroup<TokenBalanceFormProperties>({
			balance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTransactionEventsOutput {

		/** Required */
		events: Array<TransactionEvent>;
		nextToken?: string;
	}
	export interface ListTransactionEventsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTransactionEventsOutputFormGroup() {
		return new FormGroup<ListTransactionEventsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The container for the properties of a transaction event. */
	export interface TransactionEvent {

		/** Required */
		network: QueryNetwork;

		/** Required */
		transactionHash: string;

		/** Required */
		eventType: QueryTransactionEventType;
		from?: string;
		to?: string;
		value?: string;
		contractAddress?: string;
		tokenId?: string;
		transactionId?: string;
		voutIndex?: number | null;
	}

	/** The container for the properties of a transaction event. */
	export interface TransactionEventFormProperties {

		/** Required */
		network: FormControl<QueryNetwork | null | undefined>,

		/** Required */
		transactionHash: FormControl<string | null | undefined>,

		/** Required */
		eventType: FormControl<QueryTransactionEventType | null | undefined>,
		from: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		contractAddress: FormControl<string | null | undefined>,
		tokenId: FormControl<string | null | undefined>,
		transactionId: FormControl<string | null | undefined>,
		voutIndex: FormControl<number | null | undefined>,
	}
	export function CreateTransactionEventFormGroup() {
		return new FormGroup<TransactionEventFormProperties>({
			network: new FormControl<QueryNetwork | null | undefined>(undefined, [Validators.required]),
			transactionHash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<QueryTransactionEventType | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			contractAddress: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
			voutIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum QueryTransactionEventType { ERC20_TRANSFER = 'ERC20_TRANSFER', ERC20_MINT = 'ERC20_MINT', ERC20_BURN = 'ERC20_BURN', ERC20_DEPOSIT = 'ERC20_DEPOSIT', ERC20_WITHDRAWAL = 'ERC20_WITHDRAWAL', ERC721_TRANSFER = 'ERC721_TRANSFER', ERC1155_TRANSFER = 'ERC1155_TRANSFER', BITCOIN_VIN = 'BITCOIN_VIN', BITCOIN_VOUT = 'BITCOIN_VOUT', INTERNAL_ETH_TRANSFER = 'INTERNAL_ETH_TRANSFER', ETH_TRANSFER = 'ETH_TRANSFER' }

	export interface ListTransactionsOutput {

		/** Required */
		transactions: Array<TransactionOutputItem>;
		nextToken?: string;
	}
	export interface ListTransactionsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTransactionsOutputFormGroup() {
		return new FormGroup<ListTransactionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The container of the transaction output. */
	export interface TransactionOutputItem {

		/** Required */
		transactionHash: string;

		/** Required */
		network: QueryNetwork;

		/** Required */
		transactionTimestamp: Date;
	}

	/** The container of the transaction output. */
	export interface TransactionOutputItemFormProperties {

		/** Required */
		transactionHash: FormControl<string | null | undefined>,

		/** Required */
		network: FormControl<QueryNetwork | null | undefined>,

		/** Required */
		transactionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateTransactionOutputItemFormGroup() {
		return new FormGroup<TransactionOutputItemFormProperties>({
			transactionHash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network: new FormControl<QueryNetwork | null | undefined>(undefined, [Validators.required]),
			transactionTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ListTransactionsSortBy { TRANSACTION_TIMESTAMP = 'TRANSACTION_TIMESTAMP' }

	export enum SortOrder { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export interface BatchGetTokenBalanceInput {
		getTokenBalanceInputs?: Array<BatchGetTokenBalanceInputItem>;
	}
	export interface BatchGetTokenBalanceInputFormProperties {
	}
	export function CreateBatchGetTokenBalanceInputFormGroup() {
		return new FormGroup<BatchGetTokenBalanceInputFormProperties>({
		});

	}

	export interface GetTokenBalanceInput {

		/** Required */
		tokenIdentifier: TokenIdentifier;

		/** Required */
		ownerIdentifier: OwnerIdentifier;
		atBlockchainInstant?: BlockchainInstant;
	}
	export interface GetTokenBalanceInputFormProperties {
	}
	export function CreateGetTokenBalanceInputFormGroup() {
		return new FormGroup<GetTokenBalanceInputFormProperties>({
		});

	}

	export interface GetTransactionInput {

		/** Required */
		transactionHash: string;

		/** Required */
		network: QueryNetwork;
	}
	export interface GetTransactionInputFormProperties {

		/** Required */
		transactionHash: FormControl<string | null | undefined>,

		/** Required */
		network: FormControl<QueryNetwork | null | undefined>,
	}
	export function CreateGetTransactionInputFormGroup() {
		return new FormGroup<GetTransactionInputFormProperties>({
			transactionHash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network: new FormControl<QueryNetwork | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The container for the owner information to filter by. */
	export interface OwnerFilter {

		/** Required */
		address: string;
	}

	/** The container for the owner information to filter by. */
	export interface OwnerFilterFormProperties {

		/** Required */
		address: FormControl<string | null | undefined>,
	}
	export function CreateOwnerFilterFormGroup() {
		return new FormGroup<OwnerFilterFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The container of the token filter like the contract address on a given blockchain network or a unique token identifier on a given blockchain network.</p> <note> <p>You must always specify the network property of this container when using this operation.</p> </note> */
	export interface TokenFilter {

		/** Required */
		network: QueryNetwork;
		contractAddress?: string;
		tokenId?: string;
	}

	/** <p>The container of the token filter like the contract address on a given blockchain network or a unique token identifier on a given blockchain network.</p> <note> <p>You must always specify the network property of this container when using this operation.</p> </note> */
	export interface TokenFilterFormProperties {

		/** Required */
		network: FormControl<QueryNetwork | null | undefined>,
		contractAddress: FormControl<string | null | undefined>,
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateTokenFilterFormGroup() {
		return new FormGroup<TokenFilterFormProperties>({
			network: new FormControl<QueryNetwork | null | undefined>(undefined, [Validators.required]),
			contractAddress: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTokenBalancesInput {
		ownerFilter?: OwnerFilter;

		/** Required */
		tokenFilter: TokenFilter;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListTokenBalancesInputFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTokenBalancesInputFormGroup() {
		return new FormGroup<ListTokenBalancesInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTransactionEventsInput {

		/** Required */
		transactionHash: string;

		/** Required */
		network: QueryNetwork;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListTransactionEventsInputFormProperties {

		/** Required */
		transactionHash: FormControl<string | null | undefined>,

		/** Required */
		network: FormControl<QueryNetwork | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTransactionEventsInputFormGroup() {
		return new FormGroup<ListTransactionEventsInputFormProperties>({
			transactionHash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network: new FormControl<QueryNetwork | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The container for determining how the list transaction result will be sorted. */
	export interface ListTransactionsSort {
		sortBy?: ListTransactionsSortBy;
		sortOrder?: SortOrder;
	}

	/** The container for determining how the list transaction result will be sorted. */
	export interface ListTransactionsSortFormProperties {
		sortBy: FormControl<ListTransactionsSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListTransactionsSortFormGroup() {
		return new FormGroup<ListTransactionsSortFormProperties>({
			sortBy: new FormControl<ListTransactionsSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListTransactionsInput {

		/** Required */
		address: string;

		/** Required */
		network: QueryNetwork;

		/** The container for time. */
		fromBlockchainInstant?: BlockchainInstant;

		/** The container for time. */
		toBlockchainInstant?: BlockchainInstant;
		sort?: ListTransactionsSort;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListTransactionsInputFormProperties {

		/** Required */
		address: FormControl<string | null | undefined>,

		/** Required */
		network: FormControl<QueryNetwork | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTransactionsInputFormGroup() {
		return new FormGroup<ListTransactionsInputFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network: new FormControl<QueryNetwork | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Gets the token balance for a batch of tokens by using the <code>GetTokenBalance</code> action for every token in the request.</p> <note> <p>Only the native tokens BTC,ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</p> </note>
		 * Post batch-get-token-balance
		 * @return {BatchGetTokenBalanceOutput} Success
		 */
		BatchGetTokenBalance(requestBody: BatchGetTokenBalancePostBody): Observable<BatchGetTokenBalanceOutput> {
			return this.http.post<BatchGetTokenBalanceOutput>(this.baseUri + 'batch-get-token-balance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the balance of a specific token, including native tokens, for a given address (wallet or contract) on the blockchain.</p> <note> <p>Only the native tokens BTC,ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</p> </note>
		 * Post get-token-balance
		 * @return {GetTokenBalanceOutput} Success
		 */
		GetTokenBalance(requestBody: GetTokenBalancePostBody): Observable<GetTokenBalanceOutput> {
			return this.http.post<GetTokenBalanceOutput>(this.baseUri + 'get-token-balance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the details of a transaction.
		 * Post get-transaction
		 * @return {GetTransactionOutput} Success
		 */
		GetTransaction(requestBody: GetTransactionPostBody): Observable<GetTransactionOutput> {
			return this.http.post<GetTransactionOutput>(this.baseUri + 'get-transaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This action returns the following for a given a blockchain network:</p> <ul> <li> <p>Lists all token balances owned by an address (either a contact address or a wallet address).</p> </li> <li> <p>Lists all token balances for all tokens created by a contract.</p> </li> <li> <p>Lists all token balances for a given token.</p> </li> </ul> <note> <p>You must always specify the network property of the <code>tokenFilter</code> when using this operation.</p> </note>
		 * Post list-token-balances
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTokenBalancesOutput} Success
		 */
		ListTokenBalances(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTokenBalancesPostBody): Observable<ListTokenBalancesOutput> {
			return this.http.post<ListTokenBalancesOutput>(this.baseUri + 'list-token-balances?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An array of <code>TransactionEvent</code> objects. Each object contains details about the transaction event.
		 * Post list-transaction-events
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTransactionEventsOutput} Success
		 */
		ListTransactionEvents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTransactionEventsPostBody): Observable<ListTransactionEventsOutput> {
			return this.http.post<ListTransactionEventsOutput>(this.baseUri + 'list-transaction-events?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the transactions on a given wallet address or to a specific contract.
		 * Post list-transactions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTransactionsOutput} Success
		 */
		ListTransactions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTransactionsPostBody): Observable<ListTransactionsOutput> {
			return this.http.post<ListTransactionsOutput>(this.baseUri + 'list-transactions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchGetTokenBalancePostBody {

		/**
		 * An array of <code>GetTokenBalanceInput</code> objects whose balance is being requested.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		getTokenBalanceInputs?: Array<BatchGetTokenBalanceInputItem>;
	}
	export interface BatchGetTokenBalancePostBodyFormProperties {
	}
	export function CreateBatchGetTokenBalancePostBodyFormGroup() {
		return new FormGroup<BatchGetTokenBalancePostBodyFormProperties>({
		});

	}

	export interface GetTokenBalancePostBody {

		/**
		 * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p> <note> <p>Only the native tokens BTC,ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.</p> </note>
		 * Required
		 */
		tokenIdentifier: GetTokenBalancePostBodyTokenIdentifier;

		/**
		 * The container for the identifier of the owner.
		 * Required
		 */
		ownerIdentifier: GetTokenBalancePostBodyOwnerIdentifier;

		/** The container for time. */
		atBlockchainInstant?: GetTokenBalancePostBodyAtBlockchainInstant;
	}
	export interface GetTokenBalancePostBodyFormProperties {
	}
	export function CreateGetTokenBalancePostBodyFormGroup() {
		return new FormGroup<GetTokenBalancePostBodyFormProperties>({
		});

	}

	export interface GetTokenBalancePostBodyTokenIdentifier {
		network?: QueryNetwork;
		contractAddress?: string;
		tokenId?: string;
	}
	export interface GetTokenBalancePostBodyTokenIdentifierFormProperties {
		network: FormControl<QueryNetwork | null | undefined>,
		contractAddress: FormControl<string | null | undefined>,
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateGetTokenBalancePostBodyTokenIdentifierFormGroup() {
		return new FormGroup<GetTokenBalancePostBodyTokenIdentifierFormProperties>({
			network: new FormControl<QueryNetwork | null | undefined>(undefined),
			contractAddress: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTokenBalancePostBodyOwnerIdentifier {
		address?: string;
	}
	export interface GetTokenBalancePostBodyOwnerIdentifierFormProperties {
		address: FormControl<string | null | undefined>,
	}
	export function CreateGetTokenBalancePostBodyOwnerIdentifierFormGroup() {
		return new FormGroup<GetTokenBalancePostBodyOwnerIdentifierFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTokenBalancePostBodyAtBlockchainInstant {
		time?: Date;
	}
	export interface GetTokenBalancePostBodyAtBlockchainInstantFormProperties {
		time: FormControl<Date | null | undefined>,
	}
	export function CreateGetTokenBalancePostBodyAtBlockchainInstantFormGroup() {
		return new FormGroup<GetTokenBalancePostBodyAtBlockchainInstantFormProperties>({
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetTransactionPostBody {

		/**
		 * The hash of the transaction. It is generated whenever a transaction is verified and added to the blockchain.
		 * Required
		 */
		transactionHash: string;

		/**
		 * The blockchain network where the transaction occurred.
		 * Required
		 */
		network: QueryNetwork;
	}
	export interface GetTransactionPostBodyFormProperties {

		/**
		 * The hash of the transaction. It is generated whenever a transaction is verified and added to the blockchain.
		 * Required
		 */
		transactionHash: FormControl<string | null | undefined>,

		/**
		 * The blockchain network where the transaction occurred.
		 * Required
		 */
		network: FormControl<QueryNetwork | null | undefined>,
	}
	export function CreateGetTransactionPostBodyFormGroup() {
		return new FormGroup<GetTransactionPostBodyFormProperties>({
			transactionHash: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(0x[A-Fa-f0-9]{64}|[A-Fa-f0-9]{64})')]),
			network: new FormControl<QueryNetwork | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTokenBalancesPostBody {

		/** The container for the owner information to filter by. */
		ownerFilter?: ListTokenBalancesPostBodyOwnerFilter;

		/**
		 * <p>The container of the token filter like the contract address on a given blockchain network or a unique token identifier on a given blockchain network.</p> <note> <p>You must always specify the network property of this container when using this operation.</p> </note>
		 * Required
		 */
		tokenFilter: ListTokenBalancesPostBodyTokenFilter;

		/**
		 * The pagination token that indicates the next set of results to retrieve.
		 * Min length: 0
		 * Max length: 131070
		 */
		nextToken?: string | null;

		/**
		 * The maximum number of token balances to return.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults?: number | null;
	}
	export interface ListTokenBalancesPostBodyFormProperties {

		/**
		 * The pagination token that indicates the next set of results to retrieve.
		 * Min length: 0
		 * Max length: 131070
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of token balances to return.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTokenBalancesPostBodyFormGroup() {
		return new FormGroup<ListTokenBalancesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(131070)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(250)]),
		});

	}

	export interface ListTokenBalancesPostBodyOwnerFilter {
		address?: string;
	}
	export interface ListTokenBalancesPostBodyOwnerFilterFormProperties {
		address: FormControl<string | null | undefined>,
	}
	export function CreateListTokenBalancesPostBodyOwnerFilterFormGroup() {
		return new FormGroup<ListTokenBalancesPostBodyOwnerFilterFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTokenBalancesPostBodyTokenFilter {
		network?: QueryNetwork;
		contractAddress?: string;
		tokenId?: string;
	}
	export interface ListTokenBalancesPostBodyTokenFilterFormProperties {
		network: FormControl<QueryNetwork | null | undefined>,
		contractAddress: FormControl<string | null | undefined>,
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateListTokenBalancesPostBodyTokenFilterFormGroup() {
		return new FormGroup<ListTokenBalancesPostBodyTokenFilterFormProperties>({
			network: new FormControl<QueryNetwork | null | undefined>(undefined),
			contractAddress: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTransactionEventsPostBody {

		/**
		 * The hash of the transaction. It is generated whenever a transaction is verified and added to the blockchain.
		 * Required
		 */
		transactionHash: string;

		/**
		 * The blockchain network where the transaction events occurred.
		 * Required
		 */
		network: QueryNetwork;

		/**
		 * The pagination token that indicates the next set of results to retrieve.
		 * Min length: 0
		 * Max length: 131070
		 */
		nextToken?: string | null;

		/**
		 * <p>The maximum number of transaction events to list.</p> <note> <p>Even if additional results can be retrieved, the request can return less results than <code>maxResults</code> or an empty array of results.</p> <p>To retrieve the next set of results, make another request with the returned <code>nextToken</code> value. The value of <code>nextToken</code> is <code>null</code> when there are no more results to return</p> </note>
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults?: number | null;
	}
	export interface ListTransactionEventsPostBodyFormProperties {

		/**
		 * The hash of the transaction. It is generated whenever a transaction is verified and added to the blockchain.
		 * Required
		 */
		transactionHash: FormControl<string | null | undefined>,

		/**
		 * The blockchain network where the transaction events occurred.
		 * Required
		 */
		network: FormControl<QueryNetwork | null | undefined>,

		/**
		 * The pagination token that indicates the next set of results to retrieve.
		 * Min length: 0
		 * Max length: 131070
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * <p>The maximum number of transaction events to list.</p> <note> <p>Even if additional results can be retrieved, the request can return less results than <code>maxResults</code> or an empty array of results.</p> <p>To retrieve the next set of results, make another request with the returned <code>nextToken</code> value. The value of <code>nextToken</code> is <code>null</code> when there are no more results to return</p> </note>
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTransactionEventsPostBodyFormGroup() {
		return new FormGroup<ListTransactionEventsPostBodyFormProperties>({
			transactionHash: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('(0x[A-Fa-f0-9]{64}|[A-Fa-f0-9]{64})')]),
			network: new FormControl<QueryNetwork | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(131070)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(250)]),
		});

	}

	export interface ListTransactionsPostBody {

		/**
		 * The address (either a contract or wallet), whose transactions are being requested.
		 * Required
		 */
		address: string;

		/**
		 * The blockchain network where the transactions occurred.
		 * Required
		 */
		network: QueryNetwork;

		/** The container for time. */
		fromBlockchainInstant?: ListTransactionsPostBodyFromBlockchainInstant;

		/** The container for time. */
		toBlockchainInstant?: ListTransactionsPostBodyToBlockchainInstant;

		/** The container for determining how the list transaction result will be sorted. */
		sort?: ListTransactionsPostBodySort;

		/**
		 * The pagination token that indicates the next set of results to retrieve.
		 * Min length: 0
		 * Max length: 131070
		 */
		nextToken?: string | null;

		/**
		 * <p>The maximum number of transactions to list.</p> <note> <p>Even if additional results can be retrieved, the request can return less results than <code>maxResults</code> or an empty array of results.</p> <p>To retrieve the next set of results, make another request with the returned <code>nextToken</code> value. The value of <code>nextToken</code> is <code>null</code> when there are no more results to return</p> </note>
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults?: number | null;
	}
	export interface ListTransactionsPostBodyFormProperties {

		/**
		 * The address (either a contract or wallet), whose transactions are being requested.
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * The blockchain network where the transactions occurred.
		 * Required
		 */
		network: FormControl<QueryNetwork | null | undefined>,

		/**
		 * The pagination token that indicates the next set of results to retrieve.
		 * Min length: 0
		 * Max length: 131070
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * <p>The maximum number of transactions to list.</p> <note> <p>Even if additional results can be retrieved, the request can return less results than <code>maxResults</code> or an empty array of results.</p> <p>To retrieve the next set of results, make another request with the returned <code>nextToken</code> value. The value of <code>nextToken</code> is <code>null</code> when there are no more results to return</p> </note>
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTransactionsPostBodyFormGroup() {
		return new FormGroup<ListTransactionsPostBodyFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[-A-Za-z0-9]{13,74}')]),
			network: new FormControl<QueryNetwork | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(131070)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(250)]),
		});

	}

	export interface ListTransactionsPostBodyFromBlockchainInstant {
		time?: Date;
	}
	export interface ListTransactionsPostBodyFromBlockchainInstantFormProperties {
		time: FormControl<Date | null | undefined>,
	}
	export function CreateListTransactionsPostBodyFromBlockchainInstantFormGroup() {
		return new FormGroup<ListTransactionsPostBodyFromBlockchainInstantFormProperties>({
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTransactionsPostBodyToBlockchainInstant {
		time?: Date;
	}
	export interface ListTransactionsPostBodyToBlockchainInstantFormProperties {
		time: FormControl<Date | null | undefined>,
	}
	export function CreateListTransactionsPostBodyToBlockchainInstantFormGroup() {
		return new FormGroup<ListTransactionsPostBodyToBlockchainInstantFormProperties>({
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTransactionsPostBodySort {
		sortBy?: ListTransactionsSortBy;
		sortOrder?: SortOrder;
	}
	export interface ListTransactionsPostBodySortFormProperties {
		sortBy: FormControl<ListTransactionsSortBy | null | undefined>,
		sortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListTransactionsPostBodySortFormGroup() {
		return new FormGroup<ListTransactionsPostBodySortFormProperties>({
			sortBy: new FormControl<ListTransactionsSortBy | null | undefined>(undefined),
			sortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

}

