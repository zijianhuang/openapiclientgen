import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface APIKey {
		key?: string | null;
		keyid?: string | null;
		permissions?: string | null;
	}
	export interface APIKeyFormProperties {
		key: FormControl<string | null | undefined>,
		keyid: FormControl<string | null | undefined>,
		permissions: FormControl<string | null | undefined>,
	}
	export function CreateAPIKeyFormGroup() {
		return new FormGroup<APIKeyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			keyid: new FormControl<string | null | undefined>(undefined),
			permissions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Account {
		account?: string | null;
		accountid?: string | null;
		accounttypename?: string | null;
		cash?: string | null;
		change?: string | null;
		changepercent?: string | null;
		comments?: string | null;
		computer?: string | null;
		currencyid?: string | null;
		currencytext?: string | null;
		hwid?: string | null;
		positions?: Positions;
		positionspercent?: Positions;
		sessionid?: string | null;
		typeid?: string | null;
		value?: string | null;
	}
	export interface AccountFormProperties {
		account: FormControl<string | null | undefined>,
		accountid: FormControl<string | null | undefined>,
		accounttypename: FormControl<string | null | undefined>,
		cash: FormControl<string | null | undefined>,
		change: FormControl<string | null | undefined>,
		changepercent: FormControl<string | null | undefined>,
		comments: FormControl<string | null | undefined>,
		computer: FormControl<string | null | undefined>,
		currencyid: FormControl<string | null | undefined>,
		currencytext: FormControl<string | null | undefined>,
		hwid: FormControl<string | null | undefined>,
		sessionid: FormControl<string | null | undefined>,
		typeid: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			accountid: new FormControl<string | null | undefined>(undefined),
			accounttypename: new FormControl<string | null | undefined>(undefined),
			cash: new FormControl<string | null | undefined>(undefined),
			change: new FormControl<string | null | undefined>(undefined),
			changepercent: new FormControl<string | null | undefined>(undefined),
			comments: new FormControl<string | null | undefined>(undefined),
			computer: new FormControl<string | null | undefined>(undefined),
			currencyid: new FormControl<string | null | undefined>(undefined),
			currencytext: new FormControl<string | null | undefined>(undefined),
			hwid: new FormControl<string | null | undefined>(undefined),
			sessionid: new FormControl<string | null | undefined>(undefined),
			typeid: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Positions {
	}
	export interface PositionsFormProperties {
	}
	export function CreatePositionsFormGroup() {
		return new FormGroup<PositionsFormProperties>({
		});

	}

	export interface BacktestTrade {
		barsheld?: string | null;
		changepct?: string | null;
		commission?: string | null;
		entrydatetime?: string | null;
		entryprice?: string | null;
		entrysignal?: string | null;
		exitdatetime?: string | null;
		exitprice?: string | null;
		exitsignal?: string | null;
		mae?: string | null;
		mfe?: string | null;
		pandl?: string | null;
		position?: string | null;
		shares?: string | null;
		size?: string | null;
		symbol?: string | null;
	}
	export interface BacktestTradeFormProperties {
		barsheld: FormControl<string | null | undefined>,
		changepct: FormControl<string | null | undefined>,
		commission: FormControl<string | null | undefined>,
		entrydatetime: FormControl<string | null | undefined>,
		entryprice: FormControl<string | null | undefined>,
		entrysignal: FormControl<string | null | undefined>,
		exitdatetime: FormControl<string | null | undefined>,
		exitprice: FormControl<string | null | undefined>,
		exitsignal: FormControl<string | null | undefined>,
		mae: FormControl<string | null | undefined>,
		mfe: FormControl<string | null | undefined>,
		pandl: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
		shares: FormControl<string | null | undefined>,
		size: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateBacktestTradeFormGroup() {
		return new FormGroup<BacktestTradeFormProperties>({
			barsheld: new FormControl<string | null | undefined>(undefined),
			changepct: new FormControl<string | null | undefined>(undefined),
			commission: new FormControl<string | null | undefined>(undefined),
			entrydatetime: new FormControl<string | null | undefined>(undefined),
			entryprice: new FormControl<string | null | undefined>(undefined),
			entrysignal: new FormControl<string | null | undefined>(undefined),
			exitdatetime: new FormControl<string | null | undefined>(undefined),
			exitprice: new FormControl<string | null | undefined>(undefined),
			exitsignal: new FormControl<string | null | undefined>(undefined),
			mae: new FormControl<string | null | undefined>(undefined),
			mfe: new FormControl<string | null | undefined>(undefined),
			pandl: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			shares: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ByMonths {
		equitypct?: string | null;
		period?: string | null;
	}
	export interface ByMonthsFormProperties {
		equitypct: FormControl<string | null | undefined>,
		period: FormControl<string | null | undefined>,
	}
	export function CreateByMonthsFormGroup() {
		return new FormGroup<ByMonthsFormProperties>({
			equitypct: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ByQuarters {
		equitypct?: string | null;
		period?: string | null;
	}
	export interface ByQuartersFormProperties {
		equitypct: FormControl<string | null | undefined>,
		period: FormControl<string | null | undefined>,
	}
	export function CreateByQuartersFormGroup() {
		return new FormGroup<ByQuartersFormProperties>({
			equitypct: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ByYears {
		equitypct?: string | null;
		period?: string | null;
	}
	export interface ByYearsFormProperties {
		equitypct: FormControl<string | null | undefined>,
		period: FormControl<string | null | undefined>,
	}
	export function CreateByYearsFormGroup() {
		return new FormGroup<ByYearsFormProperties>({
			equitypct: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloudStrategy {
		account?: string | null;
		computer?: string | null;
		hwid?: string | null;
		message?: string | null;
		status?: string | null;
		strategy?: string | null;
		strategyid?: string | null;
		strategystatusname?: string | null;
	}
	export interface CloudStrategyFormProperties {
		account: FormControl<string | null | undefined>,
		computer: FormControl<string | null | undefined>,
		hwid: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		strategy: FormControl<string | null | undefined>,
		strategyid: FormControl<string | null | undefined>,
		strategystatusname: FormControl<string | null | undefined>,
	}
	export function CreateCloudStrategyFormGroup() {
		return new FormGroup<CloudStrategyFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			computer: new FormControl<string | null | undefined>(undefined),
			hwid: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			strategy: new FormControl<string | null | undefined>(undefined),
			strategyid: new FormControl<string | null | undefined>(undefined),
			strategystatusname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Command {
		account?: string | null;
		accountid?: string | null;
		commanddate?: Date | null;
		commandid?: string | null;
		commandstatusname?: string | null;
		commandtypename?: string | null;
		computer?: string | null;
		hwid?: string | null;
		message?: string | null;
		parameters?: Parameters;
		status?: string | null;
		timestamp?: Date | null;
		type?: string | null;
	}
	export interface CommandFormProperties {
		account: FormControl<string | null | undefined>,
		accountid: FormControl<string | null | undefined>,
		commanddate: FormControl<Date | null | undefined>,
		commandid: FormControl<string | null | undefined>,
		commandstatusname: FormControl<string | null | undefined>,
		commandtypename: FormControl<string | null | undefined>,
		computer: FormControl<string | null | undefined>,
		hwid: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCommandFormGroup() {
		return new FormGroup<CommandFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			accountid: new FormControl<string | null | undefined>(undefined),
			commanddate: new FormControl<Date | null | undefined>(undefined),
			commandid: new FormControl<string | null | undefined>(undefined),
			commandstatusname: new FormControl<string | null | undefined>(undefined),
			commandtypename: new FormControl<string | null | undefined>(undefined),
			computer: new FormControl<string | null | undefined>(undefined),
			hwid: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Parameters {
	}
	export interface ParametersFormProperties {
	}
	export function CreateParametersFormGroup() {
		return new FormGroup<ParametersFormProperties>({
		});

	}

	export interface Connection {
		active?: string | null;
		connectionid?: string | null;
		connectionstring?: string | null;
		connectorcode?: string | null;
		connectorid?: string | null;
		connectorname?: string | null;
		connectortypename?: string | null;
		creationdate?: Date | null;
		host?: string | null;
		login?: string | null;
		password?: string | null;
		port?: string | null;
		sessionid?: string | null;
		updatedate?: Date | null;
	}
	export interface ConnectionFormProperties {
		active: FormControl<string | null | undefined>,
		connectionid: FormControl<string | null | undefined>,
		connectionstring: FormControl<string | null | undefined>,
		connectorcode: FormControl<string | null | undefined>,
		connectorid: FormControl<string | null | undefined>,
		connectorname: FormControl<string | null | undefined>,
		connectortypename: FormControl<string | null | undefined>,
		creationdate: FormControl<Date | null | undefined>,
		host: FormControl<string | null | undefined>,
		login: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		port: FormControl<string | null | undefined>,
		sessionid: FormControl<string | null | undefined>,
		updatedate: FormControl<Date | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			active: new FormControl<string | null | undefined>(undefined),
			connectionid: new FormControl<string | null | undefined>(undefined),
			connectionstring: new FormControl<string | null | undefined>(undefined),
			connectorcode: new FormControl<string | null | undefined>(undefined),
			connectorid: new FormControl<string | null | undefined>(undefined),
			connectorname: new FormControl<string | null | undefined>(undefined),
			connectortypename: new FormControl<string | null | undefined>(undefined),
			creationdate: new FormControl<Date | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			sessionid: new FormControl<string | null | undefined>(undefined),
			updatedate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Connector {
		code?: string | null;
		connectorid?: string | null;
		connectortypename?: string | null;
		name?: string | null;
		typeid?: string | null;
	}
	export interface ConnectorFormProperties {
		code: FormControl<string | null | undefined>,
		connectorid: FormControl<string | null | undefined>,
		connectortypename: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		typeid: FormControl<string | null | undefined>,
	}
	export function CreateConnectorFormGroup() {
		return new FormGroup<ConnectorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			connectorid: new FormControl<string | null | undefined>(undefined),
			connectortypename: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			typeid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contribution {
		pandl?: string | null;
		share?: string | null;
		symbol?: string | null;
	}
	export interface ContributionFormProperties {
		pandl: FormControl<string | null | undefined>,
		share: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateContributionFormGroup() {
		return new FormGroup<ContributionFormProperties>({
			pandl: new FormControl<string | null | undefined>(undefined),
			share: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DrawdownItem {
		drawdownpct?: string | null;
		timestamp?: string | null;
	}
	export interface DrawdownItemFormProperties {
		drawdownpct: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateDrawdownItemFormGroup() {
		return new FormGroup<DrawdownItemFormProperties>({
			drawdownpct: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EquityItem {
		cash?: string | null;
		equity?: string | null;
		timestamp?: string | null;
	}
	export interface EquityItemFormProperties {
		cash: FormControl<string | null | undefined>,
		equity: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEquityItemFormGroup() {
		return new FormGroup<EquityItemFormProperties>({
			cash: new FormControl<string | null | undefined>(undefined),
			equity: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EquityPctItem {
		buyandhold?: string | null;
		equity?: string | null;
		timestamp?: string | null;
	}
	export interface EquityPctItemFormProperties {
		buyandhold: FormControl<string | null | undefined>,
		equity: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEquityPctItemFormGroup() {
		return new FormGroup<EquityPctItemFormProperties>({
			buyandhold: new FormControl<string | null | undefined>(undefined),
			equity: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EquityPctSmItem {
		buyandhold?: string | null;
		equity?: string | null;
		timestamp?: string | null;
	}
	export interface EquityPctSmItemFormProperties {
		buyandhold: FormControl<string | null | undefined>,
		equity: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEquityPctSmItemFormGroup() {
		return new FormGroup<EquityPctSmItemFormProperties>({
			buyandhold: new FormControl<string | null | undefined>(undefined),
			equity: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {
		message?: string | null;
		status?: number | null;
	}
	export interface ErrorFormProperties {
		message: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Longentry {
		id?: string | null;
		name?: string | null;
		parameters?: Array<Parameter>;
		validnot?: string | null;
		validor?: string | null;
	}
	export interface LongentryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		validnot: FormControl<string | null | undefined>,
		validor: FormControl<string | null | undefined>,
	}
	export function CreateLongentryFormGroup() {
		return new FormGroup<LongentryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			validnot: new FormControl<string | null | undefined>(undefined),
			validor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Parameter {
		default?: string | null;
		name?: string | null;
		start?: string | null;
		step?: string | null;
		stop?: string | null;
		type?: string | null;
	}
	export interface ParameterFormProperties {
		default: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		start: FormControl<string | null | undefined>,
		step: FormControl<string | null | undefined>,
		stop: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			default: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
			step: new FormControl<string | null | undefined>(undefined),
			stop: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Longexit {
		id?: string | null;
		name?: string | null;
		parameters?: Array<Parameter>;
		validnot?: string | null;
		validor?: string | null;
	}
	export interface LongexitFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		validnot: FormControl<string | null | undefined>,
		validor: FormControl<string | null | undefined>,
	}
	export function CreateLongexitFormGroup() {
		return new FormGroup<LongexitFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			validnot: new FormControl<string | null | undefined>(undefined),
			validor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Longshort {
		apr?: string | null;
		avgbarsheld?: string | null;
		avgloss?: string | null;
		avglossbarsheld?: string | null;
		avglosspct?: string | null;
		avgprofit?: string | null;
		avgprofitavgloss?: string | null;
		avgprofitbarsheld?: string | null;
		avgprofitpct?: string | null;
		endcapital?: string | null;
		exposure?: string | null;
		grossloss?: string | null;
		grossprofit?: string | null;
		losingtrades?: string | null;
		losingtradespct?: string | null;
		mar?: string | null;
		margininterest?: string | null;
		maxconsecloss?: string | null;
		maxconsecwin?: string | null;
		maxdrawdown?: string | null;
		maxdrawdowndate?: string | null;
		maxdrawdownlength?: string | null;
		maxdrawdownpct?: string | null;
		maxdrawdownpctdate?: string | null;
		mpr?: string | null;
		netprofit?: string | null;
		netprofitpct?: string | null;
		profitabletrades?: string | null;
		profitabletradespct?: string | null;
		profitfactor?: string | null;
		profitriskratio?: string | null;
		rar?: string | null;
		recoveryfactor?: string | null;
		sharperatio?: string | null;
		sortinoratio?: string | null;
		startcapital?: string | null;
		totalcommission?: string | null;
		totaltrades?: string | null;
		totalvolume?: string | null;
		turnover?: string | null;
	}
	export interface LongshortFormProperties {
		apr: FormControl<string | null | undefined>,
		avgbarsheld: FormControl<string | null | undefined>,
		avgloss: FormControl<string | null | undefined>,
		avglossbarsheld: FormControl<string | null | undefined>,
		avglosspct: FormControl<string | null | undefined>,
		avgprofit: FormControl<string | null | undefined>,
		avgprofitavgloss: FormControl<string | null | undefined>,
		avgprofitbarsheld: FormControl<string | null | undefined>,
		avgprofitpct: FormControl<string | null | undefined>,
		endcapital: FormControl<string | null | undefined>,
		exposure: FormControl<string | null | undefined>,
		grossloss: FormControl<string | null | undefined>,
		grossprofit: FormControl<string | null | undefined>,
		losingtrades: FormControl<string | null | undefined>,
		losingtradespct: FormControl<string | null | undefined>,
		mar: FormControl<string | null | undefined>,
		margininterest: FormControl<string | null | undefined>,
		maxconsecloss: FormControl<string | null | undefined>,
		maxconsecwin: FormControl<string | null | undefined>,
		maxdrawdown: FormControl<string | null | undefined>,
		maxdrawdowndate: FormControl<string | null | undefined>,
		maxdrawdownlength: FormControl<string | null | undefined>,
		maxdrawdownpct: FormControl<string | null | undefined>,
		maxdrawdownpctdate: FormControl<string | null | undefined>,
		mpr: FormControl<string | null | undefined>,
		netprofit: FormControl<string | null | undefined>,
		netprofitpct: FormControl<string | null | undefined>,
		profitabletrades: FormControl<string | null | undefined>,
		profitabletradespct: FormControl<string | null | undefined>,
		profitfactor: FormControl<string | null | undefined>,
		profitriskratio: FormControl<string | null | undefined>,
		rar: FormControl<string | null | undefined>,
		recoveryfactor: FormControl<string | null | undefined>,
		sharperatio: FormControl<string | null | undefined>,
		sortinoratio: FormControl<string | null | undefined>,
		startcapital: FormControl<string | null | undefined>,
		totalcommission: FormControl<string | null | undefined>,
		totaltrades: FormControl<string | null | undefined>,
		totalvolume: FormControl<string | null | undefined>,
		turnover: FormControl<string | null | undefined>,
	}
	export function CreateLongshortFormGroup() {
		return new FormGroup<LongshortFormProperties>({
			apr: new FormControl<string | null | undefined>(undefined),
			avgbarsheld: new FormControl<string | null | undefined>(undefined),
			avgloss: new FormControl<string | null | undefined>(undefined),
			avglossbarsheld: new FormControl<string | null | undefined>(undefined),
			avglosspct: new FormControl<string | null | undefined>(undefined),
			avgprofit: new FormControl<string | null | undefined>(undefined),
			avgprofitavgloss: new FormControl<string | null | undefined>(undefined),
			avgprofitbarsheld: new FormControl<string | null | undefined>(undefined),
			avgprofitpct: new FormControl<string | null | undefined>(undefined),
			endcapital: new FormControl<string | null | undefined>(undefined),
			exposure: new FormControl<string | null | undefined>(undefined),
			grossloss: new FormControl<string | null | undefined>(undefined),
			grossprofit: new FormControl<string | null | undefined>(undefined),
			losingtrades: new FormControl<string | null | undefined>(undefined),
			losingtradespct: new FormControl<string | null | undefined>(undefined),
			mar: new FormControl<string | null | undefined>(undefined),
			margininterest: new FormControl<string | null | undefined>(undefined),
			maxconsecloss: new FormControl<string | null | undefined>(undefined),
			maxconsecwin: new FormControl<string | null | undefined>(undefined),
			maxdrawdown: new FormControl<string | null | undefined>(undefined),
			maxdrawdowndate: new FormControl<string | null | undefined>(undefined),
			maxdrawdownlength: new FormControl<string | null | undefined>(undefined),
			maxdrawdownpct: new FormControl<string | null | undefined>(undefined),
			maxdrawdownpctdate: new FormControl<string | null | undefined>(undefined),
			mpr: new FormControl<string | null | undefined>(undefined),
			netprofit: new FormControl<string | null | undefined>(undefined),
			netprofitpct: new FormControl<string | null | undefined>(undefined),
			profitabletrades: new FormControl<string | null | undefined>(undefined),
			profitabletradespct: new FormControl<string | null | undefined>(undefined),
			profitfactor: new FormControl<string | null | undefined>(undefined),
			profitriskratio: new FormControl<string | null | undefined>(undefined),
			rar: new FormControl<string | null | undefined>(undefined),
			recoveryfactor: new FormControl<string | null | undefined>(undefined),
			sharperatio: new FormControl<string | null | undefined>(undefined),
			sortinoratio: new FormControl<string | null | undefined>(undefined),
			startcapital: new FormControl<string | null | undefined>(undefined),
			totalcommission: new FormControl<string | null | undefined>(undefined),
			totaltrades: new FormControl<string | null | undefined>(undefined),
			totalvolume: new FormControl<string | null | undefined>(undefined),
			turnover: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Market {
		code?: string | null;
		countryid?: string | null;
		marketid?: string | null;
		name?: string | null;
	}
	export interface MarketFormProperties {
		code: FormControl<string | null | undefined>,
		countryid: FormControl<string | null | undefined>,
		marketid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateMarketFormGroup() {
		return new FormGroup<MarketFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			countryid: new FormControl<string | null | undefined>(undefined),
			marketid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewOrder {
		buy?: string | null;
		price?: string | null;
		shares?: string | null;
		symbol?: string | null;
		type?: string | null;
	}
	export interface NewOrderFormProperties {
		buy: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		shares: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateNewOrderFormGroup() {
		return new FormGroup<NewOrderFormProperties>({
			buy: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			shares: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewSignal {
		position?: string | null;
		price?: string | null;
		shares?: string | null;
		size?: string | null;
		symbol?: string | null;
		timestamp?: Date | null;
		type?: string | null;
	}
	export interface NewSignalFormProperties {
		position: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		shares: FormControl<string | null | undefined>,
		size: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateNewSignalFormGroup() {
		return new FormGroup<NewSignalFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			shares: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewStrategy {
		apr?: string | null;
		author?: string | null;
		content?: string | null;
		description?: string | null;
		drawdown?: string | null;
		guid?: string | null;
		limitorder?: string | null;
		marketname?: string | null;
		multiposition?: string | null;
		name?: string | null;
		positionsize?: string | null;
		strategytypeid?: string | null;
		symbols?: string | null;
		timeframe?: string | null;
	}
	export interface NewStrategyFormProperties {
		apr: FormControl<string | null | undefined>,
		author: FormControl<string | null | undefined>,
		content: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		drawdown: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		limitorder: FormControl<string | null | undefined>,
		marketname: FormControl<string | null | undefined>,
		multiposition: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		positionsize: FormControl<string | null | undefined>,
		strategytypeid: FormControl<string | null | undefined>,
		symbols: FormControl<string | null | undefined>,
		timeframe: FormControl<string | null | undefined>,
	}
	export function CreateNewStrategyFormGroup() {
		return new FormGroup<NewStrategyFormProperties>({
			apr: new FormControl<string | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			drawdown: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			limitorder: new FormControl<string | null | undefined>(undefined),
			marketname: new FormControl<string | null | undefined>(undefined),
			multiposition: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			positionsize: new FormControl<string | null | undefined>(undefined),
			strategytypeid: new FormControl<string | null | undefined>(undefined),
			symbols: new FormControl<string | null | undefined>(undefined),
			timeframe: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewTask {
		isbenchmark?: string | null;
		strategyid?: string | null;
		tasktypeid?: string | null;
		userid2?: string | null;
	}
	export interface NewTaskFormProperties {
		isbenchmark: FormControl<string | null | undefined>,
		strategyid: FormControl<string | null | undefined>,
		tasktypeid: FormControl<string | null | undefined>,
		userid2: FormControl<string | null | undefined>,
	}
	export function CreateNewTaskFormGroup() {
		return new FormGroup<NewTaskFormProperties>({
			isbenchmark: new FormControl<string | null | undefined>(undefined),
			strategyid: new FormControl<string | null | undefined>(undefined),
			tasktypeid: new FormControl<string | null | undefined>(undefined),
			userid2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewUser {
		name?: string | null;
		password?: string | null;
		username?: string | null;
	}
	export interface NewUserFormProperties {
		name: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateNewUserFormGroup() {
		return new FormGroup<NewUserFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface News {
		body?: string | null;
		newsid?: string | null;
		source?: string | null;
		timestamp?: Date | null;
		title?: string | null;
	}
	export interface NewsFormProperties {
		body: FormControl<string | null | undefined>,
		newsid: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateNewsFormGroup() {
		return new FormGroup<NewsFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			newsid: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Order {
		account?: string | null;
		buy?: string | null;
		message?: string | null;
		number?: string | null;
		orderid?: string | null;
		price?: string | null;
		shares?: string | null;
		status?: string | null;
		statusname?: string | null;
		symbol?: string | null;
		timestamp?: Date | null;
	}
	export interface OrderFormProperties {
		account: FormControl<string | null | undefined>,
		buy: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
		orderid: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		shares: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		statusname: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			buy: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			orderid: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			shares: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			statusname: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Result {
		c?: number | null;
		h?: number | null;
		l?: number | null;
		n?: number | null;
		o?: number | null;
		t?: number | null;
		v?: number | null;
	}
	export interface ResultFormProperties {
		c: FormControl<number | null | undefined>,
		h: FormControl<number | null | undefined>,
		l: FormControl<number | null | undefined>,
		n: FormControl<number | null | undefined>,
		o: FormControl<number | null | undefined>,
		t: FormControl<number | null | undefined>,
		v: FormControl<number | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			c: new FormControl<number | null | undefined>(undefined),
			h: new FormControl<number | null | undefined>(undefined),
			l: new FormControl<number | null | undefined>(undefined),
			n: new FormControl<number | null | undefined>(undefined),
			o: new FormControl<number | null | undefined>(undefined),
			t: new FormControl<number | null | undefined>(undefined),
			v: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Rule {
		category?: string | null;
		description?: string | null;
		guid?: string | null;
		name?: string | null;
		parameters?: Array<Parameter>;
		ruletype?: string | null;
		validnot?: string | null;
		validor?: string | null;
	}
	export interface RuleFormProperties {
		category: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ruletype: FormControl<string | null | undefined>,
		validnot: FormControl<string | null | undefined>,
		validor: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ruletype: new FormControl<string | null | undefined>(undefined),
			validnot: new FormControl<string | null | undefined>(undefined),
			validor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Rules {
		longentry?: Array<Longentry>;
		longexit?: Array<Longexit>;
	}
	export interface RulesFormProperties {
	}
	export function CreateRulesFormGroup() {
		return new FormGroup<RulesFormProperties>({
		});

	}

	export interface Session {
		computer?: string | null;
		hwid?: string | null;
		login?: string | null;
		mode?: string | null;
		sessionid?: string | null;
		sessionmodename?: string | null;
		sessionstatusname?: string | null;
		status?: string | null;
		timestamp?: Date | null;
		type?: string | null;
		userid?: string | null;
	}
	export interface SessionFormProperties {
		computer: FormControl<string | null | undefined>,
		hwid: FormControl<string | null | undefined>,
		login: FormControl<string | null | undefined>,
		mode: FormControl<string | null | undefined>,
		sessionid: FormControl<string | null | undefined>,
		sessionmodename: FormControl<string | null | undefined>,
		sessionstatusname: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		type: FormControl<string | null | undefined>,
		userid: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			computer: new FormControl<string | null | undefined>(undefined),
			hwid: new FormControl<string | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			sessionid: new FormControl<string | null | undefined>(undefined),
			sessionmodename: new FormControl<string | null | undefined>(undefined),
			sessionstatusname: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			userid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Signal {
		position?: string | null;
		price?: string | null;
		shares?: string | null;
		signalid?: string | null;
		size?: string | null;
		symbol?: string | null;
		timestamp?: Date | null;
		type?: string | null;
	}
	export interface SignalFormProperties {
		position: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		shares: FormControl<string | null | undefined>,
		signalid: FormControl<string | null | undefined>,
		size: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateSignalFormGroup() {
		return new FormGroup<SignalFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			shares: new FormControl<string | null | undefined>(undefined),
			signalid: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Snapshot {
		cash?: string | null;
		daynum?: string | null;
		snapshotid?: string | null;
		timestamp?: Date | null;
		value?: string | null;
	}
	export interface SnapshotFormProperties {
		cash: FormControl<string | null | undefined>,
		daynum: FormControl<string | null | undefined>,
		snapshotid: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			cash: new FormControl<string | null | undefined>(undefined),
			daynum: new FormControl<string | null | undefined>(undefined),
			snapshotid: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartStrategyData {
		accountid?: string | null;
		strategyid?: string | null;
	}
	export interface StartStrategyDataFormProperties {
		accountid: FormControl<string | null | undefined>,
		strategyid: FormControl<string | null | undefined>,
	}
	export function CreateStartStrategyDataFormGroup() {
		return new FormGroup<StartStrategyDataFormProperties>({
			accountid: new FormControl<string | null | undefined>(undefined),
			strategyid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Strategy {
		apr?: string | null;
		author?: string | null;
		brokername?: string | null;
		code?: string | null;
		datascale?: string | null;
		description?: string | null;
		drawdown?: string | null;
		folder?: string | null;
		guid?: string | null;
		image?: string | null;
		limitorder?: string | null;
		marketname?: string | null;
		multiposition?: string | null;
		name?: string | null;
		owner?: string | null;
		permissions?: string | null;
		positionsize?: string | null;
		risklevelcode?: string | null;
		risklevelid?: string | null;
		risklevelname?: string | null;
		rules?: Rules;
		strategyid?: string | null;
		strategytypeid?: string | null;
		symbols?: Array<string>;
		taskfolder?: string | null;
		taskid?: string | null;
		taskresult?: Taskresult;
		timeframe?: string | null;
		updatedate?: Date | null;
		url?: string | null;
	}
	export interface StrategyFormProperties {
		apr: FormControl<string | null | undefined>,
		author: FormControl<string | null | undefined>,
		brokername: FormControl<string | null | undefined>,
		code: FormControl<string | null | undefined>,
		datascale: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		drawdown: FormControl<string | null | undefined>,
		folder: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,
		limitorder: FormControl<string | null | undefined>,
		marketname: FormControl<string | null | undefined>,
		multiposition: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		permissions: FormControl<string | null | undefined>,
		positionsize: FormControl<string | null | undefined>,
		risklevelcode: FormControl<string | null | undefined>,
		risklevelid: FormControl<string | null | undefined>,
		risklevelname: FormControl<string | null | undefined>,
		strategyid: FormControl<string | null | undefined>,
		strategytypeid: FormControl<string | null | undefined>,
		taskfolder: FormControl<string | null | undefined>,
		taskid: FormControl<string | null | undefined>,
		timeframe: FormControl<string | null | undefined>,
		updatedate: FormControl<Date | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateStrategyFormGroup() {
		return new FormGroup<StrategyFormProperties>({
			apr: new FormControl<string | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			brokername: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			datascale: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			drawdown: new FormControl<string | null | undefined>(undefined),
			folder: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			limitorder: new FormControl<string | null | undefined>(undefined),
			marketname: new FormControl<string | null | undefined>(undefined),
			multiposition: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			permissions: new FormControl<string | null | undefined>(undefined),
			positionsize: new FormControl<string | null | undefined>(undefined),
			risklevelcode: new FormControl<string | null | undefined>(undefined),
			risklevelid: new FormControl<string | null | undefined>(undefined),
			risklevelname: new FormControl<string | null | undefined>(undefined),
			strategyid: new FormControl<string | null | undefined>(undefined),
			strategytypeid: new FormControl<string | null | undefined>(undefined),
			taskfolder: new FormControl<string | null | undefined>(undefined),
			taskid: new FormControl<string | null | undefined>(undefined),
			timeframe: new FormControl<string | null | undefined>(undefined),
			updatedate: new FormControl<Date | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Taskresult {
		apr?: string | null;
		curMonthProfit?: string | null;
		curYearProfit?: string | null;
		drawdown?: string | null;
		halfYearProfit?: string | null;
		monthProfit?: string | null;
		prevMonthProfit?: string | null;
		totalProfit?: string | null;
		weekProfit?: string | null;
		yearProfit?: string | null;
	}
	export interface TaskresultFormProperties {
		apr: FormControl<string | null | undefined>,
		curMonthProfit: FormControl<string | null | undefined>,
		curYearProfit: FormControl<string | null | undefined>,
		drawdown: FormControl<string | null | undefined>,
		halfYearProfit: FormControl<string | null | undefined>,
		monthProfit: FormControl<string | null | undefined>,
		prevMonthProfit: FormControl<string | null | undefined>,
		totalProfit: FormControl<string | null | undefined>,
		weekProfit: FormControl<string | null | undefined>,
		yearProfit: FormControl<string | null | undefined>,
	}
	export function CreateTaskresultFormGroup() {
		return new FormGroup<TaskresultFormProperties>({
			apr: new FormControl<string | null | undefined>(undefined),
			curMonthProfit: new FormControl<string | null | undefined>(undefined),
			curYearProfit: new FormControl<string | null | undefined>(undefined),
			drawdown: new FormControl<string | null | undefined>(undefined),
			halfYearProfit: new FormControl<string | null | undefined>(undefined),
			monthProfit: new FormControl<string | null | undefined>(undefined),
			prevMonthProfit: new FormControl<string | null | undefined>(undefined),
			totalProfit: new FormControl<string | null | undefined>(undefined),
			weekProfit: new FormControl<string | null | undefined>(undefined),
			yearProfit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StrategyPosition {
		date?: Date | null;
		price?: string | null;
		size?: string | null;
		symbol?: string | null;
	}
	export interface StrategyPositionFormProperties {
		date: FormControl<Date | null | undefined>,
		price: FormControl<string | null | undefined>,
		size: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
	}
	export function CreateStrategyPositionFormGroup() {
		return new FormGroup<StrategyPositionFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Task_ {
		isbenchmark?: string | null;
		name?: string | null;
		status?: string | null;
		statusupdatedate?: Date | null;
		strategyid?: string | null;
		taskid?: string | null;
		usestaticdata?: string | null;
	}
	export interface Task_FormProperties {
		isbenchmark: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		statusupdatedate: FormControl<Date | null | undefined>,
		strategyid: FormControl<string | null | undefined>,
		taskid: FormControl<string | null | undefined>,
		usestaticdata: FormControl<string | null | undefined>,
	}
	export function CreateTask_FormGroup() {
		return new FormGroup<Task_FormProperties>({
			isbenchmark: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			statusupdatedate: new FormControl<Date | null | undefined>(undefined),
			strategyid: new FormControl<string | null | undefined>(undefined),
			taskid: new FormControl<string | null | undefined>(undefined),
			usestaticdata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Trade {
		account?: string | null;
		buy?: string | null;
		number?: string | null;
		price?: string | null;
		shares?: string | null;
		symbol?: string | null;
		timestamp?: Date | null;
		tradeid?: string | null;
	}
	export interface TradeFormProperties {
		account: FormControl<string | null | undefined>,
		buy: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
		price: FormControl<string | null | undefined>,
		shares: FormControl<string | null | undefined>,
		symbol: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		tradeid: FormControl<string | null | undefined>,
	}
	export function CreateTradeFormGroup() {
		return new FormGroup<TradeFormProperties>({
			account: new FormControl<string | null | undefined>(undefined),
			buy: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			shares: new FormControl<string | null | undefined>(undefined),
			symbol: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			tradeid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatedConnection {
		active?: string | null;
		connectorid?: string | null;
		host?: string | null;
		login?: string | null;
		password?: string | null;
		port?: string | null;
	}
	export interface UpdatedConnectionFormProperties {
		active: FormControl<string | null | undefined>,
		connectorid: FormControl<string | null | undefined>,
		host: FormControl<string | null | undefined>,
		login: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		port: FormControl<string | null | undefined>,
	}
	export function CreateUpdatedConnectionFormGroup() {
		return new FormGroup<UpdatedConnectionFormProperties>({
			active: new FormControl<string | null | undefined>(undefined),
			connectorid: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatedStrategy {
		author?: string | null;
		description?: string | null;
		limitorder?: string | null;
		marketname?: string | null;
		multiposition?: string | null;
		name?: string | null;
		symbols?: string | null;
	}
	export interface UpdatedStrategyFormProperties {
		author: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		limitorder: FormControl<string | null | undefined>,
		marketname: FormControl<string | null | undefined>,
		multiposition: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		symbols: FormControl<string | null | undefined>,
	}
	export function CreateUpdatedStrategyFormGroup() {
		return new FormGroup<UpdatedStrategyFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			limitorder: new FormControl<string | null | undefined>(undefined),
			marketname: new FormControl<string | null | undefined>(undefined),
			multiposition: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			symbols: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatedStrategyContent {
		rules?: Rules;
	}
	export interface UpdatedStrategyContentFormProperties {
	}
	export function CreateUpdatedStrategyContentFormGroup() {
		return new FormGroup<UpdatedStrategyContentFormProperties>({
		});

	}

	export interface User {
		comments?: string | null;
		createdby?: string | null;
		name?: string | null;
		regdate?: string | null;
		userid?: string | null;
		username?: string | null;
	}
	export interface UserFormProperties {
		comments: FormControl<string | null | undefined>,
		createdby: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		regdate: FormControl<string | null | undefined>,
		userid: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			comments: new FormControl<string | null | undefined>(undefined),
			createdby: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			regdate: new FormControl<string | null | undefined>(undefined),
			userid: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get autofollow strategies list
		 * Get autofollow strategies list
		 * Get autofollow/strategies
		 * @return {Array<Strategy>} Successful operation
		 */
		AutofollowStrategiesGet(headersHandler?: () => HttpHeaders): Observable<Array<Strategy>> {
			return this.http.get<Array<Strategy>>(this.baseUri + 'autofollow/strategies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create new autofollow strategy
		 * Create new autofollow strategy
		 * Post autofollow/strategies
		 * @return {AutofollowStrategiesPostReturn} Successful operation
		 */
		AutofollowStrategiesPost(requestBody: AutofollowStrategiesPostPostBody, headersHandler?: () => HttpHeaders): Observable<AutofollowStrategiesPostReturn> {
			return this.http.post<AutofollowStrategiesPostReturn>(this.baseUri + 'autofollow/strategies', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get autofollow strategy by ID
		 * Get autofollow strategy by ID
		 * Get autofollow/strategies/{strategyid}
		 * @return {Strategy} Successful operation
		 */
		AutofollowStrategies_strategyidGet(strategyid: number, headersHandler?: () => HttpHeaders): Observable<Strategy> {
			return this.http.get<Strategy>(this.baseUri + 'autofollow/strategies/' + strategyid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update autofollow strategy
		 * Update autofollow strategy
		 * Put autofollow/strategies/{strategyid}
		 * @return {AutofollowStrategies_strategyidPutReturn} Successful operation
		 */
		AutofollowStrategies_strategyidPut(strategyid: number, requestBody: AutofollowStrategies_strategyidPutPutBody, headersHandler?: () => HttpHeaders): Observable<AutofollowStrategies_strategyidPutReturn> {
			return this.http.put<AutofollowStrategies_strategyidPutReturn>(this.baseUri + 'autofollow/strategies/' + strategyid, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update rules for strategy that was created with strategy builder
		 * Update rules for strategy that was created with strategy builder
		 * Put autofollow/strategies/{strategyid}/content
		 * @return {AutofollowStrategies_strategyidContentPutReturn} Successful operation
		 */
		AutofollowStrategies_strategyidContentPut(strategyid: number, requestBody: AutofollowStrategies_strategyidContentPutPutBody, headersHandler?: () => HttpHeaders): Observable<AutofollowStrategies_strategyidContentPutReturn> {
			return this.http.put<AutofollowStrategies_strategyidContentPutReturn>(this.baseUri + 'autofollow/strategies/' + strategyid + '/content', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get positions for strategy
		 * Get positions for strategy
		 * Get autofollow/strategies/{strategyid}/positions
		 * @return {Array<StrategyPosition>} Successful operation
		 */
		AutofollowStrategies_strategyidPositionsGet(strategyid: number, headersHandler?: () => HttpHeaders): Observable<Array<StrategyPosition>> {
			return this.http.get<Array<StrategyPosition>>(this.baseUri + 'autofollow/strategies/' + strategyid + '/positions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get trading signals for strategy
		 * Get trading signals for strategy
		 * Get autofollow/strategies/{strategyid}/signals
		 * @return {Array<Signal>} Successful operation
		 */
		AutofollowStrategies_strategyidSignalsGetByCount(strategyid: number, count: number, headersHandler?: () => HttpHeaders): Observable<Array<Signal>> {
			return this.http.get<Array<Signal>>(this.baseUri + 'autofollow/strategies/' + strategyid + '/signals?count=' + count, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Send a new signal for autofollow strategy
		 * Send a new signal for autofollow strategy
		 * Post autofollow/strategies/{strategyid}/signals
		 * @return {AutofollowStrategies_strategyidSignalsPostReturn} Successful operation
		 */
		AutofollowStrategies_strategyidSignalsPost(strategyid: number, requestBody: AutofollowStrategies_strategyidSignalsPostPostBody, headersHandler?: () => HttpHeaders): Observable<AutofollowStrategies_strategyidSignalsPostReturn> {
			return this.http.post<AutofollowStrategies_strategyidSignalsPostReturn>(this.baseUri + 'autofollow/strategies/' + strategyid + '/signals', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get strategy builder rules list
		 * Get strategy builder rules list
		 * Get builder/rules
		 * @return {Array<Rule>} Successful operation
		 */
		BuilderRulesGet(headersHandler?: () => HttpHeaders): Observable<Array<Rule>> {
			return this.http.get<Array<Rule>>(this.baseUri + 'builder/rules', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get strategy builder rules by ID
		 * Get strategy builder rules by ID
		 * Get builder/rules/{ruleid}
		 * @return {Array<Rule>} Successful operation
		 */
		BuilderRules_ruleidGet(ruleid: number, headersHandler?: () => HttpHeaders): Observable<Array<Rule>> {
			return this.http.get<Array<Rule>>(this.baseUri + 'builder/rules/' + ruleid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get API keys
		 * Get API keys
		 * Get client/apikeys
		 * @return {Array<APIKey>} Successful operation
		 */
		ClientApikeysGet(headersHandler?: () => HttpHeaders): Observable<Array<APIKey>> {
			return this.http.get<Array<APIKey>>(this.baseUri + 'client/apikeys', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create new API key
		 * Create new API key
		 * Post client/apikeys
		 * @return {ClientApikeysPostReturn} Successful operation
		 */
		ClientApikeysPost(headersHandler?: () => HttpHeaders): Observable<ClientApikeysPostReturn> {
			return this.http.post<ClientApikeysPostReturn>(this.baseUri + 'client/apikeys', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete API key
		 * Delete API key
		 * Delete client/apikeys/{keyid}
		 * @return {ClientApikeys_keyidDeleteReturn} Successful operation
		 */
		ClientApikeys_keyidDelete(keyid: number, headersHandler?: () => HttpHeaders): Observable<ClientApikeys_keyidDeleteReturn> {
			return this.http.delete<ClientApikeys_keyidDeleteReturn>(this.baseUri + 'client/apikeys/' + keyid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get users list
		 * Get users list
		 * Get client/users
		 * @return {Array<User>} Successful operation
		 */
		ClientUsersGet(headersHandler?: () => HttpHeaders): Observable<Array<User>> {
			return this.http.get<Array<User>>(this.baseUri + 'client/users', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Logs user into the system
		 * Logs user into the system
		 * Post client/users/login
		 * @return {ClientUsersLoginPostReturn} Successful operation
		 */
		ClientUsersLoginPost(headersHandler?: () => HttpHeaders): Observable<ClientUsersLoginPostReturn> {
			return this.http.post<ClientUsersLoginPostReturn>(this.baseUri + 'client/users/login', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Register a new user
		 * Register a new user
		 * Post client/users/register
		 * @return {ClientUsersRegisterPostReturn} Successful operation
		 */
		ClientUsersRegisterPost(requestBody: ClientUsersRegisterPostPostBody, headersHandler?: () => HttpHeaders): Observable<ClientUsersRegisterPostReturn> {
			return this.http.post<ClientUsersRegisterPostReturn>(this.baseUri + 'client/users/register', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get user by ID
		 * Get user by ID
		 * Get client/users/{userid}
		 * @return {User} Successful operation
		 */
		ClientUsers_useridGet(userid: number, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'client/users/' + userid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get trading accounts list
		 * Get trading accounts list
		 * Get cloud/accounts
		 * @return {Array<Account>} Successful operation
		 */
		CloudAccountsGet(headersHandler?: () => HttpHeaders): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'cloud/accounts', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get trading account by ID
		 * Get trading account by ID
		 * Get cloud/accounts/{accountid}
		 * @return {Account} Successful operation
		 */
		CloudAccounts_accountidGet(accountid: number, headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'cloud/accounts/' + accountid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Close all positions by account
		 * Close all positions by account
		 * Post cloud/accounts/{accountid}/closeall
		 * @return {void} 
		 */
		CloudAccounts_accountidCloseallPost(accountid: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cloud/accounts/' + accountid + '/closeall', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get orders list by account
		 * Get orders list by account
		 * Get cloud/accounts/{accountid}/orders
		 * @return {Array<Order>} Successful operation
		 */
		CloudAccounts_accountidOrdersGet(accountid: number, headersHandler?: () => HttpHeaders): Observable<Array<Order>> {
			return this.http.get<Array<Order>>(this.baseUri + 'cloud/accounts/' + accountid + '/orders', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Place a new order
		 * Place a new order
		 * Post cloud/accounts/{accountid}/orders
		 * @return {void} 
		 */
		CloudAccounts_accountidOrdersPost(accountid: number, requestBody: CloudAccounts_accountidOrdersPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cloud/accounts/' + accountid + '/orders', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel an order by ID
		 * Cancel an order by ID
		 * Delete cloud/accounts/{accountid}/orders/{orderid}
		 * @return {void} 
		 */
		CloudAccounts_accountidOrders_orderidDelete(accountid: number, orderid: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'cloud/accounts/' + accountid + '/orders/' + orderid, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get account equity and cash snapshots
		 * Get account equity and cash snapshots
		 * Get cloud/accounts/{accountid}/snapshots
		 * @return {Array<Snapshot>} Successful operation
		 */
		CloudAccounts_accountidSnapshotsGet(accountid: number, headersHandler?: () => HttpHeaders): Observable<Array<Snapshot>> {
			return this.http.get<Array<Snapshot>>(this.baseUri + 'cloud/accounts/' + accountid + '/snapshots', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Syhchronize an account with account active strategies
		 * Syhchronize an account with account active strategies
		 * Post cloud/accounts/{accountid}/sync
		 * @return {void} 
		 */
		CloudAccounts_accountidSyncPost(accountid: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cloud/accounts/' + accountid + '/sync', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get trades list by account
		 * Get trades list by account
		 * Get cloud/accounts/{accountid}/trades
		 * @return {Array<Trade>} Successful operation
		 */
		CloudAccounts_accountidTradesGet(accountid: number, headersHandler?: () => HttpHeaders): Observable<Array<Trade>> {
			return this.http.get<Array<Trade>>(this.baseUri + 'cloud/accounts/' + accountid + '/trades', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get commands list
		 * Get commands list
		 * Get cloud/commands
		 * @return {Array<Command>} Successful operation
		 */
		CloudCommandsGet(headersHandler?: () => HttpHeaders): Observable<Array<Command>> {
			return this.http.get<Array<Command>>(this.baseUri + 'cloud/commands', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get command by ID
		 * Get command by ID
		 * Get cloud/commands/{commandid}
		 * @return {Command} Successful operation
		 */
		CloudCommands_commandidGet(commandid: number, headersHandler?: () => HttpHeaders): Observable<Command> {
			return this.http.get<Command>(this.baseUri + 'cloud/commands/' + commandid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get connections list
		 * Get connections list
		 * Get cloud/connections
		 * @return {Array<Connection>} Successful operation
		 */
		CloudConnectionsGet(headersHandler?: () => HttpHeaders): Observable<Array<Connection>> {
			return this.http.get<Array<Connection>>(this.baseUri + 'cloud/connections', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new connection
		 * Create a new connection
		 * Post cloud/connections
		 * @return {CloudConnectionsPostReturn} Successful operation
		 */
		CloudConnectionsPost(requestBody: CloudConnectionsPostPostBody, headersHandler?: () => HttpHeaders): Observable<CloudConnectionsPostReturn> {
			return this.http.post<CloudConnectionsPostReturn>(this.baseUri + 'cloud/connections', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get connection by ID
		 * Get connection by ID
		 * Get cloud/connections/{connectionid}
		 * @return {Connection} Successful operation
		 */
		CloudConnections_connectionidGet(connectionid: number, headersHandler?: () => HttpHeaders): Observable<Connection> {
			return this.http.get<Connection>(this.baseUri + 'cloud/connections/' + connectionid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update existing connection
		 * Update existing connection
		 * Put cloud/connections/{connectionid}
		 * @return {CloudConnections_connectionidPutReturn} Successful operation
		 */
		CloudConnections_connectionidPut(connectionid: number, requestBody: CloudConnections_connectionidPutPutBody, headersHandler?: () => HttpHeaders): Observable<CloudConnections_connectionidPutReturn> {
			return this.http.put<CloudConnections_connectionidPutReturn>(this.baseUri + 'cloud/connections/' + connectionid, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete connection by ID
		 * Delete connection by ID
		 * Delete cloud/connections/{connectionid}
		 * @return {CloudConnections_connectionidDeleteReturn} Successful operation
		 */
		CloudConnections_connectionidDelete(connectionid: number, headersHandler?: () => HttpHeaders): Observable<CloudConnections_connectionidDeleteReturn> {
			return this.http.delete<CloudConnections_connectionidDeleteReturn>(this.baseUri + 'cloud/connections/' + connectionid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get available connectors list
		 * Get available connectors list
		 * Get cloud/connectors
		 * @return {Array<Connector>} Successful operation
		 */
		CloudConnectorsGet(headersHandler?: () => HttpHeaders): Observable<Array<Connector>> {
			return this.http.get<Array<Connector>>(this.baseUri + 'cloud/connectors', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get connector by ID
		 * Get connector by ID
		 * Get cloud/connectors/{connectorid}
		 * @return {Connector} Successful operation
		 */
		CloudConnectors_connectoridGet(connectorid: number, headersHandler?: () => HttpHeaders): Observable<Connector> {
			return this.http.get<Connector>(this.baseUri + 'cloud/connectors/' + connectorid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get sessions list
		 * Get sessions list
		 * Get cloud/sessions
		 * @return {Array<Session>} Successful operation
		 */
		CloudSessionsGet(headersHandler?: () => HttpHeaders): Observable<Array<Session>> {
			return this.http.get<Array<Session>>(this.baseUri + 'cloud/sessions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get session by ID
		 * Get session by ID
		 * Get cloud/sessions/{sessionid}
		 * @return {Session} Successful operation
		 */
		CloudSessions_sessionidGet(sessionid: number, headersHandler?: () => HttpHeaders): Observable<Session> {
			return this.http.get<Session>(this.baseUri + 'cloud/sessions/' + sessionid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of active (executing) strategies
		 * Get list of active (executing) strategies
		 * Get cloud/strategies
		 * @return {Array<CloudStrategy>} Successful operation
		 */
		CloudStrategiesGet(headersHandler?: () => HttpHeaders): Observable<Array<CloudStrategy>> {
			return this.http.get<Array<CloudStrategy>>(this.baseUri + 'cloud/strategies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Start a strategy execution for account
		 * Start a strategy execution for account
		 * Post cloud/strategies/start
		 * @return {void} 
		 */
		CloudStrategiesStartPost(requestBody: CloudStrategiesStartPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cloud/strategies/start', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get active (executing) strategy by ID
		 * Get active (executing) strategy by ID
		 * Get cloud/strategies/{strategyid}
		 * @return {Array<CloudStrategy>} Successful operation
		 */
		CloudStrategies_strategyidGet(strategyid: number, headersHandler?: () => HttpHeaders): Observable<Array<CloudStrategy>> {
			return this.http.get<Array<CloudStrategy>>(this.baseUri + 'cloud/strategies/' + strategyid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Stop a strategy execution by ID
		 * Stop a strategy execution by ID
		 * Post cloud/strategies/{strategyid}/stop
		 * @return {void} 
		 */
		CloudStrategies_strategyidStopPost(strategyid: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cloud/strategies/' + strategyid + '/stop', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get markets list
		 * Get markets list
		 * Get marketdata/markets
		 * @return {Array<Market>} Successful operation
		 */
		MarketdataMarketsGet(headersHandler?: () => HttpHeaders): Observable<Array<Market>> {
			return this.http.get<Array<Market>>(this.baseUri + 'marketdata/markets', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get market by ID
		 * Get market by ID
		 * Get marketdata/markets/{marketid}
		 * @return {Market} Successful operation
		 */
		MarketdataMarkets_marketidGet(marketid: number, headersHandler?: () => HttpHeaders): Observable<Market> {
			return this.http.get<Market>(this.baseUri + 'marketdata/markets/' + marketid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get symbols list
		 * Get symbols list
		 * Get marketdata/symbols
		 * @return {Array<string>} Successful operation
		 */
		MarketdataSymbolsGetByMarketidAndFilter(marketid: number, filter: number, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'marketdata/symbols?marketid=' + marketid + '&filter=' + filter, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get symbol by ID
		 * Get symbol by ID
		 * Get marketdata/symbols/{symbolid}
		 * @return {string} Successful operation
		 */
		MarketdataSymbols_symbolidGet(symbolid: number, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'marketdata/symbols/' + symbolid, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get historical data for instrument
		 * Get historical data for instrument
		 * Get marketdata/symbols/{symbolid}/histdata
		 * @return {MarketdataSymbols_symbolidHistdataGetByTfAndFromAndToReturn} Successful operation
		 */
		MarketdataSymbols_symbolidHistdataGetByTfAndFromAndTo(symbolid: number, tf: number, from: number, to: number, headersHandler?: () => HttpHeaders): Observable<MarketdataSymbols_symbolidHistdataGetByTfAndFromAndToReturn> {
			return this.http.get<MarketdataSymbols_symbolidHistdataGetByTfAndFromAndToReturn>(this.baseUri + 'marketdata/symbols/' + symbolid + '/histdata?tf=' + tf + '&from=' + from + '&to=' + to, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get news list
		 * Get news list
		 * Get news/news
		 * @return {Array<News>} Successful operation
		 */
		NewsNewsGet(headersHandler?: () => HttpHeaders): Observable<Array<News>> {
			return this.http.get<Array<News>>(this.baseUri + 'news/news', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get news by ID
		 * Get news by ID
		 * Get news/news/{newsid}
		 * @return {News} Successful operation
		 */
		NewsNews_newsidGet(newsid: number, headersHandler?: () => HttpHeaders): Observable<News> {
			return this.http.get<News>(this.baseUri + 'news/news/' + newsid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Ping
		 * Ping
		 * Get ping
		 * @return {string} Successful operation
		 */
		PingGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'ping', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get tasks list
		 * Get tasks list
		 * Get taskmanager/tasks
		 * @return {Array<Task_>} Successful operation
		 */
		TaskmanagerTasksGet(headersHandler?: () => HttpHeaders): Observable<Array<Task_>> {
			return this.http.get<Array<Task_>>(this.baseUri + 'taskmanager/tasks', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a new task
		 * Create a new task
		 * Post taskmanager/tasks
		 * @return {void} 
		 */
		TaskmanagerTasksPost(requestBody: TaskmanagerTasksPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'taskmanager/tasks', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get task by ID
		 * Get task by ID
		 * Get taskmanager/tasks/{taskid}
		 * @return {Task_} Successful operation
		 */
		TaskmanagerTasks_taskidGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<Task_> {
			return this.http.get<Task_>(this.baseUri + 'taskmanager/tasks/' + taskid, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get backtest data for equity chart, grouped by months
		 * Get backtest data for equity chart, grouped by months
		 * Get taskmanager/tasks/{taskid}/bymonths
		 * @return {Array<ByMonths>} Successful operation
		 */
		TaskmanagerTasks_taskidBymonthsGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<Array<ByMonths>> {
			return this.http.get<Array<ByMonths>>(this.baseUri + 'taskmanager/tasks/' + taskid + '/bymonths', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get backtest data for equity chart, grouped by quarters
		 * Get backtest data for equity chart, grouped by quarters
		 * Get taskmanager/tasks/{taskid}/byquarters
		 * @return {Array<ByQuarters>} Successful operation
		 */
		TaskmanagerTasks_taskidByquartersGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<Array<ByQuarters>> {
			return this.http.get<Array<ByQuarters>>(this.baseUri + 'taskmanager/tasks/' + taskid + '/byquarters', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get backtest data for equity chart, grouped by years
		 * Get backtest data for equity chart, grouped by years
		 * Get taskmanager/tasks/{taskid}/byyears
		 * @return {Array<ByYears>} Successful operation
		 */
		TaskmanagerTasks_taskidByyearsGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<Array<ByYears>> {
			return this.http.get<Array<ByYears>>(this.baseUri + 'taskmanager/tasks/' + taskid + '/byyears', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get backtest symbol contribution data
		 * Get backtest symbol contribution data
		 * Get taskmanager/tasks/{taskid}/contribution
		 * @return {Array<Contribution>} Successful operation
		 */
		TaskmanagerTasks_taskidContributionGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<Array<Contribution>> {
			return this.http.get<Array<Contribution>>(this.baseUri + 'taskmanager/tasks/' + taskid + '/contribution', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get data for drawdown chart
		 * Get data for drawdown chart
		 * Get taskmanager/tasks/{taskid}/drawdown
		 * @return {Array<DrawdownItem>} Successful operation
		 */
		TaskmanagerTasks_taskidDrawdownGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<Array<DrawdownItem>> {
			return this.http.get<Array<DrawdownItem>>(this.baseUri + 'taskmanager/tasks/' + taskid + '/drawdown', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get data for equity chart
		 * Get data for equity chart
		 * Get taskmanager/tasks/{taskid}/equity
		 * @return {Array<EquityItem>} Successful operation
		 */
		TaskmanagerTasks_taskidEquityGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<Array<EquityItem>> {
			return this.http.get<Array<EquityItem>>(this.baseUri + 'taskmanager/tasks/' + taskid + '/equity', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get data for equity chart (%)
		 * Get data for equity chart (%)
		 * Get taskmanager/tasks/{taskid}/equitypct
		 * @return {Array<EquityPctItem>} Successful operation
		 */
		TaskmanagerTasks_taskidEquitypctGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<Array<EquityPctItem>> {
			return this.http.get<Array<EquityPctItem>>(this.baseUri + 'taskmanager/tasks/' + taskid + '/equitypct', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get spared data for equity chart (%)
		 * Get spared data for equity chart (%)
		 * Get taskmanager/tasks/{taskid}/equitypctsm
		 * @return {Array<EquityPctSmItem>} Successful operation
		 */
		TaskmanagerTasks_taskidEquitypctsmGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<Array<EquityPctSmItem>> {
			return this.http.get<Array<EquityPctSmItem>>(this.baseUri + 'taskmanager/tasks/' + taskid + '/equitypctsm', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get task result folder name
		 * Get task result folder name
		 * Get taskmanager/tasks/{taskid}/folder
		 * @return {TaskmanagerTasks_taskidFolderGetReturn} Successful operation
		 */
		TaskmanagerTasks_taskidFolderGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<TaskmanagerTasks_taskidFolderGetReturn> {
			return this.http.get<TaskmanagerTasks_taskidFolderGetReturn>(this.baseUri + 'taskmanager/tasks/' + taskid + '/folder', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get backtest statistics
		 * Get backtest statistics
		 * Get taskmanager/tasks/{taskid}/performance
		 * @return {TaskmanagerTasks_taskidPerformanceGetReturn} Successful operation
		 */
		TaskmanagerTasks_taskidPerformanceGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<TaskmanagerTasks_taskidPerformanceGetReturn> {
			return this.http.get<TaskmanagerTasks_taskidPerformanceGetReturn>(this.baseUri + 'taskmanager/tasks/' + taskid + '/performance', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get task result
		 * Get task result
		 * Get taskmanager/tasks/{taskid}/result
		 * @return {TaskmanagerTasks_taskidResultGetReturn} Successful operation
		 */
		TaskmanagerTasks_taskidResultGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<TaskmanagerTasks_taskidResultGetReturn> {
			return this.http.get<TaskmanagerTasks_taskidResultGetReturn>(this.baseUri + 'taskmanager/tasks/' + taskid + '/result', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get task result (version 2)
		 * Get task result (version 2)
		 * Get taskmanager/tasks/{taskid}/result2
		 * @return {TaskmanagerTasks_taskidResult2GetReturn} Successful operation
		 */
		TaskmanagerTasks_taskidResult2Get(taskid: number, headersHandler?: () => HttpHeaders): Observable<TaskmanagerTasks_taskidResult2GetReturn> {
			return this.http.get<TaskmanagerTasks_taskidResult2GetReturn>(this.baseUri + 'taskmanager/tasks/' + taskid + '/result2', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get task status
		 * Get task status
		 * Get taskmanager/tasks/{taskid}/status
		 * @return {TaskmanagerTasks_taskidStatusGetReturn} Successful operation
		 */
		TaskmanagerTasks_taskidStatusGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<TaskmanagerTasks_taskidStatusGetReturn> {
			return this.http.get<TaskmanagerTasks_taskidStatusGetReturn>(this.baseUri + 'taskmanager/tasks/' + taskid + '/status', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get backtest trades list
		 * Get backtest trades list
		 * Get taskmanager/tasks/{taskid}/trades
		 * @return {Array<BacktestTrade>} Successful operation
		 */
		TaskmanagerTasks_taskidTradesGet(taskid: number, headersHandler?: () => HttpHeaders): Observable<Array<BacktestTrade>> {
			return this.http.get<Array<BacktestTrade>>(this.baseUri + 'taskmanager/tasks/' + taskid + '/trades', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get current server time
		 * Get current server time
		 * Get time
		 * @return {TimeGetReturn} Successful operation
		 */
		TimeGet(headersHandler?: () => HttpHeaders): Observable<TimeGetReturn> {
			return this.http.get<TimeGetReturn>(this.baseUri + 'time', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface AutofollowStrategiesPostPostBody {
		strategy?: NewStrategy;
	}
	export interface AutofollowStrategiesPostPostBodyFormProperties {
	}
	export function CreateAutofollowStrategiesPostPostBodyFormGroup() {
		return new FormGroup<AutofollowStrategiesPostPostBodyFormProperties>({
		});

	}

	export interface AutofollowStrategiesPostReturn {
		strategyid?: number | null;
	}
	export interface AutofollowStrategiesPostReturnFormProperties {
		strategyid: FormControl<number | null | undefined>,
	}
	export function CreateAutofollowStrategiesPostReturnFormGroup() {
		return new FormGroup<AutofollowStrategiesPostReturnFormProperties>({
			strategyid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AutofollowStrategies_strategyidPutPutBody {
		strategy?: UpdatedStrategy;
	}
	export interface AutofollowStrategies_strategyidPutPutBodyFormProperties {
	}
	export function CreateAutofollowStrategies_strategyidPutPutBodyFormGroup() {
		return new FormGroup<AutofollowStrategies_strategyidPutPutBodyFormProperties>({
		});

	}

	export interface AutofollowStrategies_strategyidPutReturn {
		result?: string | null;
	}
	export interface AutofollowStrategies_strategyidPutReturnFormProperties {
		result: FormControl<string | null | undefined>,
	}
	export function CreateAutofollowStrategies_strategyidPutReturnFormGroup() {
		return new FormGroup<AutofollowStrategies_strategyidPutReturnFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutofollowStrategies_strategyidContentPutPutBody {
		strategy?: UpdatedStrategyContent;
	}
	export interface AutofollowStrategies_strategyidContentPutPutBodyFormProperties {
	}
	export function CreateAutofollowStrategies_strategyidContentPutPutBodyFormGroup() {
		return new FormGroup<AutofollowStrategies_strategyidContentPutPutBodyFormProperties>({
		});

	}

	export interface AutofollowStrategies_strategyidContentPutReturn {
		strategyid?: string | null;
	}
	export interface AutofollowStrategies_strategyidContentPutReturnFormProperties {
		strategyid: FormControl<string | null | undefined>,
	}
	export function CreateAutofollowStrategies_strategyidContentPutReturnFormGroup() {
		return new FormGroup<AutofollowStrategies_strategyidContentPutReturnFormProperties>({
			strategyid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutofollowStrategies_strategyidSignalsPostPostBody {
		signal?: NewSignal;
	}
	export interface AutofollowStrategies_strategyidSignalsPostPostBodyFormProperties {
	}
	export function CreateAutofollowStrategies_strategyidSignalsPostPostBodyFormGroup() {
		return new FormGroup<AutofollowStrategies_strategyidSignalsPostPostBodyFormProperties>({
		});

	}

	export interface AutofollowStrategies_strategyidSignalsPostReturn {
		signalid?: string | null;
	}
	export interface AutofollowStrategies_strategyidSignalsPostReturnFormProperties {
		signalid: FormControl<string | null | undefined>,
	}
	export function CreateAutofollowStrategies_strategyidSignalsPostReturnFormGroup() {
		return new FormGroup<AutofollowStrategies_strategyidSignalsPostReturnFormProperties>({
			signalid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientApikeysPostReturn {
		key?: string | null;
		keyid?: number | null;
	}
	export interface ClientApikeysPostReturnFormProperties {
		key: FormControl<string | null | undefined>,
		keyid: FormControl<number | null | undefined>,
	}
	export function CreateClientApikeysPostReturnFormGroup() {
		return new FormGroup<ClientApikeysPostReturnFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			keyid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClientApikeys_keyidDeleteReturn {
		keyid?: number | null;
	}
	export interface ClientApikeys_keyidDeleteReturnFormProperties {
		keyid: FormControl<number | null | undefined>,
	}
	export function CreateClientApikeys_keyidDeleteReturnFormGroup() {
		return new FormGroup<ClientApikeys_keyidDeleteReturnFormProperties>({
			keyid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClientUsersLoginPostReturn {
		name?: string | null;
		userid?: number | null;
	}
	export interface ClientUsersLoginPostReturnFormProperties {
		name: FormControl<string | null | undefined>,
		userid: FormControl<number | null | undefined>,
	}
	export function CreateClientUsersLoginPostReturnFormGroup() {
		return new FormGroup<ClientUsersLoginPostReturnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			userid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClientUsersRegisterPostPostBody {
		user?: NewUser;
	}
	export interface ClientUsersRegisterPostPostBodyFormProperties {
	}
	export function CreateClientUsersRegisterPostPostBodyFormGroup() {
		return new FormGroup<ClientUsersRegisterPostPostBodyFormProperties>({
		});

	}

	export interface ClientUsersRegisterPostReturn {
		userid?: number | null;
	}
	export interface ClientUsersRegisterPostReturnFormProperties {
		userid: FormControl<number | null | undefined>,
	}
	export function CreateClientUsersRegisterPostReturnFormGroup() {
		return new FormGroup<ClientUsersRegisterPostReturnFormProperties>({
			userid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CloudAccounts_accountidOrdersPostPostBody {
		order?: NewOrder;
	}
	export interface CloudAccounts_accountidOrdersPostPostBodyFormProperties {
	}
	export function CreateCloudAccounts_accountidOrdersPostPostBodyFormGroup() {
		return new FormGroup<CloudAccounts_accountidOrdersPostPostBodyFormProperties>({
		});

	}

	export interface CloudConnectionsPostPostBody {
		connection?: UpdatedConnection;
	}
	export interface CloudConnectionsPostPostBodyFormProperties {
	}
	export function CreateCloudConnectionsPostPostBodyFormGroup() {
		return new FormGroup<CloudConnectionsPostPostBodyFormProperties>({
		});

	}

	export interface CloudConnectionsPostReturn {
		connectionid?: number | null;
	}
	export interface CloudConnectionsPostReturnFormProperties {
		connectionid: FormControl<number | null | undefined>,
	}
	export function CreateCloudConnectionsPostReturnFormGroup() {
		return new FormGroup<CloudConnectionsPostReturnFormProperties>({
			connectionid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CloudConnections_connectionidPutPutBody {
		connection?: UpdatedConnection;
	}
	export interface CloudConnections_connectionidPutPutBodyFormProperties {
	}
	export function CreateCloudConnections_connectionidPutPutBodyFormGroup() {
		return new FormGroup<CloudConnections_connectionidPutPutBodyFormProperties>({
		});

	}

	export interface CloudConnections_connectionidPutReturn {
		connectionid?: number | null;
	}
	export interface CloudConnections_connectionidPutReturnFormProperties {
		connectionid: FormControl<number | null | undefined>,
	}
	export function CreateCloudConnections_connectionidPutReturnFormGroup() {
		return new FormGroup<CloudConnections_connectionidPutReturnFormProperties>({
			connectionid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CloudConnections_connectionidDeleteReturn {
		connectionid?: number | null;
	}
	export interface CloudConnections_connectionidDeleteReturnFormProperties {
		connectionid: FormControl<number | null | undefined>,
	}
	export function CreateCloudConnections_connectionidDeleteReturnFormGroup() {
		return new FormGroup<CloudConnections_connectionidDeleteReturnFormProperties>({
			connectionid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CloudStrategiesStartPostPostBody {
		data?: StartStrategyData;
	}
	export interface CloudStrategiesStartPostPostBodyFormProperties {
	}
	export function CreateCloudStrategiesStartPostPostBodyFormGroup() {
		return new FormGroup<CloudStrategiesStartPostPostBodyFormProperties>({
		});

	}

	export interface MarketdataSymbols_symbolidHistdataGetByTfAndFromAndToReturn {
		adjusted?: boolean | null;
		queryCount?: number | null;
		results?: Array<Result>;
		resultsCount?: number | null;
		status?: string | null;
		ticker?: string | null;
	}
	export interface MarketdataSymbols_symbolidHistdataGetByTfAndFromAndToReturnFormProperties {
		adjusted: FormControl<boolean | null | undefined>,
		queryCount: FormControl<number | null | undefined>,
		resultsCount: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
		ticker: FormControl<string | null | undefined>,
	}
	export function CreateMarketdataSymbols_symbolidHistdataGetByTfAndFromAndToReturnFormGroup() {
		return new FormGroup<MarketdataSymbols_symbolidHistdataGetByTfAndFromAndToReturnFormProperties>({
			adjusted: new FormControl<boolean | null | undefined>(undefined),
			queryCount: new FormControl<number | null | undefined>(undefined),
			resultsCount: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			ticker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskmanagerTasksPostPostBody {
		task?: NewTask;
	}
	export interface TaskmanagerTasksPostPostBodyFormProperties {
	}
	export function CreateTaskmanagerTasksPostPostBodyFormGroup() {
		return new FormGroup<TaskmanagerTasksPostPostBodyFormProperties>({
		});

	}

	export interface TaskmanagerTasks_taskidFolderGetReturn {
		folder?: string | null;
	}
	export interface TaskmanagerTasks_taskidFolderGetReturnFormProperties {
		folder: FormControl<string | null | undefined>,
	}
	export function CreateTaskmanagerTasks_taskidFolderGetReturnFormGroup() {
		return new FormGroup<TaskmanagerTasks_taskidFolderGetReturnFormProperties>({
			folder: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskmanagerTasks_taskidPerformanceGetReturn {
		buyandhold?: Longshort;
		long?: Longshort;
		longshort?: Longshort;
		short?: Longshort;
	}
	export interface TaskmanagerTasks_taskidPerformanceGetReturnFormProperties {
	}
	export function CreateTaskmanagerTasks_taskidPerformanceGetReturnFormGroup() {
		return new FormGroup<TaskmanagerTasks_taskidPerformanceGetReturnFormProperties>({
		});

	}

	export interface TaskmanagerTasks_taskidResultGetReturn {
		bymonths_csv?: string | null;
		bymonths_png?: string | null;
		byquarters_csv?: string | null;
		byquarters_png?: string | null;
		byyears_csv?: string | null;
		byyears_png?: string | null;
		contribution_csv?: string | null;
		contribution_png?: string | null;
		drawdown_csv?: string | null;
		drawdown_png?: string | null;
		equity_csv?: string | null;
		equity_png?: string | null;
		equitypct_csv?: string | null;
		equitypct_png?: string | null;
		equitypctnofill_csv?: string | null;
		equitypctnofill_png?: string | null;
		equitypctsm?: string | null;
		equitypctsm_csv?: string | null;
		equitypctsm_png?: string | null;
		performance_csv?: string | null;
		performance_png?: string | null;
		trades_csv?: string | null;
		trades_png?: string | null;
	}
	export interface TaskmanagerTasks_taskidResultGetReturnFormProperties {
		bymonths_csv: FormControl<string | null | undefined>,
		bymonths_png: FormControl<string | null | undefined>,
		byquarters_csv: FormControl<string | null | undefined>,
		byquarters_png: FormControl<string | null | undefined>,
		byyears_csv: FormControl<string | null | undefined>,
		byyears_png: FormControl<string | null | undefined>,
		contribution_csv: FormControl<string | null | undefined>,
		contribution_png: FormControl<string | null | undefined>,
		drawdown_csv: FormControl<string | null | undefined>,
		drawdown_png: FormControl<string | null | undefined>,
		equity_csv: FormControl<string | null | undefined>,
		equity_png: FormControl<string | null | undefined>,
		equitypct_csv: FormControl<string | null | undefined>,
		equitypct_png: FormControl<string | null | undefined>,
		equitypctnofill_csv: FormControl<string | null | undefined>,
		equitypctnofill_png: FormControl<string | null | undefined>,
		equitypctsm: FormControl<string | null | undefined>,
		equitypctsm_csv: FormControl<string | null | undefined>,
		equitypctsm_png: FormControl<string | null | undefined>,
		performance_csv: FormControl<string | null | undefined>,
		performance_png: FormControl<string | null | undefined>,
		trades_csv: FormControl<string | null | undefined>,
		trades_png: FormControl<string | null | undefined>,
	}
	export function CreateTaskmanagerTasks_taskidResultGetReturnFormGroup() {
		return new FormGroup<TaskmanagerTasks_taskidResultGetReturnFormProperties>({
			bymonths_csv: new FormControl<string | null | undefined>(undefined),
			bymonths_png: new FormControl<string | null | undefined>(undefined),
			byquarters_csv: new FormControl<string | null | undefined>(undefined),
			byquarters_png: new FormControl<string | null | undefined>(undefined),
			byyears_csv: new FormControl<string | null | undefined>(undefined),
			byyears_png: new FormControl<string | null | undefined>(undefined),
			contribution_csv: new FormControl<string | null | undefined>(undefined),
			contribution_png: new FormControl<string | null | undefined>(undefined),
			drawdown_csv: new FormControl<string | null | undefined>(undefined),
			drawdown_png: new FormControl<string | null | undefined>(undefined),
			equity_csv: new FormControl<string | null | undefined>(undefined),
			equity_png: new FormControl<string | null | undefined>(undefined),
			equitypct_csv: new FormControl<string | null | undefined>(undefined),
			equitypct_png: new FormControl<string | null | undefined>(undefined),
			equitypctnofill_csv: new FormControl<string | null | undefined>(undefined),
			equitypctnofill_png: new FormControl<string | null | undefined>(undefined),
			equitypctsm: new FormControl<string | null | undefined>(undefined),
			equitypctsm_csv: new FormControl<string | null | undefined>(undefined),
			equitypctsm_png: new FormControl<string | null | undefined>(undefined),
			performance_csv: new FormControl<string | null | undefined>(undefined),
			performance_png: new FormControl<string | null | undefined>(undefined),
			trades_csv: new FormControl<string | null | undefined>(undefined),
			trades_png: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskmanagerTasks_taskidResult2GetReturn {
		apr?: string | null;
		curMonthProfit?: string | null;
		curYearProfit?: string | null;
		drawdown?: string | null;
		halfYearProfit?: string | null;
		monthProfit?: string | null;
		prevMonthProfit?: string | null;
		totalProfit?: string | null;
		weekProfit?: string | null;
		yearProfit?: string | null;
	}
	export interface TaskmanagerTasks_taskidResult2GetReturnFormProperties {
		apr: FormControl<string | null | undefined>,
		curMonthProfit: FormControl<string | null | undefined>,
		curYearProfit: FormControl<string | null | undefined>,
		drawdown: FormControl<string | null | undefined>,
		halfYearProfit: FormControl<string | null | undefined>,
		monthProfit: FormControl<string | null | undefined>,
		prevMonthProfit: FormControl<string | null | undefined>,
		totalProfit: FormControl<string | null | undefined>,
		weekProfit: FormControl<string | null | undefined>,
		yearProfit: FormControl<string | null | undefined>,
	}
	export function CreateTaskmanagerTasks_taskidResult2GetReturnFormGroup() {
		return new FormGroup<TaskmanagerTasks_taskidResult2GetReturnFormProperties>({
			apr: new FormControl<string | null | undefined>(undefined),
			curMonthProfit: new FormControl<string | null | undefined>(undefined),
			curYearProfit: new FormControl<string | null | undefined>(undefined),
			drawdown: new FormControl<string | null | undefined>(undefined),
			halfYearProfit: new FormControl<string | null | undefined>(undefined),
			monthProfit: new FormControl<string | null | undefined>(undefined),
			prevMonthProfit: new FormControl<string | null | undefined>(undefined),
			totalProfit: new FormControl<string | null | undefined>(undefined),
			weekProfit: new FormControl<string | null | undefined>(undefined),
			yearProfit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskmanagerTasks_taskidStatusGetReturn {
		status?: string | null;
	}
	export interface TaskmanagerTasks_taskidStatusGetReturnFormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreateTaskmanagerTasks_taskidStatusGetReturnFormGroup() {
		return new FormGroup<TaskmanagerTasks_taskidStatusGetReturnFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimeGetReturn {
		servertime?: number | null;
	}
	export interface TimeGetReturnFormProperties {
		servertime: FormControl<number | null | undefined>,
	}
	export function CreateTimeGetReturnFormGroup() {
		return new FormGroup<TimeGetReturnFormProperties>({
			servertime: new FormControl<number | null | undefined>(undefined),
		});

	}

}

