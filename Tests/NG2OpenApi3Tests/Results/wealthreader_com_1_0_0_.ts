import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2 */
	export interface Accounts {

		/** Required */
		balances: AccountsBalances;

		/**
		 * Código IBAN sin espacios
		 * Required
		 */
		code: string;

		/** Required */
		currency: string;

		/** Required */
		name: string;

		/** Required */
		owners: Owner;

		/** Required */
		AccountsTransactions: Array<AccountsTransactions>;

		/** Required */
		uuid: string;
	}

	/** Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2 */
	export interface AccountsFormProperties {

		/**
		 * Código IBAN sin espacios
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Required */
		currency: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateAccountsFormGroup() {
		return new FormGroup<AccountsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountsBalances {
		available?: number | null;
		current?: number | null;
	}
	export interface AccountsBalancesFormProperties {
		available: FormControl<number | null | undefined>,
		current: FormControl<number | null | undefined>,
	}
	export function CreateAccountsBalancesFormGroup() {
		return new FormGroup<AccountsBalancesFormProperties>({
			available: new FormControl<number | null | undefined>(undefined),
			current: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AccountsTransactions {
		amount?: number | null;
		balance?: number | null;
		description?: string | null;
		operation_date?: Date | null;
		uuid?: string | null;
		value_date?: Date | null;
	}
	export interface AccountsTransactionsFormProperties {
		amount: FormControl<number | null | undefined>,
		balance: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		operation_date: FormControl<Date | null | undefined>,
		uuid: FormControl<string | null | undefined>,
		value_date: FormControl<Date | null | undefined>,
	}
	export function CreateAccountsTransactionsFormGroup() {
		return new FormGroup<AccountsTransactionsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			balance: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			operation_date: new FormControl<Date | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
			value_date: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Tarjetas de crédito, débito y prepago */
	export interface Cards {
		anual_interest?: number | null;

		/** Required */
		balances: CardsBalances;

		/**
		 * Numeración con ofuscación PCI compliance
		 * Required
		 */
		code: string;

		/** Required */
		currency: string;
		linked_account?: string | null;

		/** Required */
		name: string;
		next_payment_date?: Date | null;
		owner?: Owner;
		status?: CardsStatus | null;

		/** Required */
		subtype: CardsSubtype;
		tae?: number | null;
		transactions?: Array<string>;

		/** Required */
		uuid: string;
	}

	/** Tarjetas de crédito, débito y prepago */
	export interface CardsFormProperties {
		anual_interest: FormControl<number | null | undefined>,

		/**
		 * Numeración con ofuscación PCI compliance
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Required */
		currency: FormControl<string | null | undefined>,
		linked_account: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		next_payment_date: FormControl<Date | null | undefined>,
		status: FormControl<CardsStatus | null | undefined>,

		/** Required */
		subtype: FormControl<CardsSubtype | null | undefined>,
		tae: FormControl<number | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateCardsFormGroup() {
		return new FormGroup<CardsFormProperties>({
			anual_interest: new FormControl<number | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linked_account: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			next_payment_date: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<CardsStatus | null | undefined>(undefined),
			subtype: new FormControl<CardsSubtype | null | undefined>(undefined, [Validators.required]),
			tae: new FormControl<number | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CardsBalances {
		available?: number | null;
		disposed?: number | null;
		limit?: number | null;
	}
	export interface CardsBalancesFormProperties {
		available: FormControl<number | null | undefined>,
		disposed: FormControl<number | null | undefined>,
		limit: FormControl<number | null | undefined>,
	}
	export function CreateCardsBalancesFormGroup() {
		return new FormGroup<CardsBalancesFormProperties>({
			available: new FormControl<number | null | undefined>(undefined),
			disposed: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CardsStatus { active = 'active', inactive = 'inactive', cancelled = 'cancelled' }

	export enum CardsSubtype { credit = 'credit', debit = 'debit', prepaid = 'prepaid' }


	/** Solamente estará informado cuando el valor de code sea 2020 (usuario multicontrato) */
	export interface Contracts {

		/**
		 * Identificador único del contrato. Valor a indicar para seleccionar el contrato al que se desea acceder
		 * Required
		 */
		contract_id: string;

		/**
		 * Descripción que acompaña al contract_id. Normalmente será el nombre de la sociedad o persona titular del contrato
		 * Required
		 */
		description: string;
	}

	/** Solamente estará informado cuando el valor de code sea 2020 (usuario multicontrato) */
	export interface ContractsFormProperties {

		/**
		 * Identificador único del contrato. Valor a indicar para seleccionar el contrato al que se desea acceder
		 * Required
		 */
		contract_id: FormControl<string | null | undefined>,

		/**
		 * Descripción que acompaña al contract_id. Normalmente será el nombre de la sociedad o persona titular del contrato
		 * Required
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateContractsFormGroup() {
		return new FormGroup<ContractsFormProperties>({
			contract_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Entities {

		/** Código BIC. Solamente está indicado cuando la entidad es un banco */
		bic?: string | null;

		/**
		 * El código de la institución
		 * Required
		 */
		code: string;

		/** Required */
		inputs: EntitiesInputs;

		/**
		 * Logotipo
		 * Required
		 */
		logo: string;

		/**
		 * The nombre de la institución
		 * Required
		 */
		name: string;
		statistics?: Statistics;
	}
	export interface EntitiesFormProperties {

		/** Código BIC. Solamente está indicado cuando la entidad es un banco */
		bic: FormControl<string | null | undefined>,

		/**
		 * El código de la institución
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Logotipo
		 * Required
		 */
		logo: FormControl<string | null | undefined>,

		/**
		 * The nombre de la institución
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEntitiesFormGroup() {
		return new FormGroup<EntitiesFormProperties>({
			bic: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EntitiesInputs {
		document_type?: EntitiesInputsDocument_type;
		password?: EntitiesInputsPassword;
		second_password?: EntitiesInputsSecond_password;
		user?: EntitiesInputsUser;
	}
	export interface EntitiesInputsFormProperties {
	}
	export function CreateEntitiesInputsFormGroup() {
		return new FormGroup<EntitiesInputsFormProperties>({
		});

	}

	export interface EntitiesInputsDocument_type {

		/** Nombre del campo. Al ser el campo 'tipo de documento' un listado de valores desplegables, este string es un listado de valores separados por punto y coma */
		name?: string | null;

		/** Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información */
		placeholder?: string | null;

		/** Indica si el campo es requerido */
		required?: boolean | null;

		/** Indica el tipo de dato que acepta este campo */
		validation_rule?: string | null;
	}
	export interface EntitiesInputsDocument_typeFormProperties {

		/** Nombre del campo. Al ser el campo 'tipo de documento' un listado de valores desplegables, este string es un listado de valores separados por punto y coma */
		name: FormControl<string | null | undefined>,

		/** Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información */
		placeholder: FormControl<string | null | undefined>,

		/** Indica si el campo es requerido */
		required: FormControl<boolean | null | undefined>,

		/** Indica el tipo de dato que acepta este campo */
		validation_rule: FormControl<string | null | undefined>,
	}
	export function CreateEntitiesInputsDocument_typeFormGroup() {
		return new FormGroup<EntitiesInputsDocument_typeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			placeholder: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			validation_rule: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntitiesInputsPassword {

		/** Nombre del campo */
		name?: string | null;

		/** Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información */
		placeholder?: string | null;

		/** Indica si el campo es requerido */
		required?: boolean | null;

		/** Indica el tipo de dato que acepta este campo */
		validation_rule?: string | null;
	}
	export interface EntitiesInputsPasswordFormProperties {

		/** Nombre del campo */
		name: FormControl<string | null | undefined>,

		/** Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información */
		placeholder: FormControl<string | null | undefined>,

		/** Indica si el campo es requerido */
		required: FormControl<boolean | null | undefined>,

		/** Indica el tipo de dato que acepta este campo */
		validation_rule: FormControl<string | null | undefined>,
	}
	export function CreateEntitiesInputsPasswordFormGroup() {
		return new FormGroup<EntitiesInputsPasswordFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			placeholder: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			validation_rule: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntitiesInputsSecond_password {

		/** Indica el tipo de dato que acepta este campo */
		name?: string | null;

		/** Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información */
		placeholder?: string | null;

		/** Indica si el campo es requerido */
		required?: boolean | null;

		/** The validation rule for the field */
		validation_rule?: string | null;
	}
	export interface EntitiesInputsSecond_passwordFormProperties {

		/** Indica el tipo de dato que acepta este campo */
		name: FormControl<string | null | undefined>,

		/** Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información */
		placeholder: FormControl<string | null | undefined>,

		/** Indica si el campo es requerido */
		required: FormControl<boolean | null | undefined>,

		/** The validation rule for the field */
		validation_rule: FormControl<string | null | undefined>,
	}
	export function CreateEntitiesInputsSecond_passwordFormGroup() {
		return new FormGroup<EntitiesInputsSecond_passwordFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			placeholder: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			validation_rule: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntitiesInputsUser {

		/** Nombre del campo */
		name?: string | null;

		/** Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información */
		placeholder?: string | null;

		/** Indica si el campo es requerido */
		required?: boolean | null;

		/** Indica el tipo de dato que acepta este campo */
		validation_rule?: string | null;
	}
	export interface EntitiesInputsUserFormProperties {

		/** Nombre del campo */
		name: FormControl<string | null | undefined>,

		/** Etiqueta dentro del campo que aporta información adicional sobre cómo rellenar la información */
		placeholder: FormControl<string | null | undefined>,

		/** Indica si el campo es requerido */
		required: FormControl<boolean | null | undefined>,

		/** Indica el tipo de dato que acepta este campo */
		validation_rule: FormControl<string | null | undefined>,
	}
	export function CreateEntitiesInputsUserFormGroup() {
		return new FormGroup<EntitiesInputsUserFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			placeholder: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			validation_rule: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Statistics {

		/**
		 * Guarda siempre este valor, tanto si la conexión es correcta como si no. Es necesario para obtener soporte
		 * Required
		 */
		SESSION: string;

		/**
		 * Duración de la ejecución
		 * Required
		 */
		execution_time: number;

		/** El valor vendrá indicado cuando se haya invocado a la API a través del Widget que proporciona Wealth Reader. Para saber más sobre este tipo de integración, visita: https://docs-es.wealthreader.com/ */
		operation_id?: string | null;

		/** El valor vendrá indicado cuando se ha pedido la custodia de credenciales con la opción tokenize=true */
		token?: string | null;
	}
	export interface StatisticsFormProperties {

		/**
		 * Guarda siempre este valor, tanto si la conexión es correcta como si no. Es necesario para obtener soporte
		 * Required
		 */
		SESSION: FormControl<string | null | undefined>,

		/**
		 * Duración de la ejecución
		 * Required
		 */
		execution_time: FormControl<number | null | undefined>,

		/** El valor vendrá indicado cuando se haya invocado a la API a través del Widget que proporciona Wealth Reader. Para saber más sobre este tipo de integración, visita: https://docs-es.wealthreader.com/ */
		operation_id: FormControl<string | null | undefined>,

		/** El valor vendrá indicado cuando se ha pedido la custodia de credenciales con la opción tokenize=true */
		token: FormControl<string | null | undefined>,
	}
	export function CreateStatisticsFormGroup() {
		return new FormGroup<StatisticsFormProperties>({
			SESSION: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			execution_time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			operation_id: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Entity_data {
		payload?: Entity_dataPayload;

		/** Required */
		statistics: Statistics;

		/** Required */
		success: boolean;
	}
	export interface Entity_dataFormProperties {

		/** Required */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateEntity_dataFormGroup() {
		return new FormGroup<Entity_dataFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Entity_dataPayload {

		/** Cuentas bancarias. En cuentas europeas, solamente activado cuando el cliente de Wealth Reader cuenta con licencia PSD2 */
		accounts?: Array<string>;

		/** Tarjetas de crédito, débito y prepago */
		cards?: Array<string>;

		/** Carteras de acciones, fondos y planes de pensiones */
		portfolios?: Array<string>;

		/** Activos inmobiliarios */
		properties?: Properties;

		/** Información relativa a la persona que hace login */
		user_information?: User_information;
	}
	export interface Entity_dataPayloadFormProperties {
	}
	export function CreateEntity_dataPayloadFormGroup() {
		return new FormGroup<Entity_dataPayloadFormProperties>({
		});

	}


	/** Activos inmobiliarios */
	export interface Properties {

		/**
		 * Referencia catastral
		 * Required
		 */
		code: string;

		/** Required */
		currency: string;
		description?: string | null;

		/** Required */
		PropertiesHistoric_prices: Array<PropertiesHistoric_prices>;
		purpose?: string | null;

		/** Required */
		trading_price: number;

		/** Required */
		trading_year: number;

		/** Required */
		uuid: string;
	}

	/** Activos inmobiliarios */
	export interface PropertiesFormProperties {

		/**
		 * Referencia catastral
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Required */
		currency: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		purpose: FormControl<string | null | undefined>,

		/** Required */
		trading_price: FormControl<number | null | undefined>,

		/** Required */
		trading_year: FormControl<number | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreatePropertiesFormGroup() {
		return new FormGroup<PropertiesFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			purpose: new FormControl<string | null | undefined>(undefined),
			trading_price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trading_year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PropertiesHistoric_prices {
		date?: Date | null;
		price?: number | null;
	}
	export interface PropertiesHistoric_pricesFormProperties {
		date: FormControl<Date | null | undefined>,
		price: FormControl<number | null | undefined>,
	}
	export function CreatePropertiesHistoric_pricesFormGroup() {
		return new FormGroup<PropertiesHistoric_pricesFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Información relativa a la persona que hace login */
	export interface User_information {

		/** Required */
		ID: string;
		address?: string | null;
		birth_date?: Date | null;
		birth_place?: string | null;

		/** Número de teléfono con el prefijo internacional, sin espacios */
		cell_phone?: string | null;
		city?: string | null;
		country?: string | null;
		email?: string | null;
		gender?: User_informationGender | null;

		/** El valor aquí es muy variable de una entidad a otra: de indicar solamente si es cuenta propia o cuenta ajena a indicar el tipo de profesión */
		job?: string | null;
		marital_status?: User_informationMarital_status | null;

		/** Required */
		name: string;
		postal_code?: string | null;
	}

	/** Información relativa a la persona que hace login */
	export interface User_informationFormProperties {

		/** Required */
		ID: FormControl<string | null | undefined>,
		address: FormControl<string | null | undefined>,
		birth_date: FormControl<Date | null | undefined>,
		birth_place: FormControl<string | null | undefined>,

		/** Número de teléfono con el prefijo internacional, sin espacios */
		cell_phone: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		gender: FormControl<User_informationGender | null | undefined>,

		/** El valor aquí es muy variable de una entidad a otra: de indicar solamente si es cuenta propia o cuenta ajena a indicar el tipo de profesión */
		job: FormControl<string | null | undefined>,
		marital_status: FormControl<User_informationMarital_status | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		postal_code: FormControl<string | null | undefined>,
	}
	export function CreateUser_informationFormGroup() {
		return new FormGroup<User_informationFormProperties>({
			ID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address: new FormControl<string | null | undefined>(undefined),
			birth_date: new FormControl<Date | null | undefined>(undefined),
			birth_place: new FormControl<string | null | undefined>(undefined),
			cell_phone: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<User_informationGender | null | undefined>(undefined),
			job: new FormControl<string | null | undefined>(undefined),
			marital_status: new FormControl<User_informationMarital_status | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			postal_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum User_informationGender { male = 'male', female = 'female' }

	export enum User_informationMarital_status { single = 'single', married = 'married' }

	export interface Error {

		/** Required */
		error: Error_detail;

		/** Required */
		statistics: Statistics;

		/** Required */
		success: boolean;
	}
	export interface ErrorFormProperties {

		/** Required */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error_detail {

		/**
		 * El código indica la familia del error. Por ejemplo, de 2000 a 2999 indican problemas en el login. Cada código de error debe tratarse de forma diferente. Por ejemplo, si el código indica "Login incorrecto", no se debe reintentar la llamada; si el código indica "entidad en mantenimiento" sí se puede reintentar más tarde. Puedes obtener el listado completo en el método error-codes.
		 * Required
		 */
		code: string;

		/** Solamente estará informado cuando el valor de code sea 2020 (usuario multicontrato) */
		contracts?: Array<string>;

		/**
		 * Texto en el idioma de la entidad. Es seguro mostrárselo al usuario y en muchos casos le ayudará a corregir el error
		 * Required
		 */
		message: string;
	}
	export interface Error_detailFormProperties {

		/**
		 * El código indica la familia del error. Por ejemplo, de 2000 a 2999 indican problemas en el login. Cada código de error debe tratarse de forma diferente. Por ejemplo, si el código indica "Login incorrecto", no se debe reintentar la llamada; si el código indica "entidad en mantenimiento" sí se puede reintentar más tarde. Puedes obtener el listado completo en el método error-codes.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Texto en el idioma de la entidad. Es seguro mostrárselo al usuario y en muchos casos le ayudará a corregir el error
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateError_detailFormGroup() {
		return new FormGroup<Error_detailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error_codes {

		/** Código de error */
		code?: number | null;

		/** Descripción del error */
		description?: string | null;

		/** Cómo actuar cuando se obtiene este código de error */
		how_to_proceed?: string | null;

		/** Posibles causas del error */
		possible_reasons?: string | null;
	}
	export interface Error_codesFormProperties {

		/** Código de error */
		code: FormControl<number | null | undefined>,

		/** Descripción del error */
		description: FormControl<string | null | undefined>,

		/** Cómo actuar cuando se obtiene este código de error */
		how_to_proceed: FormControl<string | null | undefined>,

		/** Posibles causas del error */
		possible_reasons: FormControl<string | null | undefined>,
	}
	export function CreateError_codesFormGroup() {
		return new FormGroup<Error_codesFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			how_to_proceed: new FormControl<string | null | undefined>(undefined),
			possible_reasons: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Owner {

		/** Required */
		ID: string;

		/** Required */
		name: string;

		/** Required */
		role: OwnerRole;
	}
	export interface OwnerFormProperties {

		/** Required */
		ID: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		role: FormControl<OwnerRole | null | undefined>,
	}
	export function CreateOwnerFormGroup() {
		return new FormGroup<OwnerFormProperties>({
			ID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<OwnerRole | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum OwnerRole { owner = 'owner', 'co-owner' = 'co-owner', 'legal representative' = 'legal representative', administrator = 'administrator', 'attorney-in-fact' = 'attorney-in-fact', authorised = 'authorised' }


	/** Carteras de acciones, fondos y planes de pensiones */
	export interface Portfolios {

		/**
		 * El valor será 0 cuando la entidad no lo proporcione
		 * Required
		 */
		annualized_volatility: number;

		/** Required */
		code: string;

		/**
		 * Composición de la cartera
		 * Required
		 */
		composition: Array<string>;

		/** Required */
		contracting_date: Date;

		/** Required */
		contributions: number;

		/** Required */
		currency: string;

		/**
		 * Código IBAN sin espacios. El valor será not-provided cuando la entidad no lo proporcione
		 * Required
		 */
		linked_account: string;

		/** Required */
		name: string;

		/** Required */
		owners: Owner;

		/** Required */
		subtype: PortfoliosSubtype;

		/** Required */
		total_value: number;

		/** Required */
		transactions: Array<string>;

		/**
		 * Identificador único asignado por Wealth Reader
		 * Required
		 */
		uuid: string;

		/** Required */
		weighted_return: number;

		/** Required */
		withholdings: number;

		/** Required */
		yield: number;
	}

	/** Carteras de acciones, fondos y planes de pensiones */
	export interface PortfoliosFormProperties {

		/**
		 * El valor será 0 cuando la entidad no lo proporcione
		 * Required
		 */
		annualized_volatility: FormControl<number | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		contracting_date: FormControl<Date | null | undefined>,

		/** Required */
		contributions: FormControl<number | null | undefined>,

		/** Required */
		currency: FormControl<string | null | undefined>,

		/**
		 * Código IBAN sin espacios. El valor será not-provided cuando la entidad no lo proporcione
		 * Required
		 */
		linked_account: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		subtype: FormControl<PortfoliosSubtype | null | undefined>,

		/** Required */
		total_value: FormControl<number | null | undefined>,

		/**
		 * Identificador único asignado por Wealth Reader
		 * Required
		 */
		uuid: FormControl<string | null | undefined>,

		/** Required */
		weighted_return: FormControl<number | null | undefined>,

		/** Required */
		withholdings: FormControl<number | null | undefined>,

		/** Required */
		yield: FormControl<number | null | undefined>,
	}
	export function CreatePortfoliosFormGroup() {
		return new FormGroup<PortfoliosFormProperties>({
			annualized_volatility: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			contracting_date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			contributions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			linked_account: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subtype: new FormControl<PortfoliosSubtype | null | undefined>(undefined, [Validators.required]),
			total_value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weighted_return: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			withholdings: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			yield: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PortfoliosSubtype { funds = 'funds', stocks = 'stocks', 'pension-plans' = 'pension-plans' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Obtiene el listado de entidades soportadas
		 * Obtiene el listado de entidades soportadas y la información necesaria para dibujar el formulario de login de la entidad.
		 * Get entities
		 * @return {Array<Entities>} listado de entidades
		 */
		Entity_dataGet(): Observable<Array<Entities>> {
			return this.http.get<Array<Entities>>(this.baseUri + 'entities', {});
		}

		/**
		 * Listado de códigos de error
		 * Listado de códigos de error. Presta especial atención a que no todos los códigos de error deben recibir el mismo tratamiento por parte de tu aplicación. Ante un error de password incorrecto no debes reintentar la llamada con los mismos parámetros, pero ante un error que te indique que la entidad está en mantenimiento sí puedes reintentarlo. Pide una sesión técnica con nuestro equipo para resolver cualquier duda sobre la gestión de errores.
		 * Get error-codes
		 * @param {Entity_dataGetByLangLang} lang Idioma de la respuesta
		 * @return {Array<Error_codes>} Códigos de error junto con su descripción, posible motivo y cómo proceder
		 */
		Entity_dataGetByLang(lang: Entity_dataGetByLangLang | null | undefined): Observable<Array<Error_codes>> {
			return this.http.get<Array<Error_codes>>(this.baseUri + 'error-codes?lang=' + lang, {});
		}
	}

	export enum Entity_dataGetByLangLang { es = 'es', en = 'en' }

}

