import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Address {

		/** Required */
		ethereumaddress: string;
	}
	export interface AddressFormProperties {

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Cipherparams {

		/** Required */
		iv: string;
	}
	export interface CipherparamsFormProperties {

		/** Required */
		iv: FormControl<string | null | undefined>,
	}
	export function CreateCipherparamsFormGroup() {
		return new FormGroup<CipherparamsFormProperties>({
			iv: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Content {

		/** Required */
		address: string;

		/** Required */
		crypto: Crypto;

		/** Required */
		id: string;

		/** Required */
		version: number;
	}
	export interface ContentFormProperties {

		/** Required */
		address: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<number | null | undefined>,
	}
	export function CreateContentFormGroup() {
		return new FormGroup<ContentFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Crypto {

		/** Required */
		cipher: string;

		/** Required */
		cipherparams: Cipherparams;

		/** Required */
		ciphertext: string;

		/** Required */
		kdf: string;

		/** Required */
		kdfparams: Kdfparams;

		/** Required */
		mac: string;
	}
	export interface CryptoFormProperties {

		/** Required */
		cipher: FormControl<string | null | undefined>,

		/** Required */
		ciphertext: FormControl<string | null | undefined>,

		/** Required */
		kdf: FormControl<string | null | undefined>,

		/** Required */
		mac: FormControl<string | null | undefined>,
	}
	export function CreateCryptoFormGroup() {
		return new FormGroup<CryptoFormProperties>({
			cipher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ciphertext: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kdf: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mac: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Kdfparams {

		/** Required */
		dklen: number;

		/** Required */
		n: number;

		/** Required */
		p: number;

		/** Required */
		r: number;

		/** Required */
		salt: string;
	}
	export interface KdfparamsFormProperties {

		/** Required */
		dklen: FormControl<number | null | undefined>,

		/** Required */
		n: FormControl<number | null | undefined>,

		/** Required */
		p: FormControl<number | null | undefined>,

		/** Required */
		r: FormControl<number | null | undefined>,

		/** Required */
		salt: FormControl<string | null | undefined>,
	}
	export function CreateKdfparamsFormGroup() {
		return new FormGroup<KdfparamsFormProperties>({
			dklen: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			n: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			p: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			r: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			salt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FailedIpn {

		/** Required */
		action: string;

		/** Required */
		amount: string;

		/** Required */
		contractaddress: string;

		/** Required */
		ethereumaddress: string;

		/** Required */
		id: string;

		/** Required */
		timestamp: string;

		/** Required */
		url: string;
	}
	export interface FailedIpnFormProperties {

		/** Required */
		action: FormControl<string | null | undefined>,

		/** Required */
		amount: FormControl<string | null | undefined>,

		/** Required */
		contractaddress: FormControl<string | null | undefined>,

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFailedIpnFormGroup() {
		return new FormGroup<FailedIpnFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Ipn {

		/** Required */
		contractaddress: string;

		/** Required */
		ethereumaddress: string;

		/** Required */
		url: string;
	}
	export interface IpnFormProperties {

		/** Required */
		contractaddress: FormControl<string | null | undefined>,

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateIpnFormGroup() {
		return new FormGroup<IpnFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Transaction {

		/** Required */
		amount: string;

		/** Required */
		block_number: string;

		/** Required */
		contract_address: string;

		/** Required */
		from: string;

		/** Required */
		gas: string;

		/** Required */
		gas_price: string;

		/** Required */
		to: string;

		/** Required */
		token_decimals: string;

		/** Required */
		token_name: string;

		/** Required */
		token_supply: string;

		/** Required */
		token_symbol: string;

		/** Required */
		txid: string;

		/** Required */
		type: string;
	}
	export interface TransactionFormProperties {

		/** Required */
		amount: FormControl<string | null | undefined>,

		/** Required */
		block_number: FormControl<string | null | undefined>,

		/** Required */
		contract_address: FormControl<string | null | undefined>,

		/** Required */
		from: FormControl<string | null | undefined>,

		/** Required */
		gas: FormControl<string | null | undefined>,

		/** Required */
		gas_price: FormControl<string | null | undefined>,

		/** Required */
		to: FormControl<string | null | undefined>,

		/** Required */
		token_decimals: FormControl<string | null | undefined>,

		/** Required */
		token_name: FormControl<string | null | undefined>,

		/** Required */
		token_supply: FormControl<string | null | undefined>,

		/** Required */
		token_symbol: FormControl<string | null | undefined>,

		/** Required */
		txid: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTransactionFormGroup() {
		return new FormGroup<TransactionFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			block_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contract_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gas: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gas_price: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_decimals: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_supply: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token_symbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			txid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClearAddress {

		/** Required */
		amount: number;

		/** Required */
		ethereumaddress: string;

		/** Required */
		gas: number;

		/** Required */
		newaddress: string;

		/** Required */
		ok: boolean;

		/** Required */
		total: string;

		/** Required */
		txid: string;
	}
	export interface ClearAddressFormProperties {

		/** Required */
		amount: FormControl<number | null | undefined>,

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		gas: FormControl<number | null | undefined>,

		/** Required */
		newaddress: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,

		/** Required */
		total: FormControl<string | null | undefined>,

		/** Required */
		txid: FormControl<string | null | undefined>,
	}
	export function CreateClearAddressFormGroup() {
		return new FormGroup<ClearAddressFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gas: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			newaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			txid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClearAddressRequest {

		/** Required */
		ethereumaddress: string;

		/** Required */
		newaddress: string;

		/** Required */
		password: string;
	}
	export interface ClearAddressRequestFormProperties {

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		newaddress: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateClearAddressRequestFormGroup() {
		return new FormGroup<ClearAddressRequestFormProperties>({
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			newaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAddress {

		/** Required */
		deleted: boolean;

		/** Required */
		ethereumaddress: string;

		/** Required */
		ok: boolean;
	}
	export interface DeleteAddressFormProperties {

		/** Required */
		deleted: FormControl<boolean | null | undefined>,

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteAddressFormGroup() {
		return new FormGroup<DeleteAddressFormProperties>({
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAddressRequest {

		/** Required */
		ethereumaddress: string;

		/** Required */
		password: string;
	}
	export interface DeleteAddressRequestFormProperties {

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAddressRequestFormGroup() {
		return new FormGroup<DeleteAddressRequestFormProperties>({
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExportAddress {

		/** Required */
		content: string;

		/** Required */
		filename: string;

		/** Required */
		ok: boolean;
	}
	export interface ExportAddressFormProperties {

		/** Required */
		content: FormControl<string | null | undefined>,

		/** Required */
		filename: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateExportAddressFormGroup() {
		return new FormGroup<ExportAddressFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExportAddressRequest {

		/** Required */
		ethaddress: string;

		/** Required */
		password: string;
	}
	export interface ExportAddressRequestFormProperties {

		/** Required */
		ethaddress: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateExportAddressRequestFormGroup() {
		return new FormGroup<ExportAddressRequestFormProperties>({
			ethaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBlock {

		/** Required */
		block_number: string;

		/** Required */
		difficulty: string;

		/** Required */
		gas_limit: string;

		/** Required */
		gas_used: string;

		/** Required */
		hash: string;

		/** Required */
		miner: string;

		/** Required */
		ok: boolean;

		/** Required */
		parent_hash: string;

		/** Required */
		size_in_bytes: string;

		/** Required */
		time_stamp: string;

		/** Required */
		transactions_count: string;
	}
	export interface GetBlockFormProperties {

		/** Required */
		block_number: FormControl<string | null | undefined>,

		/** Required */
		difficulty: FormControl<string | null | undefined>,

		/** Required */
		gas_limit: FormControl<string | null | undefined>,

		/** Required */
		gas_used: FormControl<string | null | undefined>,

		/** Required */
		hash: FormControl<string | null | undefined>,

		/** Required */
		miner: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,

		/** Required */
		parent_hash: FormControl<string | null | undefined>,

		/** Required */
		size_in_bytes: FormControl<string | null | undefined>,

		/** Required */
		time_stamp: FormControl<string | null | undefined>,

		/** Required */
		transactions_count: FormControl<string | null | undefined>,
	}
	export function CreateGetBlockFormGroup() {
		return new FormGroup<GetBlockFormProperties>({
			block_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			difficulty: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gas_limit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gas_used: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			miner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			parent_hash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size_in_bytes: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time_stamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transactions_count: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetBlockRequest {

		/** Required */
		block: string;
	}
	export interface GetBlockRequestFormProperties {

		/** Required */
		block: FormControl<string | null | undefined>,
	}
	export function CreateGetBlockRequestFormGroup() {
		return new FormGroup<GetBlockRequestFormProperties>({
			block: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEthereumBalance {

		/** Required */
		balance: number;

		/** Required */
		ethereumaddress: string;

		/** Required */
		ok: boolean;
	}
	export interface GetEthereumBalanceFormProperties {

		/** Required */
		balance: FormControl<number | null | undefined>,

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateGetEthereumBalanceFormGroup() {
		return new FormGroup<GetEthereumBalanceFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEthereumBalanceRequest {

		/** Required */
		ethereumaddress: string;
	}
	export interface GetEthereumBalanceRequestFormProperties {

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,
	}
	export function CreateGetEthereumBalanceRequestFormGroup() {
		return new FormGroup<GetEthereumBalanceRequestFormProperties>({
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetExchangeRate {

		/** Required */
		currency: string;

		/** Required */
		ok: boolean;

		/** Required */
		rate: number;
	}
	export interface GetExchangeRateFormProperties {

		/** Required */
		currency: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,

		/** Required */
		rate: FormControl<number | null | undefined>,
	}
	export function CreateGetExchangeRateFormGroup() {
		return new FormGroup<GetExchangeRateFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			rate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetExchangeRateRequest {

		/** Required */
		currency: string;
	}
	export interface GetExchangeRateRequestFormProperties {

		/** Required */
		currency: FormControl<string | null | undefined>,
	}
	export function CreateGetExchangeRateRequestFormGroup() {
		return new FormGroup<GetExchangeRateRequestFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetGasPrice {

		/** Required */
		gasprice: number;

		/** Required */
		ok: boolean;
	}
	export interface GetGasPriceFormProperties {

		/** Required */
		gasprice: FormControl<number | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateGetGasPriceFormGroup() {
		return new FormGroup<GetGasPriceFormProperties>({
			gasprice: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLastBlockNumber {

		/** Required */
		blocknumber: number;

		/** Required */
		ok: boolean;
	}
	export interface GetLastBlockNumberFormProperties {

		/** Required */
		blocknumber: FormControl<number | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateGetLastBlockNumberFormGroup() {
		return new FormGroup<GetLastBlockNumberFormProperties>({
			blocknumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetToken {

		/** Required */
		contractaddress: string;

		/** Required */
		decimals: number;

		/** Required */
		name: string;

		/** Required */
		ok: boolean;

		/** Required */
		supply: number;

		/** Required */
		symbol: string;
	}
	export interface GetTokenFormProperties {

		/** Required */
		contractaddress: FormControl<string | null | undefined>,

		/** Required */
		decimals: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,

		/** Required */
		supply: FormControl<number | null | undefined>,

		/** Required */
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateGetTokenFormGroup() {
		return new FormGroup<GetTokenFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			decimals: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			supply: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			symbol: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTokenBalance {

		/** Required */
		balance: number;

		/** Required */
		contractaddress: string;

		/** Required */
		ethereumaddress: string;

		/** Required */
		ok: boolean;
	}
	export interface GetTokenBalanceFormProperties {

		/** Required */
		balance: FormControl<number | null | undefined>,

		/** Required */
		contractaddress: FormControl<string | null | undefined>,

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateGetTokenBalanceFormGroup() {
		return new FormGroup<GetTokenBalanceFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTokenBalanceRequest {

		/** Required */
		contractaddress: string;

		/** Required */
		ethereumaddress: string;
	}
	export interface GetTokenBalanceRequestFormProperties {

		/** Required */
		contractaddress: FormControl<string | null | undefined>,

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,
	}
	export function CreateGetTokenBalanceRequestFormGroup() {
		return new FormGroup<GetTokenBalanceRequestFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTokenRequest {

		/** Required */
		contractaddress: string;
	}
	export interface GetTokenRequestFormProperties {

		/** Required */
		contractaddress: FormControl<string | null | undefined>,
	}
	export function CreateGetTokenRequestFormGroup() {
		return new FormGroup<GetTokenRequestFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTransactions {

		/** Required */
		ok: boolean;

		/** Required */
		transactions: Array<Transaction>;
	}
	export interface GetTransactionsFormProperties {

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateGetTransactionsFormGroup() {
		return new FormGroup<GetTransactionsFormProperties>({
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTransactionsRequest {

		/** Required */
		txid: string;
	}
	export interface GetTransactionsRequestFormProperties {

		/** Required */
		txid: FormControl<string | null | undefined>,
	}
	export function CreateGetTransactionsRequestFormGroup() {
		return new FormGroup<GetTransactionsRequestFormProperties>({
			txid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportAddress {

		/** Required */
		ethaddress: string;

		/** Required */
		filename: string;

		/** Required */
		ok: boolean;
	}
	export interface ImportAddressFormProperties {

		/** Required */
		ethaddress: FormControl<string | null | undefined>,

		/** Required */
		filename: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateImportAddressFormGroup() {
		return new FormGroup<ImportAddressFormProperties>({
			ethaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportAddressRequest {

		/** Required */
		content: Content;

		/** Required */
		filename: string;

		/** Required */
		password: string;
	}
	export interface ImportAddressRequestFormProperties {

		/** Required */
		filename: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateImportAddressRequestFormGroup() {
		return new FormGroup<ImportAddressRequestFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAddresses {

		/** Required */
		addresses: Array<Address>;

		/** Required */
		ok: boolean;
	}
	export interface ListAddressesFormProperties {

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateListAddressesFormGroup() {
		return new FormGroup<ListAddressesFormProperties>({
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListFailedIPNs {

		/** Required */
		failed_ipns: Array<FailedIpn>;

		/** Required */
		ok: boolean;
	}
	export interface ListFailedIPNsFormProperties {

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateListFailedIPNsFormGroup() {
		return new FormGroup<ListFailedIPNsFormProperties>({
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSubscribedAddresses {

		/** Required */
		ipns: Array<Ipn>;

		/** Required */
		ok: boolean;
	}
	export interface ListSubscribedAddressesFormProperties {

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateListSubscribedAddressesFormGroup() {
		return new FormGroup<ListSubscribedAddressesFormProperties>({
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewAddress {

		/** Required */
		ethereumaddress: string;

		/** Required */
		ok: boolean;

		/** Required */
		password: string;
	}
	export interface NewAddressFormProperties {

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateNewAddressFormGroup() {
		return new FormGroup<NewAddressFormProperties>({
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewAddressRequest {

		/** Required */
		password: string;
	}
	export interface NewAddressRequestFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateNewAddressRequestFormGroup() {
		return new FormGroup<NewAddressRequestFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResendFailedIPN {

		/** Required */
		id: number;

		/** Required */
		ok: boolean;
	}
	export interface ResendFailedIPNFormProperties {

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateResendFailedIPNFormGroup() {
		return new FormGroup<ResendFailedIPNFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResendFailedIPNRequest {

		/** Required */
		id: number;
	}
	export interface ResendFailedIPNRequestFormProperties {

		/** Required */
		id: FormControl<number | null | undefined>,
	}
	export function CreateResendFailedIPNRequestFormGroup() {
		return new FormGroup<ResendFailedIPNRequestFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendEthereum {

		/** Required */
		amount: string;

		/** Required */
		from: string;

		/** Required */
		ok: boolean;

		/** Required */
		to: string;

		/** Required */
		txid: string;
	}
	export interface SendEthereumFormProperties {

		/** Required */
		amount: FormControl<string | null | undefined>,

		/** Required */
		from: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,

		/** Required */
		to: FormControl<string | null | undefined>,

		/** Required */
		txid: FormControl<string | null | undefined>,
	}
	export function CreateSendEthereumFormGroup() {
		return new FormGroup<SendEthereumFormProperties>({
			amount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			txid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendEthereumRequest {

		/** Required */
		amount: number;

		/** Required */
		from: string;

		/** Required */
		password: string;

		/** Required */
		to: string;
	}
	export interface SendEthereumRequestFormProperties {

		/** Required */
		amount: FormControl<number | null | undefined>,

		/** Required */
		from: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		to: FormControl<string | null | undefined>,
	}
	export function CreateSendEthereumRequestFormGroup() {
		return new FormGroup<SendEthereumRequestFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendToken {

		/** Required */
		amount: number;

		/** Required */
		contractaddress: string;

		/** Required */
		from: string;

		/** Required */
		identifier: string;

		/** Required */
		ok: boolean;

		/** Required */
		to: string;

		/** Required */
		txid: string;
	}
	export interface SendTokenFormProperties {

		/** Required */
		amount: FormControl<number | null | undefined>,

		/** Required */
		contractaddress: FormControl<string | null | undefined>,

		/** Required */
		from: FormControl<string | null | undefined>,

		/** Required */
		identifier: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,

		/** Required */
		to: FormControl<string | null | undefined>,

		/** Required */
		txid: FormControl<string | null | undefined>,
	}
	export function CreateSendTokenFormGroup() {
		return new FormGroup<SendTokenFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			txid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendTokenRequest {

		/** Required */
		amount: number;

		/** Required */
		contractaddress: string;

		/** Required */
		from: string;

		/** Required */
		identifier: string;

		/** Required */
		password: string;

		/** Required */
		to: string;
	}
	export interface SendTokenRequestFormProperties {

		/** Required */
		amount: FormControl<number | null | undefined>,

		/** Required */
		contractaddress: FormControl<string | null | undefined>,

		/** Required */
		from: FormControl<string | null | undefined>,

		/** Required */
		identifier: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		to: FormControl<string | null | undefined>,
	}
	export function CreateSendTokenRequestFormGroup() {
		return new FormGroup<SendTokenRequestFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscribeAddress {

		/** Required */
		contractaddress: string;

		/** Required */
		ethereumaddress: string;

		/** Required */
		ok: boolean;

		/** Required */
		url: string;
	}
	export interface SubscribeAddressFormProperties {

		/** Required */
		contractaddress: FormControl<string | null | undefined>,

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeAddressFormGroup() {
		return new FormGroup<SubscribeAddressFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SubscribeAddressRequest {

		/** Required */
		contractaddress: string;

		/** Required */
		ethereumaddress: string;

		/** Required */
		url: string;
	}
	export interface SubscribeAddressRequestFormProperties {

		/** Required */
		contractaddress: FormControl<string | null | undefined>,

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSubscribeAddressRequestFormGroup() {
		return new FormGroup<SubscribeAddressRequestFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnsubscribeAddress {

		/** Required */
		contractaddress: string;

		/** Required */
		deleted: boolean;

		/** Required */
		ethereumaddress: string;

		/** Required */
		ok: boolean;

		/** Required */
		url: string;
	}
	export interface UnsubscribeAddressFormProperties {

		/** Required */
		contractaddress: FormControl<string | null | undefined>,

		/** Required */
		deleted: FormControl<boolean | null | undefined>,

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		ok: FormControl<boolean | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeAddressFormGroup() {
		return new FormGroup<UnsubscribeAddressFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deleted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnsubscribeAddressRequest {

		/** Required */
		contractaddress: string;

		/** Required */
		ethereumaddress: string;

		/** Required */
		url: string;
	}
	export interface UnsubscribeAddressRequestFormProperties {

		/** Required */
		contractaddress: FormControl<string | null | undefined>,

		/** Required */
		ethereumaddress: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUnsubscribeAddressRequestFormGroup() {
		return new FormGroup<UnsubscribeAddressRequestFormProperties>({
			contractaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ethereumaddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * clearAddress
		 * Sends all available ethereum funds of an address to a specified receiver address.
		 * Post clearAddress
		 * @return {ClearAddress} 
		 */
		ClearAddress(requestBody: ClearAddressRequest): Observable<ClearAddress> {
			return this.http.post<ClearAddress>(this.baseUri + 'clearAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * deleteAddress
		 * Deletes an existing ethereum address. Be careful when using this function.
		 * Post deleteAddress
		 * @return {DeleteAddress} 
		 */
		DeleteAddress(requestBody: DeleteAddressRequest): Observable<DeleteAddress> {
			return this.http.post<DeleteAddress>(this.baseUri + 'deleteAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * exportAddress
		 * Returns all ethereum addresses created with an account.
		 * Post exportAddress
		 * @return {ExportAddress} 
		 */
		ExportAddress(requestBody: ExportAddressRequest): Observable<ExportAddress> {
			return this.http.post<ExportAddress>(this.baseUri + 'exportAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * getBlock
		 * Returns information of an ethereum block with or without transactions
		 * Post getBlock
		 * @return {GetBlock} 
		 */
		GetBlock(requestBody: GetBlockRequest): Observable<GetBlock> {
			return this.http.post<GetBlock>(this.baseUri + 'getBlock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * getEthereumBalance
		 * Returns the ethereum balance of a given address.
		 * Post getEthereumBalance
		 * @return {GetEthereumBalance} 
		 */
		GetEthereumBalance(requestBody: GetEthereumBalanceRequest): Observable<GetEthereumBalance> {
			return this.http.post<GetEthereumBalance>(this.baseUri + 'getEthereumBalance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * getExchangeRate
		 * Returns the current Ethereum price in Euro or US Dollar.
		 * Post getExchangeRate
		 * @return {GetExchangeRate} 
		 */
		GetExchangeRate(requestBody: GetExchangeRateRequest): Observable<GetExchangeRate> {
			return this.http.post<GetExchangeRate>(this.baseUri + 'getExchangeRate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * getGasPrice
		 * Returns the current gas price in GWEI.
		 * Post getGasPrice
		 * @return {GetGasPrice} 
		 */
		GetGasPrice(): Observable<GetGasPrice> {
			return this.http.post<GetGasPrice>(this.baseUri + 'getGasPrice', null, {});
		}

		/**
		 * getLastBlockNumber
		 * Returns the block number of the last mined ethereum block.
		 * Post getLastBlockNumber
		 * @return {GetLastBlockNumber} 
		 */
		GetLastBlockNumber(): Observable<GetLastBlockNumber> {
			return this.http.post<GetLastBlockNumber>(this.baseUri + 'getLastBlockNumber', null, {});
		}

		/**
		 * getToken
		 * Returns information about a specific ERC20 token like name, symbol, decimal places and total supply.
		 * Post getToken
		 * @return {GetToken} 
		 */
		GetToken(requestBody: GetTokenRequest): Observable<GetToken> {
			return this.http.post<GetToken>(this.baseUri + 'getToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * getTokenBalance
		 * Returns the token balance of a given address.
		 * Post getTokenBalance
		 * @return {GetTokenBalance} 
		 */
		GetTokenBalance(requestBody: GetTokenBalanceRequest): Observable<GetTokenBalance> {
			return this.http.post<GetTokenBalance>(this.baseUri + 'getTokenBalance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * getTransactions
		 * Returns information like confirmations, token contract address, amount, gas price and more of a given transaction.
		 * Post getTransactions
		 * @return {GetTransactions} 
		 */
		GetTransactions(requestBody: GetTransactionsRequest): Observable<GetTransactions> {
			return this.http.post<GetTransactions>(this.baseUri + 'getTransactions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * importAddress
		 * Returns all ethereum addresses created with an account.
		 * Post importAddress
		 * @return {ImportAddress} 
		 */
		ImportAddress(requestBody: ImportAddressRequest): Observable<ImportAddress> {
			return this.http.post<ImportAddress>(this.baseUri + 'importAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * listAddresses
		 * Returns all ethereum addresses created with an account.
		 * Post listAddresses
		 * @return {ListAddresses} 
		 */
		ListAddresses(): Observable<ListAddresses> {
			return this.http.post<ListAddresses>(this.baseUri + 'listAddresses', null, {});
		}

		/**
		 * listFailedIPNs
		 * Returns all subscriptions/IPNs created with an account.
		 * Post listFailedIPNs
		 * @return {ListFailedIPNs} 
		 */
		ListFailedIPNs(): Observable<ListFailedIPNs> {
			return this.http.post<ListFailedIPNs>(this.baseUri + 'listFailedIPNs', null, {});
		}

		/**
		 * listSubscribedAddresses
		 * Returns all subscriptions/IPNs created with an account.
		 * Post listSubscribedAddresses
		 * @return {ListSubscribedAddresses} 
		 */
		ListSubscribedAddresses(): Observable<ListSubscribedAddresses> {
			return this.http.post<ListSubscribedAddresses>(this.baseUri + 'listSubscribedAddresses', null, {});
		}

		/**
		 * newAddress
		 * Generates a new ethereum addresses you can use to send or receive funds. Do not lose the password! We can't restore access to an address if you lose it.
		 * Post newAddress
		 * @return {NewAddress} 
		 */
		NewAddress(requestBody: NewAddressRequest): Observable<NewAddress> {
			return this.http.post<NewAddress>(this.baseUri + 'newAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * resendFailedIPN
		 * Returns all subscriptions/IPNs created with an account.
		 * Post resendFailedIPN
		 * @return {ResendFailedIPN} 
		 */
		ResendFailedIPN(requestBody: ResendFailedIPNRequest): Observable<ResendFailedIPN> {
			return this.http.post<ResendFailedIPN>(this.baseUri + 'resendFailedIPN', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * sendEthereum
		 * Sends ethereum from an address controlled by the account to a specified receiver address.
		 * Post sendEthereum
		 * @return {SendEthereum} 
		 */
		SendEthereum(requestBody: SendEthereumRequest): Observable<SendEthereum> {
			return this.http.post<SendEthereum>(this.baseUri + 'sendEthereum', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * sendToken
		 * Sends ERC20 tokens from an address controlled by the account to a specified receiver address. The token contract address is needed to specify the token. The use of the identifier parameter is recommend and awaits an unique string. Whenever a transaction is beeing sent, the identifier is checked and the transaction gets dropped if there is one with that identifier already.
		 * Post sendToken
		 * @return {SendToken} 
		 */
		SendToken(requestBody: SendTokenRequest): Observable<SendToken> {
			return this.http.post<SendToken>(this.baseUri + 'sendToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * subscribeAddress
		 * Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.
		 * Post subscribeAddress
		 * @return {SubscribeAddress} 
		 */
		SubscribeAddress(requestBody: SubscribeAddressRequest): Observable<SubscribeAddress> {
			return this.http.post<SubscribeAddress>(this.baseUri + 'subscribeAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * unsubscribeAddress
		 * Deletes an existing subscription/IPN for the given address (and contractaddress).
		 * Post unsubscribeAddress
		 * @return {UnsubscribeAddress} 
		 */
		UnsubscribeAddress(requestBody: UnsubscribeAddressRequest): Observable<UnsubscribeAddress> {
			return this.http.post<UnsubscribeAddress>(this.baseUri + 'unsubscribeAddress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

