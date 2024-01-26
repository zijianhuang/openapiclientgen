import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error {
		code?: number | null;
		fields?: string | null;
		message?: string | null;
	}
	export interface ErrorFormProperties {
		code: FormControl<number | null | undefined>,
		fields: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			fields: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BroadcastTxRequest {

		/**
		 * Signed raw tx hex to broadcast
		 * Required
		 */
		txHex: string;
	}
	export interface BroadcastTxRequestFormProperties {

		/**
		 * Signed raw tx hex to broadcast
		 * Required
		 */
		txHex: FormControl<string | null | undefined>,
	}
	export function CreateBroadcastTxRequestFormGroup() {
		return new FormGroup<BroadcastTxRequestFormProperties>({
			txHex: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BroadcastTxResponse {

		/** Txid of successfully broadcasted transaction */
		txid?: string | null;
	}
	export interface BroadcastTxResponseFormProperties {

		/** Txid of successfully broadcasted transaction */
		txid: FormControl<string | null | undefined>,
	}
	export function CreateBroadcastTxResponseFormGroup() {
		return new FormGroup<BroadcastTxResponseFormProperties>({
			txid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BurnTokenRequest {

		/**
		 * Array of objects representing tokens to be burned
		 * Required
		 */
		BurnTokenRequestBurn: Array<BurnTokenRequestBurn>;

		/**
		 * Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)
		 * Required
		 */
		fee: number;

		/** Array of addresses to send the token from */
		from?: Array<string>;
		BurnTokenRequestTransfer?: Array<BurnTokenRequestTransfer>;
	}
	export interface BurnTokenRequestFormProperties {

		/**
		 * Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)
		 * Required
		 */
		fee: FormControl<number | null | undefined>,
	}
	export function CreateBurnTokenRequestFormGroup() {
		return new FormGroup<BurnTokenRequestFormProperties>({
			fee: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BurnTokenRequestBurn {

		/** Amount of tokens to burn */
		amount?: number | null;

		/** Unique token id we are burning */
		tokenId?: string | null;
	}
	export interface BurnTokenRequestBurnFormProperties {

		/** Amount of tokens to burn */
		amount: FormControl<number | null | undefined>,

		/** Unique token id we are burning */
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateBurnTokenRequestBurnFormGroup() {
		return new FormGroup<BurnTokenRequestBurnFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BurnTokenRequestTransfer {

		/** Address to transfer tokens to */
		address?: string | null;

		/** Number of tokens to send */
		amount?: number | null;

		/** ID of token we are sending */
		tokenId?: string | null;
	}
	export interface BurnTokenRequestTransferFormProperties {

		/** Address to transfer tokens to */
		address: FormControl<string | null | undefined>,

		/** Number of tokens to send */
		amount: FormControl<number | null | undefined>,

		/** ID of token we are sending */
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateBurnTokenRequestTransferFormGroup() {
		return new FormGroup<BurnTokenRequestTransferFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BurnTokenResponse {

		/** Array of indexes of multisig outputs */
		multisigOutputs?: Array<number>;

		/** Array of indexes transfering NTP1 tokens */
		ntp1OutputIndexes?: Array<number>;

		/** Unsigned, raw transaction hex of the transaction to burn the token */
		txHex?: string | null;
	}
	export interface BurnTokenResponseFormProperties {

		/** Unsigned, raw transaction hex of the transaction to burn the token */
		txHex: FormControl<string | null | undefined>,
	}
	export function CreateBurnTokenResponseFormGroup() {
		return new FormGroup<BurnTokenResponseFormProperties>({
			txHex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAddressInfoResponse {

		/** The Neblio Address */
		address?: string | null;

		/** Array of UTXOs held at this address. */
		GetAddressInfoResponseUtxos?: Array<GetAddressInfoResponseUtxos>;
	}
	export interface GetAddressInfoResponseFormProperties {

		/** The Neblio Address */
		address: FormControl<string | null | undefined>,
	}
	export function CreateGetAddressInfoResponseFormGroup() {
		return new FormGroup<GetAddressInfoResponseFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAddressInfoResponseUtxos {

		/** Blockheight of the UTXO */
		blockheight?: number | null;

		/** Blocktime of the UTXO */
		blocktime?: number | null;

		/** Index of the UTXO at this address */
		index?: number | null;

		/** Object representing the scruptPubKey of the UTXO */
		scriptPubKey?: string | null;

		/** Array of NTP1 tokens in this UTXO. */
		GetAddressInfoResponseUtxosTokens?: Array<GetAddressInfoResponseUtxosTokens>;

		/** Txid of this UTXO */
		txid?: string | null;

		/** Whether the UTXO has been used */
		used?: boolean | null;

		/** Value of the UTXO in NEBL satoshi */
		value?: number | null;
	}
	export interface GetAddressInfoResponseUtxosFormProperties {

		/** Blockheight of the UTXO */
		blockheight: FormControl<number | null | undefined>,

		/** Blocktime of the UTXO */
		blocktime: FormControl<number | null | undefined>,

		/** Index of the UTXO at this address */
		index: FormControl<number | null | undefined>,

		/** Object representing the scruptPubKey of the UTXO */
		scriptPubKey: FormControl<string | null | undefined>,

		/** Txid of this UTXO */
		txid: FormControl<string | null | undefined>,

		/** Whether the UTXO has been used */
		used: FormControl<boolean | null | undefined>,

		/** Value of the UTXO in NEBL satoshi */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGetAddressInfoResponseUtxosFormGroup() {
		return new FormGroup<GetAddressInfoResponseUtxosFormProperties>({
			blockheight: new FormControl<number | null | undefined>(undefined),
			blocktime: new FormControl<number | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			scriptPubKey: new FormControl<string | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			used: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAddressInfoResponseUtxosTokens {

		/** Whether the tokens can be aggregated together */
		aggregationPolicy?: string | null;

		/** Number of Tokens */
		amount?: number | null;

		/** Decimal places the token is divisible to */
		divisibility?: number | null;

		/** TXID the token originally was issued in */
		issueTxid?: string | null;

		/** Whether the token is locked, preventing more from being issued */
		lockStatus?: boolean | null;

		/** Unique NTP1 identifier for this token */
		tokenId?: string | null;
	}
	export interface GetAddressInfoResponseUtxosTokensFormProperties {

		/** Whether the tokens can be aggregated together */
		aggregationPolicy: FormControl<string | null | undefined>,

		/** Number of Tokens */
		amount: FormControl<number | null | undefined>,

		/** Decimal places the token is divisible to */
		divisibility: FormControl<number | null | undefined>,

		/** TXID the token originally was issued in */
		issueTxid: FormControl<string | null | undefined>,

		/** Whether the token is locked, preventing more from being issued */
		lockStatus: FormControl<boolean | null | undefined>,

		/** Unique NTP1 identifier for this token */
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateGetAddressInfoResponseUtxosTokensFormGroup() {
		return new FormGroup<GetAddressInfoResponseUtxosTokensFormProperties>({
			aggregationPolicy: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			divisibility: new FormControl<number | null | undefined>(undefined),
			issueTxid: new FormControl<string | null | undefined>(undefined),
			lockStatus: new FormControl<boolean | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAddressResponse {

		/** Address in string form */
		addrStr?: string | null;

		/** NEBL balance */
		balance?: number | null;

		/** NEBL balance in satoshis */
		balanceSat?: number | null;

		/** Total NEBL received */
		totalReceived?: number | null;

		/** Total NEBL received in satoshis */
		totalReceivedSat?: number | null;

		/** Total NEBL sent */
		totalSent?: number | null;

		/** Total NEBL sent satoshis */
		totalSentSat?: number | null;

		/** Array of transaction ids for this address */
		transactions?: Array<string>;

		/** Number of transactions for this address */
		txAppearances?: number | null;

		/** Unconfirmed NEBL balance */
		unconfirmedBalance?: number | null;

		/** Unconfirmed NEBL balance in satoshis */
		unconfirmedBalanceSat?: number | null;

		/** Number of unconfirmed transactions for this address */
		unconfirmedTxAppearances?: number | null;
	}
	export interface GetAddressResponseFormProperties {

		/** Address in string form */
		addrStr: FormControl<string | null | undefined>,

		/** NEBL balance */
		balance: FormControl<number | null | undefined>,

		/** NEBL balance in satoshis */
		balanceSat: FormControl<number | null | undefined>,

		/** Total NEBL received */
		totalReceived: FormControl<number | null | undefined>,

		/** Total NEBL received in satoshis */
		totalReceivedSat: FormControl<number | null | undefined>,

		/** Total NEBL sent */
		totalSent: FormControl<number | null | undefined>,

		/** Total NEBL sent satoshis */
		totalSentSat: FormControl<number | null | undefined>,

		/** Number of transactions for this address */
		txAppearances: FormControl<number | null | undefined>,

		/** Unconfirmed NEBL balance */
		unconfirmedBalance: FormControl<number | null | undefined>,

		/** Unconfirmed NEBL balance in satoshis */
		unconfirmedBalanceSat: FormControl<number | null | undefined>,

		/** Number of unconfirmed transactions for this address */
		unconfirmedTxAppearances: FormControl<number | null | undefined>,
	}
	export function CreateGetAddressResponseFormGroup() {
		return new FormGroup<GetAddressResponseFormProperties>({
			addrStr: new FormControl<string | null | undefined>(undefined),
			balance: new FormControl<number | null | undefined>(undefined),
			balanceSat: new FormControl<number | null | undefined>(undefined),
			totalReceived: new FormControl<number | null | undefined>(undefined),
			totalReceivedSat: new FormControl<number | null | undefined>(undefined),
			totalSent: new FormControl<number | null | undefined>(undefined),
			totalSentSat: new FormControl<number | null | undefined>(undefined),
			txAppearances: new FormControl<number | null | undefined>(undefined),
			unconfirmedBalance: new FormControl<number | null | undefined>(undefined),
			unconfirmedBalanceSat: new FormControl<number | null | undefined>(undefined),
			unconfirmedTxAppearances: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAddressUtxosResponseElement {

		/** Address */
		address?: string | null;

		/** NEBL amount */
		amount?: number | null;

		/** Number of confirmations */
		confirmations?: number | null;

		/** scriptPubKey */
		scriptPubKey?: string | null;

		/** Timestamp */
		ts?: number | null;

		/** Transaction ID */
		txid?: string | null;

		/** vout */
		vout?: number | null;
	}
	export interface GetAddressUtxosResponseElementFormProperties {

		/** Address */
		address: FormControl<string | null | undefined>,

		/** NEBL amount */
		amount: FormControl<number | null | undefined>,

		/** Number of confirmations */
		confirmations: FormControl<number | null | undefined>,

		/** scriptPubKey */
		scriptPubKey: FormControl<string | null | undefined>,

		/** Timestamp */
		ts: FormControl<number | null | undefined>,

		/** Transaction ID */
		txid: FormControl<string | null | undefined>,

		/** vout */
		vout: FormControl<number | null | undefined>,
	}
	export function CreateGetAddressUtxosResponseElementFormGroup() {
		return new FormGroup<GetAddressUtxosResponseElementFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			confirmations: new FormControl<number | null | undefined>(undefined),
			scriptPubKey: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			vout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetBlockIndexResponse {

		/** Hash of the requested block */
		blockHash?: string | null;
	}
	export interface GetBlockIndexResponseFormProperties {

		/** Hash of the requested block */
		blockHash: FormControl<string | null | undefined>,
	}
	export function CreateGetBlockIndexResponseFormGroup() {
		return new FormGroup<GetBlockIndexResponseFormProperties>({
			blockHash: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBlockResponse {

		/** Block bits */
		bits?: string | null;

		/** Number of confirmations block has */
		confirmations?: number | null;

		/** Block difficulty */
		difficulty?: number | null;

		/** Block hash */
		hash?: string | null;

		/** Block height */
		height?: number | null;

		/** Merkleroot of block */
		merkleroot?: string | null;

		/** Hash of the next block on the chain */
		nextblockhash?: string | null;

		/** Block nonce */
		nonce?: number | null;

		/** Hash of the previous block on the chain */
		previousblockhash?: string | null;

		/** Number of NEBL awarded in this block */
		reward?: number | null;

		/** Block size in bytes */
		size?: number | null;

		/** Block time relative to epoch */
		time?: number | null;

		/** Array of tx ids in the block */
		tx?: Array<string>;

		/** Block version */
		version?: number | null;
	}
	export interface GetBlockResponseFormProperties {

		/** Block bits */
		bits: FormControl<string | null | undefined>,

		/** Number of confirmations block has */
		confirmations: FormControl<number | null | undefined>,

		/** Block difficulty */
		difficulty: FormControl<number | null | undefined>,

		/** Block hash */
		hash: FormControl<string | null | undefined>,

		/** Block height */
		height: FormControl<number | null | undefined>,

		/** Merkleroot of block */
		merkleroot: FormControl<string | null | undefined>,

		/** Hash of the next block on the chain */
		nextblockhash: FormControl<string | null | undefined>,

		/** Block nonce */
		nonce: FormControl<number | null | undefined>,

		/** Hash of the previous block on the chain */
		previousblockhash: FormControl<string | null | undefined>,

		/** Number of NEBL awarded in this block */
		reward: FormControl<number | null | undefined>,

		/** Block size in bytes */
		size: FormControl<number | null | undefined>,

		/** Block time relative to epoch */
		time: FormControl<number | null | undefined>,

		/** Block version */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGetBlockResponseFormGroup() {
		return new FormGroup<GetBlockResponseFormProperties>({
			bits: new FormControl<string | null | undefined>(undefined),
			confirmations: new FormControl<number | null | undefined>(undefined),
			difficulty: new FormControl<number | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			merkleroot: new FormControl<string | null | undefined>(undefined),
			nextblockhash: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<number | null | undefined>(undefined),
			previousblockhash: new FormControl<string | null | undefined>(undefined),
			reward: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFaucetResponse {
		data?: GetFaucetResponseData;

		/** Whether the withdrawal was successful */
		status?: string | null;
	}
	export interface GetFaucetResponseFormProperties {

		/** Whether the withdrawal was successful */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGetFaucetResponseFormGroup() {
		return new FormGroup<GetFaucetResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFaucetResponseData {

		/** TXID of a successful withdrawal */
		txId?: string | null;
	}
	export interface GetFaucetResponseDataFormProperties {

		/** TXID of a successful withdrawal */
		txId: FormControl<string | null | undefined>,
	}
	export function CreateGetFaucetResponseDataFormGroup() {
		return new FormGroup<GetFaucetResponseDataFormProperties>({
			txId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRawTxResponse {

		/** Raw hex representing the transaction */
		rawtx?: string | null;
	}
	export interface GetRawTxResponseFormProperties {

		/** Raw hex representing the transaction */
		rawtx: FormControl<string | null | undefined>,
	}
	export function CreateGetRawTxResponseFormGroup() {
		return new FormGroup<GetRawTxResponseFormProperties>({
			rawtx: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Depending on the function called, the structure and information contained in this object will vary */
	export interface GetStatusResponse {
	}

	/** Depending on the function called, the structure and information contained in this object will vary */
	export interface GetStatusResponseFormProperties {
	}
	export function CreateGetStatusResponseFormGroup() {
		return new FormGroup<GetStatusResponseFormProperties>({
		});

	}


	/** Object containing node sync status */
	export interface GetSyncResponse {

		/** Current blockchain height */
		blockChainHeight?: number | null;

		/** Recent sync error messages */
		error?: string | null;

		/** Height node is synced to */
		height?: number | null;

		/** Current sync status */
		status?: string | null;

		/** Current sync percentage */
		syncPercentage?: number | null;

		/** Node type */
		type?: string | null;
	}

	/** Object containing node sync status */
	export interface GetSyncResponseFormProperties {

		/** Current blockchain height */
		blockChainHeight: FormControl<number | null | undefined>,

		/** Recent sync error messages */
		error: FormControl<string | null | undefined>,

		/** Height node is synced to */
		height: FormControl<number | null | undefined>,

		/** Current sync status */
		status: FormControl<string | null | undefined>,

		/** Current sync percentage */
		syncPercentage: FormControl<number | null | undefined>,

		/** Node type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetSyncResponseFormGroup() {
		return new FormGroup<GetSyncResponseFormProperties>({
			blockChainHeight: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			syncPercentage: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTokenHoldersResponse {

		/** Whether the tokesn are aggregatable */
		aggregationPolicy?: string | null;

		/** How many decimal points the token is divisble to */
		divibility?: number | null;
		GetTokenHoldersResponseHolders?: Array<GetTokenHoldersResponseHolders>;

		/** Whether new issuances of this token are locked */
		lockStatus?: boolean | null;

		/** A UTXO of this token */
		someUtxo?: string | null;

		/** TokenId of the token */
		tokenId?: string | null;
	}
	export interface GetTokenHoldersResponseFormProperties {

		/** Whether the tokesn are aggregatable */
		aggregationPolicy: FormControl<string | null | undefined>,

		/** How many decimal points the token is divisble to */
		divibility: FormControl<number | null | undefined>,

		/** Whether new issuances of this token are locked */
		lockStatus: FormControl<boolean | null | undefined>,

		/** A UTXO of this token */
		someUtxo: FormControl<string | null | undefined>,

		/** TokenId of the token */
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateGetTokenHoldersResponseFormGroup() {
		return new FormGroup<GetTokenHoldersResponseFormProperties>({
			aggregationPolicy: new FormControl<string | null | undefined>(undefined),
			divibility: new FormControl<number | null | undefined>(undefined),
			lockStatus: new FormControl<boolean | null | undefined>(undefined),
			someUtxo: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTokenHoldersResponseHolders {
		address?: string | null;
		amount?: number | null;
	}
	export interface GetTokenHoldersResponseHoldersFormProperties {
		address: FormControl<string | null | undefined>,
		amount: FormControl<number | null | undefined>,
	}
	export function CreateGetTokenHoldersResponseHoldersFormGroup() {
		return new FormGroup<GetTokenHoldersResponseHoldersFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTokenIdResponse {

		/** Unique ID of the token */
		tokenId?: string | null;

		/** String representing the token Symbol */
		tokenName?: string | null;
	}
	export interface GetTokenIdResponseFormProperties {

		/** Unique ID of the token */
		tokenId: FormControl<string | null | undefined>,

		/** String representing the token Symbol */
		tokenName: FormControl<string | null | undefined>,
	}
	export function CreateGetTokenIdResponseFormGroup() {
		return new FormGroup<GetTokenIdResponseFormProperties>({
			tokenId: new FormControl<string | null | undefined>(undefined),
			tokenName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTokenMetadataResponse {

		/** Whether the tokens are aggregatable */
		aggregationPolicy?: string | null;

		/** Decimal places the token is divisible to */
		divisibility?: number | null;

		/** Block number token was issued in */
		firstBlock?: number | null;

		/** Total tokens issued in initial issuance */
		initialIssuanceAmount?: number | null;

		/** TXID the token was issued with */
		issuanceTxid?: string | null;

		/** Address that issued the tokens */
		issueAddress?: string | null;

		/** Whether issuance of more tokens is locked */
		lockStatus?: boolean | null;

		/** Metadata set at issuance */
		metadataOfIssuance?: GetTokenMetadataResponseMetadataOfIssuance;

		/** Metadata set for UTXO */
		metadataOfUtxo?: GetTokenMetadataResponseMetadataOfUtxo;

		/** Number of times tokens have been burned */
		numOfBurns?: number | null;

		/** Total number of addresses this token is held at */
		numOfHolders?: number | null;

		/** Total number of times this token has been issued */
		numOfIssuance?: number | null;

		/** Total number of transactions of this token */
		numOfTransfers?: number | null;

		/** Example UTXO containing this token. */
		someUtxo?: string | null;

		/** ID of the token */
		tokenId?: string | null;

		/** Total number of tokens in supply */
		totalSupply?: number | null;
	}
	export interface GetTokenMetadataResponseFormProperties {

		/** Whether the tokens are aggregatable */
		aggregationPolicy: FormControl<string | null | undefined>,

		/** Decimal places the token is divisible to */
		divisibility: FormControl<number | null | undefined>,

		/** Block number token was issued in */
		firstBlock: FormControl<number | null | undefined>,

		/** Total tokens issued in initial issuance */
		initialIssuanceAmount: FormControl<number | null | undefined>,

		/** TXID the token was issued with */
		issuanceTxid: FormControl<string | null | undefined>,

		/** Address that issued the tokens */
		issueAddress: FormControl<string | null | undefined>,

		/** Whether issuance of more tokens is locked */
		lockStatus: FormControl<boolean | null | undefined>,

		/** Number of times tokens have been burned */
		numOfBurns: FormControl<number | null | undefined>,

		/** Total number of addresses this token is held at */
		numOfHolders: FormControl<number | null | undefined>,

		/** Total number of times this token has been issued */
		numOfIssuance: FormControl<number | null | undefined>,

		/** Total number of transactions of this token */
		numOfTransfers: FormControl<number | null | undefined>,

		/** Example UTXO containing this token. */
		someUtxo: FormControl<string | null | undefined>,

		/** ID of the token */
		tokenId: FormControl<string | null | undefined>,

		/** Total number of tokens in supply */
		totalSupply: FormControl<number | null | undefined>,
	}
	export function CreateGetTokenMetadataResponseFormGroup() {
		return new FormGroup<GetTokenMetadataResponseFormProperties>({
			aggregationPolicy: new FormControl<string | null | undefined>(undefined),
			divisibility: new FormControl<number | null | undefined>(undefined),
			firstBlock: new FormControl<number | null | undefined>(undefined),
			initialIssuanceAmount: new FormControl<number | null | undefined>(undefined),
			issuanceTxid: new FormControl<string | null | undefined>(undefined),
			issueAddress: new FormControl<string | null | undefined>(undefined),
			lockStatus: new FormControl<boolean | null | undefined>(undefined),
			numOfBurns: new FormControl<number | null | undefined>(undefined),
			numOfHolders: new FormControl<number | null | undefined>(undefined),
			numOfIssuance: new FormControl<number | null | undefined>(undefined),
			numOfTransfers: new FormControl<number | null | undefined>(undefined),
			someUtxo: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
			totalSupply: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTokenMetadataResponseMetadataOfIssuance {
		data?: GetTokenMetadataResponseMetadataOfIssuanceData;
	}
	export interface GetTokenMetadataResponseMetadataOfIssuanceFormProperties {
	}
	export function CreateGetTokenMetadataResponseMetadataOfIssuanceFormGroup() {
		return new FormGroup<GetTokenMetadataResponseMetadataOfIssuanceFormProperties>({
		});

	}

	export interface GetTokenMetadataResponseMetadataOfIssuanceData {

		/** Token description */
		description?: string | null;

		/** Name of token issuer */
		issuer?: string | null;

		/** Token symbol */
		tokenName?: string | null;

		/** Metadata set by user on token */
		userData?: GetTokenMetadataResponseMetadataOfIssuanceDataUserData;
	}
	export interface GetTokenMetadataResponseMetadataOfIssuanceDataFormProperties {

		/** Token description */
		description: FormControl<string | null | undefined>,

		/** Name of token issuer */
		issuer: FormControl<string | null | undefined>,

		/** Token symbol */
		tokenName: FormControl<string | null | undefined>,
	}
	export function CreateGetTokenMetadataResponseMetadataOfIssuanceDataFormGroup() {
		return new FormGroup<GetTokenMetadataResponseMetadataOfIssuanceDataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			tokenName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTokenMetadataResponseMetadataOfIssuanceDataUserData {
		GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta?: Array<GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta>;
	}
	export interface GetTokenMetadataResponseMetadataOfIssuanceDataUserDataFormProperties {
	}
	export function CreateGetTokenMetadataResponseMetadataOfIssuanceDataUserDataFormGroup() {
		return new FormGroup<GetTokenMetadataResponseMetadataOfIssuanceDataUserDataFormProperties>({
		});

	}

	export interface GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta {
		key?: string | null;
		value?: string | null;
	}
	export interface GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMetaFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGetTokenMetadataResponseMetadataOfIssuanceDataUserDataMetaFormGroup() {
		return new FormGroup<GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMetaFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTokenMetadataResponseMetadataOfUtxo {

		/** Metadata set by user on token for UTXO */
		userData?: GetTokenMetadataResponseMetadataOfUtxoUserData;
	}
	export interface GetTokenMetadataResponseMetadataOfUtxoFormProperties {
	}
	export function CreateGetTokenMetadataResponseMetadataOfUtxoFormGroup() {
		return new FormGroup<GetTokenMetadataResponseMetadataOfUtxoFormProperties>({
		});

	}

	export interface GetTokenMetadataResponseMetadataOfUtxoUserData {
		meta?: Array<string>;
	}
	export interface GetTokenMetadataResponseMetadataOfUtxoUserDataFormProperties {
	}
	export function CreateGetTokenMetadataResponseMetadataOfUtxoUserDataFormGroup() {
		return new FormGroup<GetTokenMetadataResponseMetadataOfUtxoUserDataFormProperties>({
		});

	}

	export interface GetTransactionInfoResponse {

		/** Hash of the block this transaction is in */
		blockhash?: string | null;

		/** Block height of this transaction */
		blockheight?: number | null;

		/** Block time of this transaction */
		blocktime?: number | null;

		/** Number of transaction confirmations */
		confirmations?: number | null;

		/** Total NEBL used as fee for this transcation in satoshis */
		fee?: number | null;

		/** Transaction in raw hex */
		hex?: string | null;

		/** Transaction locktime */
		locktime?: number | null;

		/** Transaction time */
		time?: number | null;

		/** Total NEBL sent in this transaction in satoshis */
		totalsent?: number | null;

		/** TXID of transaction */
		txid?: string | null;

		/** Transaction version */
		version?: number | null;

		/** Array of transaction inputs */
		GetTransactionInfoResponseVin?: Array<GetTransactionInfoResponseVin>;

		/** Array of transaction outputs */
		GetTransactionInfoResponseVout?: Array<GetTransactionInfoResponseVout>;
	}
	export interface GetTransactionInfoResponseFormProperties {

		/** Hash of the block this transaction is in */
		blockhash: FormControl<string | null | undefined>,

		/** Block height of this transaction */
		blockheight: FormControl<number | null | undefined>,

		/** Block time of this transaction */
		blocktime: FormControl<number | null | undefined>,

		/** Number of transaction confirmations */
		confirmations: FormControl<number | null | undefined>,

		/** Total NEBL used as fee for this transcation in satoshis */
		fee: FormControl<number | null | undefined>,

		/** Transaction in raw hex */
		hex: FormControl<string | null | undefined>,

		/** Transaction locktime */
		locktime: FormControl<number | null | undefined>,

		/** Transaction time */
		time: FormControl<number | null | undefined>,

		/** Total NEBL sent in this transaction in satoshis */
		totalsent: FormControl<number | null | undefined>,

		/** TXID of transaction */
		txid: FormControl<string | null | undefined>,

		/** Transaction version */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGetTransactionInfoResponseFormGroup() {
		return new FormGroup<GetTransactionInfoResponseFormProperties>({
			blockhash: new FormControl<string | null | undefined>(undefined),
			blockheight: new FormControl<number | null | undefined>(undefined),
			blocktime: new FormControl<number | null | undefined>(undefined),
			confirmations: new FormControl<number | null | undefined>(undefined),
			fee: new FormControl<number | null | undefined>(undefined),
			hex: new FormControl<string | null | undefined>(undefined),
			locktime: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			totalsent: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTransactionInfoResponseVin {
		previousOutput?: GetTransactionInfoResponseVinPreviousOutput;
		scriptSig?: GetTransactionInfoResponseVinScriptSig;
		sequence?: number | null;
		GetTransactionInfoResponseVinTokens?: Array<GetTransactionInfoResponseVinTokens>;

		/** TXID of the input */
		txid?: string | null;

		/** Value of input in NEBL satoshi */
		value?: number | null;

		/** output index */
		vout?: number | null;
	}
	export interface GetTransactionInfoResponseVinFormProperties {
		sequence: FormControl<number | null | undefined>,

		/** TXID of the input */
		txid: FormControl<string | null | undefined>,

		/** Value of input in NEBL satoshi */
		value: FormControl<number | null | undefined>,

		/** output index */
		vout: FormControl<number | null | undefined>,
	}
	export function CreateGetTransactionInfoResponseVinFormGroup() {
		return new FormGroup<GetTransactionInfoResponseVinFormProperties>({
			sequence: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
			vout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTransactionInfoResponseVinPreviousOutput {
		addresses?: Array<string>;
		asm?: string | null;
		hex?: string | null;
		reqSigs?: number | null;
		type?: string | null;
	}
	export interface GetTransactionInfoResponseVinPreviousOutputFormProperties {
		asm: FormControl<string | null | undefined>,
		hex: FormControl<string | null | undefined>,
		reqSigs: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionInfoResponseVinPreviousOutputFormGroup() {
		return new FormGroup<GetTransactionInfoResponseVinPreviousOutputFormProperties>({
			asm: new FormControl<string | null | undefined>(undefined),
			hex: new FormControl<string | null | undefined>(undefined),
			reqSigs: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionInfoResponseVinScriptSig {
		asm?: string | null;
		hex?: string | null;
	}
	export interface GetTransactionInfoResponseVinScriptSigFormProperties {
		asm: FormControl<string | null | undefined>,
		hex: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionInfoResponseVinScriptSigFormGroup() {
		return new FormGroup<GetTransactionInfoResponseVinScriptSigFormProperties>({
			asm: new FormControl<string | null | undefined>(undefined),
			hex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionInfoResponseVinTokens {

		/** Whether the tokens are aggregatable */
		aggregationPolicy?: string | null;

		/** Number of tokens */
		amount?: number | null;

		/** Decimal places the token is divisible to */
		divisibility?: number | null;

		/** TXID the token was issued in */
		issueTxid?: string | null;

		/** Whether issuance of more tokens is locked */
		lockStatus?: boolean | null;

		/** ID of the token */
		tokenId?: string | null;
	}
	export interface GetTransactionInfoResponseVinTokensFormProperties {

		/** Whether the tokens are aggregatable */
		aggregationPolicy: FormControl<string | null | undefined>,

		/** Number of tokens */
		amount: FormControl<number | null | undefined>,

		/** Decimal places the token is divisible to */
		divisibility: FormControl<number | null | undefined>,

		/** TXID the token was issued in */
		issueTxid: FormControl<string | null | undefined>,

		/** Whether issuance of more tokens is locked */
		lockStatus: FormControl<boolean | null | undefined>,

		/** ID of the token */
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionInfoResponseVinTokensFormGroup() {
		return new FormGroup<GetTransactionInfoResponseVinTokensFormProperties>({
			aggregationPolicy: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			divisibility: new FormControl<number | null | undefined>(undefined),
			issueTxid: new FormControl<string | null | undefined>(undefined),
			lockStatus: new FormControl<boolean | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionInfoResponseVout {

		/** Blockheight of this transaction */
		blockheight?: number | null;

		/** Output index */
		n?: number | null;
		scriptPubKey?: GetTransactionInfoResponseVoutScriptPubKey;
		GetTransactionInfoResponseVoutTokens?: Array<GetTransactionInfoResponseVoutTokens>;

		/** Whether this output has now been used */
		used?: boolean | null;

		/** Blockheight this output was used in */
		usedBlockheight?: number | null;

		/** TXID this output was used in */
		usedTxid?: string | null;

		/** Value of the output in NEBL satoshi */
		value?: number | null;
	}
	export interface GetTransactionInfoResponseVoutFormProperties {

		/** Blockheight of this transaction */
		blockheight: FormControl<number | null | undefined>,

		/** Output index */
		n: FormControl<number | null | undefined>,

		/** Whether this output has now been used */
		used: FormControl<boolean | null | undefined>,

		/** Blockheight this output was used in */
		usedBlockheight: FormControl<number | null | undefined>,

		/** TXID this output was used in */
		usedTxid: FormControl<string | null | undefined>,

		/** Value of the output in NEBL satoshi */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGetTransactionInfoResponseVoutFormGroup() {
		return new FormGroup<GetTransactionInfoResponseVoutFormProperties>({
			blockheight: new FormControl<number | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			used: new FormControl<boolean | null | undefined>(undefined),
			usedBlockheight: new FormControl<number | null | undefined>(undefined),
			usedTxid: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTransactionInfoResponseVoutScriptPubKey {
		addresses?: Array<string>;
		asm?: string | null;
		hex?: string | null;
		reqSigs?: number | null;
		type?: string | null;
	}
	export interface GetTransactionInfoResponseVoutScriptPubKeyFormProperties {
		asm: FormControl<string | null | undefined>,
		hex: FormControl<string | null | undefined>,
		reqSigs: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionInfoResponseVoutScriptPubKeyFormGroup() {
		return new FormGroup<GetTransactionInfoResponseVoutScriptPubKeyFormProperties>({
			asm: new FormControl<string | null | undefined>(undefined),
			hex: new FormControl<string | null | undefined>(undefined),
			reqSigs: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTransactionInfoResponseVoutTokens {

		/** Whether the tokens are aggregatable */
		aggregationPolicy?: string | null;

		/** Number of tokens */
		amount?: number | null;

		/** Decimal places the token is divisible to */
		divisibility?: number | null;

		/** TXID the token was issued in */
		issueTxid?: string | null;

		/** Whether issuance of more tokens is locked */
		lockStatus?: boolean | null;

		/** ID of the token */
		tokenId?: string | null;
	}
	export interface GetTransactionInfoResponseVoutTokensFormProperties {

		/** Whether the tokens are aggregatable */
		aggregationPolicy: FormControl<string | null | undefined>,

		/** Number of tokens */
		amount: FormControl<number | null | undefined>,

		/** Decimal places the token is divisible to */
		divisibility: FormControl<number | null | undefined>,

		/** TXID the token was issued in */
		issueTxid: FormControl<string | null | undefined>,

		/** Whether issuance of more tokens is locked */
		lockStatus: FormControl<boolean | null | undefined>,

		/** ID of the token */
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionInfoResponseVoutTokensFormGroup() {
		return new FormGroup<GetTransactionInfoResponseVoutTokensFormProperties>({
			aggregationPolicy: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			divisibility: new FormControl<number | null | undefined>(undefined),
			issueTxid: new FormControl<string | null | undefined>(undefined),
			lockStatus: new FormControl<boolean | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTxResponse {

		/** Hash of the block this transaction is in */
		blockhash?: string | null;

		/** Block height of this transaction */
		blockheight?: number | null;

		/** Block time of this transaction */
		blocktime?: number | null;

		/** Number of transaction confirmations */
		confirmations?: number | null;

		/** Total NEBL used as fee for this transcation in satoshis */
		fee?: number | null;

		/** Total NEBL used in fees for this transaction */
		fees?: number | null;

		/** Transaction locktime */
		locktime?: number | null;

		/** Transcation size in bytes */
		size?: number | null;

		/** Transaction time */
		time?: number | null;

		/** Total NEBL sent in this transaction in satoshis */
		totalsent?: number | null;

		/** TXID of transaction */
		txid?: string | null;

		/** Total NEBL input in this transaction */
		valueIn?: number | null;

		/** Total NEBL output in this transaction */
		valueOut?: number | null;

		/** Transaction version */
		version?: number | null;

		/** Array of transaction inputs */
		GetTxResponseVin?: Array<GetTxResponseVin>;

		/** Array of transaction outputs */
		GetTxResponseVout?: Array<GetTxResponseVout>;
	}
	export interface GetTxResponseFormProperties {

		/** Hash of the block this transaction is in */
		blockhash: FormControl<string | null | undefined>,

		/** Block height of this transaction */
		blockheight: FormControl<number | null | undefined>,

		/** Block time of this transaction */
		blocktime: FormControl<number | null | undefined>,

		/** Number of transaction confirmations */
		confirmations: FormControl<number | null | undefined>,

		/** Total NEBL used as fee for this transcation in satoshis */
		fee: FormControl<number | null | undefined>,

		/** Total NEBL used in fees for this transaction */
		fees: FormControl<number | null | undefined>,

		/** Transaction locktime */
		locktime: FormControl<number | null | undefined>,

		/** Transcation size in bytes */
		size: FormControl<number | null | undefined>,

		/** Transaction time */
		time: FormControl<number | null | undefined>,

		/** Total NEBL sent in this transaction in satoshis */
		totalsent: FormControl<number | null | undefined>,

		/** TXID of transaction */
		txid: FormControl<string | null | undefined>,

		/** Total NEBL input in this transaction */
		valueIn: FormControl<number | null | undefined>,

		/** Total NEBL output in this transaction */
		valueOut: FormControl<number | null | undefined>,

		/** Transaction version */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGetTxResponseFormGroup() {
		return new FormGroup<GetTxResponseFormProperties>({
			blockhash: new FormControl<string | null | undefined>(undefined),
			blockheight: new FormControl<number | null | undefined>(undefined),
			blocktime: new FormControl<number | null | undefined>(undefined),
			confirmations: new FormControl<number | null | undefined>(undefined),
			fee: new FormControl<number | null | undefined>(undefined),
			fees: new FormControl<number | null | undefined>(undefined),
			locktime: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			totalsent: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			valueIn: new FormControl<number | null | undefined>(undefined),
			valueOut: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTxResponseVin {

		/** input index */
		n?: number | null;
		scriptSig?: GetTxResponseVinScriptSig;
		sequence?: number | null;

		/** TXID of the input */
		txid?: string | null;

		/** Value of input in NEBL */
		value?: number | null;

		/** Value of input in NEBL satoshi */
		valueSat?: number | null;

		/** output index */
		vout?: number | null;
	}
	export interface GetTxResponseVinFormProperties {

		/** input index */
		n: FormControl<number | null | undefined>,
		sequence: FormControl<number | null | undefined>,

		/** TXID of the input */
		txid: FormControl<string | null | undefined>,

		/** Value of input in NEBL */
		value: FormControl<number | null | undefined>,

		/** Value of input in NEBL satoshi */
		valueSat: FormControl<number | null | undefined>,

		/** output index */
		vout: FormControl<number | null | undefined>,
	}
	export function CreateGetTxResponseVinFormGroup() {
		return new FormGroup<GetTxResponseVinFormProperties>({
			n: new FormControl<number | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
			valueSat: new FormControl<number | null | undefined>(undefined),
			vout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTxResponseVinScriptSig {
		asm?: string | null;
		hex?: string | null;
	}
	export interface GetTxResponseVinScriptSigFormProperties {
		asm: FormControl<string | null | undefined>,
		hex: FormControl<string | null | undefined>,
	}
	export function CreateGetTxResponseVinScriptSigFormGroup() {
		return new FormGroup<GetTxResponseVinScriptSigFormProperties>({
			asm: new FormControl<string | null | undefined>(undefined),
			hex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTxResponseVout {

		/** Blockheight of this transaction */
		blockheight?: number | null;

		/** Output index */
		n?: number | null;
		scriptPubKey?: GetTxResponseVoutScriptPubKey;

		/** Whether this output has now been used */
		used?: boolean | null;

		/** Blockheight this output was used in */
		usedBlockheight?: number | null;

		/** TXID this output was used in */
		usedTxid?: string | null;

		/** Value of the output in NEBL */
		value?: number | null;
	}
	export interface GetTxResponseVoutFormProperties {

		/** Blockheight of this transaction */
		blockheight: FormControl<number | null | undefined>,

		/** Output index */
		n: FormControl<number | null | undefined>,

		/** Whether this output has now been used */
		used: FormControl<boolean | null | undefined>,

		/** Blockheight this output was used in */
		usedBlockheight: FormControl<number | null | undefined>,

		/** TXID this output was used in */
		usedTxid: FormControl<string | null | undefined>,

		/** Value of the output in NEBL */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGetTxResponseVoutFormGroup() {
		return new FormGroup<GetTxResponseVoutFormProperties>({
			blockheight: new FormControl<number | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			used: new FormControl<boolean | null | undefined>(undefined),
			usedBlockheight: new FormControl<number | null | undefined>(undefined),
			usedTxid: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTxResponseVoutScriptPubKey {
		addresses?: Array<string>;
		asm?: string | null;
		hex?: string | null;
		reqSigs?: number | null;
		type?: string | null;
	}
	export interface GetTxResponseVoutScriptPubKeyFormProperties {
		asm: FormControl<string | null | undefined>,
		hex: FormControl<string | null | undefined>,
		reqSigs: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetTxResponseVoutScriptPubKeyFormGroup() {
		return new FormGroup<GetTxResponseVoutScriptPubKeyFormProperties>({
			asm: new FormControl<string | null | undefined>(undefined),
			hex: new FormControl<string | null | undefined>(undefined),
			reqSigs: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object containing an array of transaction objects */
	export interface GetTxsResponse {

		/** Number of pages of transactions */
		pagesTotal?: number | null;

		/** Array of transaction objects */
		txs?: Array<GetTxResponse>;
	}

	/** Object containing an array of transaction objects */
	export interface GetTxsResponseFormProperties {

		/** Number of pages of transactions */
		pagesTotal: FormControl<number | null | undefined>,
	}
	export function CreateGetTxsResponseFormGroup() {
		return new FormGroup<GetTxsResponseFormProperties>({
			pagesTotal: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IssueTokenRequest {

		/**
		 * Number of tokens to issue
		 * Required
		 */
		amount: number;

		/**
		 * Number of decimal places the token should be divisble by (0-7)
		 * Required
		 */
		divisibility: number;

		/**
		 * Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)
		 * Required
		 */
		fee: number;

		/** Object representing flags that potentialy modify this transaction */
		flags?: IssueTokenRequestFlags;

		/**
		 * Address issuing the token
		 * Required
		 */
		issueAddress: string;

		/** Object representing all metadata at token issuance */
		metadata?: IssueTokenRequestMetadata;

		/**
		 * whether the token should be reissuable
		 * Required
		 */
		reissuable: boolean;

		/** Required */
		IssueTokenRequestTransfer: Array<IssueTokenRequestTransfer>;
	}
	export interface IssueTokenRequestFormProperties {

		/**
		 * Number of tokens to issue
		 * Required
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Number of decimal places the token should be divisble by (0-7)
		 * Required
		 */
		divisibility: FormControl<number | null | undefined>,

		/**
		 * Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)
		 * Required
		 */
		fee: FormControl<number | null | undefined>,

		/**
		 * Address issuing the token
		 * Required
		 */
		issueAddress: FormControl<string | null | undefined>,

		/**
		 * whether the token should be reissuable
		 * Required
		 */
		reissuable: FormControl<boolean | null | undefined>,
	}
	export function CreateIssueTokenRequestFormGroup() {
		return new FormGroup<IssueTokenRequestFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			divisibility: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			fee: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			issueAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reissuable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IssueTokenRequestFlags {

		/** If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended) */
		splitChange?: boolean | null;
	}
	export interface IssueTokenRequestFlagsFormProperties {

		/** If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended) */
		splitChange: FormControl<boolean | null | undefined>,
	}
	export function CreateIssueTokenRequestFlagsFormGroup() {
		return new FormGroup<IssueTokenRequestFlagsFormProperties>({
			splitChange: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IssueTokenRequestMetadata {

		/** Long name or description of token (ex. Nibble) */
		description?: string | null;

		/** Array of encryption instruction objects for encrypting userData */
		IssueTokenRequestMetadataEncryptions?: Array<IssueTokenRequestMetadataEncryptions>;

		/** Name of token issuer */
		issuer?: string | null;

		/** Object describing token rules */
		rules?: IssueTokenRequestMetadataRules;

		/** Token Symbol it will be identified by (ex. NIBBL) */
		tokenName?: string | null;
		IssueTokenRequestMetadataUrls?: Array<IssueTokenRequestMetadataUrls>;

		/** Metadata set by user on token */
		userData?: IssueTokenRequestMetadataUserData;
	}
	export interface IssueTokenRequestMetadataFormProperties {

		/** Long name or description of token (ex. Nibble) */
		description: FormControl<string | null | undefined>,

		/** Name of token issuer */
		issuer: FormControl<string | null | undefined>,

		/** Token Symbol it will be identified by (ex. NIBBL) */
		tokenName: FormControl<string | null | undefined>,
	}
	export function CreateIssueTokenRequestMetadataFormGroup() {
		return new FormGroup<IssueTokenRequestMetadataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			tokenName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IssueTokenRequestMetadataEncryptions {

		/** key format (pem or der) */
		format?: string | null;

		/** userData key to encrypt */
		key?: string | null;

		/** RSA public key used for encryption */
		pubkey?: string | null;

		/** pkcs1 or pkcs8 */
		type?: string | null;
	}
	export interface IssueTokenRequestMetadataEncryptionsFormProperties {

		/** key format (pem or der) */
		format: FormControl<string | null | undefined>,

		/** userData key to encrypt */
		key: FormControl<string | null | undefined>,

		/** RSA public key used for encryption */
		pubkey: FormControl<string | null | undefined>,

		/** pkcs1 or pkcs8 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateIssueTokenRequestMetadataEncryptionsFormGroup() {
		return new FormGroup<IssueTokenRequestMetadataEncryptionsFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			pubkey: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IssueTokenRequestMetadataRules {

		/** Object describing expiration rules of the token */
		expiration?: IssueTokenRequestMetadataRulesExpiration;
		fees?: IssueTokenRequestMetadataRulesFees;

		/** Array of objects describing what addresses can hold the token */
		IssueTokenRequestMetadataRulesHolders?: Array<IssueTokenRequestMetadataRulesHolders>;
	}
	export interface IssueTokenRequestMetadataRulesFormProperties {
	}
	export function CreateIssueTokenRequestMetadataRulesFormGroup() {
		return new FormGroup<IssueTokenRequestMetadataRulesFormProperties>({
		});

	}

	export interface IssueTokenRequestMetadataRulesExpiration {

		/** Whether this rule can be modified in future transactions */
		locked?: boolean | null;

		/** Blockheight at wh */
		validUntil?: number | null;
	}
	export interface IssueTokenRequestMetadataRulesExpirationFormProperties {

		/** Whether this rule can be modified in future transactions */
		locked: FormControl<boolean | null | undefined>,

		/** Blockheight at wh */
		validUntil: FormControl<number | null | undefined>,
	}
	export function CreateIssueTokenRequestMetadataRulesExpirationFormGroup() {
		return new FormGroup<IssueTokenRequestMetadataRulesExpirationFormProperties>({
			locked: new FormControl<boolean | null | undefined>(undefined),
			validUntil: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IssueTokenRequestMetadataRulesFees {

		/** Array of objects describing fee rules */
		IssueTokenRequestMetadataRulesFeesItems?: Array<IssueTokenRequestMetadataRulesFeesItems>;

		/** Whether this rule can be modified in future transactions */
		locked?: boolean | null;
	}
	export interface IssueTokenRequestMetadataRulesFeesFormProperties {

		/** Whether this rule can be modified in future transactions */
		locked: FormControl<boolean | null | undefined>,
	}
	export function CreateIssueTokenRequestMetadataRulesFeesFormGroup() {
		return new FormGroup<IssueTokenRequestMetadataRulesFeesFormProperties>({
			locked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IssueTokenRequestMetadataRulesFeesItems {

		/** Address fee is auto sent to */
		address?: string | null;

		/** How fee should be paid, either with a tokenId, or with NEBL if null */
		tokenId?: string | null;

		/** Amount of NTP1 token, or NEBL (in satoshi) to pay as fee */
		value?: string | null;
	}
	export interface IssueTokenRequestMetadataRulesFeesItemsFormProperties {

		/** Address fee is auto sent to */
		address: FormControl<string | null | undefined>,

		/** How fee should be paid, either with a tokenId, or with NEBL if null */
		tokenId: FormControl<string | null | undefined>,

		/** Amount of NTP1 token, or NEBL (in satoshi) to pay as fee */
		value: FormControl<string | null | undefined>,
	}
	export function CreateIssueTokenRequestMetadataRulesFeesItemsFormGroup() {
		return new FormGroup<IssueTokenRequestMetadataRulesFeesItemsFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IssueTokenRequestMetadataRulesHolders {

		/** Address that can hold the token */
		address?: string | null;

		/** Whether this rule can be modified in future transactions */
		locked?: boolean | null;
	}
	export interface IssueTokenRequestMetadataRulesHoldersFormProperties {

		/** Address that can hold the token */
		address: FormControl<string | null | undefined>,

		/** Whether this rule can be modified in future transactions */
		locked: FormControl<boolean | null | undefined>,
	}
	export function CreateIssueTokenRequestMetadataRulesHoldersFormGroup() {
		return new FormGroup<IssueTokenRequestMetadataRulesHoldersFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			locked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IssueTokenRequestMetadataUrls {

		/** Hash of data at the URL, used for verification */
		dataHash?: string | null;

		/** mimeType of URL content */
		mimeType?: string | null;

		/** Name of the URL */
		name?: string | null;

		/** Actual URL */
		url?: string | null;
	}
	export interface IssueTokenRequestMetadataUrlsFormProperties {

		/** Hash of data at the URL, used for verification */
		dataHash: FormControl<string | null | undefined>,

		/** mimeType of URL content */
		mimeType: FormControl<string | null | undefined>,

		/** Name of the URL */
		name: FormControl<string | null | undefined>,

		/** Actual URL */
		url: FormControl<string | null | undefined>,
	}
	export function CreateIssueTokenRequestMetadataUrlsFormGroup() {
		return new FormGroup<IssueTokenRequestMetadataUrlsFormProperties>({
			dataHash: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IssueTokenRequestMetadataUserData {
		IssueTokenRequestMetadataUserDataMeta?: Array<IssueTokenRequestMetadataUserDataMeta>;
	}
	export interface IssueTokenRequestMetadataUserDataFormProperties {
	}
	export function CreateIssueTokenRequestMetadataUserDataFormGroup() {
		return new FormGroup<IssueTokenRequestMetadataUserDataFormProperties>({
		});

	}

	export interface IssueTokenRequestMetadataUserDataMeta {
		key?: string | null;
		value?: string | null;
	}
	export interface IssueTokenRequestMetadataUserDataMetaFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateIssueTokenRequestMetadataUserDataMetaFormGroup() {
		return new FormGroup<IssueTokenRequestMetadataUserDataMetaFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IssueTokenRequestTransfer {

		/** Address to send the amount of issued tokens to */
		address?: string | null;
		amount?: number | null;
	}
	export interface IssueTokenRequestTransferFormProperties {

		/** Address to send the amount of issued tokens to */
		address: FormControl<string | null | undefined>,
		amount: FormControl<number | null | undefined>,
	}
	export function CreateIssueTokenRequestTransferFormGroup() {
		return new FormGroup<IssueTokenRequestTransferFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IssueTokenResponse {

		/** TokenId of the to be issued token */
		tokenId?: string | null;

		/** Unsigned, raw transaction hex of the transaction to issue the token */
		txHex?: string | null;
	}
	export interface IssueTokenResponseFormProperties {

		/** TokenId of the to be issued token */
		tokenId: FormControl<string | null | undefined>,

		/** Unsigned, raw transaction hex of the transaction to issue the token */
		txHex: FormControl<string | null | undefined>,
	}
	export function CreateIssueTokenResponseFormGroup() {
		return new FormGroup<IssueTokenResponseFormProperties>({
			tokenId: new FormControl<string | null | undefined>(undefined),
			txHex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RpcRequest {

		/**
		 * Identifier of RCP caller
		 * Required
		 */
		id: string;

		/**
		 * JSON-RPC version
		 * Required
		 */
		jsonrpc: string;

		/**
		 * Name of the Neblio RPC method to call
		 * Required
		 */
		method: string;

		/**
		 * Array of string params that should be passed to the RPC method.
		 * Required
		 */
		params: Array<string>;
	}
	export interface RpcRequestFormProperties {

		/**
		 * Identifier of RCP caller
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * JSON-RPC version
		 * Required
		 */
		jsonrpc: FormControl<string | null | undefined>,

		/**
		 * Name of the Neblio RPC method to call
		 * Required
		 */
		method: FormControl<string | null | undefined>,
	}
	export function CreateRpcRequestFormGroup() {
		return new FormGroup<RpcRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jsonrpc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Object containing the JSON response from the Neblio node. */
	export interface RpcResponse {

		/** Object containing any error information. */
		error?: string | null;

		/** Identifier of RCP caller */
		id?: string | null;

		/** Object containing the response output. */
		result?: string | null;
	}

	/** Object containing the JSON response from the Neblio node. */
	export interface RpcResponseFormProperties {

		/** Object containing any error information. */
		error: FormControl<string | null | undefined>,

		/** Identifier of RCP caller */
		id: FormControl<string | null | undefined>,

		/** Object containing the response output. */
		result: FormControl<string | null | undefined>,
	}
	export function CreateRpcResponseFormGroup() {
		return new FormGroup<RpcResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTokenRequest {

		/**
		 * Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)
		 * Required
		 */
		fee: number;

		/** Object representing flags that potentialy modify this transaction */
		flags?: SendTokenRequestFlags;

		/** Array of addresses to send the token from */
		from?: Array<string>;

		/** Object representing all metadata at token issuance */
		metadata?: SendTokenRequestMetadata;

		/** Array of UTXOs to send the token from */
		sendutxo?: Array<string>;

		/** Required */
		SendTokenRequestTo: Array<SendTokenRequestTo>;
	}
	export interface SendTokenRequestFormProperties {

		/**
		 * Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)
		 * Required
		 */
		fee: FormControl<number | null | undefined>,
	}
	export function CreateSendTokenRequestFormGroup() {
		return new FormGroup<SendTokenRequestFormProperties>({
			fee: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendTokenRequestFlags {

		/** If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended) */
		splitChange?: boolean | null;
	}
	export interface SendTokenRequestFlagsFormProperties {

		/** If true change will be split into 2 outputs, one for NEBL change and one for NTP1 change (recommended) */
		splitChange: FormControl<boolean | null | undefined>,
	}
	export function CreateSendTokenRequestFlagsFormGroup() {
		return new FormGroup<SendTokenRequestFlagsFormProperties>({
			splitChange: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SendTokenRequestMetadata {

		/** Long name or description of token (ex. Nibble) */
		description?: string | null;

		/** Array of encryption instruction objects for encrypting userData */
		SendTokenRequestMetadataEncryptions?: Array<SendTokenRequestMetadataEncryptions>;

		/** Name of token issuer */
		issuer?: string | null;

		/** Object describing token rules */
		rules?: SendTokenRequestMetadataRules;

		/** Token Symbol it will be identified by (ex. NIBBL) */
		tokenName?: string | null;
		SendTokenRequestMetadataUrls?: Array<SendTokenRequestMetadataUrls>;

		/** Metadata set by user on token */
		userData?: SendTokenRequestMetadataUserData;
	}
	export interface SendTokenRequestMetadataFormProperties {

		/** Long name or description of token (ex. Nibble) */
		description: FormControl<string | null | undefined>,

		/** Name of token issuer */
		issuer: FormControl<string | null | undefined>,

		/** Token Symbol it will be identified by (ex. NIBBL) */
		tokenName: FormControl<string | null | undefined>,
	}
	export function CreateSendTokenRequestMetadataFormGroup() {
		return new FormGroup<SendTokenRequestMetadataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			tokenName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTokenRequestMetadataEncryptions {

		/** key format (pem or der) */
		format?: string | null;

		/** userData key to encrypt */
		key?: string | null;

		/** RSA public key used for encryption */
		pubkey?: string | null;

		/** pkcs1 or pkcs8 */
		type?: string | null;
	}
	export interface SendTokenRequestMetadataEncryptionsFormProperties {

		/** key format (pem or der) */
		format: FormControl<string | null | undefined>,

		/** userData key to encrypt */
		key: FormControl<string | null | undefined>,

		/** RSA public key used for encryption */
		pubkey: FormControl<string | null | undefined>,

		/** pkcs1 or pkcs8 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSendTokenRequestMetadataEncryptionsFormGroup() {
		return new FormGroup<SendTokenRequestMetadataEncryptionsFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			pubkey: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTokenRequestMetadataRules {

		/** Object describing expiration rules of the token */
		expiration?: SendTokenRequestMetadataRulesExpiration;
		fees?: SendTokenRequestMetadataRulesFees;

		/** Array of objects describing what addresses can hold the token */
		SendTokenRequestMetadataRulesHolders?: Array<SendTokenRequestMetadataRulesHolders>;
	}
	export interface SendTokenRequestMetadataRulesFormProperties {
	}
	export function CreateSendTokenRequestMetadataRulesFormGroup() {
		return new FormGroup<SendTokenRequestMetadataRulesFormProperties>({
		});

	}

	export interface SendTokenRequestMetadataRulesExpiration {

		/** Whether this rule can be modified in future transactions */
		locked?: boolean | null;

		/** Blockheight at wh */
		validUntil?: number | null;
	}
	export interface SendTokenRequestMetadataRulesExpirationFormProperties {

		/** Whether this rule can be modified in future transactions */
		locked: FormControl<boolean | null | undefined>,

		/** Blockheight at wh */
		validUntil: FormControl<number | null | undefined>,
	}
	export function CreateSendTokenRequestMetadataRulesExpirationFormGroup() {
		return new FormGroup<SendTokenRequestMetadataRulesExpirationFormProperties>({
			locked: new FormControl<boolean | null | undefined>(undefined),
			validUntil: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SendTokenRequestMetadataRulesFees {

		/** Array of objects describing fee rules */
		SendTokenRequestMetadataRulesFeesItems?: Array<SendTokenRequestMetadataRulesFeesItems>;

		/** Whether this rule can be modified in future transactions */
		locked?: boolean | null;
	}
	export interface SendTokenRequestMetadataRulesFeesFormProperties {

		/** Whether this rule can be modified in future transactions */
		locked: FormControl<boolean | null | undefined>,
	}
	export function CreateSendTokenRequestMetadataRulesFeesFormGroup() {
		return new FormGroup<SendTokenRequestMetadataRulesFeesFormProperties>({
			locked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SendTokenRequestMetadataRulesFeesItems {

		/** Address fee is auto sent to */
		address?: string | null;

		/** How fee should be paid, either with a tokenId, or with NEBL if null */
		tokenId?: string | null;

		/** Amount of NTP1 token, or NEBL (in satoshi) to pay as fee */
		value?: string | null;
	}
	export interface SendTokenRequestMetadataRulesFeesItemsFormProperties {

		/** Address fee is auto sent to */
		address: FormControl<string | null | undefined>,

		/** How fee should be paid, either with a tokenId, or with NEBL if null */
		tokenId: FormControl<string | null | undefined>,

		/** Amount of NTP1 token, or NEBL (in satoshi) to pay as fee */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSendTokenRequestMetadataRulesFeesItemsFormGroup() {
		return new FormGroup<SendTokenRequestMetadataRulesFeesItemsFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTokenRequestMetadataRulesHolders {

		/** Address that can hold the token */
		address?: string | null;

		/** Whether this rule can be modified in future transactions */
		locked?: boolean | null;
	}
	export interface SendTokenRequestMetadataRulesHoldersFormProperties {

		/** Address that can hold the token */
		address: FormControl<string | null | undefined>,

		/** Whether this rule can be modified in future transactions */
		locked: FormControl<boolean | null | undefined>,
	}
	export function CreateSendTokenRequestMetadataRulesHoldersFormGroup() {
		return new FormGroup<SendTokenRequestMetadataRulesHoldersFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			locked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SendTokenRequestMetadataUrls {

		/** Hash of data at the URL, used for verification */
		dataHash?: string | null;

		/** mimeType of URL content */
		mimeType?: string | null;

		/** Name of the URL */
		name?: string | null;

		/** Actual URL */
		url?: string | null;
	}
	export interface SendTokenRequestMetadataUrlsFormProperties {

		/** Hash of data at the URL, used for verification */
		dataHash: FormControl<string | null | undefined>,

		/** mimeType of URL content */
		mimeType: FormControl<string | null | undefined>,

		/** Name of the URL */
		name: FormControl<string | null | undefined>,

		/** Actual URL */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSendTokenRequestMetadataUrlsFormGroup() {
		return new FormGroup<SendTokenRequestMetadataUrlsFormProperties>({
			dataHash: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTokenRequestMetadataUserData {
		SendTokenRequestMetadataUserDataMeta?: Array<SendTokenRequestMetadataUserDataMeta>;
	}
	export interface SendTokenRequestMetadataUserDataFormProperties {
	}
	export function CreateSendTokenRequestMetadataUserDataFormGroup() {
		return new FormGroup<SendTokenRequestMetadataUserDataFormProperties>({
		});

	}

	export interface SendTokenRequestMetadataUserDataMeta {
		key?: string | null;
		value?: string | null;
	}
	export interface SendTokenRequestMetadataUserDataMetaFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSendTokenRequestMetadataUserDataMetaFormGroup() {
		return new FormGroup<SendTokenRequestMetadataUserDataMetaFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTokenRequestTo {

		/** Address to transfer tokens to */
		address?: string | null;

		/** Number of tokens to send */
		amount?: number | null;

		/** ID of token we are sending */
		tokenId?: string | null;
	}
	export interface SendTokenRequestToFormProperties {

		/** Address to transfer tokens to */
		address: FormControl<string | null | undefined>,

		/** Number of tokens to send */
		amount: FormControl<number | null | undefined>,

		/** ID of token we are sending */
		tokenId: FormControl<string | null | undefined>,
	}
	export function CreateSendTokenRequestToFormGroup() {
		return new FormGroup<SendTokenRequestToFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			tokenId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTokenResponse {

		/** Array of indexes of multisig outputs */
		multisigOutputs?: Array<number>;

		/** Array of indexes transfering NTP1 tokens */
		ntp1OutputIndexes?: Array<number>;

		/** Unsigned, raw transaction hex of the transaction to send the token */
		txHex?: string | null;
	}
	export interface SendTokenResponseFormProperties {

		/** Unsigned, raw transaction hex of the transaction to send the token */
		txHex: FormControl<string | null | undefined>,
	}
	export function CreateSendTokenResponseFormGroup() {
		return new FormGroup<SendTokenResponseFormProperties>({
			txHex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTxRequest {

		/**
		 * Signed raw tx hex to broadcast
		 * Required
		 */
		rawtx: string;
	}
	export interface SendTxRequestFormProperties {

		/**
		 * Signed raw tx hex to broadcast
		 * Required
		 */
		rawtx: FormControl<string | null | undefined>,
	}
	export function CreateSendTxRequestFormGroup() {
		return new FormGroup<SendTxRequestFormProperties>({
			rawtx: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Send a JSON-RPC call to a localhost neblio-Qt or nebliod node
		 * Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1
		 * Post 
		 * @return {RpcResponse} Object containing the JSON response from the Neblio node.
		 */
		Json_rpc(requestBody: RpcRequest): Observable<RpcResponse> {
			return this.http.post<RpcResponse>(this.baseUri + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns address object
		 * Returns NEBL address object containing information on a specific address
		 * Get ins/addr/{address}
		 * @param {string} address Address
		 * @return {GetAddressResponse} Object containing address info
		 */
		GetAddress(address: string): Observable<GetAddressResponse> {
			return this.http.get<GetAddressResponse>(this.baseUri + 'ins/addr/' + (address == null ? '' : encodeURIComponent(address)), {});
		}

		/**
		 * Returns address balance in sats
		 * Returns NEBL address balance in satoshis
		 * Get ins/addr/{address}/balance
		 * @param {string} address Address
		 * @return {number} Address balance
		 */
		GetAddressBalance(address: string): Observable<number> {
			return this.http.get<number>(this.baseUri + 'ins/addr/' + (address == null ? '' : encodeURIComponent(address)) + '/balance', {});
		}

		/**
		 * Returns total received by address in sats
		 * Returns total NEBL received by address in satoshis
		 * Get ins/addr/{address}/totalReceived
		 * @param {string} address Address
		 * @return {number} Total received by address
		 */
		GetAddressTotalReceived(address: string): Observable<number> {
			return this.http.get<number>(this.baseUri + 'ins/addr/' + (address == null ? '' : encodeURIComponent(address)) + '/totalReceived', {});
		}

		/**
		 * Returns total sent by address in sats
		 * Returns total NEBL sent by address in satoshis
		 * Get ins/addr/{address}/totalSent
		 * @param {string} address Address
		 * @return {number} Total sent by address
		 */
		GetAddressTotalSent(address: string): Observable<number> {
			return this.http.get<number>(this.baseUri + 'ins/addr/' + (address == null ? '' : encodeURIComponent(address)) + '/totalSent', {});
		}

		/**
		 * Returns address unconfirmed balance in sats
		 * Returns NEBL address unconfirmed balance in satoshis
		 * Get ins/addr/{address}/unconfirmedBalance
		 * @param {string} address Address
		 * @return {number} Address unconfirmed balance
		 */
		GetAddressUnconfirmedBalance(address: string): Observable<number> {
			return this.http.get<number>(this.baseUri + 'ins/addr/' + (address == null ? '' : encodeURIComponent(address)) + '/unconfirmedBalance', {});
		}

		/**
		 * Returns all UTXOs at a given address
		 * Returns information on each Unspent Transaction Output contained at an address
		 * Get ins/addr/{address}/utxo
		 * @param {string} address Address
		 * @return {Array<GetAddressUtxosReturn>} UTXOs at an address
		 */
		GetAddressUtxos(address: string): Observable<Array<GetAddressUtxosReturn>> {
			return this.http.get<Array<GetAddressUtxosReturn>>(this.baseUri + 'ins/addr/' + (address == null ? '' : encodeURIComponent(address)) + '/utxo', {});
		}

		/**
		 * Returns block hash of block
		 * Returns the block hash of a block at a given block index
		 * Get ins/block-index/{blockindex}
		 * @param {number} blockindex Block Index
		 * @return {GetBlockIndexResponse} Object containing block hash
		 */
		GetBlockIndex(blockindex: number): Observable<GetBlockIndexResponse> {
			return this.http.get<GetBlockIndexResponse>(this.baseUri + 'ins/block-index/' + blockindex, {});
		}

		/**
		 * Returns information regarding a Neblio block
		 * Returns blockchain data for a given block based upon the block hash
		 * Get ins/block/{blockhash}
		 * @param {string} blockhash Block Hash
		 * @return {GetBlockResponse} Object containing all information on a blockchain block
		 */
		GetBlock(blockhash: string): Observable<GetBlockResponse> {
			return this.http.get<GetBlockResponse>(this.baseUri + 'ins/block/' + (blockhash == null ? '' : encodeURIComponent(blockhash)), {});
		}

		/**
		 * Returns raw transaction hex
		 * Returns raw transaction hex representing a NEBL transaction
		 * Get ins/rawtx/{txid}
		 * @param {string} txid Transaction ID
		 * @return {GetRawTxResponse} Object containing raw hex of transaction
		 */
		GetRawTx(txid: string): Observable<GetRawTxResponse> {
			return this.http.get<GetRawTxResponse>(this.baseUri + 'ins/rawtx/' + (txid == null ? '' : encodeURIComponent(txid)), {});
		}

		/**
		 * Utility API for calling several blockchain node functions
		 * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
		 * Get ins/status
		 * @param {string} q Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash
		 * @return {GetStatusResponse} Function Response
		 */
		GetStatus(q: string | null | undefined): Observable<GetStatusResponse> {
			return this.http.get<GetStatusResponse>(this.baseUri + 'ins/status?q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Get node sync status
		 * Returns information on the node's sync progress
		 * Get ins/sync
		 * @return {GetSyncResponse} Sync Info
		 */
		GetSync(): Observable<GetSyncResponse> {
			return this.http.get<GetSyncResponse>(this.baseUri + 'ins/sync', {});
		}

		/**
		 * Broadcasts a signed raw transaction to the network (not NTP1 specific)
		 * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
		 * Post ins/tx/send
		 * @param {SendTxRequest} requestBody Object representing a transaction to broadcast
		 * @return {BroadcastTxResponse} An object containing the TXID if the broadcast was successful
		 */
		SendTx(requestBody: SendTxRequest): Observable<BroadcastTxResponse> {
			return this.http.post<BroadcastTxResponse>(this.baseUri + 'ins/tx/send', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns transaction object
		 * Returns NEBL transaction object representing a NEBL transaction
		 * Get ins/tx/{txid}
		 * @param {string} txid Transaction ID
		 * @return {GetTxResponse} Object containing transaction info
		 */
		GetTx(txid: string): Observable<GetTxResponse> {
			return this.http.get<GetTxResponse>(this.baseUri + 'ins/tx/' + (txid == null ? '' : encodeURIComponent(txid)), {});
		}

		/**
		 * Get transactions by block or address
		 * Returns all transactions by block or address
		 * Get ins/txs
		 * @param {string} address Address
		 * @param {string} block Block Hash
		 * @param {number} pageNum Page number to display
		 * @return {GetTxsResponse} List of transactions
		 */
		GetTxs(address: string | null | undefined, block: string | null | undefined, pageNum: number | null | undefined): Observable<GetTxsResponse> {
			return this.http.get<GetTxsResponse>(this.baseUri + 'ins/txs?address=' + (address == null ? '' : encodeURIComponent(address)) + '&block=' + (block == null ? '' : encodeURIComponent(block)) + '&pageNum=' + pageNum, {});
		}

		/**
		 * Information On a Neblio Address
		 * Returns both NEBL and NTP1 token UTXOs held at the given address.
		 * Get ntp1/addressinfo/{address}
		 * @param {string} address Neblio Address to get information on.
		 * @return {GetAddressInfoResponse} An object with an array of UTXOs for this address
		 */
		GetAddressInfo(address: string): Observable<GetAddressInfoResponse> {
			return this.http.get<GetAddressInfoResponse>(this.baseUri + 'ntp1/addressinfo/' + (address == null ? '' : encodeURIComponent(address)), {});
		}

		/**
		 * Broadcasts a signed raw transaction to the network
		 * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
		 * Post ntp1/broadcast
		 * @param {BroadcastTxRequest} requestBody Object representing a transaction to broadcast
		 * @return {BroadcastTxResponse} An object containing the TXID if the broadcast was successful
		 */
		BroadcastTx(requestBody: BroadcastTxRequest): Observable<BroadcastTxResponse> {
			return this.http.post<BroadcastTxResponse>(this.baseUri + 'ntp1/broadcast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Builds a transaction that burns an NTP1 Token
		 * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
		 * Post ntp1/burntoken
		 * @param {BurnTokenRequest} requestBody Object representing the token to be burned
		 * @return {BurnTokenResponse} An object representing the tx to burn the token
		 */
		BurnToken(requestBody: BurnTokenRequest): Observable<BurnTokenResponse> {
			return this.http.post<BurnTokenResponse>(this.baseUri + 'ntp1/burntoken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Builds a transaction that issues a new NTP1 Token
		 * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
		 * Post ntp1/issue
		 * @param {IssueTokenRequest} requestBody Object representing the token to be created
		 * @return {IssueTokenResponse} An object representing the token created
		 */
		IssueToken(requestBody: IssueTokenRequest): Observable<IssueTokenResponse> {
			return this.http.post<IssueTokenResponse>(this.baseUri + 'ntp1/issue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Builds a transaction that sends an NTP1 Token
		 * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
		 * Post ntp1/sendtoken
		 * @param {SendTokenRequest} requestBody Object representing the token to be sent
		 * @return {SendTokenResponse} An object representing the tx to send the token
		 */
		SendToken(requestBody: SendTokenRequest): Observable<SendTokenResponse> {
			return this.http.post<SendTokenResponse>(this.baseUri + 'ntp1/sendtoken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Addresses Holding a Token
		 * Returns the the the addresses holding a token and how many tokens are held
		 * Get ntp1/stakeholders/{tokenid}
		 * @param {string} tokenid TokenId to request metadata for
		 * @return {GetTokenHoldersResponse} An object containing all of the addresses holding a token
		 */
		GetTokenHolders(tokenid: string): Observable<GetTokenHoldersResponse> {
			return this.http.get<GetTokenHoldersResponse>(this.baseUri + 'ntp1/stakeholders/' + (tokenid == null ? '' : encodeURIComponent(tokenid)), {});
		}

		/**
		 * Returns the tokenId representing a token
		 * Translates a token symbol to a tokenId if a token exists with that symbol on the network
		 * Get ntp1/tokenid/{tokensymbol}
		 * @param {string} tokensymbol Token symbol
		 * @return {GetTokenIdResponse} Object containing the token symbol and ID, if token symbol does not exist on network, empty object is returned.
		 */
		GetTokenId(tokensymbol: string): Observable<GetTokenIdResponse> {
			return this.http.get<GetTokenIdResponse>(this.baseUri + 'ntp1/tokenid/' + (tokensymbol == null ? '' : encodeURIComponent(tokensymbol)), {});
		}

		/**
		 * Get Metadata of Token
		 * Returns the metadata associated with a token.
		 * Get ntp1/tokenmetadata/{tokenid}
		 * @param {string} tokenid TokenId to request metadata for
		 * @param {number} verbosity 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses
		 * @return {GetTokenMetadataResponse} An object containing the metadata of a token
		 */
		GetTokenMetadata(tokenid: string, verbosity: number | null | undefined): Observable<GetTokenMetadataResponse> {
			return this.http.get<GetTokenMetadataResponse>(this.baseUri + 'ntp1/tokenmetadata/' + (tokenid == null ? '' : encodeURIComponent(tokenid)) + '&verbosity=' + verbosity, {});
		}

		/**
		 * Get UTXO Metadata of Token
		 * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
		 * Get ntp1/tokenmetadata/{tokenid}/{utxo}
		 * @param {string} tokenid TokenId to request metadata for
		 * @param {string} utxo Specific UTXO to request metadata for
		 * @param {number} verbosity 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses
		 * @return {GetTokenMetadataResponse} An object containing the metadata of a token for a UTXO
		 */
		GetTokenMetadataOfUtxo(tokenid: string, utxo: string, verbosity: number | null | undefined): Observable<GetTokenMetadataResponse> {
			return this.http.get<GetTokenMetadataResponse>(this.baseUri + 'ntp1/tokenmetadata/' + (tokenid == null ? '' : encodeURIComponent(tokenid)) + '/' + (utxo == null ? '' : encodeURIComponent(utxo)) + '&verbosity=' + verbosity, {});
		}

		/**
		 * Information On an NTP1 Transaction
		 * Returns detailed information regarding an NTP1 transaction.
		 * Get ntp1/transactioninfo/{txid}
		 * @param {string} txid Neblio txid to get information on.
		 * @return {GetTransactionInfoResponse} An object represending this transaction
		 */
		GetTransactionInfo(txid: string): Observable<GetTransactionInfoResponse> {
			return this.http.get<GetTransactionInfoResponse>(this.baseUri + 'ntp1/transactioninfo/' + (txid == null ? '' : encodeURIComponent(txid)), {});
		}

		/**
		 * Withdraws testnet NEBL to the specified address
		 * Withdraw testnet NEBL to your Neblio Testnet address. By default amount is 1500000000 or 15 NEBL and has a max of 50 NEBL. Only 2 withdrawals allowed per 24 hour period.
		 * Get testnet/faucet
		 * @param {string} address Your Neblio Testnet Address
		 * @param {number} amount Amount of NEBL to withdrawal in satoshis
		 * @return {GetFaucetResponse} Object containing the transaction ID of the withdrawal.
		 */
		Testnet_getFaucet(address: string, amount: number | null | undefined): Observable<GetFaucetResponse> {
			return this.http.get<GetFaucetResponse>(this.baseUri + 'testnet/faucet?address=' + (address == null ? '' : encodeURIComponent(address)) + '&amount=' + amount, {});
		}

		/**
		 * Returns address object
		 * Returns NEBL address object containing information on a specific address
		 * Get testnet/ins/addr/{address}
		 * @param {string} address Address
		 * @return {GetAddressResponse} Object containing address info
		 */
		Testnet_getAddress(address: string): Observable<GetAddressResponse> {
			return this.http.get<GetAddressResponse>(this.baseUri + 'testnet/ins/addr/' + (address == null ? '' : encodeURIComponent(address)), {});
		}

		/**
		 * Returns address balance in sats
		 * Returns NEBL address balance in satoshis
		 * Get testnet/ins/addr/{address}/balance
		 * @param {string} address Address
		 * @return {number} Address balance
		 */
		Testnet_getAddressBalance(address: string): Observable<number> {
			return this.http.get<number>(this.baseUri + 'testnet/ins/addr/' + (address == null ? '' : encodeURIComponent(address)) + '/balance', {});
		}

		/**
		 * Returns total received by address in sats
		 * Returns total NEBL received by address in satoshis
		 * Get testnet/ins/addr/{address}/totalReceived
		 * @param {string} address Address
		 * @return {number} Total received by address
		 */
		Testnet_getAddressTotalReceived(address: string): Observable<number> {
			return this.http.get<number>(this.baseUri + 'testnet/ins/addr/' + (address == null ? '' : encodeURIComponent(address)) + '/totalReceived', {});
		}

		/**
		 * Returns total sent by address in sats
		 * Returns total NEBL sent by address in satoshis
		 * Get testnet/ins/addr/{address}/totalSent
		 * @param {string} address Address
		 * @return {number} Total sent by address
		 */
		Testnet_getAddressTotalSent(address: string): Observable<number> {
			return this.http.get<number>(this.baseUri + 'testnet/ins/addr/' + (address == null ? '' : encodeURIComponent(address)) + '/totalSent', {});
		}

		/**
		 * Returns address unconfirmed balance in sats
		 * Returns NEBL address unconfirmed balance in satoshis
		 * Get testnet/ins/addr/{address}/unconfirmedBalance
		 * @param {string} address Address
		 * @return {number} Address unconfirmed balance
		 */
		Testnet_getAddressUnconfirmedBalance(address: string): Observable<number> {
			return this.http.get<number>(this.baseUri + 'testnet/ins/addr/' + (address == null ? '' : encodeURIComponent(address)) + '/unconfirmedBalance', {});
		}

		/**
		 * Returns all UTXOs at a given address
		 * Returns information on each Unspent Transaction Output contained at an address
		 * Get testnet/ins/addr/{address}/utxo
		 * @param {string} address Address
		 * @return {Array<Testnet_getAddressUtxosReturn>} UTXOs at an address
		 */
		Testnet_getAddressUtxos(address: string): Observable<Array<Testnet_getAddressUtxosReturn>> {
			return this.http.get<Array<Testnet_getAddressUtxosReturn>>(this.baseUri + 'testnet/ins/addr/' + (address == null ? '' : encodeURIComponent(address)) + '/utxo', {});
		}

		/**
		 * Returns block hash of block
		 * Returns the block hash of a block at a given block index
		 * Get testnet/ins/block-index/{blockindex}
		 * @param {number} blockindex Block Index
		 * @return {GetBlockIndexResponse} Object containing block hash
		 */
		Testnet_getBlockIndex(blockindex: number): Observable<GetBlockIndexResponse> {
			return this.http.get<GetBlockIndexResponse>(this.baseUri + 'testnet/ins/block-index/' + blockindex, {});
		}

		/**
		 * Returns information regarding a Neblio block
		 * Returns blockchain data for a given block based upon the block hash
		 * Get testnet/ins/block/{blockhash}
		 * @param {string} blockhash Block Hash
		 * @return {GetBlockResponse} Object containing all information on a blockchain block
		 */
		Testnet_getBlock(blockhash: string): Observable<GetBlockResponse> {
			return this.http.get<GetBlockResponse>(this.baseUri + 'testnet/ins/block/' + (blockhash == null ? '' : encodeURIComponent(blockhash)), {});
		}

		/**
		 * Returns raw transaction hex
		 * Returns raw transaction hex representing a NEBL transaction
		 * Get testnet/ins/rawtx/{txid}
		 * @param {string} txid Transaction ID
		 * @return {GetRawTxResponse} Object containing raw hex of transaction
		 */
		Testnet_getRawTx(txid: string): Observable<GetRawTxResponse> {
			return this.http.get<GetRawTxResponse>(this.baseUri + 'testnet/ins/rawtx/' + (txid == null ? '' : encodeURIComponent(txid)), {});
		}

		/**
		 * Utility API for calling several blockchain node functions
		 * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
		 * Get testnet/ins/status
		 * @param {string} q Function to call, getInfo, getDifficulty, getBestBlockHash, or getLastBlockHash
		 * @return {GetStatusResponse} Function Response
		 */
		Testnet_getStatus(q: string | null | undefined): Observable<GetStatusResponse> {
			return this.http.get<GetStatusResponse>(this.baseUri + 'testnet/ins/status?q=' + (q == null ? '' : encodeURIComponent(q)), {});
		}

		/**
		 * Get node sync status
		 * Returns information on the node's sync progress
		 * Get testnet/ins/sync
		 * @return {GetSyncResponse} Sync Info
		 */
		Testnet_getSync(): Observable<GetSyncResponse> {
			return this.http.get<GetSyncResponse>(this.baseUri + 'testnet/ins/sync', {});
		}

		/**
		 * Broadcasts a signed raw transaction to the network (not NTP1 specific)
		 * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
		 * Post testnet/ins/tx/send
		 * @param {SendTxRequest} requestBody Object representing a transaction to broadcast
		 * @return {BroadcastTxResponse} An object containing the TXID if the broadcast was successful
		 */
		Testnet_sendTx(requestBody: SendTxRequest): Observable<BroadcastTxResponse> {
			return this.http.post<BroadcastTxResponse>(this.baseUri + 'testnet/ins/tx/send', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns transaction object
		 * Returns NEBL transaction object representing a NEBL transaction
		 * Get testnet/ins/tx/{txid}
		 * @param {string} txid Transaction ID
		 * @return {GetTxResponse} Object containing transaction info
		 */
		Testnet_getTx(txid: string): Observable<GetTxResponse> {
			return this.http.get<GetTxResponse>(this.baseUri + 'testnet/ins/tx/' + (txid == null ? '' : encodeURIComponent(txid)), {});
		}

		/**
		 * Get transactions by block or address
		 * Returns all transactions by block or address
		 * Get testnet/ins/txs
		 * @param {string} address Address
		 * @param {string} block Block Hash
		 * @param {number} pageNum Page number to display
		 * @return {GetTxsResponse} List of transactions
		 */
		Testnet_getTxs(address: string | null | undefined, block: string | null | undefined, pageNum: number | null | undefined): Observable<GetTxsResponse> {
			return this.http.get<GetTxsResponse>(this.baseUri + 'testnet/ins/txs?address=' + (address == null ? '' : encodeURIComponent(address)) + '&block=' + (block == null ? '' : encodeURIComponent(block)) + '&pageNum=' + pageNum, {});
		}

		/**
		 * Information On a Neblio Address
		 * Returns both NEBL and NTP1 token UTXOs held at the given address.
		 * Get testnet/ntp1/addressinfo/{address}
		 * @param {string} address Neblio Address to get information on.
		 * @return {GetAddressInfoResponse} An object with an array of UTXOs for this address
		 */
		Testnet_getAddressInfo(address: string): Observable<GetAddressInfoResponse> {
			return this.http.get<GetAddressInfoResponse>(this.baseUri + 'testnet/ntp1/addressinfo/' + (address == null ? '' : encodeURIComponent(address)), {});
		}

		/**
		 * Broadcasts a signed raw transaction to the network
		 * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
		 * Post testnet/ntp1/broadcast
		 * @param {BroadcastTxRequest} requestBody Object representing a transaction to broadcast
		 * @return {BroadcastTxResponse} An object containing the TXID if the broadcast was successful
		 */
		Testnet_broadcastTx(requestBody: BroadcastTxRequest): Observable<BroadcastTxResponse> {
			return this.http.post<BroadcastTxResponse>(this.baseUri + 'testnet/ntp1/broadcast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Builds a transaction that burns an NTP1 Token
		 * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
		 * Post testnet/ntp1/burntoken
		 * @param {BurnTokenRequest} requestBody Object representing the token to be burned
		 * @return {BurnTokenResponse} An object representing the tx to burn the token
		 */
		Testnet_burnToken(requestBody: BurnTokenRequest): Observable<BurnTokenResponse> {
			return this.http.post<BurnTokenResponse>(this.baseUri + 'testnet/ntp1/burntoken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Builds a transaction that issues a new NTP1 Token
		 * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
		 * Post testnet/ntp1/issue
		 * @param {IssueTokenRequest} requestBody Object representing the token to be created
		 * @return {IssueTokenResponse} An object representing the token created
		 */
		Testnet_issueToken(requestBody: IssueTokenRequest): Observable<IssueTokenResponse> {
			return this.http.post<IssueTokenResponse>(this.baseUri + 'testnet/ntp1/issue', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Builds a transaction that sends an NTP1 Token
		 * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
		 * Post testnet/ntp1/sendtoken
		 * @param {SendTokenRequest} requestBody Object representing the token to be sent
		 * @return {SendTokenResponse} An object representing the tx to send the token
		 */
		Testnet_sendToken(requestBody: SendTokenRequest): Observable<SendTokenResponse> {
			return this.http.post<SendTokenResponse>(this.baseUri + 'testnet/ntp1/sendtoken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Addresses Holding a Token
		 * Returns the the the addresses holding a token and how many tokens are held
		 * Get testnet/ntp1/stakeholders/{tokenid}
		 * @param {string} tokenid TokenId to request metadata for
		 * @return {GetTokenHoldersResponse} An object containing all of the addresses holding a token
		 */
		Testnet_getTokenHolders(tokenid: string): Observable<GetTokenHoldersResponse> {
			return this.http.get<GetTokenHoldersResponse>(this.baseUri + 'testnet/ntp1/stakeholders/' + (tokenid == null ? '' : encodeURIComponent(tokenid)), {});
		}

		/**
		 * Returns the tokenId representing a token
		 * Translates a token symbol to a tokenId if a token exists with that symbol on the network
		 * Get testnet/ntp1/tokenid/{tokensymbol}
		 * @param {string} tokensymbol Token symbol
		 * @return {GetTokenIdResponse} Object containing the token symbol and ID, if token symbol does not exist on network, empty object is returned.
		 */
		Testnet_getTokenId(tokensymbol: string): Observable<GetTokenIdResponse> {
			return this.http.get<GetTokenIdResponse>(this.baseUri + 'testnet/ntp1/tokenid/' + (tokensymbol == null ? '' : encodeURIComponent(tokensymbol)), {});
		}

		/**
		 * Get Metadata of Token
		 * Returns the metadata associated with a token.
		 * Get testnet/ntp1/tokenmetadata/{tokenid}
		 * @param {string} tokenid TokenId to request metadata for
		 * @param {number} verbosity 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses
		 * @return {GetTokenMetadataResponse} An object containing the metadata of a token
		 */
		Testnet_getTokenMetadata(tokenid: string, verbosity: number | null | undefined): Observable<GetTokenMetadataResponse> {
			return this.http.get<GetTokenMetadataResponse>(this.baseUri + 'testnet/ntp1/tokenmetadata/' + (tokenid == null ? '' : encodeURIComponent(tokenid)) + '&verbosity=' + verbosity, {});
		}

		/**
		 * Get UTXO Metadata of Token
		 * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
		 * Get testnet/ntp1/tokenmetadata/{tokenid}/{utxo}
		 * @param {string} tokenid TokenId to request metadata for
		 * @param {string} utxo Specific UTXO to request metadata for
		 * @param {number} verbosity 0 (Default) is fastest, 1 contains token stats, 2 contains token holding addresses
		 * @return {GetTokenMetadataResponse} An object containing the metadata of a token for a UTXO
		 */
		Testnet_getTokenMetadataOfUtxo(tokenid: string, utxo: string, verbosity: number | null | undefined): Observable<GetTokenMetadataResponse> {
			return this.http.get<GetTokenMetadataResponse>(this.baseUri + 'testnet/ntp1/tokenmetadata/' + (tokenid == null ? '' : encodeURIComponent(tokenid)) + '/' + (utxo == null ? '' : encodeURIComponent(utxo)) + '&verbosity=' + verbosity, {});
		}

		/**
		 * Information On an NTP1 Transaction
		 * Returns detailed information regarding an NTP1 transaction.
		 * Get testnet/ntp1/transactioninfo/{txid}
		 * @param {string} txid Neblio txid to get information on.
		 * @return {GetTransactionInfoResponse} An object represending this transaction
		 */
		Testnet_getTransactionInfo(txid: string): Observable<GetTransactionInfoResponse> {
			return this.http.get<GetTransactionInfoResponse>(this.baseUri + 'testnet/ntp1/transactioninfo/' + (txid == null ? '' : encodeURIComponent(txid)), {});
		}
	}

	export interface GetAddressUtxosReturn {

		/** Address */
		address?: string | null;

		/** NEBL amount */
		amount?: number | null;

		/** Number of confirmations */
		confirmations?: number | null;

		/** scriptPubKey */
		scriptPubKey?: string | null;

		/** Timestamp */
		ts?: number | null;

		/** Transaction ID */
		txid?: string | null;

		/** vout */
		vout?: number | null;
	}
	export interface GetAddressUtxosReturnFormProperties {

		/** Address */
		address: FormControl<string | null | undefined>,

		/** NEBL amount */
		amount: FormControl<number | null | undefined>,

		/** Number of confirmations */
		confirmations: FormControl<number | null | undefined>,

		/** scriptPubKey */
		scriptPubKey: FormControl<string | null | undefined>,

		/** Timestamp */
		ts: FormControl<number | null | undefined>,

		/** Transaction ID */
		txid: FormControl<string | null | undefined>,

		/** vout */
		vout: FormControl<number | null | undefined>,
	}
	export function CreateGetAddressUtxosReturnFormGroup() {
		return new FormGroup<GetAddressUtxosReturnFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			confirmations: new FormControl<number | null | undefined>(undefined),
			scriptPubKey: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			vout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Testnet_getAddressUtxosReturn {

		/** Address */
		address?: string | null;

		/** NEBL amount */
		amount?: number | null;

		/** Number of confirmations */
		confirmations?: number | null;

		/** scriptPubKey */
		scriptPubKey?: string | null;

		/** Timestamp */
		ts?: number | null;

		/** Transaction ID */
		txid?: string | null;

		/** vout */
		vout?: number | null;
	}
	export interface Testnet_getAddressUtxosReturnFormProperties {

		/** Address */
		address: FormControl<string | null | undefined>,

		/** NEBL amount */
		amount: FormControl<number | null | undefined>,

		/** Number of confirmations */
		confirmations: FormControl<number | null | undefined>,

		/** scriptPubKey */
		scriptPubKey: FormControl<string | null | undefined>,

		/** Timestamp */
		ts: FormControl<number | null | undefined>,

		/** Transaction ID */
		txid: FormControl<string | null | undefined>,

		/** vout */
		vout: FormControl<number | null | undefined>,
	}
	export function CreateTestnet_getAddressUtxosReturnFormGroup() {
		return new FormGroup<Testnet_getAddressUtxosReturnFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			amount: new FormControl<number | null | undefined>(undefined),
			confirmations: new FormControl<number | null | undefined>(undefined),
			scriptPubKey: new FormControl<string | null | undefined>(undefined),
			ts: new FormControl<number | null | undefined>(undefined),
			txid: new FormControl<string | null | undefined>(undefined),
			vout: new FormControl<number | null | undefined>(undefined),
		});

	}

}

